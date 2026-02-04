'use client'

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  useMemo,
  type ReactNode,
} from 'react'
import type { CartItem, DeliveryAddress, CartContextType, CartState } from './types'

const CART_STORAGE_KEY = 'b2b-cart'
const ADDRESSES_STORAGE_KEY = 'b2b-addresses'

// Default payment methods
export const PAYMENT_METHODS = [
  {
    id: 'card',
    type: 'card' as const,
    label: 'Kartica',
    description: 'Plaćanje karticom (Visa, Mastercard)',
  },
  {
    id: 'bank_transfer',
    type: 'bank_transfer' as const,
    label: 'Uplata na račun',
    description: 'Plaćanje prijenosom na bankovni račun',
  },
  {
    id: 'cash_on_delivery',
    type: 'cash_on_delivery' as const,
    label: 'Pouzećem',
    description: 'Plaćanje prilikom preuzimanja',
  },
  {
    id: 'invoice',
    type: 'invoice' as const,
    label: 'Faktura',
    description: 'Plaćanje po fakturi (samo za poslovne korisnike)',
  },
]

const CartContext = createContext<CartContextType | undefined>(undefined)

function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
}

interface CartProviderProps {
  children: ReactNode
}

export function CartProvider({ children }: CartProviderProps) {
  const [items, setItems] = useState<CartItem[]>([])
  const [savedAddresses, setSavedAddresses] = useState<DeliveryAddress[]>([])
  const [selectedAddressId, setSelectedAddressId] = useState<string | null>(null)
  const [selectedPaymentMethodId, setSelectedPaymentMethodId] = useState<string | null>(null)
  const [note, setNote] = useState('')
  const [isHydrated, setIsHydrated] = useState(false)

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const storedCart = localStorage.getItem(CART_STORAGE_KEY)
      if (storedCart) {
        const parsed: CartState = JSON.parse(storedCart)
        setItems(parsed.items || [])
        setSelectedAddressId(parsed.selectedAddressId || null)
        setSelectedPaymentMethodId(parsed.selectedPaymentMethodId || null)
        setNote(parsed.note || '')
      }

      const storedAddresses = localStorage.getItem(ADDRESSES_STORAGE_KEY)
      if (storedAddresses) {
        setSavedAddresses(JSON.parse(storedAddresses))
      }
    } catch (error) {
      console.error('Failed to load cart from localStorage:', error)
    }
    setIsHydrated(true)
  }, [])

  // Save to localStorage on change
  useEffect(() => {
    if (!isHydrated) return
    try {
      const cartState: CartState = {
        items,
        selectedAddressId,
        selectedPaymentMethodId,
        savedAddresses,
        note,
      }
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartState))
    } catch (error) {
      console.error('Failed to save cart to localStorage:', error)
    }
  }, [items, selectedAddressId, selectedPaymentMethodId, note, isHydrated])

  // Save addresses separately
  useEffect(() => {
    if (!isHydrated) return
    try {
      localStorage.setItem(ADDRESSES_STORAGE_KEY, JSON.stringify(savedAddresses))
    } catch (error) {
      console.error('Failed to save addresses to localStorage:', error)
    }
  }, [savedAddresses, isHydrated])

  // Computed values
  const itemCount = useMemo(() => items.reduce((sum, item) => sum + item.kolicina, 0), [items])

  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + item.cijena * item.kolicina, 0),
    [items]
  )

  const discount = useMemo(
    () =>
      items.reduce((sum, item) => {
        if (item.staraCijena && item.staraCijena > item.cijena) {
          return sum + (item.staraCijena - item.cijena) * item.kolicina
        }
        return sum
      }, 0),
    [items]
  )

  // Free shipping over 100€
  const shipping = useMemo(() => (subtotal >= 100 ? 0 : 7.5), [subtotal])

  // PDV 17% (Bosnia)
  const tax = useMemo(() => subtotal * 0.17, [subtotal])

  const total = useMemo(() => subtotal + shipping, [subtotal, shipping])

  // Cart actions
  const addToCart = useCallback(
    (item: Omit<CartItem, 'kolicina'>, quantity = 1) => {
      setItems((prev) => {
        const existingIndex = prev.findIndex((i) => i.id === item.id)
        if (existingIndex > -1) {
          const updated = [...prev]
          const newQuantity = Math.min(
            updated[existingIndex].kolicina + quantity,
            item.maxZaliha
          )
          updated[existingIndex] = {
            ...updated[existingIndex],
            kolicina: newQuantity,
          }
          return updated
        }
        return [...prev, { ...item, kolicina: Math.min(quantity, item.maxZaliha) }]
      })
    },
    []
  )

  const removeFromCart = useCallback((id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }, [])

  const updateQuantity = useCallback((id: string, quantity: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, kolicina: Math.max(1, Math.min(quantity, item.maxZaliha)) }
          : item
      )
    )
  }, [])

  const clearCart = useCallback(() => {
    setItems([])
    setNote('')
  }, [])

  // Address actions
  const addAddress = useCallback((address: Omit<DeliveryAddress, 'id'>) => {
    const newAddress: DeliveryAddress = { ...address, id: generateId() }
    setSavedAddresses((prev) => {
      // If this is the first address or marked as default, update others
      if (address.isDefault || prev.length === 0) {
        const updated = prev.map((a) => ({ ...a, isDefault: false }))
        return [...updated, { ...newAddress, isDefault: true }]
      }
      return [...prev, newAddress]
    })
    // Auto-select if first address
    if (savedAddresses.length === 0) {
      setSelectedAddressId(newAddress.id)
    }
  }, [savedAddresses.length])

  const updateAddress = useCallback(
    (id: string, addressUpdate: Partial<DeliveryAddress>) => {
      setSavedAddresses((prev) =>
        prev.map((address) =>
          address.id === id ? { ...address, ...addressUpdate } : address
        )
      )
    },
    []
  )

  const removeAddress = useCallback(
    (id: string) => {
      setSavedAddresses((prev) => prev.filter((address) => address.id !== id))
      if (selectedAddressId === id) {
        setSelectedAddressId(null)
      }
    },
    [selectedAddressId]
  )

  const selectAddress = useCallback((id: string | null) => {
    setSelectedAddressId(id)
  }, [])

  const setDefaultAddress = useCallback((id: string) => {
    setSavedAddresses((prev) =>
      prev.map((address) => ({
        ...address,
        isDefault: address.id === id,
      }))
    )
  }, [])

  // Payment actions
  const selectPaymentMethod = useCallback((id: string | null) => {
    setSelectedPaymentMethodId(id)
  }, [])

  const value: CartContextType = {
    items,
    savedAddresses,
    selectedAddressId,
    selectedPaymentMethodId,
    note,
    itemCount,
    subtotal,
    discount,
    shipping,
    tax,
    total,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    addAddress,
    updateAddress,
    removeAddress,
    selectAddress,
    setDefaultAddress,
    selectPaymentMethod,
    setNote,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart(): CartContextType {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

/**
 * Cart Item - Stavka u košarici
 */
export interface CartItem {
  /** ID proizvoda */
  id: string
  /** Šifra proizvoda */
  sifra: string
  /** Naziv proizvoda */
  naziv: string
  /** URL slike proizvoda */
  image?: string
  /** Proizvođač */
  proizvodac: string
  /** Cijena po komadu */
  cijena: number
  /** Stara cijena (ako ima popust) */
  staraCijena?: number
  /** Valuta */
  valuta: string
  /** Količina u košarici */
  kolicina: number
  /** Jedinica mjere */
  jedinica: string
  /** Maksimalna dostupna zaliha */
  maxZaliha: number
}

/**
 * Adresa za dostavu
 */
export interface DeliveryAddress {
  id: string
  naziv: string
  ime: string
  prezime: string
  adresa: string
  grad: string
  postanskiBroj: string
  drzava: string
  telefon: string
  email?: string
  isDefault: boolean
}

/**
 * Metoda plaćanja
 */
export interface PaymentMethod {
  id: string
  type: 'card' | 'bank_transfer' | 'cash_on_delivery' | 'invoice'
  label: string
  description?: string
  icon?: string
  isDefault?: boolean
}

/**
 * Cart State
 */
export interface CartState {
  items: CartItem[]
  selectedAddressId: string | null
  selectedPaymentMethodId: string | null
  savedAddresses: DeliveryAddress[]
  note: string
}

/**
 * Cart Context
 */
export interface CartContextType {
  // State
  items: CartItem[]
  savedAddresses: DeliveryAddress[]
  selectedAddressId: string | null
  selectedPaymentMethodId: string | null
  note: string

  // Computed
  itemCount: number
  subtotal: number
  discount: number
  shipping: number
  tax: number
  total: number

  // Actions
  addToCart: (item: Omit<CartItem, 'kolicina'>, quantity?: number) => void
  removeFromCart: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void

  // Address actions
  addAddress: (address: Omit<DeliveryAddress, 'id'>) => void
  updateAddress: (id: string, address: Partial<DeliveryAddress>) => void
  removeAddress: (id: string) => void
  selectAddress: (id: string | null) => void
  setDefaultAddress: (id: string) => void

  // Payment actions
  selectPaymentMethod: (id: string | null) => void

  // Note
  setNote: (note: string) => void
}

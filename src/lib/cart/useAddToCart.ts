'use client'

import { useCallback } from 'react'
import { useCart } from './CartContext'
import type { CartItem } from './types'

export interface ProductForCart {
  id: string
  sifra: string
  naziv: string
  image?: string
  proizvodac: string
  cijena: number
  staraCijena?: number
  valuta?: string
  zaliha: number
  jedinica?: string
}

/**
 * Hook za dodavanje proizvoda u košaricu
 * Vraća funkciju koja se može koristiti kao onAddToCart callback
 */
export function useAddToCart() {
  const { addToCart } = useCart()

  const handleAddToCart = useCallback(
    (product: ProductForCart, quantity: number = 1) => {
      const cartItem: Omit<CartItem, 'kolicina'> = {
        id: product.id,
        sifra: product.sifra,
        naziv: product.naziv,
        image: product.image,
        proizvodac: product.proizvodac,
        cijena: product.cijena,
        staraCijena: product.staraCijena,
        valuta: product.valuta || '€',
        jedinica: product.jedinica || 'kom',
        maxZaliha: product.zaliha,
      }
      addToCart(cartItem, quantity)
    },
    [addToCart]
  )

  return handleAddToCart
}

/**
 * Hook za kreiranje onAddToCart handlera za specifičan proizvod
 * Koristi se kada imate listu proizvoda i želite svaki povezati s košaricom
 */
export function useProductCartHandler(product: ProductForCart) {
  const handleAddToCart = useAddToCart()

  return useCallback(
    (id: string, quantity: number) => {
      handleAddToCart(product, quantity)
    },
    [handleAddToCart, product]
  )
}

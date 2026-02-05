'use client'

import { useState } from 'react'
import Link from 'next/link'
import { cn } from '@/src/lib/utils'
import type { Product } from '@/src/types/product'

export interface ProductInfoProps {
  /** Proizvod */
  product: Product
  /** Callback za dodavanje u košaricu */
  onAddToCart?: (id: string, quantity: number) => void
  /** Callback za dodavanje u favorite */
  onAddToWishlist?: (id: string) => void
  /** Je li u favoritima */
  isInWishlist?: boolean
  /** Dodatne CSS klase */
  className?: string
}

export function ProductInfo({
  product,
  onAddToCart,
  onAddToWishlist,
  isInWishlist = false,
  className,
}: ProductInfoProps) {
  const [quantity, setQuantity] = useState(product.minKolicina || 1)
  const [isAdding, setIsAdding] = useState(false)

  const hasDiscount = product.staraCijena && product.staraCijena > product.cijena
  const discountPercent = hasDiscount
    ? Math.round(((product.staraCijena! - product.cijena) / product.staraCijena!) * 100)
    : 0
  const isInStock = product.zaliha > 0
  const korak = product.korakKolicine || 1

  const getStockStatus = () => {
    if (product.zaliha === 0) {
      return { text: 'Nema na stanju', color: 'text-[var(--color-error-600)]', bg: 'bg-[var(--color-error-50)]' }
    }
    if (product.zaliha < 10) {
      return { text: 'Ograničena zaliha', color: 'text-[var(--color-warning-600)]', bg: 'bg-[var(--color-warning-50)]' }
    }
    return { text: 'Na stanju', color: 'text-[var(--color-success-600)]', bg: 'bg-[var(--color-success-50)]' }
  }

  const stockStatus = getStockStatus()

  const handleAddToCart = async () => {
    if (!isInStock) return
    setIsAdding(true)
    await onAddToCart?.(product.id, quantity)
    setIsAdding(false)
  }

  const incrementQuantity = () => {
    setQuantity((prev) => Math.min(prev + korak, product.zaliha))
  }

  const decrementQuantity = () => {
    setQuantity((prev) => Math.max(prev - korak, product.minKolicina || 1))
  }

  return (
    <div className={cn('space-y-6', className)}>
      {/* Brand & SKU */}
      <div className="flex items-center justify-between">
        <Link
          href={`/brendovi/${product.brend.slug}`}
          className="text-sm font-medium text-[var(--color-primary-600)] hover:text-[var(--color-primary-700)] transition-colors"
        >
          {product.brend.naziv}
        </Link>
        <span className="text-sm text-[var(--color-text-tertiary)]">Šifra: {product.sifra}</span>
      </div>

      {/* Title */}
      <h1 className="text-2xl font-bold text-[var(--color-text-primary)] sm:text-3xl">
        {product.naziv}
      </h1>

      {/* Rating */}
      {product.prosjecnaOcjena !== undefined && product.brojRecenzija !== undefined && (
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <StarIcon
                key={star}
                className={cn(
                  'h-5 w-5',
                  star <= Math.round(product.prosjecnaOcjena!)
                    ? 'text-[var(--color-warning-400)] fill-current'
                    : 'text-[var(--color-neutral-300)]'
                )}
                filled={star <= Math.round(product.prosjecnaOcjena!)}
              />
            ))}
          </div>
          <span className="text-sm font-medium text-[var(--color-text-primary)]">
            {product.prosjecnaOcjena.toFixed(1)}
          </span>
          <span className="text-sm text-[var(--color-text-tertiary)]">
            ({product.brojRecenzija} recenzija)
          </span>
        </div>
      )}

      {/* Short Description */}
      {product.kratakOpis && (
        <p className="text-[var(--color-text-secondary)] leading-relaxed">
          {product.kratakOpis}
        </p>
      )}

      {/* Price Section */}
      <div className="space-y-2">
        <div className="flex items-baseline gap-3">
          <span className="text-3xl font-bold text-[var(--color-text-primary)]">
            {product.cijena.toFixed(2)} {product.valuta}
          </span>
          {hasDiscount && (
            <>
              <span className="text-lg text-[var(--color-text-tertiary)] line-through">
                {product.staraCijena!.toFixed(2)} {product.valuta}
              </span>
              <span className="rounded-[var(--radius-sm)] bg-[var(--color-primary-500)] px-2 py-1 text-sm font-semibold text-white">
                -{discountPercent}%
              </span>
            </>
          )}
        </div>
        <p className="text-sm text-[var(--color-text-tertiary)]">
          Cijena po {product.jedinica} (bez PDV-a)
        </p>
      </div>

      {/* Stock Status */}
      <div className="flex items-center gap-3">
        <span
          className={cn(
            'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-medium',
            stockStatus.bg,
            stockStatus.color
          )}
        >
          <span
            className={cn(
              'h-2 w-2 rounded-full',
              isInStock ? 'bg-current' : 'bg-[var(--color-error-500)]'
            )}
          />
          {stockStatus.text}
        </span>
        {isInStock && product.zaliha < 100 && (
          <span className="text-sm text-[var(--color-text-tertiary)]">
            ({product.zaliha} {product.jedinica} dostupno)
          </span>
        )}
      </div>

      {/* Quantity & Add to Cart */}
      <div className="flex flex-col gap-4 sm:flex-row">
        {/* Quantity Selector */}
        <div className="flex items-center">
          <span className="mr-3 text-sm text-[var(--color-text-secondary)]">Količina:</span>
          <div className="flex items-center rounded-[var(--radius-button)] border border-[var(--color-border-primary)]">
            <button
              onClick={decrementQuantity}
              disabled={!isInStock || quantity <= (product.minKolicina || 1)}
              className={cn(
                'flex h-11 w-11 items-center justify-center',
                'text-[var(--color-text-secondary)]',
                'hover:bg-[var(--color-bg-tertiary)]',
                'disabled:opacity-50 disabled:cursor-not-allowed',
                'transition-colors'
              )}
              aria-label="Smanji količinu"
            >
              <MinusIcon className="h-4 w-4" />
            </button>
            <input
              type="number"
              min={product.minKolicina || 1}
              max={product.zaliha}
              step={korak}
              value={quantity}
              onChange={(e) => {
                const val = Math.max(product.minKolicina || 1, Math.min(parseInt(e.target.value) || 1, product.zaliha))
                setQuantity(val)
              }}
              className={cn(
                'h-11 w-16 border-x border-[var(--color-border-primary)]',
                'bg-transparent text-center text-sm font-medium',
                'text-[var(--color-text-primary)]',
                'focus:outline-none',
                'disabled:opacity-50'
              )}
              disabled={!isInStock}
            />
            <button
              onClick={incrementQuantity}
              disabled={!isInStock || quantity >= product.zaliha}
              className={cn(
                'flex h-11 w-11 items-center justify-center',
                'text-[var(--color-text-secondary)]',
                'hover:bg-[var(--color-bg-tertiary)]',
                'disabled:opacity-50 disabled:cursor-not-allowed',
                'transition-colors'
              )}
              aria-label="Povećaj količinu"
            >
              <PlusIcon className="h-4 w-4" />
            </button>
          </div>
          {product.korakKolicine && product.korakKolicine > 1 && (
            <span className="ml-2 text-xs text-[var(--color-text-tertiary)]">
              (min. {product.minKolicina || 1}, korak {korak})
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          disabled={!isInStock || isAdding}
          className={cn(
            'flex-1 flex items-center justify-center gap-2',
            'h-11 px-6',
            'rounded-[var(--radius-button)]',
            'text-sm font-semibold',
            'transition-all',
            isInStock
              ? 'bg-[var(--color-primary-500)] text-white hover:bg-[var(--color-primary-hover)] active:scale-[0.98]'
              : 'bg-[var(--color-neutral-200)] text-[var(--color-text-tertiary)] cursor-not-allowed'
          )}
        >
          <CartIcon className="h-5 w-5" />
          {isAdding ? 'Dodajem...' : 'Dodaj u košaricu'}
        </button>

        {/* Wishlist Button */}
        {onAddToWishlist && (
          <button
            onClick={() => onAddToWishlist(product.id)}
            className={cn(
              'flex h-11 w-11 items-center justify-center',
              'rounded-[var(--radius-button)]',
              'border border-[var(--color-border-primary)]',
              'hover:border-[var(--color-primary-500)] hover:text-[var(--color-primary-500)]',
              'transition-colors',
              isInWishlist && 'border-[var(--color-primary-500)] text-[var(--color-primary-500)]'
            )}
            aria-label={isInWishlist ? 'Ukloni iz favorita' : 'Dodaj u favorite'}
          >
            <HeartIcon className="h-5 w-5" filled={isInWishlist} />
          </button>
        )}
      </div>

      {/* Additional Info */}
      <div className="space-y-2 border-t border-[var(--color-border-primary)] pt-4">
        {product.ean && (
          <div className="flex items-center gap-2 text-sm">
            <span className="text-[var(--color-text-tertiary)]">EAN:</span>
            <span className="text-[var(--color-text-secondary)]">{product.ean}</span>
          </div>
        )}
        {product.proizvodacSifra && (
          <div className="flex items-center gap-2 text-sm">
            <span className="text-[var(--color-text-tertiary)]">Šifra proizvođača:</span>
            <span className="text-[var(--color-text-secondary)]">{product.proizvodacSifra}</span>
          </div>
        )}
        <div className="flex items-center gap-2 text-sm">
          <span className="text-[var(--color-text-tertiary)]">Kategorija:</span>
          <Link
            href={`/kategorija/${product.kategorija.slug}`}
            className="text-[var(--color-primary-600)] hover:underline"
          >
            {product.kategorija.naziv}
          </Link>
        </div>
      </div>

      {/* Tags */}
      {product.tagovi && product.tagovi.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {product.tagovi.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-[var(--color-bg-tertiary)] px-3 py-1 text-xs text-[var(--color-text-secondary)]"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}

// Icons
function StarIcon({ className, filled }: { className?: string; filled?: boolean }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
  )
}

function HeartIcon({ className, filled }: { className?: string; filled?: boolean }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  )
}

function CartIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  )
}

function MinusIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
    </svg>
  )
}

function PlusIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
    </svg>
  )
}

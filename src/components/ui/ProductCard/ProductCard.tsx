'use client'

import { useState, type HTMLAttributes } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/src/lib/utils'

export interface ProductCardProps extends Omit<HTMLAttributes<HTMLDivElement>, 'id'> {
  /** ID proizvoda */
  id: string
  /** Šifra proizvoda */
  sifra: string
  /** Naziv proizvoda */
  naziv: string
  /** Opis proizvoda */
  opis?: string
  /** URL slike proizvoda */
  image?: string
  /** Proizvođač */
  proizvodac: string
  /** Trenutna cijena */
  cijena: number
  /** Stara cijena (ako ima popust) */
  staraCijena?: number
  /** Valuta */
  valuta?: string
  /** Stanje na zalihama */
  zaliha: number
  /** Jedinica mjere */
  jedinica?: string
  /** URL za stranicu proizvoda */
  href?: string
  /** Callback za dodavanje u košaricu */
  onAddToCart?: (id: string, quantity: number) => void
  /** Callback za dodavanje u favorite */
  onAddToWishlist?: (id: string) => void
  /** Je li u favoritima */
  isInWishlist?: boolean
  /** Prikaz varijanta */
  variant?: 'default' | 'compact'
}

export function ProductCard({
  id,
  sifra,
  naziv,
  opis,
  image,
  proizvodac,
  cijena,
  staraCijena,
  valuta = '€',
  zaliha,
  jedinica = 'kom',
  href,
  onAddToCart,
  onAddToWishlist,
  isInWishlist = false,
  variant = 'default',
  className,
  ...props
}: ProductCardProps) {
  const [quantity, setQuantity] = useState(1)
  const [isAdding, setIsAdding] = useState(false)

  const hasDiscount = staraCijena && staraCijena > cijena
  const discountPercent = hasDiscount ? Math.round(((staraCijena - cijena) / staraCijena) * 100) : 0
  const isInStock = zaliha > 0
  const productUrl = href || `/proizvod/${sifra}`

  const handleAddToCart = async () => {
    if (!isInStock) return
    setIsAdding(true)
    await onAddToCart?.(id, quantity)
    setIsAdding(false)
  }

  const getStockStatus = () => {
    if (zaliha === 0) return { text: 'Nema na stanju', color: 'text-[var(--color-error-600)]', bg: 'bg-[var(--color-error-50)]' }
    if (zaliha < 10) return { text: 'Ograničena zaliha', color: 'text-[var(--color-warning-600)]', bg: 'bg-[var(--color-warning-50)]' }
    return { text: 'Na stanju', color: 'text-[var(--color-success-600)]', bg: 'bg-[var(--color-success-50)]' }
  }

  const stockStatus = getStockStatus()

  if (variant === 'compact') {
    return (
      <div
        className={cn(
          'group flex gap-4 p-4',
          'bg-[var(--color-bg-elevated)]',
          'border border-[var(--color-border-primary)]',
          'rounded-[var(--radius-card)]',
          'hover:shadow-[var(--shadow-card-hover)]',
          'transition-[var(--transition-base)]',
          className
        )}
        {...props}
      >
        {/* Slika */}
        <Link href={productUrl} className="relative h-20 w-20 shrink-0 overflow-hidden rounded-[var(--radius-md)] bg-[var(--color-bg-tertiary)]">
          {image ? (
            <Image src={image} alt={naziv} fill className="object-contain p-2" />
          ) : (
            <div className="flex h-full items-center justify-center">
              <PlaceholderIcon className="h-8 w-8 text-[var(--color-text-tertiary)]" />
            </div>
          )}
        </Link>

        {/* Info */}
        <div className="flex flex-1 flex-col justify-between">
          <div>
            <p className="text-xs text-[var(--color-text-tertiary)]">{sifra}</p>
            <Link href={productUrl}>
              <h3 className="text-sm font-medium text-[var(--color-text-primary)] line-clamp-2 hover:text-[var(--color-primary-500)]">
                {naziv}
              </h3>
            </Link>
            <p className="text-xs text-[var(--color-text-secondary)]">{proizvodac}</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-bold text-[var(--color-text-primary)]">
                {cijena.toFixed(2)} {valuta}
              </span>
              {hasDiscount && (
                <span className="text-sm text-[var(--color-text-tertiary)] line-through">
                  {staraCijena.toFixed(2)} {valuta}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      className={cn(
        'group relative flex flex-col',
        'bg-[var(--color-bg-elevated)]',
        'border border-[var(--color-border-primary)]',
        'rounded-[var(--radius-card)]',
        'overflow-hidden',
        'hover:shadow-[var(--shadow-card-hover)]',
        'transition-[var(--transition-base)]',
        className
      )}
      {...props}
    >
      {/* Badges */}
      <div className="absolute left-3 top-3 z-10 flex flex-col gap-1">
        {hasDiscount && (
          <span className="rounded-[var(--radius-sm)] bg-[var(--color-primary-500)] px-2 py-0.5 text-xs font-semibold text-white">
            -{discountPercent}%
          </span>
        )}
      </div>

      {/* Wishlist button */}
      {onAddToWishlist && (
        <button
          onClick={() => onAddToWishlist(id)}
          className={cn(
            'absolute right-3 top-3 z-10',
            'h-8 w-8 rounded-full',
            'flex items-center justify-center',
            'bg-white/80 backdrop-blur-sm',
            'border border-[var(--color-border-primary)]',
            'hover:bg-[var(--color-primary-50)]',
            'transition-[var(--transition-fast)]',
            isInWishlist && 'text-[var(--color-primary-500)]'
          )}
          aria-label={isInWishlist ? 'Ukloni iz favorita' : 'Dodaj u favorite'}
        >
          <HeartIcon className="h-4 w-4" filled={isInWishlist} />
        </button>
      )}

      {/* Slika */}
      <Link href={productUrl} className="relative aspect-square overflow-hidden bg-[var(--color-bg-tertiary)]">
        {image ? (
          <Image
            src={image}
            alt={naziv}
            fill
            className="object-contain p-4 transition-transform group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <PlaceholderIcon className="h-16 w-16 text-[var(--color-text-tertiary)]" />
          </div>
        )}
      </Link>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4">
        {/* Meta */}
        <div className="mb-2 flex items-center justify-between">
          <span className="text-xs text-[var(--color-text-tertiary)]">{sifra}</span>
          <span className="text-xs font-medium text-[var(--color-text-secondary)]">{proizvodac}</span>
        </div>

        {/* Naziv */}
        <Link href={productUrl}>
          <h3 className="mb-2 text-sm font-medium text-[var(--color-text-primary)] line-clamp-2 min-h-[2.5rem] hover:text-[var(--color-primary-500)] transition-[var(--transition-fast)]">
            {naziv}
          </h3>
        </Link>

        {/* Stock status */}
        <div className="mb-3">
          <span className={cn('inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium', stockStatus.bg, stockStatus.color)}>
            <span className={cn('h-1.5 w-1.5 rounded-full', zaliha > 0 ? 'bg-current' : 'bg-[var(--color-error-500)]')} />
            {stockStatus.text}
          </span>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Cijena */}
        <div className="mb-3">
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-bold text-[var(--color-text-primary)]">
              {cijena.toFixed(2)} {valuta}
            </span>
            {hasDiscount && (
              <span className="text-sm text-[var(--color-text-tertiary)] line-through">
                {staraCijena.toFixed(2)} {valuta}
              </span>
            )}
          </div>
          <p className="text-xs text-[var(--color-text-tertiary)]">/{jedinica}</p>
        </div>

        {/* Quantity + Add to cart */}
        <div className="flex items-center gap-2">
          <div className="flex items-center rounded-[var(--radius-button)] border border-[var(--color-border-primary)]">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="flex h-9 w-9 items-center justify-center text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-tertiary)] transition-[var(--transition-fast)]"
              disabled={!isInStock}
              aria-label="Smanji količinu"
            >
              <MinusIcon className="h-4 w-4" />
            </button>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
              className="h-9 w-12 border-x border-[var(--color-border-primary)] bg-transparent text-center text-sm text-[var(--color-text-primary)] focus:outline-none"
              disabled={!isInStock}
            />
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="flex h-9 w-9 items-center justify-center text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-tertiary)] transition-[var(--transition-fast)]"
              disabled={!isInStock}
              aria-label="Povećaj količinu"
            >
              <PlusIcon className="h-4 w-4" />
            </button>
          </div>

          <button
            onClick={handleAddToCart}
            disabled={!isInStock || isAdding}
            className={cn(
              'flex-1 flex items-center justify-center gap-2',
              'h-9 px-4',
              'rounded-[var(--radius-button)]',
              'text-sm font-medium',
              'transition-[var(--transition-fast)]',
              isInStock
                ? 'bg-[var(--color-primary-500)] text-white hover:bg-[var(--color-primary-hover)]'
                : 'bg-[var(--color-neutral-200)] text-[var(--color-text-tertiary)] cursor-not-allowed'
            )}
          >
            <CartIcon className="h-4 w-4" />
            <span className="hidden sm:inline">{isAdding ? 'Dodajem...' : 'U košaricu'}</span>
          </button>
        </div>
      </div>
    </div>
  )
}

// Icons
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

function PlaceholderIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
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

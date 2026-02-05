'use client'

import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/src/lib/utils'
import type { RelatedProduct } from '@/src/types/product'

export interface RelatedProductsProps {
  /** Naslov sekcije */
  title: string
  /** Proizvodi */
  products: RelatedProduct[]
  /** Callback za dodavanje u košaricu */
  onAddToCart?: (id: string, quantity: number) => void
  /** Dodatne CSS klase */
  className?: string
  /** Varijanta */
  variant?: 'carousel' | 'grid'
}

export function RelatedProducts({
  title,
  products,
  onAddToCart,
  className,
  variant = 'carousel',
}: RelatedProductsProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  if (!products.length) {
    return null
  }

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 280
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  if (variant === 'grid') {
    return (
      <section className={cn('', className)}>
        <h2 className="mb-6 text-xl font-bold text-[var(--color-text-primary)]">{title}</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {products.map((product) => (
            <ProductMiniCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>
      </section>
    )
  }

  return (
    <section className={cn('', className)}>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-bold text-[var(--color-text-primary)]">{title}</h2>
        <div className="flex gap-2">
          <button
            onClick={() => scroll('left')}
            className={cn(
              'flex h-9 w-9 items-center justify-center',
              'rounded-full border border-[var(--color-border-primary)]',
              'hover:bg-[var(--color-bg-tertiary)]',
              'transition-colors'
            )}
            aria-label="Prethodni proizvodi"
          >
            <ChevronLeftIcon className="h-4 w-4 text-[var(--color-text-secondary)]" />
          </button>
          <button
            onClick={() => scroll('right')}
            className={cn(
              'flex h-9 w-9 items-center justify-center',
              'rounded-full border border-[var(--color-border-primary)]',
              'hover:bg-[var(--color-bg-tertiary)]',
              'transition-colors'
            )}
            aria-label="Sljedeći proizvodi"
          >
            <ChevronRightIcon className="h-4 w-4 text-[var(--color-text-secondary)]" />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {products.map((product) => (
          <div key={product.id} className="w-[220px] shrink-0 snap-start">
            <ProductMiniCard product={product} onAddToCart={onAddToCart} />
          </div>
        ))}
      </div>
    </section>
  )
}

// Mini Product Card for Related Products
interface ProductMiniCardProps {
  product: RelatedProduct
  onAddToCart?: (id: string, quantity: number) => void
}

function ProductMiniCard({ product, onAddToCart }: ProductMiniCardProps) {
  const hasDiscount = product.staraCijena && product.staraCijena > product.cijena
  const discountPercent = hasDiscount
    ? Math.round(((product.staraCijena! - product.cijena) / product.staraCijena!) * 100)
    : 0
  const isInStock = product.zaliha > 0

  return (
    <div
      className={cn(
        'group flex flex-col',
        'bg-[var(--color-bg-elevated)]',
        'border border-[var(--color-border-primary)]',
        'rounded-[var(--radius-card)]',
        'overflow-hidden',
        'hover:shadow-[var(--shadow-card-hover)]',
        'transition-all'
      )}
    >
      {/* Image */}
      <Link
        href={`/proizvod/${product.sifra}`}
        className="relative aspect-square overflow-hidden bg-[var(--color-bg-tertiary)]"
      >
        {product.image ? (
          <Image
            src={product.image}
            alt={product.naziv}
            fill
            className="object-contain p-3 transition-transform group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <PlaceholderIcon className="h-12 w-12 text-[var(--color-text-tertiary)]" />
          </div>
        )}
        {hasDiscount && (
          <span className="absolute left-2 top-2 rounded-[var(--radius-sm)] bg-[var(--color-primary-500)] px-1.5 py-0.5 text-xs font-semibold text-white">
            -{discountPercent}%
          </span>
        )}
      </Link>

      {/* Content */}
      <div className="flex flex-1 flex-col p-3">
        <span className="mb-1 text-xs text-[var(--color-text-tertiary)]">{product.proizvodac}</span>
        <Link href={`/proizvod/${product.sifra}`}>
          <h3 className="mb-2 text-sm font-medium text-[var(--color-text-primary)] line-clamp-2 min-h-[2.5rem] hover:text-[var(--color-primary-500)] transition-colors">
            {product.naziv}
          </h3>
        </Link>

        <div className="mt-auto">
          {/* Price */}
          <div className="mb-2">
            <div className="flex items-baseline gap-1">
              <span className="text-base font-bold text-[var(--color-text-primary)]">
                {product.cijena.toFixed(2)} €
              </span>
              {hasDiscount && (
                <span className="text-xs text-[var(--color-text-tertiary)] line-through">
                  {product.staraCijena!.toFixed(2)} €
                </span>
              )}
            </div>
          </div>

          {/* Add to Cart */}
          {onAddToCart && (
            <button
              onClick={() => onAddToCart(product.id, 1)}
              disabled={!isInStock}
              className={cn(
                'w-full flex items-center justify-center gap-1.5',
                'h-8 px-3',
                'rounded-[var(--radius-button)]',
                'text-xs font-medium',
                'transition-colors',
                isInStock
                  ? 'bg-[var(--color-primary-500)] text-white hover:bg-[var(--color-primary-hover)]'
                  : 'bg-[var(--color-neutral-200)] text-[var(--color-text-tertiary)] cursor-not-allowed'
              )}
            >
              <CartIcon className="h-3.5 w-3.5" />
              {isInStock ? 'U košaricu' : 'Nema'}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

// Icons
function ChevronLeftIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  )
}

function ChevronRightIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
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

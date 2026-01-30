'use client'

import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '@/src/lib/utils'
import { type ProductSearchResultType } from './SearchModal'

/* ============================================
   Product Search Result Props
   ============================================ */

export interface ProductSearchResultProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onSelect'> {
  /** Product data */
  product: ProductSearchResultType
  /** Search query for highlighting */
  query?: string
  /** Quick add to cart callback */
  onQuickAdd?: (productId: string) => void
  /** Click callback */
  onSelect?: (productId: string) => void
}

/* ============================================
   Product Search Result Component
   ============================================ */

/**
 * Mini product card for search results.
 * Shows thumbnail, name, SKU, manufacturer, price, stock status, and quick add button.
 *
 * @example
 * <ProductSearchResult
 *   product={product}
 *   query="kabel"
 *   onQuickAdd={(id) => addToCart(id)}
 * />
 */
export const ProductSearchResult = forwardRef<HTMLDivElement, ProductSearchResultProps>(
  ({ product, query, onQuickAdd, onSelect, className, ...props }, ref) => {
    const handleClick = () => {
      onSelect?.(product.id)
    }

    const handleQuickAdd = (e: React.MouseEvent) => {
      e.stopPropagation()
      onQuickAdd?.(product.id)
    }

    return (
      <div
        ref={ref}
        onClick={handleClick}
        className={cn(
          'flex items-center gap-[var(--spacing-4)]',
          'px-[var(--spacing-6)] py-[var(--spacing-3)]',
          'cursor-pointer',
          'transition-colors duration-[var(--duration-150)]',
          'hover:bg-[var(--color-bg-secondary)]',
          'focus-visible:outline-none focus-visible:bg-[var(--color-bg-secondary)]',
          className
        )}
        role="option"
        tabIndex={0}
        {...props}
      >
        {/* Product Image */}
        <div
          className={cn(
            'shrink-0',
            'w-12 h-12',
            'rounded-[var(--radius-md)]',
            'bg-[var(--color-bg-tertiary)]',
            'overflow-hidden',
            'flex items-center justify-center'
          )}
        >
          {product.image ? (
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain"
            />
          ) : (
            <ProductPlaceholderIcon className="w-6 h-6 text-[var(--color-text-tertiary)]" />
          )}
        </div>

        {/* Product Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-[var(--spacing-2)]">
            <div className="min-w-0">
              <p className="text-[var(--font-size-sm)] font-medium text-[var(--color-text-primary)] truncate">
                <HighlightText text={product.name} query={query} />
              </p>
              <div className="flex items-center gap-[var(--spacing-2)] mt-[var(--spacing-0-5)]">
                <span className="text-[var(--font-size-xs)] text-[var(--color-text-tertiary)]">
                  <HighlightText text={product.sku} query={query} />
                </span>
                <span className="text-[var(--font-size-xs)] text-[var(--color-text-tertiary)]">
                  •
                </span>
                <span className="text-[var(--font-size-xs)] text-[var(--color-text-tertiary)]">
                  {product.manufacturer}
                </span>
              </div>
            </div>

            {/* Price */}
            <span className="shrink-0 text-[var(--font-size-sm)] font-semibold text-[var(--color-primary-600)]">
              {formatPrice(product.price)} KM
            </span>
          </div>

          {/* Stock Status & Quick Add */}
          <div className="flex items-center justify-between mt-[var(--spacing-1-5)]">
            <StockBadge inStock={product.inStock} />

            {onQuickAdd && (
              <button
                type="button"
                onClick={handleQuickAdd}
                className={cn(
                  'inline-flex items-center gap-[var(--spacing-1)]',
                  'px-[var(--spacing-2)] py-[var(--spacing-1)]',
                  'rounded-[var(--radius-md)]',
                  'text-[var(--font-size-xs)] font-medium',
                  'bg-[var(--color-primary-500)] text-white',
                  'transition-colors duration-[var(--duration-150)]',
                  'hover:bg-[var(--color-primary-600)]',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-500)] focus-visible:ring-offset-2'
                )}
              >
                <CartIcon className="w-3.5 h-3.5" />
                <span>Dodaj</span>
              </button>
            )}
          </div>
        </div>
      </div>
    )
  }
)

ProductSearchResult.displayName = 'ProductSearchResult'

/* ============================================
   Helper Components
   ============================================ */

interface StockBadgeProps {
  inStock: boolean
}

function StockBadge({ inStock }: StockBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-[var(--spacing-1)]',
        'text-[var(--font-size-xs)] font-medium',
        inStock
          ? 'text-[var(--color-success-600)]'
          : 'text-[var(--color-text-tertiary)]'
      )}
    >
      <span
        className={cn(
          'w-1.5 h-1.5 rounded-full',
          inStock
            ? 'bg-[var(--color-success-500)]'
            : 'bg-[var(--color-neutral-300)]'
        )}
      />
      {inStock ? 'Na lageru' : 'Nije dostupno'}
    </span>
  )
}

interface HighlightTextProps {
  text: string
  query?: string
}

function HighlightText({ text, query }: HighlightTextProps) {
  if (!query || query.length < 2) {
    return <>{text}</>
  }

  const regex = new RegExp(`(${escapeRegExp(query)})`, 'gi')
  const parts = text.split(regex)

  return (
    <>
      {parts.map((part, index) =>
        regex.test(part) ? (
          <mark
            key={index}
            className="bg-[var(--color-warning-100)] text-inherit rounded-sm px-[var(--spacing-0-5)]"
          >
            {part}
          </mark>
        ) : (
          part
        )
      )}
    </>
  )
}

/* ============================================
   Helper Functions
   ============================================ */

function formatPrice(price: number): string {
  return price.toLocaleString('hr-HR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
}

function escapeRegExp(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

/* ============================================
   Icons
   ============================================ */

function ProductPlaceholderIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      role="img"
      aria-hidden="true"
    >
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  )
}

function CartIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      role="img"
      aria-hidden="true"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  )
}

'use client'

import Link from 'next/link'
import { cn } from '@/src/lib/utils'
import type { BrowsingHistoryPanelProps } from '../types'

/**
 * BrowsingHistoryPanel - Recent products panel for account dropdown
 *
 * Client Component - used within dropdown/hover panels
 *
 * Features:
 * - Compact product cards with images
 * - Price display
 * - Badge support (e.g., "Skoro rasprodato")
 * - "View all" link
 *
 * @example
 * ```tsx
 * <BrowsingHistoryPanel
 *   products={recentProducts}
 *   maxItems={4}
 *   viewAllHref="/account/history"
 * />
 * ```
 */
export function BrowsingHistoryPanel({
  products,
  maxItems = 6,
  viewAllHref = '/account/history',
  colorScheme = 'light',
  className,
  ...props
}: BrowsingHistoryPanelProps) {
  const displayProducts = products.slice(0, maxItems)

  if (displayProducts.length === 0) {
    return (
      <div
        className={cn(
          'p-4 text-center',
          colorScheme === 'dark'
            ? 'text-[var(--color-text-inverse)]'
            : 'text-[var(--color-text-secondary)]',
          className
        )}
        {...props}
      >
        <p className="text-sm">Nema nedavno pregledanih proizvoda</p>
      </div>
    )
  }

  // Color scheme styles
  const containerStyles = {
    light: 'bg-[var(--color-bg-primary)]',
    dark: 'bg-[var(--color-secondary-900)]',
  }

  const textStyles = {
    light: {
      title: 'text-[var(--color-text-primary)]',
      subtitle: 'text-[var(--color-text-secondary)]',
      price: 'text-[var(--color-primary-600)]',
      link: 'text-[var(--color-primary-500)] hover:text-[var(--color-primary-600)]',
    },
    dark: {
      title: 'text-[var(--color-text-inverse)]',
      subtitle: 'text-[var(--color-text-inverse)]/70',
      price: 'text-[var(--color-primary-400)]',
      link: 'text-[var(--color-primary-400)] hover:text-[var(--color-primary-300)]',
    },
  }

  const cardStyles = {
    light: 'bg-[var(--color-bg-secondary)] hover:bg-[var(--color-bg-tertiary)]',
    dark: 'bg-[var(--color-secondary-800)] hover:bg-[var(--color-secondary-700)]',
  }

  return (
    <div className={cn(containerStyles[colorScheme], className)} {...props}>
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--color-border-primary)]">
        <h4 className={cn('text-sm font-medium', textStyles[colorScheme].title)}>
          Nedavno pregledano
        </h4>
        {viewAllHref && (
          <Link
            href={viewAllHref}
            className={cn('text-xs font-medium', textStyles[colorScheme].link)}
          >
            Prikaži sve →
          </Link>
        )}
      </div>

      {/* Products Grid */}
      <div className="p-3 grid grid-cols-2 gap-2">
        {displayProducts.map((product) => (
          <Link
            key={product.id}
            href={product.href}
            className={cn(
              'group rounded-lg overflow-hidden transition-colors',
              cardStyles[colorScheme]
            )}
          >
            {/* Product Image */}
            <div className="relative aspect-square overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {product.badge && (
                <span className="absolute top-1 left-1 px-1.5 py-0.5 text-[10px] font-bold bg-[var(--color-warning-500)] text-white rounded">
                  {product.badge}
                </span>
              )}
            </div>

            {/* Product Info */}
            <div className="p-2">
              <p
                className={cn(
                  'text-xs font-medium line-clamp-2 mb-1',
                  textStyles[colorScheme].title
                )}
              >
                {product.name}
              </p>
              {product.brand && (
                <p className={cn('text-[10px] mb-1', textStyles[colorScheme].subtitle)}>
                  {product.brand}
                </p>
              )}
              <p className={cn('text-sm font-bold', textStyles[colorScheme].price)}>
                {product.formattedPrice || `${product.price.toFixed(2)} KM`}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* View All Button (mobile-friendly) */}
      {products.length > maxItems && viewAllHref && (
        <div className="px-4 pb-3">
          <Link
            href={viewAllHref}
            className={cn(
              'block w-full py-2 text-center text-sm font-medium rounded-lg',
              'border border-[var(--color-border-primary)]',
              'hover:bg-[var(--color-bg-secondary)] transition-colors',
              textStyles[colorScheme].link
            )}
          >
            Prikaži svih {products.length} proizvoda
          </Link>
        </div>
      )}
    </div>
  )
}

export default BrowsingHistoryPanel

'use client'

import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import { cn } from '@/src/lib/utils'
import X from '@/src/components/ui/icons/Line/General/X'
import type { MobileCategorySidebarProps, VisualCategory, TrendingProduct } from '../types'
import Star01 from '@/src/components/ui/icons/Line/Shapes/Star01'
import ShoppingCart01 from '@/src/components/ui/icons/Line/Finance & eCommerce/ShoppingCart01'

/**
 * MobileCategorySidebar - TEMU-style two-panel category navigation
 *
 * Client Component - manages category selection state
 *
 * Features:
 * - Two-panel layout: categories on left, subcategories on right
 * - Circular image subcategory cards
 * - HOT/NEW badges support
 * - Active category highlighting
 * - Body scroll lock when open
 * - Smooth transitions
 *
 * @example
 * ```tsx
 * <MobileCategorySidebar
 *   isOpen={menuOpen}
 *   onClose={() => setMenuOpen(false)}
 *   categories={visualCategories}
 * />
 * ```
 */
/**
 * Format number with K suffix for thousands
 */
function formatSoldCount(count: number): string {
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1).replace('.0', '')}K+`
  }
  return count.toString()
}

/**
 * Format price with currency
 */
function formatPrice(price: number, currency: string = 'KM'): string {
  const formatted = price.toFixed(2).replace('.', ',')
  return `${formatted} ${currency}`
}

/**
 * TrendingProductCard - Product card for mobile trending section
 */
function TrendingProductCard({
  product,
  colorScheme,
}: {
  product: TrendingProduct
  colorScheme: 'light' | 'dark'
}) {
  const styles = {
    light: {
      card: 'bg-[var(--color-bg-primary)]',
      text: 'text-[var(--color-text-primary)]',
      textSecondary: 'text-[var(--color-text-tertiary)]',
      price: 'text-[var(--color-text-primary)]',
      originalPrice: 'text-[var(--color-text-tertiary)]',
      rating: 'text-[var(--color-warning-500)]',
      badge: 'bg-[var(--color-bg-tertiary)] text-[var(--color-text-secondary)]',
      button: 'bg-[var(--color-primary-500)] text-white hover:bg-[var(--color-primary-600)]',
    },
    dark: {
      card: 'bg-[var(--color-secondary-800)]',
      text: 'text-[var(--color-text-inverse)]',
      textSecondary: 'text-[var(--color-text-inverse)]/60',
      price: 'text-[var(--color-text-inverse)]',
      originalPrice: 'text-[var(--color-text-inverse)]/50',
      rating: 'text-[var(--color-warning-400)]',
      badge: 'bg-[var(--color-secondary-700)] text-[var(--color-text-inverse)]/70',
      button: 'bg-[var(--color-primary-500)] text-white hover:bg-[var(--color-primary-400)]',
    },
  }

  const s = styles[colorScheme]

  return (
    <a
      href={product.href}
      className={cn('relative rounded-lg overflow-hidden block', s.card)}
    >
      {/* Product Image */}
      <div className="relative aspect-square">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />

        {/* Ad Badge */}
        {product.isAd && (
          <span
            className={cn(
              'absolute top-1 left-1 px-1.5 py-0.5 text-[10px] rounded',
              s.badge
            )}
          >
            Reklama
          </span>
        )}

        {/* Add to Cart Button */}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            // Handle add to cart
          }}
          className={cn(
            'absolute bottom-2 right-2 p-2 rounded-lg shadow-lg transition-colors',
            s.button
          )}
          aria-label="Dodaj u korpu"
        >
          <ShoppingCart01 className="w-4 h-4" />
        </button>
      </div>

      {/* Product Info */}
      <div className="p-2">
        {/* Rating */}
        {product.rating !== undefined && (
          <div className="flex items-center gap-1 mb-1">
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star01
                  key={star}
                  className={cn(
                    'w-3 h-3',
                    star <= Math.floor(product.rating!) ? s.rating : s.textSecondary
                  )}
                  style={{
                    fill: star <= Math.floor(product.rating!) ? 'currentColor' : 'none',
                  }}
                />
              ))}
            </div>
            {product.reviewCount && (
              <span className={cn('text-[10px]', s.textSecondary)}>
                {product.reviewCount}
              </span>
            )}
          </div>
        )}

        {/* Price */}
        <div className="flex items-baseline gap-1.5">
          <span className={cn('text-sm font-bold', s.price)}>
            {formatPrice(product.price, product.currency)}
          </span>
          {product.soldCount && (
            <span className={cn('text-[10px]', s.textSecondary)}>
              {formatSoldCount(product.soldCount)} prodato
            </span>
          )}
        </div>

        {/* Original Price */}
        {product.originalPrice && (
          <div className={cn('text-[10px] line-through', s.originalPrice)}>
            RRP {formatPrice(product.originalPrice, product.currency)}
          </div>
        )}
      </div>
    </a>
  )
}

export function MobileCategorySidebar({
  isOpen,
  onClose,
  categories,
  trendingProducts,
  colorScheme = 'light',
}: MobileCategorySidebarProps) {
  // Active category - first by default
  const [activeCategoryId, setActiveCategoryId] = useState<string>(categories[0]?.id || '')

  // Reset to first category when opening
  useEffect(() => {
    if (isOpen && categories.length > 0) {
      setActiveCategoryId(categories[0].id)
    }
  }, [isOpen, categories])

  // Lock body scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Handle escape key
  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  // Get active category data
  const activeCategory = useMemo(
    () => categories.find((c) => c.id === activeCategoryId) || categories[0],
    [categories, activeCategoryId]
  )

  // Get subcategories for active category
  const subcategories = useMemo(() => {
    if (!activeCategory?.children) return []
    return activeCategory.children
  }, [activeCategory])

  // Color scheme styles
  const styles = {
    light: {
      overlay: 'bg-black/50',
      container: 'bg-[var(--color-bg-primary)]',
      header: 'bg-[var(--color-bg-primary)] border-[var(--color-border-primary)]',
      headerText: 'text-[var(--color-text-primary)]',
      sidebar: 'bg-[var(--color-bg-secondary)]',
      sidebarItem: 'text-[var(--color-text-secondary)]',
      sidebarItemActive: 'bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] font-semibold',
      sidebarItemHover: 'hover:bg-[var(--color-bg-tertiary)]',
      content: 'bg-[var(--color-bg-primary)]',
      cardText: 'text-[var(--color-text-primary)]',
      cardTextSecondary: 'text-[var(--color-text-tertiary)]',
    },
    dark: {
      overlay: 'bg-black/60',
      container: 'bg-[var(--color-secondary-900)]',
      header: 'bg-[var(--color-secondary-900)] border-[var(--color-secondary-700)]',
      headerText: 'text-[var(--color-text-inverse)]',
      sidebar: 'bg-[var(--color-secondary-800)]',
      sidebarItem: 'text-[var(--color-text-inverse)]/70',
      sidebarItemActive: 'bg-[var(--color-secondary-900)] text-[var(--color-text-inverse)] font-semibold',
      sidebarItemHover: 'hover:bg-[var(--color-secondary-700)]',
      content: 'bg-[var(--color-secondary-900)]',
      cardText: 'text-[var(--color-text-inverse)]',
      cardTextSecondary: 'text-[var(--color-text-inverse)]/50',
    },
  }

  const currentStyles = styles[colorScheme]

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn('fixed inset-0 z-50 transition-opacity', currentStyles.overlay)}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container - Full Screen */}
      <div
        className={cn(
          'fixed inset-0 z-50 flex flex-col',
          currentStyles.container
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Kategorije"
      >
        {/* Header */}
        <header
          className={cn(
            'flex items-center justify-between px-4 py-3 border-b flex-shrink-0',
            currentStyles.header
          )}
        >
          <h2 className={cn('text-lg font-semibold', currentStyles.headerText)}>
            Kupujte po kategorijama
          </h2>
          <button
            type="button"
            onClick={onClose}
            className={cn(
              'p-2 -mr-2 rounded-lg transition-colors',
              currentStyles.headerText,
              'hover:bg-black/5 active:bg-black/10'
            )}
            aria-label="Zatvori"
          >
            <X className="w-5 h-5" />
          </button>
        </header>

        {/* Two-Panel Layout */}
        <div className="flex flex-1 overflow-hidden">
          {/* Left Panel - Main Categories */}
          <nav
            className={cn(
              'w-[120px] flex-shrink-0 overflow-y-auto',
              currentStyles.sidebar
            )}
          >
            <ul className="py-2">
              {categories.map((category) => (
                <li key={category.id}>
                  <button
                    type="button"
                    onClick={() => setActiveCategoryId(category.id)}
                    className={cn(
                      'w-full px-3 py-3 text-left text-sm transition-colors',
                      'border-l-3',
                      activeCategoryId === category.id
                        ? cn(
                            currentStyles.sidebarItemActive,
                            'border-l-[var(--color-primary-500)]'
                          )
                        : cn(
                            currentStyles.sidebarItem,
                            currentStyles.sidebarItemHover,
                            'border-l-transparent'
                          )
                    )}
                  >
                    <span className="line-clamp-2 leading-tight">{category.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Panel - Subcategories Grid */}
          <div className={cn('flex-1 overflow-y-auto p-4', currentStyles.content)}>
            {subcategories.length > 0 ? (
              <div className="grid grid-cols-3 gap-4">
                {subcategories.map((subcat) => (
                  <Link
                    key={subcat.id}
                    href={`/kategorija/${subcat.slug}`}
                    onClick={onClose}
                    className="flex flex-col items-center text-center group"
                  >
                    {/* Circular Image */}
                    <div className="relative mb-2">
                      <div
                        className={cn(
                          'w-20 h-20 rounded-full overflow-hidden',
                          'bg-[var(--color-bg-secondary)]',
                          'ring-2 ring-transparent group-hover:ring-[var(--color-primary-500)]',
                          'transition-all duration-200'
                        )}
                      >
                        {subcat.image ? (
                          <img
                            src={subcat.image}
                            alt={subcat.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-2xl">
                            📦
                          </div>
                        )}
                      </div>

                      {/* HOT/NEW Badge */}
                      {subcat.badge && (
                        <span
                          className={cn(
                            'absolute -top-1 -right-1 px-1.5 py-0.5',
                            'text-[10px] font-bold uppercase rounded',
                            'shadow-sm',
                            subcat.badge.variant === 'hot' && 'bg-[var(--color-warning-500)] text-white',
                            subcat.badge.variant === 'new' && 'bg-[var(--color-success-500)] text-white',
                            subcat.badge.variant === 'sale' && 'bg-[var(--color-error-500)] text-white',
                            subcat.badge.variant === 'trending' && 'bg-[var(--color-primary-500)] text-white',
                            subcat.badge.variant === 'limited' && 'bg-[var(--color-secondary-700)] text-white'
                          )}
                        >
                          {subcat.badge.text}
                        </span>
                      )}
                    </div>

                    {/* Category Name */}
                    <span
                      className={cn(
                        'text-xs leading-tight line-clamp-2',
                        currentStyles.cardText
                      )}
                    >
                      {subcat.name}
                    </span>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="flex items-center justify-center h-full">
                <p className={cn('text-sm', currentStyles.cardTextSecondary)}>
                  Nema podkategorija
                </p>
              </div>
            )}

            {/* View All Link */}
            {activeCategory && subcategories.length > 0 && (
              <div className="mt-6 pt-4 border-t border-[var(--color-border-primary)]">
                <Link
                  href={`/kategorija/${activeCategory.slug}`}
                  onClick={onClose}
                  className="flex items-center justify-center gap-2 py-3 text-sm font-medium text-[var(--color-primary-500)] hover:text-[var(--color-primary-600)] transition-colors"
                >
                  Pogledaj sve u &quot;{activeCategory.name}&quot;
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            )}

            {/* Trending Products Section */}
            {trendingProducts && trendingProducts.length > 0 && (
              <div className="mt-6 pt-4 border-t border-[var(--color-border-primary)]">
                {/* Section Header */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className={cn('text-sm font-semibold', currentStyles.cardText)}>
                    Stavke u trendu
                  </h3>
                  <button
                    type="button"
                    className={cn(
                      'text-xs flex items-center gap-1',
                      currentStyles.cardTextSecondary
                    )}
                  >
                    Poredaj po
                    <span aria-hidden="true">▼</span>
                  </button>
                </div>

                {/* Products Grid - 2 columns */}
                <div className="grid grid-cols-2 gap-3">
                  {trendingProducts.map((product) => (
                    <TrendingProductCard
                      key={product.id}
                      product={product}
                      colorScheme={colorScheme}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default MobileCategorySidebar

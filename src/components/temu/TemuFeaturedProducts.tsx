'use client'

import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/src/lib/utils'
import ChevronRight from '@/src/components/ui/icons/Line/Arrows/ChevronRight'
import ChevronLeft from '@/src/components/ui/icons/Line/Arrows/ChevronLeft'

export interface FeaturedProduct {
  id: string
  name: string
  image: string
  price: number
  originalPrice?: number
  currency?: string
  soldCount?: number
  href: string
  isAd?: boolean
}

export interface TemuFeaturedProductsProps {
  title?: string
  products: FeaturedProduct[]
  viewAllHref?: string
  className?: string
}

/**
 * TemuFeaturedProducts - Horizontalni scroll proizvoda u Temu stilu
 *
 * "Najpoželjniji artikli" sekcija sa scroll navigacijom
 */
export function TemuFeaturedProducts({
  title = 'Najpoželjniji artikli',
  products,
  viewAllHref = '/proizvodi',
  className,
}: TemuFeaturedProductsProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  const formatPrice = (price: number, currency: string = 'KM') => {
    return `${price.toFixed(2)} ${currency}`
  }

  const formatSoldCount = (count: number) => {
    if (count >= 1000) {
      return `${Math.floor(count / 1000)}K+ prodato`
    }
    return `${count} prodato`
  }

  return (
    <div className={cn('w-full bg-[var(--color-bg-primary)] py-4', className)}>
      <div className="max-w-[var(--container-max-width)] mx-auto px-[var(--container-padding)]">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <Link
            href={viewAllHref}
            className="flex items-center gap-1 text-[var(--color-text-primary)] font-semibold text-base hover:text-[var(--color-primary-500)] transition-colors"
          >
            {title}
            <ChevronRight className="w-5 h-5" />
          </Link>

          {/* Navigation arrows - desktop only */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              className="p-1.5 rounded-full bg-[var(--color-bg-secondary)] hover:bg-[var(--color-bg-tertiary)] transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5 text-[var(--color-text-secondary)]" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-1.5 rounded-full bg-[var(--color-bg-secondary)] hover:bg-[var(--color-bg-tertiary)] transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5 text-[var(--color-text-secondary)]" />
            </button>
          </div>
        </div>

        {/* Products scroll container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-3 overflow-x-auto scrollbar-hide pb-2 -mx-[var(--container-padding)] px-[var(--container-padding)]"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {products.map((product) => (
            <Link
              key={product.id}
              href={product.href}
              className="flex-shrink-0 w-[140px] sm:w-[160px] group"
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden bg-[var(--color-bg-secondary)] mb-2">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Ad badge */}
                {product.isAd && (
                  <div className="absolute top-1 right-1 bg-black/60 text-white text-[10px] px-1.5 py-0.5">
                    Reklama
                  </div>
                )}
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-1 mb-0.5">
                <span className="text-[var(--color-primary-500)] font-bold text-sm">
                  {formatPrice(product.price, product.currency)}
                </span>
                {product.soldCount && (
                  <span className="text-[var(--color-text-tertiary)] text-xs">
                    {formatSoldCount(product.soldCount)}
                  </span>
                )}
              </div>

              {/* Original price */}
              {product.originalPrice && (
                <div className="flex items-center gap-1">
                  <span className="text-[var(--color-text-tertiary)] text-xs">RRP</span>
                  <span className="text-[var(--color-text-tertiary)] text-xs line-through">
                    {formatPrice(product.originalPrice, product.currency)}
                  </span>
                  <span className="text-[var(--color-text-tertiary)] text-xs">?</span>
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TemuFeaturedProducts

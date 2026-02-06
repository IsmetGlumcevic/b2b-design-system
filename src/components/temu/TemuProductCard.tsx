'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/src/lib/utils'
import Plus from '@/src/components/ui/icons/Line/General/Plus'
import Flame from '@/src/components/ui/icons/Line/Weather/Flame'

export interface TemuProduct {
  id: string
  name: string
  image: string
  price: number
  originalPrice?: number
  currency?: string
  rating?: number
  reviewCount?: number
  soldCount?: number
  href: string
  isAd?: boolean
  isBestseller?: boolean
  bestsellerLabel?: string
  discountEndTime?: Date
  additionalDiscount?: number
}

export interface TemuProductCardProps {
  product: TemuProduct
  onAddToCart?: (productId: string) => void
  className?: string
}

/**
 * TemuProductCard - Product kartica u Temu stilu
 *
 * Prikazuje proizvod sa slikom, rating zvjezdicama, countdown timerom,
 * "Najprodavaniji artikal" badge-om, cijenom i add to cart dugmetom
 */
export function TemuProductCard({
  product,
  onAddToCart,
  className,
}: TemuProductCardProps) {
  const [timeLeft, setTimeLeft] = useState<string>('')

  // Countdown timer
  useEffect(() => {
    if (!product.discountEndTime) return

    const updateTimer = () => {
      const now = new Date().getTime()
      const end = product.discountEndTime!.getTime()
      const diff = end - now

      if (diff <= 0) {
        setTimeLeft('00:00:00')
        return
      }

      const hours = Math.floor(diff / (1000 * 60 * 60))
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((diff % (1000 * 60)) / 1000)

      setTimeLeft(
        `${hours.toString().padStart(2, '0')}:${minutes
          .toString()
          .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
      )
    }

    updateTimer()
    const interval = setInterval(updateTimer, 1000)

    return () => clearInterval(interval)
  }, [product.discountEndTime])

  const formatPrice = (price: number, currency: string = 'KM') => {
    const [whole, decimal] = price.toFixed(2).split('.')
    return { whole, decimal, currency }
  }

  const formatSoldCount = (count: number) => {
    if (count >= 1000) {
      return `${Math.floor(count / 1000)}K+ prodato`
    }
    return `${count} prodato`
  }

  const renderStars = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 >= 0.5

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <span key={i} className="text-yellow-500 text-sm">
            ★
          </span>
        )
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <span key={i} className="text-yellow-500 text-sm">
            ★
          </span>
        )
      } else {
        stars.push(
          <span key={i} className="text-gray-300 text-sm">
            ★
          </span>
        )
      }
    }

    return stars
  }

  const price = formatPrice(product.price, product.currency)
  const originalPrice = product.originalPrice
    ? formatPrice(product.originalPrice, product.currency)
    : null

  return (
    <div
      className={cn(
        'bg-[var(--color-bg-primary)] overflow-hidden',
        className
      )}
    >
      {/* Image container */}
      <Link href={product.href} className="block relative aspect-square">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />

        {/* Ad badge */}
        {product.isAd && (
          <div className="absolute top-2 right-2 bg-black/60 text-white text-[10px] px-1.5 py-0.5">
            Reklama
          </div>
        )}

        {/* Video indicator - optional play icon */}
        <div className="absolute bottom-2 left-2 w-6 h-6 bg-black/60 flex items-center justify-center">
          <svg
            className="w-3 h-3 text-white ml-0.5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </Link>

      {/* Content */}
      <div className="p-2">
        {/* Title */}
        <Link href={product.href}>
          <h3 className="text-[var(--color-text-primary)] text-sm font-medium line-clamp-2 mb-1.5 hover:text-[var(--color-primary-500)] transition-colors">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        {product.rating !== undefined && (
          <div className="flex items-center gap-1 mb-1.5">
            <div className="flex">{renderStars(product.rating)}</div>
            {product.reviewCount !== undefined && (
              <span className="text-[var(--color-text-tertiary)] text-xs">
                {product.reviewCount.toLocaleString()}
              </span>
            )}
          </div>
        )}

        {/* Additional discount badge with countdown */}
        {product.additionalDiscount && product.discountEndTime && (
          <div className="flex items-center gap-1 mb-1.5">
            <div className="flex items-center gap-1 bg-[var(--color-success-50)] text-[var(--color-success-600)] text-xs px-1.5 py-0.5">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Dodatno -{product.additionalDiscount.toFixed(2)} {product.currency || 'KM'}</span>
            </div>
            <span className="bg-[var(--color-warning-100)] text-[var(--color-warning-700)] text-xs px-1.5 py-0.5 font-medium">
              {timeLeft}
            </span>
          </div>
        )}

        {/* Bestseller badge */}
        {product.isBestseller && (
          <div className="flex items-center gap-1 text-[var(--color-primary-500)] text-xs mb-1.5">
            <Flame className="w-3.5 h-3.5" />
            <span className="font-medium">
              {product.bestsellerLabel || 'Najprodavaniji artikal'}
            </span>
          </div>
        )}

        {/* Price row */}
        <div className="flex items-end justify-between">
          <div>
            {/* Main price */}
            <div className="flex items-baseline">
              <span className="text-[var(--color-text-primary)] font-bold text-lg leading-none">
                {price.whole}
              </span>
              <span className="text-[var(--color-text-primary)] font-bold text-sm leading-none">
                ,{price.decimal} {price.currency}
              </span>
              {/* Sold count */}
              {product.soldCount && (
                <span className="ml-1.5 text-[var(--color-primary-500)] text-xs flex items-center gap-0.5">
                  <Flame className="w-3 h-3" />
                  {formatSoldCount(product.soldCount)}
                </span>
              )}
            </div>

            {/* Original price */}
            {originalPrice && (
              <div className="flex items-center gap-1 mt-0.5">
                <span className="text-[var(--color-text-tertiary)] text-xs">RRP</span>
                <span className="text-[var(--color-text-tertiary)] text-xs line-through">
                  {originalPrice.whole},{originalPrice.decimal} {originalPrice.currency}
                </span>
                <button className="text-[var(--color-text-tertiary)] text-xs hover:text-[var(--color-text-secondary)]">
                  ?
                </button>
              </div>
            )}
          </div>

          {/* Add to cart button */}
          <button
            onClick={(e) => {
              e.preventDefault()
              onAddToCart?.(product.id)
            }}
            className="w-9 h-9 flex items-center justify-center border-2 border-[var(--color-text-primary)] text-[var(--color-text-primary)] hover:bg-[var(--color-text-primary)] hover:text-white transition-colors"
            aria-label="Dodaj u korpu"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default TemuProductCard

'use client'

import { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/src/lib/utils'
import type { ProductImage } from '@/src/types/product'

export interface ProductGalleryProps {
  /** Slike proizvoda */
  images: ProductImage[]
  /** Naziv proizvoda za alt tekst */
  productName: string
  /** Dodatne CSS klase */
  className?: string
}

export function ProductGallery({ images, productName, className }: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [isZoomed, setIsZoomed] = useState(false)

  const currentImage = images[selectedIndex] || images[0]

  if (!images.length) {
    return (
      <div className={cn('aspect-square bg-[var(--color-bg-tertiary)] rounded-[var(--radius-lg)] flex items-center justify-center', className)}>
        <PlaceholderIcon className="h-24 w-24 text-[var(--color-text-tertiary)]" />
      </div>
    )
  }

  return (
    <div className={cn('flex flex-col gap-4', className)}>
      {/* Main Image */}
      <div className="relative">
        <button
          onClick={() => setIsZoomed(true)}
          className={cn(
            'relative aspect-square w-full overflow-hidden',
            'bg-[var(--color-bg-primary)]',
            'border border-[var(--color-border-primary)]',
            'rounded-[var(--radius-lg)]',
            'cursor-zoom-in',
            'group'
          )}
        >
          <Image
            src={currentImage.src}
            alt={currentImage.alt || productName}
            fill
            className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
            priority
          />
          <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <ZoomIcon className="h-5 w-5 text-[var(--color-text-secondary)]" />
          </div>
        </button>

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={() => setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
              className={cn(
                'absolute left-2 top-1/2 -translate-y-1/2',
                'h-10 w-10 rounded-full',
                'bg-white/80 backdrop-blur-sm',
                'border border-[var(--color-border-primary)]',
                'flex items-center justify-center',
                'hover:bg-white',
                'transition-all'
              )}
              aria-label="Prethodna slika"
            >
              <ChevronLeftIcon className="h-5 w-5 text-[var(--color-text-primary)]" />
            </button>
            <button
              onClick={() => setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
              className={cn(
                'absolute right-2 top-1/2 -translate-y-1/2',
                'h-10 w-10 rounded-full',
                'bg-white/80 backdrop-blur-sm',
                'border border-[var(--color-border-primary)]',
                'flex items-center justify-center',
                'hover:bg-white',
                'transition-all'
              )}
              aria-label="Sljedeća slika"
            >
              <ChevronRightIcon className="h-5 w-5 text-[var(--color-text-primary)]" />
            </button>
          </>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={image.id}
              onClick={() => setSelectedIndex(index)}
              className={cn(
                'relative h-20 w-20 shrink-0 overflow-hidden',
                'rounded-[var(--radius-md)]',
                'border-2 transition-all',
                index === selectedIndex
                  ? 'border-[var(--color-primary-500)]'
                  : 'border-[var(--color-border-primary)] hover:border-[var(--color-border-hover)]'
              )}
            >
              <Image
                src={image.src}
                alt={image.alt || `${productName} - slika ${index + 1}`}
                fill
                className="object-contain p-1"
              />
            </button>
          ))}
        </div>
      )}

      {/* Lightbox/Zoom Modal */}
      {isZoomed && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={() => setIsZoomed(false)}
        >
          <button
            onClick={() => setIsZoomed(false)}
            className="absolute top-4 right-4 h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            aria-label="Zatvori"
          >
            <CloseIcon className="h-6 w-6 text-white" />
          </button>

          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Prethodna slika"
              >
                <ChevronLeftIcon className="h-6 w-6 text-white" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Sljedeća slika"
              >
                <ChevronRightIcon className="h-6 w-6 text-white" />
              </button>
            </>
          )}

          <div className="relative h-[80vh] w-[80vw]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={currentImage.src}
              alt={currentImage.alt || productName}
              fill
              className="object-contain"
            />
          </div>

          {/* Image counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm">
            {selectedIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </div>
  )
}

// Icons
function PlaceholderIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
    </svg>
  )
}

function ZoomIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
    </svg>
  )
}

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

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

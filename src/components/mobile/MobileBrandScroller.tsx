'use client'

import { cn } from '@/src/lib/utils'

export interface MobileBrand {
  id: string
  name: string
  logoUrl?: string
  productCount?: number
}

interface MobileBrandScrollerProps {
  brands: MobileBrand[]
  onBrandClick?: (brand: MobileBrand) => void
  title?: string
  className?: string
}

export function MobileBrandScroller({
  brands,
  onBrandClick,
  title,
  className,
}: MobileBrandScrollerProps) {
  return (
    <div className={cn('py-4', className)}>
      {title && (
        <div className="mb-3 flex items-center justify-between px-4">
          <h3 className="text-base font-semibold text-neutral-900">{title}</h3>
          <button className="text-sm font-medium text-[var(--color-primary-500)]">
            Sve
          </button>
        </div>
      )}
      <div className="flex gap-3 overflow-x-auto px-4 pb-2 scrollbar-hide">
        {brands.map((brand) => (
          <button
            key={brand.id}
            onClick={() => onBrandClick?.(brand)}
            className="flex shrink-0 flex-col items-center gap-2 transition-transform active:scale-95"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-neutral-200 bg-white p-2">
              {brand.logoUrl ? (
                <img
                  src={brand.logoUrl}
                  alt={brand.name}
                  className="max-h-full max-w-full object-contain"
                />
              ) : (
                <span className="text-xs font-bold text-neutral-400">
                  {brand.name.slice(0, 3).toUpperCase()}
                </span>
              )}
            </div>
            <span className="text-[10px] font-medium text-neutral-600">
              {brand.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}

// Sample brands
export const sampleMobileBrands: MobileBrand[] = [
  { id: '1', name: 'ABB', productCount: 1250 },
  { id: '2', name: 'Legrand', productCount: 2100 },
  { id: '3', name: 'Schneider', productCount: 1800 },
  { id: '4', name: 'Philips', productCount: 950 },
  { id: '5', name: 'Hager', productCount: 780 },
  { id: '6', name: 'OBO', productCount: 620 },
  { id: '7', name: 'ETI', productCount: 450 },
  { id: '8', name: 'Gewiss', productCount: 380 },
]

export default MobileBrandScroller

'use client'

import { cn } from '@/src/lib/utils'
import { type MobileBrand } from './MobileBrandScroller'

interface MobileBrandGridProps {
  brands: MobileBrand[]
  onBrandClick?: (brand: MobileBrand) => void
  className?: string
  variant?: 'default' | 'compact' | 'large'
  columns?: 2 | 3 | 4
}

export function MobileBrandGrid({
  brands,
  onBrandClick,
  className,
  variant = 'default',
  columns = 3,
}: MobileBrandGridProps) {
  const gridCols = {
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
  }

  const itemStyles = {
    default: 'p-3 gap-2',
    compact: 'p-2 gap-1.5',
    large: 'p-4 gap-3',
  }

  const logoSizes = {
    default: 'h-14 w-14',
    compact: 'h-10 w-10',
    large: 'h-20 w-20',
  }

  const textSizes = {
    default: 'text-xs',
    compact: 'text-[10px]',
    large: 'text-sm',
  }

  return (
    <div className={cn('grid gap-3 px-4', gridCols[columns], className)}>
      {brands.map((brand) => (
        <button
          key={brand.id}
          onClick={() => onBrandClick?.(brand)}
          className={cn(
            'flex flex-col items-center rounded-xl bg-white shadow-sm transition-all active:scale-95 active:bg-neutral-50',
            itemStyles[variant]
          )}
        >
          <div
            className={cn(
              'flex items-center justify-center rounded-xl border border-neutral-100 bg-white p-2',
              logoSizes[variant]
            )}
          >
            {brand.logoUrl ? (
              <img
                src={brand.logoUrl}
                alt={brand.name}
                className="max-h-full max-w-full object-contain"
              />
            ) : (
              <span className="text-sm font-bold text-neutral-400">
                {brand.name.slice(0, 3).toUpperCase()}
              </span>
            )}
          </div>
          <span
            className={cn(
              'text-center font-medium text-neutral-700 line-clamp-2',
              textSizes[variant]
            )}
          >
            {brand.name}
          </span>
          {brand.productCount && variant !== 'compact' && (
            <span className="text-[10px] text-neutral-400">
              {brand.productCount.toLocaleString('hr-HR')} artikala
            </span>
          )}
        </button>
      ))}
    </div>
  )
}

// Extended sample brands with more data
export const extendedMobileBrands: MobileBrand[] = [
  { id: '1', name: 'ABB', productCount: 1250 },
  { id: '2', name: 'Legrand', productCount: 2100 },
  { id: '3', name: 'Schneider', productCount: 1800 },
  { id: '4', name: 'Philips', productCount: 950 },
  { id: '5', name: 'Hager', productCount: 780 },
  { id: '6', name: 'OBO', productCount: 620 },
  { id: '7', name: 'ETI', productCount: 450 },
  { id: '8', name: 'Gewiss', productCount: 380 },
  { id: '9', name: 'Finder', productCount: 520 },
  { id: '10', name: 'Schrack', productCount: 890 },
  { id: '11', name: 'Wago', productCount: 1100 },
  { id: '12', name: 'Phoenix', productCount: 670 },
  { id: '13', name: 'Siemens', productCount: 1450 },
  { id: '14', name: 'Eaton', productCount: 980 },
  { id: '15', name: 'Rittal', productCount: 340 },
  { id: '16', name: 'Elko', productCount: 280 },
  { id: '17', name: 'Mean Well', productCount: 420 },
  { id: '18', name: 'Helukabel', productCount: 560 },
]

export default MobileBrandGrid

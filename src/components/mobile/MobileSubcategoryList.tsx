'use client'

import { cn } from '@/src/lib/utils'

export interface MobileSubcategory {
  id: string
  name: string
  productCount?: number
  icon?: React.ReactNode
  imageUrl?: string
}

interface MobileSubcategoryListProps {
  subcategories: MobileSubcategory[]
  onSubcategoryClick?: (subcategory: MobileSubcategory) => void
  className?: string
  variant?: 'list' | 'grid' | 'card'
  showProductCount?: boolean
}

const ChevronRightIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 18l6-6-6-6" />
  </svg>
)

export function MobileSubcategoryList({
  subcategories,
  onSubcategoryClick,
  className,
  variant = 'list',
  showProductCount = true,
}: MobileSubcategoryListProps) {
  if (variant === 'grid') {
    return (
      <div className={cn('grid grid-cols-2 gap-3 px-4', className)}>
        {subcategories.map((subcategory) => (
          <button
            key={subcategory.id}
            onClick={() => onSubcategoryClick?.(subcategory)}
            className="flex flex-col items-center gap-2 rounded-xl bg-white p-4 shadow-sm transition-all active:scale-95 active:bg-neutral-50"
          >
            {subcategory.imageUrl ? (
              <div className="h-16 w-16 overflow-hidden rounded-lg bg-neutral-100">
                <img
                  src={subcategory.imageUrl}
                  alt={subcategory.name}
                  className="h-full w-full object-contain"
                />
              </div>
            ) : subcategory.icon ? (
              <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-neutral-100 text-neutral-500">
                {subcategory.icon}
              </div>
            ) : (
              <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-neutral-100 text-neutral-300">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                </svg>
              </div>
            )}
            <span className="text-center text-xs font-medium text-neutral-700 line-clamp-2">
              {subcategory.name}
            </span>
            {showProductCount && subcategory.productCount && (
              <span className="text-[10px] text-neutral-400">
                {subcategory.productCount.toLocaleString('hr-HR')} artikala
              </span>
            )}
          </button>
        ))}
      </div>
    )
  }

  if (variant === 'card') {
    return (
      <div className={cn('space-y-3 px-4', className)}>
        {subcategories.map((subcategory) => (
          <button
            key={subcategory.id}
            onClick={() => onSubcategoryClick?.(subcategory)}
            className="flex w-full items-center gap-4 rounded-xl bg-white p-4 shadow-sm transition-all active:scale-[0.98] active:bg-neutral-50"
          >
            {subcategory.imageUrl ? (
              <div className="h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-neutral-100">
                <img
                  src={subcategory.imageUrl}
                  alt={subcategory.name}
                  className="h-full w-full object-contain"
                />
              </div>
            ) : subcategory.icon ? (
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-neutral-100 text-neutral-500">
                {subcategory.icon}
              </div>
            ) : (
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-neutral-100 text-neutral-300">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                </svg>
              </div>
            )}
            <div className="flex flex-1 flex-col items-start">
              <span className="text-sm font-medium text-neutral-900">
                {subcategory.name}
              </span>
              {showProductCount && subcategory.productCount && (
                <span className="text-xs text-neutral-400">
                  {subcategory.productCount.toLocaleString('hr-HR')} artikala
                </span>
              )}
            </div>
            <ChevronRightIcon />
          </button>
        ))}
      </div>
    )
  }

  // List variant (default)
  return (
    <div className={cn('bg-white', className)}>
      {subcategories.map((subcategory, index) => (
        <button
          key={subcategory.id}
          onClick={() => onSubcategoryClick?.(subcategory)}
          className={cn(
            'flex w-full items-center justify-between px-4 py-3 transition-colors active:bg-neutral-50',
            index !== subcategories.length - 1 && 'border-b border-neutral-100'
          )}
        >
          <div className="flex items-center gap-3">
            {subcategory.icon && (
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-100 text-neutral-500">
                {subcategory.icon}
              </div>
            )}
            <span className="text-sm font-medium text-neutral-800">
              {subcategory.name}
            </span>
          </div>
          <div className="flex items-center gap-2">
            {showProductCount && subcategory.productCount && (
              <span className="text-xs text-neutral-400">
                {subcategory.productCount.toLocaleString('hr-HR')}
              </span>
            )}
            <ChevronRightIcon />
          </div>
        </button>
      ))}
    </div>
  )
}

// Sample subcategories for electrical supplies
export const sampleSubcategories: Record<string, MobileSubcategory[]> = {
  kablovi: [
    { id: 'k1', name: 'Instalacijski kablovi', productCount: 850 },
    { id: 'k2', name: 'Koaksijalni kablovi', productCount: 320 },
    { id: 'k3', name: 'Mrežni kablovi', productCount: 450 },
    { id: 'k4', name: 'Energetski kablovi', productCount: 280 },
    { id: 'k5', name: 'Fleksibilni kablovi', productCount: 350 },
    { id: 'k6', name: 'Signalni kablovi', productCount: 200 },
  ],
  rasvjeta: [
    { id: 'r1', name: 'LED rasvjeta', productCount: 680 },
    { id: 'r2', name: 'Fluorescentne lampe', productCount: 245 },
    { id: 'r3', name: 'Halogene lampe', productCount: 180 },
    { id: 'r4', name: 'Vanjska rasvjeta', productCount: 320 },
    { id: 'r5', name: 'Industrijska rasvjeta', productCount: 210 },
    { id: 'r6', name: 'Dekorativna rasvjeta', productCount: 185 },
  ],
  prekidaci: [
    { id: 'p1', name: 'Obični prekidači', productCount: 890 },
    { id: 'p2', name: 'Dimeri', productCount: 320 },
    { id: 'p3', name: 'Serijski prekidači', productCount: 450 },
    { id: 'p4', name: 'Izmjenični prekidači', productCount: 380 },
    { id: 'p5', name: 'Utičnice', productCount: 720 },
    { id: 'p6', name: 'Kombinacije', productCount: 390 },
  ],
  osiguraci: [
    { id: 'o1', name: 'Automatski osigurači', productCount: 420 },
    { id: 'o2', name: 'Topivi osigurači', productCount: 180 },
    { id: 'o3', name: 'FID sklopke', productCount: 150 },
    { id: 'o4', name: 'Kombinovani zaštitni uređaji', productCount: 90 },
    { id: 'o5', name: 'Prenaponska zaštita', productCount: 50 },
  ],
  alati: [
    { id: 'a1', name: 'Ručni alati', productCount: 480 },
    { id: 'a2', name: 'Električni alati', productCount: 320 },
    { id: 'a3', name: 'Mjerni instrumenti', productCount: 210 },
    { id: 'a4', name: 'Izolacioni alati', productCount: 130 },
    { id: 'a5', name: 'Pribor i dodaci', productCount: 100 },
  ],
  ormari: [
    { id: 'or1', name: 'Nadžbukni ormari', productCount: 180 },
    { id: 'or2', name: 'Podžbukni ormari', productCount: 150 },
    { id: 'or3', name: 'Industrijski ormari', productCount: 120 },
    { id: 'or4', name: 'Pribor za ormare', productCount: 110 },
  ],
}

export default MobileSubcategoryList

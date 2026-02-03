'use client'

import { cn } from '@/src/lib/utils'
import { type MobileCategoryItem } from './MobileCategoryScroller'

interface MobileCategoryGridProps {
  categories: MobileCategoryItem[]
  onCategoryClick?: (category: MobileCategoryItem) => void
  className?: string
  variant?: 'default' | 'compact' | 'large'
  columns?: 2 | 3 | 4
}

export function MobileCategoryGrid({
  categories,
  onCategoryClick,
  className,
  variant = 'default',
  columns = 3,
}: MobileCategoryGridProps) {
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

  const iconSizes = {
    default: 'h-12 w-12',
    compact: 'h-10 w-10',
    large: 'h-16 w-16',
  }

  const textSizes = {
    default: 'text-xs',
    compact: 'text-[10px]',
    large: 'text-sm',
  }

  return (
    <div className={cn('grid gap-3 px-4', gridCols[columns], className)}>
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryClick?.(category)}
          className={cn(
            'flex flex-col items-center rounded-xl bg-white shadow-sm transition-all active:scale-95 active:bg-neutral-50',
            itemStyles[variant]
          )}
        >
          <div
            className={cn(
              'flex items-center justify-center rounded-xl',
              iconSizes[variant]
            )}
            style={
              category.color
                ? { backgroundColor: `${category.color}15`, color: category.color }
                : { backgroundColor: '#f5f5f5', color: '#737373' }
            }
          >
            {category.icon}
          </div>
          <span
            className={cn(
              'text-center font-medium text-neutral-700 line-clamp-2',
              textSizes[variant]
            )}
          >
            {category.name}
          </span>
          {category.productCount && variant !== 'compact' && (
            <span className="text-[10px] text-neutral-400">
              {category.productCount.toLocaleString('hr-HR')} artikala
            </span>
          )}
        </button>
      ))}
    </div>
  )
}

export default MobileCategoryGrid

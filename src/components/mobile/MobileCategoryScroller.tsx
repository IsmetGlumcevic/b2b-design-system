'use client'

import { cn } from '@/src/lib/utils'

export interface MobileCategoryItem {
  id: string
  name: string
  icon: React.ReactNode
  productCount?: number
  href?: string
  color?: string
}

interface MobileCategorySrollerProps {
  categories: MobileCategoryItem[]
  onCategoryClick?: (category: MobileCategoryItem) => void
  title?: string
  className?: string
  variant?: 'circle' | 'square' | 'card'
}

export function MobileCategoryScroller({
  categories,
  onCategoryClick,
  title,
  className,
  variant = 'circle',
}: MobileCategorySrollerProps) {
  const itemStyles = {
    circle: 'w-16 flex-col items-center gap-2',
    square: 'w-20 flex-col items-center gap-2',
    card: 'w-28 flex-col items-start gap-2 bg-neutral-50 rounded-xl p-3',
  }

  const iconStyles = {
    circle: 'w-14 h-14 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600',
    square: 'w-16 h-16 rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-600',
    card: 'w-10 h-10 rounded-lg bg-white flex items-center justify-center text-neutral-600 shadow-sm',
  }

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
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryClick?.(category)}
            className={cn(
              'flex shrink-0 transition-transform active:scale-95',
              itemStyles[variant]
            )}
          >
            <div
              className={iconStyles[variant]}
              style={category.color ? { backgroundColor: `${category.color}15`, color: category.color } : undefined}
            >
              {category.icon}
            </div>
            <span className={cn(
              'text-xs font-medium text-neutral-700 text-center',
              variant === 'card' && 'text-left'
            )}>
              {category.name}
            </span>
            {variant === 'card' && category.productCount && (
              <span className="text-[10px] text-neutral-400">
                {category.productCount} proizvoda
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  )
}

// Default categories with simple icons
const CableIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2v6m0 8v6M4.93 4.93l4.24 4.24m5.66 5.66l4.24 4.24" />
  </svg>
)

const LightbulbIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.9V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.1A7 7 0 0 0 12 2z" />
  </svg>
)

const SwitchIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="6" width="18" height="12" rx="2" />
    <circle cx="8" cy="12" r="2" />
  </svg>
)

const FuseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="6" y="3" width="12" height="18" rx="2" />
    <path d="M10 8h4M10 12h4" />
  </svg>
)

const ToolIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
)

const PanelIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M3 9h18M9 21V9" />
  </svg>
)

export const defaultMobileCategories: MobileCategoryItem[] = [
  { id: '1', name: 'Kablovi', icon: <CableIcon />, productCount: 2450, color: '#0EA5E9' },
  { id: '2', name: 'Rasvjeta', icon: <LightbulbIcon />, productCount: 1820, color: '#F59E0B' },
  { id: '3', name: 'Prekidači', icon: <SwitchIcon />, productCount: 3150, color: '#10B981' },
  { id: '4', name: 'Osigurači', icon: <FuseIcon />, productCount: 890, color: '#EF4444' },
  { id: '5', name: 'Alati', icon: <ToolIcon />, productCount: 1240, color: '#8B5CF6' },
  { id: '6', name: 'Ormari', icon: <PanelIcon />, productCount: 560, color: '#EC4899' },
]

export default MobileCategoryScroller

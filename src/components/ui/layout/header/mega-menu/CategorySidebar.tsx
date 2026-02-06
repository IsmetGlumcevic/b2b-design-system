'use client'

import { cn } from '@/src/lib/utils'
import type { CategorySidebarProps } from '../types'
import ChevronRight from '@/src/components/ui/icons/Line/Arrows/ChevronRight'

/**
 * CategorySidebar - Left sidebar category list for mega menu
 *
 * Client Component - needs hover state tracking
 *
 * @example
 * ```tsx
 * <CategorySidebar
 *   categories={categories}
 *   activeCategory={activeCategoryId}
 *   onCategoryHover={(id) => setActiveCategory(id)}
 * />
 * ```
 */
export function CategorySidebar({
  categories,
  activeCategory,
  onCategoryHover,
  showIcons = false,
  colorScheme = 'light',
  className,
  ...props
}: CategorySidebarProps) {
  // Color scheme styles
  const colorStyles = {
    light: {
      bg: 'bg-[var(--color-bg-secondary)]',
      text: 'text-[var(--color-text-primary)]',
      hover: 'hover:bg-[var(--color-bg-tertiary)]',
      active: 'bg-[var(--color-bg-primary)] text-[var(--color-primary-600)]',
      border: 'border-r border-[var(--color-border-primary)]',
    },
    dark: {
      bg: 'bg-[var(--color-secondary-800)]',
      text: 'text-[var(--color-text-inverse)]',
      hover: 'hover:bg-[var(--color-secondary-700)]',
      active: 'bg-[var(--color-secondary-700)] text-[var(--color-primary-400)]',
      border: 'border-r border-[var(--color-secondary-700)]',
    },
  }

  const styles = colorStyles[colorScheme]

  return (
    <nav
      className={cn(
        'w-[var(--mega-menu-sidebar-width)] overflow-y-auto',
        styles.bg,
        styles.border,
        className
      )}
      {...props}
    >
      <ul className="py-2">
        {categories.map((category) => {
          const isActive = activeCategory === category.id
          const hasChildren = category.children && category.children.length > 0

          return (
            <li key={category.id}>
              <button
                type="button"
                className={cn(
                  'w-full flex items-center justify-between px-4 py-2.5',
                  'text-sm font-medium text-left transition-colors',
                  styles.text,
                  styles.hover,
                  isActive && styles.active
                )}
                onMouseEnter={() => onCategoryHover?.(category.id)}
                onClick={() => onCategoryHover?.(category.id)}
              >
                <span className="flex items-center gap-3">
                  {showIcons && category.icon && (
                    <span className="w-5 h-5 flex-shrink-0">
                      {/* Icon placeholder - you'd render actual icon here */}
                      <span className="text-lg">{category.icon}</span>
                    </span>
                  )}
                  <span className="line-clamp-1">{category.name}</span>
                </span>

                {hasChildren && (
                  <ChevronRight
                    className={cn(
                      'w-4 h-4 flex-shrink-0 transition-transform',
                      isActive && 'text-[var(--color-primary-500)]'
                    )}
                  />
                )}
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default CategorySidebar

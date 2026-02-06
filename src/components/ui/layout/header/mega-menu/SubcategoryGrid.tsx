import { cn } from '@/src/lib/utils'
import type { SubcategoryGridProps } from '../types'
import { VisualCategoryCard } from './VisualCategoryCard'

/**
 * SubcategoryGrid - Right side grid of subcategory cards with images
 *
 * Server Component - static display
 *
 * @example
 * ```tsx
 * <SubcategoryGrid
 *   subcategories={subcategories}
 *   columns={5}
 *   maxItems={20}
 * />
 * ```
 */
export function SubcategoryGrid({
  subcategories,
  maxItems = 20,
  columns = 5,
  colorScheme = 'light',
  className,
  ...props
}: SubcategoryGridProps) {
  // Limit items
  const visibleSubcategories = subcategories.slice(0, maxItems)

  // Grid column styles
  const columnStyles = {
    3: 'grid-cols-3',
    4: 'grid-cols-4',
    5: 'grid-cols-5',
    6: 'grid-cols-6',
  }

  return (
    <div
      className={cn(
        'flex-1 p-6 overflow-y-auto',
        colorScheme === 'dark'
          ? 'bg-[var(--color-secondary-900)]'
          : 'bg-[var(--mega-menu-bg)]',
        className
      )}
      {...props}
    >
      {/* Section title (optional) */}
      <h3
        className={cn(
          'text-sm font-semibold mb-4',
          colorScheme === 'dark'
            ? 'text-[var(--color-text-inverse)]'
            : 'text-[var(--color-text-primary)]'
        )}
      >
        Kupujte po kategorijama
      </h3>

      {/* Grid of category cards */}
      <div
        className={cn(
          'grid gap-4',
          columnStyles[columns]
        )}
      >
        {visibleSubcategories.map((subcategory) => (
          <VisualCategoryCard
            key={subcategory.id}
            category={subcategory}
            size="md"
          />
        ))}
      </div>

      {/* "View all" link if there are more items */}
      {subcategories.length > maxItems && (
        <div className="mt-6 text-center">
          <a
            href="/kategorije"
            className={cn(
              'inline-flex items-center gap-1 text-sm font-medium',
              'hover:underline',
              colorScheme === 'dark'
                ? 'text-[var(--color-primary-400)]'
                : 'text-[var(--color-primary-600)]'
            )}
          >
            Vidi sve kategorije
            <span>→</span>
          </a>
        </div>
      )}
    </div>
  )
}

export default SubcategoryGrid

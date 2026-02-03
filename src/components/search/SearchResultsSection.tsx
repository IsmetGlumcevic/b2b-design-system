'use client'

import { forwardRef, type HTMLAttributes, type ReactNode } from 'react'
import { cn } from '@/src/lib/utils'
import { useSearchModal } from './SearchModal'
import { ProductSearchResult } from './ProductSearchResult'
import { CategorySearchResult } from './CategorySearchResult'
import { ManufacturerSearchResult } from './ManufacturerSearchResult'
import { SeriesSearchResult } from './SeriesSearchResult'

/* ============================================
   Search Results Section Props
   ============================================ */

export interface SearchResultsSectionProps extends HTMLAttributes<HTMLDivElement> {
  /** Maximum items to show before "See all" */
  maxItems?: number
  /** Callback when "See all" is clicked */
  onSeeAll?: (type: string) => void
}

/* ============================================
   Search Results Section Component
   ============================================ */

/**
 * Displays search results based on the active tab.
 * Shows products, categories, manufacturers, or series.
 *
 * @example
 * <SearchResultsSection maxItems={5} />
 */
export const SearchResultsSection = forwardRef<HTMLDivElement, SearchResultsSectionProps>(
  ({ maxItems = 5, onSeeAll, className, ...props }, ref) => {
    const { activeTab, results, query, onQuickAddToCart, onNavigateToSearch, onNavigateToProduct, onNavigateToCategory, onNavigateToManufacturer } = useSearchModal()

    if (!results) return null

    const renderContent = (): ReactNode => {
      switch (activeTab) {
        case 'products': {
          const items = results.products.slice(0, maxItems)
          const total = results.products.length

          return (
            <>
              <SectionHeader
                title="Proizvodi"
                count={total}
                showSeeAll={total > maxItems}
                onSeeAll={() => {
                  onSeeAll?.('products')
                  onNavigateToSearch?.(query)
                }}
              />
              <div className="divide-y divide-[var(--color-border-primary)]">
                {items.map((product) => (
                  <ProductSearchResult
                    key={product.id}
                    product={product}
                    query={query}
                    onQuickAdd={onQuickAddToCart}
                    onNavigate={onNavigateToProduct}
                  />
                ))}
              </div>
            </>
          )
        }

        case 'categories': {
          const items = results.categories.slice(0, maxItems)
          const total = results.categories.length

          return (
            <>
              <SectionHeader
                title="Kategorije"
                count={total}
                showSeeAll={total > maxItems}
                onSeeAll={() => onSeeAll?.('categories')}
              />
              <div className="grid grid-cols-2 gap-[var(--spacing-2)] p-[var(--spacing-4)]">
                {items.map((category) => (
                  <CategorySearchResult
                    key={category.id}
                    category={category}
                    query={query}
                    onNavigate={onNavigateToCategory}
                  />
                ))}
              </div>
            </>
          )
        }

        case 'manufacturers': {
          const items = results.manufacturers.slice(0, maxItems)
          const total = results.manufacturers.length

          return (
            <>
              <SectionHeader
                title="Proizvođači"
                count={total}
                showSeeAll={total > maxItems}
                onSeeAll={() => onSeeAll?.('manufacturers')}
              />
              <div className="grid grid-cols-2 gap-[var(--spacing-2)] p-[var(--spacing-4)]">
                {items.map((manufacturer) => (
                  <ManufacturerSearchResult
                    key={manufacturer.id}
                    manufacturer={manufacturer}
                    query={query}
                    onNavigate={onNavigateToManufacturer}
                  />
                ))}
              </div>
            </>
          )
        }

        case 'series': {
          const items = results.series.slice(0, maxItems)
          const total = results.series.length

          return (
            <>
              <SectionHeader
                title="Serije"
                count={total}
                showSeeAll={total > maxItems}
                onSeeAll={() => onSeeAll?.('series')}
              />
              <div className="divide-y divide-[var(--color-border-primary)]">
                {items.map((series) => (
                  <SeriesSearchResult
                    key={series.id}
                    series={series}
                    query={query}
                  />
                ))}
              </div>
            </>
          )
        }

        default:
          return null
      }
    }

    return (
      <div
        ref={ref}
        id={`search-panel-${activeTab}`}
        role="tabpanel"
        aria-labelledby={`search-tab-${activeTab}`}
        className={cn(
          'flex-1 overflow-y-auto',
          'min-h-0',
          className
        )}
        {...props}
      >
        {renderContent()}
      </div>
    )
  }
)

SearchResultsSection.displayName = 'SearchResultsSection'

/* ============================================
   Section Header
   ============================================ */

interface SectionHeaderProps {
  title: string
  count: number
  showSeeAll?: boolean
  onSeeAll?: () => void
}

function SectionHeader({ title, count, showSeeAll, onSeeAll }: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'flex items-center justify-between',
        'px-[var(--spacing-6)] py-[var(--spacing-3)]',
        'bg-[var(--color-bg-secondary)]',
        'border-b border-[var(--color-border-primary)]'
      )}
    >
      <div className="flex items-center gap-[var(--spacing-2)]">
        <h3 className="text-[var(--font-size-sm)] font-medium text-[var(--color-text-primary)]">
          {title}
        </h3>
        <span className="text-[var(--font-size-xs)] text-[var(--color-text-tertiary)]">
          ({count} rezultata)
        </span>
      </div>

      {showSeeAll && (
        <button
          onClick={onSeeAll}
          className={cn(
            'text-[var(--font-size-sm)] font-medium',
            'text-[var(--color-primary-600)]',
            'hover:text-[var(--color-primary-700)]',
            'transition-colors duration-[var(--duration-150)]',
            'focus-visible:outline-none focus-visible:underline'
          )}
        >
          Prikaži sve →
        </button>
      )}
    </div>
  )
}

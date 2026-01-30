'use client'

import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '@/src/lib/utils'
import { useSearchModal, type SearchTab } from './SearchModal'

/* ============================================
   Search Results Tabs Props
   ============================================ */

export interface SearchResultsTabsProps extends HTMLAttributes<HTMLDivElement> {}

/* ============================================
   Tab Config
   ============================================ */

interface TabConfig {
  value: SearchTab
  label: string
  countKey: 'products' | 'categories' | 'manufacturers' | 'series'
}

const tabs: TabConfig[] = [
  { value: 'products', label: 'Proizvodi', countKey: 'products' },
  { value: 'categories', label: 'Kategorije', countKey: 'categories' },
  { value: 'manufacturers', label: 'Proizvođači', countKey: 'manufacturers' },
  { value: 'series', label: 'Serije', countKey: 'series' },
]

/* ============================================
   Search Results Tabs Component
   ============================================ */

/**
 * Tab navigation for search results (Products, Categories, Manufacturers, Series).
 * Shows count for each category.
 *
 * @example
 * <SearchResultsTabs />
 */
export const SearchResultsTabs = forwardRef<HTMLDivElement, SearchResultsTabsProps>(
  ({ className, ...props }, ref) => {
    const { activeTab, setActiveTab, results } = useSearchModal()

    const getCount = (countKey: TabConfig['countKey']): number => {
      if (!results) return 0
      return results[countKey]?.length || 0
    }

    return (
      <div
        ref={ref}
        role="tablist"
        aria-label="Kategorije rezultata pretrage"
        className={cn(
          'flex items-center gap-[var(--spacing-1)]',
          'px-[var(--spacing-6)] py-[var(--spacing-2)]',
          'border-b border-[var(--color-border-primary)]',
          'overflow-x-auto',
          className
        )}
        {...props}
      >
        {tabs.map((tab) => {
          const count = getCount(tab.countKey)
          const isActive = activeTab === tab.value

          return (
            <button
              key={tab.value}
              role="tab"
              aria-selected={isActive}
              aria-controls={`search-panel-${tab.value}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActiveTab(tab.value)}
              className={cn(
                'inline-flex items-center gap-[var(--spacing-2)]',
                'px-[var(--spacing-3)] py-[var(--spacing-2)]',
                'rounded-[var(--radius-md)]',
                'text-[var(--font-size-sm)] font-medium',
                'whitespace-nowrap',
                'transition-colors duration-[var(--duration-150)]',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-500)] focus-visible:ring-offset-2',
                isActive
                  ? 'bg-[var(--color-primary-50)] text-[var(--color-primary-600)]'
                  : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-tertiary)]'
              )}
            >
              <span>{tab.label}</span>
              {count > 0 && (
                <span
                  className={cn(
                    'inline-flex items-center justify-center',
                    'min-w-[1.25rem] h-5',
                    'px-[var(--spacing-1-5)]',
                    'rounded-full',
                    'text-[var(--font-size-xs)] font-medium',
                    isActive
                      ? 'bg-[var(--color-primary-500)] text-white'
                      : 'bg-[var(--color-bg-tertiary)] text-[var(--color-text-secondary)]'
                  )}
                >
                  {count > 99 ? '99+' : count}
                </span>
              )}
            </button>
          )
        })}
      </div>
    )
  }
)

SearchResultsTabs.displayName = 'SearchResultsTabs'

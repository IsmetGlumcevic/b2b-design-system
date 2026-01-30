'use client'

import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '@/src/lib/utils'
import { useSearchModal } from './SearchModal'

/* ============================================
   Search Empty State Props
   ============================================ */

export interface SearchEmptyStateProps extends HTMLAttributes<HTMLDivElement> {}

/* ============================================
   Search Empty State Component
   ============================================ */

/**
 * Displayed when search input is empty.
 * Shows recent searches and trending searches.
 *
 * @example
 * <SearchEmptyState />
 */
export const SearchEmptyState = forwardRef<HTMLDivElement, SearchEmptyStateProps>(
  ({ className, ...props }, ref) => {
    const { recentSearches, trendingSearches, onSearch, onClearRecentSearch } = useSearchModal()

    return (
      <div
        ref={ref}
        className={cn(
          'flex-1 overflow-y-auto',
          'py-[var(--spacing-4)]',
          className
        )}
        {...props}
      >
        {/* Recent Searches */}
        {recentSearches.length > 0 && (
          <div className="mb-[var(--spacing-6)]">
            <div className="px-[var(--spacing-6)] py-[var(--spacing-2)]">
              <h3 className="text-[var(--font-size-xs)] font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider">
                Nedavne pretrage
              </h3>
            </div>
            <div>
              {recentSearches.map((search) => (
                <RecentSearchItem
                  key={search.id}
                  query={search.query}
                  onSelect={() => onSearch(search.query)}
                  onDelete={() => onClearRecentSearch(search.id)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Trending Searches */}
        {trendingSearches.length > 0 && (
          <div>
            <div className="px-[var(--spacing-6)] py-[var(--spacing-2)]">
              <h3 className="text-[var(--font-size-xs)] font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider">
                Popularne pretrage
              </h3>
            </div>
            <div className="px-[var(--spacing-6)] py-[var(--spacing-2)]">
              <div className="flex flex-wrap gap-[var(--spacing-2)]">
                {trendingSearches.map((search) => (
                  <TrendingSearchItem
                    key={search.id}
                    query={search.query}
                    onSelect={() => onSearch(search.query)}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Empty State (no searches) */}
        {recentSearches.length === 0 && trendingSearches.length === 0 && (
          <div className="flex flex-col items-center justify-center py-[var(--spacing-16)] text-center">
            <SearchIcon className="w-12 h-12 text-[var(--color-text-tertiary)] mb-[var(--spacing-4)]" />
            <p className="text-[var(--font-size-sm)] text-[var(--color-text-secondary)]">
              Započnite pretragu unosom pojma
            </p>
            <p className="text-[var(--font-size-xs)] text-[var(--color-text-tertiary)] mt-[var(--spacing-1)]">
              Pretražujte proizvode, kategorije, proizvođače i serije
            </p>
          </div>
        )}
      </div>
    )
  }
)

SearchEmptyState.displayName = 'SearchEmptyState'

/* ============================================
   Recent Search Item
   ============================================ */

interface RecentSearchItemProps {
  query: string
  onSelect: () => void
  onDelete: () => void
}

function RecentSearchItem({ query, onSelect, onDelete }: RecentSearchItemProps) {
  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation()
    onDelete()
  }

  return (
    <div
      onClick={onSelect}
      className={cn(
        'flex items-center gap-[var(--spacing-3)]',
        'px-[var(--spacing-6)] py-[var(--spacing-2-5)]',
        'cursor-pointer',
        'transition-colors duration-[var(--duration-150)]',
        'hover:bg-[var(--color-bg-secondary)]'
      )}
      role="option"
      tabIndex={0}
    >
      <ClockIcon className="shrink-0 w-4 h-4 text-[var(--color-text-tertiary)]" />
      <span className="flex-1 text-[var(--font-size-sm)] text-[var(--color-text-primary)]">
        {query}
      </span>
      <button
        type="button"
        onClick={handleDelete}
        className={cn(
          'shrink-0',
          'p-[var(--spacing-1)]',
          'rounded-[var(--radius-sm)]',
          'text-[var(--color-text-tertiary)]',
          'transition-colors duration-[var(--duration-150)]',
          'hover:text-[var(--color-text-primary)]',
          'hover:bg-[var(--color-bg-tertiary)]',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-border-focus)]'
        )}
        aria-label={`Obriši pretragu "${query}"`}
      >
        <CloseIcon className="w-4 h-4" />
      </button>
    </div>
  )
}

/* ============================================
   Trending Search Item
   ============================================ */

interface TrendingSearchItemProps {
  query: string
  onSelect: () => void
}

function TrendingSearchItem({ query, onSelect }: TrendingSearchItemProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={cn(
        'inline-flex items-center gap-[var(--spacing-1-5)]',
        'px-[var(--spacing-3)] py-[var(--spacing-1-5)]',
        'rounded-full',
        'border border-[var(--color-border-primary)]',
        'text-[var(--font-size-sm)] text-[var(--color-text-secondary)]',
        'transition-all duration-[var(--duration-150)]',
        'hover:border-[var(--color-primary-300)]',
        'hover:bg-[var(--color-primary-50)]',
        'hover:text-[var(--color-primary-600)]',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-500)]'
      )}
    >
      <TrendingIcon className="w-3.5 h-3.5" />
      <span>{query}</span>
    </button>
  )
}

/* ============================================
   Icons
   ============================================ */

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      role="img"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      role="img"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      role="img"
      aria-hidden="true"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}

function TrendingIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      role="img"
      aria-hidden="true"
    >
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  )
}

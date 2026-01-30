'use client'

import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '@/src/lib/utils'
import { useSearchModal } from './SearchModal'

/* ============================================
   No Results State Props
   ============================================ */

export interface NoResultsStateProps extends HTMLAttributes<HTMLDivElement> {
  /** Custom title */
  title?: string
  /** Custom description */
  description?: string
  /** Suggestions for improving search */
  suggestions?: string[]
}

/* ============================================
   No Results State Component
   ============================================ */

/**
 * Displayed when search returns no results.
 * Shows helpful message and suggestions.
 *
 * @example
 * <NoResultsState />
 */
export const NoResultsState = forwardRef<HTMLDivElement, NoResultsStateProps>(
  (
    {
      title = 'Nema rezultata',
      description,
      suggestions = [
        'Provjerite da li ste ispravno napisali pojam',
        'Pokušajte sa kraćim ili općenitijim pojmom',
        'Koristite manje specifične filtere',
        'Pokušajte pretraživati po šifri proizvoda',
      ],
      className,
      ...props
    },
    ref
  ) => {
    const { query, trendingSearches, onSearch } = useSearchModal()

    return (
      <div
        ref={ref}
        className={cn(
          'flex-1 overflow-y-auto',
          'py-[var(--spacing-8)]',
          className
        )}
        {...props}
      >
        <div className="flex flex-col items-center text-center px-[var(--spacing-6)]">
          {/* Icon */}
          <div
            className={cn(
              'w-16 h-16 mb-[var(--spacing-4)]',
              'rounded-full',
              'bg-[var(--color-bg-tertiary)]',
              'flex items-center justify-center'
            )}
          >
            <NoResultsIcon className="w-8 h-8 text-[var(--color-text-tertiary)]" />
          </div>

          {/* Title */}
          <h3 className="text-[var(--font-size-lg)] font-semibold text-[var(--color-text-primary)] mb-[var(--spacing-1)]">
            {title}
          </h3>

          {/* Description */}
          <p className="text-[var(--font-size-sm)] text-[var(--color-text-secondary)] mb-[var(--spacing-6)]">
            {description || `Nismo pronašli rezultate za "${query}"`}
          </p>

          {/* Suggestions */}
          {suggestions.length > 0 && (
            <div className="w-full max-w-sm text-left">
              <h4 className="text-[var(--font-size-xs)] font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider mb-[var(--spacing-3)]">
                Prijedlozi
              </h4>
              <ul className="space-y-[var(--spacing-2)]">
                {suggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-[var(--spacing-2)] text-[var(--font-size-sm)] text-[var(--color-text-secondary)]"
                  >
                    <CheckIcon className="shrink-0 w-4 h-4 mt-0.5 text-[var(--color-primary-500)]" />
                    <span>{suggestion}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Trending Searches */}
          {trendingSearches.length > 0 && (
            <div className="w-full max-w-sm mt-[var(--spacing-8)]">
              <h4 className="text-[var(--font-size-xs)] font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider mb-[var(--spacing-3)] text-left">
                Popularne pretrage
              </h4>
              <div className="flex flex-wrap gap-[var(--spacing-2)]">
                {trendingSearches.slice(0, 6).map((search) => (
                  <button
                    key={search.id}
                    type="button"
                    onClick={() => onSearch(search.query)}
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
                    <span>{search.query}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
)

NoResultsState.displayName = 'NoResultsState'

/* ============================================
   Icons
   ============================================ */

function NoResultsIcon({ className }: { className?: string }) {
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
      <path d="m8 8 6 6" />
      <path d="m14 8-6 6" />
    </svg>
  )
}

function CheckIcon({ className }: { className?: string }) {
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
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

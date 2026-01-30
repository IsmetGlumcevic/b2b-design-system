'use client'

import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '@/src/lib/utils'
import { type SeriesSearchResultType } from './SearchModal'

/* ============================================
   Series Search Result Props
   ============================================ */

export interface SeriesSearchResultProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onSelect'> {
  /** Series data */
  series: SeriesSearchResultType
  /** Search query for highlighting */
  query?: string
  /** Click callback */
  onSelect?: (seriesId: string) => void
}

/* ============================================
   Series Search Result Component
   ============================================ */

/**
 * Series card for search results.
 * Shows name, manufacturer, and product count.
 *
 * @example
 * <SeriesSearchResult
 *   series={series}
 *   query="System pro"
 * />
 */
export const SeriesSearchResult = forwardRef<HTMLDivElement, SeriesSearchResultProps>(
  ({ series, query, onSelect, className, ...props }, ref) => {
    const handleClick = () => {
      onSelect?.(series.id)
    }

    return (
      <div
        ref={ref}
        onClick={handleClick}
        className={cn(
          'flex items-center gap-[var(--spacing-4)]',
          'px-[var(--spacing-6)] py-[var(--spacing-3)]',
          'cursor-pointer',
          'transition-colors duration-[var(--duration-150)]',
          'hover:bg-[var(--color-bg-secondary)]',
          'focus-visible:outline-none focus-visible:bg-[var(--color-bg-secondary)]',
          className
        )}
        role="option"
        tabIndex={0}
        {...props}
      >
        {/* Series Icon */}
        <div
          className={cn(
            'shrink-0',
            'w-10 h-10',
            'rounded-[var(--radius-md)]',
            'bg-[var(--color-bg-tertiary)]',
            'flex items-center justify-center'
          )}
        >
          <SeriesIcon className="w-5 h-5 text-[var(--color-text-secondary)]" />
        </div>

        {/* Series Info */}
        <div className="flex-1 min-w-0">
          <p className="text-[var(--font-size-sm)] font-medium text-[var(--color-text-primary)] truncate">
            <HighlightText text={series.name} query={query} />
          </p>
          <div className="flex items-center gap-[var(--spacing-2)] mt-[var(--spacing-0-5)]">
            <span className="text-[var(--font-size-xs)] text-[var(--color-text-tertiary)]">
              {series.manufacturer}
            </span>
            <span className="text-[var(--font-size-xs)] text-[var(--color-text-tertiary)]">
              •
            </span>
            <span className="text-[var(--font-size-xs)] text-[var(--color-text-tertiary)]">
              {series.productCount} proizvoda
            </span>
          </div>
        </div>

        {/* Arrow */}
        <ChevronRightIcon className="shrink-0 w-4 h-4 text-[var(--color-text-tertiary)]" />
      </div>
    )
  }
)

SeriesSearchResult.displayName = 'SeriesSearchResult'

/* ============================================
   Helper Components
   ============================================ */

interface HighlightTextProps {
  text: string
  query?: string
}

function HighlightText({ text, query }: HighlightTextProps) {
  if (!query || query.length < 2) {
    return <>{text}</>
  }

  const regex = new RegExp(`(${escapeRegExp(query)})`, 'gi')
  const parts = text.split(regex)

  return (
    <>
      {parts.map((part, index) =>
        regex.test(part) ? (
          <mark
            key={index}
            className="bg-[var(--color-warning-100)] text-inherit rounded-sm px-[var(--spacing-0-5)]"
          >
            {part}
          </mark>
        ) : (
          part
        )
      )}
    </>
  )
}

function escapeRegExp(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

/* ============================================
   Icons
   ============================================ */

function SeriesIcon({ className }: { className?: string }) {
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
      <rect width="7" height="7" x="3" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="14" rx="1" />
      <rect width="7" height="7" x="3" y="14" rx="1" />
    </svg>
  )
}

function ChevronRightIcon({ className }: { className?: string }) {
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
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}

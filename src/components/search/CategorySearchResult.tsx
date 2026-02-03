'use client'

import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '@/src/lib/utils'
import { type CategorySearchResultType } from './SearchModal'

/* ============================================
   Category Search Result Props
   ============================================ */

export interface CategorySearchResultProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onSelect'> {
  /** Category data */
  category: CategorySearchResultType
  /** Search query for highlighting */
  query?: string
  /** Click callback */
  onSelect?: (categoryId: string) => void
  /** Navigate to category page callback */
  onNavigate?: (categoryId: string) => void
}

/* ============================================
   Category Search Result Component
   ============================================ */

/**
 * Category card for search results.
 * Shows icon, name, and product count.
 *
 * @example
 * <CategorySearchResult
 *   category={category}
 *   query="kabel"
 * />
 */
export const CategorySearchResult = forwardRef<HTMLDivElement, CategorySearchResultProps>(
  ({ category, query, onSelect, onNavigate, className, ...props }, ref) => {
    const handleClick = () => {
      onSelect?.(category.id)
      onNavigate?.(category.id)
    }

    return (
      <div
        ref={ref}
        onClick={handleClick}
        className={cn(
          'flex items-center gap-[var(--spacing-3)]',
          'p-[var(--spacing-3)]',
          'rounded-[var(--radius-lg)]',
          'cursor-pointer',
          'border border-[var(--color-border-primary)]',
          'transition-all duration-[var(--duration-150)]',
          'hover:border-[var(--color-primary-300)]',
          'hover:bg-[var(--color-primary-50)]',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-500)]',
          className
        )}
        role="option"
        tabIndex={0}
        {...props}
      >
        {/* Category Icon */}
        <div
          className={cn(
            'shrink-0',
            'w-10 h-10',
            'rounded-[var(--radius-md)]',
            'bg-[var(--color-bg-tertiary)]',
            'flex items-center justify-center'
          )}
        >
          <CategoryIcon className="w-5 h-5 text-[var(--color-text-secondary)]" />
        </div>

        {/* Category Info */}
        <div className="flex-1 min-w-0">
          <p className="text-[var(--font-size-sm)] font-medium text-[var(--color-text-primary)] truncate">
            <HighlightText text={category.name} query={query} />
          </p>
          <p className="text-[var(--font-size-xs)] text-[var(--color-text-tertiary)]">
            {category.productCount} proizvoda
          </p>
        </div>

        {/* Arrow */}
        <ChevronRightIcon className="shrink-0 w-4 h-4 text-[var(--color-text-tertiary)]" />
      </div>
    )
  }
)

CategorySearchResult.displayName = 'CategorySearchResult'

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

function CategoryIcon({ className }: { className?: string }) {
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
      <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" />
      <path d="M7 7h.01" />
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

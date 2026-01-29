'use client'

import { forwardRef, type HTMLAttributes, useMemo } from 'react'
import { cn } from '@/src/lib/utils'

export type PaginationVariant = 'default' | 'outline' | 'ghost'
export type PaginationSize = 'sm' | 'md' | 'lg'

export interface PaginationProps extends Omit<HTMLAttributes<HTMLElement>, 'onChange'> {
  /** Current active page (1-based) */
  currentPage: number
  /** Total number of pages */
  totalPages: number
  /** Callback when page changes */
  onPageChange: (page: number) => void
  /** Number of pages to show on each side of current page */
  siblingCount?: number
  /** Visual style variant */
  variant?: PaginationVariant
  /** Size of the pagination */
  size?: PaginationSize
  /** Show first/last page buttons */
  showEdges?: boolean
  /** Labels for navigation buttons (for i18n) */
  labels?: {
    previous?: string
    next?: string
    first?: string
    last?: string
    page?: string
  }
}

const sizeStyles: Record<PaginationSize, { button: string; icon: string }> = {
  sm: {
    button: 'h-8 min-w-8 px-2 text-[var(--font-size-sm)]',
    icon: 'h-4 w-4',
  },
  md: {
    button: 'h-10 min-w-10 px-3 text-[var(--font-size-base)]',
    icon: 'h-5 w-5',
  },
  lg: {
    button: 'h-12 min-w-12 px-4 text-[var(--font-size-lg)]',
    icon: 'h-6 w-6',
  },
}

const variantStyles: Record<PaginationVariant, { base: string; active: string }> = {
  default: {
    base: 'bg-transparent text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-tertiary)] hover:text-[var(--color-text-primary)]',
    active: 'bg-[var(--color-primary-500)] text-white hover:bg-[var(--color-primary-hover)]',
  },
  outline: {
    base: 'bg-transparent text-[var(--color-text-secondary)] border border-[var(--color-border-primary)] hover:bg-[var(--color-bg-tertiary)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-border-secondary)]',
    active: 'bg-[var(--color-primary-500)] text-white border-[var(--color-primary-500)] hover:bg-[var(--color-primary-hover)] hover:border-[var(--color-primary-hover)]',
  },
  ghost: {
    base: 'bg-transparent text-[var(--color-text-secondary)] hover:text-[var(--color-primary-500)]',
    active: 'bg-transparent text-[var(--color-primary-500)] font-semibold',
  },
}

/**
 * Generate page numbers to display with ellipsis
 */
function generatePaginationRange(
  currentPage: number,
  totalPages: number,
  siblingCount: number
): (number | 'ellipsis')[] {
  const totalPageNumbers = siblingCount * 2 + 5 // siblings + current + first + last + 2 ellipsis

  // If we can show all pages without ellipsis
  if (totalPageNumbers >= totalPages) {
    return Array.from({ length: totalPages }, (_, i) => i + 1)
  }

  const leftSiblingIndex = Math.max(currentPage - siblingCount, 1)
  const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages)

  const showLeftEllipsis = leftSiblingIndex > 2
  const showRightEllipsis = rightSiblingIndex < totalPages - 1

  if (!showLeftEllipsis && showRightEllipsis) {
    // Show more pages at the start
    const leftItemCount = 3 + 2 * siblingCount
    const leftRange = Array.from({ length: leftItemCount }, (_, i) => i + 1)
    return [...leftRange, 'ellipsis', totalPages]
  }

  if (showLeftEllipsis && !showRightEllipsis) {
    // Show more pages at the end
    const rightItemCount = 3 + 2 * siblingCount
    const rightRange = Array.from(
      { length: rightItemCount },
      (_, i) => totalPages - rightItemCount + i + 1
    )
    return [1, 'ellipsis', ...rightRange]
  }

  // Show ellipsis on both sides
  const middleRange = Array.from(
    { length: rightSiblingIndex - leftSiblingIndex + 1 },
    (_, i) => leftSiblingIndex + i
  )
  return [1, 'ellipsis', ...middleRange, 'ellipsis', totalPages]
}

/**
 * Pagination component for navigating through pages.
 * Uses CSS variables for theming support.
 *
 * @example
 * <Pagination
 *   currentPage={1}
 *   totalPages={10}
 *   onPageChange={(page) => setPage(page)}
 * />
 */
export const Pagination = forwardRef<HTMLElement, PaginationProps>(
  (
    {
      currentPage,
      totalPages,
      onPageChange,
      siblingCount = 1,
      variant = 'default',
      size = 'md',
      showEdges = false,
      labels = {},
      className,
      ...props
    },
    ref
  ) => {
    const {
      previous = 'Prethodna',
      next = 'Sljedeća',
      first = 'Prva',
      last = 'Zadnja',
      page = 'Stranica',
    } = labels

    const pages = useMemo(
      () => generatePaginationRange(currentPage, totalPages, siblingCount),
      [currentPage, totalPages, siblingCount]
    )

    const canGoPrevious = currentPage > 1
    const canGoNext = currentPage < totalPages

    const buttonBaseStyles = cn(
      'inline-flex items-center justify-center',
      'rounded-[var(--radius-button)]',
      'transition-[var(--transition-fast)]',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-border-focus)] focus-visible:ring-offset-2',
      'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
      sizeStyles[size].button
    )

    return (
      <nav
        ref={ref}
        role="navigation"
        aria-label="Pagination"
        className={cn('flex items-center gap-[var(--spacing-1)]', className)}
        {...props}
      >
        {/* First Page Button */}
        {showEdges && (
          <button
            type="button"
            onClick={() => onPageChange(1)}
            disabled={!canGoPrevious}
            aria-label={first}
            className={cn(buttonBaseStyles, variantStyles[variant].base)}
          >
            <ChevronDoubleLeftIcon className={sizeStyles[size].icon} />
          </button>
        )}

        {/* Previous Button */}
        <button
          type="button"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={!canGoPrevious}
          aria-label={previous}
          className={cn(buttonBaseStyles, variantStyles[variant].base)}
        >
          <ChevronLeftIcon className={sizeStyles[size].icon} />
        </button>

        {/* Page Numbers */}
        <div className="flex items-center gap-[var(--spacing-1)]">
          {pages.map((pageItem, index) => {
            if (pageItem === 'ellipsis') {
              return (
                <span
                  key={`ellipsis-${index}`}
                  className={cn(
                    'inline-flex items-center justify-center',
                    sizeStyles[size].button,
                    'text-[var(--color-text-tertiary)]'
                  )}
                  aria-hidden="true"
                >
                  ...
                </span>
              )
            }

            const isActive = pageItem === currentPage

            return (
              <button
                key={pageItem}
                type="button"
                onClick={() => onPageChange(pageItem)}
                aria-label={`${page} ${pageItem}`}
                aria-current={isActive ? 'page' : undefined}
                className={cn(
                  buttonBaseStyles,
                  isActive ? variantStyles[variant].active : variantStyles[variant].base
                )}
              >
                {pageItem}
              </button>
            )
          })}
        </div>

        {/* Next Button */}
        <button
          type="button"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={!canGoNext}
          aria-label={next}
          className={cn(buttonBaseStyles, variantStyles[variant].base)}
        >
          <ChevronRightIcon className={sizeStyles[size].icon} />
        </button>

        {/* Last Page Button */}
        {showEdges && (
          <button
            type="button"
            onClick={() => onPageChange(totalPages)}
            disabled={!canGoNext}
            aria-label={last}
            className={cn(buttonBaseStyles, variantStyles[variant].base)}
          >
            <ChevronDoubleRightIcon className={sizeStyles[size].icon} />
          </button>
        )}
      </nav>
    )
  }
)

Pagination.displayName = 'Pagination'

/** Chevron Left Icon */
function ChevronLeftIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      role="img"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  )
}

/** Chevron Right Icon */
function ChevronRightIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      role="img"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  )
}

/** Double Chevron Left Icon */
function ChevronDoubleLeftIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      role="img"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M11 19l-7-7 7-7M18 19l-7-7 7-7" />
    </svg>
  )
}

/** Double Chevron Right Icon */
function ChevronDoubleRightIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      role="img"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M6 5l7 7-7 7" />
    </svg>
  )
}

'use client'

import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '@/src/lib/utils'
import { type ManufacturerSearchResultType } from './SearchModal'

/* ============================================
   Manufacturer Search Result Props
   ============================================ */

export interface ManufacturerSearchResultProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onSelect'> {
  /** Manufacturer data */
  manufacturer: ManufacturerSearchResultType
  /** Search query for highlighting */
  query?: string
  /** Click callback */
  onSelect?: (manufacturerId: string) => void
  /** Navigate to manufacturer page callback */
  onNavigate?: (manufacturerId: string) => void
}

/* ============================================
   Manufacturer Search Result Component
   ============================================ */

/**
 * Manufacturer card for search results.
 * Shows logo, name, and product count.
 *
 * @example
 * <ManufacturerSearchResult
 *   manufacturer={manufacturer}
 *   query="ABB"
 * />
 */
export const ManufacturerSearchResult = forwardRef<HTMLDivElement, ManufacturerSearchResultProps>(
  ({ manufacturer, query, onSelect, onNavigate, className, ...props }, ref) => {
    const handleClick = () => {
      onSelect?.(manufacturer.id)
      onNavigate?.(manufacturer.id)
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
        {/* Manufacturer Logo */}
        <div
          className={cn(
            'shrink-0',
            'w-10 h-10',
            'rounded-[var(--radius-md)]',
            'bg-white',
            'border border-[var(--color-border-primary)]',
            'flex items-center justify-center',
            'overflow-hidden'
          )}
        >
          {manufacturer.logo ? (
            <img
              src={manufacturer.logo}
              alt={manufacturer.name}
              className="w-full h-full object-contain p-1"
            />
          ) : (
            <ManufacturerIcon className="w-5 h-5 text-[var(--color-text-tertiary)]" />
          )}
        </div>

        {/* Manufacturer Info */}
        <div className="flex-1 min-w-0">
          <p className="text-[var(--font-size-sm)] font-medium text-[var(--color-text-primary)] truncate">
            <HighlightText text={manufacturer.name} query={query} />
          </p>
          <p className="text-[var(--font-size-xs)] text-[var(--color-text-tertiary)]">
            {manufacturer.productCount} proizvoda
          </p>
        </div>

        {/* Arrow */}
        <ChevronRightIcon className="shrink-0 w-4 h-4 text-[var(--color-text-tertiary)]" />
      </div>
    )
  }
)

ManufacturerSearchResult.displayName = 'ManufacturerSearchResult'

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

function ManufacturerIcon({ className }: { className?: string }) {
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
      <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
      <path d="M17 18h1" />
      <path d="M12 18h1" />
      <path d="M7 18h1" />
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

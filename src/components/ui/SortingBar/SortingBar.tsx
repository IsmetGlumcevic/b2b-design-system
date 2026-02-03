'use client'

import { type HTMLAttributes } from 'react'
import { cn } from '@/src/lib/utils'

export type SortOption = {
  value: string
  label: string
}

export type ViewMode = 'grid' | 'list'

export interface SortingBarProps extends HTMLAttributes<HTMLDivElement> {
  /** Ukupan broj rezultata */
  totalResults: number
  /** Trenutna opcija sortiranja */
  currentSort: string
  /** Opcije za sortiranje */
  sortOptions: SortOption[]
  /** Callback za promjenu sortiranja */
  onSortChange: (value: string) => void
  /** Trenutni prikaz (grid/list) */
  viewMode?: ViewMode
  /** Callback za promjenu prikaza */
  onViewModeChange?: (mode: ViewMode) => void
  /** Prikaži toggle za prikaz */
  showViewToggle?: boolean
  /** Callback za otvaranje mobilnih filtera */
  onOpenFilters?: () => void
  /** Broj aktivnih filtera (za mobile badge) */
  activeFiltersCount?: number
}

const defaultSortOptions: SortOption[] = [
  { value: 'relevance', label: 'Relevantnost' },
  { value: 'price-asc', label: 'Cijena: niža prema višoj' },
  { value: 'price-desc', label: 'Cijena: viša prema nižoj' },
  { value: 'name-asc', label: 'Naziv: A-Z' },
  { value: 'name-desc', label: 'Naziv: Z-A' },
  { value: 'newest', label: 'Najnovije' },
]

export function SortingBar({
  totalResults,
  currentSort,
  sortOptions = defaultSortOptions,
  onSortChange,
  viewMode = 'grid',
  onViewModeChange,
  showViewToggle = true,
  onOpenFilters,
  activeFiltersCount = 0,
  className,
  ...props
}: SortingBarProps) {
  return (
    <div
      className={cn(
        'flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4',
        'rounded-[var(--radius-lg)]',
        'border border-[var(--color-border-primary)]',
        'bg-[var(--color-bg-primary)]',
        'p-4',
        className
      )}
      {...props}
    >
      {/* Left side - Results count & Mobile filter button */}
      <div className="flex w-full sm:w-auto items-center justify-between gap-4">
        <p className="text-sm text-[var(--color-text-secondary)]">
          <span className="font-semibold text-[var(--color-text-primary)]">{totalResults.toLocaleString()}</span>
          {' '}proizvoda
        </p>

        {/* Mobile filter button */}
        {onOpenFilters && (
          <button
            onClick={onOpenFilters}
            className={cn(
              'lg:hidden flex items-center gap-2',
              'px-4 py-2',
              'rounded-[var(--radius-button)]',
              'border border-[var(--color-border-primary)]',
              'bg-[var(--color-bg-primary)]',
              'text-sm font-medium text-[var(--color-text-primary)]',
              'hover:bg-[var(--color-bg-secondary)]',
              'transition-[var(--transition-fast)]'
            )}
          >
            <FilterIcon className="h-4 w-4" />
            <span>Filteri</span>
            {activeFiltersCount > 0 && (
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[var(--color-primary-500)] text-xs text-white">
                {activeFiltersCount}
              </span>
            )}
          </button>
        )}
      </div>

      {/* Right side - Sort & View toggle */}
      <div className="flex w-full sm:w-auto items-center gap-4">
        {/* Sort dropdown */}
        <div className="flex flex-1 sm:flex-none items-center gap-2">
          <label htmlFor="sort-select" className="hidden sm:block text-sm text-[var(--color-text-secondary)]">
            Sortiraj:
          </label>
          <select
            id="sort-select"
            value={currentSort}
            onChange={(e) => onSortChange(e.target.value)}
            className={cn(
              'flex-1 sm:flex-none sm:w-52',
              'h-10 px-3',
              'rounded-[var(--radius-button)]',
              'border border-[var(--color-border-primary)]',
              'bg-[var(--color-bg-primary)]',
              'text-sm text-[var(--color-text-primary)]',
              'focus:border-[var(--color-border-focus)] focus:outline-none focus:ring-1 focus:ring-[var(--color-border-focus)]',
              'cursor-pointer'
            )}
          >
            {sortOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* View toggle */}
        {showViewToggle && onViewModeChange && (
          <div className="hidden sm:flex items-center rounded-[var(--radius-button)] border border-[var(--color-border-primary)] p-1">
            <button
              onClick={() => onViewModeChange('grid')}
              className={cn(
                'flex h-8 w-8 items-center justify-center rounded-[var(--radius-sm)]',
                'transition-[var(--transition-fast)]',
                viewMode === 'grid'
                  ? 'bg-[var(--color-primary-500)] text-white'
                  : 'text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-tertiary)]'
              )}
              aria-label="Grid prikaz"
              aria-pressed={viewMode === 'grid'}
            >
              <GridIcon className="h-4 w-4" />
            </button>
            <button
              onClick={() => onViewModeChange('list')}
              className={cn(
                'flex h-8 w-8 items-center justify-center rounded-[var(--radius-sm)]',
                'transition-[var(--transition-fast)]',
                viewMode === 'list'
                  ? 'bg-[var(--color-primary-500)] text-white'
                  : 'text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-tertiary)]'
              )}
              aria-label="List prikaz"
              aria-pressed={viewMode === 'list'}
            >
              <ListIcon className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

// Icons
function FilterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
    </svg>
  )
}

function GridIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
    </svg>
  )
}

function ListIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
    </svg>
  )
}

'use client'

import { useState } from 'react'
import { cn } from '@/src/lib/utils'

export type MobileSortOption = {
  value: string
  label: string
}

export type MobileViewMode = 'grid' | 'list'

export interface MobileSortingBarProps {
  /** Ukupan broj rezultata */
  totalResults: number
  /** Trenutna opcija sortiranja */
  currentSort: string
  /** Opcije za sortiranje */
  sortOptions?: MobileSortOption[]
  /** Callback za promjenu sortiranja */
  onSortChange: (value: string) => void
  /** Trenutni prikaz (grid/list) */
  viewMode?: MobileViewMode
  /** Callback za promjenu prikaza */
  onViewModeChange?: (mode: MobileViewMode) => void
  /** Callback za otvaranje filtera */
  onOpenFilters?: () => void
  /** Broj aktivnih filtera */
  activeFiltersCount?: number
  className?: string
}

const defaultSortOptions: MobileSortOption[] = [
  { value: 'relevance', label: 'Relevantnost' },
  { value: 'price-asc', label: 'Cijena: niža → viša' },
  { value: 'price-desc', label: 'Cijena: viša → niža' },
  { value: 'name-asc', label: 'Naziv: A-Z' },
  { value: 'newest', label: 'Najnovije' },
]

export function MobileSortingBar({
  totalResults,
  currentSort,
  sortOptions = defaultSortOptions,
  onSortChange,
  viewMode = 'grid',
  onViewModeChange,
  onOpenFilters,
  activeFiltersCount = 0,
  className,
}: MobileSortingBarProps) {
  const [showSortModal, setShowSortModal] = useState(false)
  const currentSortLabel = sortOptions.find(o => o.value === currentSort)?.label || 'Sortiraj'

  return (
    <>
      <div className={cn('bg-white px-4 py-3', className)}>
        {/* Results count */}
        <div className="mb-3 flex items-center justify-between">
          <p className="text-xs text-neutral-500">
            <span className="font-semibold text-neutral-900">{totalResults.toLocaleString()}</span>
            {' '}proizvoda
          </p>

          {/* View mode toggle */}
          {onViewModeChange && (
            <div className="flex rounded-lg border border-neutral-200 p-0.5">
              <button
                onClick={() => onViewModeChange('grid')}
                className={cn(
                  'flex h-7 w-7 items-center justify-center rounded-md transition-colors',
                  viewMode === 'grid'
                    ? 'bg-[var(--color-primary-500)] text-white'
                    : 'text-neutral-400'
                )}
                aria-label="Grid prikaz"
              >
                <GridIcon className="h-4 w-4" />
              </button>
              <button
                onClick={() => onViewModeChange('list')}
                className={cn(
                  'flex h-7 w-7 items-center justify-center rounded-md transition-colors',
                  viewMode === 'list'
                    ? 'bg-[var(--color-primary-500)] text-white'
                    : 'text-neutral-400'
                )}
                aria-label="List prikaz"
              >
                <ListIcon className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>

        {/* Sort & Filter buttons */}
        <div className="flex gap-2">
          {/* Sort button */}
          <button
            onClick={() => setShowSortModal(true)}
            className={cn(
              'flex flex-1 items-center justify-center gap-2',
              'h-10 rounded-lg',
              'border border-neutral-200 bg-white',
              'text-sm font-medium text-neutral-700',
              'active:bg-neutral-50'
            )}
          >
            <SortIcon className="h-4 w-4" />
            <span className="truncate">{currentSortLabel}</span>
          </button>

          {/* Filter button */}
          {onOpenFilters && (
            <button
              onClick={onOpenFilters}
              className={cn(
                'flex flex-1 items-center justify-center gap-2',
                'h-10 rounded-lg',
                'border border-neutral-200 bg-white',
                'text-sm font-medium text-neutral-700',
                'active:bg-neutral-50',
                activeFiltersCount > 0 && 'border-[var(--color-primary-500)] text-[var(--color-primary-500)]'
              )}
            >
              <FilterIcon className="h-4 w-4" />
              <span>Filteri</span>
              {activeFiltersCount > 0 && (
                <span className="flex h-5 min-w-[20px] items-center justify-center rounded-full bg-[var(--color-primary-500)] px-1.5 text-xs font-bold text-white">
                  {activeFiltersCount}
                </span>
              )}
            </button>
          )}
        </div>
      </div>

      {/* Sort Modal */}
      {showSortModal && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setShowSortModal(false)}
          />
          <div className="absolute inset-x-0 bottom-0 animate-in slide-in-from-bottom rounded-t-2xl bg-white pb-8">
            <div className="flex items-center justify-between border-b border-neutral-100 px-4 py-4">
              <h3 className="text-base font-semibold text-neutral-900">Sortiraj po</h3>
              <button
                onClick={() => setShowSortModal(false)}
                className="flex h-8 w-8 items-center justify-center rounded-full text-neutral-400 hover:bg-neutral-100"
              >
                <CloseIcon className="h-5 w-5" />
              </button>
            </div>
            <div className="px-2 py-2">
              {sortOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => {
                    onSortChange(option.value)
                    setShowSortModal(false)
                  }}
                  className={cn(
                    'flex w-full items-center justify-between rounded-xl px-4 py-3',
                    'text-left text-sm',
                    currentSort === option.value
                      ? 'bg-[var(--color-primary-50)] text-[var(--color-primary-500)] font-medium'
                      : 'text-neutral-700 active:bg-neutral-50'
                  )}
                >
                  <span>{option.label}</span>
                  {currentSort === option.value && (
                    <CheckIcon className="h-5 w-5" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

// Icons
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

function SortIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
    </svg>
  )
}

function FilterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
    </svg>
  )
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}

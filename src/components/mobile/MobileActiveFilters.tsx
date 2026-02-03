'use client'

import { cn } from '@/src/lib/utils'

export interface ActiveFilter {
  id: string
  type: 'category' | 'brand' | 'price' | 'stock' | 'characteristic'
  label: string
  characteristicId?: string
}

export interface MobileActiveFiltersProps {
  /** Lista aktivnih filtera */
  filters: ActiveFilter[]
  /** Callback za uklanjanje filtera */
  onRemove: (filter: ActiveFilter) => void
  /** Callback za uklanjanje svih filtera */
  onClearAll?: () => void
  className?: string
}

export function MobileActiveFilters({
  filters,
  onRemove,
  onClearAll,
  className,
}: MobileActiveFiltersProps) {
  if (filters.length === 0) return null

  return (
    <div className={cn('bg-white px-4 py-3', className)}>
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={`${filter.type}-${filter.id}`}
            onClick={() => onRemove(filter)}
            className={cn(
              'inline-flex items-center gap-1.5',
              'rounded-full px-3 py-1.5',
              'bg-[var(--color-primary-50)] text-[var(--color-primary-600)]',
              'text-xs font-medium',
              'active:bg-[var(--color-primary-100)]'
            )}
          >
            <span className="max-w-[120px] truncate">{filter.label}</span>
            <CloseIcon className="h-3.5 w-3.5 shrink-0" />
          </button>
        ))}

        {onClearAll && filters.length > 1 && (
          <button
            onClick={onClearAll}
            className={cn(
              'inline-flex items-center gap-1',
              'rounded-full px-3 py-1.5',
              'border border-neutral-200 bg-white',
              'text-xs font-medium text-neutral-600',
              'active:bg-neutral-50'
            )}
          >
            Obriši sve
          </button>
        )}
      </div>
    </div>
  )
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

'use client'

import { useState, useRef } from 'react'
import { cn } from '@/src/lib/utils'
import FilterLines from '@/src/components/ui/icons/Line/General/FilterLines'
import ChevronDown from '@/src/components/ui/icons/Line/Arrows/ChevronDown'
import ChevronRight from '@/src/components/ui/icons/Line/Arrows/ChevronRight'

export interface FilterOption {
  id: string
  label: string
}

export interface CategoryFilter {
  id: string
  label: string
  options: FilterOption[]
}

export interface SortOption {
  id: string
  label: string
}

export interface TemuCategoryFiltersProps {
  filters?: CategoryFilter[]
  sortOptions?: SortOption[]
  defaultSort?: string
  onFilterChange?: (filterId: string, optionId: string) => void
  onSortChange?: (sortId: string) => void
  onFiltersClick?: () => void
  className?: string
}

const defaultSortOptions: SortOption[] = [
  { id: 'relevance', label: 'Relevantnost' },
  { id: 'price-asc', label: 'Cijena: Najniža' },
  { id: 'price-desc', label: 'Cijena: Najviša' },
  { id: 'newest', label: 'Najnovije' },
  { id: 'bestselling', label: 'Najprodavanije' },
  { id: 'rating', label: 'Najbolje ocijenjeno' },
]

const defaultFilters: CategoryFilter[] = [
  {
    id: 'color',
    label: 'Boja',
    options: [
      { id: 'black', label: 'Crna' },
      { id: 'white', label: 'Bijela' },
      { id: 'red', label: 'Crvena' },
      { id: 'blue', label: 'Plava' },
      { id: 'green', label: 'Zelena' },
      { id: 'silver', label: 'Srebrna' },
    ],
  },
  {
    id: 'feature',
    label: 'Značajka',
    options: [
      { id: 'waterproof', label: 'Vodootporno' },
      { id: 'wireless', label: 'Bežično' },
      { id: 'bluetooth', label: 'Bluetooth' },
      { id: 'usb-c', label: 'USB-C' },
    ],
  },
  {
    id: 'material',
    label: 'Materijal',
    options: [
      { id: 'plastic', label: 'Plastika' },
      { id: 'metal', label: 'Metal' },
      { id: 'leather', label: 'Koža' },
      { id: 'silicone', label: 'Silikon' },
    ],
  },
  {
    id: 'main-material',
    label: 'Glavni materijal',
    options: [
      { id: 'aluminum', label: 'Aluminij' },
      { id: 'steel', label: 'Čelik' },
      { id: 'carbon', label: 'Karbon' },
      { id: 'wood', label: 'Drvo' },
    ],
  },
  {
    id: 'brand',
    label: 'Brend',
    options: [
      { id: 'samsung', label: 'Samsung' },
      { id: 'apple', label: 'Apple' },
      { id: 'sony', label: 'Sony' },
      { id: 'lg', label: 'LG' },
      { id: 'xiaomi', label: 'Xiaomi' },
    ],
  },
  {
    id: 'wireless',
    label: 'Bežično svojstvo',
    options: [
      { id: 'wifi', label: 'WiFi' },
      { id: 'bluetooth', label: 'Bluetooth' },
      { id: 'nfc', label: 'NFC' },
      { id: '5g', label: '5G' },
    ],
  },
  {
    id: 'case-type',
    label: 'Vrsta školjke',
    options: [
      { id: 'hard', label: 'Tvrda' },
      { id: 'soft', label: 'Meka' },
      { id: 'hybrid', label: 'Hibridna' },
    ],
  },
  {
    id: 'battery',
    label: 'Svojstva baterije',
    options: [
      { id: 'removable', label: 'Zamjenjiva' },
      { id: 'built-in', label: 'Ugrađena' },
      { id: 'fast-charge', label: 'Brzo punjenje' },
    ],
  },
  {
    id: 'electronic',
    label: 'Sadrži elektronske',
    options: [
      { id: 'yes', label: 'Da' },
      { id: 'no', label: 'Ne' },
    ],
  },
]

/**
 * TemuCategoryFilters - Filter bar za kategoriju stranicu u Temu stilu
 *
 * Horizontalni scroll sa Filteri dugmetom, sortiranjem i dropdown filterima
 */
export function TemuCategoryFilters({
  filters = defaultFilters,
  sortOptions = defaultSortOptions,
  defaultSort = 'relevance',
  onFilterChange,
  onSortChange,
  onFiltersClick,
  className,
}: TemuCategoryFiltersProps) {
  const [activeSort, setActiveSort] = useState(defaultSort)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string>>({})
  const scrollRef = useRef<HTMLDivElement>(null)

  const handleSortChange = (sortId: string) => {
    setActiveSort(sortId)
    onSortChange?.(sortId)
    setOpenDropdown(null)
  }

  const handleFilterSelect = (filterId: string, optionId: string) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [filterId]: prev[filterId] === optionId ? '' : optionId,
    }))
    onFilterChange?.(filterId, optionId)
    setOpenDropdown(null)
  }

  const toggleDropdown = (dropdownId: string) => {
    setOpenDropdown((prev) => (prev === dropdownId ? null : dropdownId))
  }

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 200, behavior: 'smooth' })
  }

  const activeSortLabel =
    sortOptions.find((s) => s.id === activeSort)?.label || 'Relevantnost'

  return (
    <div
      className={cn(
        'w-full bg-[var(--color-bg-primary)] border-b border-[var(--color-border-primary)]',
        className
      )}
    >
      <div className="max-w-[var(--container-max-width)] mx-auto px-[var(--container-padding)]">
        <div className="flex items-center gap-2 py-3 relative">
          {/* Filteri button */}
          <button
            type="button"
            onClick={onFiltersClick}
            className={cn(
              'flex items-center gap-1.5 px-4 py-2 shrink-0',
              'border border-[var(--color-border-primary)] rounded-full',
              'text-[var(--color-text-primary)] text-sm font-medium',
              'hover:bg-[var(--color-bg-tertiary)] transition-colors'
            )}
          >
            <FilterLines className="w-4 h-4" />
            Filteri
          </button>

          {/* Sort dropdown */}
          <div className="relative shrink-0">
            <button
              type="button"
              onClick={() => toggleDropdown('sort')}
              className={cn(
                'flex items-center gap-1.5 px-4 py-2',
                'border border-[var(--color-border-primary)] rounded-full',
                'text-[var(--color-text-primary)] text-sm',
                'hover:bg-[var(--color-bg-tertiary)] transition-colors'
              )}
            >
              <span className="text-[var(--color-text-secondary)]">Sortiraj prema:</span>
              <span className="font-medium">{activeSortLabel}</span>
              <ChevronDown
                className={cn(
                  'w-4 h-4 transition-transform',
                  openDropdown === 'sort' && 'rotate-180'
                )}
              />
            </button>

            {openDropdown === 'sort' && (
              <div className="absolute top-full left-0 mt-1 bg-[var(--color-bg-primary)] border border-[var(--color-border-primary)] rounded-lg shadow-lg z-50 min-w-[200px]">
                {sortOptions.map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => handleSortChange(option.id)}
                    className={cn(
                      'w-full text-left px-4 py-2.5 text-sm transition-colors',
                      activeSort === option.id
                        ? 'text-[var(--color-primary-500)] font-medium bg-[var(--color-primary-50)]'
                        : 'text-[var(--color-text-primary)] hover:bg-[var(--color-bg-tertiary)]'
                    )}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Filter dropdowns - scrollable */}
          <div
            ref={scrollRef}
            className="flex items-center gap-2 overflow-x-auto flex-1"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {filters.map((filter) => (
              <div key={filter.id} className="relative shrink-0">
                <button
                  type="button"
                  onClick={() => toggleDropdown(filter.id)}
                  className={cn(
                    'flex items-center gap-1.5 px-4 py-2',
                    'border rounded-full text-sm transition-colors',
                    selectedFilters[filter.id]
                      ? 'border-[var(--color-primary-500)] text-[var(--color-primary-500)] bg-[var(--color-primary-50)]'
                      : 'border-[var(--color-border-primary)] text-[var(--color-text-primary)] hover:bg-[var(--color-bg-tertiary)]'
                  )}
                >
                  {filter.label}
                  <ChevronDown
                    className={cn(
                      'w-3.5 h-3.5 transition-transform',
                      openDropdown === filter.id && 'rotate-180'
                    )}
                  />
                </button>

                {openDropdown === filter.id && (
                  <div className="absolute top-full left-0 mt-1 bg-[var(--color-bg-primary)] border border-[var(--color-border-primary)] rounded-lg shadow-lg z-50 min-w-[180px]">
                    {filter.options.map((option) => (
                      <button
                        key={option.id}
                        type="button"
                        onClick={() => handleFilterSelect(filter.id, option.id)}
                        className={cn(
                          'w-full text-left px-4 py-2.5 text-sm transition-colors',
                          selectedFilters[filter.id] === option.id
                            ? 'text-[var(--color-primary-500)] font-medium bg-[var(--color-primary-50)]'
                            : 'text-[var(--color-text-primary)] hover:bg-[var(--color-bg-tertiary)]'
                        )}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Scroll right button */}
          <button
            type="button"
            onClick={scrollRight}
            className={cn(
              'flex items-center justify-center w-8 h-8 shrink-0',
              'border border-[var(--color-border-primary)] rounded-full',
              'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]',
              'hover:bg-[var(--color-bg-tertiary)] transition-colors'
            )}
            aria-label="Pomakni filtere desno"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Click outside overlay to close dropdowns */}
      {openDropdown && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setOpenDropdown(null)}
        />
      )}
    </div>
  )
}

export default TemuCategoryFilters

'use client'

import { useState } from 'react'
import { cn } from '@/src/lib/utils'

export interface MobileFilterOption {
  id: string
  label: string
  count?: number
}

export interface MobilePriceRange {
  min: number
  max: number
}

export interface MobileCharacteristicFilter {
  id: string
  label: string
  options: MobileFilterOption[]
}

export interface MobileFilterContentProps {
  /** Kategorije/Podkategorije */
  categories?: MobileFilterOption[]
  selectedCategories?: string[]
  onCategoryChange?: (ids: string[]) => void
  /** Brendovi */
  brands?: MobileFilterOption[]
  selectedBrands?: string[]
  onBrandChange?: (ids: string[]) => void
  /** Raspon cijena */
  priceRange?: MobilePriceRange
  currentPriceRange?: MobilePriceRange
  onPriceChange?: (range: MobilePriceRange) => void
  currency?: string
  /** Dostupnost */
  inStockOnly?: boolean
  onInStockChange?: (inStock: boolean) => void
  /** Dinamički filteri (karakteristike) */
  characteristics?: MobileCharacteristicFilter[]
  selectedCharacteristics?: Record<string, string[]>
  onCharacteristicChange?: (characteristicId: string, optionIds: string[]) => void
  /** Reset */
  onResetFilters?: () => void
}

export function MobileFilterContent({
  categories = [],
  selectedCategories = [],
  onCategoryChange,
  brands = [],
  selectedBrands = [],
  onBrandChange,
  priceRange = { min: 0, max: 1000 },
  currentPriceRange,
  onPriceChange,
  currency = '€',
  inStockOnly = false,
  onInStockChange,
  characteristics = [],
  selectedCharacteristics = {},
  onCharacteristicChange,
  onResetFilters,
}: MobileFilterContentProps) {
  const [localPriceMin, setLocalPriceMin] = useState(currentPriceRange?.min ?? priceRange.min)
  const [localPriceMax, setLocalPriceMax] = useState(currentPriceRange?.max ?? priceRange.max)
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    categories: true,
    brands: true,
    price: true,
    availability: true,
    ...Object.fromEntries(characteristics.map(c => [c.id, true])),
  })

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const handleCategoryToggle = (id: string) => {
    const newSelected = selectedCategories.includes(id)
      ? selectedCategories.filter(cid => cid !== id)
      : [...selectedCategories, id]
    onCategoryChange?.(newSelected)
  }

  const handleBrandToggle = (id: string) => {
    const newSelected = selectedBrands.includes(id)
      ? selectedBrands.filter(bid => bid !== id)
      : [...selectedBrands, id]
    onBrandChange?.(newSelected)
  }

  const handleCharacteristicToggle = (characteristicId: string, optionId: string) => {
    const current = selectedCharacteristics[characteristicId] || []
    const newSelected = current.includes(optionId)
      ? current.filter(id => id !== optionId)
      : [...current, optionId]
    onCharacteristicChange?.(characteristicId, newSelected)
  }

  const handlePriceApply = () => {
    onPriceChange?.({ min: localPriceMin, max: localPriceMax })
  }

  const hasActiveFilters =
    selectedCategories.length > 0 ||
    selectedBrands.length > 0 ||
    inStockOnly ||
    Object.values(selectedCharacteristics).some(arr => arr.length > 0) ||
    (currentPriceRange && (currentPriceRange.min > priceRange.min || currentPriceRange.max < priceRange.max))

  return (
    <div className="divide-y divide-neutral-100">
      {/* Reset button */}
      {hasActiveFilters && (
        <div className="px-4 py-3">
          <button
            onClick={onResetFilters}
            className="text-sm font-medium text-[var(--color-primary-500)] active:text-[var(--color-primary-600)]"
          >
            Resetiraj sve filtere
          </button>
        </div>
      )}

      {/* Kategorije */}
      {categories.length > 0 && (
        <FilterSection
          title="Kategorije"
          isExpanded={expandedSections.categories}
          onToggle={() => toggleSection('categories')}
          count={selectedCategories.length}
        >
          <div className="space-y-1">
            {categories.map(category => (
              <FilterCheckbox
                key={category.id}
                id={`cat-${category.id}`}
                label={category.label}
                count={category.count}
                checked={selectedCategories.includes(category.id)}
                onChange={() => handleCategoryToggle(category.id)}
              />
            ))}
          </div>
        </FilterSection>
      )}

      {/* Brendovi */}
      {brands.length > 0 && (
        <FilterSection
          title="Proizvođač"
          isExpanded={expandedSections.brands}
          onToggle={() => toggleSection('brands')}
          count={selectedBrands.length}
        >
          <div className="max-h-56 space-y-1 overflow-y-auto">
            {brands.map(brand => (
              <FilterCheckbox
                key={brand.id}
                id={`brand-${brand.id}`}
                label={brand.label}
                count={brand.count}
                checked={selectedBrands.includes(brand.id)}
                onChange={() => handleBrandToggle(brand.id)}
              />
            ))}
          </div>
        </FilterSection>
      )}

      {/* Cijena */}
      <FilterSection
        title="Cijena"
        isExpanded={expandedSections.price}
        onToggle={() => toggleSection('price')}
      >
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="flex-1">
              <div className="relative">
                <input
                  type="number"
                  min={priceRange.min}
                  max={localPriceMax}
                  value={localPriceMin}
                  onChange={(e) => setLocalPriceMin(Number(e.target.value))}
                  className={cn(
                    'w-full rounded-lg',
                    'border border-neutral-200 bg-white',
                    'px-3 py-2.5 pr-7',
                    'text-sm text-neutral-900',
                    'focus:border-[var(--color-primary-500)] focus:outline-none focus:ring-1 focus:ring-[var(--color-primary-500)]'
                  )}
                  placeholder="Od"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-neutral-400">
                  {currency}
                </span>
              </div>
            </div>
            <span className="text-neutral-300">—</span>
            <div className="flex-1">
              <div className="relative">
                <input
                  type="number"
                  min={localPriceMin}
                  max={priceRange.max}
                  value={localPriceMax}
                  onChange={(e) => setLocalPriceMax(Number(e.target.value))}
                  className={cn(
                    'w-full rounded-lg',
                    'border border-neutral-200 bg-white',
                    'px-3 py-2.5 pr-7',
                    'text-sm text-neutral-900',
                    'focus:border-[var(--color-primary-500)] focus:outline-none focus:ring-1 focus:ring-[var(--color-primary-500)]'
                  )}
                  placeholder="Do"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-neutral-400">
                  {currency}
                </span>
              </div>
            </div>
          </div>
          <button
            onClick={handlePriceApply}
            className={cn(
              'w-full rounded-lg',
              'bg-neutral-100 py-2.5',
              'text-sm font-medium text-neutral-700',
              'active:bg-neutral-200'
            )}
          >
            Primijeni cijenu
          </button>
        </div>
      </FilterSection>

      {/* Dostupnost */}
      <FilterSection
        title="Dostupnost"
        isExpanded={expandedSections.availability}
        onToggle={() => toggleSection('availability')}
      >
        <FilterCheckbox
          id="in-stock-only"
          label="Samo na stanju"
          checked={inStockOnly}
          onChange={() => onInStockChange?.(!inStockOnly)}
        />
      </FilterSection>

      {/* Dinamičke karakteristike */}
      {characteristics.map(characteristic => (
        <FilterSection
          key={characteristic.id}
          title={characteristic.label}
          isExpanded={expandedSections[characteristic.id]}
          onToggle={() => toggleSection(characteristic.id)}
          count={(selectedCharacteristics[characteristic.id] || []).length}
        >
          <div className="space-y-1">
            {characteristic.options.map(option => (
              <FilterCheckbox
                key={option.id}
                id={`${characteristic.id}-${option.id}`}
                label={option.label}
                count={option.count}
                checked={(selectedCharacteristics[characteristic.id] || []).includes(option.id)}
                onChange={() => handleCharacteristicToggle(characteristic.id, option.id)}
              />
            ))}
          </div>
        </FilterSection>
      ))}
    </div>
  )
}

interface FilterSectionProps {
  title: string
  isExpanded: boolean
  onToggle: () => void
  children: React.ReactNode
  count?: number
}

function FilterSection({ title, isExpanded, onToggle, children, count }: FilterSectionProps) {
  return (
    <div className="px-4 py-3">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-1"
        aria-expanded={isExpanded}
      >
        <span className="flex items-center gap-2">
          <span className="text-sm font-medium text-neutral-900">{title}</span>
          {count !== undefined && count > 0 && (
            <span className="flex h-5 min-w-[20px] items-center justify-center rounded-full bg-[var(--color-primary-500)] px-1.5 text-xs font-bold text-white">
              {count}
            </span>
          )}
        </span>
        <ChevronIcon className={cn('h-5 w-5 text-neutral-400 transition-transform', isExpanded && 'rotate-180')} />
      </button>
      {isExpanded && <div className="mt-3">{children}</div>}
    </div>
  )
}

interface FilterCheckboxProps {
  id: string
  label: string
  count?: number
  checked: boolean
  onChange: () => void
}

function FilterCheckbox({ id, label, count, checked, onChange }: FilterCheckboxProps) {
  return (
    <label
      htmlFor={id}
      className={cn(
        'flex cursor-pointer items-center gap-3 rounded-lg py-2.5 px-2 -mx-2',
        'active:bg-neutral-50'
      )}
    >
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        className={cn(
          'h-5 w-5 rounded',
          'border-2 border-neutral-300',
          'text-[var(--color-primary-500)]',
          'focus:ring-2 focus:ring-[var(--color-primary-500)] focus:ring-offset-1',
          'cursor-pointer'
        )}
      />
      <span className="flex-1 text-sm text-neutral-700">{label}</span>
      {count !== undefined && (
        <span className="text-xs text-neutral-400">({count})</span>
      )}
    </label>
  )
}

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  )
}

// Sample filter data
export const sampleFilterCategories: MobileFilterOption[] = [
  { id: 'prekidaci', label: 'Prekidači i utičnice', count: 1245 },
  { id: 'razdjelnici', label: 'Razdjelnici', count: 342 },
  { id: 'kablovi', label: 'Kablovi i vodiči', count: 856 },
  { id: 'osiguraci', label: 'Osigurači', count: 234 },
  { id: 'rasvjeta', label: 'Rasvjeta', count: 567 },
]

export const sampleFilterBrands: MobileFilterOption[] = [
  { id: 'legrand', label: 'Legrand', count: 892 },
  { id: 'schneider', label: 'Schneider Electric', count: 654 },
  { id: 'abb', label: 'ABB', count: 432 },
  { id: 'siemens', label: 'Siemens', count: 321 },
  { id: 'hager', label: 'Hager', count: 234 },
  { id: 'eaton', label: 'Eaton', count: 187 },
]

export const sampleCharacteristics: MobileCharacteristicFilter[] = [
  {
    id: 'napon',
    label: 'Napon',
    options: [
      { id: '230v', label: '230V', count: 1234 },
      { id: '400v', label: '400V', count: 567 },
      { id: '24v', label: '24V', count: 234 },
      { id: '12v', label: '12V', count: 123 },
    ],
  },
  {
    id: 'ip-zastita',
    label: 'IP zaštita',
    options: [
      { id: 'ip20', label: 'IP20', count: 892 },
      { id: 'ip44', label: 'IP44', count: 345 },
      { id: 'ip55', label: 'IP55', count: 234 },
      { id: 'ip65', label: 'IP65', count: 167 },
      { id: 'ip67', label: 'IP67', count: 89 },
    ],
  },
  {
    id: 'boja',
    label: 'Boja',
    options: [
      { id: 'bijela', label: 'Bijela', count: 1567 },
      { id: 'crna', label: 'Crna', count: 432 },
      { id: 'siva', label: 'Siva', count: 321 },
      { id: 'antracit', label: 'Antracit', count: 234 },
    ],
  },
]

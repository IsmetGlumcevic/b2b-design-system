'use client'

import { useState, type HTMLAttributes } from 'react'
import { cn } from '@/src/lib/utils'

export interface FilterOption {
  id: string
  label: string
  count?: number
}

export interface PriceRange {
  min: number
  max: number
}

export interface FilterSidebarProps extends HTMLAttributes<HTMLElement> {
  /** Filteri za brendove */
  brands?: FilterOption[]
  /** Filteri za podkategorije */
  subcategories?: FilterOption[]
  /** Raspon cijena */
  priceRange?: PriceRange
  /** Dostupnost na stanju */
  showInStockOnly?: boolean
  /** Callback za promjenu filtera brenda */
  onBrandChange?: (brandIds: string[]) => void
  /** Callback za promjenu filtera podkategorije */
  onSubcategoryChange?: (subcategoryIds: string[]) => void
  /** Callback za promjenu raspona cijena */
  onPriceChange?: (range: PriceRange) => void
  /** Callback za promjenu dostupnosti */
  onInStockChange?: (inStock: boolean) => void
  /** Callback za reset svih filtera */
  onResetFilters?: () => void
  /** Selektirani brendovi */
  selectedBrands?: string[]
  /** Selektirane podkategorije */
  selectedSubcategories?: string[]
  /** Trenutni raspon cijena */
  currentPriceRange?: PriceRange
  /** Valuta */
  currency?: string
  /** Label za sekciju brendova */
  brandLabel?: string
  /** Label za sekciju podkategorija */
  subcategoryLabel?: string
}

export function FilterSidebar({
  brands = [],
  subcategories = [],
  priceRange = { min: 0, max: 1000 },
  showInStockOnly = false,
  onBrandChange,
  onSubcategoryChange,
  onPriceChange,
  onInStockChange,
  onResetFilters,
  selectedBrands = [],
  selectedSubcategories = [],
  currentPriceRange,
  currency = '€',
  brandLabel = 'Proizvođač',
  subcategoryLabel = 'Podkategorije',
  className,
  ...props
}: FilterSidebarProps) {
  const [localPriceMin, setLocalPriceMin] = useState(currentPriceRange?.min ?? priceRange.min)
  const [localPriceMax, setLocalPriceMax] = useState(currentPriceRange?.max ?? priceRange.max)
  const [isInStock, setIsInStock] = useState(showInStockOnly)
  const [expandedSections, setExpandedSections] = useState({
    subcategories: true,
    brands: true,
    price: true,
    availability: true,
  })

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const handleBrandToggle = (brandId: string) => {
    const newSelected = selectedBrands.includes(brandId)
      ? selectedBrands.filter(id => id !== brandId)
      : [...selectedBrands, brandId]
    onBrandChange?.(newSelected)
  }

  const handleSubcategoryToggle = (subcategoryId: string) => {
    const newSelected = selectedSubcategories.includes(subcategoryId)
      ? selectedSubcategories.filter(id => id !== subcategoryId)
      : [...selectedSubcategories, subcategoryId]
    onSubcategoryChange?.(newSelected)
  }

  const handlePriceApply = () => {
    onPriceChange?.({ min: localPriceMin, max: localPriceMax })
  }

  const handleInStockToggle = () => {
    const newValue = !isInStock
    setIsInStock(newValue)
    onInStockChange?.(newValue)
  }

  const hasActiveFilters = selectedBrands.length > 0 ||
    selectedSubcategories.length > 0 ||
    isInStock ||
    (currentPriceRange && (currentPriceRange.min > priceRange.min || currentPriceRange.max < priceRange.max))

  return (
    <aside
      className={cn(
        'w-full lg:w-[var(--sidebar-width)]',
        'bg-[var(--color-bg-primary)]',
        'rounded-[var(--radius-lg)]',
        'border border-[var(--color-border-primary)]',
        className
      )}
      {...props}
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[var(--color-border-primary)] p-4">
        <h2 className="font-semibold text-[var(--color-text-primary)]">Filteri</h2>
        {hasActiveFilters && (
          <button
            onClick={onResetFilters}
            className="text-sm text-[var(--color-primary-500)] hover:text-[var(--color-primary-hover)] transition-[var(--transition-fast)]"
          >
            Resetiraj
          </button>
        )}
      </div>

      <div className="divide-y divide-[var(--color-border-primary)]">
        {/* Podkategorije */}
        {subcategories.length > 0 && (
          <FilterSection
            title={subcategoryLabel}
            isExpanded={expandedSections.subcategories}
            onToggle={() => toggleSection('subcategories')}
          >
            <div className="space-y-2">
              {subcategories.map(subcategory => (
                <FilterCheckbox
                  key={subcategory.id}
                  id={`subcategory-${subcategory.id}`}
                  label={subcategory.label}
                  count={subcategory.count}
                  checked={selectedSubcategories.includes(subcategory.id)}
                  onChange={() => handleSubcategoryToggle(subcategory.id)}
                />
              ))}
            </div>
          </FilterSection>
        )}

        {/* Brendovi */}
        {brands.length > 0 && (
          <FilterSection
            title={brandLabel}
            isExpanded={expandedSections.brands}
            onToggle={() => toggleSection('brands')}
          >
            <div className="space-y-2 max-h-60 overflow-y-auto">
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

        {/* Raspon cijena */}
        <FilterSection
          title="Cijena"
          isExpanded={expandedSections.price}
          onToggle={() => toggleSection('price')}
        >
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex-1">
                <label className="sr-only">Minimalna cijena</label>
                <div className="relative">
                  <input
                    type="number"
                    min={priceRange.min}
                    max={localPriceMax}
                    value={localPriceMin}
                    onChange={(e) => setLocalPriceMin(Number(e.target.value))}
                    className={cn(
                      'w-full rounded-[var(--radius-input)]',
                      'border border-[var(--color-border-primary)]',
                      'bg-[var(--color-bg-primary)]',
                      'px-3 py-2 pr-8',
                      'text-sm text-[var(--color-text-primary)]',
                      'focus:border-[var(--color-border-focus)] focus:outline-none focus:ring-1 focus:ring-[var(--color-border-focus)]'
                    )}
                    placeholder="Od"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-[var(--color-text-tertiary)]">
                    {currency}
                  </span>
                </div>
              </div>
              <span className="text-[var(--color-text-tertiary)]">—</span>
              <div className="flex-1">
                <label className="sr-only">Maksimalna cijena</label>
                <div className="relative">
                  <input
                    type="number"
                    min={localPriceMin}
                    max={priceRange.max}
                    value={localPriceMax}
                    onChange={(e) => setLocalPriceMax(Number(e.target.value))}
                    className={cn(
                      'w-full rounded-[var(--radius-input)]',
                      'border border-[var(--color-border-primary)]',
                      'bg-[var(--color-bg-primary)]',
                      'px-3 py-2 pr-8',
                      'text-sm text-[var(--color-text-primary)]',
                      'focus:border-[var(--color-border-focus)] focus:outline-none focus:ring-1 focus:ring-[var(--color-border-focus)]'
                    )}
                    placeholder="Do"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-[var(--color-text-tertiary)]">
                    {currency}
                  </span>
                </div>
              </div>
            </div>
            <button
              onClick={handlePriceApply}
              className={cn(
                'w-full rounded-[var(--radius-button)]',
                'bg-[var(--color-neutral-100)]',
                'px-4 py-2',
                'text-sm font-medium text-[var(--color-text-primary)]',
                'hover:bg-[var(--color-neutral-200)]',
                'transition-[var(--transition-fast)]'
              )}
            >
              Primijeni
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
            id="in-stock"
            label="Samo na stanju"
            checked={isInStock}
            onChange={handleInStockToggle}
          />
        </FilterSection>
      </div>
    </aside>
  )
}

interface FilterSectionProps {
  title: string
  isExpanded: boolean
  onToggle: () => void
  children: React.ReactNode
}

function FilterSection({ title, isExpanded, onToggle, children }: FilterSectionProps) {
  return (
    <div className="p-4">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between mb-3"
        aria-expanded={isExpanded}
      >
        <span className="text-sm font-medium text-[var(--color-text-primary)]">{title}</span>
        <ChevronIcon className={cn('h-4 w-4 text-[var(--color-text-tertiary)] transition-transform', isExpanded && 'rotate-180')} />
      </button>
      {isExpanded && children}
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
      className="flex cursor-pointer items-center gap-3 rounded-[var(--radius-sm)] py-1 hover:bg-[var(--color-bg-secondary)] px-1 -mx-1 transition-[var(--transition-fast)]"
    >
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        className={cn(
          'h-4 w-4 rounded-[var(--radius-sm)]',
          'border border-[var(--color-border-primary)]',
          'text-[var(--color-primary-500)]',
          'focus:ring-2 focus:ring-[var(--color-primary-500)] focus:ring-offset-1',
          'cursor-pointer'
        )}
      />
      <span className="flex-1 text-sm text-[var(--color-text-secondary)]">{label}</span>
      {count !== undefined && (
        <span className="text-xs text-[var(--color-text-tertiary)]">({count})</span>
      )}
    </label>
  )
}

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  )
}

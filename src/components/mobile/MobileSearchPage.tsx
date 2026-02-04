'use client'

import { useState, useCallback, useMemo } from 'react'
import { cn } from '@/src/lib/utils'
import { MobileSearchBar } from './MobileSearchBar'
import { MobileSortingBar, type MobileViewMode } from './MobileSortingBar'
import { MobileProductCard, type MobileProduct } from './MobileProductCard'
import { MobileActiveFilters, type ActiveFilter } from './MobileActiveFilters'
import {
  MobileFilterContent,
  type MobileFilterOption,
  type MobilePriceRange,
  type MobileCharacteristicFilter,
} from './MobileFilterContent'
import { MobileFilterDrawer } from '@/src/components/ui/MobileFilterDrawer/MobileFilterDrawer'

export interface MobileSearchPageProps {
  /** Search query */
  searchQuery?: string
  onSearchChange?: (query: string) => void
  onSearchSubmit?: (query: string) => void
  /** Products */
  products: MobileProduct[]
  totalResults: number
  /** Sorting */
  currentSort?: string
  onSortChange?: (sort: string) => void
  /** View mode */
  viewMode?: MobileViewMode
  onViewModeChange?: (mode: MobileViewMode) => void
  /** Filters */
  categories?: MobileFilterOption[]
  selectedCategories?: string[]
  onCategoryChange?: (ids: string[]) => void
  brands?: MobileFilterOption[]
  selectedBrands?: string[]
  onBrandChange?: (ids: string[]) => void
  priceRange?: MobilePriceRange
  currentPriceRange?: MobilePriceRange
  onPriceChange?: (range: MobilePriceRange) => void
  inStockOnly?: boolean
  onInStockChange?: (inStock: boolean) => void
  characteristics?: MobileCharacteristicFilter[]
  selectedCharacteristics?: Record<string, string[]>
  onCharacteristicChange?: (characteristicId: string, optionIds: string[]) => void
  onResetFilters?: () => void
  /** Product actions */
  onProductPress?: (product: MobileProduct) => void
  onAddToCart?: (product: MobileProduct) => void
  onFavorite?: (product: MobileProduct) => void
  favoriteIds?: string[]
  /** Loading state */
  isLoading?: boolean
  /** Empty state */
  emptyMessage?: string
  /** Filter drawer positioning */
  filterDrawerPosition?: 'fixed' | 'absolute'
  /** Sort modal positioning */
  sortModalPosition?: 'fixed' | 'absolute'
  className?: string
}

export function MobileSearchPage({
  searchQuery = '',
  onSearchChange,
  onSearchSubmit,
  products,
  totalResults,
  currentSort = 'relevance',
  onSortChange,
  viewMode = 'grid',
  onViewModeChange,
  categories = [],
  selectedCategories = [],
  onCategoryChange,
  brands = [],
  selectedBrands = [],
  onBrandChange,
  priceRange = { min: 0, max: 1000 },
  currentPriceRange,
  onPriceChange,
  inStockOnly = false,
  onInStockChange,
  characteristics = [],
  selectedCharacteristics = {},
  onCharacteristicChange,
  onResetFilters,
  onProductPress,
  onAddToCart,
  onFavorite,
  favoriteIds = [],
  isLoading = false,
  emptyMessage = 'Nema proizvoda koji odgovaraju vašoj pretrazi',
  filterDrawerPosition = 'fixed',
  sortModalPosition = 'fixed',
  className,
}: MobileSearchPageProps) {
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  // Calculate active filters count
  const activeFiltersCount = useMemo(() => {
    let count = 0
    count += selectedCategories.length
    count += selectedBrands.length
    if (inStockOnly) count += 1
    if (currentPriceRange && (currentPriceRange.min > priceRange.min || currentPriceRange.max < priceRange.max)) {
      count += 1
    }
    Object.values(selectedCharacteristics).forEach(arr => {
      count += arr.length
    })
    return count
  }, [selectedCategories, selectedBrands, inStockOnly, currentPriceRange, priceRange, selectedCharacteristics])

  // Build active filters list for chips
  const activeFilters = useMemo(() => {
    const filters: ActiveFilter[] = []

    // Categories
    selectedCategories.forEach(id => {
      const cat = categories.find(c => c.id === id)
      if (cat) {
        filters.push({ id, type: 'category', label: cat.label })
      }
    })

    // Brands
    selectedBrands.forEach(id => {
      const brand = brands.find(b => b.id === id)
      if (brand) {
        filters.push({ id, type: 'brand', label: brand.label })
      }
    })

    // Price
    if (currentPriceRange && (currentPriceRange.min > priceRange.min || currentPriceRange.max < priceRange.max)) {
      filters.push({
        id: 'price',
        type: 'price',
        label: `${currentPriceRange.min}€ - ${currentPriceRange.max}€`,
      })
    }

    // Stock
    if (inStockOnly) {
      filters.push({ id: 'stock', type: 'stock', label: 'Na stanju' })
    }

    // Characteristics
    Object.entries(selectedCharacteristics).forEach(([charId, optionIds]) => {
      const char = characteristics.find(c => c.id === charId)
      if (char) {
        optionIds.forEach(optId => {
          const opt = char.options.find(o => o.id === optId)
          if (opt) {
            filters.push({
              id: optId,
              type: 'characteristic',
              label: opt.label,
              characteristicId: charId,
            })
          }
        })
      }
    })

    return filters
  }, [selectedCategories, categories, selectedBrands, brands, currentPriceRange, priceRange, inStockOnly, selectedCharacteristics, characteristics])

  // Handle removing a filter chip
  const handleRemoveFilter = useCallback((filter: ActiveFilter) => {
    switch (filter.type) {
      case 'category':
        onCategoryChange?.(selectedCategories.filter(id => id !== filter.id))
        break
      case 'brand':
        onBrandChange?.(selectedBrands.filter(id => id !== filter.id))
        break
      case 'price':
        onPriceChange?.(priceRange)
        break
      case 'stock':
        onInStockChange?.(false)
        break
      case 'characteristic':
        if (filter.characteristicId) {
          const current = selectedCharacteristics[filter.characteristicId] || []
          onCharacteristicChange?.(filter.characteristicId, current.filter(id => id !== filter.id))
        }
        break
    }
  }, [selectedCategories, selectedBrands, selectedCharacteristics, priceRange, onCategoryChange, onBrandChange, onPriceChange, onInStockChange, onCharacteristicChange])

  return (
    <div className={cn('flex h-full flex-col bg-neutral-50', className)}>
      {/* Search Bar */}
      <div className="sticky top-0 z-10 bg-white shadow-sm">
        <MobileSearchBar
          value={searchQuery}
          onChange={onSearchChange}
          onSubmit={onSearchSubmit}
          placeholder="Pretraži proizvode..."
          autoFocus
        />
      </div>

      {/* Sorting Bar */}
      <MobileSortingBar
        totalResults={totalResults}
        currentSort={currentSort}
        onSortChange={onSortChange || (() => {})}
        viewMode={viewMode}
        onViewModeChange={onViewModeChange}
        onOpenFilters={() => setIsFilterOpen(true)}
        activeFiltersCount={activeFiltersCount}
        sortModalPosition={sortModalPosition}
      />

      {/* Active Filters */}
      <MobileActiveFilters
        filters={activeFilters}
        onRemove={handleRemoveFilter}
        onClearAll={onResetFilters}
      />

      {/* Product List */}
      <div className="flex-1 overflow-y-auto">
        {isLoading ? (
          <div className="flex h-48 items-center justify-center">
            <LoadingSpinner />
          </div>
        ) : products.length === 0 ? (
          <div className="flex h-48 flex-col items-center justify-center px-4 text-center">
            <EmptyIcon className="mb-3 h-12 w-12 text-neutral-300" />
            <p className="text-sm text-neutral-500">{emptyMessage}</p>
          </div>
        ) : viewMode === 'grid' ? (
          <div className="grid grid-cols-2 gap-3 p-4">
            {products.map(product => (
              <MobileProductCard
                key={product.id}
                product={product}
                variant="vertical"
                onPress={() => onProductPress?.(product)}
                onAddToCart={() => onAddToCart?.(product)}
                onFavorite={() => onFavorite?.(product)}
                isFavorite={favoriteIds.includes(product.id)}
                className="w-full"
              />
            ))}
          </div>
        ) : (
          <div className="space-y-3 p-4">
            {products.map(product => (
              <MobileProductCard
                key={product.id}
                product={product}
                variant="horizontal"
                onPress={() => onProductPress?.(product)}
                onAddToCart={() => onAddToCart?.(product)}
                onFavorite={() => onFavorite?.(product)}
                isFavorite={favoriteIds.includes(product.id)}
              />
            ))}
          </div>
        )}

        {/* Bottom spacing */}
        <div className="h-4" />
      </div>

      {/* Filter Drawer */}
      <MobileFilterDrawer
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        title="Filteri"
        position={filterDrawerPosition}
      >
        <MobileFilterContent
          categories={categories}
          selectedCategories={selectedCategories}
          onCategoryChange={onCategoryChange}
          brands={brands}
          selectedBrands={selectedBrands}
          onBrandChange={onBrandChange}
          priceRange={priceRange}
          currentPriceRange={currentPriceRange}
          onPriceChange={onPriceChange}
          inStockOnly={inStockOnly}
          onInStockChange={onInStockChange}
          characteristics={characteristics}
          selectedCharacteristics={selectedCharacteristics}
          onCharacteristicChange={onCharacteristicChange}
          onResetFilters={onResetFilters}
        />
      </MobileFilterDrawer>
    </div>
  )
}

function LoadingSpinner() {
  return (
    <div className="h-8 w-8 animate-spin rounded-full border-2 border-neutral-200 border-t-[var(--color-primary-500)]" />
  )
}

function EmptyIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>
  )
}

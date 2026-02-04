'use client'

import { useMemo } from 'react'
import { cn } from '@/src/lib/utils'
import { MobileSearchBar } from './MobileSearchBar'
import { MobileProductCard, type MobileProduct } from './MobileProductCard'

interface QuickChip {
  id: string
  label: string
  meta?: string
}

interface MobileSearchModalProps {
  isOpen: boolean
  query: string
  onQueryChange: (value: string) => void
  onClose: () => void
  products: MobileProduct[]
  onSelectProduct?: (product: MobileProduct) => void
  onAddToCart?: (product: MobileProduct) => void
  onViewAll?: (query: string) => void
  recentSearches?: string[]
  popularCategories?: QuickChip[]
  popularBrands?: QuickChip[]
}

const defaultRecentSearches = ['prekidači', 'kablovi', 'rasvjeta', 'utikači']
const defaultPopularCategories: QuickChip[] = [
  { id: 'cat-1', label: 'Kablovi', meta: '2.450' },
  { id: 'cat-2', label: 'Rasvjeta', meta: '1.820' },
  { id: 'cat-3', label: 'Prekidači', meta: '3.150' },
  { id: 'cat-4', label: 'Osigurači', meta: '890' },
]
const defaultPopularBrands: QuickChip[] = [
  { id: 'brand-1', label: 'Legrand', meta: '2.100' },
  { id: 'brand-2', label: 'ABB', meta: '1.250' },
  { id: 'brand-3', label: 'Schneider', meta: '1.800' },
]

export function MobileSearchModal({
  isOpen,
  query,
  onQueryChange,
  onClose,
  products,
  onSelectProduct,
  onAddToCart,
  onViewAll,
  recentSearches = defaultRecentSearches,
  popularCategories = defaultPopularCategories,
  popularBrands = defaultPopularBrands,
}: MobileSearchModalProps) {
  const normalizedQuery = query.trim().toLowerCase()

  const filteredProducts = useMemo(() => {
    if (!normalizedQuery) return products.slice(0, 5)
    return products.filter((product) => {
      return (
        product.name.toLowerCase().includes(normalizedQuery) ||
        product.sku.toLowerCase().includes(normalizedQuery) ||
        product.manufacturer.toLowerCase().includes(normalizedQuery)
      )
    })
  }, [normalizedQuery, products])

  if (!isOpen) return null

  const hasQuery = normalizedQuery.length > 0

  return (
    <div className="absolute inset-0 z-50">
      <div className="absolute inset-0 bg-neutral-900/40 backdrop-blur-sm" onClick={onClose} />
      <div className="absolute inset-x-0 top-0 bottom-0 flex flex-col overflow-hidden rounded-t-3xl bg-white shadow-2xl pt-[calc(var(--safe-area-top,0px)+12px)]">
        {/* Handle */}
        <div className="flex justify-center pt-3">
          <div className="h-1.5 w-12 rounded-full bg-neutral-200" />
        </div>

        {/* Header */}
        <div className="flex items-center justify-between px-4 pt-3">
          <div>
            <p className="text-xs text-neutral-400">Pretraga</p>
            <h2 className="text-base font-semibold text-neutral-900">Pronađi proizvod</h2>
          </div>
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-100 text-neutral-500"
            aria-label="Zatvori"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Search Input */}
        <MobileSearchBar
          value={query}
          onChange={onQueryChange}
          placeholder="Pretraži proizvode, šifre, brendove..."
          showScanButton={true}
          autoFocus
          className="pb-1 pt-2"
        />

        <div className="flex-1 overflow-y-auto pb-6">
          {/* Quick chips */}
          {!hasQuery && (
            <div className="px-4 pb-4">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-sm font-semibold text-neutral-900">Nedavne pretrage</h3>
                <button className="text-xs font-semibold text-neutral-400">Obriši</button>
              </div>
              <div className="flex flex-wrap gap-2">
                {recentSearches.map((item) => (
                  <button
                    key={item}
                    onClick={() => onQueryChange(item)}
                    className="rounded-full border border-neutral-200 px-3 py-1 text-xs font-medium text-neutral-600"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Popular categories */}
          {!hasQuery && (
            <div className="px-4 pb-4">
              <h3 className="mb-3 text-sm font-semibold text-neutral-900">Popularne kategorije</h3>
              <div className="grid grid-cols-2 gap-2">
                {popularCategories.map((cat) => (
                  <button
                    key={cat.id}
                    className="rounded-xl border border-neutral-100 bg-neutral-50 px-3 py-2 text-left"
                    onClick={() => onQueryChange(cat.label)}
                  >
                    <p className="text-xs font-semibold text-neutral-900">{cat.label}</p>
                    {cat.meta && <p className="text-[10px] text-neutral-400">{cat.meta} artikala</p>}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Popular brands */}
          {!hasQuery && (
            <div className="px-4 pb-4">
              <h3 className="mb-3 text-sm font-semibold text-neutral-900">Popularni brendovi</h3>
              <div className="flex flex-wrap gap-2">
                {popularBrands.map((brand) => (
                  <button
                    key={brand.id}
                    onClick={() => onQueryChange(brand.label)}
                    className="rounded-full border border-neutral-200 px-3 py-1 text-xs font-medium text-neutral-600"
                  >
                    {brand.label}
                    {brand.meta && <span className="ml-2 text-[10px] text-neutral-400">{brand.meta}</span>}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Results */}
          <div className="px-4 pb-4">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-sm font-semibold text-neutral-900">
                {hasQuery ? `Rezultati (${filteredProducts.length})` : 'Preporučeni proizvodi'}
              </h3>
              {onViewAll && (
                <button
                  onClick={() => onViewAll(query)}
                  className="text-xs font-semibold text-[var(--color-primary-500)]"
                >
                  Pogledaj sve
                </button>
              )}
            </div>
            <div className="space-y-3">
              {filteredProducts.length === 0 && (
                <div className="rounded-xl border border-neutral-100 bg-neutral-50 p-4 text-center">
                  <p className="text-sm font-semibold text-neutral-700">Nema rezultata</p>
                  <p className="text-xs text-neutral-400">Pokušajte s drugim pojmom.</p>
                </div>
              )}
              {filteredProducts.map((product) => (
                <MobileProductCard
                  key={`search-${product.id}`}
                  product={product}
                  variant="horizontal"
                  onPress={() => onSelectProduct?.(product)}
                  onAddToCart={() => onAddToCart?.(product)}
                />
              ))}
            </div>
          </div>

          {/* View all */}
          {onViewAll && (
            <div className="px-4">
              <button
                onClick={() => onViewAll(query)}
                className={cn(
                  'flex w-full items-center justify-center gap-2 rounded-xl border border-neutral-200 py-3 text-sm font-semibold text-neutral-700'
                )}
              >
                Pogledaj sve proizvode
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default MobileSearchModal

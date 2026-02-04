'use client'

import { useState, useCallback } from 'react'
import {
  PhoneFrame,
  MobileHeader,
  MobileTabBar,
  MobileSearchPage,
  MobileSortingBar,
  MobileFilterContent,
  MobileActiveFilters,
  sampleMobileProducts,
  sampleFilterCategories,
  sampleFilterBrands,
  sampleCharacteristics,
  HomeIcon,
  CategoriesIcon,
  CartIcon,
  FavoritesIcon,
  AccountIcon,
  type MobileProduct,
  type MobileViewMode,
  type MobilePriceRange,
} from '@/src/components/mobile'
import { MobileFilterDrawer } from '@/src/components/ui/MobileFilterDrawer/MobileFilterDrawer'

// Extended product list for search results
const searchProducts: MobileProduct[] = [
  ...sampleMobileProducts,
  {
    id: '5',
    sku: '1234567',
    name: 'Automatski osigurač C16 1P',
    manufacturer: 'Schneider Electric',
    price: 8.50,
    inStock: true,
    stockCount: 234,
  },
  {
    id: '6',
    sku: '2345678',
    name: 'Nadstrujni relej 0.4-2A',
    manufacturer: 'ABB',
    price: 125.00,
    oldPrice: 145.00,
    inStock: true,
    stockCount: 12,
    badge: 'sale',
  },
  {
    id: '7',
    sku: '3456789',
    name: 'LED panel 60x60 40W 4000K',
    manufacturer: 'Ledvance',
    price: 35.90,
    inStock: false,
    badge: 'new',
  },
  {
    id: '8',
    sku: '4567890',
    name: 'Utičnica s poklopcem IP44',
    manufacturer: 'Legrand',
    price: 12.30,
    oldPrice: 15.00,
    inStock: true,
    stockCount: 567,
  },
]

function createTabItems(activeTab: string) {
  return [
    { id: 'home', label: 'Početna', icon: <HomeIcon active={activeTab === 'home'} /> },
    { id: 'categories', label: 'Kategorije', icon: <CategoriesIcon active={activeTab === 'categories'} /> },
    { id: 'cart', label: 'Korpa', icon: <CartIcon active={activeTab === 'cart'} />, badge: 3 },
    { id: 'favorites', label: 'Favoriti', icon: <FavoritesIcon active={activeTab === 'favorites'} /> },
    { id: 'account', label: 'Profil', icon: <AccountIcon active={activeTab === 'account'} /> },
  ]
}

function MobileSearchContent() {
  const [activeTab, setActiveTab] = useState('categories')
  const [searchQuery, setSearchQuery] = useState('prekidač')
  const [currentSort, setCurrentSort] = useState('relevance')
  const [viewMode, setViewMode] = useState<MobileViewMode>('grid')
  const [selectedCategories, setSelectedCategories] = useState<string[]>(['prekidaci'])
  const [selectedBrands, setSelectedBrands] = useState<string[]>(['legrand'])
  const [currentPriceRange, setCurrentPriceRange] = useState<MobilePriceRange>({ min: 0, max: 100 })
  const [inStockOnly, setInStockOnly] = useState(false)
  const [selectedCharacteristics, setSelectedCharacteristics] = useState<Record<string, string[]>>({
    napon: ['230v'],
  })
  const [favoriteIds, setFavoriteIds] = useState<string[]>(['1', '3'])

  const handleResetFilters = useCallback(() => {
    setSelectedCategories([])
    setSelectedBrands([])
    setCurrentPriceRange({ min: 0, max: 1000 })
    setInStockOnly(false)
    setSelectedCharacteristics({})
  }, [])

  const handleCharacteristicChange = useCallback((charId: string, optionIds: string[]) => {
    setSelectedCharacteristics(prev => ({
      ...prev,
      [charId]: optionIds,
    }))
  }, [])

  const handleFavorite = useCallback((product: MobileProduct) => {
    setFavoriteIds(prev =>
      prev.includes(product.id)
        ? prev.filter(id => id !== product.id)
        : [...prev, product.id]
    )
  }, [])

  return (
    <div className="flex h-full flex-col bg-neutral-50">
      {/* Header */}
      <MobileHeader
        title="Pretraga"
        showBack
        showCart
        cartCount={3}
        variant="default"
      />

      {/* Search Page Content */}
      <MobileSearchPage
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onSearchSubmit={(q) => console.log('Search:', q)}
        products={searchProducts}
        totalResults={2458}
        currentSort={currentSort}
        onSortChange={setCurrentSort}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        categories={sampleFilterCategories}
        selectedCategories={selectedCategories}
        onCategoryChange={setSelectedCategories}
        brands={sampleFilterBrands}
        selectedBrands={selectedBrands}
        onBrandChange={setSelectedBrands}
        priceRange={{ min: 0, max: 1000 }}
        currentPriceRange={currentPriceRange}
        onPriceChange={setCurrentPriceRange}
        inStockOnly={inStockOnly}
        onInStockChange={setInStockOnly}
        characteristics={sampleCharacteristics}
        selectedCharacteristics={selectedCharacteristics}
        onCharacteristicChange={handleCharacteristicChange}
        onResetFilters={handleResetFilters}
        onProductPress={(p) => console.log('Product:', p.name)}
        onAddToCart={(p) => console.log('Add to cart:', p.name)}
        onFavorite={handleFavorite}
        favoriteIds={favoriteIds}
        className="relative"
        filterDrawerPosition="absolute"
        sortModalPosition="absolute"
      />

      {/* Tab Bar */}
      <MobileTabBar
        items={createTabItems(activeTab)}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
    </div>
  )
}

// Component showcase sections
function SortingBarShowcase() {
  const [sort, setSort] = useState('relevance')
  const [viewMode, setViewMode] = useState<MobileViewMode>('grid')
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  return (
    <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-2 sm:p-4 -mx-2 sm:mx-0">
      <MobileSortingBar
        totalResults={2458}
        currentSort={sort}
        onSortChange={setSort}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        onOpenFilters={() => setIsFilterOpen(true)}
        activeFiltersCount={3}
      />
      <MobileFilterDrawer
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
      >
        <MobileFilterContent
          categories={sampleFilterCategories}
          brands={sampleFilterBrands}
          characteristics={sampleCharacteristics}
        />
      </MobileFilterDrawer>
    </div>
  )
}

function ActiveFiltersShowcase() {
  const [filters, setFilters] = useState([
    { id: 'legrand', type: 'brand' as const, label: 'Legrand' },
    { id: 'prekidaci', type: 'category' as const, label: 'Prekidači' },
    { id: '230v', type: 'characteristic' as const, label: '230V', characteristicId: 'napon' },
    { id: 'price', type: 'price' as const, label: '0€ - 100€' },
  ])

  return (
    <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-2 sm:p-4 -mx-2 sm:mx-0">
      <MobileActiveFilters
        filters={filters}
        onRemove={(f) => setFilters(prev => prev.filter(pf => pf.id !== f.id))}
        onClearAll={() => setFilters([])}
      />
    </div>
  )
}

function FilterContentShowcase() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [inStock, setInStock] = useState(false)

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="rounded-lg bg-[var(--color-primary-500)] px-4 py-2 text-sm font-medium text-white"
      >
        Otvori Filtere
      </button>
      <MobileFilterDrawer isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <MobileFilterContent
          categories={sampleFilterCategories}
          selectedCategories={selectedCategories}
          onCategoryChange={setSelectedCategories}
          brands={sampleFilterBrands}
          selectedBrands={selectedBrands}
          onBrandChange={setSelectedBrands}
          characteristics={sampleCharacteristics}
          inStockOnly={inStock}
          onInStockChange={setInStock}
        />
      </MobileFilterDrawer>
    </div>
  )
}

export default function MobileSearchShowcase() {
  return (
    <div className="min-h-screen bg-neutral-100 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-2 text-2xl sm:text-3xl font-bold text-neutral-900">
          Mobile Search Page
        </h1>
        <p className="mb-6 sm:mb-8 text-sm sm:text-base text-neutral-600">
          Stranica pretrage za iOS/Android aplikaciju sa filterima, sortiranjem i listom proizvoda.
        </p>

        {/* Preview Section */}
        <div className="mb-8 sm:mb-12">
          <h2 className="mb-3 sm:mb-4 text-lg sm:text-xl font-semibold text-neutral-800">
            Preview
          </h2>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-8 rounded-xl sm:rounded-2xl bg-neutral-200 p-4 sm:p-8">
            {/* iPhone Preview */}
            <div className="w-full sm:w-auto flex justify-center">
              <PhoneFrame device="iphone" size="medium">
                <MobileSearchContent />
              </PhoneFrame>
            </div>

            {/* Android Preview - hidden on mobile */}
            <div className="hidden sm:block">
              <PhoneFrame device="android" size="medium">
                <MobileSearchContent />
              </PhoneFrame>
            </div>
          </div>
        </div>

        {/* Components Section */}
        <div className="mb-8 sm:mb-12">
          <h2 className="mb-3 sm:mb-4 text-lg sm:text-xl font-semibold text-neutral-800">
            Komponente
          </h2>

          <div className="space-y-4 sm:space-y-6">
            {/* MobileSortingBar */}
            <div className="rounded-xl border border-neutral-200 bg-white p-4 sm:p-6">
              <h3 className="mb-2 text-base sm:text-lg font-semibold text-neutral-900">MobileSortingBar</h3>
              <p className="mb-3 sm:mb-4 text-xs sm:text-sm text-neutral-500">
                Bar za sortiranje sa brojem rezultata, toggle za prikaz (grid/list), sort opcijama i dugmetom za filtere.
              </p>
              <SortingBarShowcase />
            </div>

            {/* MobileActiveFilters */}
            <div className="rounded-xl border border-neutral-200 bg-white p-4 sm:p-6">
              <h3 className="mb-2 text-base sm:text-lg font-semibold text-neutral-900">MobileActiveFilters</h3>
              <p className="mb-3 sm:mb-4 text-xs sm:text-sm text-neutral-500">
                Chips koji prikazuju aktivne filtere sa opcijom za uklanjanje pojedinačno ili svih odjednom.
              </p>
              <ActiveFiltersShowcase />
            </div>

            {/* MobileFilterContent */}
            <div className="rounded-xl border border-neutral-200 bg-white p-4 sm:p-6">
              <h3 className="mb-2 text-base sm:text-lg font-semibold text-neutral-900">MobileFilterContent</h3>
              <p className="mb-3 sm:mb-4 text-xs sm:text-sm text-neutral-500">
                Sadržaj filter drawer-a sa kategorijama, brendovima, cijenom, dostupnošću i dinamičkim karakteristikama.
              </p>
              <FilterContentShowcase />
            </div>
          </div>
        </div>

        {/* Features List */}
        <div className="mb-8 sm:mb-12">
          <h2 className="mb-3 sm:mb-4 text-lg sm:text-xl font-semibold text-neutral-800">
            Funkcionalnosti
          </h2>
          <div className="grid gap-3 sm:gap-4 grid-cols-2 lg:grid-cols-3">
            {[
              { name: 'Pretraga', desc: 'Search bar sa autofokusom' },
              { name: 'Sortiranje', desc: 'Bottom sheet sa opcijama' },
              { name: 'View Mode', desc: 'Grid/list toggle' },
              { name: 'Filteri', desc: 'Slide-in drawer' },
              { name: 'Kategorije', desc: 'Multi-select sa brojem' },
              { name: 'Brendovi', desc: 'Multi-select lista' },
              { name: 'Cijena', desc: 'Min/Max input' },
              { name: 'Dostupnost', desc: 'Samo na stanju' },
              { name: 'Karakteristike', desc: 'Dinamički filteri' },
              { name: 'Active Filters', desc: 'Chips za uklanjanje' },
              { name: 'Empty State', desc: 'Nema rezultata' },
              { name: 'Loading State', desc: 'Spinner' },
            ].map((feature) => (
              <div
                key={feature.name}
                className="rounded-lg border border-neutral-200 bg-white p-3 sm:p-4"
              >
                <h3 className="mb-0.5 sm:mb-1 font-medium text-neutral-900 text-xs sm:text-sm">{feature.name}</h3>
                <p className="text-[10px] sm:text-xs text-neutral-500">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Component Props - hidden on very small screens */}
        <div className="hidden sm:block">
          <h2 className="mb-4 text-lg sm:text-xl font-semibold text-neutral-800">
            MobileSearchPage Props
          </h2>
          <div className="overflow-x-auto rounded-xl border border-neutral-200 bg-white">
            <table className="w-full text-sm min-w-[500px]">
              <thead className="bg-neutral-50">
                <tr>
                  <th className="px-3 sm:px-4 py-2 sm:py-3 text-left font-medium text-neutral-600 text-xs sm:text-sm">Prop</th>
                  <th className="px-3 sm:px-4 py-2 sm:py-3 text-left font-medium text-neutral-600 text-xs sm:text-sm">Tip</th>
                  <th className="px-3 sm:px-4 py-2 sm:py-3 text-left font-medium text-neutral-600 text-xs sm:text-sm">Opis</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                {[
                  { name: 'products', type: 'MobileProduct[]', desc: 'Lista proizvoda za prikaz' },
                  { name: 'totalResults', type: 'number', desc: 'Ukupan broj rezultata' },
                  { name: 'currentSort', type: 'string', desc: 'Trenutna opcija sortiranja' },
                  { name: 'viewMode', type: "'grid' | 'list'", desc: 'Način prikaza proizvoda' },
                  { name: 'categories', type: 'MobileFilterOption[]', desc: 'Opcije za filter kategorija' },
                  { name: 'brands', type: 'MobileFilterOption[]', desc: 'Opcije za filter brendova' },
                  { name: 'characteristics', type: 'MobileCharacteristicFilter[]', desc: 'Dinamički filteri' },
                  { name: 'priceRange', type: 'MobilePriceRange', desc: 'Min/max granice cijene' },
                  { name: 'inStockOnly', type: 'boolean', desc: 'Filter za dostupnost' },
                  { name: 'favoriteIds', type: 'string[]', desc: 'ID-evi favorita proizvoda' },
                ].map((prop) => (
                  <tr key={prop.name}>
                    <td className="px-3 sm:px-4 py-2 sm:py-3 font-mono text-[10px] sm:text-xs text-neutral-900">{prop.name}</td>
                    <td className="px-3 sm:px-4 py-2 sm:py-3 font-mono text-[10px] sm:text-xs text-neutral-500">{prop.type}</td>
                    <td className="px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-neutral-600">{prop.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

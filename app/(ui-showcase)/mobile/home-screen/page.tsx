'use client'

import { useEffect, useMemo, useState } from 'react'
import {
  PhoneFrame,
  MobileHeader,
  MobileTabBar,
  MobileSearchBar,
  MobileSearchPage,
  MobileHeroBanner,
  MobileCategoryScroller,
  MobileProductCard,
  MobileQuickActions,
  MobileSectionHeader,
  MobileBrandScroller,
  MobileCategoryHeader,
  MobileCategoryGrid,
  MobileSubcategoryList,
  MobileBrandGrid,
  MobileBrandDetailHeader,
  extendedMobileBrands,
  defaultHeroSlides,
  defaultMobileCategories,
  MobileCartItem,
  MobileCartSummary,
  MobileCheckoutBar,
  MobileProfileHeader,
  MobileStatCard,
  MobileInfoCard,
  MobileActionItem,
  MobileOrderCard,
  MobileSearchModal,
  sampleMobileProducts,
  defaultQuickActions,
  sampleMobileBrands,
  sampleSubcategories,
  sampleFilterCategories,
  sampleFilterBrands,
  sampleCharacteristics,
  HomeIcon,
  CategoriesIcon,
  CartIcon,
  FavoritesIcon,
  AccountIcon,
  type MobileCategoryItem,
  type MobileBrand,
  type MobileProduct,
  type MobileCartItemData,
  type MobileViewMode,
  type MobilePriceRange,
} from '@/src/components/mobile'
import { cn } from '@/src/lib/utils'
import { useAddToCart, useCart, type ProductForCart } from '@/src/lib/cart'
import type { CartItem } from '@/src/lib/cart/types'

// Extended categories with more items
const allCategories: MobileCategoryItem[] = [
  ...defaultMobileCategories,
  {
    id: '7',
    name: 'Spojnice',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" />
      </svg>
    ),
    productCount: 1450,
    color: '#06B6D4',
  },
  {
    id: '8',
    name: 'Kutije',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
    productCount: 890,
    color: '#84CC16',
  },
  {
    id: '9',
    name: 'Ventilacija',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
        <path d="M12 9a9 9 0 0 0 9 9" />
        <path d="M12 9a9 9 0 0 1 -9 9" />
        <path d="M12 15a9 9 0 0 0 9 -9" />
        <path d="M12 15a9 9 0 0 1 -9 -9" />
      </svg>
    ),
    productCount: 320,
    color: '#64748B',
  },
  {
    id: '10',
    name: 'Senzori',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="2" />
        <path d="M12 2v4m0 12v4M2 12h4m12 0h4" />
        <path d="M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" />
      </svg>
    ),
    productCount: 560,
    color: '#F97316',
  },
  {
    id: '11',
    name: 'Termostati',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" />
      </svg>
    ),
    productCount: 180,
    color: '#DC2626',
  },
  {
    id: '12',
    name: 'Smart Home',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <path d="M9 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0" />
      </svg>
    ),
    productCount: 420,
    color: '#7C3AED',
  },
]

const FAVORITES_STORAGE_KEY = 'b2b-mobile-favorites'

// Create tab items with proper active states
function createTabItems(activeTab: string, cartCount: number = 0) {
  return [
    { id: 'home', label: 'Početna', icon: <HomeIcon active={activeTab === 'home'} /> },
    { id: 'categories', label: 'Kategorije', icon: <CategoriesIcon active={activeTab === 'categories'} /> },
    { id: 'cart', label: 'Korpa', icon: <CartIcon active={activeTab === 'cart'} />, badge: cartCount },
    { id: 'favorites', label: 'Favoriti', icon: <FavoritesIcon active={activeTab === 'favorites'} /> },
    { id: 'account', label: 'Profil', icon: <AccountIcon active={activeTab === 'account'} /> },
  ]
}

// Get subcategories based on category name
function getSubcategoriesForCategory(categoryName: string) {
  const key = categoryName.toLowerCase().replace(/č/g, 'c').replace(/š/g, 's')
  return sampleSubcategories[key] || sampleSubcategories.kablovi
}

interface MobileProductDetail {
  product: MobileProduct
  gallery: string[]
  description: string
  longDescription: string[]
  characteristics: { label: string; value: string }[]
  specifications: { label: string; value: string }[]
  documents: { name: string; type: string; size: string }[]
  compatibility: string[]
  recommended: MobileProduct[]
  related: MobileProduct[]
  replacements: MobileProduct[]
}

const badgeLabelMap: Record<NonNullable<MobileProduct['badge']>, string> = {
  sale: 'AKCIJA',
  new: 'NOVO',
  hot: 'TOP',
}

function buildGallery(product: MobileProduct) {
  const title = encodeURIComponent(product.sku || product.name)
  return [
    `https://placehold.co/600x600/e2e8f0/64748b?text=${title}+1`,
    `https://placehold.co/600x600/f1f5f9/475569?text=${title}+2`,
    `https://placehold.co/600x600/e5e7eb/94a3b8?text=${title}+3`,
  ]
}

const productDetailsData: MobileProductDetail[] = sampleMobileProducts.map((product, index) => {
  const baseCharacteristics = [
    { label: 'Materijal', value: index % 2 === 0 ? 'PVC' : 'Polikarbonat' },
    { label: 'Boja', value: index % 2 === 0 ? 'Crna' : 'Bijela' },
    { label: 'Garancija', value: '24 mjeseca' },
    { label: 'Standard', value: 'EN 60669' },
  ]

  const baseSpecifications = [
    { label: 'Napon', value: '230V' },
    { label: 'Struja', value: '10A' },
    { label: 'Temperatura', value: '-5°C do 40°C' },
    { label: 'Montaža', value: 'Ugradbena' },
    { label: 'Zaštita', value: 'IP20' },
  ]

  return {
    product,
    gallery: buildGallery(product),
    description: 'Pouzdana komponenta za profesionalne elektroinstalacije s dugim vijekom trajanja.',
    longDescription: [
      'Proizvod je dizajniran za svakodnevnu upotrebu u komercijalnim i industrijskim objektima. Robusna izrada i kvalitetni materijali osiguravaju stabilan rad.',
      'Kompatibilan s većinom standardnih elektro sistema, omogućava brzu montažu i jednostavno održavanje. Idealno rješenje za moderne instalacije.',
    ],
    characteristics: baseCharacteristics,
    specifications: baseSpecifications,
    documents: [
      { name: 'Tehnički list', type: 'PDF', size: '1.2 MB' },
      { name: 'Upute za montažu', type: 'PDF', size: '860 KB' },
      { name: 'Izjava o sukladnosti', type: 'PDF', size: '540 KB' },
    ],
    compatibility: ['Sistema M', 'Classic Line', 'Modul 45'],
    recommended: sampleMobileProducts.filter((p) => p.id !== product.id).slice(0, 3),
    related: sampleMobileProducts.filter((p) => p.id !== product.id).slice(1, 4),
    replacements: sampleMobileProducts.filter((p) => p.id !== product.id).slice(0, 2),
  }
})

function getProductDetails(product: MobileProduct): MobileProductDetail {
  const found = productDetailsData.find((detail) => detail.product.id === product.id)
  if (found) return found

  return {
    product,
    gallery: buildGallery(product),
    description: 'Pouzdana komponenta za profesionalne elektroinstalacije.',
    longDescription: ['Detaljan opis proizvoda trenutno nije dostupan.'],
    characteristics: [
      { label: 'Materijal', value: 'PVC' },
      { label: 'Boja', value: 'Crna' },
    ],
    specifications: [
      { label: 'Napon', value: '230V' },
      { label: 'Struja', value: '10A' },
    ],
    documents: [],
    compatibility: [],
    recommended: sampleMobileProducts.slice(0, 3),
    related: sampleMobileProducts.slice(1, 4),
    replacements: sampleMobileProducts.slice(0, 2),
  }
}

// Home Screen Content
function HomeScreenContent({
  onNavigateToCategories,
  onNavigateToBrands,
  onCategoryClick,
  onBrandClick,
  onAddToCart,
  onProductPress,
  onToggleFavorite,
  favoriteIds,
  onOpenSearch,
}: {
  onNavigateToCategories: () => void
  onNavigateToBrands: () => void
  onCategoryClick: (category: MobileCategoryItem) => void
  onBrandClick: (brand: MobileBrand) => void
  onAddToCart: (product: MobileProduct) => void
  onProductPress: (product: MobileProduct) => void
  onToggleFavorite: (product: MobileProduct) => void
  favoriteIds: Set<string>
  onOpenSearch: () => void
}) {
  const [currentSlide, setCurrentSlide] = useState(0)

  return (
    <div className="flex-1 overflow-y-auto">
      {/* Search Bar */}
      <MobileSearchBar
        placeholder="Pretraži proizvode..."
        showScanButton
        onFocus={onOpenSearch}
      />

      {/* Hero Banner */}
      <MobileHeroBanner
        slides={defaultHeroSlides}
        currentSlide={currentSlide}
        onSlideChange={setCurrentSlide}
      />

      {/* Quick Actions */}
      <MobileQuickActions actions={defaultQuickActions} variant="horizontal" />

      {/* Categories */}
      <MobileCategoryScroller
        categories={defaultMobileCategories}
        title="Kategorije"
        variant="circle"
        onCategoryClick={onCategoryClick}
        onViewAll={onNavigateToCategories}
      />

      {/* Products Section - Akcija */}
      <div className="bg-white py-2">
        <MobileSectionHeader
          title="Akcija"
          subtitle="Najbolje cijene ovog mjeseca"
          actionLabel="Sve akcije"
          onAction={() => console.log('Navigate to akcije')}
        />
        <div className="flex gap-3 overflow-x-auto px-4 pb-4 scrollbar-hide">
          {sampleMobileProducts.slice(0, 4).map((product) => (
            <MobileProductCard
              key={product.id}
              product={product}
              variant="vertical"
              onAddToCart={() => onAddToCart(product)}
              onPress={() => onProductPress(product)}
              onFavorite={() => onToggleFavorite(product)}
              isFavorite={favoriteIds.has(product.id)}
            />
          ))}
        </div>
      </div>

      {/* Brands */}
      <MobileBrandScroller
        brands={sampleMobileBrands}
        title="Brendovi"
        onBrandClick={onBrandClick}
        onViewAll={onNavigateToBrands}
      />

      {/* Products Section - Novo */}
      <div className="bg-white py-2">
        <MobileSectionHeader
          title="Novi proizvodi"
          actionLabel="Pogledaj sve"
          onAction={() => console.log('Navigate to novi proizvodi')}
        />
        <div className="flex gap-3 overflow-x-auto px-4 pb-4 scrollbar-hide">
          {sampleMobileProducts.slice(1, 5).map((product) => (
            <MobileProductCard
              key={product.id}
              product={{ ...product, badge: 'new' as const }}
              variant="vertical"
              onAddToCart={() => onAddToCart(product)}
              onPress={() => onProductPress(product)}
              onFavorite={() => onToggleFavorite(product)}
              isFavorite={favoriteIds.has(product.id)}
            />
          ))}
        </div>
      </div>

      {/* Recent Orders (compact list) */}
      <div className="bg-white py-2">
        <MobileSectionHeader
          title="Nedavne narudžbe"
          actionLabel="Povijest"
          onAction={() => console.log('Navigate to povijest')}
        />
        <div className="px-4 pb-4">
          {sampleMobileProducts.slice(0, 3).map((product) => (
            <MobileProductCard
              key={product.id}
              product={product}
              variant="compact"
              onAddToCart={() => onAddToCart(product)}
              onPress={() => onProductPress(product)}
              onFavorite={() => onToggleFavorite(product)}
              isFavorite={favoriteIds.has(product.id)}
            />
          ))}
        </div>
      </div>

      {/* Spacer for tab bar */}
      <div className="h-4" />
    </div>
  )
}

// Categories Screen Content
function CategoriesScreenContent({
  selectedCategory,
  onCategoryClick,
  onBack,
  showingProducts,
  onShowProducts,
  onBackFromProducts,
  productTitle,
  onAddToCart,
  onProductPress,
  onToggleFavorite,
  favoriteIds,
}: {
  selectedCategory: MobileCategoryItem | null
  onCategoryClick: (category: MobileCategoryItem) => void
  onBack: () => void
  showingProducts: boolean
  onShowProducts: (title: string) => void
  onBackFromProducts: () => void
  productTitle: string
  onAddToCart: (product: MobileProduct) => void
  onProductPress: (product: MobileProduct) => void
  onToggleFavorite: (product: MobileProduct) => void
  favoriteIds: Set<string>
}) {
  const [categorySearchQuery, setCategorySearchQuery] = useState('')
  const [productSearchQuery, setProductSearchQuery] = useState('')
  const [currentSort, setCurrentSort] = useState('relevance')
  const [viewMode, setViewMode] = useState<MobileViewMode>('grid')
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [currentPriceRange, setCurrentPriceRange] = useState<MobilePriceRange>({ min: 0, max: 1000 })
  const [inStockOnly, setInStockOnly] = useState(false)
  const [selectedCharacteristics, setSelectedCharacteristics] = useState<Record<string, string[]>>({})

  // Filter categories based on search
  const filteredCategories = categorySearchQuery
    ? allCategories.filter((cat) => cat.name.toLowerCase().includes(categorySearchQuery.toLowerCase()))
    : allCategories

  const handleResetFilters = () => {
    setSelectedCategories([])
    setSelectedBrands([])
    setCurrentPriceRange({ min: 0, max: 1000 })
    setInStockOnly(false)
    setSelectedCharacteristics({})
  }

  const handleCharacteristicChange = (charId: string, optionIds: string[]) => {
    setSelectedCharacteristics((prev) => ({
      ...prev,
      [charId]: optionIds,
    }))
  }

  // Products view
  if (showingProducts) {
    const extendedProducts = [
      ...sampleMobileProducts,
      ...sampleMobileProducts,
      ...sampleMobileProducts,
    ].map((product, index) => ({ ...product, id: `${product.id}-${index}` }))

    return (
      <MobileSearchPage
        searchQuery={productSearchQuery}
        onSearchChange={setProductSearchQuery}
        onSearchSubmit={() => {}}
        products={extendedProducts}
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
        onProductPress={onProductPress}
        onAddToCart={onAddToCart}
        onFavorite={onToggleFavorite}
        favoriteIds={Array.from(favoriteIds)}
        className="relative flex-1"
        filterDrawerPosition="absolute"
        sortModalPosition="absolute"
      />
    )
  }

  // Main categories view
  if (!selectedCategory) {
    return (
      <div className="flex-1 overflow-y-auto">
        {/* Search Bar */}
        <MobileSearchBar
          placeholder="Pretraži kategorije..."
          value={categorySearchQuery}
          onChange={setCategorySearchQuery}
        />

        {/* Categories Grid */}
        <div className="py-4">
          <MobileCategoryGrid
            categories={filteredCategories}
            onCategoryClick={onCategoryClick}
            variant="default"
            columns={3}
          />
        </div>

        {/* No results */}
        {filteredCategories.length === 0 && (
          <div className="flex flex-col items-center justify-center px-8 py-12 text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-neutral-100 text-neutral-400">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>
            <p className="text-sm text-neutral-500">Nema rezultata za &quot;{categorySearchQuery}&quot;</p>
          </div>
        )}

        <div className="h-4" />
      </div>
    )
  }

  // Subcategories view
  return (
    <div className="flex-1 overflow-y-auto">
      {/* Category info banner */}
      <div
        className="mx-4 mt-4 flex items-center gap-3 rounded-xl p-4"
        style={{
          backgroundColor: selectedCategory.color ? `${selectedCategory.color}15` : '#f5f5f5',
        }}
      >
        <div
          className="flex h-12 w-12 items-center justify-center rounded-xl"
          style={{
            backgroundColor: selectedCategory.color || '#737373',
            color: 'white',
          }}
        >
          {selectedCategory.icon}
        </div>
        <div>
          <h2 className="font-semibold text-neutral-900">{selectedCategory.name}</h2>
          {selectedCategory.productCount && (
            <p className="text-sm text-neutral-500">
              {selectedCategory.productCount.toLocaleString('hr-HR')} artikala
            </p>
          )}
        </div>
      </div>

      {/* Search within category */}
      <MobileSearchBar placeholder={`Pretraži u ${selectedCategory.name}...`} />

      {/* Subcategories */}
      <div className="py-2">
        <h3 className="mb-2 px-4 text-sm font-semibold text-neutral-700">Podkategorije</h3>
        <MobileSubcategoryList
          subcategories={getSubcategoriesForCategory(selectedCategory.name)}
          variant="list"
          onSubcategoryClick={(sub) => {
            onShowProducts(sub.name)
          }}
        />
      </div>

      {/* View all products button */}
      <div className="p-4">
        <button
          onClick={() => onShowProducts(selectedCategory.name)}
          className="w-full rounded-xl bg-(--color-primary-500) py-3 text-sm font-semibold text-white transition-colors active:bg-(--color-primary-600)"
        >
          Prikaži sve proizvode ({selectedCategory.productCount?.toLocaleString('hr-HR')})
        </button>
      </div>

      <div className="h-4" />
    </div>
  )
}

// Brands Screen Content
function BrandsScreenContent({
  selectedBrand,
  onBrandClick,
  onBack,
  onAddToCart,
  onProductPress,
  onToggleFavorite,
  favoriteIds,
}: {
  selectedBrand: MobileBrand | null
  onBrandClick: (brand: MobileBrand) => void
  onBack: () => void
  onAddToCart: (product: MobileProduct) => void
  onProductPress: (product: MobileProduct) => void
  onToggleFavorite: (product: MobileProduct) => void
  favoriteIds: Set<string>
}) {
  const [searchQuery, setSearchQuery] = useState('')

  // Filter brands based on search
  const filteredBrands = searchQuery
    ? extendedMobileBrands.filter((brand) =>
        brand.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : extendedMobileBrands

  // Main brands view
  if (!selectedBrand) {
    return (
      <div className="flex-1 overflow-y-auto">
        {/* Search Bar */}
        <MobileSearchBar
          placeholder="Pretraži brendove..."
          value={searchQuery}
          onChange={setSearchQuery}
        />

        {/* Brands Grid */}
        <div className="py-4">
          <MobileBrandGrid
            brands={filteredBrands}
            onBrandClick={onBrandClick}
            variant="default"
            columns={3}
          />
        </div>

        {/* No results */}
        {filteredBrands.length === 0 && (
          <div className="flex flex-col items-center justify-center px-8 py-12 text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-neutral-100 text-neutral-400">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>
            <p className="text-sm text-neutral-500">Nema rezultata za &quot;{searchQuery}&quot;</p>
          </div>
        )}

        <div className="h-4" />
      </div>
    )
  }

  // Brand detail view
  return (
    <div className="flex-1 overflow-y-auto">
      {/* Brand Header */}
      <MobileBrandDetailHeader brand={selectedBrand} variant="compact" />

      {/* Products from this brand */}
      <div className="bg-white py-2">
        <MobileSectionHeader
          title="Proizvodi"
          subtitle={`${selectedBrand.productCount || 0} artikala`}
        />
        <div className="grid grid-cols-2 gap-3 px-4 pb-4">
          {sampleMobileProducts.slice(0, 6).map((product) => (
            <MobileProductCard
              key={product.id}
              product={product}
              variant="vertical"
              fullWidth
              onAddToCart={() => onAddToCart(product)}
              onPress={() => onProductPress(product)}
              onFavorite={() => onToggleFavorite(product)}
              isFavorite={favoriteIds.has(product.id)}
            />
          ))}
        </div>
      </div>

      <div className="h-4" />
    </div>
  )
}

// Product Details Screen Content
function ProductDetailsScreenContent({
  product,
  onAddToCart,
  onProductPress,
  onToggleFavorite,
  isFavorite,
  favoriteIds,
}: {
  product: MobileProduct
  onAddToCart: (product: MobileProduct, quantity?: number) => void
  onProductPress: (product: MobileProduct) => void
  onToggleFavorite: (product: MobileProduct) => void
  isFavorite: boolean
  favoriteIds: Set<string>
}) {
  const details = getProductDetails(product)
  const [activeImage, setActiveImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [showAllCharacteristics, setShowAllCharacteristics] = useState(false)
  const [openCharacteristics, setOpenCharacteristics] = useState<Set<string>>(new Set())
  const characteristicsLimit = 8
  const visibleCharacteristics = showAllCharacteristics
    ? details.characteristics
    : details.characteristics.slice(0, characteristicsLimit)
  const allVisibleOpen = visibleCharacteristics.every((item) => openCharacteristics.has(item.label))

  const currency = product.currency || '€'
  const hasDiscount = product.oldPrice !== undefined && product.oldPrice > product.price
  const discountPercent = hasDiscount
    ? Math.round(((product.oldPrice! - product.price) / product.oldPrice!) * 100)
    : 0
  const isInStock = product.inStock

  return (
    <div className="flex-1 overflow-y-auto">
      {/* Image Gallery */}
      <div className="bg-white">
        <div className="relative">
          <div className="relative aspect-square overflow-hidden rounded-2xl bg-neutral-100 mx-4 mt-4">
            <img
              src={details.gallery[activeImage]}
              alt={product.name}
              className="h-full w-full object-contain p-6"
            />
            {product.badge && (
              <span className="absolute left-4 top-4 rounded-full bg-[var(--color-primary-500)] px-3 py-1 text-xs font-semibold text-white">
                {badgeLabelMap[product.badge]}
              </span>
            )}
            {hasDiscount && (
              <span className="absolute right-4 top-4 rounded-full bg-red-500 px-2.5 py-1 text-xs font-semibold text-white">
                -{discountPercent}%
              </span>
            )}
          </div>
          <div className="mt-3 flex gap-2 overflow-x-auto px-4 pb-4 scrollbar-hide">
            {details.gallery.map((src, index) => (
              <button
                key={`${product.id}-thumb-${index}`}
                onClick={() => setActiveImage(index)}
                className={cn(
                  'relative h-16 w-16 shrink-0 overflow-hidden rounded-xl border',
                  activeImage === index ? 'border-[var(--color-primary-500)]' : 'border-neutral-200'
                )}
                aria-label={`Slika ${index + 1}`}
              >
                <img src={src} alt={`${product.name} ${index + 1}`} className="h-full w-full object-contain p-2" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Basic Info */}
      <div className="bg-white px-4 pb-4">
        <p className="text-xs text-neutral-400">{product.sku}</p>
        <div className="mt-1 flex items-start justify-between gap-3">
          <h1 className="text-lg font-semibold text-neutral-900">{product.name}</h1>
          <button
            onClick={() => onToggleFavorite(product)}
            className={cn(
              'flex h-9 w-9 items-center justify-center rounded-full border transition-colors',
              isFavorite
                ? 'border-[var(--color-primary-500)] bg-[var(--color-primary-50)] text-[var(--color-primary-500)]'
                : 'border-neutral-200 text-neutral-400'
            )}
            aria-label={isFavorite ? 'Ukloni iz favorita' : 'Dodaj u favorite'}
          >
            <FavoritesIcon active={isFavorite} />
          </button>
        </div>
        <p className="mt-1 text-sm text-neutral-500">{product.manufacturer}</p>

        <div className="mt-4 flex items-end justify-between">
          <div>
            <p className="text-2xl font-bold text-neutral-900">
              {product.price.toFixed(2)} {currency}
            </p>
            {hasDiscount && (
              <p className="text-sm text-neutral-400 line-through">
                {product.oldPrice?.toFixed(2)} {currency}
              </p>
            )}
          </div>
          <div
            className={cn(
              'inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium',
              isInStock ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'
            )}
          >
            <span className={cn('h-2 w-2 rounded-full', isInStock ? 'bg-green-500' : 'bg-red-500')} />
            {isInStock ? 'Na stanju' : 'Nema na stanju'}
          </div>
        </div>

        <p className="mt-3 text-sm text-neutral-600">{details.description}</p>

        {/* Quantity + Add */}
        <div className="mt-4 flex items-center gap-3">
          <div className="flex items-center rounded-xl border border-neutral-200">
            <button
              onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
              className="flex h-10 w-10 items-center justify-center text-neutral-500"
              aria-label="Smanji količinu"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 12H4" />
              </svg>
            </button>
            <span className="min-w-10 px-3 text-center text-sm font-semibold text-neutral-900">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity((prev) => prev + 1)}
              className="flex h-10 w-10 items-center justify-center text-neutral-500"
              aria-label="Povećaj količinu"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 4v16m8-8H4" />
              </svg>
            </button>
          </div>

          <button
            onClick={() => onAddToCart(product, quantity)}
            disabled={!isInStock}
            className="flex h-10 flex-1 items-center justify-center rounded-xl bg-[var(--color-primary-500)] text-sm font-semibold text-white transition-colors active:bg-[var(--color-primary-600)] disabled:bg-neutral-300"
          >
            Dodaj u korpu
          </button>
        </div>
      </div>

      {/* Characteristics */}
      <div className="mt-3 bg-white py-2">
        <MobileSectionHeader title="Karakteristike" />
        <div className="px-4 pb-2">
          <button
            onClick={() => {
              setOpenCharacteristics((prev) => {
                const next = new Set(prev)
                if (allVisibleOpen) {
                  visibleCharacteristics.forEach((item) => next.delete(item.label))
                } else {
                  visibleCharacteristics.forEach((item) => next.add(item.label))
                }
                return next
              })
            }}
            className="text-xs font-semibold text-[var(--color-primary-500)]"
          >
            {allVisibleOpen ? 'Zatvori sve' : 'Otvori sve'}
          </button>
        </div>
        <div className="space-y-2 px-4 pb-4">
          {visibleCharacteristics.map((item) => {
            const isOpen = openCharacteristics.has(item.label)
            return (
              <div key={item.label} className="rounded-xl border border-neutral-100 bg-neutral-50">
                <button
                  onClick={() => {
                    setOpenCharacteristics((prev) => {
                      const next = new Set(prev)
                      if (next.has(item.label)) {
                        next.delete(item.label)
                      } else {
                        next.add(item.label)
                      }
                      return next
                    })
                  }}
                  className="flex w-full items-center justify-between px-3 py-2 text-left"
                >
                  <span className="text-sm font-medium text-neutral-900">{item.label}</span>
                  <span
                    className={cn(
                      'text-neutral-400 transition-transform',
                      isOpen ? 'rotate-180' : 'rotate-0'
                    )}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </button>
                {isOpen && (
                  <div className="border-t border-neutral-100 px-3 py-2 text-sm font-semibold text-neutral-900">
                    {item.value}
                  </div>
                )}
              </div>
            )
          })}
        </div>
        {details.characteristics.length > characteristicsLimit && (
          <div className="px-4 pb-4">
            <button
              onClick={() => setShowAllCharacteristics((prev) => !prev)}
              className="w-full rounded-xl border border-neutral-200 px-3 py-2 text-sm font-semibold text-neutral-700"
            >
              {showAllCharacteristics
                ? 'Prikaži manje'
                : `Prikaži sve (${details.characteristics.length})`}
            </button>
          </div>
        )}
      </div>

      {/* Description */}
      <div className="mt-3 bg-white py-2">
        <MobileSectionHeader title="Opis" />
        <div className="space-y-3 px-4 pb-4 text-sm text-neutral-600">
          {details.longDescription.map((paragraph, index) => (
            <p key={`${product.id}-desc-${index}`}>{paragraph}</p>
          ))}
        </div>
      </div>

      {/* Specifications */}
      <div className="mt-3 bg-white py-2">
        <MobileSectionHeader title="Tehničke specifikacije" />
        <div className="space-y-2 px-4 pb-4">
          {details.specifications.map((spec) => (
            <div key={spec.label} className="flex items-center justify-between text-sm text-neutral-700">
              <span className="text-neutral-500">{spec.label}</span>
              <span className="font-medium text-neutral-900">{spec.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Compatibility */}
      {details.compatibility.length > 0 && (
        <div className="mt-3 bg-white py-2">
          <MobileSectionHeader title="Kompatibilno sa" />
          <div className="flex flex-wrap gap-2 px-4 pb-4">
            {details.compatibility.map((item) => (
              <span
                key={item}
                className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-600"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Documents */}
      {details.documents.length > 0 && (
        <div className="mt-3 bg-white py-2">
          <MobileSectionHeader title="Dokumenti" />
          <div className="space-y-2 px-4 pb-4">
            {details.documents.map((doc) => (
              <div key={doc.name} className="flex items-center justify-between rounded-xl border border-neutral-100 p-3">
                <div>
                  <p className="text-sm font-medium text-neutral-900">{doc.name}</p>
                  <p className="text-[10px] text-neutral-400">
                    {doc.type} • {doc.size}
                  </p>
                </div>
                <button className="text-xs font-semibold text-[var(--color-primary-500)]">
                  Preuzmi
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Recommended */}
      <div className="mt-3 bg-white py-2">
        <MobileSectionHeader title="Preporučeno" actionLabel="Sve" onAction={() => {}} />
        <div className="flex gap-3 overflow-x-auto px-4 pb-4 scrollbar-hide">
          {details.recommended.map((item) => (
            <MobileProductCard
              key={`${product.id}-rec-${item.id}`}
              product={item}
              variant="vertical"
              onAddToCart={() => onAddToCart(item, 1)}
              onPress={() => onProductPress(item)}
              onFavorite={() => onToggleFavorite(item)}
              isFavorite={favoriteIds.has(item.id)}
            />
          ))}
        </div>
      </div>

      {/* Related */}
      <div className="mt-3 bg-white py-2">
        <MobileSectionHeader title="Povezano" actionLabel="Sve" onAction={() => {}} />
        <div className="flex gap-3 overflow-x-auto px-4 pb-4 scrollbar-hide">
          {details.related.map((item) => (
            <MobileProductCard
              key={`${product.id}-rel-${item.id}`}
              product={item}
              variant="vertical"
              onAddToCart={() => onAddToCart(item, 1)}
              onPress={() => onProductPress(item)}
              onFavorite={() => onToggleFavorite(item)}
              isFavorite={favoriteIds.has(item.id)}
            />
          ))}
        </div>
      </div>

      {/* Replacements */}
      <div className="mt-3 bg-white py-2">
        <MobileSectionHeader title="Zamjenski proizvodi" actionLabel="Sve" onAction={() => {}} />
        <div className="flex gap-3 overflow-x-auto px-4 pb-4 scrollbar-hide">
          {details.replacements.map((item) => (
            <MobileProductCard
              key={`${product.id}-rep-${item.id}`}
              product={item}
              variant="vertical"
              onAddToCart={() => onAddToCart(item, 1)}
              onPress={() => onProductPress(item)}
              onFavorite={() => onToggleFavorite(item)}
              isFavorite={favoriteIds.has(item.id)}
            />
          ))}
        </div>
      </div>

      <div className="h-24" />
    </div>
  )
}

// Cart Screen Content
function CartScreenContent({
  items,
  onQuantityChange,
  onRemove,
  onClear,
  onContinueShopping,
  onAddToCart,
  onProductPress,
  onToggleFavorite,
  favoriteIds,
}: {
  items: MobileCartItemData[]
  onQuantityChange: (id: string, quantity: number) => void
  onRemove: (id: string) => void
  onClear: () => void
  onContinueShopping: () => void
  onAddToCart: (product: MobileProduct, quantity?: number) => void
  onProductPress: (product: MobileProduct) => void
  onToggleFavorite: (product: MobileProduct) => void
  favoriteIds: Set<string>
}) {
  const [deliveryOption, setDeliveryOption] = useState<'delivery' | 'pickup'>('delivery')
  const [promoCode, setPromoCode] = useState('')
  const [note, setNote] = useState('')

  const deliveryOptions = [
    {
      id: 'delivery' as const,
      title: 'Dostava na adresu',
      description: 'Savska cesta 123, Zagreb',
      eta: '1-3 radna dana',
      fee: 4.9,
    },
    {
      id: 'pickup' as const,
      title: 'Preuzimanje u poslovnici',
      description: 'Trešnjevka, Zagrebačka 45',
      eta: 'Danas nakon 14:00',
      fee: 0,
    },
  ]

  const selectedDelivery = deliveryOptions.find((option) => option.id === deliveryOption) || deliveryOptions[0]
  const currency = items[0]?.currency || '€'
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const discount = items.reduce((sum, item) => {
    if (item.oldPrice && item.oldPrice > item.price) {
      return sum + (item.oldPrice - item.price) * item.quantity
    }
    return sum
  }, 0)
  const shipping = selectedDelivery.fee
  const vat = Math.round((subtotal - discount + shipping) * 0.25 * 100) / 100
  const total = Math.max(0, subtotal - discount + shipping + vat)

  if (items.length === 0) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center px-8 py-12 text-center">
        <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-neutral-100 text-neutral-400">
          <CartIcon active={false} />
        </div>
        <h2 className="mb-2 text-lg font-semibold text-neutral-900">Korpa je prazna</h2>
        <p className="text-sm text-neutral-500">Dodajte proizvode iz kataloga u korpu</p>
        <button
          onClick={onContinueShopping}
          className="mt-4 rounded-xl bg-[var(--color-primary-500)] px-4 py-2 text-sm font-semibold text-white transition-colors active:bg-[var(--color-primary-600)]"
        >
          Nastavi kupovinu
        </button>
      </div>
    )
  }

  return (
    <div className="flex-1 overflow-y-auto">
      {/* Cart Items */}
      <div className="bg-white py-2">
        <MobileSectionHeader
          title="Proizvodi u korpi"
          subtitle={`${itemCount} artikla`}
          actionLabel="Očisti"
          onAction={onClear}
        />
        <div className="space-y-3 px-4 pb-4">
          {items.map((item) => (
            <MobileCartItem
              key={item.id}
              item={item}
              onQuantityChange={onQuantityChange}
              onRemove={onRemove}
            />
          ))}
        </div>
      </div>

      {/* Delivery Options */}
      <div className="mt-3 bg-white py-2">
        <MobileSectionHeader
          title="Dostava"
          subtitle="Odaberite način isporuke"
          actionLabel="Promijeni"
          onAction={() => {}}
        />
        <div className="grid gap-2 px-4 pb-4">
          {deliveryOptions.map((option) => {
            const isActive = deliveryOption === option.id
            return (
              <button
                key={option.id}
                onClick={() => setDeliveryOption(option.id)}
                className={cn(
                  'flex items-start gap-3 rounded-xl border p-3 text-left transition-colors',
                  isActive
                    ? 'border-[var(--color-primary-500)] bg-[var(--color-primary-50)]'
                    : 'border-neutral-200 bg-white'
                )}
              >
                <span
                  className={cn(
                    'mt-0.5 flex h-5 w-5 items-center justify-center rounded-full border',
                    isActive ? 'border-[var(--color-primary-500)] bg-[var(--color-primary-500)] text-white' : 'border-neutral-300 text-transparent'
                  )}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-sm font-semibold text-neutral-900">{option.title}</p>
                    <span className="text-sm font-semibold text-neutral-900">
                      {option.fee > 0 ? `${option.fee.toFixed(2)} ${currency}` : 'Besplatno'}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-500">{option.description}</p>
                  <p className="text-[10px] text-neutral-400">{option.eta}</p>
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {/* Promo Code */}
      <div className="mt-3 bg-white py-2">
        <MobileSectionHeader title="Promo kod" subtitle="Iskoristite popust" />
        <div className="px-4 pb-4">
          <div className="flex gap-2">
            <input
              value={promoCode}
              onChange={(event) => setPromoCode(event.target.value)}
              placeholder="Unesite kod"
              className="h-11 flex-1 rounded-xl border border-neutral-200 px-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-200)]"
            />
            <button className="h-11 rounded-xl bg-neutral-900 px-4 text-sm font-semibold text-white active:bg-neutral-800">
              Primijeni
            </button>
          </div>
          <p className="mt-2 text-[10px] text-neutral-500">
            Promo kod vrijedi samo za artikle u akciji.
          </p>
        </div>
      </div>

      {/* Note */}
      <div className="mt-3 bg-white py-2">
        <MobileSectionHeader title="Napomena" subtitle="Za skladište ili dostavu" />
        <div className="px-4 pb-4">
          <textarea
            value={note}
            onChange={(event) => setNote(event.target.value)}
            placeholder="Unesite napomenu uz narudžbu"
            className="min-h-[72px] w-full rounded-xl border border-neutral-200 px-3 py-2 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-200)]"
          />
        </div>
      </div>

      {/* Summary */}
      <div className="mt-3 px-4">
        <MobileCartSummary
          subtotal={subtotal}
          discount={discount}
          shipping={shipping}
          vat={vat}
          total={total}
          currency={currency}
          note="Cijene su informativne. Konačni obračun se vrši u koraku naplate."
        />
      </div>

      {/* Recommended */}
      <div className="mt-3 bg-white py-2">
        <MobileSectionHeader
          title="Preporučeno uz narudžbu"
          actionLabel="Sve"
          onAction={() => {}}
        />
        <div className="flex gap-3 overflow-x-auto px-4 pb-4 scrollbar-hide">
          {sampleMobileProducts.slice(0, 4).map((product) => (
            <MobileProductCard
              key={product.id}
              product={product}
              variant="vertical"
              onAddToCart={() => onAddToCart(product)}
              onPress={() => onProductPress(product)}
              onFavorite={() => onToggleFavorite(product)}
              isFavorite={favoriteIds.has(product.id)}
            />
          ))}
        </div>
      </div>

      <div className="h-24" />

      {/* Checkout Bar */}
      <MobileCheckoutBar
        total={total}
        currency={currency}
        itemCount={itemCount}
        className="sticky bottom-0 z-10"
        onCheckout={() => {}}
      />
    </div>
  )
}

// Favorites Screen Content
function FavoritesScreenContent({
  items,
  onToggleFavorite,
  onAddToCart,
  onContinueShopping,
  onProductPress,
  onClear,
  favoriteIds,
}: {
  items: MobileProduct[]
  onToggleFavorite: (product: MobileProduct) => void
  onAddToCart: (product: MobileProduct) => void
  onContinueShopping: () => void
  onProductPress: (product: MobileProduct) => void
  onClear: () => void
  favoriteIds: Set<string>
}) {
  if (items.length === 0) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center px-8 py-12 text-center">
        <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-neutral-100 text-neutral-400">
          <FavoritesIcon active={false} />
        </div>
        <h2 className="mb-2 text-lg font-semibold text-neutral-900">Favoriti su prazni</h2>
        <p className="text-sm text-neutral-500">Spremite proizvode za kasnije</p>
        <button
          onClick={onContinueShopping}
          className="mt-4 rounded-xl bg-[var(--color-primary-500)] px-4 py-2 text-sm font-semibold text-white transition-colors active:bg-[var(--color-primary-600)]"
        >
          Nastavi kupovinu
        </button>
      </div>
    )
  }

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="bg-white py-2">
        <MobileSectionHeader
          title="Favoriti"
          subtitle={`${items.length} proizvoda`}
          actionLabel="Očisti"
          onAction={onClear}
        />
        <div className="grid grid-cols-2 gap-3 px-4 pb-4">
          {items.map((product) => (
            <MobileProductCard
              key={product.id}
              product={product}
              variant="vertical"
              fullWidth
              onAddToCart={() => onAddToCart(product)}
              onPress={() => onProductPress(product)}
              onFavorite={() => onToggleFavorite(product)}
              isFavorite={favoriteIds.has(product.id)}
            />
          ))}
        </div>
      </div>
      <div className="h-24" />
    </div>
  )
}

// Account Screen Content
function AccountScreenContent({
  onAddToCart,
  onProductPress,
  onToggleFavorite,
  favoriteIds,
}: {
  onAddToCart: (product: MobileProduct) => void
  onProductPress: (product: MobileProduct) => void
  onToggleFavorite: (product: MobileProduct) => void
  favoriteIds: Set<string>
}) {
  const profile = {
    name: 'Ivan Horvat',
    company: 'Elektro Trade d.o.o.',
    role: 'Nabava i logistika',
    email: 'ivan.horvat@elektrotrade.hr',
    status: 'B2B kupac',
  }

  const balanceStats = [
    { label: 'Saldo', value: '1,245.80 €', helper: 'Dospijeće 15.02.', tone: 'warning' as const },
    { label: 'Raspoloživo', value: '3,754.20 €', helper: 'Limit 5,000 €', tone: 'success' as const },
    { label: 'Rabat', value: '8%', helper: 'Standardni rabat', tone: 'primary' as const },
  ]

  const addressItems = [
    { label: 'Adresa', value: 'Savska cesta 123' },
    { label: 'Grad', value: 'Zagreb' },
    { label: 'Kontakt', value: '+385 91 234 5678' },
    { label: 'PIB/OIB', value: '12345678901' },
  ]

  const recentOrders = [
    { id: '#45892', date: '12.02.2026', status: 'U obradi', tone: 'warning' as const, amount: '1,249.90 €', items: 12 },
    { id: '#45821', date: '03.02.2026', status: 'Isporučeno', tone: 'success' as const, amount: '569.40 €', items: 6 },
    { id: '#45780', date: '28.01.2026', status: 'Zatvoreno', tone: 'neutral' as const, amount: '2,110.00 €', items: 18 },
  ]

  const viewedProducts = sampleMobileProducts.slice(0, 3)
  const purchasedProducts = sampleMobileProducts.slice(1, 4)

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="px-4 pt-4">
        <MobileProfileHeader
          name={profile.name}
          company={profile.company}
          role={profile.role}
          email={profile.email}
          statusLabel={profile.status}
          onAction={() => {}}
          actionLabel="Uredi profil"
        />
      </div>

      <div className="mt-4 px-4">
        <div className="grid grid-cols-2 gap-3">
          {balanceStats.map((stat) => (
            <MobileStatCard
              key={stat.label}
              label={stat.label}
              value={stat.value}
              helper={stat.helper}
              tone={stat.tone}
            />
          ))}
          <MobileStatCard label="Bodovi" value="1,280" helper="Program vjernosti" />
        </div>
      </div>

      <div className="mt-4 px-4">
        <MobileInfoCard title="Glavna adresa" items={addressItems} actionLabel="Promijeni" onAction={() => {}} />
      </div>

      <div className="mt-4 bg-white py-2">
        <MobileSectionHeader title="Postavke" subtitle="Upravljajte računom" />
        <div className="space-y-2 px-4 pb-4">
          <MobileActionItem
            title="Promjena adrese"
            subtitle="Uredi lokacije dostave"
            icon={<MapPinIcon />}
            onPress={() => {}}
          />
          <MobileActionItem
            title="Promjena lozinke"
            subtitle="Sigurnosne postavke"
            icon={<LockIcon />}
            onPress={() => {}}
          />
          <MobileActionItem
            title="Načini plaćanja"
            subtitle="Kartice i račun"
            icon={<CardIcon />}
            onPress={() => {}}
          />
          <MobileActionItem
            title="Korisnici i ovlasti"
            subtitle="Upravljanje timom"
            icon={<UsersIcon />}
            badge="3"
            onPress={() => {}}
          />
        </div>
      </div>

      <div className="mt-3 bg-white py-2">
        <MobileSectionHeader title="Dokumenti" subtitle="Računi i otpremnice" />
        <div className="space-y-2 px-4 pb-4">
          <MobileActionItem
            title="Računi"
            subtitle="PDF i stanje uplata"
            icon={<ReceiptIcon />}
            value="8"
            onPress={() => {}}
          />
          <MobileActionItem
            title="Otpremnice"
            subtitle="Status isporuke"
            icon={<TruckIcon />}
            value="3"
            onPress={() => {}}
          />
          <MobileActionItem
            title="Narudžbe"
            subtitle="Aktivne i završene"
            icon={<BagIcon />}
            value="12"
            onPress={() => {}}
          />
        </div>
      </div>

      <div className="mt-3 bg-white py-2">
        <MobileSectionHeader title="Nedavne narudžbe" actionLabel="Sve" onAction={() => {}} />
        <div className="space-y-2 px-4 pb-4">
          {recentOrders.map((order) => (
            <MobileOrderCard
              key={order.id}
              orderId={order.id}
              date={order.date}
              status={order.status}
              statusTone={order.tone}
              amount={order.amount}
              itemsCount={order.items}
              onPress={() => {}}
            />
          ))}
        </div>
      </div>

      <div className="mt-3 bg-white py-2">
        <MobileSectionHeader title="Nedavno pregledano" actionLabel="Sve" onAction={() => {}} />
        <div className="space-y-3 px-4 pb-4">
          {viewedProducts.map((product) => (
            <MobileProductCard
              key={`viewed-${product.id}`}
              product={product}
              variant="horizontal"
              onAddToCart={() => onAddToCart(product)}
              onPress={() => onProductPress(product)}
              onFavorite={() => onToggleFavorite(product)}
              isFavorite={favoriteIds.has(product.id)}
            />
          ))}
        </div>
      </div>

      <div className="mt-3 bg-white py-2">
        <MobileSectionHeader title="Kupljeni proizvodi" actionLabel="Sve" onAction={() => {}} />
        <div className="flex gap-3 overflow-x-auto px-4 pb-4 scrollbar-hide">
          {purchasedProducts.map((product) => (
            <MobileProductCard
              key={`purchased-${product.id}`}
              product={product}
              variant="vertical"
              onAddToCart={() => onAddToCart(product)}
              onPress={() => onProductPress(product)}
              onFavorite={() => onToggleFavorite(product)}
              isFavorite={favoriteIds.has(product.id)}
            />
          ))}
        </div>
      </div>

      <div className="mt-3 bg-white py-2">
        <MobileSectionHeader title="Podrška" subtitle="Pomoć i kontakt" />
        <div className="space-y-2 px-4 pb-4">
          <MobileActionItem
            title="Kontakt prodaje"
            subtitle="sales@elektrotrade.hr"
            icon={<PhoneIcon />}
            onPress={() => {}}
          />
          <MobileActionItem
            title="Tehnička podrška"
            subtitle="support@elektrotrade.hr"
            icon={<HeadsetIcon />}
            onPress={() => {}}
          />
        </div>
      </div>

      <div className="h-24" />
    </div>
  )
}

function MapPinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 21s6-5.33 6-10a6 6 0 1 0-12 0c0 4.67 6 10 6 10z" />
      <circle cx="12" cy="11" r="2" />
    </svg>
  )
}

function LockIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="4" y="11" width="16" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </svg>
  )
}

function CardIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}

function UsersIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

function ReceiptIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M19 21H5a2 2 0 0 1-2-2V3l4 2 4-2 4 2 4-2v16a2 2 0 0 1-2 2z" />
      <path d="M9 10h6" />
      <path d="M9 14h6" />
    </svg>
  )
}

function TruckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="1" y="3" width="15" height="13" />
      <path d="M16 8h4l3 3v5h-7" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  )
}

function BagIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 2l1 4h10l1-4" />
      <path d="M3 6h18l-1.5 14H4.5L3 6z" />
      <path d="M9 10v6" />
      <path d="M15 10v6" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92V21a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3 5.18 2 2 0 0 1 5 3h4.09a2 2 0 0 1 2 1.72c.12.81.3 1.6.54 2.36a2 2 0 0 1-.45 2.11L9.91 10.09a16 16 0 0 0 4 4l.9-1.27a2 2 0 0 1 2.11-.45c.76.24 1.55.42 2.36.54A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function HeadsetIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
      <rect x="2" y="14" width="6" height="7" rx="2" />
      <rect x="16" y="14" width="6" height="7" rx="2" />
      <path d="M12 22v-2" />
    </svg>
  )
}

// Main Mobile App Content with full navigation
function MobileHomeScreenContent() {
  const [activeTab, setActiveTab] = useState('home')
  const [selectedCategory, setSelectedCategory] = useState<MobileCategoryItem | null>(null)
  const [selectedBrand, setSelectedBrand] = useState<MobileBrand | null>(null)
  const [showingProducts, setShowingProducts] = useState(false)
  const [productTitle, setProductTitle] = useState('')
  const [selectedProduct, setSelectedProduct] = useState<MobileProduct | null>(null)
  const [favoriteProducts, setFavoriteProducts] = useState<MobileProduct[]>([])
  const [favoritesHydrated, setFavoritesHydrated] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const { items, itemCount, updateQuantity, removeFromCart, clearCart } = useCart()
  const addToCart = useAddToCart()

  const cartItems = useMemo<MobileCartItemData[]>(
    () =>
      items.map((item: CartItem) => ({
        id: item.id,
        sku: item.sifra,
        name: item.naziv,
        manufacturer: item.proizvodac,
        price: item.cijena,
        oldPrice: item.staraCijena,
        currency: item.valuta,
        imageUrl: item.image,
        unit: item.jedinica,
        quantity: item.kolicina,
        maxQuantity: item.maxZaliha,
        inStock: item.maxZaliha > 0,
      })),
    [items]
  )

  const favoriteIds = useMemo(() => new Set(favoriteProducts.map((item) => item.id)), [favoriteProducts])

  useEffect(() => {
    try {
      const stored = localStorage.getItem(FAVORITES_STORAGE_KEY)
      if (stored) {
        const parsed = JSON.parse(stored)
        if (Array.isArray(parsed)) {
          setFavoriteProducts(parsed)
        }
      }
    } catch (error) {
      console.error('Failed to load favorites from localStorage:', error)
    }
    setFavoritesHydrated(true)
  }, [])

  useEffect(() => {
    if (!favoritesHydrated) return
    try {
      localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favoriteProducts))
    } catch (error) {
      console.error('Failed to save favorites to localStorage:', error)
    }
  }, [favoriteProducts, favoritesHydrated])

  const handleAddMobileProductToCart = (product: MobileProduct, quantity = 1) => {
    const stock = product.stockCount ?? (product.inStock ? 9999 : 0)
    if (stock <= 0) return

    const productForCart: ProductForCart = {
      id: product.id,
      sifra: product.sku,
      naziv: product.name,
      image: product.imageUrl,
      proizvodac: product.manufacturer,
      cijena: product.price,
      staraCijena: product.oldPrice,
      valuta: product.currency,
      zaliha: stock,
      jedinica: 'kom',
    }

    addToCart(productForCart, quantity)
  }

  const handleToggleFavorite = (product: MobileProduct) => {
    setFavoriteProducts((prev) => {
      const exists = prev.some((item) => item.id === product.id)
      if (exists) {
        return prev.filter((item) => item.id !== product.id)
      }
      return [...prev, product]
    })
  }

  const handleClearFavorites = () => {
    setFavoriteProducts([])
  }

  // Handle tab change
  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId)
    setSelectedProduct(null)
    if (tabId !== 'categories') {
      setSelectedCategory(null)
      setShowingProducts(false)
      setProductTitle('')
    }
    if (tabId !== 'brands') {
      setSelectedBrand(null)
    }
  }

  // Handle category click from home
  const handleNavigateToCategories = () => {
    setActiveTab('categories')
    setSelectedCategory(null)
    setShowingProducts(false)
    setProductTitle('')
  }

  // Handle brand click from home
  const handleNavigateToBrands = () => {
    setActiveTab('brands')
    setSelectedBrand(null)
  }

  // Handle category click
  const handleCategoryClick = (category: MobileCategoryItem) => {
    setActiveTab('categories')
    setSelectedCategory(category)
    setShowingProducts(false)
    setProductTitle('')
  }

  // Handle brand click
  const handleBrandClick = (brand: MobileBrand) => {
    setActiveTab('brands')
    setSelectedBrand(brand)
  }

  // Handle showing products
  const handleShowProducts = (title: string) => {
    setShowingProducts(true)
    setProductTitle(title)
  }

  // Handle back from products
  const handleBackFromProducts = () => {
    setShowingProducts(false)
    setProductTitle('')
  }

  // Handle back from detail views
  const handleBackFromCategory = () => {
    if (showingProducts) {
      setShowingProducts(false)
      setProductTitle('')
    } else {
      setSelectedCategory(null)
    }
  }

  const handleBackFromBrand = () => {
    setSelectedBrand(null)
  }

  const handleProductPress = (product: MobileProduct) => {
    setSelectedProduct(product)
  }

  const handleBackFromProduct = () => {
    setSelectedProduct(null)
  }

  const handleOpenSearch = () => {
    setIsSearchOpen(true)
  }

  const handleCloseSearch = () => {
    setIsSearchOpen(false)
  }

  const handleViewAllProducts = (query: string) => {
    setIsSearchOpen(false)
    setSelectedProduct(null)
    setActiveTab('categories')
    setSelectedCategory(null)
    setShowingProducts(true)
    setProductTitle(query ? `Rezultati za "${query}"` : 'Svi proizvodi')
  }

  const handleCartQuantityChange = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id)
      return
    }
    updateQuantity(id, quantity)
  }

  // Get header title based on current state
  const getHeaderTitle = () => {
    if (selectedProduct) {
      return selectedProduct.name
    }
    if (activeTab === 'categories' && showingProducts) {
      return productTitle
    }
    if (activeTab === 'categories' && selectedCategory) {
      return selectedCategory.name
    }
    if (activeTab === 'brands' && selectedBrand) {
      return selectedBrand.name
    }
    const titles: Record<string, string> = {
      home: '',
      categories: 'Kategorije',
      brands: 'Brendovi',
      cart: 'Korpa',
      favorites: 'Favoriti',
      account: 'Profil',
    }
    return titles[activeTab] || ''
  }

  // Check if we should show back button
  const showBackButton =
    !!selectedProduct ||
    (activeTab === 'categories' && (!!selectedCategory || showingProducts)) ||
    (activeTab === 'brands' && !!selectedBrand)

  return (
    <div className="relative flex h-full flex-col bg-neutral-50">
      {/* Header - conditional based on tab */}
      {activeTab === 'home' && !selectedProduct ? (
        <MobileHeader
          showLogo
          showSearch
          showCart
          cartCount={itemCount}
          variant="default"
          onSearch={handleOpenSearch}
        />
      ) : (
        <MobileCategoryHeader
          title={getHeaderTitle()}
          showBack={showBackButton}
          onBack={
            selectedProduct
              ? handleBackFromProduct
              : activeTab === 'categories'
                ? handleBackFromCategory
                : handleBackFromBrand
          }
        />
      )}

      {/* Content based on active tab */}
      {selectedProduct && (
        <ProductDetailsScreenContent
          key={selectedProduct.id}
          product={selectedProduct}
          onAddToCart={handleAddMobileProductToCart}
          onProductPress={handleProductPress}
          onToggleFavorite={handleToggleFavorite}
          isFavorite={favoriteIds.has(selectedProduct.id)}
          favoriteIds={favoriteIds}
        />
      )}
      {!selectedProduct && activeTab === 'home' && (
        <HomeScreenContent
          onNavigateToCategories={handleNavigateToCategories}
          onNavigateToBrands={handleNavigateToBrands}
          onCategoryClick={handleCategoryClick}
          onBrandClick={handleBrandClick}
          onAddToCart={handleAddMobileProductToCart}
          onProductPress={handleProductPress}
          onToggleFavorite={handleToggleFavorite}
          favoriteIds={favoriteIds}
          onOpenSearch={handleOpenSearch}
        />
      )}
      {!selectedProduct && activeTab === 'categories' && (
        <CategoriesScreenContent
          selectedCategory={selectedCategory}
          onCategoryClick={handleCategoryClick}
          onBack={handleBackFromCategory}
          showingProducts={showingProducts}
          onShowProducts={handleShowProducts}
          onBackFromProducts={handleBackFromProducts}
          productTitle={productTitle}
          onAddToCart={handleAddMobileProductToCart}
          onProductPress={handleProductPress}
          onToggleFavorite={handleToggleFavorite}
          favoriteIds={favoriteIds}
        />
      )}
      {!selectedProduct && activeTab === 'brands' && (
        <BrandsScreenContent
          selectedBrand={selectedBrand}
          onBrandClick={handleBrandClick}
          onBack={handleBackFromBrand}
          onAddToCart={handleAddMobileProductToCart}
          onProductPress={handleProductPress}
          onToggleFavorite={handleToggleFavorite}
          favoriteIds={favoriteIds}
        />
      )}
      {!selectedProduct && activeTab === 'cart' && (
        <CartScreenContent
          items={cartItems}
          onQuantityChange={handleCartQuantityChange}
          onRemove={removeFromCart}
          onClear={clearCart}
          onContinueShopping={() => setActiveTab('home')}
          onAddToCart={handleAddMobileProductToCart}
          onProductPress={handleProductPress}
          onToggleFavorite={handleToggleFavorite}
          favoriteIds={favoriteIds}
        />
      )}
      {!selectedProduct && activeTab === 'favorites' && (
        <FavoritesScreenContent
          items={favoriteProducts}
          onToggleFavorite={handleToggleFavorite}
          onAddToCart={handleAddMobileProductToCart}
          onContinueShopping={() => setActiveTab('home')}
          onProductPress={handleProductPress}
          onClear={handleClearFavorites}
          favoriteIds={favoriteIds}
        />
      )}
      {!selectedProduct && activeTab === 'account' && (
        <AccountScreenContent
          onAddToCart={handleAddMobileProductToCart}
          onProductPress={handleProductPress}
          onToggleFavorite={handleToggleFavorite}
          favoriteIds={favoriteIds}
        />
      )}

      {/* Tab Bar */}
      <MobileTabBar
        items={createTabItems(activeTab, itemCount)}
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />

      <MobileSearchModal
        isOpen={isSearchOpen}
        query={searchQuery}
        onQueryChange={setSearchQuery}
        onClose={handleCloseSearch}
        products={sampleMobileProducts}
        onSelectProduct={(product) => {
          handleCloseSearch()
          handleProductPress(product)
        }}
        onAddToCart={(product) => handleAddMobileProductToCart(product)}
        onViewAll={handleViewAllProducts}
      />
    </div>
  )
}

export default function MobileHomeScreenShowcase() {
  return (
    <div className="min-h-screen bg-neutral-100 p-4 sm:p-8">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-2 text-2xl sm:text-3xl font-bold text-neutral-900">
          Mobile Home Screen
        </h1>
        <p className="mb-6 sm:mb-8 text-sm sm:text-base text-neutral-600">
          Interaktivni preview iOS/Android aplikacije sa navigacijom. Kliknite na tabove, kategorije ili brendove za navigaciju.
        </p>

        {/* Preview Section */}
        <div className="mb-8 sm:mb-12">
          <h2 className="mb-4 text-lg sm:text-xl font-semibold text-neutral-800">
            Preview
          </h2>
          <div className="flex flex-col items-center gap-6 rounded-2xl bg-neutral-200 p-4 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-8 sm:p-8">
            {/* iPhone Preview */}
            <div>
              <p className="mb-2 text-center text-xs sm:text-sm font-medium text-neutral-600">iPhone</p>
              <PhoneFrame device="iphone" size="medium">
                <MobileHomeScreenContent />
              </PhoneFrame>
            </div>

            {/* Android Preview */}
            <div>
              <p className="mb-2 text-center text-xs sm:text-sm font-medium text-neutral-600">Android</p>
              <PhoneFrame device="android" size="medium">
                <MobileHomeScreenContent />
              </PhoneFrame>
            </div>
          </div>
        </div>

        {/* Navigation Info */}
        <div className="rounded-xl border border-blue-200 bg-blue-50 p-4 sm:p-5">
          <h3 className="mb-2 font-semibold text-blue-900 text-sm sm:text-base">Kako koristiti</h3>
          <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-blue-800">
            <li>• Kliknite na tabove (Početna, Kategorije, Korpa, Favoriti, Profil)</li>
            <li>• Na početnoj: kliknite &quot;Sve&quot; kod Kategorija ili Brendova</li>
            <li>• Kliknite na kategoriju/brend za detalje</li>
            <li>• Koristite strelicu nazad za povratak</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

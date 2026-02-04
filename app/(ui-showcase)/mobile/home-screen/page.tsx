'use client'

import { useState } from 'react'
import {
  PhoneFrame,
  MobileHeader,
  MobileTabBar,
  MobileSearchBar,
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
  sampleMobileProducts,
  defaultQuickActions,
  sampleMobileBrands,
  sampleSubcategories,
  HomeIcon,
  CategoriesIcon,
  CartIcon,
  FavoritesIcon,
  AccountIcon,
  type MobileCategoryItem,
  type MobileBrand,
} from '@/src/components/mobile'

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

// Create tab items with proper active states
function createTabItems(activeTab: string, cartCount: number = 3) {
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

// Home Screen Content
function HomeScreenContent({
  onNavigateToCategories,
  onNavigateToBrands,
  onCategoryClick,
  onBrandClick,
}: {
  onNavigateToCategories: () => void
  onNavigateToBrands: () => void
  onCategoryClick: (category: MobileCategoryItem) => void
  onBrandClick: (brand: MobileBrand) => void
}) {
  const [currentSlide, setCurrentSlide] = useState(0)

  return (
    <div className="flex-1 overflow-y-auto">
      {/* Search Bar */}
      <MobileSearchBar placeholder="Pretraži proizvode..." showScanButton />

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
            <MobileProductCard key={product.id} product={product} variant="vertical" />
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
            <MobileProductCard key={product.id} product={product} variant="compact" />
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
}: {
  selectedCategory: MobileCategoryItem | null
  onCategoryClick: (category: MobileCategoryItem) => void
  onBack: () => void
  showingProducts: boolean
  onShowProducts: (title: string) => void
  onBackFromProducts: () => void
  productTitle: string
}) {
  const [searchQuery, setSearchQuery] = useState('')

  // Filter categories based on search
  const filteredCategories = searchQuery
    ? allCategories.filter((cat) => cat.name.toLowerCase().includes(searchQuery.toLowerCase()))
    : allCategories

  // Products view
  if (showingProducts && selectedCategory) {
    return (
      <div className="flex-1 overflow-y-auto">
        {/* Search Bar */}
        <MobileSearchBar placeholder={`Pretraži u ${productTitle}...`} />

        {/* Product count info */}
        <div className="flex items-center justify-between px-4 py-2">
          <p className="text-sm text-neutral-500">
            {sampleMobileProducts.length * 3} proizvoda
          </p>
          <button className="flex items-center gap-1 text-sm font-medium text-neutral-600">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="4" y1="21" x2="4" y2="14" />
              <line x1="4" y1="10" x2="4" y2="3" />
              <line x1="12" y1="21" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12" y2="3" />
              <line x1="20" y1="21" x2="20" y2="16" />
              <line x1="20" y1="12" x2="20" y2="3" />
              <line x1="1" y1="14" x2="7" y2="14" />
              <line x1="9" y1="8" x2="15" y2="8" />
              <line x1="17" y1="16" x2="23" y2="16" />
            </svg>
            Filteri
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 gap-3 px-4 pb-4">
          {[...sampleMobileProducts, ...sampleMobileProducts, ...sampleMobileProducts].map((product, index) => (
            <MobileProductCard
              key={`${product.id}-${index}`}
              product={{ ...product, id: `${product.id}-${index}` }}
              variant="vertical"
              fullWidth
            />
          ))}
        </div>

        <div className="h-4" />
      </div>
    )
  }

  // Main categories view
  if (!selectedCategory) {
    return (
      <div className="flex-1 overflow-y-auto">
        {/* Search Bar */}
        <MobileSearchBar
          placeholder="Pretraži kategorije..."
          value={searchQuery}
          onChange={setSearchQuery}
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
            <p className="text-sm text-neutral-500">Nema rezultata za &quot;{searchQuery}&quot;</p>
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
}: {
  selectedBrand: MobileBrand | null
  onBrandClick: (brand: MobileBrand) => void
  onBack: () => void
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
            <MobileProductCard key={product.id} product={product} variant="vertical" fullWidth />
          ))}
        </div>
      </div>

      <div className="h-4" />
    </div>
  )
}

// Cart Screen Content (placeholder)
function CartScreenContent() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-8 py-12 text-center">
      <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-neutral-100 text-neutral-400">
        <CartIcon active={false} />
      </div>
      <h2 className="mb-2 text-lg font-semibold text-neutral-900">Korpa</h2>
      <p className="text-sm text-neutral-500">3 artikla u korpi</p>
      <p className="mt-1 text-xs text-neutral-400">Ova stranica je u izradi</p>
    </div>
  )
}

// Favorites Screen Content (placeholder)
function FavoritesScreenContent() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-8 py-12 text-center">
      <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-neutral-100 text-neutral-400">
        <FavoritesIcon active={false} />
      </div>
      <h2 className="mb-2 text-lg font-semibold text-neutral-900">Favoriti</h2>
      <p className="text-sm text-neutral-500">Vaši omiljeni proizvodi</p>
      <p className="mt-1 text-xs text-neutral-400">Ova stranica je u izradi</p>
    </div>
  )
}

// Account Screen Content (placeholder)
function AccountScreenContent() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-8 py-12 text-center">
      <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-neutral-100 text-neutral-400">
        <AccountIcon active={false} />
      </div>
      <h2 className="mb-2 text-lg font-semibold text-neutral-900">Profil</h2>
      <p className="text-sm text-neutral-500">Vaš korisnički račun</p>
      <p className="mt-1 text-xs text-neutral-400">Ova stranica je u izradi</p>
    </div>
  )
}

// Main Mobile App Content with full navigation
function MobileHomeScreenContent() {
  const [activeTab, setActiveTab] = useState('home')
  const [selectedCategory, setSelectedCategory] = useState<MobileCategoryItem | null>(null)
  const [selectedBrand, setSelectedBrand] = useState<MobileBrand | null>(null)
  const [showingProducts, setShowingProducts] = useState(false)
  const [productTitle, setProductTitle] = useState('')

  // Handle tab change
  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId)
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

  // Get header title based on current state
  const getHeaderTitle = () => {
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
  const showBackButton = (activeTab === 'categories' && (!!selectedCategory || showingProducts)) || (activeTab === 'brands' && !!selectedBrand)

  return (
    <div className="flex h-full flex-col bg-neutral-50">
      {/* Header - conditional based on tab */}
      {activeTab === 'home' ? (
        <MobileHeader showLogo showSearch showCart cartCount={3} variant="default" />
      ) : (
        <MobileCategoryHeader
          title={getHeaderTitle()}
          showBack={showBackButton}
          onBack={activeTab === 'categories' ? handleBackFromCategory : handleBackFromBrand}
        />
      )}

      {/* Content based on active tab */}
      {activeTab === 'home' && (
        <HomeScreenContent
          onNavigateToCategories={handleNavigateToCategories}
          onNavigateToBrands={handleNavigateToBrands}
          onCategoryClick={handleCategoryClick}
          onBrandClick={handleBrandClick}
        />
      )}
      {activeTab === 'categories' && (
        <CategoriesScreenContent
          selectedCategory={selectedCategory}
          onCategoryClick={handleCategoryClick}
          onBack={handleBackFromCategory}
          showingProducts={showingProducts}
          onShowProducts={handleShowProducts}
          onBackFromProducts={handleBackFromProducts}
          productTitle={productTitle}
        />
      )}
      {activeTab === 'brands' && (
        <BrandsScreenContent
          selectedBrand={selectedBrand}
          onBrandClick={handleBrandClick}
          onBack={handleBackFromBrand}
        />
      )}
      {activeTab === 'cart' && <CartScreenContent />}
      {activeTab === 'favorites' && <FavoritesScreenContent />}
      {activeTab === 'account' && <AccountScreenContent />}

      {/* Tab Bar */}
      <MobileTabBar
        items={createTabItems(activeTab)}
        activeTab={activeTab}
        onTabChange={handleTabChange}
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

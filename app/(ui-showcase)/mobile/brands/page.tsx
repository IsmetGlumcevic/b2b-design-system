'use client'

import { useState } from 'react'
import {
  PhoneFrame,
  MobileTabBar,
  MobileSearchBar,
  MobileCategoryHeader,
  MobileProductCard,
  MobileSectionHeader,
  sampleMobileProducts,
  sampleMobileBrands,
  HomeIcon,
  CategoriesIcon,
  CartIcon,
  FavoritesIcon,
  AccountIcon,
  type MobileBrand,
} from '@/src/components/mobile'
import { MobileBrandGrid, extendedMobileBrands } from '@/src/components/mobile/MobileBrandGrid'
import { MobileBrandDetailHeader } from '@/src/components/mobile/MobileBrandDetailHeader'

// Create tab items with proper active states
function createTabItems(activeTab: string) {
  return [
    { id: 'home', label: 'Početna', icon: <HomeIcon active={activeTab === 'home'} /> },
    { id: 'categories', label: 'Kategorije', icon: <CategoriesIcon active={activeTab === 'categories'} /> },
    { id: 'cart', label: 'Korpa', icon: <CartIcon active={activeTab === 'cart'} />, badge: 3 },
    { id: 'favorites', label: 'Favoriti', icon: <FavoritesIcon active={activeTab === 'favorites'} /> },
    { id: 'account', label: 'Profil', icon: <AccountIcon active={activeTab === 'account'} /> },
  ]
}

// Brand categories for filtering
const brandCategories = [
  { id: 'all', name: 'Sve' },
  { id: 'electrical', name: 'Elektrika' },
  { id: 'lighting', name: 'Rasvjeta' },
  { id: 'cables', name: 'Kablovi' },
  { id: 'automation', name: 'Automatika' },
]

// Mobile Brand List Screen Content
function MobileBrandListScreenContent() {
  const [activeTab, setActiveTab] = useState('categories')
  const [selectedBrand, setSelectedBrand] = useState<MobileBrand | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  // Filter brands based on search
  const filteredBrands = searchQuery
    ? extendedMobileBrands.filter((brand) =>
        brand.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : extendedMobileBrands

  // Handle brand selection
  const handleBrandClick = (brand: MobileBrand) => {
    setSelectedBrand(brand)
  }

  // Handle back navigation
  const handleBack = () => {
    setSelectedBrand(null)
  }

  // Main brands list view
  if (!selectedBrand) {
    return (
      <div className="flex h-full flex-col bg-neutral-50">
        {/* Header */}
        <MobileCategoryHeader title="Brendovi" />

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto">
          {/* Search Bar */}
          <MobileSearchBar
            placeholder="Pretraži brendove..."
            value={searchQuery}
            onChange={setSearchQuery}
          />

          {/* Category Filter */}
          <div className="flex gap-2 overflow-x-auto px-4 py-2 scrollbar-hide">
            {brandCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`shrink-0 rounded-full px-4 py-2 text-xs font-medium transition-colors ${
                  selectedCategory === cat.id
                    ? 'bg-[var(--color-primary-500)] text-white'
                    : 'bg-white text-neutral-600 shadow-sm'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Brands Grid */}
          <div className="py-4">
            <MobileBrandGrid
              brands={filteredBrands}
              onBrandClick={handleBrandClick}
              variant="default"
              columns={3}
            />
          </div>

          {/* Info */}
          {filteredBrands.length === 0 && (
            <div className="flex flex-col items-center justify-center px-8 py-12 text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-neutral-100 text-neutral-400">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </div>
              <p className="text-sm text-neutral-500">
                Nema rezultata za "{searchQuery}"
              </p>
            </div>
          )}

          {/* Stats */}
          <div className="mx-4 mb-4 rounded-xl bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="text-center">
                <p className="text-lg font-bold text-neutral-900">{extendedMobileBrands.length}</p>
                <p className="text-xs text-neutral-500">Brendova</p>
              </div>
              <div className="h-8 w-px bg-neutral-200" />
              <div className="text-center">
                <p className="text-lg font-bold text-neutral-900">
                  {extendedMobileBrands.reduce((acc, b) => acc + (b.productCount || 0), 0).toLocaleString('hr-HR')}
                </p>
                <p className="text-xs text-neutral-500">Artikala</p>
              </div>
              <div className="h-8 w-px bg-neutral-200" />
              <div className="text-center">
                <p className="text-lg font-bold text-[var(--color-primary-500)]">100%</p>
                <p className="text-xs text-neutral-500">Original</p>
              </div>
            </div>
          </div>

          {/* Spacer for tab bar */}
          <div className="h-4" />
        </div>

        {/* Tab Bar */}
        <MobileTabBar
          items={createTabItems(activeTab)}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
      </div>
    )
  }

  // Brand detail view
  return (
    <div className="flex h-full flex-col bg-neutral-50">
      {/* Header with back button */}
      <MobileCategoryHeader
        title={selectedBrand.name}
        showBack
        onBack={handleBack}
      />

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Brand Detail Header */}
        <div className="pt-4">
          <MobileBrandDetailHeader brand={selectedBrand} variant="expanded" />
        </div>

        {/* Search within brand */}
        <MobileSearchBar placeholder={`Pretraži ${selectedBrand.name} proizvode...`} />

        {/* Quick filters */}
        <div className="flex gap-2 overflow-x-auto px-4 py-2 scrollbar-hide">
          {['Sve', 'Na akciji', 'Novo', 'Na stanju'].map((filter, index) => (
            <button
              key={filter}
              className={`shrink-0 rounded-full px-4 py-2 text-xs font-medium transition-colors ${
                index === 0
                  ? 'bg-[var(--color-primary-500)] text-white'
                  : 'bg-white text-neutral-600 shadow-sm'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Products on sale */}
        <div className="bg-white py-2">
          <MobileSectionHeader
            title="Proizvodi na akciji"
            subtitle={`${selectedBrand.name} akcije`}
            actionLabel="Sve akcije"
            onAction={() => {}}
          />
          <div className="flex gap-3 overflow-x-auto px-4 pb-4 scrollbar-hide">
            {sampleMobileProducts.slice(0, 4).map((product) => (
              <MobileProductCard
                key={product.id}
                product={{ ...product, manufacturer: selectedBrand.name, badge: 'sale' as const }}
                variant="vertical"
              />
            ))}
          </div>
        </div>

        {/* New products */}
        <div className="bg-white py-2">
          <MobileSectionHeader
            title="Novi proizvodi"
            actionLabel="Pogledaj sve"
            onAction={() => {}}
          />
          <div className="flex gap-3 overflow-x-auto px-4 pb-4 scrollbar-hide">
            {sampleMobileProducts.slice(1, 5).map((product) => (
              <MobileProductCard
                key={product.id}
                product={{ ...product, manufacturer: selectedBrand.name, badge: 'new' as const }}
                variant="vertical"
              />
            ))}
          </div>
        </div>

        {/* Popular categories from this brand */}
        <div className="bg-white py-4">
          <h3 className="mb-3 px-4 text-sm font-semibold text-neutral-900">
            Popularne kategorije
          </h3>
          <div className="space-y-1 px-4">
            {['Osigurači i zaštita', 'Modularni uređaji', 'Kutije i kućišta', 'Konektori'].map((cat, index) => (
              <button
                key={cat}
                className="flex w-full items-center justify-between rounded-lg bg-neutral-50 px-4 py-3 transition-colors active:bg-neutral-100"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-primary-100)] text-xs font-bold text-[var(--color-primary-600)]">
                    {index + 1}
                  </span>
                  <span className="text-sm font-medium text-neutral-700">{cat}</span>
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            ))}
          </div>
        </div>

        {/* View all products button */}
        <div className="p-4">
          <button className="w-full rounded-xl bg-[var(--color-primary-500)] py-3 text-sm font-semibold text-white transition-colors active:bg-[var(--color-primary-600)]">
            Prikaži sve proizvode ({selectedBrand.productCount?.toLocaleString('hr-HR')})
          </button>
        </div>

        {/* Spacer */}
        <div className="h-4" />
      </div>

      {/* Tab Bar */}
      <MobileTabBar
        items={createTabItems(activeTab)}
        activeTab={activeTab}
        onTabChange={(tab) => {
          if (tab !== 'categories') {
            setSelectedBrand(null)
          }
          setActiveTab(tab)
        }}
      />
    </div>
  )
}

export default function MobileBrandsScreenShowcase() {
  return (
    <div className="min-h-screen bg-neutral-100 p-8">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-2 text-3xl font-bold text-neutral-900">
          Mobile Brands Screen
        </h1>
        <p className="mb-8 text-neutral-600">
          Prikaz svih brendova u grid layoutu sa search filterom i drill-down u pojedinačne brendove sa njihovim proizvodima.
        </p>

        {/* Preview Section */}
        <div className="mb-12">
          <h2 className="mb-4 text-xl font-semibold text-neutral-800">
            Preview
          </h2>
          <div className="flex flex-wrap justify-center gap-8 rounded-2xl bg-neutral-200 p-8">
            {/* iPhone Preview */}
            <div>
              <PhoneFrame device="iphone" size="medium">
                <MobileBrandListScreenContent />
              </PhoneFrame>
            </div>

            {/* Android Preview */}
            <div>
              <PhoneFrame device="android" size="medium">
                <MobileBrandListScreenContent />
              </PhoneFrame>
            </div>
          </div>
        </div>

        {/* Component List */}
        <div className="mb-12">
          <h2 className="mb-4 text-xl font-semibold text-neutral-800">
            Komponente korištene na ovom ekranu
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: 'MobileCategoryHeader', desc: 'Header sa naslovom i back navigacijom' },
              { name: 'MobileSearchBar', desc: 'Search input za filtriranje brendova' },
              { name: 'MobileBrandGrid', desc: 'Grid prikaz svih brendova' },
              { name: 'MobileBrandDetailHeader', desc: 'Header sa detaljima brenda' },
              { name: 'MobileProductCard', desc: 'Kartica proizvoda' },
              { name: 'MobileSectionHeader', desc: 'Header sekcije sa akcijom' },
              { name: 'MobileTabBar', desc: 'Bottom navigation tab bar' },
            ].map((comp) => (
              <div
                key={comp.name}
                className="rounded-lg border border-neutral-200 bg-white p-4"
              >
                <h3 className="mb-1 font-medium text-neutral-900">{comp.name}</h3>
                <p className="text-sm text-neutral-500">{comp.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mb-12">
          <h2 className="mb-4 text-xl font-semibold text-neutral-800">
            Funkcionalnosti
          </h2>
          <div className="space-y-4">
            {[
              { name: 'Grid prikaz brendova', desc: '18 brendova u 3-kolonskom grid layoutu sa logom i brojem artikala' },
              { name: 'Search filter', desc: 'Pretraga brendova po imenu sa instant rezultatima' },
              { name: 'Category filter', desc: 'Filtriranje brendova po kategoriji proizvoda (Sve, Elektrika, Rasvjeta, itd.)' },
              { name: 'Drill-down navigacija', desc: 'Klik na brend otvara detalje brenda sa back navigacijom' },
              { name: 'Brand detail header', desc: 'Expanded header sa logom, imenom i brojem proizvoda' },
              { name: 'Proizvodi na akciji', desc: 'Horizontalni scroll proizvoda na akciji od odabranog brenda' },
              { name: 'Novi proizvodi', desc: 'Horizontalni scroll najnovijih proizvoda od brenda' },
              { name: 'Popularne kategorije', desc: 'Lista najpopularnijih kategorija proizvoda od brenda' },
              { name: 'View all button', desc: 'Dugme za prikaz svih proizvoda brenda' },
            ].map((feature, index) => (
              <div
                key={feature.name}
                className="flex items-start gap-4 rounded-lg border border-neutral-200 bg-white p-4"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-100 text-sm font-bold text-primary-600">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-medium text-neutral-900">{feature.name}</h3>
                  <p className="text-sm text-neutral-500">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Brand Detail Header Variants */}
        <div>
          <h2 className="mb-4 text-xl font-semibold text-neutral-800">
            MobileBrandDetailHeader varijante
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {(['compact', 'default', 'expanded'] as const).map((variant) => (
              <div key={variant} className="rounded-xl bg-neutral-200 p-4">
                <p className="mb-3 text-center text-sm font-medium capitalize text-neutral-600">{variant}</p>
                <div className="rounded-xl bg-neutral-50 py-4">
                  <MobileBrandDetailHeader brand={sampleMobileBrands[0]} variant={variant} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

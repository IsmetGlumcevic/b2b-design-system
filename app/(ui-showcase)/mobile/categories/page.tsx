'use client'

import { useState } from 'react'
import {
  PhoneFrame,
  MobileTabBar,
  MobileSearchBar,
  defaultMobileCategories,
  HomeIcon,
  CategoriesIcon,
  CartIcon,
  FavoritesIcon,
  AccountIcon,
  type MobileCategoryItem,
} from '@/src/components/mobile'
import { MobileCategoryGrid } from '@/src/components/mobile/MobileCategoryGrid'
import { MobileCategoryHeader } from '@/src/components/mobile/MobileCategoryHeader'
import { MobileSubcategoryList, sampleSubcategories } from '@/src/components/mobile/MobileSubcategoryList'

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
function createTabItems(activeTab: string) {
  return [
    { id: 'home', label: 'Početna', icon: <HomeIcon active={activeTab === 'home'} /> },
    { id: 'categories', label: 'Kategorije', icon: <CategoriesIcon active={activeTab === 'categories'} /> },
    { id: 'cart', label: 'Košarica', icon: <CartIcon active={activeTab === 'cart'} />, badge: 3 },
    { id: 'favorites', label: 'Favoriti', icon: <FavoritesIcon active={activeTab === 'favorites'} /> },
    { id: 'account', label: 'Profil', icon: <AccountIcon active={activeTab === 'account'} /> },
  ]
}

// Get subcategories based on category name
function getSubcategoriesForCategory(categoryName: string) {
  const key = categoryName.toLowerCase().replace(/č/g, 'c').replace(/š/g, 's')
  return sampleSubcategories[key] || sampleSubcategories.kablovi
}

// Mobile Categories Screen Content
function MobileCategoriesScreenContent() {
  const [activeTab, setActiveTab] = useState('categories')
  const [selectedCategory, setSelectedCategory] = useState<MobileCategoryItem | null>(null)
  const [searchQuery, setSearchQuery] = useState('')

  // Filter categories based on search
  const filteredCategories = searchQuery
    ? allCategories.filter((cat) =>
        cat.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : allCategories

  // Handle category selection
  const handleCategoryClick = (category: MobileCategoryItem) => {
    setSelectedCategory(category)
  }

  // Handle back navigation
  const handleBack = () => {
    setSelectedCategory(null)
  }

  // Main categories view
  if (!selectedCategory) {
    return (
      <div className="flex h-full flex-col bg-neutral-50">
        {/* Header */}
        <MobileCategoryHeader title="Kategorije" />

        {/* Scrollable Content */}
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
              onCategoryClick={handleCategoryClick}
              variant="default"
              columns={3}
            />
          </div>

          {/* Info */}
          {filteredCategories.length === 0 && (
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

  // Subcategories view
  return (
    <div className="flex h-full flex-col bg-neutral-50">
      {/* Header with back button */}
      <MobileCategoryHeader
        title={selectedCategory.name}
        showBack
        onBack={handleBack}
      />

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Category info banner */}
        <div
          className="mx-4 mt-4 flex items-center gap-3 rounded-xl p-4"
          style={{
            backgroundColor: selectedCategory.color
              ? `${selectedCategory.color}15`
              : '#f5f5f5',
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
            <h2 className="font-semibold text-neutral-900">
              {selectedCategory.name}
            </h2>
            {selectedCategory.productCount && (
              <p className="text-sm text-neutral-500">
                {selectedCategory.productCount.toLocaleString('hr-HR')} artikala
              </p>
            )}
          </div>
        </div>

        {/* Search within category */}
        <MobileSearchBar
          placeholder={`Pretraži u ${selectedCategory.name}...`}
        />

        {/* Subcategories */}
        <div className="py-2">
          <h3 className="mb-2 px-4 text-sm font-semibold text-neutral-700">
            Podkategorije
          </h3>
          <MobileSubcategoryList
            subcategories={getSubcategoriesForCategory(selectedCategory.name)}
            variant="list"
            onSubcategoryClick={(sub) => {
              // In real app, this would navigate to product list
              console.log('Selected subcategory:', sub)
            }}
          />
        </div>

        {/* View all products button */}
        <div className="p-4">
          <button className="w-full rounded-xl bg-[var(--color-primary-500)] py-3 text-sm font-semibold text-white transition-colors active:bg-[var(--color-primary-600)]">
            Prikaži sve proizvode ({selectedCategory.productCount?.toLocaleString('hr-HR')})
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
            setSelectedCategory(null)
          }
          setActiveTab(tab)
        }}
      />
    </div>
  )
}

export default function MobileCategoriesScreenShowcase() {
  return (
    <div className="min-h-screen bg-neutral-100 p-8">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-2 text-3xl font-bold text-neutral-900">
          Mobile Categories Screen
        </h1>
        <p className="mb-8 text-neutral-600">
          Prikaz svih kategorija u grid layoutu sa search filterom i drill-down u podkategorije.
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
                <MobileCategoriesScreenContent />
              </PhoneFrame>
            </div>

            {/* Android Preview */}
            <div>
              <PhoneFrame device="android" size="medium">
                <MobileCategoriesScreenContent />
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
              { name: 'MobileSearchBar', desc: 'Search input za filtriranje' },
              { name: 'MobileCategoryGrid', desc: 'Grid prikaz svih kategorija' },
              { name: 'MobileSubcategoryList', desc: 'Lista podkategorija' },
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
        <div>
          <h2 className="mb-4 text-xl font-semibold text-neutral-800">
            Funkcionalnosti
          </h2>
          <div className="space-y-4">
            {[
              { name: 'Grid prikaz kategorija', desc: '12 glavnih kategorija u 3-kolonskom grid layoutu sa ikonama i brojem artikala' },
              { name: 'Search filter', desc: 'Pretraga kategorija po imenu sa instant rezultatima' },
              { name: 'Drill-down navigacija', desc: 'Klik na kategoriju otvara podkategorije sa back navigacijom' },
              { name: 'Category banner', desc: 'Info banner sa ikonom kategorije i brojem artikala' },
              { name: 'Lista podkategorija', desc: 'Lista svih podkategorija sa brojem artikala i strelicama' },
              { name: 'View all button', desc: 'Dugme za prikaz svih proizvoda iz kategorije' },
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
      </div>
    </div>
  )
}

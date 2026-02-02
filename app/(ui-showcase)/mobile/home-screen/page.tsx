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
  defaultTabItems,
  defaultHeroSlides,
  defaultMobileCategories,
  sampleMobileProducts,
  defaultQuickActions,
  sampleMobileBrands,
  HomeIcon,
  CategoriesIcon,
  CartIcon,
  FavoritesIcon,
  AccountIcon,
} from '@/src/components/mobile'

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

// Mobile Home Screen Content
function MobileHomeScreenContent() {
  const [activeTab, setActiveTab] = useState('home')
  const [currentSlide, setCurrentSlide] = useState(0)

  return (
    <div className="flex h-full flex-col bg-neutral-50">
      {/* Header */}
      <MobileHeader
        showLogo
        showSearch
        showCart
        cartCount={3}
        variant="default"
      />

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Search Bar */}
        <MobileSearchBar
          placeholder="Pretraži proizvode..."
          showScanButton
        />

        {/* Hero Banner */}
        <MobileHeroBanner
          slides={defaultHeroSlides}
          currentSlide={currentSlide}
          onSlideChange={setCurrentSlide}
        />

        {/* Quick Actions */}
        <MobileQuickActions
          actions={defaultQuickActions}
          variant="horizontal"
        />

        {/* Categories */}
        <MobileCategoryScroller
          categories={defaultMobileCategories}
          title="Kategorije"
          variant="circle"
        />

        {/* Products Section - Akcija */}
        <div className="bg-white py-2">
          <MobileSectionHeader
            title="Akcija"
            subtitle="Najbolje cijene ovog mjeseca"
            actionLabel="Sve akcije"
            onAction={() => {}}
          />
          <div className="flex gap-3 overflow-x-auto px-4 pb-4 scrollbar-hide">
            {sampleMobileProducts.slice(0, 4).map((product) => (
              <MobileProductCard
                key={product.id}
                product={product}
                variant="vertical"
              />
            ))}
          </div>
        </div>

        {/* Brands */}
        <MobileBrandScroller
          brands={sampleMobileBrands}
          title="Brendovi"
        />

        {/* Products Section - Novo */}
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
            onAction={() => {}}
          />
          <div className="px-4 pb-4">
            {sampleMobileProducts.slice(0, 3).map((product) => (
              <MobileProductCard
                key={product.id}
                product={product}
                variant="compact"
              />
            ))}
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

export default function MobileHomeScreenShowcase() {
  return (
    <div className="min-h-screen bg-neutral-100 p-8">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-2 text-3xl font-bold text-neutral-900">
          Mobile Home Screen
        </h1>
        <p className="mb-8 text-neutral-600">
          Početni ekran iOS/Android aplikacije sa svim sekcijama: Hero banner, kategorije, akcije, brendovi, novi proizvodi i nedavne narudžbe.
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
                <MobileHomeScreenContent />
              </PhoneFrame>
            </div>

            {/* Android Preview */}
            <div>
              <PhoneFrame device="android" size="medium">
                <MobileHomeScreenContent />
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
              { name: 'MobileHeader', desc: 'Header sa logom, search i cart ikonom' },
              { name: 'MobileSearchBar', desc: 'Search input sa scan dugmetom' },
              { name: 'MobileHeroBanner', desc: 'Carousel banner sa slide-ovima' },
              { name: 'MobileQuickActions', desc: 'Brze akcije (narudžbe, ponovi, računi)' },
              { name: 'MobileCategoryScroller', desc: 'Horizontalni scroller kategorija' },
              { name: 'MobileProductCard', desc: 'Kartica proizvoda (vertical, horizontal, compact)' },
              { name: 'MobileSectionHeader', desc: 'Header sekcije sa akcijom' },
              { name: 'MobileBrandScroller', desc: 'Horizontalni scroller brendova' },
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

        {/* Screen Sections */}
        <div>
          <h2 className="mb-4 text-xl font-semibold text-neutral-800">
            Sekcije ekrana
          </h2>
          <div className="space-y-4">
            {[
              { name: 'Header', desc: 'Fiksni header sa logom, search trigger i cart badge' },
              { name: 'Search Bar', desc: 'Input za pretragu sa barcode scan opcijom' },
              { name: 'Hero Banner', desc: 'Slider sa promotivnim bannerima' },
              { name: 'Quick Actions', desc: 'Brze akcije za često korištene funkcije' },
              { name: 'Categories', desc: 'Horizontalni scroll kategorija sa ikonama' },
              { name: 'Akcija', desc: 'Proizvodi na akciji - horizontal scroll' },
              { name: 'Brendovi', desc: 'Istaknuti brendovi - horizontal scroll' },
              { name: 'Novi proizvodi', desc: 'Najnoviji proizvodi - horizontal scroll' },
              { name: 'Nedavne narudžbe', desc: 'Lista nedavno naručenih proizvoda' },
              { name: 'Tab Bar', desc: 'Bottom navigation sa 5 tabova' },
            ].map((section, index) => (
              <div
                key={section.name}
                className="flex items-start gap-4 rounded-lg border border-neutral-200 bg-white p-4"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-100 text-sm font-bold text-primary-600">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-medium text-neutral-900">{section.name}</h3>
                  <p className="text-sm text-neutral-500">{section.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

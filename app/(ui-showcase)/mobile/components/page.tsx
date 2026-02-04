'use client'

import { useState } from 'react'
import { PhoneFrame } from '@/src/components/mobile/PhoneFrame'
import { MobileHeader } from '@/src/components/mobile/MobileHeader'
import { MobileTabBar, HomeIcon, CategoriesIcon, CartIcon, FavoritesIcon, AccountIcon } from '@/src/components/mobile/MobileTabBar'
import { MobileSearchBar } from '@/src/components/mobile/MobileSearchBar'
import { MobileProductCard, sampleMobileProducts } from '@/src/components/mobile/MobileProductCard'
import { MobileQuickActions, defaultQuickActions } from '@/src/components/mobile/MobileQuickActions'
import { MobileSectionHeader } from '@/src/components/mobile/MobileSectionHeader'
import { MobileCategoryScroller } from '@/src/components/mobile/MobileCategoryScroller'
import { MobileBrandScroller } from '@/src/components/mobile/MobileBrandScroller'
import { MobileCartItem, MobileCartSummary, MobileCheckoutBar, sampleMobileCartItems } from '@/src/components/mobile'
import { MobileProfileHeader, MobileStatCard, MobileInfoCard, MobileActionItem, MobileOrderCard } from '@/src/components/mobile'

// Icons for page
const ComponentIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
  </svg>
)

// Component showcase wrapper
function ComponentShowcase({
  title,
  description,
  children,
}: {
  title: string
  description: string
  children: React.ReactNode
}) {
  return (
    <div className="mb-12">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-neutral-900">{title}</h2>
        <p className="text-sm text-neutral-500">{description}</p>
      </div>
      <div className="flex flex-wrap gap-6">{children}</div>
    </div>
  )
}

// Single variant display
function VariantCard({
  label,
  children,
  bgColor = 'bg-neutral-100',
}: {
  label: string
  children: React.ReactNode
  bgColor?: string
}) {
  return (
    <div className="flex flex-col items-center">
      <span className="mb-2 text-xs font-medium text-neutral-500">{label}</span>
      <div className={`overflow-hidden rounded-2xl ${bgColor} p-4`}>
        {children}
      </div>
    </div>
  )
}

const MapPinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 21s6-5.33 6-10a6 6 0 1 0-12 0c0 4.67 6 10 6 10z" />
    <circle cx="12" cy="11" r="2" />
  </svg>
)

const LockIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="4" y="11" width="16" height="10" rx="2" />
    <path d="M8 11V7a4 4 0 0 1 8 0v4" />
  </svg>
)

export default function MobileComponentsShowcase() {
  const [activeTab, setActiveTab] = useState('home')
  const [searchValue, setSearchValue] = useState('')

  // Tab items with active state icons
  const getTabItems = (active: string) => [
    { id: 'home', label: 'Početna', icon: <HomeIcon active={active === 'home'} /> },
    { id: 'categories', label: 'Kategorije', icon: <CategoriesIcon active={active === 'categories'} /> },
    { id: 'cart', label: 'Korpa', icon: <CartIcon active={active === 'cart'} />, badge: 3 },
    { id: 'favorites', label: 'Favoriti', icon: <FavoritesIcon active={active === 'favorites'} /> },
    { id: 'account', label: 'Profil', icon: <AccountIcon active={active === 'account'} /> },
  ]

  return (
    <div className="min-h-screen bg-neutral-50 p-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-primary-100)] text-[var(--color-primary-500)]">
              <ComponentIcon />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-neutral-900">
                iOS/Android Komponente
              </h1>
              <p className="text-neutral-500">Sve varijante mobilnih komponenti</p>
            </div>
          </div>
          <p className="max-w-2xl text-neutral-600">
            Pregled svih mobilnih komponenti sa svim varijantama. Svaka komponenta prati dizajn sistem
            sa primary bojom (crvena) i secondary bojom (crna/neutral).
          </p>
        </div>

        {/* MobileHeader Component */}
        <ComponentShowcase
          title="MobileHeader"
          description="App header komponenta sa logom, navigacijom i akcijama. Dostupna u 3 varijante."
        >
          <VariantCard label="Default">
            <div className="w-80">
              <MobileHeader
                showLogo={true}
                showSearch={true}
                showCart={true}
                cartCount={5}
                variant="default"
              />
            </div>
          </VariantCard>
          <VariantCard label="Transparent" bgColor="bg-gradient-to-br from-[var(--color-primary-500)] to-[var(--color-primary-600)]">
            <div className="w-80 text-white">
              <MobileHeader
                showLogo={true}
                showSearch={true}
                showCart={true}
                cartCount={2}
                variant="transparent"
              />
            </div>
          </VariantCard>
          <VariantCard label="Dark" bgColor="bg-neutral-800">
            <div className="w-80">
              <MobileHeader
                showLogo={true}
                showSearch={true}
                showCart={true}
                showNotification={true}
                notificationCount={3}
                variant="dark"
              />
            </div>
          </VariantCard>
        </ComponentShowcase>

        {/* MobileHeader with Back */}
        <ComponentShowcase
          title="MobileHeader - Sa back navigacijom"
          description="Header varijante sa back tipkom umjesto loga."
        >
          <VariantCard label="Default + Back">
            <div className="w-80">
              <MobileHeader
                showBack={true}
                title="Kategorije"
                showLogo={false}
                showSearch={true}
                showCart={true}
                variant="default"
              />
            </div>
          </VariantCard>
          <VariantCard label="Dark + Back" bgColor="bg-neutral-800">
            <div className="w-80">
              <MobileHeader
                showBack={true}
                title="Detalji proizvoda"
                showLogo={false}
                showSearch={false}
                showCart={true}
                cartCount={1}
                variant="dark"
              />
            </div>
          </VariantCard>
        </ComponentShowcase>

        {/* MobileTabBar Component */}
        <ComponentShowcase
          title="MobileTabBar"
          description="Bottom navigation bar. Dostupan u 3 varijante sa badge indikatorima."
        >
          <VariantCard label="Default">
            <div className="w-80">
              <MobileTabBar
                items={getTabItems('home')}
                activeTab="home"
                onTabChange={() => {}}
                variant="default"
              />
            </div>
          </VariantCard>
          <VariantCard label="Filled" bgColor="bg-neutral-200">
            <div className="w-80">
              <MobileTabBar
                items={getTabItems('categories')}
                activeTab="categories"
                onTabChange={() => {}}
                variant="filled"
              />
            </div>
          </VariantCard>
          <VariantCard label="Minimal">
            <div className="w-80">
              <MobileTabBar
                items={getTabItems('cart')}
                activeTab="cart"
                onTabChange={() => {}}
                variant="minimal"
              />
            </div>
          </VariantCard>
        </ComponentShowcase>

        {/* MobileSearchBar Component */}
        <ComponentShowcase
          title="MobileSearchBar"
          description="Search input sa scan opcijom. Dostupan u 3 varijante."
        >
          <VariantCard label="Filled (default)">
            <div className="w-80 bg-white">
              <MobileSearchBar
                variant="filled"
                placeholder="Pretraži proizvode..."
                showScanButton={true}
              />
            </div>
          </VariantCard>
          <VariantCard label="Default (white)">
            <div className="w-80 bg-neutral-200 py-2">
              <MobileSearchBar
                variant="default"
                placeholder="Pretraži proizvode..."
                showScanButton={true}
              />
            </div>
          </VariantCard>
          <VariantCard label="Outline">
            <div className="w-80 bg-white">
              <MobileSearchBar
                variant="outline"
                placeholder="Šta tražite?"
                showScanButton={false}
              />
            </div>
          </VariantCard>
        </ComponentShowcase>

        {/* MobileProductCard Component */}
        <ComponentShowcase
          title="MobileProductCard"
          description="Kartica proizvoda. Dostupna u 3 varijante: vertical, horizontal i compact."
        >
          <VariantCard label="Vertical">
            <div className="bg-neutral-200 p-4">
              <MobileProductCard
                product={sampleMobileProducts[0]}
                variant="vertical"
              />
            </div>
          </VariantCard>
          <VariantCard label="Horizontal">
            <div className="w-72 bg-neutral-200 p-4">
              <MobileProductCard
                product={sampleMobileProducts[1]}
                variant="horizontal"
              />
            </div>
          </VariantCard>
          <VariantCard label="Compact">
            <div className="w-72 bg-white px-4">
              <MobileProductCard
                product={sampleMobileProducts[2]}
                variant="compact"
              />
              <MobileProductCard
                product={sampleMobileProducts[3]}
                variant="compact"
              />
            </div>
          </VariantCard>
        </ComponentShowcase>

        {/* MobileQuickActions Component */}
        <ComponentShowcase
          title="MobileQuickActions"
          description="Brze akcije. Dostupne u 2 varijante: horizontal scroller i grid."
        >
          <VariantCard label="Horizontal">
            <div className="w-96 bg-neutral-200">
              <MobileQuickActions
                actions={defaultQuickActions}
                variant="horizontal"
              />
            </div>
          </VariantCard>
          <VariantCard label="Grid">
            <div className="w-80 bg-neutral-200">
              <MobileQuickActions
                actions={defaultQuickActions}
                variant="grid"
              />
            </div>
          </VariantCard>
        </ComponentShowcase>

        {/* MobileSectionHeader Component */}
        <ComponentShowcase
          title="MobileSectionHeader"
          description="Header za sekcije sa opcionalnim 'Vidi sve' linkom."
        >
          <VariantCard label="Sa akcijom">
            <div className="w-80 bg-white">
              <MobileSectionHeader
                title="Akcijski proizvodi"
                actionLabel="Vidi sve"
                onAction={() => {}}
              />
            </div>
          </VariantCard>
          <VariantCard label="Bez akcije">
            <div className="w-80 bg-white">
              <MobileSectionHeader title="Brendovi" />
            </div>
          </VariantCard>
          <VariantCard label="Sa subtitle">
            <div className="w-80 bg-white">
              <MobileSectionHeader
                title="Top ponude"
                subtitle="Samo ovaj tjedan"
                actionLabel="Sve ponude"
                onAction={() => {}}
              />
            </div>
          </VariantCard>
        </ComponentShowcase>

        {/* Mobile Cart Components */}
        <ComponentShowcase
          title="Mobile Cart"
          description="Komponente za korpu: stavke, sažetak i checkout bar."
        >
          <VariantCard label="Cart Item">
            <div className="w-80 bg-neutral-200 p-3">
              <MobileCartItem
                item={sampleMobileCartItems[0]}
                onQuantityChange={() => {}}
                onRemove={() => {}}
              />
            </div>
          </VariantCard>
          <VariantCard label="Cart Summary">
            <div className="w-80 bg-neutral-200 p-3">
              <MobileCartSummary
                subtotal={128.5}
                discount={14.2}
                shipping={4.9}
                vat={29.25}
                total={148.45}
                note="Cijene su informativne."
              />
            </div>
          </VariantCard>
          <VariantCard label="Checkout Bar">
            <div className="w-80 bg-neutral-200">
              <MobileCheckoutBar total={148.45} itemCount={8} />
            </div>
          </VariantCard>
        </ComponentShowcase>

        {/* Mobile Profile Components */}
        <ComponentShowcase
          title="Mobile Profile"
          description="Komponente za profil: header, statistike, info kartice, akcije i narudžbe."
        >
          <VariantCard label="Profile Header" bgColor="bg-neutral-900">
            <div className="w-80">
              <MobileProfileHeader
                name="Ivan Horvat"
                company="Elektro Trade d.o.o."
                role="Nabava i logistika"
                email="ivan.horvat@elektrotrade.hr"
                statusLabel="B2B kupac"
                onAction={() => {}}
                actionLabel="Uredi"
              />
            </div>
          </VariantCard>
          <VariantCard label="Stat Cards">
            <div className="grid w-80 grid-cols-2 gap-3">
              <MobileStatCard label="Saldo" value="1,245.80 €" helper="Dospijeće 15.02." tone="warning" />
              <MobileStatCard label="Raspoloživo" value="3,754.20 €" helper="Limit 5,000 €" tone="success" />
              <MobileStatCard label="Rabat" value="8%" helper="Standardni rabat" tone="primary" />
              <MobileStatCard label="Bodovi" value="1,280" helper="Program vjernosti" />
            </div>
          </VariantCard>
          <VariantCard label="Info Card">
            <div className="w-80">
              <MobileInfoCard
                title="Glavna adresa"
                items={[
                  { label: 'Adresa', value: 'Savska cesta 123' },
                  { label: 'Grad', value: 'Zagreb' },
                  { label: 'Kontakt', value: '+385 91 234 5678' },
                ]}
                actionLabel="Promijeni"
                onAction={() => {}}
              />
            </div>
          </VariantCard>
          <VariantCard label="Action Item">
            <div className="w-80 space-y-2">
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
            </div>
          </VariantCard>
          <VariantCard label="Order Card">
            <div className="w-80 space-y-2">
              <MobileOrderCard
                orderId="#45892"
                date="12.02.2026"
                status="U obradi"
                statusTone="warning"
                amount="1,249.90 €"
                itemsCount={12}
                onPress={() => {}}
              />
              <MobileOrderCard
                orderId="#45821"
                date="03.02.2026"
                status="Isporučeno"
                statusTone="success"
                amount="569.40 €"
                itemsCount={6}
                onPress={() => {}}
              />
            </div>
          </VariantCard>
        </ComponentShowcase>

        {/* Full screen examples */}
        <div className="mb-12">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-neutral-900">Primjeri na ekranima</h2>
            <p className="text-sm text-neutral-500">
              Komponente prikazane unutar iPhone i Android frame-ova.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {/* iPhone Example */}
            <PhoneFrame device="iphone" size="medium">
              <MobileHeader
                showLogo={true}
                showSearch={true}
                showCart={true}
                cartCount={3}
                variant="default"
              />
              <MobileSearchBar variant="filled" />
              <MobileQuickActions actions={defaultQuickActions} variant="horizontal" />
              <MobileSectionHeader
                title="Akcijski proizvodi"
                actionLabel="Vidi sve"
              />
              <div className="flex gap-3 overflow-x-auto px-4 pb-4">
                {sampleMobileProducts.slice(0, 2).map((product) => (
                  <MobileProductCard
                    key={product.id}
                    product={product}
                    variant="vertical"
                  />
                ))}
              </div>
              <MobileSectionHeader title="Zadnje pregledano" />
              <div className="px-4">
                {sampleMobileProducts.slice(0, 2).map((product) => (
                  <MobileProductCard
                    key={product.id}
                    product={product}
                    variant="compact"
                  />
                ))}
              </div>
              <div className="flex-1" />
              <MobileTabBar
                items={getTabItems('home')}
                activeTab="home"
                onTabChange={() => {}}
                variant="default"
              />
            </PhoneFrame>

            {/* Android Example */}
            <PhoneFrame device="android" size="medium">
              <MobileHeader
                showLogo={true}
                showSearch={true}
                showCart={true}
                showNotification={true}
                cartCount={2}
                notificationCount={5}
                variant="default"
              />
              <MobileSearchBar variant="default" />
              <MobileQuickActions actions={defaultQuickActions} variant="grid" />
              <MobileSectionHeader
                title="Popularni proizvodi"
                actionLabel="Prikaži sve"
              />
              <div className="px-4 pb-4">
                <MobileProductCard
                  product={sampleMobileProducts[0]}
                  variant="horizontal"
                />
                <div className="h-3" />
                <MobileProductCard
                  product={sampleMobileProducts[1]}
                  variant="horizontal"
                />
              </div>
              <div className="flex-1" />
              <MobileTabBar
                items={getTabItems('categories')}
                activeTab="categories"
                onTabChange={() => {}}
                variant="filled"
              />
            </PhoneFrame>
          </div>
        </div>

        {/* Color System Info */}
        <div className="rounded-xl border border-neutral-200 bg-white p-6">
          <h3 className="mb-4 text-lg font-semibold text-neutral-900">
            Dizajn sistem boje
          </h3>
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-lg bg-[var(--color-primary-500)]" />
              <div>
                <p className="text-sm font-medium text-neutral-900">Primary</p>
                <p className="text-xs text-neutral-500">--color-primary-500 (crvena)</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-lg bg-neutral-900" />
              <div>
                <p className="text-sm font-medium text-neutral-900">Secondary</p>
                <p className="text-xs text-neutral-500">neutral-900 (crna)</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-lg bg-[var(--color-primary-100)]" />
              <div>
                <p className="text-sm font-medium text-neutral-900">Primary Light</p>
                <p className="text-xs text-neutral-500">--color-primary-100</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-lg bg-neutral-100" />
              <div>
                <p className="text-sm font-medium text-neutral-900">Background</p>
                <p className="text-xs text-neutral-500">neutral-100</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

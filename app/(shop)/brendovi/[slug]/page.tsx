'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import {
  Header,
  HeaderTopBar,
  HeaderMain,
  HeaderActions,
  Logo,
  ContactInfo,
  MainNavigation,
  SearchTrigger,
  CartButton,
  type NavigationItem,
  type Brand,
  type Service,
  type Category,
} from '@/src/components/ui/layout/header'
import {
  Footer,
  FooterBrand,
  FooterColumn,
  FooterLinks,
  FooterBottom,
  SocialIcons,
  PaymentMethods,
} from '@/src/components/ui/layout/footer'
import type { FooterLink, SocialLink, PaymentMethod } from '@/src/components/ui/layout/footer'
import { Button } from '@/src/components/ui/buttons'
import { Breadcrumbs } from '@/src/components/ui/Breadcrumbs'
import { Pagination } from '@/src/components/ui/Pagination'
import { FilterSidebar, type FilterOption, type PriceRange } from '@/src/components/ui/FilterSidebar'
import { ProductCard } from '@/src/components/ui/ProductCard'
import { SortingBar, type ViewMode, type SortOption } from '@/src/components/ui/SortingBar'
import { MobileFilterDrawer } from '@/src/components/ui/MobileFilterDrawer'
import { PromoBar } from '@/src/components/ui/PromoBanner'
import {
  SearchModal,
  type RecentSearch,
  type TrendingSearch,
  type SearchResult,
} from '@/src/components/search'
import { cn } from '@/src/lib/utils'
import { useCart, useAddToCart, type ProductForCart } from '@/src/lib/cart'

// Mock data - brendovi za navigaciju
const navBrands: Brand[] = [
  { id: '1', name: 'Schneider Electric', slug: 'schneider-electric' },
  { id: '2', name: 'Legrand', slug: 'legrand' },
  { id: '3', name: 'ABB', slug: 'abb' },
  { id: '4', name: 'Hager', slug: 'hager' },
  { id: '5', name: 'OBO Bettermann', slug: 'obo-bettermann' },
  { id: '6', name: 'Gewiss', slug: 'gewiss' },
  { id: '7', name: 'ETI', slug: 'eti' },
  { id: '8', name: 'Phoenix Contact', slug: 'phoenix-contact' },
  { id: '9', name: 'Weidmüller', slug: 'weidmuller' },
  { id: '10', name: 'Wago', slug: 'wago' },
  { id: '11', name: 'Siemens', slug: 'siemens' },
  { id: '12', name: 'Schrack', slug: 'schrack' },
]

// Mock services
const navServices: Service[] = [
  { id: '1', title: 'Isporuka', description: 'Brza dostava', href: '/usluge/isporuka' },
  { id: '2', title: 'Podrška', description: 'Stručni savjeti', href: '/usluge/podrska' },
]

// Kategorije za MegaMenu
const elektroCategories: Category[] = [
  {
    id: 'kablovi',
    name: 'Kablovi i vodovi',
    slug: 'kablovi-vodovi',
    children: [
      {
        id: 'energetski',
        name: 'Energetski kablovi',
        slug: 'energetski-kablovi',
        children: [
          { id: 'nyy-j', name: 'NYY-J', slug: 'nyy-j', productCount: 45 },
          { id: 'nyy-o', name: 'NYY-O', slug: 'nyy-o', productCount: 32 },
        ],
      },
      {
        id: 'instalacijski',
        name: 'Instalacijski vodovi',
        slug: 'instalacijski-vodovi',
        children: [
          { id: 'pp', name: 'PP', slug: 'pp', productCount: 38 },
          { id: 'pgp', name: 'PGP', slug: 'pgp', productCount: 25 },
        ],
      },
    ],
  },
  {
    id: 'prekidaci-uticnice',
    name: 'Prekidači i utičnice',
    slug: 'prekidaci-uticnice',
    children: [
      {
        id: 'modularni-program',
        name: 'Modularni program',
        slug: 'modularni-program',
        children: [
          { id: 'prekidaci', name: 'Prekidači', slug: 'prekidaci', productCount: 85 },
          { id: 'uticnice', name: 'Utičnice', slug: 'uticnice', productCount: 72 },
        ],
      },
    ],
  },
  {
    id: 'osiguraci-zastita',
    name: 'Osigurači i zaštita',
    slug: 'osiguraci-zastita',
    children: [
      {
        id: 'automatski-osiguraci',
        name: 'Automatski osigurači',
        slug: 'automatski-osiguraci',
        children: [
          { id: 'b-karakteristika', name: 'B karakteristika', slug: 'b-karakteristika', productCount: 45 },
          { id: 'c-karakteristika', name: 'C karakteristika', slug: 'c-karakteristika', productCount: 52 },
        ],
      },
    ],
  },
  {
    id: 'rasvjeta',
    name: 'Rasvjeta',
    slug: 'rasvjeta',
    children: [
      {
        id: 'led-rasvjeta',
        name: 'LED rasvjeta',
        slug: 'led-rasvjeta',
        children: [
          { id: 'led-paneli', name: 'LED paneli', slug: 'led-paneli', productCount: 65 },
          { id: 'led-trake', name: 'LED trake', slug: 'led-trake', productCount: 48 },
        ],
      },
    ],
  },
]

// Navigation items
const navigationItems: NavigationItem[] = [
  { id: 'proizvodi', name: 'Proizvodi', slug: 'proizvodi', menuType: 'megamenu-categories', children: elektroCategories },
  { id: 'brendovi', name: 'Brendovi', slug: 'brendovi', menuType: 'megamenu-brands' },
  { id: 'akcije', name: 'Akcije', slug: 'akcije', menuType: 'link' },
  { id: 'kontakt', name: 'Kontakt', slug: 'kontakt', menuType: 'link' },
]

const contactInfo = {
  phone: '+385 1 234 5678',
  email: 'info@elektromaterijal.net',
  workingHours: 'Pon-Pet: 08-17h',
}

// Mock brand data
const brandData = {
  id: '1',
  name: 'Legrand',
  slug: 'legrand',
  description: 'Legrand je svjetski lider u proizvodnji električnih i digitalnih infrastrukturnih rješenja za zgrade. S više od 100 godina iskustva, Legrand nudi inovativne proizvode vrhunske kvalitete za sve vrste instalacija.',
  logo: '/brands/legrand.png',
  website: 'https://www.legrand.com',
  productCount: 2341,
  seriesCount: 24,
  country: 'Francuska',
  founded: '1865',
}

// Mock serije brenda
const brandSeries = [
  { id: '1', name: 'Valena Life', slug: 'valena-life', productCount: 456 },
  { id: '2', name: 'Valena Allure', slug: 'valena-allure', productCount: 312 },
  { id: '3', name: 'Mosaic', slug: 'mosaic', productCount: 234 },
  { id: '4', name: 'Céliane', slug: 'celiane', productCount: 189 },
  { id: '5', name: 'Plexo', slug: 'plexo', productCount: 167 },
  { id: '6', name: 'Soliroc', slug: 'soliroc', productCount: 98 },
]

// Filter options
const categoryFilters: FilterOption[] = [
  { id: 'prekidaci', label: 'Prekidači', count: 456 },
  { id: 'uticnice', label: 'Utičnice', count: 389 },
  { id: 'okviri', label: 'Okviri', count: 312 },
  { id: 'dimeri', label: 'Dimeri', count: 89 },
  { id: 'senzori', label: 'Senzori', count: 67 },
  { id: 'razvodne-kutije', label: 'Razvodne kutije', count: 234 },
]

const seriesFilters: FilterOption[] = brandSeries.map(series => ({
  id: series.slug,
  label: series.name,
  count: series.productCount,
}))

const sortOptions: SortOption[] = [
  { value: 'relevance', label: 'Relevantnost' },
  { value: 'price-asc', label: 'Cijena: niža prema višoj' },
  { value: 'price-desc', label: 'Cijena: viša prema nižoj' },
  { value: 'name-asc', label: 'Naziv: A-Z' },
  { value: 'name-desc', label: 'Naziv: Z-A' },
  { value: 'newest', label: 'Najnovije' },
  { value: 'bestseller', label: 'Najprodavanije' },
]

// Mock proizvodi brenda
const mockProducts = [
  {
    id: '1',
    sifra: '1851699',
    naziv: 'Legrand Valena Life - Obični prekidač 10A, bijeli',
    proizvodac: 'LEGRAND',
    cijena: 8.45,
    staraCijena: 12.90,
    zaliha: 433,
    jedinica: 'kom',
  },
  {
    id: '2',
    sifra: '1851700',
    naziv: 'Legrand Valena Life - Dvostruki prekidač, bijeli',
    proizvodac: 'LEGRAND',
    cijena: 12.30,
    zaliha: 256,
    jedinica: 'kom',
  },
  {
    id: '3',
    sifra: '1851701',
    naziv: 'Legrand Valena Life - Utičnica 2P+E, bijela',
    proizvodac: 'LEGRAND',
    cijena: 9.15,
    zaliha: 512,
    jedinica: 'kom',
  },
  {
    id: '4',
    sifra: '1851702',
    naziv: 'Legrand Valena Life - Okvir jednostruki, bijeli',
    proizvodac: 'LEGRAND',
    cijena: 2.85,
    zaliha: 1204,
    jedinica: 'kom',
  },
  {
    id: '5',
    sifra: '1851703',
    naziv: 'Legrand Valena Life - Okvir dvostruki, bijeli',
    proizvodac: 'LEGRAND',
    cijena: 4.50,
    zaliha: 890,
    jedinica: 'kom',
  },
  {
    id: '6',
    sifra: '1602483',
    naziv: 'Legrand Mosaic - Dimer 400W, bijeli',
    proizvodac: 'LEGRAND',
    cijena: 45.90,
    zaliha: 34,
    jedinica: 'kom',
  },
  {
    id: '7',
    sifra: '1602484',
    naziv: 'Legrand Mosaic - USB punjač 2.4A, bijeli',
    proizvodac: 'LEGRAND',
    cijena: 28.50,
    staraCijena: 35.00,
    zaliha: 67,
    jedinica: 'kom',
  },
  {
    id: '8',
    sifra: '1823456',
    naziv: 'Legrand Céliane - Senzor pokreta 180°, bijeli',
    proizvodac: 'LEGRAND',
    cijena: 52.30,
    zaliha: 12,
    jedinica: 'kom',
  },
  {
    id: '9',
    sifra: '1823457',
    naziv: 'Legrand Plexo - Utičnica IP55, siva',
    proizvodac: 'LEGRAND',
    cijena: 14.80,
    zaliha: 234,
    jedinica: 'kom',
  },
  {
    id: '10',
    sifra: '1823458',
    naziv: 'Legrand Plexo - Prekidač IP55, sivi',
    proizvodac: 'LEGRAND',
    cijena: 11.20,
    staraCijena: 15.90,
    zaliha: 178,
    jedinica: 'kom',
  },
  {
    id: '11',
    sifra: '1823459',
    naziv: 'Legrand Valena Allure - Prekidač, titan',
    proizvodac: 'LEGRAND',
    cijena: 18.90,
    zaliha: 89,
    jedinica: 'kom',
  },
  {
    id: '12',
    sifra: '1823460',
    naziv: 'Legrand Valena Allure - Utičnica, titan',
    proizvodac: 'LEGRAND',
    cijena: 21.50,
    zaliha: 0,
    jedinica: 'kom',
  },
]

// Footer data
const companyLinks: FooterLink[] = [
  { label: 'O nama', href: '/o-nama' },
  { label: 'Kontakt', href: '/kontakt' },
]

const customerLinks: FooterLink[] = [
  { label: 'FAQ', href: '/faq' },
  { label: 'Dostava', href: '/dostava' },
]

const socialLinks: SocialLink[] = [
  { platform: 'facebook', href: 'https://facebook.com' },
  { platform: 'instagram', href: 'https://instagram.com' },
]

const paymentMethods: PaymentMethod[] = [
  { type: 'visa' },
  { type: 'mastercard' },
  { type: 'paypal' },
]

const legalLinks: FooterLink[] = [
  { label: 'Privatnost', href: '/privatnost' },
  { label: 'Uvjeti', href: '/uvjeti' },
]

// Search data
const recentSearches: RecentSearch[] = [
  { id: '1', query: 'LED rasvjeta', timestamp: new Date() },
]

const trendingSearches: TrendingSearch[] = [
  { id: '1', query: 'Prekidači Legrand' },
]

const searchResults: SearchResult = {
  products: [
    {
      id: '2CDS252001R0164',
      name: 'ABB S202 C16 Automatski osigurač, 2P, 16A',
      sku: '2CDS252001R0164',
      manufacturer: 'ABB',
      price: 13.9,
      image: '/products/osigurac-1.svg',
      inStock: true,
    },
    {
      id: 'A9F74216',
      name: 'Schneider Acti9 iC60N C16, 2P, 6kA',
      sku: 'A9F74216',
      manufacturer: 'SCHNEIDER',
      price: 17.4,
      image: '/products/osigurac-2.svg',
      inStock: true,
    },
    {
      id: 'MCN216',
      name: 'Hager MCN216 Automatski osigurač, 2P, 16A',
      sku: 'MCN216',
      manufacturer: 'HAGER',
      price: 16.1,
      image: '/products/osigurac-3.svg',
      inStock: true,
    },
    {
      id: 'S201-B16',
      name: 'ABB S201 B16 Automatski osigurač, 1P, 16A',
      sku: 'S201-B16',
      manufacturer: 'ABB',
      price: 10.9,
      image: '/products/osigurac-3.svg',
      inStock: false,
    },
  ],
  categories: [],
  manufacturers: [],
  series: [],
}

export default function BrandDetailPage() {
  // Cart hooks
  const router = useRouter()
  const { itemCount } = useCart()
  const addToCartHandler = useAddToCart()

  // State
  const [searchOpen, setSearchOpen] = useState(false)
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [currentSort, setCurrentSort] = useState('relevance')
  const [viewMode, setViewMode] = useState<ViewMode>('grid')

  const handleNavigateToSearch = (query: string) => {
    setSearchOpen(false)
    router.push(`/proizvodi?q=${encodeURIComponent(query)}`)
  }

  const handleNavigateToProduct = (productId: string) => {
    setSearchOpen(false)
    router.push(`/proizvod/${productId}`)
  }
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedSeries, setSelectedSeries] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState<PriceRange>({ min: 0, max: 500 })
  const [inStockOnly, setInStockOnly] = useState(false)

  const totalProducts = brandData.productCount
  const totalPages = Math.ceil(totalProducts / 12)

  const activeFiltersCount = selectedCategories.length + selectedSeries.length + (inStockOnly ? 1 : 0)

  const handleResetFilters = () => {
    setSelectedCategories([])
    setSelectedSeries([])
    setPriceRange({ min: 0, max: 500 })
    setInStockOnly(false)
  }

  const breadcrumbItems = [
    { label: 'Početna', href: '/' },
    { label: 'Brendovi', href: '/brendovi' },
    { label: brandData.name },
  ]

  // Filter sidebar component (reusable for both desktop and mobile)
  const filterContent = (
    <FilterSidebar
      brands={seriesFilters}
      subcategories={categoryFilters}
      priceRange={{ min: 0, max: 500 }}
      selectedBrands={selectedSeries}
      selectedSubcategories={selectedCategories}
      currentPriceRange={priceRange}
      showInStockOnly={inStockOnly}
      onBrandChange={setSelectedSeries}
      onSubcategoryChange={setSelectedCategories}
      onPriceChange={setPriceRange}
      onInStockChange={setInStockOnly}
      onResetFilters={handleResetFilters}
      className="border-0 lg:border"
      brandLabel="Serije"
      subcategoryLabel="Kategorije"
    />
  )

  return (
    <div className="flex min-h-screen flex-col bg-[var(--color-bg-secondary)]">
      {/* Promo Bar */}
      <PromoBar
        message="Besplatna dostava za narudžbe preko 200 €!"
        href="/akcije"
        linkText="Pogledaj akcije"
      />

      {/* Header */}
      <Header variant="dark" sticky>
        <HeaderTopBar colorScheme="dark" className="hidden xl:block">
          <ContactInfo
            phone={contactInfo.phone}
            email={contactInfo.email}
            workingHours={contactInfo.workingHours}
            colorScheme="dark"
          />
          <div className="text-[var(--font-size-xs)] text-[var(--color-neutral-400)]">
            Više od 50.000 artikala na stanju
          </div>
        </HeaderTopBar>

        <HeaderMain>
          <Logo
            alt="ELEKTROMATERIJAL.net"
            tagline="#elektromaterijal #sve #odmah"
            variant="dark"
          />
          <MainNavigation
            items={navigationItems}
            brands={navBrands}
            services={navServices}
            colorScheme="dark"
            contact={contactInfo}
          />
          <HeaderActions>
            <SearchTrigger
              onOpen={() => setSearchOpen(true)}
              variant="responsive"
              colorScheme="dark"
              placeholder="Pretraži proizvode..."
            />
            <CartButton count={itemCount} href="/cart" colorScheme="dark" />
            <Link href="/prijava" className="hidden sm:inline-flex">
              <Button variant="primary" size="md">
                Prijava
              </Button>
            </Link>
          </HeaderActions>
        </HeaderMain>
      </Header>

      {/* Main Content */}
      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-[var(--spacing-container-padding)] py-6 lg:py-8">
          {/* Breadcrumbs */}
          <Breadcrumbs items={breadcrumbItems} className="mb-6" />

          {/* Brand Banner */}
          <div className="mb-8 rounded-[var(--radius-card)] border border-[var(--color-border-primary)] bg-[var(--color-bg-primary)] p-6 lg:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-8">
              {/* Brand Logo */}
              <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-[var(--radius-lg)] bg-[var(--color-bg-secondary)] lg:h-32 lg:w-32">
                <span className="text-3xl font-bold text-[var(--color-text-tertiary)] lg:text-4xl">
                  {brandData.name.substring(0, 2).toUpperCase()}
                </span>
              </div>

              {/* Brand Info */}
              <div className="flex-1">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h1 className="text-2xl font-bold text-[var(--color-text-primary)] sm:text-3xl lg:text-4xl">
                      {brandData.name}
                    </h1>
                    <p className="mt-1 text-sm text-[var(--color-text-tertiary)]">
                      {brandData.country} • Osnovan {brandData.founded}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    {brandData.website && (
                      <a
                        href={brandData.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-[var(--radius-button)] border border-[var(--color-border-primary)] bg-[var(--color-bg-primary)] px-4 py-2 text-sm font-medium text-[var(--color-text-primary)] hover:bg-[var(--color-bg-secondary)] transition-[var(--transition-fast)]"
                      >
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Web stranica
                      </a>
                    )}
                    <button className="inline-flex items-center gap-2 rounded-[var(--radius-button)] border border-[var(--color-border-primary)] bg-[var(--color-bg-primary)] px-4 py-2 text-sm font-medium text-[var(--color-text-primary)] hover:bg-[var(--color-bg-secondary)] transition-[var(--transition-fast)]">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Katalog
                    </button>
                  </div>
                </div>

                {/* Description */}
                <p className="mt-4 text-[var(--color-text-secondary)] max-w-3xl">
                  {brandData.description}
                </p>

                {/* Stats */}
                <div className="mt-6 flex flex-wrap gap-6">
                  <div>
                    <p className="text-2xl font-bold text-[var(--color-primary-600)]">
                      {brandData.productCount.toLocaleString()}
                    </p>
                    <p className="text-sm text-[var(--color-text-tertiary)]">Proizvoda</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[var(--color-primary-600)]">
                      {brandData.seriesCount}
                    </p>
                    <p className="text-sm text-[var(--color-text-tertiary)]">Serija</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Series Section */}
          <div className="mb-8">
            <h2 className="mb-4 text-lg font-semibold text-[var(--color-text-primary)]">
              Serije brenda {brandData.name}
            </h2>
            <div className="flex flex-wrap gap-2">
              {brandSeries.map((series) => (
                <Link
                  key={series.id}
                  href={`/brendovi/${brandData.slug}/${series.slug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border-primary)] bg-[var(--color-bg-primary)] px-4 py-2 text-sm font-medium text-[var(--color-text-primary)] hover:border-[var(--color-primary-300)] hover:bg-[var(--color-primary-50)] transition-[var(--transition-fast)]"
                >
                  {series.name}
                  <span className="text-[var(--color-text-tertiary)]">
                    ({series.productCount})
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Products Section Header */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-[var(--color-text-primary)]">
              Svi proizvodi
            </h2>
          </div>

          {/* Main Layout - Sidebar + Products */}
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            {/* Desktop Sidebar */}
            <aside className="hidden lg:block w-[280px] shrink-0">
              {filterContent}
            </aside>

            {/* Products Section */}
            <div className="flex-1 min-w-0">
              {/* Sorting Bar */}
              <SortingBar
                totalResults={totalProducts}
                currentSort={currentSort}
                sortOptions={sortOptions}
                onSortChange={setCurrentSort}
                viewMode={viewMode}
                onViewModeChange={setViewMode}
                onOpenFilters={() => setMobileFiltersOpen(true)}
                activeFiltersCount={activeFiltersCount}
                className="mb-6"
              />

              {/* Active Filters Tags */}
              {activeFiltersCount > 0 && (
                <div className="mb-4 flex flex-wrap items-center gap-2">
                  <span className="text-sm text-[var(--color-text-secondary)]">Aktivni filteri:</span>
                  {selectedSeries.map(seriesId => {
                    const series = seriesFilters.find(s => s.id === seriesId)
                    return series ? (
                      <button
                        key={seriesId}
                        onClick={() => setSelectedSeries(prev => prev.filter(id => id !== seriesId))}
                        className="inline-flex items-center gap-1 rounded-full bg-[var(--color-primary-50)] px-3 py-1 text-sm text-[var(--color-primary-700)] hover:bg-[var(--color-primary-100)] transition-[var(--transition-fast)]"
                      >
                        {series.label}
                        <span className="text-[var(--color-primary-400)]">×</span>
                      </button>
                    ) : null
                  })}
                  {selectedCategories.map(catId => {
                    const cat = categoryFilters.find(c => c.id === catId)
                    return cat ? (
                      <button
                        key={catId}
                        onClick={() => setSelectedCategories(prev => prev.filter(id => id !== catId))}
                        className="inline-flex items-center gap-1 rounded-full bg-[var(--color-primary-50)] px-3 py-1 text-sm text-[var(--color-primary-700)] hover:bg-[var(--color-primary-100)] transition-[var(--transition-fast)]"
                      >
                        {cat.label}
                        <span className="text-[var(--color-primary-400)]">×</span>
                      </button>
                    ) : null
                  })}
                  {inStockOnly && (
                    <button
                      onClick={() => setInStockOnly(false)}
                      className="inline-flex items-center gap-1 rounded-full bg-[var(--color-success-50)] px-3 py-1 text-sm text-[var(--color-success-700)] hover:bg-[var(--color-success-100)] transition-[var(--transition-fast)]"
                    >
                      Na stanju
                      <span className="text-[var(--color-success-400)]">×</span>
                    </button>
                  )}
                  <button
                    onClick={handleResetFilters}
                    className="text-sm text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] underline transition-[var(--transition-fast)]"
                  >
                    Ukloni sve
                  </button>
                </div>
              )}

              {/* Products Grid/List */}
              <div
                className={cn(
                  'grid gap-4 sm:gap-6',
                  viewMode === 'grid'
                    ? 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-3'
                    : 'grid-cols-1'
                )}
              >
                {mockProducts.map(product => (
                  <ProductCard
                    key={product.id}
                    {...product}
                    variant={viewMode === 'list' ? 'compact' : 'default'}
                    onAddToCart={(id, qty) => {
                      const productForCart: ProductForCart = {
                        id: product.id,
                        sifra: product.sifra,
                        naziv: product.naziv,
                        proizvodac: product.proizvodac,
                        cijena: product.cijena,
                        staraCijena: product.staraCijena,
                        zaliha: product.zaliha,
                        jedinica: product.jedinica,
                      }
                      addToCartHandler(productForCart, qty)
                    }}
                    onAddToWishlist={(id) => console.log('Add to wishlist:', id)}
                  />
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
                <p className="text-sm text-[var(--color-text-secondary)]">
                  Prikazano {(currentPage - 1) * 12 + 1} - {Math.min(currentPage * 12, totalProducts)} od {totalProducts} proizvoda
                </p>
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                  showEdges
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer variant="dark">
        <div className="mb-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <FooterBrand
              name="ELEKTROMATERIJAL.net"
              tagline="#elektromaterijal #sve #odmah"
              description="Vaš pouzdani partner za elektromaterijal."
              href="/"
              colorScheme="dark"
            />
            <SocialIcons links={socialLinks} colorScheme="dark" size="md" className="mt-4" />
          </div>

          <FooterColumn title="Kompanija" colorScheme="dark">
            <FooterLinks links={companyLinks} colorScheme="dark" />
          </FooterColumn>

          <FooterColumn title="Podrška" colorScheme="dark">
            <FooterLinks links={customerLinks} colorScheme="dark" />
          </FooterColumn>

          <div>
            <p className="mb-3 text-sm font-medium text-[var(--footer-text-heading)]">Prihvaćamo</p>
            <PaymentMethods methods={paymentMethods} colorScheme="dark" />
          </div>
        </div>

        <FooterBottom
          copyright="© 2025 ELEKTROMATERIJAL.net. Sva prava pridržana."
          legalLinks={legalLinks}
          colorScheme="dark"
        />
      </Footer>

      {/* Mobile Filter Drawer */}
      <MobileFilterDrawer
        isOpen={mobileFiltersOpen}
        onClose={() => setMobileFiltersOpen(false)}
        title="Filteri"
      >
        {filterContent}
      </MobileFilterDrawer>

      {/* Search Modal */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        recentSearches={recentSearches}
        trendingSearches={trendingSearches}
        results={searchResults}
        onSearch={(query) => console.log('Search:', query)}
        onQuickAddToCart={(id) => console.log('Quick add:', id)}
        onClearRecentSearch={(id) => console.log('Clear:', id)}
        onNavigateToSearch={handleNavigateToSearch}
        onNavigateToProduct={handleNavigateToProduct}
      />
    </div>
  )
}

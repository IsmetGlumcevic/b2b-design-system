'use client'

import { useState, Suspense } from 'react'
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

// ============================================
// Types
// ============================================

interface FilterOption {
  id: string
  label: string
  count?: number
}

interface PriceRange {
  min: number
  max: number
}

// ============================================
// Mock Data
// ============================================

// Navigation categories
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
        ],
      },
    ],
  },
]

const navBrands: Brand[] = [
  { id: '1', name: 'Schneider Electric', slug: 'schneider-electric' },
  { id: '2', name: 'Legrand', slug: 'legrand' },
  { id: '3', name: 'ABB', slug: 'abb' },
  { id: '4', name: 'Hager', slug: 'hager' },
  { id: '5', name: 'OBO Bettermann', slug: 'obo-bettermann' },
  { id: '6', name: 'Gewiss', slug: 'gewiss' },
]

const navServices: Service[] = [
  { id: '1', title: 'Isporuka', description: 'Brza dostava', href: '/usluge/isporuka' },
  { id: '2', title: 'Podrška', description: 'Stručni savjeti', href: '/usluge/podrska' },
]

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

// Category filters for promotions
const categoryFilters: FilterOption[] = [
  { id: 'rasvjeta', label: 'Rasvjeta', count: 156 },
  { id: 'prekidaci-uticnice', label: 'Prekidači i utičnice', count: 234 },
  { id: 'kablovi', label: 'Kablovi', count: 89 },
  { id: 'osiguraci', label: 'Osigurači', count: 67 },
  { id: 'alati', label: 'Alati', count: 45 },
]

// Brand filters
const brandFilters: FilterOption[] = [
  { id: 'legrand', label: 'Legrand', count: 145 },
  { id: 'schneider', label: 'Schneider Electric', count: 112 },
  { id: 'abb', label: 'ABB', count: 98 },
  { id: 'philips', label: 'Philips', count: 76 },
  { id: 'osram', label: 'Osram', count: 54 },
]

// Discount filters
const discountFilters: FilterOption[] = [
  { id: '10', label: '10% i više', count: 423 },
  { id: '20', label: '20% i više', count: 287 },
  { id: '30', label: '30% i više', count: 156 },
  { id: '40', label: '40% i više', count: 78 },
  { id: '50', label: '50% i više', count: 34 },
]

const sortOptions: SortOption[] = [
  { value: 'discount-desc', label: 'Najveći popust' },
  { value: 'price-asc', label: 'Cijena: niža prema višoj' },
  { value: 'price-desc', label: 'Cijena: viša prema nižoj' },
  { value: 'popularity', label: 'Najpopularnije' },
  { value: 'newest', label: 'Najnovije akcije' },
]

// Mock promotional products (all with discounts)
const promoProducts = [
  { id: '1', sifra: '1851699', naziv: 'Legrand Valena Life - Obični prekidač 10A, bijeli', proizvodac: 'LEGRAND', cijena: 8.45, staraCijena: 12.90, zaliha: 433, jedinica: 'kom' },
  { id: '2', sifra: '1849004', naziv: 'ABB Basic55 - Okvir jednostruki, bijeli', proizvodac: 'ABB', cijena: 2.15, staraCijena: 3.50, zaliha: 1204, jedinica: 'kom' },
  { id: '3', sifra: '1561834', naziv: 'Gewiss Chorus - Utičnica 2P+E 16A s poklopcem IP44', proizvodac: 'GEWISS', cijena: 9.75, staraCijena: 14.20, zaliha: 167, jedinica: 'kom' },
  { id: '4', sifra: '1891245', naziv: 'ABB Zenit - Utičnica za shuko, srebrna', proizvodac: 'ABB', cijena: 18.50, staraCijena: 22.00, zaliha: 78, jedinica: 'kom' },
  { id: '5', sifra: '1698745', naziv: 'ETI KZS - Utičnica nadžbukna IP54, siva', proizvodac: 'ETI', cijena: 7.80, staraCijena: 9.90, zaliha: 234, jedinica: 'kom' },
  { id: '6', sifra: '1045678', naziv: 'LED panel 60x60 40W 4000K', proizvodac: 'PHILIPS', cijena: 32.50, staraCijena: 45.00, zaliha: 156, jedinica: 'kom' },
  { id: '7', sifra: '1045680', naziv: 'LED downlight 18W 3000K ugradbeni', proizvodac: 'PHILIPS', cijena: 14.90, staraCijena: 24.50, zaliha: 289, jedinica: 'kom' },
  { id: '8', sifra: '1045681', naziv: 'LED žarulja E27 10W 4000K', proizvodac: 'OSRAM', cijena: 3.50, staraCijena: 5.90, zaliha: 1500, jedinica: 'kom' },
  { id: '9', sifra: '1123458', naziv: 'Automatski osigurač C16A 3P', proizvodac: 'ABB', cijena: 12.80, staraCijena: 18.50, zaliha: 456, jedinica: 'kom' },
  { id: '10', sifra: '1234567', naziv: 'Legrand Mosaic - Trostruki okvir, bijeli', proizvodac: 'LEGRAND', cijena: 6.90, staraCijena: 9.90, zaliha: 324, jedinica: 'kom' },
  { id: '11', sifra: '1234568', naziv: 'Schneider Sedna - Utičnica dvostruka s uzemljenjem', proizvodac: 'SCHNEIDER', cijena: 9.90, staraCijena: 14.50, zaliha: 187, jedinica: 'kom' },
  { id: '12', sifra: '1234569', naziv: 'Hager - FID sklopka 25A 30mA 2P', proizvodac: 'HAGER', cijena: 22.50, staraCijena: 32.00, zaliha: 98, jedinica: 'kom' },
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

// ============================================
// Page Component
// ============================================

export default function AkcijePage() {
  return (
    <Suspense fallback={<AkcijePageSkeleton />}>
      <AkcijePageContent />
    </Suspense>
  )
}

function AkcijePageSkeleton() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--color-bg-secondary)]">
      <div className="animate-pulse">
        <div className="h-10 bg-[var(--color-bg-tertiary)]" />
        <div className="h-20 bg-[var(--color-secondary-900)]" />
        <div className="mx-auto max-w-7xl px-4 py-8">
          <div className="h-8 w-64 bg-[var(--color-bg-tertiary)] rounded mb-4" />
          <div className="grid grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-64 bg-[var(--color-bg-tertiary)] rounded" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function AkcijePageContent() {
  // Cart hooks
  const router = useRouter()
  const { itemCount } = useCart()
  const addToCartHandler = useAddToCart()

  // State
  const [searchOpen, setSearchOpen] = useState(false)
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [currentSort, setCurrentSort] = useState('discount-desc')
  const [viewMode, setViewMode] = useState<ViewMode>('grid')

  // Filter state
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [selectedDiscounts, setSelectedDiscounts] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState<PriceRange>({ min: 0, max: 500 })
  const [inStockOnly, setInStockOnly] = useState(false)

  // Expanded sections state
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    discount: true,
    categories: true,
    brands: true,
    price: false,
    availability: false,
  })

  const handleNavigateToSearch = (query: string) => {
    setSearchOpen(false)
    router.push(`/proizvodi?q=${encodeURIComponent(query)}`)
  }

  const handleNavigateToProduct = (productId: string) => {
    setSearchOpen(false)
    router.push(`/proizvod/${productId}`)
  }

  // Calculate totals
  const totalProducts = 591
  const totalPages = Math.ceil(totalProducts / 12)

  // Count active filters
  const activeFiltersCount =
    selectedCategories.length +
    selectedBrands.length +
    selectedDiscounts.length +
    (inStockOnly ? 1 : 0)

  // Toggle section expansion
  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }))
  }

  // Reset all filters
  const handleResetFilters = () => {
    setSelectedCategories([])
    setSelectedBrands([])
    setSelectedDiscounts([])
    setPriceRange({ min: 0, max: 500 })
    setInStockOnly(false)
  }

  const breadcrumbItems = [
    { label: 'Početna', href: '/' },
    { label: 'Akcije' },
  ]

  // Check if any filters are active
  const hasActiveFilters = activeFiltersCount > 0 ||
    (priceRange.min > 0 || priceRange.max < 500)

  // Calculate time remaining for promo (mock - ends in 5 days)
  const promoEndDate = new Date()
  promoEndDate.setDate(promoEndDate.getDate() + 5)

  return (
    <div className="flex min-h-screen flex-col bg-[var(--color-bg-secondary)]">
      {/* Promo Bar */}
      <PromoBar
        message="Zimska rasprodaja - popusti do 50%!"
        href="#"
        linkText="Samo još 5 dana"
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
        {/* Hero Banner */}
        <section className="relative bg-gradient-to-r from-[var(--color-error-600)] to-[var(--color-error-500)] overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)'
            }} />
          </div>

          <div className="relative mx-auto max-w-7xl px-[var(--spacing-container-padding)] py-10 lg:py-16">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              {/* Left: Title and description */}
              <div className="text-white">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-sm font-medium mb-4">
                  <FireIcon className="h-4 w-4" />
                  <span>Aktivna akcija</span>
                </div>
                <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl mb-3">
                  Zimska rasprodaja
                </h1>
                <p className="text-lg text-white/90 max-w-xl">
                  Iskoristite popuste do 50% na odabrane proizvode vodećih proizvođača.
                  Ponuda traje do isteka zaliha!
                </p>
              </div>

              {/* Right: Countdown timer */}
              <div className="flex flex-col items-center lg:items-end">
                <p className="text-white/80 text-sm mb-3">Akcija završava za:</p>
                <CountdownTimer endDate={promoEndDate} />
              </div>
            </div>
          </div>
        </section>

        {/* Breadcrumbs */}
        <div className="bg-[var(--color-bg-primary)] border-b border-[var(--color-border-primary)]">
          <div className="mx-auto max-w-7xl px-[var(--spacing-container-padding)] py-4">
            <Breadcrumbs items={breadcrumbItems} />
          </div>
        </div>

        {/* Products Section */}
        <div className="mx-auto max-w-7xl px-[var(--spacing-container-padding)] py-6 lg:py-8">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            {/* Desktop Sidebar */}
            <aside className="hidden lg:block w-[280px] shrink-0">
              <FilterSidebar
                categoryFilters={categoryFilters}
                brandFilters={brandFilters}
                discountFilters={discountFilters}
                priceRange={{ min: 0, max: 500 }}
                selectedCategories={selectedCategories}
                selectedBrands={selectedBrands}
                selectedDiscounts={selectedDiscounts}
                currentPriceRange={priceRange}
                showInStockOnly={inStockOnly}
                expandedSections={expandedSections}
                onCategoryChange={setSelectedCategories}
                onBrandChange={setSelectedBrands}
                onDiscountChange={setSelectedDiscounts}
                onPriceChange={setPriceRange}
                onInStockChange={setInStockOnly}
                onToggleSection={toggleSection}
                onResetFilters={handleResetFilters}
                hasActiveFilters={hasActiveFilters}
              />
            </aside>

            {/* Products Section */}
            <div className="flex-1 min-w-0">
              {/* Stats Bar */}
              <div className="mb-6 flex flex-wrap items-center gap-4 rounded-[var(--radius-lg)] bg-[var(--color-bg-primary)] border border-[var(--color-border-primary)] p-4">
                <div className="flex items-center gap-2">
                  <TagIcon className="h-5 w-5 text-[var(--color-error-500)]" />
                  <span className="text-sm text-[var(--color-text-secondary)]">
                    <strong className="text-[var(--color-text-primary)]">{totalProducts}</strong> proizvoda na akciji
                  </span>
                </div>
                <div className="h-4 w-px bg-[var(--color-border-primary)] hidden sm:block" />
                <div className="flex items-center gap-2">
                  <span className="text-sm text-[var(--color-text-secondary)]">
                    Popusti do <strong className="text-[var(--color-error-500)]">50%</strong>
                  </span>
                </div>
              </div>

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
              {hasActiveFilters && (
                <ActiveFilterTags
                  selectedCategories={selectedCategories}
                  selectedBrands={selectedBrands}
                  selectedDiscounts={selectedDiscounts}
                  inStockOnly={inStockOnly}
                  categoryFilters={categoryFilters}
                  brandFilters={brandFilters}
                  discountFilters={discountFilters}
                  onRemoveCategory={(id) => setSelectedCategories(prev => prev.filter(c => c !== id))}
                  onRemoveBrand={(id) => setSelectedBrands(prev => prev.filter(b => b !== id))}
                  onRemoveDiscount={(id) => setSelectedDiscounts(prev => prev.filter(d => d !== id))}
                  onRemoveInStock={() => setInStockOnly(false)}
                  onResetAll={handleResetFilters}
                />
              )}

              {/* Products Grid */}
              <div
                className={cn(
                  'grid gap-4 sm:gap-6',
                  viewMode === 'grid'
                    ? 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-3'
                    : 'grid-cols-1'
                )}
              >
                {promoProducts.map(product => (
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
        <FilterSidebar
          categoryFilters={categoryFilters}
          brandFilters={brandFilters}
          discountFilters={discountFilters}
          priceRange={{ min: 0, max: 500 }}
          selectedCategories={selectedCategories}
          selectedBrands={selectedBrands}
          selectedDiscounts={selectedDiscounts}
          currentPriceRange={priceRange}
          showInStockOnly={inStockOnly}
          expandedSections={expandedSections}
          onCategoryChange={setSelectedCategories}
          onBrandChange={setSelectedBrands}
          onDiscountChange={setSelectedDiscounts}
          onPriceChange={setPriceRange}
          onInStockChange={setInStockOnly}
          onToggleSection={toggleSection}
          onResetFilters={handleResetFilters}
          hasActiveFilters={hasActiveFilters}
          className="border-0"
        />
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

// ============================================
// Countdown Timer Component
// ============================================

interface CountdownTimerProps {
  endDate: Date
}

function CountdownTimer({ endDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  function calculateTimeLeft() {
    const difference = endDate.getTime() - new Date().getTime()
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    }
  }

  useState(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
    return () => clearInterval(timer)
  })

  return (
    <div className="flex gap-2">
      <TimeUnit value={timeLeft.days} label="dana" />
      <TimeUnit value={timeLeft.hours} label="sati" />
      <TimeUnit value={timeLeft.minutes} label="min" />
      <TimeUnit value={timeLeft.seconds} label="sek" />
    </div>
  )
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="rounded-[var(--radius-md)] bg-white/20 backdrop-blur-sm px-3 py-2 min-w-[52px]">
        <span className="text-2xl font-bold text-white tabular-nums">
          {value.toString().padStart(2, '0')}
        </span>
      </div>
      <span className="text-xs text-white/70 mt-1">{label}</span>
    </div>
  )
}

// ============================================
// Filter Sidebar Component
// ============================================

interface FilterSidebarProps {
  categoryFilters: FilterOption[]
  brandFilters: FilterOption[]
  discountFilters: FilterOption[]
  priceRange: PriceRange
  selectedCategories: string[]
  selectedBrands: string[]
  selectedDiscounts: string[]
  currentPriceRange: PriceRange
  showInStockOnly: boolean
  expandedSections: Record<string, boolean>
  onCategoryChange: (ids: string[]) => void
  onBrandChange: (ids: string[]) => void
  onDiscountChange: (ids: string[]) => void
  onPriceChange: (range: PriceRange) => void
  onInStockChange: (inStock: boolean) => void
  onToggleSection: (sectionId: string) => void
  onResetFilters: () => void
  hasActiveFilters: boolean
  className?: string
}

function FilterSidebar({
  categoryFilters,
  brandFilters,
  discountFilters,
  priceRange,
  selectedCategories,
  selectedBrands,
  selectedDiscounts,
  currentPriceRange,
  showInStockOnly,
  expandedSections,
  onCategoryChange,
  onBrandChange,
  onDiscountChange,
  onPriceChange,
  onInStockChange,
  onToggleSection,
  onResetFilters,
  hasActiveFilters,
  className,
}: FilterSidebarProps) {
  const [localPriceMin, setLocalPriceMin] = useState(currentPriceRange.min)
  const [localPriceMax, setLocalPriceMax] = useState(currentPriceRange.max)

  const handleToggle = (id: string, selected: string[], onChange: (ids: string[]) => void) => {
    const newSelected = selected.includes(id)
      ? selected.filter(c => c !== id)
      : [...selected, id]
    onChange(newSelected)
  }

  return (
    <aside
      className={cn(
        'w-full',
        'bg-[var(--color-bg-primary)]',
        'rounded-[var(--radius-lg)]',
        'border border-[var(--color-border-primary)]',
        className
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[var(--color-border-primary)] p-4">
        <h2 className="font-semibold text-[var(--color-text-primary)]">Filteri</h2>
        {hasActiveFilters && (
          <button
            onClick={onResetFilters}
            className="text-sm text-[var(--color-primary-500)] hover:text-[var(--color-primary-hover)] transition-colors"
          >
            Resetiraj
          </button>
        )}
      </div>

      <div className="divide-y divide-[var(--color-border-primary)]">
        {/* Discount Filter - First and highlighted */}
        <FilterSection
          title="Popust"
          isExpanded={expandedSections.discount}
          onToggle={() => onToggleSection('discount')}
          highlighted
        >
          <div className="space-y-1">
            {discountFilters.map(option => (
              <FilterCheckbox
                key={option.id}
                id={`discount-${option.id}`}
                label={option.label}
                count={option.count}
                checked={selectedDiscounts.includes(option.id)}
                onChange={() => handleToggle(option.id, selectedDiscounts, onDiscountChange)}
              />
            ))}
          </div>
        </FilterSection>

        {/* Categories */}
        <FilterSection
          title="Kategorije"
          isExpanded={expandedSections.categories}
          onToggle={() => onToggleSection('categories')}
        >
          <div className="space-y-1 max-h-48 overflow-y-auto">
            {categoryFilters.map(option => (
              <FilterCheckbox
                key={option.id}
                id={`cat-${option.id}`}
                label={option.label}
                count={option.count}
                checked={selectedCategories.includes(option.id)}
                onChange={() => handleToggle(option.id, selectedCategories, onCategoryChange)}
              />
            ))}
          </div>
        </FilterSection>

        {/* Brands */}
        <FilterSection
          title="Proizvođač"
          isExpanded={expandedSections.brands}
          onToggle={() => onToggleSection('brands')}
        >
          <div className="space-y-1 max-h-48 overflow-y-auto">
            {brandFilters.map(option => (
              <FilterCheckbox
                key={option.id}
                id={`brand-${option.id}`}
                label={option.label}
                count={option.count}
                checked={selectedBrands.includes(option.id)}
                onChange={() => handleToggle(option.id, selectedBrands, onBrandChange)}
              />
            ))}
          </div>
        </FilterSection>

        {/* Price Range */}
        <FilterSection
          title="Cijena"
          isExpanded={expandedSections.price}
          onToggle={() => onToggleSection('price')}
        >
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex-1">
                <div className="relative">
                  <input
                    type="number"
                    min={priceRange.min}
                    max={localPriceMax}
                    value={localPriceMin}
                    onChange={(e) => setLocalPriceMin(Number(e.target.value))}
                    className={cn(
                      'w-full rounded-[var(--radius-input)]',
                      'border border-[var(--color-border-primary)]',
                      'bg-[var(--color-bg-primary)]',
                      'px-3 py-2 pr-8',
                      'text-sm text-[var(--color-text-primary)]',
                      'focus:border-[var(--color-border-focus)] focus:outline-none focus:ring-1 focus:ring-[var(--color-border-focus)]'
                    )}
                    placeholder="Od"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-[var(--color-text-tertiary)]">
                    €
                  </span>
                </div>
              </div>
              <span className="text-[var(--color-text-tertiary)]">—</span>
              <div className="flex-1">
                <div className="relative">
                  <input
                    type="number"
                    min={localPriceMin}
                    max={priceRange.max}
                    value={localPriceMax}
                    onChange={(e) => setLocalPriceMax(Number(e.target.value))}
                    className={cn(
                      'w-full rounded-[var(--radius-input)]',
                      'border border-[var(--color-border-primary)]',
                      'bg-[var(--color-bg-primary)]',
                      'px-3 py-2 pr-8',
                      'text-sm text-[var(--color-text-primary)]',
                      'focus:border-[var(--color-border-focus)] focus:outline-none focus:ring-1 focus:ring-[var(--color-border-focus)]'
                    )}
                    placeholder="Do"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-[var(--color-text-tertiary)]">
                    €
                  </span>
                </div>
              </div>
            </div>
            <button
              onClick={() => onPriceChange({ min: localPriceMin, max: localPriceMax })}
              className={cn(
                'w-full rounded-[var(--radius-button)]',
                'bg-[var(--color-neutral-100)]',
                'px-4 py-2',
                'text-sm font-medium text-[var(--color-text-primary)]',
                'hover:bg-[var(--color-neutral-200)]',
                'transition-colors'
              )}
            >
              Primijeni
            </button>
          </div>
        </FilterSection>

        {/* Availability */}
        <FilterSection
          title="Dostupnost"
          isExpanded={expandedSections.availability}
          onToggle={() => onToggleSection('availability')}
        >
          <FilterCheckbox
            id="in-stock"
            label="Samo na stanju"
            checked={showInStockOnly}
            onChange={() => onInStockChange(!showInStockOnly)}
          />
        </FilterSection>
      </div>
    </aside>
  )
}

// ============================================
// Filter Section Component
// ============================================

interface FilterSectionProps {
  title: string
  isExpanded: boolean
  onToggle: () => void
  children: React.ReactNode
  highlighted?: boolean
}

function FilterSection({ title, isExpanded, onToggle, children, highlighted }: FilterSectionProps) {
  return (
    <div className={cn('p-4', highlighted && 'bg-[var(--color-error-50)]')}>
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between mb-3"
        aria-expanded={isExpanded}
      >
        <span className={cn(
          'text-sm font-medium',
          highlighted ? 'text-[var(--color-error-700)]' : 'text-[var(--color-text-primary)]'
        )}>
          {title}
        </span>
        <ChevronIcon className={cn(
          'h-4 w-4 transition-transform',
          highlighted ? 'text-[var(--color-error-400)]' : 'text-[var(--color-text-tertiary)]',
          isExpanded && 'rotate-180'
        )} />
      </button>
      {isExpanded && children}
    </div>
  )
}

// ============================================
// Filter Checkbox Component
// ============================================

interface FilterCheckboxProps {
  id: string
  label: string
  count?: number
  checked: boolean
  onChange: () => void
}

function FilterCheckbox({ id, label, count, checked, onChange }: FilterCheckboxProps) {
  return (
    <label
      htmlFor={id}
      className="flex cursor-pointer items-center gap-3 rounded-[var(--radius-sm)] py-1.5 hover:bg-[var(--color-bg-secondary)] px-2 -mx-2 transition-colors"
    >
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        className={cn(
          'h-4 w-4 rounded',
          'border border-[var(--color-border-primary)]',
          'text-[var(--color-primary-500)]',
          'focus:ring-2 focus:ring-[var(--color-primary-500)] focus:ring-offset-1',
          'cursor-pointer'
        )}
      />
      <span className="flex-1 text-sm text-[var(--color-text-secondary)]">{label}</span>
      {count !== undefined && (
        <span className="text-xs text-[var(--color-text-tertiary)]">({count})</span>
      )}
    </label>
  )
}

// ============================================
// Active Filter Tags Component
// ============================================

interface ActiveFilterTagsProps {
  selectedCategories: string[]
  selectedBrands: string[]
  selectedDiscounts: string[]
  inStockOnly: boolean
  categoryFilters: FilterOption[]
  brandFilters: FilterOption[]
  discountFilters: FilterOption[]
  onRemoveCategory: (id: string) => void
  onRemoveBrand: (id: string) => void
  onRemoveDiscount: (id: string) => void
  onRemoveInStock: () => void
  onResetAll: () => void
}

function ActiveFilterTags({
  selectedCategories,
  selectedBrands,
  selectedDiscounts,
  inStockOnly,
  categoryFilters,
  brandFilters,
  discountFilters,
  onRemoveCategory,
  onRemoveBrand,
  onRemoveDiscount,
  onRemoveInStock,
  onResetAll,
}: ActiveFilterTagsProps) {
  return (
    <div className="mb-4 flex flex-wrap items-center gap-2">
      <span className="text-sm text-[var(--color-text-secondary)]">Aktivni filteri:</span>

      {selectedDiscounts.map(id => {
        const discount = discountFilters.find(d => d.id === id)
        return discount ? (
          <FilterTag key={`discount-${id}`} label={discount.label} onRemove={() => onRemoveDiscount(id)} variant="error" />
        ) : null
      })}

      {selectedCategories.map(id => {
        const cat = categoryFilters.find(c => c.id === id)
        return cat ? (
          <FilterTag key={`cat-${id}`} label={cat.label} onRemove={() => onRemoveCategory(id)} />
        ) : null
      })}

      {selectedBrands.map(id => {
        const brand = brandFilters.find(b => b.id === id)
        return brand ? (
          <FilterTag key={`brand-${id}`} label={brand.label} onRemove={() => onRemoveBrand(id)} />
        ) : null
      })}

      {inStockOnly && (
        <FilterTag label="Na stanju" onRemove={onRemoveInStock} variant="success" />
      )}

      <button
        onClick={onResetAll}
        className="text-sm text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] underline transition-colors"
      >
        Ukloni sve
      </button>
    </div>
  )
}

// ============================================
// Filter Tag Component
// ============================================

interface FilterTagProps {
  label: string
  onRemove: () => void
  variant?: 'default' | 'success' | 'error'
}

function FilterTag({ label, onRemove, variant = 'default' }: FilterTagProps) {
  const variantStyles = {
    default: 'bg-[var(--color-primary-50)] text-[var(--color-primary-700)] hover:bg-[var(--color-primary-100)]',
    success: 'bg-[var(--color-success-50)] text-[var(--color-success-700)] hover:bg-[var(--color-success-100)]',
    error: 'bg-[var(--color-error-50)] text-[var(--color-error-700)] hover:bg-[var(--color-error-100)]',
  }

  const closeStyles = {
    default: 'text-[var(--color-primary-400)]',
    success: 'text-[var(--color-success-400)]',
    error: 'text-[var(--color-error-400)]',
  }

  return (
    <button
      onClick={onRemove}
      className={cn(
        'inline-flex items-center gap-1 rounded-full px-3 py-1 text-sm transition-colors',
        variantStyles[variant]
      )}
    >
      {label}
      <span className={closeStyles[variant]}>×</span>
    </button>
  )
}

// ============================================
// Icons
// ============================================

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  )
}

function FireIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
    </svg>
  )
}

function TagIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
    </svg>
  )
}

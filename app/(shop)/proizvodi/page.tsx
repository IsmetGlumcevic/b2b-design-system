'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
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
// Types for Elasticsearch-style filters
// ============================================

interface FilterOption {
  id: string
  label: string
  count?: number
}

interface CharacteristicFilter {
  id: string
  name: string
  type: 'checkbox' | 'range' | 'color'
  options: FilterOption[]
  /** Is this filter expanded by default */
  defaultExpanded?: boolean
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

// Quick category links for the hero section
const quickCategories = [
  { id: 'kablovi', name: 'Kablovi', slug: 'kablovi-vodovi', icon: '🔌' },
  { id: 'rasvjeta', name: 'Rasvjeta', slug: 'rasvjeta', icon: '💡' },
  { id: 'prekidaci', name: 'Prekidači', slug: 'prekidaci-uticnice', icon: '🔲' },
  { id: 'osiguraci', name: 'Osigurači', slug: 'osiguraci-zastita', icon: '⚡' },
  { id: 'alati', name: 'Alati', slug: 'alati', icon: '🔧' },
  { id: 'ormari', name: 'Ormari', slug: 'razvodni-ormari', icon: '📦' },
]

// Category filters (from Elasticsearch aggregation)
const categoryFilters: FilterOption[] = [
  { id: 'kablovi-vodovi', label: 'Kablovi i vodovi', count: 2450 },
  { id: 'rasvjeta', label: 'Rasvjeta', count: 1820 },
  { id: 'prekidaci-uticnice', label: 'Prekidači i utičnice', count: 3150 },
  { id: 'osiguraci-zastita', label: 'Osigurači i zaštita', count: 890 },
  { id: 'razvodni-ormari', label: 'Razvodni ormari', count: 560 },
  { id: 'alati', label: 'Alati i oprema', count: 1240 },
]

// Brand filters (from Elasticsearch aggregation)
const brandFilters: FilterOption[] = [
  { id: 'legrand', label: 'Legrand', count: 2450 },
  { id: 'schneider', label: 'Schneider Electric', count: 1890 },
  { id: 'abb', label: 'ABB', count: 1560 },
  { id: 'hager', label: 'Hager', count: 980 },
  { id: 'gewiss', label: 'Gewiss', count: 760 },
  { id: 'schrack', label: 'Schrack', count: 640 },
  { id: 'eti', label: 'ETI', count: 520 },
  { id: 'siemens', label: 'Siemens', count: 450 },
  { id: 'phoenix', label: 'Phoenix Contact', count: 380 },
  { id: 'wago', label: 'Wago', count: 290 },
]

// Dynamic characteristic filters (from Elasticsearch aggregations)
const characteristicFilters: CharacteristicFilter[] = [
  {
    id: 'napon',
    name: 'Napon',
    type: 'checkbox',
    defaultExpanded: true,
    options: [
      { id: '230v', label: '230V', count: 8450 },
      { id: '400v', label: '400V', count: 3200 },
      { id: '24v', label: '24V', count: 1560 },
      { id: '12v', label: '12V', count: 980 },
    ],
  },
  {
    id: 'struja',
    name: 'Nazivna struja',
    type: 'checkbox',
    defaultExpanded: false,
    options: [
      { id: '6a', label: '6A', count: 1200 },
      { id: '10a', label: '10A', count: 2400 },
      { id: '16a', label: '16A', count: 4500 },
      { id: '20a', label: '20A', count: 1800 },
      { id: '25a', label: '25A', count: 1200 },
      { id: '32a', label: '32A', count: 890 },
      { id: '63a', label: '63A', count: 450 },
    ],
  },
  {
    id: 'ip-zastita',
    name: 'IP zaštita',
    type: 'checkbox',
    defaultExpanded: false,
    options: [
      { id: 'ip20', label: 'IP20', count: 5600 },
      { id: 'ip44', label: 'IP44', count: 2300 },
      { id: 'ip54', label: 'IP54', count: 1450 },
      { id: 'ip65', label: 'IP65', count: 980 },
      { id: 'ip67', label: 'IP67', count: 340 },
    ],
  },
  {
    id: 'boja',
    name: 'Boja',
    type: 'checkbox',
    defaultExpanded: false,
    options: [
      { id: 'bijela', label: 'Bijela', count: 12500 },
      { id: 'crna', label: 'Crna', count: 4300 },
      { id: 'siva', label: 'Siva', count: 2100 },
      { id: 'antracit', label: 'Antracit', count: 1800 },
      { id: 'srebrna', label: 'Srebrna', count: 950 },
    ],
  },
  {
    id: 'materijal',
    name: 'Materijal',
    type: 'checkbox',
    defaultExpanded: false,
    options: [
      { id: 'plastika', label: 'Plastika', count: 15000 },
      { id: 'metal', label: 'Metal', count: 8500 },
      { id: 'bakar', label: 'Bakar', count: 3200 },
      { id: 'aluminij', label: 'Aluminij', count: 1800 },
    ],
  },
]

const sortOptions: SortOption[] = [
  { value: 'relevance', label: 'Relevantnost' },
  { value: 'popularity', label: 'Najpopularnije' },
  { value: 'price-asc', label: 'Cijena: niža prema višoj' },
  { value: 'price-desc', label: 'Cijena: viša prema nižoj' },
  { value: 'name-asc', label: 'Naziv: A-Z' },
  { value: 'newest', label: 'Najnovije' },
]

// Mock popular products
const popularProducts = [
  { id: '1', sifra: '1851699', naziv: 'Legrand Valena Life - Obični prekidač 10A, bijeli', proizvodac: 'LEGRAND', cijena: 8.45, staraCijena: 12.90, zaliha: 433, jedinica: 'kom' },
  { id: '2', sifra: '1848994', naziv: 'Schneider Sedna - Dvostruka utičnica s uzemljenjem', proizvodac: 'SCHNEIDER', cijena: 12.30, zaliha: 256, jedinica: 'kom' },
  { id: '3', sifra: '1849004', naziv: 'ABB Basic55 - Okvir jednostruki, bijeli', proizvodac: 'ABB', cijena: 2.15, staraCijena: 3.50, zaliha: 1204, jedinica: 'kom' },
  { id: '4', sifra: '1628899', naziv: 'Hager Berker S.1 - Serijski prekidač, antracit', proizvodac: 'HAGER', cijena: 15.80, zaliha: 89, jedinica: 'kom' },
  { id: '5', sifra: '1561834', naziv: 'Gewiss Chorus - Utičnica 2P+E 16A s poklopcem IP44', proizvodac: 'GEWISS', cijena: 9.75, staraCijena: 14.20, zaliha: 167, jedinica: 'kom' },
  { id: '6', sifra: '1602483', naziv: 'Legrand Mosaic - Dimer 400W, bijeli', proizvodac: 'LEGRAND', cijena: 45.90, zaliha: 34, jedinica: 'kom' },
  { id: '7', sifra: '1751234', naziv: 'Schneider Unica - Trostruki okvir, aluminij', proizvodac: 'SCHNEIDER', cijena: 8.90, zaliha: 0, jedinica: 'kom' },
  { id: '8', sifra: '1891245', naziv: 'ABB Zenit - Utičnica za shuko, srebrna', proizvodac: 'ABB', cijena: 18.50, staraCijena: 22.00, zaliha: 78, jedinica: 'kom' },
  { id: '9', sifra: '1934521', naziv: 'Vimar Plana - Tipkalo za svjetlo, bijelo', proizvodac: 'VIMAR', cijena: 6.20, zaliha: 523, jedinica: 'kom' },
  { id: '10', sifra: '1823456', naziv: 'Legrand Celiane - Senzor pokreta 180°', proizvodac: 'LEGRAND', cijena: 52.30, zaliha: 12, jedinica: 'kom' },
  { id: '11', sifra: '1756789', naziv: 'Schrack Visio 50 - Jednopolni prekidač, bijeli', proizvodac: 'SCHRACK', cijena: 4.50, zaliha: 890, jedinica: 'kom' },
  { id: '12', sifra: '1698745', naziv: 'ETI KZS - Utičnica nadžbukna IP54, siva', proizvodac: 'ETI', cijena: 7.80, staraCijena: 9.90, zaliha: 234, jedinica: 'kom' },
  { id: '13', sifra: '1014305', naziv: 'Kabel NYM-J 3x1,5mm² (1m)', proizvodac: 'HELUKABEL', cijena: 0.89, zaliha: 15000, jedinica: 'm' },
  { id: '14', sifra: '1014306', naziv: 'Kabel NYM-J 3x2,5mm² (1m)', proizvodac: 'HELUKABEL', cijena: 1.45, zaliha: 12000, jedinica: 'm' },
  { id: '15', sifra: '1045678', naziv: 'LED panel 60x60 40W 4000K', proizvodac: 'PHILIPS', cijena: 32.50, staraCijena: 45.00, zaliha: 156, jedinica: 'kom' },
  { id: '16', sifra: '1045679', naziv: 'LED traka 5m 14.4W/m 3000K', proizvodac: 'OSRAM', cijena: 28.90, zaliha: 89, jedinica: 'kom' },
  { id: '17', sifra: '1123456', naziv: 'Automatski osigurač B16A 1P', proizvodac: 'ABB', cijena: 4.20, zaliha: 2500, jedinica: 'kom' },
  { id: '18', sifra: '1123457', naziv: 'FID sklopka 40A 30mA 2P', proizvodac: 'ABB', cijena: 28.50, zaliha: 340, jedinica: 'kom' },
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

export default function ProductsPage() {
  return (
    <Suspense fallback={<ProductsPageSkeleton />}>
      <ProductsPageContent />
    </Suspense>
  )
}

function ProductsPageSkeleton() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--color-bg-secondary)]">
      <div className="animate-pulse">
        <div className="h-10 bg-[var(--color-bg-tertiary)]" />
        <div className="h-20 bg-[var(--color-secondary-900)]" />
        <div className="mx-auto max-w-7xl px-4 py-8">
          <div className="h-8 w-64 bg-[var(--color-bg-tertiary)] rounded mb-4" />
          <div className="h-12 w-full max-w-2xl bg-[var(--color-bg-tertiary)] rounded mb-8" />
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

function ProductsPageContent() {
  const router = useRouter()
  const searchParams = useSearchParams()

  // Cart hooks
  const { itemCount } = useCart()
  const addToCartHandler = useAddToCart()

  // Get search query from URL
  const urlQuery = searchParams.get('q') || ''

  // State
  const [searchOpen, setSearchOpen] = useState(false)
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [searchInput, setSearchInput] = useState(urlQuery)
  const [currentPage, setCurrentPage] = useState(1)
  const [currentSort, setCurrentSort] = useState('popularity')
  const [viewMode, setViewMode] = useState<ViewMode>('grid')

  // Filter state
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [selectedCharacteristics, setSelectedCharacteristics] = useState<Record<string, string[]>>({})
  const [priceRange, setPriceRange] = useState<PriceRange>({ min: 0, max: 1000 })
  const [inStockOnly, setInStockOnly] = useState(false)

  // Expanded sections state
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    categories: true,
    brands: true,
    price: true,
    availability: true,
    ...Object.fromEntries(characteristicFilters.map(f => [f.id, f.defaultExpanded ?? false])),
  })

  // Update search input when URL changes
  useEffect(() => {
    setSearchInput(urlQuery)
  }, [urlQuery])

  // Calculate totals
  const totalProducts = urlQuery ? 1045 : 50000
  const totalPages = Math.ceil(totalProducts / 18)

  // Count active filters
  const activeFiltersCount =
    selectedCategories.length +
    selectedBrands.length +
    Object.values(selectedCharacteristics).flat().length +
    (inStockOnly ? 1 : 0)

  // Toggle section expansion
  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }))
  }

  // Handle characteristic filter change
  const handleCharacteristicChange = (filterId: string, optionId: string) => {
    setSelectedCharacteristics(prev => {
      const current = prev[filterId] || []
      const newValues = current.includes(optionId)
        ? current.filter(id => id !== optionId)
        : [...current, optionId]
      return { ...prev, [filterId]: newValues }
    })
  }

  // Reset all filters
  const handleResetFilters = () => {
    setSelectedCategories([])
    setSelectedBrands([])
    setSelectedCharacteristics({})
    setPriceRange({ min: 0, max: 1000 })
    setInStockOnly(false)
  }

  // Handle search submission
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchInput.trim()) {
      router.push(`/proizvodi?q=${encodeURIComponent(searchInput.trim())}`)
    }
  }

  // Handle search from modal
  const handleSearchFromModal = (query: string) => {
    setSearchOpen(false)
    router.push(`/proizvodi?q=${encodeURIComponent(query)}`)
  }

  const handleNavigateToProduct = (productId: string) => {
    setSearchOpen(false)
    router.push(`/proizvod/${productId}`)
  }

  // Filter products based on search query (mock)
  const displayedProducts = urlQuery
    ? popularProducts.filter(p =>
        p.naziv.toLowerCase().includes(urlQuery.toLowerCase()) ||
        p.sifra.includes(urlQuery) ||
        p.proizvodac.toLowerCase().includes(urlQuery.toLowerCase())
      )
    : popularProducts

  const breadcrumbItems = [
    { label: 'Početna', href: '/' },
    { label: urlQuery ? `Pretraga: "${urlQuery}"` : 'Svi proizvodi' },
  ]

  // Check if any filters are active
  const hasActiveFilters = activeFiltersCount > 0 ||
    (priceRange.min > 0 || priceRange.max < 1000)

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
        {/* Search Hero Section */}
        <section className="bg-[var(--color-bg-primary)] border-b border-[var(--color-border-primary)]">
          <div className="mx-auto max-w-7xl px-[var(--spacing-container-padding)] py-8 lg:py-12">
            {/* Breadcrumbs */}
            <Breadcrumbs items={breadcrumbItems} className="mb-6" />

            {/* Title */}
            <h1 className="text-2xl font-bold text-[var(--color-text-primary)] sm:text-3xl lg:text-4xl mb-2">
              {urlQuery ? `Rezultati pretrage` : 'Katalog proizvoda'}
            </h1>
            <p className="text-[var(--color-text-secondary)] mb-6">
              {urlQuery
                ? `Pronađeno ${totalProducts.toLocaleString('hr-HR')} proizvoda za "${urlQuery}"`
                : 'Pretražite među više od 50.000 proizvoda vodećih svjetskih proizvođača'
              }
            </p>

            {/* Large Search Bar */}
            <form onSubmit={handleSearch} className="mb-8">
              <div className="relative max-w-2xl">
                <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[var(--color-text-tertiary)]" />
                <input
                  type="text"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  placeholder="Unesite naziv proizvoda, šifru ili proizvođača..."
                  className={cn(
                    'w-full rounded-[var(--radius-lg)]',
                    'border-2 border-[var(--color-border-primary)]',
                    'bg-[var(--color-bg-primary)]',
                    'pl-12 pr-32 py-4',
                    'text-[var(--color-text-primary)]',
                    'placeholder:text-[var(--color-text-tertiary)]',
                    'focus:border-[var(--color-primary-500)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)]/20',
                    'transition-all'
                  )}
                />
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  className="absolute right-2 top-1/2 -translate-y-1/2"
                >
                  Pretraži
                </Button>
              </div>
            </form>

            {/* Quick Category Links */}
            {!urlQuery && (
              <div className="flex flex-wrap gap-3">
                {quickCategories.map(cat => (
                  <Link
                    key={cat.id}
                    href={`/kategorija/${cat.slug}`}
                    className={cn(
                      'inline-flex items-center gap-2',
                      'px-4 py-2 rounded-full',
                      'bg-[var(--color-bg-secondary)]',
                      'border border-[var(--color-border-primary)]',
                      'text-sm text-[var(--color-text-secondary)]',
                      'hover:border-[var(--color-primary-500)] hover:text-[var(--color-primary-600)]',
                      'transition-all'
                    )}
                  >
                    <span>{cat.icon}</span>
                    <span>{cat.name}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Products Section */}
        <div className="mx-auto max-w-7xl px-[var(--spacing-container-padding)] py-6 lg:py-8">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            {/* Desktop Sidebar */}
            <aside className="hidden lg:block w-[280px] shrink-0">
              <FilterSidebar
                categoryFilters={categoryFilters}
                brandFilters={brandFilters}
                characteristicFilters={characteristicFilters}
                priceRange={{ min: 0, max: 1000 }}
                selectedCategories={selectedCategories}
                selectedBrands={selectedBrands}
                selectedCharacteristics={selectedCharacteristics}
                currentPriceRange={priceRange}
                showInStockOnly={inStockOnly}
                expandedSections={expandedSections}
                onCategoryChange={setSelectedCategories}
                onBrandChange={setSelectedBrands}
                onCharacteristicChange={handleCharacteristicChange}
                onPriceChange={setPriceRange}
                onInStockChange={setInStockOnly}
                onToggleSection={toggleSection}
                onResetFilters={handleResetFilters}
                hasActiveFilters={hasActiveFilters}
              />
            </aside>

            {/* Products Section */}
            <div className="flex-1 min-w-0">
              {/* Sorting Bar */}
              <SortingBar
                totalResults={displayedProducts.length > 0 ? totalProducts : 0}
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
                  selectedCharacteristics={selectedCharacteristics}
                  inStockOnly={inStockOnly}
                  categoryFilters={categoryFilters}
                  brandFilters={brandFilters}
                  characteristicFilters={characteristicFilters}
                  onRemoveCategory={(id) => setSelectedCategories(prev => prev.filter(c => c !== id))}
                  onRemoveBrand={(id) => setSelectedBrands(prev => prev.filter(b => b !== id))}
                  onRemoveCharacteristic={(filterId, optionId) =>
                    setSelectedCharacteristics(prev => ({
                      ...prev,
                      [filterId]: (prev[filterId] || []).filter(o => o !== optionId)
                    }))
                  }
                  onRemoveInStock={() => setInStockOnly(false)}
                  onResetAll={handleResetFilters}
                />
              )}

              {/* Products Grid */}
              {displayedProducts.length > 0 ? (
                <>
                  <div
                    className={cn(
                      'grid gap-4 sm:gap-6',
                      viewMode === 'grid'
                        ? 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-3'
                        : 'grid-cols-1'
                    )}
                  >
                    {displayedProducts.map(product => (
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
                      Prikazano {(currentPage - 1) * 18 + 1} - {Math.min(currentPage * 18, totalProducts)} od {totalProducts.toLocaleString('hr-HR')} proizvoda
                    </p>
                    <Pagination
                      currentPage={currentPage}
                      totalPages={totalPages}
                      onPageChange={setCurrentPage}
                      showEdges
                    />
                  </div>
                </>
              ) : (
                <EmptySearchState query={urlQuery} onReset={() => router.push('/proizvodi')} />
              )}
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
          characteristicFilters={characteristicFilters}
          priceRange={{ min: 0, max: 1000 }}
          selectedCategories={selectedCategories}
          selectedBrands={selectedBrands}
          selectedCharacteristics={selectedCharacteristics}
          currentPriceRange={priceRange}
          showInStockOnly={inStockOnly}
          expandedSections={expandedSections}
          onCategoryChange={setSelectedCategories}
          onBrandChange={setSelectedBrands}
          onCharacteristicChange={handleCharacteristicChange}
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
        onNavigateToSearch={handleSearchFromModal}
        onNavigateToProduct={handleNavigateToProduct}
      />
    </div>
  )
}

// ============================================
// Filter Sidebar Component (inline for this page)
// ============================================

interface FilterSidebarProps {
  categoryFilters: FilterOption[]
  brandFilters: FilterOption[]
  characteristicFilters: CharacteristicFilter[]
  priceRange: PriceRange
  selectedCategories: string[]
  selectedBrands: string[]
  selectedCharacteristics: Record<string, string[]>
  currentPriceRange: PriceRange
  showInStockOnly: boolean
  expandedSections: Record<string, boolean>
  onCategoryChange: (ids: string[]) => void
  onBrandChange: (ids: string[]) => void
  onCharacteristicChange: (filterId: string, optionId: string) => void
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
  characteristicFilters,
  priceRange,
  selectedCategories,
  selectedBrands,
  selectedCharacteristics,
  currentPriceRange,
  showInStockOnly,
  expandedSections,
  onCategoryChange,
  onBrandChange,
  onCharacteristicChange,
  onPriceChange,
  onInStockChange,
  onToggleSection,
  onResetFilters,
  hasActiveFilters,
  className,
}: FilterSidebarProps) {
  const [localPriceMin, setLocalPriceMin] = useState(currentPriceRange.min)
  const [localPriceMax, setLocalPriceMax] = useState(currentPriceRange.max)

  const handleCategoryToggle = (id: string) => {
    const newSelected = selectedCategories.includes(id)
      ? selectedCategories.filter(c => c !== id)
      : [...selectedCategories, id]
    onCategoryChange(newSelected)
  }

  const handleBrandToggle = (id: string) => {
    const newSelected = selectedBrands.includes(id)
      ? selectedBrands.filter(b => b !== id)
      : [...selectedBrands, id]
    onBrandChange(newSelected)
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
                onChange={() => handleCategoryToggle(option.id)}
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
                onChange={() => handleBrandToggle(option.id)}
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

        {/* Dynamic Characteristic Filters */}
        {characteristicFilters.map(filter => (
          <FilterSection
            key={filter.id}
            title={filter.name}
            isExpanded={expandedSections[filter.id] ?? false}
            onToggle={() => onToggleSection(filter.id)}
          >
            <div className="space-y-1 max-h-48 overflow-y-auto">
              {filter.options.map(option => (
                <FilterCheckbox
                  key={option.id}
                  id={`${filter.id}-${option.id}`}
                  label={option.label}
                  count={option.count}
                  checked={(selectedCharacteristics[filter.id] || []).includes(option.id)}
                  onChange={() => onCharacteristicChange(filter.id, option.id)}
                />
              ))}
            </div>
          </FilterSection>
        ))}
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
}

function FilterSection({ title, isExpanded, onToggle, children }: FilterSectionProps) {
  return (
    <div className="p-4">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between mb-3"
        aria-expanded={isExpanded}
      >
        <span className="text-sm font-medium text-[var(--color-text-primary)]">{title}</span>
        <ChevronIcon className={cn('h-4 w-4 text-[var(--color-text-tertiary)] transition-transform', isExpanded && 'rotate-180')} />
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
        <span className="text-xs text-[var(--color-text-tertiary)]">({count.toLocaleString('hr-HR')})</span>
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
  selectedCharacteristics: Record<string, string[]>
  inStockOnly: boolean
  categoryFilters: FilterOption[]
  brandFilters: FilterOption[]
  characteristicFilters: CharacteristicFilter[]
  onRemoveCategory: (id: string) => void
  onRemoveBrand: (id: string) => void
  onRemoveCharacteristic: (filterId: string, optionId: string) => void
  onRemoveInStock: () => void
  onResetAll: () => void
}

function ActiveFilterTags({
  selectedCategories,
  selectedBrands,
  selectedCharacteristics,
  inStockOnly,
  categoryFilters,
  brandFilters,
  characteristicFilters,
  onRemoveCategory,
  onRemoveBrand,
  onRemoveCharacteristic,
  onRemoveInStock,
  onResetAll,
}: ActiveFilterTagsProps) {
  return (
    <div className="mb-4 flex flex-wrap items-center gap-2">
      <span className="text-sm text-[var(--color-text-secondary)]">Aktivni filteri:</span>

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

      {Object.entries(selectedCharacteristics).map(([filterId, optionIds]) => {
        const filter = characteristicFilters.find(f => f.id === filterId)
        return optionIds.map(optionId => {
          const option = filter?.options.find(o => o.id === optionId)
          return option ? (
            <FilterTag
              key={`${filterId}-${optionId}`}
              label={`${filter?.name}: ${option.label}`}
              onRemove={() => onRemoveCharacteristic(filterId, optionId)}
            />
          ) : null
        })
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
  variant?: 'default' | 'success'
}

function FilterTag({ label, onRemove, variant = 'default' }: FilterTagProps) {
  return (
    <button
      onClick={onRemove}
      className={cn(
        'inline-flex items-center gap-1 rounded-full px-3 py-1 text-sm transition-colors',
        variant === 'success'
          ? 'bg-[var(--color-success-50)] text-[var(--color-success-700)] hover:bg-[var(--color-success-100)]'
          : 'bg-[var(--color-primary-50)] text-[var(--color-primary-700)] hover:bg-[var(--color-primary-100)]'
      )}
    >
      {label}
      <span className={variant === 'success' ? 'text-[var(--color-success-400)]' : 'text-[var(--color-primary-400)]'}>×</span>
    </button>
  )
}

// ============================================
// Empty Search State Component
// ============================================

interface EmptySearchStateProps {
  query: string
  onReset: () => void
}

function EmptySearchState({ query, onReset }: EmptySearchStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="mb-4 rounded-full bg-[var(--color-bg-tertiary)] p-4">
        <SearchIcon className="h-8 w-8 text-[var(--color-text-tertiary)]" />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-[var(--color-text-primary)]">
        Nema rezultata
      </h3>
      <p className="mb-6 max-w-md text-[var(--color-text-secondary)]">
        Nažalost, nismo pronašli proizvode za &quot;{query}&quot;.
        Pokušajte s drugim pojmom ili pregledajte naše kategorije.
      </p>
      <div className="flex gap-3">
        <Button variant="outline" onClick={onReset}>
          Pregledaj sve proizvode
        </Button>
        <Link href="/">
          <Button variant="primary">
            Povratak na početnu
          </Button>
        </Link>
      </div>
    </div>
  )
}

// ============================================
// Icons
// ============================================

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  )
}

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  )
}

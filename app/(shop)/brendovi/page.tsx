'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
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
import { PromoBar } from '@/src/components/ui/PromoBanner'
import {
  SearchModal,
  type RecentSearch,
  type TrendingSearch,
} from '@/src/components/search'
import { cn } from '@/src/lib/utils'

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
const elektroCategories = [
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

// Mock brendovi
const allBrands = [
  { id: '1', name: 'ABB', slug: 'abb', productCount: 1245, logo: '/brands/abb.png' },
  { id: '2', name: 'Finder', slug: 'finder', productCount: 534, logo: '/brands/finder.png' },
  { id: '3', name: 'Gewiss', slug: 'gewiss', productCount: 892, logo: '/brands/gewiss.png' },
  { id: '4', name: 'Hager', slug: 'hager', productCount: 1567, logo: '/brands/hager.png' },
  { id: '5', name: 'Legrand', slug: 'legrand', productCount: 2341, logo: '/brands/legrand.png' },
  { id: '6', name: 'OBO Bettermann', slug: 'obo-bettermann', productCount: 678, logo: '/brands/obo.png' },
  { id: '7', name: 'Osram', slug: 'osram', productCount: 456, logo: '/brands/osram.png' },
  { id: '8', name: 'Philips', slug: 'philips', productCount: 789, logo: '/brands/philips.png' },
  { id: '9', name: 'Phoenix Contact', slug: 'phoenix-contact', productCount: 1023, logo: '/brands/phoenix.png' },
  { id: '10', name: 'Schneider Electric', slug: 'schneider-electric', productCount: 3456, logo: '/brands/schneider.png' },
  { id: '11', name: 'Schrack', slug: 'schrack', productCount: 567, logo: '/brands/schrack.png' },
  { id: '12', name: 'Siemens', slug: 'siemens', productCount: 2134, logo: '/brands/siemens.png' },
  { id: '13', name: 'ETI', slug: 'eti', productCount: 423, logo: '/brands/eti.png' },
  { id: '14', name: 'Vimar', slug: 'vimar', productCount: 312, logo: '/brands/vimar.png' },
  { id: '15', name: 'Wago', slug: 'wago', productCount: 876, logo: '/brands/wago.png' },
  { id: '16', name: 'Weidmüller', slug: 'weidmuller', productCount: 654, logo: '/brands/weidmuller.png' },
]

// Alphabet for filter
const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

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

export default function BrandsPage() {
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null)

  // Filter brands based on search and selected letter
  const filteredBrands = useMemo(() => {
    let result = allBrands

    if (searchQuery) {
      result = result.filter(brand =>
        brand.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    if (selectedLetter) {
      result = result.filter(brand =>
        brand.name.toUpperCase().startsWith(selectedLetter)
      )
    }

    return result.sort((a, b) => a.name.localeCompare(b.name))
  }, [searchQuery, selectedLetter])

  // Get letters that have brands
  const availableLetters = useMemo(() => {
    return new Set(allBrands.map(brand => brand.name[0].toUpperCase()))
  }, [])

  const breadcrumbItems = [
    { label: 'Početna', href: '/' },
    { label: 'Brendovi' },
  ]

  const handleClearFilters = () => {
    setSearchQuery('')
    setSelectedLetter(null)
  }

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
            <CartButton count={3} href="/cart" colorScheme="dark" />
            <Button variant="primary" size="md" className="hidden sm:inline-flex">
              Prijava
            </Button>
          </HeaderActions>
        </HeaderMain>
      </Header>

      {/* Main Content */}
      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-[var(--spacing-container-padding)] py-6 lg:py-8">
          {/* Breadcrumbs */}
          <Breadcrumbs items={breadcrumbItems} className="mb-6" />

          {/* Page Header */}
          <div className="mb-6 lg:mb-8">
            <h1 className="text-2xl font-bold text-[var(--color-text-primary)] sm:text-3xl lg:text-4xl">
              Brendovi
            </h1>
            <p className="mt-2 text-[var(--color-text-secondary)] max-w-3xl">
              Istražite našu ponudu vodećih svjetskih proizvođača elektromaterijala.
              Svaki brend donosi kvalitetu i inovaciju u vašu instalaciju.
            </p>
          </div>

          {/* Filters Section */}
          <div className="mb-8 space-y-4">
            {/* Search Input */}
            <div className="relative max-w-md">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Pretraži brendove..."
                className="w-full rounded-[var(--radius-input)] border border-[var(--color-border-primary)] bg-[var(--color-bg-primary)] px-4 py-2.5 pl-10 text-[var(--color-text-primary)] placeholder:text-[var(--color-text-tertiary)] focus:border-[var(--color-primary-500)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)]/20"
              />
              <svg
                className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[var(--color-text-tertiary)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            {/* Alphabet Filter */}
            <div className="flex flex-wrap items-center gap-1">
              <button
                onClick={() => setSelectedLetter(null)}
                className={cn(
                  'px-3 py-1.5 text-sm font-medium rounded-[var(--radius-sm)] transition-[var(--transition-fast)]',
                  selectedLetter === null
                    ? 'bg-[var(--color-primary-500)] text-white'
                    : 'bg-[var(--color-bg-primary)] text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-tertiary)]'
                )}
              >
                Svi
              </button>
              {alphabet.map((letter) => {
                const hasItems = availableLetters.has(letter)
                return (
                  <button
                    key={letter}
                    onClick={() => hasItems && setSelectedLetter(letter)}
                    disabled={!hasItems}
                    className={cn(
                      'w-8 h-8 text-sm font-medium rounded-[var(--radius-sm)] transition-[var(--transition-fast)]',
                      selectedLetter === letter
                        ? 'bg-[var(--color-primary-500)] text-white'
                        : hasItems
                          ? 'bg-[var(--color-bg-primary)] text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-tertiary)]'
                          : 'bg-[var(--color-bg-primary)] text-[var(--color-text-disabled)] cursor-not-allowed opacity-50'
                    )}
                  >
                    {letter}
                  </button>
                )
              })}
            </div>

            {/* Active Filters */}
            {(searchQuery || selectedLetter) && (
              <div className="flex items-center gap-2">
                <span className="text-sm text-[var(--color-text-secondary)]">
                  Pronađeno {filteredBrands.length} brendova
                </span>
                <button
                  onClick={handleClearFilters}
                  className="text-sm text-[var(--color-primary-600)] hover:text-[var(--color-primary-700)] underline"
                >
                  Poništi filtere
                </button>
              </div>
            )}
          </div>

          {/* Brands Grid */}
          {filteredBrands.length > 0 ? (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
              {filteredBrands.map((brand) => (
                <Link
                  key={brand.id}
                  href={`/brendovi/${brand.slug}`}
                  className="group flex flex-col items-center rounded-[var(--radius-card)] border border-[var(--color-border-primary)] bg-[var(--color-bg-primary)] p-4 transition-all hover:border-[var(--color-primary-300)] hover:shadow-[var(--shadow-md)]"
                >
                  {/* Brand Logo Placeholder */}
                  <div className="mb-3 flex h-16 w-full items-center justify-center rounded-[var(--radius-sm)] bg-[var(--color-bg-secondary)]">
                    <span className="text-xl font-bold text-[var(--color-text-tertiary)] group-hover:text-[var(--color-primary-500)] transition-[var(--transition-fast)]">
                      {brand.name.substring(0, 2).toUpperCase()}
                    </span>
                  </div>

                  {/* Brand Name */}
                  <h3 className="text-center text-sm font-medium text-[var(--color-text-primary)] group-hover:text-[var(--color-primary-600)] transition-[var(--transition-fast)]">
                    {brand.name}
                  </h3>

                  {/* Product Count */}
                  <p className="mt-1 text-xs text-[var(--color-text-tertiary)]">
                    {brand.productCount.toLocaleString()} proizvoda
                  </p>
                </Link>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <svg
                className="h-16 w-16 text-[var(--color-text-disabled)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="mt-4 text-lg font-medium text-[var(--color-text-primary)]">
                Nema pronađenih brendova
              </h3>
              <p className="mt-2 text-[var(--color-text-secondary)]">
                Pokušajte s drugačijim pojmom za pretragu ili uklonite filtere.
              </p>
              <button
                onClick={handleClearFilters}
                className="mt-4 text-[var(--color-primary-600)] hover:text-[var(--color-primary-700)] underline"
              >
                Poništi sve filtere
              </button>
            </div>
          )}
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

      {/* Search Modal */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        recentSearches={recentSearches}
        trendingSearches={trendingSearches}
        onSearch={(query) => console.log('Search:', query)}
        onQuickAddToCart={(id) => console.log('Quick add:', id)}
        onClearRecentSearch={(id) => console.log('Clear:', id)}
      />
    </div>
  )
}

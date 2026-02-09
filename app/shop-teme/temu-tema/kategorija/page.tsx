'use client'

import { useState } from 'react'

// Header
import {
  TemuHeader,
  type PromoMessage,
  type BenefitItem,
  type TrustBadge,
  type QuickLink,
  type VisualCategory,
  type VisualSubcategory,
  type BrowsingHistoryProduct,
  type SearchHistoryItem,
  type HeaderUser,
  type Brand,
  type TrendingProduct,
} from '@/src/components/ui/layout/header'

// Footer
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

// Breadcrumbs
import { Breadcrumbs } from '@/src/components/ui/Breadcrumbs/Breadcrumbs'

// Temu components
import {
  TemuCategoryFilters,
  TemuProductGrid,
  type TemuProduct,
} from '@/src/components/temu'

// Icons
import Truck01 from '@/src/components/ui/icons/Line/Maps & travel/Truck01'
import Shield01 from '@/src/components/ui/icons/Line/Security/Shield01'
import CreditCard01 from '@/src/components/ui/icons/Line/Finance & eCommerce/CreditCard01'
import Clock from '@/src/components/ui/icons/Line/Time/Clock'
import Zap from '@/src/components/ui/icons/Line/General/Zap'
import Tag01 from '@/src/components/ui/icons/Line/Finance & eCommerce/Tag01'

/* ============================================
   MOCK DATA - HEADER
   ============================================ */

const sampleUser: HeaderUser = {
  id: '1',
  name: 'Ismet Glumcevic',
  email: 'ismet@example.com',
  customerId: 'B2B-12345',
}

const promoMessages: PromoMessage[] = [
  {
    id: '1',
    text: 'Besplatna dostava za narudžbe preko 100 KM',
    icon: <Truck01 className="w-4 h-4" />,
  },
  {
    id: '2',
    text: 'Zimska akcija - do 50% popusta',
    badge: 'SALE',
    highlight: true,
  },
  {
    id: '3',
    text: 'Garancija povrata u roku od 30 dana',
    icon: <Shield01 className="w-4 h-4" />,
  },
]

const benefits: BenefitItem[] = [
  {
    id: '1',
    icon: <Truck01 className="w-5 h-5" />,
    title: 'Besplatna dostava',
    subtitle: 'Nevjerovatno',
  },
  {
    id: '2',
    icon: <Clock className="w-5 h-5" />,
    title: 'Korekcija cijene',
    subtitle: 'U roku od 30 dana',
  },
]

const trustBadges: TrustBadge[] = [
  {
    id: '1',
    icon: <Shield01 className="w-4 h-4" />,
    label: 'Sigurna privatnost',
  },
  {
    id: '2',
    icon: <CreditCard01 className="w-4 h-4" />,
    label: 'Sigurno plaćanje',
  },
  {
    id: '3',
    icon: <Truck01 className="w-4 h-4" />,
    label: 'Garancija isporuke',
  },
]

const quickLinks: QuickLink[] = [
  {
    id: '1',
    label: 'Najprodavanije',
    href: '/najprodavanije',
    icon: <Zap className="w-4 h-4" />,
  },
  {
    id: '2',
    label: 'Akcije',
    href: '/akcije',
    icon: <Tag01 className="w-4 h-4" />,
  },
]

const visualCategories: VisualCategory[] = [
  {
    id: 'istaknuto',
    name: 'Istaknuto',
    slug: 'istaknuto',
    image: 'https://picsum.photos/seed/cat1/200/200',
    children: [
      { id: 'kupatilo', name: 'Kupatilo', slug: 'kupatilo', productCount: 456, image: 'https://picsum.photos/seed/bath/200/200' },
      { id: 'tepisi', name: 'Tepisi i prostirke', slug: 'tepisi', productCount: 234, image: 'https://picsum.photos/seed/carpet/200/200' },
    ],
  },
  {
    id: 'elektronika',
    name: 'Elektronika',
    slug: 'elektronika',
    image: 'https://picsum.photos/seed/electronics/200/200',
    children: [
      { id: 'tableti', name: 'Tableti, laptopi i dodaci', slug: 'tableti', productCount: 1234, image: 'https://picsum.photos/seed/tablet/200/200' },
      { id: 'slusaslice', name: 'Slušalice i dodaci', slug: 'slusaslice', productCount: 89, image: 'https://picsum.photos/seed/headphones/200/200' },
    ],
  },
  {
    id: 'kuca-kuhinja',
    name: 'Kuća i kuhinja',
    slug: 'kuca-kuhinja',
    image: 'https://picsum.photos/seed/kitchen/200/200',
  },
  {
    id: 'zenska-odjeca',
    name: 'Ženska odjeća',
    slug: 'zenska-odjeca',
    image: 'https://picsum.photos/seed/women/200/200',
  },
  {
    id: 'muska-odjeca',
    name: 'Muška odjeća',
    slug: 'muska-odjeca',
    image: 'https://picsum.photos/seed/men/200/200',
  },
  {
    id: 'sport',
    name: 'Sportske i aktivnosti na otvorenom',
    slug: 'sport',
    image: 'https://picsum.photos/seed/sport/200/200',
  },
]

const featuredSubcategories: VisualSubcategory[] = [
  { id: '1', name: 'Tableti', slug: 'tableti', image: 'https://picsum.photos/seed/tablet2/200/200', productCount: 567 },
  { id: '2', name: 'Slušalice', slug: 'slusaslice', image: 'https://picsum.photos/seed/headphones2/200/200', productCount: 89 },
]

const sampleBrands: Brand[] = [
  { id: '1', name: 'Samsung', slug: 'samsung' },
  { id: '2', name: 'Apple', slug: 'apple' },
  { id: '3', name: 'Lenovo', slug: 'lenovo' },
]

const browsingHistory: BrowsingHistoryProduct[] = [
  { id: '1', name: 'Lenovo Tab 2025', image: 'https://picsum.photos/seed/lenovotab/200/200', price: 6.30, href: '/proizvod/1', brand: 'Lenovo' },
  { id: '2', name: 'Stalak za tablet', image: 'https://picsum.photos/seed/tabletstand/200/200', price: 2.50, href: '/proizvod/2' },
]

const recentSearches: SearchHistoryItem[] = [
  { id: '1', query: 'tablet stalak', timestamp: new Date(), resultCount: 234 },
  { id: '2', query: 'laptop torba', timestamp: new Date(), resultCount: 89 },
]

const trendingSearches = ['tablet stalak', 'laptop torba', 'tablet futrola', 'USB hub']

const trendingProducts: TrendingProduct[] = [
  {
    id: 'tp1',
    name: 'Ergonomski stalak za tablet',
    image: 'https://picsum.photos/seed/ergstand/400/400',
    price: 3.80,
    originalPrice: 8.40,
    currency: 'KM',
    rating: 4.5,
    reviewCount: 237,
    soldCount: 5700,
    href: '/proizvod/ergonomski-stalak',
  },
]

/* ============================================
   MOCK DATA - CATEGORY PRODUCTS
   ============================================ */

const categoryProducts: TemuProduct[] = [
  {
    id: 'cp1',
    name: 'Ergonomski Bambusov Stalak za Tablet, Podesivi Kut',
    image: 'https://picsum.photos/seed/bamboostand/400/400',
    price: 3.80,
    originalPrice: 8.40,
    currency: 'KM',
    rating: 4.8,
    reviewCount: 237,
    soldCount: 5700,
    href: '/proizvod/bambusov-stalak',
    isBestseller: true,
    bestsellerLabel: 'Najprodavaniji artikal u Tableti, laptopi...',
  },
  {
    id: 'cp2',
    name: '2-pak Lenovo Tab 10.1" 2025 Tablet (TB...',
    image: 'https://picsum.photos/seed/lenovotab2/400/400',
    price: 6.30,
    originalPrice: 10.10,
    currency: 'KM',
    rating: 4.5,
    reviewCount: 71,
    soldCount: 1200,
    href: '/proizvod/lenovo-tab',
    additionalDiscount: 1.00,
    discountEndTime: new Date(Date.now() + 10 * 60 * 60 * 1000),
  },
  {
    id: 'cp3',
    name: 'Podesivi sklopivi stalak za tablet i mobitel',
    image: 'https://picsum.photos/seed/foldstand/400/400',
    price: 2.50,
    originalPrice: 7.20,
    currency: 'KM',
    rating: 4.6,
    reviewCount: 1682,
    soldCount: 13000,
    href: '/proizvod/sklopivi-stalak',
    isBestseller: true,
    bestsellerLabel: '#3 Najprodavaniji artikal u Tableti, l...',
  },
  {
    id: 'cp4',
    name: '11-Inčni LCD Tablet za Crtanje za Djecu',
    image: 'https://picsum.photos/seed/drawtablet/400/400',
    price: 6.30,
    originalPrice: 19.60,
    currency: 'KM',
    rating: 4.7,
    reviewCount: 873,
    soldCount: 11000,
    href: '/proizvod/lcd-tablet-crtanje',
    additionalDiscount: 2.00,
    discountEndTime: new Date(Date.now() + 8 * 60 * 60 * 1000),
  },
  {
    id: 'cp5',
    name: '3-u-1pc Gaming slušalice i držač kontrolera za tablet',
    image: 'https://picsum.photos/seed/gamingholdr/400/400',
    price: 6.70,
    originalPrice: 15.60,
    currency: 'KM',
    rating: 4.5,
    reviewCount: 433,
    soldCount: 11000,
    href: '/proizvod/gaming-holder',
    additionalDiscount: 1.50,
    discountEndTime: new Date(Date.now() + 6 * 60 * 60 * 1000),
  },
  {
    id: 'cp6',
    name: '13 14 15 inča Macbook torba za laptop, futrolica',
    image: 'https://picsum.photos/seed/macbookbag/400/400',
    price: 6.40,
    originalPrice: 18.30,
    currency: 'KM',
    rating: 4.8,
    reviewCount: 111,
    soldCount: 7400,
    href: '/proizvod/macbook-torba',
  },
  {
    id: 'cp7',
    name: '2-u-1 Podesivi Držač za Laptop i Tablet',
    image: 'https://picsum.photos/seed/lapholdr/400/400',
    price: 4.20,
    originalPrice: 7.40,
    currency: 'KM',
    rating: 4.5,
    reviewCount: 1,
    soldCount: 1100,
    href: '/proizvod/podesivi-drzac',
    isBestseller: true,
    bestsellerLabel: '#5 Novi dolazak u Tableti, laptopi i ...',
  },
  {
    id: 'cp8',
    name: 'PEICHENG 10-inčni Android 15 tablet, RAM 12GB',
    image: 'https://picsum.photos/seed/peicheng/400/400',
    price: 88.60,
    originalPrice: 122.90,
    currency: 'KM',
    rating: 4.6,
    reviewCount: 12486,
    soldCount: 100000,
    href: '/proizvod/peicheng-tablet',
    isBestseller: true,
    bestsellerLabel: '#3 Najprodavaniji artikal u Tableti, l...',
    additionalDiscount: 10.00,
    discountEndTime: new Date(Date.now() + 12 * 60 * 60 * 1000),
  },
  {
    id: 'cp9',
    name: 'Podesivi sklopivi stalak za tablete i mobitele',
    image: 'https://picsum.photos/seed/foldstand2/400/400',
    price: 2.10,
    originalPrice: 6.10,
    currency: 'KM',
    rating: 4.5,
    reviewCount: 115,
    soldCount: 1300,
    href: '/proizvod/sklopivi-stalak-2',
  },
  {
    id: 'cp10',
    name: 'Stilus olovke za dodirne ekrane, 3 u 1 visoka osjetljivost',
    image: 'https://picsum.photos/seed/stylus/400/400',
    price: 3.10,
    originalPrice: 14.70,
    currency: 'KM',
    rating: 4.9,
    reviewCount: 7845,
    soldCount: 100000,
    href: '/proizvod/stilus-olovka',
    isBestseller: true,
    bestsellerLabel: 'Najbolje ocijenjeno u Tableti, laptop...',
  },
  {
    id: 'cp11',
    name: 'Poliesterska jastučnica za tablet podesiva',
    image: 'https://picsum.photos/seed/tabpillow/400/400',
    price: 14.10,
    originalPrice: 28.00,
    currency: 'KM',
    rating: 4.4,
    reviewCount: 562,
    soldCount: 18000,
    href: '/proizvod/jastucnica-tablet',
    isAd: true,
    additionalDiscount: 3.00,
    discountEndTime: new Date(Date.now() + 9 * 60 * 60 * 1000),
  },
  {
    id: 'cp12',
    name: 'HAWEEL Futrola za Tablet sa Zatvaračem',
    image: 'https://picsum.photos/seed/haweel/400/400',
    price: 4.90,
    originalPrice: 12.00,
    currency: 'KM',
    rating: 4.6,
    reviewCount: 345,
    soldCount: 18000,
    href: '/proizvod/haweel-futrola',
  },
  {
    id: 'cp13',
    name: '2 Prijenosna postolja za laptop, lagana aluminij',
    image: 'https://picsum.photos/seed/lapstand/400/400',
    price: 3.30,
    originalPrice: 8.50,
    currency: 'KM',
    rating: 4.5,
    reviewCount: 390,
    soldCount: 2100,
    href: '/proizvod/prijenosna-postolja',
  },
  {
    id: 'cp14',
    name: '10.1" Tablet Android 15 2-u-1 Tablet sa tastaturom',
    image: 'https://picsum.photos/seed/andtab15/400/400',
    price: 117.40,
    originalPrice: 235.00,
    currency: 'KM',
    rating: 4.3,
    reviewCount: 890,
    soldCount: 17000,
    href: '/proizvod/android-15-tablet',
    additionalDiscount: 15.00,
    discountEndTime: new Date(Date.now() + 11 * 60 * 60 * 1000),
  },
  {
    id: 'cp15',
    name: '360° Rotirajući Držač za Telefon i Tablet',
    image: 'https://picsum.photos/seed/rothold/400/400',
    price: 5.50,
    originalPrice: 12.00,
    currency: 'KM',
    rating: 4.7,
    reviewCount: 2340,
    soldCount: 3300,
    href: '/proizvod/rotirajuci-drzac',
  },
]

/* ============================================
   MOCK DATA - FOOTER
   ============================================ */

const companyLinks: FooterLink[] = [
  { label: 'O nama', href: '/o-nama' },
  { label: 'Karijere', href: '/karijere' },
  { label: 'Partneri', href: '/partneri' },
  { label: 'Blog', href: '/blog' },
]

const customerLinks: FooterLink[] = [
  { label: 'Kontakt', href: '/kontakt' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Načini plaćanja', href: '/nacini-placanja' },
  { label: 'Dostava', href: '/dostava' },
  { label: 'Povrat i reklamacije', href: '/povrat' },
]

const catalogLinks: FooterLink[] = [
  { label: 'Svi proizvodi', href: '/proizvodi' },
  { label: 'Akcije', href: '/akcije' },
  { label: 'Novi proizvodi', href: '/novo' },
  { label: 'Brendovi', href: '/brendovi' },
]

const b2bLinks: FooterLink[] = [
  { label: 'B2B Portal', href: '/b2b' },
  { label: 'Veleprodaja', href: '/veleprodaja' },
  { label: 'Registracija firme', href: '/registracija' },
  { label: 'Cjenovnici', href: '/cjenovnici' },
]

const socialLinks: SocialLink[] = [
  { platform: 'facebook', href: 'https://facebook.com' },
  { platform: 'instagram', href: 'https://instagram.com' },
  { platform: 'linkedin', href: 'https://linkedin.com' },
  { platform: 'youtube', href: 'https://youtube.com' },
]

const paymentMethods: PaymentMethod[] = [
  { type: 'visa' },
  { type: 'mastercard' },
  { type: 'maestro' },
  { type: 'paypal' },
  { type: 'bank-transfer' },
]

const legalLinks: FooterLink[] = [
  { label: 'Politika privatnosti', href: '/privatnost' },
  { label: 'Uvjeti korištenja', href: '/uvjeti' },
  { label: 'Kolačići', href: '/kolacici' },
]

/* ============================================
   PAGE COMPONENT
   ============================================ */

export default function TemuKategorijaPage() {
  const handleAddToCart = (productId: string) => {
    console.log('Dodano u korpu:', productId)
  }

  const handleSearch = (query: string) => {
    console.log('Pretraga:', query)
  }

  const handleFilterChange = (filterId: string, optionId: string) => {
    console.log('Filter promjena:', filterId, optionId)
  }

  const handleSortChange = (sortId: string) => {
    console.log('Sortiranje:', sortId)
  }

  return (
    <div className="flex min-h-screen flex-col bg-[var(--color-bg-secondary)]">
      {/* Header */}
      <TemuHeader
        promoMessages={promoMessages}
        trustBadges={trustBadges}
        quickLinks={quickLinks}
        categories={visualCategories}
        featuredSubcategories={featuredSubcategories}
        trendingProducts={trendingProducts}
        brands={sampleBrands}
        user={sampleUser}
        browsingHistory={browsingHistory}
        recentSearches={recentSearches}
        trendingSearches={trendingSearches}
        cartCount={93}
        contact={{ phone: '+387 33 123 456', email: 'info@elektromaterijal.net', workingHours: 'Pon-Pet: 08-17h' }}
        onSearch={handleSearch}
        onLogout={() => console.log('Odjava')}
        sticky
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Breadcrumbs */}
        <div className="bg-[var(--color-bg-primary)] border-b border-[var(--color-border-primary)]">
          <div className="max-w-[var(--container-max-width)] mx-auto px-[var(--container-padding)] py-3">
            <Breadcrumbs
              items={[
                { label: 'Dom', href: '/shop-teme/temu-tema' },
                { label: 'Elektronika', href: '/shop-teme/temu-tema/kategorija' },
                { label: 'Tableti, laptopi i dodaci' },
              ]}
              size="sm"
              separator="chevron"
            />
          </div>
        </div>

        {/* Category Filters */}
        <TemuCategoryFilters
          onFilterChange={handleFilterChange}
          onSortChange={handleSortChange}
          onFiltersClick={() => console.log('Otvori filter sidebar')}
        />

        {/* Product Grid */}
        <TemuProductGrid
          products={categoryProducts}
          columns={5}
          onAddToCart={handleAddToCart}
          showLoadMore
          loadMoreText="Pogledaj više"
        />
      </main>

      {/* Footer */}
      <Footer variant="dark">
        <div className="mb-12 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          <div className="sm:col-span-2 md:col-span-3 lg:col-span-1">
            <FooterBrand
              name="ELEKTROMATERIJAL.net"
              tagline="#elektromaterijal #sve #odmah"
              description="Vaš pouzdani partner za elektromaterijal. Brza dostava, kvalitetni proizvodi, stručna podrška."
              href="/"
              colorScheme="dark"
              className="mb-6 lg:mb-0"
            />
            <SocialIcons
              links={socialLinks}
              colorScheme="dark"
              size="md"
              className="mt-4 lg:mt-6"
            />
          </div>

          <FooterColumn title="Kompanija" colorScheme="dark">
            <FooterLinks links={companyLinks} colorScheme="dark" />
          </FooterColumn>

          <FooterColumn title="Korisnička podrška" colorScheme="dark">
            <FooterLinks links={customerLinks} colorScheme="dark" />
          </FooterColumn>

          <FooterColumn title="Katalog" colorScheme="dark">
            <FooterLinks links={catalogLinks} colorScheme="dark" />
          </FooterColumn>

          <FooterColumn title="B2B" colorScheme="dark">
            <FooterLinks links={b2bLinks} colorScheme="dark" />
          </FooterColumn>
        </div>

        <div className="mb-8">
          <p className="mb-3 text-sm font-medium text-[var(--footer-text-heading)]">
            Prihvaćamo
          </p>
          <PaymentMethods methods={paymentMethods} colorScheme="dark" />
        </div>

        <FooterBottom
          copyright="© 2025 ELEKTROMATERIJAL.net. Sva prava pridržana."
          legalLinks={legalLinks}
          colorScheme="dark"
        />
      </Footer>
    </div>
  )
}

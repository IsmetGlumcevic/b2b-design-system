'use client'

import { useState } from 'react'
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
import {
  SearchModal,
  type RecentSearch,
  type TrendingSearch,
} from '@/src/components/search'
import {
  WelcomeContactBlock,
  type DepartmentContact,
  type SalesRepresentativeProps,
} from '@/src/components/ui/WelcomeContactBlock'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/src/components/ui/Tabs'
import { ProductTable, type ProductTableItem } from '@/src/components/ui/ProductTable'

// Sample categories for navigation
const categories = [
  {
    id: '1',
    name: 'Proizvodi',
    slug: 'proizvodi',
    children: [
      { id: '1-1', name: 'Alati', slug: 'alati' },
      { id: '1-2', name: 'Materijali', slug: 'materijali' },
      { id: '1-3', name: 'Oprema', slug: 'oprema' },
    ],
  },
  {
    id: '2',
    name: 'Brendovi',
    slug: 'brendovi',
    children: [
      { id: '2-1', name: 'Bosch', slug: 'bosch' },
      { id: '2-2', name: 'Makita', slug: 'makita' },
      { id: '2-3', name: 'DeWalt', slug: 'dewalt' },
    ],
  },
  { id: '3', name: 'Akcije', slug: 'akcije' },
  { id: '4', name: 'Kontakt', slug: 'kontakt' },
]

const contactInfo = {
  phone: '+387 33 123 456',
  email: 'info@elektromaterijal.net',
  workingHours: 'Pon-Pet: 08-17h',
}

// Footer data
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
  { label: 'Registracija firme', href: '/registracija-firme' },
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

// Search Modal mock data
const recentSearches: RecentSearch[] = [
  { id: '1', query: 'LED rasvjeta', timestamp: new Date(Date.now() - 1000 * 60 * 5) },
  { id: '2', query: 'Kablovi NYM', timestamp: new Date(Date.now() - 1000 * 60 * 60) },
  { id: '3', query: 'Osigurači B16', timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24) },
]

const trendingSearches: TrendingSearch[] = [
  { id: '1', query: 'Solarna oprema' },
  { id: '2', query: 'Elektro ormarići' },
  { id: '3', query: 'LED paneli' },
  { id: '4', query: 'Utičnice Schuko' },
]

// Welcome Contact Block data
const welcomeDepartments: DepartmentContact[] = [
  {
    title: 'Prodaja',
    contacts: [
      { type: 'phone', value: '+381 11 123-4567' },
      { type: 'email', value: 'sales@elektro.hr' },
      { type: 'whatsapp', value: '+381 64 123-4569' },
    ],
  },
  {
    title: 'Računovodstvo',
    contacts: [
      { type: 'phone', value: '+381 11 123-4568' },
      { type: 'email', value: 'accounting@elektro.hr' },
    ],
  },
]

const welcomeRepresentatives: SalesRepresentativeProps[] = [
  {
    name: 'Darija Zdrilić',
    role: 'Komercijalista',
    avatarSrc: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
    phone: '+385 23 790 004',
    email: 'darija.zdrilic@aleta.hr',
  },
]

// Sample products for ProductTable
const sampleProducts: ProductTableItem[] = [
  {
    sifra: '1851699',
    naziv: 'RG4001M2 I SKLOPKA OBICNA 10A 2M CRNA',
    proizvodac: 'LEGRAND',
    zaliha: 433,
    jedinica: 'kom',
    cijena: 1.94,
    staraCijena: 2.99,
    valuta: '€',
  },
  {
    sifra: '1848994',
    naziv: 'R4702G I NOSIVI OKVIR 2M NOŽICE',
    proizvodac: 'LEGRAND',
    zaliha: 4564,
    jedinica: 'kom',
    cijena: 0.61,
    staraCijena: 0.94,
    valuta: '€',
  },
  {
    sifra: '1014305',
    naziv: 'Kabel koax RG 6 75 Ohm',
    proizvodac: 'KABEL',
    zaliha: 13871,
    jedinica: 'm',
    cijena: 0.14,
    staraCijena: 0.25,
    valuta: '€',
  },
  {
    sifra: '1849004',
    naziv: 'RW4141 I UTIC 2P+E 16A DJ ZAS BIJELA',
    proizvodac: 'LEGRAND',
    zaliha: 4109,
    jedinica: 'kom',
    cijena: 2.07,
    staraCijena: 3.18,
    valuta: '€',
  },
  {
    sifra: '1628899',
    naziv: '1SPE007717F0321 I MISTRAL41W,PROZIRNA VRATA 8M, 12SM',
    opis: 'NADŽBUKNI PLASTIČNI RAZVODNI ORMAR MISTRAL41W,PROZ',
    proizvodac: 'ABB',
    zaliha: 7,
    jedinica: 'kom',
    cijena: 10.49,
    staraCijena: 15.43,
    valuta: '€',
  },
  {
    sifra: '1561834',
    naziv: 'EA2080 I POCINČANA PLOČA ZA AM2/IS2',
    opis: 'POCINČANA PLOČA ZA METALNI RAZVODNI ORMAR AM2/IS2,',
    proizvodac: 'ABB',
    zaliha: 45,
    jedinica: 'kom',
    cijena: 124.09,
    staraCijena: 165.45,
    valuta: '€',
  },
  {
    sifra: '1602483',
    naziv: 'Stopica FASTON Ž 1,5-2,5mm2 6,3X0,8 plava (100)',
    proizvodac: 'HAUPA',
    zaliha: 1740,
    jedinica: 'kom',
    cijena: 0.08,
    staraCijena: 0.12,
    valuta: '€',
  },
]

// Products for different tabs
const noviProizvodi: ProductTableItem[] = sampleProducts.slice(0, 4)
const akcijskiProizvodi: ProductTableItem[] = sampleProducts.slice(2, 6)
const preporuceniProizvodi: ProductTableItem[] = sampleProducts.slice(1, 5)
const najprodavanijiProizvodi: ProductTableItem[] = [...sampleProducts].reverse().slice(0, 5)

export default function Home() {
  const [searchOpen, setSearchOpen] = useState(false)

  const handleSearchOpen = () => {
    setSearchOpen(true)
    console.log('Search opened')
  }

  return (
    <div className="flex min-h-screen flex-col bg-[var(--color-bg-primary)]">
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
            Besplatna dostava za narudžbe preko 100 KM
          </div>
        </HeaderTopBar>

        <HeaderMain>
          <Logo
            alt="ELEKTROMATERIJAL.net"
            tagline="#elektromaterijal #sve #odmah"
            variant="dark"
          />
          <MainNavigation
            categories={categories}
            colorScheme="dark"
            contact={contactInfo}
          />
          <HeaderActions>
            <SearchTrigger
              onOpen={handleSearchOpen}
              variant="responsive"
              colorScheme="dark"
              placeholder="Pretraži proizvode..."
            />
            <CartButton count={0} href="/cart" colorScheme="dark" />
            <Button variant="primary" size="md" className="hidden sm:inline-flex">
              Prijava
            </Button>
          </HeaderActions>
        </HeaderMain>
      </Header>

      {/* Main Content */}
      <main className="flex flex-1 flex-col items-center justify-center px-[var(--spacing-container-padding)]">
        <div className="mx-auto max-w-2xl text-center py-16 md:py-24">
          {/* Coming Soon Badge */}
          <div className="mb-6 inline-flex items-center rounded-full bg-[var(--color-primary-50)] px-4 py-1.5 text-[var(--font-size-sm)] font-medium text-[var(--color-primary-600)]">
            Uskoro
          </div>

          {/* Title */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-[var(--color-text-primary)] md:text-5xl lg:text-6xl">
            B2B E-commerce
            <span className="block text-[var(--color-primary-500)]">Design System</span>
          </h1>

          {/* Description */}
          <p className="mb-10 text-lg text-[var(--color-text-secondary)] md:text-xl">
            Kompletna biblioteka komponenti za izgradnju modernih B2B e-commerce aplikacija.
            Teme, tipografija, boje, komponente - sve na jednom mjestu.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/components">
              <Button variant="primary" size="lg">
                UI Showcase
              </Button>
            </Link>
            <Link href="/design-system">
              <Button variant="outline" size="lg">
                Design System
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 gap-8 border-t border-[var(--color-border-primary)] pt-10 md:grid-cols-4">
            <div>
              <div className="text-3xl font-bold text-[var(--color-text-primary)]">40+</div>
              <div className="text-[var(--font-size-sm)] text-[var(--color-text-tertiary)]">Komponenti</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[var(--color-text-primary)]">1000+</div>
              <div className="text-[var(--font-size-sm)] text-[var(--color-text-tertiary)]">Ikona</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[var(--color-text-primary)]">100%</div>
              <div className="text-[var(--font-size-sm)] text-[var(--color-text-tertiary)]">TypeScript</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[var(--color-text-primary)]">Tailwind</div>
              <div className="text-[var(--font-size-sm)] text-[var(--color-text-tertiary)]">CSS 4</div>
            </div>
          </div>
        </div>

        {/* Welcome Contact Block Section */}
        <div className="mx-auto w-full max-w-5xl border-t border-[var(--color-border-primary)] pt-16">
          <WelcomeContactBlock
            userName="ismet glumcevic"
            departments={welcomeDepartments}
            representatives={welcomeRepresentatives}
          />
        </div>

        {/* Product Table with Tabs Section */}
        <div className="mx-auto w-full max-w-7xl border-t border-[var(--color-border-primary)] pt-16 pb-16">
          <h2 className="mb-8 text-2xl font-bold text-[var(--color-text-primary)]">
            Proizvodi
          </h2>
          <Tabs defaultValue="novi">
            <TabsList>
              <TabsTrigger value="novi">Novi proizvodi</TabsTrigger>
              <TabsTrigger value="akcija">Akcija</TabsTrigger>
              <TabsTrigger value="preporuceno">Preporučeno</TabsTrigger>
              <TabsTrigger value="najprodavanije">Najprodavanije</TabsTrigger>
            </TabsList>
            <TabsContent value="novi">
              <ProductTable
                items={noviProizvodi}
                onAddToCart={(item, qty) => console.log('Dodano u korpu:', qty, 'x', item.naziv)}
              />
            </TabsContent>
            <TabsContent value="akcija">
              <ProductTable
                items={akcijskiProizvodi}
                onAddToCart={(item, qty) => console.log('Dodano u korpu:', qty, 'x', item.naziv)}
              />
            </TabsContent>
            <TabsContent value="preporuceno">
              <ProductTable
                items={preporuceniProizvodi}
                onAddToCart={(item, qty) => console.log('Dodano u korpu:', qty, 'x', item.naziv)}
              />
            </TabsContent>
            <TabsContent value="najprodavanije">
              <ProductTable
                items={najprodavanijiProizvodi}
                onAddToCart={(item, qty) => console.log('Dodano u korpu:', qty, 'x', item.naziv)}
              />
            </TabsContent>
          </Tabs>
        </div>
      </main>

      {/* Footer */}
      <Footer variant="dark">
        {/* Main columns grid */}
        <div className="mb-12 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {/* Brand column */}
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

        {/* Payment methods */}
        <div className="mb-8">
          <p className="mb-3 text-sm font-medium text-[var(--footer-text-heading)]">
            Prihvaćamo
          </p>
          <PaymentMethods methods={paymentMethods} colorScheme="dark" />
        </div>

        {/* Footer bottom */}
        <FooterBottom
          copyright="© 2024 ELEKTROMATERIJAL.net - B2B Design System. Sva prava zadržana."
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
        onSearch={(query) => {
          console.log('Search query:', query)
        }}
        onQuickAddToCart={(productId) => {
          console.log('Quick add to cart:', productId)
        }}
        onClearRecentSearch={(id) => {
          console.log('Clear recent search:', id)
        }}
      />
    </div>
  )
}

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
import { Input } from '@/src/components/ui/Input'
import { TextArea } from '@/src/components/ui/TextArea'
import { Checkbox } from '@/src/components/ui/Checkbox'
import { PromoBar } from '@/src/components/ui/PromoBanner'
import { Divider } from '@/src/components/ui/Divider'
import {
  SearchModal,
  type RecentSearch,
  type TrendingSearch,
  type SearchResult,
} from '@/src/components/search'
import { useCart } from '@/src/lib/cart'

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
  { id: '1', query: 'Osigurači 16A', timestamp: new Date() },
]

const trendingSearches: TrendingSearch[] = [
  { id: '1', query: 'ABB S200' },
  { id: '2', query: 'Schneider iC60' },
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

export default function RegistrationPage() {
  const router = useRouter()
  const [searchOpen, setSearchOpen] = useState(false)
  const { itemCount } = useCart()

  const handleNavigateToSearch = (query: string) => {
    setSearchOpen(false)
    router.push(`/proizvodi?q=${encodeURIComponent(query)}`)
  }

  const handleNavigateToProduct = (productId: string) => {
    setSearchOpen(false)
    router.push(`/proizvod/${productId}`)
  }

  return (
    <div className="flex min-h-screen flex-col bg-[var(--color-bg-secondary)]">
      <PromoBar
        message="Posebni uvjeti za B2B partnere uz registraciju."
        href="/kontakt"
        linkText="Zatraži ponudu"
      />

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
              <Button variant="outline" size="md">
                Prijava
              </Button>
            </Link>
          </HeaderActions>
        </HeaderMain>
      </Header>

      <main className="flex-1">
        <div className="mx-auto max-w-6xl px-[var(--spacing-container-padding)] py-10 lg:py-14">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-[var(--color-text-primary)]">Registracija firme</h1>
            <p className="mt-2 text-[var(--color-text-secondary)]">
              Otvorite B2B račun i ostvarite pristup veleprodajnim cijenama, odgođenom plaćanju i prioritetnoj dostavi.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
            <div className="rounded-[var(--radius-xl)] border border-[var(--color-border-primary)] bg-[var(--color-bg-elevated)] p-6 sm:p-8">
              <form className="space-y-6">
                <div>
                  <h2 className="text-lg font-semibold text-[var(--color-text-primary)]">Podaci o firmi</h2>
                  <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
                    Unesite osnovne podatke o pravnoj osobi.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Input label="Naziv firme" placeholder="Elektro d.o.o." fullWidth />
                  <Input label="OIB" placeholder="12345678901" fullWidth />
                  <Input label="PDV broj" placeholder="HR12345678901" fullWidth />
                  <Input label="Telefon" placeholder="+385 1 234 5678" fullWidth />
                  <Input label="Email firme" type="email" placeholder="nabava@firma.hr" fullWidth />
                  <Input label="Web" placeholder="www.firma.hr" fullWidth />
                </div>

                <Divider />

                <div>
                  <h2 className="text-lg font-semibold text-[var(--color-text-primary)]">Adresa za dostavu</h2>
                  <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
                    Lokacija na koju želite primati narudžbe.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Input label="Ulica i broj" placeholder="Savska 100" fullWidth />
                  <Input label="Grad" placeholder="Zagreb" fullWidth />
                  <Input label="Poštanski broj" placeholder="10000" fullWidth />
                  <Input label="Država" placeholder="Hrvatska" fullWidth />
                </div>

                <Divider />

                <div>
                  <h2 className="text-lg font-semibold text-[var(--color-text-primary)]">Kontakt osoba</h2>
                  <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
                    Podaci osobe koja će upravljati narudžbama.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Input label="Ime" placeholder="Ivana" fullWidth />
                  <Input label="Prezime" placeholder="Horvat" fullWidth />
                  <Input label="Email" type="email" placeholder="ivana@firma.hr" fullWidth />
                  <Input label="Mobitel" placeholder="+385 98 123 456" fullWidth />
                  <Input label="Pozicija" placeholder="Voditelj nabave" fullWidth />
                  <Input label="Odjel" placeholder="Nabava" fullWidth />
                </div>

                <Divider />

                <div>
                  <h2 className="text-lg font-semibold text-[var(--color-text-primary)]">Pristupni podaci</h2>
                  <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
                    Postavite lozinku za pristup portalu.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Input label="Lozinka" type="password" placeholder="Unesite lozinku" fullWidth />
                  <Input label="Ponovi lozinku" type="password" placeholder="Ponovite lozinku" fullWidth />
                </div>

                <TextArea
                  label="Napomena"
                  placeholder="Npr. želimo odgođeno plaćanje 30 dana..."
                  fullWidth
                />

                <div className="space-y-3">
                  <Checkbox
                    label={
                      <span>
                        Prihvaćam{' '}
                        <Link href="/uvjeti" className="text-[var(--color-primary-600)] hover:underline">
                          uvjete korištenja
                        </Link>
                        .
                      </span>
                    }
                  />
                  <Checkbox
                    label="Želim primati obavijesti o akcijama i novim proizvodima."
                  />
                </div>

                <Button type="submit" variant="primary" size="lg" fullWidth>
                  Pošalji registraciju
                </Button>

                <p className="text-center text-sm text-[var(--color-text-tertiary)]">
                  Već imate račun?{' '}
                  <Link href="/prijava" className="text-[var(--color-primary-600)] hover:underline">
                    Prijavite se
                  </Link>
                </p>
              </form>
            </div>

            <div className="space-y-6">
              <div className="rounded-[var(--radius-xl)] border border-[var(--color-border-primary)] bg-[var(--color-bg-elevated)] p-6">
                <h2 className="text-lg font-semibold text-[var(--color-text-primary)]">Što dobivate?</h2>
                <ul className="mt-4 space-y-3 text-sm text-[var(--color-text-secondary)]">
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--color-primary-500)]" />
                    Posebne B2B cijene i količinski popusti.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--color-primary-500)]" />
                    Brzu obradu ponuda i personaliziranu podršku.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--color-primary-500)]" />
                    Transparentan uvid u status narudžbi.
                  </li>
                </ul>
              </div>

              <div className="rounded-[var(--radius-xl)] border border-[var(--color-border-primary)] bg-[var(--color-bg-elevated)] p-6">
                <h3 className="text-base font-semibold text-[var(--color-text-primary)]">Proces odobrenja</h3>
                <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
                  Nakon slanja obrasca, naš tim će vas kontaktirati u roku 24h radi potvrde uvjeta.
                </p>
                <Divider />
                <p className="text-sm text-[var(--color-text-secondary)]">
                  Za hitne upite nazovite +385 1 234 5678 ili pišite na b2b@elektromaterijal.net.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

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

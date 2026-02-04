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
import { Checkbox } from '@/src/components/ui/Checkbox'
import { Divider } from '@/src/components/ui/Divider'
import { PromoBar } from '@/src/components/ui/PromoBanner'
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

export default function LoginPage() {
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
        message="Besplatna dostava za narudžbe preko 200 €!"
        href="/akcije"
        linkText="Pogledaj akcije"
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
            <Link href="/registracija" className="hidden sm:inline-flex">
              <Button variant="outline" size="md">
                Registracija
              </Button>
            </Link>
          </HeaderActions>
        </HeaderMain>
      </Header>

      <main className="flex-1">
        <div className="mx-auto max-w-6xl px-[var(--spacing-container-padding)] py-10 lg:py-14">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-[var(--color-text-primary)]">Prijava</h1>
            <p className="mt-2 text-[var(--color-text-secondary)]">
              Prijavite se kako biste pristupili B2B cijenama, listama želja i statusu narudžbi.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]">
            <div className="rounded-[var(--radius-xl)] border border-[var(--color-border-primary)] bg-[var(--color-bg-elevated)] p-6 sm:p-8">
              <form className="space-y-5">
                <Input
                  label="Email adresa"
                  type="email"
                  placeholder="ime@firma.hr"
                  fullWidth
                />
                <Input
                  label="Lozinka"
                  type="password"
                  placeholder="Unesite lozinku"
                  fullWidth
                />

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <Checkbox
                    label="Zapamti me"
                    className="text-sm"
                  />
                  <Link
                    href="/zaboravljena-lozinka"
                    className="text-sm text-[var(--color-primary-600)] hover:underline"
                  >
                    Zaboravljena lozinka?
                  </Link>
                </div>

                <Button type="submit" variant="primary" size="lg" fullWidth>
                  Prijavi se
                </Button>

                <Divider>ili</Divider>

                <div className="space-y-3">
                  <Button type="button" variant="outline" size="lg" fullWidth>
                    Prijava jednokratnim kodom
                  </Button>
                  <p className="text-center text-sm text-[var(--color-text-tertiary)]">
                    Nemate račun?{' '}
                    <Link href="/registracija" className="text-[var(--color-primary-600)] hover:underline">
                      Registrirajte firmu
                    </Link>
                  </p>
                </div>
              </form>
            </div>

            <div className="space-y-6">
              <div className="rounded-[var(--radius-xl)] border border-[var(--color-border-primary)] bg-[var(--color-bg-elevated)] p-6">
                <h2 className="text-lg font-semibold text-[var(--color-text-primary)]">
                  Prednosti B2B računa
                </h2>
                <ul className="mt-4 space-y-3 text-sm text-[var(--color-text-secondary)]">
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--color-primary-500)]" />
                    Veleprodajne cijene i personalizirane ponude.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--color-primary-500)]" />
                    Odgođeno plaćanje i R1 račun.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--color-primary-500)]" />
                    Pregled narudžbi, ponuda i preuzimanja.
                  </li>
                </ul>
              </div>

              <div className="rounded-[var(--radius-xl)] border border-[var(--color-border-primary)] bg-[var(--color-bg-elevated)] p-6">
                <h3 className="text-base font-semibold text-[var(--color-text-primary)]">Treba vam pomoć?</h3>
                <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
                  Naš tim stoji na raspolaganju za sve upite o B2B registraciji i uvjetima.
                </p>
                <div className="mt-4 space-y-2 text-sm text-[var(--color-text-secondary)]">
                  <p>Telefon: +385 1 234 5678</p>
                  <p>Email: podrska@elektromaterijal.net</p>
                </div>
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

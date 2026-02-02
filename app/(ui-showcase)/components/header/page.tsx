'use client'

import { useState } from 'react'
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
  AccountDropdown,
  type Category,
  type Brand,
  type Service,
  type NavigationItem,
  type HeaderUser,
} from '@/src/components/ui/layout/header'
import { Button } from '@/src/components/ui/buttons'
import Truck01 from '@/src/components/ui/icons/Line/Maps & travel/Truck01'
import Tool01 from '@/src/components/ui/icons/Line/General/Tool01'
import Building07 from '@/src/components/ui/icons/Line/General/Building07'
import ShoppingBag01 from '@/src/components/ui/icons/Line/Finance & eCommerce/ShoppingBag01'

export default function HeaderShowcasePage() {
  const [searchOpen, setSearchOpen] = useState(false)

  // Realistic elektromaterijali categories (3 levels)
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
            { id: 'nayy-j', name: 'NAYY-J', slug: 'nayy-j', productCount: 28 },
            { id: 'n2xh', name: 'N2XH', slug: 'n2xh', productCount: 18 },
          ],
        },
        {
          id: 'instalacijski',
          name: 'Instalacijski vodovi',
          slug: 'instalacijski-vodovi',
          children: [
            { id: 'pp-y', name: 'PP-Y', slug: 'pp-y', productCount: 56 },
            { id: 'pp-j', name: 'PP-J', slug: 'pp-j', productCount: 42 },
            { id: 'pgp', name: 'PGP', slug: 'pgp', productCount: 35 },
            { id: 'h07v-u', name: 'H07V-U', slug: 'h07v-u', productCount: 24 },
          ],
        },
        {
          id: 'signalni',
          name: 'Signalni kablovi',
          slug: 'signalni-kablovi',
          children: [
            { id: 'jy-st-y', name: 'JY(St)Y', slug: 'jy-st-y', productCount: 22 },
            { id: 'liycy', name: 'LiYCY', slug: 'liycy', productCount: 18 },
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
            { id: 'led-paneli', name: 'LED paneli', slug: 'led-paneli', productCount: 85 },
            { id: 'led-trake', name: 'LED trake', slug: 'led-trake', productCount: 64 },
            { id: 'led-sijalice', name: 'LED sijalice', slug: 'led-sijalice', productCount: 120 },
          ],
        },
        {
          id: 'industrijska',
          name: 'Industrijska rasvjeta',
          slug: 'industrijska-rasvjeta',
          children: [
            { id: 'hala-reflektori', name: 'Hala reflektori', slug: 'hala-reflektori', productCount: 32 },
            { id: 'vodootporna', name: 'Vodootporna rasvjeta', slug: 'vodootporna', productCount: 28 },
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
            { id: 'okviri', name: 'Okviri', slug: 'okviri', productCount: 45 },
          ],
        },
        {
          id: 'industrijski',
          name: 'Industrijski program',
          slug: 'industrijski-program',
          children: [
            { id: 'cee-uticnice', name: 'CEE utičnice', slug: 'cee-uticnice', productCount: 55 },
            { id: 'cee-prikljucnice', name: 'CEE priključnice', slug: 'cee-prikljucnice', productCount: 48 },
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
        {
          id: 'fid-sklopke',
          name: 'FID sklopke',
          slug: 'fid-sklopke',
          children: [
            { id: 'fid-30ma', name: 'FID 30mA', slug: 'fid-30ma', productCount: 35 },
            { id: 'fid-300ma', name: 'FID 300mA', slug: 'fid-300ma', productCount: 28 },
          ],
        },
      ],
    },
    {
      id: 'alati',
      name: 'Alati',
      slug: 'alati',
      children: [
        {
          id: 'rucni-alati',
          name: 'Ručni alati',
          slug: 'rucni-alati',
          children: [
            { id: 'klesta', name: 'Kliješta', slug: 'klijesta', productCount: 65 },
            { id: 'odvijaci', name: 'Odvijači', slug: 'odvijaci', productCount: 85 },
          ],
        },
        {
          id: 'mjerni-instrumenti',
          name: 'Mjerni instrumenti',
          slug: 'mjerni-instrumenti',
          children: [
            { id: 'multimetri', name: 'Multimetri', slug: 'multimetri', productCount: 35 },
            { id: 'klampmetri', name: 'Klamp metri', slug: 'klampmetri', productCount: 28 },
          ],
        },
      ],
    },
  ]

  // Sample brands (30 brands for elektromaterijali)
  const sampleBrands: Brand[] = [
    { id: '1', name: 'Schneider Electric', slug: 'schneider-electric' },
    { id: '2', name: 'Legrand', slug: 'legrand' },
    { id: '3', name: 'OBO Bettermann', slug: 'obo-bettermann' },
    { id: '4', name: 'Gewiss', slug: 'gewiss' },
    { id: '5', name: 'ETI', slug: 'eti' },
    { id: '6', name: 'Phoenix Contact', slug: 'phoenix-contact' },
    { id: '7', name: 'Weidmüller', slug: 'weidmuller' },
    { id: '8', name: 'Wago', slug: 'wago' },
    { id: '9', name: 'Cembre', slug: 'cembre' },
    { id: '10', name: 'Helukabel', slug: 'helukabel' },
    { id: '11', name: 'Elko', slug: 'elko' },
    { id: '12', name: 'Finder', slug: 'finder' },
    { id: '13', name: 'Mean Well', slug: 'mean-well' },
    { id: '14', name: 'Osram', slug: 'osram' },
    { id: '15', name: 'Philips', slug: 'philips' },
    { id: '16', name: 'ABB', slug: 'abb' },
    { id: '17', name: 'Siemens', slug: 'siemens' },
    { id: '18', name: 'Hager', slug: 'hager' },
    { id: '19', name: 'Schrack', slug: 'schrack' },
    { id: '20', name: 'General Electric', slug: 'general-electric' },
    { id: '21', name: 'Eaton', slug: 'eaton' },
    { id: '22', name: 'Rittal', slug: 'rittal' },
    { id: '23', name: 'Lapp Kabel', slug: 'lapp-kabel' },
    { id: '24', name: 'Nexans', slug: 'nexans' },
    { id: '25', name: 'Prysmian', slug: 'prysmian' },
    { id: '26', name: 'Vimar', slug: 'vimar' },
    { id: '27', name: 'BTicino', slug: 'bticino' },
    { id: '28', name: 'Jung', slug: 'jung' },
    { id: '29', name: 'Gira', slug: 'gira' },
    { id: '30', name: 'Busch-Jaeger', slug: 'busch-jaeger' },
  ]

  // Sample services
  const sampleServices: Service[] = [
    {
      id: '1',
      title: 'Isporuka',
      description: 'Brza dostava na vašu adresu',
      href: '/usluge/isporuka',
      icon: <Truck01 className="h-5 w-5" />,
    },
    {
      id: '2',
      title: 'Tehnička podrška',
      description: 'Stručni savjeti i pomoć',
      href: '/usluge/tehnicka-podrska',
      icon: <Tool01 className="h-5 w-5" />,
    },
    {
      id: '3',
      title: 'Projektiranje',
      description: 'Izrada projekata i specifikacija',
      href: '/usluge/projektiranje',
      icon: <Building07 className="h-5 w-5" />,
    },
    {
      id: '4',
      title: 'Shop podrška',
      description: 'Vaša mini prodavnica',
      href: '/usluge/shop-podrska',
      icon: <ShoppingBag01 className="h-5 w-5" />,
    },
  ]

  // Navigation items with MegaMenu support
  const navigationItems: NavigationItem[] = [
    {
      id: 'proizvodi',
      name: 'Proizvodi',
      slug: 'proizvodi',
      menuType: 'megamenu-categories',
      children: elektroCategories,
    },
    {
      id: 'brendovi',
      name: 'Brendovi',
      slug: 'brendovi',
      menuType: 'megamenu-brands',
    },
    {
      id: 'usluge',
      name: 'Usluge',
      slug: 'usluge',
      menuType: 'dropdown',
      children: [
        { id: 'isporuka', name: 'Isporuka', slug: 'usluge/isporuka' },
        { id: 'tehnicka-podrska', name: 'Tehnička podrška', slug: 'usluge/tehnicka-podrska' },
        { id: 'projektiranje', name: 'Projektiranje', slug: 'usluge/projektiranje' },
        { id: 'shop-podrska', name: 'Shop podrška', slug: 'usluge/shop-podrska' },
      ],
    },
    {
      id: 'akcije',
      name: 'Akcije',
      slug: 'akcije',
      menuType: 'link',
    },
    {
      id: 'kontakt',
      name: 'Kontakt',
      slug: 'kontakt',
      menuType: 'link',
    },
  ]

  const sampleUser: HeaderUser = {
    id: '1',
    name: 'Marko Markovic',
    email: 'marko@firma.ba',
    customerId: 'B2B-12345',
    initials: 'MM',
  }

  const handleLogout = () => {
    console.log('Logout clicked')
  }

  const handleSearchOpen = () => {
    setSearchOpen(true)
    console.log('Search opened')
  }

  return (
    <div className="min-h-screen bg-[var(--color-bg-secondary)]">
      {/* Page Header */}
      <div className="border-b border-[var(--color-border-primary)] bg-[var(--color-bg-primary)] px-8 py-8">
        <h1 className="mb-2 text-3xl font-bold text-[var(--color-text-primary)]">Header</h1>
        <p className="text-[var(--color-text-secondary)]">
          Header layout komponenta za B2B e-commerce sa MegaMenu navigacijom.
        </p>
      </div>

      <div className="p-8 space-y-16">
        {/* Dark Header - Complete with MegaMenu */}
        <section>
          <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
            Dark Header - Sa MegaMenu navigacijom
          </h2>
          <p className="mb-4 text-[var(--color-text-secondary)]">
            Tamna varijanta header-a sa MegaMenu za kategorije (3 nivoa) i brendove. Hover za
            otvaranje menija.
          </p>
          <div className="rounded-lg shadow-lg overflow-visible">
            <Header variant="dark" sticky className="rounded-lg">
              <HeaderTopBar colorScheme="dark" className="hidden xl:block">
                <ContactInfo
                  phone="+387 33 123 456"
                  email="info@elektromaterijal.net"
                  workingHours="Pon-Pet: 08-17h"
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
                  items={navigationItems}
                  brands={sampleBrands}
                  services={sampleServices}
                  colorScheme="dark"
                  contact={{
                    phone: '+387 33 123 456',
                    email: 'info@elektromaterijal.net',
                    workingHours: 'Pon-Pet: 08-17h',
                  }}
                />
                <HeaderActions>
                  <SearchTrigger
                    onOpen={handleSearchOpen}
                    variant="responsive"
                    colorScheme="dark"
                    placeholder="Pretraži proizvode..."
                  />
                  <CartButton count={3} href="/cart" colorScheme="dark" />
                  <AccountDropdown user={sampleUser} onLogout={handleLogout} />
                </HeaderActions>
              </HeaderMain>
            </Header>
          </div>
        </section>

        {/* Light Header with MegaMenu */}
        <section>
          <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
            Light Header - Sa MegaMenu navigacijom
          </h2>
          <p className="mb-4 text-[var(--color-text-secondary)]">
            Svijetla varijanta sa MegaMenu navigacijom.
          </p>
          <div className="rounded-lg border border-[var(--color-border-primary)] shadow-sm overflow-visible">
            <Header className="rounded-lg">
              <HeaderTopBar className="hidden xl:block">
                <ContactInfo
                  phone="+387 33 123 456"
                  email="info@elektromaterijal.net"
                  workingHours="Pon-Pet: 08-17h"
                />
                <div className="text-[var(--font-size-xs)] text-[var(--color-text-secondary)]">
                  Besplatna dostava za narudžbe preko 100 KM
                </div>
              </HeaderTopBar>

              <HeaderMain>
                <Logo
                  alt="ELEKTROMATERIJAL.net"
                  tagline="#elektromaterijal #sve #odmah"
                  variant="light"
                />
                <MainNavigation
                  items={navigationItems}
                  brands={sampleBrands}
                  services={sampleServices}
                  contact={{
                    phone: '+387 33 123 456',
                    email: 'info@elektromaterijal.net',
                    workingHours: 'Pon-Pet: 08-17h',
                  }}
                />
                <HeaderActions>
                  <SearchTrigger onOpen={handleSearchOpen} variant="responsive" />
                  <CartButton count={3} href="/cart" />
                  <AccountDropdown user={sampleUser} onLogout={handleLogout} />
                </HeaderActions>
              </HeaderMain>
            </Header>
          </div>
        </section>

        {/* Navigation Structure */}
        <section>
          <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
            Struktura navigacije
          </h2>
          <div className="rounded-lg border border-[var(--color-border-primary)] bg-[var(--color-bg-primary)] p-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[var(--color-border-primary)]">
                  <th className="py-2 text-left font-medium">Stavka</th>
                  <th className="py-2 text-left font-medium">Tip menija</th>
                  <th className="py-2 text-left font-medium">Opis</th>
                </tr>
              </thead>
              <tbody className="text-[var(--color-text-secondary)]">
                <tr className="border-b border-[var(--color-border-primary)]">
                  <td className="py-2 font-medium text-[var(--color-text-primary)]">Proizvodi</td>
                  <td className="py-2 font-mono text-xs">megamenu-categories</td>
                  <td className="py-2">3-level kategorije sa hover navigacijom</td>
                </tr>
                <tr className="border-b border-[var(--color-border-primary)]">
                  <td className="py-2 font-medium text-[var(--color-text-primary)]">Brendovi</td>
                  <td className="py-2 font-mono text-xs">megamenu-brands</td>
                  <td className="py-2">Grid prikaz ~30 brendova</td>
                </tr>
                <tr className="border-b border-[var(--color-border-primary)]">
                  <td className="py-2 font-medium text-[var(--color-text-primary)]">Usluge</td>
                  <td className="py-2 font-mono text-xs">dropdown</td>
                  <td className="py-2">Standardni dropdown sa uslugama</td>
                </tr>
                <tr className="border-b border-[var(--color-border-primary)]">
                  <td className="py-2 font-medium text-[var(--color-text-primary)]">Akcije</td>
                  <td className="py-2 font-mono text-xs">link</td>
                  <td className="py-2">Direktan link na /akcije</td>
                </tr>
                <tr>
                  <td className="py-2 font-medium text-[var(--color-text-primary)]">Kontakt</td>
                  <td className="py-2 font-mono text-xs">link</td>
                  <td className="py-2">Direktan link na /kontakt</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Logo Variants */}
        <section>
          <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
            Logo Varijante
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-lg border border-[var(--color-border-primary)] bg-[var(--color-bg-primary)] p-8">
              <p className="mb-4 text-sm text-[var(--color-text-tertiary)]">Light variant</p>
              <Logo
                alt="ELEKTROMATERIJAL.net"
                tagline="#elektromaterijal #sve #odmah"
                variant="light"
              />
            </div>
            <div className="rounded-lg bg-[var(--color-secondary-800)] p-8">
              <p className="mb-4 text-sm text-[var(--color-neutral-400)]">Dark variant</p>
              <Logo
                alt="ELEKTROMATERIJAL.net"
                tagline="#elektromaterijal #sve #odmah"
                variant="dark"
              />
            </div>
          </div>
        </section>

        {/* Usage Example */}
        <section>
          <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
            Primjer korištenja
          </h2>
          <div className="rounded-lg border border-[var(--color-border-primary)] bg-[var(--color-neutral-900)] p-6">
            <pre className="overflow-x-auto text-sm text-[var(--color-text-inverse)]">
              <code>{`import {
  Header,
  HeaderMain,
  HeaderActions,
  Logo,
  MainNavigation,
  SearchTrigger,
  CartButton,
  type NavigationItem,
  type Brand,
} from '@/src/components/ui/layout/header'

// Navigation with MegaMenu
const navigationItems: NavigationItem[] = [
  {
    id: 'proizvodi',
    name: 'Proizvodi',
    slug: 'proizvodi',
    menuType: 'megamenu-categories',
    children: categories, // 3-level categories
  },
  {
    id: 'brendovi',
    name: 'Brendovi',
    slug: 'brendovi',
    menuType: 'megamenu-brands',
  },
  {
    id: 'usluge',
    name: 'Usluge',
    slug: 'usluge',
    menuType: 'dropdown',
    children: [
      { id: 'isporuka', name: 'Isporuka', slug: 'usluge/isporuka' },
      { id: 'podrska', name: 'Podrška', slug: 'usluge/podrska' },
    ],
  },
  { id: 'akcije', name: 'Akcije', slug: 'akcije', menuType: 'link' },
  { id: 'kontakt', name: 'Kontakt', slug: 'kontakt', menuType: 'link' },
]

<Header variant="dark" sticky>
  <HeaderMain>
    <Logo alt="ELEKTROMATERIJAL.net" variant="dark" />
    <MainNavigation
      items={navigationItems}
      brands={brands}
      colorScheme="dark"
    />
    <HeaderActions>
      <SearchTrigger onOpen={openSearch} colorScheme="dark" />
      <CartButton count={cartCount} href="/cart" colorScheme="dark" />
    </HeaderActions>
  </HeaderMain>
</Header>`}</code>
            </pre>
          </div>
        </section>

        {/* CSS Variables */}
        <section>
          <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
            CSS Variables
          </h2>
          <div className="rounded-lg border border-[var(--color-border-primary)] bg-[var(--color-bg-primary)] p-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[var(--color-border-primary)]">
                  <th className="py-2 text-left font-medium">Variable</th>
                  <th className="py-2 text-left font-medium">Default</th>
                  <th className="py-2 text-left font-medium">Opis</th>
                </tr>
              </thead>
              <tbody className="text-[var(--color-text-secondary)]">
                <tr className="border-b border-[var(--color-border-primary)]">
                  <td className="py-2 font-mono text-xs">--header-height</td>
                  <td className="py-2">80px</td>
                  <td className="py-2">Visina glavnog header reda</td>
                </tr>
                <tr className="border-b border-[var(--color-border-primary)]">
                  <td className="py-2 font-mono text-xs">--color-secondary-800</td>
                  <td className="py-2">#1f2937</td>
                  <td className="py-2">Dark header pozadina</td>
                </tr>
                <tr className="border-b border-[var(--color-border-primary)]">
                  <td className="py-2 font-mono text-xs">--mobile-menu-width</td>
                  <td className="py-2">320px</td>
                  <td className="py-2">Širina mobilnog menija</td>
                </tr>
                <tr>
                  <td className="py-2 font-mono text-xs">--z-dropdown</td>
                  <td className="py-2">1000</td>
                  <td className="py-2">Z-index za dropdown/megamenu</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  )
}

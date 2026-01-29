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
  type HeaderUser,
} from '@/src/components/ui/layout/header'
import { Button } from '@/src/components/ui/buttons'

export default function HeaderShowcasePage() {
  const [searchOpen, setSearchOpen] = useState(false)

  // Sample data
  const sampleCategories: Category[] = [
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
    {
      id: '3',
      name: 'Akcije',
      slug: 'akcije',
    },
    {
      id: '4',
      name: 'Kontakt',
      slug: 'kontakt',
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
          Header layout komponenta za B2B e-commerce sa svim pod-komponentama.
        </p>
      </div>

      <div className="p-8 space-y-16">
        {/* Dark Header - Complete */}
        <section>
          <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
            Dark Header - Kompletna verzija
          </h2>
          <p className="mb-4 text-[var(--color-text-secondary)]">
            Tamna varijanta header-a sa svim komponentama: HeaderTopBar, ContactInfo, AccountDropdown.
          </p>
          <div className="rounded-lg shadow-lg">
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
                  categories={sampleCategories}
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

        {/* Light Header */}
        <section>
          <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
            Light Header
          </h2>
          <p className="mb-4 text-[var(--color-text-secondary)]">
            Svijetla varijanta sa svim komponentama.
          </p>
          <div className="rounded-lg border border-[var(--color-border-primary)] shadow-sm">
            <Header className="rounded-lg">
              <HeaderTopBar className="hidden xl:block">
                <ContactInfo
                  phone="+387 33 123 456"
                  email="info@shop.ba"
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
                  categories={sampleCategories}
                  contact={{
                    phone: '+387 33 123 456',
                    email: 'info@shop.ba',
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

        {/* Logo Variants */}
        <section>
          <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
            Logo Varijante
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Light Logo */}
            <div className="rounded-lg border border-[var(--color-border-primary)] bg-[var(--color-bg-primary)] p-8">
              <p className="mb-4 text-sm text-[var(--color-text-tertiary)]">Light variant</p>
              <Logo
                alt="ELEKTROMATERIJAL.net"
                tagline="#elektromaterijal #sve #odmah"
                variant="light"
              />
            </div>
            {/* Dark Logo */}
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

        {/* Search Trigger Variants */}
        <section>
          <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
            SearchTrigger Varijante
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Light Search */}
            <div className="rounded-lg border border-[var(--color-border-primary)] bg-[var(--color-bg-primary)] p-6">
              <p className="mb-4 text-sm text-[var(--color-text-tertiary)]">Light colorScheme</p>
              <div className="flex items-center gap-4">
                <SearchTrigger onOpen={handleSearchOpen} variant="icon" colorScheme="light" />
                <SearchTrigger onOpen={handleSearchOpen} variant="expanded" colorScheme="light" />
              </div>
            </div>
            {/* Dark Search */}
            <div className="rounded-lg bg-[var(--color-secondary-800)] p-6">
              <p className="mb-4 text-sm text-[var(--color-neutral-400)]">Dark colorScheme</p>
              <div className="flex items-center gap-4">
                <SearchTrigger onOpen={handleSearchOpen} variant="icon" colorScheme="dark" />
                <SearchTrigger onOpen={handleSearchOpen} variant="expanded" colorScheme="dark" />
              </div>
            </div>
          </div>
        </section>

        {/* CartButton Variants */}
        <section>
          <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
            CartButton Varijante
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Light Cart */}
            <div className="rounded-lg border border-[var(--color-border-primary)] bg-[var(--color-bg-primary)] p-6">
              <p className="mb-4 text-sm text-[var(--color-text-tertiary)]">Light colorScheme</p>
              <div className="flex items-center gap-6">
                <CartButton count={0} colorScheme="light" />
                <CartButton count={5} colorScheme="light" />
                <CartButton count={150} colorScheme="light" />
              </div>
            </div>
            {/* Dark Cart */}
            <div className="rounded-lg bg-[var(--color-secondary-800)] p-6">
              <p className="mb-4 text-sm text-[var(--color-neutral-400)]">Dark colorScheme</p>
              <div className="flex items-center gap-6">
                <CartButton count={0} colorScheme="dark" />
                <CartButton count={5} colorScheme="dark" />
                <CartButton count={150} colorScheme="dark" />
              </div>
            </div>
          </div>
        </section>

        {/* ContactInfo */}
        <section>
          <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
            ContactInfo Varijante
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Light ContactInfo */}
            <div className="rounded-lg border border-[var(--color-border-primary)] bg-[var(--color-bg-primary)] p-6">
              <p className="mb-4 text-sm text-[var(--color-text-tertiary)]">Light colorScheme</p>
              <div className="space-y-4">
                <div>
                  <p className="mb-2 text-xs text-[var(--color-text-tertiary)]">Horizontal</p>
                  <ContactInfo
                    phone="+387 33 123 456"
                    email="info@shop.ba"
                    workingHours="Pon-Pet: 08-17h"
                    colorScheme="light"
                  />
                </div>
                <div>
                  <p className="mb-2 text-xs text-[var(--color-text-tertiary)]">Stacked</p>
                  <ContactInfo
                    phone="+387 33 123 456"
                    email="info@shop.ba"
                    workingHours="Pon-Pet: 08-17h"
                    variant="stacked"
                    colorScheme="light"
                  />
                </div>
              </div>
            </div>
            {/* Dark ContactInfo */}
            <div className="rounded-lg bg-[var(--color-secondary-800)] p-6">
              <p className="mb-4 text-sm text-[var(--color-neutral-400)]">Dark colorScheme</p>
              <div className="space-y-4">
                <div>
                  <p className="mb-2 text-xs text-[var(--color-neutral-500)]">Horizontal</p>
                  <ContactInfo
                    phone="+387 33 123 456"
                    email="info@shop.ba"
                    workingHours="Pon-Pet: 08-17h"
                    colorScheme="dark"
                  />
                </div>
                <div>
                  <p className="mb-2 text-xs text-[var(--color-neutral-500)]">Stacked</p>
                  <ContactInfo
                    phone="+387 33 123 456"
                    email="info@shop.ba"
                    workingHours="Pon-Pet: 08-17h"
                    variant="stacked"
                    colorScheme="dark"
                  />
                </div>
              </div>
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
} from '@/src/components/ui/layout/header'
import { Button } from '@/src/components/ui/buttons'

// Dark Header with text logo
<Header variant="dark" sticky>
  <HeaderMain>
    <Logo
      alt="ELEKTROMATERIJAL.net"
      tagline="#elektromaterijal #sve #odmah"
      variant="dark"
    />
    <MainNavigation categories={categories} />
    <HeaderActions>
      <SearchTrigger
        onOpen={openSearch}
        variant="expanded"
        colorScheme="dark"
      />
      <CartButton count={cartCount} href="/cart" colorScheme="dark" />
      <Button variant="primary">Naruči</Button>
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
                  <td className="py-2 font-mono text-xs">--color-primary-500</td>
                  <td className="py-2">#ed1c24</td>
                  <td className="py-2">Primary/CTA boja</td>
                </tr>
                <tr className="border-b border-[var(--color-border-primary)]">
                  <td className="py-2 font-mono text-xs">--mobile-menu-width</td>
                  <td className="py-2">320px</td>
                  <td className="py-2">Širina mobilnog menija</td>
                </tr>
                <tr>
                  <td className="py-2 font-mono text-xs">--cart-badge-size</td>
                  <td className="py-2">18px</td>
                  <td className="py-2">Veličina badge-a na košarici</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  )
}

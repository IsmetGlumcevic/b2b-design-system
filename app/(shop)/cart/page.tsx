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
import type { FooterLink, SocialLink, PaymentMethod as FooterPaymentMethod } from '@/src/components/ui/layout/footer'
import { Button } from '@/src/components/ui/buttons'
import { Breadcrumbs } from '@/src/components/ui/Breadcrumbs'
import { PromoBar } from '@/src/components/ui/PromoBanner'
import {
  SearchModal,
  type RecentSearch,
  type TrendingSearch,
  type SearchResult,
} from '@/src/components/search'
import { useCart } from '@/src/lib/cart'
import { CartProductList } from '@/src/components/ui/cart/CartProductList'
import { CartSummary } from '@/src/components/ui/cart/CartSummary'
import { AddressSection } from '@/src/components/ui/cart/AddressSection'
import { PaymentSection } from '@/src/components/ui/cart/PaymentSection'
import { cn } from '@/src/lib/utils'

// ============================================
// Mock Data (same as other pages for consistency)
// ============================================

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
]

const navBrands: Brand[] = [
  { id: '1', name: 'Schneider Electric', slug: 'schneider-electric' },
  { id: '2', name: 'Legrand', slug: 'legrand' },
  { id: '3', name: 'ABB', slug: 'abb' },
  { id: '4', name: 'Hager', slug: 'hager' },
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

const paymentMethodsFooter: FooterPaymentMethod[] = [
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
// Cart Page Component
// ============================================

export default function CartPage() {
  const router = useRouter()
  const [searchOpen, setSearchOpen] = useState(false)
  const [isCheckingOut, setIsCheckingOut] = useState(false)

  const {
    items,
    savedAddresses,
    selectedAddressId,
    selectedPaymentMethodId,
    note,
    itemCount,
    subtotal,
    discount,
    shipping,
    tax,
    total,
    updateQuantity,
    removeFromCart,
    clearCart,
    addAddress,
    removeAddress,
    selectAddress,
    setDefaultAddress,
    selectPaymentMethod,
    setNote,
  } = useCart()

  const handleNavigateToSearch = (query: string) => {
    setSearchOpen(false)
    router.push(`/proizvodi?q=${encodeURIComponent(query)}`)
  }

  const handleNavigateToProduct = (productId: string) => {
    setSearchOpen(false)
    router.push(`/proizvod/${productId}`)
  }

  const breadcrumbItems = [
    { label: 'Početna', href: '/' },
    { label: 'Košarica' },
  ]

  const handleCheckout = async () => {
    if (items.length === 0) return
    if (!selectedAddressId) {
      alert('Molimo odaberite adresu dostave')
      return
    }
    if (!selectedPaymentMethodId) {
      alert('Molimo odaberite način plaćanja')
      return
    }

    setIsCheckingOut(true)
    // Simulate checkout process
    await new Promise((resolve) => setTimeout(resolve, 2000))
    alert('Narudžba uspješno zaprimljena!')
    clearCart()
    setIsCheckingOut(false)
  }

  const isCheckoutDisabled =
    items.length === 0 ||
    !selectedAddressId ||
    !selectedPaymentMethodId ||
    isCheckingOut

  return (
    <div className="flex min-h-screen flex-col bg-[var(--color-bg-secondary)]">
      {/* Promo Bar */}
      <PromoBar
        message="Besplatna dostava za narudžbe preko 100 €!"
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

          {/* Page Title */}
          <div className="mb-6 lg:mb-8">
            <h1 className="text-2xl font-bold text-[var(--color-text-primary)] sm:text-3xl">
              Košarica
            </h1>
            {items.length > 0 && (
              <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
                {itemCount} {itemCount === 1 ? 'proizvod' : itemCount < 5 ? 'proizvoda' : 'proizvoda'} u košarici
              </p>
            )}
          </div>

          {/* Cart Content */}
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
            {/* Left Column - Products, Address, Payment */}
            <div className="lg:col-span-2 space-y-6">
              {/* Products List */}
              <CartProductList
                items={items}
                onQuantityChange={updateQuantity}
                onRemove={removeFromCart}
                onClearCart={clearCart}
              />

              {/* Address Section - only show if cart has items */}
              {items.length > 0 && (
                <AddressSection
                  addresses={savedAddresses}
                  selectedAddressId={selectedAddressId}
                  onSelectAddress={selectAddress}
                  onAddAddress={addAddress}
                  onRemoveAddress={removeAddress}
                  onSetDefault={setDefaultAddress}
                />
              )}

              {/* Payment Section - only show if cart has items */}
              {items.length > 0 && (
                <PaymentSection
                  selectedMethodId={selectedPaymentMethodId}
                  onSelectMethod={selectPaymentMethod}
                  note={note}
                  onNoteChange={setNote}
                />
              )}
            </div>

            {/* Right Column - Summary */}
            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-24">
                <CartSummary
                  subtotal={subtotal}
                  discount={discount}
                  shipping={shipping}
                  tax={tax}
                  total={total}
                  onCheckout={handleCheckout}
                  isCheckoutDisabled={isCheckoutDisabled}
                />

                {/* Trust badges */}
                <div className="mt-4 p-4 bg-[var(--color-bg-elevated)] rounded-[var(--radius-card)] border border-[var(--color-border-primary)]">
                  <div className="flex items-center gap-3 mb-3">
                    <TruckIcon className="h-5 w-5 text-[var(--color-primary-500)]" />
                    <div>
                      <p className="text-sm font-medium text-[var(--color-text-primary)]">
                        Brza dostava
                      </p>
                      <p className="text-xs text-[var(--color-text-secondary)]">
                        Isporuka u 1-3 radna dana
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <ReturnIcon className="h-5 w-5 text-[var(--color-primary-500)]" />
                    <div>
                      <p className="text-sm font-medium text-[var(--color-text-primary)]">
                        Povrat do 14 dana
                      </p>
                      <p className="text-xs text-[var(--color-text-secondary)]">
                        Besplatan povrat za neotvorene proizvode
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <SupportIcon className="h-5 w-5 text-[var(--color-primary-500)]" />
                    <div>
                      <p className="text-sm font-medium text-[var(--color-text-primary)]">
                        Stručna podrška
                      </p>
                      <p className="text-xs text-[var(--color-text-secondary)]">
                        Kontaktirajte nas za pomoć
                      </p>
                    </div>
                  </div>
                </div>
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
            <PaymentMethods methods={paymentMethodsFooter} colorScheme="dark" />
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

// Icons
function TruckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
    </svg>
  )
}

function ReturnIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
    </svg>
  )
}

function SupportIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  )
}

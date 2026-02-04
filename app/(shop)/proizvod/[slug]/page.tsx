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
import { Breadcrumbs } from '@/src/components/ui/Breadcrumbs'
import { Badge } from '@/src/components/ui/Badge'
import { ProductGallery } from '@/src/components/ui/ProductGallery'
import { ProductInfo } from '@/src/components/ui/ProductInfo'
import { ProductSpecifications } from '@/src/components/ui/ProductSpecifications'
import { ProductTabs } from '@/src/components/ui/ProductTabs'
import { RelatedProducts } from '@/src/components/ui/RelatedProducts/RelatedProducts'
import { BenefitsSection, type BenefitItem } from '@/src/components/ui/BenefitsSection'
import { NewsletterSection } from '@/src/components/ui/NewsletterSection'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/src/components/ui/Accordion'
import { PromoBar } from '@/src/components/ui/PromoBanner'
import {
  SearchModal,
  type RecentSearch,
  type TrendingSearch,
  type SearchResult,
} from '@/src/components/search'
import type { Product, RelatedProduct } from '@/src/types/product'
import { useCart, useAddToCart, type ProductForCart } from '@/src/lib/cart'

const navBrands: Brand[] = [
  { id: '1', name: 'Schneider Electric', slug: 'schneider-electric' },
  { id: '2', name: 'Legrand', slug: 'legrand' },
  { id: '3', name: 'ABB', slug: 'abb' },
  { id: '4', name: 'Hager', slug: 'hager' },
  { id: '5', name: 'OBO Bettermann', slug: 'obo-bettermann' },
  { id: '6', name: 'Gewiss', slug: 'gewiss' },
  { id: '7', name: 'ETI', slug: 'eti' },
  { id: '8', name: 'Phoenix Contact', slug: 'phoenix-contact' },
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
  { id: '1', query: 'Automatski osigurači 16A', timestamp: new Date() },
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

const osiguraciCategory = {
  id: 'osiguraci-zastita',
  naziv: 'Osigurači i zaštita',
  slug: 'osiguraci-zastita',
}

const automatOsiguraciCategory = {
  id: 'automatski-osiguraci',
  naziv: 'Automatski osigurači',
  slug: 'automatski-osiguraci',
  parent: osiguraciCategory,
}

const povezaniProizvodi: RelatedProduct[] = [
  {
    id: 'p1',
    sifra: '2CDS251001R0164',
    naziv: 'ABB S201 C16 Automatski osigurač, 1P, 16A',
    image: '/products/osigurac-2.svg',
    proizvodac: 'ABB',
    cijena: 11.40,
    staraCijena: 13.20,
    zaliha: 38,
    jedinica: 'kom',
  },
  {
    id: 'p2',
    sifra: '2CDS252001R0204',
    naziv: 'ABB S202 C20 Automatski osigurač, 2P, 20A',
    image: '/products/osigurac-1.svg',
    proizvodac: 'ABB',
    cijena: 14.80,
    zaliha: 26,
    jedinica: 'kom',
  },
  {
    id: 'p3',
    sifra: '2CDS252001R0104',
    naziv: 'ABB S202 C10 Automatski osigurač, 2P, 10A',
    image: '/products/osigurac-3.svg',
    proizvodac: 'ABB',
    cijena: 12.10,
    zaliha: 54,
    jedinica: 'kom',
  },
  {
    id: 'p4',
    sifra: '2CDS251001R0204',
    naziv: 'ABB S201 C20 Automatski osigurač, 1P, 20A',
    image: '/products/osigurac-2.svg',
    proizvodac: 'ABB',
    cijena: 11.90,
    zaliha: 19,
    jedinica: 'kom',
  },
  {
    id: 'p5',
    sifra: '2CDS252001R0254',
    naziv: 'ABB S202 C25 Automatski osigurač, 2P, 25A',
    image: '/products/osigurac-1.svg',
    proizvodac: 'ABB',
    cijena: 16.30,
    staraCijena: 18.00,
    zaliha: 15,
    jedinica: 'kom',
  },
]

const preporuceniProizvodi: RelatedProduct[] = [
  {
    id: 'p6',
    sifra: 'A9F74216',
    naziv: 'Schneider Acti9 iC60N C16, 2P, 6kA',
    image: '/products/osigurac-1.svg',
    proizvodac: 'SCHNEIDER',
    cijena: 17.40,
    zaliha: 42,
    jedinica: 'kom',
  },
  {
    id: 'p7',
    sifra: 'MCN216',
    naziv: 'Hager MCN216 Automatski osigurač, 2P, 16A',
    image: '/products/osigurac-2.svg',
    proizvodac: 'HAGER',
    cijena: 16.10,
    zaliha: 28,
    jedinica: 'kom',
  },
  {
    id: 'p8',
    sifra: 'EZ9F34216',
    naziv: 'Schneider Easy9 C16, 2P, 4.5kA',
    image: '/products/osigurac-3.svg',
    proizvodac: 'SCHNEIDER',
    cijena: 13.80,
    zaliha: 64,
    jedinica: 'kom',
  },
  {
    id: 'p9',
    sifra: 'FAZ-C16/2',
    naziv: 'Eaton FAZ C16/2, automatski osigurač',
    image: '/products/osigurac-1.svg',
    proizvodac: 'EATON',
    cijena: 15.90,
    zaliha: 22,
    jedinica: 'kom',
  },
]

const zamjenskiProizvodi: RelatedProduct[] = [
  {
    id: 'p10',
    sifra: 'S201-B16',
    naziv: 'ABB S201 B16 Automatski osigurač, 1P, 16A',
    image: '/products/osigurac-3.svg',
    proizvodac: 'ABB',
    cijena: 10.90,
    zaliha: 41,
    jedinica: 'kom',
  },
  {
    id: 'p11',
    sifra: 'S202-B16',
    naziv: 'ABB S202 B16 Automatski osigurač, 2P, 16A',
    image: '/products/osigurac-3.svg',
    proizvodac: 'ABB',
    cijena: 12.80,
    zaliha: 33,
    jedinica: 'kom',
  },
  {
    id: 'p12',
    sifra: 'iC60N-B16-2P',
    naziv: 'Schneider iC60N B16, 2P, 6kA',
    image: '/products/osigurac-2.svg',
    proizvodac: 'SCHNEIDER',
    cijena: 15.20,
    zaliha: 18,
    jedinica: 'kom',
  },
  {
    id: 'p13',
    sifra: 'MCN216B',
    naziv: 'Hager MCN216B Automatski osigurač, 2P, 16A',
    image: '/products/osigurac-1.svg',
    proizvodac: 'HAGER',
    cijena: 14.70,
    zaliha: 14,
    jedinica: 'kom',
  },
]

const product: Product = {
  id: 'abb-s202-c16',
  sifra: '2CDS252001R0164',
  naziv: 'ABB S202 C16 Automatski osigurač, 2-polski, 16A',
  kratakOpis:
    'Pouzdana zaštita električnih instalacija u stambenim i komercijalnim objektima. Idealno za zaštitu utičnih i rasvjetnih krugova.',
  opis: `
    <p>Automatski osigurač ABB S200 serije osigurava pouzdanu zaštitu od preopterećenja i kratkog spoja.</p>
    <ul>
      <li>Karakteristika C – pogodno za krugove s umjerenim uklopnim strujama</li>
      <li>Brza montaža na DIN šinu</li>
      <li>Visoka prekidna moć za sigurnu upotrebu</li>
      <li>Jasni indikator stanja i jednostavna manipulacija</li>
    </ul>
    <p>Namijenjeno za profesionalne instalacije gdje je pouzdanost ključna.</p>
  `,
  slike: [
    { id: 'img-1', src: '/products/osigurac-1.svg', alt: 'ABB S202 C16 - prednja strana', isPrimary: true },
    { id: 'img-2', src: '/products/osigurac-2.svg', alt: 'ABB S202 C16 - bočni prikaz' },
    { id: 'img-3', src: '/products/osigurac-3.svg', alt: 'ABB S202 C16 - detalj prekidača' },
  ],
  brend: {
    id: 'abb',
    naziv: 'ABB',
    slug: 'abb',
  },
  kategorija: automatOsiguraciCategory,
  cijena: 13.90,
  staraCijena: 16.90,
  valuta: '€',
  zaliha: 52,
  jedinica: 'kom',
  minKolicina: 1,
  korakKolicine: 1,
  ean: '4022903000000',
  proizvodacSifra: 'S202-C16',
  karakteristike: [
    { id: 'struja', naziv: 'Nazivna struja', vrijednost: '16', jedinica: 'A', grupa: 'Električne karakteristike' },
    { id: 'polovi', naziv: 'Broj polova', vrijednost: '2', grupa: 'Mehaničke karakteristike' },
    { id: 'karakteristika', naziv: 'Karakteristika', vrijednost: 'C', grupa: 'Električne karakteristike' },
    { id: 'napon', naziv: 'Nazivni napon', vrijednost: '230/400', jedinica: 'V', grupa: 'Električne karakteristike' },
    { id: 'prekidna-moc', naziv: 'Prekidna moć', vrijednost: '6', jedinica: 'kA', grupa: 'Električne karakteristike' },
    { id: 'frekvencija', naziv: 'Frekvencija', vrijednost: '50/60', jedinica: 'Hz', grupa: 'Električne karakteristike' },
    { id: 'montaza', naziv: 'Montaža', vrijednost: 'DIN šina', grupa: 'Mehaničke karakteristike' },
    { id: 'ip', naziv: 'IP zaštita', vrijednost: 'IP20', grupa: 'Mehaničke karakteristike' },
    { id: 'sirina', naziv: 'Širina', vrijednost: '35', jedinica: 'mm', grupa: 'Dimenzije' },
    { id: 'visina', naziv: 'Visina', vrijednost: '85', jedinica: 'mm', grupa: 'Dimenzije' },
    { id: 'dubina', naziv: 'Dubina', vrijednost: '69', jedinica: 'mm', grupa: 'Dimenzije' },
    { id: 'standard', naziv: 'Standard', vrijednost: 'IEC/EN 60898-1', grupa: 'Standardi' },
  ],
  dokumenti: [
    {
      id: 'doc-1',
      naziv: 'Datasheet - ABB S200 serija',
      url: '/docs/abb-s200-datasheet.pdf',
      tip: 'datasheet',
      velicina: '1.2 MB',
    },
    {
      id: 'doc-2',
      naziv: 'Upute za montažu',
      url: '/docs/abb-s200-upute.pdf',
      tip: 'manual',
      velicina: '860 KB',
    },
    {
      id: 'doc-3',
      naziv: 'Certifikat sukladnosti',
      url: '/docs/abb-s200-certifikat.pdf',
      tip: 'certificate',
      velicina: '540 KB',
    },
  ],
  prosjecnaOcjena: 4.7,
  brojRecenzija: 26,
  recenzije: [
    {
      id: 'rev-1',
      autor: 'Ivan R.',
      ocjena: 5,
      komentar: 'Odlična kvaliteta, brzo montiranje i pouzdan rad.',
      datum: new Date('2025-10-18'),
      verificiranaKupovina: true,
    },
    {
      id: 'rev-2',
      autor: 'Matej K.',
      ocjena: 4,
      komentar: 'Dobar omjer cijene i kvalitete, isporuka brza.',
      datum: new Date('2025-09-05'),
    },
  ],
  povezaniProizvodi,
  preporuceniProizvodi,
  zamjenskiProizvodi,
  tagovi: ['Bestseller', 'C karakteristika', 'DIN šina', '6 kA'],
  isNew: true,
  isOnSale: true,
  createdAt: new Date('2025-06-12'),
  updatedAt: new Date('2025-12-20'),
}

const relatedProductsIndex = new Map(
  [...povezaniProizvodi, ...preporuceniProizvodi, ...zamjenskiProizvodi].map((item) => [item.id, item])
)

const TruckIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M1 3h15v13H1zM16 8h4l3 3v5h-7V8z" />
    <circle cx="5.5" cy="18.5" r="2.5" />
    <circle cx="18.5" cy="18.5" r="2.5" />
  </svg>
)

const ShieldIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
)

const SupportIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
)

const benefits: BenefitItem[] = [
  {
    id: '1',
    title: 'Brza dostava',
    description: 'Isporuka za artikle na stanju u roku od 24-48h',
    icon: <TruckIcon />,
  },
  {
    id: '2',
    title: 'Garancija kvalitete',
    description: 'Originalni proizvodi s punom garancijom proizvođača',
    icon: <ShieldIcon />,
  },
  {
    id: '3',
    title: 'Stručna podrška',
    description: 'Savjetovanje i tehnička podrška za vaše projekte',
    icon: <SupportIcon />,
  },
]

const breadcrumbItems = [
  { label: 'Početna', href: '/' },
  { label: 'Proizvodi', href: '/proizvodi' },
  { label: osiguraciCategory.naziv, href: `/kategorija/${osiguraciCategory.slug}` },
  { label: automatOsiguraciCategory.naziv, href: `/kategorija/${automatOsiguraciCategory.slug}` },
  { label: product.naziv },
]

export default function ProductDetailPage() {
  const router = useRouter()
  const [searchOpen, setSearchOpen] = useState(false)
  const { itemCount } = useCart()
  const addToCart = useAddToCart()

  const primaryImage = product.slike.find((image) => image.isPrimary) || product.slike[0]

  const productForCart: ProductForCart = {
    id: product.id,
    sifra: product.sifra,
    naziv: product.naziv,
    image: primaryImage?.src,
    proizvodac: product.brend.naziv,
    cijena: product.cijena,
    staraCijena: product.staraCijena,
    valuta: product.valuta,
    zaliha: product.zaliha,
    jedinica: product.jedinica,
  }

  const handleAddToCart = (_id: string, quantity: number) => {
    addToCart(productForCart, quantity)
  }

  const handleAddRelatedToCart = (id: string, quantity: number) => {
    const item = relatedProductsIndex.get(id)
    if (!item) return

    addToCart(
      {
        id: item.id,
        sifra: item.sifra,
        naziv: item.naziv,
        image: item.image,
        proizvodac: item.proizvodac,
        cijena: item.cijena,
        staraCijena: item.staraCijena,
        valuta: '€',
        zaliha: item.zaliha,
        jedinica: item.jedinica || 'kom',
      },
      quantity
    )
  }

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
            <Link href="/prijava" className="hidden sm:inline-flex">
              <Button variant="primary" size="md">
                Prijava
              </Button>
            </Link>
          </HeaderActions>
        </HeaderMain>
      </Header>

      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-[var(--spacing-container-padding)] py-6 lg:py-10">
          <Breadcrumbs items={breadcrumbItems} className="mb-6" />

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
            <div className="space-y-6">
              <ProductGallery images={product.slike} productName={product.naziv} />

              <div className="rounded-[var(--radius-lg)] border border-[var(--color-border-primary)] bg-[var(--color-bg-elevated)] p-5">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-base font-semibold text-[var(--color-text-primary)]">
                    Brze karakteristike
                  </h2>
                  <Link
                    href="#detalji"
                    className="text-sm text-[var(--color-primary-600)] hover:underline"
                  >
                    Sve karakteristike
                  </Link>
                </div>
                <ProductSpecifications
                  characteristics={product.karakteristike}
                  variant="compact"
                  maxVisible={8}
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[var(--radius-lg)] border border-[var(--color-border-primary)] bg-[var(--color-bg-elevated)] p-4">
                  <p className="text-xs uppercase tracking-wide text-[var(--color-text-tertiary)]">Dostava</p>
                  <p className="mt-2 text-lg font-semibold text-[var(--color-text-primary)]">
                    24-48h
                  </p>
                  <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
                    Za artikle na stanju na području Hrvatske.
                  </p>
                </div>
                <div className="rounded-[var(--radius-lg)] border border-[var(--color-border-primary)] bg-[var(--color-bg-elevated)] p-4">
                  <p className="text-xs uppercase tracking-wide text-[var(--color-text-tertiary)]">Garancija</p>
                  <p className="mt-2 text-lg font-semibold text-[var(--color-text-primary)]">
                    24 mjeseca
                  </p>
                  <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
                    Originalni proizvodi s podrškom proizvođača.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6 lg:sticky lg:top-24 h-fit">
              <div className="flex flex-wrap gap-2">
                {product.isNew && (
                  <Badge variant="info" outline>
                    Novo
                  </Badge>
                )}
                {product.isOnSale && (
                  <Badge variant="primary">Akcija</Badge>
                )}
                <Badge variant={product.zaliha > 0 ? 'success' : 'error'} dot>
                  {product.zaliha > 0 ? 'Na stanju' : 'Na upit'}
                </Badge>
              </div>

              <ProductInfo
                product={product}
                onAddToCart={handleAddToCart}
                onAddToWishlist={(id) => console.log('Add to wishlist:', id)}
              />

              <div className="rounded-[var(--radius-lg)] border border-[var(--color-border-primary)] bg-[var(--color-bg-elevated)] p-5">
                <h3 className="text-sm font-semibold text-[var(--color-text-primary)]">
                  Sigurna kupovina
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-[var(--color-text-secondary)]">
                  <li>• Plaćanje karticama, virman ili pouzeće</li>
                  <li>• Mogućnost R1 računa</li>
                  <li>• Povrat neotvorenih proizvoda u 14 dana</li>
                </ul>
              </div>
            </div>
          </div>

          <div id="detalji" className="mt-10">
            <ProductTabs product={product} />
          </div>

          <div className="mt-10">
            <h2 className="mb-4 text-xl font-bold text-[var(--color-text-primary)]">Česta pitanja</h2>
            <div className="rounded-[var(--radius-lg)] border border-[var(--color-border-primary)] bg-[var(--color-bg-elevated)] px-4">
              <Accordion type="single" collapsible defaultValue="dostava">
                <AccordionItem value="dostava">
                  <AccordionTrigger>Koji je rok isporuke?</AccordionTrigger>
                  <AccordionContent>
                    Standardna isporuka za artikle na stanju je 24-48h. Za veće količine rok potvrđujemo po narudžbi.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="garancija">
                  <AccordionTrigger>Koja je garancija na proizvod?</AccordionTrigger>
                  <AccordionContent>
                    Garancija proizvođača iznosi 24 mjeseca uz predočenje računa.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="povrat">
                  <AccordionTrigger>Kako funkcionira povrat?</AccordionTrigger>
                  <AccordionContent>
                    Povrat neotvorenih proizvoda moguć je u roku 14 dana. Za B2B partnere vrijede ugovoreni uvjeti.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          <div className="mt-12 space-y-12">
            <RelatedProducts
              title="Povezani proizvodi"
              products={product.povezaniProizvodi || []}
              onAddToCart={handleAddRelatedToCart}
            />
            <RelatedProducts
              title="Preporučeni proizvodi"
              products={product.preporuceniProizvodi || []}
              onAddToCart={handleAddRelatedToCart}
            />
            <RelatedProducts
              title="Zamjenski proizvodi"
              products={product.zamjenskiProizvodi || []}
              variant="grid"
              onAddToCart={handleAddRelatedToCart}
            />
          </div>
        </div>

        <BenefitsSection
          benefits={benefits}
          layout="horizontal"
          background="muted"
          className="mt-16"
        />

        <NewsletterSection
          background="dark"
          layout="horizontal"
          consentText="Prijavom potvrđujete da se slažete s uvjetima korištenja i politikom privatnosti."
        />
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

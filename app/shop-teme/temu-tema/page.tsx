'use client'

import { useState } from 'react'
import Link from 'next/link'

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

// Temu components
import {
  TemuBenefitsBanner,
  TemuCTABanner,
  TemuFeaturedProducts,
  TemuPartnerBanner,
  TemuFilterTabs,
  TemuProductGrid,
  type FeaturedProduct,
  type TemuProduct,
} from '@/src/components/temu'

// Icons
import Truck01 from '@/src/components/ui/icons/Line/Maps & travel/Truck01'
import Shield01 from '@/src/components/ui/icons/Line/Security/Shield01'
import CreditCard01 from '@/src/components/ui/icons/Line/Finance & eCommerce/CreditCard01'
import Clock from '@/src/components/ui/icons/Line/Time/Clock'
import Zap from '@/src/components/ui/icons/Line/General/Zap'
import Tag01 from '@/src/components/ui/icons/Line/Finance & eCommerce/Tag01'
import Phone from '@/src/components/ui/icons/Line/Communication/Phone'

/* ============================================
   MOCK DATA - HEADER
   ============================================ */

const sampleUser: HeaderUser = {
  id: '1',
  name: 'Marko Markovic',
  email: 'marko@example.com',
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

// Visual categories for mega menu
const visualCategories: VisualCategory[] = [
  {
    id: 'istaknuto',
    name: 'Istaknuto',
    slug: 'istaknuto',
    image: 'https://picsum.photos/seed/cat1/200/200',
    children: [
      { id: 'kupatilo', name: 'Kupatilo', slug: 'kupatilo', productCount: 456, image: 'https://picsum.photos/seed/bath/200/200' },
      { id: 'tepisi', name: 'Tepisi i prostirke', slug: 'tepisi', productCount: 234, image: 'https://picsum.photos/seed/carpet/200/200' },
      { id: 'njega-kose', name: 'Njega kose', slug: 'njega-kose', productCount: 156, image: 'https://picsum.photos/seed/hair/200/200' },
      { id: 'slusaslice', name: 'Slušalice i dodaci', slug: 'slusaslice', productCount: 89, image: 'https://picsum.photos/seed/headphones/200/200', badge: { text: 'HOT', variant: 'hot' } },
      { id: 'muske-jakne', name: 'Muške jakne i kaputi', slug: 'muske-jakne', productCount: 432, image: 'https://picsum.photos/seed/jacket/200/200' },
      { id: 'brijanje', name: 'Brijanje i uklanjanje dlaka', slug: 'brijanje', productCount: 178, image: 'https://picsum.photos/seed/shave/200/200', badge: { text: 'HOT', variant: 'hot' } },
    ],
  },
  {
    id: 'kuca-kuhinja',
    name: 'Kuća i kuhinja',
    slug: 'kuca-kuhinja',
    image: 'https://picsum.photos/seed/kitchen/200/200',
    badge: { text: 'HOT', variant: 'hot' },
    children: [
      { id: 'kuhinjski-pribor', name: 'Kuhinjski pribor i potrepštine', slug: 'kuhinjski-pribor', productCount: 567, image: 'https://picsum.photos/seed/utensils/200/200', badge: { text: 'HOT', variant: 'hot' } },
      { id: 'tepisi-2', name: 'Tepisi i prostirke', slug: 'tepisi', productCount: 234, image: 'https://picsum.photos/seed/rug/200/200' },
    ],
  },
  {
    id: 'zenska-odjeca',
    name: 'Ženska odjeća',
    slug: 'zenska-odjeca',
    image: 'https://picsum.photos/seed/women/200/200',
    children: [
      { id: 'haljine', name: 'Ženske haljine', slug: 'haljine', productCount: 1234, image: 'https://picsum.photos/seed/dress/200/200', badge: { text: 'HOT', variant: 'hot' } },
      { id: 'majice-kratkih-rukava', name: 'Ženska majica kratkih rukava', slug: 'majice-kratkih-rukava', productCount: 876, image: 'https://picsum.photos/seed/tshirt/200/200' },
    ],
  },
  {
    id: 'zenska-odjeca-vece-modele',
    name: 'Ženska odjeća za veće modele',
    slug: 'zenska-odjeca-vece-modele',
    image: 'https://picsum.photos/seed/plussize/200/200',
  },
  {
    id: 'zenske-cipele',
    name: 'Ženske cipele',
    slug: 'zenske-cipele',
    image: 'https://picsum.photos/seed/wshoes/200/200',
  },
  {
    id: 'zensko-rublje',
    name: 'Žensko donje rublje i kućna odjeća',
    slug: 'zensko-rublje',
    image: 'https://picsum.photos/seed/lingerie/200/200',
  },
  {
    id: 'muska-odjeca',
    name: 'Muška odjeća',
    slug: 'muska-odjeca',
    image: 'https://picsum.photos/seed/men/200/200',
  },
  {
    id: 'muske-cipele',
    name: 'Muške cipele',
    slug: 'muske-cipele',
    image: 'https://picsum.photos/seed/mshoes/200/200',
  },
  {
    id: 'musko-rublje',
    name: 'Muško donje rublje i odjeća za spavanje',
    slug: 'musko-rublje',
    image: 'https://picsum.photos/seed/munder/200/200',
  },
  {
    id: 'sport',
    name: 'Sportske i aktivnosti na otvorenom',
    slug: 'sport',
    image: 'https://picsum.photos/seed/sport/200/200',
  },
  {
    id: 'nakit',
    name: 'Nakit i dodaci',
    slug: 'nakit',
    image: 'https://picsum.photos/seed/jewelry/200/200',
  },
  {
    id: 'ljepota',
    name: 'Ljepota i zdravlje',
    slug: 'ljepota',
    image: 'https://picsum.photos/seed/beauty/200/200',
  },
  {
    id: 'igracke',
    name: 'Igračke i igre',
    slug: 'igracke',
    image: 'https://picsum.photos/seed/toys/200/200',
  },
  {
    id: 'automoto',
    name: 'Automoto',
    slug: 'automoto',
    image: 'https://picsum.photos/seed/auto/200/200',
  },
  {
    id: 'djecija-moda',
    name: 'Dječija moda',
    slug: 'djecija-moda',
    image: 'https://picsum.photos/seed/kids/200/200',
  },
]

const featuredSubcategories: VisualSubcategory[] = [
  { id: '1', name: 'Njega kose', slug: 'njega-kose', image: 'https://picsum.photos/seed/hair/200/200', productCount: 156 },
  { id: '2', name: 'Slušalice i dodaci', slug: 'slusaslice', image: 'https://picsum.photos/seed/headphones/200/200', badge: { text: 'HOT', variant: 'hot' }, productCount: 89 },
  { id: '3', name: 'Muške jakne i kaputi', slug: 'muske-jakne', image: 'https://picsum.photos/seed/jacket/200/200', productCount: 432 },
]

const sampleBrands: Brand[] = [
  { id: '1', name: 'Samsung', slug: 'samsung' },
  { id: '2', name: 'Apple', slug: 'apple' },
  { id: '3', name: 'Sony', slug: 'sony' },
]

const browsingHistory: BrowsingHistoryProduct[] = [
  { id: '1', name: 'Bežične slušalice TWS', image: 'https://picsum.photos/seed/tws/200/200', price: 49.99, href: '/proizvod/1', brand: 'Sony' },
  { id: '2', name: 'Pamučna majica', image: 'https://picsum.photos/seed/cottontee/200/200', price: 19.99, href: '/proizvod/2', badge: 'Skoro rasprodato' },
]

const recentSearches: SearchHistoryItem[] = [
  { id: '1', query: 'bežične slušalice', timestamp: new Date(), resultCount: 156 },
  { id: '2', query: 'laptop torba', timestamp: new Date(), resultCount: 89 },
]

const trendingSearches = ['iPhone futrola', 'gaming miš', 'LED traka', 'power bank']

const trendingProducts: TrendingProduct[] = [
  {
    id: 'tp1',
    name: 'Korektor za bradu',
    image: 'https://picsum.photos/seed/beard/400/400',
    price: 4.70,
    originalPrice: 11.10,
    currency: 'KM',
    rating: 4.5,
    reviewCount: 31,
    soldCount: 1800,
    href: '/proizvod/korektor-bradu',
    isAd: true,
  },
  {
    id: 'tp2',
    name: 'Sprej za rast brade',
    image: 'https://picsum.photos/seed/beardspray/400/400',
    price: 2.30,
    originalPrice: 4.20,
    currency: 'KM',
    rating: 4.5,
    reviewCount: 58,
    soldCount: 2100,
    href: '/proizvod/sprej-brada',
    isAd: true,
  },
]

/* ============================================
   MOCK DATA - FEATURED PRODUCTS
   ============================================ */

const featuredProductsData: FeaturedProduct[] = [
  {
    id: 'fp1',
    name: 'Hybrid ANC slušalice',
    image: 'https://picsum.photos/seed/anc/400/400',
    price: 51.30,
    originalPrice: 175.60,
    currency: 'KM',
    soldCount: 59,
    href: '/proizvod/anc-slusalice',
    isAd: true,
  },
  {
    id: 'fp2',
    name: 'Ruksak za laptop',
    image: 'https://picsum.photos/seed/backpack/400/400',
    price: 28.30,
    originalPrice: 45.20,
    currency: 'KM',
    soldCount: 263,
    href: '/proizvod/ruksak-laptop',
  },
  {
    id: 'fp3',
    name: 'Running ulošci',
    image: 'https://picsum.photos/seed/insoles/400/400',
    price: 1.20,
    originalPrice: 4.00,
    currency: 'KM',
    soldCount: 39000,
    href: '/proizvod/running-ulosci',
    isAd: true,
  },
  {
    id: 'fp4',
    name: 'Smart sat',
    image: 'https://picsum.photos/seed/smartwatch2/400/400',
    price: 26.60,
    originalPrice: 50.00,
    currency: 'KM',
    soldCount: 1200,
    href: '/proizvod/smart-sat',
  },
  {
    id: 'fp5',
    name: 'Bežična punjač stanica',
    image: 'https://picsum.photos/seed/charger/400/400',
    price: 15.90,
    originalPrice: 32.00,
    currency: 'KM',
    soldCount: 850,
    href: '/proizvod/bezicni-punjac',
  },
  {
    id: 'fp6',
    name: 'USB-C Hub 7u1',
    image: 'https://picsum.photos/seed/usbhub2/400/400',
    price: 22.40,
    originalPrice: 45.00,
    currency: 'KM',
    soldCount: 2300,
    href: '/proizvod/usb-hub',
    isAd: true,
  },
]

/* ============================================
   MOCK DATA - PRODUCT GRID
   ============================================ */

const productGridData: TemuProduct[] = [
  {
    id: 'pg1',
    name: 'Veliki Noktorez sa Zaštitom od Prskanja, Ergonomski Dizajn',
    image: 'https://picsum.photos/seed/nailclipper/400/400',
    price: 2.70,
    originalPrice: 17.90,
    currency: 'KM',
    rating: 5,
    reviewCount: 3870,
    soldCount: 54000,
    href: '/proizvod/noktorez',
    isBestseller: true,
    bestsellerLabel: 'Najprodavaniji artikal u Njega noktiju',
    additionalDiscount: 0.60,
    discountEndTime: new Date(Date.now() + 12 * 60 * 60 * 1000),
  },
  {
    id: 'pg2',
    name: 'Prag Klavirski Stil Visokotlačna Tuš Glava sa Crijevom',
    image: 'https://picsum.photos/seed/showerhead/400/400',
    price: 12.60,
    originalPrice: 52.70,
    currency: 'KM',
    rating: 4.5,
    reviewCount: 3402,
    soldCount: 24000,
    href: '/proizvod/tus-glava',
    isAd: true,
    additionalDiscount: 3.10,
    discountEndTime: new Date(Date.now() + 11 * 60 * 60 * 1000),
  },
  {
    id: 'pg3',
    name: 'Električni masažer za stopala',
    image: 'https://picsum.photos/seed/footmass/400/400',
    price: 18.90,
    originalPrice: 45.00,
    currency: 'KM',
    rating: 4.8,
    reviewCount: 1256,
    soldCount: 8500,
    href: '/proizvod/masazer-stopala',
    isBestseller: true,
    bestsellerLabel: 'Najprodavaniji artikal',
  },
  {
    id: 'pg4',
    name: 'LED noćna lampa sa senzorom pokreta',
    image: 'https://picsum.photos/seed/nightlamp/400/400',
    price: 5.40,
    originalPrice: 12.00,
    currency: 'KM',
    rating: 4.6,
    reviewCount: 2890,
    soldCount: 15000,
    href: '/proizvod/nocna-lampa',
    additionalDiscount: 1.20,
    discountEndTime: new Date(Date.now() + 8 * 60 * 60 * 1000),
  },
  {
    id: 'pg5',
    name: 'Silikonska zaštita za iPhone 15 Pro',
    image: 'https://picsum.photos/seed/iphonecase/400/400',
    price: 3.20,
    originalPrice: 8.50,
    currency: 'KM',
    rating: 4.7,
    reviewCount: 5420,
    soldCount: 32000,
    href: '/proizvod/iphone-maska',
    isAd: true,
  },
  {
    id: 'pg6',
    name: 'Bežične slušalice TWS Pro',
    image: 'https://picsum.photos/seed/twspro/400/400',
    price: 24.90,
    originalPrice: 65.00,
    currency: 'KM',
    rating: 4.4,
    reviewCount: 892,
    soldCount: 4200,
    href: '/proizvod/tws-pro',
    isBestseller: true,
    bestsellerLabel: 'Top prodaja u Slušalice',
  },
  {
    id: 'pg7',
    name: 'Organizer za kozmetiku sa ogledalom',
    image: 'https://picsum.photos/seed/organizer/400/400',
    price: 8.70,
    originalPrice: 22.00,
    currency: 'KM',
    rating: 4.9,
    reviewCount: 1567,
    soldCount: 9800,
    href: '/proizvod/kozmeticki-organizer',
  },
  {
    id: 'pg8',
    name: 'Mini projektor Full HD 1080p',
    image: 'https://picsum.photos/seed/projector/400/400',
    price: 89.00,
    originalPrice: 199.00,
    currency: 'KM',
    rating: 4.3,
    reviewCount: 456,
    soldCount: 1200,
    href: '/proizvod/mini-projektor',
    isAd: true,
    additionalDiscount: 15.00,
    discountEndTime: new Date(Date.now() + 6 * 60 * 60 * 1000),
  },
  {
    id: 'pg9',
    name: 'Automatski dozator sapuna',
    image: 'https://picsum.photos/seed/soapdisp/400/400',
    price: 11.50,
    originalPrice: 28.00,
    currency: 'KM',
    rating: 4.6,
    reviewCount: 2145,
    soldCount: 18000,
    href: '/proizvod/dozator-sapuna',
  },
  {
    id: 'pg10',
    name: 'Gaming miš RGB 12000 DPI',
    image: 'https://picsum.photos/seed/gamingmouse/400/400',
    price: 15.90,
    originalPrice: 42.00,
    currency: 'KM',
    rating: 4.5,
    reviewCount: 3200,
    soldCount: 22000,
    href: '/proizvod/gaming-mis',
    isBestseller: true,
    bestsellerLabel: 'Top u Gaming oprema',
  },
  {
    id: 'pg11',
    name: 'Posuda za hranu sa 3 pretinca',
    image: 'https://picsum.photos/seed/lunchbox/400/400',
    price: 6.80,
    originalPrice: 15.00,
    currency: 'KM',
    rating: 4.7,
    reviewCount: 1890,
    soldCount: 14000,
    href: '/proizvod/posuda-hrana',
    additionalDiscount: 1.50,
    discountEndTime: new Date(Date.now() + 9 * 60 * 60 * 1000),
  },
  {
    id: 'pg12',
    name: 'Prijenosni ventilator USB',
    image: 'https://picsum.photos/seed/usbfan/400/400',
    price: 4.20,
    originalPrice: 9.90,
    currency: 'KM',
    rating: 4.4,
    reviewCount: 4500,
    soldCount: 35000,
    href: '/proizvod/usb-ventilator',
    isAd: true,
  },
  {
    id: 'pg13',
    name: 'Bluetooth zvučnik vodootporni',
    image: 'https://picsum.photos/seed/btspeaker/400/400',
    price: 19.90,
    originalPrice: 55.00,
    currency: 'KM',
    rating: 4.8,
    reviewCount: 2678,
    soldCount: 11000,
    href: '/proizvod/bluetooth-zvucnik',
    isBestseller: true,
    bestsellerLabel: 'Najprodavaniji u Zvučnici',
  },
  {
    id: 'pg14',
    name: 'Set alata za kućne popravke 45kom',
    image: 'https://picsum.photos/seed/toolkit/400/400',
    price: 22.50,
    originalPrice: 58.00,
    currency: 'KM',
    rating: 4.6,
    reviewCount: 987,
    soldCount: 5600,
    href: '/proizvod/set-alata',
  },
  {
    id: 'pg15',
    name: 'Držač za mobitel u autu',
    image: 'https://picsum.photos/seed/carholder/400/400',
    price: 7.90,
    originalPrice: 18.00,
    currency: 'KM',
    rating: 4.5,
    reviewCount: 6200,
    soldCount: 42000,
    href: '/proizvod/drzac-mobitel',
    additionalDiscount: 2.00,
    discountEndTime: new Date(Date.now() + 5 * 60 * 60 * 1000),
  },
  {
    id: 'pg16',
    name: 'Električna četka za lice',
    image: 'https://picsum.photos/seed/facebrush/400/400',
    price: 14.50,
    originalPrice: 38.00,
    currency: 'KM',
    rating: 4.7,
    reviewCount: 1456,
    soldCount: 8900,
    href: '/proizvod/cetka-lice',
    isAd: true,
  },
  {
    id: 'pg17',
    name: 'Laptop stalak podesivi aluminij',
    image: 'https://picsum.photos/seed/laptopstand/400/400',
    price: 18.90,
    originalPrice: 45.00,
    currency: 'KM',
    rating: 4.9,
    reviewCount: 2100,
    soldCount: 7500,
    href: '/proizvod/laptop-stalak',
    isBestseller: true,
    bestsellerLabel: 'Top prodaja',
  },
  {
    id: 'pg18',
    name: 'LED traka RGB 5m sa daljinskim',
    image: 'https://picsum.photos/seed/ledstrip/400/400',
    price: 9.90,
    originalPrice: 24.00,
    currency: 'KM',
    rating: 4.4,
    reviewCount: 5800,
    soldCount: 45000,
    href: '/proizvod/led-traka',
  },
  {
    id: 'pg19',
    name: 'Termo boca od nehrđajućeg čelika 500ml',
    image: 'https://picsum.photos/seed/thermobottle/400/400',
    price: 8.50,
    originalPrice: 22.00,
    currency: 'KM',
    rating: 4.8,
    reviewCount: 3400,
    soldCount: 28000,
    href: '/proizvod/termo-boca',
    additionalDiscount: 2.50,
    discountEndTime: new Date(Date.now() + 7 * 60 * 60 * 1000),
  },
  {
    id: 'pg20',
    name: 'Sklopivi ruksak za putovanja',
    image: 'https://picsum.photos/seed/foldbackpack/400/400',
    price: 12.90,
    originalPrice: 32.00,
    currency: 'KM',
    rating: 4.6,
    reviewCount: 1890,
    soldCount: 12000,
    href: '/proizvod/sklopivi-ruksak',
    isAd: true,
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

export default function TemuTemaPage() {
  const [activeFilter, setActiveFilter] = useState('all')

  const handleAddToCart = (productId: string) => {
    console.log('Dodano u korpu:', productId)
    // TODO: Implementirati logiku dodavanja u korpu
  }

  const handleSearch = (query: string) => {
    console.log('Pretraga:', query)
    // TODO: Implementirati logiku pretrage
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
        cartCount={5}
        contact={{ phone: '+387 33 123 456', email: 'info@elektromaterijal.net', workingHours: 'Pon-Pet: 08-17h' }}
        onSearch={handleSearch}
        onLogout={() => console.log('Odjava')}
        sticky
      />

      {/* Main Content */}
      <main className="flex-1 max-w-[var(--container-max-width)] mx-auto w-full">
        {/* Benefits Banner */}
        <TemuBenefitsBanner />

        {/* CTA Banner */}
        <TemuCTABanner
          title="Zašto odabrati elektromaterijal.net?"
          rightText="Sigurna privatnost"
          rightHref="/privatnost"
        />

        {/* Featured Products */}
        <TemuFeaturedProducts
          title="Najpoželjniji artikli"
          products={featuredProductsData}
          viewAllHref="/najpozeljniji"
        />

        {/* Partner Banner */}
        <TemuPartnerBanner
          leftLogo="ELEKTROMATERIJAL"
          rightLogo="BRZA POŠTA"
          text="Zajedno za bolju isporuku"
          href="/isporuka"
        />

        {/* Filter Tabs */}
        <TemuFilterTabs
          defaultTab="all"
          onChange={setActiveFilter}
        />

        {/* Product Grid */}
        <TemuProductGrid
          products={productGridData}
          columns={5}
          onAddToCart={handleAddToCart}
          showLoadMore
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

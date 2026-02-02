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
  type Category,
  type Brand,
  type Service,
  type NavigationItem,
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
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/src/components/ui/Tabs'
import { ProductTable, type ProductTableItem } from '@/src/components/ui/ProductTable'
import { HeroBanner } from '@/src/components/ui/HeroBanner'
import { CategoryGrid, type CategoryItem } from '@/src/components/ui/CategoryGrid'
import { FeaturedBrands, type BrandItem } from '@/src/components/ui/FeaturedBrands'
import { BenefitsSection, type BenefitItem } from '@/src/components/ui/BenefitsSection'
import { NewsletterSection } from '@/src/components/ui/NewsletterSection'
import { PromoBanner, PromoBar } from '@/src/components/ui/PromoBanner'

// Icons for categories and benefits (using simple SVG placeholders)
const CableIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2v6m0 8v6M4.93 4.93l4.24 4.24m5.66 5.66l4.24 4.24M2 12h6m8 0h6M4.93 19.07l4.24-4.24m5.66-5.66l4.24-4.24" />
  </svg>
)

const LightbulbIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.9V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.1A7 7 0 0 0 12 2z" />
  </svg>
)

const SwitchIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="6" width="18" height="12" rx="2" />
    <circle cx="8" cy="12" r="2" />
    <path d="M14 12h4" />
  </svg>
)

const FuseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="6" y="3" width="12" height="18" rx="2" />
    <path d="M10 8h4M10 12h4M10 16h4" />
  </svg>
)

const ToolIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
)

const PanelIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M3 9h18M9 21V9" />
  </svg>
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

const WalletIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2" />
    <path d="M16 12h4v4h-4a2 2 0 0 1 0-4z" />
  </svg>
)

const BoxIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
)

const ClockIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
)

// Navigation categories (3 levels for MegaMenu)
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

// Brands for MegaMenu
const navBrands: Brand[] = [
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

// Services for navigation
const navServices: Service[] = [
  {
    id: '1',
    title: 'Isporuka',
    description: 'Brza dostava na vašu adresu',
    href: '/usluge/isporuka',
    icon: <TruckIcon />,
  },
  {
    id: '2',
    title: 'Tehnička podrška',
    description: 'Stručni savjeti i pomoć',
    href: '/usluge/tehnicka-podrska',
    icon: <SupportIcon />,
  },
  {
    id: '3',
    title: 'Projektiranje',
    description: 'Izrada projekata i specifikacija',
    href: '/usluge/projektiranje',
    icon: <PanelIcon />,
  },
  {
    id: '4',
    title: 'Shop podrška',
    description: 'Vaša mini prodavnica',
    href: '/usluge/shop-podrska',
    icon: <BoxIcon />,
  },
]

// Navigation items for MainNavigation
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

const contactInfo = {
  phone: '+385 1 234 5678',
  email: 'info@elektromaterijal.net',
  workingHours: 'Pon-Pet: 08-17h',
}

// Product categories for grid
const productCategories: CategoryItem[] = [
  {
    id: '1',
    name: 'Kablovi i vodiči',
    slug: 'kablovi',
    description: 'NYM, PP, H05VV-F, koaksijalni i ostali kablovi',
    icon: <CableIcon />,
    productCount: 2450,
  },
  {
    id: '2',
    name: 'Rasvjeta',
    slug: 'rasvjeta',
    description: 'LED paneli, reflektori, lusteri, žarulje',
    icon: <LightbulbIcon />,
    productCount: 1820,
  },
  {
    id: '3',
    name: 'Prekidači i utičnice',
    slug: 'prekidaci-uticnice',
    description: 'Modularni, nadžbukni, podžbukni sustavi',
    icon: <SwitchIcon />,
    productCount: 3150,
  },
  {
    id: '4',
    name: 'Osigurači i zaštita',
    slug: 'osiguraci',
    description: 'Automatski osigurači, FID sklopke, odvodnici',
    icon: <FuseIcon />,
    productCount: 890,
  },
  {
    id: '5',
    name: 'Razvodni ormari',
    slug: 'razvodni-ormari',
    description: 'Plastični i metalni ormari, kutije',
    icon: <PanelIcon />,
    productCount: 560,
  },
  {
    id: '6',
    name: 'Alati i oprema',
    slug: 'alati',
    description: 'Ručni alati, mjerni instrumenti, ljestve',
    icon: <ToolIcon />,
    productCount: 1240,
  },
]

// Featured brands
const featuredBrands: BrandItem[] = [
  { id: '1', name: 'ABB', slug: 'abb', productCount: 1250 },
  { id: '2', name: 'Legrand', slug: 'legrand', productCount: 2100 },
  { id: '3', name: 'Schneider', slug: 'schneider', productCount: 1800 },
  { id: '4', name: 'Philips', slug: 'philips', productCount: 950 },
  { id: '5', name: 'Hager', slug: 'hager', productCount: 780 },
  { id: '6', name: 'OBO Bettermann', slug: 'obo', productCount: 620 },
]

// Benefits
const benefits: BenefitItem[] = [
  {
    id: '1',
    title: 'Brza dostava',
    description: 'Isporuka u roku od 24-48h na području cijele Hrvatske',
    icon: <TruckIcon />,
  },
  {
    id: '2',
    title: 'Garancija kvalitete',
    description: 'Svi proizvodi su originalni s punom garancijom proizvođača',
    icon: <ShieldIcon />,
  },
  {
    id: '3',
    title: 'Stručna podrška',
    description: 'Tim stručnjaka na raspolaganju za tehničke konzultacije',
    icon: <SupportIcon />,
  },
  {
    id: '4',
    title: 'B2B uvjeti',
    description: 'Posebne cijene i uvjeti plaćanja za registrirane partnere',
    icon: <WalletIcon />,
  },
  {
    id: '5',
    title: 'Velika zaliha',
    description: 'Preko 50.000 artikala dostupno odmah iz našeg skladišta',
    icon: <BoxIcon />,
  },
  {
    id: '6',
    title: 'Radno vrijeme',
    description: 'Radimo za vas od ponedjeljka do petka, 08:00 - 17:00h',
    icon: <ClockIcon />,
  },
]

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
  }

  return (
    <div className="flex min-h-screen flex-col bg-[var(--color-bg-primary)]">
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
      <main className="flex-1">
        {/* Hero Banner */}
        <HeroBanner
          badge="Novi katalog 2026"
          title="Profesionalni elektromaterijal"
          highlight="za svaki projekt"
          subtitle="Više od 50.000 proizvoda vodećih svjetskih proizvođača. Brza dostava, stručna podrška i konkurentne cijene za B2B partnere."
          primaryAction={{
            label: 'Pogledaj katalog',
            href: '/proizvodi',
          }}
          secondaryAction={{
            label: 'B2B registracija',
            href: '/b2b/registracija',
          }}
          size="lg"
          stats={[
            { value: '50.000+', label: 'Proizvoda' },
            { value: '30', label: 'Brendova' },
            { value: '24/48h', label: 'Dostava' },
            { value: '15+', label: 'Godina iskustva' },
          ]}
        />

        {/* Benefits Strip */}
        <BenefitsSection
          benefits={benefits}
          layout="horizontal"
          background="muted"
          className="py-8"
        />

        {/* Product Categories */}
        <CategoryGrid
          categories={productCategories}
          title="Kategorije proizvoda"
          subtitle="Pronađite sve što vam treba za vaš električni projekt"
          columns={3}
          variant="card"
        />

        {/* Product Table with Tabs */}
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-[var(--spacing-container-padding)]">
            <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <h2 className="mb-2 text-2xl font-bold text-[var(--color-text-primary)] sm:text-3xl">
                  Istaknuti proizvodi
                </h2>
                <p className="text-[var(--color-text-secondary)]">
                  Najprodavaniji artikli i trenutne akcije
                </p>
              </div>
              <Link href="/proizvodi">
                <Button variant="outline">
                  Pogledaj sve proizvode &rarr;
                </Button>
              </Link>
            </div>

            <Tabs defaultValue="akcija">
              <TabsList>
                <TabsTrigger value="akcija">Akcija</TabsTrigger>
                <TabsTrigger value="novi">Novi proizvodi</TabsTrigger>
                <TabsTrigger value="preporuceno">Preporučeno</TabsTrigger>
                <TabsTrigger value="najprodavanije">Najprodavanije</TabsTrigger>
              </TabsList>
              <TabsContent value="akcija">
                <ProductTable
                  items={akcijskiProizvodi}
                  onAddToCart={(item, qty) => console.log('Dodano u korpu:', qty, 'x', item.naziv)}
                />
              </TabsContent>
              <TabsContent value="novi">
                <ProductTable
                  items={noviProizvodi}
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
        </section>

        {/* Promo Banner */}
        <PromoBanner
          badge="B2B Partneri"
          title="Posebne cijene za registrirane partnere"
          subtitle="Registrirajte svoju firmu i ostvarite pristup veleprodajnim cijenama, odgođenom plaćanju i prioritetnoj dostavi."
          action={{
            label: 'Registriraj firmu',
            href: '/b2b/registracija',
          }}
          backgroundColor="gradient"
          size="md"
        />

        {/* Featured Brands */}
        <FeaturedBrands
          brands={featuredBrands}
          title="Naši brendovi"
          subtitle="Surađujemo s vodećim svjetskim proizvođačima elektromaterijala"
          viewAllHref="/brendovi"
          background="light"
        />

        {/* Newsletter */}
        <NewsletterSection
          title="Budite u toku"
          subtitle="Prijavite se na newsletter i prvi saznajte za nove proizvode, akcije i ekskluzivne ponude."
          buttonText="Prijavi se"
          background="dark"
          consentText="Prijavom prihvaćate našu politiku privatnosti. Možete se odjaviti u bilo kojem trenutku."
          onSubmit={async (email) => {
            console.log('Newsletter signup:', email)
          }}
        />
      </main>

      {/* Footer */}
      <Footer variant="dark">
        <div className="mb-12 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          <div className="sm:col-span-2 md:col-span-3 lg:col-span-1">
            <FooterBrand
              name="ELEKTROMATERIJAL.net"
              tagline="#elektromaterijal #sve #odmah"
              description="Vaš pouzdani partner za elektromaterijal u Hrvatskoj. Brza dostava, kvalitetni proizvodi, stručna podrška."
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

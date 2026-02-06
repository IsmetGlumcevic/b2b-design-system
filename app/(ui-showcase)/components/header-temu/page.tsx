'use client'

import { useState } from 'react'
import {
  // Slot Components
  PromoTopBar,
  BenefitsBar,
  TrustBar,
  QuickLinksRow,
  CountdownBanner,
  // Visual Mega Menu
  VisualMegaMenu,
  VisualCategoryCard,
  // Account Components
  RichAccountDropdown,
  BrowsingHistoryPanel,
  // Search Components
  SearchWithHistory,
  // Mobile Components
  MobileMinimalHeader,
  MobileCategorySidebar,
  // Presets
  TemuHeader,
  // Types
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

// Icons
import Truck01 from '@/src/components/ui/icons/Line/Maps & travel/Truck01'
import Shield01 from '@/src/components/ui/icons/Line/Security/Shield01'
import CreditCard01 from '@/src/components/ui/icons/Line/Finance & eCommerce/CreditCard01'
import Clock from '@/src/components/ui/icons/Line/Time/Clock'
import Zap from '@/src/components/ui/icons/Line/General/Zap'
import Tag01 from '@/src/components/ui/icons/Line/Finance & eCommerce/Tag01'
import Phone from '@/src/components/ui/icons/Line/Communication/Phone'

export default function HeaderTemuShowcasePage() {
  const [megaMenuOpen, setMegaMenuOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Sample user
  const sampleUser: HeaderUser = {
    id: '1',
    name: 'Marko Markovic',
    email: 'marko@example.com',
    customerId: 'B2B-12345',
  }

  // Sample promo messages
  const promoMessages: PromoMessage[] = [
    {
      id: '1',
      text: 'Besplatna dostava za narudžbe preko 100 KM',
      icon: <Truck01 className="w-4 h-4" />,
    },
    {
      id: '2',
      text: 'Ljetnja akcija - do 50% popusta',
      badge: 'SALE',
      highlight: true,
    },
    {
      id: '3',
      text: 'Garancija povrata u roku od 30 dana',
      icon: <Shield01 className="w-4 h-4" />,
    },
    {
      id: '4',
      text: 'Sigurno plaćanje karticama',
      icon: <CreditCard01 className="w-4 h-4" />,
    },
  ]

  // Sample benefits
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
    {
      id: '3',
      icon: <Shield01 className="w-5 h-5" />,
      title: 'Garancija isporuke',
      subtitle: 'Povrat novca za probleme',
    },
    {
      id: '4',
      icon: <Phone className="w-5 h-5" />,
      title: 'Preuzmite aplikaciju',
      subtitle: 'iOS & Android',
      href: '/aplikacija',
    },
  ]

  // Sample trust badges
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

  // Sample quick links
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

  // Sample visual categories - Rich data like TEMU
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
        { id: 'licna-njega', name: 'Proizvodi za ličnu njegu', slug: 'licna-njega', productCount: 567, image: 'https://picsum.photos/seed/care/200/200' },
        { id: 'radni-stolovi', name: 'Radni stolovi i radne stanice', slug: 'radni-stolovi', productCount: 123, image: 'https://picsum.photos/seed/desk/200/200' },
        { id: 'dekoracija-doma', name: 'Proizvodi za dekoraciju doma', slug: 'dekoracija-doma', productCount: 890, image: 'https://picsum.photos/seed/decor/200/200', badge: { text: 'HOT', variant: 'hot' } },
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
        { id: 'posteljina', name: 'Posteljina', slug: 'posteljina', productCount: 345, image: 'https://picsum.photos/seed/bedding/200/200' },
        { id: 'dekoracija', name: 'Dekoracija', slug: 'dekoracija', productCount: 678, image: 'https://picsum.photos/seed/homedecor/200/200' },
        { id: 'osvjetljenje', name: 'Osvjetljenje', slug: 'osvjetljenje', productCount: 234, image: 'https://picsum.photos/seed/lighting/200/200', badge: { text: 'NEW', variant: 'new' } },
        { id: 'organizacija', name: 'Organizacija i skladištenje', slug: 'organizacija', productCount: 456, image: 'https://picsum.photos/seed/storage/200/200' },
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
        { id: 'dvodijelni-setovi', name: 'Ženski dvodijelni setovi', slug: 'dvodijelni-setovi', productCount: 345, image: 'https://picsum.photos/seed/set/200/200' },
        { id: 'kaputi-jakne', name: 'Ženski kaputi i jakne', slug: 'kaputi-jakne', productCount: 567, image: 'https://picsum.photos/seed/coat/200/200' },
        { id: 'bluze', name: 'Ženske bluze', slug: 'bluze', productCount: 432, image: 'https://picsum.photos/seed/blouse/200/200' },
        { id: 'hlace', name: 'Ženske hlače', slug: 'hlace', productCount: 654, image: 'https://picsum.photos/seed/pants/200/200' },
      ],
    },
    {
      id: 'zenska-odjeca-vece-modele',
      name: 'Ženska odjeća za veće modele',
      slug: 'zenska-odjeca-vece-modele',
      image: 'https://picsum.photos/seed/plussize/200/200',
      children: [
        { id: 'haljine-plus', name: 'Haljine plus size', slug: 'haljine-plus', productCount: 234, image: 'https://picsum.photos/seed/plusdress/200/200' },
        { id: 'bluze-plus', name: 'Bluze plus size', slug: 'bluze-plus', productCount: 178, image: 'https://picsum.photos/seed/plusblouse/200/200' },
        { id: 'hlace-plus', name: 'Hlače plus size', slug: 'hlace-plus', productCount: 156, image: 'https://picsum.photos/seed/pluspants/200/200' },
      ],
    },
    {
      id: 'zenske-cipele',
      name: 'Ženske cipele',
      slug: 'zenske-cipele',
      image: 'https://picsum.photos/seed/wshoes/200/200',
      children: [
        { id: 'stikle', name: 'Štikle', slug: 'stikle', productCount: 345, image: 'https://picsum.photos/seed/heels/200/200', badge: { text: 'HOT', variant: 'hot' } },
        { id: 'sandale', name: 'Sandale', slug: 'sandale', productCount: 456, image: 'https://picsum.photos/seed/sandals/200/200' },
        { id: 'patike-zenske', name: 'Patike', slug: 'patike-zenske', productCount: 567, image: 'https://picsum.photos/seed/sneakers/200/200' },
        { id: 'cizme', name: 'Čizme', slug: 'cizme', productCount: 234, image: 'https://picsum.photos/seed/boots/200/200' },
      ],
    },
    {
      id: 'zensko-rublje',
      name: 'Žensko donje rublje i kućna odjeća',
      slug: 'zensko-rublje',
      image: 'https://picsum.photos/seed/lingerie/200/200',
      children: [
        { id: 'grudnjaci', name: 'Grudnjaci', slug: 'grudnjaci', productCount: 567, image: 'https://picsum.photos/seed/bra/200/200' },
        { id: 'gacice', name: 'Gaćice', slug: 'gacice', productCount: 678, image: 'https://picsum.photos/seed/underwear/200/200' },
        { id: 'pidzame', name: 'Pidžame', slug: 'pidzame', productCount: 234, image: 'https://picsum.photos/seed/pajamas/200/200' },
        { id: 'ogrtaci', name: 'Ogrtači', slug: 'ogrtaci', productCount: 123, image: 'https://picsum.photos/seed/robe/200/200', badge: { text: 'NEW', variant: 'new' } },
      ],
    },
    {
      id: 'muska-odjeca',
      name: 'Muška odjeća',
      slug: 'muska-odjeca',
      image: 'https://picsum.photos/seed/men/200/200',
      badge: { text: 'NEW', variant: 'new' },
      children: [
        { id: 'jakne', name: 'Muške jakne i kaputi', slug: 'jakne', productCount: 432, image: 'https://picsum.photos/seed/mjacket/200/200' },
        { id: 'majice', name: 'Muške majice', slug: 'majice', productCount: 765, image: 'https://picsum.photos/seed/mshirt/200/200' },
        { id: 'sportska-odjeca', name: 'Muška sportska odjeća', slug: 'sportska-odjeca', productCount: 345, image: 'https://picsum.photos/seed/sports/200/200', badge: { text: 'HOT', variant: 'hot' } },
        { id: 'hlace-muske', name: 'Muške hlače', slug: 'hlace-muske', productCount: 456, image: 'https://picsum.photos/seed/mpants/200/200' },
        { id: 'kosutlje', name: 'Košulje', slug: 'kosutlje', productCount: 234, image: 'https://picsum.photos/seed/shirt/200/200' },
        { id: 'dzemperi', name: 'Džemperi', slug: 'dzemperi', productCount: 178, image: 'https://picsum.photos/seed/sweater/200/200' },
      ],
    },
    {
      id: 'muske-cipele',
      name: 'Muške cipele',
      slug: 'muske-cipele',
      image: 'https://picsum.photos/seed/mshoes/200/200',
      children: [
        { id: 'patike-muske', name: 'Patike', slug: 'patike-muske', productCount: 567, image: 'https://picsum.photos/seed/msneakers/200/200' },
        { id: 'cipele-elegantne', name: 'Elegantne cipele', slug: 'cipele-elegantne', productCount: 234, image: 'https://picsum.photos/seed/formal/200/200' },
        { id: 'sandale-muske', name: 'Sandale', slug: 'sandale-muske', productCount: 156, image: 'https://picsum.photos/seed/msandals/200/200' },
      ],
    },
    {
      id: 'musko-rublje',
      name: 'Muško donje rublje i odjeća za spavanje',
      slug: 'musko-rublje',
      image: 'https://picsum.photos/seed/munder/200/200',
      children: [
        { id: 'bokserice', name: 'Bokserice', slug: 'bokserice', productCount: 345, image: 'https://picsum.photos/seed/boxers/200/200' },
        { id: 'carape', name: 'Čarape', slug: 'carape', productCount: 234, image: 'https://picsum.photos/seed/socks/200/200' },
        { id: 'pidzame-muske', name: 'Pidžame', slug: 'pidzame-muske', productCount: 123, image: 'https://picsum.photos/seed/mpajamas/200/200' },
      ],
    },
    {
      id: 'sport',
      name: 'Sportske i aktivnosti na otvorenom',
      slug: 'sport',
      image: 'https://picsum.photos/seed/sport/200/200',
      children: [
        { id: 'fitness', name: 'Fitness oprema', slug: 'fitness', productCount: 456, image: 'https://picsum.photos/seed/fitness/200/200', badge: { text: 'HOT', variant: 'hot' } },
        { id: 'kampiranje', name: 'Kampiranje', slug: 'kampiranje', productCount: 234, image: 'https://picsum.photos/seed/camping/200/200' },
        { id: 'biciklizam', name: 'Biciklizam', slug: 'biciklizam', productCount: 178, image: 'https://picsum.photos/seed/cycling/200/200' },
        { id: 'ribolov', name: 'Ribolov', slug: 'ribolov', productCount: 123, image: 'https://picsum.photos/seed/fishing/200/200' },
      ],
    },
    {
      id: 'nakit',
      name: 'Nakit i dodaci',
      slug: 'nakit',
      image: 'https://picsum.photos/seed/jewelry/200/200',
      children: [
        { id: 'zenski-nakit', name: 'Ženski nakit', slug: 'zenski-nakit', productCount: 890, image: 'https://picsum.photos/seed/wjewelry/200/200', badge: { text: 'HOT', variant: 'hot' } },
        { id: 'muski-nakit', name: 'Muški nakit', slug: 'muski-nakit', productCount: 234, image: 'https://picsum.photos/seed/mjewelry/200/200' },
        { id: 'satovi', name: 'Satovi', slug: 'satovi', productCount: 345, image: 'https://picsum.photos/seed/watches/200/200' },
        { id: 'torbe', name: 'Torbe', slug: 'torbe', productCount: 567, image: 'https://picsum.photos/seed/bags/200/200' },
        { id: 'naocale', name: 'Naočale', slug: 'naocale', productCount: 234, image: 'https://picsum.photos/seed/glasses/200/200', badge: { text: 'NEW', variant: 'new' } },
      ],
    },
    {
      id: 'ljepota',
      name: 'Ljepota i zdravlje',
      slug: 'ljepota',
      image: 'https://picsum.photos/seed/beauty/200/200',
      children: [
        { id: 'njega-lica', name: 'Njega lica', slug: 'njega-lica', productCount: 678, image: 'https://picsum.photos/seed/skincare/200/200' },
        { id: 'sminka', name: 'Šminka', slug: 'sminka', productCount: 890, image: 'https://picsum.photos/seed/makeup/200/200', badge: { text: 'HOT', variant: 'hot' } },
        { id: 'parfemi', name: 'Parfemi', slug: 'parfemi', productCount: 345, image: 'https://picsum.photos/seed/perfume/200/200' },
        { id: 'njega-tijela', name: 'Njega tijela', slug: 'njega-tijela', productCount: 456, image: 'https://picsum.photos/seed/bodycare/200/200' },
      ],
    },
    {
      id: 'igracke',
      name: 'Igračke i igre',
      slug: 'igracke',
      image: 'https://picsum.photos/seed/toys/200/200',
      children: [
        { id: 'plisane-igracke', name: 'Plišane igračke', slug: 'plisane-igracke', productCount: 345, image: 'https://picsum.photos/seed/plush/200/200' },
        { id: 'lego', name: 'Lego i kocke', slug: 'lego', productCount: 234, image: 'https://picsum.photos/seed/lego/200/200', badge: { text: 'HOT', variant: 'hot' } },
        { id: 'puzzle', name: 'Puzzle', slug: 'puzzle', productCount: 178, image: 'https://picsum.photos/seed/puzzle/200/200' },
        { id: 'drustvene-igre', name: 'Društvene igre', slug: 'drustvene-igre', productCount: 123, image: 'https://picsum.photos/seed/games/200/200' },
      ],
    },
    {
      id: 'automoto',
      name: 'Automoto',
      slug: 'automoto',
      image: 'https://picsum.photos/seed/auto/200/200',
      children: [
        { id: 'auto-dijelovi', name: 'Auto dijelovi', slug: 'auto-dijelovi', productCount: 567, image: 'https://picsum.photos/seed/carparts/200/200' },
        { id: 'auto-oprema', name: 'Auto oprema', slug: 'auto-oprema', productCount: 345, image: 'https://picsum.photos/seed/caracc/200/200' },
        { id: 'moto-oprema', name: 'Moto oprema', slug: 'moto-oprema', productCount: 234, image: 'https://picsum.photos/seed/moto/200/200' },
      ],
    },
    {
      id: 'djecija-moda',
      name: 'Dječija moda',
      slug: 'djecija-moda',
      image: 'https://picsum.photos/seed/kids/200/200',
      children: [
        { id: 'djecaci-odjeca', name: 'Odjeća za dječake', slug: 'djecaci-odjeca', productCount: 456, image: 'https://picsum.photos/seed/boys/200/200' },
        { id: 'djevojcice-odjeca', name: 'Odjeća za djevojčice', slug: 'djevojcice-odjeca', productCount: 567, image: 'https://picsum.photos/seed/girls/200/200', badge: { text: 'NEW', variant: 'new' } },
        { id: 'bebe', name: 'Odjeća za bebe', slug: 'bebe', productCount: 345, image: 'https://picsum.photos/seed/baby/200/200' },
        { id: 'djecije-cipele', name: 'Dječije cipele', slug: 'djecije-cipele', productCount: 234, image: 'https://picsum.photos/seed/kidshoes/200/200' },
      ],
    },
    {
      id: 'elektronika',
      name: 'Elektronika',
      slug: 'elektronika',
      image: 'https://picsum.photos/seed/tech/200/200',
      children: [
        { id: 'mobilni', name: 'Mobilni telefoni', slug: 'mobilni', productCount: 123, image: 'https://picsum.photos/seed/phones/200/200', badge: { text: 'HOT', variant: 'hot' } },
        { id: 'oklopi-navlake', name: 'Oklopi, držači i navlake', slug: 'oklopi-navlake', productCount: 678, image: 'https://picsum.photos/seed/cases/200/200', badge: { text: 'HOT', variant: 'hot' } },
        { id: 'tableti', name: 'Tableti i laptopi', slug: 'tableti', productCount: 89, image: 'https://picsum.photos/seed/tablets/200/200' },
        { id: 'smart-satovi', name: 'Smart satovi', slug: 'smart-satovi', productCount: 234, image: 'https://picsum.photos/seed/smartwatch/200/200' },
        { id: 'slusalice', name: 'Slušalice', slug: 'slusalice', productCount: 345, image: 'https://picsum.photos/seed/earphones/200/200' },
        { id: 'punjaci', name: 'Punjači i kabeli', slug: 'punjaci', productCount: 456, image: 'https://picsum.photos/seed/chargers/200/200' },
      ],
    },
  ]

  // Sample visual subcategories for grid
  const featuredSubcategories: VisualSubcategory[] = [
    { id: '1', name: 'Njega kose', slug: 'njega-kose', image: 'https://picsum.photos/seed/hair/200/200', productCount: 156 },
    { id: '2', name: 'Slušalice i dodaci', slug: 'slusaslice', image: 'https://picsum.photos/seed/headphones/200/200', badge: { text: 'HOT', variant: 'hot' }, productCount: 89 },
    { id: '3', name: 'Muške jakne i kaputi', slug: 'muske-jakne', image: 'https://picsum.photos/seed/jacket/200/200', productCount: 432 },
    { id: '4', name: 'Brijanje i uklanjanje dlaka', slug: 'brijanje', image: 'https://picsum.photos/seed/shave/200/200', productCount: 234 },
    { id: '5', name: 'Proizvodi za ličnu njegu', slug: 'licna-njega', image: 'https://picsum.photos/seed/care/200/200', badge: { text: 'HOT', variant: 'hot' }, productCount: 567 },
    { id: '6', name: 'Radni stolovi', slug: 'radni-stolovi', image: 'https://picsum.photos/seed/desk/200/200', productCount: 123 },
    { id: '7', name: 'Proizvodi za dom', slug: 'proizvodi-dom', image: 'https://picsum.photos/seed/home/200/200', badge: { text: 'HOT', variant: 'hot' }, productCount: 890 },
    { id: '8', name: 'Ženski nakit', slug: 'zenski-nakit', image: 'https://picsum.photos/seed/wjewelry/200/200', productCount: 456 },
    { id: '9', name: 'Ženske haljine', slug: 'zenske-haljine', image: 'https://picsum.photos/seed/dress/200/200', badge: { text: 'HOT', variant: 'hot' }, productCount: 1234 },
    { id: '10', name: 'Oklopi i navlake', slug: 'oklopi-navlake', image: 'https://picsum.photos/seed/cases/200/200', productCount: 678 },
  ]

  // Sample brands
  const sampleBrands: Brand[] = [
    { id: '1', name: 'Samsung', slug: 'samsung' },
    { id: '2', name: 'Apple', slug: 'apple' },
    { id: '3', name: 'Sony', slug: 'sony' },
    { id: '4', name: 'LG', slug: 'lg' },
    { id: '5', name: 'Bosch', slug: 'bosch' },
  ]

  // Sample browsing history
  const browsingHistory: BrowsingHistoryProduct[] = [
    { id: '1', name: 'Bežične slušalice TWS', image: 'https://picsum.photos/seed/tws/200/200', price: 49.99, href: '/proizvod/1', brand: 'Sony' },
    { id: '2', name: 'Pamučna majica', image: 'https://picsum.photos/seed/cottontee/200/200', price: 19.99, href: '/proizvod/2', badge: 'Skoro rasprodato' },
    { id: '3', name: 'USB-C Hub 7-in-1', image: 'https://picsum.photos/seed/usbhub/200/200', price: 29.99, href: '/proizvod/3', brand: 'Anker' },
    { id: '4', name: 'Kuhinjski set noževa', image: 'https://picsum.photos/seed/knives/200/200', price: 79.99, href: '/proizvod/4' },
  ]

  // Sample search history
  const recentSearches: SearchHistoryItem[] = [
    { id: '1', query: 'bežične slušalice', timestamp: new Date(), resultCount: 156 },
    { id: '2', query: 'laptop torba', timestamp: new Date(), resultCount: 89 },
    { id: '3', query: 'pamučne majice', timestamp: new Date(), resultCount: 432 },
  ]

  // Trending searches
  const trendingSearches = ['iPhone futrola', 'gaming miš', 'LED traka', 'power bank']

  // Sample trending products for mobile category sidebar
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
    {
      id: 'tp3',
      name: 'Edukativni kalendar',
      image: 'https://picsum.photos/seed/calendar/400/400',
      price: 3.40,
      originalPrice: 8.10,
      currency: 'KM',
      rating: 5,
      reviewCount: 445,
      soldCount: 9600,
      href: '/proizvod/kalendar',
      isAd: true,
    },
    {
      id: 'tp4',
      name: 'Dekorativna lampa',
      image: 'https://picsum.photos/seed/lamp/400/400',
      price: 4.00,
      originalPrice: 7.70,
      currency: 'KM',
      rating: 4,
      reviewCount: 640,
      href: '/proizvod/lampa',
      isAd: true,
    },
    {
      id: 'tp5',
      name: 'Set kopči za kosu',
      image: 'https://picsum.photos/seed/hairclips/400/400',
      price: 3.20,
      originalPrice: 6.50,
      currency: 'KM',
      rating: 4.5,
      reviewCount: 68,
      soldCount: 1200,
      href: '/proizvod/kopce-kosa',
    },
    {
      id: 'tp6',
      name: 'Ramazanski kalendar',
      image: 'https://picsum.photos/seed/ramadan/400/400',
      price: 5.20,
      originalPrice: 9.10,
      currency: 'KM',
      rating: 4,
      reviewCount: 268,
      href: '/proizvod/ramazanski-kalendar',
      isAd: true,
    },
  ]

  return (
    <div className="min-h-screen bg-[var(--color-bg-secondary)]">
      {/* Page Header */}
      <div className="border-b border-[var(--color-border-primary)] bg-[var(--color-bg-primary)] px-8 py-8">
        <h1 className="mb-2 text-3xl font-bold text-[var(--color-text-primary)]">
          TEMU-Style Header Components
        </h1>
        <p className="text-[var(--color-text-secondary)]">
          Kompletni header sistem - promo bar, visual mega menu, rich account dropdown, search sa historijom, mobilne komponente.
        </p>
      </div>

      <div className="p-8 space-y-16">
        {/* TemuHeader Preset - FULL EXAMPLE */}
        <section>
          <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
            TemuHeader Preset - Kompletni Header
          </h2>
          <p className="mb-4 text-[var(--color-text-secondary)]">
            Finalni preset koji kombinuje sve komponente. Smanjite veličinu prozora da vidite mobilnu verziju.
          </p>

          <div className="rounded-lg shadow-xl border border-[var(--color-border-primary)]">
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
              contact={{ phone: '+387 33 123 456', email: 'info@shop.ba', workingHours: 'Pon-Pet: 08-17h' }}
              onSearch={(q) => alert(`Pretraga: ${q}`)}
              onLogout={() => alert('Odjava')}
            />
          </div>
        </section>

        {/* SearchWithHistory */}
        <section>
          <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
            SearchWithHistory - Pretraga sa historijom
          </h2>
          <p className="mb-4 text-[var(--color-text-secondary)]">
            Search input sa nedavnim pretragama i trending terminima. Probajte CMD+K shortcut.
          </p>

          <div className="space-y-4">
            <div className="max-w-xl p-6 bg-[var(--color-bg-primary)] rounded-lg border border-[var(--color-border-primary)]">
              <SearchWithHistory
                onSearch={(q) => alert(`Pretraga: ${q}`)}
                recentSearches={recentSearches}
                trendingSearches={trendingSearches}
                placeholder="Pretraži proizvode..."
                shortcut="⌘K"
                variant="default"
              />
            </div>

            <div className="max-w-xl p-6 bg-[var(--color-bg-primary)] rounded-lg border border-[var(--color-border-primary)]">
              <SearchWithHistory
                onSearch={(q) => alert(`Pretraga: ${q}`)}
                recentSearches={recentSearches}
                trendingSearches={trendingSearches}
                placeholder="Pretraži..."
                variant="pill"
                size="lg"
              />
            </div>
          </div>
        </section>

        {/* RichAccountDropdown */}
        <section>
          <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
            RichAccountDropdown - Account sa historijom
          </h2>
          <p className="mb-4 text-[var(--color-text-secondary)]">
            Prošireni account dropdown sa panelom za nedavno pregledane proizvode. Hover ili klikni na avatar.
          </p>

          <div className="p-6 bg-[var(--color-bg-primary)] rounded-lg border border-[var(--color-border-primary)]">
            <div className="flex justify-center">
              <RichAccountDropdown
                user={sampleUser}
                onLogout={() => alert('Odjava')}
                browsingHistory={browsingHistory}
                showHistory
              />
            </div>
          </div>
        </section>

        {/* BrowsingHistoryPanel */}
        <section>
          <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
            BrowsingHistoryPanel - Nedavno pregledano
          </h2>
          <p className="mb-4 text-[var(--color-text-secondary)]">
            Panel sa nedavno pregledanim proizvodima.
          </p>

          <div className="max-w-sm rounded-lg overflow-hidden border border-[var(--color-border-primary)]">
            <BrowsingHistoryPanel
              products={browsingHistory}
              maxItems={4}
              viewAllHref="/account/history"
            />
          </div>
        </section>

        {/* MobileMinimalHeader */}
        <section>
          <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
            MobileMinimalHeader - Mobilni header
          </h2>
          <p className="mb-4 text-[var(--color-text-secondary)]">
            Kompaktni header za mobilne uređaje sa search barom.
          </p>

          <div className="max-w-sm mx-auto rounded-lg overflow-hidden border border-[var(--color-border-primary)]">
            <MobileMinimalHeader
              logo={<span className="font-bold text-[var(--color-primary-500)]">LOGO</span>}
              cartCount={3}
              showSearch
              searchPlaceholder="Pretraži..."
              onMenuOpen={() => setMobileMenuOpen(true)}
              onSearch={(q) => alert(`Pretraga: ${q}`)}
            />
          </div>
        </section>

        {/* MobileCategorySidebar */}
        <section>
          <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
            MobileCategorySidebar - Mobilni meni
          </h2>
          <p className="mb-4 text-[var(--color-text-secondary)]">
            Fullscreen sidebar navigacija za mobilne uređaje.
          </p>

          <button
            onClick={() => setMobileMenuOpen(true)}
            className="px-4 py-2 bg-[var(--color-primary-500)] text-white rounded-lg hover:bg-[var(--color-primary-600)] transition-colors"
          >
            Otvori mobilni meni
          </button>

          <MobileCategorySidebar
            isOpen={mobileMenuOpen}
            onClose={() => setMobileMenuOpen(false)}
            categories={visualCategories}
            trendingProducts={trendingProducts}
            brands={sampleBrands}
            user={sampleUser}
            contact={{ phone: '+387 33 123 456', email: 'info@shop.ba', workingHours: 'Pon-Pet: 08-17h' }}
          />
        </section>

        {/* PromoTopBar */}
        <section>
          <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
            PromoTopBar - Scrolling Promo Messages
          </h2>
          <p className="mb-4 text-[var(--color-text-secondary)]">
            Marquee animacija sa promo porukama. Hover pauzira animaciju.
          </p>

          <div className="space-y-4">
            <div className="rounded-lg overflow-hidden shadow-sm">
              <PromoTopBar messages={promoMessages} colorScheme="primary" scrollSpeed="normal" pauseOnHover />
            </div>
            <div className="rounded-lg overflow-hidden shadow-sm">
              <PromoTopBar messages={promoMessages} colorScheme="dark" scrollSpeed="normal" />
            </div>
          </div>
        </section>

        {/* BenefitsBar */}
        <section>
          <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
            BenefitsBar - Benefiti/USP
          </h2>
          <p className="mb-4 text-[var(--color-text-secondary)]">
            Statični prikaz benefita sa ikonama i subtitle tekstom.
          </p>

          <div className="space-y-4">
            <div className="rounded-lg overflow-hidden border border-[var(--color-border-primary)]">
              <BenefitsBar benefits={benefits} variant="spaced" />
            </div>
            <div className="rounded-lg overflow-hidden">
              <BenefitsBar benefits={benefits} colorScheme="dark" variant="spaced" />
            </div>
          </div>
        </section>

        {/* TrustBar */}
        <section>
          <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
            TrustBar - Trust Badges
          </h2>
          <p className="mb-4 text-[var(--color-text-secondary)]">
            Trust badges koji se prikazuju ispod headera.
          </p>

          <div className="space-y-4">
            <div className="rounded-lg overflow-hidden border border-[var(--color-border-primary)]">
              <TrustBar badges={trustBadges} showSeparator />
            </div>
            <div className="rounded-lg overflow-hidden">
              <TrustBar badges={trustBadges} colorScheme="dark" showSeparator />
            </div>
          </div>
        </section>

        {/* QuickLinksRow */}
        <section>
          <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
            QuickLinksRow - Brzi Linkovi
          </h2>
          <p className="mb-4 text-[var(--color-text-secondary)]">
            Brzi linkovi sa badge-ovima (Najprodavanije, 5★, Novo, itd.).
          </p>

          <div className="space-y-4">
            <div className="rounded-lg border border-[var(--color-border-primary)] bg-[var(--color-bg-primary)] p-4">
              <QuickLinksRow links={quickLinks} />
            </div>
            <div className="rounded-lg bg-[var(--color-secondary-800)] p-4">
              <QuickLinksRow links={quickLinks} colorScheme="dark" />
            </div>
          </div>
        </section>

        {/* CountdownBanner */}
        <section>
          <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
            CountdownBanner - Countdown Timer
          </h2>
          <p className="mb-4 text-[var(--color-text-secondary)]">
            Countdown timer za akcije i promocije.
          </p>

          <div className="flex flex-wrap gap-4">
            <CountdownBanner
              config={{
                endDate: new Date(Date.now() + 24 * 60 * 60 * 1000),
                title: 'Akcija završava za',
                theme: 'primary',
              }}
              size="md"
            />
            <CountdownBanner
              config={{
                endDate: new Date(Date.now() + 2 * 60 * 60 * 1000),
                title: 'Posebna ponuda',
                subtitle: 'Samo danas!',
                theme: 'urgent',
              }}
              size="md"
            />
            <CountdownBanner
              config={{
                endDate: new Date(Date.now() + 12 * 60 * 60 * 1000),
                title: 'Flash Sale',
                theme: 'secondary',
              }}
              size="lg"
            />
          </div>
        </section>

        {/* VisualCategoryCard */}
        <section>
          <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
            VisualCategoryCard - Kategorije sa slikama
          </h2>
          <p className="mb-4 text-[var(--color-text-secondary)]">
            Kartice kategorija sa slikama i HOT/NEW badge-ovima.
          </p>

          <div className="flex flex-wrap gap-4 p-6 bg-[var(--color-bg-primary)] rounded-lg border border-[var(--color-border-primary)]">
            {featuredSubcategories.slice(0, 6).map((cat) => (
              <VisualCategoryCard key={cat.id} category={cat} size="md" />
            ))}
          </div>
        </section>

        {/* VisualMegaMenu */}
        <section>
          <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
            VisualMegaMenu - TEMU-style Mega Menu
          </h2>
          <p className="mb-4 text-[var(--color-text-secondary)]">
            Vizualni mega menu sa kategorijama na lijevoj strani i slikama na desnoj. Hover ili klikni na "Kategorije" dugme.
          </p>

          <div className="p-6 bg-[var(--color-bg-primary)] rounded-lg border border-[var(--color-border-primary)] min-h-[500px]">
            <VisualMegaMenu
              categories={visualCategories}
              featuredSubcategories={featuredSubcategories}
              isOpen={megaMenuOpen}
              onOpenChange={setMegaMenuOpen}
              triggerLabel="Kategorije"
            />
          </div>
        </section>

        {/* Usage Code */}
        <section>
          <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
            Primjer korištenja TemuHeader
          </h2>
          <div className="rounded-lg border border-[var(--color-border-primary)] bg-[var(--color-neutral-900)] p-6">
            <pre className="overflow-x-auto text-sm text-[var(--color-text-inverse)]">
              <code>{`import { TemuHeader } from '@/src/components/ui/layout/header'

<TemuHeader
  // Promo poruke za top bar
  promoMessages={promoMessages}

  // Trust badges ispod headera
  trustBadges={trustBadges}

  // Brzi linkovi
  quickLinks={quickLinks}

  // Kategorije za mega menu
  categories={visualCategories}
  featuredSubcategories={featuredSubcategories}
  brands={brands}

  // Korisnički podaci
  user={currentUser}
  browsingHistory={recentProducts}

  // Pretraga
  recentSearches={searchHistory}
  trendingSearches={['laptop', 'telefon']}
  onSearch={handleSearch}

  // Korpa
  cartCount={5}

  // Kontakt info
  contact={{
    phone: '+387 33 123 456',
    email: 'info@shop.ba'
  }}

  // Callbacks
  onLogout={handleLogout}

  // Opcije
  sticky
  colorScheme="light"
/>`}</code>
            </pre>
          </div>
        </section>
      </div>
    </div>
  )
}

# MASTER PROMPT - B2B WEB SHOP COMPONENT LIBRARY

Ovaj dokument služi kao glavni prompt za kreiranje B2B e-commerce component library sa Next.js, TypeScript, Tailwind CSS i Untitled Icons Pro.

---

## PROJEKAT OVERVIEW

**Tip:** B2B E-commerce Component Library
**Framework:** Next.js 15+ (App Router)
**Jezik:** TypeScript (strict mode)
**Styling:** Tailwind CSS + CSS Variables
**Ikone:** Untitled Icons Pro
**Pristup:** Server Components by default, Client samo gdje je potrebno

**Cilj:** Kreirati reusable, skalabilan, performantan component library koji se može koristiti za više različitih shopova sa različitim temama.

---

## DOKUMENTACIJA REFERENCE

Svi detalji projekta su dokumentovani u sljedećim fajlovima:

1. **lista_komponenti.md** - Kompletna lista svih ~285 komponenti sa opisima
2. **struktura_ekrana.md** - Hijerarhijska struktura svih stranica i komponenti
3. **dizajn-sistem.md** - CSS varijable, theme system, color palettes, spacing
4. **folder-struktura.md** - Organizacija projekta, Next.js App Router, server/client strategija

**VAŽNO:** Prije kreiranja bilo koje komponente, konsultuj ove dokumente!

---

## CORE PRINCIPLES

### 1. Server Components by Default ⚡

```typescript
// DEFAULT - Server Component (bez "use client")
export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-[var(--card-bg)] rounded-[var(--card-radius)]">
      <Image src={product.image} alt={product.name} width={200} height={200} />
      <h3>{product.name}</h3>
      <p>{product.price} KM</p>
      <AddToCartButton productId={product.id} /> {/* Client component */}
    </div>
  )
}
```

**Pravilo:** Server component osim ako komponenta:
- Koristi React hooks (useState, useEffect, useContext)
- Ima event handlers (onClick, onChange)
- Koristi browser APIs (localStorage, window)
- Treba pristup client-side state

### 2. CSS Variables za SVE Design Tokens 🎨

```typescript
// ✅ GOOD - Koristi CSS varijable preko Tailwind
<button className="bg-primary-500 text-white rounded-[var(--radius-button)]">
  Click me
</button>

// ❌ BAD - Hardcoded boje
<button className="bg-blue-500 text-white rounded-md">
  Click me
</button>
```

**Pravilo:** Uvijek koristi semantic naming preko CSS varijabli:
- `bg-primary-500` umjesto `bg-blue-500`
- `text-text-primary` umjesto `text-gray-900`
- `border-border-primary` umjesto `border-gray-300`

### 3. Untitled Icons Integration 🎯

```typescript
// Direktan import (bolje za tree-shaking)
import { ShoppingCart01, User01, SearchLg } from '@/components/ui/Icon'

<ShoppingCart01 size={24} className="text-primary-500" />

// String-based (za dinamičke ikonice)
import { Icon } from '@/components/ui/Icon'

<Icon name="shopping-cart-01" size={24} />

// U Button komponentama
<Button icon="shopping-cart-01" iconPosition="left">
  Add to Cart
</Button>
```

**Pravilo:** Koristi Untitled Icons za SVE ikonice. Nema custom SVG-ova osim ako je apsolutno neophodno.

### 4. TypeScript Strict Mode 🔷

```typescript
// ✅ GOOD - Strict types
interface ProductCardProps {
  product: Product
  onAddToCart: (productId: string) => void
}

// ❌ BAD - Loose types
interface ProductCardProps {
  product: any
  onAddToCart: Function
}
```

**Pravilo:** Sve props moraju imati strict TypeScript tipove. Zabranjen je `any`.

### 5. Composition Over Configuration 🧩

```typescript
// ✅ GOOD - Kompozabilno
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>
    Content here
  </CardContent>
</Card>

// ❌ BAD - Previše config props
<Card title="Title" content="Content" hasHeader showBorder />
```

**Pravilo:** Preferiraj kompoziciju nad konfiguracijom gdje god je moguće.

---

## FOLDER STRUKTURA

```
project-root/
├── app/                        # Next.js App Router
│   ├── (shop)/                # Shop routes
│   ├── (account)/             # Account routes (auth required)
│   ├── (auth)/                # Auth routes
│   ├── (ui-showcase)/         # Component showcase (umjesto Storybook)
│   ├── layout.tsx             # Root layout
│   └── globals.css            # Global styles + CSS vars import
│
├── components/
│   ├── layout/                # Header, Footer, Sidebar
│   ├── product/               # Product komponente
│   ├── cart/                  # Cart komponente
│   ├── checkout/              # Checkout komponente
│   ├── account/               # Account komponente
│   ├── manufacturer/          # Manufacturer komponente
│   ├── series/                # Series komponente
│   └── ui/                    # Reusable UI komponente
│       ├── Button.tsx
│       ├── IconButton.tsx
│       ├── LinkButton.tsx
│       ├── Badge.tsx
│       ├── Card.tsx
│       ├── Input.tsx
│       ├── Modal.tsx
│       ├── Icon.tsx           # Untitled Icons wrapper
│       └── [...druge UI komponente]
│
├── lib/
│   ├── utils.ts               # cn() helper, formatPrice, etc.
│   ├── constants.ts           # App constants
│   └── hooks/                 # Custom hooks (za client komponente)
│
├── types/
│   ├── product.ts             # Product, Category, Manufacturer, Series
│   ├── cart.ts                # Cart, CartItem
│   ├── order.ts               # Order types
│   ├── user.ts                # User, Address
│   └── ui.ts                  # UI component types
│
├── styles/
│   ├── globals.css            # Global styles
│   └── themes/
│       ├── default.css        # Default theme
│       ├── shop-a.css         # Alternative themes
│       └── shop-b.css
│
└── public/
    ├── icons/                 # Custom SVG icons (if needed)
    └── images/
```

**Detaljno:** Vidi `folder-struktura.md`

---

## COMPONENT CREATION WORKFLOW

### Korak 1: Provjeri Dokumentaciju

1. **lista_komponenti.md** - Da li komponenta već postoji?
2. **struktura_ekrana.md** - Gdje komponenta ide u hijerarhiji?
3. **dizajn-sistem.md** - Koje CSS varijable koristiti?

### Korak 2: Odluči Server vs Client

**Server Component ako:**
- Prikazuje statičke podatke
- Nema interaktivnost
- Nema React hooks
- Nema browser APIs

**Client Component ako:**
- Koristi `useState`, `useEffect`, `useContext`
- Ima event handlers (`onClick`, `onChange`)
- Koristi browser APIs (`localStorage`, `window`)
- Treba pristup client-side state

### Korak 3: Kreiraj TypeScript Types

```typescript
// types/product.ts
export interface Product {
  id: string
  sku: string
  name: string
  description: string
  price: number
  priceWithTax: number
  image: string
  manufacturer: Manufacturer
  category: Category
  stockStatus: StockStatus
  // ...
}

// types/ui.ts
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  icon?: string // Untitled Icon name
  iconPosition?: 'left' | 'right'
  fullWidth?: boolean
  isLoading?: boolean
}
```

### Korak 4: Implementiraj Komponentu

**Server Component Template:**

```typescript
// components/product/ProductCard.tsx
import Image from 'next/image'
import { Badge } from '@/components/ui/Badge'
import { AddToCartButton } from './AddToCartButton'
import { Product } from '@/types/product'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-[var(--card-radius)] p-[var(--card-padding)] shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-[var(--transition-base)]">
      {/* Image */}
      <div className="relative h-[var(--product-card-image-height)] mb-4">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain"
        />
        {product.badge && (
          <Badge variant={product.badge.type} className="absolute top-2 right-2">
            {product.badge.label}
          </Badge>
        )}
      </div>

      {/* Content */}
      <div className="space-y-2">
        <h3 className="text-text-primary font-semibold text-base line-clamp-2">
          {product.name}
        </h3>

        <p className="text-text-secondary text-sm">
          SKU: {product.sku}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-primary-600 font-bold text-xl">
            {product.price.toFixed(2)} KM
          </span>
          <Badge variant={getStockVariant(product.stockStatus)}>
            {getStockLabel(product.stockStatus)}
          </Badge>
        </div>

        {/* Client component za interaktivnost */}
        <AddToCartButton productId={product.id} />
      </div>
    </div>
  )
}

// Helper functions
function getStockVariant(status: StockStatus): BadgeVariant {
  switch (status) {
    case 'in_stock': return 'success'
    case 'low_stock': return 'warning'
    case 'out_of_stock': return 'error'
    default: return 'neutral'
  }
}

function getStockLabel(status: StockStatus): string {
  // ...
}
```

**Client Component Template:**

```typescript
// components/product/AddToCartButton.tsx
'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'

interface AddToCartButtonProps {
  productId: string
}

export function AddToCartButton({ productId }: AddToCartButtonProps) {
  const [isLoading, setIsLoading] = useState(false)

  const handleAddToCart = async () => {
    setIsLoading(true)
    try {
      // Add to cart logic
      await addToCart(productId)
    } catch (error) {
      console.error('Failed to add to cart:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Button
      variant="primary"
      size="md"
      icon="shopping-cart-01"
      iconPosition="left"
      fullWidth
      isLoading={isLoading}
      onClick={handleAddToCart}
    >
      Dodaj u košaricu
    </Button>
  )
}
```

### Korak 5: Kreiraj Showcase Page

```typescript
// app/(ui-showcase)/product-cards/page.tsx
import { ProductCard } from '@/components/product/ProductCard'
import { mockProducts } from '@/lib/mock-data'

export default function ProductCardsShowcase() {
  return (
    <div className="space-y-12">
      <section>
        <h2 className="text-2xl font-bold mb-4">Product Cards</h2>
        <p className="text-text-secondary mb-8">
          Standard product card used throughout the shop
        </p>

        {/* Grid showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {mockProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Variants showcase */}
      <section>
        <h3 className="text-xl font-semibold mb-4">States</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ProductCard product={mockProducts.inStock} />
          <ProductCard product={mockProducts.lowStock} />
          <ProductCard product={mockProducts.outOfStock} />
        </div>
      </section>
    </div>
  )
}
```

---

## REUSABLE UI COMPONENTS

### Button Component

Svaki projekat MORA imati ove button varijante:

```typescript
// components/ui/Button.tsx
import { forwardRef, ButtonHTMLAttributes } from 'react'
import { Icon } from './Icon'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  icon?: string
  iconPosition?: 'left' | 'right'
  fullWidth?: boolean
  isLoading?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    className,
    variant = 'primary',
    size = 'md',
    icon,
    iconPosition = 'left',
    fullWidth = false,
    isLoading,
    children,
    disabled,
    ...props
  }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          // Base styles
          'inline-flex items-center justify-center gap-2',
          'rounded-[var(--radius-button)]',
          'font-medium transition-[var(--transition-fast)]',
          'focus:outline-none focus:ring-2 focus:ring-offset-2',
          'disabled:opacity-50 disabled:cursor-not-allowed',

          // Variant styles
          variant === 'primary' && 'bg-primary-500 text-white hover:bg-primary-600 focus:ring-primary-500',
          variant === 'secondary' && 'bg-secondary-500 text-white hover:bg-secondary-600 focus:ring-secondary-500',
          variant === 'outline' && 'border-2 border-primary-500 text-primary-500 hover:bg-primary-50',
          variant === 'ghost' && 'text-primary-600 hover:bg-primary-50',
          variant === 'danger' && 'bg-error-500 text-white hover:bg-error-600 focus:ring-error-500',

          // Size styles
          size === 'sm' && 'h-[var(--button-height-sm)] px-3 text-sm',
          size === 'md' && 'h-[var(--button-height-md)] px-[var(--spacing-button-padding-x)] text-base',
          size === 'lg' && 'h-[var(--button-height-lg)] px-6 text-lg',
          size === 'xl' && 'h-[var(--button-height-xl)] px-8 text-xl',

          // Full width
          fullWidth && 'w-full',

          className
        )}
        disabled={isLoading || disabled}
        {...props}
      >
        {isLoading ? (
          <LoadingSpinner size={size} />
        ) : (
          <>
            {icon && iconPosition === 'left' && <Icon name={icon} size={getIconSize(size)} />}
            {children}
            {icon && iconPosition === 'right' && <Icon name={icon} size={getIconSize(size)} />}
          </>
        )}
      </button>
    )
  }
)

Button.displayName = 'Button'

function getIconSize(size: ButtonProps['size']): number {
  switch (size) {
    case 'sm': return 16
    case 'md': return 20
    case 'lg': return 24
    case 'xl': return 28
    default: return 20
  }
}
```

### LinkButton Component

```typescript
// components/ui/LinkButton.tsx
import Link from 'next/link'
import { Icon } from './Icon'
import { cn } from '@/lib/utils'

interface LinkButtonProps {
  href: string
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  icon?: string
  iconPosition?: 'left' | 'right'
  fullWidth?: boolean
  children: React.ReactNode
  className?: string
}

export function LinkButton({
  href,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  fullWidth = false,
  children,
  className,
}: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        // Same classes as Button
        'inline-flex items-center justify-center gap-2',
        'rounded-[var(--radius-button)]',
        'font-medium transition-[var(--transition-fast)]',
        // ... (isti stil kao Button)
        className
      )}
    >
      {icon && iconPosition === 'left' && <Icon name={icon} size={getIconSize(size)} />}
      {children}
      {icon && iconPosition === 'right' && <Icon name={icon} size={getIconSize(size)} />}
    </Link>
  )
}
```

### Icon Component

```typescript
// components/ui/Icon.tsx
// Re-export all Untitled Icons
export * from '@untitled-ui/icons-react'

interface IconProps {
  name: string
  size?: number
  className?: string
}

export function Icon({ name, size = 20, className }: IconProps) {
  // Dynamic import
  const IconComponent = require(`@untitled-ui/icons-react/build/cjs/${name}`).default

  return <IconComponent size={size} className={className} />
}
```

---

## CSS VARIABLES & THEME SYSTEM

### Kako Koristiti CSS Varijable

**1. Direktno preko Tailwind:**

```typescript
<div className="bg-primary-500 text-white p-4">
  Primary background
</div>
```

**2. Direktno u style prop (izbjegavati kada god je moguće):**

```typescript
<div style={{
  backgroundColor: 'var(--color-bg-elevated)',
  padding: 'var(--spacing-card-padding)',
}}>
  Content
</div>
```

**3. Component-specific varijable:**

```typescript
<button className="h-[var(--button-height-md)] rounded-[var(--radius-button)]">
  Button
</button>
```

### Theme Switching

```typescript
// .env.local
NEXT_PUBLIC_THEME=default

// .env.shop-a
NEXT_PUBLIC_THEME=shop-a
```

**Detalji:** Vidi `dizajn-sistem.md` za kompletnu listu CSS varijabli.

---

## TYPESCRIPT TYPES

### Core Types

```typescript
// types/product.ts
export interface Product {
  id: string
  sku: string
  name: string
  description: string
  price: number
  priceWithTax: number
  image: string
  images: string[]
  manufacturer: Manufacturer
  series?: Series
  category: Category
  stockStatus: StockStatus
  stockQuantity: number
  badge?: ProductBadge
  specifications: ProductSpecification[]
  documents: ProductDocument[]
}

export interface Manufacturer {
  id: string
  name: string
  slug: string
  logo: string
  description?: string
  productCount: number
}

export interface Category {
  id: string
  name: string
  slug: string
  icon?: string
  parentId?: string
  children?: Category[]
  productCount: number
}

export type StockStatus = 'in_stock' | 'low_stock' | 'out_of_stock' | 'pre_order'

// types/cart.ts
export interface CartItem {
  id: string
  product: Product
  quantity: number
  price: number
}

export interface Cart {
  items: CartItem[]
  subtotal: number
  tax: number
  total: number
  itemCount: number
}

// types/ui.ts
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl'
export type BadgeVariant = 'success' | 'error' | 'warning' | 'info' | 'neutral'
```

---

## NAMING CONVENTIONS

### Files & Folders
- **PascalCase** za komponente: `ProductCard.tsx`
- **camelCase** za utilities: `formatPrice.ts`
- **kebab-case** za CSS/config: `theme-config.ts`

### Components
- **PascalCase**: `ProductCard`, `AddToCartButton`
- Preferiraj props za varijante: `<Button variant="outline" />` (ne `ButtonOutline`)

### Props
- **camelCase**: `isLoading`, `onClick`, `productId`
- Boolean props prefix: `is`, `has`, `should`
- Event handlers prefix: `on`, `handle`

### Types
- **PascalCase**: `Product`, `CartItem`, `ButtonProps`
- Props interface: `{ComponentName}Props`
- NO `I` prefix: use `Product`, NOT `IProduct`

---

## BEST PRACTICES

### 1. Accessibility ♿

```typescript
// ✅ GOOD
<button
  onClick={handleClick}
  aria-label="Add to cart"
  aria-describedby="product-name"
>
  <ShoppingCart01 aria-hidden="true" />
</button>

<img src={product.image} alt={product.name} />

// ❌ BAD
<button onClick={handleClick}>
  <ShoppingCart01 />
</button>

<img src={product.image} />
```

### 2. Responsive Design 📱

```typescript
// ✅ GOOD - Mobile-first
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
  {/* Content */}
</div>

// ❌ BAD - Desktop-first
<div className="grid grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
  {/* Content */}
</div>
```

### 3. Loading & Error States 🔄

```typescript
// ✅ GOOD - Handle all states
function ProductList({ products, isLoading, error }: ProductListProps) {
  if (isLoading) {
    return <ProductListSkeleton />
  }

  if (error) {
    return <ErrorState message={error.message} />
  }

  if (products.length === 0) {
    return <EmptyState />
  }

  return (
    <div className="grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
```

### 4. Memoization (when needed) 🚀

```typescript
// Za expensive computations
const sortedProducts = useMemo(() => {
  return products.sort((a, b) => a.price - b.price)
}, [products])

// Za callback stability
const handleAddToCart = useCallback((productId: string) => {
  // Logic
}, [])

// Za komponente sa heavy renders
const ProductCard = memo(({ product }: ProductCardProps) => {
  // Component
})
```

---

## COMMON PATTERNS

### Pattern 1: Compound Components

```typescript
// Card.tsx
export function Card({ children }: { children: React.ReactNode }) {
  return <div className="bg-[var(--card-bg)] rounded-[var(--card-radius)]">{children}</div>
}

export function CardHeader({ children }: { children: React.ReactNode }) {
  return <div className="p-6 border-b border-[var(--card-border)]">{children}</div>
}

export function CardContent({ children }: { children: React.ReactNode }) {
  return <div className="p-6">{children}</div>
}

// Usage
<Card>
  <CardHeader>
    <h2>Title</h2>
  </CardHeader>
  <CardContent>
    Content here
  </CardContent>
</Card>
```

### Pattern 2: Controlled vs Uncontrolled

```typescript
// Uncontrolled (with internal state)
function SearchInput() {
  const [value, setValue] = useState('')

  return <input value={value} onChange={(e) => setValue(e.target.value)} />
}

// Controlled (external state)
function SearchInput({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return <input value={value} onChange={(e) => onChange(e.target.value)} />
}
```

### Pattern 3: Render Props

```typescript
function DataFetcher({ children }: { children: (data: Data, isLoading: boolean) => React.ReactNode }) {
  const [data, setData] = useState<Data | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchData().then(setData).finally(() => setIsLoading(false))
  }, [])

  return <>{children(data, isLoading)}</>
}

// Usage
<DataFetcher>
  {(data, isLoading) => (
    isLoading ? <Skeleton /> : <ProductList products={data} />
  )}
</DataFetcher>
```

---

## UTILITIES

### cn() Helper (Classname Merger)

```typescript
// lib/utils.ts
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Usage
<div className={cn(
  'bg-white p-4',
  isActive && 'bg-primary-50',
  className // External className override
)} />
```

### formatPrice Helper

```typescript
export function formatPrice(price: number, currency: string = 'KM'): string {
  return `${price.toFixed(2)} ${currency}`
}
```

---

## CHECKLIST ZA SVAKU KOMPONENTU

Prije nego što smatraš komponentu završenom, provjeri:

- [ ] Server component osim ako MORA biti client
- [ ] TypeScript types definisani (strict)
- [ ] CSS varijable umjesto hardcoded vrijednosti
- [ ] Untitled Icons korišteni (ne custom SVG)
- [ ] Responsive (mobile-first)
- [ ] Accessibility (ARIA labels, semantic HTML)
- [ ] Loading state (ako je potrebno)
- [ ] Error state (ako je potrebno)
- [ ] Empty state (ako je potrebno)
- [ ] Props dokumentovani (komentari ili showcase)
- [ ] Showcase page kreirana (u (ui-showcase) route)

---

## DODAVANJE NOVE STRANICE

```typescript
// 1. Kreiraj route file
// app/(shop)/products/page.tsx
import { ProductsGrid } from '@/components/product/ProductGrid'
import { Sidebar } from '@/components/layout/sidebar/Sidebar'

export default function ProductsPage() {
  return (
    <div className="container py-8">
      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
        <Sidebar />
        <ProductsGrid />
      </div>
    </div>
  )
}

// 2. Kreiraj komponente (vidi lista_komponenti.md)
// 3. Update struktura_ekrana.md sa novom stranicom
// 4. Testiraj na svim breakpoint-ima
```

---

## DEPLOYMENT CHECKLIST

Prije deployanja:

- [ ] Build prolazi (`npm run build`)
- [ ] Nema TypeScript errors
- [ ] Nema ESLint warnings
- [ ] Sve slike optimizovane (next/image)
- [ ] CSS varijable provjerene za temu
- [ ] Mobile responsive testiran
- [ ] Accessibility testiran (keyboard navigation, screen reader)
- [ ] Performance score >90 (Lighthouse)

---

## FAQ

**Q: Kada koristiti Server Component?**
A: Uvijek, osim ako komponenta koristi hooks, event handlers, ili browser APIs.

**Q: Kako dodati novu boju u temu?**
A: Dodaj CSS varijablu u `styles/themes/*.css` i mapiraj u `tailwind.config.ts`.

**Q: Kako dodati novu ikonicu?**
A: Koristi Untitled Icons. Nađi ikonu na https://www.untitledui.com/icons i importuj po imenu.

**Q: Gdje idu shared helper funkcije?**
A: `lib/utils.ts` za general helpers, `lib/hooks/` za React hooks.

**Q: Kako napraviti novu temu?**
A: Kopiraj `styles/themes/default.css`, promijeni varijable, postavi u `.env`.

---

## KONAČNE NAPOMENE

1. **Konzistentnost je ključna** - prati ove pattern-e striktno
2. **Performance first** - maksimalno koristi Server Components
3. **Accessibility nije opciona** - WCAG 2.1 AA minimum
4. **TypeScript strict mode** - ne dozvoli `any` tipove
5. **Dokumentuj sve** - showcase stranice su dokumentacija

**Sretno kodiranje! 🚀**

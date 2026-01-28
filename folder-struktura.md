# FOLDER STRUKTURA - B2B WEB SHOP COMPONENT LIBRARY
 
Next.js App Router projekat sa fokusom na server komponente, reusabilnost i Untitled Icons Pro integraciju.

---

## KOMPLETNA STRUKTURA

```
project-root/
├── app/                                    # Next.js App Router
│   ├── (routes)/                          # Route groups
│   │   ├── (shop)/                        # Main shop routes
│   │   │   ├── page.tsx                   # Homepage/Dashboard
│   │   │   ├── products/
│   │   │   │   ├── page.tsx              # Products listing
│   │   │   │   └── [id]/
│   │   │   │       └── page.tsx          # Product details
│   │   │   ├── manufacturers/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx
│   │   │   ├── series/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx
│   │   │   ├── cart/
│   │   │   │   └── page.tsx
│   │   │   └── checkout/
│   │   │       └── page.tsx
│   │   ├── (account)/                     # Account routes (requires auth)
│   │   │   ├── layout.tsx                # Account layout with sidebar
│   │   │   ├── dashboard/
│   │   │   │   └── page.tsx
│   │   │   ├── orders/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [id]/
│   │   │   │       └── page.tsx
│   │   │   ├── profile/
│   │   │   │   └── page.tsx
│   │   │   ├── addresses/
│   │   │   │   └── page.tsx
│   │   │   ├── wishlist/
│   │   │   │   └── page.tsx
│   │   │   └── [...other account pages]/
│   │   ├── (auth)/                        # Auth routes
│   │   │   ├── login/
│   │   │   │   └── page.tsx
│   │   │   └── register/
│   │   │       └── page.tsx
│   │   └── (ui-showcase)/                 # Component showcase pages
│   │       ├── layout.tsx                # Showcase layout
│   │       ├── page.tsx                  # Index of all components
│   │       ├── buttons/
│   │       │   └── page.tsx              # All button variants
│   │       ├── cards/
│   │       │   └── page.tsx              # All card variants
│   │       ├── forms/
│   │       │   └── page.tsx              # All form components
│   │       ├── icons/
│   │       │   └── page.tsx              # Icon gallery
│   │       ├── colors/
│   │       │   └── page.tsx              # Color palette
│   │       └── [...other component pages]/
│   ├── layout.tsx                         # Root layout
│   ├── globals.css                        # Global styles + CSS variables
│   ├── not-found.tsx                      # 404 page
│   └── error.tsx                          # Error boundary
│
├── components/                            # All components
│   ├── layout/                           # Layout components
│   │   ├── header/
│   │   │   ├── Header.tsx                # Server component
│   │   │   ├── Logo.tsx
│   │   │   ├── MainNavigation.tsx        # Client (has state)
│   │   │   ├── SearchTrigger.tsx         # Client (opens modal)
│   │   │   ├── AccountDropdown.tsx       # Client (dropdown)
│   │   │   ├── CartButton.tsx            # Client (shows count)
│   │   │   └── ContactInfo.tsx
│   │   ├── footer/
│   │   │   ├── Footer.tsx                # Server component
│   │   │   ├── FooterColumn.tsx
│   │   │   ├── FooterLinks.tsx
│   │   │   ├── SocialIcons.tsx
│   │   │   └── PaymentMethods.tsx
│   │   ├── sidebar/
│   │   │   ├── Sidebar.tsx               # Server wrapper
│   │   │   ├── SidebarContainer.tsx      # Client (collapsible)
│   │   │   ├── CategoryTree.tsx          # Client (interactive)
│   │   │   ├── FilterGroup.tsx           # Client
│   │   │   ├── CheckboxFilter.tsx        # Client
│   │   │   ├── RangeFilter.tsx           # Client
│   │   │   ├── FilterChips.tsx           # Client
│   │   │   └── ClearFilters.tsx          # Client
│   │   └── search-modal/
│   │       ├── SearchModal.tsx           # Client (modal)
│   │       ├── SearchModalOverlay.tsx
│   │       ├── SearchModalContent.tsx
│   │       ├── SearchModalInput.tsx
│   │       ├── SearchResultsTabs.tsx     # Client (tabs)
│   │       ├── SearchResultsSection.tsx
│   │       ├── ProductSearchResult.tsx
│   │       ├── CategorySearchResult.tsx
│   │       ├── ManufacturerSearchResult.tsx
│   │       ├── SeriesSearchResult.tsx
│   │       ├── SearchEmptyState.tsx
│   │       └── NoResultsState.tsx
│   │
│   ├── product/                          # Product components
│   │   ├── ProductCard.tsx               # Server component
│   │   ├── ProductCardMini.tsx           # Server
│   │   ├── ProductGrid.tsx               # Server
│   │   ├── ProductList.tsx               # Server
│   │   ├── ProductImage.tsx              # Server (next/image)
│   │   ├── ProductBadge.tsx              # Server
│   │   ├── ProductTitle.tsx              # Server
│   │   ├── ProductSKU.tsx                # Server
│   │   ├── ProductManufacturer.tsx       # Server
│   │   ├── ProductPrice.tsx              # Server
│   │   ├── StockStatus.tsx               # Server
│   │   ├── QuantityInput.tsx             # Client (interactive)
│   │   ├── AddToCartButton.tsx           # Client (action)
│   │   ├── WishlistButton.tsx            # Client (toggle)
│   │   ├── ProductGallery.tsx            # Client (image carousel)
│   │   ├── ProductTabs.tsx               # Client (tabs)
│   │   └── RelatedProducts.tsx           # Server
│   │
│   ├── cart/                             # Cart components
│   │   ├── CartTable.tsx                 # Server wrapper
│   │   ├── CartTableRow.tsx              # Client (interactive)
│   │   ├── CartSummary.tsx               # Server wrapper
│   │   ├── CartSummaryCard.tsx           # Client (updates)
│   │   ├── EmptyCart.tsx                 # Server
│   │   └── PromoCodeInput.tsx            # Client (form)
│   │
│   ├── checkout/                         # Checkout components
│   │   ├── CheckoutStepper.tsx           # Client (state)
│   │   ├── CheckoutForm.tsx              # Client (form)
│   │   ├── ShippingAddressForm.tsx       # Client
│   │   ├── ShippingMethodSelect.tsx      # Client
│   │   ├── PaymentMethodSelect.tsx       # Client
│   │   ├── OrderReviewSummary.tsx        # Server
│   │   └── OrderSummarySidebar.tsx       # Server
│   │
│   ├── account/                          # Account components
│   │   ├── AccountLayout.tsx             # Server
│   │   ├── AccountSidebar.tsx            # Client (navigation)
│   │   ├── AccountMenu.tsx               # Client
│   │   ├── DashboardStats.tsx            # Server
│   │   ├── OrdersTable.tsx               # Server wrapper
│   │   ├── OrdersTableRow.tsx            # Client (actions)
│   │   ├── ProfileForm.tsx               # Client (form)
│   │   ├── AddressCard.tsx               # Server wrapper
│   │   └── [...other account components]/
│   │
│   ├── manufacturer/                     # Manufacturer components
│   │   ├── ManufacturerCard.tsx          # Server
│   │   ├── ManufacturerGrid.tsx          # Server
│   │   ├── ManufacturerBanner.tsx        # Server
│   │   └── ManufacturerFilters.tsx       # Client
│   │
│   ├── series/                           # Series components
│   │   ├── SeriesCard.tsx                # Server
│   │   ├── SeriesGrid.tsx                # Server
│   │   ├── SeriesBanner.tsx              # Server
│   │   └── SeriesFilters.tsx             # Client
│   │
│   └── ui/                               # Reusable UI components
│       ├── Button.tsx                    # Server + Client variants
│       ├── IconButton.tsx
│       ├── LinkButton.tsx                # Link with icon support
│       ├── Input.tsx                     # Client
│       ├── Textarea.tsx                  # Client
│       ├── Select.tsx                    # Client
│       ├── Checkbox.tsx                  # Client
│       ├── Radio.tsx                     # Client
│       ├── Switch.tsx                    # Client
│       ├── Badge.tsx                     # Server
│       ├── Card.tsx                      # Server
│       ├── Modal.tsx                     # Client
│       ├── Dropdown.tsx                  # Client
│       ├── Tabs.tsx                      # Client
│       ├── Accordion.tsx                 # Client
│       ├── Breadcrumbs.tsx               # Server
│       ├── Pagination.tsx                # Client
│       ├── Tooltip.tsx                   # Client
│       ├── Alert.tsx                     # Server
│       ├── Toast.tsx                     # Client
│       ├── LoadingSpinner.tsx            # Server
│       ├── Skeleton.tsx                  # Server
│       ├── ProgressBar.tsx               # Server
│       ├── Divider.tsx                   # Server
│       ├── Avatar.tsx                    # Server
│       ├── Chip.tsx                      # Server
│       ├── Icon.tsx                      # Server (Untitled Icons wrapper)
│       ├── Container.tsx                 # Server
│       ├── Grid.tsx                      # Server
│       ├── Stack.tsx                     # Server
│       └── EmptyState.tsx                # Server
│
├── lib/                                  # Utilities and helpers
│   ├── utils.ts                          # General utilities (cn, formatPrice, etc.)
│   ├── constants.ts                      # App constants
│   └── hooks/                            # Custom hooks (for client components)
│       ├── useCart.ts
│       ├── useWishlist.ts
│       ├── useToggle.ts
│       ├── useDebounce.ts
│       └── useMediaQuery.ts
│
├── types/                                # TypeScript types
│   ├── index.ts                          # Re-exports
│   ├── product.ts                        # Product, Category, Manufacturer, Series
│   ├── cart.ts                           # Cart, CartItem
│   ├── order.ts                          # Order, OrderItem, OrderStatus
│   ├── user.ts                           # User, Address, CustomerData
│   ├── ui.ts                             # UI component types (ButtonProps, etc.)
│   └── theme.ts                          # Theme types
│
├── styles/                               # Styles
│   ├── globals.css                       # Global styles (imported in app/layout.tsx)
│   └── themes/                           # Theme CSS files
│       ├── default.css                   # Default theme variables
│       ├── shop-a.css                    # Shop A theme
│       └── shop-b.css                    # Shop B theme
│
├── public/                               # Static assets
│   ├── icons/                            # Custom SVG icons (if needed)
│   ├── images/                           # Images
│   │   ├── placeholders/                 # Placeholder images
│   │   └── logos/                        # Theme-specific logos
│   └── fonts/                            # Custom fonts (if any)
│
├── config/                               # Configuration files
│   ├── site.ts                           # Site configuration
│   └── theme.ts                          # Theme configuration
│
├── tailwind.config.ts                    # Tailwind configuration
├── tsconfig.json                         # TypeScript configuration
├── next.config.js                        # Next.js configuration
├── package.json
└── README.md
```

---

## KLJUČNI PRINCIPI

### 1. Server Components by Default ⚡

```typescript
// components/product/ProductCard.tsx
// DEFAULT: Server Component (no "use client")

import Image from 'next/image'
import { Badge } from '@/components/ui/Badge'
import { AddToCartButton } from './AddToCartButton' // Client component

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-[var(--card-bg)] rounded-[var(--card-radius)] p-[var(--card-padding)]">
      <Image src={product.image} alt={product.name} width={200} height={200} />
      <h3>{product.name}</h3>
      <p>{product.price} KM</p>
      <Badge variant={product.badge?.type}>{product.badge?.label}</Badge>

      {/* Client component za interactive dio */}
      <AddToCartButton productId={product.id} />
    </div>
  )
}
```

### 2. Client Components Samo Gdje Je Potrebno 🎯

```typescript
// components/product/AddToCartButton.tsx
'use client' // Eksplicitno označeno

import { useState } from 'react'
import { Button } from '@/components/ui/Button'

interface AddToCartButtonProps {
  productId: string
}

export function AddToCartButton({ productId }: AddToCartButtonProps) {
  const [isLoading, setIsLoading] = useState(false)

  const handleAddToCart = () => {
    setIsLoading(true)
    // Add to cart logic
    setIsLoading(false)
  }

  return (
    <Button onClick={handleAddToCart} isLoading={isLoading}>
      Dodaj u košaricu
    </Button>
  )
}
```

### 3. Hybrid Komponente (Server + Client Variants) 🔄

```typescript
// components/ui/Button.tsx
import { forwardRef, ButtonHTMLAttributes } from 'react'
import Link from 'next/link'
import { Icon } from './Icon'
import { cn } from '@/lib/utils'

interface BaseButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  icon?: string // Untitled Icon name
  iconPosition?: 'left' | 'right'
  fullWidth?: boolean
}

// SERVER COMPONENT VERSION (for links)
interface LinkButtonProps extends BaseButtonProps {
  href: string
  children: React.ReactNode
}

export function LinkButton({
  href,
  icon,
  iconPosition = 'left',
  children,
  ...props
}: LinkButtonProps) {
  return (
    <Link href={href} className={getButtonClasses(props)}>
      {icon && iconPosition === 'left' && <Icon name={icon} />}
      {children}
      {icon && iconPosition === 'right' && <Icon name={icon} />}
    </Link>
  )
}

// CLIENT COMPONENT VERSION (for actions)
interface ButtonProps extends BaseButtonProps, ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ icon, iconPosition = 'left', isLoading, children, ...props }, ref) => {
    return (
      <button ref={ref} className={getButtonClasses(props)} {...props}>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <>
            {icon && iconPosition === 'left' && <Icon name={icon} />}
            {children}
            {icon && iconPosition === 'right' && <Icon name={icon} />}
          </>
        )}
      </button>
    )
  }
)

// Shared helper
function getButtonClasses(props: BaseButtonProps) {
  return cn(
    'inline-flex items-center justify-center gap-2',
    'rounded-[var(--radius-button)]',
    'font-medium transition-[var(--transition-fast)]',
    // ... variant classes
    // ... size classes
    props.fullWidth && 'w-full'
  )
}
```

---

## UNTITLED ICONS INTEGRACIJA

### Setup

```typescript
// components/ui/Icon.tsx
import { IconProps as UntitledIconProps } from '@untitled-ui/icons-react'

// Re-export all icons from Untitled UI
export * from '@untitled-ui/icons-react'

interface IconProps extends Omit<UntitledIconProps, 'name'> {
  name: string // Icon name from Untitled Icons
  size?: number
  className?: string
}

export function Icon({ name, size = 20, className, ...props }: IconProps) {
  // Dynamic import based on name
  // This allows using icon names as strings
  const IconComponent = require(`@untitled-ui/icons-react/build/cjs/${name}`).default

  return (
    <IconComponent
      size={size}
      className={className}
      {...props}
    />
  )
}

// Typed icon names (generate from Untitled Icons package)
export type IconName =
  | 'shopping-cart-01'
  | 'search-lg'
  | 'user-01'
  | 'heart'
  | 'x-close'
  | 'chevron-down'
  | 'chevron-up'
  | 'check'
  | 'alert-circle'
  // ... all other icon names
```

### Usage Examples

```typescript
// Direct import (better for tree-shaking)
import { ShoppingCart01, SearchLg, User01 } from '@/components/ui/Icon'

<ShoppingCart01 size={24} className="text-primary-500" />

// String-based (useful for dynamic icons)
import { Icon } from '@/components/ui/Icon'

<Icon name="shopping-cart-01" size={24} />

// In Button
<Button icon="shopping-cart-01" iconPosition="left">
  Add to Cart
</Button>

// In LinkButton
<LinkButton href="/cart" icon="shopping-cart-01">
  View Cart
</LinkButton>
```

---

## UI SHOWCASE PAGES (umjesto Storybook)

### Struktura showcase stranica

```typescript
// app/(ui-showcase)/layout.tsx
export default function ShowcaseLayout({ children }) {
  return (
    <div className="min-h-screen bg-neutral-50">
      <ShowcaseNav />
      <main className="container py-12">
        {children}
      </main>
    </div>
  )
}

// app/(ui-showcase)/page.tsx
export default function ShowcaseIndex() {
  return (
    <div>
      <h1>Component Library</h1>
      <ComponentGrid>
        <ComponentLink href="/buttons" icon="cursor-click">
          Buttons
        </ComponentLink>
        <ComponentLink href="/forms" icon="edit-03">
          Forms
        </ComponentLink>
        <ComponentLink href="/cards" icon="layout-grid-01">
          Cards
        </ComponentLink>
        {/* ... */}
      </ComponentGrid>
    </div>
  )
}

// app/(ui-showcase)/buttons/page.tsx
import { Button, LinkButton, IconButton } from '@/components/ui/Button'

export default function ButtonsShowcase() {
  return (
    <ShowcaseSection>
      <ShowcaseHeading>Buttons</ShowcaseHeading>

      {/* Variants */}
      <ShowcaseBlock title="Variants">
        <ShowcaseRow>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="danger">Danger</Button>
        </ShowcaseRow>
        <CodeBlock language="tsx">
          {`<Button variant="primary">Primary</Button>`}
        </CodeBlock>
      </ShowcaseBlock>

      {/* Sizes */}
      <ShowcaseBlock title="Sizes">
        <ShowcaseRow>
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
          <Button size="xl">Extra Large</Button>
        </ShowcaseRow>
      </ShowcaseBlock>

      {/* With Icons */}
      <ShowcaseBlock title="With Icons">
        <ShowcaseRow>
          <Button icon="shopping-cart-01" iconPosition="left">
            Add to Cart
          </Button>
          <Button icon="arrow-right" iconPosition="right">
            Continue
          </Button>
          <IconButton icon="heart" aria-label="Add to wishlist" />
        </ShowcaseRow>
      </ShowcaseBlock>

      {/* States */}
      <ShowcaseBlock title="States">
        <ShowcaseRow>
          <Button isLoading>Loading</Button>
          <Button disabled>Disabled</Button>
        </ShowcaseRow>
      </ShowcaseBlock>

      {/* Link Buttons */}
      <ShowcaseBlock title="Link Buttons">
        <ShowcaseRow>
          <LinkButton href="/products" icon="shopping-bag-01">
            Browse Products
          </LinkButton>
        </ShowcaseRow>
      </ShowcaseBlock>
    </ShowcaseSection>
  )
}
```

---

## TYPESCRIPT TYPES STRUKTURA

### Product Types

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
  website?: string
  productCount: number
}

export interface Series {
  id: string
  name: string
  slug: string
  manufacturer: Manufacturer
  productCount: number
  description?: string
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

export interface ProductBadge {
  type: 'new' | 'sale' | 'featured' | 'low_stock'
  label: string
}

export interface ProductSpecification {
  key: string
  value: string
}

export interface ProductDocument {
  id: string
  name: string
  type: 'pdf' | 'xlsx' | 'docx'
  size: number
  url: string
  uploadedAt: Date
}
```

### Cart Types

```typescript
// types/cart.ts
import { Product } from './product'

export interface CartItem {
  id: string
  product: Product
  quantity: number
  price: number // Price at time of adding
}

export interface Cart {
  items: CartItem[]
  subtotal: number
  tax: number
  total: number
  itemCount: number
}
```

### UI Types

```typescript
// types/ui.ts
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl'
export type BadgeVariant = 'success' | 'error' | 'warning' | 'info' | 'neutral'

export interface ButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  icon?: string
  iconPosition?: 'left' | 'right'
  fullWidth?: boolean
  isLoading?: boolean
}

// ... other UI types
```

---

## REUSABLE COMPONENTS CHECKLIST

### Core UI Components (Must Have)

- [x] **Button** - sa icon support, variants, sizes
- [x] **LinkButton** - Link sa button styling + icon
- [x] **IconButton** - Button sa samo ikonom
- [x] **Badge** - za statusse, labels
- [x] **Card** - container komponenta
- [x] **Input** - text, email, password, number
- [x] **Textarea** - multi-line input
- [x] **Select** - dropdown select
- [x] **Checkbox** - checkbox input
- [x] **Radio** - radio button
- [x] **Switch** - toggle switch
- [x] **Modal** - dialog overlay
- [x] **Dropdown** - dropdown menu
- [x] **Tabs** - tab navigation
- [x] **Accordion** - collapsible sections
- [x] **Tooltip** - hover tooltips
- [x] **Breadcrumbs** - navigation trail
- [x] **Pagination** - page navigation
- [x] **LoadingSpinner** - loading indicator
- [x] **Skeleton** - loading placeholder
- [x] **EmptyState** - empty state display
- [x] **Alert** - alert messages
- [x] **Toast** - notifications
- [x] **Avatar** - user avatar
- [x] **Divider** - separator
- [x] **Container** - max-width container
- [x] **Grid** - responsive grid
- [x] **Stack** - flex stack (vertical/horizontal)

### Icon System

- [x] **Icon** - Untitled Icons wrapper
- [x] Type-safe icon names
- [x] Size variants
- [x] Color support via className

---

## NAMING CONVENTIONS

### Files
- **PascalCase** za komponente: `ProductCard.tsx`
- **camelCase** za utilities: `formatPrice.ts`
- **kebab-case** za CSS/config: `theme-config.ts`

### Components
- **PascalCase**: `ProductCard`, `AddToCartButton`
- Prefix za varijante: `ProductCardMini`, `ButtonOutline` (avoid)
- Better: Props za varijante: `<Button variant="outline" />`

### Props
- **camelCase**: `isLoading`, `onClick`, `productId`
- Boolean props prefix: `is`, `has`, `should`
- Event handlers prefix: `on`, `handle`

### Types
- **PascalCase**: `Product`, `CartItem`
- Interface prefix: avoid `I` prefix (use just `Product`, not `IProduct`)
- Props interface: `{ComponentName}Props`

---

## EXPORT PATTERNS

### Named Exports (Preferred)
```typescript
// components/ui/Button.tsx
export function Button() { }
export function LinkButton() { }

// Usage
import { Button, LinkButton } from '@/components/ui/Button'
```

### Index Files za Barrel Exports
```typescript
// components/ui/index.ts
export * from './Button'
export * from './Badge'
export * from './Card'
// ...

// Usage (clean imports)
import { Button, Badge, Card } from '@/components/ui'
```

---

## BEST PRACTICES

### 1. Kompozicija preko Konfiguracije
```typescript
// ✅ GOOD - Kompozable
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>
    Content
  </CardContent>
</Card>

// ❌ BAD - Too much config
<Card title="Title" content="Content" hasHeader />
```

### 2. Props Forwarding
```typescript
// ✅ GOOD - Forward all props
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, ...props }, ref) => {
    return <button ref={ref} {...props} />
  }
)
```

### 3. TypeScript Strictness
```typescript
// ✅ GOOD - Strict types
interface ProductCardProps {
  product: Product // Defined type
  onAddToCart: (productId: string) => void
}

// ❌ BAD - Loose types
interface ProductCardProps {
  product: any
  onAddToCart: Function
}
```

---

## SUMMARY

✅ **Next.js App Router** sa server components by default
✅ **Client components** samo gdje je potrebno (interaktivnost)
✅ **Untitled Icons Pro** centralizovano u Icon komponenti
✅ **UI Showcase pages** umjesto Storybook
✅ **TypeScript** strict mode
✅ **Reusable komponente** sa icon support
✅ **Feature-based** folder organizacija
✅ **Clean exports** sa barrel files

**Rezultat:** Skalabilan, performantan, lako održiv component library! 🚀

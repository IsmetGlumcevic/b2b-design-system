# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a B2B e-commerce component library built with Next.js 16.1.6 (App Router), TypeScript, Tailwind CSS 4, and custom icon system. The project aims to create a reusable, scalable, performant design system for multiple B2B shops with different themes.

**Language:** Bosnian/Croatian/Serbian (BHS) - Component names, comments, and documentation may be in BHS.

**Key Design Principles:**
- Server Components by default - only use Client Components when absolutely necessary (hooks, event handlers, browser APIs)
- CSS Variables for all design tokens to enable theme switching without code changes
- Composition over configuration for maximum flexibility
- TypeScript strict mode (no `any` types)
- Mobile-first responsive design

## Commands

### Development
```bash
npm run dev          # Start development server (http://localhost:3000)
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Icon Generation
The project uses SVGR to convert SVG icons to React components:
```bash
npm run icons               # Generate all icon variants
npm run icons:line          # Generate line style icons
npm run icons:solid         # Generate solid style icons
npm run icons:duotone       # Generate duotone style icons
npm run icons:duocolor      # Generate duocolor style icons
```

Icons are stored in `src/lib/icons/[style]/` as SVG files and output to `src/components/icons/[style]/` as React components.

## Architecture

### Server vs Client Components

**Use Server Components (default):**
- Static content display
- Product cards, lists, grids
- Layout components (headers, footers without interactivity)
- Data fetching components

**Use Client Components (explicit `'use client'`):**
- Forms with state (`useState`, `useEffect`)
- Event handlers (`onClick`, `onChange`)
- Browser APIs (`localStorage`, `window`)
- Interactive UI (modals, dropdowns, accordions)
- Shopping cart, wishlist toggles

**Example Pattern:**
```typescript
// ProductCard.tsx - Server Component (no "use client")
export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-[var(--card-bg)]">
      {/* Server-rendered content */}
      <AddToCartButton productId={product.id} /> {/* Client component */}
    </div>
  )
}

// AddToCartButton.tsx - Client Component
'use client'
export function AddToCartButton({ productId }: Props) {
  const [isLoading, setIsLoading] = useState(false)
  // Interactive logic here
}
```

### Theme System

All styling uses CSS variables defined in theme files, allowing runtime theme switching without code changes:

```typescript
// Use semantic CSS variables via Tailwind
<button className="bg-primary-500 text-white rounded-[var(--radius-button)]">
  Click me
</button>

// Direct CSS variable usage (avoid when Tailwind covers it)
<div style={{ padding: 'var(--spacing-card-padding)' }}>
  Content
</div>
```

**Theme Files:**
- `styles/themes/default.css` - Default theme
- `styles/themes/shop-a.css` - Alternative shop themes
- Theme selection via `NEXT_PUBLIC_THEME` environment variable

**Key CSS Variable Patterns:**
- Colors: `--color-primary-500`, `--color-text-primary`, `--color-bg-elevated`
- Spacing: `--spacing-4`, `--spacing-container-padding`
- Component-specific: `--button-height-md`, `--card-padding`, `--header-height`

### Project Structure

```
app/                          # Next.js App Router
├── (ui-showcase)/           # Component showcase (development UI library)
│   ├── design-system/       # Design token showcases (colors, typography, spacing)
│   └── components/          # Component library showcase pages
├── layout.tsx               # Root layout
└── page.tsx                 # Homepage

src/
├── components/
│   └── icons/               # Generated icon components (Line, Solid, Duotone, Duocolor)
└── lib/
    ├── icons/               # Source SVG files organized by style
    ├── icons.tsx            # Icon component wrapper
    └── utils.ts             # Utility functions (cn helper)

styles/
└── themes/                  # Theme CSS variable definitions

app/globals.css              # Global styles + CSS variable imports
```

### Icon System

Icons are generated from SVG files using SVGR with custom configuration:

**Icon Generation Workflow:**
1. Add SVG files to `src/lib/icons/[Line|Solid|Duotone|Duocolor]/`
2. Run `npm run icons` to generate React components
3. Components are output to `src/components/icons/[style]/`

**SVGR Configuration (`svgr.config.js`):**
- TypeScript output enabled
- Icon mode (removes width/height attributes for sizing flexibility)
- Replaces black colors with `currentColor` for theme compatibility
- Adds `role="img"` for accessibility

**Icon Usage:**
```typescript
// Direct import (preferred for tree-shaking)
import { User01 } from '@/src/components/icons/Line/Users/User01'
<User01 className="text-primary-500" />

// Dynamic import (when icon name is variable)
const IconComponent = await import(`@/src/components/icons/Line/${category}/${name}`)
```

### UI Showcase Pages

Instead of Storybook, the project uses Next.js pages at `/app/(ui-showcase)/` to document and test components:

- **Design System Pages:** `/design-system/colors`, `/design-system/typography`, `/design-system/spacing`, `/design-system/shadows`
- **Component Pages:** Individual pages for each component with all variants and states

**Purpose:**
- Visual documentation of all design tokens and components
- Development playground for building new components
- Integration testing in real Next.js environment

## Component Patterns

### Naming Conventions
- **Files:** PascalCase for components (`ProductCard.tsx`), camelCase for utilities (`utils.ts`)
- **Components:** PascalCase (`ProductCard`, `AddToCartButton`)
- **Props:** camelCase with prefixes (`isLoading`, `hasError`, `onAddToCart`)
- **Types:** PascalCase with `Props` suffix (`ProductCardProps`)

### CSS Class Merging
Always use the `cn()` utility for className props to handle conditional classes and allow className overrides:

```typescript
import { cn } from '@/src/lib/utils'

<div className={cn(
  'base-classes',
  isActive && 'active-classes',
  className  // Allow external className override
)} />
```

### TypeScript Strictness
- All props must have strict types (no `any`)
- Extend native HTML attributes when appropriate:
```typescript
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  // custom props
}
```

### Composition Pattern
Prefer composable components over configuration-heavy components:

```typescript
// Good - Composable
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>Content</CardContent>
</Card>

// Avoid - Too many config props
<Card title="Title" content="Content" hasHeader showBorder />
```

## Key Documentation Files

The project has extensive planning documentation in Bosnian/Croatian/Serbian:

- **MASTER-PROMPT.md** - Complete project overview, principles, and workflow
- **lista_komponenti.md** - Comprehensive list of ~285 planned components
- **struktura_ekrana.md** - Hierarchical page and component structure
- **dizajn-sistem.md** - CSS variables, theme system, design tokens reference
- **folder-struktura.md** - Project organization and architecture details

**Important:** Always consult these documents before creating new components or making architectural changes.

## Common Patterns

### Creating a New Component

1. Check if component exists in `lista_komponenti.md`
2. Determine if it should be Server or Client Component
3. Create TypeScript types file if needed (`types/`)
4. Implement component following existing patterns
5. Create showcase page in `app/(ui-showcase)/components/`

### Adding a New Page

1. Create route in appropriate group: `app/(shop)/`, `app/(account)/`, or `app/(auth)/`
2. Use Server Components for layout
3. Extract interactive parts to Client Components
4. Follow patterns from `struktura_ekrana.md`

### Styling Best Practices

- Always use CSS variables through Tailwind classes
- Use semantic naming: `bg-primary-500` not `bg-blue-500`
- Component-specific variables: `rounded-[var(--radius-button)]`
- Never hardcode colors, spacing, or other design tokens

## Notes for AI Assistants

- Documentation may be in Bosnian/Croatian/Serbian (BHS) - understand context
- Project is in early stages - follow the master plan documents closely
- Prefer Server Components - be conservative with `'use client'`
- All design tokens must use CSS variables for theme switching
- TypeScript strict mode - no shortcuts with `any`
- Icon system is automated - don't manually create icon components
- UI showcase pages serve as both documentation and testing environment

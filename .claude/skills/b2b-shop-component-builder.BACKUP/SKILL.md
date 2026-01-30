# B2B Shop Component Builder Skill

Skill za kreiranje komponenti za B2B web shop prema definisanim standardima i dokumentaciji.

**VAŽNO:** Svaka nova komponenta MORA imati svoju showcase stranicu!

---

## KAKO KORISTITI OVAJ SKILL

Ovaj skill je **self-contained** - sva dokumentacija se nalazi unutar skill foldera:
- `MASTER-PROMPT.md` - Glavni prompt sa kompletnim uputstvima
- `lista_komponenti.md` - Lista svih komponenti (~285)
- `struktura_ekrana.md` - Hijerarhijska struktura stranica
- `dizajn-sistem.md` - CSS varijable i design system
- `folder-struktura.md` - Folder organizacija projekta

**Ne trebaš ništa kopirati** - skill automatski čita dokumentaciju iz `~/.claude/skills/b2b-shop-component-builder/`

---

## WORKFLOW

Kada korisnik pozove ovaj skill, slijedi ovaj workflow:

### 1. UČITAJ DOKUMENTACIJU
Prvo pročitaj sve MD fajlove iz skill foldera:

```bash
# Skill folder putanja
~/.claude/skills/b2b-shop-component-builder/
```

Koristi Read tool za svaki fajl iz skill foldera:
- `~/.claude/skills/b2b-shop-component-builder/MASTER-PROMPT.md`
- `~/.claude/skills/b2b-shop-component-builder/lista_komponenti.md`
- `~/.claude/skills/b2b-shop-component-builder/struktura_ekrana.md`
- `~/.claude/skills/b2b-shop-component-builder/dizajn-sistem.md`
- `~/.claude/skills/b2b-shop-component-builder/folder-struktura.md`

### 2. PROVJERI FOLDER STRUKTURU
Provjeri da li projekat prati definisanu folder strukturu:
- `app/` - Next.js App Router
- `app/(ui-showcase)/` - UI Showcase stranice
- `src/components/` - Sve komponente
- `src/styles/` - CSS fajlovi
- `src/lib/` - Utility funkcije

### 3. KREIRAJ KOMPONENTU

Kada korisnik traži da napraviš komponentu, slijedi ovaj proces:

**A. Odluči da li je Server ili Client komponenta:**
- Server Component (default) - ako ne treba state, eventi, ili browser API
- Client Component - ako treba 'use client' (state, onClick, useEffect, etc.)

**B. Određi folder:**
```
src/components/
├── shared/          # Reusable UI komponente (Button, Input, Badge)
├── layout/          # Header, Footer, Sidebar
├── product/         # ProductCard, ProductGrid, ProductDetails
├── cart/            # Cart komponente
├── checkout/        # Checkout flow komponente
├── account/         # User account komponente
├── search/          # Search Modal komponente
└── filters/         # Filter sidebar komponente
```

**C. Implementiraj komponentu:**
1. Kreiraj TypeScript fajl u odgovarajućem folderu
2. Koristi Tailwind CSS sa CSS varijablama (`var(--color-primary-500)`)
3. Koristi Untitled Icons Pro za sve ikone
4. Dodaj TypeScript tipove za props
5. Implementiraj responsive design (mobile-first)
6. Dodaj accessibility (ARIA labels)

**D. Template struktura:**
```typescript
// Za Server Component (default)
import { UntitledIcon } from '@/lib/icons'

interface ComponentNameProps {
  // Props tipovi
}

export default function ComponentName({ props }: ComponentNameProps) {
  return (
    <div className="...">
      {/* Implementacija */}
    </div>
  )
}

// Za Client Component
'use client'

import { useState } from 'react'
import { UntitledIcon } from '@/lib/icons'

interface ComponentNameProps {
  // Props tipovi
}

export default function ComponentName({ props }: ComponentNameProps) {
  const [state, setState] = useState()

  return (
    <div className="...">
      {/* Implementacija */}
    </div>
  )
}
```

### 4. KREIRAJ SHOWCASE STRANICU (OBAVEZNO!)

**SVAKA KOMPONENTA MORA IMATI SHOWCASE STRANICU!**

Nakon kreiranja komponente, ODMAH kreiraj showcase stranicu u `app/(ui-showcase)/components/[component-name]/page.tsx`

**Showcase stranica MORA prikazati:**
1. Sve varijante komponente (variants)
2. Sve veličine (sizes)
3. Sva stanja (states: default, hover, disabled, loading)
4. Sa i bez ikonica
5. Responsive prikaz
6. Dark/light mode ako je primjenjivo
7. Code snippet za svaki primjer

**Template za showcase stranicu:**

```typescript
// app/(ui-showcase)/components/[component-name]/page.tsx

import { ComponentName } from '@/components/shared/ComponentName'

export const metadata = {
  title: 'ComponentName - UI Showcase',
  description: 'ComponentName komponenta sa svim varijantama i stanjima',
}

export default function ComponentNameShowcase() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)] p-8">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-[var(--color-text-primary)] mb-2">
          ComponentName
        </h1>
        <p className="text-[var(--color-text-secondary)]">
          Kratak opis komponente i njene namjene.
        </p>
      </div>

      {/* Variants Section */}
      <ShowcaseSection title="Variants" description="Dostupne varijante komponente">
        <div className="flex flex-wrap gap-4">
          <ComponentName variant="primary">Primary</ComponentName>
          <ComponentName variant="secondary">Secondary</ComponentName>
          <ComponentName variant="outline">Outline</ComponentName>
          <ComponentName variant="ghost">Ghost</ComponentName>
        </div>
        <CodeBlock code={`<ComponentName variant="primary">Primary</ComponentName>`} />
      </ShowcaseSection>

      {/* Sizes Section */}
      <ShowcaseSection title="Sizes" description="Dostupne veličine">
        <div className="flex flex-wrap items-center gap-4">
          <ComponentName size="sm">Small</ComponentName>
          <ComponentName size="md">Medium</ComponentName>
          <ComponentName size="lg">Large</ComponentName>
        </div>
        <CodeBlock code={`<ComponentName size="sm">Small</ComponentName>`} />
      </ShowcaseSection>

      {/* States Section */}
      <ShowcaseSection title="States" description="Različita stanja komponente">
        <div className="flex flex-wrap gap-4">
          <ComponentName>Default</ComponentName>
          <ComponentName disabled>Disabled</ComponentName>
          <ComponentName loading>Loading</ComponentName>
        </div>
        <CodeBlock code={`<ComponentName disabled>Disabled</ComponentName>`} />
      </ShowcaseSection>

      {/* With Icons Section */}
      <ShowcaseSection title="With Icons" description="Sa ikonicama">
        <div className="flex flex-wrap gap-4">
          <ComponentName leftIcon="plus">With Left Icon</ComponentName>
          <ComponentName rightIcon="arrow-right">With Right Icon</ComponentName>
          <ComponentName leftIcon="cart" rightIcon="arrow-right">Both Icons</ComponentName>
        </div>
        <CodeBlock code={`<ComponentName leftIcon="plus">With Icon</ComponentName>`} />
      </ShowcaseSection>

      {/* Props Table */}
      <ShowcaseSection title="Props" description="Dostupni props">
        <PropsTable
          props={[
            { name: 'variant', type: "'primary' | 'secondary' | 'outline' | 'ghost'", default: "'primary'", description: 'Vizualna varijanta' },
            { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Veličina komponente' },
            { name: 'disabled', type: 'boolean', default: 'false', description: 'Onemogući interakciju' },
            { name: 'loading', type: 'boolean', default: 'false', description: 'Prikaži loading state' },
          ]}
        />
      </ShowcaseSection>
    </div>
  )
}

// Helper komponente za showcase
function ShowcaseSection({
  title,
  description,
  children
}: {
  title: string
  description: string
  children: React.ReactNode
}) {
  return (
    <section className="mb-12">
      <h2 className="text-xl font-semibold text-[var(--color-text-primary)] mb-1">
        {title}
      </h2>
      <p className="text-sm text-[var(--color-text-secondary)] mb-4">
        {description}
      </p>
      <div className="p-6 bg-[var(--color-bg-secondary)] rounded-lg border border-[var(--color-border-primary)]">
        {children}
      </div>
    </section>
  )
}

function CodeBlock({ code }: { code: string }) {
  return (
    <pre className="mt-4 p-4 bg-[var(--color-bg-tertiary)] rounded-md overflow-x-auto">
      <code className="text-sm text-[var(--color-text-primary)]">{code}</code>
    </pre>
  )
}

function PropsTable({ props }: { props: Array<{ name: string; type: string; default: string; description: string }> }) {
  return (
    <table className="w-full text-sm">
      <thead>
        <tr className="border-b border-[var(--color-border-primary)]">
          <th className="text-left py-2 text-[var(--color-text-primary)]">Prop</th>
          <th className="text-left py-2 text-[var(--color-text-primary)]">Type</th>
          <th className="text-left py-2 text-[var(--color-text-primary)]">Default</th>
          <th className="text-left py-2 text-[var(--color-text-primary)]">Description</th>
        </tr>
      </thead>
      <tbody>
        {props.map((prop) => (
          <tr key={prop.name} className="border-b border-[var(--color-border-secondary)]">
            <td className="py-2 font-mono text-[var(--color-primary-500)]">{prop.name}</td>
            <td className="py-2 font-mono text-[var(--color-text-secondary)]">{prop.type}</td>
            <td className="py-2 font-mono text-[var(--color-text-secondary)]">{prop.default}</td>
            <td className="py-2 text-[var(--color-text-secondary)]">{prop.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
```

### 5. STYLING SA CSS VARIJABLAMA

Koristi Tailwind klase koje koriste CSS varijable:

```typescript
// Boje
className="bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]"

// Spacing
className="p-[var(--spacing-4)] gap-[var(--spacing-2)]"

// Border radius
className="rounded-[var(--radius-button)]"

// Shadows
className="shadow-[var(--shadow-sm)]"

// Typography
className="text-[var(--font-size-body)] font-[var(--font-weight-medium)]"
```

### 6. IKONICE

Sve ikonice dolaze iz Untitled Icons Pro:

```typescript
import {
  IconSearch,
  IconShoppingCart,
  IconUser,
  IconChevronDown,
  IconX
} from '@/lib/icons'

// Korištenje
<IconSearch className="w-5 h-5 text-[var(--color-icon-primary)]" />
```

### 7. NAKON IMPLEMENTACIJE - CHECKLIST

Provjeri da je SVE napravljeno:

- [ ] ✅ Komponenta kreirana u `src/components/[category]/`
- [ ] ✅ **Showcase stranica kreirana u `app/(ui-showcase)/components/[name]/page.tsx`**
- [ ] ✅ TypeScript tipovi definisani (bez `any`)
- [ ] ✅ CSS varijable korištene (ne hardcoded)
- [ ] ✅ Untitled Icons Pro korišten
- [ ] ✅ Server/Client odluka pravilna
- [ ] ✅ Responsive design (mobile-first)
- [ ] ✅ Accessibility (ARIA labels)
- [ ] ✅ Showcase prikazuje SVE varijante
- [ ] ✅ Showcase ima props tabelu
- [ ] ✅ Showcase ima code snippets

---

## UI SHOWCASE STRUKTURA

### Kompletna struktura showcase stranica:

```
app/(ui-showcase)/
├── layout.tsx                    # Showcase layout sa sidebar navigacijom
├── page.tsx                      # /ui - Index stranica
│
├── design-system/                # /ui/design-system
│   ├── page.tsx                 # Overview
│   ├── colors/page.tsx          # Sve boje
│   ├── typography/page.tsx      # Fontovi
│   ├── spacing/page.tsx         # Spacing scale
│   ├── shadows/page.tsx         # Shadows
│   ├── borders/page.tsx         # Border radius
│   └── icons/page.tsx           # Sve ikonice
│
└── components/                   # /ui/components
    ├── page.tsx                 # Index svih komponenti
    │
    ├── buttons/page.tsx         # Button, IconButton
    ├── inputs/page.tsx          # Input, TextArea, Select
    ├── checkboxes/page.tsx      # Checkbox, Radio, Switch
    ├── badges/page.tsx          # Badge, Tag, Status
    ├── cards/page.tsx           # Card, ProductCard, CategoryCard
    ├── modals/page.tsx          # Modal, Dialog, Drawer
    ├── navigation/page.tsx      # Tabs, Breadcrumb, Pagination
    ├── feedback/page.tsx        # Alert, Toast, Skeleton
    ├── data-display/page.tsx    # Table, List, Avatar
    │
    └── [nova-komponenta]/       # Dodaj za svaku novu komponentu!
        └── page.tsx
```

### Showcase Layout sa navigacijom:

```typescript
// app/(ui-showcase)/layout.tsx
import Link from 'next/link'

const navigation = {
  'Design System': [
    { name: 'Overview', href: '/ui/design-system' },
    { name: 'Colors', href: '/ui/design-system/colors' },
    { name: 'Typography', href: '/ui/design-system/typography' },
    { name: 'Spacing', href: '/ui/design-system/spacing' },
    { name: 'Shadows', href: '/ui/design-system/shadows' },
    { name: 'Icons', href: '/ui/design-system/icons' },
  ],
  'Components': [
    { name: 'All Components', href: '/ui/components' },
    { name: 'Buttons', href: '/ui/components/buttons' },
    { name: 'Inputs', href: '/ui/components/inputs' },
    { name: 'Cards', href: '/ui/components/cards' },
    // ... dodaj više
  ],
}

export default function ShowcaseLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 border-r border-[var(--color-border-primary)] p-6 bg-[var(--color-bg-secondary)]">
        <Link href="/ui" className="text-xl font-bold text-[var(--color-text-primary)] mb-8 block">
          UI Showcase
        </Link>

        <nav className="space-y-6">
          {Object.entries(navigation).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-xs font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider mb-2">
                {category}
              </h3>
              <ul className="space-y-1">
                {items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block px-3 py-2 rounded-md text-sm text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-tertiary)] hover:text-[var(--color-text-primary)]"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  )
}
```

### Design System - Colors stranica:

```typescript
// app/(ui-showcase)/design-system/colors/page.tsx

const colorGroups = [
  {
    name: 'Primary',
    colors: [
      { name: '--color-primary-50', value: '#F0F9FF' },
      { name: '--color-primary-100', value: '#E0F2FE' },
      { name: '--color-primary-200', value: '#BAE6FD' },
      { name: '--color-primary-300', value: '#7DD3FC' },
      { name: '--color-primary-400', value: '#38BDF8' },
      { name: '--color-primary-500', value: '#0EA5E9' },
      { name: '--color-primary-600', value: '#0284C7' },
      { name: '--color-primary-700', value: '#0369A1' },
      { name: '--color-primary-800', value: '#075985' },
      { name: '--color-primary-900', value: '#0C4A6E' },
    ],
  },
  {
    name: 'Neutral',
    colors: [
      { name: '--color-neutral-50', value: '#FAFAFA' },
      { name: '--color-neutral-100', value: '#F4F4F5' },
      { name: '--color-neutral-200', value: '#E4E4E7' },
      { name: '--color-neutral-300', value: '#D4D4D8' },
      { name: '--color-neutral-400', value: '#A1A1AA' },
      { name: '--color-neutral-500', value: '#71717A' },
      { name: '--color-neutral-600', value: '#52525B' },
      { name: '--color-neutral-700', value: '#3F3F46' },
      { name: '--color-neutral-800', value: '#27272A' },
      { name: '--color-neutral-900', value: '#18181B' },
    ],
  },
  {
    name: 'Semantic',
    colors: [
      { name: '--color-success-500', value: '#22C55E' },
      { name: '--color-warning-500', value: '#F59E0B' },
      { name: '--color-error-500', value: '#EF4444' },
      { name: '--color-info-500', value: '#3B82F6' },
    ],
  },
]

export default function ColorsPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-[var(--color-text-primary)] mb-2">Colors</h1>
      <p className="text-[var(--color-text-secondary)] mb-8">
        Paleta boja definisana kao CSS varijable za konzistentan dizajn.
      </p>

      {colorGroups.map((group) => (
        <section key={group.name} className="mb-12">
          <h2 className="text-xl font-semibold text-[var(--color-text-primary)] mb-4">
            {group.name}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-2">
            {group.colors.map((color) => (
              <div key={color.name} className="space-y-2">
                <div
                  className="w-full h-16 rounded-lg border border-[var(--color-border-primary)]"
                  style={{ backgroundColor: `var(${color.name})` }}
                />
                <div className="text-xs">
                  <p className="font-mono text-[var(--color-text-primary)] truncate">
                    {color.name.replace('--color-', '')}
                  </p>
                  <p className="text-[var(--color-text-tertiary)]">{color.value}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* Usage Example */}
      <section className="mt-12 p-6 bg-[var(--color-bg-secondary)] rounded-lg">
        <h2 className="text-xl font-semibold text-[var(--color-text-primary)] mb-4">Usage</h2>
        <pre className="p-4 bg-[var(--color-bg-tertiary)] rounded-md overflow-x-auto">
          <code className="text-sm">
{`// Tailwind sa CSS varijablama
<div className="bg-[var(--color-primary-500)]">
  <span className="text-[var(--color-text-primary)]">
    Hello
  </span>
</div>

// CSS
.element {
  background-color: var(--color-primary-500);
  color: var(--color-text-primary);
}`}
          </code>
        </pre>
      </section>
    </div>
  )
}
```

---

## PRIMJERI KOMANDI

```bash
# Kreiranje Button komponente (kreira i komponentu i showcase)
/b2b-shop-component-builder kreiraj Button komponentu

# Kreiranje ProductCard sa slikama
/b2b-shop-component-builder napravi ProductCard sa thumbnail, naziv, cijenu i add to cart dugme

# Kreiranje cijelog Search Modal-a
/b2b-shop-component-builder implementiraj Search Modal sa tabovima i instant results

# Update postojeće komponente
/b2b-shop-component-builder dodaj loading state u ProductGrid

# Kreiraj samo showcase za postojeću komponentu
/b2b-shop-component-builder napravi showcase stranicu za Input komponentu

# Kreiraj Design System stranice
/b2b-shop-component-builder napravi design system colors stranicu
```

---

## VAŽNE NAPOMENE

1. **UVIJEK čitaj MD fajlove prvo** - ne pretpostavljaj strukturu ili stilove
2. **Server Components su default** - samo dodaj 'use client' kad je potrebno
3. **CSS varijable su obavezne** - nikad hardcode-uj boje ili spacing
4. **Untitled Icons Pro** - sve ikonice iz ovog paketa
5. **TypeScript strict mode** - nikad koristi `any`, uvijek tipizuj
6. **Mobile-first** - responzivnost je obavezna
7. **Accessibility** - dodaj ARIA labels gdje je potrebno
8. **ISR friendly** - koristi Server Components gdje god možeš za ISR cache
9. **Composition** - preferiraj composition over configuration
10. **Reusability** - komponente treba da budu reusable
11. **SHOWCASE JE OBAVEZAN** - svaka komponenta MORA imati showcase stranicu!

---

## DIRECTORY STRUCTURE REMINDER

```
app/
├── (routes)/                # Route groups - prave stranice
│   ├── page.tsx            # Homepage
│   ├── products/           # Products pages
│   ├── cart/               # Cart page
│   ├── checkout/           # Checkout flow
│   └── account/            # User account
│
├── (ui-showcase)/          # UI Showcase - NE utječe na URL
│   ├── layout.tsx          # Sidebar layout
│   ├── page.tsx            # /ui index
│   ├── design-system/      # Design tokens
│   │   ├── colors/
│   │   ├── typography/
│   │   ├── spacing/
│   │   └── icons/
│   └── components/         # Component gallery
│       ├── buttons/
│       ├── inputs/
│       ├── cards/
│       └── [...]
│
├── layout.tsx              # Root layout
└── globals.css             # Global styles

src/
├── components/             # All React components
│   ├── shared/            # Reusable UI (Button, Input, Badge)
│   ├── layout/            # Header, Footer, Sidebar
│   ├── product/           # Product-related
│   ├── cart/              # Cart components
│   ├── checkout/          # Checkout flow
│   ├── account/           # User account
│   ├── search/            # Search Modal
│   └── filters/           # Filters sidebar
├── lib/                   # Utilities
│   ├── icons.ts           # Untitled Icons exports
│   └── utils.ts           # Helper functions
├── styles/                # CSS files
│   ├── globals.css        # Global + default theme
│   └── themes/            # Theme variations
└── types/                 # TypeScript types
```

---

## SUCCESS METRICS

Dobro implementirana komponenta ima:
- ✅ TypeScript tipove (strict mode)
- ✅ CSS varijable za sve boje/spacing
- ✅ Untitled Icons Pro za ikonice
- ✅ Responsive design
- ✅ Accessibility
- ✅ Reusability (clear props interface)
- ✅ ISR friendly (Server Component gdje je moguće)
- ✅ Composition pattern (compound components gdje ima smisla)
- ✅ **Showcase stranica sa svim varijantama**
- ✅ **Props dokumentacija u showcase-u**
- ✅ **Code snippets u showcase-u**

---

## TROUBLESHOOTING

**Problem:** MD fajlovi ne postoje u projektu
**Rješenje:** Kopiraj ih iz originalnog projekta ili napravi novi projekat sa tom dokumentacijom

**Problem:** Komponenta treba state ali je Server Component
**Rješenje:** Dodaj 'use client' na vrh fajla

**Problem:** CSS varijabla ne postoji
**Rješenje:** Provjeri dizajn-sistem.md za dostupne varijable ili dodaj novu u globals.css

**Problem:** Ikonica ne postoji u Untitled Icons Pro
**Rješenje:** Provjeri Untitled Icons dokumentaciju ili koristi sličnu ikonicu

**Problem:** Showcase stranica nije kreirana
**Rješenje:** UVIJEK kreiraj showcase! To je obavezni dio workflow-a.

---

## KRAJ

Ovaj skill je template za kreiranje komponenti prema B2B shop standardima.

**ZAPAMTI:**
1. UVIJEK prvo učitaj MD fajlove
2. Kreiraj komponentu
3. **OBAVEZNO kreiraj showcase stranicu**
4. Provjeri checklist prije završetka

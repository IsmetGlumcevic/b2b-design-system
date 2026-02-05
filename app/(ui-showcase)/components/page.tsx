import Link from 'next/link'

export const metadata = {
  title: 'Components - UI Showcase',
  description: 'All UI components',
}

interface ComponentCategory {
  name: string
  description: string
  components: string[]
  status: 'ready' | 'coming-soon'
  href?: string
  readyCount?: number
}

const componentCategories: ComponentCategory[] = [
  {
    name: 'Buttons',
    description: 'Button, IconButton, LinkButton komponente',
    components: ['Button', 'IconButton', 'LinkButton'],
    status: 'ready',
    href: '/components/buttons',
    readyCount: 3,
  },
  {
    name: 'Forms',
    description: 'Input, select, checkbox, radio, and other form elements',
    components: ['Input', 'TextArea', 'Select', 'Checkbox', 'Radio', 'Switch'],
    status: 'ready',
    href: '/components/forms',
    readyCount: 6,
  },
  {
    name: 'Layout',
    description: 'Stack, Container, Grid komponente za layout',
    components: ['Stack', 'HStack', 'VStack', 'Container'],
    status: 'ready',
    href: '/components/stack',
    readyCount: 3,
  },
  {
    name: 'Data Display',
    description: 'Cards, badges, tables, and lists',
    components: ['Card', 'Badge', 'Table', 'Avatar', 'List'],
    status: 'coming-soon',
  },
  {
    name: 'Feedback',
    description: 'Alerts, toasts, modals, empty states, and loading',
    components: ['Alert', 'Toast', 'Modal', 'EmptyState', 'Skeleton', 'Spinner'],
    status: 'ready',
    href: '/components/empty-state',
    readyCount: 1,
  },
  {
    name: 'Navigation',
    description: 'Tabs, breadcrumbs, pagination, and menus',
    components: ['Dropdown', 'Tabs', 'Breadcrumb', 'Pagination'],
    status: 'ready',
    href: '/components/dropdown',
    readyCount: 1,
  },
  {
    name: 'E-Commerce',
    description: 'Product cards, cart, checkout components',
    components: ['ProductCard', 'CartItem', 'PriceTag', 'QuantitySelector'],
    status: 'coming-soon',
  },
]

const totalBuilt = componentCategories.reduce((acc, cat) => acc + (cat.readyCount || 0), 0)
const totalPlanned = componentCategories.reduce((acc, cat) => acc + cat.components.length, 0)

function CategoryCard({ category }: { category: ComponentCategory }) {
  const isReady = category.status === 'ready'

  const cardContent = (
    <>
      <div className="mb-4 flex items-start justify-between">
        <div>
          <h2 className="text-lg font-semibold text-[var(--color-text-primary)]">
            {category.name}
          </h2>
          <p className="text-sm text-[var(--color-text-secondary)]">
            {category.description}
          </p>
        </div>
        {isReady ? (
          <span className="rounded-[var(--radius-badge)] bg-[var(--color-success-50)] px-2 py-1 text-xs font-medium text-[var(--color-success-700)]">
            {category.readyCount} Ready
          </span>
        ) : (
          <span className="rounded-[var(--radius-badge)] bg-[var(--color-bg-tertiary)] px-2 py-1 text-xs text-[var(--color-text-tertiary)]">
            Coming Soon
          </span>
        )}
      </div>
      <div className="flex flex-wrap gap-2">
        {category.components.map((component, idx) => {
          const isBuilt = isReady && category.readyCount && idx < category.readyCount
          return (
            <span
              key={component}
              className={`rounded-md border px-2 py-1 text-xs ${
                isBuilt
                  ? 'border-[var(--color-success-500)] bg-[var(--color-success-50)] text-[var(--color-success-700)]'
                  : 'border-[var(--color-border-secondary)] bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)]'
              }`}
            >
              {component}
            </span>
          )
        })}
      </div>
    </>
  )

  const baseClassName = 'rounded-[var(--radius-card)] border border-[var(--color-border-primary)] p-6'

  if (isReady && category.href) {
    return (
      <Link
        href={category.href}
        className={`${baseClassName} block transition-shadow hover:shadow-[var(--shadow-card-hover)]`}
      >
        {cardContent}
      </Link>
    )
  }

  return <div className={baseClassName}>{cardContent}</div>
}

export default function ComponentsPage() {
  return (
    <div className="p-8">
      <div className="mb-12">
        <h1 className="mb-2 text-3xl font-bold text-[var(--color-text-primary)]">
          Components
        </h1>
        <p className="text-[var(--color-text-secondary)]">
          Reusable UI components built with the design system tokens.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="mb-12 grid gap-4 sm:grid-cols-3">
        <div className="rounded-[var(--radius-card)] border border-[var(--color-border-primary)] bg-[var(--color-bg-secondary)] p-4">
          <p className="text-3xl font-bold text-[var(--color-primary-500)]">{totalBuilt}</p>
          <p className="text-sm text-[var(--color-text-secondary)]">Components Built</p>
        </div>
        <div className="rounded-[var(--radius-card)] border border-[var(--color-border-primary)] bg-[var(--color-bg-secondary)] p-4">
          <p className="text-3xl font-bold text-[var(--color-text-primary)]">6</p>
          <p className="text-sm text-[var(--color-text-secondary)]">Categories</p>
        </div>
        <div className="rounded-[var(--radius-card)] border border-[var(--color-border-primary)] bg-[var(--color-bg-secondary)] p-4">
          <p className="text-3xl font-bold text-[var(--color-text-primary)]">{totalPlanned}</p>
          <p className="text-sm text-[var(--color-text-secondary)]">Planned Components</p>
        </div>
      </div>

      {/* Component Categories */}
      <div className="grid gap-6 md:grid-cols-2">
        {componentCategories.map((category) => (
          <CategoryCard key={category.name} category={category} />
        ))}
      </div>

      {/* Getting Started */}
      <section className="mt-12 rounded-[var(--radius-card)] bg-[var(--color-bg-secondary)] p-6">
        <h2 className="mb-4 text-xl font-semibold text-[var(--color-text-primary)]">
          Import Components
        </h2>
        <pre className="overflow-x-auto rounded-md bg-[var(--color-bg-tertiary)] p-4">
          <code className="text-sm text-[var(--color-text-primary)]">
{`// Import button components
import { Button, IconButton, LinkButton } from '@/src/components/ui/buttons'

// Import form components
import { Input, TextArea, Select, Checkbox, Radio, Switch } from '@/src/components/ui'

// Button usage
<Button variant="primary" size="md">Dodaj u košaricu</Button>
<IconButton icon={<SearchIcon />} aria-label="Pretraga" />
<LinkButton href="/proizvodi">Pogledaj sve</LinkButton>

// Form usage
<Input label="Email" type="email" placeholder="email@primjer.com" />
<Select label="Kategorija" options={options} placeholder="Odaberite..." />
<Checkbox label="Prihvatam uvjete" />
<Switch label="Notifikacije" />`}
          </code>
        </pre>
      </section>
    </div>
  )
}

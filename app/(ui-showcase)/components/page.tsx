import Link from 'next/link'

export const metadata = {
  title: 'Components - UI Showcase',
  description: 'All UI components',
}

const componentCategories = [
  {
    name: 'Forms',
    description: 'Input, select, checkbox, radio, and other form elements',
    components: ['Button', 'Input', 'Select', 'Checkbox', 'Radio', 'Switch', 'Textarea'],
    status: 'coming-soon',
  },
  {
    name: 'Data Display',
    description: 'Cards, badges, tables, and lists',
    components: ['Card', 'Badge', 'Table', 'Avatar', 'List'],
    status: 'coming-soon',
  },
  {
    name: 'Feedback',
    description: 'Alerts, toasts, modals, and loading states',
    components: ['Alert', 'Toast', 'Modal', 'Skeleton', 'Spinner'],
    status: 'coming-soon',
  },
  {
    name: 'Navigation',
    description: 'Tabs, breadcrumbs, pagination, and menus',
    components: ['Tabs', 'Breadcrumb', 'Pagination', 'Dropdown'],
    status: 'coming-soon',
  },
  {
    name: 'Layout',
    description: 'Header, footer, sidebar, and containers',
    components: ['Header', 'Footer', 'Sidebar', 'Container'],
    status: 'coming-soon',
  },
  {
    name: 'E-Commerce',
    description: 'Product cards, cart, checkout components',
    components: ['ProductCard', 'CartItem', 'PriceTag', 'QuantitySelector'],
    status: 'coming-soon',
  },
]

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
          <p className="text-3xl font-bold text-[var(--color-text-primary)]">0</p>
          <p className="text-sm text-[var(--color-text-secondary)]">Components Built</p>
        </div>
        <div className="rounded-[var(--radius-card)] border border-[var(--color-border-primary)] bg-[var(--color-bg-secondary)] p-4">
          <p className="text-3xl font-bold text-[var(--color-text-primary)]">6</p>
          <p className="text-sm text-[var(--color-text-secondary)]">Categories</p>
        </div>
        <div className="rounded-[var(--radius-card)] border border-[var(--color-border-primary)] bg-[var(--color-bg-secondary)] p-4">
          <p className="text-3xl font-bold text-[var(--color-text-primary)]">31</p>
          <p className="text-sm text-[var(--color-text-secondary)]">Planned Components</p>
        </div>
      </div>

      {/* Component Categories */}
      <div className="grid gap-6 md:grid-cols-2">
        {componentCategories.map((category) => (
          <div
            key={category.name}
            className="rounded-[var(--radius-card)] border border-[var(--color-border-primary)] p-6"
          >
            <div className="mb-4 flex items-start justify-between">
              <div>
                <h2 className="text-lg font-semibold text-[var(--color-text-primary)]">
                  {category.name}
                </h2>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  {category.description}
                </p>
              </div>
              <span className="rounded-[var(--radius-badge)] bg-[var(--color-bg-tertiary)] px-2 py-1 text-xs text-[var(--color-text-tertiary)]">
                Coming Soon
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.components.map((component) => (
                <span
                  key={component}
                  className="rounded-md border border-[var(--color-border-secondary)] bg-[var(--color-bg-secondary)] px-2 py-1 text-xs text-[var(--color-text-secondary)]"
                >
                  {component}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Getting Started */}
      <section className="mt-12 rounded-[var(--radius-card)] bg-[var(--color-bg-secondary)] p-6">
        <h2 className="mb-4 text-xl font-semibold text-[var(--color-text-primary)]">
          Building Components
        </h2>
        <p className="mb-4 text-sm text-[var(--color-text-secondary)]">
          Use the B2B Shop Component Builder skill to create new components:
        </p>
        <pre className="overflow-x-auto rounded-md bg-[var(--color-bg-tertiary)] p-4">
          <code className="text-sm text-[var(--color-text-primary)]">
{`/b2b-shop-component-builder kreiraj Button komponentu

/b2b-shop-component-builder napravi ProductCard sa slikom i cijenom

/b2b-shop-component-builder implementiraj Input sa label i error state`}
          </code>
        </pre>
      </section>
    </div>
  )
}

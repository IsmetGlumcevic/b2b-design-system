import Link from 'next/link'

const navigation = {
  'Design System': [
    { name: 'Overview', href: '/design-system' },
    { name: 'Colors', href: '/design-system/colors' },
    { name: 'Typography', href: '/design-system/typography' },
    { name: 'Spacing', href: '/design-system/spacing' },
    { name: 'Shadows', href: '/design-system/shadows' },
  ],
  Layout: [
    { name: 'Header', href: '/components/header' },
    { name: 'Footer', href: '/components/footer' },
  ],
  Components: [
    { name: 'All Components', href: '/components' },
    { name: 'Accordion', href: '/components/accordion' },
    { name: 'Alert', href: '/components/alert' },
    { name: 'Badge', href: '/components/badge' },
    { name: 'Breadcrumbs', href: '/components/breadcrumbs' },
    { name: 'Buttons', href: '/components/buttons' },
    { name: 'Card', href: '/components/card' },
    { name: 'Divider', href: '/components/divider' },
    { name: 'Dropdown', href: '/components/dropdown' },
    { name: 'Forms', href: '/components/forms' },
    { name: 'Loading Spinner', href: '/components/loading-spinner' },
    { name: 'Modal', href: '/components/modal' },
    { name: 'Pagination', href: '/components/pagination' },
    { name: 'Progress Bar', href: '/components/progress-bar' },
    { name: 'Skeleton', href: '/components/skeleton' },
    { name: 'Tabs', href: '/components/tabs' },
    { name: 'Toast', href: '/components/toast' },
    { name: 'Tooltip', href: '/components/tooltip' },
  ],
}

export default function ShowcaseLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 shrink-0 border-r border-[var(--color-border-primary)] bg-[var(--color-bg-secondary)] p-6">
        <Link
          href="/design-system"
          className="mb-8 block text-xl font-bold text-[var(--color-text-primary)]"
        >
          UI Showcase
        </Link>

        <nav className="space-y-6">
          {Object.entries(navigation).map(([category, items]) => (
            <div key={category}>
              <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-[var(--color-text-tertiary)]">
                {category}
              </h3>
              <ul className="space-y-1">
                {items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block rounded-md px-3 py-2 text-sm text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-bg-tertiary)] hover:text-[var(--color-text-primary)]"
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
      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  )
}

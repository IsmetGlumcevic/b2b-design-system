import { MobileSidebar } from './MobileSidebar'

const navigation = {
  'Design System': [
    { name: 'Overview', href: '/design-system' },
    { name: 'Themes', href: '/design-system/themes', badge: 'NEW' },
    { name: 'CSS Variables Demo', href: '/design-system/css-variables-demo', badge: 'DEMO' },
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
    { name: 'Search Modal', href: '/components/search-modal' },
    { name: 'Skeleton', href: '/components/skeleton' },
    { name: 'Tabs', href: '/components/tabs' },
    { name: 'Table', href: '/components/table' },
    { name: 'Toast', href: '/components/toast' },
    { name: 'Tooltip', href: '/components/tooltip' },
  ],
  'Mobile (iOS/Android)': [
    { name: 'Overview', href: '/mobile' },
    { name: 'Komponente', href: '/mobile/components' },
    { name: 'Home Screen', href: '/mobile/home-screen' },
    { name: 'Categories', href: '/mobile/categories', disabled: true },
    { name: 'Product List', href: '/mobile/product-list', disabled: true },
    { name: 'Product Details', href: '/mobile/product-details', disabled: true },
    { name: 'Cart', href: '/mobile/cart', disabled: true },
    { name: 'Account', href: '/mobile/account', disabled: true },
  ],
}

export default function ShowcaseLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen">
      <MobileSidebar navigation={navigation} />

      {/* Main content */}
      <main className="flex-1 overflow-auto pl-0 pt-16 lg:pl-0 lg:pt-0">
        {children}
      </main>
    </div>
  )
}

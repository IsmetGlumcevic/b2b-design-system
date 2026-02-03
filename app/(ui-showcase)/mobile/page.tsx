import Link from 'next/link'

// Icon components
const PhoneIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
    <line x1="12" y1="18" x2="12.01" y2="18" />
  </svg>
)

const HomeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
)

const GridIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
  </svg>
)

const ShoppingBagIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
)

const UserIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
)

const SearchIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
)

const BrandIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
  </svg>
)

const screens = [
  {
    name: 'Home Screen',
    href: '/mobile/home-screen',
    description: 'Početni ekran sa hero bannerom, kategorijama, akcijama i brendovima',
    icon: <HomeIcon />,
    status: 'ready',
  },
  {
    name: 'Categories Screen',
    href: '/mobile/categories',
    description: 'Prikaz svih kategorija u grid layoutu sa search filterom',
    icon: <GridIcon />,
    status: 'ready',
  },
  {
    name: 'Brands Screen',
    href: '/mobile/brands',
    description: 'Lista svih brendova sa detaljima i proizvodima',
    icon: <BrandIcon />,
    status: 'ready',
  },
  {
    name: 'Product List Screen',
    href: '/mobile/product-list',
    description: 'Lista proizvoda sa filterima i sortiranjem',
    icon: <ShoppingBagIcon />,
    status: 'planned',
  },
  {
    name: 'Product Details Screen',
    href: '/mobile/product-details',
    description: 'Detalji proizvoda sa galerijom, specifikacijama i akcijama',
    icon: <ShoppingBagIcon />,
    status: 'planned',
  },
  {
    name: 'Cart Screen',
    href: '/mobile/cart',
    description: 'Košarica sa listom proizvoda i sumaryjem',
    icon: <ShoppingBagIcon />,
    status: 'planned',
  },
  {
    name: 'Account Screen',
    href: '/mobile/account',
    description: 'Korisnički profil, narudžbe, postavke',
    icon: <UserIcon />,
    status: 'planned',
  },
  {
    name: 'Search Screen',
    href: '/mobile/search',
    description: 'Pretraga sa filterima, sortiranjem i listom proizvoda',
    icon: <SearchIcon />,
    status: 'ready',
  },
]

const components = [
  { name: 'PhoneFrame', description: 'Wrapper za iPhone/Android preview' },
  { name: 'MobileHeader', description: 'App header sa logom i akcijama' },
  { name: 'MobileTabBar', description: 'Bottom navigation bar' },
  { name: 'MobileSearchBar', description: 'Search input sa scan opcijom' },
  { name: 'MobileHeroBanner', description: 'Carousel banner' },
  { name: 'MobileCategoryScroller', description: 'Horizontal category scroller' },
  { name: 'MobileCategoryGrid', description: 'Grid prikaz kategorija' },
  { name: 'MobileCategoryHeader', description: 'Header sa back navigacijom' },
  { name: 'MobileSubcategoryList', description: 'Lista podkategorija (3 varijante)' },
  { name: 'MobileProductCard', description: 'Kartica proizvoda (3 varijante)' },
  { name: 'MobileQuickActions', description: 'Brze akcije' },
  { name: 'MobileSectionHeader', description: 'Header sekcije' },
  { name: 'MobileBrandScroller', description: 'Horizontal brand scroller' },
  { name: 'MobileBrandGrid', description: 'Grid prikaz brendova' },
  { name: 'MobileBrandDetailHeader', description: 'Header sa detaljima brenda (3 varijante)' },
  { name: 'MobileSortingBar', description: 'Bar za sortiranje i filtre (sort modal, view toggle)' },
  { name: 'MobileFilterContent', description: 'Sadržaj filter drawer-a (kategorije, brendovi, cijena)' },
  { name: 'MobileActiveFilters', description: 'Chips za aktivne filtere' },
  { name: 'MobileSearchPage', description: 'Kompletna search stranica sa svim funkcijama' },
]

export default function MobileShowcaseIndex() {
  return (
    <div className="min-h-screen bg-neutral-50 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-primary-100 text-primary-600">
              <PhoneIcon />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-neutral-900">
                Mobile UI Showcase
              </h1>
              <p className="text-sm sm:text-base text-neutral-500">iOS / Android aplikacija</p>
            </div>
          </div>
          <p className="max-w-2xl text-sm sm:text-base text-neutral-600">
            UI komponente i ekrani za B2B mobilnu aplikaciju. Komponente su napisane u React-u za UI preview,
            s dizajnom optimiziranim za iOS i Android platforme.
          </p>
        </div>

        {/* Interactive App Preview - Featured */}
        <div className="mb-8 sm:mb-12">
          <Link
            href="/mobile/app"
            className="group flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 rounded-xl sm:rounded-2xl border-2 border-primary-200 bg-gradient-to-r from-primary-50 to-white p-4 sm:p-6 transition-all hover:border-primary-400 hover:shadow-xl active:scale-[0.99]"
          >
            <div className="flex h-12 w-12 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-primary-500 text-white transition-transform group-hover:scale-110">
              <svg width="24" height="24" className="sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </div>
            <div className="flex-1">
              <h2 className="mb-1 text-lg sm:text-xl font-bold text-neutral-900">
                Interaktivni App Preview
              </h2>
              <p className="text-sm sm:text-base text-neutral-600">
                Testirajte kompletnu aplikaciju sa funkcionalom navigacijom između svih ekrana.
              </p>
              <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-primary-600">
                Pokreni preview
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </Link>
        </div>

        {/* Screens Grid */}
        <div className="mb-8 sm:mb-12">
          <h2 className="mb-3 sm:mb-4 text-lg sm:text-xl font-semibold text-neutral-800">
            Pojedinačni ekrani
          </h2>
          <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {screens.map((screen) => (
              <Link
                key={screen.name}
                href={screen.status === 'ready' ? screen.href : '#'}
                className={`group relative rounded-xl border bg-white p-4 sm:p-5 transition-all active:scale-[0.98] ${
                  screen.status === 'ready'
                    ? 'border-neutral-200 hover:border-primary-300 hover:shadow-lg'
                    : 'cursor-not-allowed border-neutral-100 opacity-60'
                }`}
              >
                {screen.status === 'planned' && (
                  <span className="absolute right-3 top-3 rounded bg-neutral-100 px-2 py-0.5 text-[10px] font-medium text-neutral-500">
                    Uskoro
                  </span>
                )}
                <div className="flex items-start gap-3 sm:block">
                  <div
                    className={`mb-0 sm:mb-3 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
                      screen.status === 'ready'
                        ? 'bg-primary-100 text-primary-600 group-hover:bg-primary-500 group-hover:text-white'
                        : 'bg-neutral-100 text-neutral-400'
                    } transition-colors`}
                  >
                    {screen.icon}
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-neutral-900 text-sm sm:text-base">
                      {screen.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-500">{screen.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Components List */}
        <div className="mb-8 sm:mb-12">
          <h2 className="mb-3 sm:mb-4 text-lg sm:text-xl font-semibold text-neutral-800">
            Mobile komponente ({components.length})
          </h2>
          <div className="rounded-xl border border-neutral-200 bg-white overflow-hidden">
            <div className="divide-y divide-neutral-100">
              {components.map((component, index) => (
                <div
                  key={component.name}
                  className="flex items-center justify-between px-3 sm:px-5 py-3 sm:py-4"
                >
                  <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                    <span className="flex h-6 w-6 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-lg bg-neutral-100 text-xs sm:text-sm font-medium text-neutral-500">
                      {index + 1}
                    </span>
                    <div className="min-w-0">
                      <h4 className="font-medium text-neutral-900 text-sm sm:text-base truncate">
                        {component.name}
                      </h4>
                      <p className="text-xs sm:text-sm text-neutral-500 truncate">
                        {component.description}
                      </p>
                    </div>
                  </div>
                  <span className="shrink-0 ml-2 rounded bg-green-100 px-1.5 sm:px-2 py-0.5 text-[10px] sm:text-xs font-medium text-green-700">
                    Gotovo
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Info Box */}
        <div className="rounded-xl border border-blue-200 bg-blue-50 p-4 sm:p-5">
          <h3 className="mb-2 font-semibold text-blue-900 text-sm sm:text-base">
            O mobilnim komponentama
          </h3>
          <p className="text-xs sm:text-sm text-blue-800">
            Ove komponente su napisane u standardnom React-u (ne React Native) kako bi se mogao
            vizualno pregledati UI bez potrebe za native build-om. Za produkcijsku verziju,
            komponente se mogu lako konvertirati u React Native sa NativeWind stilovima.
          </p>
          <div className="mt-3 sm:mt-4 flex flex-wrap gap-1.5 sm:gap-2">
            <span className="rounded-full bg-blue-200 px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium text-blue-800">
              React Components
            </span>
            <span className="rounded-full bg-blue-200 px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium text-blue-800">
              Tailwind CSS
            </span>
            <span className="rounded-full bg-blue-200 px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium text-blue-800">
              iPhone Frame
            </span>
            <span className="rounded-full bg-blue-200 px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium text-blue-800">
              Android Frame
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

'use client'

import { useState } from 'react'
import {
  SearchModal,
  type SearchResult,
  type RecentSearch,
  type TrendingSearch,
} from '@/src/components/search'

export default function SearchModalShowcase() {
  const [isOpen, setIsOpen] = useState(false)
  const [results, setResults] = useState<SearchResult | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [demoMode, setDemoMode] = useState<'empty' | 'results' | 'noResults'>('empty')

  // Mock data
  const recentSearches: RecentSearch[] = [
    { id: '1', query: 'Kabel NYM 3x1.5', timestamp: new Date() },
    { id: '2', query: 'Osigurač 16A', timestamp: new Date() },
    { id: '3', query: 'LED rasvjeta', timestamp: new Date() },
    { id: '4', query: 'Utičnica trostruka', timestamp: new Date() },
  ]

  const trendingSearches: TrendingSearch[] = [
    { id: '1', query: 'Solarni paneli' },
    { id: '2', query: 'EV punjač' },
    { id: '3', query: 'Smart prekidač' },
    { id: '4', query: 'LED traka' },
    { id: '5', query: 'Automatski osigurač' },
  ]

  const mockResults: SearchResult = {
    products: [
      {
        id: '1',
        name: 'Kabel NYM-J 3x1.5 mm²',
        sku: 'NYM-3x15-100',
        manufacturer: 'Elka',
        price: 89.99,
        image: '/placeholder-product.jpg',
        inStock: true,
      },
      {
        id: '2',
        name: 'Kabel NYM-J 3x2.5 mm²',
        sku: 'NYM-3x25-100',
        manufacturer: 'Elka',
        price: 129.99,
        inStock: true,
      },
      {
        id: '3',
        name: 'Kabel NYM-J 5x2.5 mm²',
        sku: 'NYM-5x25-100',
        manufacturer: 'Elka',
        price: 189.99,
        inStock: false,
      },
      {
        id: '4',
        name: 'Kabel PP-Y 3x1.5 mm²',
        sku: 'PPY-3x15-100',
        manufacturer: 'Praktik',
        price: 59.99,
        inStock: true,
      },
    ],
    categories: [
      { id: '1', name: 'Kablovi i vodiči', productCount: 1250 },
      { id: '2', name: 'Instalacijski kablovi', productCount: 456 },
      { id: '3', name: 'Energetski kablovi', productCount: 234 },
    ],
    manufacturers: [
      { id: '1', name: 'Elka', productCount: 546 },
      { id: '2', name: 'Praktik', productCount: 328 },
      { id: '3', name: 'NKT', productCount: 215 },
    ],
    series: [
      { id: '1', name: 'NYM-J Standard', manufacturer: 'Elka', productCount: 45 },
      { id: '2', name: 'PP-Y Ekonom', manufacturer: 'Praktik', productCount: 32 },
    ],
  }

  const emptyResults: SearchResult = {
    products: [],
    categories: [],
    manufacturers: [],
    series: [],
  }

  const handleSearch = async (query: string) => {
    setIsLoading(true)

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500))

    if (demoMode === 'noResults') {
      setResults(emptyResults)
    } else if (demoMode === 'results') {
      setResults(mockResults)
    }

    setIsLoading(false)
  }

  const handleQuickAdd = (productId: string) => {
    console.log('Quick add to cart:', productId)
    alert(`Proizvod ${productId} dodan u košaricu!`)
  }

  const handleClearRecentSearch = (id: string) => {
    console.log('Clear recent search:', id)
  }

  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)] p-8">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-[var(--color-text-primary)] mb-2">
          Search Modal
        </h1>
        <p className="text-[var(--color-text-secondary)]">
          Full-screen search modal sa instant search, tab navigacijom i prikazom rezultata
          po kategorijama. Podržava keyboard navigaciju (ESC za zatvaranje).
        </p>
      </div>

      {/* Demo Controls */}
      <ShowcaseSection title="Demo" description="Odaberite način prikaza i otvorite modal">
        <div className="space-y-4">
          <div className="flex flex-wrap gap-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="demoMode"
                value="empty"
                checked={demoMode === 'empty'}
                onChange={() => setDemoMode('empty')}
                className="accent-[var(--color-primary-500)]"
              />
              <span className="text-[var(--font-size-sm)] text-[var(--color-text-primary)]">
                Empty state (nedavne/trending pretrage)
              </span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="demoMode"
                value="results"
                checked={demoMode === 'results'}
                onChange={() => setDemoMode('results')}
                className="accent-[var(--color-primary-500)]"
              />
              <span className="text-[var(--font-size-sm)] text-[var(--color-text-primary)]">
                Sa rezultatima
              </span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="demoMode"
                value="noResults"
                checked={demoMode === 'noResults'}
                onChange={() => setDemoMode('noResults')}
                className="accent-[var(--color-primary-500)]"
              />
              <span className="text-[var(--font-size-sm)] text-[var(--color-text-primary)]">
                Bez rezultata
              </span>
            </label>
          </div>

          <button
            onClick={() => setIsOpen(true)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-[var(--radius-button)] bg-[var(--color-primary-500)] text-white font-medium transition-colors hover:bg-[var(--color-primary-600)]"
          >
            <SearchIcon className="w-5 h-5" />
            Otvori Search Modal
          </button>
        </div>
      </ShowcaseSection>

      {/* Components Overview */}
      <ShowcaseSection title="Struktura komponenti" description="Search Modal se sastoji od sljedećih komponenti">
        <div className="space-y-4">
          <ComponentItem
            name="SearchModal"
            description="Glavna komponenta koja upravlja stanjem i kontekstom"
            type="Client"
          />
          <ComponentItem
            name="SearchModalOverlay"
            description="Backdrop pozadina koja zatvara modal na klik"
            type="Server"
          />
          <ComponentItem
            name="SearchModalContent"
            description="Glavni content container sa animacijom"
            type="Server"
          />
          <ComponentItem
            name="SearchModalInput"
            description="Search input sa debounce-om i instant search"
            type="Client"
          />
          <ComponentItem
            name="SearchResultsTabs"
            description="Tab navigacija (Proizvodi, Kategorije, Proizvođači, Serije)"
            type="Client"
          />
          <ComponentItem
            name="SearchResultsSection"
            description="Sekcija za prikaz rezultata po aktivnom tabu"
            type="Server"
          />
          <ComponentItem
            name="ProductSearchResult"
            description="Mini kartica proizvoda sa quick add"
            type="Server"
          />
          <ComponentItem
            name="CategorySearchResult"
            description="Kartica kategorije sa brojem proizvoda"
            type="Server"
          />
          <ComponentItem
            name="ManufacturerSearchResult"
            description="Kartica proizvođača sa logom"
            type="Server"
          />
          <ComponentItem
            name="SeriesSearchResult"
            description="Kartica serije proizvoda"
            type="Server"
          />
          <ComponentItem
            name="SearchEmptyState"
            description="Prikaz nedavnih i trending pretraga"
            type="Server"
          />
          <ComponentItem
            name="NoResultsState"
            description="Prikaz kad nema rezultata sa prijedlozima"
            type="Server"
          />
        </div>
      </ShowcaseSection>

      {/* Usage Example */}
      <ShowcaseSection title="Korištenje" description="Primjer implementacije Search Modal komponente">
        <CodeBlock
          code={`import { useState } from 'react'
import { SearchModal, type SearchResult } from '@/src/components/search'

export function MyComponent() {
  const [isOpen, setIsOpen] = useState(false)
  const [results, setResults] = useState<SearchResult | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleSearch = async (query: string) => {
    setIsLoading(true)
    const data = await fetchSearchResults(query)
    setResults(data)
    setIsLoading(false)
  }

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        Otvori pretragu
      </button>

      <SearchModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSearch={handleSearch}
        results={results}
        isLoading={isLoading}
        recentSearches={recentSearches}
        trendingSearches={trendingSearches}
        onQuickAddToCart={(id) => addToCart(id)}
        onClearRecentSearch={(id) => clearSearch(id)}
      />
    </>
  )
}`}
        />
      </ShowcaseSection>

      {/* Props Table */}
      <ShowcaseSection title="Props" description="Dostupni props za SearchModal">
        <PropsTable
          props={[
            { name: 'isOpen', type: 'boolean', default: '-', description: 'Da li je modal otvoren' },
            { name: 'onClose', type: '() => void', default: '-', description: 'Callback za zatvaranje modala' },
            { name: 'onSearch', type: '(query: string) => void', default: '-', description: 'Callback za pretragu' },
            { name: 'results', type: 'SearchResult | null', default: 'null', description: 'Rezultati pretrage' },
            { name: 'isLoading', type: 'boolean', default: 'false', description: 'Loading stanje' },
            { name: 'recentSearches', type: 'RecentSearch[]', default: '[]', description: 'Nedavne pretrage' },
            { name: 'trendingSearches', type: 'TrendingSearch[]', default: '[]', description: 'Popularne pretrage' },
            { name: 'onClearRecentSearch', type: '(id: string) => void', default: '-', description: 'Brisanje nedavne pretrage' },
            { name: 'onQuickAddToCart', type: '(productId: string) => void', default: '-', description: 'Quick add u košaricu' },
          ]}
        />
      </ShowcaseSection>

      {/* Types */}
      <ShowcaseSection title="TypeScript Tipovi" description="Glavne TypeScript definicije">
        <CodeBlock
          code={`// Rezultati pretrage
interface SearchResult {
  products: ProductSearchResultType[]
  categories: CategorySearchResultType[]
  manufacturers: ManufacturerSearchResultType[]
  series: SeriesSearchResultType[]
}

// Proizvod u rezultatima
interface ProductSearchResultType {
  id: string
  name: string
  sku: string
  manufacturer: string
  price: number
  image?: string
  inStock: boolean
}

// Kategorija u rezultatima
interface CategorySearchResultType {
  id: string
  name: string
  productCount: number
  icon?: string
}

// Proizvođač u rezultatima
interface ManufacturerSearchResultType {
  id: string
  name: string
  productCount: number
  logo?: string
}

// Serija u rezultatima
interface SeriesSearchResultType {
  id: string
  name: string
  manufacturer: string
  productCount: number
}

// Nedavna pretraga
interface RecentSearch {
  id: string
  query: string
  timestamp: Date
}

// Trending pretraga
interface TrendingSearch {
  id: string
  query: string
}`}
        />
      </ShowcaseSection>

      {/* Features */}
      <ShowcaseSection title="Funkcionalnosti" description="Ugrađene funkcionalnosti">
        <ul className="space-y-2">
          {[
            'Instant search sa debounce-om (300ms)',
            'Tab navigacija između tipova rezultata',
            'Keyboard shortcuts (ESC za zatvaranje, ↑↓ za navigaciju)',
            'Highlighting pojma pretrage u rezultatima',
            'Nedavne pretrage sa mogućnošću brisanja',
            'Trending/popularne pretrage',
            'Quick add to cart direktno iz rezultata',
            'Loading state sa spinnerom',
            'No results state sa prijedlozima',
            'Responsive dizajn (mobile-first)',
            'Accessibility (ARIA labels, keyboard nav)',
            'Body scroll lock dok je modal otvoren',
          ].map((feature, index) => (
            <li
              key={index}
              className="flex items-start gap-2 text-[var(--font-size-sm)] text-[var(--color-text-secondary)]"
            >
              <CheckIcon className="shrink-0 w-4 h-4 mt-0.5 text-[var(--color-success-500)]" />
              {feature}
            </li>
          ))}
        </ul>
      </ShowcaseSection>

      {/* Search Modal */}
      <SearchModal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false)
          setResults(null)
        }}
        onSearch={handleSearch}
        results={results}
        isLoading={isLoading}
        recentSearches={recentSearches}
        trendingSearches={trendingSearches}
        onQuickAddToCart={handleQuickAdd}
        onClearRecentSearch={handleClearRecentSearch}
      />
    </div>
  )
}

/* ============================================
   Helper Components
   ============================================ */

function ShowcaseSection({
  title,
  description,
  children,
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
    <pre className="p-4 bg-[var(--color-bg-tertiary)] rounded-md overflow-x-auto">
      <code className="text-sm text-[var(--color-text-primary)] whitespace-pre">{code}</code>
    </pre>
  )
}

function PropsTable({
  props,
}: {
  props: Array<{ name: string; type: string; default: string; description: string }>
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-[var(--color-border-primary)]">
            <th className="text-left py-2 text-[var(--color-text-primary)] font-medium">Prop</th>
            <th className="text-left py-2 text-[var(--color-text-primary)] font-medium">Type</th>
            <th className="text-left py-2 text-[var(--color-text-primary)] font-medium">Default</th>
            <th className="text-left py-2 text-[var(--color-text-primary)] font-medium">Description</th>
          </tr>
        </thead>
        <tbody>
          {props.map((prop) => (
            <tr key={prop.name} className="border-b border-[var(--color-border-secondary)]">
              <td className="py-2 font-mono text-[var(--color-primary-500)]">{prop.name}</td>
              <td className="py-2 font-mono text-[var(--color-text-secondary)] text-xs">{prop.type}</td>
              <td className="py-2 font-mono text-[var(--color-text-secondary)]">{prop.default}</td>
              <td className="py-2 text-[var(--color-text-secondary)]">{prop.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function ComponentItem({
  name,
  description,
  type,
}: {
  name: string
  description: string
  type: 'Client' | 'Server'
}) {
  return (
    <div className="flex items-start gap-3">
      <span
        className={`shrink-0 px-2 py-0.5 rounded text-xs font-medium ${
          type === 'Client'
            ? 'bg-[var(--color-warning-50)] text-[var(--color-warning-700)]'
            : 'bg-[var(--color-success-50)] text-[var(--color-success-700)]'
        }`}
      >
        {type}
      </span>
      <div>
        <p className="font-mono text-[var(--font-size-sm)] text-[var(--color-text-primary)]">
          {name}
        </p>
        <p className="text-[var(--font-size-xs)] text-[var(--color-text-secondary)]">
          {description}
        </p>
      </div>
    </div>
  )
}

/* ============================================
   Icons
   ============================================ */

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

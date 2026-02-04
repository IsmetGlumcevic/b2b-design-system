'use client'

import {
  createContext,
  useContext,
  useCallback,
  useEffect,
  useState,
  type ReactNode,
} from 'react'
import { createPortal } from 'react-dom'
import { cn } from '@/src/lib/utils'
import { SearchModalOverlay } from './SearchModalOverlay'
import { SearchModalContent } from './SearchModalContent'
import { SearchModalInput } from './SearchModalInput'
import { SearchResultsTabs } from './SearchResultsTabs'
import { SearchResultsSection } from './SearchResultsSection'
import { SearchEmptyState } from './SearchEmptyState'
import { NoResultsState } from './NoResultsState'

/* ============================================
   Search Modal Context
   ============================================ */

export type SearchTab = 'products' | 'categories' | 'manufacturers' | 'series'

export interface SearchResult {
  products: ProductSearchResultType[]
  categories: CategorySearchResultType[]
  manufacturers: ManufacturerSearchResultType[]
  series: SeriesSearchResultType[]
}

export interface ProductSearchResultType {
  id: string
  name: string
  sku: string
  manufacturer: string
  price: number
  image?: string
  inStock: boolean
}

export interface CategorySearchResultType {
  id: string
  name: string
  productCount: number
  icon?: string
}

export interface ManufacturerSearchResultType {
  id: string
  name: string
  productCount: number
  logo?: string
}

export interface SeriesSearchResultType {
  id: string
  name: string
  manufacturer: string
  productCount: number
}

export interface RecentSearch {
  id: string
  query: string
  timestamp: Date
}

export interface TrendingSearch {
  id: string
  query: string
}

interface SearchModalContextType {
  isOpen: boolean
  query: string
  setQuery: (query: string) => void
  activeTab: SearchTab
  setActiveTab: (tab: SearchTab) => void
  results: SearchResult | null
  isLoading: boolean
  recentSearches: RecentSearch[]
  trendingSearches: TrendingSearch[]
  onClose: () => void
  onSearch: (query: string) => void
  onClearRecentSearch: (id: string) => void
  onQuickAddToCart?: (productId: string) => void
  onNavigateToSearch?: (query: string) => void
  onNavigateToProduct?: (productId: string) => void
  onNavigateToCategory?: (categoryId: string) => void
  onNavigateToManufacturer?: (manufacturerId: string) => void
}

const SearchModalContext = createContext<SearchModalContextType | null>(null)

export function useSearchModal() {
  const context = useContext(SearchModalContext)
  if (!context) {
    throw new Error('useSearchModal must be used within SearchModal')
  }
  return context
}

/* ============================================
   Search Modal Props
   ============================================ */

export interface SearchModalProps {
  /** Whether the modal is open */
  isOpen: boolean
  /** Callback when modal should close */
  onClose: () => void
  /** Callback when search is triggered */
  onSearch?: (query: string) => void
  /** Search results */
  results?: SearchResult | null
  /** Loading state */
  isLoading?: boolean
  /** Recent searches */
  recentSearches?: RecentSearch[]
  /** Trending searches */
  trendingSearches?: TrendingSearch[]
  /** Callback to clear a recent search */
  onClearRecentSearch?: (id: string) => void
  /** Callback for quick add to cart */
  onQuickAddToCart?: (productId: string) => void
  /** Callback to navigate to search results page */
  onNavigateToSearch?: (query: string) => void
  /** Callback to navigate to product detail page */
  onNavigateToProduct?: (productId: string) => void
  /** Callback to navigate to category page */
  onNavigateToCategory?: (categoryId: string) => void
  /** Callback to navigate to manufacturer page */
  onNavigateToManufacturer?: (manufacturerId: string) => void
  /** Custom className */
  className?: string
  /** Children (custom content) */
  children?: ReactNode
}

/* ============================================
   Search Modal Component
   ============================================ */

/**
 * Full-screen search modal with instant search, tabs, and result sections.
 * Supports keyboard navigation (ESC to close, arrow keys to navigate).
 *
 * @example
 * const [isOpen, setIsOpen] = useState(false)
 * const [results, setResults] = useState(null)
 *
 * const handleSearch = async (query: string) => {
 *   const data = await fetchSearchResults(query)
 *   setResults(data)
 * }
 *
 * <SearchModal
 *   isOpen={isOpen}
 *   onClose={() => setIsOpen(false)}
 *   onSearch={handleSearch}
 *   results={results}
 * />
 */
export function SearchModal({
  isOpen,
  onClose,
  onSearch,
  results = null,
  isLoading = false,
  recentSearches = [],
  trendingSearches = [],
  onClearRecentSearch,
  onQuickAddToCart,
  onNavigateToSearch,
  onNavigateToProduct,
  onNavigateToCategory,
  onNavigateToManufacturer,
  className,
  children,
}: SearchModalProps) {
  const [query, setQuery] = useState('')
  const [activeTab, setActiveTab] = useState<SearchTab>('products')

  // Handle Escape key
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    },
    [onClose]
  )

  // Handle search
  const handleSearch = useCallback(
    (searchQuery: string) => {
      setQuery(searchQuery)
      onSearch?.(searchQuery)
    },
    [onSearch]
  )

  // Handle clear recent search
  const handleClearRecentSearch = useCallback(
    (id: string) => {
      onClearRecentSearch?.(id)
    },
    [onClearRecentSearch]
  )

  // Add/remove event listeners and lock body scroll
  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'

      return () => {
        document.removeEventListener('keydown', handleKeyDown)
        document.body.style.overflow = ''
      }
    }
  }, [isOpen, handleKeyDown])

  // Reset state when modal closes
  useEffect(() => {
    if (!isOpen) {
      setQuery('')
      setActiveTab('products')
    }
  }, [isOpen])

  // Don't render if not open or on server
  if (!isOpen || typeof document === 'undefined') {
    return null
  }

  const contextValue: SearchModalContextType = {
    isOpen,
    query,
    setQuery,
    activeTab,
    setActiveTab,
    results,
    isLoading,
    recentSearches,
    trendingSearches,
    onClose,
    onSearch: handleSearch,
    onClearRecentSearch: handleClearRecentSearch,
    onQuickAddToCart,
    onNavigateToSearch,
    onNavigateToProduct,
    onNavigateToCategory,
    onNavigateToManufacturer,
  }

  return createPortal(
    <SearchModalContext.Provider value={contextValue}>
      <div
        className={cn(
          'fixed inset-0',
          'z-[var(--z-modal-backdrop)]',
          'flex flex-col',
          className
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Pretraga"
      >
        {children || (
          <>
            <SearchModalOverlay onClick={onClose} />
            <SearchModalContent>
              <SearchModalInput />
              {query.length === 0 ? (
                <SearchEmptyState />
              ) : results === null || isLoading ? (
                <SearchLoadingState />
              ) : hasResults(results) ? (
                <>
                  <SearchResultsTabs />
                  <SearchResultsSection />
                </>
              ) : (
                <NoResultsState />
              )}
              <SearchModalFooter />
            </SearchModalContent>
          </>
        )}
      </div>
    </SearchModalContext.Provider>,
    document.body
  )
}

/* ============================================
   Helper Functions
   ============================================ */

function hasResults(results: SearchResult): boolean {
  return (
    results.products.length > 0 ||
    results.categories.length > 0 ||
    results.manufacturers.length > 0 ||
    results.series.length > 0
  )
}

/* ============================================
   Search Loading State
   ============================================ */

function SearchLoadingState() {
  return (
    <div className="flex-1 flex items-center justify-center py-[var(--spacing-16)]">
      <div className="flex flex-col items-center gap-[var(--spacing-4)]">
        <div className="w-8 h-8 border-2 border-[var(--color-primary-500)] border-t-transparent rounded-full animate-spin" />
        <p className="text-[var(--font-size-sm)] text-[var(--color-text-secondary)]">
          Pretraživanje...
        </p>
      </div>
    </div>
  )
}

/* ============================================
   Search Modal Footer
   ============================================ */

function SearchModalFooter() {
  const { query, onNavigateToSearch } = useSearchModal()

  return (
    <div
      className={cn(
        'flex flex-col gap-[var(--spacing-3)]',
        'sm:flex-row sm:items-center sm:justify-between',
        'px-[var(--spacing-6)] py-[var(--spacing-3)]',
        'border-t border-[var(--color-border-primary)]',
        'bg-[var(--color-bg-secondary)]',
        'text-[var(--font-size-xs)] text-[var(--color-text-tertiary)]'
      )}
    >
      <div className="flex items-center justify-center sm:justify-start">
        {onNavigateToSearch && query.length > 0 && (
          <button
            type="button"
            onClick={() => onNavigateToSearch(query)}
            className={cn(
              'text-[var(--font-size-sm)] font-medium',
              'text-[var(--color-primary-600)]',
              'hover:text-[var(--color-primary-700)]',
              'transition-colors duration-[var(--duration-150)]',
              'focus-visible:outline-none focus-visible:underline'
            )}
          >
            Pogledaj sve rezultate →
          </button>
        )}
      </div>

      <div className="flex flex-wrap items-center justify-center gap-[var(--spacing-6)]">
        <div className="flex items-center gap-[var(--spacing-2)]">
          <kbd className="px-[var(--spacing-1-5)] py-[var(--spacing-0-5)] rounded bg-[var(--color-bg-tertiary)] border border-[var(--color-border-primary)] font-mono text-[var(--font-size-xs)]">
            ESC
          </kbd>
          <span>Zatvori</span>
        </div>
        <div className="flex items-center gap-[var(--spacing-2)]">
          <kbd className="px-[var(--spacing-1-5)] py-[var(--spacing-0-5)] rounded bg-[var(--color-bg-tertiary)] border border-[var(--color-border-primary)] font-mono text-[var(--font-size-xs)]">
            ↑↓
          </kbd>
          <span>Navigacija</span>
        </div>
        <div className="flex items-center gap-[var(--spacing-2)]">
          <kbd className="px-[var(--spacing-1-5)] py-[var(--spacing-0-5)] rounded bg-[var(--color-bg-tertiary)] border border-[var(--color-border-primary)] font-mono text-[var(--font-size-xs)]">
            Enter
          </kbd>
          <span>Odaberi</span>
        </div>
      </div>
    </div>
  )
}

SearchModal.displayName = 'SearchModal'

'use client'

import { useState, useRef, useEffect, useCallback, type KeyboardEvent } from 'react'
import { cn } from '@/src/lib/utils'
import SearchMd from '@/src/components/ui/icons/Line/General/SearchMd'
import X from '@/src/components/ui/icons/Line/General/X'
import Clock from '@/src/components/ui/icons/Line/Time/Clock'
import TrendUp01 from '@/src/components/ui/icons/Line/Charts/TrendUp01'
import Trash01 from '@/src/components/ui/icons/Line/General/Trash01'
import type { SearchWithHistoryProps, SearchHistoryItem } from '../types'

/**
 * SearchWithHistory - Search input with history and trending dropdown
 *
 * Client Component - manages focus/input state
 *
 * Features:
 * - Search input with clear button
 * - Recent searches dropdown
 * - Trending searches section
 * - Keyboard navigation (arrow keys, enter)
 * - Multiple visual variants
 *
 * @example
 * ```tsx
 * <SearchWithHistory
 *   onSearch={handleSearch}
 *   recentSearches={searchHistory}
 *   trendingSearches={['laptop', 'telefon', 'slušalice']}
 *   placeholder="Pretraži proizvode..."
 * />
 * ```
 */
export function SearchWithHistory({
  onSearch,
  recentSearches = [],
  trendingSearches = [],
  placeholder = 'Pretraži...',
  shortcut,
  size = 'md',
  variant = 'default',
  colorScheme = 'light',
  onClearHistory,
}: SearchWithHistoryProps) {
  const [query, setQuery] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [focusedIndex, setFocusedIndex] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Combined items for keyboard navigation
  const allItems = [
    ...recentSearches.map((s) => ({ type: 'recent' as const, query: s.query, id: s.id })),
    ...trendingSearches.map((q, i) => ({ type: 'trending' as const, query: q, id: `trending-${i}` })),
  ]

  // Size styles
  const sizeStyles = {
    sm: {
      input: 'h-8 text-xs px-3',
      icon: 'w-4 h-4',
      dropdown: 'text-xs',
    },
    md: {
      input: 'h-10 text-sm px-4',
      icon: 'w-4 h-4',
      dropdown: 'text-sm',
    },
    lg: {
      input: 'h-12 text-base px-5',
      icon: 'w-5 h-5',
      dropdown: 'text-base',
    },
  }

  // Variant styles
  const variantStyles = {
    default: {
      light: 'bg-[var(--color-bg-secondary)] border border-[var(--color-border-primary)] focus-within:border-[var(--color-primary-500)] focus-within:ring-2 focus-within:ring-[var(--color-primary-500)]/20',
      dark: 'bg-[var(--color-secondary-800)] border border-[var(--color-secondary-600)] focus-within:border-[var(--color-primary-400)] focus-within:ring-2 focus-within:ring-[var(--color-primary-400)]/20',
    },
    pill: {
      light: 'bg-[var(--color-bg-secondary)] border border-[var(--color-border-primary)] rounded-full focus-within:border-[var(--color-primary-500)] focus-within:ring-2 focus-within:ring-[var(--color-primary-500)]/20',
      dark: 'bg-[var(--color-secondary-800)] border border-[var(--color-secondary-600)] rounded-full focus-within:border-[var(--color-primary-400)] focus-within:ring-2 focus-within:ring-[var(--color-primary-400)]/20',
    },
    flat: {
      light: 'bg-[var(--color-bg-tertiary)] focus-within:bg-[var(--color-bg-secondary)] focus-within:ring-2 focus-within:ring-[var(--color-primary-500)]/20',
      dark: 'bg-[var(--color-secondary-700)] focus-within:bg-[var(--color-secondary-800)] focus-within:ring-2 focus-within:ring-[var(--color-primary-400)]/20',
    },
  }

  // Text color styles
  const textStyles = {
    light: {
      primary: 'text-[var(--color-text-primary)]',
      secondary: 'text-[var(--color-text-secondary)]',
      tertiary: 'text-[var(--color-text-tertiary)]',
      placeholder: 'placeholder:text-[var(--color-text-tertiary)]',
    },
    dark: {
      primary: 'text-[var(--color-text-inverse)]',
      secondary: 'text-[var(--color-text-inverse)]/70',
      tertiary: 'text-[var(--color-text-inverse)]/50',
      placeholder: 'placeholder:text-[var(--color-text-inverse)]/50',
    },
  }

  // Dropdown styles
  const dropdownStyles = {
    light: 'bg-[var(--color-bg-primary)] border-[var(--color-border-primary)]',
    dark: 'bg-[var(--color-secondary-900)] border-[var(--color-secondary-700)]',
  }

  const itemStyles = {
    light: 'hover:bg-[var(--color-bg-secondary)]',
    dark: 'hover:bg-[var(--color-secondary-800)]',
  }

  // Handle search submit
  const handleSubmit = useCallback(
    (searchQuery: string) => {
      if (searchQuery.trim()) {
        onSearch(searchQuery.trim())
        setQuery('')
        setIsOpen(false)
        inputRef.current?.blur()
      }
    },
    [onSearch]
  )

  // Handle keyboard navigation
  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (!isOpen && (e.key === 'ArrowDown' || e.key === 'ArrowUp')) {
        setIsOpen(true)
        return
      }

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault()
          setFocusedIndex((prev) => (prev < allItems.length - 1 ? prev + 1 : 0))
          break
        case 'ArrowUp':
          e.preventDefault()
          setFocusedIndex((prev) => (prev > 0 ? prev - 1 : allItems.length - 1))
          break
        case 'Enter':
          e.preventDefault()
          if (focusedIndex >= 0 && focusedIndex < allItems.length) {
            handleSubmit(allItems[focusedIndex].query)
          } else if (query.trim()) {
            handleSubmit(query)
          }
          break
        case 'Escape':
          setIsOpen(false)
          setFocusedIndex(-1)
          inputRef.current?.blur()
          break
      }
    },
    [isOpen, focusedIndex, allItems, query, handleSubmit]
  )

  // Handle click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
        setFocusedIndex(-1)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Reset focused index when dropdown closes
  useEffect(() => {
    if (!isOpen) {
      setFocusedIndex(-1)
    }
  }, [isOpen])

  // Global keyboard shortcut
  useEffect(() => {
    if (!shortcut) return

    function handleGlobalKeyDown(e: globalThis.KeyboardEvent) {
      // Handle Cmd/Ctrl + K shortcut
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        inputRef.current?.focus()
        setIsOpen(true)
      }
    }

    document.addEventListener('keydown', handleGlobalKeyDown)
    return () => document.removeEventListener('keydown', handleGlobalKeyDown)
  }, [shortcut])

  const showDropdown = isOpen && (recentSearches.length > 0 || trendingSearches.length > 0)

  return (
    <div ref={containerRef} className="relative w-full">
      {/* Search Input */}
      <div
        className={cn(
          'flex items-center gap-2 rounded-lg transition-all',
          variantStyles[variant][colorScheme],
          variant === 'pill' && 'rounded-full'
        )}
      >
        <SearchMd
          className={cn(
            'flex-shrink-0 ml-3',
            sizeStyles[size].icon,
            textStyles[colorScheme].tertiary
          )}
        />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className={cn(
            'flex-1 bg-transparent border-none outline-none',
            sizeStyles[size].input,
            textStyles[colorScheme].primary,
            textStyles[colorScheme].placeholder
          )}
        />

        {/* Keyboard shortcut badge */}
        {shortcut && !query && (
          <kbd
            className={cn(
              'hidden sm:inline-flex items-center gap-1 px-2 py-0.5 mr-2',
              'text-xs font-mono rounded border',
              colorScheme === 'dark'
                ? 'bg-[var(--color-secondary-700)] border-[var(--color-secondary-600)] text-[var(--color-text-inverse)]/60'
                : 'bg-[var(--color-bg-tertiary)] border-[var(--color-border-primary)] text-[var(--color-text-tertiary)]'
            )}
          >
            {shortcut}
          </kbd>
        )}

        {/* Clear button */}
        {query && (
          <button
            type="button"
            onClick={() => setQuery('')}
            className={cn(
              'flex-shrink-0 mr-2 p-1 rounded-full',
              'hover:bg-[var(--color-bg-tertiary)] transition-colors',
              textStyles[colorScheme].tertiary
            )}
            aria-label="Obriši pretragu"
          >
            <X className={sizeStyles[size].icon} />
          </button>
        )}
      </div>

      {/* Dropdown */}
      {showDropdown && (
        <div
          className={cn(
            'absolute top-full left-0 right-0 mt-2 z-50',
            'rounded-xl overflow-hidden shadow-lg border',
            'dropdown-enter dropdown-enter-active',
            dropdownStyles[colorScheme]
          )}
        >
          {/* Recent Searches */}
          {recentSearches.length > 0 && (
            <div className="py-2">
              <div className="flex items-center justify-between px-4 py-1.5">
                <span className={cn('text-xs font-medium uppercase tracking-wider', textStyles[colorScheme].tertiary)}>
                  Nedavne pretrage
                </span>
                {onClearHistory && (
                  <button
                    type="button"
                    onClick={onClearHistory}
                    className={cn(
                      'text-xs flex items-center gap-1 px-2 py-1 rounded',
                      'hover:bg-[var(--color-bg-secondary)] transition-colors',
                      textStyles[colorScheme].tertiary
                    )}
                  >
                    <Trash01 className="w-3 h-3" />
                    Obriši
                  </button>
                )}
              </div>
              {recentSearches.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleSubmit(item.query)}
                  className={cn(
                    'flex items-center gap-3 w-full px-4 py-2.5 text-left transition-colors',
                    sizeStyles[size].dropdown,
                    itemStyles[colorScheme],
                    textStyles[colorScheme].primary,
                    focusedIndex === index && (colorScheme === 'dark' ? 'bg-[var(--color-secondary-800)]' : 'bg-[var(--color-bg-secondary)]')
                  )}
                >
                  <Clock className={cn('w-4 h-4', textStyles[colorScheme].tertiary)} />
                  <span className="flex-1 truncate">{item.query}</span>
                  {item.resultCount !== undefined && (
                    <span className={cn('text-xs', textStyles[colorScheme].tertiary)}>
                      {item.resultCount} rezultata
                    </span>
                  )}
                </button>
              ))}
            </div>
          )}

          {/* Divider */}
          {recentSearches.length > 0 && trendingSearches.length > 0 && (
            <div className="border-t border-[var(--color-border-primary)]" />
          )}

          {/* Trending Searches */}
          {trendingSearches.length > 0 && (
            <div className="py-2">
              <div className="px-4 py-1.5">
                <span className={cn('text-xs font-medium uppercase tracking-wider', textStyles[colorScheme].tertiary)}>
                  Popularno
                </span>
              </div>
              {trendingSearches.map((query, index) => {
                const itemIndex = recentSearches.length + index
                return (
                  <button
                    key={`trending-${index}`}
                    type="button"
                    onClick={() => handleSubmit(query)}
                    className={cn(
                      'flex items-center gap-3 w-full px-4 py-2.5 text-left transition-colors',
                      sizeStyles[size].dropdown,
                      itemStyles[colorScheme],
                      textStyles[colorScheme].primary,
                      focusedIndex === itemIndex && (colorScheme === 'dark' ? 'bg-[var(--color-secondary-800)]' : 'bg-[var(--color-bg-secondary)]')
                    )}
                  >
                    <TrendUp01 className={cn('w-4 h-4 text-[var(--color-primary-500)]')} />
                    <span className="flex-1 truncate">{query}</span>
                  </button>
                )
              })}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default SearchWithHistory

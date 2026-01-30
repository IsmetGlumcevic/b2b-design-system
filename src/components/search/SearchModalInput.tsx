'use client'

import {
  forwardRef,
  useEffect,
  useRef,
  type InputHTMLAttributes,
  type KeyboardEvent,
} from 'react'
import { cn } from '@/src/lib/utils'
import { useSearchModal } from './SearchModal'

/* ============================================
   Search Modal Input Props
   ============================================ */

export interface SearchModalInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  /** Debounce delay in milliseconds */
  debounceMs?: number
}

/* ============================================
   Search Modal Input Component
   ============================================ */

/**
 * Large search input with instant search functionality.
 * Auto-focuses on mount and supports keyboard navigation.
 *
 * @example
 * <SearchModalInput placeholder="Pretraži proizvode..." />
 */
export const SearchModalInput = forwardRef<HTMLInputElement, SearchModalInputProps>(
  ({ debounceMs = 300, className, placeholder = 'Pretraži proizvode, kategorije, proizvođače...', ...props }, ref) => {
    const { query, setQuery, onSearch, onClose } = useSearchModal()
    const inputRef = useRef<HTMLInputElement>(null)
    const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null)

    // Merge refs
    const mergedRef = (node: HTMLInputElement | null) => {
      inputRef.current = node
      if (typeof ref === 'function') ref(node)
      else if (ref) ref.current = node
    }

    // Auto-focus on mount
    useEffect(() => {
      const timer = setTimeout(() => {
        inputRef.current?.focus()
      }, 100)
      return () => clearTimeout(timer)
    }, [])

    // Handle input change with debounce
    const handleChange = (value: string) => {
      setQuery(value)

      if (debounceRef.current) {
        clearTimeout(debounceRef.current)
      }

      debounceRef.current = setTimeout(() => {
        if (value.trim().length >= 2) {
          onSearch(value.trim())
        }
      }, debounceMs)
    }

    // Cleanup debounce on unmount
    useEffect(() => {
      return () => {
        if (debounceRef.current) {
          clearTimeout(debounceRef.current)
        }
      }
    }, [])

    // Handle keyboard shortcuts
    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Escape') {
        if (query.length > 0) {
          setQuery('')
          event.stopPropagation()
        }
      }
    }

    // Clear input
    const handleClear = () => {
      setQuery('')
      inputRef.current?.focus()
    }

    return (
      <div
        className={cn(
          'flex items-center gap-[var(--spacing-3)]',
          'px-[var(--spacing-6)] py-[var(--spacing-4)]',
          'border-b border-[var(--color-border-primary)]',
          className
        )}
      >
        {/* Search Icon */}
        <SearchIcon className="shrink-0 w-6 h-6 text-[var(--color-text-tertiary)]" />

        {/* Input */}
        <input
          ref={mergedRef}
          type="text"
          value={query}
          onChange={(e) => handleChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className={cn(
            'flex-1',
            'bg-transparent',
            'text-[var(--font-size-lg)] text-[var(--color-text-primary)]',
            'placeholder:text-[var(--color-text-tertiary)]',
            'outline-none',
            'min-w-0'
          )}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck={false}
          {...props}
        />

        {/* Clear button (when query exists) */}
        {query.length > 0 && (
          <button
            type="button"
            onClick={handleClear}
            className={cn(
              'shrink-0',
              'p-[var(--spacing-1)]',
              'rounded-[var(--radius-md)]',
              'text-[var(--color-text-tertiary)]',
              'transition-colors duration-[var(--duration-150)]',
              'hover:text-[var(--color-text-primary)]',
              'hover:bg-[var(--color-bg-tertiary)]',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-border-focus)]'
            )}
            aria-label="Obriši pretragu"
          >
            <ClearIcon className="w-5 h-5" />
          </button>
        )}

        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className={cn(
            'shrink-0',
            'p-[var(--spacing-1)]',
            'rounded-[var(--radius-md)]',
            'text-[var(--color-text-tertiary)]',
            'transition-colors duration-[var(--duration-150)]',
            'hover:text-[var(--color-text-primary)]',
            'hover:bg-[var(--color-bg-tertiary)]',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-border-focus)]'
          )}
          aria-label="Zatvori pretragu"
        >
          <CloseIcon className="w-5 h-5" />
        </button>
      </div>
    )
  }
)

SearchModalInput.displayName = 'SearchModalInput'

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
      role="img"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}

function ClearIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      role="img"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m15 9-6 6" />
      <path d="m9 9 6 6" />
    </svg>
  )
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      role="img"
      aria-hidden="true"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}

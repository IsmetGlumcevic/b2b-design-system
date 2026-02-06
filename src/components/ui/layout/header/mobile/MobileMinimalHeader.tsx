'use client'

import { useState, useCallback, type FormEvent } from 'react'
import { cn } from '@/src/lib/utils'
import Menu01 from '@/src/components/ui/icons/Line/General/Menu01'
import SearchMd from '@/src/components/ui/icons/Line/General/SearchMd'
import ShoppingCart01 from '@/src/components/ui/icons/Line/Finance & eCommerce/ShoppingCart01'
import User01 from '@/src/components/ui/icons/Line/Users/User01'
import X from '@/src/components/ui/icons/Line/General/X'
import type { MobileMinimalHeaderProps } from '../types'

/**
 * MobileMinimalHeader - Compact mobile header with search bar
 *
 * Client Component - manages search state
 *
 * Features:
 * - Hamburger menu button
 * - Full-width search bar (optional)
 * - Cart button with badge
 * - Account button
 * - Sticky support
 * - Dark/light themes
 *
 * @example
 * ```tsx
 * <MobileMinimalHeader
 *   logo={<Logo />}
 *   cartCount={5}
 *   showSearch
 *   onMenuOpen={() => setMenuOpen(true)}
 *   onSearch={handleSearch}
 *   sticky
 * />
 * ```
 */
export function MobileMinimalHeader({
  logo,
  cartCount = 0,
  showSearch = true,
  searchPlaceholder = 'Pretraži...',
  onMenuOpen,
  onSearch,
  onCartClick,
  onAccountClick,
  colorScheme = 'light',
  sticky = false,
  className,
  ...props
}: MobileMinimalHeaderProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [isSearchFocused, setIsSearchFocused] = useState(false)

  const handleSearchSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault()
      if (searchQuery.trim() && onSearch) {
        onSearch(searchQuery.trim())
        setSearchQuery('')
      }
    },
    [searchQuery, onSearch]
  )

  // Color scheme styles
  const headerStyles = {
    light: 'bg-[var(--color-bg-primary)] border-b border-[var(--color-border-primary)]',
    dark: 'bg-[var(--color-secondary-900)] border-b border-[var(--color-secondary-700)]',
  }

  const textStyles = {
    light: {
      primary: 'text-[var(--color-text-primary)]',
      secondary: 'text-[var(--color-text-secondary)]',
      tertiary: 'text-[var(--color-text-tertiary)]',
    },
    dark: {
      primary: 'text-[var(--color-text-inverse)]',
      secondary: 'text-[var(--color-text-inverse)]/70',
      tertiary: 'text-[var(--color-text-inverse)]/50',
    },
  }

  const searchStyles = {
    light: cn(
      'bg-[var(--color-bg-secondary)] border border-[var(--color-border-primary)]',
      'focus-within:border-[var(--color-primary-500)] focus-within:ring-2 focus-within:ring-[var(--color-primary-500)]/20'
    ),
    dark: cn(
      'bg-[var(--color-secondary-800)] border border-[var(--color-secondary-600)]',
      'focus-within:border-[var(--color-primary-400)] focus-within:ring-2 focus-within:ring-[var(--color-primary-400)]/20'
    ),
  }

  const buttonStyles = {
    light: 'hover:bg-[var(--color-bg-secondary)] active:bg-[var(--color-bg-tertiary)]',
    dark: 'hover:bg-[var(--color-secondary-800)] active:bg-[var(--color-secondary-700)]',
  }

  return (
    <header
      className={cn(
        'w-full',
        headerStyles[colorScheme],
        sticky && 'sticky top-0 z-40',
        className
      )}
      {...props}
    >
      {/* Main Header Row */}
      <div className="flex items-center gap-2 px-3 h-14">
        {/* Menu Button */}
        <button
          type="button"
          onClick={onMenuOpen}
          className={cn(
            'flex-shrink-0 p-2 rounded-lg transition-colors',
            buttonStyles[colorScheme],
            textStyles[colorScheme].primary
          )}
          aria-label="Otvori meni"
        >
          <Menu01 className="w-6 h-6" />
        </button>

        {/* Logo */}
        {logo && (
          <div className="flex-shrink-0">
            {logo}
          </div>
        )}

        {/* Spacer */}
        <div className="flex-1" />

        {/* Account Button */}
        <button
          type="button"
          onClick={onAccountClick}
          className={cn(
            'flex-shrink-0 p-2 rounded-lg transition-colors',
            buttonStyles[colorScheme],
            textStyles[colorScheme].primary
          )}
          aria-label="Moj nalog"
        >
          <User01 className="w-6 h-6" />
        </button>

        {/* Cart Button */}
        <button
          type="button"
          onClick={onCartClick}
          className={cn(
            'relative flex-shrink-0 p-2 rounded-lg transition-colors',
            buttonStyles[colorScheme],
            textStyles[colorScheme].primary
          )}
          aria-label={`Korpa (${cartCount} artikala)`}
        >
          <ShoppingCart01 className="w-6 h-6" />
          {cartCount > 0 && (
            <span
              className={cn(
                'absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px]',
                'flex items-center justify-center',
                'px-1 text-[10px] font-bold leading-none',
                'bg-[var(--color-primary-500)] text-white rounded-full'
              )}
            >
              {cartCount > 99 ? '99+' : cartCount}
            </span>
          )}
        </button>
      </div>

      {/* Search Bar Row (optional) */}
      {showSearch && (
        <div className="px-3 pb-3">
          <form onSubmit={handleSearchSubmit} className="w-full">
            <div
              className={cn(
                'flex items-center gap-2 h-10 px-3 rounded-full transition-all',
                searchStyles[colorScheme]
              )}
            >
              <SearchMd
                className={cn('w-5 h-5 flex-shrink-0', textStyles[colorScheme].tertiary)}
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                placeholder={searchPlaceholder}
                className={cn(
                  'flex-1 bg-transparent border-none outline-none text-sm',
                  textStyles[colorScheme].primary,
                  `placeholder:${textStyles[colorScheme].tertiary}`
                )}
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className={cn(
                    'flex-shrink-0 p-1 rounded-full',
                    'hover:bg-[var(--color-bg-tertiary)] transition-colors',
                    textStyles[colorScheme].tertiary
                  )}
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </form>
        </div>
      )}
    </header>
  )
}

export default MobileMinimalHeader

'use client'

import { forwardRef, useState, useRef, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { cn } from '@/src/lib/utils'
import { Avatar } from '@/src/components/ui/Avatar/Avatar'
import { BrowsingHistoryPanel } from './BrowsingHistoryPanel'
import User01 from '@/src/components/ui/icons/Line/Users/User01'
import Settings01 from '@/src/components/ui/icons/Line/General/Settings01'
import LogOut01 from '@/src/components/ui/icons/Line/General/LogOut01'
import Heart from '@/src/components/ui/icons/Line/General/Heart'
import Clock from '@/src/components/ui/icons/Line/Time/Clock'
import type { RichAccountDropdownProps, AccountMenuItem } from '../types'

// Internal icon for file/document
function FileIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
    </svg>
  )
}

const defaultMenuItems: AccountMenuItem[] = [
  { label: 'Moj profil', href: '/account/profile', icon: <User01 className="h-4 w-4" /> },
  { label: 'Moje narudžbe', href: '/account/orders', icon: <FileIcon className="h-4 w-4" /> },
  { label: 'Lista želja', href: '/account/wishlist', icon: <Heart className="h-4 w-4" /> },
  { label: 'Nedavno pregledano', href: '/account/history', icon: <Clock className="h-4 w-4" /> },
  { label: 'Postavke', href: '/account/settings', icon: <Settings01 className="h-4 w-4" /> },
]

/**
 * RichAccountDropdown - Enhanced account dropdown with browsing history panel
 *
 * Client Component - manages hover/click state
 *
 * Features:
 * - User info with avatar
 * - Navigation menu items
 * - Optional browsing history panel (TEMU-style)
 * - Hover-triggered dropdown
 * - Keyboard accessible
 *
 * @example
 * ```tsx
 * <RichAccountDropdown
 *   user={currentUser}
 *   onLogout={handleLogout}
 *   browsingHistory={recentProducts}
 *   showHistory
 * />
 * ```
 */
export const RichAccountDropdown = forwardRef<HTMLButtonElement, RichAccountDropdownProps>(
  (
    {
      user,
      onLogout,
      menuItems = defaultMenuItems,
      browsingHistory = [],
      showHistory = true,
      maxHistoryItems = 4,
      colorScheme = 'light',
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)
    const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null)

    const initials =
      user.initials ||
      user.name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2)

    // Handle hover with delay
    const handleMouseEnter = useCallback(() => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current)
      }
      hoverTimeoutRef.current = setTimeout(() => {
        setIsOpen(true)
      }, 100)
    }, [])

    const handleMouseLeave = useCallback(() => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current)
      }
      hoverTimeoutRef.current = setTimeout(() => {
        setIsOpen(false)
      }, 150)
    }, [])

    // Handle click outside
    useEffect(() => {
      function handleClickOutside(event: MouseEvent) {
        if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
          setIsOpen(false)
        }
      }

      if (isOpen) {
        document.addEventListener('mousedown', handleClickOutside)
      }

      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [isOpen])

    // Handle escape key
    useEffect(() => {
      function handleEscape(event: KeyboardEvent) {
        if (event.key === 'Escape' && isOpen) {
          setIsOpen(false)
        }
      }

      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }, [isOpen])

    // Cleanup timeout on unmount
    useEffect(() => {
      return () => {
        if (hoverTimeoutRef.current) {
          clearTimeout(hoverTimeoutRef.current)
        }
      }
    }, [])

    // Color scheme styles
    const dropdownStyles = {
      light: 'bg-[var(--color-bg-primary)] border-[var(--color-border-primary)]',
      dark: 'bg-[var(--color-secondary-900)] border-[var(--color-secondary-700)]',
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

    const menuItemStyles = {
      light: 'hover:bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)]',
      dark: 'hover:bg-[var(--color-secondary-800)] text-[var(--color-text-inverse)]',
    }

    const showHistoryPanel = showHistory && browsingHistory.length > 0
    const dropdownWidth = showHistoryPanel ? 'w-[500px]' : 'w-[240px]'

    return (
      <div
        ref={containerRef}
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Trigger Button */}
        <button
          ref={ref}
          type="button"
          className="p-0 border-0 bg-transparent focus-visible:ring-2 focus-visible:ring-[var(--color-primary-500)] focus-visible:ring-offset-2 rounded-full"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          <Avatar
            src={user.avatar}
            alt={user.name}
            initials={initials}
            size="sm"
            className="cursor-pointer"
          />
        </button>

        {/* Dropdown Panel */}
        {isOpen && (
          <div
            className={cn(
              'absolute top-full right-0 mt-2 z-50',
              dropdownWidth,
              'rounded-xl overflow-hidden',
              'shadow-lg border',
              'dropdown-enter dropdown-enter-active',
              dropdownStyles[colorScheme]
            )}
            role="menu"
          >
            <div className={cn('flex', showHistoryPanel && 'divide-x divide-[var(--color-border-primary)]')}>
              {/* Left side - Menu */}
              <div className={showHistoryPanel ? 'w-[240px]' : 'w-full'}>
                {/* User Info */}
                <div className="px-4 py-3 border-b border-[var(--color-border-primary)]">
                  <div className="flex items-center gap-3">
                    <Avatar
                      src={user.avatar}
                      alt={user.name}
                      initials={initials}
                      size="md"
                    />
                    <div className="flex-1 min-w-0">
                      <p className={cn('text-sm font-semibold truncate', textStyles[colorScheme].primary)}>
                        {user.name}
                      </p>
                      <p className={cn('text-xs truncate', textStyles[colorScheme].secondary)}>
                        {user.email}
                      </p>
                      {user.customerId && (
                        <p className={cn('text-[10px] mt-0.5', textStyles[colorScheme].tertiary)}>
                          Klijent #{user.customerId}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Menu Items */}
                <div className="py-1">
                  {menuItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        'flex items-center gap-3 px-4 py-2.5 text-sm transition-colors',
                        menuItemStyles[colorScheme]
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.icon && (
                        <span className={textStyles[colorScheme].secondary}>
                          {item.icon}
                        </span>
                      )}
                      {item.label}
                    </Link>
                  ))}
                </div>

                {/* Divider */}
                <div className="border-t border-[var(--color-border-primary)]" />

                {/* Logout */}
                <div className="py-1">
                  <button
                    type="button"
                    onClick={() => {
                      setIsOpen(false)
                      onLogout()
                    }}
                    className={cn(
                      'flex items-center gap-3 w-full px-4 py-2.5 text-sm',
                      'text-[var(--color-error-600)] hover:bg-[var(--color-error-50)]',
                      'transition-colors'
                    )}
                  >
                    <LogOut01 className="h-4 w-4" />
                    Odjava
                  </button>
                </div>
              </div>

              {/* Right side - Browsing History */}
              {showHistoryPanel && (
                <div className="flex-1">
                  <BrowsingHistoryPanel
                    products={browsingHistory}
                    maxItems={maxHistoryItems}
                    viewAllHref="/account/history"
                    colorScheme={colorScheme}
                    className="h-full"
                  />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    )
  }
)

RichAccountDropdown.displayName = 'RichAccountDropdown'

export default RichAccountDropdown

'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { cn } from '@/src/lib/utils'
import ChevronDown from '@/src/components/ui/icons/Line/Arrows/ChevronDown'
import ChevronRight from '@/src/components/ui/icons/Line/Arrows/ChevronRight'
import { MobileMenuButton } from './MobileMenuButton'
import { MobileMenu } from './MobileMenu'
import type { MainNavigationProps, Category } from './types'

/**
 * MainNavigation - Main navigation component (Client Component)
 *
 * Shows horizontal navigation on desktop, hamburger menu on mobile.
 *
 * @example
 * <MainNavigation categories={categories} />
 */
export function MainNavigation({
  categories,
  mobileBreakpoint = 'xl',
  triggerLabel = 'Kategorije',
  showIcons = false,
  colorScheme = 'light',
  contact,
}: MainNavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const navRef = useRef<HTMLElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdown(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleMouseEnter = (categoryId: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setOpenDropdown(categoryId)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null)
    }, 150)
  }

  const breakpointClass = {
    md: 'md:flex',
    lg: 'lg:flex',
    xl: 'xl:flex',
  }[mobileBreakpoint]

  const mobileBreakpointClass = {
    md: 'md:hidden',
    lg: 'lg:hidden',
    xl: 'xl:hidden',
  }[mobileBreakpoint]

  return (
    <>
      {/* Mobile menu button */}
      <div className={mobileBreakpointClass}>
        <MobileMenuButton
          isOpen={mobileMenuOpen}
          onToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
          colorScheme={colorScheme}
        />
      </div>

      {/* Desktop navigation */}
      <nav
        ref={navRef}
        role="navigation"
        aria-label="Glavna navigacija"
        className={cn('hidden', breakpointClass, 'items-center gap-[var(--spacing-1)]')}
      >
        {categories.map((category) => (
          <div
            key={category.id}
            className="relative"
            onMouseEnter={() => category.children?.length && handleMouseEnter(category.id)}
            onMouseLeave={handleMouseLeave}
          >
            {category.children?.length ? (
              <>
                <button
                  type="button"
                  aria-expanded={openDropdown === category.id}
                  aria-haspopup="menu"
                  className={cn(
                    'inline-flex items-center gap-[var(--spacing-1)]',
                    'px-[var(--spacing-3)] py-[var(--spacing-2)]',
                    'rounded-[var(--radius-button)]',
                    'text-[var(--font-size-sm)] font-medium',
                    'transition-[var(--transition-fast)]',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-500)]',
                    colorScheme === 'light' && [
                      'text-[var(--color-text-primary)]',
                      'hover:bg-[var(--color-bg-tertiary)]',
                    ],
                    colorScheme === 'dark' && [
                      'text-white',
                      'hover:bg-[var(--color-secondary-700)]',
                    ]
                  )}
                  onClick={() =>
                    setOpenDropdown(openDropdown === category.id ? null : category.id)
                  }
                >
                  {category.name}
                  <ChevronDown
                    className={cn(
                      'h-4 w-4 transition-transform',
                      openDropdown === category.id && 'rotate-180'
                    )}
                    aria-hidden="true"
                  />
                </button>

                {/* Dropdown menu */}
                {openDropdown === category.id && (
                  <div
                    role="menu"
                    className={cn(
                      'absolute left-0 top-full',
                      'mt-[var(--spacing-1)]',
                      'min-w-[220px]',
                      'py-[var(--spacing-2)]',
                      'rounded-[var(--radius-lg)]',
                      'shadow-[var(--shadow-dropdown)]',
                      'z-[var(--z-dropdown)]',
                      'animate-in fade-in-0 zoom-in-95',
                      colorScheme === 'light' && [
                        'bg-[var(--color-bg-elevated)]',
                        'border border-[var(--color-border-primary)]',
                      ],
                      colorScheme === 'dark' && [
                        'bg-[var(--color-secondary-700)]',
                        'border border-[var(--color-secondary-600)]',
                      ]
                    )}
                  >
                    {category.children.map((child) => (
                      <Link
                        key={child.id}
                        href={`/category/${child.slug}`}
                        role="menuitem"
                        className={cn(
                          'flex items-center justify-between',
                          'px-[var(--spacing-4)] py-[var(--spacing-2)]',
                          'text-[var(--font-size-sm)]',
                          'transition-[var(--transition-fast)]',
                          colorScheme === 'light' && [
                            'text-[var(--color-text-primary)]',
                            'hover:bg-[var(--color-bg-secondary)]',
                          ],
                          colorScheme === 'dark' && [
                            'text-white',
                            'hover:bg-[var(--color-secondary-600)]',
                          ]
                        )}
                      >
                        <span>{child.name}</span>
                        {child.children?.length && (
                          <ChevronRight
                            className={cn(
                              'h-4 w-4',
                              colorScheme === 'light'
                                ? 'text-[var(--color-text-tertiary)]'
                                : 'text-[var(--color-neutral-400)]'
                            )}
                          />
                        )}
                      </Link>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <Link
                href={`/category/${category.slug}`}
                className={cn(
                  'inline-flex items-center',
                  'px-[var(--spacing-3)] py-[var(--spacing-2)]',
                  'rounded-[var(--radius-button)]',
                  'text-[var(--font-size-sm)] font-medium',
                  'transition-[var(--transition-fast)]',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-500)]',
                  colorScheme === 'light' && [
                    'text-[var(--color-text-primary)]',
                    'hover:bg-[var(--color-bg-tertiary)]',
                  ],
                  colorScheme === 'dark' && [
                    'text-white',
                    'hover:bg-[var(--color-secondary-700)]',
                  ]
                )}
              >
                {category.name}
              </Link>
            )}
          </div>
        ))}
      </nav>

      {/* Mobile menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        categories={categories}
        contact={contact}
      />
    </>
  )
}

MainNavigation.displayName = 'MainNavigation'

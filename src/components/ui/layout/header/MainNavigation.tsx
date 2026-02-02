'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { cn } from '@/src/lib/utils'
import ChevronDown from '@/src/components/ui/icons/Line/Arrows/ChevronDown'
import ChevronRight from '@/src/components/ui/icons/Line/Arrows/ChevronRight'
import { MobileMenuButton } from './MobileMenuButton'
import { MobileMenu } from './MobileMenu'
import { MegaMenu, MegaMenuCategories, MegaMenuBrands } from '@/src/components/ui/MegaMenu'
import type { MainNavigationProps, Category, NavigationItem } from './types'

/**
 * MainNavigation - Main navigation component (Client Component)
 *
 * Shows horizontal navigation on desktop, hamburger menu on mobile.
 * Supports:
 * - Simple links
 * - Standard dropdowns (2 levels)
 * - MegaMenu for categories (3+ levels)
 * - MegaMenu for brands grid
 *
 * @example
 * // Legacy usage (categories only)
 * <MainNavigation categories={categories} />
 *
 * // New usage (with navigation items)
 * <MainNavigation
 *   items={navigationItems}
 *   brands={brands}
 *   services={services}
 * />
 */
export function MainNavigation({
  items,
  categories,
  brands,
  services,
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

  // Convert legacy categories to navigation items if items not provided
  const navigationItems: NavigationItem[] =
    items ??
    (categories?.map((cat) => ({
      id: cat.id,
      name: cat.name,
      slug: cat.slug,
      menuType: cat.children?.length ? 'dropdown' : 'link',
      children: cat.children,
    })) as NavigationItem[]) ??
    []

  // Get all categories for mobile menu (from items or legacy categories)
  const allCategories: Category[] =
    categories ??
    navigationItems
      .filter((item) => item.menuType === 'megamenu-categories' || item.menuType === 'dropdown')
      .flatMap((item) => item.children ?? [])

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

  // Universal handler for opening dropdown/megamenu - clears any pending close timeout
  const handleDropdownChange = (itemId: string | null) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    setOpenDropdown(itemId)
  }

  const handleMouseEnter = (itemId: string) => {
    handleDropdownChange(itemId)
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

  // Button styles for nav items
  const buttonStyles = cn(
    'inline-flex items-center gap-[var(--spacing-1)]',
    'px-[var(--spacing-3)] py-[var(--spacing-2)]',
    'rounded-[var(--radius-button)]',
    'text-[var(--font-size-sm)] font-medium',
    'transition-colors duration-150',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-500)]',
    colorScheme === 'light' && [
      'text-[var(--color-text-primary)]',
      'hover:bg-[var(--color-bg-tertiary)]',
    ],
    colorScheme === 'dark' && ['text-white', 'hover:bg-[var(--color-secondary-700)]']
  )

  // Render navigation item based on type
  const renderNavItem = (item: NavigationItem) => {
    const menuType = item.menuType ?? (item.children?.length ? 'dropdown' : 'link')

    // Simple link
    if (menuType === 'link') {
      return (
        <Link key={item.id} href={`/${item.slug}`} className={buttonStyles}>
          {item.name}
        </Link>
      )
    }

    // MegaMenu for categories (3 levels)
    if (menuType === 'megamenu-categories' && item.children) {
      return (
        <MegaMenu
          key={item.id}
          trigger={
            <span className={buttonStyles}>
              {item.name}
              <ChevronDown
                className={cn(
                  'h-4 w-4 transition-transform',
                  openDropdown === item.id && 'rotate-180'
                )}
                aria-hidden="true"
              />
            </span>
          }
          isOpen={openDropdown === item.id}
          onOpenChange={(open) => handleDropdownChange(open ? item.id : null)}
          colorScheme={colorScheme}
        >
          <MegaMenuCategories
            categories={item.children}
            colorScheme={colorScheme}
            viewAllHref={`/${item.slug}`}
            viewAllLabel={`Svi proizvodi`}
            onClose={() => handleDropdownChange(null)}
          />
        </MegaMenu>
      )
    }

    // MegaMenu for brands
    if (menuType === 'megamenu-brands' && brands) {
      return (
        <MegaMenu
          key={item.id}
          trigger={
            <span className={buttonStyles}>
              {item.name}
              <ChevronDown
                className={cn(
                  'h-4 w-4 transition-transform',
                  openDropdown === item.id && 'rotate-180'
                )}
                aria-hidden="true"
              />
            </span>
          }
          isOpen={openDropdown === item.id}
          onOpenChange={(open) => handleDropdownChange(open ? item.id : null)}
          colorScheme={colorScheme}
        >
          <MegaMenuBrands
            brands={brands}
            colorScheme={colorScheme}
            viewAllHref={`/${item.slug}`}
            viewAllLabel="Svi brendovi"
            onClose={() => handleDropdownChange(null)}
          />
        </MegaMenu>
      )
    }

    // Standard dropdown (2 levels) - legacy behavior
    if (menuType === 'dropdown' && item.children?.length) {
      return (
        <div
          key={item.id}
          className="relative"
          onMouseEnter={() => handleMouseEnter(item.id)}
          onMouseLeave={handleMouseLeave}
        >
          <button
            type="button"
            aria-expanded={openDropdown === item.id}
            aria-haspopup="menu"
            className={buttonStyles}
            onClick={() => handleDropdownChange(openDropdown === item.id ? null : item.id)}
          >
            {item.name}
            <ChevronDown
              className={cn(
                'h-4 w-4 transition-transform',
                openDropdown === item.id && 'rotate-180'
              )}
              aria-hidden="true"
            />
          </button>

          {/* Dropdown menu */}
          {openDropdown === item.id && (
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
              {item.children.map((child) => (
                <Link
                  key={child.id}
                  href={`/kategorija/${child.slug}`}
                  role="menuitem"
                  className={cn(
                    'flex items-center justify-between',
                    'px-[var(--spacing-4)] py-[var(--spacing-2)]',
                    'text-[var(--font-size-sm)]',
                    'transition-colors duration-150',
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
        </div>
      )
    }

    return null
  }

  return (
    <>
      {/* Mobile menu button - order: -1 to appear before logo on mobile */}
      <div className={cn(mobileBreakpointClass, 'order-first')}>
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
        {navigationItems.map(renderNavItem)}
      </nav>

      {/* Mobile menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        categories={allCategories}
        brands={brands}
        services={services}
        contact={contact}
      />
    </>
  )
}

MainNavigation.displayName = 'MainNavigation'

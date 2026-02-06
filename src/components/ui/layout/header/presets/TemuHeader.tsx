'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'
import { cn } from '@/src/lib/utils'

// Core components
import { Header } from '../core/Header'
import { HeaderMain } from '../core/HeaderMain'
import { Logo } from '../core/Logo'
import { CartButton } from '../core/CartButton'

// Slot components
import { PromoTopBar } from '../slots/PromoTopBar'
import { BenefitsBar } from '../slots/BenefitsBar'
import { TrustBar } from '../slots/TrustBar'
import { QuickLinksRow } from '../slots/QuickLinksRow'
import { CountdownBanner } from '../slots/CountdownBanner'

// Mega menu
import { VisualMegaMenu } from '../mega-menu/VisualMegaMenu'

// Account
import { RichAccountDropdown } from '../account/RichAccountDropdown'

// Search
import { SearchWithHistory } from '../search/SearchWithHistory'

// Mobile
import { MobileMinimalHeader } from '../mobile/MobileMinimalHeader'
import { MobileCategorySidebar } from '../mobile/MobileCategorySidebar'

// Support dropdown
import { SupportDropdown } from '../core/SupportDropdown'

// Icons
import User01 from '@/src/components/ui/icons/Line/Users/User01'

import type { TemuHeaderProps } from '../types'

/**
 * TemuHeader - Complete TEMU-style header preset
 *
 * Client Component - manages all interactive state
 *
 * This is a fully composed header that includes:
 * - PromoTopBar OR BenefitsBar (configurable)
 * - Main header with logo, search, categories, and actions
 * - TrustBar below main header
 * - CountdownBanner (optional)
 * - Mobile-specific header and sidebar
 *
 * Features:
 * - Responsive (desktop/mobile views)
 * - Visual mega menu with categories
 * - Rich account dropdown with browsing history
 * - Search with history and trending
 * - Sticky support
 * - Full theme support
 *
 * @example
 * ```tsx
 * <TemuHeader
 *   categories={visualCategories}
 *   promoMessages={promoMessages}
 *   trustBadges={trustBadges}
 *   user={currentUser}
 *   cartCount={5}
 *   onSearch={handleSearch}
 *   onLogout={handleLogout}
 *   sticky
 * />
 * ```
 */
export function TemuHeader({
  promoMessages,
  benefits,
  trustBadges,
  quickLinks,
  categories,
  featuredSubcategories,
  trendingProducts,
  brands,
  user,
  browsingHistory,
  recentSearches,
  trendingSearches,
  onSearch,
  onLogout,
  cartCount = 0,
  countdown,
  promoCard,
  colorScheme = 'light',
  sticky = false,
  contact,
  className,
  ...props
}: TemuHeaderProps) {
  const [megaMenuOpen, setMegaMenuOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Search handler
  const handleSearch = useCallback(
    (query: string) => {
      if (onSearch) {
        onSearch(query)
      }
    },
    [onSearch]
  )

  // Logout handler
  const handleLogout = useCallback(() => {
    if (onLogout) {
      onLogout()
    }
  }, [onLogout])

  // Color scheme styles
  const headerBgStyles = {
    light: 'bg-[var(--color-bg-primary)]',
    dark: 'bg-[var(--color-secondary-900)]',
  }

  const textStyles = {
    light: {
      primary: 'text-[var(--color-text-primary)]',
      secondary: 'text-[var(--color-text-secondary)]',
    },
    dark: {
      primary: 'text-[var(--color-text-inverse)]',
      secondary: 'text-[var(--color-text-inverse)]/70',
    },
  }

  const borderStyles = {
    light: 'border-[var(--color-border-primary)]',
    dark: 'border-[var(--color-secondary-700)]',
  }

  // Determine which top bar to show
  const showPromoBar = promoMessages && promoMessages.length > 0
  const showBenefitsBar = !showPromoBar && benefits && benefits.length > 0

  return (
    <>
      {/* Desktop Header */}
      <Header
        sticky={sticky}
        variant={colorScheme === 'dark' ? 'dark' : 'light'}
        className={cn('hidden md:block', className)}
        {...props}
      >
        {/* Top Bar - Promo or Benefits */}
        {showPromoBar && (
          <PromoTopBar
            messages={promoMessages}
            colorScheme="primary"
            scrollSpeed="normal"
            pauseOnHover
            countdown={countdown}
          />
        )}
        {showBenefitsBar && (
          <BenefitsBar benefits={benefits} variant="spaced" colorScheme={colorScheme} />
        )}

        {/* Main Header Row */}
        <div className={cn('border-b', borderStyles[colorScheme], headerBgStyles[colorScheme])}>
          <div className="max-w-[var(--container-max-width)] mx-auto px-[var(--container-padding)]">
            <HeaderMain className="h-[var(--header-height)]">
              {/* Logo */}
              <Logo alt="Logo" variant={colorScheme === 'dark' ? 'dark' : 'light'} />

              {/* Quick Links (optional) */}
              {quickLinks && quickLinks.length > 0 && (
                <div className="hidden lg:block ml-4">
                  <QuickLinksRow links={quickLinks.slice(0, 4)} colorScheme={colorScheme} />
                </div>
              )}

              {/* Categories Mega Menu */}
              <div className="hidden lg:block ml-4">
                <VisualMegaMenu
                  categories={categories}
                  featuredSubcategories={featuredSubcategories}
                  isOpen={megaMenuOpen}
                  onOpenChange={setMegaMenuOpen}
                  promoCard={promoCard}
                  triggerLabel="Kategorije"
                  colorScheme={colorScheme}
                />
              </div>

              {/* Search Bar */}
              <div className="flex-1 max-w-xl mx-6">
                <SearchWithHistory
                  onSearch={handleSearch}
                  recentSearches={recentSearches}
                  trendingSearches={trendingSearches}
                  placeholder="Pretraži proizvode..."
                  shortcut="⌘K"
                  variant="pill"
                  colorScheme={colorScheme}
                />
              </div>

              {/* Right Actions */}
              <div className="flex items-center gap-1">
                {/* Support Dropdown */}
                <div className="hidden xl:block">
                  <SupportDropdown colorScheme={colorScheme} />
                </div>

                {/* Account */}
                {user ? (
                  <RichAccountDropdown
                    user={user}
                    onLogout={handleLogout}
                    browsingHistory={browsingHistory}
                    showHistory={browsingHistory && browsingHistory.length > 0}
                    colorScheme={colorScheme}
                  />
                ) : (
                  <Link
                    href="/login"
                    className={cn(
                      'flex items-center gap-2 px-3 py-2 rounded-lg',
                      'text-sm transition-colors',
                      colorScheme === 'dark'
                        ? 'hover:bg-[var(--color-secondary-800)] text-[var(--color-text-inverse)]'
                        : 'hover:bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)]'
                    )}
                  >
                    <User01 className="w-5 h-5" />
                    <span className="hidden lg:inline">Prijava</span>
                  </Link>
                )}

                {/* Cart */}
                <CartButton count={cartCount} href="/korpa" colorScheme={colorScheme} />
              </div>
            </HeaderMain>
          </div>
        </div>

        {/* Countdown Banner (optional, below main header) */}
        {countdown && !showPromoBar && (
          <div className={cn('border-b', borderStyles[colorScheme])}>
            <div className="max-w-[var(--container-max-width)] mx-auto px-[var(--container-padding)] py-2">
              <CountdownBanner config={countdown} size="sm" />
            </div>
          </div>
        )}

        {/* Trust Bar */}
        {trustBadges && trustBadges.length > 0 && (
          <TrustBar badges={trustBadges} colorScheme={colorScheme} showSeparator />
        )}
      </Header>

      {/* Mobile Header */}
      <div className="md:hidden">
        {/* Mobile Promo Bar (simplified) */}
        {showPromoBar && (
          <PromoTopBar
            messages={promoMessages.slice(0, 2)}
            colorScheme="primary"
            scrollSpeed="fast"
          />
        )}

        {/* Mobile Main Header */}
        <MobileMinimalHeader
          logo={
            <Link href="/" className="font-bold text-lg text-[var(--color-primary-500)]">
              LOGO
            </Link>
          }
          cartCount={cartCount}
          showSearch
          searchPlaceholder="Pretraži..."
          onMenuOpen={() => setMobileMenuOpen(true)}
          onSearch={handleSearch}
          onCartClick={() => (window.location.href = '/korpa')}
          onAccountClick={() => (window.location.href = user ? '/account' : '/login')}
          colorScheme={colorScheme}
          sticky={sticky}
        />
      </div>

      {/* Mobile Category Sidebar */}
      <MobileCategorySidebar
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        categories={categories}
        featuredSubcategories={featuredSubcategories}
        trendingProducts={trendingProducts}
        brands={brands}
        user={user}
        contact={contact}
        colorScheme={colorScheme}
      />
    </>
  )
}

export default TemuHeader

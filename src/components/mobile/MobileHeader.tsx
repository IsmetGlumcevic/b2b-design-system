'use client'

import { cn } from '@/src/lib/utils'

interface MobileHeaderProps {
  title?: string
  showLogo?: boolean
  showBack?: boolean
  showSearch?: boolean
  showCart?: boolean
  showNotification?: boolean
  cartCount?: number
  notificationCount?: number
  onBack?: () => void
  onSearch?: () => void
  onCart?: () => void
  onNotification?: () => void
  className?: string
  variant?: 'default' | 'transparent' | 'dark'
}

// Simple icon components
const BackIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6" />
  </svg>
)

const SearchIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
)

const CartIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 6h15l-1.5 9h-12z" />
    <circle cx="9" cy="20" r="1" />
    <circle cx="18" cy="20" r="1" />
    <path d="M6 6L4 2H1" />
  </svg>
)

const BellIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
)

const LogoIcon = () => (
  <div className="flex items-center gap-2">
    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-primary-500)]">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    </div>
    <span className="text-base font-bold">ELEKTRO</span>
  </div>
)

export function MobileHeader({
  title,
  showLogo = true,
  showBack = false,
  showSearch = true,
  showCart = true,
  showNotification = false,
  cartCount = 0,
  notificationCount = 0,
  onBack,
  onSearch,
  onCart,
  onNotification,
  className,
  variant = 'default',
}: MobileHeaderProps) {
  const variantStyles = {
    default: 'bg-white border-b border-neutral-200',
    transparent: 'bg-transparent',
    dark: 'bg-neutral-900 text-white border-b border-neutral-800',
  }

  return (
    <header
      className={cn(
        'flex h-14 items-center justify-between px-4',
        variantStyles[variant],
        className
      )}
    >
      {/* Left side */}
      <div className="flex items-center gap-2">
        {showBack && (
          <button
            onClick={onBack}
            className="flex h-10 w-10 items-center justify-center rounded-full transition-colors active:bg-neutral-100"
          >
            <BackIcon />
          </button>
        )}
        {showLogo && !showBack && <LogoIcon />}
        {title && !showLogo && (
          <h1 className="text-lg font-semibold">{title}</h1>
        )}
      </div>

      {/* Right side */}
      <div className="flex items-center gap-1">
        {showSearch && (
          <button
            onClick={onSearch}
            className="flex h-10 w-10 items-center justify-center rounded-full transition-colors active:bg-neutral-100"
          >
            <SearchIcon />
          </button>
        )}
        {showNotification && (
          <button
            onClick={onNotification}
            className="relative flex h-10 w-10 items-center justify-center rounded-full transition-colors active:bg-neutral-100"
          >
            <BellIcon />
            {notificationCount > 0 && (
              <span className="absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-bold text-white">
                {notificationCount > 9 ? '9+' : notificationCount}
              </span>
            )}
          </button>
        )}
        {showCart && (
          <button
            onClick={onCart}
            className="relative flex h-10 w-10 items-center justify-center rounded-full transition-colors active:bg-neutral-100"
          >
            <CartIcon />
            {cartCount > 0 && (
              <span className="absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-[var(--color-primary-500)] px-1 text-[10px] font-bold text-white">
                {cartCount > 9 ? '9+' : cartCount}
              </span>
            )}
          </button>
        )}
      </div>
    </header>
  )
}

export default MobileHeader

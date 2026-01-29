import type { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from 'react'

/* ============================================
   HEADER - SHARED TYPES
   ============================================ */

/**
 * User data for header display
 */
export interface HeaderUser {
  id: string
  name: string
  email: string
  /** B2B customer/company ID */
  customerId?: string
  /** Avatar image URL */
  avatar?: string
  /** Initials for avatar fallback */
  initials?: string
}

/**
 * Contact information for header
 */
export interface HeaderContactInfo {
  phone?: string
  email?: string
  workingHours?: string
}

/**
 * Navigation category structure
 */
export interface Category {
  id: string
  name: string
  slug: string
  icon?: string
  children?: Category[]
  productCount?: number
}

/**
 * Menu item for account dropdown
 */
export interface AccountMenuItem {
  label: string
  href: string
  icon?: ReactNode
}

/* ============================================
   COMPONENT PROPS
   ============================================ */

/**
 * Header - Main wrapper component
 */
export interface HeaderProps extends HTMLAttributes<HTMLElement> {
  /** Make header sticky on scroll */
  sticky?: boolean
  /** Transparent background (for hero overlays) */
  transparent?: boolean
  /** Color variant */
  variant?: 'light' | 'dark'
  children: ReactNode
}

/**
 * HeaderTopBar - Top info bar
 */
export interface HeaderTopBarProps extends HTMLAttributes<HTMLDivElement> {
  /** Color scheme for dark/light backgrounds */
  colorScheme?: 'light' | 'dark'
  children: ReactNode
}

/**
 * HeaderMain - Main header row
 */
export interface HeaderMainProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

/**
 * HeaderActions - Action buttons container
 */
export interface HeaderActionsProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

/**
 * Logo - Logo with link (image or text-based)
 */
export interface LogoProps extends Omit<HTMLAttributes<HTMLAnchorElement>, 'children'> {
  /** Image source URL (optional - if not provided, uses text) */
  src?: string
  /** Alt text / brand name */
  alt: string
  /** Link destination (default: '/') */
  href?: string
  /** Logo width in pixels (for image) */
  width?: number
  /** Logo height in pixels (for image) */
  height?: number
  /** Tagline below logo */
  tagline?: string
  /** Color variant */
  variant?: 'light' | 'dark'
}

/**
 * ContactInfo - Contact information display
 */
export interface ContactInfoProps extends HTMLAttributes<HTMLDivElement> {
  /** Phone number */
  phone?: string
  /** Email address */
  email?: string
  /** Working hours text */
  workingHours?: string
  /** Layout variant */
  variant?: 'horizontal' | 'stacked'
  /** Size variant */
  size?: 'sm' | 'md'
  /** Color scheme for dark/light backgrounds */
  colorScheme?: 'light' | 'dark'
}

/**
 * SearchTrigger - Search button/input
 */
export interface SearchTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Callback to open search modal */
  onOpen: () => void
  /** Placeholder text for expanded variant */
  placeholder?: string
  /** Keyboard shortcut to display */
  shortcut?: string
  /** Display variant: icon (always icon), expanded (always expanded), responsive (icon on mobile/tablet, expanded on desktop) */
  variant?: 'icon' | 'expanded' | 'responsive'
  /** Color scheme for dark/light backgrounds */
  colorScheme?: 'light' | 'dark'
}

/**
 * CartButton - Cart icon with badge
 */
export interface CartButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Number of items in cart */
  count: number
  /** Cart page URL (renders as link) */
  href?: string
  /** Color scheme for dark/light backgrounds */
  colorScheme?: 'light' | 'dark'
}

/**
 * AccountDropdown - User menu dropdown
 */
export interface AccountDropdownProps {
  /** User data */
  user: HeaderUser
  /** Logout callback */
  onLogout: () => void
  /** Additional menu items */
  menuItems?: AccountMenuItem[]
}

/**
 * MainNavigation - Desktop/mobile navigation
 */
export interface MainNavigationProps {
  /** Categories to display */
  categories: Category[]
  /** Mobile breakpoint */
  mobileBreakpoint?: 'md' | 'lg' | 'xl'
  /** Custom trigger label */
  triggerLabel?: string
  /** Show category icons */
  showIcons?: boolean
  /** Color scheme for dark/light backgrounds */
  colorScheme?: 'light' | 'dark'
  /** Contact info to display in mobile menu */
  contact?: HeaderContactInfo
}

/**
 * MobileMenuButton - Hamburger toggle
 */
export interface MobileMenuButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Whether menu is open */
  isOpen: boolean
  /** Toggle callback */
  onToggle: () => void
  /** Color scheme for dark/light backgrounds */
  colorScheme?: 'light' | 'dark'
}

/**
 * MobileMenu - Mobile navigation drawer
 */
export interface MobileMenuProps {
  /** Whether menu is open */
  isOpen: boolean
  /** Close callback */
  onClose: () => void
  /** Categories to display */
  categories: Category[]
  /** User data (optional) */
  user?: HeaderUser | null
  /** Contact info (optional) */
  contact?: HeaderContactInfo
}

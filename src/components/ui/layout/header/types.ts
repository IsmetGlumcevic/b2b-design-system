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
 * Navigation category structure (supports 3+ levels)
 */
export interface Category {
  id: string
  name: string
  slug: string
  icon?: string
  children?: Category[]
  productCount?: number
  /** Short description for mega menu display */
  description?: string
  /** Category image URL */
  image?: string
}

/**
 * Brand for mega menu brands grid
 */
export interface Brand {
  id: string
  name: string
  slug: string
  /** Brand logo URL */
  logo?: string
}

/**
 * Service item for navigation
 */
export interface Service {
  id: string
  title: string
  description: string
  href: string
  icon?: ReactNode
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
 * Navigation item type for mega menu behavior
 */
export type NavigationItemType =
  | 'link'
  | 'dropdown'
  | 'megamenu-categories'
  | 'megamenu-brands'

/**
 * Navigation item structure
 */
export interface NavigationItem {
  id: string
  name: string
  slug: string
  /** Type of menu to display */
  menuType?: NavigationItemType
  /** Children for dropdown/megamenu */
  children?: Category[]
}

/**
 * MainNavigation - Desktop/mobile navigation
 */
export interface MainNavigationProps {
  /** Navigation items to display */
  items?: NavigationItem[]
  /** Categories to display (legacy, use items instead) */
  categories?: Category[]
  /** Brands for mega menu */
  brands?: Brand[]
  /** Services for navigation */
  services?: Service[]
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
  /** Brands to display */
  brands?: Brand[]
  /** Services to display */
  services?: Service[]
  /** User data (optional) */
  user?: HeaderUser | null
  /** Contact info (optional) */
  contact?: HeaderContactInfo
}

/* ============================================
   TEMU-STYLE HEADER TYPES
   ============================================ */

/**
 * Promo message for top bar
 */
export interface PromoMessage {
  id: string
  text: string
  icon?: ReactNode
  href?: string
  /** Optional badge text (e.g., "NOVO", "AKCIJA") */
  badge?: string
  /** Highlight this message */
  highlight?: boolean
}

/**
 * Benefit item for benefits bar
 */
export interface BenefitItem {
  id: string
  icon: ReactNode
  title: string
  subtitle?: string
  href?: string
}

/**
 * Trust badge for trust bar
 */
export interface TrustBadge {
  id: string
  icon: ReactNode
  label: string
  href?: string
}

/**
 * Quick link for header
 */
export interface QuickLink {
  id: string
  label: string
  href: string
  icon?: ReactNode
  /** Badge text (e.g., "5★", "Novo") */
  badge?: string
  /** Badge color variant */
  badgeVariant?: 'primary' | 'secondary' | 'success' | 'warning'
}

/**
 * Visual category with image and badge support
 */
export interface VisualCategory extends Omit<Category, 'children'> {
  /** Category thumbnail image URL */
  image?: string
  /** Badge configuration */
  badge?: {
    text: string
    variant: 'new' | 'sale' | 'hot' | 'limited' | 'trending'
  }
  /** Mark as featured for prominent display */
  featured?: boolean
  /** Children categories (also visual) */
  children?: VisualCategory[]
}

/**
 * Visual subcategory for mega menu grid
 */
export interface VisualSubcategory {
  id: string
  name: string
  slug: string
  image: string
  badge?: {
    text: string
    variant: 'new' | 'sale' | 'hot' | 'limited' | 'trending'
  }
  productCount?: number
}

/**
 * Browsing history product
 */
export interface BrowsingHistoryProduct {
  id: string
  name: string
  image: string
  price: number
  /** Formatted price string */
  formattedPrice?: string
  href: string
  /** Brand name */
  brand?: string
  /** Badge (e.g., "Skoro rasprodato") */
  badge?: string
}

/**
 * Search history item
 */
export interface SearchHistoryItem {
  id: string
  query: string
  timestamp: Date
  resultCount?: number
  /** Top result preview */
  topResult?: {
    name: string
    image: string
    href: string
  }
}

/**
 * Countdown configuration
 */
export interface CountdownConfig {
  /** End date/time for countdown */
  endDate: Date
  /** Title text */
  title: string
  /** Subtitle text */
  subtitle?: string
  /** Link when clicked */
  href?: string
  /** Color theme */
  theme?: 'primary' | 'secondary' | 'urgent' | 'success'
}

/**
 * Featured promo card for mega menu
 */
export interface MegaMenuPromoCard {
  id: string
  title: string
  subtitle?: string
  image: string
  href: string
  badge?: string
  /** Background color class */
  bgColor?: string
}

/* ============================================
   SLOT COMPONENT PROPS
   ============================================ */

/**
 * PromoTopBar - Scrolling promotional messages
 */
export interface PromoTopBarProps extends HTMLAttributes<HTMLDivElement> {
  /** Promo messages to display */
  messages: PromoMessage[]
  /** Scroll speed */
  scrollSpeed?: 'slow' | 'normal' | 'fast'
  /** Pause animation on hover */
  pauseOnHover?: boolean
  /** Color scheme */
  colorScheme?: 'light' | 'dark' | 'primary'
  /** Countdown config (optional) */
  countdown?: CountdownConfig
}

/**
 * BenefitsBar - Static benefits display
 */
export interface BenefitsBarProps extends HTMLAttributes<HTMLDivElement> {
  /** Benefit items to display */
  benefits: BenefitItem[]
  /** Color scheme */
  colorScheme?: 'light' | 'dark'
  /** Layout variant */
  variant?: 'inline' | 'spaced'
}

/**
 * TrustBar - Trust badges below header
 */
export interface TrustBarProps extends HTMLAttributes<HTMLDivElement> {
  /** Trust badges to display */
  badges: TrustBadge[]
  /** Color scheme */
  colorScheme?: 'light' | 'dark'
  /** Show separator between badges */
  showSeparator?: boolean
}

/**
 * QuickLinksRow - Quick navigation links
 */
export interface QuickLinksRowProps extends HTMLAttributes<HTMLDivElement> {
  /** Quick links to display */
  links: QuickLink[]
  /** Color scheme */
  colorScheme?: 'light' | 'dark'
}

/**
 * CountdownBanner - Sale countdown timer
 */
export interface CountdownBannerProps extends HTMLAttributes<HTMLDivElement> {
  /** Countdown configuration */
  config: CountdownConfig
  /** Color scheme */
  colorScheme?: 'light' | 'dark'
  /** Size variant */
  size?: 'sm' | 'md' | 'lg'
}

/* ============================================
   VISUAL MEGA MENU PROPS
   ============================================ */

/**
 * VisualMegaMenu - TEMU-style mega menu with images
 */
export interface VisualMegaMenuProps {
  /** Categories for sidebar */
  categories: VisualCategory[]
  /** Whether menu is open */
  isOpen: boolean
  /** Open state change callback */
  onOpenChange: (open: boolean) => void
  /** Featured subcategories for grid display */
  featuredSubcategories?: VisualSubcategory[]
  /** Promo card to display */
  promoCard?: MegaMenuPromoCard
  /** Color scheme */
  colorScheme?: 'light' | 'dark'
  /** Trigger element */
  trigger?: ReactNode
  /** Custom trigger label */
  triggerLabel?: string
}

/**
 * CategorySidebar - Left sidebar category list
 */
export interface CategorySidebarProps extends HTMLAttributes<HTMLDivElement> {
  /** Categories to display */
  categories: VisualCategory[]
  /** Currently active category ID */
  activeCategory?: string
  /** Category hover/select callback */
  onCategoryHover?: (categoryId: string) => void
  /** Show icons */
  showIcons?: boolean
  /** Color scheme */
  colorScheme?: 'light' | 'dark'
}

/**
 * SubcategoryGrid - Right side image grid
 */
export interface SubcategoryGridProps extends HTMLAttributes<HTMLDivElement> {
  /** Subcategories to display */
  subcategories: VisualSubcategory[]
  /** Max items to show */
  maxItems?: number
  /** Grid columns */
  columns?: 3 | 4 | 5 | 6
  /** Color scheme */
  colorScheme?: 'light' | 'dark'
}

/**
 * VisualCategoryCard - Single category card with image
 */
export interface VisualCategoryCardProps extends HTMLAttributes<HTMLAnchorElement> {
  /** Category data */
  category: VisualSubcategory
  /** Size variant */
  size?: 'sm' | 'md' | 'lg'
}

/* ============================================
   ACCOUNT & SEARCH PROPS
   ============================================ */

/**
 * RichAccountDropdown - Account dropdown with browsing history
 */
export interface RichAccountDropdownProps {
  /** User data */
  user: HeaderUser
  /** Logout callback */
  onLogout: () => void
  /** Additional menu items */
  menuItems?: AccountMenuItem[]
  /** Browsing history products */
  browsingHistory?: BrowsingHistoryProduct[]
  /** Show browsing history panel */
  showHistory?: boolean
  /** Max history items to show */
  maxHistoryItems?: number
  /** Color scheme */
  colorScheme?: 'light' | 'dark'
}

/**
 * BrowsingHistoryPanel - Recent products panel
 */
export interface BrowsingHistoryPanelProps extends HTMLAttributes<HTMLDivElement> {
  /** Products to display */
  products: BrowsingHistoryProduct[]
  /** Max items to show */
  maxItems?: number
  /** "View all" link */
  viewAllHref?: string
  /** Color scheme */
  colorScheme?: 'light' | 'dark'
}

/**
 * SearchWithHistory - Search input with history dropdown
 */
export interface SearchWithHistoryProps {
  /** Search submit callback */
  onSearch: (query: string) => void
  /** Recent searches */
  recentSearches?: SearchHistoryItem[]
  /** Trending searches */
  trendingSearches?: string[]
  /** Placeholder text */
  placeholder?: string
  /** Keyboard shortcut */
  shortcut?: string
  /** Size variant */
  size?: 'sm' | 'md' | 'lg'
  /** Visual variant */
  variant?: 'default' | 'pill' | 'flat'
  /** Color scheme */
  colorScheme?: 'light' | 'dark'
  /** Clear history callback */
  onClearHistory?: () => void
}

/**
 * SearchHistoryDropdown - Search history dropdown panel
 */
export interface SearchHistoryDropdownProps extends HTMLAttributes<HTMLDivElement> {
  /** Recent searches */
  recentSearches: SearchHistoryItem[]
  /** Trending searches */
  trendingSearches?: string[]
  /** Search item click callback */
  onSearchClick: (query: string) => void
  /** Clear history callback */
  onClearHistory?: () => void
  /** Color scheme */
  colorScheme?: 'light' | 'dark'
}

/* ============================================
   MOBILE COMPONENT PROPS
   ============================================ */

/**
 * MobileMinimalHeader - Compact mobile header
 */
export interface MobileMinimalHeaderProps extends HTMLAttributes<HTMLElement> {
  /** Logo component or config */
  logo?: ReactNode
  /** Cart item count */
  cartCount?: number
  /** Show search bar */
  showSearch?: boolean
  /** Search placeholder */
  searchPlaceholder?: string
  /** Menu open callback */
  onMenuOpen?: () => void
  /** Search submit callback */
  onSearch?: (query: string) => void
  /** Cart click callback */
  onCartClick?: () => void
  /** Account click callback */
  onAccountClick?: () => void
  /** Color scheme */
  colorScheme?: 'light' | 'dark'
  /** Sticky behavior */
  sticky?: boolean
}

/**
 * Trending product for mobile category sidebar
 */
export interface TrendingProduct {
  id: string
  name: string
  image: string
  /** Current price */
  price: number
  /** Original price (for discount display) */
  originalPrice?: number
  /** Currency code */
  currency?: string
  /** Rating (0-5) */
  rating?: number
  /** Number of reviews */
  reviewCount?: number
  /** Number of items sold */
  soldCount?: number
  /** Product URL */
  href: string
  /** Is this an ad/sponsored product */
  isAd?: boolean
}

/**
 * MobileCategorySidebar - Full-screen category sidebar with images
 */
export interface MobileCategorySidebarProps {
  /** Whether sidebar is open */
  isOpen: boolean
  /** Close callback */
  onClose: () => void
  /** Categories to display */
  categories: VisualCategory[]
  /** Featured subcategories */
  featuredSubcategories?: VisualSubcategory[]
  /** Trending products to display below subcategories */
  trendingProducts?: TrendingProduct[]
  /** Brands to display */
  brands?: Brand[]
  /** User data */
  user?: HeaderUser | null
  /** Contact info */
  contact?: HeaderContactInfo
  /** Color scheme */
  colorScheme?: 'light' | 'dark'
}

/**
 * MobileSearchOverlay - Full-screen search overlay
 */
export interface MobileSearchOverlayProps {
  /** Whether overlay is open */
  isOpen: boolean
  /** Close callback */
  onClose: () => void
  /** Search submit callback */
  onSearch: (query: string) => void
  /** Recent searches */
  recentSearches?: SearchHistoryItem[]
  /** Trending searches */
  trendingSearches?: string[]
  /** Placeholder text */
  placeholder?: string
}

/* ============================================
   HEADER PRESET TYPES
   ============================================ */

/**
 * Available header preset types
 */
export type HeaderPreset = 'temu' | 'classic' | 'minimal' | 'compact' | 'enterprise'

/**
 * Header preset configuration
 */
export interface HeaderPresetConfig {
  /** Preset type */
  preset: HeaderPreset

  /** Top bar configuration */
  topBar?: {
    type: 'promo' | 'benefits' | 'contact' | 'none'
    scrolling?: boolean
  }

  /** Main row configuration */
  mainRow: {
    showQuickLinks?: boolean
    searchVariant: 'icon' | 'expanded' | 'full-width'
    showCategoriesButton?: boolean
    categoriesMenuType: 'dropdown' | 'visual-mega' | 'sidebar'
    actions: ('account' | 'support' | 'language' | 'wishlist' | 'cart')[]
  }

  /** Bottom row configuration */
  bottomBar?: {
    type: 'trust' | 'navigation' | 'countdown' | 'none'
  }

  /** Mega menu configuration */
  megaMenu: {
    type: 'classic' | 'visual' | 'sidebar-hover'
    showImages?: boolean
    showBadges?: boolean
  }

  /** Account dropdown configuration */
  accountDropdown: {
    type: 'simple' | 'rich'
    showBrowsingHistory?: boolean
  }

  /** Mobile configuration */
  mobile: {
    headerType: 'minimal' | 'compact' | 'full'
    menuType: 'sidebar' | 'fullscreen' | 'bottom-sheet'
    showImages?: boolean
  }

  /** Color scheme */
  colorScheme: 'light' | 'dark' | 'auto'
}

/**
 * TemuHeader preset props
 */
export interface TemuHeaderProps extends HTMLAttributes<HTMLElement> {
  /** Promo messages for top bar */
  promoMessages?: PromoMessage[]
  /** Benefits for benefits bar (alternative to promo) */
  benefits?: BenefitItem[]
  /** Trust badges for bottom bar */
  trustBadges?: TrustBadge[]
  /** Quick links */
  quickLinks?: QuickLink[]
  /** Categories for mega menu */
  categories: VisualCategory[]
  /** Featured subcategories for mega menu grid */
  featuredSubcategories?: VisualSubcategory[]
  /** Trending products for mobile category sidebar */
  trendingProducts?: TrendingProduct[]
  /** Brands */
  brands?: Brand[]
  /** User data */
  user?: HeaderUser | null
  /** Browsing history for account dropdown */
  browsingHistory?: BrowsingHistoryProduct[]
  /** Recent searches */
  recentSearches?: SearchHistoryItem[]
  /** Trending searches */
  trendingSearches?: string[]
  /** Search callback */
  onSearch?: (query: string) => void
  /** Logout callback */
  onLogout?: () => void
  /** Cart item count */
  cartCount?: number
  /** Countdown config */
  countdown?: CountdownConfig
  /** Promo card for mega menu */
  promoCard?: MegaMenuPromoCard
  /** Color scheme */
  colorScheme?: 'light' | 'dark'
  /** Sticky header */
  sticky?: boolean
  /** Contact info */
  contact?: HeaderContactInfo
}

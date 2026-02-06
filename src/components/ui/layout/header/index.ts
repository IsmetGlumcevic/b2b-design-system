/* ============================================
   HEADER COMPONENT SYSTEM
   B2B Design System - Layout Components
   ============================================ */

// ============================================
// TYPES
// ============================================

// Core Types
export type {
  HeaderProps,
  HeaderUser,
  HeaderContactInfo,
  Category,
  Brand,
  Service,
  NavigationItem,
  NavigationItemType,
  AccountMenuItem,
  HeaderTopBarProps,
  HeaderMainProps,
  HeaderActionsProps,
  LogoProps,
  ContactInfoProps,
  SearchTriggerProps,
  CartButtonProps,
  AccountDropdownProps,
  MainNavigationProps,
  MobileMenuButtonProps,
  MobileMenuProps,
} from './types'

// TEMU-Style Types
export type {
  // Promo & Marketing
  PromoMessage,
  BenefitItem,
  TrustBadge,
  QuickLink,
  CountdownConfig,
  MegaMenuPromoCard,
  // Visual Categories
  VisualCategory,
  VisualSubcategory,
  // User Data
  BrowsingHistoryProduct,
  SearchHistoryItem,
  TrendingProduct,
  // Slot Props
  PromoTopBarProps,
  BenefitsBarProps,
  TrustBarProps,
  QuickLinksRowProps,
  CountdownBannerProps,
  // Visual Mega Menu Props
  VisualMegaMenuProps,
  CategorySidebarProps,
  SubcategoryGridProps,
  VisualCategoryCardProps,
  // Account & Search Props
  RichAccountDropdownProps,
  BrowsingHistoryPanelProps,
  SearchWithHistoryProps,
  SearchHistoryDropdownProps,
  // Mobile Props
  MobileMinimalHeaderProps,
  MobileCategorySidebarProps,
  MobileSearchOverlayProps,
  // Preset Types
  HeaderPreset,
  HeaderPresetConfig,
  TemuHeaderProps,
} from './types'

// ============================================
// CORE COMPONENTS (existing, refactored)
// ============================================

// Server Components
export { Header } from './core/Header'
export { HeaderTopBar } from './core/HeaderTopBar'
export { HeaderMain } from './core/HeaderMain'
export { HeaderActions } from './core/HeaderActions'
export { Logo } from './core/Logo'
export { ContactInfo } from './core/ContactInfo'

// Client Components
export { SearchTrigger } from './core/SearchTrigger'
export { CartButton } from './core/CartButton'
export { AccountDropdown } from './core/AccountDropdown'
export { SupportDropdown } from './core/SupportDropdown'
export type { SupportMenuItem, SupportDropdownProps } from './core/SupportDropdown'
export { MainNavigation } from './core/MainNavigation'
export { MobileMenuButton } from './core/MobileMenuButton'
export { MobileMenu } from './core/MobileMenu'

// ============================================
// SLOT COMPONENTS
// ============================================
export { PromoTopBar } from './slots/PromoTopBar'
export { BenefitsBar } from './slots/BenefitsBar'
export { TrustBar } from './slots/TrustBar'
export { QuickLinksRow } from './slots/QuickLinksRow'
export { CountdownBanner } from './slots/CountdownBanner'

// ============================================
// VISUAL MEGA MENU COMPONENTS
// ============================================
export { VisualMegaMenu } from './mega-menu/VisualMegaMenu'
export { CategorySidebar } from './mega-menu/CategorySidebar'
export { SubcategoryGrid } from './mega-menu/SubcategoryGrid'
export { VisualCategoryCard } from './mega-menu/VisualCategoryCard'

// ============================================
// ACCOUNT COMPONENTS
// ============================================
export { RichAccountDropdown } from './account/RichAccountDropdown'
export { BrowsingHistoryPanel } from './account/BrowsingHistoryPanel'

// ============================================
// SEARCH COMPONENTS
// ============================================
export { SearchWithHistory } from './search/SearchWithHistory'

// ============================================
// MOBILE COMPONENTS
// ============================================
export { MobileMinimalHeader } from './mobile/MobileMinimalHeader'
export { MobileCategorySidebar } from './mobile/MobileCategorySidebar'

// ============================================
// HEADER PRESETS
// ============================================
export { TemuHeader } from './presets/TemuHeader'
// TODO: Export additional preset components when created
// export { ClassicHeader } from './presets/ClassicHeader'
// export { MinimalHeader } from './presets/MinimalHeader'
// export { CompactHeader } from './presets/CompactHeader'

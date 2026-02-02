import type { ReactNode } from 'react'
import type { Category, Brand, Service } from '../layout/header/types'

/* ============================================
   MEGA MENU TYPES
   ============================================ */

export type ColorScheme = 'light' | 'dark'

/**
 * MegaMenu - Main wrapper props
 */
export interface MegaMenuProps {
  /** Trigger element (button/link) */
  trigger: ReactNode
  /** Menu content */
  children: ReactNode
  /** Whether menu is open (controlled) */
  isOpen?: boolean
  /** Open state change callback */
  onOpenChange?: (open: boolean) => void
  /** Color scheme */
  colorScheme?: ColorScheme
  /** Custom className for menu panel */
  className?: string
}

/**
 * MegaMenuCategories - 3-level category navigation
 */
export interface MegaMenuCategoriesProps {
  /** Top-level categories */
  categories: Category[]
  /** Color scheme */
  colorScheme?: ColorScheme
  /** "View all" link href */
  viewAllHref?: string
  /** "View all" link label */
  viewAllLabel?: string
  /** Close menu callback */
  onClose?: () => void
}

/**
 * MegaMenuBrands - Brand grid
 */
export interface MegaMenuBrandsProps {
  /** Brands list */
  brands: Brand[]
  /** Color scheme */
  colorScheme?: ColorScheme
  /** "View all" link href */
  viewAllHref?: string
  /** "View all" link label */
  viewAllLabel?: string
  /** Close menu callback */
  onClose?: () => void
}

/**
 * MegaMenuServices - Services list
 */
export interface MegaMenuServicesProps {
  /** Services list */
  services: Service[]
  /** Color scheme */
  colorScheme?: ColorScheme
  /** Close menu callback */
  onClose?: () => void
}

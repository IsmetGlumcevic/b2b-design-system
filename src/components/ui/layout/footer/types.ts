import type { HTMLAttributes, ReactNode } from 'react'

/* ============================================
   FOOTER - SHARED TYPES
   ============================================ */

/**
 * Footer link item
 */
export interface FooterLink {
  /** Link label */
  label: string
  /** Link URL */
  href: string
  /** Open in new tab */
  external?: boolean
}

/**
 * Footer column with links
 */
export interface FooterColumnData {
  /** Column title */
  title: string
  /** Links in column */
  links: FooterLink[]
}

/**
 * Social media platform
 */
export interface SocialLink {
  /** Platform name */
  platform: 'facebook' | 'instagram' | 'twitter' | 'linkedin' | 'youtube' | 'tiktok'
  /** Profile URL */
  href: string
  /** Aria label for accessibility */
  label?: string
}

/**
 * Payment method type
 */
export type PaymentMethodType =
  | 'visa'
  | 'mastercard'
  | 'maestro'
  | 'paypal'
  | 'stripe'
  | 'american-express'
  | 'apple-pay'
  | 'google-pay'
  | 'bank-transfer'
  | 'cash-on-delivery'

/**
 * Payment method data
 */
export interface PaymentMethod {
  /** Payment method type */
  type: PaymentMethodType
  /** Alt text for accessibility */
  label?: string
}

/* ============================================
   COMPONENT PROPS
   ============================================ */

/**
 * Footer - Main wrapper component
 */
export interface FooterProps extends HTMLAttributes<HTMLElement> {
  /** Color variant */
  variant?: 'dark' | 'light'
  children: ReactNode
}

/**
 * FooterColumn - Column container with title
 */
export interface FooterColumnProps extends HTMLAttributes<HTMLDivElement> {
  /** Column title */
  title: string
  /** Color scheme */
  colorScheme?: 'dark' | 'light'
  children: ReactNode
}

/**
 * FooterLinks - List of footer links
 */
export interface FooterLinksProps extends HTMLAttributes<HTMLUListElement> {
  /** Links to display */
  links: FooterLink[]
  /** Color scheme */
  colorScheme?: 'dark' | 'light'
  /** Link size */
  size?: 'sm' | 'md'
}

/**
 * SocialIcons - Social media icons row
 */
export interface SocialIconsProps extends HTMLAttributes<HTMLDivElement> {
  /** Social links */
  links: SocialLink[]
  /** Color scheme */
  colorScheme?: 'dark' | 'light'
  /** Icon size */
  size?: 'sm' | 'md' | 'lg'
}

/**
 * PaymentMethods - Payment method icons
 */
export interface PaymentMethodsProps extends HTMLAttributes<HTMLDivElement> {
  /** Payment methods to display */
  methods: PaymentMethod[]
  /** Color scheme */
  colorScheme?: 'dark' | 'light'
}

/**
 * FooterBottom - Bottom bar with copyright
 */
export interface FooterBottomProps extends HTMLAttributes<HTMLDivElement> {
  /** Copyright text */
  copyright: string
  /** Legal links */
  legalLinks?: FooterLink[]
  /** Color scheme */
  colorScheme?: 'dark' | 'light'
}

/**
 * FooterBrand - Logo/brand section with tagline
 */
export interface FooterBrandProps extends HTMLAttributes<HTMLDivElement> {
  /** Brand name / logo text */
  name: string
  /** Tagline below brand name */
  tagline?: string
  /** Description text */
  description?: string
  /** Link to homepage */
  href?: string
  /** Color scheme */
  colorScheme?: 'dark' | 'light'
}

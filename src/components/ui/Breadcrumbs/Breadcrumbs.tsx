import { type HTMLAttributes, type ReactNode } from 'react'
import Link from 'next/link'
import { cn } from '@/src/lib/utils'

export interface BreadcrumbItem {
  /** Display label for the breadcrumb */
  label: string
  /** URL to navigate to (optional for current page) */
  href?: string
  /** Optional icon to display before label */
  icon?: ReactNode
}

export type BreadcrumbsSize = 'sm' | 'md' | 'lg'
export type BreadcrumbsSeparator = 'chevron' | 'slash' | 'arrow' | 'dot'

export interface BreadcrumbsProps extends HTMLAttributes<HTMLElement> {
  /** Array of breadcrumb items */
  items: BreadcrumbItem[]
  /** Size of the breadcrumbs */
  size?: BreadcrumbsSize
  /** Separator style between items */
  separator?: BreadcrumbsSeparator
  /** Whether to show home icon for first item */
  showHomeIcon?: boolean
  /** Maximum number of items to show (collapses middle items) */
  maxItems?: number
  /** Labels for accessibility */
  labels?: {
    nav?: string
    collapsed?: string
  }
}

const sizeStyles: Record<BreadcrumbsSize, { text: string; icon: string; gap: string }> = {
  sm: {
    text: 'text-[var(--font-size-xs)]',
    icon: 'h-3.5 w-3.5',
    gap: 'gap-[var(--spacing-1)]',
  },
  md: {
    text: 'text-[var(--font-size-sm)]',
    icon: 'h-4 w-4',
    gap: 'gap-[var(--spacing-1-5)]',
  },
  lg: {
    text: 'text-[var(--font-size-base)]',
    icon: 'h-5 w-5',
    gap: 'gap-[var(--spacing-2)]',
  },
}

/**
 * Breadcrumbs navigation component.
 * Uses CSS variables for theming support.
 *
 * @example
 * <Breadcrumbs
 *   items={[
 *     { label: 'Početna', href: '/' },
 *     { label: 'Proizvodi', href: '/proizvodi' },
 *     { label: 'Kategorija' },
 *   ]}
 * />
 */
export function Breadcrumbs({
  items,
  size = 'md',
  separator = 'chevron',
  showHomeIcon = false,
  maxItems,
  labels = {},
  className,
  ...props
}: BreadcrumbsProps) {
  const { nav = 'Navigacija', collapsed = 'Prikaži više' } = labels

  // Collapse items if maxItems is specified
  const displayItems = maxItems && items.length > maxItems
    ? collapseItems(items, maxItems)
    : items.map((item) => ({ ...item, isCollapsed: false }))

  return (
    <nav
      aria-label={nav}
      className={cn('flex items-center', sizeStyles[size].gap, className)}
      {...props}
    >
      <ol className={cn('flex items-center flex-wrap', sizeStyles[size].gap)}>
        {displayItems.map((item, index) => {
          const isLast = index === displayItems.length - 1
          const isFirst = index === 0

          if ('isCollapsed' in item && item.isCollapsed) {
            return (
              <li key="collapsed" className={cn('flex items-center', sizeStyles[size].gap)}>
                <span
                  className={cn(
                    sizeStyles[size].text,
                    'text-[var(--color-text-tertiary)]'
                  )}
                  aria-label={collapsed}
                >
                  ...
                </span>
                <Separator type={separator} className={sizeStyles[size].icon} />
              </li>
            )
          }

          const breadcrumbItem = item as BreadcrumbItem

          return (
            <li key={index} className={cn('flex items-center', sizeStyles[size].gap)}>
              {isLast ? (
                // Current page (no link)
                <span
                  className={cn(
                    sizeStyles[size].text,
                    'font-medium',
                    'text-[var(--color-text-primary)]',
                    'flex items-center',
                    sizeStyles[size].gap
                  )}
                  aria-current="page"
                >
                  {breadcrumbItem.icon && (
                    <span className="shrink-0">{breadcrumbItem.icon}</span>
                  )}
                  {breadcrumbItem.label}
                </span>
              ) : (
                // Linked item
                <>
                  <Link
                    href={breadcrumbItem.href || '#'}
                    className={cn(
                      sizeStyles[size].text,
                      'text-[var(--color-text-secondary)]',
                      'hover:text-[var(--color-text-primary)]',
                      'hover:underline',
                      'transition-[var(--transition-fast)]',
                      'flex items-center',
                      sizeStyles[size].gap
                    )}
                  >
                    {isFirst && showHomeIcon ? (
                      <>
                        <HomeIcon className={sizeStyles[size].icon} />
                        <span className="sr-only">{breadcrumbItem.label}</span>
                      </>
                    ) : (
                      <>
                        {breadcrumbItem.icon && (
                          <span className="shrink-0">{breadcrumbItem.icon}</span>
                        )}
                        {breadcrumbItem.label}
                      </>
                    )}
                  </Link>
                  <Separator type={separator} className={sizeStyles[size].icon} />
                </>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

/** Collapse middle items if there are too many */
function collapseItems(
  items: BreadcrumbItem[],
  maxItems: number
): (BreadcrumbItem & { isCollapsed?: boolean })[] {
  if (items.length <= maxItems) return items

  const firstItem = items[0]
  const lastItems = items.slice(-Math.floor(maxItems / 2))
  const visibleCount = maxItems - 1 - lastItems.length

  return [
    firstItem,
    ...items.slice(1, visibleCount + 1),
    { label: '...', isCollapsed: true },
    ...lastItems,
  ]
}

/** Separator component */
function Separator({ type, className }: { type: BreadcrumbsSeparator; className?: string }) {
  const separatorClass = cn(
    'shrink-0',
    'text-[var(--color-text-tertiary)]',
    className
  )

  switch (type) {
    case 'slash':
      return (
        <span className={separatorClass} aria-hidden="true">
          /
        </span>
      )
    case 'dot':
      return (
        <span className={separatorClass} aria-hidden="true">
          •
        </span>
      )
    case 'arrow':
      return (
        <svg
          className={separatorClass}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7" />
        </svg>
      )
    case 'chevron':
    default:
      return (
        <svg
          className={separatorClass}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      )
  }
}

/** Home Icon */
function HomeIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
      />
    </svg>
  )
}

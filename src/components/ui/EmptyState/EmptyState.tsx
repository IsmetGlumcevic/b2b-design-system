import { type HTMLAttributes, type ReactNode } from 'react'
import { cn } from '@/src/lib/utils'

/* ============================================
   EmptyState Component
   Display meaningful empty states to users
   ============================================ */

export type EmptyStateSize = 'sm' | 'md' | 'lg'

export interface EmptyStateProps extends HTMLAttributes<HTMLDivElement> {
  /** Icon or illustration to display */
  icon?: ReactNode
  /** Main title text */
  title: string
  /** Descriptive text explaining the empty state */
  description?: string
  /** Primary action button/link */
  action?: ReactNode
  /** Secondary action button/link */
  secondaryAction?: ReactNode
  /** Size variant affecting spacing and typography */
  size?: EmptyStateSize
  /** Whether to show in compact inline mode */
  inline?: boolean
}

const sizeStyles: Record<EmptyStateSize, {
  icon: string
  title: string
  description: string
  gap: string
  padding: string
}> = {
  sm: {
    icon: 'w-12 h-12',
    title: 'text-[var(--font-size-base)] font-medium',
    description: 'text-[var(--font-size-xs)]',
    gap: 'gap-[var(--spacing-3)]',
    padding: 'py-[var(--spacing-6)] px-[var(--spacing-4)]',
  },
  md: {
    icon: 'w-16 h-16',
    title: 'text-[var(--font-size-lg)] font-semibold',
    description: 'text-[var(--font-size-sm)]',
    gap: 'gap-[var(--spacing-4)]',
    padding: 'py-[var(--spacing-10)] px-[var(--spacing-6)]',
  },
  lg: {
    icon: 'w-24 h-24',
    title: 'text-[var(--font-size-2xl)] font-bold',
    description: 'text-[var(--font-size-base)]',
    gap: 'gap-[var(--spacing-6)]',
    padding: 'py-[var(--spacing-16)] px-[var(--spacing-8)]',
  },
}

/**
 * EmptyState component for displaying meaningful empty states.
 * Use when there's no content to show (empty cart, no search results, etc.)
 *
 * @example
 * // Basic empty state
 * <EmptyState
 *   icon={<ShoppingCartIcon />}
 *   title="Vaša košarica je prazna"
 *   description="Dodajte proizvode u košaricu da biste nastavili s kupovinom."
 *   action={<Button>Pregledaj proizvode</Button>}
 * />
 *
 * @example
 * // Search results empty state
 * <EmptyState
 *   icon={<SearchIcon />}
 *   title="Nema rezultata"
 *   description="Pokušajte s drugim pojmom za pretragu."
 *   size="sm"
 * />
 */
export function EmptyState({
  icon,
  title,
  description,
  action,
  secondaryAction,
  size = 'md',
  inline = false,
  className,
  ...props
}: EmptyStateProps) {
  const styles = sizeStyles[size]

  if (inline) {
    return (
      <div
        className={cn(
          'flex items-center gap-[var(--spacing-3)]',
          'text-[var(--color-text-secondary)]',
          className
        )}
        {...props}
      >
        {icon && (
          <span className="shrink-0 w-5 h-5 text-[var(--color-text-tertiary)]">
            {icon}
          </span>
        )}
        <span className="text-[var(--font-size-sm)]">{title}</span>
        {action && <span className="shrink-0">{action}</span>}
      </div>
    )
  }

  return (
    <div
      className={cn(
        'flex flex-col items-center text-center',
        styles.gap,
        styles.padding,
        className
      )}
      {...props}
    >
      {icon && (
        <div
          className={cn(
            styles.icon,
            'text-[var(--color-text-tertiary)]',
            'flex items-center justify-center'
          )}
        >
          {icon}
        </div>
      )}

      <div className="space-y-[var(--spacing-2)]">
        <h3
          className={cn(
            styles.title,
            'text-[var(--color-text-primary)]'
          )}
        >
          {title}
        </h3>
        {description && (
          <p
            className={cn(
              styles.description,
              'text-[var(--color-text-secondary)]',
              'max-w-md'
            )}
          >
            {description}
          </p>
        )}
      </div>

      {(action || secondaryAction) && (
        <div className="flex flex-wrap items-center justify-center gap-[var(--spacing-3)] mt-[var(--spacing-2)]">
          {action}
          {secondaryAction}
        </div>
      )}
    </div>
  )
}

/* ============================================
   EmptyStateIcon - Default placeholder icon
   ============================================ */

export interface EmptyStateIconProps extends HTMLAttributes<SVGSVGElement> {
  /** Icon variant */
  variant?: 'box' | 'search' | 'cart' | 'document' | 'user' | 'error'
}

/**
 * Default icons for common empty state scenarios.
 *
 * @example
 * <EmptyState
 *   icon={<EmptyStateIcon variant="cart" />}
 *   title="Košarica je prazna"
 * />
 */
export function EmptyStateIcon({
  variant = 'box',
  className,
  ...props
}: EmptyStateIconProps) {
  const iconClass = cn('w-full h-full', className)

  switch (variant) {
    case 'search':
      return (
        <svg
          className={iconClass}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...props}
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
          <path d="M8 11h6" />
        </svg>
      )
    case 'cart':
      return (
        <svg
          className={iconClass}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...props}
        >
          <circle cx="8" cy="21" r="1" />
          <circle cx="19" cy="21" r="1" />
          <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
        </svg>
      )
    case 'document':
      return (
        <svg
          className={iconClass}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...props}
        >
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
          <path d="M14 2v6h6" />
          <path d="M9 13h6" />
          <path d="M9 17h6" />
        </svg>
      )
    case 'user':
      return (
        <svg
          className={iconClass}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...props}
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="m22 22-4.3-4.3" />
          <circle cx="19" cy="11" r="3" />
        </svg>
      )
    case 'error':
      return (
        <svg
          className={iconClass}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...props}
        >
          <circle cx="12" cy="12" r="10" />
          <path d="m15 9-6 6" />
          <path d="m9 9 6 6" />
        </svg>
      )
    case 'box':
    default:
      return (
        <svg
          className={iconClass}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...props}
        >
          <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
          <path d="m3.3 7 8.7 5 8.7-5" />
          <path d="M12 22V12" />
        </svg>
      )
  }
}

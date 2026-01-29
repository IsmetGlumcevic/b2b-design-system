import { type HTMLAttributes, type ReactNode } from 'react'
import { cn } from '@/src/lib/utils'

export type BadgeVariant = 'success' | 'error' | 'warning' | 'info' | 'neutral' | 'primary'
export type BadgeSize = 'sm' | 'md' | 'lg'

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /** Visual style variant */
  variant?: BadgeVariant
  /** Size of the badge */
  size?: BadgeSize
  /** Optional icon to display before text */
  icon?: ReactNode
  /** Whether badge has a dot indicator */
  dot?: boolean
  /** Whether badge has outline style instead of filled */
  outline?: boolean
  /** Content of the badge */
  children: ReactNode
}

const variantStyles: Record<BadgeVariant, { filled: string; outline: string }> = {
  success: {
    filled: `
      bg-[var(--badge-success-bg)]
      text-[var(--badge-success-text)]
    `,
    outline: `
      bg-transparent
      text-[var(--badge-success-text)]
      border
      border-[var(--color-success-500)]
    `,
  },
  error: {
    filled: `
      bg-[var(--badge-error-bg)]
      text-[var(--badge-error-text)]
    `,
    outline: `
      bg-transparent
      text-[var(--badge-error-text)]
      border
      border-[var(--color-error-500)]
    `,
  },
  warning: {
    filled: `
      bg-[var(--badge-warning-bg)]
      text-[var(--badge-warning-text)]
    `,
    outline: `
      bg-transparent
      text-[var(--badge-warning-text)]
      border
      border-[var(--color-warning-500)]
    `,
  },
  info: {
    filled: `
      bg-[var(--badge-info-bg)]
      text-[var(--badge-info-text)]
    `,
    outline: `
      bg-transparent
      text-[var(--badge-info-text)]
      border
      border-[var(--color-info-500)]
    `,
  },
  neutral: {
    filled: `
      bg-[var(--color-neutral-100)]
      text-[var(--color-neutral-700)]
    `,
    outline: `
      bg-transparent
      text-[var(--color-neutral-700)]
      border
      border-[var(--color-neutral-300)]
    `,
  },
  primary: {
    filled: `
      bg-[var(--color-primary-light)]
      text-[var(--color-primary-700)]
    `,
    outline: `
      bg-transparent
      text-[var(--color-primary-600)]
      border
      border-[var(--color-primary-500)]
    `,
  },
}

const sizeStyles: Record<BadgeSize, string> = {
  sm: `
    px-[var(--spacing-2)]
    py-[var(--spacing-0-5)]
    text-[var(--font-size-xs)]
    gap-[var(--spacing-1)]
  `,
  md: `
    px-[var(--spacing-2-5)]
    py-[var(--spacing-1)]
    text-[var(--font-size-sm)]
    gap-[var(--spacing-1-5)]
  `,
  lg: `
    px-[var(--spacing-3)]
    py-[var(--spacing-1-5)]
    text-[var(--font-size-base)]
    gap-[var(--spacing-2)]
  `,
}

const dotStyles: Record<BadgeVariant, string> = {
  success: 'bg-[var(--color-success-500)]',
  error: 'bg-[var(--color-error-500)]',
  warning: 'bg-[var(--color-warning-500)]',
  info: 'bg-[var(--color-info-500)]',
  neutral: 'bg-[var(--color-neutral-500)]',
  primary: 'bg-[var(--color-primary-500)]',
}

/**
 * Badge component for status indicators, labels, and tags.
 * Uses CSS variables for theming support.
 *
 * @example
 * <Badge variant="success">Na stanju</Badge>
 * <Badge variant="error" dot>Nedostupno</Badge>
 * <Badge variant="info" outline>Novo</Badge>
 */
export function Badge({
  variant = 'neutral',
  size = 'md',
  icon,
  dot = false,
  outline = false,
  children,
  className,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        // Base styles
        'inline-flex items-center justify-center',
        'font-medium',
        'rounded-[var(--radius-badge)]',
        'whitespace-nowrap',
        // Variant styles (filled or outline)
        outline ? variantStyles[variant].outline : variantStyles[variant].filled,
        // Size styles
        sizeStyles[size],
        // Custom className override
        className
      )}
      {...props}
    >
      {dot && (
        <span
          className={cn(
            'shrink-0 rounded-full',
            size === 'sm' ? 'h-1.5 w-1.5' : size === 'md' ? 'h-2 w-2' : 'h-2.5 w-2.5',
            dotStyles[variant]
          )}
          aria-hidden="true"
        />
      )}
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  )
}

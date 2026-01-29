import Link from 'next/link'
import { type AnchorHTMLAttributes, type ReactNode } from 'react'
import { cn } from '@/src/lib/utils'
import { type ButtonVariant, type ButtonSize } from './Button'

export interface LinkButtonProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  /** URL to navigate to */
  href: string
  /** Visual style variant */
  variant?: ButtonVariant
  /** Size of the button */
  size?: ButtonSize
  /** Full width button */
  fullWidth?: boolean
  /** Icon to display before text */
  leftIcon?: ReactNode
  /** Icon to display after text */
  rightIcon?: ReactNode
  /** Open in new tab */
  external?: boolean
  /** Content of the button */
  children: ReactNode
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-[var(--color-primary-500)] text-[color:var(--color-primary-content)] hover:bg-[var(--color-primary-hover)] active:bg-[var(--color-primary-active)] focus-visible:ring-[var(--color-primary-500)]',
  secondary:
    'bg-[var(--color-secondary-800)] text-[color:var(--color-secondary-content)] hover:bg-[var(--color-secondary-hover)] active:bg-[var(--color-secondary-active)] focus-visible:ring-[var(--color-secondary-800)]',
  outline:
    'bg-transparent text-[color:var(--color-text-primary)] border border-[var(--color-border-secondary)] hover:bg-[var(--color-bg-tertiary)] active:bg-[var(--color-neutral-200)] focus-visible:ring-[var(--color-border-focus)]',
  ghost:
    'bg-transparent text-[color:var(--color-text-primary)] hover:bg-[var(--color-bg-tertiary)] active:bg-[var(--color-neutral-200)] focus-visible:ring-[var(--color-border-focus)]',
  danger:
    'bg-[var(--color-error-500)] text-[color:var(--color-text-inverse)] hover:bg-[var(--color-error-600)] active:bg-[var(--color-error-700)] focus-visible:ring-[var(--color-error-500)]',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'h-[var(--button-height-sm)] px-[var(--spacing-4)] text-[length:var(--font-size-sm)] gap-[var(--spacing-1-5)]',
  md: 'h-[var(--button-height-md)] px-[var(--spacing-button-padding-x)] text-[length:var(--font-size-base)] gap-[var(--spacing-2)]',
  lg: 'h-[var(--button-height-lg)] px-[var(--spacing-8)] text-[length:var(--font-size-lg)] gap-[var(--spacing-2-5)]',
  xl: 'h-[var(--button-height-xl)] px-[var(--spacing-10)] text-[length:var(--font-size-xl)] gap-[var(--spacing-3)]',
}

/**
 * LinkButton component - anchor element styled as a button.
 * Uses Next.js Link for internal navigation.
 * Server Component by default.
 *
 * @example
 * <LinkButton href="/proizvodi" variant="primary">Pogledaj sve</LinkButton>
 * <LinkButton href="https://external.com" external>Vanjski link</LinkButton>
 */
export function LinkButton({
  href,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  leftIcon,
  rightIcon,
  external = false,
  children,
  className,
  ...props
}: LinkButtonProps) {
  const sharedClassName = cn(
    // Base styles
    'inline-flex items-center justify-center',
    'font-medium',
    'rounded-[var(--radius-button)]',
    'transition-[var(--transition-fast)]',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    'no-underline',
    // Variant styles
    variantStyles[variant],
    // Size styles
    sizeStyles[size],
    // Full width
    fullWidth && 'w-full',
    // Custom className override
    className
  )

  const content = (
    <>
      {leftIcon && <span className="shrink-0">{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className="shrink-0">{rightIcon}</span>}
    </>
  )

  // External links use regular anchor tag
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={sharedClassName}
        {...props}
      >
        {content}
      </a>
    )
  }

  // Internal links use Next.js Link
  return (
    <Link href={href} className={sharedClassName} {...props}>
      {content}
    </Link>
  )
}

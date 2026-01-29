'use client'

import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react'
import { cn } from '@/src/lib/utils'

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style variant */
  variant?: ButtonVariant
  /** Size of the button */
  size?: ButtonSize
  /** Full width button */
  fullWidth?: boolean
  /** Loading state */
  isLoading?: boolean
  /** Icon to display before text */
  leftIcon?: ReactNode
  /** Icon to display after text */
  rightIcon?: ReactNode
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
 * Button component with multiple variants and sizes.
 * Uses CSS variables for theming support.
 *
 * @example
 * <Button variant="primary" size="md">Dodaj u korpu</Button>
 * <Button variant="outline" leftIcon={<CartIcon />}>Dodaj</Button>
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || isLoading

    return (
      <button
        ref={ref}
        disabled={isDisabled}
        className={cn(
          // Base styles
          'inline-flex items-center justify-center',
          'font-medium',
          'rounded-[var(--radius-button)]',
          'transition-[var(--transition-fast)]',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
          'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
          // Variant styles
          variantStyles[variant],
          // Size styles
          sizeStyles[size],
          // Full width
          fullWidth && 'w-full',
          // Custom className override
          className
        )}
        {...props}
      >
        {isLoading ? (
          <>
            <LoadingSpinner className="animate-spin" />
            <span>Učitavanje...</span>
          </>
        ) : (
          <>
            {leftIcon && <span className="shrink-0">{leftIcon}</span>}
            <span>{children}</span>
            {rightIcon && <span className="shrink-0">{rightIcon}</span>}
          </>
        )}
      </button>
    )
  }
)

Button.displayName = 'Button'

/** Simple loading spinner SVG */
function LoadingSpinner({ className }: { className?: string }) {
  return (
    <svg
      className={cn('h-4 w-4', className)}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      role="img"
      aria-label="Loading"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  )
}

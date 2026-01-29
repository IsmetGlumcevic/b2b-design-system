'use client'

import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react'
import { cn } from '@/src/lib/utils'
import { type ButtonVariant, type ButtonSize } from './Button'

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style variant */
  variant?: ButtonVariant
  /** Size of the button */
  size?: ButtonSize
  /** Icon element to display */
  icon: ReactNode
  /** Accessible label for the button (required for accessibility) */
  'aria-label': string
  /** Loading state */
  isLoading?: boolean
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-[var(--color-primary-500)] text-white hover:bg-[var(--color-primary-hover)] active:bg-[var(--color-primary-active)] focus-visible:ring-[var(--color-primary-500)]',
  secondary:
    'bg-[var(--color-secondary-800)] text-white hover:bg-[var(--color-secondary-hover)] active:bg-[var(--color-secondary-active)] focus-visible:ring-[var(--color-secondary-800)]',
  outline:
    'bg-transparent text-[var(--color-text-primary)] border border-[var(--color-border-secondary)] hover:bg-[var(--color-bg-tertiary)] active:bg-[var(--color-neutral-200)] focus-visible:ring-[var(--color-border-focus)]',
  ghost:
    'bg-transparent text-[var(--color-text-primary)] hover:bg-[var(--color-bg-tertiary)] active:bg-[var(--color-neutral-200)] focus-visible:ring-[var(--color-border-focus)]',
  danger:
    'bg-[var(--color-error-500)] text-white hover:bg-[var(--color-error-600)] active:bg-[var(--color-error-700)] focus-visible:ring-[var(--color-error-500)]',
}

const sizeStyles: Record<ButtonSize, { button: string; icon: string }> = {
  sm: {
    button: 'h-[var(--button-height-sm)] w-[var(--button-height-sm)]',
    icon: 'h-4 w-4',
  },
  md: {
    button: 'h-[var(--button-height-md)] w-[var(--button-height-md)]',
    icon: 'h-5 w-5',
  },
  lg: {
    button: 'h-[var(--button-height-lg)] w-[var(--button-height-lg)]',
    icon: 'h-6 w-6',
  },
  xl: {
    button: 'h-[var(--button-height-xl)] w-[var(--button-height-xl)]',
    icon: 'h-7 w-7',
  },
}

/**
 * IconButton component - square button with only an icon.
 * Requires aria-label for accessibility.
 *
 * @example
 * <IconButton icon={<SearchIcon />} aria-label="Pretraga" variant="ghost" />
 * <IconButton icon={<TrashIcon />} aria-label="Obriši" variant="danger" />
 */
export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      variant = 'ghost',
      size = 'md',
      icon,
      isLoading = false,
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
          'rounded-[var(--radius-button)]',
          'transition-[var(--transition-fast)]',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
          'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
          // Variant styles
          variantStyles[variant],
          // Size styles (square button)
          sizeStyles[size].button,
          // Custom className override
          className
        )}
        {...props}
      >
        {isLoading ? (
          <LoadingSpinner className={cn('animate-spin', sizeStyles[size].icon)} />
        ) : (
          <span className={cn('shrink-0', sizeStyles[size].icon, '[&>svg]:h-full [&>svg]:w-full')}>
            {icon}
          </span>
        )}
      </button>
    )
  }
)

IconButton.displayName = 'IconButton'

/** Simple loading spinner SVG */
function LoadingSpinner({ className }: { className?: string }) {
  return (
    <svg
      className={className}
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

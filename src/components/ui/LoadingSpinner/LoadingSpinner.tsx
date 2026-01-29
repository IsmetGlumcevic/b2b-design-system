import { type HTMLAttributes } from 'react'
import { cn } from '@/src/lib/utils'

export type SpinnerSize = 'sm' | 'md' | 'lg' | 'xl'
export type SpinnerVariant = 'primary' | 'secondary' | 'white' | 'current'

export interface LoadingSpinnerProps extends HTMLAttributes<HTMLDivElement> {
  /** Size of the spinner */
  size?: SpinnerSize
  /** Color variant of the spinner */
  variant?: SpinnerVariant
  /** Label for accessibility (visually hidden) */
  label?: string
  /** Whether to show the label visually */
  showLabel?: boolean
  /** Whether to center the spinner in its container */
  centered?: boolean
}

const sizeStyles: Record<SpinnerSize, string> = {
  sm: 'w-[var(--spinner-size-sm)] h-[var(--spinner-size-sm)]',
  md: 'w-[var(--spinner-size-md)] h-[var(--spinner-size-md)]',
  lg: 'w-[var(--spinner-size-lg)] h-[var(--spinner-size-lg)]',
  xl: 'w-[var(--spinner-size-xl)] h-[var(--spinner-size-xl)]',
}

const variantStyles: Record<SpinnerVariant, { spinner: string; track: string }> = {
  primary: {
    spinner: 'border-t-[var(--spinner-color)]',
    track: 'border-[var(--spinner-track-color)]',
  },
  secondary: {
    spinner: 'border-t-[var(--color-secondary-800)]',
    track: 'border-[var(--color-secondary-200)]',
  },
  white: {
    spinner: 'border-t-white',
    track: 'border-white/30',
  },
  current: {
    spinner: 'border-t-current',
    track: 'border-current/20',
  },
}

const labelSizes: Record<SpinnerSize, string> = {
  sm: 'text-[var(--font-size-xs)]',
  md: 'text-[var(--font-size-sm)]',
  lg: 'text-[var(--font-size-base)]',
  xl: 'text-[var(--font-size-lg)]',
}

/**
 * LoadingSpinner component for indicating loading states.
 * Uses CSS animations and CSS variables for theming.
 *
 * @example
 * <LoadingSpinner size="md" />
 *
 * <LoadingSpinner size="lg" label="Učitavanje..." showLabel />
 *
 * <LoadingSpinner variant="white" /> // For dark backgrounds
 */
export function LoadingSpinner({
  size = 'md',
  variant = 'primary',
  label = 'Učitavanje...',
  showLabel = false,
  centered = false,
  className,
  ...props
}: LoadingSpinnerProps) {
  const variantStyle = variantStyles[variant]

  return (
    <div
      role="status"
      aria-live="polite"
      className={cn(
        'inline-flex items-center gap-[var(--spacing-2)]',
        centered && 'justify-center w-full',
        className
      )}
      {...props}
    >
      <div
        className={cn(
          // Base styles
          'rounded-full',
          'border-[var(--spinner-border-width)]',
          'animate-spin',
          // Size
          sizeStyles[size],
          // Variant colors
          variantStyle.track,
          variantStyle.spinner
        )}
        aria-hidden="true"
      />
      {showLabel ? (
        <span className={cn(
          'text-[var(--color-text-secondary)]',
          labelSizes[size]
        )}>
          {label}
        </span>
      ) : (
        <span className="sr-only">{label}</span>
      )}
    </div>
  )
}

/* ============================================
   LoadingOverlay Component
   ============================================ */

export interface LoadingOverlayProps extends HTMLAttributes<HTMLDivElement> {
  /** Whether the overlay is visible */
  isLoading?: boolean
  /** Size of the spinner */
  spinnerSize?: SpinnerSize
  /** Spinner variant */
  spinnerVariant?: SpinnerVariant
  /** Label to display */
  label?: string
  /** Whether to show the label */
  showLabel?: boolean
  /** Whether to blur the background */
  blur?: boolean
}

/**
 * LoadingOverlay component for covering content during loading.
 *
 * @example
 * <div className="relative">
 *   <ProductList />
 *   <LoadingOverlay isLoading={isLoading} label="Učitavanje proizvoda..." showLabel />
 * </div>
 */
export function LoadingOverlay({
  isLoading = true,
  spinnerSize = 'lg',
  spinnerVariant = 'primary',
  label = 'Učitavanje...',
  showLabel = false,
  blur = false,
  className,
  ...props
}: LoadingOverlayProps) {
  if (!isLoading) return null

  return (
    <div
      className={cn(
        'absolute inset-0',
        'flex flex-col items-center justify-center',
        'bg-[var(--color-bg-primary)]/80',
        'z-10',
        blur && 'backdrop-blur-sm',
        className
      )}
      {...props}
    >
      <LoadingSpinner
        size={spinnerSize}
        variant={spinnerVariant}
        label={label}
        showLabel={showLabel}
      />
    </div>
  )
}

/* ============================================
   LoadingDots Component
   ============================================ */

export interface LoadingDotsProps extends HTMLAttributes<HTMLDivElement> {
  /** Size of the dots */
  size?: 'sm' | 'md' | 'lg'
  /** Color variant */
  variant?: SpinnerVariant
}

const dotSizeStyles: Record<'sm' | 'md' | 'lg', string> = {
  sm: 'w-1.5 h-1.5',
  md: 'w-2 h-2',
  lg: 'w-3 h-3',
}

const dotGapStyles: Record<'sm' | 'md' | 'lg', string> = {
  sm: 'gap-1',
  md: 'gap-1.5',
  lg: 'gap-2',
}

const dotVariantStyles: Record<SpinnerVariant, string> = {
  primary: 'bg-[var(--spinner-color)]',
  secondary: 'bg-[var(--color-secondary-800)]',
  white: 'bg-white',
  current: 'bg-current',
}

/**
 * LoadingDots component for inline loading indicators.
 *
 * @example
 * <button disabled>
 *   Spremanje <LoadingDots size="sm" />
 * </button>
 */
export function LoadingDots({
  size = 'md',
  variant = 'current',
  className,
  ...props
}: LoadingDotsProps) {
  return (
    <span
      role="status"
      aria-label="Učitavanje"
      className={cn(
        'inline-flex items-center',
        dotGapStyles[size],
        className
      )}
      {...props}
    >
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className={cn(
            'rounded-full',
            'animate-pulse',
            dotSizeStyles[size],
            dotVariantStyles[variant]
          )}
          style={{
            animationDelay: `${i * 150}ms`,
            animationDuration: '1s',
          }}
          aria-hidden="true"
        />
      ))}
    </span>
  )
}

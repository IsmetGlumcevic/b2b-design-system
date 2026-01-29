'use client'

import { forwardRef, type HTMLAttributes, type ReactNode, type MouseEvent } from 'react'
import { cn } from '@/src/lib/utils'

/* ============================================
   Chip Component
   Interactive tag/chip for filters, selections
   ============================================ */

export type ChipVariant = 'filled' | 'outline' | 'soft'
export type ChipColor = 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info' | 'neutral'
export type ChipSize = 'sm' | 'md' | 'lg'

export interface ChipProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onClick'> {
  /** Visual style variant */
  variant?: ChipVariant
  /** Color scheme */
  color?: ChipColor
  /** Size of the chip */
  size?: ChipSize
  /** Icon to display before text */
  startIcon?: ReactNode
  /** Icon to display after text */
  endIcon?: ReactNode
  /** Whether the chip is deletable (shows close button) */
  deletable?: boolean
  /** Callback when delete is clicked */
  onDelete?: () => void
  /** Whether the chip is clickable */
  clickable?: boolean
  /** Callback when chip is clicked */
  onClick?: (e: MouseEvent<HTMLDivElement>) => void
  /** Whether the chip is selected/active */
  selected?: boolean
  /** Whether the chip is disabled */
  disabled?: boolean
  /** Content of the chip */
  children: ReactNode
}

const colorStyles: Record<ChipColor, Record<ChipVariant, string>> = {
  primary: {
    filled: `
      bg-[var(--color-primary-500)]
      text-[var(--color-primary-content)]
      hover:bg-[var(--color-primary-hover)]
    `,
    outline: `
      bg-transparent
      text-[var(--color-primary-600)]
      border border-[var(--color-primary-500)]
      hover:bg-[var(--color-primary-50)]
    `,
    soft: `
      bg-[var(--color-primary-light)]
      text-[var(--color-primary-700)]
      hover:bg-[var(--color-primary-200)]
    `,
  },
  secondary: {
    filled: `
      bg-[var(--color-secondary-800)]
      text-[var(--color-secondary-content)]
      hover:bg-[var(--color-secondary-hover)]
    `,
    outline: `
      bg-transparent
      text-[var(--color-secondary-700)]
      border border-[var(--color-secondary-500)]
      hover:bg-[var(--color-secondary-50)]
    `,
    soft: `
      bg-[var(--color-secondary-100)]
      text-[var(--color-secondary-800)]
      hover:bg-[var(--color-secondary-200)]
    `,
  },
  success: {
    filled: `
      bg-[var(--color-success-500)]
      text-white
      hover:bg-[var(--color-success-600)]
    `,
    outline: `
      bg-transparent
      text-[var(--color-success-700)]
      border border-[var(--color-success-500)]
      hover:bg-[var(--color-success-50)]
    `,
    soft: `
      bg-[var(--color-success-50)]
      text-[var(--color-success-700)]
      hover:bg-[var(--color-success-100)]
    `,
  },
  error: {
    filled: `
      bg-[var(--color-error-500)]
      text-white
      hover:bg-[var(--color-error-600)]
    `,
    outline: `
      bg-transparent
      text-[var(--color-error-700)]
      border border-[var(--color-error-500)]
      hover:bg-[var(--color-error-50)]
    `,
    soft: `
      bg-[var(--color-error-50)]
      text-[var(--color-error-700)]
      hover:bg-[var(--color-error-100)]
    `,
  },
  warning: {
    filled: `
      bg-[var(--color-warning-500)]
      text-white
      hover:bg-[var(--color-warning-600)]
    `,
    outline: `
      bg-transparent
      text-[var(--color-warning-700)]
      border border-[var(--color-warning-500)]
      hover:bg-[var(--color-warning-50)]
    `,
    soft: `
      bg-[var(--color-warning-50)]
      text-[var(--color-warning-700)]
      hover:bg-[var(--color-warning-100)]
    `,
  },
  info: {
    filled: `
      bg-[var(--color-info-500)]
      text-white
      hover:bg-[var(--color-info-600)]
    `,
    outline: `
      bg-transparent
      text-[var(--color-info-700)]
      border border-[var(--color-info-500)]
      hover:bg-[var(--color-info-50)]
    `,
    soft: `
      bg-[var(--color-info-50)]
      text-[var(--color-info-700)]
      hover:bg-[var(--color-info-100)]
    `,
  },
  neutral: {
    filled: `
      bg-[var(--color-neutral-600)]
      text-white
      hover:bg-[var(--color-neutral-700)]
    `,
    outline: `
      bg-transparent
      text-[var(--color-neutral-700)]
      border border-[var(--color-neutral-300)]
      hover:bg-[var(--color-neutral-50)]
    `,
    soft: `
      bg-[var(--color-neutral-100)]
      text-[var(--color-neutral-700)]
      hover:bg-[var(--color-neutral-200)]
    `,
  },
}

const selectedStyles: Record<ChipColor, string> = {
  primary: 'ring-2 ring-[var(--color-primary-500)] ring-offset-1',
  secondary: 'ring-2 ring-[var(--color-secondary-500)] ring-offset-1',
  success: 'ring-2 ring-[var(--color-success-500)] ring-offset-1',
  error: 'ring-2 ring-[var(--color-error-500)] ring-offset-1',
  warning: 'ring-2 ring-[var(--color-warning-500)] ring-offset-1',
  info: 'ring-2 ring-[var(--color-info-500)] ring-offset-1',
  neutral: 'ring-2 ring-[var(--color-neutral-500)] ring-offset-1',
}

const sizeStyles: Record<ChipSize, string> = {
  sm: `
    h-[var(--chip-height-sm)]
    px-[var(--spacing-2)]
    text-[var(--font-size-xs)]
    gap-[var(--spacing-1)]
  `,
  md: `
    h-[var(--chip-height-md)]
    px-[var(--spacing-3)]
    text-[var(--font-size-sm)]
    gap-[var(--spacing-1-5)]
  `,
  lg: `
    h-[var(--chip-height-lg)]
    px-[var(--spacing-4)]
    text-[var(--font-size-base)]
    gap-[var(--spacing-2)]
  `,
}

const iconSizeStyles: Record<ChipSize, string> = {
  sm: 'h-3 w-3',
  md: 'h-4 w-4',
  lg: 'h-5 w-5',
}

/** Close/Delete icon */
function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}

/**
 * Chip component for interactive tags, filters, and selections.
 * Supports multiple variants, colors, and interactive states.
 *
 * @example
 * // Basic chip
 * <Chip>Tag</Chip>
 *
 * @example
 * // Deletable chip
 * <Chip deletable onDelete={() => console.log('deleted')}>Filter</Chip>
 *
 * @example
 * // Clickable chip
 * <Chip clickable onClick={() => setSelected(true)}>Opcija</Chip>
 *
 * @example
 * // With icons
 * <Chip startIcon={<Icon />}>Sa ikonom</Chip>
 */
export const Chip = forwardRef<HTMLDivElement, ChipProps>(
  (
    {
      variant = 'soft',
      color = 'neutral',
      size = 'md',
      startIcon,
      endIcon,
      deletable = false,
      onDelete,
      clickable = false,
      onClick,
      selected = false,
      disabled = false,
      children,
      className,
      ...props
    },
    ref
  ) => {
    const handleClick = (e: MouseEvent<HTMLDivElement>) => {
      if (disabled) return
      onClick?.(e)
    }

    const handleDelete = (e: MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation()
      if (disabled) return
      onDelete?.()
    }

    return (
      <div
        ref={ref}
        role={clickable ? 'button' : undefined}
        tabIndex={clickable && !disabled ? 0 : undefined}
        onClick={clickable ? handleClick : undefined}
        className={cn(
          // Base styles
          'inline-flex items-center justify-center',
          'rounded-[var(--chip-radius)]',
          'font-medium',
          'transition-[var(--transition-fast)]',
          'select-none',
          // Size
          sizeStyles[size],
          // Color and variant
          colorStyles[color][variant],
          // Selected state
          selected && selectedStyles[color],
          // Clickable cursor
          clickable && !disabled && 'cursor-pointer',
          // Disabled state
          disabled && 'opacity-50 cursor-not-allowed pointer-events-none',
          // Custom className
          className
        )}
        {...props}
      >
        {startIcon && (
          <span className={cn('shrink-0', iconSizeStyles[size])}>
            {startIcon}
          </span>
        )}

        <span className="truncate">{children}</span>

        {endIcon && !deletable && (
          <span className={cn('shrink-0', iconSizeStyles[size])}>
            {endIcon}
          </span>
        )}

        {deletable && (
          <button
            type="button"
            onClick={handleDelete}
            disabled={disabled}
            className={cn(
              'shrink-0 rounded-full p-0.5',
              'hover:bg-black/10',
              'focus:outline-none focus:ring-1 focus:ring-current',
              'transition-[var(--transition-fast)]',
              iconSizeStyles[size]
            )}
            aria-label="Ukloni"
          >
            <CloseIcon className="h-full w-full" />
          </button>
        )}
      </div>
    )
  }
)

Chip.displayName = 'Chip'

/* ============================================
   ChipGroup - Container for multiple chips
   ============================================ */

export interface ChipGroupProps extends HTMLAttributes<HTMLDivElement> {
  /** Gap between chips */
  gap?: 'sm' | 'md' | 'lg'
  /** Whether chips should wrap */
  wrap?: boolean
  /** Content (Chip components) */
  children: ReactNode
}

const gapStyles: Record<'sm' | 'md' | 'lg', string> = {
  sm: 'gap-[var(--spacing-1)]',
  md: 'gap-[var(--spacing-2)]',
  lg: 'gap-[var(--spacing-3)]',
}

/**
 * ChipGroup component for organizing multiple chips.
 *
 * @example
 * <ChipGroup>
 *   <Chip>React</Chip>
 *   <Chip>TypeScript</Chip>
 *   <Chip>Tailwind</Chip>
 * </ChipGroup>
 */
export const ChipGroup = forwardRef<HTMLDivElement, ChipGroupProps>(
  ({ gap = 'md', wrap = true, children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'flex items-center',
          gapStyles[gap],
          wrap ? 'flex-wrap' : 'flex-nowrap overflow-x-auto',
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

ChipGroup.displayName = 'ChipGroup'

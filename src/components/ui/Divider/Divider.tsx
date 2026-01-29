import { type HTMLAttributes, type ReactNode } from 'react'
import { cn } from '@/src/lib/utils'

export type DividerOrientation = 'horizontal' | 'vertical'
export type DividerVariant = 'solid' | 'dashed' | 'dotted'
export type DividerWeight = 'light' | 'medium' | 'heavy'

export interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  /** Orientation of the divider */
  orientation?: DividerOrientation
  /** Line style variant */
  variant?: DividerVariant
  /** Line weight/thickness */
  weight?: DividerWeight
  /** Content to display in the middle of the divider */
  children?: ReactNode
  /** Alignment of the content */
  align?: 'start' | 'center' | 'end'
  /** Spacing around the divider */
  spacing?: 'none' | 'sm' | 'md' | 'lg'
}

const variantStyles: Record<DividerVariant, string> = {
  solid: 'border-solid',
  dashed: 'border-dashed',
  dotted: 'border-dotted',
}

const weightStyles: Record<DividerWeight, string> = {
  light: 'border-[var(--divider-weight-light)]',
  medium: 'border-[var(--divider-weight-medium)]',
  heavy: 'border-[var(--divider-weight-heavy)]',
}

const spacingStyles: Record<'none' | 'sm' | 'md' | 'lg', { horizontal: string; vertical: string }> = {
  none: {
    horizontal: 'my-0',
    vertical: 'mx-0',
  },
  sm: {
    horizontal: 'my-[var(--spacing-2)]',
    vertical: 'mx-[var(--spacing-2)]',
  },
  md: {
    horizontal: 'my-[var(--spacing-4)]',
    vertical: 'mx-[var(--spacing-4)]',
  },
  lg: {
    horizontal: 'my-[var(--spacing-6)]',
    vertical: 'mx-[var(--spacing-6)]',
  },
}

const alignStyles: Record<'start' | 'center' | 'end', string> = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
}

/**
 * Divider component for separating content sections.
 * Supports horizontal and vertical orientations, with optional text content.
 *
 * @example
 * <Divider />
 * <Divider variant="dashed" weight="light" />
 * <Divider>ili</Divider>
 * <Divider orientation="vertical" />
 */
export function Divider({
  orientation = 'horizontal',
  variant = 'solid',
  weight = 'light',
  children,
  align = 'center',
  spacing = 'md',
  className,
  ...props
}: DividerProps) {
  const isHorizontal = orientation === 'horizontal'
  const hasContent = Boolean(children)
  const spacingStyle = spacingStyles[spacing]

  // Simple divider without content
  if (!hasContent) {
    return (
      <div
        role="separator"
        aria-orientation={orientation}
        className={cn(
          // Base styles
          'border-[var(--divider-color)]',
          variantStyles[variant],
          weightStyles[weight],
          // Orientation-specific
          isHorizontal
            ? cn('w-full border-t', spacingStyle.horizontal)
            : cn('h-full border-l self-stretch', spacingStyle.vertical),
          className
        )}
        {...props}
      />
    )
  }

  // Divider with content (only horizontal)
  return (
    <div
      role="separator"
      aria-orientation="horizontal"
      className={cn(
        'flex items-center w-full',
        spacingStyle.horizontal,
        alignStyles[align],
        className
      )}
      {...props}
    >
      {/* Left line */}
      <div
        className={cn(
          'border-t border-[var(--divider-color)]',
          variantStyles[variant],
          weightStyles[weight],
          align === 'start' ? 'w-[var(--spacing-4)]' : 'flex-1'
        )}
      />

      {/* Content */}
      <span className="px-[var(--spacing-3)] text-[var(--color-text-tertiary)] text-[var(--font-size-sm)] whitespace-nowrap">
        {children}
      </span>

      {/* Right line */}
      <div
        className={cn(
          'border-t border-[var(--divider-color)]',
          variantStyles[variant],
          weightStyles[weight],
          align === 'end' ? 'w-[var(--spacing-4)]' : 'flex-1'
        )}
      />
    </div>
  )
}

/* ============================================
   DividerVertical Component - Explicit vertical
   ============================================ */

export interface DividerVerticalProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  /** Line style variant */
  variant?: DividerVariant
  /** Line weight/thickness */
  weight?: DividerWeight
  /** Height of the divider (CSS value) */
  height?: string | number
  /** Spacing around the divider */
  spacing?: 'none' | 'sm' | 'md' | 'lg'
}

/**
 * DividerVertical component for explicit vertical separators.
 *
 * @example
 * <div className="flex items-center">
 *   <span>Item 1</span>
 *   <DividerVertical />
 *   <span>Item 2</span>
 * </div>
 */
export function DividerVertical({
  variant = 'solid',
  weight = 'light',
  height,
  spacing = 'md',
  className,
  style,
  ...props
}: DividerVerticalProps) {
  const computedHeight = typeof height === 'number' ? `${height}px` : height
  const spacingStyle = spacingStyles[spacing]

  return (
    <div
      role="separator"
      aria-orientation="vertical"
      className={cn(
        'border-l border-[var(--divider-color)]',
        'self-stretch',
        variantStyles[variant],
        weightStyles[weight],
        spacingStyle.vertical,
        className
      )}
      style={{
        height: computedHeight,
        ...style,
      }}
      {...props}
    />
  )
}

/* ============================================
   DividerSection Component - Section divider with title
   ============================================ */

export interface DividerSectionProps extends HTMLAttributes<HTMLDivElement> {
  /** Title text */
  title: string
  /** Optional subtitle */
  subtitle?: string
  /** Action element (button, link, etc.) */
  action?: ReactNode
  /** Spacing around the divider */
  spacing?: 'none' | 'sm' | 'md' | 'lg'
}

/**
 * DividerSection component for section headers with divider.
 *
 * @example
 * <DividerSection title="Proizvodi" subtitle="12 artikala" />
 * <DividerSection title="Narudžbe" action={<button>Vidi sve</button>} />
 */
export function DividerSection({
  title,
  subtitle,
  action,
  spacing = 'lg',
  className,
  ...props
}: DividerSectionProps) {
  const spacingStyle = spacingStyles[spacing]

  return (
    <div
      className={cn('w-full', spacingStyle.horizontal, className)}
      {...props}
    >
      <div className="flex items-center justify-between mb-[var(--spacing-2)]">
        <div className="flex items-baseline gap-[var(--spacing-2)]">
          <h3 className="text-[var(--font-size-lg)] font-semibold text-[var(--color-text-primary)]">
            {title}
          </h3>
          {subtitle && (
            <span className="text-[var(--font-size-sm)] text-[var(--color-text-tertiary)]">
              {subtitle}
            </span>
          )}
        </div>
        {action && (
          <div className="shrink-0">
            {action}
          </div>
        )}
      </div>
      <Divider spacing="none" />
    </div>
  )
}

import { forwardRef, type HTMLAttributes, type ReactNode, type ComponentType, type SVGProps } from 'react'
import { cn } from '@/src/lib/utils'

/* ============================================
   Icon Component
   Wrapper for consistent icon sizing and styling
   ============================================ */

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
export type IconColor = 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info' | 'muted'

export interface IconProps extends HTMLAttributes<HTMLSpanElement> {
  /** The icon to render (React component or ReactNode) */
  icon?: ComponentType<SVGProps<SVGSVGElement>> | ReactNode
  /** Alternative: pass icon as children */
  children?: ReactNode
  /** Size of the icon */
  size?: IconSize
  /** Color of the icon */
  color?: IconColor
  /** Custom size in pixels (overrides size prop) */
  customSize?: number
  /** Whether to add a background circle */
  withBackground?: boolean
  /** Background color when withBackground is true */
  bgColor?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info' | 'neutral'
  /** Label for accessibility */
  label?: string
}

const sizeStyles: Record<IconSize, string> = {
  xs: 'h-[var(--icon-size-xs)] w-[var(--icon-size-xs)]',
  sm: 'h-[var(--icon-size-sm)] w-[var(--icon-size-sm)]',
  md: 'h-[var(--icon-size-md)] w-[var(--icon-size-md)]',
  lg: 'h-[var(--icon-size-lg)] w-[var(--icon-size-lg)]',
  xl: 'h-[var(--icon-size-xl)] w-[var(--icon-size-xl)]',
  '2xl': 'h-[var(--icon-size-2xl)] w-[var(--icon-size-2xl)]',
}

const colorStyles: Record<IconColor, string> = {
  inherit: 'text-current',
  primary: 'text-[var(--color-primary-500)]',
  secondary: 'text-[var(--color-secondary-600)]',
  success: 'text-[var(--color-success-600)]',
  error: 'text-[var(--color-error-600)]',
  warning: 'text-[var(--color-warning-600)]',
  info: 'text-[var(--color-info-600)]',
  muted: 'text-[var(--color-text-tertiary)]',
}

const bgColorStyles: Record<string, string> = {
  primary: 'bg-[var(--color-primary-light)] text-[var(--color-primary-600)]',
  secondary: 'bg-[var(--color-secondary-100)] text-[var(--color-secondary-700)]',
  success: 'bg-[var(--color-success-50)] text-[var(--color-success-600)]',
  error: 'bg-[var(--color-error-50)] text-[var(--color-error-600)]',
  warning: 'bg-[var(--color-warning-50)] text-[var(--color-warning-600)]',
  info: 'bg-[var(--color-info-50)] text-[var(--color-info-600)]',
  neutral: 'bg-[var(--color-neutral-100)] text-[var(--color-neutral-600)]',
}

const bgSizeStyles: Record<IconSize, string> = {
  xs: 'p-1',
  sm: 'p-1.5',
  md: 'p-2',
  lg: 'p-2.5',
  xl: 'p-3',
  '2xl': 'p-4',
}

/**
 * Icon component for consistent icon rendering.
 * Wraps SVG icons with sizing, colors, and optional backgrounds.
 *
 * @example
 * // Basic usage with component
 * import { User01 } from '@/src/components/icons/Line/Users/User01'
 * <Icon icon={User01} size="md" />
 *
 * @example
 * // With children
 * <Icon size="lg" color="primary">
 *   <User01 />
 * </Icon>
 *
 * @example
 * // With background
 * <Icon icon={User01} withBackground bgColor="primary" />
 *
 * @example
 * // Custom size
 * <Icon icon={User01} customSize={32} />
 */
export const Icon = forwardRef<HTMLSpanElement, IconProps>(
  (
    {
      icon: IconComponent,
      children,
      size = 'md',
      color = 'inherit',
      customSize,
      withBackground = false,
      bgColor = 'neutral',
      label,
      className,
      style,
      ...props
    },
    ref
  ) => {
    const renderIcon = () => {
      // If icon prop is a component, render it
      if (IconComponent && typeof IconComponent === 'function') {
        const Component = IconComponent as ComponentType<SVGProps<SVGSVGElement>>
        return <Component className="h-full w-full" aria-hidden={!label} />
      }

      // If icon prop is a ReactNode, render it directly
      if (IconComponent) {
        return IconComponent
      }

      // Otherwise use children
      return children
    }

    const customStyles = customSize
      ? { ...style, width: customSize, height: customSize }
      : style

    if (withBackground) {
      return (
        <span
          ref={ref}
          role={label ? 'img' : undefined}
          aria-label={label}
          className={cn(
            'inline-flex items-center justify-center rounded-full',
            bgColorStyles[bgColor],
            bgSizeStyles[size],
            className
          )}
          style={style}
          {...props}
        >
          <span
            className={cn(
              'inline-flex shrink-0',
              sizeStyles[size]
            )}
            style={customStyles}
          >
            {renderIcon()}
          </span>
        </span>
      )
    }

    return (
      <span
        ref={ref}
        role={label ? 'img' : undefined}
        aria-label={label}
        className={cn(
          'inline-flex shrink-0',
          sizeStyles[size],
          colorStyles[color],
          className
        )}
        style={customStyles}
        {...props}
      >
        {renderIcon()}
      </span>
    )
  }
)

Icon.displayName = 'Icon'

/* ============================================
   IconBox - Icon with box background
   ============================================ */

export interface IconBoxProps extends HTMLAttributes<HTMLDivElement> {
  /** The icon to render */
  icon: ComponentType<SVGProps<SVGSVGElement>> | ReactNode
  /** Size of the icon */
  size?: IconSize
  /** Background color */
  bgColor?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info' | 'neutral'
  /** Border radius variant */
  radius?: 'sm' | 'md' | 'lg' | 'full'
  /** Label for accessibility */
  label?: string
}

const radiusStyles: Record<string, string> = {
  sm: 'rounded-[var(--radius-sm)]',
  md: 'rounded-[var(--radius-md)]',
  lg: 'rounded-[var(--radius-lg)]',
  full: 'rounded-full',
}

const boxSizeStyles: Record<IconSize, { container: string; icon: string }> = {
  xs: { container: 'h-6 w-6', icon: 'h-3 w-3' },
  sm: { container: 'h-8 w-8', icon: 'h-4 w-4' },
  md: { container: 'h-10 w-10', icon: 'h-5 w-5' },
  lg: { container: 'h-12 w-12', icon: 'h-6 w-6' },
  xl: { container: 'h-14 w-14', icon: 'h-7 w-7' },
  '2xl': { container: 'h-16 w-16', icon: 'h-8 w-8' },
}

/**
 * IconBox component for icons with a box/circle background.
 * Useful for feature lists, empty states, and decorative icons.
 *
 * @example
 * <IconBox icon={CheckIcon} bgColor="success" />
 *
 * @example
 * <IconBox icon={AlertIcon} bgColor="warning" size="lg" radius="lg" />
 */
export const IconBox = forwardRef<HTMLDivElement, IconBoxProps>(
  (
    {
      icon: IconComponent,
      size = 'md',
      bgColor = 'neutral',
      radius = 'full',
      label,
      className,
      ...props
    },
    ref
  ) => {
    const renderIcon = () => {
      if (typeof IconComponent === 'function') {
        const Component = IconComponent as ComponentType<SVGProps<SVGSVGElement>>
        return <Component className={boxSizeStyles[size].icon} aria-hidden={!label} />
      }
      return IconComponent
    }

    return (
      <div
        ref={ref}
        role={label ? 'img' : undefined}
        aria-label={label}
        className={cn(
          'inline-flex items-center justify-center',
          boxSizeStyles[size].container,
          bgColorStyles[bgColor],
          radiusStyles[radius],
          className
        )}
        {...props}
      >
        {renderIcon()}
      </div>
    )
  }
)

IconBox.displayName = 'IconBox'

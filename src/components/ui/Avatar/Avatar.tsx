import { forwardRef, type HTMLAttributes, type ReactNode } from 'react'
import { cn } from '@/src/lib/utils'

/* ============================================
   Avatar Component
   Display user profile images, initials, or icons
   ============================================ */

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
export type AvatarVariant = 'circle' | 'rounded' | 'square'
export type AvatarStatus = 'online' | 'offline' | 'busy' | 'away'

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  /** Image source URL */
  src?: string
  /** Alt text for the image */
  alt?: string
  /** Initials to display when no image */
  initials?: string
  /** Fallback icon when no image or initials */
  fallbackIcon?: ReactNode
  /** Size of the avatar */
  size?: AvatarSize
  /** Shape variant */
  variant?: AvatarVariant
  /** Online status indicator */
  status?: AvatarStatus
  /** Whether to show a border */
  bordered?: boolean
}

const sizeStyles: Record<AvatarSize, string> = {
  xs: 'h-[var(--avatar-size-xs)] w-[var(--avatar-size-xs)] text-[var(--font-size-xs)]',
  sm: 'h-[var(--avatar-size-sm)] w-[var(--avatar-size-sm)] text-[var(--font-size-xs)]',
  md: 'h-[var(--avatar-size-md)] w-[var(--avatar-size-md)] text-[var(--font-size-sm)]',
  lg: 'h-[var(--avatar-size-lg)] w-[var(--avatar-size-lg)] text-[var(--font-size-base)]',
  xl: 'h-[var(--avatar-size-xl)] w-[var(--avatar-size-xl)] text-[var(--font-size-lg)]',
  '2xl': 'h-[var(--avatar-size-2xl)] w-[var(--avatar-size-2xl)] text-[var(--font-size-xl)]',
}

const variantStyles: Record<AvatarVariant, string> = {
  circle: 'rounded-full',
  rounded: 'rounded-[var(--radius-lg)]',
  square: 'rounded-[var(--radius-md)]',
}

const statusStyles: Record<AvatarStatus, string> = {
  online: 'bg-[var(--color-success-500)]',
  offline: 'bg-[var(--color-neutral-400)]',
  busy: 'bg-[var(--color-error-500)]',
  away: 'bg-[var(--color-warning-500)]',
}

const statusSizeStyles: Record<AvatarSize, string> = {
  xs: 'h-2 w-2 border',
  sm: 'h-2.5 w-2.5 border',
  md: 'h-3 w-3 border-2',
  lg: 'h-3.5 w-3.5 border-2',
  xl: 'h-4 w-4 border-2',
  '2xl': 'h-5 w-5 border-2',
}

const iconSizeStyles: Record<AvatarSize, string> = {
  xs: 'h-3 w-3',
  sm: 'h-4 w-4',
  md: 'h-5 w-5',
  lg: 'h-6 w-6',
  xl: 'h-8 w-8',
  '2xl': 'h-10 w-10',
}

/** Default user icon */
function DefaultUserIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    </svg>
  )
}

/**
 * Avatar component for displaying user images, initials, or icons.
 * Supports multiple sizes, shapes, and status indicators.
 *
 * @example
 * // With image
 * <Avatar src="/user.jpg" alt="Korisnik" />
 *
 * @example
 * // With initials
 * <Avatar initials="JD" />
 *
 * @example
 * // With status indicator
 * <Avatar src="/user.jpg" status="online" />
 *
 * @example
 * // Avatar group
 * <AvatarGroup>
 *   <Avatar src="/user1.jpg" />
 *   <Avatar src="/user2.jpg" />
 * </AvatarGroup>
 */
export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      src,
      alt = '',
      initials,
      fallbackIcon,
      size = 'md',
      variant = 'circle',
      status,
      bordered = false,
      className,
      ...props
    },
    ref
  ) => {
    const renderContent = () => {
      if (src) {
        return (
          <img
            src={src}
            alt={alt}
            className="h-full w-full object-cover"
          />
        )
      }

      if (initials) {
        return (
          <span className="font-medium uppercase">
            {initials.slice(0, 2)}
          </span>
        )
      }

      if (fallbackIcon) {
        return <span className={iconSizeStyles[size]}>{fallbackIcon}</span>
      }

      return <DefaultUserIcon className={iconSizeStyles[size]} />
    }

    return (
      <div
        ref={ref}
        className={cn(
          // Base styles
          'relative inline-flex shrink-0 items-center justify-center overflow-hidden',
          'bg-[var(--avatar-bg)]',
          'text-[var(--avatar-text)]',
          // Size
          sizeStyles[size],
          // Variant
          variantStyles[variant],
          // Border
          bordered && 'border-2 border-[var(--avatar-border)]',
          // Custom className
          className
        )}
        {...props}
      >
        {renderContent()}

        {status && (
          <span
            className={cn(
              'absolute bottom-0 right-0 rounded-full border-[var(--color-bg-primary)]',
              statusStyles[status],
              statusSizeStyles[size]
            )}
            aria-label={`Status: ${status}`}
          />
        )}
      </div>
    )
  }
)

Avatar.displayName = 'Avatar'

/* ============================================
   AvatarGroup - Stack multiple avatars
   ============================================ */

export interface AvatarGroupProps extends HTMLAttributes<HTMLDivElement> {
  /** Maximum number of avatars to show */
  max?: number
  /** Size of avatars in the group */
  size?: AvatarSize
  /** Content (Avatar components) */
  children: ReactNode
}

/**
 * AvatarGroup component for stacking multiple avatars.
 *
 * @example
 * <AvatarGroup max={3}>
 *   <Avatar src="/user1.jpg" />
 *   <Avatar src="/user2.jpg" />
 *   <Avatar src="/user3.jpg" />
 *   <Avatar src="/user4.jpg" />
 * </AvatarGroup>
 */
export const AvatarGroup = forwardRef<HTMLDivElement, AvatarGroupProps>(
  ({ max, size = 'md', children, className, ...props }, ref) => {
    const childArray = Array.isArray(children) ? children : [children]
    const visibleChildren = max ? childArray.slice(0, max) : childArray
    const remainingCount = max ? childArray.length - max : 0

    return (
      <div
        ref={ref}
        className={cn('flex -space-x-2', className)}
        {...props}
      >
        {visibleChildren.map((child, index) => (
          <div
            key={index}
            className="ring-2 ring-[var(--color-bg-primary)] rounded-full"
          >
            {child}
          </div>
        ))}

        {remainingCount > 0 && (
          <div
            className={cn(
              'inline-flex items-center justify-center rounded-full',
              'bg-[var(--color-neutral-200)]',
              'text-[var(--color-text-secondary)]',
              'ring-2 ring-[var(--color-bg-primary)]',
              'font-medium',
              sizeStyles[size]
            )}
          >
            +{remainingCount}
          </div>
        )}
      </div>
    )
  }
)

AvatarGroup.displayName = 'AvatarGroup'

import { type HTMLAttributes } from 'react'
import { cn } from '@/src/lib/utils'

export type SkeletonVariant = 'text' | 'circular' | 'rectangular' | 'rounded'

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  /** Shape variant of the skeleton */
  variant?: SkeletonVariant
  /** Width of the skeleton (CSS value) */
  width?: string | number
  /** Height of the skeleton (CSS value) */
  height?: string | number
  /** Whether to animate the skeleton */
  animation?: 'pulse' | 'wave' | 'none'
}

const variantStyles: Record<SkeletonVariant, string> = {
  text: 'rounded-[var(--radius-sm)] h-[1em]',
  circular: 'rounded-full aspect-square',
  rectangular: 'rounded-none',
  rounded: 'rounded-[var(--radius-md)]',
}

const animationStyles: Record<'pulse' | 'wave' | 'none', string> = {
  pulse: 'animate-pulse',
  wave: 'skeleton-wave',
  none: '',
}

/**
 * Skeleton component for loading placeholders.
 * Displays animated shapes while content is loading.
 *
 * @example
 * <Skeleton variant="text" width="60%" />
 * <Skeleton variant="circular" width={48} height={48} />
 * <Skeleton variant="rectangular" height={200} />
 */
export function Skeleton({
  variant = 'text',
  width,
  height,
  animation = 'pulse',
  className,
  style,
  ...props
}: SkeletonProps) {
  const computedWidth = typeof width === 'number' ? `${width}px` : width
  const computedHeight = typeof height === 'number' ? `${height}px` : height

  return (
    <div
      className={cn(
        // Base styles
        'bg-[var(--skeleton-bg)]',
        // Variant styles
        variantStyles[variant],
        // Animation
        animationStyles[animation],
        // Custom className override
        className
      )}
      style={{
        width: computedWidth,
        height: computedHeight,
        ...style,
      }}
      aria-hidden="true"
      {...props}
    />
  )
}

/* ============================================
   SkeletonText Component - Multiple lines
   ============================================ */

export interface SkeletonTextProps extends HTMLAttributes<HTMLDivElement> {
  /** Number of lines to render */
  lines?: number
  /** Width of the last line (percentage or CSS value) */
  lastLineWidth?: string | number
  /** Gap between lines */
  gap?: 'sm' | 'md' | 'lg'
  /** Animation type */
  animation?: 'pulse' | 'wave' | 'none'
}

const gapStyles: Record<'sm' | 'md' | 'lg', string> = {
  sm: 'gap-[var(--spacing-1)]',
  md: 'gap-[var(--spacing-2)]',
  lg: 'gap-[var(--spacing-3)]',
}

/**
 * SkeletonText component for multi-line text placeholders.
 *
 * @example
 * <SkeletonText lines={3} />
 * <SkeletonText lines={4} lastLineWidth="60%" />
 */
export function SkeletonText({
  lines = 3,
  lastLineWidth = '80%',
  gap = 'md',
  animation = 'pulse',
  className,
  ...props
}: SkeletonTextProps) {
  const computedLastWidth = typeof lastLineWidth === 'number'
    ? `${lastLineWidth}px`
    : lastLineWidth

  return (
    <div
      className={cn('flex flex-col', gapStyles[gap], className)}
      aria-hidden="true"
      {...props}
    >
      {Array.from({ length: lines }).map((_, index) => (
        <Skeleton
          key={index}
          variant="text"
          width={index === lines - 1 ? computedLastWidth : '100%'}
          animation={animation}
        />
      ))}
    </div>
  )
}

/* ============================================
   SkeletonCard Component - Card placeholder
   ============================================ */

export interface SkeletonCardProps extends HTMLAttributes<HTMLDivElement> {
  /** Whether to show image placeholder */
  showImage?: boolean
  /** Height of the image area */
  imageHeight?: string | number
  /** Number of text lines in content area */
  lines?: number
  /** Animation type */
  animation?: 'pulse' | 'wave' | 'none'
}

/**
 * SkeletonCard component for card loading states.
 *
 * @example
 * <SkeletonCard showImage imageHeight={200} lines={3} />
 */
export function SkeletonCard({
  showImage = true,
  imageHeight = 180,
  lines = 3,
  animation = 'pulse',
  className,
  ...props
}: SkeletonCardProps) {
  const computedImageHeight = typeof imageHeight === 'number'
    ? `${imageHeight}px`
    : imageHeight

  return (
    <div
      className={cn(
        'rounded-[var(--radius-card)]',
        'border border-[var(--color-border-primary)]',
        'bg-[var(--card-bg)]',
        'overflow-hidden',
        className
      )}
      aria-hidden="true"
      {...props}
    >
      {showImage && (
        <Skeleton
          variant="rectangular"
          height={computedImageHeight}
          width="100%"
          animation={animation}
        />
      )}
      <div className="p-[var(--card-padding)]">
        <Skeleton
          variant="text"
          width="70%"
          height={24}
          animation={animation}
          className="mb-[var(--spacing-3)]"
        />
        <SkeletonText
          lines={lines}
          animation={animation}
          lastLineWidth="60%"
        />
      </div>
    </div>
  )
}

/* ============================================
   SkeletonAvatar Component - Avatar placeholder
   ============================================ */

export interface SkeletonAvatarProps extends HTMLAttributes<HTMLDivElement> {
  /** Size of the avatar */
  size?: 'sm' | 'md' | 'lg' | 'xl'
  /** Animation type */
  animation?: 'pulse' | 'wave' | 'none'
}

const avatarSizes: Record<'sm' | 'md' | 'lg' | 'xl', string> = {
  sm: 'w-8 h-8',
  md: 'w-10 h-10',
  lg: 'w-12 h-12',
  xl: 'w-16 h-16',
}

/**
 * SkeletonAvatar component for avatar loading states.
 *
 * @example
 * <SkeletonAvatar size="md" />
 */
export function SkeletonAvatar({
  size = 'md',
  animation = 'pulse',
  className,
  ...props
}: SkeletonAvatarProps) {
  return (
    <div
      className={cn(
        'rounded-full',
        'bg-[var(--skeleton-bg)]',
        avatarSizes[size],
        animationStyles[animation],
        className
      )}
      aria-hidden="true"
      {...props}
    />
  )
}

/* ============================================
   SkeletonRow Component - List item placeholder
   ============================================ */

export interface SkeletonRowProps extends HTMLAttributes<HTMLDivElement> {
  /** Whether to show avatar */
  showAvatar?: boolean
  /** Avatar size */
  avatarSize?: 'sm' | 'md' | 'lg' | 'xl'
  /** Number of text lines */
  lines?: number
  /** Animation type */
  animation?: 'pulse' | 'wave' | 'none'
}

/**
 * SkeletonRow component for list item loading states.
 *
 * @example
 * <SkeletonRow showAvatar lines={2} />
 */
export function SkeletonRow({
  showAvatar = true,
  avatarSize = 'md',
  lines = 2,
  animation = 'pulse',
  className,
  ...props
}: SkeletonRowProps) {
  return (
    <div
      className={cn(
        'flex items-start gap-[var(--spacing-3)]',
        className
      )}
      aria-hidden="true"
      {...props}
    >
      {showAvatar && (
        <SkeletonAvatar size={avatarSize} animation={animation} />
      )}
      <div className="flex-1">
        <SkeletonText
          lines={lines}
          animation={animation}
          lastLineWidth="60%"
          gap="sm"
        />
      </div>
    </div>
  )
}

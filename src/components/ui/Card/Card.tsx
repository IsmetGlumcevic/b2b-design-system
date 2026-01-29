import { forwardRef, type HTMLAttributes, type ReactNode } from 'react'
import { cn } from '@/src/lib/utils'

/* ============================================
   Card Root Component
   ============================================ */

export type CardVariant = 'elevated' | 'outlined' | 'filled'
export type CardPadding = 'none' | 'sm' | 'md' | 'lg'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** Visual style variant */
  variant?: CardVariant
  /** Padding size - affects all internal spacing */
  padding?: CardPadding
  /** Whether card has hover effect */
  hoverable?: boolean
  /** Whether card is clickable (adds pointer cursor) */
  clickable?: boolean
  /** Content of the card */
  children: ReactNode
}

const variantStyles: Record<CardVariant, string> = {
  elevated: `
    bg-[var(--card-bg)]
    shadow-[var(--card-shadow)]
  `,
  outlined: `
    bg-[var(--card-bg)]
    border
    border-[var(--card-border)]
  `,
  filled: `
    bg-[var(--color-bg-secondary)]
  `,
}

const paddingStyles: Record<CardPadding, string> = {
  none: '',
  sm: 'p-[var(--spacing-4)]',
  md: 'p-[var(--card-padding)]',
  lg: 'p-[var(--spacing-8)]',
}

/**
 * Card component with composable structure.
 * Use with CardHeader, CardContent, and CardFooter for full composition.
 *
 * @example
 * <Card variant="elevated" hoverable>
 *   <CardHeader>
 *     <CardTitle>Naslov kartice</CardTitle>
 *     <CardDescription>Opis kartice</CardDescription>
 *   </CardHeader>
 *   <CardContent>
 *     Sadržaj kartice
 *   </CardContent>
 *   <CardFooter>
 *     <Button>Akcija</Button>
 *   </CardFooter>
 * </Card>
 */
export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      variant = 'elevated',
      padding = 'none',
      hoverable = false,
      clickable = false,
      children,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          // Base styles
          'rounded-[var(--card-radius)]',
          'overflow-hidden',
          // Variant styles
          variantStyles[variant],
          // Padding
          paddingStyles[padding],
          // Hover effect
          hoverable && 'transition-shadow duration-[var(--duration-200)] hover:shadow-[var(--card-shadow-hover)]',
          // Clickable
          clickable && 'cursor-pointer',
          // Custom className override
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'

/* ============================================
   CardHeader Component
   ============================================ */

export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'flex flex-col gap-[var(--spacing-1-5)]',
          'p-[var(--card-padding)]',
          'pb-0',
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

CardHeader.displayName = 'CardHeader'

/* ============================================
   CardTitle Component
   ============================================ */

export interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  /** Heading level for accessibility */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  children: ReactNode
}

export const CardTitle = forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ as: Component = 'h3', children, className, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          'text-[var(--font-size-lg)]',
          'font-semibold',
          'leading-[var(--line-height-tight)]',
          'text-[var(--color-text-primary)]',
          className
        )}
        {...props}
      >
        {children}
      </Component>
    )
  }
)

CardTitle.displayName = 'CardTitle'

/* ============================================
   CardDescription Component
   ============================================ */

export interface CardDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode
}

export const CardDescription = forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn(
          'text-[var(--font-size-sm)]',
          'text-[var(--color-text-secondary)]',
          'leading-[var(--line-height-normal)]',
          className
        )}
        {...props}
      >
        {children}
      </p>
    )
  }
)

CardDescription.displayName = 'CardDescription'

/* ============================================
   CardContent Component
   ============================================ */

export interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'p-[var(--card-padding)]',
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

CardContent.displayName = 'CardContent'

/* ============================================
   CardFooter Component
   ============================================ */

export interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'flex items-center gap-[var(--spacing-4)]',
          'p-[var(--card-padding)]',
          'pt-0',
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

CardFooter.displayName = 'CardFooter'

/* ============================================
   CardImage Component
   ============================================ */

export interface CardImageProps extends HTMLAttributes<HTMLDivElement> {
  /** Image source URL */
  src: string
  /** Alt text for the image */
  alt: string
  /** Aspect ratio of the image container */
  aspectRatio?: 'auto' | 'square' | 'video' | '4/3'
}

const aspectRatioStyles: Record<string, string> = {
  auto: '',
  square: 'aspect-square',
  video: 'aspect-video',
  '4/3': 'aspect-[4/3]',
}

export const CardImage = forwardRef<HTMLDivElement, CardImageProps>(
  ({ src, alt, aspectRatio = 'video', className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'relative overflow-hidden',
          'bg-[var(--color-bg-tertiary)]',
          aspectRatioStyles[aspectRatio],
          className
        )}
        {...props}
      >
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover"
        />
      </div>
    )
  }
)

CardImage.displayName = 'CardImage'

import { forwardRef, type HTMLAttributes, type ReactNode } from 'react'
import { cn } from '@/src/lib/utils'

/* ============================================
   Container Component
   Centering layout component with max-width
   and consistent padding
   ============================================ */

export type ContainerSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'
export type ContainerPadding = 'none' | 'sm' | 'md' | 'lg'

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  /** Maximum width of the container */
  size?: ContainerSize
  /** Horizontal padding */
  padding?: ContainerPadding
  /** Whether to center the container */
  centered?: boolean
  /** Semantic HTML element to render as */
  as?: 'div' | 'section' | 'article' | 'main' | 'header' | 'footer'
  /** Content of the container */
  children: ReactNode
}

const sizeStyles: Record<ContainerSize, string> = {
  sm: 'max-w-screen-sm',      // 640px
  md: 'max-w-screen-md',      // 768px
  lg: 'max-w-screen-lg',      // 1024px
  xl: 'max-w-screen-xl',      // 1280px
  '2xl': 'max-w-screen-2xl',  // 1536px
  full: 'max-w-full',         // No max-width
}

const paddingStyles: Record<ContainerPadding, string> = {
  none: 'px-0',
  sm: 'px-[var(--spacing-4)]',
  md: 'px-[var(--spacing-container-padding)]',
  lg: 'px-[var(--spacing-8)]',
}

/**
 * Container component for centering content with consistent max-width and padding.
 * A layout primitive that provides responsive content width constraints.
 *
 * @example
 * // Default centered container
 * <Container>
 *   <PageContent />
 * </Container>
 *
 * @example
 * // Small container for narrow content
 * <Container size="sm" padding="lg">
 *   <Form />
 * </Container>
 *
 * @example
 * // Full width section
 * <Container size="full" as="section">
 *   <Hero />
 * </Container>
 */
export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  (
    {
      size = 'xl',
      padding = 'md',
      centered = true,
      as: Component = 'div',
      children,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <Component
        ref={ref}
        className={cn(
          // Base styles
          'w-full',
          // Size (max-width)
          sizeStyles[size],
          // Padding
          paddingStyles[padding],
          // Centering
          centered && 'mx-auto',
          // Custom className override
          className
        )}
        {...props}
      >
        {children}
      </Component>
    )
  }
)

Container.displayName = 'Container'

/* ============================================
   Section - Container with vertical spacing
   ============================================ */

export type SectionSpacing = 'sm' | 'md' | 'lg' | 'xl'

export interface SectionProps extends ContainerProps {
  /** Vertical spacing (padding top and bottom) */
  spacing?: SectionSpacing
}

const spacingStyles: Record<SectionSpacing, string> = {
  sm: 'py-[var(--spacing-8)]',
  md: 'py-[var(--spacing-12)]',
  lg: 'py-[var(--spacing-16)]',
  xl: 'py-[var(--spacing-section-gap)]',
}

/**
 * Section component - Container with vertical spacing.
 * Ideal for page sections with consistent vertical rhythm.
 *
 * @example
 * <Section spacing="lg">
 *   <SectionTitle>Naši proizvodi</SectionTitle>
 *   <ProductGrid />
 * </Section>
 */
export const Section = forwardRef<HTMLDivElement, SectionProps>(
  (
    {
      spacing = 'md',
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <Container
        ref={ref}
        as="section"
        className={cn(
          spacingStyles[spacing],
          className
        )}
        {...props}
      >
        {children}
      </Container>
    )
  }
)

Section.displayName = 'Section'

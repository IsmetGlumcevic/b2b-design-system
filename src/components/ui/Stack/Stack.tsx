import { forwardRef, type HTMLAttributes, type ReactNode } from 'react'
import { cn } from '@/src/lib/utils'

/* ============================================
   Stack Component
   Flexbox layout component for arranging elements
   with consistent spacing
   ============================================ */

export type StackDirection = 'horizontal' | 'vertical'
export type StackAlign = 'start' | 'center' | 'end' | 'stretch' | 'baseline'
export type StackJustify = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'
export type StackSpacing = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'
export type StackWrap = 'nowrap' | 'wrap' | 'wrap-reverse'

export interface StackProps extends HTMLAttributes<HTMLDivElement> {
  /** Direction of items - horizontal or vertical */
  direction?: StackDirection
  /** Alignment of items on the cross axis */
  align?: StackAlign
  /** Justification of items on the main axis */
  justify?: StackJustify
  /** Gap between items */
  gap?: StackSpacing
  /** Whether items should wrap */
  wrap?: StackWrap
  /** Whether stack should take full width */
  fullWidth?: boolean
  /** Semantic HTML element to render as */
  as?: 'div' | 'section' | 'article' | 'nav' | 'aside' | 'header' | 'footer' | 'main'
  /** Content of the stack */
  children: ReactNode
}

const directionStyles: Record<StackDirection, string> = {
  horizontal: 'flex-row',
  vertical: 'flex-col',
}

const alignStyles: Record<StackAlign, string> = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  stretch: 'items-stretch',
  baseline: 'items-baseline',
}

const justifyStyles: Record<StackJustify, string> = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
  between: 'justify-between',
  around: 'justify-around',
  evenly: 'justify-evenly',
}

const gapStyles: Record<StackSpacing, string> = {
  none: 'gap-0',
  xs: 'gap-[var(--spacing-1)]',
  sm: 'gap-[var(--spacing-2)]',
  md: 'gap-[var(--spacing-4)]',
  lg: 'gap-[var(--spacing-6)]',
  xl: 'gap-[var(--spacing-8)]',
  '2xl': 'gap-[var(--spacing-12)]',
  '3xl': 'gap-[var(--spacing-16)]',
}

const wrapStyles: Record<StackWrap, string> = {
  nowrap: 'flex-nowrap',
  wrap: 'flex-wrap',
  'wrap-reverse': 'flex-wrap-reverse',
}

/**
 * Stack component for arranging elements with consistent spacing.
 * A flexible layout primitive that simplifies common flex patterns.
 *
 * @example
 * // Vertical stack (default)
 * <Stack gap="md">
 *   <Card>Kartica 1</Card>
 *   <Card>Kartica 2</Card>
 * </Stack>
 *
 * @example
 * // Horizontal stack with center alignment
 * <Stack direction="horizontal" align="center" gap="sm">
 *   <Icon />
 *   <span>Tekst</span>
 * </Stack>
 *
 * @example
 * // Space between items
 * <Stack direction="horizontal" justify="between" fullWidth>
 *   <Logo />
 *   <Navigation />
 * </Stack>
 */
export const Stack = forwardRef<HTMLDivElement, StackProps>(
  (
    {
      direction = 'vertical',
      align = 'stretch',
      justify = 'start',
      gap = 'md',
      wrap = 'nowrap',
      fullWidth = false,
      as: Component = 'div',
      children,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <Component
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ref={ref as any}
        className={cn(
          // Base flex
          'flex',
          // Direction
          directionStyles[direction],
          // Alignment
          alignStyles[align],
          // Justification
          justifyStyles[justify],
          // Gap
          gapStyles[gap],
          // Wrap
          wrapStyles[wrap],
          // Full width
          fullWidth && 'w-full',
          // Custom className override
          className
        )}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        {...(props as any)}
      >
        {children}
      </Component>
    )
  }
)

Stack.displayName = 'Stack'

/* ============================================
   HStack - Horizontal Stack Shorthand
   ============================================ */

export type HStackProps = Omit<StackProps, 'direction'>

/**
 * HStack - Horizontal Stack shorthand.
 * Same as Stack with direction="horizontal".
 *
 * @example
 * <HStack gap="sm" align="center">
 *   <Icon />
 *   <span>Tekst</span>
 * </HStack>
 */
export const HStack = forwardRef<HTMLDivElement, HStackProps>(
  ({ ...props }, ref) => {
    return <Stack ref={ref} direction="horizontal" {...props} />
  }
)

HStack.displayName = 'HStack'

/* ============================================
   VStack - Vertical Stack Shorthand
   ============================================ */

export type VStackProps = Omit<StackProps, 'direction'>

/**
 * VStack - Vertical Stack shorthand.
 * Same as Stack with direction="vertical".
 *
 * @example
 * <VStack gap="lg">
 *   <Heading>Naslov</Heading>
 *   <Paragraph>Tekst paragrafa</Paragraph>
 * </VStack>
 */
export const VStack = forwardRef<HTMLDivElement, VStackProps>(
  ({ ...props }, ref) => {
    return <Stack ref={ref} direction="vertical" {...props} />
  }
)

VStack.displayName = 'VStack'

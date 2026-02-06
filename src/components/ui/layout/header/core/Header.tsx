import { forwardRef } from 'react'
import { cn } from '@/src/lib/utils'
import type { HeaderProps } from '../types'

/**
 * Header - Main header wrapper component (Server Component)
 *
 * @example
 * <Header sticky variant="dark">
 *   <HeaderTopBar>...</HeaderTopBar>
 *   <HeaderMain>...</HeaderMain>
 * </Header>
 */
export const Header = forwardRef<HTMLElement, HeaderProps>(
  (
    {
      sticky = false,
      transparent = false,
      variant = 'light',
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <header
        ref={ref}
        role="banner"
        className={cn(
          // Base styles
          'w-full',
          // Variant styles
          variant === 'light' && [
            'bg-[var(--header-bg)]',
            'border-b border-[var(--header-border)]',
          ],
          variant === 'dark' && [
            'bg-[var(--color-secondary-800)]',
            'border-b border-[var(--color-secondary-700)]',
            'text-[var(--color-text-inverse)]',
          ],
          // Sticky
          sticky && [
            'sticky top-0',
            'z-[var(--z-sticky)]',
            variant === 'light' ? 'shadow-[var(--header-shadow)]' : 'shadow-lg',
          ],
          // Transparent (for hero overlays)
          transparent && 'bg-transparent border-transparent shadow-none',
          className
        )}
        {...props}
      >
        {children}
      </header>
    )
  }
)

Header.displayName = 'Header'

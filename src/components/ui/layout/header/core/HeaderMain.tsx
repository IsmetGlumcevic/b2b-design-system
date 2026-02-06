import { forwardRef } from 'react'
import { cn } from '@/src/lib/utils'
import type { HeaderMainProps } from '../types'

/**
 * HeaderMain - Main header row container (Server Component)
 *
 * Contains Logo, MainNavigation, and HeaderActions
 *
 * @example
 * <HeaderMain>
 *   <Logo src="/logo.svg" alt="Shop" />
 *   <MainNavigation categories={categories} />
 *   <HeaderActions>...</HeaderActions>
 * </HeaderMain>
 */
export const HeaderMain = forwardRef<HTMLDivElement, HeaderMainProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          // Layout
          'flex items-center justify-between gap-[var(--spacing-4)]',
          // Height
          'h-[var(--header-height)]',
          'lg:h-[var(--header-height)]',
          // Container padding
          'px-[var(--spacing-container-padding)]',
          // Max width and centering
          'mx-auto max-w-[var(--container-max-width,1440px)]',
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

HeaderMain.displayName = 'HeaderMain'

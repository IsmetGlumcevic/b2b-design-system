import { forwardRef } from 'react'
import { cn } from '@/src/lib/utils'
import type { HeaderTopBarProps } from '../types'

/**
 * HeaderTopBar - Top info bar (Server Component)
 *
 * Displays contact info, announcements, or other secondary header content
 *
 * @example
 * <HeaderTopBar colorScheme="dark">
 *   <ContactInfo phone="+387 33 123 456" colorScheme="dark" />
 * </HeaderTopBar>
 */
export const HeaderTopBar = forwardRef<HTMLDivElement, HeaderTopBarProps>(
  ({ colorScheme = 'light', className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          // Height
          'h-[var(--header-top-bar-height,40px)]',
          // Hide on mobile, show on tablet+
          'hidden md:block',
          // Color scheme
          colorScheme === 'light' && [
            'bg-[var(--color-bg-secondary)]',
            'border-b border-[var(--color-border-primary)]',
          ],
          colorScheme === 'dark' && [
            'bg-[var(--color-secondary-900)]',
            'border-b border-[var(--color-secondary-700)]',
          ],
          className
        )}
        {...props}
      >
        <div
          className={cn(
            // Layout
            'flex items-center justify-between',
            'h-full',
            // Container padding
            'px-[var(--spacing-container-padding)]',
            // Max width and centering
            'mx-auto max-w-[var(--container-max-width,1440px)]'
          )}
        >
          {children}
        </div>
      </div>
    )
  }
)

HeaderTopBar.displayName = 'HeaderTopBar'

import { forwardRef } from 'react'
import { cn } from '@/src/lib/utils'
import type { HeaderActionsProps } from '../types'

/**
 * HeaderActions - Action buttons container (Server Component)
 *
 * Contains SearchTrigger, CartButton, AccountDropdown, etc.
 *
 * @example
 * <HeaderActions>
 *   <SearchTrigger onOpen={openSearch} />
 *   <CartButton count={3} href="/cart" />
 *   <AccountDropdown user={user} onLogout={logout} />
 * </HeaderActions>
 */
export const HeaderActions = forwardRef<HTMLDivElement, HeaderActionsProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          // Layout
          'flex items-center',
          'gap-[var(--spacing-1)] sm:gap-[var(--spacing-2)]',
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

HeaderActions.displayName = 'HeaderActions'

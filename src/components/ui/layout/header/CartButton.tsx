'use client'

import { forwardRef } from 'react'
import Link from 'next/link'
import { cn } from '@/src/lib/utils'
import { IconButton } from '@/src/components/ui/buttons/IconButton'
import ShoppingCart01 from '@/src/components/ui/icons/Line/Finance & eCommerce/ShoppingCart01'
import type { CartButtonProps } from './types'

/**
 * CartButton - Cart icon button with badge (Client Component)
 *
 * Displays cart icon with item count badge. Can be a button or link.
 *
 * @example
 * <CartButton count={3} href="/cart" />
 * <CartButton count={0} onClick={() => openCartDrawer()} colorScheme="dark" />
 */
export const CartButton = forwardRef<HTMLButtonElement, CartButtonProps>(
  ({ count = 0, href, colorScheme = 'light', className, onClick, ...props }, ref) => {
    const displayCount = count > 99 ? '99+' : count

    const content = (
      <div className="relative">
        <IconButton
          ref={ref}
          icon={<ShoppingCart01 />}
          aria-label={`Košarica${count > 0 ? ` (${count} stavki)` : ''}`}
          variant="ghost"
          size="md"
          onClick={href ? undefined : onClick}
          className={cn(
            colorScheme === 'dark' && 'text-white hover:bg-white/10',
            className
          )}
          {...props}
        />
        {count > 0 && (
          <span
            className={cn(
              'absolute -top-1 -right-1',
              'flex items-center justify-center',
              'min-w-[var(--cart-badge-size,18px)] h-[var(--cart-badge-size,18px)]',
              'px-[var(--spacing-1)]',
              'rounded-full',
              'bg-[var(--color-primary-500)]',
              'text-[var(--color-text-inverse)]',
              'text-[10px] font-semibold',
              'leading-none'
            )}
            aria-hidden="true"
          >
            {displayCount}
          </span>
        )}
      </div>
    )

    if (href) {
      return (
        <Link href={href} className="inline-flex">
          {content}
        </Link>
      )
    }

    return content
  }
)

CartButton.displayName = 'CartButton'

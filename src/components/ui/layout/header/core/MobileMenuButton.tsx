'use client'

import { forwardRef } from 'react'
import { cn } from '@/src/lib/utils'
import { IconButton } from '@/src/components/ui/buttons/IconButton'
import Menu01 from '@/src/components/ui/icons/Line/General/Menu01'
import XClose from '@/src/components/ui/icons/Line/General/XClose'
import type { MobileMenuButtonProps } from '../types'

/**
 * MobileMenuButton - Hamburger menu toggle (Client Component)
 *
 * @example
 * <MobileMenuButton isOpen={isMenuOpen} onToggle={() => setMenuOpen(!isMenuOpen)} />
 */
export const MobileMenuButton = forwardRef<HTMLButtonElement, MobileMenuButtonProps>(
  ({ isOpen, onToggle, colorScheme = 'light', className, ...props }, ref) => {
    return (
      <IconButton
        ref={ref}
        icon={isOpen ? <XClose /> : <Menu01 />}
        aria-label={isOpen ? 'Zatvori izbornik' : 'Otvori izbornik'}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        variant="ghost"
        size="md"
        onClick={onToggle}
        className={cn(
          colorScheme === 'dark' && 'text-white hover:bg-[var(--color-secondary-700)]',
          className
        )}
        {...props}
      />
    )
  }
)

MobileMenuButton.displayName = 'MobileMenuButton'

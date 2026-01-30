'use client'

import { forwardRef, type HTMLAttributes, type MouseEvent } from 'react'
import { cn } from '@/src/lib/utils'

/* ============================================
   Search Modal Overlay Props
   ============================================ */

export interface SearchModalOverlayProps extends HTMLAttributes<HTMLDivElement> {
  /** Click handler for overlay */
  onClick?: (event: MouseEvent<HTMLDivElement>) => void
}

/* ============================================
   Search Modal Overlay Component
   ============================================ */

/**
 * Backdrop overlay for the search modal.
 * Clicking the overlay closes the modal.
 *
 * @example
 * <SearchModalOverlay onClick={onClose} />
 */
export const SearchModalOverlay = forwardRef<HTMLDivElement, SearchModalOverlayProps>(
  ({ onClick, className, ...props }, ref) => {
    const handleClick = (event: MouseEvent<HTMLDivElement>) => {
      // Only trigger if clicking directly on the overlay, not its children
      if (event.target === event.currentTarget) {
        onClick?.(event)
      }
    }

    return (
      <div
        ref={ref}
        onClick={handleClick}
        className={cn(
          'absolute inset-0',
          'bg-[var(--color-bg-overlay)]',
          'backdrop-blur-sm',
          'animate-in fade-in duration-200',
          className
        )}
        aria-hidden="true"
        {...props}
      />
    )
  }
)

SearchModalOverlay.displayName = 'SearchModalOverlay'

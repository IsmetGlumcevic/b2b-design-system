'use client'

import { forwardRef, type HTMLAttributes, type ReactNode } from 'react'
import { cn } from '@/src/lib/utils'

/* ============================================
   Search Modal Content Props
   ============================================ */

export interface SearchModalContentProps extends HTMLAttributes<HTMLDivElement> {
  /** Content of the modal */
  children: ReactNode
}

/* ============================================
   Search Modal Content Component
   ============================================ */

/**
 * Main content container for the search modal.
 * Positioned at the top of the screen with max-width and rounded corners.
 *
 * @example
 * <SearchModalContent>
 *   <SearchModalInput />
 *   <SearchResultsTabs />
 *   <SearchResultsSection />
 * </SearchModalContent>
 */
export const SearchModalContent = forwardRef<HTMLDivElement, SearchModalContentProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          // Positioning
          'relative',
          'mx-auto',
          'mt-[var(--spacing-16)]',
          'w-full max-w-3xl',
          'max-h-[calc(100vh-var(--spacing-32))]',
          // Styling
          'flex flex-col',
          'bg-[var(--color-bg-elevated)]',
          'rounded-[var(--radius-xl)]',
          'shadow-[var(--shadow-2xl)]',
          'overflow-hidden',
          // Animation
          'animate-in slide-in-from-top-4 fade-in duration-300',
          // Z-index
          'z-[var(--z-modal)]',
          className
        )}
        onClick={(e) => e.stopPropagation()}
        {...props}
      >
        {children}
      </div>
    )
  }
)

SearchModalContent.displayName = 'SearchModalContent'

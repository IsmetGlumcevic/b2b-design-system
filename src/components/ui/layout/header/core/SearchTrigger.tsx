'use client'

import { forwardRef } from 'react'
import { cn } from '@/src/lib/utils'
import { IconButton } from '@/src/components/ui/buttons/IconButton'
import SearchMd from '@/src/components/ui/icons/Line/General/SearchMd'
import type { SearchTriggerProps } from '../types'

/**
 * SearchTrigger - Search button/input trigger (Client Component)
 *
 * Opens search modal when clicked. Has three variants:
 * - 'icon': Icon-only button
 * - 'expanded': Shows placeholder text
 * - 'responsive': Icon on mobile/tablet, expanded on desktop (xl+)
 *
 * @example
 * <SearchTrigger onOpen={() => setSearchOpen(true)} />
 * <SearchTrigger onOpen={openSearch} variant="responsive" colorScheme="dark" />
 */
export const SearchTrigger = forwardRef<HTMLButtonElement, SearchTriggerProps>(
  (
    {
      onOpen,
      placeholder = 'Pretraži...',
      shortcut = '⌘K',
      variant = 'icon',
      colorScheme = 'light',
      className,
      ...props
    },
    ref
  ) => {
    const iconButton = (
      <IconButton
        ref={variant === 'icon' ? ref : undefined}
        icon={<SearchMd />}
        aria-label="Pretraga"
        variant="ghost"
        size="md"
        onClick={onOpen}
        className={cn(
          colorScheme === 'dark' && 'text-white hover:bg-white/10',
          variant === 'responsive' && 'xl:hidden',
          className
        )}
        {...props}
      />
    )

    const expandedButton = (
      <button
        ref={variant !== 'icon' ? ref : undefined}
        type="button"
        onClick={onOpen}
        aria-label="Pretraga"
        className={cn(
          // Base
          'inline-flex items-center gap-[var(--spacing-2)]',
          'h-[var(--button-height-md)]',
          'px-[var(--spacing-3)]',
          'rounded-[var(--radius-button)]',
          'border',
          // Text
          'text-[var(--font-size-sm)]',
          // Focus
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-500)] focus-visible:ring-offset-2',
          // Transition
          'transition-[var(--transition-fast)]',
          // Width
          'w-[280px]',
          // Responsive visibility
          variant === 'responsive' && 'hidden xl:inline-flex',
          // Color scheme
          colorScheme === 'light' && [
            'border-[var(--color-border-primary)]',
            'bg-[var(--color-bg-secondary)]',
            'text-[var(--color-text-tertiary)]',
            'hover:border-[var(--color-border-secondary)]',
            'hover:bg-[var(--color-bg-tertiary)]',
          ],
          colorScheme === 'dark' && [
            'border-[var(--color-secondary-600)]',
            'bg-[var(--color-secondary-700)]',
            'text-[var(--color-neutral-400)]',
            'hover:border-[var(--color-secondary-500)]',
            'hover:bg-[var(--color-secondary-600)]',
          ],
          variant !== 'responsive' && className
        )}
        {...props}
      >
        <SearchMd className="h-4 w-4 shrink-0" aria-hidden="true" />
        <span className="flex-1 text-left truncate">{placeholder}</span>
        {shortcut && (
          <kbd
            className={cn(
              'inline-flex items-center',
              'px-[var(--spacing-1-5)] py-[var(--spacing-0-5)]',
              'rounded-[var(--radius-sm)]',
              'text-[var(--font-size-xs)]',
              'font-medium',
              colorScheme === 'light' && [
                'bg-[var(--color-bg-primary)]',
                'border border-[var(--color-border-primary)]',
              ],
              colorScheme === 'dark' && [
                'bg-[var(--color-secondary-600)]',
                'border border-[var(--color-secondary-500)]',
                'text-[var(--color-neutral-300)]',
              ]
            )}
          >
            {shortcut}
          </kbd>
        )}
      </button>
    )

    // Icon-only variant
    if (variant === 'icon') {
      return iconButton
    }

    // Responsive variant - shows both with visibility classes
    if (variant === 'responsive') {
      return (
        <>
          {iconButton}
          {expandedButton}
        </>
      )
    }

    // Expanded variant
    return expandedButton
  }
)

SearchTrigger.displayName = 'SearchTrigger'

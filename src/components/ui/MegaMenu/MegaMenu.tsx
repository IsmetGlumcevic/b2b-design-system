'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { cn } from '@/src/lib/utils'
import type { MegaMenuProps } from './types'

const HOVER_DELAY = 150

/**
 * MegaMenu - Container wrapper with hover/focus behavior
 *
 * @example
 * <MegaMenu trigger={<button>Proizvodi</button>}>
 *   <MegaMenuCategories categories={categories} />
 * </MegaMenu>
 */
export function MegaMenu({
  trigger,
  children,
  isOpen: controlledOpen,
  onOpenChange,
  colorScheme = 'light',
  className,
}: MegaMenuProps) {
  const [internalOpen, setInternalOpen] = useState(false)
  const [menuTop, setMenuTop] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLDivElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Support both controlled and uncontrolled modes
  const isOpen = controlledOpen !== undefined ? controlledOpen : internalOpen

  // Track current isOpen value in a ref for use in timeout callbacks
  const isOpenRef = useRef(isOpen)
  useEffect(() => {
    isOpenRef.current = isOpen
    // Clear any pending close timeout when menu state changes externally
    // (e.g., when user hovers another menu item)
    if (!isOpen && timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
  }, [isOpen])

  const setOpen = useCallback(
    (open: boolean) => {
      if (controlledOpen === undefined) {
        setInternalOpen(open)
      }
      onOpenChange?.(open)
    },
    [controlledOpen, onOpenChange]
  )

  // Clear timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  // Close on click outside - check both container and menu panel
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node
      const isOutsideContainer = containerRef.current && !containerRef.current.contains(target)
      const isOutsideMenu = menuRef.current && !menuRef.current.contains(target)

      if (isOutsideContainer && isOutsideMenu) {
        setOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, setOpen])

  // Close on Escape
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, setOpen])

  // Calculate position and open menu
  const openMenu = useCallback(() => {
    if (triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect()
      setMenuTop(rect.bottom + 8) // 8px gap below trigger
    }
    setOpen(true)
  }, [setOpen])

  const handleMouseEnter = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    if (!isOpen) {
      openMenu()
    }
  }, [isOpen, openMenu])

  const handleMouseLeave = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    timeoutRef.current = setTimeout(() => {
      // Only close if this menu is still open
      // (prevents closing when user moved to another menu)
      if (isOpenRef.current) {
        setOpen(false)
      }
    }, HOVER_DELAY)
  }, [setOpen])

  // Keep menu open when hovering over menu panel
  const handleMenuMouseEnter = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Trigger */}
      <div
        ref={triggerRef}
        role="button"
        tabIndex={0}
        aria-expanded={isOpen}
        aria-haspopup="menu"
        onClick={() => {
          if (isOpen) {
            setOpen(false)
          } else {
            openMenu()
          }
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            if (isOpen) {
              setOpen(false)
            } else {
              openMenu()
            }
          }
        }}
      >
        {trigger}
      </div>

      {/* Menu Panel */}
      {isOpen && menuTop > 0 && (
        <div
          ref={menuRef}
          role="menu"
          className={cn(
            // Fixed positioning relative to viewport
            'fixed',
            'left-1/2 -translate-x-1/2',
            // Width - container width with padding
            'w-[min(1200px,calc(100vw-32px))]',
            'max-h-[calc(100vh-200px)]',
            'overflow-y-auto',
            // Appearance
            'rounded-[var(--radius-xl)]',
            'shadow-[var(--shadow-dropdown)]',
            'z-[var(--z-dropdown)]',
            // Animation
            'animate-in fade-in-0 slide-in-from-top-2',
            'duration-200',
            // Color scheme
            colorScheme === 'light' && [
              'bg-[var(--color-bg-elevated)]',
              'border border-[var(--color-border-primary)]',
            ],
            colorScheme === 'dark' && [
              'bg-[var(--color-secondary-800)]',
              'border border-[var(--color-secondary-700)]',
            ],
            className
          )}
          style={{
            top: menuTop,
          }}
          onMouseEnter={handleMenuMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {children}
        </div>
      )}
    </div>
  )
}

MegaMenu.displayName = 'MegaMenu'

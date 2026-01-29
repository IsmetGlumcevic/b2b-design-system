'use client'

import {
  useState,
  useRef,
  useEffect,
  useCallback,
  type ReactNode,
  type HTMLAttributes,
} from 'react'
import { createPortal } from 'react-dom'
import { cn } from '@/src/lib/utils'

/* ============================================
   Tooltip Types
   ============================================ */

export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right'
export type TooltipTrigger = 'hover' | 'focus' | 'click'
export type TooltipVariant = 'dark' | 'light'

export interface TooltipProps {
  /** Content to display in the tooltip */
  content: ReactNode
  /** The element that triggers the tooltip */
  children: ReactNode
  /** Position of the tooltip relative to trigger */
  position?: TooltipPosition
  /** How the tooltip is triggered */
  trigger?: TooltipTrigger | TooltipTrigger[]
  /** Visual variant */
  variant?: TooltipVariant
  /** Delay before showing tooltip (ms) */
  showDelay?: number
  /** Delay before hiding tooltip (ms) */
  hideDelay?: number
  /** Whether tooltip is disabled */
  disabled?: boolean
  /** Whether tooltip is always visible (controlled) */
  isOpen?: boolean
  /** Callback when tooltip visibility changes */
  onOpenChange?: (isOpen: boolean) => void
  /** Additional className for tooltip content */
  className?: string
  /** Whether to show arrow */
  showArrow?: boolean
  /** Max width of tooltip */
  maxWidth?: string | number
}

/* ============================================
   Position calculation utilities
   ============================================ */

interface Position {
  top: number
  left: number
  arrowTop?: number
  arrowLeft?: number
}

function calculatePosition(
  triggerRect: DOMRect,
  tooltipRect: DOMRect,
  position: TooltipPosition,
  offset: number = 8
): Position {
  const { top, left, width, height } = triggerRect
  const scrollX = window.scrollX
  const scrollY = window.scrollY

  let pos: Position = { top: 0, left: 0 }

  switch (position) {
    case 'top':
      pos = {
        top: top + scrollY - tooltipRect.height - offset,
        left: left + scrollX + width / 2 - tooltipRect.width / 2,
      }
      break
    case 'bottom':
      pos = {
        top: top + scrollY + height + offset,
        left: left + scrollX + width / 2 - tooltipRect.width / 2,
      }
      break
    case 'left':
      pos = {
        top: top + scrollY + height / 2 - tooltipRect.height / 2,
        left: left + scrollX - tooltipRect.width - offset,
      }
      break
    case 'right':
      pos = {
        top: top + scrollY + height / 2 - tooltipRect.height / 2,
        left: left + scrollX + width + offset,
      }
      break
  }

  // Keep tooltip within viewport
  const viewportWidth = window.innerWidth
  const viewportHeight = window.innerHeight
  const padding = 8

  // Horizontal bounds
  if (pos.left < padding + scrollX) {
    pos.left = padding + scrollX
  } else if (pos.left + tooltipRect.width > viewportWidth + scrollX - padding) {
    pos.left = viewportWidth + scrollX - tooltipRect.width - padding
  }

  // Vertical bounds
  if (pos.top < padding + scrollY) {
    pos.top = padding + scrollY
  } else if (pos.top + tooltipRect.height > viewportHeight + scrollY - padding) {
    pos.top = viewportHeight + scrollY - tooltipRect.height - padding
  }

  return pos
}

/* ============================================
   Variant styles
   ============================================ */

const variantStyles: Record<TooltipVariant, string> = {
  dark: 'bg-[var(--tooltip-bg)] text-white',
  light: 'bg-[var(--color-bg-elevated)] text-[var(--color-text-primary)] border border-[var(--color-border-primary)]',
}

const arrowVariantStyles: Record<TooltipVariant, string> = {
  dark: 'border-[var(--tooltip-bg)]',
  light: 'border-[var(--color-bg-elevated)]',
}

/* ============================================
   Arrow position styles
   ============================================ */

const arrowPositionStyles: Record<TooltipPosition, string> = {
  top: 'bottom-0 left-1/2 -translate-x-1/2 translate-y-full border-l-transparent border-r-transparent border-b-transparent',
  bottom: 'top-0 left-1/2 -translate-x-1/2 -translate-y-full border-l-transparent border-r-transparent border-t-transparent',
  left: 'right-0 top-1/2 translate-x-full -translate-y-1/2 border-t-transparent border-b-transparent border-r-transparent',
  right: 'left-0 top-1/2 -translate-x-full -translate-y-1/2 border-t-transparent border-b-transparent border-l-transparent',
}

/* ============================================
   Tooltip Component
   ============================================ */

/**
 * Tooltip component for displaying contextual information.
 * Uses portal for proper positioning and stacking.
 *
 * @example
 * // Basic usage
 * <Tooltip content="Ovo je tooltip">
 *   <button>Hover me</button>
 * </Tooltip>
 *
 * @example
 * // With position and variant
 * <Tooltip content="Info tekst" position="right" variant="light">
 *   <IconButton icon={<InfoIcon />} />
 * </Tooltip>
 *
 * @example
 * // Click trigger
 * <Tooltip content="Klikni ponovo da zatvoris" trigger="click">
 *   <button>Klikni me</button>
 * </Tooltip>
 */
export function Tooltip({
  content,
  children,
  position = 'top',
  trigger = 'hover',
  variant = 'dark',
  showDelay = 0,
  hideDelay = 0,
  disabled = false,
  isOpen: controlledIsOpen,
  onOpenChange,
  className,
  showArrow = true,
  maxWidth,
}: TooltipProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [tooltipPosition, setTooltipPosition] = useState<Position>({ top: 0, left: 0 })
  const [mounted, setMounted] = useState(false)

  const triggerRef = useRef<HTMLDivElement>(null)
  const tooltipRef = useRef<HTMLDivElement>(null)
  const showTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Determine if controlled or uncontrolled
  const isControlled = controlledIsOpen !== undefined
  const visible = isControlled ? controlledIsOpen : isOpen

  // Normalize triggers to array
  const triggers = Array.isArray(trigger) ? trigger : [trigger]

  // Set mounted state for portal
  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  // Calculate position when tooltip becomes visible
  useEffect(() => {
    if (visible && triggerRef.current && tooltipRef.current) {
      const triggerRect = triggerRef.current.getBoundingClientRect()
      const tooltipRect = tooltipRef.current.getBoundingClientRect()
      const pos = calculatePosition(triggerRect, tooltipRect, position)
      setTooltipPosition(pos)
    }
  }, [visible, position])

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (showTimeoutRef.current) clearTimeout(showTimeoutRef.current)
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current)
    }
  }, [])

  const show = useCallback(() => {
    if (disabled) return

    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current)
      hideTimeoutRef.current = null
    }

    if (showDelay > 0) {
      showTimeoutRef.current = setTimeout(() => {
        if (!isControlled) setIsOpen(true)
        onOpenChange?.(true)
      }, showDelay)
    } else {
      if (!isControlled) setIsOpen(true)
      onOpenChange?.(true)
    }
  }, [disabled, showDelay, isControlled, onOpenChange])

  const hide = useCallback(() => {
    if (showTimeoutRef.current) {
      clearTimeout(showTimeoutRef.current)
      showTimeoutRef.current = null
    }

    if (hideDelay > 0) {
      hideTimeoutRef.current = setTimeout(() => {
        if (!isControlled) setIsOpen(false)
        onOpenChange?.(false)
      }, hideDelay)
    } else {
      if (!isControlled) setIsOpen(false)
      onOpenChange?.(false)
    }
  }, [hideDelay, isControlled, onOpenChange])

  const toggle = useCallback(() => {
    if (visible) {
      hide()
    } else {
      show()
    }
  }, [visible, show, hide])

  // Build trigger props based on trigger types
  const triggerProps: HTMLAttributes<HTMLDivElement> = {}

  if (triggers.includes('hover')) {
    triggerProps.onMouseEnter = show
    triggerProps.onMouseLeave = hide
  }

  if (triggers.includes('focus')) {
    triggerProps.onFocus = show
    triggerProps.onBlur = hide
  }

  if (triggers.includes('click')) {
    triggerProps.onClick = toggle
  }

  // Handle escape key to close
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && visible) {
        hide()
      }
    }

    if (visible) {
      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }
  }, [visible, hide])

  // Handle click outside for click trigger
  useEffect(() => {
    if (!triggers.includes('click') || !visible) return

    const handleClickOutside = (event: MouseEvent) => {
      if (
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node) &&
        tooltipRef.current &&
        !tooltipRef.current.contains(event.target as Node)
      ) {
        hide()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [triggers, visible, hide])

  // Don't render portal on server
  if (!mounted) return <>{children}</>

  return (
    <>
      {/* Trigger wrapper */}
      <div
        ref={triggerRef}
        className="inline-flex"
        {...triggerProps}
      >
        {children}
      </div>

      {/* Tooltip portal */}
      {visible && createPortal(
        <div
          ref={tooltipRef}
          role="tooltip"
          className={cn(
            // Base styles
            'fixed',
            'z-[var(--z-tooltip)]',
            'px-[var(--tooltip-padding-x)]',
            'py-[var(--tooltip-padding-y)]',
            'text-[var(--font-size-sm)]',
            'leading-[var(--line-height-snug)]',
            'rounded-[var(--tooltip-radius)]',
            'shadow-[var(--tooltip-shadow)]',
            // Animation
            'animate-in fade-in zoom-in-95 duration-150',
            // Variant
            variantStyles[variant],
            // Custom className
            className
          )}
          style={{
            top: tooltipPosition.top,
            left: tooltipPosition.left,
            maxWidth: maxWidth || 'var(--tooltip-max-width)',
          }}
        >
          {content}

          {/* Arrow */}
          {showArrow && (
            <span
              className={cn(
                'absolute',
                'w-0 h-0',
                'border-[var(--tooltip-arrow-size)]',
                'border-solid',
                arrowPositionStyles[position],
                arrowVariantStyles[variant]
              )}
              aria-hidden="true"
            />
          )}
        </div>,
        document.body
      )}
    </>
  )
}

/* ============================================
   TooltipTrigger - for more control
   ============================================ */

export interface TooltipTriggerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  asChild?: boolean
}

/**
 * Alternative trigger wrapper for more complex use cases.
 * Use with Tooltip's render prop pattern if needed in future.
 */
export function TooltipTrigger({
  children,
  className,
  ...props
}: TooltipTriggerProps) {
  return (
    <div className={cn('inline-flex', className)} {...props}>
      {children}
    </div>
  )
}

/* ============================================
   TooltipContent - for composition pattern
   ============================================ */

export interface TooltipContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

/**
 * Content wrapper for styled tooltip content.
 * Useful for complex tooltip content with custom structure.
 */
export function TooltipContent({
  children,
  className,
  ...props
}: TooltipContentProps) {
  return (
    <div className={cn('space-y-1', className)} {...props}>
      {children}
    </div>
  )
}

/* ============================================
   Export index
   ============================================ */

export default Tooltip

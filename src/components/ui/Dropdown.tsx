'use client'

import {
  createContext,
  forwardRef,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
  HTMLAttributes,
  ButtonHTMLAttributes,
  KeyboardEvent,
} from 'react'
import { cn } from '@/src/lib/utils'

/* ============================================
   DROPDOWN CONTEXT
   ============================================ */

interface DropdownContextType {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
  triggerId: string
  menuId: string
}

const DropdownContext = createContext<DropdownContextType | null>(null)

function useDropdownContext() {
  const context = useContext(DropdownContext)
  if (!context) {
    throw new Error('Dropdown components must be used within a Dropdown')
  }
  return context
}

/* ============================================
   DROPDOWN ROOT
   ============================================ */

export interface DropdownProps {
  children: ReactNode
  /** Controlled open state */
  open?: boolean
  /** Callback when open state changes */
  onOpenChange?: (open: boolean) => void
  /** Default open state (uncontrolled) */
  defaultOpen?: boolean
}

export function Dropdown({
  children,
  open,
  onOpenChange,
  defaultOpen = false,
}: DropdownProps) {
  const [internalOpen, setInternalOpen] = useState(defaultOpen)
  const isControlled = open !== undefined
  const isOpen = isControlled ? open : internalOpen

  const setIsOpen = (newOpen: boolean) => {
    if (!isControlled) {
      setInternalOpen(newOpen)
    }
    onOpenChange?.(newOpen)
  }

  const id = useRef(`dropdown-${Math.random().toString(36).substr(2, 9)}`).current
  const triggerId = `${id}-trigger`
  const menuId = `${id}-menu`

  return (
    <DropdownContext.Provider value={{ isOpen, setIsOpen, triggerId, menuId }}>
      <div className="relative inline-block">{children}</div>
    </DropdownContext.Provider>
  )
}

/* ============================================
   DROPDOWN TRIGGER
   ============================================ */

export interface DropdownTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  /** Custom element to render instead of button */
  asChild?: boolean
}

export const DropdownTrigger = forwardRef<HTMLButtonElement, DropdownTriggerProps>(
  ({ children, className, asChild, onClick, onKeyDown, ...props }, ref) => {
    const { isOpen, setIsOpen, triggerId, menuId } = useDropdownContext()

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      setIsOpen(!isOpen)
      onClick?.(e)
    }

    const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        setIsOpen(!isOpen)
      } else if (e.key === 'ArrowDown' && !isOpen) {
        e.preventDefault()
        setIsOpen(true)
      } else if (e.key === 'Escape' && isOpen) {
        e.preventDefault()
        setIsOpen(false)
      }
      onKeyDown?.(e)
    }

    return (
      <button
        ref={ref}
        id={triggerId}
        type="button"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-controls={isOpen ? menuId : undefined}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        className={cn(
          'inline-flex items-center justify-center gap-[var(--spacing-2)]',
          'rounded-[var(--radius-button)]',
          'border border-[var(--color-border-primary)]',
          'bg-[var(--color-bg-primary)]',
          'px-[var(--spacing-4)] py-[var(--spacing-2)]',
          'text-[var(--font-size-sm)] font-medium',
          'text-[var(--color-text-primary)]',
          'transition-[var(--transition-fast)]',
          'hover:bg-[var(--color-bg-secondary)]',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-500)] focus-visible:ring-offset-2',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          className
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon
          className={cn(
            'h-4 w-4 transition-transform',
            isOpen && 'rotate-180'
          )}
        />
      </button>
    )
  }
)

DropdownTrigger.displayName = 'DropdownTrigger'

/* ============================================
   DROPDOWN MENU
   ============================================ */

export type DropdownAlign = 'start' | 'center' | 'end'
export type DropdownSide = 'top' | 'bottom'

export interface DropdownMenuProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  /** Horizontal alignment relative to trigger */
  align?: DropdownAlign
  /** Which side to open on */
  side?: DropdownSide
  /** Width of the menu */
  width?: 'auto' | 'trigger' | number
}

export const DropdownMenu = forwardRef<HTMLDivElement, DropdownMenuProps>(
  (
    { children, className, align = 'start', side = 'bottom', width = 'auto', ...props },
    ref
  ) => {
    const { isOpen, setIsOpen, triggerId, menuId } = useDropdownContext()
    const menuRef = useRef<HTMLDivElement>(null)

    // Close on click outside
    useEffect(() => {
      if (!isOpen) return

      const handleClickOutside = (event: MouseEvent) => {
        const target = event.target as Node
        const trigger = document.getElementById(triggerId)
        const menu = menuRef.current

        if (
          menu &&
          !menu.contains(target) &&
          trigger &&
          !trigger.contains(target)
        ) {
          setIsOpen(false)
        }
      }

      const handleEscape = (event: globalThis.KeyboardEvent) => {
        if (event.key === 'Escape') {
          setIsOpen(false)
          document.getElementById(triggerId)?.focus()
        }
      }

      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('keydown', handleEscape)

      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
        document.removeEventListener('keydown', handleEscape)
      }
    }, [isOpen, setIsOpen, triggerId])

    // Focus first item when menu opens
    useEffect(() => {
      if (isOpen && menuRef.current) {
        const firstItem = menuRef.current.querySelector<HTMLElement>(
          '[role="menuitem"]:not([aria-disabled="true"])'
        )
        firstItem?.focus()
      }
    }, [isOpen])

    if (!isOpen) return null

    const alignmentStyles: Record<DropdownAlign, string> = {
      start: 'left-0',
      center: 'left-1/2 -translate-x-1/2',
      end: 'right-0',
    }

    const sideStyles: Record<DropdownSide, string> = {
      bottom: 'top-full mt-[var(--spacing-1)]',
      top: 'bottom-full mb-[var(--spacing-1)]',
    }

    const widthStyle =
      typeof width === 'number'
        ? { width: `${width}px` }
        : width === 'trigger'
          ? { minWidth: '100%' }
          : {}

    return (
      <div
        ref={(node) => {
          menuRef.current = node
          if (typeof ref === 'function') ref(node)
          else if (ref) ref.current = node
        }}
        id={menuId}
        role="menu"
        aria-labelledby={triggerId}
        className={cn(
          'absolute z-[var(--z-dropdown)]',
          'min-w-[180px]',
          'rounded-[var(--radius-lg)]',
          'border border-[var(--color-border-primary)]',
          'bg-[var(--color-bg-elevated)]',
          'p-[var(--spacing-1)]',
          'shadow-[var(--shadow-dropdown)]',
          'animate-in fade-in-0 zoom-in-95',
          alignmentStyles[align],
          sideStyles[side],
          className
        )}
        style={widthStyle}
        {...props}
      >
        {children}
      </div>
    )
  }
)

DropdownMenu.displayName = 'DropdownMenu'

/* ============================================
   DROPDOWN ITEM
   ============================================ */

export interface DropdownItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  /** Icon displayed before the label */
  icon?: ReactNode
  /** Shortcut key displayed on the right */
  shortcut?: string
  /** Whether this item is destructive/dangerous */
  destructive?: boolean
  /** Close dropdown on click (default: true) */
  closeOnSelect?: boolean
}

export const DropdownItem = forwardRef<HTMLButtonElement, DropdownItemProps>(
  (
    {
      children,
      className,
      icon,
      shortcut,
      destructive = false,
      closeOnSelect = true,
      disabled,
      onClick,
      onKeyDown,
      ...props
    },
    ref
  ) => {
    const { setIsOpen } = useDropdownContext()

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (disabled) return
      onClick?.(e)
      if (closeOnSelect) {
        setIsOpen(false)
      }
    }

    const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        if (!disabled) {
          onClick?.(e as unknown as React.MouseEvent<HTMLButtonElement>)
          if (closeOnSelect) {
            setIsOpen(false)
          }
        }
      } else if (e.key === 'ArrowDown') {
        e.preventDefault()
        const next = (e.currentTarget.nextElementSibling as HTMLElement)?.closest(
          '[role="menuitem"]'
        ) as HTMLElement
        next?.focus()
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        const prev = (e.currentTarget.previousElementSibling as HTMLElement)?.closest(
          '[role="menuitem"]'
        ) as HTMLElement
        prev?.focus()
      }
      onKeyDown?.(e)
    }

    return (
      <button
        ref={ref}
        role="menuitem"
        type="button"
        disabled={disabled}
        aria-disabled={disabled}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        className={cn(
          'flex w-full items-center gap-[var(--spacing-2)]',
          'rounded-[var(--radius-md)]',
          'px-[var(--spacing-3)] py-[var(--spacing-2)]',
          'text-[var(--font-size-sm)]',
          'text-left',
          'transition-[var(--transition-fast)]',
          'outline-none',
          destructive
            ? 'text-[var(--color-error-600)] hover:bg-[var(--color-error-50)] focus:bg-[var(--color-error-50)]'
            : 'text-[var(--color-text-primary)] hover:bg-[var(--color-bg-secondary)] focus:bg-[var(--color-bg-secondary)]',
          disabled && 'opacity-50 cursor-not-allowed pointer-events-none',
          className
        )}
        {...props}
      >
        {icon && <span className="shrink-0 text-current">{icon}</span>}
        <span className="flex-1">{children}</span>
        {shortcut && (
          <span className="ml-auto text-[var(--font-size-xs)] text-[var(--color-text-tertiary)]">
            {shortcut}
          </span>
        )}
      </button>
    )
  }
)

DropdownItem.displayName = 'DropdownItem'

/* ============================================
   DROPDOWN DIVIDER
   ============================================ */

export interface DropdownDividerProps extends HTMLAttributes<HTMLDivElement> {}

export function DropdownDivider({ className, ...props }: DropdownDividerProps) {
  return (
    <div
      role="separator"
      className={cn(
        'my-[var(--spacing-1)]',
        'h-px',
        'bg-[var(--color-border-primary)]',
        className
      )}
      {...props}
    />
  )
}

DropdownDivider.displayName = 'DropdownDivider'

/* ============================================
   DROPDOWN LABEL
   ============================================ */

export interface DropdownLabelProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export function DropdownLabel({ children, className, ...props }: DropdownLabelProps) {
  return (
    <div
      className={cn(
        'px-[var(--spacing-3)] py-[var(--spacing-1-5)]',
        'text-[var(--font-size-xs)] font-medium',
        'text-[var(--color-text-tertiary)]',
        'uppercase tracking-wider',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

DropdownLabel.displayName = 'DropdownLabel'

/* ============================================
   CHEVRON ICON (Internal)
   ============================================ */

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
        clipRule="evenodd"
      />
    </svg>
  )
}

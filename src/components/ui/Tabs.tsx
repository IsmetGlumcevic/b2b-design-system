'use client'

import {
  createContext,
  forwardRef,
  ReactNode,
  useContext,
  useId,
  useState,
  HTMLAttributes,
  ButtonHTMLAttributes,
  KeyboardEvent,
  useRef,
  useCallback,
} from 'react'
import { cn } from '@/src/lib/utils'

/* ============================================
   TABS CONTEXT
   ============================================ */

interface TabsContextType {
  activeValue: string
  setActiveValue: (value: string) => void
  baseId: string
  orientation: 'horizontal' | 'vertical'
}

const TabsContext = createContext<TabsContextType | null>(null)

function useTabsContext() {
  const context = useContext(TabsContext)
  if (!context) {
    throw new Error('Tabs components must be used within a Tabs')
  }
  return context
}

/* ============================================
   TABS ROOT
   ============================================ */

export interface TabsProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  /** The value of the tab that should be active when initially rendered (uncontrolled) */
  defaultValue?: string
  /** The controlled value of the tab to activate */
  value?: string
  /** Event handler called when the value changes */
  onValueChange?: (value: string) => void
  /** The orientation of the tabs */
  orientation?: 'horizontal' | 'vertical'
}

export function Tabs({
  children,
  defaultValue = '',
  value,
  onValueChange,
  orientation = 'horizontal',
  className,
  ...props
}: TabsProps) {
  const [internalValue, setInternalValue] = useState(defaultValue)
  const isControlled = value !== undefined
  const activeValue = isControlled ? value : internalValue

  const setActiveValue = useCallback(
    (newValue: string) => {
      if (!isControlled) {
        setInternalValue(newValue)
      }
      onValueChange?.(newValue)
    },
    [isControlled, onValueChange]
  )

  const baseId = useId()

  return (
    <TabsContext.Provider value={{ activeValue, setActiveValue, baseId, orientation }}>
      <div
        data-orientation={orientation}
        className={cn(
          'w-full',
          orientation === 'vertical' && 'flex gap-[var(--spacing-4)]',
          className
        )}
        {...props}
      >
        {children}
      </div>
    </TabsContext.Provider>
  )
}

Tabs.displayName = 'Tabs'

/* ============================================
   TABS LIST
   ============================================ */

export interface TabsListProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export const TabsList = forwardRef<HTMLDivElement, TabsListProps>(
  ({ children, className, ...props }, ref) => {
    const { orientation } = useTabsContext()
    const listRef = useRef<HTMLDivElement>(null)

    const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
      const tabs = listRef.current?.querySelectorAll<HTMLButtonElement>(
        '[role="tab"]:not([disabled])'
      )
      if (!tabs?.length) return

      const currentIndex = Array.from(tabs).findIndex(
        (tab) => tab === document.activeElement
      )

      let nextIndex: number | null = null

      if (orientation === 'horizontal') {
        if (e.key === 'ArrowRight') {
          nextIndex = currentIndex < tabs.length - 1 ? currentIndex + 1 : 0
        } else if (e.key === 'ArrowLeft') {
          nextIndex = currentIndex > 0 ? currentIndex - 1 : tabs.length - 1
        }
      } else {
        if (e.key === 'ArrowDown') {
          nextIndex = currentIndex < tabs.length - 1 ? currentIndex + 1 : 0
        } else if (e.key === 'ArrowUp') {
          nextIndex = currentIndex > 0 ? currentIndex - 1 : tabs.length - 1
        }
      }

      if (e.key === 'Home') {
        nextIndex = 0
      } else if (e.key === 'End') {
        nextIndex = tabs.length - 1
      }

      if (nextIndex !== null) {
        e.preventDefault()
        tabs[nextIndex].focus()
      }
    }

    return (
      <div
        ref={(node) => {
          listRef.current = node
          if (typeof ref === 'function') ref(node)
          else if (ref) ref.current = node
        }}
        role="tablist"
        aria-orientation={orientation}
        onKeyDown={handleKeyDown}
        className={cn(
          'inline-flex shrink-0',
          'border-[var(--color-border-primary)]',
          orientation === 'horizontal'
            ? 'flex-row items-center border-b'
            : 'flex-col border-r',
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

TabsList.displayName = 'TabsList'

/* ============================================
   TABS TRIGGER
   ============================================ */

export interface TabsTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  /** A unique value that associates the trigger with a content panel */
  value: string
  /** Icon displayed before the label */
  icon?: ReactNode
}

export const TabsTrigger = forwardRef<HTMLButtonElement, TabsTriggerProps>(
  ({ children, value, icon, disabled, className, ...props }, ref) => {
    const { activeValue, setActiveValue, baseId, orientation } = useTabsContext()
    const isActive = activeValue === value
    const triggerId = `${baseId}-trigger-${value}`
    const contentId = `${baseId}-content-${value}`

    const handleClick = () => {
      if (!disabled) {
        setActiveValue(value)
      }
    }

    const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        if (!disabled) {
          setActiveValue(value)
        }
      }
    }

    return (
      <button
        ref={ref}
        id={triggerId}
        type="button"
        role="tab"
        aria-selected={isActive}
        aria-controls={contentId}
        tabIndex={isActive ? 0 : -1}
        disabled={disabled}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        className={cn(
          'relative inline-flex items-center justify-center gap-[var(--spacing-2)]',
          'whitespace-nowrap',
          'text-[var(--font-size-sm)] font-medium',
          'transition-[var(--transition-fast)]',
          'outline-none',
          'focus-visible:ring-2 focus-visible:ring-[var(--color-primary-500)] focus-visible:ring-offset-2',
          'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
          orientation === 'horizontal'
            ? [
                'px-[var(--spacing-4)] py-[var(--spacing-3)]',
                '-mb-px',
                'border-b-2 border-transparent',
                isActive
                  ? 'border-b-[var(--color-primary-500)] text-[var(--color-primary-500)]'
                  : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:border-b-[var(--color-border-secondary)]',
              ]
            : [
                'px-[var(--spacing-4)] py-[var(--spacing-2-5)]',
                '-mr-px',
                'border-r-2 border-transparent',
                'text-left w-full',
                isActive
                  ? 'border-r-[var(--color-primary-500)] text-[var(--color-primary-500)] bg-[var(--color-primary-50)]'
                  : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-secondary)]',
              ],
          className
        )}
        {...props}
      >
        {icon && <span className="shrink-0">{icon}</span>}
        {children}
      </button>
    )
  }
)

TabsTrigger.displayName = 'TabsTrigger'

/* ============================================
   TABS CONTENT
   ============================================ */

export interface TabsContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  /** A unique value that associates the content with a trigger */
  value: string
  /** Whether to keep the content mounted when inactive (for preserving state) */
  forceMount?: boolean
}

export const TabsContent = forwardRef<HTMLDivElement, TabsContentProps>(
  ({ children, value, forceMount = false, className, ...props }, ref) => {
    const { activeValue, baseId, orientation } = useTabsContext()
    const isActive = activeValue === value
    const triggerId = `${baseId}-trigger-${value}`
    const contentId = `${baseId}-content-${value}`

    if (!isActive && !forceMount) {
      return null
    }

    return (
      <div
        ref={ref}
        id={contentId}
        role="tabpanel"
        aria-labelledby={triggerId}
        tabIndex={0}
        hidden={!isActive}
        className={cn(
          'outline-none',
          'focus-visible:ring-2 focus-visible:ring-[var(--color-primary-500)] focus-visible:ring-offset-2',
          orientation === 'horizontal'
            ? 'mt-[var(--spacing-4)]'
            : 'flex-1',
          !isActive && forceMount && 'hidden',
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

TabsContent.displayName = 'TabsContent'

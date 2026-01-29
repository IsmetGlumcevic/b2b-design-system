'use client'

import {
  createContext,
  forwardRef,
  ReactNode,
  useContext,
  useId,
  useState,
  useMemo,
  HTMLAttributes,
  ButtonHTMLAttributes,
  useCallback,
  useRef,
  useEffect,
} from 'react'
import { cn } from '@/src/lib/utils'

/* ============================================
   ACCORDION CONTEXT
   ============================================ */

interface AccordionContextType {
  value: string[]
  toggleItem: (itemValue: string) => void
  type: 'single' | 'multiple'
  collapsible: boolean
}

const AccordionContext = createContext<AccordionContextType | null>(null)

function useAccordionContext() {
  const context = useContext(AccordionContext)
  if (!context) {
    throw new Error('Accordion components must be used within an Accordion')
  }
  return context
}

/* ============================================
   ACCORDION ITEM CONTEXT
   ============================================ */

interface AccordionItemContextType {
  itemValue: string
  triggerId: string
  contentId: string
  isOpen: boolean
}

const AccordionItemContext = createContext<AccordionItemContextType | null>(null)

function useAccordionItemContext() {
  const context = useContext(AccordionItemContext)
  if (!context) {
    throw new Error('AccordionTrigger/Content must be used within an AccordionItem')
  }
  return context
}

/* ============================================
   ACCORDION ROOT
   ============================================ */

export interface AccordionSingleProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  /** The type of accordion - single allows only one item open at a time */
  type: 'single'
  /** The controlled value of the item to expand */
  value?: string
  /** The default value of the item to expand (uncontrolled) */
  defaultValue?: string
  /** Event handler called when the expanded state changes */
  onValueChange?: (value: string) => void
  /** When type is "single", allows closing content when clicking trigger of open item */
  collapsible?: boolean
}

export interface AccordionMultipleProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  /** The type of accordion - multiple allows multiple items open at once */
  type: 'multiple'
  /** The controlled value of the items to expand */
  value?: string[]
  /** The default value of the items to expand (uncontrolled) */
  defaultValue?: string[]
  /** Event handler called when the expanded state changes */
  onValueChange?: (value: string[]) => void
  /** Not used in multiple mode but required for type consistency */
  collapsible?: never
}

export type AccordionProps = AccordionSingleProps | AccordionMultipleProps

export function Accordion({
  children,
  type,
  value,
  defaultValue,
  onValueChange,
  collapsible = false,
  className,
  ...props
}: AccordionProps) {
  const [internalValue, setInternalValue] = useState<string[]>(() => {
    if (type === 'single') {
      return defaultValue ? [defaultValue as string] : []
    }
    return (defaultValue as string[]) || []
  })

  const isControlled = value !== undefined
  const currentValue = useMemo(() => {
    if (isControlled) {
      if (type === 'single') {
        return value ? [value as string] : []
      }
      return (value as string[])
    }
    return internalValue
  }, [isControlled, type, value, internalValue])

  const toggleItem = useCallback(
    (itemValue: string) => {
      if (type === 'single') {
        const isOpen = currentValue.includes(itemValue)
        let newValue: string[]

        if (isOpen && collapsible) {
          newValue = []
        } else if (isOpen && !collapsible) {
          return // Can't close when not collapsible
        } else {
          newValue = [itemValue]
        }

        if (!isControlled) {
          setInternalValue(newValue)
        }
        ;(onValueChange as ((value: string) => void) | undefined)?.(newValue[0] || '')
      } else {
        const isOpen = currentValue.includes(itemValue)
        const newValue = isOpen
          ? currentValue.filter((v) => v !== itemValue)
          : [...currentValue, itemValue]

        if (!isControlled) {
          setInternalValue(newValue)
        }
        ;(onValueChange as ((value: string[]) => void) | undefined)?.(newValue)
      }
    },
    [type, currentValue, collapsible, isControlled, onValueChange]
  )

  return (
    <AccordionContext.Provider value={{ value: currentValue, toggleItem, type, collapsible }}>
      <div
        className={cn('divide-y divide-[var(--color-border-primary)]', className)}
        {...props}
      >
        {children}
      </div>
    </AccordionContext.Provider>
  )
}

Accordion.displayName = 'Accordion'

/* ============================================
   ACCORDION ITEM
   ============================================ */

export interface AccordionItemProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  /** A unique value for the accordion item */
  value: string
  /** Whether the item is disabled */
  disabled?: boolean
}

export const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ children, value, disabled = false, className, ...props }, ref) => {
    const { value: openValues } = useAccordionContext()
    const baseId = useId()
    const triggerId = `${baseId}-trigger`
    const contentId = `${baseId}-content`
    const isOpen = openValues.includes(value)

    return (
      <AccordionItemContext.Provider value={{ itemValue: value, triggerId, contentId, isOpen }}>
        <div
          ref={ref}
          data-state={isOpen ? 'open' : 'closed'}
          data-disabled={disabled || undefined}
          className={cn(
            'border-[var(--color-border-primary)]',
            disabled && 'opacity-50',
            className
          )}
          {...props}
        >
          {children}
        </div>
      </AccordionItemContext.Provider>
    )
  }
)

AccordionItem.displayName = 'AccordionItem'

/* ============================================
   ACCORDION TRIGGER
   ============================================ */

export interface AccordionTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  /** Icon displayed on the left side of the trigger */
  icon?: ReactNode
}

export const AccordionTrigger = forwardRef<HTMLButtonElement, AccordionTriggerProps>(
  ({ children, icon, disabled, className, ...props }, ref) => {
    const { toggleItem } = useAccordionContext()
    const { itemValue, triggerId, contentId, isOpen } = useAccordionItemContext()

    const handleClick = () => {
      if (!disabled) {
        toggleItem(itemValue)
      }
    }

    return (
      <h3 className="flex">
        <button
          ref={ref}
          id={triggerId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={contentId}
          disabled={disabled}
          onClick={handleClick}
          className={cn(
            'flex flex-1 items-center justify-between gap-[var(--spacing-3)]',
            'py-[var(--spacing-4)] px-[var(--spacing-1)]',
            'text-left text-[var(--font-size-base)] font-medium',
            'text-[var(--color-text-primary)]',
            'transition-[var(--transition-fast)]',
            'outline-none',
            'hover:text-[var(--color-primary-600)]',
            'focus-visible:ring-2 focus-visible:ring-[var(--color-primary-500)] focus-visible:ring-offset-2',
            'disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:text-[var(--color-text-primary)]',
            '[&[data-state=open]>svg]:rotate-180',
            className
          )}
          data-state={isOpen ? 'open' : 'closed'}
          {...props}
        >
          <span className="flex items-center gap-[var(--spacing-3)]">
            {icon && <span className="shrink-0 text-[var(--color-text-secondary)]">{icon}</span>}
            {children}
          </span>
          <svg
            className="h-4 w-4 shrink-0 text-[var(--color-text-tertiary)] transition-transform duration-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </h3>
    )
  }
)

AccordionTrigger.displayName = 'AccordionTrigger'

/* ============================================
   ACCORDION CONTENT
   ============================================ */

export interface AccordionContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  /** Whether to keep the content mounted when closed (for preserving state) */
  forceMount?: boolean
}

export const AccordionContent = forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ children, forceMount = false, className, ...props }, ref) => {
    const { triggerId, contentId, isOpen } = useAccordionItemContext()
    const contentRef = useRef<HTMLDivElement>(null)
    const [height, setHeight] = useState<number | undefined>(undefined)

    useEffect(() => {
      if (contentRef.current) {
        setHeight(contentRef.current.scrollHeight)
      }
    }, [children])

    if (!isOpen && !forceMount) {
      return null
    }

    return (
      <div
        ref={ref}
        id={contentId}
        role="region"
        aria-labelledby={triggerId}
        data-state={isOpen ? 'open' : 'closed'}
        hidden={!isOpen && forceMount}
        className={cn(
          'overflow-hidden',
          'transition-all duration-200 ease-out',
          className
        )}
        style={{
          height: isOpen ? height : 0,
          opacity: isOpen ? 1 : 0,
        }}
        {...props}
      >
        <div
          ref={contentRef}
          className="pb-[var(--spacing-4)] px-[var(--spacing-1)] text-[var(--color-text-secondary)]"
        >
          {children}
        </div>
      </div>
    )
  }
)

AccordionContent.displayName = 'AccordionContent'

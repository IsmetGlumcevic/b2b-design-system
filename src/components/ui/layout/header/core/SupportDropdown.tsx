'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { cn } from '@/src/lib/utils'
import Headphones01 from '@/src/components/ui/icons/Line/Media & devices/Headphones01'
import ShieldTick from '@/src/components/ui/icons/Line/Security/ShieldTick'
import MessageChatCircle from '@/src/components/ui/icons/Line/Communication/MessageChatCircle'
import ShoppingBag01 from '@/src/components/ui/icons/Line/Finance & eCommerce/ShoppingBag01'
import Lock01 from '@/src/components/ui/icons/Line/Security/Lock01'
import File01 from '@/src/components/ui/icons/Line/Files/File01'

export interface SupportMenuItem {
  id: string
  label: string
  href: string
  icon?: React.ReactNode
}

export interface SupportDropdownProps {
  /** Color scheme */
  colorScheme?: 'light' | 'dark'
  /** Custom menu items (overrides defaults) */
  menuItems?: SupportMenuItem[]
  /** Custom label */
  label?: string
}

const defaultMenuItems: SupportMenuItem[] = [
  {
    id: 'support-center',
    label: 'Centar za podršku',
    href: '/podrska',
    icon: <Headphones01 className="w-5 h-5" />,
  },
  {
    id: 'security-center',
    label: 'Sigurnosni centar',
    href: '/sigurnost',
    icon: <ShieldTick className="w-5 h-5" />,
  },
  {
    id: 'chat',
    label: 'Razgovarajte s nama',
    href: '/chat',
    icon: <MessageChatCircle className="w-5 h-5" />,
  },
  {
    id: 'buyer-protection',
    label: 'Zaštita kupaca',
    href: '/zastita-kupaca',
    icon: <ShoppingBag01 className="w-5 h-5" />,
  },
  {
    id: 'privacy',
    label: 'Politika privatnosti',
    href: '/privatnost',
    icon: <Lock01 className="w-5 h-5" />,
  },
  {
    id: 'terms',
    label: 'Uslovi korištenja',
    href: '/uslovi',
    icon: <File01 className="w-5 h-5" />,
  },
]

/**
 * SupportDropdown - Support menu dropdown with TEMU-style design
 *
 * Client Component - manages dropdown state
 */
export function SupportDropdown({
  colorScheme = 'light',
  menuItems = defaultMenuItems,
  label = 'Podrška',
}: SupportDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Close on escape
  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  // Handle mouse enter with delay
  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setIsOpen(true)
  }

  // Handle mouse leave with delay
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false)
    }, 150)
  }

  // Styles
  const triggerStyles = {
    light: cn(
      'hover:bg-[var(--color-bg-secondary)]',
      'text-[var(--color-text-primary)]',
      isOpen && 'bg-[var(--color-bg-secondary)]'
    ),
    dark: cn(
      'hover:bg-[var(--color-secondary-800)]',
      'text-[var(--color-text-inverse)]',
      isOpen && 'bg-[var(--color-secondary-800)]'
    ),
  }

  const dropdownStyles = {
    light: 'bg-[var(--color-bg-primary)] border-[var(--color-border-primary)]',
    dark: 'bg-[var(--color-secondary-800)] border-[var(--color-secondary-700)]',
  }

  const itemStyles = {
    light: 'text-[var(--color-text-primary)] hover:bg-[var(--color-bg-secondary)]',
    dark: 'text-[var(--color-text-inverse)] hover:bg-[var(--color-secondary-700)]',
  }

  return (
    <div
      ref={dropdownRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'flex items-center gap-2 px-3 py-2 rounded-full',
          'text-sm font-medium transition-colors',
          triggerStyles[colorScheme]
        )}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Headphones01 className="w-5 h-5" />
        <span>{label}</span>
      </button>

      {/* Dropdown Panel */}
      {isOpen && (
        <div
          className={cn(
            'absolute right-0 top-full mt-2 w-64',
            'rounded-xl shadow-xl border',
            'py-2 z-50',
            dropdownStyles[colorScheme]
          )}
          role="menu"
        >
          {/* Arrow/Triangle pointer */}
          <div
            className={cn(
              'absolute -top-2 right-8 w-4 h-4 rotate-45',
              colorScheme === 'light'
                ? 'bg-[var(--color-bg-primary)] border-l border-t border-[var(--color-border-primary)]'
                : 'bg-[var(--color-secondary-800)] border-l border-t border-[var(--color-secondary-700)]'
            )}
          />

          {/* Menu Items */}
          <div className="relative">
            {menuItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={cn(
                  'flex items-center gap-3 px-4 py-3',
                  'text-sm transition-colors',
                  itemStyles[colorScheme]
                )}
                role="menuitem"
                onClick={() => setIsOpen(false)}
              >
                {item.icon && (
                  <span className="flex-shrink-0 opacity-70">{item.icon}</span>
                )}
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default SupportDropdown

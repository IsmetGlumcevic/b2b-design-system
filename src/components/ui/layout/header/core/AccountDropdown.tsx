'use client'

import { forwardRef } from 'react'
import Link from 'next/link'
import { cn } from '@/src/lib/utils'
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  DropdownDivider,
  DropdownLabel,
} from '@/src/components/ui/Dropdown'
import { Avatar } from '@/src/components/ui/Avatar/Avatar'
import User01 from '@/src/components/ui/icons/Line/Users/User01'
import Settings01 from '@/src/components/ui/icons/Line/General/Settings01'
import LogOut01 from '@/src/components/ui/icons/Line/General/LogOut01'
import type { AccountDropdownProps, AccountMenuItem } from '../types'

// Internal icon for file/document
function FileIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
    </svg>
  )
}

const defaultMenuItems: AccountMenuItem[] = [
  { label: 'Moj profil', href: '/account/profile', icon: <User01 className="h-4 w-4" /> },
  { label: 'Moje narudžbe', href: '/account/orders', icon: <FileIcon className="h-4 w-4" /> },
  { label: 'Postavke', href: '/account/settings', icon: <Settings01 className="h-4 w-4" /> },
]

/**
 * AccountDropdown - User account dropdown menu (Client Component)
 *
 * Shows user info and account actions.
 *
 * @example
 * <AccountDropdown
 *   user={{ id: '1', name: 'John Doe', email: 'john@example.com' }}
 *   onLogout={() => signOut()}
 * />
 */
export const AccountDropdown = forwardRef<HTMLButtonElement, AccountDropdownProps>(
  ({ user, onLogout, menuItems = defaultMenuItems }, ref) => {
    const initials =
      user.initials ||
      user.name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2)

    return (
      <Dropdown>
        <DropdownTrigger
          ref={ref}
          className={cn(
            'p-0 border-0 bg-transparent',
            'hover:bg-transparent',
            'focus-visible:ring-offset-0'
          )}
        >
          <Avatar
            src={user.avatar}
            alt={user.name}
            initials={initials}
            size="sm"
            className="cursor-pointer"
          />
        </DropdownTrigger>

        <DropdownMenu align="end" width={220}>
          {/* User info */}
          <div className="px-[var(--spacing-3)] py-[var(--spacing-2)]">
            <p className="text-[var(--font-size-sm)] font-medium text-[var(--color-text-primary)]">
              {user.name}
            </p>
            <p className="text-[var(--font-size-xs)] text-[var(--color-text-secondary)] truncate">
              {user.email}
            </p>
            {user.customerId && (
              <p className="text-[var(--font-size-xs)] text-[var(--color-text-tertiary)] mt-[var(--spacing-0-5)]">
                ID: {user.customerId}
              </p>
            )}
          </div>

          <DropdownDivider />

          {/* Menu items */}
          {menuItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <DropdownItem icon={item.icon}>{item.label}</DropdownItem>
            </Link>
          ))}

          <DropdownDivider />

          {/* Logout */}
          <DropdownItem icon={<LogOut01 className="h-4 w-4" />} destructive onClick={onLogout}>
            Odjava
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    )
  }
)

AccountDropdown.displayName = 'AccountDropdown'

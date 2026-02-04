'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavigationItem {
  name: string
  href: string
  disabled?: boolean
}

interface MobileSidebarProps {
  navigation: Record<string, NavigationItem[]>
}

export function MobileSidebar({ navigation }: MobileSidebarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      {/* Mobile menu button - fixed at top */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed left-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-bg-secondary)] shadow-md lg:hidden"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        {isOpen ? (
          // Close icon (X)
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[var(--color-text-primary)]"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          // Menu icon (hamburger)
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[var(--color-text-primary)]"
          >
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        )}
      </button>

      {/* Backdrop overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 shrink-0 transform border-r border-[var(--color-border-primary)] bg-[var(--color-bg-secondary)] p-6 pt-16 transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 lg:pt-6 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <Link
          href="/design-system"
          className="mb-8 block text-xl font-bold text-[var(--color-text-primary)]"
          onClick={() => setIsOpen(false)}
        >
          UI Showcase
        </Link>

        <nav className="h-[calc(100vh-8rem)] space-y-6 overflow-y-auto lg:h-auto">
          {Object.entries(navigation).map(([category, items]) => (
            <div key={category}>
              <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-[var(--color-text-tertiary)]">
                {category}
              </h3>
              <ul className="space-y-1">
                {items.map((item) => (
                  <li key={item.href}>
                    {item.disabled ? (
                      <span className="block cursor-not-allowed rounded-md px-3 py-2 text-sm text-[var(--color-text-tertiary)] opacity-50">
                        {item.name}
                        <span className="ml-1 text-[10px]">(uskoro)</span>
                      </span>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`block rounded-md px-3 py-2 text-sm transition-colors hover:bg-[var(--color-bg-tertiary)] hover:text-[var(--color-text-primary)] ${
                          pathname === item.href
                            ? 'bg-[var(--color-bg-tertiary)] text-[var(--color-text-primary)]'
                            : 'text-[var(--color-text-secondary)]'
                        }`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </aside>
    </>
  )
}

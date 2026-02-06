'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { cn } from '@/src/lib/utils'
import ChevronDown from '@/src/components/ui/icons/Line/Arrows/ChevronDown'
import XClose from '@/src/components/ui/icons/Line/General/XClose'
import { IconButton } from '@/src/components/ui/buttons/IconButton'
import type { MobileMenuProps, Category, Brand, Service } from '../types'

/**
 * MobileMenu - Mobile navigation drawer (Client Component)
 *
 * Full-screen slide-out navigation for mobile devices.
 *
 * @example
 * <MobileMenu
 *   isOpen={isMenuOpen}
 *   onClose={() => setMenuOpen(false)}
 *   categories={categories}
 * />
 */
export function MobileMenu({
  isOpen,
  onClose,
  categories,
  brands,
  services,
  user,
  contact,
}: MobileMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null)
  const [expandedCategories, setExpandedCategories] = useState<string[]>([])

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  // Focus trap
  useEffect(() => {
    if (isOpen && menuRef.current) {
      const firstFocusable = menuRef.current.querySelector<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
      firstFocusable?.focus()
    }
  }, [isOpen])

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    )
  }

  const renderCategory = (category: Category, level = 0) => {
    const hasChildren = category.children && category.children.length > 0
    const isExpanded = expandedCategories.includes(category.id)
    const paddingLeft = `calc(var(--spacing-4) + ${level * 16}px)`

    return (
      <div key={category.id}>
        {hasChildren ? (
          <button
            type="button"
            onClick={() => toggleCategory(category.id)}
            aria-expanded={isExpanded}
            className={cn(
              'flex w-full items-center justify-between',
              'py-[var(--spacing-3)]',
              'text-[var(--font-size-base)] font-medium',
              'text-[var(--color-text-primary)]',
              'hover:bg-[var(--color-bg-secondary)]',
              'transition-[var(--transition-fast)]'
            )}
            style={{ paddingLeft, paddingRight: 'var(--spacing-4)' }}
          >
            <span>{category.name}</span>
            <ChevronDown
              className={cn(
                'h-5 w-5 transition-transform',
                isExpanded && 'rotate-180'
              )}
              aria-hidden="true"
            />
          </button>
        ) : (
          <Link
            href={`/category/${category.slug}`}
            onClick={onClose}
            className={cn(
              'flex w-full items-center',
              'py-[var(--spacing-3)]',
              'text-[var(--font-size-base)]',
              level === 0 ? 'font-medium' : 'font-normal',
              'text-[var(--color-text-primary)]',
              'hover:bg-[var(--color-bg-secondary)]',
              'transition-[var(--transition-fast)]'
            )}
            style={{ paddingLeft, paddingRight: 'var(--spacing-4)' }}
          >
            {category.name}
          </Link>
        )}

        {/* Children */}
        {hasChildren && isExpanded && (
          <div className="bg-[var(--color-bg-secondary)]">
            {category.children!.map((child) => renderCategory(child, level + 1))}
          </div>
        )}
      </div>
    )
  }

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          'fixed inset-0',
          'bg-[var(--color-bg-overlay)]',
          'z-[var(--z-modal-backdrop)]',
          'animate-in fade-in-0'
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Menu panel */}
      <div
        ref={menuRef}
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Navigacija"
        className={cn(
          'fixed inset-y-0 left-0',
          'w-[var(--mobile-menu-width,320px)] max-w-[85vw]',
          'bg-[var(--color-bg-elevated)]',
          'shadow-[var(--shadow-xl)]',
          'z-[var(--z-modal)]',
          'flex flex-col',
          'animate-in slide-in-from-left'
        )}
      >
        {/* Header */}
        <div
          className={cn(
            'flex items-center justify-between',
            'h-[var(--header-height)]',
            'px-[var(--spacing-4)]',
            'border-b border-[var(--color-border-primary)]'
          )}
        >
          <span className="text-[var(--font-size-lg)] font-semibold text-[var(--color-text-primary)]">
            Izbornik
          </span>
          <IconButton
            icon={<XClose />}
            aria-label="Zatvori izbornik"
            variant="ghost"
            size="md"
            onClick={onClose}
          />
        </div>

        {/* Navigation content */}
        <nav className="flex-1 overflow-y-auto py-[var(--spacing-2)]">
          {/* Categories */}
          {categories.length > 0 && (
            <div className="border-b border-[var(--color-border-primary)] pb-[var(--spacing-2)]">
              <p
                className={cn(
                  'px-[var(--spacing-4)] py-[var(--spacing-2)]',
                  'text-[var(--font-size-xs)] font-semibold uppercase tracking-wide',
                  'text-[var(--color-text-tertiary)]'
                )}
              >
                Proizvodi
              </p>
              {categories.map((category) => renderCategory(category))}
            </div>
          )}

          {/* Brands */}
          {brands && brands.length > 0 && (
            <div className="border-b border-[var(--color-border-primary)] py-[var(--spacing-2)]">
              <p
                className={cn(
                  'px-[var(--spacing-4)] py-[var(--spacing-2)]',
                  'text-[var(--font-size-xs)] font-semibold uppercase tracking-wide',
                  'text-[var(--color-text-tertiary)]'
                )}
              >
                Brendovi
              </p>
              <div className="grid grid-cols-2 gap-[var(--spacing-1)] px-[var(--spacing-4)]">
                {brands.slice(0, 12).map((brand) => (
                  <Link
                    key={brand.id}
                    href={`/brend/${brand.slug}`}
                    onClick={onClose}
                    className={cn(
                      'py-[var(--spacing-2)] px-[var(--spacing-2)]',
                      'text-[var(--font-size-sm)]',
                      'text-[var(--color-text-primary)]',
                      'hover:bg-[var(--color-bg-secondary)]',
                      'rounded-[var(--radius-md)]',
                      'transition-colors duration-150'
                    )}
                  >
                    {brand.name}
                  </Link>
                ))}
              </div>
              {brands.length > 12 && (
                <Link
                  href="/brendovi"
                  onClick={onClose}
                  className={cn(
                    'flex w-full items-center',
                    'px-[var(--spacing-4)] py-[var(--spacing-3)]',
                    'text-[var(--font-size-sm)] font-medium',
                    'text-[var(--color-primary-500)]',
                    'hover:bg-[var(--color-bg-secondary)]'
                  )}
                >
                  Svi brendovi ({brands.length})
                </Link>
              )}
            </div>
          )}

          {/* Services */}
          {services && services.length > 0 && (
            <div className="py-[var(--spacing-2)]">
              <p
                className={cn(
                  'px-[var(--spacing-4)] py-[var(--spacing-2)]',
                  'text-[var(--font-size-xs)] font-semibold uppercase tracking-wide',
                  'text-[var(--color-text-tertiary)]'
                )}
              >
                Usluge
              </p>
              {services.map((service) => (
                <Link
                  key={service.id}
                  href={service.href}
                  onClick={onClose}
                  className={cn(
                    'flex w-full items-center gap-[var(--spacing-3)]',
                    'px-[var(--spacing-4)] py-[var(--spacing-3)]',
                    'text-[var(--font-size-base)]',
                    'text-[var(--color-text-primary)]',
                    'hover:bg-[var(--color-bg-secondary)]',
                    'transition-colors duration-150'
                  )}
                >
                  {service.icon && (
                    <span className="text-[var(--color-primary-500)]">{service.icon}</span>
                  )}
                  <div>
                    <span className="font-medium">{service.title}</span>
                    <p className="text-[var(--font-size-sm)] text-[var(--color-text-secondary)]">
                      {service.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* Static links */}
          <div className="border-t border-[var(--color-border-primary)] pt-[var(--spacing-2)]">
            <Link
              href="/akcije"
              onClick={onClose}
              className={cn(
                'flex w-full items-center',
                'px-[var(--spacing-4)] py-[var(--spacing-3)]',
                'text-[var(--font-size-base)] font-medium',
                'text-[var(--color-text-primary)]',
                'hover:bg-[var(--color-bg-secondary)]'
              )}
            >
              Akcije
            </Link>
            <Link
              href="/kontakt"
              onClick={onClose}
              className={cn(
                'flex w-full items-center',
                'px-[var(--spacing-4)] py-[var(--spacing-3)]',
                'text-[var(--font-size-base)] font-medium',
                'text-[var(--color-text-primary)]',
                'hover:bg-[var(--color-bg-secondary)]'
              )}
            >
              Kontakt
            </Link>
          </div>
        </nav>

        {/* Footer - Contact info */}
        {contact && (
          <div
            className={cn(
              'px-[var(--spacing-4)] py-[var(--spacing-4)]',
              'border-t border-[var(--color-border-primary)]',
              'bg-[var(--color-bg-secondary)]'
            )}
          >
            <div className="space-y-[var(--spacing-2)] text-[var(--font-size-sm)] text-[var(--color-text-secondary)]">
              {contact.phone && (
                <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="block hover:text-[var(--color-text-primary)]">
                  {contact.phone}
                </a>
              )}
              {contact.email && (
                <a href={`mailto:${contact.email}`} className="block hover:text-[var(--color-text-primary)]">
                  {contact.email}
                </a>
              )}
              {contact.workingHours && (
                <p>{contact.workingHours}</p>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  )
}

MobileMenu.displayName = 'MobileMenu'

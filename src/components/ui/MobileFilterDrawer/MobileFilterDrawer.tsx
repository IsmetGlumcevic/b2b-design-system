'use client'

import { useEffect, type ReactNode } from 'react'
import { cn } from '@/src/lib/utils'

export interface MobileFilterDrawerProps {
  /** Je li drawer otvoren */
  isOpen: boolean
  /** Callback za zatvaranje */
  onClose: () => void
  /** Sadržaj drawer-a */
  children: ReactNode
  /** Naslov */
  title?: string
  /** Positioning */
  position?: 'fixed' | 'absolute'
}

export function MobileFilterDrawer({
  isOpen,
  onClose,
  children,
  title = 'Filteri',
  position = 'fixed',
}: MobileFilterDrawerProps) {
  // Zaključaj scroll kad je otvoren
  useEffect(() => {
    if (isOpen && position === 'fixed') {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen, position])

  if (!isOpen) return null

  return (
    <div
      className={cn(
        position === 'fixed' ? 'fixed inset-0 lg:hidden' : 'absolute inset-0',
        'z-[var(--z-modal)]'
      )}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-[var(--color-bg-overlay)]"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className={cn(
          'absolute inset-y-0 right-0 w-full max-w-sm',
          'flex flex-col',
          'bg-[var(--color-bg-primary)]',
          'shadow-[var(--shadow-2xl)]',
          'animate-in slide-in-from-right duration-300'
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[var(--color-border-primary)] px-4 py-4">
          <h2 className="text-lg font-semibold text-[var(--color-text-primary)]">{title}</h2>
          <button
            onClick={onClose}
            className={cn(
              'flex h-10 w-10 items-center justify-center rounded-full',
              'text-[var(--color-text-secondary)]',
              'hover:bg-[var(--color-bg-tertiary)] hover:text-[var(--color-text-primary)]',
              'transition-[var(--transition-fast)]'
            )}
            aria-label="Zatvori filtere"
          >
            <CloseIcon className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          {children}
        </div>

        {/* Footer */}
        <div className="border-t border-[var(--color-border-primary)] p-4">
          <button
            onClick={onClose}
            className={cn(
              'w-full',
              'h-12 px-6',
              'rounded-[var(--radius-button)]',
              'bg-[var(--color-primary-500)]',
              'text-base font-medium text-white',
              'hover:bg-[var(--color-primary-hover)]',
              'transition-[var(--transition-fast)]'
            )}
          >
            Prikaži rezultate
          </button>
        </div>
      </div>
    </div>
  )
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

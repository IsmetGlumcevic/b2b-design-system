'use client'

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  type ReactNode,
} from 'react'
import { createPortal } from 'react-dom'
import { cn } from '@/src/lib/utils'

/* ============================================
   Types
   ============================================ */

export type ToastVariant = 'success' | 'error' | 'warning' | 'info' | 'neutral'
export type ToastPosition = 'top-right' | 'top-left' | 'top-center' | 'bottom-right' | 'bottom-left' | 'bottom-center'

export interface Toast {
  id: string
  variant: ToastVariant
  title?: string
  message: string
  duration?: number
  dismissible?: boolean
}

export interface ToastOptions {
  variant?: ToastVariant
  title?: string
  duration?: number
  dismissible?: boolean
}

interface ToastContextValue {
  toasts: Toast[]
  addToast: (message: string, options?: ToastOptions) => string
  removeToast: (id: string) => void
  success: (message: string, options?: Omit<ToastOptions, 'variant'>) => string
  error: (message: string, options?: Omit<ToastOptions, 'variant'>) => string
  warning: (message: string, options?: Omit<ToastOptions, 'variant'>) => string
  info: (message: string, options?: Omit<ToastOptions, 'variant'>) => string
}

/* ============================================
   Toast Context
   ============================================ */

const ToastContext = createContext<ToastContextValue | null>(null)

export function useToast() {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider')
  }
  return context
}

/* ============================================
   Toast Provider
   ============================================ */

export interface ToastProviderProps {
  /** Position of the toast container */
  position?: ToastPosition
  /** Default duration for toasts in ms */
  defaultDuration?: number
  /** Maximum number of toasts visible at once */
  maxToasts?: number
  /** Children components */
  children: ReactNode
}

export function ToastProvider({
  position = 'top-right',
  defaultDuration = 5000,
  maxToasts = 5,
  children,
}: ToastProviderProps) {
  const [toasts, setToasts] = useState<Toast[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const generateId = useCallback(() => {
    return `toast-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
  }, [])

  const addToast = useCallback((message: string, options: ToastOptions = {}) => {
    const id = generateId()
    const toast: Toast = {
      id,
      variant: options.variant || 'neutral',
      title: options.title,
      message,
      duration: options.duration ?? defaultDuration,
      dismissible: options.dismissible ?? true,
    }

    setToasts((prev) => {
      const newToasts = [toast, ...prev]
      return newToasts.slice(0, maxToasts)
    })

    return id
  }, [generateId, defaultDuration, maxToasts])

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }, [])

  const success = useCallback((message: string, options?: Omit<ToastOptions, 'variant'>) => {
    return addToast(message, { ...options, variant: 'success' })
  }, [addToast])

  const error = useCallback((message: string, options?: Omit<ToastOptions, 'variant'>) => {
    return addToast(message, { ...options, variant: 'error' })
  }, [addToast])

  const warning = useCallback((message: string, options?: Omit<ToastOptions, 'variant'>) => {
    return addToast(message, { ...options, variant: 'warning' })
  }, [addToast])

  const info = useCallback((message: string, options?: Omit<ToastOptions, 'variant'>) => {
    return addToast(message, { ...options, variant: 'info' })
  }, [addToast])

  const value: ToastContextValue = {
    toasts,
    addToast,
    removeToast,
    success,
    error,
    warning,
    info,
  }

  return (
    <ToastContext.Provider value={value}>
      {children}
      {mounted && createPortal(
        <ToastContainer position={position} toasts={toasts} onDismiss={removeToast} />,
        document.body
      )}
    </ToastContext.Provider>
  )
}

/* ============================================
   Toast Container
   ============================================ */

const positionStyles: Record<ToastPosition, string> = {
  'top-right': 'top-[var(--toast-offset)] right-[var(--toast-offset)]',
  'top-left': 'top-[var(--toast-offset)] left-[var(--toast-offset)]',
  'top-center': 'top-[var(--toast-offset)] left-1/2 -translate-x-1/2',
  'bottom-right': 'bottom-[var(--toast-offset)] right-[var(--toast-offset)]',
  'bottom-left': 'bottom-[var(--toast-offset)] left-[var(--toast-offset)]',
  'bottom-center': 'bottom-[var(--toast-offset)] left-1/2 -translate-x-1/2',
}

interface ToastContainerProps {
  position: ToastPosition
  toasts: Toast[]
  onDismiss: (id: string) => void
}

function ToastContainer({ position, toasts, onDismiss }: ToastContainerProps) {
  const isBottom = position.startsWith('bottom')

  return (
    <div
      className={cn(
        'fixed z-[var(--z-toast, 1080)]',
        'flex flex-col gap-[var(--spacing-2)]',
        'pointer-events-none',
        'max-h-screen overflow-hidden',
        'p-[var(--toast-offset)]',
        positionStyles[position]
      )}
      style={{
        maxWidth: 'calc(100vw - var(--toast-offset) * 2)',
      }}
    >
      {(isBottom ? [...toasts].reverse() : toasts).map((toast) => (
        <ToastItem
          key={toast.id}
          toast={toast}
          onDismiss={() => onDismiss(toast.id)}
        />
      ))}
    </div>
  )
}

/* ============================================
   Toast Item
   ============================================ */

const variantStyles: Record<ToastVariant, string> = {
  success: `
    bg-[var(--color-bg-elevated)]
    border-l-4
    border-l-[var(--color-success-500)]
  `,
  error: `
    bg-[var(--color-bg-elevated)]
    border-l-4
    border-l-[var(--color-error-500)]
  `,
  warning: `
    bg-[var(--color-bg-elevated)]
    border-l-4
    border-l-[var(--color-warning-500)]
  `,
  info: `
    bg-[var(--color-bg-elevated)]
    border-l-4
    border-l-[var(--color-info-500)]
  `,
  neutral: `
    bg-[var(--color-bg-elevated)]
    border-l-4
    border-l-[var(--color-neutral-400)]
  `,
}

const iconColors: Record<ToastVariant, string> = {
  success: 'text-[var(--color-success-500)]',
  error: 'text-[var(--color-error-500)]',
  warning: 'text-[var(--color-warning-500)]',
  info: 'text-[var(--color-info-500)]',
  neutral: 'text-[var(--color-neutral-500)]',
}

interface ToastItemProps {
  toast: Toast
  onDismiss: () => void
}

function ToastItem({ toast, onDismiss }: ToastItemProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    // Trigger enter animation
    requestAnimationFrame(() => {
      setIsVisible(true)
    })
  }, [])

  useEffect(() => {
    if (toast.duration && toast.duration > 0) {
      const timer = setTimeout(() => {
        handleDismiss()
      }, toast.duration)

      return () => clearTimeout(timer)
    }
  }, [toast.duration])

  const handleDismiss = useCallback(() => {
    setIsExiting(true)
    setTimeout(() => {
      onDismiss()
    }, 200) // Match animation duration
  }, [onDismiss])

  return (
    <div
      className={cn(
        'pointer-events-auto',
        'w-full',
        'min-w-[var(--toast-min-width)]',
        'max-w-[var(--toast-max-width)]',
        'flex items-start gap-[var(--spacing-3)]',
        'p-[var(--toast-padding)]',
        'rounded-[var(--toast-radius)]',
        'shadow-[var(--toast-shadow)]',
        'border border-[var(--color-border-primary)]',
        // Animation
        'transition-all duration-200 ease-out',
        isVisible && !isExiting
          ? 'translate-x-0 opacity-100'
          : 'translate-x-4 opacity-0',
        // Variant styles
        variantStyles[toast.variant]
      )}
      role="alert"
    >
      <span
        className={cn(
          'shrink-0 mt-0.5',
          iconColors[toast.variant]
        )}
        aria-hidden="true"
      >
        <ToastIcon variant={toast.variant} />
      </span>

      <div className="flex-1 min-w-0">
        {toast.title && (
          <p className="font-semibold text-[var(--color-text-primary)] mb-[var(--spacing-0-5)]">
            {toast.title}
          </p>
        )}
        <p className="text-[var(--font-size-sm)] text-[var(--color-text-secondary)]">
          {toast.message}
        </p>
      </div>

      {toast.dismissible && (
        <button
          type="button"
          onClick={handleDismiss}
          className={cn(
            'shrink-0',
            'p-[var(--spacing-1)]',
            'rounded-[var(--radius-md)]',
            'text-[var(--color-text-tertiary)]',
            'transition-colors duration-[var(--duration-150)]',
            'hover:text-[var(--color-text-primary)]',
            'hover:bg-[var(--color-bg-tertiary)]',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-border-focus)]'
          )}
          aria-label="Zatvori obavijest"
        >
          <CloseIcon />
        </button>
      )}
    </div>
  )
}

/* ============================================
   Icons
   ============================================ */

function ToastIcon({ variant }: { variant: ToastVariant }) {
  switch (variant) {
    case 'success':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <path d="m9 11 3 3L22 4" />
        </svg>
      )
    case 'error':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="m15 9-6 6" />
          <path d="m9 9 6 6" />
        </svg>
      )
    case 'warning':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
          <path d="M12 9v4" />
          <path d="M12 17h.01" />
        </svg>
      )
    case 'info':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4" />
          <path d="M12 8h.01" />
        </svg>
      )
    case 'neutral':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4" />
          <path d="M12 8h.01" />
        </svg>
      )
  }
}

function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}

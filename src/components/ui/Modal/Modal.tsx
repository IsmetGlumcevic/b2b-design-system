'use client'

import {
  forwardRef,
  useEffect,
  useCallback,
  type HTMLAttributes,
  type ReactNode,
  type MouseEvent,
} from 'react'
import { createPortal } from 'react-dom'
import { cn } from '@/src/lib/utils'

/* ============================================
   Modal Root Component
   ============================================ */

export type ModalSize = 'sm' | 'md' | 'lg' | 'xl' | 'full'

export interface ModalProps {
  /** Whether the modal is open */
  isOpen: boolean
  /** Callback when modal should close */
  onClose: () => void
  /** Size of the modal */
  size?: ModalSize
  /** Whether clicking overlay closes the modal */
  closeOnOverlayClick?: boolean
  /** Whether pressing Escape closes the modal */
  closeOnEscape?: boolean
  /** Whether to show the close button */
  showCloseButton?: boolean
  /** Content of the modal */
  children: ReactNode
  /** Additional className for modal content */
  className?: string
}

const sizeStyles: Record<ModalSize, string> = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  full: 'max-w-[calc(100vw-var(--spacing-8))] max-h-[calc(100vh-var(--spacing-8))]',
}

/**
 * Modal component with overlay, animations, and composable structure.
 * Uses portal to render outside the React tree.
 *
 * @example
 * const [isOpen, setIsOpen] = useState(false)
 *
 * <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
 *   <ModalHeader>
 *     <ModalTitle>Naslov modala</ModalTitle>
 *   </ModalHeader>
 *   <ModalBody>
 *     Sadržaj modala
 *   </ModalBody>
 *   <ModalFooter>
 *     <Button onClick={() => setIsOpen(false)}>Zatvori</Button>
 *   </ModalFooter>
 * </Modal>
 */
export function Modal({
  isOpen,
  onClose,
  size = 'md',
  closeOnOverlayClick = true,
  closeOnEscape = true,
  showCloseButton = true,
  children,
  className,
}: ModalProps) {
  // Handle Escape key
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (closeOnEscape && event.key === 'Escape') {
        onClose()
      }
    },
    [closeOnEscape, onClose]
  )

  // Handle overlay click
  const handleOverlayClick = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      if (closeOnOverlayClick && event.target === event.currentTarget) {
        onClose()
      }
    },
    [closeOnOverlayClick, onClose]
  )

  // Add/remove event listeners and lock body scroll
  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'

      return () => {
        document.removeEventListener('keydown', handleKeyDown)
        document.body.style.overflow = ''
      }
    }
  }, [isOpen, handleKeyDown])

  // Don't render if not open or if we're on the server
  if (!isOpen || typeof document === 'undefined') {
    return null
  }

  return createPortal(
    <div
      className={cn(
        // Overlay styles
        'fixed inset-0',
        'z-[var(--z-modal-backdrop)]',
        'flex items-center justify-center',
        'bg-[var(--color-bg-overlay)]',
        'p-[var(--spacing-4)]',
        // Animation
        'animate-in fade-in duration-200'
      )}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
    >
      <div
        className={cn(
          // Base styles
          'relative',
          'w-full',
          'bg-[var(--color-bg-elevated)]',
          'rounded-[var(--radius-modal)]',
          'shadow-[var(--shadow-modal)]',
          'overflow-hidden',
          // Size
          sizeStyles[size],
          // Animation
          'animate-in zoom-in-95 duration-200',
          // Z-index
          'z-[var(--z-modal)]',
          // Custom className
          className
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {showCloseButton && (
          <button
            type="button"
            onClick={onClose}
            className={cn(
              'absolute top-[var(--spacing-4)] right-[var(--spacing-4)]',
              'z-10',
              'p-[var(--spacing-1)]',
              'rounded-[var(--radius-md)]',
              'text-[var(--color-text-tertiary)]',
              'transition-colors duration-[var(--duration-150)]',
              'hover:text-[var(--color-text-primary)]',
              'hover:bg-[var(--color-bg-tertiary)]',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-border-focus)]'
            )}
            aria-label="Zatvori"
          >
            <CloseIcon />
          </button>
        )}
        {children}
      </div>
    </div>,
    document.body
  )
}

/* ============================================
   ModalHeader Component
   ============================================ */

export interface ModalHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export const ModalHeader = forwardRef<HTMLDivElement, ModalHeaderProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'flex flex-col gap-[var(--spacing-1)]',
          'p-[var(--spacing-6)]',
          'pr-[var(--spacing-12)]', // Space for close button
          'border-b border-[var(--color-border-primary)]',
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

ModalHeader.displayName = 'ModalHeader'

/* ============================================
   ModalTitle Component
   ============================================ */

export interface ModalTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode
}

export const ModalTitle = forwardRef<HTMLHeadingElement, ModalTitleProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <h2
        ref={ref}
        className={cn(
          'text-[var(--font-size-xl)]',
          'font-semibold',
          'leading-[var(--line-height-tight)]',
          'text-[var(--color-text-primary)]',
          className
        )}
        {...props}
      >
        {children}
      </h2>
    )
  }
)

ModalTitle.displayName = 'ModalTitle'

/* ============================================
   ModalDescription Component
   ============================================ */

export interface ModalDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode
}

export const ModalDescription = forwardRef<HTMLParagraphElement, ModalDescriptionProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn(
          'text-[var(--font-size-sm)]',
          'text-[var(--color-text-secondary)]',
          className
        )}
        {...props}
      >
        {children}
      </p>
    )
  }
)

ModalDescription.displayName = 'ModalDescription'

/* ============================================
   ModalBody Component
   ============================================ */

export interface ModalBodyProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export const ModalBody = forwardRef<HTMLDivElement, ModalBodyProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'p-[var(--spacing-6)]',
          'overflow-y-auto',
          'max-h-[calc(100vh-var(--spacing-32))]',
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

ModalBody.displayName = 'ModalBody'

/* ============================================
   ModalFooter Component
   ============================================ */

export interface ModalFooterProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export const ModalFooter = forwardRef<HTMLDivElement, ModalFooterProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'flex items-center justify-end gap-[var(--spacing-3)]',
          'p-[var(--spacing-6)]',
          'border-t border-[var(--color-border-primary)]',
          'bg-[var(--color-bg-secondary)]',
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

ModalFooter.displayName = 'ModalFooter'

/* ============================================
   Close Icon
   ============================================ */

function CloseIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      role="img"
      aria-hidden="true"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}

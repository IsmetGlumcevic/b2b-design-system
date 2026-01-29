import { type HTMLAttributes, type ReactNode } from 'react'
import { cn } from '@/src/lib/utils'

export type AlertVariant = 'success' | 'error' | 'warning' | 'info'

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  /** Visual style variant */
  variant?: AlertVariant
  /** Title of the alert */
  title?: string
  /** Whether to show the icon */
  showIcon?: boolean
  /** Custom icon to display */
  icon?: ReactNode
  /** Whether the alert can be dismissed */
  dismissible?: boolean
  /** Callback when alert is dismissed */
  onDismiss?: () => void
  /** Content of the alert */
  children: ReactNode
}

const variantStyles: Record<AlertVariant, string> = {
  success: `
    bg-[var(--alert-success-bg)]
    border-[var(--alert-success-border)]
    text-[var(--alert-success-text)]
  `,
  error: `
    bg-[var(--alert-error-bg)]
    border-[var(--alert-error-border)]
    text-[var(--alert-error-text)]
  `,
  warning: `
    bg-[var(--alert-warning-bg)]
    border-[var(--alert-warning-border)]
    text-[var(--alert-warning-text)]
  `,
  info: `
    bg-[var(--alert-info-bg)]
    border-[var(--alert-info-border)]
    text-[var(--alert-info-text)]
  `,
}

const iconColors: Record<AlertVariant, string> = {
  success: 'text-[var(--alert-success-icon)]',
  error: 'text-[var(--alert-error-icon)]',
  warning: 'text-[var(--alert-warning-icon)]',
  info: 'text-[var(--alert-info-icon)]',
}

/**
 * Alert component for displaying important messages to users.
 * Uses CSS variables for theming support.
 *
 * @example
 * <Alert variant="success" title="Uspješno!">
 *   Vaša narudžba je uspješno kreirana.
 * </Alert>
 *
 * <Alert variant="error" dismissible onDismiss={() => setShow(false)}>
 *   Došlo je do greške. Pokušajte ponovo.
 * </Alert>
 */
export function Alert({
  variant = 'info',
  title,
  showIcon = true,
  icon,
  dismissible = false,
  onDismiss,
  children,
  className,
  ...props
}: AlertProps) {
  const IconComponent = icon || <DefaultIcon variant={variant} />

  return (
    <div
      role="alert"
      className={cn(
        // Base styles
        'relative',
        'flex gap-[var(--spacing-3)]',
        'p-[var(--alert-padding)]',
        'border',
        'rounded-[var(--alert-radius)]',
        // Variant styles
        variantStyles[variant],
        // Custom className override
        className
      )}
      {...props}
    >
      {showIcon && (
        <span
          className={cn(
            'shrink-0',
            'w-[var(--alert-icon-size)] h-[var(--alert-icon-size)]',
            iconColors[variant]
          )}
          aria-hidden="true"
        >
          {IconComponent}
        </span>
      )}

      <div className="flex-1 min-w-0">
        {title && (
          <h4 className="font-semibold mb-[var(--spacing-1)]">
            {title}
          </h4>
        )}
        <div className="text-[var(--font-size-sm)]">
          {children}
        </div>
      </div>

      {dismissible && onDismiss && (
        <button
          type="button"
          onClick={onDismiss}
          className={cn(
            'shrink-0',
            'p-[var(--spacing-1)]',
            'rounded-[var(--radius-md)]',
            'opacity-70',
            'transition-opacity duration-[var(--duration-150)]',
            'hover:opacity-100',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current'
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
   Default Icons
   ============================================ */

function DefaultIcon({ variant }: { variant: AlertVariant }) {
  switch (variant) {
    case 'success':
      return <CheckCircleIcon />
    case 'error':
      return <XCircleIcon />
    case 'warning':
      return <AlertTriangleIcon />
    case 'info':
      return <InfoCircleIcon />
  }
}

function CheckCircleIcon() {
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
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <path d="m9 11 3 3L22 4" />
    </svg>
  )
}

function XCircleIcon() {
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
      <circle cx="12" cy="12" r="10" />
      <path d="m15 9-6 6" />
      <path d="m9 9 6 6" />
    </svg>
  )
}

function AlertTriangleIcon() {
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
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </svg>
  )
}

function InfoCircleIcon() {
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
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg
      width="16"
      height="16"
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

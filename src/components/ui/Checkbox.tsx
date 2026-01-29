'use client'

import { forwardRef, InputHTMLAttributes, ReactNode, useId } from 'react'
import { cn } from '@/src/lib/utils'

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  /** Checkbox size */
  size?: 'sm' | 'md' | 'lg'
  /** Label text or element */
  label?: ReactNode
  /** Description text below label */
  description?: string
  /** Error message */
  error?: string
  /** Indeterminate state */
  indeterminate?: boolean
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      className,
      size = 'md',
      label,
      description,
      error,
      indeterminate = false,
      disabled,
      id,
      ...props
    },
    ref
  ) => {
    const generatedId = useId()
    const checkboxId = id || generatedId
    const hasError = Boolean(error)

    const sizeClasses = {
      sm: 'h-4 w-4',
      md: 'h-5 w-5',
      lg: 'h-6 w-6',
    }

    const labelSizeClasses = {
      sm: 'text-[var(--font-size-sm)]',
      md: 'text-[var(--font-size-base)]',
      lg: 'text-[var(--font-size-lg)]',
    }

    return (
      <div className={cn('flex flex-col gap-[var(--spacing-0-5)]', className)}>
        <label
          htmlFor={checkboxId}
          className={cn(
            'flex items-start gap-[var(--spacing-3)] cursor-pointer',
            disabled && 'cursor-not-allowed opacity-50'
          )}
        >
          <div className="relative flex items-center justify-center">
            <input
              ref={(el) => {
                if (el) {
                  el.indeterminate = indeterminate
                }
                if (typeof ref === 'function') {
                  ref(el)
                } else if (ref) {
                  ref.current = el
                }
              }}
              type="checkbox"
              id={checkboxId}
              disabled={disabled}
              className={cn(
                'peer appearance-none',
                sizeClasses[size],
                'rounded-[var(--radius-base)]',
                'border-2 bg-[var(--color-bg-primary)]',
                'transition-[var(--transition-fast)]',
                'cursor-pointer disabled:cursor-not-allowed',
                'checked:bg-[var(--color-primary-500)] checked:border-[var(--color-primary-500)]',
                'focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)] focus:ring-opacity-20 focus:ring-offset-1',
                hasError
                  ? 'border-[var(--color-border-error)]'
                  : 'border-[var(--color-border-secondary)]'
              )}
              {...props}
            />
            {/* Checkmark icon */}
            <svg
              className={cn(
                'pointer-events-none absolute',
                'opacity-0 peer-checked:opacity-100',
                'text-white transition-opacity',
                size === 'sm' && 'h-3 w-3',
                size === 'md' && 'h-3.5 w-3.5',
                size === 'lg' && 'h-4 w-4'
              )}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {indeterminate ? (
                <line x1="5" y1="12" x2="19" y2="12" />
              ) : (
                <polyline points="20 6 9 17 4 12" />
              )}
            </svg>
          </div>

          {(label || description) && (
            <div className="flex flex-col gap-[var(--spacing-0-5)]">
              {label && (
                <span
                  className={cn(
                    labelSizeClasses[size],
                    'font-medium',
                    hasError
                      ? 'text-[var(--color-error-600)]'
                      : 'text-[var(--color-text-primary)]'
                  )}
                >
                  {label}
                </span>
              )}
              {description && (
                <span className="text-[var(--font-size-sm)] text-[var(--color-text-secondary)]">
                  {description}
                </span>
              )}
            </div>
          )}
        </label>

        {error && (
          <p className="text-[var(--font-size-xs)] text-[var(--color-error-600)] ml-[calc(var(--spacing-3)+1.25rem)]">
            {error}
          </p>
        )}
      </div>
    )
  }
)

Checkbox.displayName = 'Checkbox'

export { Checkbox }

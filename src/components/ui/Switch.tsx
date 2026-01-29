'use client'

import { forwardRef, InputHTMLAttributes, ReactNode, useId } from 'react'
import { cn } from '@/src/lib/utils'

export interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  /** Switch size */
  size?: 'sm' | 'md' | 'lg'
  /** Label text or element */
  label?: ReactNode
  /** Description text below label */
  description?: string
  /** Show label on the left side instead of right */
  labelPosition?: 'left' | 'right'
}

const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  (
    {
      className,
      size = 'md',
      label,
      description,
      labelPosition = 'right',
      disabled,
      id,
      ...props
    },
    ref
  ) => {
    const generatedId = useId()
    const switchId = id || generatedId

    const trackSizeClasses = {
      sm: 'h-5 w-9',
      md: 'h-6 w-11',
      lg: 'h-7 w-14',
    }

    const thumbSizeClasses = {
      sm: 'h-4 w-4',
      md: 'h-5 w-5',
      lg: 'h-6 w-6',
    }

    const thumbTranslateClasses = {
      sm: 'peer-checked:translate-x-4',
      md: 'peer-checked:translate-x-5',
      lg: 'peer-checked:translate-x-7',
    }

    const labelSizeClasses = {
      sm: 'text-[var(--font-size-sm)]',
      md: 'text-[var(--font-size-base)]',
      lg: 'text-[var(--font-size-lg)]',
    }

    const switchElement = (
      <div className="relative inline-flex items-center">
        <input
          ref={ref}
          type="checkbox"
          role="switch"
          id={switchId}
          disabled={disabled}
          className="peer sr-only"
          {...props}
        />
        {/* Track */}
        <div
          className={cn(
            trackSizeClasses[size],
            'rounded-full',
            'bg-[var(--color-neutral-300)]',
            'peer-checked:bg-[var(--color-primary-500)]',
            'peer-focus:ring-2 peer-focus:ring-[var(--color-primary-500)] peer-focus:ring-opacity-20 peer-focus:ring-offset-1',
            'peer-disabled:opacity-50 peer-disabled:cursor-not-allowed',
            'transition-colors duration-200',
            'cursor-pointer'
          )}
        />
        {/* Thumb */}
        <div
          className={cn(
            'pointer-events-none absolute left-0.5',
            thumbSizeClasses[size],
            'rounded-full bg-white',
            'shadow-[var(--shadow-sm)]',
            'transition-transform duration-200',
            thumbTranslateClasses[size]
          )}
        />
      </div>
    )

    if (!label && !description) {
      return (
        <label htmlFor={switchId} className={cn('inline-flex cursor-pointer', disabled && 'cursor-not-allowed', className)}>
          {switchElement}
        </label>
      )
    }

    return (
      <label
        htmlFor={switchId}
        className={cn(
          'flex items-start gap-[var(--spacing-3)] cursor-pointer',
          disabled && 'cursor-not-allowed opacity-50',
          className
        )}
      >
        {labelPosition === 'left' && (
          <div className="flex flex-col gap-[var(--spacing-0-5)] flex-1">
            {label && (
              <span className={cn(labelSizeClasses[size], 'font-medium text-[var(--color-text-primary)]')}>
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

        {switchElement}

        {labelPosition === 'right' && (
          <div className="flex flex-col gap-[var(--spacing-0-5)]">
            {label && (
              <span className={cn(labelSizeClasses[size], 'font-medium text-[var(--color-text-primary)]')}>
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
    )
  }
)

Switch.displayName = 'Switch'

export { Switch }

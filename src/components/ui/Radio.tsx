'use client'

import { forwardRef, InputHTMLAttributes, ReactNode, useId } from 'react'
import { cn } from '@/src/lib/utils'

export interface RadioOption {
  value: string
  label: ReactNode
  description?: string
  disabled?: boolean
}

export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  /** Radio size */
  size?: 'sm' | 'md' | 'lg'
  /** Label text or element */
  label?: ReactNode
  /** Description text below label */
  description?: string
  /** Error message */
  error?: string
}

export interface RadioGroupProps {
  /** Group name */
  name: string
  /** Radio options */
  options: RadioOption[]
  /** Selected value */
  value?: string
  /** Change handler */
  onChange?: (value: string) => void
  /** Radio size */
  size?: 'sm' | 'md' | 'lg'
  /** Layout direction */
  direction?: 'horizontal' | 'vertical'
  /** Error message */
  error?: string
  /** Label for the group */
  label?: string
  /** Disabled state for all options */
  disabled?: boolean
  /** Additional class names */
  className?: string
}

const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      className,
      size = 'md',
      label,
      description,
      error,
      disabled,
      id,
      ...props
    },
    ref
  ) => {
    const generatedId = useId()
    const radioId = id || generatedId
    const hasError = Boolean(error)

    const sizeClasses = {
      sm: 'h-4 w-4',
      md: 'h-5 w-5',
      lg: 'h-6 w-6',
    }

    const dotSizeClasses = {
      sm: 'h-1.5 w-1.5',
      md: 'h-2 w-2',
      lg: 'h-2.5 w-2.5',
    }

    const labelSizeClasses = {
      sm: 'text-[var(--font-size-sm)]',
      md: 'text-[var(--font-size-base)]',
      lg: 'text-[var(--font-size-lg)]',
    }

    return (
      <div className={cn('flex flex-col gap-[var(--spacing-0-5)]', className)}>
        <label
          htmlFor={radioId}
          className={cn(
            'flex items-start gap-[var(--spacing-3)] cursor-pointer',
            disabled && 'cursor-not-allowed opacity-50'
          )}
        >
          <div className="relative flex items-center justify-center">
            <input
              ref={ref}
              type="radio"
              id={radioId}
              disabled={disabled}
              className={cn(
                'peer appearance-none',
                sizeClasses[size],
                'rounded-full',
                'border-2 bg-[var(--color-bg-primary)]',
                'transition-[var(--transition-fast)]',
                'cursor-pointer disabled:cursor-not-allowed',
                'checked:border-[var(--color-primary-500)]',
                'focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)] focus:ring-opacity-20 focus:ring-offset-1',
                hasError
                  ? 'border-[var(--color-border-error)]'
                  : 'border-[var(--color-border-secondary)]'
              )}
              {...props}
            />
            {/* Radio dot */}
            <span
              className={cn(
                'pointer-events-none absolute',
                'rounded-full bg-[var(--color-primary-500)]',
                'scale-0 peer-checked:scale-100',
                'transition-transform',
                dotSizeClasses[size]
              )}
            />
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

Radio.displayName = 'Radio'

function RadioGroup({
  name,
  options,
  value,
  onChange,
  size = 'md',
  direction = 'vertical',
  error,
  label,
  disabled,
  className,
}: RadioGroupProps) {
  const hasError = Boolean(error)

  return (
    <div className={cn('flex flex-col gap-[var(--spacing-2)]', className)}>
      {label && (
        <span
          className={cn(
            'text-[var(--font-size-sm)] font-medium',
            hasError ? 'text-[var(--color-error-600)]' : 'text-[var(--color-text-primary)]',
            disabled && 'text-[var(--color-text-tertiary)]'
          )}
        >
          {label}
        </span>
      )}

      <div
        className={cn(
          'flex',
          direction === 'vertical' ? 'flex-col gap-[var(--spacing-3)]' : 'flex-row gap-[var(--spacing-6)]'
        )}
        role="radiogroup"
      >
        {options.map((option) => (
          <Radio
            key={option.value}
            name={name}
            value={option.value}
            checked={value === option.value}
            onChange={(e) => onChange?.(e.target.value)}
            size={size}
            label={option.label}
            description={option.description}
            disabled={disabled || option.disabled}
            error={hasError && value === option.value ? error : undefined}
          />
        ))}
      </div>

      {error && (
        <p className="text-[var(--font-size-xs)] text-[var(--color-error-600)]">
          {error}
        </p>
      )}
    </div>
  )
}

export { Radio, RadioGroup }

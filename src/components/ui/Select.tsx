'use client'

import { forwardRef, SelectHTMLAttributes, ReactNode, useState, useId } from 'react'
import { cn } from '@/src/lib/utils'

export interface SelectOption {
  value: string
  label: string
  disabled?: boolean
}

export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  /** Select size variant */
  size?: 'sm' | 'md' | 'lg'
  /** Label text */
  label?: string
  /** Helper text below select */
  helperText?: string
  /** Error message (also sets error state) */
  error?: string
  /** Options array */
  options: SelectOption[]
  /** Placeholder text */
  placeholder?: string
  /** Icon on the left side */
  leftIcon?: ReactNode
  /** Full width */
  fullWidth?: boolean
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      className,
      size = 'md',
      label,
      helperText,
      error,
      options,
      placeholder,
      leftIcon,
      fullWidth = false,
      disabled,
      id,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false)
    const generatedId = useId()
    const selectId = id || generatedId
    const hasError = Boolean(error)

    return (
      <div className={cn('flex flex-col gap-[var(--spacing-1-5)]', fullWidth && 'w-full')}>
        {label && (
          <label
            htmlFor={selectId}
            className={cn(
              'text-[var(--font-size-sm)] font-medium',
              hasError ? 'text-[var(--color-error-600)]' : 'text-[var(--color-text-primary)]',
              disabled && 'text-[var(--color-text-tertiary)]'
            )}
          >
            {label}
          </label>
        )}

        <div
          className={cn(
            'relative flex items-center',
            'rounded-[var(--radius-input)]',
            'border bg-[var(--input-bg)]',
            'transition-[var(--transition-fast)]',
            {
              'border-[var(--color-border-error)]': hasError,
              'border-[var(--input-border-focus)] ring-2 ring-[var(--input-border-focus)] ring-opacity-20':
                isFocused && !hasError,
              'border-[var(--input-border)]': !isFocused && !hasError,
              'opacity-50 cursor-not-allowed bg-[var(--color-bg-tertiary)]': disabled,
            },
            fullWidth && 'w-full'
          )}
        >
          {leftIcon && (
            <span className="pl-[var(--spacing-3)] text-[var(--color-text-tertiary)]">
              {leftIcon}
            </span>
          )}

          <select
            ref={ref}
            id={selectId}
            disabled={disabled}
            className={cn(
              'flex-1 appearance-none bg-transparent outline-none cursor-pointer',
              'text-[var(--input-text)]',
              'disabled:cursor-not-allowed',
              {
                'h-[var(--input-height-sm)] text-[var(--font-size-sm)]': size === 'sm',
                'h-[var(--input-height-md)] text-[var(--font-size-base)]': size === 'md',
                'h-[var(--input-height-lg)] text-[var(--font-size-lg)]': size === 'lg',
              },
              leftIcon ? 'pl-[var(--spacing-2)]' : 'pl-[var(--spacing-input-padding-x)]',
              'pr-[var(--spacing-10)]',
              className
            )}
            onFocus={(e) => {
              setIsFocused(true)
              props.onFocus?.(e)
            }}
            onBlur={(e) => {
              setIsFocused(false)
              props.onBlur?.(e)
            }}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option key={option.value} value={option.value} disabled={option.disabled}>
                {option.label}
              </option>
            ))}
          </select>

          {/* Chevron icon */}
          <span className="pointer-events-none absolute right-[var(--spacing-3)] text-[var(--color-text-tertiary)]">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </span>
        </div>

        {(helperText || error) && (
          <p
            className={cn(
              'text-[var(--font-size-xs)]',
              hasError ? 'text-[var(--color-error-600)]' : 'text-[var(--color-text-secondary)]'
            )}
          >
            {error || helperText}
          </p>
        )}
      </div>
    )
  }
)

Select.displayName = 'Select'

export { Select }

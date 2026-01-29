'use client'

import { forwardRef, InputHTMLAttributes, ReactNode, useState, useId } from 'react'
import { cn } from '@/src/lib/utils'

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Input size variant */
  size?: 'sm' | 'md' | 'lg'
  /** Label text */
  label?: string
  /** Helper text below input */
  helperText?: string
  /** Error message (also sets error state) */
  error?: string
  /** Icon on the left side */
  leftIcon?: ReactNode
  /** Icon on the right side */
  rightIcon?: ReactNode
  /** Full width */
  fullWidth?: boolean
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      size = 'md',
      label,
      helperText,
      error,
      leftIcon,
      rightIcon,
      fullWidth = false,
      disabled,
      id,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false)
    const generatedId = useId()
    const inputId = id || generatedId
    const hasError = Boolean(error)

    return (
      <div className={cn('flex flex-col gap-[var(--spacing-1-5)]', fullWidth && 'w-full')}>
        {label && (
          <label
            htmlFor={inputId}
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

          <input
            ref={ref}
            id={inputId}
            disabled={disabled}
            className={cn(
              'flex-1 bg-transparent outline-none',
              'text-[var(--input-text)] placeholder:text-[var(--color-text-tertiary)]',
              'disabled:cursor-not-allowed',
              {
                'h-[var(--input-height-sm)] text-[var(--font-size-sm)]': size === 'sm',
                'h-[var(--input-height-md)] text-[var(--font-size-base)]': size === 'md',
                'h-[var(--input-height-lg)] text-[var(--font-size-lg)]': size === 'lg',
              },
              leftIcon ? 'pl-[var(--spacing-2)]' : 'pl-[var(--spacing-input-padding-x)]',
              rightIcon ? 'pr-[var(--spacing-2)]' : 'pr-[var(--spacing-input-padding-x)]',
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
          />

          {rightIcon && (
            <span className="pr-[var(--spacing-3)] text-[var(--color-text-tertiary)]">
              {rightIcon}
            </span>
          )}
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

Input.displayName = 'Input'

export { Input }

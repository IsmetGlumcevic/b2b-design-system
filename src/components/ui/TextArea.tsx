'use client'

import { forwardRef, TextareaHTMLAttributes, useState, useId } from 'react'
import { cn } from '@/src/lib/utils'

export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Label text */
  label?: string
  /** Helper text below textarea */
  helperText?: string
  /** Error message (also sets error state) */
  error?: string
  /** Full width */
  fullWidth?: boolean
  /** Show character count */
  showCount?: boolean
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      className,
      label,
      helperText,
      error,
      fullWidth = false,
      showCount = false,
      disabled,
      maxLength,
      id,
      value,
      defaultValue,
      onChange,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false)
    const [charCount, setCharCount] = useState(
      String(value || defaultValue || '').length
    )
    const generatedId = useId()
    const textareaId = id || generatedId
    const hasError = Boolean(error)

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setCharCount(e.target.value.length)
      onChange?.(e)
    }

    return (
      <div className={cn('flex flex-col gap-[var(--spacing-1-5)]', fullWidth && 'w-full')}>
        {label && (
          <label
            htmlFor={textareaId}
            className={cn(
              'text-[var(--font-size-sm)] font-medium',
              hasError ? 'text-[var(--color-error-600)]' : 'text-[var(--color-text-primary)]',
              disabled && 'text-[var(--color-text-tertiary)]'
            )}
          >
            {label}
          </label>
        )}

        <textarea
          ref={ref}
          id={textareaId}
          disabled={disabled}
          maxLength={maxLength}
          value={value}
          defaultValue={defaultValue}
          onChange={handleChange}
          className={cn(
            'min-h-[100px] resize-y',
            'rounded-[var(--radius-input)]',
            'border bg-[var(--input-bg)]',
            'px-[var(--spacing-input-padding-x)] py-[var(--spacing-input-padding-y)]',
            'text-[var(--font-size-base)] text-[var(--input-text)]',
            'placeholder:text-[var(--color-text-tertiary)]',
            'transition-[var(--transition-fast)]',
            'outline-none',
            {
              'border-[var(--color-border-error)]': hasError,
              'border-[var(--input-border-focus)] ring-2 ring-[var(--input-border-focus)] ring-opacity-20':
                isFocused && !hasError,
              'border-[var(--input-border)]': !isFocused && !hasError,
              'opacity-50 cursor-not-allowed bg-[var(--color-bg-tertiary)]': disabled,
            },
            fullWidth && 'w-full',
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

        <div className="flex items-center justify-between">
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

          {showCount && maxLength && (
            <p
              className={cn(
                'text-[var(--font-size-xs)] text-[var(--color-text-tertiary)]',
                charCount >= maxLength && 'text-[var(--color-error-600)]'
              )}
            >
              {charCount}/{maxLength}
            </p>
          )}
        </div>
      </div>
    )
  }
)

TextArea.displayName = 'TextArea'

export { TextArea }

'use client'

import { useState, useEffect } from 'react'
import { cn } from '@/src/lib/utils'
import type { CountdownBannerProps } from '../types'

/**
 * CountdownBanner - Sale countdown timer component
 *
 * Client Component - needs timer state
 *
 * @example
 * ```tsx
 * <CountdownBanner
 *   config={{
 *     endDate: new Date('2024-12-31T23:59:59'),
 *     title: 'Akcija završava za',
 *     theme: 'urgent',
 *   }}
 *   size="md"
 * />
 * ```
 */
export function CountdownBanner({
  config,
  colorScheme = 'light',
  size = 'md',
  className,
  ...props
}: CountdownBannerProps) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(config.endDate))

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(config.endDate))
    }, 1000)

    return () => clearInterval(timer)
  }, [config.endDate])

  // Theme styles
  const themeStyles = {
    primary: 'bg-[var(--color-primary-500)] text-white',
    secondary: 'bg-[var(--color-secondary-800)] text-white',
    urgent: 'bg-[var(--color-error-500)] text-white',
    success: 'bg-[var(--color-success-500)] text-white',
  }

  // Size styles
  const sizeStyles = {
    sm: 'text-xs py-1 px-3',
    md: 'text-sm py-2 px-4',
    lg: 'text-base py-3 px-6',
  }

  // Digit size styles
  const digitSizeStyles = {
    sm: 'w-5 h-5 text-xs',
    md: 'w-7 h-7 text-sm',
    lg: 'w-9 h-9 text-base',
  }

  const content = (
    <div
      className={cn(
        'flex items-center gap-3 rounded-md',
        themeStyles[config.theme || 'primary'],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      <div className="flex flex-col">
        <span className="font-medium">{config.title}</span>
        {config.subtitle && (
          <span className="text-xs opacity-80">{config.subtitle}</span>
        )}
      </div>

      <div className="flex items-center gap-1">
        <TimeDigit value={timeLeft.hours} size={digitSizeStyles[size]} />
        <span className="font-bold">:</span>
        <TimeDigit value={timeLeft.minutes} size={digitSizeStyles[size]} />
        <span className="font-bold">:</span>
        <TimeDigit value={timeLeft.seconds} size={digitSizeStyles[size]} />
      </div>
    </div>
  )

  if (config.href) {
    return (
      <a href={config.href} className="inline-block hover:opacity-90 transition-opacity">
        {content}
      </a>
    )
  }

  return content
}

/**
 * Individual time digit display
 */
function TimeDigit({ value, size }: { value: number; size: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center justify-center',
        'bg-black/20 rounded font-bold font-mono',
        size
      )}
    >
      {String(value).padStart(2, '0')}
    </span>
  )
}

/**
 * Calculate time remaining
 */
function calculateTimeLeft(endDate: Date): {
  hours: number
  minutes: number
  seconds: number
  isExpired: boolean
} {
  const difference = endDate.getTime() - Date.now()

  if (difference <= 0) {
    return { hours: 0, minutes: 0, seconds: 0, isExpired: true }
  }

  const totalSeconds = Math.floor(difference / 1000)
  const hours = Math.floor(totalSeconds / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  return { hours, minutes, seconds, isExpired: false }
}

export default CountdownBanner

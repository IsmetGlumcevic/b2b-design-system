'use client'

import { cn } from '@/src/lib/utils'

interface MobileSectionHeaderProps {
  title: string
  subtitle?: string
  actionLabel?: string
  onAction?: () => void
  className?: string
  variant?: 'default' | 'large'
}

export function MobileSectionHeader({
  title,
  subtitle,
  actionLabel = 'Sve',
  onAction,
  className,
  variant = 'default',
}: MobileSectionHeaderProps) {
  return (
    <div className={cn('flex items-center justify-between px-4 py-3', className)}>
      <div>
        <h3
          className={cn(
            'font-semibold text-neutral-900',
            variant === 'large' ? 'text-lg' : 'text-base'
          )}
        >
          {title}
        </h3>
        {subtitle && (
          <p className="text-xs text-neutral-500">{subtitle}</p>
        )}
      </div>
      {onAction && (
        <button
          onClick={onAction}
          className="flex items-center gap-1 text-sm font-medium text-[var(--color-primary-500)] active:opacity-70"
        >
          {actionLabel}
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
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      )}
    </div>
  )
}

export default MobileSectionHeader

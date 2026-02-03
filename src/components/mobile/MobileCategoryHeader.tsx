'use client'

import { cn } from '@/src/lib/utils'

interface MobileCategoryHeaderProps {
  title: string
  showBack?: boolean
  onBack?: () => void
  rightAction?: React.ReactNode
  className?: string
  variant?: 'default' | 'transparent' | 'primary'
}

const BackIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19 12H5M12 19l-7-7 7-7" />
  </svg>
)

export function MobileCategoryHeader({
  title,
  showBack = false,
  onBack,
  rightAction,
  className,
  variant = 'default',
}: MobileCategoryHeaderProps) {
  const variantStyles = {
    default: 'bg-white border-b border-neutral-100',
    transparent: 'bg-transparent',
    primary: 'bg-[var(--color-primary-500)] text-white',
  }

  const titleStyles = {
    default: 'text-neutral-900',
    transparent: 'text-neutral-900',
    primary: 'text-white',
  }

  return (
    <header
      className={cn(
        'flex h-14 items-center justify-between px-4',
        variantStyles[variant],
        className
      )}
    >
      {/* Left - Back button */}
      <div className="flex w-10 items-center">
        {showBack && (
          <button
            onClick={onBack}
            className={cn(
              'flex h-10 w-10 items-center justify-center rounded-full transition-colors active:bg-neutral-100',
              variant === 'primary' && 'active:bg-white/20'
            )}
          >
            <BackIcon />
          </button>
        )}
      </div>

      {/* Center - Title */}
      <h1
        className={cn(
          'flex-1 text-center text-base font-semibold',
          titleStyles[variant]
        )}
      >
        {title}
      </h1>

      {/* Right - Action */}
      <div className="flex w-10 items-center justify-end">{rightAction}</div>
    </header>
  )
}

export default MobileCategoryHeader

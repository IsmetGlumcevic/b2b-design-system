'use client'

import { cn } from '@/src/lib/utils'

interface MobileSearchBarProps {
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
  onFocus?: () => void
  onSubmit?: (value: string) => void
  showScanButton?: boolean
  onScan?: () => void
  className?: string
  variant?: 'default' | 'filled' | 'outline'
}

const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
)

const ScanIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 7V4h3" />
    <path d="M17 4h3v3" />
    <path d="M20 17v3h-3" />
    <path d="M7 20H4v-3" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
)

export function MobileSearchBar({
  placeholder = 'Pretraži proizvode...',
  value = '',
  onChange,
  onFocus,
  onSubmit,
  showScanButton = true,
  onScan,
  className,
  variant = 'filled',
}: MobileSearchBarProps) {
  const variantStyles = {
    default: 'bg-white border border-neutral-200',
    filled: 'bg-neutral-100 border border-transparent',
    outline: 'bg-transparent border-2 border-neutral-300',
  }

  return (
    <div className={cn('px-4 py-3', className)}>
      <div
        className={cn(
          'flex h-12 items-center gap-3 rounded-xl px-4',
          variantStyles[variant]
        )}
      >
        <SearchIcon />
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          onFocus={onFocus}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && onSubmit) {
              onSubmit(value)
            }
          }}
          className="flex-1 bg-transparent text-sm outline-none placeholder:text-neutral-400"
        />
        {showScanButton && (
          <button
            onClick={onScan}
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-primary-500)] text-white transition-transform active:scale-95"
          >
            <ScanIcon />
          </button>
        )}
      </div>
    </div>
  )
}

export default MobileSearchBar

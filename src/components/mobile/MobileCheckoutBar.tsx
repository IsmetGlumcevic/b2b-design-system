'use client'

import { cn } from '@/src/lib/utils'

interface MobileCheckoutBarProps {
  total: number
  currency?: string
  itemCount?: number
  buttonLabel?: string
  onCheckout?: () => void
  disabled?: boolean
  className?: string
}

export function MobileCheckoutBar({
  total,
  currency = '€',
  itemCount,
  buttonLabel = 'Nastavi na plaćanje',
  onCheckout,
  disabled = false,
  className,
}: MobileCheckoutBarProps) {
  return (
    <div
      className={cn(
        'flex items-center gap-3 border-t border-neutral-100 bg-white/95 px-4 py-3 backdrop-blur',
        className
      )}
    >
      <div className="flex-1">
        {itemCount !== undefined && (
          <p className="text-[10px] text-neutral-500">{itemCount} artikla</p>
        )}
        <p className="text-base font-bold text-neutral-900">
          {total.toFixed(2)} {currency}
        </p>
      </div>
      <button
        onClick={onCheckout}
        disabled={disabled}
        className="flex h-11 flex-1 items-center justify-center rounded-xl bg-[var(--color-primary-500)] text-sm font-semibold text-white transition-colors active:bg-[var(--color-primary-600)] disabled:bg-neutral-300"
      >
        {buttonLabel}
      </button>
    </div>
  )
}

export default MobileCheckoutBar

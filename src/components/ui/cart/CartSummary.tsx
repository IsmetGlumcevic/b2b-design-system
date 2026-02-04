'use client'

import { cn } from '@/src/lib/utils'

interface CartSummaryProps {
  subtotal: number
  discount: number
  shipping: number
  tax: number
  total: number
  currency?: string
  freeShippingThreshold?: number
  onCheckout: () => void
  isCheckoutDisabled?: boolean
}

export function CartSummary({
  subtotal,
  discount,
  shipping,
  tax,
  total,
  currency = '€',
  freeShippingThreshold = 100,
  onCheckout,
  isCheckoutDisabled = false,
}: CartSummaryProps) {
  const amountToFreeShipping = Math.max(0, freeShippingThreshold - subtotal)
  const hasFreeShipping = shipping === 0 && subtotal > 0

  return (
    <div className="bg-[var(--color-bg-elevated)] rounded-[var(--radius-card)] border border-[var(--color-border-primary)] p-4 md:p-6">
      <h2 className="text-lg font-semibold text-[var(--color-text-primary)] mb-4">
        Pregled narudžbe
      </h2>

      {/* Free shipping progress */}
      {!hasFreeShipping && subtotal > 0 && (
        <div className="mb-4 p-3 bg-[var(--color-bg-tertiary)] rounded-[var(--radius-md)]">
          <p className="text-sm text-[var(--color-text-secondary)] mb-2">
            Još <span className="font-semibold text-[var(--color-primary-500)]">{amountToFreeShipping.toFixed(2)} {currency}</span> do besplatne dostave!
          </p>
          <div className="h-2 bg-[var(--color-neutral-200)] rounded-full overflow-hidden">
            <div
              className="h-full bg-[var(--color-primary-500)] rounded-full transition-all duration-300"
              style={{ width: `${Math.min((subtotal / freeShippingThreshold) * 100, 100)}%` }}
            />
          </div>
        </div>
      )}

      {hasFreeShipping && (
        <div className="mb-4 p-3 bg-[var(--color-success-50)] rounded-[var(--radius-md)] flex items-center gap-2">
          <CheckCircleIcon className="h-5 w-5 text-[var(--color-success-600)]" />
          <p className="text-sm font-medium text-[var(--color-success-700)]">
            Ostvarili ste besplatnu dostavu!
          </p>
        </div>
      )}

      {/* Price breakdown */}
      <div className="space-y-3 mb-4">
        <div className="flex justify-between text-sm">
          <span className="text-[var(--color-text-secondary)]">Međuzbroj</span>
          <span className="text-[var(--color-text-primary)] font-medium">
            {subtotal.toFixed(2)} {currency}
          </span>
        </div>

        {discount > 0 && (
          <div className="flex justify-between text-sm">
            <span className="text-[var(--color-success-600)]">Popust</span>
            <span className="text-[var(--color-success-600)] font-medium">
              -{discount.toFixed(2)} {currency}
            </span>
          </div>
        )}

        <div className="flex justify-between text-sm">
          <span className="text-[var(--color-text-secondary)]">Dostava</span>
          <span className="text-[var(--color-text-primary)] font-medium">
            {shipping === 0 ? (
              <span className="text-[var(--color-success-600)]">Besplatno</span>
            ) : (
              `${shipping.toFixed(2)} ${currency}`
            )}
          </span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-[var(--color-text-secondary)]">PDV (17%)</span>
          <span className="text-[var(--color-text-tertiary)]">
            uključen u cijenu
          </span>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[var(--color-border-primary)] my-4" />

      {/* Total */}
      <div className="flex justify-between items-baseline mb-6">
        <span className="text-base font-semibold text-[var(--color-text-primary)]">Ukupno</span>
        <span className="text-2xl font-bold text-[var(--color-text-primary)]">
          {total.toFixed(2)} {currency}
        </span>
      </div>

      {/* Checkout button */}
      <button
        onClick={onCheckout}
        disabled={isCheckoutDisabled}
        className={cn(
          'w-full flex items-center justify-center gap-2',
          'h-12 px-6',
          'rounded-[var(--radius-button)]',
          'text-base font-semibold',
          'transition-colors',
          isCheckoutDisabled
            ? 'bg-[var(--color-neutral-200)] text-[var(--color-text-tertiary)] cursor-not-allowed'
            : 'bg-[var(--color-primary-500)] text-white hover:bg-[var(--color-primary-hover)]'
        )}
      >
        <LockIcon className="h-4 w-4" />
        Naruči
      </button>

      {/* Trust badges */}
      <div className="mt-4 flex items-center justify-center gap-2 text-xs text-[var(--color-text-tertiary)]">
        <ShieldIcon className="h-4 w-4" />
        <span>Sigurna kupovina</span>
      </div>
    </div>
  )
}

// Icons
function CheckCircleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

function LockIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
  )
}

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  )
}

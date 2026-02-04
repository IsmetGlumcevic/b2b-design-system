'use client'

import { cn } from '@/src/lib/utils'

interface MobileCartSummaryProps {
  subtotal: number
  discount?: number
  shipping?: number
  vat?: number
  total: number
  currency?: string
  note?: string
  className?: string
}

export function MobileCartSummary({
  subtotal,
  discount = 0,
  shipping = 0,
  vat = 0,
  total,
  currency = '€',
  note,
  className,
}: MobileCartSummaryProps) {
  const format = (value: number) => `${value.toFixed(2)} ${currency}`

  return (
    <div className={cn('rounded-xl border border-neutral-100 bg-white p-4 shadow-sm', className)}>
      <h3 className="mb-3 text-sm font-semibold text-neutral-900">Sažetak narudžbe</h3>
      <div className="space-y-2 text-sm text-neutral-600">
        <div className="flex items-center justify-between">
          <span>Međuzbroj</span>
          <span className="font-medium text-neutral-900">{format(subtotal)}</span>
        </div>
        {discount > 0 && (
          <div className="flex items-center justify-between">
            <span>Popust</span>
            <span className="font-medium text-green-600">- {format(discount)}</span>
          </div>
        )}
        <div className="flex items-center justify-between">
          <span>Dostava</span>
          <span className="font-medium text-neutral-900">
            {shipping > 0 ? format(shipping) : 'Besplatno'}
          </span>
        </div>
        {vat > 0 && (
          <div className="flex items-center justify-between">
            <span>Procijenjeni PDV</span>
            <span className="font-medium text-neutral-900">{format(vat)}</span>
          </div>
        )}
        <div className="flex items-center justify-between border-t border-neutral-100 pt-3 text-base font-semibold text-neutral-900">
          <span>Ukupno</span>
          <span>{format(total)}</span>
        </div>
      </div>
      {note && (
        <p className="mt-3 text-[10px] text-neutral-500">{note}</p>
      )}
    </div>
  )
}

export default MobileCartSummary

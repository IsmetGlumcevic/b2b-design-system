'use client'

import { cn } from '@/src/lib/utils'

type OrderStatusTone = 'success' | 'warning' | 'neutral'

interface MobileOrderCardProps {
  orderId: string
  date: string
  status: string
  statusTone?: OrderStatusTone
  amount: string
  itemsCount?: number
  onPress?: () => void
  className?: string
}

const toneMap: Record<OrderStatusTone, string> = {
  success: 'bg-green-50 text-green-700',
  warning: 'bg-amber-50 text-amber-700',
  neutral: 'bg-neutral-100 text-neutral-600',
}

export function MobileOrderCard({
  orderId,
  date,
  status,
  statusTone = 'neutral',
  amount,
  itemsCount,
  onPress,
  className,
}: MobileOrderCardProps) {
  return (
    <button
      onClick={onPress}
      className={cn(
        'flex w-full items-center justify-between gap-3 rounded-xl border border-neutral-100 bg-white p-3 text-left shadow-sm transition-colors active:bg-neutral-50',
        className
      )}
    >
      <div>
        <p className="text-xs text-neutral-400">Narudžba {orderId}</p>
        <p className="text-sm font-semibold text-neutral-900">{amount}</p>
        <div className="mt-1 flex items-center gap-2 text-[10px] text-neutral-500">
          <span>{date}</span>
          {itemsCount !== undefined && <span>• {itemsCount} artikla</span>}
        </div>
      </div>
      <div className="flex flex-col items-end gap-2">
        <span className={cn('rounded-full px-2 py-0.5 text-[10px] font-semibold', toneMap[statusTone])}>
          {status}
        </span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-neutral-300"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </div>
    </button>
  )
}

export default MobileOrderCard

'use client'

import { cn } from '@/src/lib/utils'

export interface MobileInfoItem {
  label: string
  value: string
}

interface MobileInfoCardProps {
  title: string
  items: MobileInfoItem[]
  actionLabel?: string
  onAction?: () => void
  className?: string
}

export function MobileInfoCard({
  title,
  items,
  actionLabel = 'Uredi',
  onAction,
  className,
}: MobileInfoCardProps) {
  return (
    <div className={cn('rounded-xl border border-neutral-100 bg-white shadow-sm', className)}>
      <div className="flex items-center justify-between border-b border-neutral-100 px-4 py-3">
        <h3 className="text-sm font-semibold text-neutral-900">{title}</h3>
        {onAction && (
          <button
            onClick={onAction}
            className="text-xs font-semibold text-[var(--color-primary-500)]"
          >
            {actionLabel}
          </button>
        )}
      </div>
      <div className="space-y-2 px-4 py-3">
        {items.map((item) => (
          <div key={item.label} className="flex items-center justify-between text-sm text-neutral-700">
            <span className="text-neutral-500">{item.label}</span>
            <span className="font-medium text-neutral-900">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MobileInfoCard

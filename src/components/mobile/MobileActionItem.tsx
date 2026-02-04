'use client'

import { cn } from '@/src/lib/utils'

interface MobileActionItemProps {
  title: string
  subtitle?: string
  icon?: React.ReactNode
  value?: string
  badge?: string
  onPress?: () => void
  className?: string
}

export function MobileActionItem({
  title,
  subtitle,
  icon,
  value,
  badge,
  onPress,
  className,
}: MobileActionItemProps) {
  return (
    <button
      onClick={onPress}
      className={cn(
        'flex w-full items-center gap-3 rounded-xl border border-neutral-100 bg-white p-3 text-left shadow-sm transition-colors active:bg-neutral-50',
        className
      )}
    >
      {icon && (
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100 text-neutral-600">
          {icon}
        </div>
      )}
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <p className="text-sm font-semibold text-neutral-900">{title}</p>
          {badge && (
            <span className="rounded-full bg-[var(--color-primary-50)] px-2 py-0.5 text-[10px] font-semibold text-[var(--color-primary-600)]">
              {badge}
            </span>
          )}
        </div>
        {subtitle && <p className="text-xs text-neutral-500">{subtitle}</p>}
      </div>
      {value && <span className="text-xs font-semibold text-neutral-700">{value}</span>}
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
    </button>
  )
}

export default MobileActionItem

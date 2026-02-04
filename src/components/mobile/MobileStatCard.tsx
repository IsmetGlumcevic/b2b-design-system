'use client'

import { cn } from '@/src/lib/utils'

type StatTone = 'neutral' | 'primary' | 'success' | 'warning'

interface MobileStatCardProps {
  label: string
  value: string
  helper?: string
  tone?: StatTone
  className?: string
}

const toneStyles: Record<StatTone, string> = {
  neutral: 'text-neutral-900',
  primary: 'text-[var(--color-primary-600)]',
  success: 'text-green-700',
  warning: 'text-amber-700',
}

export function MobileStatCard({
  label,
  value,
  helper,
  tone = 'neutral',
  className,
}: MobileStatCardProps) {
  return (
    <div className={cn('rounded-xl border border-neutral-100 bg-white p-3 shadow-sm', className)}>
      <p className="text-[10px] text-neutral-500">{label}</p>
      <p className={cn('mt-1 text-lg font-semibold', toneStyles[tone])}>{value}</p>
      {helper && <p className="mt-1 text-[10px] text-neutral-400">{helper}</p>}
    </div>
  )
}

export default MobileStatCard

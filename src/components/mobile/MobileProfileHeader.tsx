'use client'

import { cn } from '@/src/lib/utils'

interface MobileProfileHeaderProps {
  name: string
  company?: string
  role?: string
  email?: string
  avatarUrl?: string
  statusLabel?: string
  actionLabel?: string
  onAction?: () => void
  className?: string
}

function getInitials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join('')
}

export function MobileProfileHeader({
  name,
  company,
  role,
  email,
  avatarUrl,
  statusLabel,
  actionLabel = 'Uredi',
  onAction,
  className,
}: MobileProfileHeaderProps) {
  const initials = getInitials(name)

  return (
    <div
      className={cn(
        'rounded-2xl bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-700 p-4 text-white shadow-lg',
        className
      )}
    >
      <div className="flex items-start gap-3">
        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-2xl bg-white/10">
          {avatarUrl ? (
            <img src={avatarUrl} alt={name} className="h-full w-full object-cover" />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-lg font-semibold">
              {initials}
            </div>
          )}
        </div>
        <div className="flex-1">
          {company && <p className="text-[10px] uppercase tracking-wide text-white/60">{company}</p>}
          <h2 className="text-lg font-semibold">{name}</h2>
          {role && <p className="text-xs text-white/70">{role}</p>}
          {email && <p className="text-xs text-white/60">{email}</p>}
          {statusLabel && (
            <span className="mt-2 inline-flex rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-semibold">
              {statusLabel}
            </span>
          )}
        </div>
        {onAction && (
          <button
            onClick={onAction}
            className="rounded-full border border-white/20 px-3 py-1 text-xs font-semibold text-white/90 transition-colors active:bg-white/10"
          >
            {actionLabel}
          </button>
        )}
      </div>
    </div>
  )
}

export default MobileProfileHeader

'use client'

import { cn } from '@/src/lib/utils'

export interface QuickAction {
  id: string
  label: string
  icon: React.ReactNode
  href?: string
  badge?: string
  color?: string
}

interface MobileQuickActionsProps {
  actions: QuickAction[]
  onActionClick?: (action: QuickAction) => void
  className?: string
  variant?: 'grid' | 'horizontal'
}

// Default icons
const OrderIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
)

const RepeatIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="17 1 21 5 17 9" />
    <path d="M3 11V9a4 4 0 0 1 4-4h14" />
    <polyline points="7 23 3 19 7 15" />
    <path d="M21 13v2a4 4 0 0 1-4 4H3" />
  </svg>
)

const FileTextIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
  </svg>
)

const TruckIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 3h15v13H1zM16 8h4l3 3v5h-7V8z" />
    <circle cx="5.5" cy="18.5" r="2.5" />
    <circle cx="18.5" cy="18.5" r="2.5" />
  </svg>
)

export function MobileQuickActions({
  actions,
  onActionClick,
  className,
  variant = 'horizontal',
}: MobileQuickActionsProps) {
  if (variant === 'grid') {
    return (
      <div className={cn('grid grid-cols-4 gap-3 px-4 py-4', className)}>
        {actions.map((action) => (
          <button
            key={action.id}
            onClick={() => onActionClick?.(action)}
            className="flex flex-col items-center gap-2 transition-transform active:scale-95"
          >
            <div
              className="flex h-12 w-12 items-center justify-center rounded-xl"
              style={{
                backgroundColor: action.color ? `${action.color}15` : 'var(--color-primary-50)',
                color: action.color || 'var(--color-primary-500)',
              }}
            >
              {action.icon}
            </div>
            <span className="text-center text-[10px] font-medium text-neutral-600">
              {action.label}
            </span>
          </button>
        ))}
      </div>
    )
  }

  // Horizontal variant
  return (
    <div className={cn('flex gap-3 overflow-x-auto px-4 py-4 scrollbar-hide', className)}>
      {actions.map((action) => (
        <button
          key={action.id}
          onClick={() => onActionClick?.(action)}
          className="relative flex shrink-0 items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-sm transition-transform active:scale-95"
        >
          <div
            className="flex h-10 w-10 items-center justify-center rounded-lg"
            style={{
              backgroundColor: action.color ? `${action.color}15` : 'var(--color-primary-50)',
              color: action.color || 'var(--color-primary-500)',
            }}
          >
            {action.icon}
          </div>
          <span className="text-sm font-medium text-neutral-900">
            {action.label}
          </span>
          {action.badge && (
            <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1.5 text-[10px] font-bold text-white">
              {action.badge}
            </span>
          )}
        </button>
      ))}
    </div>
  )
}

// Default quick actions
export const defaultQuickActions: QuickAction[] = [
  { id: '1', label: 'Narudžbe', icon: <OrderIcon />, color: '#0EA5E9' },
  { id: '2', label: 'Ponovi', icon: <RepeatIcon />, color: '#10B981' },
  { id: '3', label: 'Računi', icon: <FileTextIcon />, color: '#8B5CF6' },
  { id: '4', label: 'Dostava', icon: <TruckIcon />, badge: '2', color: '#F59E0B' },
]

export default MobileQuickActions

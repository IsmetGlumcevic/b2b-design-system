'use client'

import { cn } from '@/src/lib/utils'

export interface TabItem {
  id: string
  label: string
  icon: React.ReactNode
  badge?: number
}

interface MobileTabBarProps {
  items: TabItem[]
  activeTab: string
  onTabChange: (tabId: string) => void
  className?: string
  variant?: 'default' | 'filled' | 'minimal'
}

// Default icons for common tabs
export const HomeIcon = ({ active }: { active?: boolean }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill={active ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth={active ? 0 : 2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" stroke={active ? 'white' : 'currentColor'} strokeWidth="2" />
  </svg>
)

export const CategoriesIcon = ({ active }: { active?: boolean }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill={active ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth={active ? 0 : 2} strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" />
  </svg>
)

export const CartIcon = ({ active }: { active?: boolean }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill={active ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth={active ? 0 : 2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 6h15l-1.5 9h-12z" />
    <circle cx="9" cy="20" r="1" fill="currentColor" />
    <circle cx="18" cy="20" r="1" fill="currentColor" />
    <path d="M6 6L4 2H1" stroke="currentColor" strokeWidth="2" fill="none" />
  </svg>
)

export const FavoritesIcon = ({ active }: { active?: boolean }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill={active ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth={active ? 0 : 2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
)

export const AccountIcon = ({ active }: { active?: boolean }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill={active ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth={active ? 0 : 2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
)

export function MobileTabBar({
  items,
  activeTab,
  onTabChange,
  className,
  variant = 'default',
}: MobileTabBarProps) {
  const variantStyles = {
    default: 'bg-white border-t border-neutral-200',
    filled: 'bg-neutral-900',
    minimal: 'bg-white/80 backdrop-blur-lg border-t border-neutral-100',
  }

  return (
    <nav
      className={cn(
        'flex h-16 items-center justify-around px-2',
        variantStyles[variant],
        className
      )}
    >
      {items.map((item) => {
        const isActive = activeTab === item.id

        return (
          <button
            key={item.id}
            onClick={() => onTabChange(item.id)}
            className={cn(
              'relative flex flex-1 flex-col items-center justify-center gap-1 py-2 transition-colors',
              isActive
                ? 'text-[var(--color-primary-500)]'
                : variant === 'filled'
                  ? 'text-neutral-400'
                  : 'text-neutral-500'
            )}
          >
            <div className="relative">
              {item.icon}
              {item.badge !== undefined && item.badge > 0 && (
                <span className="absolute -right-2 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-bold text-white">
                  {item.badge > 99 ? '99+' : item.badge}
                </span>
              )}
            </div>
            <span
              className={cn(
                'text-[10px] font-medium',
                isActive && 'font-semibold'
              )}
            >
              {item.label}
            </span>
          </button>
        )
      })}
    </nav>
  )
}

// Default tab items for B2B shop
export const defaultTabItems: TabItem[] = [
  { id: 'home', label: 'Početna', icon: <HomeIcon /> },
  { id: 'categories', label: 'Kategorije', icon: <CategoriesIcon /> },
  { id: 'cart', label: 'Košarica', icon: <CartIcon />, badge: 0 },
  { id: 'favorites', label: 'Favoriti', icon: <FavoritesIcon /> },
  { id: 'account', label: 'Profil', icon: <AccountIcon /> },
]

export default MobileTabBar

'use client'

import { useState } from 'react'
import { cn } from '@/src/lib/utils'
import Star01 from '@/src/components/ui/icons/Line/Shapes/Star01'
import Flame from '@/src/components/ui/icons/Line/Weather/Flame'

export interface FilterTab {
  id: string
  label: string
  icon?: 'star' | 'flame'
}

export interface TemuFilterTabsProps {
  tabs?: FilterTab[]
  defaultTab?: string
  onChange?: (tabId: string) => void
  className?: string
}

const defaultTabs: FilterTab[] = [
  { id: 'all', label: 'Sve' },
  { id: 'picks', label: 'Odabiri' },
  { id: '5star', label: '5 zvjezdica', icon: 'star' },
  { id: 'bestseller', label: 'Najprodavaniji artikli', icon: 'flame' },
]

/**
 * TemuFilterTabs - Filter tabovi u Temu stilu
 *
 * Horizontalni scroll tabovi za filtriranje proizvoda
 */
export function TemuFilterTabs({
  tabs = defaultTabs,
  defaultTab = 'all',
  onChange,
  className,
}: TemuFilterTabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab)

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId)
    onChange?.(tabId)
  }

  const renderIcon = (icon?: 'star' | 'flame') => {
    if (icon === 'star') {
      return <Star01 className="w-4 h-4 text-yellow-500 fill-yellow-500" />
    }
    if (icon === 'flame') {
      return <Flame className="w-4 h-4 text-orange-500" />
    }
    return null
  }

  return (
    <div
      className={cn(
        'w-full bg-[var(--color-bg-primary)] border-b border-[var(--color-border-primary)]',
        className
      )}
    >
      <div className="max-w-[var(--container-max-width)] mx-auto">
        {/* Tabs scroll container */}
        <div
          className="flex overflow-x-auto scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={cn(
                'flex items-center gap-1.5 px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors',
                'border-b-2 -mb-px',
                activeTab === tab.id
                  ? 'text-[var(--color-text-primary)] border-[var(--color-text-primary)]'
                  : 'text-[var(--color-text-secondary)] border-transparent hover:text-[var(--color-text-primary)]'
              )}
            >
              {renderIcon(tab.icon)}
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TemuFilterTabs

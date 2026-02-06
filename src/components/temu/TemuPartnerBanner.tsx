'use client'

import Link from 'next/link'
import { cn } from '@/src/lib/utils'
import ChevronRight from '@/src/components/ui/icons/Line/Arrows/ChevronRight'

export interface TemuPartnerBannerProps {
  leftLogo?: string
  rightLogo?: string
  text?: string
  href?: string
  className?: string
}

/**
 * TemuPartnerBanner - Partnership banner u Temu stilu
 *
 * Prikazuje partnerstvo između dva brenda (npr. "TEMU x EXPRESS")
 */
export function TemuPartnerBanner({
  leftLogo = 'SHOP',
  rightLogo = 'EXPRESS',
  text = 'Zajedno za bolju isporuku',
  href = '/isporuka',
  className,
}: TemuPartnerBannerProps) {
  return (
    <Link
      href={href}
      className={cn(
        'block w-full bg-gradient-to-r from-[var(--color-primary-600)] to-[var(--color-primary-500)]',
        'hover:from-[var(--color-primary-700)] hover:to-[var(--color-primary-600)]',
        'transition-all duration-300',
        className
      )}
    >
      <div className="max-w-[var(--container-max-width)] mx-auto px-[var(--container-padding)]">
        <div className="flex items-center justify-between py-3">
          {/* Left - Logos */}
          <div className="flex items-center gap-2">
            {/* Left logo */}
            <span className="text-white font-bold text-lg tracking-tight">
              {leftLogo}
            </span>
            {/* X divider */}
            <span className="text-white/70 font-light text-lg">×</span>
            {/* Right logo with badge style */}
            <div className="flex items-center gap-1 bg-white/20 rounded px-2 py-0.5">
              <span className="text-yellow-300 font-bold text-sm tracking-wider">
                {rightLogo}
              </span>
            </div>
          </div>

          {/* Right - Text and arrow */}
          <div className="flex items-center gap-1 text-white text-sm font-medium">
            <span className="hidden sm:inline">{text}</span>
            <ChevronRight className="w-5 h-5" />
          </div>
        </div>
      </div>
    </Link>
  )
}

export default TemuPartnerBanner

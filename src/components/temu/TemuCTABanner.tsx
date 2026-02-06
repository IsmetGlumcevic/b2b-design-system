'use client'

import Link from 'next/link'
import { cn } from '@/src/lib/utils'
import CheckCircle from '@/src/components/ui/icons/Line/General/CheckCircle'
import ChevronRight from '@/src/components/ui/icons/Line/Arrows/ChevronRight'

export interface TemuCTABannerProps {
  title?: string
  rightText?: string
  rightHref?: string
  className?: string
}

/**
 * TemuCTABanner - Zeleni CTA banner u Temu stilu
 *
 * Prikazuje "Zašto odabrati [shop]?" sa linkom na desnoj strani
 */
export function TemuCTABanner({
  title = 'Zašto odabrati nas?',
  rightText = 'Sigurna privatnost',
  rightHref = '/privatnost',
  className,
}: TemuCTABannerProps) {
  return (
    <div
      className={cn(
        'w-full bg-[var(--color-success-500)]',
        className
      )}
    >
      <div className="max-w-[var(--container-max-width)] mx-auto px-[var(--container-padding)]">
        <div className="flex items-center justify-between py-2.5">
          {/* Left side - CTA */}
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-white" />
            <span className="text-white font-medium text-sm">
              {title}
            </span>
          </div>

          {/* Right side - Link */}
          <Link
            href={rightHref}
            className="flex items-center gap-1 text-white text-sm font-medium hover:underline"
          >
            {rightText}
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default TemuCTABanner

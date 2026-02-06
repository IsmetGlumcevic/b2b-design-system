'use client'

import { cn } from '@/src/lib/utils'
import CheckCircle from '@/src/components/ui/icons/Line/General/CheckCircle'
import Shield01 from '@/src/components/ui/icons/Line/Security/Shield01'

export interface TemuBenefitsBannerProps {
  className?: string
}

/**
 * TemuBenefitsBanner - Banner sa benefitima u Temu stilu
 *
 * Prikazuje "Besplatna dostava" i "Korekcija cijene" informacije
 */
export function TemuBenefitsBanner({ className }: TemuBenefitsBannerProps) {
  return (
    <div
      className={cn(
        'w-full bg-[var(--color-bg-primary)] border-b border-[var(--color-border-primary)]',
        className
      )}
    >
      <div className="max-w-[var(--container-max-width)] mx-auto px-[var(--container-padding)] py-3">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
          {/* Besplatna dostava */}
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-[var(--color-success-500)]" />
            <div>
              <span className="text-[var(--color-success-500)] font-semibold text-sm">
                Besplatna dostava
              </span>
              <span className="text-[var(--color-text-tertiary)] text-xs ml-2">
                Nevjerovatno
              </span>
            </div>
          </div>

          {/* Divider - hidden on mobile */}
          <div className="hidden sm:block w-px h-6 bg-[var(--color-border-primary)]" />

          {/* Korekcija cijene */}
          <div className="flex items-center gap-2">
            <Shield01 className="w-5 h-5 text-[var(--color-secondary-600)]" />
            <div>
              <span className="text-[var(--color-text-primary)] font-semibold text-sm">
                Korekcija cijene
              </span>
              <span className="text-[var(--color-text-tertiary)] text-xs ml-2">
                U roku od 30 dana
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TemuBenefitsBanner

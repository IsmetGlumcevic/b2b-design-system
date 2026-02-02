'use client'

import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/src/lib/utils'
import ChevronRight from '@/src/components/ui/icons/Line/Arrows/ChevronRight'
import type { MegaMenuBrandsProps } from './types'

/**
 * MegaMenuBrands - Brand grid display
 *
 * Shows brands in a responsive grid with optional logos.
 *
 * @example
 * <MegaMenuBrands
 *   brands={brands}
 *   viewAllHref="/brendovi"
 *   viewAllLabel="Svi brendovi"
 * />
 */
export function MegaMenuBrands({
  brands,
  colorScheme = 'light',
  viewAllHref = '/brendovi',
  viewAllLabel = 'Pogledaj sve brendove',
  onClose,
}: MegaMenuBrandsProps) {
  const baseTextColor =
    colorScheme === 'light'
      ? 'text-[var(--color-text-primary)]'
      : 'text-white'

  const secondaryTextColor =
    colorScheme === 'light'
      ? 'text-[var(--color-text-secondary)]'
      : 'text-[var(--color-neutral-300)]'

  const hoverBg =
    colorScheme === 'light'
      ? 'hover:bg-[var(--color-bg-secondary)]'
      : 'hover:bg-[var(--color-secondary-700)]'

  const borderColor =
    colorScheme === 'light'
      ? 'border-[var(--color-border-primary)]'
      : 'border-[var(--color-secondary-600)]'

  const cardBg =
    colorScheme === 'light'
      ? 'bg-[var(--color-bg-secondary)]'
      : 'bg-[var(--color-secondary-700)]'

  return (
    <div className="p-[var(--spacing-6)]">
      {/* Header */}
      <p
        className={cn(
          'mb-[var(--spacing-4)]',
          'text-[var(--font-size-xs)] font-semibold uppercase tracking-wide',
          secondaryTextColor
        )}
      >
        Naši brendovi ({brands.length})
      </p>

      {/* Brands Grid */}
      <div className="grid grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-[var(--spacing-3)]">
        {brands.map((brand) => (
          <Link
            key={brand.id}
            href={`/brend/${brand.slug}`}
            onClick={onClose}
            className={cn(
              'flex flex-col items-center justify-center',
              'p-[var(--spacing-3)]',
              'rounded-[var(--radius-lg)]',
              'transition-all duration-150',
              cardBg,
              'hover:shadow-[var(--shadow-sm)]',
              'hover:scale-105',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-500)]'
            )}
          >
            {brand.logo ? (
              <div className="relative w-16 h-10 mb-[var(--spacing-2)]">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  className="object-contain"
                />
              </div>
            ) : (
              <div
                className={cn(
                  'w-16 h-10 mb-[var(--spacing-2)]',
                  'flex items-center justify-center',
                  'rounded-[var(--radius-md)]',
                  colorScheme === 'light'
                    ? 'bg-[var(--color-bg-tertiary)]'
                    : 'bg-[var(--color-secondary-600)]'
                )}
              >
                <span
                  className={cn(
                    'text-[var(--font-size-xs)] font-bold',
                    secondaryTextColor
                  )}
                >
                  {brand.name.slice(0, 2).toUpperCase()}
                </span>
              </div>
            )}
            <span
              className={cn(
                'text-[var(--font-size-xs)] font-medium text-center',
                'line-clamp-1',
                baseTextColor
              )}
            >
              {brand.name}
            </span>
          </Link>
        ))}
      </div>

      {/* Footer - View all link */}
      <div
        className={cn(
          'mt-[var(--spacing-6)] pt-[var(--spacing-4)]',
          'border-t',
          borderColor
        )}
      >
        <Link
          href={viewAllHref}
          onClick={onClose}
          className={cn(
            'inline-flex items-center gap-[var(--spacing-2)]',
            'text-[var(--font-size-sm)] font-medium',
            'text-[var(--color-primary-500)]',
            'hover:text-[var(--color-primary-600)]',
            'transition-colors duration-150'
          )}
        >
          {viewAllLabel}
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </div>
  )
}

MegaMenuBrands.displayName = 'MegaMenuBrands'

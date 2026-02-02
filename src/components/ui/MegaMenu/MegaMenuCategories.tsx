'use client'

import { useState } from 'react'
import Link from 'next/link'
import { cn } from '@/src/lib/utils'
import ChevronRight from '@/src/components/ui/icons/Line/Arrows/ChevronRight'
import type { Category } from '../layout/header/types'
import type { MegaMenuCategoriesProps } from './types'

/**
 * MegaMenuCategories - 3-level category navigation
 *
 * Layout:
 * ┌─────────────┬─────────────────┬────────────────────┐
 * │ Level 1     │ Level 2         │ Level 3            │
 * │ Kategorije  │ Podkategorije   │ Pod-podkategorije  │
 * └─────────────┴─────────────────┴────────────────────┘
 *
 * @example
 * <MegaMenuCategories
 *   categories={categories}
 *   viewAllHref="/proizvodi"
 *   viewAllLabel="Svi proizvodi"
 * />
 */
export function MegaMenuCategories({
  categories,
  colorScheme = 'light',
  viewAllHref = '/proizvodi',
  viewAllLabel = 'Pogledaj sve proizvode',
  onClose,
}: MegaMenuCategoriesProps) {
  const [activeLevel1, setActiveLevel1] = useState<string | null>(
    categories[0]?.id ?? null
  )
  const [activeLevel2, setActiveLevel2] = useState<string | null>(null)

  // Get current subcategories based on selection
  const level1Categories = categories
  const level2Categories =
    level1Categories.find((c) => c.id === activeLevel1)?.children ?? []
  const level3Categories =
    level2Categories.find((c) => c.id === activeLevel2)?.children ?? []

  // Auto-select first level 2 when level 1 changes
  const handleLevel1Hover = (categoryId: string) => {
    setActiveLevel1(categoryId)
    const children = categories.find((c) => c.id === categoryId)?.children
    setActiveLevel2(children?.[0]?.id ?? null)
  }

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

  const activeBg =
    colorScheme === 'light'
      ? 'bg-[var(--color-bg-secondary)]'
      : 'bg-[var(--color-secondary-700)]'

  const borderColor =
    colorScheme === 'light'
      ? 'border-[var(--color-border-primary)]'
      : 'border-[var(--color-secondary-600)]'

  return (
    <div className="p-[var(--spacing-4)]">
      <div className="grid grid-cols-12 gap-[var(--spacing-4)]">
        {/* Level 1 - Main Categories */}
        <div className={cn('col-span-3 border-r pr-[var(--spacing-4)]', borderColor)}>
          <p
            className={cn(
              'mb-[var(--spacing-2)] px-[var(--spacing-3)]',
              'text-[var(--font-size-xs)] font-semibold uppercase tracking-wide',
              secondaryTextColor
            )}
          >
            Kategorije
          </p>
          <nav className="space-y-[var(--spacing-1)]">
            {level1Categories.map((category) => (
              <button
                key={category.id}
                type="button"
                onMouseEnter={() => handleLevel1Hover(category.id)}
                onFocus={() => handleLevel1Hover(category.id)}
                className={cn(
                  'w-full flex items-center justify-between',
                  'px-[var(--spacing-3)] py-[var(--spacing-2)]',
                  'rounded-[var(--radius-md)]',
                  'text-[var(--font-size-sm)] font-medium text-left',
                  'transition-colors duration-150',
                  baseTextColor,
                  hoverBg,
                  activeLevel1 === category.id && activeBg
                )}
              >
                <span>{category.name}</span>
                {category.children?.length ? (
                  <ChevronRight className="h-4 w-4 opacity-50" aria-hidden="true" />
                ) : null}
              </button>
            ))}
          </nav>
        </div>

        {/* Level 2 - Subcategories */}
        <div className={cn('col-span-4 border-r pr-[var(--spacing-4)]', borderColor)}>
          {level2Categories.length > 0 && (
            <>
              <p
                className={cn(
                  'mb-[var(--spacing-2)] px-[var(--spacing-3)]',
                  'text-[var(--font-size-xs)] font-semibold uppercase tracking-wide',
                  secondaryTextColor
                )}
              >
                Podkategorije
              </p>
              <nav className="space-y-[var(--spacing-1)]">
                {level2Categories.map((category) => (
                  <button
                    key={category.id}
                    type="button"
                    onMouseEnter={() => setActiveLevel2(category.id)}
                    onFocus={() => setActiveLevel2(category.id)}
                    className={cn(
                      'w-full flex items-center justify-between',
                      'px-[var(--spacing-3)] py-[var(--spacing-2)]',
                      'rounded-[var(--radius-md)]',
                      'text-[var(--font-size-sm)] text-left',
                      'transition-colors duration-150',
                      baseTextColor,
                      hoverBg,
                      activeLevel2 === category.id && activeBg
                    )}
                  >
                    <span>{category.name}</span>
                    {category.children?.length ? (
                      <ChevronRight className="h-4 w-4 opacity-50" aria-hidden="true" />
                    ) : null}
                  </button>
                ))}
              </nav>
            </>
          )}
        </div>

        {/* Level 3 - Sub-subcategories */}
        <div className="col-span-5">
          {level3Categories.length > 0 && (
            <>
              <p
                className={cn(
                  'mb-[var(--spacing-2)] px-[var(--spacing-3)]',
                  'text-[var(--font-size-xs)] font-semibold uppercase tracking-wide',
                  secondaryTextColor
                )}
              >
                Proizvodi
              </p>
              <nav className="grid grid-cols-2 gap-x-[var(--spacing-4)] gap-y-[var(--spacing-1)]">
                {level3Categories.map((category) => (
                  <Link
                    key={category.id}
                    href={`/kategorija/${category.slug}`}
                    onClick={onClose}
                    className={cn(
                      'flex items-center',
                      'px-[var(--spacing-3)] py-[var(--spacing-2)]',
                      'rounded-[var(--radius-md)]',
                      'text-[var(--font-size-sm)]',
                      'transition-colors duration-150',
                      baseTextColor,
                      hoverBg
                    )}
                  >
                    <span className="mr-[var(--spacing-2)] text-[var(--color-primary-500)]">
                      •
                    </span>
                    {category.name}
                    {category.productCount !== undefined && (
                      <span className={cn('ml-auto text-[var(--font-size-xs)]', secondaryTextColor)}>
                        ({category.productCount})
                      </span>
                    )}
                  </Link>
                ))}
              </nav>
            </>
          )}

          {/* Empty state when no level 3 */}
          {level3Categories.length === 0 && activeLevel2 && (
            <div
              className={cn(
                'flex items-center justify-center h-32',
                'text-[var(--font-size-sm)]',
                secondaryTextColor
              )}
            >
              Odaberite podkategoriju
            </div>
          )}
        </div>
      </div>

      {/* Footer - View all link */}
      <div
        className={cn(
          'mt-[var(--spacing-4)] pt-[var(--spacing-4)]',
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

MegaMenuCategories.displayName = 'MegaMenuCategories'

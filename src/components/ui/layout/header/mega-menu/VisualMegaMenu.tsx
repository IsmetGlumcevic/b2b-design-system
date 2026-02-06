'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { cn } from '@/src/lib/utils'
import type { VisualMegaMenuProps, VisualSubcategory } from '../types'
import { CategorySidebar } from './CategorySidebar'
import { SubcategoryGrid } from './SubcategoryGrid'
import ChevronDown from '@/src/components/ui/icons/Line/Arrows/ChevronDown'

/**
 * VisualMegaMenu - TEMU-style mega menu with visual category cards
 *
 * Client Component - manages open/hover state
 *
 * Features:
 * - Left sidebar with category list
 * - Right panel with subcategory image grid
 * - Hover-based navigation
 * - Keyboard accessible
 * - Smooth animations
 *
 * @example
 * ```tsx
 * <VisualMegaMenu
 *   categories={categories}
 *   isOpen={isMenuOpen}
 *   onOpenChange={setIsMenuOpen}
 *   triggerLabel="Kategorije"
 * />
 * ```
 */
export function VisualMegaMenu({
  categories,
  isOpen,
  onOpenChange,
  featuredSubcategories,
  promoCard,
  colorScheme = 'light',
  trigger,
  triggerLabel = 'Kategorije',
}: VisualMegaMenuProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(
    categories[0]?.id || null
  )
  const menuRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Get subcategories for active category
  const activeSubcategories = getSubcategoriesForCategory(
    categories,
    activeCategory,
    featuredSubcategories
  )

  // Handle hover with delay
  const handleMouseEnter = useCallback(() => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
    }
    hoverTimeoutRef.current = setTimeout(() => {
      onOpenChange(true)
    }, 100)
  }, [onOpenChange])

  const handleMouseLeave = useCallback(() => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
    }
    hoverTimeoutRef.current = setTimeout(() => {
      onOpenChange(false)
    }, 150)
  }, [onOpenChange])

  // Handle click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        onOpenChange(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, onOpenChange])

  // Handle escape key
  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape' && isOpen) {
        onOpenChange(false)
        triggerRef.current?.focus()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, onOpenChange])

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current)
      }
    }
  }, [])

  // Color scheme styles
  const triggerStyles = {
    light: cn(
      'bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)]',
      'hover:bg-[var(--color-bg-tertiary)]',
      isOpen && 'bg-[var(--color-bg-tertiary)]'
    ),
    dark: cn(
      'bg-[var(--color-secondary-700)] text-[var(--color-text-inverse)]',
      'hover:bg-[var(--color-secondary-600)]',
      isOpen && 'bg-[var(--color-secondary-600)]'
    ),
  }

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Trigger button */}
      {trigger || (
        <button
          ref={triggerRef}
          type="button"
          className={cn(
            'flex items-center gap-2 px-4 py-2 rounded-lg',
            'text-sm font-medium transition-colors',
            triggerStyles[colorScheme]
          )}
          onClick={() => onOpenChange(!isOpen)}
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          <span>{triggerLabel}</span>
          <ChevronDown
            className={cn(
              'w-4 h-4 transition-transform',
              isOpen && 'rotate-180'
            )}
          />
        </button>
      )}

      {/* Mega menu dropdown */}
      {isOpen && (
        <div
          ref={menuRef}
          className={cn(
            'absolute top-full left-0 mt-2 z-50',
            'w-[var(--mega-menu-width)] max-h-[var(--mega-menu-max-height)]',
            'flex rounded-[var(--mega-menu-radius)] overflow-hidden',
            'shadow-[var(--mega-menu-shadow)]',
            'border border-[var(--color-border-primary)]',
            'mega-menu-enter mega-menu-enter-active',
            colorScheme === 'dark'
              ? 'bg-[var(--color-secondary-900)]'
              : 'bg-[var(--mega-menu-bg)]'
          )}
          role="menu"
        >
          {/* Left sidebar */}
          <CategorySidebar
            categories={categories}
            activeCategory={activeCategory ?? undefined}
            onCategoryHover={setActiveCategory}
            colorScheme={colorScheme}
          />

          {/* Right content area */}
          <SubcategoryGrid
            subcategories={activeSubcategories}
            columns={5}
            maxItems={20}
            colorScheme={colorScheme}
          />

          {/* Promo card (optional) */}
          {promoCard && (
            <div className="w-[200px] p-4 border-l border-[var(--color-border-primary)]">
              <a
                href={promoCard.href}
                className="block rounded-lg overflow-hidden hover:opacity-90 transition-opacity"
              >
                <div
                  className={cn(
                    'aspect-[3/4] relative',
                    promoCard.bgColor || 'bg-[var(--color-primary-100)]'
                  )}
                >
                  {/* Promo card image would go here */}
                  <div className="absolute inset-0 p-4 flex flex-col justify-end">
                    {promoCard.badge && (
                      <span className="inline-block self-start px-2 py-1 mb-2 text-xs font-bold bg-[var(--color-primary-500)] text-white rounded">
                        {promoCard.badge}
                      </span>
                    )}
                    <h4 className="text-sm font-bold text-[var(--color-text-primary)]">
                      {promoCard.title}
                    </h4>
                    {promoCard.subtitle && (
                      <p className="text-xs text-[var(--color-text-secondary)] mt-1">
                        {promoCard.subtitle}
                      </p>
                    )}
                  </div>
                </div>
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

/**
 * Get subcategories for the active category
 */
function getSubcategoriesForCategory(
  categories: VisualMegaMenuProps['categories'],
  activeCategoryId: string | null,
  featuredSubcategories?: VisualSubcategory[]
): VisualSubcategory[] {
  // If no active category, return featured or first category's children
  if (!activeCategoryId) {
    if (featuredSubcategories && featuredSubcategories.length > 0) {
      return featuredSubcategories
    }
    const firstCategory = categories[0]
    if (firstCategory?.children) {
      return flattenToVisualSubcategories(firstCategory.children)
    }
    return []
  }

  // Find active category
  const activeCategory = categories.find((cat) => cat.id === activeCategoryId)
  if (!activeCategory?.children) {
    return featuredSubcategories || []
  }

  return flattenToVisualSubcategories(activeCategory.children)
}

/**
 * Flatten nested categories to visual subcategories
 */
function flattenToVisualSubcategories(
  categories: NonNullable<VisualMegaMenuProps['categories'][0]['children']>
): VisualSubcategory[] {
  const result: VisualSubcategory[] = []

  for (const category of categories) {
    result.push({
      id: category.id,
      name: category.name,
      slug: category.slug,
      image: category.image || '',
      badge: 'badge' in category ? (category as any).badge : undefined,
      productCount: category.productCount,
    })

    // Also add children if they exist
    if (category.children) {
      for (const child of category.children) {
        result.push({
          id: child.id,
          name: child.name,
          slug: child.slug,
          image: child.image || '',
          badge: 'badge' in child ? (child as any).badge : undefined,
          productCount: child.productCount,
        })
      }
    }
  }

  return result
}

export default VisualMegaMenu

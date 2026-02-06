import Image from 'next/image'
import { cn } from '@/src/lib/utils'
import type { VisualCategoryCardProps } from '../types'

/**
 * VisualCategoryCard - Category card with image and optional badge
 *
 * Server Component - static display
 *
 * @example
 * ```tsx
 * <VisualCategoryCard
 *   category={{
 *     id: '1',
 *     name: 'Njega kose',
 *     slug: 'njega-kose',
 *     image: '/categories/hair-care.jpg',
 *     badge: { text: 'HOT', variant: 'hot' },
 *   }}
 *   size="md"
 * />
 * ```
 */
export function VisualCategoryCard({
  category,
  size = 'md',
  className,
  ...props
}: VisualCategoryCardProps) {
  // Size styles
  const sizeStyles = {
    sm: {
      card: 'w-[100px]',
      image: 'h-[70px]',
      text: 'text-xs',
    },
    md: {
      card: 'w-[var(--category-card-width)]',
      image: 'h-[var(--category-card-image-height)]',
      text: 'text-sm',
    },
    lg: {
      card: 'w-[180px]',
      image: 'h-[130px]',
      text: 'text-base',
    },
  }

  // Badge variant styles
  const badgeVariantStyles = {
    new: 'bg-[var(--category-badge-new-bg)]',
    sale: 'bg-[var(--category-badge-sale-bg)]',
    hot: 'bg-[var(--category-badge-hot-bg)]',
    limited: 'bg-[var(--color-error-500)]',
    trending: 'bg-[var(--category-badge-trending-bg)]',
  }

  return (
    <a
      href={`/kategorije/${category.slug}`}
      className={cn(
        'group flex flex-col items-center',
        'p-[var(--category-card-padding)]',
        'rounded-[var(--category-card-radius)]',
        'bg-[var(--category-card-bg)]',
        'hover:bg-[var(--category-card-hover-bg)]',
        'transition-all duration-200',
        'category-card-hover',
        sizeStyles[size].card,
        className
      )}
      {...props}
    >
      {/* Image container */}
      <div
        className={cn(
          'relative w-full rounded-lg overflow-hidden mb-2',
          sizeStyles[size].image
        )}
      >
        {category.image ? (
          <Image
            src={category.image}
            alt={category.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100px, 140px"
          />
        ) : (
          <div className="w-full h-full bg-[var(--color-neutral-100)] flex items-center justify-center">
            <span className="text-[var(--color-neutral-400)] text-2xl">
              {category.name.charAt(0)}
            </span>
          </div>
        )}

        {/* Badge */}
        {category.badge && (
          <span
            className={cn(
              'absolute top-1 right-1 px-1.5 py-0.5',
              'text-[10px] font-bold text-white rounded',
              badgeVariantStyles[category.badge.variant]
            )}
          >
            {category.badge.text}
          </span>
        )}
      </div>

      {/* Category name */}
      <span
        className={cn(
          'text-center font-medium text-[var(--color-text-primary)]',
          'line-clamp-2 leading-tight',
          sizeStyles[size].text
        )}
      >
        {category.name}
      </span>

      {/* Product count (optional) */}
      {category.productCount !== undefined && (
        <span className="text-xs text-[var(--color-text-tertiary)] mt-0.5">
          {category.productCount} proizvoda
        </span>
      )}
    </a>
  )
}

export default VisualCategoryCard

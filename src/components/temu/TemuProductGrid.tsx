'use client'

import { cn } from '@/src/lib/utils'
import { TemuProductCard, type TemuProduct } from './TemuProductCard'

export interface TemuProductGridProps {
  products: TemuProduct[]
  columns?: 2 | 3 | 4 | 5
  onAddToCart?: (productId: string) => void
  showLoadMore?: boolean
  loadMoreText?: string
  className?: string
}

/**
 * TemuProductGrid - Grid prikaz proizvoda u Temu stilu
 *
 * Responsivni grid sa 2 kolone na mobilnom, skalira do 5 na desktopu
 */
export function TemuProductGrid({
  products,
  columns = 5,
  onAddToCart,
  showLoadMore = false,
  loadMoreText = 'Pogledaj više',
  className,
}: TemuProductGridProps) {
  const gridColsClass = {
    2: 'grid-cols-2',
    3: 'grid-cols-2 md:grid-cols-3',
    4: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
    5: 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5',
  }

  return (
    <div
      className={cn(
        'w-full bg-[var(--color-bg-secondary)]',
        className
      )}
    >
      <div className="max-w-[var(--container-max-width)] mx-auto px-[var(--container-padding)] py-4">
        <div className={cn('grid gap-2', gridColsClass[columns])}>
          {products.map((product) => (
            <TemuProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>

        {/* Load More Button */}
        {showLoadMore && (
          <div className="flex justify-center mt-6">
            <button
              type="button"
              className={cn(
                'px-8 py-3',
                'bg-[var(--color-bg-primary)] border border-[var(--color-border-primary)]',
                'text-[var(--color-text-primary)] font-medium text-sm',
                'hover:bg-[var(--color-bg-tertiary)] transition-colors'
              )}
            >
              {loadMoreText}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default TemuProductGrid

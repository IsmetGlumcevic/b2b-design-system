import Link from 'next/link'
import { cn } from '@/src/lib/utils'

export interface CategoryItem {
  id: string
  name: string
  slug: string
  description?: string
  icon?: React.ReactNode
  image?: string
  productCount?: number
  featured?: boolean
}

export interface CategoryGridProps {
  /** Lista kategorija za prikaz */
  categories: CategoryItem[]
  /** Naslov sekcije */
  title?: string
  /** Podnaslov sekcije */
  subtitle?: string
  /** Broj kolona (responzivno) */
  columns?: 2 | 3 | 4 | 5 | 6
  /** Varijanta prikaza */
  variant?: 'card' | 'minimal' | 'image'
  /** Dodatne CSS klase */
  className?: string
  /** Click handler za kategoriju */
  onCategoryClick?: (category: CategoryItem) => void
}

const columnClasses = {
  2: 'grid-cols-1 sm:grid-cols-2',
  3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4',
  5: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-5',
  6: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-6',
}

function CategoryCard({ category, variant }: { category: CategoryItem; variant: 'card' | 'minimal' | 'image' }) {
  if (variant === 'image') {
    return (
      <Link
        href={`/kategorije/${category.slug}`}
        className={cn(
          'group relative flex min-h-[200px] flex-col justify-end overflow-hidden rounded-[var(--radius-card)] bg-cover bg-center p-6 transition-all duration-300',
          'hover:shadow-lg hover:ring-2 hover:ring-[var(--color-primary-500)]',
          category.featured && 'sm:col-span-2 sm:row-span-2 min-h-[300px]'
        )}
        style={category.image ? { backgroundImage: `url(${category.image})` } : undefined}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-all group-hover:from-black/90" />
        <div className="relative z-10">
          <h3 className="mb-1 text-lg font-semibold text-white sm:text-xl">{category.name}</h3>
          {category.productCount !== undefined && (
            <p className="text-sm text-[var(--color-neutral-300)]">
              {category.productCount} proizvoda
            </p>
          )}
        </div>
      </Link>
    )
  }

  if (variant === 'minimal') {
    return (
      <Link
        href={`/kategorije/${category.slug}`}
        className={cn(
          'group flex items-center gap-4 rounded-[var(--radius-card)] border border-[var(--color-border-primary)] bg-[var(--color-bg-primary)] p-4 transition-all',
          'hover:border-[var(--color-primary-500)] hover:bg-[var(--color-bg-elevated)] hover:shadow-md'
        )}
      >
        {category.icon && (
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[var(--radius-lg)] bg-[var(--color-primary-50)] text-[var(--color-primary-500)] transition-colors group-hover:bg-[var(--color-primary-100)]">
            {category.icon}
          </div>
        )}
        <div className="min-w-0 flex-1">
          <h3 className="truncate font-medium text-[var(--color-text-primary)] group-hover:text-[var(--color-primary-500)]">
            {category.name}
          </h3>
          {category.productCount !== undefined && (
            <p className="text-sm text-[var(--color-text-tertiary)]">
              {category.productCount} proizvoda
            </p>
          )}
        </div>
      </Link>
    )
  }

  // Default: card variant
  return (
    <Link
      href={`/kategorije/${category.slug}`}
      className={cn(
        'group flex flex-col items-center rounded-[var(--radius-card)] border border-[var(--color-border-primary)] bg-[var(--color-bg-primary)] p-6 text-center transition-all',
        'hover:border-[var(--color-primary-500)] hover:bg-[var(--color-bg-elevated)] hover:shadow-lg'
      )}
    >
      {category.icon && (
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-primary-50)] text-[var(--color-primary-500)] transition-all group-hover:scale-110 group-hover:bg-[var(--color-primary-100)]">
          {category.icon}
        </div>
      )}
      <h3 className="mb-1 font-semibold text-[var(--color-text-primary)] group-hover:text-[var(--color-primary-500)]">
        {category.name}
      </h3>
      {category.description && (
        <p className="mb-2 text-sm text-[var(--color-text-secondary)] line-clamp-2">
          {category.description}
        </p>
      )}
      {category.productCount !== undefined && (
        <p className="text-sm text-[var(--color-text-tertiary)]">
          {category.productCount} proizvoda
        </p>
      )}
    </Link>
  )
}

export function CategoryGrid({
  categories,
  title,
  subtitle,
  columns = 4,
  variant = 'card',
  className,
}: CategoryGridProps) {
  return (
    <section className={cn('py-12 sm:py-16', className)}>
      <div className="mx-auto max-w-7xl px-[var(--spacing-container-padding)]">
        {/* Header */}
        {(title || subtitle) && (
          <div className="mb-8 sm:mb-12">
            {title && (
              <h2 className="mb-2 text-2xl font-bold text-[var(--color-text-primary)] sm:text-3xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-[var(--color-text-secondary)]">{subtitle}</p>
            )}
          </div>
        )}

        {/* Grid */}
        <div className={cn('grid gap-4 sm:gap-6', columnClasses[columns])}>
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} variant={variant} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategoryGrid

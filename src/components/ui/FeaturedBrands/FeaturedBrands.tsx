import Link from 'next/link'
import { cn } from '@/src/lib/utils'

export interface BrandItem {
  id: string
  name: string
  slug: string
  logo?: string
  description?: string
  productCount?: number
}

export interface FeaturedBrandsProps {
  /** Lista brendova */
  brands: BrandItem[]
  /** Naslov sekcije */
  title?: string
  /** Podnaslov sekcije */
  subtitle?: string
  /** Varijanta prikaza */
  variant?: 'grid' | 'carousel' | 'list'
  /** Pozadina */
  background?: 'light' | 'dark' | 'muted'
  /** Link za prikaz svih brendova */
  viewAllHref?: string
  /** Dodatne CSS klase */
  className?: string
}

const backgroundClasses = {
  light: 'bg-[var(--color-bg-primary)]',
  dark: 'bg-[var(--color-secondary-900)]',
  muted: 'bg-[var(--color-bg-secondary)]',
}

function BrandCard({ brand, darkMode }: { brand: BrandItem; darkMode?: boolean }) {
  return (
    <Link
      href={`/brendovi/${brand.slug}`}
      className={cn(
        'group flex flex-col items-center justify-center rounded-[var(--radius-card)] border p-6 transition-all',
        darkMode
          ? 'border-[var(--color-neutral-700)] bg-[var(--color-neutral-800)] hover:border-[var(--color-primary-500)] hover:bg-[var(--color-neutral-700)]'
          : 'border-[var(--color-border-primary)] bg-[var(--color-bg-primary)] hover:border-[var(--color-primary-500)] hover:shadow-lg'
      )}
    >
      {brand.logo ? (
        <div className="mb-3 flex h-16 w-full items-center justify-center">
          <img
            src={brand.logo}
            alt={brand.name}
            className="max-h-full max-w-full object-contain grayscale transition-all group-hover:grayscale-0"
          />
        </div>
      ) : (
        <div className={cn(
          'mb-3 flex h-16 w-full items-center justify-center text-xl font-bold',
          darkMode ? 'text-[var(--color-neutral-300)]' : 'text-[var(--color-text-secondary)]'
        )}>
          {brand.name}
        </div>
      )}
      <span className={cn(
        'text-sm font-medium transition-colors',
        darkMode
          ? 'text-[var(--color-neutral-400)] group-hover:text-white'
          : 'text-[var(--color-text-tertiary)] group-hover:text-[var(--color-primary-500)]'
      )}>
        {brand.name}
      </span>
      {brand.productCount !== undefined && (
        <span className={cn(
          'mt-1 text-xs',
          darkMode ? 'text-[var(--color-neutral-500)]' : 'text-[var(--color-text-tertiary)]'
        )}>
          {brand.productCount} proizvoda
        </span>
      )}
    </Link>
  )
}

export function FeaturedBrands({
  brands,
  title,
  subtitle,
  variant = 'grid',
  background = 'light',
  viewAllHref,
  className,
}: FeaturedBrandsProps) {
  const isDark = background === 'dark'

  return (
    <section className={cn('py-12 sm:py-16', backgroundClasses[background], className)}>
      <div className="mx-auto max-w-7xl px-[var(--spacing-container-padding)]">
        {/* Header */}
        <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:mb-12 sm:flex-row sm:items-center">
          <div>
            {title && (
              <h2 className={cn(
                'mb-2 text-2xl font-bold sm:text-3xl',
                isDark ? 'text-white' : 'text-[var(--color-text-primary)]'
              )}>
                {title}
              </h2>
            )}
            {subtitle && (
              <p className={cn(
                isDark ? 'text-[var(--color-neutral-400)]' : 'text-[var(--color-text-secondary)]'
              )}>
                {subtitle}
              </p>
            )}
          </div>
          {viewAllHref && (
            <Link
              href={viewAllHref}
              className={cn(
                'text-sm font-medium transition-colors',
                isDark
                  ? 'text-[var(--color-primary-400)] hover:text-[var(--color-primary-300)]'
                  : 'text-[var(--color-primary-500)] hover:text-[var(--color-primary-600)]'
              )}
            >
              Pogledaj sve brendove &rarr;
            </Link>
          )}
        </div>

        {/* Grid */}
        {variant === 'grid' && (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {brands.map((brand) => (
              <BrandCard key={brand.id} brand={brand} darkMode={isDark} />
            ))}
          </div>
        )}

        {/* List variant */}
        {variant === 'list' && (
          <div className="flex flex-wrap items-center justify-center gap-8">
            {brands.map((brand) => (
              <Link
                key={brand.id}
                href={`/brendovi/${brand.slug}`}
                className="group"
              >
                {brand.logo ? (
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="h-12 w-auto object-contain grayscale transition-all hover:grayscale-0"
                  />
                ) : (
                  <span className={cn(
                    'text-xl font-bold transition-colors',
                    isDark
                      ? 'text-[var(--color-neutral-400)] group-hover:text-white'
                      : 'text-[var(--color-text-tertiary)] group-hover:text-[var(--color-text-primary)]'
                  )}>
                    {brand.name}
                  </span>
                )}
              </Link>
            ))}
          </div>
        )}

        {/* Carousel variant - simplified horizontal scroll */}
        {variant === 'carousel' && (
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {brands.map((brand) => (
              <div key={brand.id} className="w-40 shrink-0">
                <BrandCard brand={brand} darkMode={isDark} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default FeaturedBrands

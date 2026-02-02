import { cn } from '@/src/lib/utils'

export interface BenefitItem {
  id: string
  title: string
  description: string
  icon: React.ReactNode
}

export interface BenefitsSectionProps {
  /** Lista prednosti */
  benefits: BenefitItem[]
  /** Naslov sekcije */
  title?: string
  /** Podnaslov sekcije */
  subtitle?: string
  /** Layout varijanta */
  layout?: 'grid' | 'horizontal' | 'vertical'
  /** Broj kolona za grid */
  columns?: 2 | 3 | 4 | 6
  /** Pozadina */
  background?: 'light' | 'dark' | 'muted' | 'primary'
  /** Dodatne CSS klase */
  className?: string
}

const backgroundClasses = {
  light: 'bg-[var(--color-bg-primary)]',
  dark: 'bg-[var(--color-secondary-900)]',
  muted: 'bg-[var(--color-bg-secondary)]',
  primary: 'bg-[var(--color-primary-500)]',
}

const columnClasses = {
  2: 'grid-cols-1 sm:grid-cols-2',
  3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  6: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-6',
}

function BenefitCard({
  benefit,
  isDark,
  layout,
}: {
  benefit: BenefitItem
  isDark: boolean
  layout: 'grid' | 'horizontal' | 'vertical'
}) {
  if (layout === 'horizontal') {
    return (
      <div className="flex items-start gap-4">
        <div className={cn(
          'flex h-12 w-12 shrink-0 items-center justify-center rounded-[var(--radius-lg)]',
          isDark
            ? 'bg-[var(--color-neutral-800)] text-[var(--color-primary-400)]'
            : 'bg-[var(--color-primary-50)] text-[var(--color-primary-500)]'
        )}>
          {benefit.icon}
        </div>
        <div>
          <h3 className={cn(
            'mb-1 font-semibold',
            isDark ? 'text-white' : 'text-[var(--color-text-primary)]'
          )}>
            {benefit.title}
          </h3>
          <p className={cn(
            'text-sm',
            isDark ? 'text-[var(--color-neutral-400)]' : 'text-[var(--color-text-secondary)]'
          )}>
            {benefit.description}
          </p>
        </div>
      </div>
    )
  }

  // Default: vertical/grid layout
  return (
    <div className={cn(
      'flex flex-col items-center rounded-[var(--radius-card)] p-6 text-center transition-all',
      isDark
        ? 'bg-[var(--color-neutral-800)]/50 hover:bg-[var(--color-neutral-800)]'
        : 'bg-[var(--color-bg-elevated)] hover:shadow-lg'
    )}>
      <div className={cn(
        'mb-4 flex h-14 w-14 items-center justify-center rounded-full',
        isDark
          ? 'bg-[var(--color-neutral-700)] text-[var(--color-primary-400)]'
          : 'bg-[var(--color-primary-50)] text-[var(--color-primary-500)]'
      )}>
        {benefit.icon}
      </div>
      <h3 className={cn(
        'mb-2 font-semibold',
        isDark ? 'text-white' : 'text-[var(--color-text-primary)]'
      )}>
        {benefit.title}
      </h3>
      <p className={cn(
        'text-sm',
        isDark ? 'text-[var(--color-neutral-400)]' : 'text-[var(--color-text-secondary)]'
      )}>
        {benefit.description}
      </p>
    </div>
  )
}

export function BenefitsSection({
  benefits,
  title,
  subtitle,
  layout = 'grid',
  columns = 4,
  background = 'muted',
  className,
}: BenefitsSectionProps) {
  const isDark = background === 'dark' || background === 'primary'

  return (
    <section className={cn('py-12 sm:py-16', backgroundClasses[background], className)}>
      <div className="mx-auto max-w-7xl px-[var(--spacing-container-padding)]">
        {/* Header */}
        {(title || subtitle) && (
          <div className="mb-8 text-center sm:mb-12">
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
                'mx-auto max-w-2xl',
                isDark ? 'text-[var(--color-neutral-300)]' : 'text-[var(--color-text-secondary)]'
              )}>
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* Benefits */}
        {layout === 'horizontal' ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div key={benefit.id}>
                <BenefitCard benefit={benefit} isDark={isDark} layout={layout} />
              </div>
            ))}
          </div>
        ) : (
          <div className={cn('grid gap-6', columnClasses[columns])}>
            {benefits.map((benefit) => (
              <BenefitCard key={benefit.id} benefit={benefit} isDark={isDark} layout={layout} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default BenefitsSection

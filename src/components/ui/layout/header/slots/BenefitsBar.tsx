import { cn } from '@/src/lib/utils'
import type { BenefitsBarProps } from '../types'

/**
 * BenefitsBar - Static benefits/USP display bar
 *
 * Server Component - no interactivity needed
 *
 * @example
 * ```tsx
 * <BenefitsBar
 *   benefits={[
 *     { id: '1', icon: <Truck />, title: 'Besplatna dostava', subtitle: 'Preko 100 KM' },
 *     { id: '2', icon: <Shield />, title: 'Sigurna kupovina' },
 *   ]}
 * />
 * ```
 */
export function BenefitsBar({
  benefits,
  colorScheme = 'light',
  variant = 'spaced',
  className,
  ...props
}: BenefitsBarProps) {
  // Color scheme styles
  const colorStyles = {
    light: 'bg-[var(--benefits-bar-bg)] text-[var(--benefits-bar-text)]',
    dark: 'bg-[var(--color-secondary-800)] text-[var(--color-text-inverse)]',
  }

  // Variant styles
  const variantStyles = {
    inline: 'justify-center gap-6',
    spaced: 'justify-around',
  }

  return (
    <div
      className={cn(
        'h-[var(--benefits-bar-height)] border-b border-[var(--color-border-primary)]',
        colorStyles[colorScheme],
        className
      )}
      {...props}
    >
      <div
        className={cn(
          'h-full max-w-7xl mx-auto px-4 flex items-center',
          variantStyles[variant]
        )}
      >
        {benefits.map((benefit) => (
          <BenefitItem
            key={benefit.id}
            benefit={benefit}
            colorScheme={colorScheme}
          />
        ))}
      </div>
    </div>
  )
}

/**
 * Individual benefit item
 */
function BenefitItem({
  benefit,
  colorScheme,
}: {
  benefit: BenefitsBarProps['benefits'][0]
  colorScheme: 'light' | 'dark'
}) {
  const content = (
    <div className="flex items-center gap-2">
      {benefit.icon && (
        <span
          className={cn(
            'flex-shrink-0 w-5 h-5',
            colorScheme === 'dark'
              ? 'text-[var(--color-primary-400)]'
              : 'text-[var(--color-primary-500)]'
          )}
        >
          {benefit.icon}
        </span>
      )}
      <div className="flex flex-col">
        <span className="text-sm font-medium leading-tight">{benefit.title}</span>
        {benefit.subtitle && (
          <span
            className={cn(
              'text-xs leading-tight',
              colorScheme === 'dark'
                ? 'text-[var(--color-neutral-400)]'
                : 'text-[var(--color-text-tertiary)]'
            )}
          >
            {benefit.subtitle}
          </span>
        )}
      </div>
    </div>
  )

  if (benefit.href) {
    return (
      <a
        href={benefit.href}
        className="hover:opacity-80 transition-opacity"
      >
        {content}
      </a>
    )
  }

  return content
}

export default BenefitsBar

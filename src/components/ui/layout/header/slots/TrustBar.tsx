import { cn } from '@/src/lib/utils'
import type { TrustBarProps } from '../types'

/**
 * TrustBar - Trust badges display bar (below header)
 *
 * Server Component - no interactivity needed
 *
 * @example
 * ```tsx
 * <TrustBar
 *   badges={[
 *     { id: '1', icon: <Lock />, label: 'Sigurna privatnost' },
 *     { id: '2', icon: <CreditCard />, label: 'Sigurno plaćanje' },
 *     { id: '3', icon: <Truck />, label: 'Garancija isporuke' },
 *   ]}
 *   showSeparator
 * />
 * ```
 */
export function TrustBar({
  badges,
  colorScheme = 'light',
  showSeparator = true,
  className,
  ...props
}: TrustBarProps) {
  // Color scheme styles
  const colorStyles = {
    light: 'bg-[var(--trust-bar-bg)] text-[var(--trust-bar-text)]',
    dark: 'bg-[var(--color-secondary-900)] text-[var(--color-text-inverse)]',
  }

  return (
    <div
      className={cn(
        'h-[var(--trust-bar-height)] border-b border-[var(--color-border-primary)]',
        colorStyles[colorScheme],
        className
      )}
      {...props}
    >
      <div className="h-full max-w-7xl mx-auto px-4 flex items-center justify-center">
        <div className="flex items-center gap-[var(--trust-badge-gap)]">
          {badges.map((badge, index) => (
            <div key={badge.id} className="flex items-center gap-[var(--trust-badge-gap)]">
              <TrustBadgeItem badge={badge} colorScheme={colorScheme} />
              {showSeparator && index < badges.length - 1 && (
                <span
                  className={cn(
                    'w-px h-4',
                    colorScheme === 'dark'
                      ? 'bg-[var(--color-neutral-600)]'
                      : 'bg-[var(--color-border-secondary)]'
                  )}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/**
 * Individual trust badge item
 */
function TrustBadgeItem({
  badge,
  colorScheme,
}: {
  badge: TrustBarProps['badges'][0]
  colorScheme: 'light' | 'dark'
}) {
  const content = (
    <div className="flex items-center gap-2">
      <span
        className={cn(
          'flex-shrink-0 w-4 h-4',
          colorScheme === 'dark'
            ? 'text-[var(--color-success-500)]'
            : 'text-[var(--color-success-600)]'
        )}
      >
        {badge.icon}
      </span>
      <span className="text-sm font-medium">{badge.label}</span>
    </div>
  )

  if (badge.href) {
    return (
      <a
        href={badge.href}
        className="hover:underline transition-opacity hover:opacity-80"
      >
        {content}
      </a>
    )
  }

  return content
}

export default TrustBar

import { cn } from '@/src/lib/utils'
import type { QuickLinksRowProps } from '../types'

/**
 * QuickLinksRow - Quick navigation links row
 *
 * Server Component - static links
 *
 * @example
 * ```tsx
 * <QuickLinksRow
 *   links={[
 *     { id: '1', label: 'Najprodavanije', href: '/bestsellers', icon: <Fire /> },
 *     { id: '2', label: '5 zvjezdica', href: '/top-rated', badge: '5★' },
 *     { id: '3', label: 'Novo', href: '/new', badge: 'Novo', badgeVariant: 'success' },
 *   ]}
 * />
 * ```
 */
export function QuickLinksRow({
  links,
  colorScheme = 'light',
  className,
  ...props
}: QuickLinksRowProps) {
  // Color scheme styles
  const colorStyles = {
    light: 'text-[var(--color-text-primary)]',
    dark: 'text-[var(--color-text-inverse)]',
  }

  // Badge variant styles
  const badgeVariantStyles = {
    primary: 'bg-[var(--color-primary-500)] text-white',
    secondary: 'bg-[var(--color-secondary-500)] text-white',
    success: 'bg-[var(--color-success-500)] text-white',
    warning: 'bg-[var(--color-warning-500)] text-white',
  }

  return (
    <nav
      className={cn(
        'flex items-center gap-[var(--quick-links-gap)]',
        colorStyles[colorScheme],
        className
      )}
      {...props}
    >
      {links.map((link) => (
        <a
          key={link.id}
          href={link.href}
          className={cn(
            'flex items-center gap-1.5 text-sm font-medium',
            'hover:text-[var(--color-primary-500)] transition-colors',
            colorScheme === 'dark' && 'hover:text-[var(--color-primary-400)]'
          )}
        >
          {link.icon && (
            <span className="flex-shrink-0 w-4 h-4">{link.icon}</span>
          )}
          <span>{link.label}</span>
          {link.badge && (
            <span
              className={cn(
                'px-1.5 py-0.5 text-xs font-bold rounded',
                link.badgeVariant
                  ? badgeVariantStyles[link.badgeVariant]
                  : 'bg-[var(--color-neutral-200)] text-[var(--color-neutral-700)]'
              )}
            >
              {link.badge}
            </span>
          )}
        </a>
      ))}
    </nav>
  )
}

export default QuickLinksRow

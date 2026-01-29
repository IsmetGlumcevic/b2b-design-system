import { forwardRef } from 'react'
import { cn } from '@/src/lib/utils'
import type { FooterColumnProps } from './types'

/**
 * FooterColumn - Column container with title (Server Component)
 *
 * @example
 * <FooterColumn title="Informacije">
 *   <FooterLinks links={links} />
 * </FooterColumn>
 */
export const FooterColumn = forwardRef<HTMLDivElement, FooterColumnProps>(
  ({ title, colorScheme = 'dark', className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('flex flex-col', className)} {...props}>
        <h3
          className={cn(
            'text-[var(--font-size-sm)]',
            'font-[var(--font-weight-semibold)]',
            'uppercase tracking-[var(--letter-spacing-wider)]',
            'mb-[var(--spacing-4)]',
            colorScheme === 'dark' && 'text-[var(--footer-text-heading)]',
            colorScheme === 'light' && 'text-[var(--color-text-primary)]'
          )}
        >
          {title}
        </h3>
        {children}
      </div>
    )
  }
)

FooterColumn.displayName = 'FooterColumn'

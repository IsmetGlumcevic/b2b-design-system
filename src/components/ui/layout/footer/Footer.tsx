import { forwardRef } from 'react'
import { cn } from '@/src/lib/utils'
import type { FooterProps } from './types'

/**
 * Footer - Main footer wrapper component (Server Component)
 *
 * @example
 * <Footer variant="dark">
 *   <FooterColumn title="Informacije">
 *     <FooterLinks links={infoLinks} />
 *   </FooterColumn>
 *   <FooterBottom copyright="© 2024 Aleta" />
 * </Footer>
 */
export const Footer = forwardRef<HTMLElement, FooterProps>(
  ({ variant = 'dark', className, children, ...props }, ref) => {
    return (
      <footer
        ref={ref}
        role="contentinfo"
        className={cn(
          // Base styles
          'w-full',
          // Variant styles
          variant === 'dark' && [
            'bg-[var(--footer-bg)]',
            'text-[var(--footer-text)]',
          ],
          variant === 'light' && [
            'bg-[var(--color-bg-secondary)]',
            'text-[var(--color-text-primary)]',
            'border-t border-[var(--color-border-primary)]',
          ],
          className
        )}
        {...props}
      >
        {/* Main footer content */}
        <div
          className={cn(
            'py-[var(--footer-padding-y-mobile)] md:py-[var(--footer-padding-y)]',
            'px-[var(--spacing-container-padding)]',
            'mx-auto max-w-[var(--container-max-width,1440px)]'
          )}
        >
          {children}
        </div>
      </footer>
    )
  }
)

Footer.displayName = 'Footer'

import { forwardRef } from 'react'
import Link from 'next/link'
import { cn } from '@/src/lib/utils'
import type { FooterLinksProps } from './types'

/**
 * FooterLinks - List of footer links (Server Component)
 *
 * @example
 * <FooterLinks
 *   links={[
 *     { label: 'O nama', href: '/o-nama' },
 *     { label: 'Kontakt', href: '/kontakt' },
 *   ]}
 * />
 */
export const FooterLinks = forwardRef<HTMLUListElement, FooterLinksProps>(
  ({ links, colorScheme = 'dark', size = 'md', className, ...props }, ref) => {
    return (
      <ul
        ref={ref}
        className={cn('flex flex-col gap-[var(--spacing-3)]', className)}
        {...props}
      >
        {links.map((link, index) => {
          const linkClasses = cn(
            'transition-[var(--transition-fast)]',
            size === 'sm' && 'text-[var(--font-size-xs)]',
            size === 'md' && 'text-[var(--font-size-sm)]',
            colorScheme === 'dark' && [
              'text-[var(--footer-text)]',
              'hover:text-[var(--footer-link-hover)]',
            ],
            colorScheme === 'light' && [
              'text-[var(--color-text-secondary)]',
              'hover:text-[var(--color-text-primary)]',
            ]
          )

          return (
            <li key={index}>
              {link.external ? (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClasses}
                >
                  {link.label}
                </a>
              ) : (
                <Link href={link.href} className={linkClasses}>
                  {link.label}
                </Link>
              )}
            </li>
          )
        })}
      </ul>
    )
  }
)

FooterLinks.displayName = 'FooterLinks'

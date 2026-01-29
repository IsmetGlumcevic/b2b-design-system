import { forwardRef } from 'react'
import Link from 'next/link'
import { cn } from '@/src/lib/utils'
import type { FooterBottomProps } from './types'

/**
 * FooterBottom - Bottom bar with copyright and legal links (Server Component)
 *
 * @example
 * <FooterBottom
 *   copyright="© 2024 Aleta d.o.o. Sva prava zadržana."
 *   legalLinks={[
 *     { label: 'Politika privatnosti', href: '/privatnost' },
 *     { label: 'Uvjeti korištenja', href: '/uvjeti' },
 *   ]}
 * />
 */
export const FooterBottom = forwardRef<HTMLDivElement, FooterBottomProps>(
  (
    { copyright, legalLinks, colorScheme = 'dark', className, ...props },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          'py-[var(--footer-bottom-padding-y)]',
          'border-t',
          colorScheme === 'dark' && 'border-[var(--footer-border)]',
          colorScheme === 'light' && 'border-[var(--color-border-primary)]',
          className
        )}
        {...props}
      >
        <div
          className={cn(
            'flex flex-col md:flex-row',
            'items-center justify-between',
            'gap-[var(--spacing-4)]'
          )}
        >
          {/* Copyright */}
          <p
            className={cn(
              'text-[var(--font-size-sm)]',
              colorScheme === 'dark' && 'text-[var(--footer-text-secondary)]',
              colorScheme === 'light' && 'text-[var(--color-text-tertiary)]'
            )}
          >
            {copyright}
          </p>

          {/* Legal links */}
          {legalLinks && legalLinks.length > 0 && (
            <nav aria-label="Pravne informacije">
              <ul className="flex flex-wrap items-center gap-[var(--spacing-6)]">
                {legalLinks.map((link, index) => (
                  <li key={index}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          'text-[var(--font-size-sm)]',
                          'transition-[var(--transition-fast)]',
                          colorScheme === 'dark' && [
                            'text-[var(--footer-text-secondary)]',
                            'hover:text-[var(--footer-link-hover)]',
                          ],
                          colorScheme === 'light' && [
                            'text-[var(--color-text-tertiary)]',
                            'hover:text-[var(--color-text-primary)]',
                          ]
                        )}
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className={cn(
                          'text-[var(--font-size-sm)]',
                          'transition-[var(--transition-fast)]',
                          colorScheme === 'dark' && [
                            'text-[var(--footer-text-secondary)]',
                            'hover:text-[var(--footer-link-hover)]',
                          ],
                          colorScheme === 'light' && [
                            'text-[var(--color-text-tertiary)]',
                            'hover:text-[var(--color-text-primary)]',
                          ]
                        )}
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </div>
    )
  }
)

FooterBottom.displayName = 'FooterBottom'

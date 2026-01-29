import { forwardRef } from 'react'
import Link from 'next/link'
import { cn } from '@/src/lib/utils'
import type { FooterBrandProps } from './types'

/**
 * FooterBrand - Logo/brand section with tagline (Server Component)
 *
 * @example
 * <FooterBrand
 *   name="ELEKTROMATERIJAL.net"
 *   tagline="#elektromaterijal #sve #odmah"
 *   description="Vaš partner za sve električne komponente."
 *   href="/"
 * />
 */
export const FooterBrand = forwardRef<HTMLDivElement, FooterBrandProps>(
  (
    {
      name,
      tagline,
      description,
      href = '/',
      colorScheme = 'dark',
      className,
      ...props
    },
    ref
  ) => {
    const brandContent = (
      <>
        <span
          className={cn(
            'text-[var(--font-size-xl)] sm:text-[var(--font-size-2xl)]',
            'font-[var(--font-weight-bold)]',
            'tracking-[var(--letter-spacing-tight)]',
            colorScheme === 'dark' && 'text-[var(--footer-text-heading)]',
            colorScheme === 'light' && 'text-[var(--color-text-primary)]'
          )}
        >
          {name}
        </span>
        {tagline && (
          <span
            className={cn(
              'block',
              'mt-[var(--spacing-1)]',
              'text-[var(--font-size-sm)]',
              'font-[var(--font-weight-medium)]',
              colorScheme === 'dark' && 'text-[var(--color-primary-500)]',
              colorScheme === 'light' && 'text-[var(--color-primary-600)]'
            )}
          >
            {tagline}
          </span>
        )}
      </>
    )

    return (
      <div ref={ref} className={cn('flex flex-col', className)} {...props}>
        {href ? (
          <Link
            href={href}
            className={cn(
              'inline-block',
              'transition-[var(--transition-fast)]',
              'hover:opacity-80'
            )}
          >
            {brandContent}
          </Link>
        ) : (
          <div>{brandContent}</div>
        )}

        {description && (
          <p
            className={cn(
              'mt-[var(--spacing-4)]',
              'text-[var(--font-size-sm)]',
              'max-w-[280px]',
              'leading-relaxed',
              colorScheme === 'dark' && 'text-[var(--footer-text)]',
              colorScheme === 'light' && 'text-[var(--color-text-secondary)]'
            )}
          >
            {description}
          </p>
        )}
      </div>
    )
  }
)

FooterBrand.displayName = 'FooterBrand'

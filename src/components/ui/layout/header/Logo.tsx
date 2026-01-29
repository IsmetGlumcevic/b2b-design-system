import { forwardRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/src/lib/utils'
import type { LogoProps } from './types'

/**
 * Logo - Logo with link to homepage (Server Component)
 *
 * Supports both image-based and text-based logos.
 *
 * @example
 * // Image logo
 * <Logo src="/logo.svg" alt="Shop Name" />
 *
 * // Text logo with tagline
 * <Logo alt="ELEKTROMATERIJAL.net" tagline="#elektromaterijal #sve #odmah" variant="dark" />
 */
export const Logo = forwardRef<HTMLAnchorElement, LogoProps>(
  (
    {
      src,
      alt,
      href = '/',
      width = 140,
      height = 40,
      tagline,
      variant = 'light',
      className,
      ...props
    },
    ref
  ) => {
    // Text-based logo (when no src provided)
    if (!src) {
      return (
        <Link
          ref={ref}
          href={href}
          className={cn(
            'flex flex-col justify-center',
            'shrink-0',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-500)] focus-visible:ring-offset-2',
            'rounded-[var(--radius-sm)]',
            className
          )}
          {...props}
        >
          <span
            className={cn(
              'text-lg sm:text-xl font-bold tracking-tight leading-none',
              variant === 'light'
                ? 'text-[var(--color-text-primary)]'
                : 'text-white'
            )}
          >
            {alt.includes('.') ? (
              <>
                <span>{alt.split('.')[0]}</span>
                <span className="text-[var(--color-primary-500)]">.{alt.split('.')[1]}</span>
              </>
            ) : (
              alt
            )}
          </span>
          {tagline && (
            <span
              className={cn(
                'text-[10px] sm:text-xs font-medium tracking-wide mt-0.5',
                variant === 'light'
                  ? 'text-[var(--color-text-tertiary)]'
                  : 'text-[var(--color-neutral-400)]'
              )}
            >
              {tagline}
            </span>
          )}
        </Link>
      )
    }

    // Image-based logo
    return (
      <Link
        ref={ref}
        href={href}
        className={cn(
          'flex items-center',
          'shrink-0',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-500)] focus-visible:ring-offset-2',
          'rounded-[var(--radius-sm)]',
          className
        )}
        {...props}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={cn(
            'h-auto',
            'w-[var(--header-logo-width-mobile,100px)] lg:w-[var(--header-logo-width,140px)]'
          )}
          priority
        />
      </Link>
    )
  }
)

Logo.displayName = 'Logo'

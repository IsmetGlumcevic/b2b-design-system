'use client'

import { cn } from '@/src/lib/utils'
import { Button } from '@/src/components/ui/buttons'
import Link from 'next/link'

export interface HeroBannerProps {
  /** Naslov bannera */
  title: string
  /** Podnaslov ili opis */
  subtitle?: string
  /** Istaknuti tekst u naslovu (npr. brend) */
  highlight?: string
  /** Primarna CTA akcija */
  primaryAction?: {
    label: string
    href: string
  }
  /** Sekundarna CTA akcija */
  secondaryAction?: {
    label: string
    href: string
  }
  /** URL pozadinske slike */
  backgroundImage?: string
  /** Overlay boja (dark/light/none) */
  overlay?: 'dark' | 'light' | 'none'
  /** Poravnanje sadržaja */
  alignment?: 'left' | 'center' | 'right'
  /** Visina bannera */
  size?: 'sm' | 'md' | 'lg' | 'xl'
  /** Dodatne CSS klase */
  className?: string
  /** Statistike za prikaz */
  stats?: Array<{
    value: string
    label: string
  }>
  /** Badge tekst iznad naslova */
  badge?: string
}

const sizeClasses = {
  sm: 'min-h-[300px] py-12',
  md: 'min-h-[400px] py-16',
  lg: 'min-h-[500px] py-20',
  xl: 'min-h-[600px] py-24',
}

const alignmentClasses = {
  left: 'items-start text-left',
  center: 'items-center text-center',
  right: 'items-end text-right',
}

const overlayClasses = {
  dark: 'bg-black/60',
  light: 'bg-white/60',
  none: '',
}

export function HeroBanner({
  title,
  subtitle,
  highlight,
  primaryAction,
  secondaryAction,
  backgroundImage,
  overlay = 'dark',
  alignment = 'left',
  size = 'lg',
  className,
  stats,
  badge,
}: HeroBannerProps) {
  const hasOverlay = overlay !== 'none' && backgroundImage

  return (
    <section
      className={cn(
        'relative flex w-full overflow-hidden',
        sizeClasses[size],
        backgroundImage ? 'bg-cover bg-center bg-no-repeat' : 'bg-[var(--color-secondary-900)]',
        className
      )}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : undefined}
    >
      {/* Overlay */}
      {hasOverlay && (
        <div className={cn('absolute inset-0', overlayClasses[overlay])} />
      )}

      {/* Content */}
      <div
        className={cn(
          'relative z-10 mx-auto flex w-full max-w-7xl flex-col justify-center px-[var(--spacing-container-padding)]',
          alignmentClasses[alignment]
        )}
      >
        {/* Badge */}
        {badge && (
          <span className="mb-4 inline-flex rounded-full bg-[var(--color-primary-500)] px-4 py-1.5 text-[var(--font-size-sm)] font-semibold text-white">
            {badge}
          </span>
        )}

        {/* Title */}
        <h1 className="mb-4 max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
          {title}
          {highlight && (
            <>
              <br />
              <span className="text-[var(--color-primary-500)]">{highlight}</span>
            </>
          )}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="mb-8 max-w-2xl text-base text-[var(--color-neutral-300)] sm:text-lg md:text-xl">
            {subtitle}
          </p>
        )}

        {/* Actions */}
        {(primaryAction || secondaryAction) && (
          <div className={cn(
            'flex flex-wrap gap-4',
            alignment === 'center' && 'justify-center',
            alignment === 'right' && 'justify-end'
          )}>
            {primaryAction && (
              <Link href={primaryAction.href}>
                <Button variant="primary" size="lg">
                  {primaryAction.label}
                </Button>
              </Link>
            )}
            {secondaryAction && (
              <Link href={secondaryAction.href}>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[var(--color-secondary-900)]">
                  {secondaryAction.label}
                </Button>
              </Link>
            )}
          </div>
        )}

        {/* Stats */}
        {stats && stats.length > 0 && (
          <div className={cn(
            'mt-12 flex flex-wrap gap-8 border-t border-white/20 pt-8',
            alignment === 'center' && 'justify-center',
            alignment === 'right' && 'justify-end'
          )}>
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-white sm:text-3xl">{stat.value}</div>
                <div className="text-sm text-[var(--color-neutral-400)]">{stat.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--color-primary-500)] via-[var(--color-primary-400)] to-[var(--color-primary-600)]" />
    </section>
  )
}

export default HeroBanner

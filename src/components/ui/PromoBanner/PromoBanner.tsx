import Link from 'next/link'
import { cn } from '@/src/lib/utils'
import { Button } from '@/src/components/ui/buttons'

export interface PromoBannerProps {
  /** Naslov promocije */
  title: string
  /** Podnaslov ili opis */
  subtitle?: string
  /** CTA akcija */
  action?: {
    label: string
    href: string
  }
  /** Pozadinska slika */
  backgroundImage?: string
  /** Boja pozadine (ako nema slike) */
  backgroundColor?: 'primary' | 'secondary' | 'dark' | 'gradient'
  /** Poravnanje teksta */
  alignment?: 'left' | 'center' | 'right'
  /** Veličina bannera */
  size?: 'sm' | 'md' | 'lg'
  /** Dodatne CSS klase */
  className?: string
  /** Oznaka popusta */
  badge?: string
  /** Ikona */
  icon?: React.ReactNode
}

const sizeClasses = {
  sm: 'py-6 sm:py-8',
  md: 'py-10 sm:py-12',
  lg: 'py-14 sm:py-16',
}

const backgroundColorClasses = {
  primary: 'bg-[var(--color-primary-500)]',
  secondary: 'bg-[var(--color-secondary-800)]',
  dark: 'bg-[var(--color-secondary-900)]',
  gradient: 'bg-gradient-to-r from-[var(--color-primary-600)] to-[var(--color-primary-400)]',
}

const alignmentClasses = {
  left: 'text-left items-start',
  center: 'text-center items-center',
  right: 'text-right items-end',
}

export function PromoBanner({
  title,
  subtitle,
  action,
  backgroundImage,
  backgroundColor = 'primary',
  alignment = 'center',
  size = 'md',
  className,
  badge,
  icon,
}: PromoBannerProps) {
  return (
    <section
      className={cn(
        'relative overflow-hidden',
        sizeClasses[size],
        !backgroundImage && backgroundColorClasses[backgroundColor],
        backgroundImage && 'bg-cover bg-center',
        className
      )}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : undefined}
    >
      {/* Overlay for background image */}
      {backgroundImage && (
        <div className="absolute inset-0 bg-black/50" />
      )}

      <div className={cn(
        'relative z-10 mx-auto flex max-w-7xl flex-col px-[var(--spacing-container-padding)]',
        alignmentClasses[alignment]
      )}>
        {/* Badge */}
        {badge && (
          <span className="mb-3 inline-flex rounded-full bg-white/20 px-3 py-1 text-sm font-semibold text-white backdrop-blur-sm">
            {badge}
          </span>
        )}

        {/* Icon and Title Row */}
        <div className={cn(
          'flex items-center gap-4',
          alignment === 'center' && 'justify-center',
          alignment === 'right' && 'justify-end'
        )}>
          {icon && (
            <div className="text-3xl text-white sm:text-4xl">
              {icon}
            </div>
          )}
          <h2 className="text-xl font-bold text-white sm:text-2xl md:text-3xl">
            {title}
          </h2>
        </div>

        {/* Subtitle */}
        {subtitle && (
          <p className="mt-2 max-w-2xl text-sm text-white/90 sm:text-base">
            {subtitle}
          </p>
        )}

        {/* CTA */}
        {action && (
          <Link href={action.href} className="mt-4">
            <Button
              variant="secondary"
              className="bg-white text-[var(--color-primary-600)] hover:bg-white/90"
            >
              {action.label}
            </Button>
          </Link>
        )}
      </div>
    </section>
  )
}

// Compact variant for top-of-page announcements
export interface PromoBarProps {
  /** Tekst poruke */
  message: string
  /** Link za više informacija */
  href?: string
  /** Tekst linka */
  linkText?: string
  /** Može se zatvoriti */
  dismissible?: boolean
  /** Handler za zatvaranje */
  onDismiss?: () => void
  /** Dodatne CSS klase */
  className?: string
}

export function PromoBar({
  message,
  href,
  linkText = 'Saznaj više',
  className,
}: PromoBarProps) {
  return (
    <div className={cn(
      'bg-[var(--color-primary-500)] px-4 py-2 text-center text-sm text-white',
      className
    )}>
      <span>{message}</span>
      {href && (
        <Link
          href={href}
          className="ml-2 font-medium underline underline-offset-2 hover:no-underline"
        >
          {linkText}
        </Link>
      )}
    </div>
  )
}

export default PromoBanner

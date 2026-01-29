import { forwardRef } from 'react'
import { cn } from '@/src/lib/utils'
import Phone from '@/src/components/ui/icons/Line/Communication/Phone'
import Mail01 from '@/src/components/ui/icons/Line/Communication/Mail01'
import Clock from '@/src/components/ui/icons/Line/Time/Clock'
import type { ContactInfoProps } from './types'

/**
 * ContactInfo - Contact information display (Server Component)
 *
 * @example
 * <ContactInfo
 *   phone="+387 33 123 456"
 *   email="info@shop.com"
 *   workingHours="Pon-Pet: 08-17h"
 *   colorScheme="dark"
 * />
 */
export const ContactInfo = forwardRef<HTMLDivElement, ContactInfoProps>(
  (
    {
      phone,
      email,
      workingHours,
      variant = 'horizontal',
      size = 'sm',
      colorScheme = 'light',
      className,
      ...props
    },
    ref
  ) => {
    const hasContent = phone || email || workingHours

    if (!hasContent) return null

    const iconSize = size === 'sm' ? 'h-3.5 w-3.5' : 'h-4 w-4'
    const textSize = size === 'sm' ? 'text-[var(--font-size-xs)]' : 'text-[var(--font-size-sm)]'
    const gap = size === 'sm' ? 'gap-[var(--spacing-1)]' : 'gap-[var(--spacing-2)]'
    const itemGap = variant === 'horizontal' ? 'gap-[var(--spacing-4)] lg:gap-[var(--spacing-6)]' : 'gap-[var(--spacing-2)]'

    const textColor = colorScheme === 'light'
      ? 'text-[var(--color-text-secondary)]'
      : 'text-[var(--color-neutral-400)]'

    const hoverColor = colorScheme === 'light'
      ? 'hover:text-[var(--color-text-primary)]'
      : 'hover:text-white'

    return (
      <div
        ref={ref}
        className={cn(
          'flex',
          variant === 'horizontal' ? 'flex-row items-center' : 'flex-col items-start',
          itemGap,
          textSize,
          textColor,
          className
        )}
        {...props}
      >
        {phone && (
          <a
            href={`tel:${phone.replace(/\s/g, '')}`}
            className={cn(
              'flex items-center',
              gap,
              hoverColor,
              'transition-[var(--transition-fast)]'
            )}
          >
            <Phone className={cn(iconSize, 'shrink-0')} aria-hidden="true" />
            <span>{phone}</span>
          </a>
        )}

        {email && (
          <a
            href={`mailto:${email}`}
            className={cn(
              'flex items-center',
              gap,
              hoverColor,
              'transition-[var(--transition-fast)]'
            )}
          >
            <Mail01 className={cn(iconSize, 'shrink-0')} aria-hidden="true" />
            <span>{email}</span>
          </a>
        )}

        {workingHours && (
          <div className={cn('flex items-center', gap)}>
            <Clock className={cn(iconSize, 'shrink-0')} aria-hidden="true" />
            <span>{workingHours}</span>
          </div>
        )}
      </div>
    )
  }
)

ContactInfo.displayName = 'ContactInfo'

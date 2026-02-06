'use client'

import { cn } from '@/src/lib/utils'
import type { PromoTopBarProps, PromoMessage } from '../types'

/**
 * PromoTopBar - Scrolling promotional messages bar
 *
 * TEMU-style top bar with:
 * - Scrolling/marquee animation
 * - Multiple promo messages with icons
 * - Pause on hover
 * - Optional countdown timer integration
 *
 * @example
 * ```tsx
 * <PromoTopBar
 *   messages={[
 *     { id: '1', text: 'Besplatna dostava', icon: <Truck /> },
 *     { id: '2', text: 'Akcija do 50%', badge: 'SALE' },
 *   ]}
 *   scrollSpeed="normal"
 *   pauseOnHover
 * />
 * ```
 */
export function PromoTopBar({
  messages,
  scrollSpeed = 'normal',
  pauseOnHover = true,
  colorScheme = 'primary',
  countdown,
  className,
  ...props
}: PromoTopBarProps) {
  // Speed mapping
  const speedMap = {
    slow: '45s',
    normal: '30s',
    fast: '20s',
  }

  // Color scheme styles
  const colorStyles = {
    primary: 'bg-[var(--promo-bar-bg)] text-[var(--promo-bar-text)]',
    light: 'bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)]',
    dark: 'bg-[var(--color-secondary-800)] text-[var(--color-text-inverse)]',
  }

  // Duplicate messages for seamless loop
  const duplicatedMessages = [...messages, ...messages]

  return (
    <div
      className={cn(
        'h-[var(--promo-bar-height)] overflow-hidden',
        colorStyles[colorScheme],
        className
      )}
      {...props}
    >
      <div className="h-full flex items-center">
        {/* Countdown section (if provided) */}
        {countdown && (
          <div className="flex-shrink-0 px-4 border-r border-white/20">
            <CountdownTimer config={countdown} />
          </div>
        )}

        {/* Marquee container */}
        <div className="flex-1 overflow-hidden relative">
          <div
            className={cn(
              'flex gap-[var(--promo-bar-item-gap)] promo-marquee',
              pauseOnHover && 'hover:animation-play-state-paused'
            )}
            style={{
              ['--promo-bar-scroll-speed' as string]: speedMap[scrollSpeed],
            }}
          >
            {duplicatedMessages.map((message, index) => (
              <PromoMessageItem
                key={`${message.id}-${index}`}
                message={message}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

/**
 * Individual promo message item
 */
function PromoMessageItem({ message }: { message: PromoMessage }) {
  const content = (
    <span className="flex items-center gap-2 whitespace-nowrap text-sm font-medium">
      {message.icon && (
        <span className="flex-shrink-0 w-4 h-4">{message.icon}</span>
      )}
      <span>{message.text}</span>
      {message.badge && (
        <span className="px-1.5 py-0.5 text-xs font-bold bg-white/20 rounded">
          {message.badge}
        </span>
      )}
    </span>
  )

  if (message.href) {
    return (
      <a
        href={message.href}
        className="hover:underline transition-opacity hover:opacity-80"
      >
        {content}
      </a>
    )
  }

  return content
}

/**
 * Countdown timer component for promo bar
 */
function CountdownTimer({ config }: { config: NonNullable<PromoTopBarProps['countdown']> }) {
  // Simple countdown display - actual countdown logic would use useEffect/useState
  // For now, showing placeholder structure
  return (
    <div className="flex items-center gap-2 text-sm">
      <span className="font-medium">{config.title}</span>
      <div className="flex items-center gap-1">
        <span className="countdown-digit">00</span>
        <span className="text-xs">:</span>
        <span className="countdown-digit">00</span>
        <span className="text-xs">:</span>
        <span className="countdown-digit">00</span>
      </div>
    </div>
  )
}

export default PromoTopBar

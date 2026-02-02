'use client'

import { cn } from '@/src/lib/utils'

export interface HeroBannerSlide {
  id: string
  title: string
  subtitle?: string
  badge?: string
  backgroundColor?: string
  backgroundImage?: string
  textColor?: 'light' | 'dark'
  buttonText?: string
  buttonHref?: string
}

interface MobileHeroBannerProps {
  slides: HeroBannerSlide[]
  currentSlide?: number
  onSlideChange?: (index: number) => void
  autoPlay?: boolean
  className?: string
}

export function MobileHeroBanner({
  slides,
  currentSlide = 0,
  onSlideChange,
  autoPlay = true,
  className,
}: MobileHeroBannerProps) {
  const slide = slides[currentSlide]

  return (
    <div className={cn('px-4 py-2', className)}>
      <div
        className={cn(
          'relative overflow-hidden rounded-2xl',
          slide.textColor === 'light' ? 'text-white' : 'text-neutral-900'
        )}
        style={{
          backgroundColor: slide.backgroundColor || 'var(--color-primary-500)',
          backgroundImage: slide.backgroundImage
            ? `url(${slide.backgroundImage})`
            : undefined,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />

        {/* Content */}
        <div className="relative p-5">
          {slide.badge && (
            <span className="mb-2 inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-medium backdrop-blur-sm">
              {slide.badge}
            </span>
          )}
          <h2 className="mb-1 text-xl font-bold leading-tight">
            {slide.title}
          </h2>
          {slide.subtitle && (
            <p className="mb-3 text-sm opacity-90">{slide.subtitle}</p>
          )}
          {slide.buttonText && (
            <button className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-neutral-900 transition-transform active:scale-95">
              {slide.buttonText}
            </button>
          )}
        </div>

        {/* Dots indicator */}
        {slides.length > 1 && (
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => onSlideChange?.(index)}
                className={cn(
                  'h-1.5 rounded-full transition-all',
                  currentSlide === index
                    ? 'w-4 bg-white'
                    : 'w-1.5 bg-white/50'
                )}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

// Default slides for preview
export const defaultHeroSlides: HeroBannerSlide[] = [
  {
    id: '1',
    badge: 'Novo',
    title: 'Profesionalni elektromaterijal',
    subtitle: 'Preko 50.000 proizvoda na stanju',
    backgroundColor: '#0EA5E9',
    textColor: 'light',
    buttonText: 'Pogledaj katalog',
  },
  {
    id: '2',
    badge: 'Akcija',
    title: '-30% na LED rasvjetu',
    subtitle: 'Samo do kraja mjeseca',
    backgroundColor: '#8B5CF6',
    textColor: 'light',
    buttonText: 'Iskoristi akciju',
  },
  {
    id: '3',
    badge: 'B2B',
    title: 'Posebne cijene za partnere',
    subtitle: 'Registriraj firmu i ostvari popust',
    backgroundColor: '#10B981',
    textColor: 'light',
    buttonText: 'Registriraj se',
  },
]

export default MobileHeroBanner

'use client'

import { useState } from 'react'
import { cn } from '@/src/lib/utils'
import { Button } from '@/src/components/ui/buttons'
import { Input } from '@/src/components/ui/Input'

export interface NewsletterSectionProps {
  /** Naslov sekcije */
  title?: string
  /** Podnaslov/opis */
  subtitle?: string
  /** Placeholder za input */
  placeholder?: string
  /** Tekst gumba */
  buttonText?: string
  /** Pozadina */
  background?: 'light' | 'dark' | 'primary' | 'muted'
  /** Layout varijanta */
  layout?: 'horizontal' | 'vertical'
  /** Handler za submit */
  onSubmit?: (email: string) => void | Promise<void>
  /** Dodatne CSS klase */
  className?: string
  /** Tekst za pristanak (GDPR) */
  consentText?: string
}

const backgroundClasses = {
  light: 'bg-[var(--color-bg-primary)]',
  dark: 'bg-[var(--color-secondary-900)]',
  primary: 'bg-[var(--color-primary-500)]',
  muted: 'bg-[var(--color-bg-secondary)]',
}

export function NewsletterSection({
  title = 'Prijavite se na newsletter',
  subtitle = 'Budite prvi koji će saznati o novim proizvodima, akcijama i ekskluzivnim ponudama.',
  placeholder = 'Vaša email adresa',
  buttonText = 'Prijavi se',
  background = 'dark',
  layout = 'horizontal',
  onSubmit,
  className,
  consentText,
}: NewsletterSectionProps) {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const isDark = background === 'dark'
  const isPrimary = background === 'primary'

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email || !email.includes('@')) {
      setError('Unesite ispravnu email adresu')
      return
    }

    setIsLoading(true)
    setError(null)

    try {
      await onSubmit?.(email)
      setIsSuccess(true)
      setEmail('')
    } catch {
      setError('Došlo je do greške. Pokušajte ponovo.')
    } finally {
      setIsLoading(false)
    }
  }

  if (isSuccess) {
    return (
      <section className={cn('py-12 sm:py-16', backgroundClasses[background], className)}>
        <div className="mx-auto max-w-2xl px-[var(--spacing-container-padding)] text-center">
          <div className={cn(
            'mb-4 text-4xl',
            (isDark || isPrimary) ? 'text-white' : 'text-[var(--color-success-500)]'
          )}>
            ✓
          </div>
          <h2 className={cn(
            'mb-2 text-2xl font-bold',
            (isDark || isPrimary) ? 'text-white' : 'text-[var(--color-text-primary)]'
          )}>
            Hvala na prijavi!
          </h2>
          <p className={cn(
            (isDark || isPrimary) ? 'text-white/80' : 'text-[var(--color-text-secondary)]'
          )}>
            Uskoro ćete primiti potvrdu na vašu email adresu.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className={cn('py-12 sm:py-16', backgroundClasses[background], className)}>
      <div className="mx-auto max-w-4xl px-[var(--spacing-container-padding)]">
        <div className={cn(
          'flex gap-8',
          layout === 'vertical' ? 'flex-col items-center text-center' : 'flex-col items-center text-center lg:flex-row lg:text-left'
        )}>
          {/* Text Content */}
          <div className={cn(layout === 'horizontal' && 'lg:flex-1')}>
            <h2 className={cn(
              'mb-2 text-2xl font-bold sm:text-3xl',
              (isDark || isPrimary) ? 'text-white' : 'text-[var(--color-text-primary)]'
            )}>
              {title}
            </h2>
            <p className={cn(
              (isDark || isPrimary) ? 'text-white/80' : 'text-[var(--color-text-secondary)]'
            )}>
              {subtitle}
            </p>
          </div>

          {/* Form */}
          <div className={cn(layout === 'horizontal' && 'w-full lg:w-auto lg:flex-1')}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
              <Input
                type="email"
                placeholder={placeholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={cn(
                  'flex-1',
                  (isDark || isPrimary) && 'border-white/20 bg-white/10 text-white placeholder:text-white/60'
                )}
                disabled={isLoading}
              />
              <Button
                type="submit"
                variant={isPrimary ? 'secondary' : 'primary'}
                disabled={isLoading}
                className="whitespace-nowrap"
              >
                {isLoading ? 'Slanje...' : buttonText}
              </Button>
            </form>

            {error && (
              <p className="mt-2 text-sm text-[var(--color-error-500)]">{error}</p>
            )}

            {consentText && (
              <p className={cn(
                'mt-3 text-xs',
                (isDark || isPrimary) ? 'text-white/60' : 'text-[var(--color-text-tertiary)]'
              )}>
                {consentText}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsletterSection

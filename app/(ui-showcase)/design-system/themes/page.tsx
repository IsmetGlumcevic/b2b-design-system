'use client'

import { useState } from 'react'
import { cn } from '@/src/lib/utils'

type Theme = 'default' | 'sharp' | 'rounded' | 'compact' | 'spacious'

interface ThemeInfo {
  id: Theme
  name: string
  description: string
  file: string
  features: string[]
}

const themes: ThemeInfo[] = [
  {
    id: 'default',
    name: 'Default',
    description: 'Standardna tema sa balansiranim vrijednostima',
    file: 'default.css',
    features: [
      'Border radius: 6-8px',
      'Spacing: 16-24px',
      'Umjereni shadows',
    ],
  },
  {
    id: 'sharp',
    name: 'Sharp',
    description: 'Moderna tema bez zaobljenih ivica',
    file: 'sharp.css',
    features: [
      'Border radius: 0px',
      'Spacing: standardni',
      'Jači shadows',
    ],
  },
  {
    id: 'rounded',
    name: 'Rounded',
    description: 'Friendly tema sa velikim zaobljenjem',
    file: 'rounded.css',
    features: [
      'Border radius: 12-24px',
      'Spacing: standardni',
      'Mekši shadows',
    ],
  },
  {
    id: 'compact',
    name: 'Compact',
    description: 'Gusta tema sa manje whitespace-a',
    file: 'compact.css',
    features: [
      'Border radius: 2-6px',
      'Spacing: 12-16px (manji)',
      'Tighter line height',
    ],
  },
  {
    id: 'spacious',
    name: 'Spacious',
    description: 'Prostrana tema sa više breathing room-a',
    file: 'spacious.css',
    features: [
      'Border radius: 12-16px',
      'Spacing: 32-40px (veći)',
      'Looser line height',
    ],
  },
]

export default function ThemesShowcase() {
  const [activeTheme, setActiveTheme] = useState<Theme>('default')

  const loadTheme = (theme: Theme) => {
    // Remove previous theme
    const existingTheme = document.getElementById('theme-css')
    if (existingTheme) {
      existingTheme.remove()
    }

    // Load new theme
    const link = document.createElement('link')
    link.id = 'theme-css'
    link.rel = 'stylesheet'
    link.href = `/styles/themes/${theme}.css`
    document.head.appendChild(link)

    setActiveTheme(theme)
  }

  return (
    <div className="min-h-screen bg-[var(--color-bg-secondary)] p-4 sm:p-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-2 text-3xl font-bold text-[var(--color-text-primary)]">
            Theme System
          </h1>
          <p className="text-[var(--color-text-secondary)]">
            Testiraj različite teme i vidi kako border radius i shadows utječu na izgled komponenti.
          </p>
        </div>

        {/* Theme Switcher */}
        <div className="mb-8 rounded-[var(--radius-card)] bg-white p-6 shadow-[var(--shadow-card)]">
          <h2 className="mb-4 text-lg font-semibold text-[var(--color-text-primary)]">
            Odaberi temu
          </h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {themes.map((theme) => (
              <button
                key={theme.id}
                onClick={() => loadTheme(theme.id)}
                className={cn(
                  'rounded-[var(--radius-card)] border-2 p-4 text-left transition-all',
                  activeTheme === theme.id
                    ? 'border-[var(--color-primary-500)] bg-[var(--color-primary-50)]'
                    : 'border-[var(--color-border-primary)] bg-white hover:border-[var(--color-primary-300)]'
                )}
              >
                <h3 className="mb-1 font-semibold text-[var(--color-text-primary)]">
                  {theme.name}
                </h3>
                <p className="mb-3 text-sm text-[var(--color-text-secondary)]">
                  {theme.description}
                </p>
                <div className="space-y-1">
                  {theme.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary-500)]" />
                      <span className="text-xs text-[var(--color-text-tertiary)]">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Component Examples */}
        <div className="space-y-8">
          {/* Buttons */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-[var(--color-text-primary)]">
              Buttons
            </h2>
            <div className="rounded-[var(--radius-card)] bg-white p-6 shadow-[var(--shadow-card)]">
              <div className="flex flex-wrap gap-4">
                <button className="h-[var(--button-height-md)] rounded-[var(--radius-button)] bg-[var(--color-primary-500)] px-[var(--spacing-button-padding-x)] text-sm font-semibold text-white transition-all hover:bg-[var(--color-primary-hover)]">
                  Primary Button
                </button>
                <button className="h-[var(--button-height-md)] rounded-[var(--radius-button)] border-2 border-[var(--color-primary-500)] px-[var(--spacing-button-padding-x)] text-sm font-semibold text-[var(--color-primary-500)] transition-all hover:bg-[var(--color-primary-50)]">
                  Outline Button
                </button>
                <button className="h-[var(--button-height-md)] rounded-[var(--radius-button)] bg-[var(--color-secondary-800)] px-[var(--spacing-button-padding-x)] text-sm font-semibold text-white transition-all hover:bg-[var(--color-secondary-hover)]">
                  Secondary Button
                </button>
              </div>
            </div>
          </section>

          {/* Inputs */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-[var(--color-text-primary)]">
              Inputs
            </h2>
            <div className="rounded-[var(--radius-card)] bg-white p-6 shadow-[var(--shadow-card)]">
              <div className="max-w-md space-y-4">
                <input
                  type="text"
                  placeholder="Unesite tekst..."
                  className="h-[var(--input-height-md)] w-full rounded-[var(--radius-input)] border border-[var(--input-border)] bg-[var(--input-bg)] px-[var(--spacing-input-padding-x)] text-sm text-[var(--input-text)] transition-all focus:border-[var(--input-border-focus)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-200)]"
                />
                <textarea
                  placeholder="Unesite dužu poruku..."
                  rows={4}
                  className="w-full rounded-[var(--radius-input)] border border-[var(--input-border)] bg-[var(--input-bg)] px-[var(--spacing-input-padding-x)] py-[var(--spacing-input-padding-y)] text-sm text-[var(--input-text)] transition-all focus:border-[var(--input-border-focus)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-200)]"
                />
              </div>
            </div>
          </section>

          {/* Cards */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-[var(--color-text-primary)]">
              Cards
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="overflow-hidden rounded-[var(--radius-card)] bg-[var(--card-bg)] shadow-[var(--shadow-card)] transition-all hover:shadow-[var(--shadow-card-hover)]">
                <div className="aspect-video bg-[var(--color-bg-tertiary)]" />
                <div className="p-[var(--card-padding)]">
                  <h3 className="mb-2 font-semibold text-[var(--color-text-primary)]">
                    Product Card
                  </h3>
                  <p className="mb-4 text-sm text-[var(--color-text-secondary)]">
                    Primjer kartice proizvoda sa slikom i opisom.
                  </p>
                  <button className="h-10 w-full rounded-[var(--radius-button)] bg-[var(--color-primary-500)] text-sm font-semibold text-white transition-all hover:bg-[var(--color-primary-hover)]">
                    Dodaj u košaricu
                  </button>
                </div>
              </div>

              <div className="overflow-hidden rounded-[var(--radius-card)] bg-[var(--card-bg)] shadow-[var(--shadow-card)] transition-all hover:shadow-[var(--shadow-card-hover)]">
                <div className="aspect-video bg-[var(--color-bg-tertiary)]" />
                <div className="p-[var(--card-padding)]">
                  <h3 className="mb-2 font-semibold text-[var(--color-text-primary)]">
                    Product Card
                  </h3>
                  <p className="mb-4 text-sm text-[var(--color-text-secondary)]">
                    Primjer kartice proizvoda sa slikom i opisom.
                  </p>
                  <button className="h-10 w-full rounded-[var(--radius-button)] bg-[var(--color-primary-500)] text-sm font-semibold text-white transition-all hover:bg-[var(--color-primary-hover)]">
                    Dodaj u košaricu
                  </button>
                </div>
              </div>

              <div className="overflow-hidden rounded-[var(--radius-card)] bg-[var(--card-bg)] shadow-[var(--shadow-card)] transition-all hover:shadow-[var(--shadow-card-hover)]">
                <div className="aspect-video bg-[var(--color-bg-tertiary)]" />
                <div className="p-[var(--card-padding)]">
                  <h3 className="mb-2 font-semibold text-[var(--color-text-primary)]">
                    Product Card
                  </h3>
                  <p className="mb-4 text-sm text-[var(--color-text-secondary)]">
                    Primjer kartice proizvoda sa slikom i opisom.
                  </p>
                  <button className="h-10 w-full rounded-[var(--radius-button)] bg-[var(--color-primary-500)] text-sm font-semibold text-white transition-all hover:bg-[var(--color-primary-hover)]">
                    Dodaj u košaricu
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Badges & Alerts */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-[var(--color-text-primary)]">
              Badges & Alerts
            </h2>
            <div className="space-y-4">
              <div className="rounded-[var(--radius-card)] bg-white p-6 shadow-[var(--shadow-card)]">
                <h3 className="mb-3 text-sm font-semibold text-[var(--color-text-primary)]">
                  Badges
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-[var(--radius-badge)] bg-[var(--badge-success-bg)] px-3 py-1 text-sm font-medium text-[var(--badge-success-text)]">
                    Na stanju
                  </span>
                  <span className="rounded-[var(--radius-badge)] bg-[var(--badge-error-bg)] px-3 py-1 text-sm font-medium text-[var(--badge-error-text)]">
                    Rasprodano
                  </span>
                  <span className="rounded-[var(--radius-badge)] bg-[var(--badge-warning-bg)] px-3 py-1 text-sm font-medium text-[var(--badge-warning-text)]">
                    Niska zaliha
                  </span>
                  <span className="rounded-[var(--radius-badge)] bg-[var(--badge-info-bg)] px-3 py-1 text-sm font-medium text-[var(--badge-info-text)]">
                    Novo
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3 rounded-[var(--radius-card)] border-l-4 border-[var(--color-success-500)] bg-[var(--badge-success-bg)] p-4">
                  <div className="flex-1">
                    <h4 className="mb-1 text-sm font-semibold text-[var(--badge-success-text)]">
                      Uspješno!
                    </h4>
                    <p className="text-sm text-[var(--badge-success-text)]">
                      Proizvod je uspješno dodan u košaricu.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-[var(--radius-card)] border-l-4 border-[var(--color-error-500)] bg-[var(--badge-error-bg)] p-4">
                  <div className="flex-1">
                    <h4 className="mb-1 text-sm font-semibold text-[var(--badge-error-text)]">
                      Greška!
                    </h4>
                    <p className="text-sm text-[var(--badge-error-text)]">
                      Došlo je do greške prilikom dodavanja u košaricu.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Modal Preview */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-[var(--color-text-primary)]">
              Modal Preview
            </h2>
            <div className="rounded-[var(--radius-card)] bg-white p-6 shadow-[var(--shadow-card)]">
              <div className="mx-auto max-w-md rounded-[var(--radius-modal)] bg-white p-6 shadow-[var(--shadow-modal)]">
                <h3 className="mb-3 text-lg font-semibold text-[var(--color-text-primary)]">
                  Potvrda
                </h3>
                <p className="mb-6 text-sm text-[var(--color-text-secondary)]">
                  Da li ste sigurni da želite obrisati ovaj proizvod iz košarice?
                </p>
                <div className="flex gap-3">
                  <button className="h-10 flex-1 rounded-[var(--radius-button)] border border-[var(--color-border-primary)] text-sm font-semibold text-[var(--color-text-primary)] transition-all hover:bg-[var(--color-bg-secondary)]">
                    Odustani
                  </button>
                  <button className="h-10 flex-1 rounded-[var(--radius-button)] bg-[var(--color-error-500)] text-sm font-semibold text-white transition-all hover:bg-[var(--color-error-600)]">
                    Obriši
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Theme Files Info */}
        <div className="mt-8 rounded-[var(--radius-card)] border-2 border-[var(--color-primary-200)] bg-[var(--color-primary-50)] p-6">
          <h3 className="mb-3 text-lg font-semibold text-[var(--color-primary-900)]">
            📁 Theme fajlovi
          </h3>
          <div className="space-y-2 text-sm text-[var(--color-primary-800)]">
            <p>
              <code className="rounded bg-white px-2 py-1">
                styles/themes/default.css
              </code>{' '}
              - Standardna tema
            </p>
            <p>
              <code className="rounded bg-white px-2 py-1">
                styles/themes/sharp.css
              </code>{' '}
              - Bez border radiusa (0px)
            </p>
            <p>
              <code className="rounded bg-white px-2 py-1">
                styles/themes/rounded.css
              </code>{' '}
              - Veliki border radius (12-24px)
            </p>
            <p>
              <code className="rounded bg-white px-2 py-1">
                styles/themes/compact.css
              </code>{' '}
              - Tighter spacing (12-16px)
            </p>
            <p>
              <code className="rounded bg-white px-2 py-1">
                styles/themes/spacious.css
              </code>{' '}
              - Looser spacing (32-40px)
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

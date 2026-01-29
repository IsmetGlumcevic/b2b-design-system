'use client'

import { useState } from 'react'
import { Chip, ChipGroup } from '@/src/components/ui/Chip'

/** Demo icons */
function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}

function TagIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" />
      <path d="M7 7h.01" />
    </svg>
  )
}

export default function ChipPage() {
  const [filters, setFilters] = useState(['React', 'TypeScript', 'Tailwind'])
  const [selectedCategory, setSelectedCategory] = useState<string | null>('Sve')

  const removeFilter = (filter: string) => {
    setFilters(filters.filter((f) => f !== filter))
  }

  const categories = ['Sve', 'Elektronika', 'Odjeca', 'Kucni aparati', 'Sportska oprema']

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-12">
        <h1 className="mb-2 text-3xl font-bold text-[var(--color-text-primary)]">
          Chip
        </h1>
        <p className="text-[var(--color-text-secondary)]">
          Chip komponenta za interaktivne tagove, filtere i selekcije. Podrzava razlicite varijante, boje i interaktivne funkcionalnosti.
        </p>
      </div>

      {/* Variants */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Varijante
        </h2>
        <div className="space-y-4">
          <div>
            <p className="mb-3 text-sm text-[var(--color-text-secondary)]">Filled:</p>
            <ChipGroup>
              <Chip variant="filled" color="primary">Primary</Chip>
              <Chip variant="filled" color="secondary">Secondary</Chip>
              <Chip variant="filled" color="success">Success</Chip>
              <Chip variant="filled" color="error">Error</Chip>
              <Chip variant="filled" color="warning">Warning</Chip>
              <Chip variant="filled" color="info">Info</Chip>
              <Chip variant="filled" color="neutral">Neutral</Chip>
            </ChipGroup>
          </div>
          <div>
            <p className="mb-3 text-sm text-[var(--color-text-secondary)]">Outline:</p>
            <ChipGroup>
              <Chip variant="outline" color="primary">Primary</Chip>
              <Chip variant="outline" color="secondary">Secondary</Chip>
              <Chip variant="outline" color="success">Success</Chip>
              <Chip variant="outline" color="error">Error</Chip>
              <Chip variant="outline" color="warning">Warning</Chip>
              <Chip variant="outline" color="info">Info</Chip>
              <Chip variant="outline" color="neutral">Neutral</Chip>
            </ChipGroup>
          </div>
          <div>
            <p className="mb-3 text-sm text-[var(--color-text-secondary)]">Soft:</p>
            <ChipGroup>
              <Chip variant="soft" color="primary">Primary</Chip>
              <Chip variant="soft" color="secondary">Secondary</Chip>
              <Chip variant="soft" color="success">Success</Chip>
              <Chip variant="soft" color="error">Error</Chip>
              <Chip variant="soft" color="warning">Warning</Chip>
              <Chip variant="soft" color="info">Info</Chip>
              <Chip variant="soft" color="neutral">Neutral</Chip>
            </ChipGroup>
          </div>
        </div>
      </section>

      {/* Sizes */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Velicine
        </h2>
        <ChipGroup>
          <Chip size="sm" color="info">Small</Chip>
          <Chip size="md" color="info">Medium</Chip>
          <Chip size="lg" color="info">Large</Chip>
        </ChipGroup>
      </section>

      {/* With Icons */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Sa ikonama
        </h2>
        <div className="space-y-4">
          <div>
            <p className="mb-3 text-sm text-[var(--color-text-secondary)]">Start icon:</p>
            <ChipGroup>
              <Chip startIcon={<CheckIcon />} color="success">Zavrseno</Chip>
              <Chip startIcon={<StarIcon />} color="warning">Favorit</Chip>
              <Chip startIcon={<TagIcon />} color="info">Tag</Chip>
            </ChipGroup>
          </div>
          <div>
            <p className="mb-3 text-sm text-[var(--color-text-secondary)]">End icon:</p>
            <ChipGroup>
              <Chip endIcon={<CheckIcon />} color="success">Verificirano</Chip>
              <Chip endIcon={<StarIcon />} color="primary">Premium</Chip>
            </ChipGroup>
          </div>
        </div>
      </section>

      {/* Deletable */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Sa brisanjem (Deletable)
        </h2>
        <p className="mb-4 text-sm text-[var(--color-text-secondary)]">
          Klikni X da uklonis filter:
        </p>
        <ChipGroup>
          {filters.map((filter) => (
            <Chip
              key={filter}
              deletable
              onDelete={() => removeFilter(filter)}
              color="primary"
              variant="soft"
            >
              {filter}
            </Chip>
          ))}
          {filters.length === 0 && (
            <span className="text-sm text-[var(--color-text-tertiary)]">
              Nema aktivnih filtera
            </span>
          )}
        </ChipGroup>
        {filters.length < 3 && (
          <button
            onClick={() => setFilters(['React', 'TypeScript', 'Tailwind'])}
            className="mt-4 text-sm text-[var(--color-primary-600)] hover:underline"
          >
            Resetuj filtere
          </button>
        )}
      </section>

      {/* Clickable / Selectable */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Klikabilni (Filter kategorije)
        </h2>
        <p className="mb-4 text-sm text-[var(--color-text-secondary)]">
          Odaberi kategoriju:
        </p>
        <ChipGroup>
          {categories.map((category) => (
            <Chip
              key={category}
              clickable
              selected={selectedCategory === category}
              onClick={() => setSelectedCategory(category)}
              color="primary"
              variant={selectedCategory === category ? 'filled' : 'outline'}
            >
              {category}
            </Chip>
          ))}
        </ChipGroup>
        <p className="mt-4 text-sm text-[var(--color-text-secondary)]">
          Odabrana kategorija: <strong>{selectedCategory}</strong>
        </p>
      </section>

      {/* Disabled */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Disabled
        </h2>
        <ChipGroup>
          <Chip disabled color="primary">Disabled Filled</Chip>
          <Chip disabled variant="outline" color="primary">Disabled Outline</Chip>
          <Chip disabled deletable color="neutral">Disabled Deletable</Chip>
          <Chip disabled clickable color="info">Disabled Clickable</Chip>
        </ChipGroup>
      </section>

      {/* Real-world Examples */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Primjeri koriscenja
        </h2>

        {/* Product Tags */}
        <div className="mb-8">
          <h3 className="mb-4 text-lg font-medium text-[var(--color-text-primary)]">
            Tagovi proizvoda
          </h3>
          <div className="rounded-[var(--radius-lg)] border border-[var(--color-border-primary)] p-4">
            <ChipGroup gap="sm">
              <Chip size="sm" color="success" variant="soft">Na stanju</Chip>
              <Chip size="sm" color="error" variant="filled">-20%</Chip>
              <Chip size="sm" color="info" variant="soft">Novo</Chip>
              <Chip size="sm" color="warning" variant="soft" startIcon={<StarIcon />}>Bestseller</Chip>
            </ChipGroup>
          </div>
        </div>

        {/* Skills/Technologies */}
        <div className="mb-8">
          <h3 className="mb-4 text-lg font-medium text-[var(--color-text-primary)]">
            Vjestine / Tehnologije
          </h3>
          <div className="rounded-[var(--radius-lg)] border border-[var(--color-border-primary)] p-4">
            <ChipGroup>
              <Chip variant="outline" color="info">React</Chip>
              <Chip variant="outline" color="info">TypeScript</Chip>
              <Chip variant="outline" color="info">Next.js</Chip>
              <Chip variant="outline" color="success">Node.js</Chip>
              <Chip variant="outline" color="primary">GraphQL</Chip>
              <Chip variant="outline" color="warning">PostgreSQL</Chip>
            </ChipGroup>
          </div>
        </div>

        {/* Order Status */}
        <div className="mb-8">
          <h3 className="mb-4 text-lg font-medium text-[var(--color-text-primary)]">
            Status narudzbi
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between rounded-[var(--radius-lg)] border border-[var(--color-border-primary)] p-4">
              <span className="text-[var(--color-text-primary)]">Narudzba #1234</span>
              <Chip size="sm" color="warning" variant="soft">U obradi</Chip>
            </div>
            <div className="flex items-center justify-between rounded-[var(--radius-lg)] border border-[var(--color-border-primary)] p-4">
              <span className="text-[var(--color-text-primary)]">Narudzba #1235</span>
              <Chip size="sm" color="info" variant="soft">Poslano</Chip>
            </div>
            <div className="flex items-center justify-between rounded-[var(--radius-lg)] border border-[var(--color-border-primary)] p-4">
              <span className="text-[var(--color-text-primary)]">Narudzba #1236</span>
              <Chip size="sm" color="success" variant="soft" startIcon={<CheckIcon />}>Dostavljeno</Chip>
            </div>
          </div>
        </div>

        {/* Active Filters */}
        <div className="mb-8">
          <h3 className="mb-4 text-lg font-medium text-[var(--color-text-primary)]">
            Aktivni filteri (e-commerce)
          </h3>
          <div className="rounded-[var(--radius-lg)] border border-[var(--color-border-primary)] p-4">
            <p className="mb-3 text-sm text-[var(--color-text-secondary)]">Aktivni filteri:</p>
            <ChipGroup>
              <Chip deletable color="neutral" variant="outline">Cijena: 50-200 KM</Chip>
              <Chip deletable color="neutral" variant="outline">Brend: Nike</Chip>
              <Chip deletable color="neutral" variant="outline">Velicina: M</Chip>
              <Chip deletable color="neutral" variant="outline">Boja: Crna</Chip>
            </ChipGroup>
          </div>
        </div>
      </section>

      {/* Usage Code */}
      <section className="rounded-[var(--radius-card)] bg-[var(--color-bg-secondary)] p-6">
        <h2 className="mb-4 text-xl font-semibold text-[var(--color-text-primary)]">
          Koristenje
        </h2>
        <pre className="overflow-x-auto rounded-md bg-[var(--color-bg-tertiary)] p-4">
          <code className="text-sm text-[var(--color-text-primary)]">
{`import { Chip, ChipGroup } from '@/src/components/ui/Chip'

// Basic chip
<Chip>Tag</Chip>

// Varijante i boje
<Chip variant="filled" color="primary">Filled</Chip>
<Chip variant="outline" color="success">Outline</Chip>
<Chip variant="soft" color="info">Soft</Chip>

// Sa ikonom
<Chip startIcon={<Icon />}>Sa ikonom</Chip>

// Deletable (sa brisanjem)
<Chip deletable onDelete={() => handleDelete()}>Filter</Chip>

// Clickable (klikabilni)
<Chip clickable selected={isSelected} onClick={() => setSelected(true)}>
  Opcija
</Chip>

// Chip grupa
<ChipGroup gap="md">
  <Chip>Tag 1</Chip>
  <Chip>Tag 2</Chip>
  <Chip>Tag 3</Chip>
</ChipGroup>`}
          </code>
        </pre>
      </section>

      {/* CSS Variables */}
      <section className="mt-8 rounded-[var(--radius-card)] bg-[var(--color-bg-secondary)] p-6">
        <h2 className="mb-4 text-xl font-semibold text-[var(--color-text-primary)]">
          CSS Varijable
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <h3 className="mb-2 font-medium text-[var(--color-text-primary)]">Velicine</h3>
            <ul className="space-y-1 text-sm text-[var(--color-text-secondary)]">
              <li><code>--chip-height-sm: 24px</code></li>
              <li><code>--chip-height-md: 32px</code></li>
              <li><code>--chip-height-lg: 40px</code></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-2 font-medium text-[var(--color-text-primary)]">Ostalo</h3>
            <ul className="space-y-1 text-sm text-[var(--color-text-secondary)]">
              <li><code>--chip-radius: radius-full</code></li>
              <li><code>Koristi color-* varijable za boje</code></li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

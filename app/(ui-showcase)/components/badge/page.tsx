import { Badge } from '@/src/components/ui/Badge'

export const metadata = {
  title: 'Badge - Components',
  description: 'Badge komponenta za status indikatore, oznake i tagove',
}

/** Simple icons for demonstration */
function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

function AlertIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  )
}

function StarIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}

function TruckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 17h4V5H2v12h3" />
      <path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5v8h1" />
      <circle cx="7.5" cy="17.5" r="2.5" />
      <circle cx="17.5" cy="17.5" r="2.5" />
    </svg>
  )
}

export default function BadgePage() {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-12">
        <h1 className="mb-2 text-3xl font-bold text-[var(--color-text-primary)]">
          Badge
        </h1>
        <p className="text-[var(--color-text-secondary)]">
          Badge komponenta za status indikatore, oznake, tagove i labele. Podržava više varijanti, veličina i stilova.
        </p>
      </div>

      {/* Variants - Filled */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Varijante (Filled)
        </h2>
        <div className="flex flex-wrap items-center gap-4">
          <Badge variant="success">Success</Badge>
          <Badge variant="error">Error</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="info">Info</Badge>
          <Badge variant="neutral">Neutral</Badge>
          <Badge variant="primary">Primary</Badge>
        </div>
      </section>

      {/* Variants - Outline */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Varijante (Outline)
        </h2>
        <div className="flex flex-wrap items-center gap-4">
          <Badge variant="success" outline>Success</Badge>
          <Badge variant="error" outline>Error</Badge>
          <Badge variant="warning" outline>Warning</Badge>
          <Badge variant="info" outline>Info</Badge>
          <Badge variant="neutral" outline>Neutral</Badge>
          <Badge variant="primary" outline>Primary</Badge>
        </div>
      </section>

      {/* Sizes */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Veličine
        </h2>
        <div className="flex flex-wrap items-center gap-4">
          <Badge size="sm" variant="info">Small</Badge>
          <Badge size="md" variant="info">Medium</Badge>
          <Badge size="lg" variant="info">Large</Badge>
        </div>
      </section>

      {/* With Dot Indicator */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Sa dot indikatorom
        </h2>
        <div className="flex flex-wrap items-center gap-4">
          <Badge variant="success" dot>Na stanju</Badge>
          <Badge variant="error" dot>Nedostupno</Badge>
          <Badge variant="warning" dot>Ograničeno</Badge>
          <Badge variant="info" dot>Novo</Badge>
          <Badge variant="neutral" dot>Draft</Badge>
        </div>
      </section>

      {/* With Icons */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Sa ikonama
        </h2>
        <div className="flex flex-wrap items-center gap-4">
          <Badge variant="success" icon={<CheckIcon />}>Verificirano</Badge>
          <Badge variant="warning" icon={<AlertIcon />}>Upozorenje</Badge>
          <Badge variant="primary" icon={<StarIcon />}>Premium</Badge>
          <Badge variant="info" icon={<TruckIcon />}>Besplatna dostava</Badge>
        </div>
      </section>

      {/* Real-world Examples */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Primjeri korištenja
        </h2>

        {/* Product Status */}
        <div className="mb-8">
          <h3 className="mb-4 text-lg font-medium text-[var(--color-text-primary)]">
            Status proizvoda
          </h3>
          <div className="flex flex-wrap items-center gap-4">
            <Badge variant="success" dot>Na stanju</Badge>
            <Badge variant="warning" dot>Malo na stanju</Badge>
            <Badge variant="error" dot>Rasprodano</Badge>
            <Badge variant="info" dot>Uskoro</Badge>
          </div>
        </div>

        {/* Order Status */}
        <div className="mb-8">
          <h3 className="mb-4 text-lg font-medium text-[var(--color-text-primary)]">
            Status narudžbe
          </h3>
          <div className="flex flex-wrap items-center gap-4">
            <Badge variant="neutral">Na čekanju</Badge>
            <Badge variant="info">U obradi</Badge>
            <Badge variant="warning">Poslano</Badge>
            <Badge variant="success">Dostavljeno</Badge>
            <Badge variant="error">Otkazano</Badge>
          </div>
        </div>

        {/* Product Tags */}
        <div className="mb-8">
          <h3 className="mb-4 text-lg font-medium text-[var(--color-text-primary)]">
            Tagovi proizvoda
          </h3>
          <div className="flex flex-wrap items-center gap-4">
            <Badge variant="primary">Novo</Badge>
            <Badge variant="error">-20%</Badge>
            <Badge variant="success" icon={<StarIcon />}>Bestseller</Badge>
            <Badge variant="info" outline>Preporučeno</Badge>
          </div>
        </div>

        {/* User Roles */}
        <div className="mb-8">
          <h3 className="mb-4 text-lg font-medium text-[var(--color-text-primary)]">
            Korisničke uloge
          </h3>
          <div className="flex flex-wrap items-center gap-4">
            <Badge variant="primary" outline>Admin</Badge>
            <Badge variant="info" outline>Moderator</Badge>
            <Badge variant="neutral" outline>Član</Badge>
            <Badge variant="success" outline>Verificiran</Badge>
          </div>
        </div>
      </section>

      {/* All Sizes with Dot */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Sve kombinacije veličina
        </h2>
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-4">
            <Badge size="sm" variant="success" dot>Small dot</Badge>
            <Badge size="md" variant="success" dot>Medium dot</Badge>
            <Badge size="lg" variant="success" dot>Large dot</Badge>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Badge size="sm" variant="info" icon={<CheckIcon />}>Small icon</Badge>
            <Badge size="md" variant="info" icon={<CheckIcon />}>Medium icon</Badge>
            <Badge size="lg" variant="info" icon={<CheckIcon />}>Large icon</Badge>
          </div>
        </div>
      </section>

      {/* Usage Code */}
      <section className="rounded-[var(--radius-card)] bg-[var(--color-bg-secondary)] p-6">
        <h2 className="mb-4 text-xl font-semibold text-[var(--color-text-primary)]">
          Korištenje
        </h2>
        <pre className="overflow-x-auto rounded-md bg-[var(--color-bg-tertiary)] p-4">
          <code className="text-sm text-[var(--color-text-primary)]">
{`import { Badge } from '@/src/components/ui/Badge'

// Basic usage
<Badge variant="success">Na stanju</Badge>

// With dot indicator
<Badge variant="error" dot>Nedostupno</Badge>

// Outline style
<Badge variant="info" outline>Novo</Badge>

// With icon
<Badge variant="primary" icon={<StarIcon />}>Premium</Badge>

// Different sizes
<Badge size="sm">Small</Badge>
<Badge size="md">Medium</Badge>
<Badge size="lg">Large</Badge>`}
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
            <h3 className="mb-2 font-medium text-[var(--color-text-primary)]">Badge boje</h3>
            <ul className="space-y-1 text-sm text-[var(--color-text-secondary)]">
              <li><code>--badge-success-bg / --badge-success-text</code></li>
              <li><code>--badge-error-bg / --badge-error-text</code></li>
              <li><code>--badge-warning-bg / --badge-warning-text</code></li>
              <li><code>--badge-info-bg / --badge-info-text</code></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-2 font-medium text-[var(--color-text-primary)]">Ostalo</h3>
            <ul className="space-y-1 text-sm text-[var(--color-text-secondary)]">
              <li><code>--radius-badge: 9999px (full)</code></li>
              <li><code>--font-size-xs / sm / base</code></li>
              <li><code>--spacing-* za padding</code></li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

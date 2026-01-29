import { LoadingSpinner, LoadingOverlay, LoadingDots } from '@/src/components/ui/LoadingSpinner'

export const metadata = {
  title: 'Loading Spinner - Components',
  description: 'Loading spinner komponente za indikaciju učitavanja',
}

export default function LoadingSpinnerPage() {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-12">
        <h1 className="mb-2 text-3xl font-bold text-[var(--color-text-primary)]">
          Loading Spinner
        </h1>
        <p className="text-[var(--color-text-secondary)]">
          Komponente za indikaciju učitavanja. Uključuje LoadingSpinner, LoadingOverlay i LoadingDots.
        </p>
      </div>

      {/* LoadingSpinner - Sizes */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          LoadingSpinner - Veličine
        </h2>
        <div className="flex flex-wrap items-center gap-8">
          <div className="text-center">
            <LoadingSpinner size="sm" />
            <p className="mt-2 text-sm text-[var(--color-text-secondary)]">sm (16px)</p>
          </div>
          <div className="text-center">
            <LoadingSpinner size="md" />
            <p className="mt-2 text-sm text-[var(--color-text-secondary)]">md (24px)</p>
          </div>
          <div className="text-center">
            <LoadingSpinner size="lg" />
            <p className="mt-2 text-sm text-[var(--color-text-secondary)]">lg (32px)</p>
          </div>
          <div className="text-center">
            <LoadingSpinner size="xl" />
            <p className="mt-2 text-sm text-[var(--color-text-secondary)]">xl (48px)</p>
          </div>
        </div>
      </section>

      {/* LoadingSpinner - Variants */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          LoadingSpinner - Varijante
        </h2>
        <div className="flex flex-wrap items-center gap-8">
          <div className="text-center">
            <LoadingSpinner variant="primary" size="lg" />
            <p className="mt-2 text-sm text-[var(--color-text-secondary)]">primary</p>
          </div>
          <div className="text-center">
            <LoadingSpinner variant="secondary" size="lg" />
            <p className="mt-2 text-sm text-[var(--color-text-secondary)]">secondary</p>
          </div>
          <div className="text-center p-4 bg-[var(--color-neutral-800)] rounded-lg">
            <LoadingSpinner variant="white" size="lg" />
            <p className="mt-2 text-sm text-white">white</p>
          </div>
          <div className="text-center text-[var(--color-info-500)]">
            <LoadingSpinner variant="current" size="lg" />
            <p className="mt-2 text-sm">current (nasljeđuje boju)</p>
          </div>
        </div>
      </section>

      {/* LoadingSpinner - With Label */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          LoadingSpinner - Sa labelom
        </h2>
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-8">
            <LoadingSpinner size="sm" label="Učitavanje..." showLabel />
            <LoadingSpinner size="md" label="Učitavanje podataka..." showLabel />
            <LoadingSpinner size="lg" label="Molimo pričekajte..." showLabel />
          </div>
        </div>
      </section>

      {/* LoadingSpinner - Centered */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          LoadingSpinner - Centriran
        </h2>
        <div className="border border-[var(--color-border-primary)] rounded-[var(--radius-card)] p-8">
          <LoadingSpinner size="lg" label="Učitavanje proizvoda..." showLabel centered />
        </div>
      </section>

      {/* LoadingOverlay */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          LoadingOverlay
        </h2>
        <p className="mb-4 text-[var(--color-text-secondary)]">
          Overlay komponenta za prekrivanje sadržaja tokom učitavanja.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Basic Overlay */}
          <div className="relative h-48 border border-[var(--color-border-primary)] rounded-[var(--radius-card)] overflow-hidden">
            <div className="p-4">
              <h3 className="font-medium mb-2">Lista proizvoda</h3>
              <p className="text-sm text-[var(--color-text-secondary)]">Proizvod 1</p>
              <p className="text-sm text-[var(--color-text-secondary)]">Proizvod 2</p>
              <p className="text-sm text-[var(--color-text-secondary)]">Proizvod 3</p>
            </div>
            <LoadingOverlay isLoading />
          </div>

          {/* Overlay with Label */}
          <div className="relative h-48 border border-[var(--color-border-primary)] rounded-[var(--radius-card)] overflow-hidden">
            <div className="p-4">
              <h3 className="font-medium mb-2">Narudžbe</h3>
              <p className="text-sm text-[var(--color-text-secondary)]">Narudžba #1234</p>
              <p className="text-sm text-[var(--color-text-secondary)]">Narudžba #1235</p>
              <p className="text-sm text-[var(--color-text-secondary)]">Narudžba #1236</p>
            </div>
            <LoadingOverlay isLoading label="Učitavanje narudžbi..." showLabel />
          </div>

          {/* Overlay with Blur */}
          <div className="relative h-48 border border-[var(--color-border-primary)] rounded-[var(--radius-card)] overflow-hidden">
            <div className="p-4">
              <h3 className="font-medium mb-2">Korisnici</h3>
              <p className="text-sm text-[var(--color-text-secondary)]">Ivan Horvat</p>
              <p className="text-sm text-[var(--color-text-secondary)]">Ana Kovačević</p>
              <p className="text-sm text-[var(--color-text-secondary)]">Marko Babić</p>
            </div>
            <LoadingOverlay isLoading blur label="Ažuriranje..." showLabel />
          </div>
        </div>
      </section>

      {/* LoadingDots */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          LoadingDots
        </h2>
        <p className="mb-4 text-[var(--color-text-secondary)]">
          Inline loading indikator za korištenje u tekstu ili gumbima.
        </p>

        <div className="space-y-6">
          {/* Sizes */}
          <div>
            <h3 className="mb-4 text-lg font-medium text-[var(--color-text-primary)]">
              Veličine
            </h3>
            <div className="flex flex-wrap items-center gap-8">
              <div className="text-center">
                <LoadingDots size="sm" />
                <p className="mt-2 text-sm text-[var(--color-text-secondary)]">sm</p>
              </div>
              <div className="text-center">
                <LoadingDots size="md" />
                <p className="mt-2 text-sm text-[var(--color-text-secondary)]">md</p>
              </div>
              <div className="text-center">
                <LoadingDots size="lg" />
                <p className="mt-2 text-sm text-[var(--color-text-secondary)]">lg</p>
              </div>
            </div>
          </div>

          {/* In Buttons */}
          <div>
            <h3 className="mb-4 text-lg font-medium text-[var(--color-text-primary)]">
              U gumbima
            </h3>
            <div className="flex flex-wrap items-center gap-4">
              <button className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-primary-500)] text-white rounded-[var(--radius-button)] opacity-70 cursor-not-allowed">
                Spremanje <LoadingDots size="sm" variant="white" />
              </button>
              <button className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-secondary-800)] text-white rounded-[var(--radius-button)] opacity-70 cursor-not-allowed">
                Učitavanje <LoadingDots size="sm" variant="white" />
              </button>
              <button className="inline-flex items-center gap-2 px-4 py-2 border border-[var(--color-border-primary)] rounded-[var(--radius-button)] opacity-70 cursor-not-allowed">
                Obrada <LoadingDots size="sm" variant="current" />
              </button>
            </div>
          </div>

          {/* In Text */}
          <div>
            <h3 className="mb-4 text-lg font-medium text-[var(--color-text-primary)]">
              U tekstu
            </h3>
            <p className="text-[var(--color-text-secondary)]">
              Učitavanje podataka <LoadingDots size="sm" variant="current" />
            </p>
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
{`import {
  LoadingSpinner,
  LoadingOverlay,
  LoadingDots
} from '@/src/components/ui/LoadingSpinner'

// Basic LoadingSpinner
<LoadingSpinner size="md" />

// With label
<LoadingSpinner
  size="lg"
  label="Učitavanje..."
  showLabel
/>

// LoadingOverlay for covering content
<div className="relative">
  <ContentComponent />
  <LoadingOverlay
    isLoading={isLoading}
    label="Učitavanje..."
    showLabel
    blur
  />
</div>

// LoadingDots for inline usage
<button disabled>
  Spremanje <LoadingDots size="sm" variant="white" />
</button>`}
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
            <h3 className="mb-2 font-medium text-[var(--color-text-primary)]">Veličine</h3>
            <ul className="space-y-1 text-sm text-[var(--color-text-secondary)]">
              <li><code>--spinner-size-sm: 16px</code></li>
              <li><code>--spinner-size-md: 24px</code></li>
              <li><code>--spinner-size-lg: 32px</code></li>
              <li><code>--spinner-size-xl: 48px</code></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-2 font-medium text-[var(--color-text-primary)]">Stilovi</h3>
            <ul className="space-y-1 text-sm text-[var(--color-text-secondary)]">
              <li><code>--spinner-border-width: 2px</code></li>
              <li><code>--spinner-color: var(--color-primary-500)</code></li>
              <li><code>--spinner-track-color: var(--color-neutral-200)</code></li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

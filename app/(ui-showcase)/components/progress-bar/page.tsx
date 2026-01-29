import {
  ProgressBar,
  ProgressBarGroup,
  CircularProgress,
} from '@/src/components/ui/ProgressBar'

export const metadata = {
  title: 'ProgressBar - Components',
  description: 'ProgressBar komponenta za prikaz napretka',
}

export default function ProgressBarPage() {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-12">
        <h1 className="mb-2 text-3xl font-bold text-[var(--color-text-primary)]">
          ProgressBar
        </h1>
        <p className="text-[var(--color-text-secondary)]">
          ProgressBar komponenta za vizualni prikaz napretka, statusa ili učitavanja. Podržava linearne i kružne varijante.
        </p>
      </div>

      {/* Basic Usage */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Osnovna upotreba
        </h2>
        <div className="max-w-xl space-y-6">
          <ProgressBar value={25} />
          <ProgressBar value={50} />
          <ProgressBar value={75} />
          <ProgressBar value={100} />
        </div>
      </section>

      {/* Variants */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Varijante boja
        </h2>
        <div className="max-w-xl space-y-4">
          <div>
            <span className="text-sm text-[var(--color-text-secondary)]">Primary</span>
            <ProgressBar value={60} variant="primary" />
          </div>
          <div>
            <span className="text-sm text-[var(--color-text-secondary)]">Success</span>
            <ProgressBar value={80} variant="success" />
          </div>
          <div>
            <span className="text-sm text-[var(--color-text-secondary)]">Warning</span>
            <ProgressBar value={45} variant="warning" />
          </div>
          <div>
            <span className="text-sm text-[var(--color-text-secondary)]">Error</span>
            <ProgressBar value={30} variant="error" />
          </div>
          <div>
            <span className="text-sm text-[var(--color-text-secondary)]">Info</span>
            <ProgressBar value={70} variant="info" />
          </div>
        </div>
      </section>

      {/* Sizes */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Veličine
        </h2>
        <div className="max-w-xl space-y-6">
          <div>
            <span className="text-sm text-[var(--color-text-secondary)]">Small (sm)</span>
            <ProgressBar value={60} size="sm" />
          </div>
          <div>
            <span className="text-sm text-[var(--color-text-secondary)]">Medium (md) - default</span>
            <ProgressBar value={60} size="md" />
          </div>
          <div>
            <span className="text-sm text-[var(--color-text-secondary)]">Large (lg)</span>
            <ProgressBar value={60} size="lg" />
          </div>
        </div>
      </section>

      {/* With Labels */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Sa labelom
        </h2>
        <div className="max-w-xl space-y-8">
          <div>
            <p className="mb-2 text-sm text-[var(--color-text-secondary)]">Label position: outside (default)</p>
            <ProgressBar value={65} showLabel labelPosition="outside" />
          </div>
          <div>
            <p className="mb-2 text-sm text-[var(--color-text-secondary)]">Label position: top</p>
            <ProgressBar value={42} showLabel labelPosition="top" />
          </div>
          <div>
            <p className="mb-2 text-sm text-[var(--color-text-secondary)]">Label position: inside (requires size lg)</p>
            <ProgressBar value={78} showLabel labelPosition="inside" size="lg" />
          </div>
        </div>
      </section>

      {/* Striped & Animated */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Striped i animirano
        </h2>
        <div className="max-w-xl space-y-6">
          <div>
            <p className="mb-2 text-sm text-[var(--color-text-secondary)]">Striped</p>
            <ProgressBar value={70} striped size="md" />
          </div>
          <div>
            <p className="mb-2 text-sm text-[var(--color-text-secondary)]">Striped + Animated</p>
            <ProgressBar value={70} striped animated size="md" />
          </div>
        </div>
      </section>

      {/* Indeterminate */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Indeterminate (beskonačno)
        </h2>
        <p className="mb-4 text-sm text-[var(--color-text-secondary)]">
          Koristi se kada nije poznat ukupni napredak
        </p>
        <div className="max-w-xl space-y-4">
          <ProgressBar value={0} indeterminate variant="primary" />
          <ProgressBar value={0} indeterminate variant="success" />
          <ProgressBar value={0} indeterminate variant="info" />
        </div>
      </section>

      {/* Progress Bar Group */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          ProgressBarGroup (Multi-segment)
        </h2>
        <p className="mb-4 text-sm text-[var(--color-text-secondary)]">
          Za prikaz više segmenata u jednom progress baru
        </p>
        <div className="max-w-xl space-y-8">
          <ProgressBarGroup
            segments={[
              { value: 30, variant: 'success', label: 'Završeno (30%)' },
              { value: 20, variant: 'warning', label: 'U toku (20%)' },
              { value: 50, variant: 'error', label: 'Preostalo (50%)' },
            ]}
            showLegend
          />
          <ProgressBarGroup
            segments={[
              { value: 40, variant: 'primary' },
              { value: 35, variant: 'info' },
              { value: 25, variant: 'success' },
            ]}
            size="lg"
          />
        </div>
      </section>

      {/* Circular Progress */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          CircularProgress
        </h2>

        <div className="mb-8">
          <h3 className="mb-4 text-lg font-medium text-[var(--color-text-primary)]">
            Veličine
          </h3>
          <div className="flex items-end gap-8">
            <div className="text-center">
              <CircularProgress value={60} size="sm" />
              <p className="mt-2 text-xs text-[var(--color-text-tertiary)]">sm</p>
            </div>
            <div className="text-center">
              <CircularProgress value={60} size="md" />
              <p className="mt-2 text-xs text-[var(--color-text-tertiary)]">md</p>
            </div>
            <div className="text-center">
              <CircularProgress value={60} size="lg" />
              <p className="mt-2 text-xs text-[var(--color-text-tertiary)]">lg</p>
            </div>
            <div className="text-center">
              <CircularProgress value={60} size="xl" />
              <p className="mt-2 text-xs text-[var(--color-text-tertiary)]">xl</p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="mb-4 text-lg font-medium text-[var(--color-text-primary)]">
            Sa labelom
          </h3>
          <div className="flex items-center gap-8">
            <CircularProgress value={25} size="lg" showLabel />
            <CircularProgress value={50} size="lg" showLabel variant="success" />
            <CircularProgress value={75} size="lg" showLabel variant="warning" />
            <CircularProgress value={100} size="lg" showLabel variant="info" />
          </div>
        </div>

        <div className="mb-8">
          <h3 className="mb-4 text-lg font-medium text-[var(--color-text-primary)]">
            Varijante
          </h3>
          <div className="flex items-center gap-6">
            <CircularProgress value={70} size="xl" showLabel variant="primary" />
            <CircularProgress value={70} size="xl" showLabel variant="success" />
            <CircularProgress value={70} size="xl" showLabel variant="warning" />
            <CircularProgress value={70} size="xl" showLabel variant="error" />
            <CircularProgress value={70} size="xl" showLabel variant="info" />
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-medium text-[var(--color-text-primary)]">
            Indeterminate
          </h3>
          <div className="flex items-center gap-6">
            <CircularProgress value={0} size="md" indeterminate />
            <CircularProgress value={0} size="lg" indeterminate variant="success" />
            <CircularProgress value={0} size="xl" indeterminate variant="info" />
          </div>
        </div>
      </section>

      {/* Real World Examples */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Primjeri korištenja
        </h2>

        {/* File Upload */}
        <div className="mb-8">
          <h3 className="mb-4 text-lg font-medium text-[var(--color-text-primary)]">
            Upload fajla
          </h3>
          <div className="max-w-md p-4 border border-[var(--color-border-primary)] rounded-[var(--radius-lg)]">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-[var(--color-neutral-100)] rounded-[var(--radius-md)] flex items-center justify-center">
                <FileIcon />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-[var(--color-text-primary)] truncate">dokument.pdf</p>
                <p className="text-xs text-[var(--color-text-tertiary)]">2.4 MB od 5 MB</p>
              </div>
              <span className="text-sm font-medium text-[var(--color-text-primary)]">48%</span>
            </div>
            <ProgressBar value={48} variant="primary" size="sm" />
          </div>
        </div>

        {/* Order Progress */}
        <div className="mb-8">
          <h3 className="mb-4 text-lg font-medium text-[var(--color-text-primary)]">
            Status narudžbe
          </h3>
          <div className="max-w-lg">
            <ProgressBarGroup
              segments={[
                { value: 25, variant: 'success', label: 'Naručeno' },
                { value: 25, variant: 'success', label: 'Obrađeno' },
                { value: 25, variant: 'primary', label: 'U transportu' },
                { value: 25, variant: 'info', label: 'Dostavljeno' },
              ]}
              showLegend
              size="md"
            />
          </div>
        </div>

        {/* Skill Level */}
        <div className="mb-8">
          <h3 className="mb-4 text-lg font-medium text-[var(--color-text-primary)]">
            Nivo vještine
          </h3>
          <div className="max-w-md space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm text-[var(--color-text-primary)]">JavaScript</span>
                <span className="text-sm text-[var(--color-text-secondary)]">90%</span>
              </div>
              <ProgressBar value={90} variant="success" size="sm" />
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm text-[var(--color-text-primary)]">React</span>
                <span className="text-sm text-[var(--color-text-secondary)]">85%</span>
              </div>
              <ProgressBar value={85} variant="info" size="sm" />
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm text-[var(--color-text-primary)]">TypeScript</span>
                <span className="text-sm text-[var(--color-text-secondary)]">75%</span>
              </div>
              <ProgressBar value={75} variant="primary" size="sm" />
            </div>
          </div>
        </div>

        {/* Dashboard Stats */}
        <div>
          <h3 className="mb-4 text-lg font-medium text-[var(--color-text-primary)]">
            Dashboard statistika
          </h3>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="p-4 border border-[var(--color-border-primary)] rounded-[var(--radius-lg)] text-center">
              <CircularProgress value={72} size="xl" showLabel variant="success" />
              <p className="mt-2 text-sm text-[var(--color-text-secondary)]">Izvršene narudžbe</p>
            </div>
            <div className="p-4 border border-[var(--color-border-primary)] rounded-[var(--radius-lg)] text-center">
              <CircularProgress value={45} size="xl" showLabel variant="warning" />
              <p className="mt-2 text-sm text-[var(--color-text-secondary)]">Popunjenost zaliha</p>
            </div>
            <div className="p-4 border border-[var(--color-border-primary)] rounded-[var(--radius-lg)] text-center">
              <CircularProgress value={89} size="xl" showLabel variant="info" />
              <p className="mt-2 text-sm text-[var(--color-text-secondary)]">Zadovoljstvo kupaca</p>
            </div>
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
{`import { ProgressBar, ProgressBarGroup, CircularProgress } from '@/src/components/ui/ProgressBar'

// Basic usage
<ProgressBar value={60} />

// With label
<ProgressBar value={75} showLabel labelPosition="top" />

// Variants
<ProgressBar value={80} variant="success" />

// Sizes
<ProgressBar value={50} size="lg" />

// Striped & animated
<ProgressBar value={70} striped animated />

// Indeterminate
<ProgressBar value={0} indeterminate />

// Multi-segment
<ProgressBarGroup
  segments={[
    { value: 30, variant: 'success', label: 'Završeno' },
    { value: 20, variant: 'warning', label: 'U toku' },
  ]}
  showLegend
/>

// Circular
<CircularProgress value={75} size="lg" showLabel />`}
          </code>
        </pre>
      </section>

      {/* CSS Variables */}
      <section className="mt-8 rounded-[var(--radius-card)] bg-[var(--color-bg-secondary)] p-6">
        <h2 className="mb-4 text-xl font-semibold text-[var(--color-text-primary)]">
          CSS Varijable
        </h2>
        <ul className="space-y-1 text-sm text-[var(--color-text-secondary)]">
          <li><code>--progress-height-sm: 4px</code></li>
          <li><code>--progress-height-md: 8px</code></li>
          <li><code>--progress-height-lg: 12px</code></li>
          <li><code>--progress-radius: var(--radius-full)</code></li>
        </ul>
      </section>
    </div>
  )
}

function FileIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-text-secondary)]">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
    </svg>
  )
}

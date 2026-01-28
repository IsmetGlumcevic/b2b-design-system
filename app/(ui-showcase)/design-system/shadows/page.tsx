export const metadata = {
  title: 'Shadows - Design System',
  description: 'Elevation levels and shadow tokens',
}

const shadows = [
  { name: 'xs', variable: '--shadow-xs', description: 'Subtle elevation' },
  { name: 'sm', variable: '--shadow-sm', description: 'Low elevation' },
  { name: 'md', variable: '--shadow-md', description: 'Medium elevation' },
  { name: 'lg', variable: '--shadow-lg', description: 'High elevation' },
  { name: 'xl', variable: '--shadow-xl', description: 'Higher elevation' },
  { name: '2xl', variable: '--shadow-2xl', description: 'Highest elevation' },
  { name: 'inner', variable: '--shadow-inner', description: 'Inset shadow' },
]

const focusShadows = [
  { name: 'focus', variable: '--shadow-focus', description: 'Default focus ring' },
  { name: 'focus-error', variable: '--shadow-focus-error', description: 'Error focus ring' },
]

export default function ShadowsPage() {
  return (
    <div className="p-8">
      <div className="mb-12">
        <h1 className="mb-2 text-3xl font-bold text-[var(--color-text-primary)]">
          Shadows
        </h1>
        <p className="text-[var(--color-text-secondary)]">
          Elevation levels for creating depth and visual hierarchy.
        </p>
      </div>

      {/* Shadow Scale */}
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-[var(--color-text-primary)]">
          Elevation Scale
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {shadows.map((shadow) => (
            <div key={shadow.name} className="space-y-3">
              <div
                className="flex h-24 items-center justify-center rounded-[var(--radius-card)] bg-[var(--color-bg-primary)]"
                style={{ boxShadow: `var(${shadow.variable})` }}
              >
                <span className="font-mono text-sm text-[var(--color-text-secondary)]">
                  {shadow.name}
                </span>
              </div>
              <div>
                <p className="font-mono text-sm font-medium text-[var(--color-text-primary)]">
                  {shadow.variable}
                </p>
                <p className="text-xs text-[var(--color-text-tertiary)]">
                  {shadow.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison */}
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-[var(--color-text-primary)]">
          Comparison
        </h2>
        <div className="flex flex-wrap items-end justify-center gap-8 rounded-[var(--radius-card)] border border-[var(--color-border-primary)] bg-[var(--color-bg-secondary)] p-8">
          {shadows
            .filter((s) => s.name !== 'inner')
            .map((shadow) => (
              <div key={shadow.name} className="flex flex-col items-center gap-2">
                <div
                  className="h-16 w-16 rounded-lg bg-[var(--color-bg-primary)]"
                  style={{ boxShadow: `var(${shadow.variable})` }}
                />
                <span className="font-mono text-xs text-[var(--color-text-tertiary)]">
                  {shadow.name}
                </span>
              </div>
            ))}
        </div>
      </section>

      {/* Focus Shadows */}
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-[var(--color-text-primary)]">
          Focus Rings
        </h2>
        <p className="mb-4 text-sm text-[var(--color-text-secondary)]">
          Shadow-based focus indicators for accessibility.
        </p>
        <div className="flex flex-wrap gap-8">
          {focusShadows.map((shadow) => (
            <div key={shadow.name} className="space-y-3">
              <div
                className="flex h-12 w-48 items-center justify-center rounded-[var(--radius-button)] border border-[var(--color-border-primary)] bg-[var(--color-bg-primary)]"
                style={{ boxShadow: `var(${shadow.variable})` }}
              >
                <span className="text-sm text-[var(--color-text-secondary)]">
                  Focused
                </span>
              </div>
              <div>
                <p className="font-mono text-sm font-medium text-[var(--color-text-primary)]">
                  {shadow.name}
                </p>
                <p className="text-xs text-[var(--color-text-tertiary)]">
                  {shadow.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Use Cases */}
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-[var(--color-text-primary)]">
          Use Cases
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-[var(--radius-card)] border border-[var(--color-border-primary)] p-4">
            <h3 className="mb-2 text-sm font-medium text-[var(--color-text-primary)]">
              Cards
            </h3>
            <div
              className="h-20 rounded-lg bg-[var(--color-bg-primary)]"
              style={{ boxShadow: 'var(--shadow-sm)' }}
            />
            <p className="mt-2 font-mono text-xs text-[var(--color-text-tertiary)]">
              shadow-sm
            </p>
          </div>
          <div className="rounded-[var(--radius-card)] border border-[var(--color-border-primary)] p-4">
            <h3 className="mb-2 text-sm font-medium text-[var(--color-text-primary)]">
              Dropdowns
            </h3>
            <div
              className="h-20 rounded-lg bg-[var(--color-bg-primary)]"
              style={{ boxShadow: 'var(--shadow-lg)' }}
            />
            <p className="mt-2 font-mono text-xs text-[var(--color-text-tertiary)]">
              shadow-lg
            </p>
          </div>
          <div className="rounded-[var(--radius-card)] border border-[var(--color-border-primary)] p-4">
            <h3 className="mb-2 text-sm font-medium text-[var(--color-text-primary)]">
              Modals
            </h3>
            <div
              className="h-20 rounded-lg bg-[var(--color-bg-primary)]"
              style={{ boxShadow: 'var(--shadow-xl)' }}
            />
            <p className="mt-2 font-mono text-xs text-[var(--color-text-tertiary)]">
              shadow-xl
            </p>
          </div>
        </div>
      </section>

      {/* Usage */}
      <section className="rounded-[var(--radius-card)] bg-[var(--color-bg-secondary)] p-6">
        <h2 className="mb-4 text-xl font-semibold text-[var(--color-text-primary)]">
          Usage
        </h2>
        <pre className="overflow-x-auto rounded-md bg-[var(--color-bg-tertiary)] p-4">
          <code className="text-sm text-[var(--color-text-primary)]">
{`// Tailwind with CSS variables
<div className="shadow-[var(--shadow-md)]">
  Card content
</div>

<button className="focus:shadow-[var(--shadow-focus)]">
  Button
</button>

// CSS
.card {
  box-shadow: var(--shadow-sm);
}

.card:hover {
  box-shadow: var(--shadow-md);
}

.dropdown {
  box-shadow: var(--shadow-lg);
}

.modal {
  box-shadow: var(--shadow-xl);
}`}
          </code>
        </pre>
      </section>
    </div>
  )
}

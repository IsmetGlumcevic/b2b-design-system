export const metadata = {
  title: 'Spacing - Design System',
  description: 'Consistent spacing scale',
}

const spacingScale = [
  { name: '0', variable: '--spacing-0', value: '0', px: '0px' },
  { name: '0.5', variable: '--spacing-0-5', value: '0.125rem', px: '2px' },
  { name: '1', variable: '--spacing-1', value: '0.25rem', px: '4px' },
  { name: '1.5', variable: '--spacing-1-5', value: '0.375rem', px: '6px' },
  { name: '2', variable: '--spacing-2', value: '0.5rem', px: '8px' },
  { name: '2.5', variable: '--spacing-2-5', value: '0.625rem', px: '10px' },
  { name: '3', variable: '--spacing-3', value: '0.75rem', px: '12px' },
  { name: '3.5', variable: '--spacing-3-5', value: '0.875rem', px: '14px' },
  { name: '4', variable: '--spacing-4', value: '1rem', px: '16px' },
  { name: '5', variable: '--spacing-5', value: '1.25rem', px: '20px' },
  { name: '6', variable: '--spacing-6', value: '1.5rem', px: '24px' },
  { name: '7', variable: '--spacing-7', value: '1.75rem', px: '28px' },
  { name: '8', variable: '--spacing-8', value: '2rem', px: '32px' },
  { name: '9', variable: '--spacing-9', value: '2.25rem', px: '36px' },
  { name: '10', variable: '--spacing-10', value: '2.5rem', px: '40px' },
  { name: '11', variable: '--spacing-11', value: '2.75rem', px: '44px' },
  { name: '12', variable: '--spacing-12', value: '3rem', px: '48px' },
  { name: '14', variable: '--spacing-14', value: '3.5rem', px: '56px' },
  { name: '16', variable: '--spacing-16', value: '4rem', px: '64px' },
  { name: '20', variable: '--spacing-20', value: '5rem', px: '80px' },
  { name: '24', variable: '--spacing-24', value: '6rem', px: '96px' },
  { name: '28', variable: '--spacing-28', value: '7rem', px: '112px' },
  { name: '32', variable: '--spacing-32', value: '8rem', px: '128px' },
]

const borderRadii = [
  { name: 'none', variable: '--radius-none', value: '0' },
  { name: 'sm', variable: '--radius-sm', value: '0.125rem', px: '2px' },
  { name: 'default', variable: '--radius-default', value: '0.25rem', px: '4px' },
  { name: 'md', variable: '--radius-md', value: '0.375rem', px: '6px' },
  { name: 'lg', variable: '--radius-lg', value: '0.5rem', px: '8px' },
  { name: 'xl', variable: '--radius-xl', value: '0.75rem', px: '12px' },
  { name: '2xl', variable: '--radius-2xl', value: '1rem', px: '16px' },
  { name: '3xl', variable: '--radius-3xl', value: '1.5rem', px: '24px' },
  { name: 'full', variable: '--radius-full', value: '9999px', px: '∞' },
]

const componentRadii = [
  { name: 'button', variable: '--radius-button', value: '0.5rem' },
  { name: 'input', variable: '--radius-input', value: '0.5rem' },
  { name: 'card', variable: '--radius-card', value: '0.75rem' },
  { name: 'modal', variable: '--radius-modal', value: '1rem' },
  { name: 'badge', variable: '--radius-badge', value: '9999px' },
]

export default function SpacingPage() {
  return (
    <div className="p-8">
      <div className="mb-12">
        <h1 className="mb-2 text-3xl font-bold text-[var(--color-text-primary)]">
          Spacing
        </h1>
        <p className="text-[var(--color-text-secondary)]">
          Consistent spacing scale for margins, padding, gaps, and sizing.
        </p>
      </div>

      {/* Spacing Scale */}
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-[var(--color-text-primary)]">
          Spacing Scale
        </h2>
        <div className="space-y-2">
          {spacingScale.map((space) => (
            <div key={space.name} className="flex items-center gap-4">
              <div className="w-16 shrink-0 text-right">
                <span className="font-mono text-sm text-[var(--color-text-primary)]">
                  {space.name}
                </span>
              </div>
              <div
                className="h-4 rounded-sm bg-[var(--color-primary-500)]"
                style={{ width: `var(${space.variable})` }}
              />
              <span className="font-mono text-xs text-[var(--color-text-tertiary)]">
                {space.px}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Border Radius */}
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-[var(--color-text-primary)]">
          Border Radius
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {borderRadii.map((radius) => (
            <div
              key={radius.name}
              className="flex flex-col items-center gap-2 rounded-lg border border-[var(--color-border-primary)] p-4"
            >
              <div
                className="h-16 w-16 bg-[var(--color-primary-500)]"
                style={{ borderRadius: `var(${radius.variable})` }}
              />
              <div className="text-center">
                <p className="font-mono text-sm font-medium text-[var(--color-text-primary)]">
                  {radius.name}
                </p>
                <p className="font-mono text-xs text-[var(--color-text-tertiary)]">
                  {radius.px || radius.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Component-specific Radius */}
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-[var(--color-text-primary)]">
          Component Radius
        </h2>
        <p className="mb-4 text-sm text-[var(--color-text-secondary)]">
          Pre-defined radius values for specific component types.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {componentRadii.map((radius) => (
            <div
              key={radius.name}
              className="rounded-lg border border-[var(--color-border-primary)] p-4"
            >
              <div
                className="mb-3 h-12 w-full bg-[var(--color-primary-500)]"
                style={{ borderRadius: `var(${radius.variable})` }}
              />
              <p className="font-mono text-sm font-medium text-[var(--color-text-primary)]">
                {radius.name}
              </p>
              <p className="font-mono text-xs text-[var(--color-text-tertiary)]">
                {radius.value}
              </p>
            </div>
          ))}
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
<div className="p-[var(--spacing-4)] gap-[var(--spacing-2)]">
  <button className="rounded-[var(--radius-button)]">
    Click me
  </button>
</div>

// CSS
.card {
  padding: var(--spacing-6);
  margin-bottom: var(--spacing-4);
  border-radius: var(--radius-card);
  gap: var(--spacing-3);
}`}
          </code>
        </pre>
      </section>
    </div>
  )
}

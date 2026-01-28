export const metadata = {
  title: 'Colors - Design System',
  description: 'Color palette and semantic color tokens',
}

const colorGroups = [
  {
    name: 'Primary',
    description: 'Main brand color used for primary actions and highlights',
    colors: [
      { name: 'primary-50', variable: '--color-primary-50', value: '#eff6ff' },
      { name: 'primary-100', variable: '--color-primary-100', value: '#dbeafe' },
      { name: 'primary-200', variable: '--color-primary-200', value: '#bfdbfe' },
      { name: 'primary-300', variable: '--color-primary-300', value: '#93c5fd' },
      { name: 'primary-400', variable: '--color-primary-400', value: '#60a5fa' },
      { name: 'primary-500', variable: '--color-primary-500', value: '#3b82f6' },
      { name: 'primary-600', variable: '--color-primary-600', value: '#2563eb' },
      { name: 'primary-700', variable: '--color-primary-700', value: '#1d4ed8' },
      { name: 'primary-800', variable: '--color-primary-800', value: '#1e40af' },
      { name: 'primary-900', variable: '--color-primary-900', value: '#1e3a8a' },
      { name: 'primary-950', variable: '--color-primary-950', value: '#172554' },
    ],
  },
  {
    name: 'Secondary',
    description: 'Accent color for secondary actions and highlights',
    colors: [
      { name: 'secondary-50', variable: '--color-secondary-50', value: '#f0fdf4' },
      { name: 'secondary-100', variable: '--color-secondary-100', value: '#dcfce7' },
      { name: 'secondary-200', variable: '--color-secondary-200', value: '#bbf7d0' },
      { name: 'secondary-300', variable: '--color-secondary-300', value: '#86efac' },
      { name: 'secondary-400', variable: '--color-secondary-400', value: '#4ade80' },
      { name: 'secondary-500', variable: '--color-secondary-500', value: '#22c55e' },
      { name: 'secondary-600', variable: '--color-secondary-600', value: '#16a34a' },
      { name: 'secondary-700', variable: '--color-secondary-700', value: '#15803d' },
      { name: 'secondary-800', variable: '--color-secondary-800', value: '#166534' },
      { name: 'secondary-900', variable: '--color-secondary-900', value: '#14532d' },
      { name: 'secondary-950', variable: '--color-secondary-950', value: '#052e16' },
    ],
  },
  {
    name: 'Neutral',
    description: 'Gray scale for text, backgrounds, and borders',
    colors: [
      { name: 'neutral-50', variable: '--color-neutral-50', value: '#f9fafb' },
      { name: 'neutral-100', variable: '--color-neutral-100', value: '#f3f4f6' },
      { name: 'neutral-200', variable: '--color-neutral-200', value: '#e5e7eb' },
      { name: 'neutral-300', variable: '--color-neutral-300', value: '#d1d5db' },
      { name: 'neutral-400', variable: '--color-neutral-400', value: '#9ca3af' },
      { name: 'neutral-500', variable: '--color-neutral-500', value: '#6b7280' },
      { name: 'neutral-600', variable: '--color-neutral-600', value: '#4b5563' },
      { name: 'neutral-700', variable: '--color-neutral-700', value: '#374151' },
      { name: 'neutral-800', variable: '--color-neutral-800', value: '#1f2937' },
      { name: 'neutral-900', variable: '--color-neutral-900', value: '#111827' },
      { name: 'neutral-950', variable: '--color-neutral-950', value: '#030712' },
    ],
  },
]

const semanticColors = [
  {
    name: 'Success',
    description: 'Used for positive feedback and success states',
    colors: [
      { name: 'success-50', variable: '--color-success-50', value: '#f0fdf4' },
      { name: 'success-500', variable: '--color-success-500', value: '#22c55e' },
      { name: 'success-600', variable: '--color-success-600', value: '#16a34a' },
      { name: 'success-700', variable: '--color-success-700', value: '#15803d' },
    ],
  },
  {
    name: 'Error',
    description: 'Used for errors and destructive actions',
    colors: [
      { name: 'error-50', variable: '--color-error-50', value: '#fef2f2' },
      { name: 'error-500', variable: '--color-error-500', value: '#ef4444' },
      { name: 'error-600', variable: '--color-error-600', value: '#dc2626' },
      { name: 'error-700', variable: '--color-error-700', value: '#b91c1c' },
    ],
  },
  {
    name: 'Warning',
    description: 'Used for warnings and cautionary messages',
    colors: [
      { name: 'warning-50', variable: '--color-warning-50', value: '#fffbeb' },
      { name: 'warning-500', variable: '--color-warning-500', value: '#f59e0b' },
      { name: 'warning-600', variable: '--color-warning-600', value: '#d97706' },
      { name: 'warning-700', variable: '--color-warning-700', value: '#b45309' },
    ],
  },
  {
    name: 'Info',
    description: 'Used for informational messages',
    colors: [
      { name: 'info-50', variable: '--color-info-50', value: '#eff6ff' },
      { name: 'info-500', variable: '--color-info-500', value: '#3b82f6' },
      { name: 'info-600', variable: '--color-info-600', value: '#2563eb' },
      { name: 'info-700', variable: '--color-info-700', value: '#1d4ed8' },
    ],
  },
]

const tokenColors = [
  {
    name: 'Backgrounds',
    colors: [
      { name: 'bg-primary', variable: '--color-bg-primary', value: '#ffffff', description: 'Main background' },
      { name: 'bg-secondary', variable: '--color-bg-secondary', value: '#f9fafb', description: 'Secondary/card background' },
      { name: 'bg-tertiary', variable: '--color-bg-tertiary', value: '#f3f4f6', description: 'Subtle background' },
      { name: 'bg-elevated', variable: '--color-bg-elevated', value: '#ffffff', description: 'Cards, modals' },
    ],
  },
  {
    name: 'Text',
    colors: [
      { name: 'text-primary', variable: '--color-text-primary', value: '#111827', description: 'Primary text' },
      { name: 'text-secondary', variable: '--color-text-secondary', value: '#6b7280', description: 'Secondary text' },
      { name: 'text-tertiary', variable: '--color-text-tertiary', value: '#9ca3af', description: 'Muted text' },
      { name: 'text-inverse', variable: '--color-text-inverse', value: '#ffffff', description: 'Inverse text' },
    ],
  },
  {
    name: 'Borders',
    colors: [
      { name: 'border-primary', variable: '--color-border-primary', value: '#e5e7eb', description: 'Default border' },
      { name: 'border-secondary', variable: '--color-border-secondary', value: '#d1d5db', description: 'Stronger border' },
      { name: 'border-focus', variable: '--color-border-focus', value: 'primary-500', description: 'Focus ring' },
      { name: 'border-error', variable: '--color-border-error', value: 'error-500', description: 'Error border' },
    ],
  },
]

function ColorSwatch({
  name,
  variable,
  value,
}: {
  name: string
  variable: string
  value?: string
}) {
  return (
    <div className="space-y-2">
      <div
        className="h-16 w-full rounded-lg border border-[var(--color-border-primary)]"
        style={{ backgroundColor: `var(${variable})` }}
      />
      <div className="text-xs">
        <p className="truncate font-mono font-medium text-[var(--color-text-primary)]">
          {name}
        </p>
        {value && (
          <p className="font-mono text-[var(--color-text-tertiary)]">{value}</p>
        )}
      </div>
    </div>
  )
}

export default function ColorsPage() {
  return (
    <div className="p-8">
      <div className="mb-12">
        <h1 className="mb-2 text-3xl font-bold text-[var(--color-text-primary)]">
          Colors
        </h1>
        <p className="text-[var(--color-text-secondary)]">
          Color palette defined as CSS variables for consistent theming.
        </p>
      </div>

      {/* Brand Colors */}
      {colorGroups.map((group) => (
        <section key={group.name} className="mb-12">
          <h2 className="mb-1 text-xl font-semibold text-[var(--color-text-primary)]">
            {group.name}
          </h2>
          <p className="mb-4 text-sm text-[var(--color-text-secondary)]">
            {group.description}
          </p>
          <div className="grid grid-cols-5 gap-2 md:grid-cols-11">
            {group.colors.map((color) => (
              <ColorSwatch
                key={color.name}
                name={color.name}
                variable={color.variable}
                value={color.value}
              />
            ))}
          </div>
        </section>
      ))}

      {/* Semantic Colors */}
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-[var(--color-text-primary)]">
          Semantic Colors
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {semanticColors.map((group) => (
            <div key={group.name}>
              <h3 className="mb-1 text-base font-medium text-[var(--color-text-primary)]">
                {group.name}
              </h3>
              <p className="mb-3 text-xs text-[var(--color-text-secondary)]">
                {group.description}
              </p>
              <div className="grid grid-cols-4 gap-2">
                {group.colors.map((color) => (
                  <ColorSwatch
                    key={color.name}
                    name={color.name}
                    variable={color.variable}
                    value={color.value}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Token Colors */}
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-[var(--color-text-primary)]">
          Semantic Tokens
        </h2>
        <p className="mb-6 text-sm text-[var(--color-text-secondary)]">
          These tokens reference the color palette and can be overridden per theme.
        </p>

        <div className="space-y-8">
          {tokenColors.map((group) => (
            <div key={group.name}>
              <h3 className="mb-3 text-sm font-medium text-[var(--color-text-primary)]">
                {group.name}
              </h3>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {group.colors.map((color) => (
                  <div
                    key={color.name}
                    className="flex items-center gap-3 rounded-lg border border-[var(--color-border-primary)] p-3"
                  >
                    <div
                      className="h-10 w-10 shrink-0 rounded border border-[var(--color-border-primary)]"
                      style={{ backgroundColor: `var(${color.variable})` }}
                    />
                    <div className="min-w-0">
                      <p className="truncate font-mono text-sm font-medium text-[var(--color-text-primary)]">
                        {color.name}
                      </p>
                      <p className="truncate text-xs text-[var(--color-text-tertiary)]">
                        {color.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Badge Colors Preview */}
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-[var(--color-text-primary)]">
          Badge Colors
        </h2>
        <div className="flex flex-wrap gap-4">
          <span className="inline-flex items-center rounded-full bg-[var(--badge-success-bg)] px-3 py-1 text-sm font-medium text-[var(--badge-success-text)]">
            Success
          </span>
          <span className="inline-flex items-center rounded-full bg-[var(--badge-error-bg)] px-3 py-1 text-sm font-medium text-[var(--badge-error-text)]">
            Error
          </span>
          <span className="inline-flex items-center rounded-full bg-[var(--badge-warning-bg)] px-3 py-1 text-sm font-medium text-[var(--badge-warning-text)]">
            Warning
          </span>
          <span className="inline-flex items-center rounded-full bg-[var(--badge-info-bg)] px-3 py-1 text-sm font-medium text-[var(--badge-info-text)]">
            Info
          </span>
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
<div className="bg-[var(--color-bg-primary)]">
  <span className="text-[var(--color-text-primary)]">
    Hello World
  </span>
</div>

// Badge example
<span className="bg-[var(--badge-success-bg)] text-[var(--badge-success-text)]">
  Success
</span>

// Button primary
<button className="bg-[var(--color-primary-500)] hover:bg-[var(--color-primary-600)]">
  Click me
</button>`}
          </code>
        </pre>
      </section>
    </div>
  )
}

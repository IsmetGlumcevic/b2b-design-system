export const metadata = {
  title: 'Typography - Design System',
  description: 'Font sizes, weights, and line heights',
}

const fontSizes = [
  { name: 'xs', variable: '--font-size-xs', size: '0.75rem', px: '12px' },
  { name: 'sm', variable: '--font-size-sm', size: '0.875rem', px: '14px' },
  { name: 'base', variable: '--font-size-base', size: '1rem', px: '16px' },
  { name: 'lg', variable: '--font-size-lg', size: '1.125rem', px: '18px' },
  { name: 'xl', variable: '--font-size-xl', size: '1.25rem', px: '20px' },
  { name: '2xl', variable: '--font-size-2xl', size: '1.5rem', px: '24px' },
  { name: '3xl', variable: '--font-size-3xl', size: '1.875rem', px: '30px' },
  { name: '4xl', variable: '--font-size-4xl', size: '2.25rem', px: '36px' },
  { name: '5xl', variable: '--font-size-5xl', size: '3rem', px: '48px' },
]

const fontWeights = [
  { name: 'normal', variable: '--font-weight-normal', value: '400' },
  { name: 'medium', variable: '--font-weight-medium', value: '500' },
  { name: 'semibold', variable: '--font-weight-semibold', value: '600' },
  { name: 'bold', variable: '--font-weight-bold', value: '700' },
]

const lineHeights = [
  { name: 'none', variable: '--line-height-none', value: '1' },
  { name: 'tight', variable: '--line-height-tight', value: '1.25' },
  { name: 'snug', variable: '--line-height-snug', value: '1.375' },
  { name: 'normal', variable: '--line-height-normal', value: '1.5' },
  { name: 'relaxed', variable: '--line-height-relaxed', value: '1.625' },
  { name: 'loose', variable: '--line-height-loose', value: '2' },
]

export default function TypographyPage() {
  return (
    <div className="p-8">
      <div className="mb-12">
        <h1 className="mb-2 text-3xl font-bold text-[var(--color-text-primary)]">
          Typography
        </h1>
        <p className="text-[var(--color-text-secondary)]">
          Font sizes, weights, and line heights for consistent text hierarchy.
        </p>
      </div>

      {/* Font Family */}
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-[var(--color-text-primary)]">
          Font Family
        </h2>
        <div className="space-y-4 rounded-[var(--radius-card)] border border-[var(--color-border-primary)] p-6">
          <div>
            <p className="mb-1 text-sm text-[var(--color-text-tertiary)]">
              Sans (Default)
            </p>
            <p
              className="text-2xl text-[var(--color-text-primary)]"
              style={{ fontFamily: 'var(--font-family-sans)' }}
            >
              The quick brown fox jumps over the lazy dog
            </p>
            <p className="mt-1 font-mono text-xs text-[var(--color-text-tertiary)]">
              --font-family-sans
            </p>
          </div>
          <div>
            <p className="mb-1 text-sm text-[var(--color-text-tertiary)]">
              Mono
            </p>
            <p
              className="text-2xl text-[var(--color-text-primary)]"
              style={{ fontFamily: 'var(--font-family-mono)' }}
            >
              The quick brown fox jumps over the lazy dog
            </p>
            <p className="mt-1 font-mono text-xs text-[var(--color-text-tertiary)]">
              --font-family-mono
            </p>
          </div>
        </div>
      </section>

      {/* Font Sizes */}
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-[var(--color-text-primary)]">
          Font Sizes
        </h2>
        <div className="space-y-4">
          {fontSizes.map((size) => (
            <div
              key={size.name}
              className="flex items-baseline gap-4 border-b border-[var(--color-border-secondary)] pb-4"
            >
              <div className="w-20 shrink-0">
                <p className="font-mono text-sm font-medium text-[var(--color-text-primary)]">
                  {size.name}
                </p>
                <p className="font-mono text-xs text-[var(--color-text-tertiary)]">
                  {size.px}
                </p>
              </div>
              <p
                className="text-[var(--color-text-primary)]"
                style={{ fontSize: `var(${size.variable})` }}
              >
                The quick brown fox jumps over the lazy dog
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Font Weights */}
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-[var(--color-text-primary)]">
          Font Weights
        </h2>
        <div className="space-y-4">
          {fontWeights.map((weight) => (
            <div
              key={weight.name}
              className="flex items-baseline gap-4 border-b border-[var(--color-border-secondary)] pb-4"
            >
              <div className="w-24 shrink-0">
                <p className="font-mono text-sm font-medium text-[var(--color-text-primary)]">
                  {weight.name}
                </p>
                <p className="font-mono text-xs text-[var(--color-text-tertiary)]">
                  {weight.value}
                </p>
              </div>
              <p
                className="text-xl text-[var(--color-text-primary)]"
                style={{ fontWeight: `var(${weight.variable})` }}
              >
                The quick brown fox jumps over the lazy dog
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Line Heights */}
      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-[var(--color-text-primary)]">
          Line Heights
        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {lineHeights.map((lh) => (
            <div
              key={lh.name}
              className="rounded-[var(--radius-card)] border border-[var(--color-border-primary)] p-4"
            >
              <div className="mb-2 flex items-baseline justify-between">
                <p className="font-mono text-sm font-medium text-[var(--color-text-primary)]">
                  {lh.name}
                </p>
                <p className="font-mono text-xs text-[var(--color-text-tertiary)]">
                  {lh.value}
                </p>
              </div>
              <p
                className="text-sm text-[var(--color-text-secondary)]"
                style={{ lineHeight: `var(${lh.variable})` }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                ad minim veniam.
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
<h1 className="text-[var(--font-size-3xl)] font-[var(--font-weight-bold)]">
  Heading
</h1>

<p className="text-[var(--font-size-base)] leading-[var(--line-height-normal)]">
  Body text
</p>

// CSS
h1 {
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
}`}
          </code>
        </pre>
      </section>
    </div>
  )
}

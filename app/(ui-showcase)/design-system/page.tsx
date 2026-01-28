import Link from 'next/link'

export const metadata = {
  title: 'Design System - UI Showcase',
  description: 'B2B Design System overview',
}

const sections = [
  {
    title: 'Colors',
    description: 'Color palette with primary, neutral, and semantic colors',
    href: '/design-system/colors',
    preview: (
      <div className="flex gap-1">
        <div className="h-8 w-8 rounded bg-[var(--color-primary-500)]" />
        <div className="h-8 w-8 rounded bg-[var(--color-neutral-500)]" />
        <div className="h-8 w-8 rounded bg-[var(--color-success-500)]" />
        <div className="h-8 w-8 rounded bg-[var(--color-warning-500)]" />
        <div className="h-8 w-8 rounded bg-[var(--color-error-500)]" />
      </div>
    ),
  },
  {
    title: 'Typography',
    description: 'Font sizes, weights, and line heights',
    href: '/design-system/typography',
    preview: (
      <div className="space-y-1">
        <p className="text-[var(--font-size-2xl)] font-bold text-[var(--color-text-primary)]">
          Aa
        </p>
        <p className="text-[var(--font-size-sm)] text-[var(--color-text-secondary)]">
          Geist Sans
        </p>
      </div>
    ),
  },
  {
    title: 'Spacing',
    description: 'Consistent spacing scale from 0 to 32',
    href: '/design-system/spacing',
    preview: (
      <div className="flex items-end gap-1">
        <div className="h-2 w-2 rounded-sm bg-[var(--color-primary-300)]" />
        <div className="h-4 w-4 rounded-sm bg-[var(--color-primary-400)]" />
        <div className="h-6 w-6 rounded-sm bg-[var(--color-primary-500)]" />
        <div className="h-8 w-8 rounded-sm bg-[var(--color-primary-600)]" />
      </div>
    ),
  },
  {
    title: 'Shadows',
    description: 'Elevation levels from xs to 2xl',
    href: '/design-system/shadows',
    preview: (
      <div className="flex gap-2">
        <div className="h-8 w-8 rounded bg-[var(--color-bg-primary)] shadow-[var(--shadow-sm)]" />
        <div className="h-8 w-8 rounded bg-[var(--color-bg-primary)] shadow-[var(--shadow-md)]" />
        <div className="h-8 w-8 rounded bg-[var(--color-bg-primary)] shadow-[var(--shadow-lg)]" />
      </div>
    ),
  },
]

export default function DesignSystemPage() {
  return (
    <div className="p-8">
      <div className="mb-12">
        <h1 className="mb-2 text-3xl font-bold text-[var(--color-text-primary)]">
          Design System
        </h1>
        <p className="text-[var(--color-text-secondary)]">
          Foundation tokens and variables for the B2B shop design system.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {sections.map((section) => (
          <Link
            key={section.href}
            href={section.href}
            className="group rounded-[var(--radius-card)] border border-[var(--color-border-primary)] bg-[var(--color-bg-primary)] p-6 transition-all hover:border-[var(--color-border-tertiary)] hover:shadow-[var(--shadow-md)]"
          >
            <div className="mb-4">{section.preview}</div>
            <h2 className="mb-1 text-lg font-semibold text-[var(--color-text-primary)] group-hover:text-[var(--color-text-brand)]">
              {section.title}
            </h2>
            <p className="text-sm text-[var(--color-text-secondary)]">
              {section.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}

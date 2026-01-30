// Template za showcase stranicu: app/(ui-showcase)/components/[component-name]/page.tsx
// Kopiraj ovaj template i prilagodi za svaku komponentu

import { ComponentName } from '@/components/shared/ComponentName'

export const metadata = {
  title: 'ComponentName - UI Showcase',
  description: 'ComponentName komponenta sa svim varijantama i stanjima',
}

export default function ComponentNameShowcase() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)] p-8">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-[var(--color-text-primary)] mb-2">
          ComponentName
        </h1>
        <p className="text-[var(--color-text-secondary)]">
          Kratak opis komponente i njene namjene.
        </p>
      </div>

      {/* Variants Section */}
      <ShowcaseSection title="Variants" description="Dostupne varijante komponente">
        <div className="flex flex-wrap gap-4">
          <ComponentName variant="primary">Primary</ComponentName>
          <ComponentName variant="secondary">Secondary</ComponentName>
          <ComponentName variant="outline">Outline</ComponentName>
          <ComponentName variant="ghost">Ghost</ComponentName>
        </div>
        <CodeBlock code={`<ComponentName variant="primary">Primary</ComponentName>`} />
      </ShowcaseSection>

      {/* Sizes Section */}
      <ShowcaseSection title="Sizes" description="Dostupne veličine">
        <div className="flex flex-wrap items-center gap-4">
          <ComponentName size="sm">Small</ComponentName>
          <ComponentName size="md">Medium</ComponentName>
          <ComponentName size="lg">Large</ComponentName>
        </div>
        <CodeBlock code={`<ComponentName size="sm">Small</ComponentName>`} />
      </ShowcaseSection>

      {/* States Section */}
      <ShowcaseSection title="States" description="Različita stanja komponente">
        <div className="flex flex-wrap gap-4">
          <ComponentName>Default</ComponentName>
          <ComponentName disabled>Disabled</ComponentName>
          <ComponentName loading>Loading</ComponentName>
        </div>
        <CodeBlock code={`<ComponentName disabled>Disabled</ComponentName>`} />
      </ShowcaseSection>

      {/* With Icons Section */}
      <ShowcaseSection title="With Icons" description="Sa ikonicama">
        <div className="flex flex-wrap gap-4">
          <ComponentName leftIcon="plus">With Left Icon</ComponentName>
          <ComponentName rightIcon="arrow-right">With Right Icon</ComponentName>
          <ComponentName leftIcon="cart" rightIcon="arrow-right">Both Icons</ComponentName>
        </div>
        <CodeBlock code={`<ComponentName leftIcon="plus">With Icon</ComponentName>`} />
      </ShowcaseSection>

      {/* Responsive Section */}
      <ShowcaseSection title="Responsive Design" description="Prilagođeno za sve uređaje">
        <div className="space-y-4">
          <div className="p-4 bg-[var(--color-bg-tertiary)] rounded">
            <p className="text-sm font-mono text-[var(--color-text-secondary)] mb-2">
              📱 Mobile (375px - 767px)
            </p>
            <ComponentName className="w-full sm:w-auto">Mobile Version</ComponentName>
          </div>
          <div className="p-4 bg-[var(--color-bg-tertiary)] rounded">
            <p className="text-sm font-mono text-[var(--color-text-secondary)] mb-2">
              📱 Tablet (768px - 1023px)
            </p>
            <ComponentName className="hidden sm:block lg:hidden">Tablet Version</ComponentName>
          </div>
          <div className="p-4 bg-[var(--color-bg-tertiary)] rounded">
            <p className="text-sm font-mono text-[var(--color-text-secondary)] mb-2">
              💻 Desktop (1024px+)
            </p>
            <ComponentName className="hidden lg:block">Desktop Version</ComponentName>
          </div>
        </div>
        <CodeBlock code={`<ComponentName className="w-full sm:w-auto lg:max-w-md">Responsive</ComponentName>`} />
      </ShowcaseSection>

      {/* Props Table */}
      <ShowcaseSection title="Props" description="Dostupni props">
        <PropsTable
          props={[
            { name: 'variant', type: "'primary' | 'secondary' | 'outline' | 'ghost'", default: "'primary'", description: 'Vizualna varijanta' },
            { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Veličina komponente' },
            { name: 'disabled', type: 'boolean', default: 'false', description: 'Onemogući interakciju' },
            { name: 'loading', type: 'boolean', default: 'false', description: 'Prikaži loading state' },
          ]}
        />
      </ShowcaseSection>
    </div>
  )
}

// Helper komponente za showcase
function ShowcaseSection({
  title,
  description,
  children
}: {
  title: string
  description: string
  children: React.ReactNode
}) {
  return (
    <section className="mb-12">
      <h2 className="text-xl font-semibold text-[var(--color-text-primary)] mb-1">
        {title}
      </h2>
      <p className="text-sm text-[var(--color-text-secondary)] mb-4">
        {description}
      </p>
      <div className="p-6 bg-[var(--color-bg-secondary)] rounded-lg border border-[var(--color-border-primary)]">
        {children}
      </div>
    </section>
  )
}

function CodeBlock({ code }: { code: string }) {
  return (
    <pre className="mt-4 p-4 bg-[var(--color-bg-tertiary)] rounded-md overflow-x-auto">
      <code className="text-sm text-[var(--color-text-primary)]">{code}</code>
    </pre>
  )
}

function PropsTable({ props }: { props: Array<{ name: string; type: string; default: string; description: string }> }) {
  return (
    <table className="w-full text-sm">
      <thead>
        <tr className="border-b border-[var(--color-border-primary)]">
          <th className="text-left py-2 text-[var(--color-text-primary)]">Prop</th>
          <th className="text-left py-2 text-[var(--color-text-primary)]">Type</th>
          <th className="text-left py-2 text-[var(--color-text-primary)]">Default</th>
          <th className="text-left py-2 text-[var(--color-text-primary)]">Description</th>
        </tr>
      </thead>
      <tbody>
        {props.map((prop) => (
          <tr key={prop.name} className="border-b border-[var(--color-border-secondary)]">
            <td className="py-2 font-mono text-[var(--color-primary-500)]">{prop.name}</td>
            <td className="py-2 font-mono text-[var(--color-text-secondary)]">{prop.type}</td>
            <td className="py-2 font-mono text-[var(--color-text-secondary)]">{prop.default}</td>
            <td className="py-2 text-[var(--color-text-secondary)]">{prop.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

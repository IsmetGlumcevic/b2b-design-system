import { Container, Section } from '@/src/components/ui/Container'

export const metadata = {
  title: 'Container - UI Showcase',
  description: 'Layout component for centering content with max-width and padding',
}

function DemoContent({ label, className = '' }: { label: string; className?: string }) {
  return (
    <div className={`bg-[var(--color-primary-100)] border border-[var(--color-primary-300)] rounded-[var(--radius-md)] p-4 text-center text-[var(--color-primary-700)] ${className}`}>
      {label}
    </div>
  )
}

export default function ContainerPage() {
  return (
    <div className="py-8">
      {/* Header */}
      <Container className="mb-12">
        <h1 className="mb-2 text-3xl font-bold text-[var(--color-text-primary)]">
          Container
        </h1>
        <p className="text-[var(--color-text-secondary)]">
          Layout komponenta za centriranje sadržaja s konzistentnom maksimalnom širinom i padding-om.
        </p>
      </Container>

      {/* Size Variants */}
      <div className="mb-12 bg-[var(--color-bg-tertiary)] py-8">
        <Container className="mb-6">
          <h2 className="text-2xl font-semibold text-[var(--color-text-primary)]">
            Veličine (Size)
          </h2>
          <p className="text-sm text-[var(--color-text-secondary)]">
            Različite maksimalne širine za različite potrebe sadržaja.
          </p>
        </Container>

        <div className="space-y-6">
          {(['sm', 'md', 'lg', 'xl', '2xl'] as const).map((size) => (
            <div key={size}>
              <div className="text-center mb-2">
                <span className="text-sm font-mono text-[var(--color-text-secondary)]">
                  size=&quot;{size}&quot;
                </span>
              </div>
              <Container size={size} className="bg-[var(--color-bg-elevated)] border border-[var(--color-border-primary)] rounded-[var(--radius-lg)] py-4">
                <DemoContent label={`Container size="${size}"`} />
              </Container>
            </div>
          ))}
        </div>
      </div>

      {/* Padding Variants */}
      <Container className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Padding
        </h2>
        <div className="space-y-6">
          {(['none', 'sm', 'md', 'lg'] as const).map((padding) => (
            <div key={padding}>
              <span className="block mb-2 text-sm font-mono text-[var(--color-text-secondary)]">
                padding=&quot;{padding}&quot;
              </span>
              <div className="bg-[var(--color-bg-tertiary)] rounded-[var(--radius-lg)]">
                <Container padding={padding} size="full" className="bg-[var(--color-bg-elevated)] border border-dashed border-[var(--color-border-secondary)]">
                  <DemoContent label={`Padding: ${padding}`} />
                </Container>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Section Component */}
      <div className="mb-12 bg-[var(--color-bg-secondary)]">
        <Section spacing="lg">
          <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
            Section komponenta
          </h2>
          <p className="text-[var(--color-text-secondary)] mb-4">
            Section je Container s dodatnim vertikalnim spacing-om. Idealan za sekcije stranice.
          </p>
          <div className="rounded-[var(--radius-lg)] border border-[var(--color-border-primary)] bg-[var(--color-bg-elevated)] p-6">
            <div className="space-y-4">
              {(['sm', 'md', 'lg', 'xl'] as const).map((spacing) => (
                <div key={spacing} className="flex items-center gap-4">
                  <span className="w-24 text-sm font-mono text-[var(--color-text-secondary)]">
                    spacing=&quot;{spacing}&quot;
                  </span>
                  <span className="text-sm text-[var(--color-text-tertiary)]">
                    {spacing === 'sm' && 'py-8 (32px)'}
                    {spacing === 'md' && 'py-12 (48px)'}
                    {spacing === 'lg' && 'py-16 (64px)'}
                    {spacing === 'xl' && 'py-section-gap (64px)'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Section>
      </div>

      {/* Real-world Examples */}
      <Container className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Primjeri korištenja
        </h2>

        {/* Page Layout Example */}
        <div className="mb-8">
          <h3 className="mb-4 text-lg font-medium text-[var(--color-text-primary)]">
            Layout stranice
          </h3>
          <div className="border border-[var(--color-border-primary)] rounded-[var(--radius-lg)] overflow-hidden">
            {/* Header */}
            <div className="bg-[var(--color-bg-elevated)] border-b border-[var(--color-border-primary)] py-4">
              <Container>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-[var(--color-primary-500)]">Logo</span>
                  <div className="flex gap-4 text-sm">
                    <span>Početna</span>
                    <span>Proizvodi</span>
                    <span>Kontakt</span>
                  </div>
                </div>
              </Container>
            </div>
            {/* Content */}
            <Container className="py-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Dobrodošli</h2>
                <p className="text-[var(--color-text-secondary)]">
                  Sadržaj stranice unutar Container komponente
                </p>
              </div>
            </Container>
          </div>
        </div>

        {/* Form Example */}
        <div className="mb-8">
          <h3 className="mb-4 text-lg font-medium text-[var(--color-text-primary)]">
            Forma (uska širina)
          </h3>
          <div className="border border-[var(--color-border-primary)] rounded-[var(--radius-lg)] bg-[var(--color-bg-tertiary)] py-8">
            <Container size="sm">
              <div className="bg-[var(--color-bg-elevated)] rounded-[var(--radius-card)] border border-[var(--color-border-primary)] p-6">
                <h3 className="text-xl font-semibold mb-4">Prijava</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input
                      className="w-full px-3 py-2 border rounded-[var(--radius-input)] border-[var(--color-border-primary)]"
                      placeholder="email@primjer.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Lozinka</label>
                    <input
                      type="password"
                      className="w-full px-3 py-2 border rounded-[var(--radius-input)] border-[var(--color-border-primary)]"
                      placeholder="••••••••"
                    />
                  </div>
                  <button className="w-full py-2 bg-[var(--color-primary-500)] text-white rounded-[var(--radius-button)] font-medium">
                    Prijavi se
                  </button>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </Container>

      {/* Semantic Elements */}
      <Container className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Semantički elementi
        </h2>
        <p className="text-[var(--color-text-secondary)] mb-4">
          Container može renderirati različite HTML elemente pomoću <code className="bg-[var(--color-bg-tertiary)] px-1 rounded">as</code> prop-a.
        </p>
        <div className="rounded-[var(--radius-lg)] border border-[var(--color-border-primary)] p-6 bg-[var(--color-bg-secondary)]">
          <div className="flex flex-wrap gap-2">
            {(['div', 'section', 'article', 'main', 'header', 'footer'] as const).map((element) => (
              <span
                key={element}
                className="px-3 py-1 rounded-[var(--radius-full)] bg-[var(--color-bg-elevated)] border border-[var(--color-border-primary)] text-sm font-mono"
              >
                as=&quot;{element}&quot;
              </span>
            ))}
          </div>
        </div>
      </Container>

      {/* Usage Code */}
      <Container>
        <div className="rounded-[var(--radius-card)] bg-[var(--color-bg-secondary)] p-6">
          <h2 className="mb-4 text-xl font-semibold text-[var(--color-text-primary)]">
            Korištenje
          </h2>
          <pre className="overflow-x-auto rounded-md bg-[var(--color-bg-tertiary)] p-4">
            <code className="text-sm text-[var(--color-text-primary)]">
{`import { Container, Section } from '@/src/components/ui/Container'

// Default container (xl width, md padding, centered)
<Container>
  <PageContent />
</Container>

// Small container for forms
<Container size="sm" padding="lg">
  <LoginForm />
</Container>

// Full width with no padding
<Container size="full" padding="none">
  <HeroImage />
</Container>

// Semantic element
<Container as="main">
  <MainContent />
</Container>

// Section with vertical spacing
<Section spacing="lg">
  <SectionTitle>Naši proizvodi</SectionTitle>
  <ProductGrid />
</Section>`}
            </code>
          </pre>
        </div>

        {/* Props Table */}
        <div className="mt-8 rounded-[var(--radius-card)] bg-[var(--color-bg-secondary)] p-6">
          <h2 className="mb-4 text-xl font-semibold text-[var(--color-text-primary)]">
            Props
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[var(--color-border-primary)]">
                  <th className="text-left py-2 pr-4 font-medium">Prop</th>
                  <th className="text-left py-2 pr-4 font-medium">Tip</th>
                  <th className="text-left py-2 pr-4 font-medium">Default</th>
                  <th className="text-left py-2 font-medium">Opis</th>
                </tr>
              </thead>
              <tbody className="text-[var(--color-text-secondary)]">
                <tr className="border-b border-[var(--color-border-primary)]">
                  <td className="py-2 pr-4 font-mono text-xs">size</td>
                  <td className="py-2 pr-4 font-mono text-xs">&apos;sm&apos; | &apos;md&apos; | &apos;lg&apos; | &apos;xl&apos; | &apos;2xl&apos; | &apos;full&apos;</td>
                  <td className="py-2 pr-4 font-mono text-xs">&apos;xl&apos;</td>
                  <td className="py-2">Maksimalna širina containera</td>
                </tr>
                <tr className="border-b border-[var(--color-border-primary)]">
                  <td className="py-2 pr-4 font-mono text-xs">padding</td>
                  <td className="py-2 pr-4 font-mono text-xs">&apos;none&apos; | &apos;sm&apos; | &apos;md&apos; | &apos;lg&apos;</td>
                  <td className="py-2 pr-4 font-mono text-xs">&apos;md&apos;</td>
                  <td className="py-2">Horizontalni padding</td>
                </tr>
                <tr className="border-b border-[var(--color-border-primary)]">
                  <td className="py-2 pr-4 font-mono text-xs">centered</td>
                  <td className="py-2 pr-4 font-mono text-xs">boolean</td>
                  <td className="py-2 pr-4 font-mono text-xs">true</td>
                  <td className="py-2">Centriranje containera</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-mono text-xs">as</td>
                  <td className="py-2 pr-4 font-mono text-xs">&apos;div&apos; | &apos;section&apos; | &apos;main&apos; | ...</td>
                  <td className="py-2 pr-4 font-mono text-xs">&apos;div&apos;</td>
                  <td className="py-2">HTML element za renderiranje</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="mt-6 mb-4 text-lg font-semibold text-[var(--color-text-primary)]">
            Section Props
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[var(--color-border-primary)]">
                  <th className="text-left py-2 pr-4 font-medium">Prop</th>
                  <th className="text-left py-2 pr-4 font-medium">Tip</th>
                  <th className="text-left py-2 pr-4 font-medium">Default</th>
                  <th className="text-left py-2 font-medium">Opis</th>
                </tr>
              </thead>
              <tbody className="text-[var(--color-text-secondary)]">
                <tr>
                  <td className="py-2 pr-4 font-mono text-xs">spacing</td>
                  <td className="py-2 pr-4 font-mono text-xs">&apos;sm&apos; | &apos;md&apos; | &apos;lg&apos; | &apos;xl&apos;</td>
                  <td className="py-2 pr-4 font-mono text-xs">&apos;md&apos;</td>
                  <td className="py-2">Vertikalni padding (py)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </div>
  )
}

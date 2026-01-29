import { EmptyState, EmptyStateIcon } from '@/src/components/ui/EmptyState'

export const metadata = {
  title: 'EmptyState - UI Showcase',
  description: 'Component for displaying meaningful empty states',
}

function DemoButton({ variant = 'primary', children }: { variant?: 'primary' | 'secondary'; children: React.ReactNode }) {
  const styles = {
    primary: 'bg-[var(--color-primary-500)] text-white hover:bg-[var(--color-primary-hover)]',
    secondary: 'border border-[var(--color-border-primary)] text-[var(--color-text-primary)] hover:bg-[var(--color-bg-secondary)]',
  }
  return (
    <button className={`px-4 py-2 rounded-[var(--radius-button)] text-sm font-medium transition-colors ${styles[variant]}`}>
      {children}
    </button>
  )
}

function DemoLink({ children }: { children: React.ReactNode }) {
  return (
    <button className="text-sm text-[var(--color-text-link)] hover:underline">
      {children}
    </button>
  )
}

export default function EmptyStatePage() {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-12">
        <h1 className="mb-2 text-3xl font-bold text-[var(--color-text-primary)]">
          EmptyState
        </h1>
        <p className="text-[var(--color-text-secondary)]">
          Komponenta za prikazivanje smislenih praznih stanja. Koristi se kada nema sadržaja za prikaz (prazna košarica, nema rezultata pretrage, itd.)
        </p>
      </div>

      {/* Basic Empty State */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Osnovno prazno stanje
        </h2>
        <div className="max-w-xl rounded-[var(--radius-lg)] border border-[var(--color-border-primary)]">
          <EmptyState
            icon={<EmptyStateIcon variant="box" />}
            title="Nema podataka"
            description="Trenutno nema podataka za prikaz. Pokušajte ponovno kasnije."
          />
        </div>
      </section>

      {/* With Actions */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Sa akcijama
        </h2>
        <div className="max-w-xl rounded-[var(--radius-lg)] border border-[var(--color-border-primary)]">
          <EmptyState
            icon={<EmptyStateIcon variant="cart" />}
            title="Vaša košarica je prazna"
            description="Dodajte proizvode u košaricu da biste nastavili s kupovinom."
            action={<DemoButton>Pregledaj proizvode</DemoButton>}
            secondaryAction={<DemoLink>Pogledaj ponude</DemoLink>}
          />
        </div>
      </section>

      {/* Icon Variants */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Varijante ikona
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {(['box', 'search', 'cart', 'document', 'user', 'error'] as const).map((variant) => (
            <div key={variant} className="rounded-[var(--radius-lg)] border border-[var(--color-border-primary)]">
              <EmptyState
                size="sm"
                icon={<EmptyStateIcon variant={variant} />}
                title={`variant="${variant}"`}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Size Variants */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Veličine
        </h2>
        <div className="space-y-6">
          {(['sm', 'md', 'lg'] as const).map((size) => (
            <div key={size}>
              <h3 className="mb-4 text-lg font-medium text-[var(--color-text-primary)]">
                size=&quot;{size}&quot;
              </h3>
              <div className="rounded-[var(--radius-lg)] border border-[var(--color-border-primary)]">
                <EmptyState
                  size={size}
                  icon={<EmptyStateIcon variant="box" />}
                  title="Naslov praznog stanja"
                  description="Opis koji objašnjava zašto je sadržaj prazan i šta korisnik može učiniti."
                  action={<DemoButton>Primarna akcija</DemoButton>}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Inline Mode */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Inline mod
        </h2>
        <div className="space-y-4 max-w-xl">
          <div className="rounded-[var(--radius-lg)] border border-[var(--color-border-primary)] p-4">
            <EmptyState
              inline
              icon={<EmptyStateIcon variant="search" />}
              title="Nema rezultata pretrage"
              action={<DemoLink>Obriši filtere</DemoLink>}
            />
          </div>
          <div className="rounded-[var(--radius-lg)] border border-[var(--color-border-primary)] p-4">
            <EmptyState
              inline
              icon={<EmptyStateIcon variant="document" />}
              title="Nema dokumenata"
            />
          </div>
        </div>
      </section>

      {/* Real-world Examples */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Primjeri korištenja
        </h2>

        {/* Empty Cart */}
        <div className="mb-8">
          <h3 className="mb-4 text-lg font-medium text-[var(--color-text-primary)]">
            Prazna košarica
          </h3>
          <div className="max-w-xl rounded-[var(--radius-card)] border border-[var(--color-border-primary)] bg-[var(--color-bg-elevated)]">
            <EmptyState
              icon={<EmptyStateIcon variant="cart" />}
              title="Vaša košarica je prazna"
              description="Izgleda da još niste dodali nijedan proizvod. Pregledajte naše kategorije i pronađite savršene proizvode za vas."
              action={<DemoButton>Pregledaj proizvode</DemoButton>}
              secondaryAction={<DemoLink>Pogledaj ponude</DemoLink>}
            />
          </div>
        </div>

        {/* No Search Results */}
        <div className="mb-8">
          <h3 className="mb-4 text-lg font-medium text-[var(--color-text-primary)]">
            Nema rezultata pretrage
          </h3>
          <div className="max-w-xl rounded-[var(--radius-card)] border border-[var(--color-border-primary)] bg-[var(--color-bg-elevated)]">
            <EmptyState
              icon={<EmptyStateIcon variant="search" />}
              title="Nema rezultata za &quot;laptop xyz&quot;"
              description="Pokušajte s drugim pojmom za pretragu ili provjerite pravopis."
              action={<DemoButton variant="secondary">Obriši pretragu</DemoButton>}
            />
          </div>
        </div>

        {/* No Orders */}
        <div className="mb-8">
          <h3 className="mb-4 text-lg font-medium text-[var(--color-text-primary)]">
            Bez narudžbi
          </h3>
          <div className="max-w-xl rounded-[var(--radius-card)] border border-[var(--color-border-primary)] bg-[var(--color-bg-elevated)]">
            <EmptyState
              icon={<EmptyStateIcon variant="document" />}
              title="Nemate nijednu narudžbu"
              description="Kada napravite prvu narudžbu, ovdje ćete moći pratiti status i povijest vaših kupovina."
              action={<DemoButton>Započni kupovinu</DemoButton>}
            />
          </div>
        </div>

        {/* No Favorites */}
        <div className="mb-8">
          <h3 className="mb-4 text-lg font-medium text-[var(--color-text-primary)]">
            Prazna lista želja
          </h3>
          <div className="max-w-xl rounded-[var(--radius-card)] border border-[var(--color-border-primary)] bg-[var(--color-bg-elevated)]">
            <EmptyState
              size="sm"
              icon={
                <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
              }
              title="Lista želja je prazna"
              description="Spremite proizvode koji vam se sviđaju klikom na ikonu srca."
              action={<DemoButton variant="secondary">Pregledaj proizvode</DemoButton>}
            />
          </div>
        </div>

        {/* Error State */}
        <div className="mb-8">
          <h3 className="mb-4 text-lg font-medium text-[var(--color-text-primary)]">
            Greška pri učitavanju
          </h3>
          <div className="max-w-xl rounded-[var(--radius-card)] border border-[var(--color-border-primary)] bg-[var(--color-bg-elevated)]">
            <EmptyState
              icon={<EmptyStateIcon variant="error" />}
              title="Nešto je pošlo po zlu"
              description="Došlo je do greške prilikom učitavanja podataka. Molimo pokušajte ponovo."
              action={<DemoButton>Pokušaj ponovo</DemoButton>}
              secondaryAction={<DemoLink>Kontaktiraj podršku</DemoLink>}
            />
          </div>
        </div>

        {/* Filter Results */}
        <div className="mb-8">
          <h3 className="mb-4 text-lg font-medium text-[var(--color-text-primary)]">
            Nema proizvoda s odabranim filterima
          </h3>
          <div className="max-w-xl rounded-[var(--radius-card)] border border-[var(--color-border-primary)] bg-[var(--color-bg-elevated)]">
            <EmptyState
              size="sm"
              icon={<EmptyStateIcon variant="box" />}
              title="Nema proizvoda s odabranim filterima"
              description="Pokušajte promijeniti ili ukloniti neke filtere da biste vidjeli više rezultata."
              action={<DemoButton variant="secondary">Ukloni sve filtere</DemoButton>}
            />
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
{`import { EmptyState, EmptyStateIcon } from '@/src/components/ui/EmptyState'

// Basic usage
<EmptyState
  icon={<EmptyStateIcon variant="cart" />}
  title="Vaša košarica je prazna"
  description="Dodajte proizvode u košaricu."
/>

// With actions
<EmptyState
  icon={<EmptyStateIcon variant="search" />}
  title="Nema rezultata"
  description="Pokušajte s drugim pojmom."
  action={<Button>Primarna akcija</Button>}
  secondaryAction={<LinkButton>Sekundarna</LinkButton>}
/>

// Different sizes
<EmptyState size="sm" title="Mali" icon={<EmptyStateIcon />} />
<EmptyState size="md" title="Srednji" icon={<EmptyStateIcon />} />
<EmptyState size="lg" title="Veliki" icon={<EmptyStateIcon />} />

// Inline mode
<EmptyState
  inline
  icon={<EmptyStateIcon variant="document" />}
  title="Nema dokumenata"
/>

// Custom icon
<EmptyState
  icon={<CustomIcon className="w-full h-full" />}
  title="Prilagođena ikona"
/>`}
          </code>
        </pre>
      </section>

      {/* Props Table */}
      <section className="mt-8 rounded-[var(--radius-card)] bg-[var(--color-bg-secondary)] p-6">
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
                <td className="py-2 pr-4 font-mono text-xs">icon</td>
                <td className="py-2 pr-4 font-mono text-xs">ReactNode</td>
                <td className="py-2 pr-4 font-mono text-xs">-</td>
                <td className="py-2">Ikona ili ilustracija za prikaz</td>
              </tr>
              <tr className="border-b border-[var(--color-border-primary)]">
                <td className="py-2 pr-4 font-mono text-xs">title</td>
                <td className="py-2 pr-4 font-mono text-xs">string</td>
                <td className="py-2 pr-4 font-mono text-xs">required</td>
                <td className="py-2">Glavni naslov tekst</td>
              </tr>
              <tr className="border-b border-[var(--color-border-primary)]">
                <td className="py-2 pr-4 font-mono text-xs">description</td>
                <td className="py-2 pr-4 font-mono text-xs">string</td>
                <td className="py-2 pr-4 font-mono text-xs">-</td>
                <td className="py-2">Opisni tekst koji objašnjava prazno stanje</td>
              </tr>
              <tr className="border-b border-[var(--color-border-primary)]">
                <td className="py-2 pr-4 font-mono text-xs">action</td>
                <td className="py-2 pr-4 font-mono text-xs">ReactNode</td>
                <td className="py-2 pr-4 font-mono text-xs">-</td>
                <td className="py-2">Primarni akcijski gumb/link</td>
              </tr>
              <tr className="border-b border-[var(--color-border-primary)]">
                <td className="py-2 pr-4 font-mono text-xs">secondaryAction</td>
                <td className="py-2 pr-4 font-mono text-xs">ReactNode</td>
                <td className="py-2 pr-4 font-mono text-xs">-</td>
                <td className="py-2">Sekundarni akcijski gumb/link</td>
              </tr>
              <tr className="border-b border-[var(--color-border-primary)]">
                <td className="py-2 pr-4 font-mono text-xs">size</td>
                <td className="py-2 pr-4 font-mono text-xs">&apos;sm&apos; | &apos;md&apos; | &apos;lg&apos;</td>
                <td className="py-2 pr-4 font-mono text-xs">&apos;md&apos;</td>
                <td className="py-2">Veličina komponente</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">inline</td>
                <td className="py-2 pr-4 font-mono text-xs">boolean</td>
                <td className="py-2 pr-4 font-mono text-xs">false</td>
                <td className="py-2">Kompaktni inline prikaz</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* EmptyStateIcon Props */}
      <section className="mt-8 rounded-[var(--radius-card)] bg-[var(--color-bg-secondary)] p-6">
        <h2 className="mb-4 text-xl font-semibold text-[var(--color-text-primary)]">
          EmptyStateIcon Props
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
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">variant</td>
                <td className="py-2 pr-4 font-mono text-xs">&apos;box&apos; | &apos;search&apos; | &apos;cart&apos; | &apos;document&apos; | &apos;user&apos; | &apos;error&apos;</td>
                <td className="py-2 pr-4 font-mono text-xs">&apos;box&apos;</td>
                <td className="py-2">Varijanta ikone</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}

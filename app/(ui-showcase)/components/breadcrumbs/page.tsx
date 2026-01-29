import { Breadcrumbs } from '@/src/components/ui/Breadcrumbs/Breadcrumbs'

const basicItems = [
  { label: 'Početna', href: '/' },
  { label: 'Proizvodi', href: '/proizvodi' },
  { label: 'Kategorija', href: '/proizvodi/kategorija' },
  { label: 'Naziv proizvoda' },
]

const shortItems = [
  { label: 'Početna', href: '/' },
  { label: 'Kontakt' },
]

const longItems = [
  { label: 'Početna', href: '/' },
  { label: 'Proizvodi', href: '/proizvodi' },
  { label: 'Elektronika', href: '/proizvodi/elektronika' },
  { label: 'Računari', href: '/proizvodi/elektronika/racunari' },
  { label: 'Laptopi', href: '/proizvodi/elektronika/racunari/laptopi' },
  { label: 'Gaming laptopi', href: '/proizvodi/elektronika/racunari/laptopi/gaming' },
  { label: 'ASUS ROG Strix' },
]

export default function BreadcrumbsPage() {
  return (
    <div className="p-8 space-y-12">
      <header>
        <h1 className="text-3xl font-bold text-[var(--color-text-primary)] mb-2">
          Breadcrumbs
        </h1>
        <p className="text-[var(--color-text-secondary)]">
          Komponenta za navigaciju koja prikazuje putanju korisnika kroz stranicu.
        </p>
      </header>

      {/* Basic Example */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-[var(--color-text-primary)]">
          Osnovni primjer
        </h2>
        <div className="p-6 bg-[var(--color-bg-secondary)] rounded-[var(--radius-lg)] border border-[var(--color-border-primary)]">
          <Breadcrumbs items={basicItems} />
        </div>
      </section>

      {/* Sizes */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-[var(--color-text-primary)]">
          Veličine
        </h2>
        <div className="space-y-4">
          <div className="p-6 bg-[var(--color-bg-secondary)] rounded-[var(--radius-lg)] border border-[var(--color-border-primary)]">
            <p className="text-[var(--font-size-xs)] text-[var(--color-text-tertiary)] mb-3">sm</p>
            <Breadcrumbs items={basicItems} size="sm" />
          </div>
          <div className="p-6 bg-[var(--color-bg-secondary)] rounded-[var(--radius-lg)] border border-[var(--color-border-primary)]">
            <p className="text-[var(--font-size-xs)] text-[var(--color-text-tertiary)] mb-3">md (default)</p>
            <Breadcrumbs items={basicItems} size="md" />
          </div>
          <div className="p-6 bg-[var(--color-bg-secondary)] rounded-[var(--radius-lg)] border border-[var(--color-border-primary)]">
            <p className="text-[var(--font-size-xs)] text-[var(--color-text-tertiary)] mb-3">lg</p>
            <Breadcrumbs items={basicItems} size="lg" />
          </div>
        </div>
      </section>

      {/* Separators */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-[var(--color-text-primary)]">
          Separatori
        </h2>
        <div className="space-y-4">
          <div className="p-6 bg-[var(--color-bg-secondary)] rounded-[var(--radius-lg)] border border-[var(--color-border-primary)]">
            <p className="text-[var(--font-size-xs)] text-[var(--color-text-tertiary)] mb-3">chevron (default)</p>
            <Breadcrumbs items={basicItems} separator="chevron" />
          </div>
          <div className="p-6 bg-[var(--color-bg-secondary)] rounded-[var(--radius-lg)] border border-[var(--color-border-primary)]">
            <p className="text-[var(--font-size-xs)] text-[var(--color-text-tertiary)] mb-3">slash</p>
            <Breadcrumbs items={basicItems} separator="slash" />
          </div>
          <div className="p-6 bg-[var(--color-bg-secondary)] rounded-[var(--radius-lg)] border border-[var(--color-border-primary)]">
            <p className="text-[var(--font-size-xs)] text-[var(--color-text-tertiary)] mb-3">arrow</p>
            <Breadcrumbs items={basicItems} separator="arrow" />
          </div>
          <div className="p-6 bg-[var(--color-bg-secondary)] rounded-[var(--radius-lg)] border border-[var(--color-border-primary)]">
            <p className="text-[var(--font-size-xs)] text-[var(--color-text-tertiary)] mb-3">dot</p>
            <Breadcrumbs items={basicItems} separator="dot" />
          </div>
        </div>
      </section>

      {/* With Home Icon */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-[var(--color-text-primary)]">
          Sa home ikonom
        </h2>
        <div className="p-6 bg-[var(--color-bg-secondary)] rounded-[var(--radius-lg)] border border-[var(--color-border-primary)]">
          <Breadcrumbs items={basicItems} showHomeIcon />
        </div>
      </section>

      {/* Collapsed */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-[var(--color-text-primary)]">
          Skraćeni prikaz (maxItems)
        </h2>
        <div className="space-y-4">
          <div className="p-6 bg-[var(--color-bg-secondary)] rounded-[var(--radius-lg)] border border-[var(--color-border-primary)]">
            <p className="text-[var(--font-size-xs)] text-[var(--color-text-tertiary)] mb-3">Puni prikaz (7 stavki)</p>
            <Breadcrumbs items={longItems} />
          </div>
          <div className="p-6 bg-[var(--color-bg-secondary)] rounded-[var(--radius-lg)] border border-[var(--color-border-primary)]">
            <p className="text-[var(--font-size-xs)] text-[var(--color-text-tertiary)] mb-3">maxItems=4</p>
            <Breadcrumbs items={longItems} maxItems={4} />
          </div>
          <div className="p-6 bg-[var(--color-bg-secondary)] rounded-[var(--radius-lg)] border border-[var(--color-border-primary)]">
            <p className="text-[var(--font-size-xs)] text-[var(--color-text-tertiary)] mb-3">maxItems=3</p>
            <Breadcrumbs items={longItems} maxItems={3} />
          </div>
        </div>
      </section>

      {/* Short Breadcrumb */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-[var(--color-text-primary)]">
          Kratka navigacija
        </h2>
        <div className="p-6 bg-[var(--color-bg-secondary)] rounded-[var(--radius-lg)] border border-[var(--color-border-primary)]">
          <Breadcrumbs items={shortItems} />
        </div>
      </section>

      {/* Combined Options */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-[var(--color-text-primary)]">
          Kombinovane opcije
        </h2>
        <div className="p-6 bg-[var(--color-bg-secondary)] rounded-[var(--radius-lg)] border border-[var(--color-border-primary)]">
          <p className="text-[var(--font-size-xs)] text-[var(--color-text-tertiary)] mb-3">
            size=lg, separator=slash, showHomeIcon, maxItems=5
          </p>
          <Breadcrumbs
            items={longItems}
            size="lg"
            separator="slash"
            showHomeIcon
            maxItems={5}
          />
        </div>
      </section>

      {/* Usage */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-[var(--color-text-primary)]">
          Korištenje
        </h2>
        <div className="p-6 bg-[var(--color-bg-tertiary)] rounded-[var(--radius-lg)] border border-[var(--color-border-primary)]">
          <pre className="text-[var(--font-size-sm)] text-[var(--color-text-secondary)] overflow-x-auto">
{`import { Breadcrumbs } from '@/src/components/ui/Breadcrumbs/Breadcrumbs'

<Breadcrumbs
  items={[
    { label: 'Početna', href: '/' },
    { label: 'Proizvodi', href: '/proizvodi' },
    { label: 'Kategorija' },
  ]}
  size="md"
  separator="chevron"
  showHomeIcon={false}
  maxItems={5}
/>`}
          </pre>
        </div>
      </section>

      {/* Props Table */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-[var(--color-text-primary)]">
          Props
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-[var(--font-size-sm)] border border-[var(--color-border-primary)] rounded-[var(--radius-lg)]">
            <thead className="bg-[var(--color-bg-secondary)]">
              <tr>
                <th className="text-left p-3 border-b border-[var(--color-border-primary)]">Prop</th>
                <th className="text-left p-3 border-b border-[var(--color-border-primary)]">Tip</th>
                <th className="text-left p-3 border-b border-[var(--color-border-primary)]">Default</th>
                <th className="text-left p-3 border-b border-[var(--color-border-primary)]">Opis</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border-b border-[var(--color-border-primary)] font-mono">items</td>
                <td className="p-3 border-b border-[var(--color-border-primary)]">BreadcrumbItem[]</td>
                <td className="p-3 border-b border-[var(--color-border-primary)]">-</td>
                <td className="p-3 border-b border-[var(--color-border-primary)]">Niz stavki za prikaz</td>
              </tr>
              <tr>
                <td className="p-3 border-b border-[var(--color-border-primary)] font-mono">size</td>
                <td className="p-3 border-b border-[var(--color-border-primary)]">{`'sm' | 'md' | 'lg'`}</td>
                <td className="p-3 border-b border-[var(--color-border-primary)]">{`'md'`}</td>
                <td className="p-3 border-b border-[var(--color-border-primary)]">Veličina komponente</td>
              </tr>
              <tr>
                <td className="p-3 border-b border-[var(--color-border-primary)] font-mono">separator</td>
                <td className="p-3 border-b border-[var(--color-border-primary)]">{`'chevron' | 'slash' | 'arrow' | 'dot'`}</td>
                <td className="p-3 border-b border-[var(--color-border-primary)]">{`'chevron'`}</td>
                <td className="p-3 border-b border-[var(--color-border-primary)]">Stil separatora</td>
              </tr>
              <tr>
                <td className="p-3 border-b border-[var(--color-border-primary)] font-mono">showHomeIcon</td>
                <td className="p-3 border-b border-[var(--color-border-primary)]">boolean</td>
                <td className="p-3 border-b border-[var(--color-border-primary)]">false</td>
                <td className="p-3 border-b border-[var(--color-border-primary)]">Prikaži home ikonu za prvu stavku</td>
              </tr>
              <tr>
                <td className="p-3 font-mono">maxItems</td>
                <td className="p-3">number</td>
                <td className="p-3">-</td>
                <td className="p-3">Maksimalan broj stavki (skraćuje srednje)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}

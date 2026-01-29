import {
  Divider,
  DividerVertical,
  DividerSection,
} from '@/src/components/ui/Divider'

export const metadata = {
  title: 'Divider - Components',
  description: 'Divider komponenta za razdvajanje sekcija sadržaja',
}

export default function DividerPage() {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-12">
        <h1 className="mb-2 text-3xl font-bold text-[var(--color-text-primary)]">
          Divider
        </h1>
        <p className="text-[var(--color-text-secondary)]">
          Divider komponenta za vizualno razdvajanje sekcija sadržaja. Podržava horizontalne i vertikalne orijentacije, različite stilove linija i sadržaj unutar dividera.
        </p>
      </div>

      {/* Basic Horizontal */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Osnovna upotreba
        </h2>
        <div className="max-w-xl">
          <p className="text-[var(--color-text-secondary)]">
            Sadržaj iznad dividera
          </p>
          <Divider />
          <p className="text-[var(--color-text-secondary)]">
            Sadržaj ispod dividera
          </p>
        </div>
      </section>

      {/* Variants */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Varijante linija
        </h2>
        <div className="max-w-xl space-y-8">
          <div>
            <p className="mb-2 text-sm text-[var(--color-text-secondary)]">Solid (default)</p>
            <Divider variant="solid" spacing="none" />
          </div>
          <div>
            <p className="mb-2 text-sm text-[var(--color-text-secondary)]">Dashed</p>
            <Divider variant="dashed" spacing="none" />
          </div>
          <div>
            <p className="mb-2 text-sm text-[var(--color-text-secondary)]">Dotted</p>
            <Divider variant="dotted" spacing="none" />
          </div>
        </div>
      </section>

      {/* Weight */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Debljina linije
        </h2>
        <div className="max-w-xl space-y-8">
          <div>
            <p className="mb-2 text-sm text-[var(--color-text-secondary)]">Light (default)</p>
            <Divider weight="light" spacing="none" />
          </div>
          <div>
            <p className="mb-2 text-sm text-[var(--color-text-secondary)]">Medium</p>
            <Divider weight="medium" spacing="none" />
          </div>
          <div>
            <p className="mb-2 text-sm text-[var(--color-text-secondary)]">Heavy</p>
            <Divider weight="heavy" spacing="none" />
          </div>
        </div>
      </section>

      {/* Spacing */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Razmak
        </h2>
        <div className="max-w-xl">
          <div className="bg-[var(--color-bg-secondary)] p-4 rounded-[var(--radius-lg)]">
            <p className="text-sm text-[var(--color-text-secondary)]">spacing: none</p>
            <Divider spacing="none" />
            <p className="text-sm text-[var(--color-text-secondary)]">spacing: sm</p>
            <Divider spacing="sm" />
            <p className="text-sm text-[var(--color-text-secondary)]">spacing: md (default)</p>
            <Divider spacing="md" />
            <p className="text-sm text-[var(--color-text-secondary)]">spacing: lg</p>
            <Divider spacing="lg" />
            <p className="text-sm text-[var(--color-text-secondary)]">Kraj primjera</p>
          </div>
        </div>
      </section>

      {/* With Content */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Sa sadržajem
        </h2>
        <div className="max-w-xl space-y-8">
          <div>
            <p className="mb-2 text-sm text-[var(--color-text-secondary)]">Center (default)</p>
            <Divider>ili</Divider>
          </div>
          <div>
            <p className="mb-2 text-sm text-[var(--color-text-secondary)]">Start aligned</p>
            <Divider align="start">Poglavlje 1</Divider>
          </div>
          <div>
            <p className="mb-2 text-sm text-[var(--color-text-secondary)]">End aligned</p>
            <Divider align="end">Vidi više</Divider>
          </div>
        </div>
      </section>

      {/* Vertical Divider */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Vertikalni divider
        </h2>
        <p className="mb-4 text-sm text-[var(--color-text-secondary)]">
          Za razdvajanje elemenata u istoj liniji
        </p>
        <div className="space-y-6">
          <div className="flex items-center gap-2 h-8">
            <span className="text-[var(--color-text-primary)]">Početna</span>
            <DividerVertical />
            <span className="text-[var(--color-text-primary)]">Proizvodi</span>
            <DividerVertical />
            <span className="text-[var(--color-text-primary)]">Kategorije</span>
            <DividerVertical />
            <span className="text-[var(--color-text-primary)]">Kontakt</span>
          </div>
          <div className="flex items-center gap-2 h-8">
            <span className="text-[var(--color-text-secondary)]">Dashed:</span>
            <span className="text-[var(--color-text-primary)]">Item 1</span>
            <DividerVertical variant="dashed" />
            <span className="text-[var(--color-text-primary)]">Item 2</span>
            <DividerVertical variant="dashed" />
            <span className="text-[var(--color-text-primary)]">Item 3</span>
          </div>
        </div>
      </section>

      {/* DividerSection */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          DividerSection
        </h2>
        <p className="mb-4 text-sm text-[var(--color-text-secondary)]">
          Za naslove sekcija sa dividerom
        </p>
        <div className="max-w-xl space-y-8">
          <DividerSection title="Proizvodi" />

          <DividerSection title="Narudžbe" subtitle="12 aktivnih" />

          <DividerSection
            title="Kategorije"
            subtitle="8 kategorija"
            action={
              <button className="text-sm text-[var(--color-primary-600)] hover:text-[var(--color-primary-700)]">
                Vidi sve
              </button>
            }
          />
        </div>
      </section>

      {/* Real World Examples */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Primjeri korištenja
        </h2>

        {/* Login Form */}
        <div className="mb-8">
          <h3 className="mb-4 text-lg font-medium text-[var(--color-text-primary)]">
            Login forma
          </h3>
          <div className="max-w-sm p-6 border border-[var(--color-border-primary)] rounded-[var(--radius-lg)]">
            <button className="w-full py-2 px-4 border border-[var(--color-border-primary)] rounded-[var(--radius-md)] text-[var(--color-text-primary)] hover:bg-[var(--color-bg-secondary)]">
              Nastavi sa Google
            </button>
            <Divider>ili</Divider>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Email adresa"
                className="w-full py-2 px-3 border border-[var(--color-border-primary)] rounded-[var(--radius-md)] text-[var(--color-text-primary)] bg-[var(--color-bg-primary)]"
              />
              <input
                type="password"
                placeholder="Lozinka"
                className="w-full py-2 px-3 border border-[var(--color-border-primary)] rounded-[var(--radius-md)] text-[var(--color-text-primary)] bg-[var(--color-bg-primary)]"
              />
              <button className="w-full py-2 px-4 bg-[var(--color-primary-500)] text-white rounded-[var(--radius-md)] hover:bg-[var(--color-primary-600)]">
                Prijavi se
              </button>
            </div>
          </div>
        </div>

        {/* Breadcrumb Divider */}
        <div className="mb-8">
          <h3 className="mb-4 text-lg font-medium text-[var(--color-text-primary)]">
            Breadcrumb / Navigacija
          </h3>
          <div className="flex items-center gap-2 text-sm">
            <a href="#" className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary-600)]">
              Početna
            </a>
            <DividerVertical spacing="sm" />
            <a href="#" className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary-600)]">
              Elektronika
            </a>
            <DividerVertical spacing="sm" />
            <a href="#" className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary-600)]">
              Laptopi
            </a>
            <DividerVertical spacing="sm" />
            <span className="text-[var(--color-text-primary)]">MacBook Pro</span>
          </div>
        </div>

        {/* Card Content Sections */}
        <div className="mb-8">
          <h3 className="mb-4 text-lg font-medium text-[var(--color-text-primary)]">
            Kartica sa sekcijama
          </h3>
          <div className="max-w-md p-6 border border-[var(--color-border-primary)] rounded-[var(--radius-lg)]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-[var(--color-neutral-100)] rounded-full" />
              <div>
                <p className="font-medium text-[var(--color-text-primary)]">Marko Marković</p>
                <p className="text-sm text-[var(--color-text-secondary)]">Kupac</p>
              </div>
            </div>
            <Divider spacing="sm" />
            <div className="py-3">
              <p className="text-sm text-[var(--color-text-secondary)]">Email</p>
              <p className="text-[var(--color-text-primary)]">marko@example.com</p>
            </div>
            <Divider spacing="sm" />
            <div className="py-3">
              <p className="text-sm text-[var(--color-text-secondary)]">Telefon</p>
              <p className="text-[var(--color-text-primary)]">+387 61 123 456</p>
            </div>
            <Divider spacing="sm" />
            <div className="pt-3">
              <p className="text-sm text-[var(--color-text-secondary)]">Adresa</p>
              <p className="text-[var(--color-text-primary)]">Ul. Marsala Tita 1, Sarajevo</p>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div>
          <h3 className="mb-4 text-lg font-medium text-[var(--color-text-primary)]">
            Footer linkovi
          </h3>
          <div className="p-4 bg-[var(--color-neutral-900)] rounded-[var(--radius-lg)]">
            <div className="flex items-center justify-center gap-2 text-sm">
              <a href="#" className="text-[var(--color-neutral-300)] hover:text-white">
                Privatnost
              </a>
              <DividerVertical spacing="sm" className="border-[var(--color-neutral-600)]" />
              <a href="#" className="text-[var(--color-neutral-300)] hover:text-white">
                Uvjeti korištenja
              </a>
              <DividerVertical spacing="sm" className="border-[var(--color-neutral-600)]" />
              <a href="#" className="text-[var(--color-neutral-300)] hover:text-white">
                Kontakt
              </a>
              <DividerVertical spacing="sm" className="border-[var(--color-neutral-600)]" />
              <a href="#" className="text-[var(--color-neutral-300)] hover:text-white">
                Pomoć
              </a>
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
{`import { Divider, DividerVertical, DividerSection } from '@/src/components/ui/Divider'

// Basic horizontal divider
<Divider />

// Variants
<Divider variant="dashed" />
<Divider variant="dotted" />

// Weight
<Divider weight="medium" />
<Divider weight="heavy" />

// Spacing
<Divider spacing="lg" />

// With content
<Divider>ili</Divider>
<Divider align="start">Poglavlje 1</Divider>

// Vertical divider
<div className="flex items-center">
  <span>Item 1</span>
  <DividerVertical />
  <span>Item 2</span>
</div>

// Section with title
<DividerSection title="Proizvodi" subtitle="12 artikala" />
<DividerSection
  title="Kategorije"
  action={<button>Vidi sve</button>}
/>`}
          </code>
        </pre>
      </section>

      {/* CSS Variables */}
      <section className="mt-8 rounded-[var(--radius-card)] bg-[var(--color-bg-secondary)] p-6">
        <h2 className="mb-4 text-xl font-semibold text-[var(--color-text-primary)]">
          CSS Varijable
        </h2>
        <ul className="space-y-1 text-sm text-[var(--color-text-secondary)]">
          <li><code>--divider-color: var(--color-border-primary)</code> - Boja linije</li>
          <li><code>--divider-weight-light: 1px</code></li>
          <li><code>--divider-weight-medium: 2px</code></li>
          <li><code>--divider-weight-heavy: 4px</code></li>
        </ul>
      </section>
    </div>
  )
}

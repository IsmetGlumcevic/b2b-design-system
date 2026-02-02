'use client'

import { PromoBanner, PromoBar } from '@/src/components/ui/PromoBanner'

// Sample icon
const PercentIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="19" y1="5" x2="5" y2="19" />
    <circle cx="6.5" cy="6.5" r="2.5" />
    <circle cx="17.5" cy="17.5" r="2.5" />
  </svg>
)

export default function PromoBannerShowcase() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-secondary)]">
      {/* Header */}
      <div className="border-b border-[var(--color-border-primary)] bg-[var(--color-bg-primary)] px-8 py-6">
        <h1 className="text-3xl font-bold text-[var(--color-text-primary)]">PromoBanner & PromoBar</h1>
        <p className="mt-2 text-[var(--color-text-secondary)]">
          Komponente za promocijske bannere i trake s različitim stilovima i veličinama.
        </p>
      </div>

      {/* Examples */}
      <div className="space-y-8 pb-16">
        {/* PromoBar Examples */}
        <section>
          <div className="px-8 py-4">
            <h2 className="text-xl font-semibold text-[var(--color-text-primary)]">PromoBar</h2>
            <p className="text-sm text-[var(--color-text-secondary)]">Kompaktna traka za vrh stranice</p>
          </div>
          <div className="space-y-2">
            <PromoBar
              message="Besplatna dostava za narudžbe preko 200 KM!"
              href="/akcije"
              linkText="Pogledaj akcije"
            />
            <PromoBar
              message="Novi katalog 2026 je dostupan! Preuzmite ga besplatno."
              href="/katalog"
              linkText="Preuzmi"
            />
          </div>
        </section>

        {/* PromoBanner - Primary */}
        <section>
          <div className="px-8 py-4">
            <h2 className="text-xl font-semibold text-[var(--color-text-primary)]">PromoBanner - Primarna boja</h2>
            <p className="text-sm text-[var(--color-text-secondary)]">Standardni promotivni banner</p>
          </div>
          <PromoBanner
            badge="Akcija"
            title="LED rasvjeta -30%"
            subtitle="Iskoristite posebnu ponudu na sve LED proizvode do kraja mjeseca."
            action={{ label: 'Pogledaj akciju', href: '/akcije/led' }}
            backgroundColor="primary"
            size="md"
          />
        </section>

        {/* PromoBanner - Gradient */}
        <section>
          <div className="px-8 py-4">
            <h2 className="text-xl font-semibold text-[var(--color-text-primary)]">PromoBanner - Gradient</h2>
            <p className="text-sm text-[var(--color-text-secondary)]">Sa gradient pozadinom</p>
          </div>
          <PromoBanner
            badge="B2B Partneri"
            title="Posebne cijene za registrirane partnere"
            subtitle="Registrirajte svoju firmu i ostvarite pristup veleprodajnim cijenama, odgođenom plaćanju i prioritetnoj dostavi."
            action={{ label: 'Registriraj firmu', href: '/b2b/registracija' }}
            backgroundColor="gradient"
            size="md"
          />
        </section>

        {/* PromoBanner - Dark */}
        <section>
          <div className="px-8 py-4">
            <h2 className="text-xl font-semibold text-[var(--color-text-primary)]">PromoBanner - Tamna pozadina</h2>
            <p className="text-sm text-[var(--color-text-secondary)]">Elegantna tamna varijanta</p>
          </div>
          <PromoBanner
            title="Solarna oprema"
            subtitle="Kompletna ponuda za fotonaponske sisteme - paneli, inverteri, baterije."
            action={{ label: 'Istraži ponudu', href: '/kategorije/solarna-oprema' }}
            backgroundColor="dark"
            size="md"
          />
        </section>

        {/* PromoBanner - With Icon */}
        <section>
          <div className="px-8 py-4">
            <h2 className="text-xl font-semibold text-[var(--color-text-primary)]">PromoBanner - Sa ikonom</h2>
            <p className="text-sm text-[var(--color-text-secondary)]">S ikonom za dodatni vizualni naglasak</p>
          </div>
          <PromoBanner
            icon={<PercentIcon />}
            title="Vikend akcija - do 50% popusta"
            subtitle="Samo ovog vikenda iskoristite super popuste na odabrane artikle."
            action={{ label: 'Kupi sada', href: '/vikend-akcija' }}
            backgroundColor="primary"
            size="md"
          />
        </section>

        {/* PromoBanner - Small */}
        <section>
          <div className="px-8 py-4">
            <h2 className="text-xl font-semibold text-[var(--color-text-primary)]">PromoBanner - Mala veličina</h2>
            <p className="text-sm text-[var(--color-text-secondary)]">Kompaktna verzija</p>
          </div>
          <PromoBanner
            title="Besplatna dostava za narudžbe preko 500 KM"
            action={{ label: 'Saznaj više', href: '/dostava' }}
            backgroundColor="secondary"
            size="sm"
          />
        </section>

        {/* PromoBanner - Large */}
        <section>
          <div className="px-8 py-4">
            <h2 className="text-xl font-semibold text-[var(--color-text-primary)]">PromoBanner - Velika veličina</h2>
            <p className="text-sm text-[var(--color-text-secondary)]">Za glavne promocije</p>
          </div>
          <PromoBanner
            badge="Novo u ponudi"
            title="Schneider Electric Resi9"
            subtitle="Nova linija modularnih uređaja s poboljšanom zaštitom i jednostavnom instalacijom. Dostupno odmah na zalihi."
            action={{ label: 'Pogledaj proizvode', href: '/brendovi/schneider/resi9' }}
            backgroundColor="gradient"
            size="lg"
          />
        </section>

        {/* PromoBanner - Centered */}
        <section>
          <div className="px-8 py-4">
            <h2 className="text-xl font-semibold text-[var(--color-text-primary)]">PromoBanner - Centrirano</h2>
            <p className="text-sm text-[var(--color-text-secondary)]">S centriranim sadržajem</p>
          </div>
          <PromoBanner
            badge="Newsletter"
            title="Ne propustite akcije i novosti"
            subtitle="Prijavite se na newsletter i prvi saznajte za posebne ponude."
            action={{ label: 'Prijavi se', href: '/newsletter' }}
            backgroundColor="primary"
            alignment="center"
            size="md"
          />
        </section>

        {/* Props Reference */}
        <section className="px-8">
          <h2 className="mb-4 text-xl font-semibold text-[var(--color-text-primary)]">PromoBanner Props</h2>
          <div className="overflow-x-auto rounded-lg border border-[var(--color-border-primary)] bg-[var(--color-bg-primary)]">
            <table className="w-full text-sm">
              <thead className="border-b border-[var(--color-border-primary)] bg-[var(--color-bg-secondary)]">
                <tr>
                  <th className="px-4 py-3 text-left font-medium text-[var(--color-text-primary)]">Prop</th>
                  <th className="px-4 py-3 text-left font-medium text-[var(--color-text-primary)]">Tip</th>
                  <th className="px-4 py-3 text-left font-medium text-[var(--color-text-primary)]">Default</th>
                  <th className="px-4 py-3 text-left font-medium text-[var(--color-text-primary)]">Opis</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--color-border-primary)]">
                <tr>
                  <td className="px-4 py-3 font-mono text-[var(--color-primary-500)]">title</td>
                  <td className="px-4 py-3 text-[var(--color-text-secondary)]">string</td>
                  <td className="px-4 py-3 text-[var(--color-text-tertiary)]">required</td>
                  <td className="px-4 py-3 text-[var(--color-text-secondary)]">Naslov promocije</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-[var(--color-primary-500)]">subtitle</td>
                  <td className="px-4 py-3 text-[var(--color-text-secondary)]">string</td>
                  <td className="px-4 py-3 text-[var(--color-text-tertiary)]">-</td>
                  <td className="px-4 py-3 text-[var(--color-text-secondary)]">Podnaslov/opis</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-[var(--color-primary-500)]">action</td>
                  <td className="px-4 py-3 text-[var(--color-text-secondary)]">{`{ label, href }`}</td>
                  <td className="px-4 py-3 text-[var(--color-text-tertiary)]">-</td>
                  <td className="px-4 py-3 text-[var(--color-text-secondary)]">CTA akcija</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-[var(--color-primary-500)]">backgroundColor</td>
                  <td className="px-4 py-3 text-[var(--color-text-secondary)]">{`'primary' | 'secondary' | 'dark' | 'gradient'`}</td>
                  <td className="px-4 py-3 text-[var(--color-text-tertiary)]">{`'primary'`}</td>
                  <td className="px-4 py-3 text-[var(--color-text-secondary)]">Boja pozadine</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-[var(--color-primary-500)]">size</td>
                  <td className="px-4 py-3 text-[var(--color-text-secondary)]">{`'sm' | 'md' | 'lg'`}</td>
                  <td className="px-4 py-3 text-[var(--color-text-tertiary)]">{`'md'`}</td>
                  <td className="px-4 py-3 text-[var(--color-text-secondary)]">Veličina bannera</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-[var(--color-primary-500)]">alignment</td>
                  <td className="px-4 py-3 text-[var(--color-text-secondary)]">{`'left' | 'center' | 'right'`}</td>
                  <td className="px-4 py-3 text-[var(--color-text-tertiary)]">{`'center'`}</td>
                  <td className="px-4 py-3 text-[var(--color-text-secondary)]">Poravnanje teksta</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-[var(--color-primary-500)]">badge</td>
                  <td className="px-4 py-3 text-[var(--color-text-secondary)]">string</td>
                  <td className="px-4 py-3 text-[var(--color-text-tertiary)]">-</td>
                  <td className="px-4 py-3 text-[var(--color-text-secondary)]">Oznaka iznad naslova</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-[var(--color-primary-500)]">icon</td>
                  <td className="px-4 py-3 text-[var(--color-text-secondary)]">ReactNode</td>
                  <td className="px-4 py-3 text-[var(--color-text-tertiary)]">-</td>
                  <td className="px-4 py-3 text-[var(--color-text-secondary)]">Ikona pored naslova</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="px-8">
          <h2 className="mb-4 text-xl font-semibold text-[var(--color-text-primary)]">PromoBar Props</h2>
          <div className="overflow-x-auto rounded-lg border border-[var(--color-border-primary)] bg-[var(--color-bg-primary)]">
            <table className="w-full text-sm">
              <thead className="border-b border-[var(--color-border-primary)] bg-[var(--color-bg-secondary)]">
                <tr>
                  <th className="px-4 py-3 text-left font-medium text-[var(--color-text-primary)]">Prop</th>
                  <th className="px-4 py-3 text-left font-medium text-[var(--color-text-primary)]">Tip</th>
                  <th className="px-4 py-3 text-left font-medium text-[var(--color-text-primary)]">Default</th>
                  <th className="px-4 py-3 text-left font-medium text-[var(--color-text-primary)]">Opis</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--color-border-primary)]">
                <tr>
                  <td className="px-4 py-3 font-mono text-[var(--color-primary-500)]">message</td>
                  <td className="px-4 py-3 text-[var(--color-text-secondary)]">string</td>
                  <td className="px-4 py-3 text-[var(--color-text-tertiary)]">required</td>
                  <td className="px-4 py-3 text-[var(--color-text-secondary)]">Tekst poruke</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-[var(--color-primary-500)]">href</td>
                  <td className="px-4 py-3 text-[var(--color-text-secondary)]">string</td>
                  <td className="px-4 py-3 text-[var(--color-text-tertiary)]">-</td>
                  <td className="px-4 py-3 text-[var(--color-text-secondary)]">Link za više informacija</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-[var(--color-primary-500)]">linkText</td>
                  <td className="px-4 py-3 text-[var(--color-text-secondary)]">string</td>
                  <td className="px-4 py-3 text-[var(--color-text-tertiary)]">{`'Saznaj više'`}</td>
                  <td className="px-4 py-3 text-[var(--color-text-secondary)]">Tekst linka</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  )
}

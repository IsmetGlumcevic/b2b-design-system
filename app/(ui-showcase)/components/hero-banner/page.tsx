'use client'

import { HeroBanner } from '@/src/components/ui/HeroBanner'
import { Button } from '@/src/components/ui/buttons'

export default function HeroBannerShowcase() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-secondary)]">
      {/* Header */}
      <div className="border-b border-[var(--color-border-primary)] bg-[var(--color-bg-primary)] px-8 py-6">
        <h1 className="text-3xl font-bold text-[var(--color-text-primary)]">HeroBanner</h1>
        <p className="mt-2 text-[var(--color-text-secondary)]">
          Komponenta za glavni banner na početnoj stranici sa podrškom za pozadinske slike, statistike i CTA akcije.
        </p>
      </div>

      {/* Examples */}
      <div className="space-y-12 pb-16">
        {/* Default */}
        <section>
          <div className="px-8 py-4">
            <h2 className="text-xl font-semibold text-[var(--color-text-primary)]">Default (Large)</h2>
            <p className="text-sm text-[var(--color-text-secondary)]">Standardna verzija s naslovom, podnaslovom i akcijama</p>
          </div>
          <HeroBanner
            badge="Novi katalog 2026"
            title="Profesionalni elektromaterijal"
            highlight="za svaki projekt"
            subtitle="Više od 50.000 proizvoda vodećih svjetskih proizvođača. Brza dostava, stručna podrška i konkurentne cijene."
            primaryAction={{ label: 'Pogledaj katalog', href: '/proizvodi' }}
            secondaryAction={{ label: 'B2B registracija', href: '/b2b/registracija' }}
            size="lg"
          />
        </section>

        {/* With Stats */}
        <section>
          <div className="px-8 py-4">
            <h2 className="text-xl font-semibold text-[var(--color-text-primary)]">Sa statistikama</h2>
            <p className="text-sm text-[var(--color-text-secondary)]">Verzija s prikazom ključnih brojki</p>
          </div>
          <HeroBanner
            title="Vaš partner za elektromaterijal"
            subtitle="Brza dostava, kvalitetni proizvodi, stručna podrška."
            primaryAction={{ label: 'Započni kupovinu', href: '/proizvodi' }}
            size="lg"
            stats={[
              { value: '50.000+', label: 'Proizvoda' },
              { value: '6', label: 'Brendova' },
              { value: '24/48h', label: 'Dostava' },
              { value: '15+', label: 'Godina iskustva' },
            ]}
          />
        </section>

        {/* Medium Size */}
        <section>
          <div className="px-8 py-4">
            <h2 className="text-xl font-semibold text-[var(--color-text-primary)]">Srednja veličina</h2>
            <p className="text-sm text-[var(--color-text-secondary)]">Kompaktnija verzija bannera</p>
          </div>
          <HeroBanner
            title="Akcija na LED rasvjetu"
            highlight="-30% popusta"
            subtitle="Iskoristite posebnu ponudu na sve LED proizvode do kraja mjeseca."
            primaryAction={{ label: 'Pogledaj akciju', href: '/akcije' }}
            size="md"
          />
        </section>

        {/* Small Size */}
        <section>
          <div className="px-8 py-4">
            <h2 className="text-xl font-semibold text-[var(--color-text-primary)]">Mala veličina</h2>
            <p className="text-sm text-[var(--color-text-secondary)]">Minimalni banner za sekundarne promocije</p>
          </div>
          <HeroBanner
            title="Besplatna dostava za narudžbe preko 200 KM"
            primaryAction={{ label: 'Saznaj više', href: '/dostava' }}
            size="sm"
          />
        </section>

        {/* Center Aligned */}
        <section>
          <div className="px-8 py-4">
            <h2 className="text-xl font-semibold text-[var(--color-text-primary)]">Centrirano poravnanje</h2>
            <p className="text-sm text-[var(--color-text-secondary)]">Banner s centriranim sadržajem</p>
          </div>
          <HeroBanner
            badge="Novo"
            title="Solarna oprema"
            subtitle="Kompletna ponuda solarnih panela, invertera i opreme za fotonaponske sisteme."
            primaryAction={{ label: 'Istraži', href: '/kategorije/solarna-oprema' }}
            secondaryAction={{ label: 'Kontaktiraj nas', href: '/kontakt' }}
            alignment="center"
            size="md"
          />
        </section>

        {/* Right Aligned */}
        <section>
          <div className="px-8 py-4">
            <h2 className="text-xl font-semibold text-[var(--color-text-primary)]">Desno poravnanje</h2>
            <p className="text-sm text-[var(--color-text-secondary)]">Banner s desno poravnatim sadržajem</p>
          </div>
          <HeroBanner
            title="B2B Portal"
            subtitle="Registrirajte svoju firmu i ostvarite posebne uvjete."
            primaryAction={{ label: 'Registracija', href: '/b2b/registracija' }}
            alignment="right"
            size="md"
          />
        </section>

        {/* Props Reference */}
        <section className="px-8">
          <h2 className="mb-4 text-xl font-semibold text-[var(--color-text-primary)]">Props</h2>
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
                  <td className="px-4 py-3 text-[var(--color-text-secondary)]">Glavni naslov bannera</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-[var(--color-primary-500)]">subtitle</td>
                  <td className="px-4 py-3 text-[var(--color-text-secondary)]">string</td>
                  <td className="px-4 py-3 text-[var(--color-text-tertiary)]">-</td>
                  <td className="px-4 py-3 text-[var(--color-text-secondary)]">Podnaslov ili opis</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-[var(--color-primary-500)]">highlight</td>
                  <td className="px-4 py-3 text-[var(--color-text-secondary)]">string</td>
                  <td className="px-4 py-3 text-[var(--color-text-tertiary)]">-</td>
                  <td className="px-4 py-3 text-[var(--color-text-secondary)]">Istaknuti tekst u primarnoj boji</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-[var(--color-primary-500)]">badge</td>
                  <td className="px-4 py-3 text-[var(--color-text-secondary)]">string</td>
                  <td className="px-4 py-3 text-[var(--color-text-tertiary)]">-</td>
                  <td className="px-4 py-3 text-[var(--color-text-secondary)]">Badge tekst iznad naslova</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-[var(--color-primary-500)]">primaryAction</td>
                  <td className="px-4 py-3 text-[var(--color-text-secondary)]">{`{ label, href }`}</td>
                  <td className="px-4 py-3 text-[var(--color-text-tertiary)]">-</td>
                  <td className="px-4 py-3 text-[var(--color-text-secondary)]">Primarna CTA akcija</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-[var(--color-primary-500)]">secondaryAction</td>
                  <td className="px-4 py-3 text-[var(--color-text-secondary)]">{`{ label, href }`}</td>
                  <td className="px-4 py-3 text-[var(--color-text-tertiary)]">-</td>
                  <td className="px-4 py-3 text-[var(--color-text-secondary)]">Sekundarna CTA akcija</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-[var(--color-primary-500)]">size</td>
                  <td className="px-4 py-3 text-[var(--color-text-secondary)]">{`'sm' | 'md' | 'lg' | 'xl'`}</td>
                  <td className="px-4 py-3 text-[var(--color-text-tertiary)]">{`'lg'`}</td>
                  <td className="px-4 py-3 text-[var(--color-text-secondary)]">Visina bannera</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-[var(--color-primary-500)]">alignment</td>
                  <td className="px-4 py-3 text-[var(--color-text-secondary)]">{`'left' | 'center' | 'right'`}</td>
                  <td className="px-4 py-3 text-[var(--color-text-tertiary)]">{`'left'`}</td>
                  <td className="px-4 py-3 text-[var(--color-text-secondary)]">Poravnanje sadržaja</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-[var(--color-primary-500)]">stats</td>
                  <td className="px-4 py-3 text-[var(--color-text-secondary)]">{`Array<{ value, label }>`}</td>
                  <td className="px-4 py-3 text-[var(--color-text-tertiary)]">-</td>
                  <td className="px-4 py-3 text-[var(--color-text-secondary)]">Statistike za prikaz</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-[var(--color-primary-500)]">backgroundImage</td>
                  <td className="px-4 py-3 text-[var(--color-text-secondary)]">string</td>
                  <td className="px-4 py-3 text-[var(--color-text-tertiary)]">-</td>
                  <td className="px-4 py-3 text-[var(--color-text-secondary)]">URL pozadinske slike</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-[var(--color-primary-500)]">overlay</td>
                  <td className="px-4 py-3 text-[var(--color-text-secondary)]">{`'dark' | 'light' | 'none'`}</td>
                  <td className="px-4 py-3 text-[var(--color-text-tertiary)]">{`'dark'`}</td>
                  <td className="px-4 py-3 text-[var(--color-text-secondary)]">Overlay boja za pozadinsku sliku</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  )
}

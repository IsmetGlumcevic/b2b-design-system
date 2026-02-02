'use client'

import { BenefitsSection, type BenefitItem } from '@/src/components/ui/BenefitsSection'

// Sample icons
const TruckIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M1 3h15v13H1zM16 8h4l3 3v5h-7V8z" />
    <circle cx="5.5" cy="18.5" r="2.5" />
    <circle cx="18.5" cy="18.5" r="2.5" />
  </svg>
)

const ShieldIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
)

const SupportIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
)

const WalletIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2" />
    <path d="M16 12h4v4h-4a2 2 0 0 1 0-4z" />
  </svg>
)

const sampleBenefits: BenefitItem[] = [
  {
    id: '1',
    title: 'Brza dostava',
    description: 'Isporuka u roku od 24-48h na području BiH, Hrvatske i Srbije',
    icon: <TruckIcon />,
  },
  {
    id: '2',
    title: 'Garancija kvalitete',
    description: 'Svi proizvodi su originalni s punom garancijom proizvođača',
    icon: <ShieldIcon />,
  },
  {
    id: '3',
    title: 'Stručna podrška',
    description: 'Tim stručnjaka na raspolaganju za tehničke konzultacije',
    icon: <SupportIcon />,
  },
  {
    id: '4',
    title: 'B2B uvjeti',
    description: 'Posebne cijene i uvjeti plaćanja za registrirane partnere',
    icon: <WalletIcon />,
  },
]

export default function BenefitsSectionShowcase() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-secondary)]">
      {/* Header */}
      <div className="border-b border-[var(--color-border-primary)] bg-[var(--color-bg-primary)] px-8 py-6">
        <h1 className="text-3xl font-bold text-[var(--color-text-primary)]">BenefitsSection</h1>
        <p className="mt-2 text-[var(--color-text-secondary)]">
          Komponenta za prikaz prednosti/benefita s ikonama i opisima.
        </p>
      </div>

      {/* Examples */}
      <div className="space-y-0 pb-16">
        {/* Grid - 4 columns */}
        <section>
          <div className="px-8 py-4">
            <h2 className="text-xl font-semibold text-[var(--color-text-primary)]">Grid layout - 4 kolone</h2>
            <p className="text-sm text-[var(--color-text-secondary)]">Standardni vertikalni prikaz s karticama</p>
          </div>
          <BenefitsSection
            benefits={sampleBenefits}
            title="Zašto izabrati nas?"
            subtitle="Više od 15 godina iskustva u prodaji elektromaterijala"
            columns={4}
            background="light"
          />
        </section>

        {/* Grid - 3 columns, muted */}
        <section>
          <div className="px-8 py-4">
            <h2 className="text-xl font-semibold text-[var(--color-text-primary)]">Grid layout - 3 kolone, siva pozadina</h2>
            <p className="text-sm text-[var(--color-text-secondary)]">Sa sivom pozadinom za kontrast</p>
          </div>
          <BenefitsSection
            benefits={sampleBenefits.slice(0, 3)}
            title="Naše prednosti"
            columns={3}
            background="muted"
          />
        </section>

        {/* Horizontal layout */}
        <section>
          <div className="px-8 py-4">
            <h2 className="text-xl font-semibold text-[var(--color-text-primary)]">Horizontalni layout</h2>
            <p className="text-sm text-[var(--color-text-secondary)]">Kompaktan horizontalni prikaz bez kartica</p>
          </div>
          <BenefitsSection
            benefits={sampleBenefits}
            layout="horizontal"
            background="muted"
          />
        </section>

        {/* Dark background */}
        <section>
          <div className="px-8 py-4">
            <h2 className="text-xl font-semibold text-[var(--color-text-primary)]">Tamna pozadina</h2>
            <p className="text-sm text-[var(--color-text-secondary)]">Za tamne sekcije stranice</p>
          </div>
          <BenefitsSection
            benefits={sampleBenefits}
            title="Vaš partner za elektromaterijal"
            subtitle="Pouzdana usluga i kvalitetni proizvodi"
            columns={4}
            background="dark"
          />
        </section>

        {/* 2 columns */}
        <section>
          <div className="px-8 py-4">
            <h2 className="text-xl font-semibold text-[var(--color-text-primary)]">2 kolone</h2>
            <p className="text-sm text-[var(--color-text-secondary)]">Veće kartice za istaknute prednosti</p>
          </div>
          <BenefitsSection
            benefits={sampleBenefits.slice(0, 2)}
            title="Ključne prednosti"
            columns={2}
            background="light"
          />
        </section>

        {/* Props Reference */}
        <section className="px-8 pt-8">
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
                  <td className="px-4 py-3 font-mono text-[var(--color-primary-500)]">benefits</td>
                  <td className="px-4 py-3 text-[var(--color-text-secondary)]">BenefitItem[]</td>
                  <td className="px-4 py-3 text-[var(--color-text-tertiary)]">required</td>
                  <td className="px-4 py-3 text-[var(--color-text-secondary)]">Lista prednosti</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-[var(--color-primary-500)]">layout</td>
                  <td className="px-4 py-3 text-[var(--color-text-secondary)]">{`'grid' | 'horizontal' | 'vertical'`}</td>
                  <td className="px-4 py-3 text-[var(--color-text-tertiary)]">{`'grid'`}</td>
                  <td className="px-4 py-3 text-[var(--color-text-secondary)]">Layout varijanta</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-[var(--color-primary-500)]">columns</td>
                  <td className="px-4 py-3 text-[var(--color-text-secondary)]">2 | 3 | 4</td>
                  <td className="px-4 py-3 text-[var(--color-text-tertiary)]">4</td>
                  <td className="px-4 py-3 text-[var(--color-text-secondary)]">Broj kolona za grid</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-[var(--color-primary-500)]">background</td>
                  <td className="px-4 py-3 text-[var(--color-text-secondary)]">{`'light' | 'dark' | 'muted' | 'primary'`}</td>
                  <td className="px-4 py-3 text-[var(--color-text-tertiary)]">{`'muted'`}</td>
                  <td className="px-4 py-3 text-[var(--color-text-secondary)]">Boja pozadine</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  )
}

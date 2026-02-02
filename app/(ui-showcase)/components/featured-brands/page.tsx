'use client'

import { FeaturedBrands, type BrandItem } from '@/src/components/ui/FeaturedBrands'

const sampleBrands: BrandItem[] = [
  { id: '1', name: 'ABB', slug: 'abb', productCount: 1250 },
  { id: '2', name: 'Legrand', slug: 'legrand', productCount: 2100 },
  { id: '3', name: 'Schneider Electric', slug: 'schneider', productCount: 1800 },
  { id: '4', name: 'Philips', slug: 'philips', productCount: 950 },
  { id: '5', name: 'Hager', slug: 'hager', productCount: 780 },
  { id: '6', name: 'OBO Bettermann', slug: 'obo', productCount: 620 },
]

export default function FeaturedBrandsShowcase() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-secondary)]">
      {/* Header */}
      <div className="border-b border-[var(--color-border-primary)] bg-[var(--color-bg-primary)] px-8 py-6">
        <h1 className="text-3xl font-bold text-[var(--color-text-primary)]">FeaturedBrands</h1>
        <p className="mt-2 text-[var(--color-text-secondary)]">
          Komponenta za prikaz brendova/proizvođača s različitim varijantama i pozadinama.
        </p>
      </div>

      {/* Examples */}
      <div className="space-y-0 pb-16">
        {/* Grid - Light */}
        <section>
          <div className="px-8 py-4">
            <h2 className="text-xl font-semibold text-[var(--color-text-primary)]">Grid varijanta - Svijetla pozadina</h2>
            <p className="text-sm text-[var(--color-text-secondary)]">Standardni prikaz brendova u gridu</p>
          </div>
          <FeaturedBrands
            brands={sampleBrands}
            title="Naši brendovi"
            subtitle="Surađujemo s vodećim svjetskim proizvođačima elektromaterijala"
            viewAllHref="/brendovi"
            background="light"
          />
        </section>

        {/* Grid - Dark */}
        <section>
          <div className="px-8 py-4">
            <h2 className="text-xl font-semibold text-[var(--color-text-primary)]">Grid varijanta - Tamna pozadina</h2>
            <p className="text-sm text-[var(--color-text-secondary)]">Za tamne sekcije stranice</p>
          </div>
          <FeaturedBrands
            brands={sampleBrands}
            title="Partneri"
            subtitle="Pouzdani dobavljači kvalitetne opreme"
            viewAllHref="/brendovi"
            background="dark"
          />
        </section>

        {/* List - Muted */}
        <section>
          <div className="px-8 py-4">
            <h2 className="text-xl font-semibold text-[var(--color-text-primary)]">List varijanta - Siva pozadina</h2>
            <p className="text-sm text-[var(--color-text-secondary)]">Kompaktan horizontalni prikaz samo naziva</p>
          </div>
          <FeaturedBrands
            brands={sampleBrands}
            title="Brendovi koje zastupamo"
            variant="list"
            background="muted"
          />
        </section>

        {/* Carousel */}
        <section>
          <div className="px-8 py-4">
            <h2 className="text-xl font-semibold text-[var(--color-text-primary)]">Carousel varijanta</h2>
            <p className="text-sm text-[var(--color-text-secondary)]">Horizontalno skrolanje za više brendova</p>
          </div>
          <FeaturedBrands
            brands={[...sampleBrands, ...sampleBrands]}
            title="Svi brendovi"
            variant="carousel"
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
                  <td className="px-4 py-3 font-mono text-[var(--color-primary-500)]">brands</td>
                  <td className="px-4 py-3 text-[var(--color-text-secondary)]">BrandItem[]</td>
                  <td className="px-4 py-3 text-[var(--color-text-tertiary)]">required</td>
                  <td className="px-4 py-3 text-[var(--color-text-secondary)]">Lista brendova</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-[var(--color-primary-500)]">variant</td>
                  <td className="px-4 py-3 text-[var(--color-text-secondary)]">{`'grid' | 'carousel' | 'list'`}</td>
                  <td className="px-4 py-3 text-[var(--color-text-tertiary)]">{`'grid'`}</td>
                  <td className="px-4 py-3 text-[var(--color-text-secondary)]">Varijanta prikaza</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-[var(--color-primary-500)]">background</td>
                  <td className="px-4 py-3 text-[var(--color-text-secondary)]">{`'light' | 'dark' | 'muted'`}</td>
                  <td className="px-4 py-3 text-[var(--color-text-tertiary)]">{`'light'`}</td>
                  <td className="px-4 py-3 text-[var(--color-text-secondary)]">Boja pozadine</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-[var(--color-primary-500)]">viewAllHref</td>
                  <td className="px-4 py-3 text-[var(--color-text-secondary)]">string</td>
                  <td className="px-4 py-3 text-[var(--color-text-tertiary)]">-</td>
                  <td className="px-4 py-3 text-[var(--color-text-secondary)]">Link za prikaz svih brendova</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  )
}

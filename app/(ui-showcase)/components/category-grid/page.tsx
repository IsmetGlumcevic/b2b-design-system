'use client'

import { CategoryGrid, type CategoryItem } from '@/src/components/ui/CategoryGrid'

// Sample icons
const CableIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2v6m0 8v6M4.93 4.93l4.24 4.24m5.66 5.66l4.24 4.24M2 12h6m8 0h6M4.93 19.07l4.24-4.24m5.66-5.66l4.24-4.24" />
  </svg>
)

const LightbulbIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.9V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.1A7 7 0 0 0 12 2z" />
  </svg>
)

const SwitchIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="6" width="18" height="12" rx="2" />
    <circle cx="8" cy="12" r="2" />
  </svg>
)

const FuseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="6" y="3" width="12" height="18" rx="2" />
    <path d="M10 8h4M10 12h4M10 16h4" />
  </svg>
)

const sampleCategories: CategoryItem[] = [
  { id: '1', name: 'Kablovi i vodiči', slug: 'kablovi', description: 'NYM, PP, H05VV-F, koaksijalni', icon: <CableIcon />, productCount: 2450 },
  { id: '2', name: 'Rasvjeta', slug: 'rasvjeta', description: 'LED paneli, reflektori, sijalice', icon: <LightbulbIcon />, productCount: 1820 },
  { id: '3', name: 'Prekidači i utičnice', slug: 'prekidaci', description: 'Modularni, nadžbukni sistemi', icon: <SwitchIcon />, productCount: 3150 },
  { id: '4', name: 'Osigurači', slug: 'osiguraci', description: 'Automatski osigurači, FID sklopke', icon: <FuseIcon />, productCount: 890 },
  { id: '5', name: 'Razvodni ormari', slug: 'ormari', description: 'Plastični i metalni ormari', icon: <CableIcon />, productCount: 560 },
  { id: '6', name: 'Alati', slug: 'alati', description: 'Ručni alati, mjerni instrumenti', icon: <LightbulbIcon />, productCount: 1240 },
]

const imageCategories: CategoryItem[] = [
  { id: '1', name: 'Kablovi', slug: 'kablovi', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop', productCount: 2450, featured: true },
  { id: '2', name: 'Rasvjeta', slug: 'rasvjeta', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop', productCount: 1820 },
  { id: '3', name: 'Prekidači', slug: 'prekidaci', image: 'https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?w=400&h=300&fit=crop', productCount: 3150 },
  { id: '4', name: 'Osigurači', slug: 'osiguraci', image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=300&fit=crop', productCount: 890 },
]

export default function CategoryGridShowcase() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-secondary)]">
      {/* Header */}
      <div className="border-b border-[var(--color-border-primary)] bg-[var(--color-bg-primary)] px-8 py-6">
        <h1 className="text-3xl font-bold text-[var(--color-text-primary)]">CategoryGrid</h1>
        <p className="mt-2 text-[var(--color-text-secondary)]">
          Grid komponenta za prikaz kategorija proizvoda s različitim varijantama i brojem kolona.
        </p>
      </div>

      {/* Examples */}
      <div className="space-y-12 pb-16">
        {/* Card Variant */}
        <section>
          <div className="px-8 py-4">
            <h2 className="text-xl font-semibold text-[var(--color-text-primary)]">Card varijanta (3 kolone)</h2>
            <p className="text-sm text-[var(--color-text-secondary)]">Standardna verzija s ikonama i opisima</p>
          </div>
          <CategoryGrid
            categories={sampleCategories}
            title="Kategorije proizvoda"
            subtitle="Pronađite sve što vam treba za vaš projekt"
            columns={3}
            variant="card"
          />
        </section>

        {/* Minimal Variant */}
        <section>
          <div className="px-8 py-4">
            <h2 className="text-xl font-semibold text-[var(--color-text-primary)]">Minimal varijanta (4 kolone)</h2>
            <p className="text-sm text-[var(--color-text-secondary)]">Kompaktna verzija za horizontalni prikaz</p>
          </div>
          <CategoryGrid
            categories={sampleCategories}
            title="Brzi pristup kategorijama"
            columns={4}
            variant="minimal"
          />
        </section>

        {/* Image Variant */}
        <section>
          <div className="px-8 py-4">
            <h2 className="text-xl font-semibold text-[var(--color-text-primary)]">Image varijanta</h2>
            <p className="text-sm text-[var(--color-text-secondary)]">Verzija s pozadinskim slikama</p>
          </div>
          <CategoryGrid
            categories={imageCategories}
            title="Popularne kategorije"
            columns={4}
            variant="image"
          />
        </section>

        {/* 6 Columns */}
        <section>
          <div className="px-8 py-4">
            <h2 className="text-xl font-semibold text-[var(--color-text-primary)]">6 kolona</h2>
            <p className="text-sm text-[var(--color-text-secondary)]">Maksimalan broj kolona za kompaktan prikaz</p>
          </div>
          <CategoryGrid
            categories={sampleCategories}
            columns={6}
            variant="card"
          />
        </section>

        {/* 2 Columns */}
        <section>
          <div className="px-8 py-4">
            <h2 className="text-xl font-semibold text-[var(--color-text-primary)]">2 kolone</h2>
            <p className="text-sm text-[var(--color-text-secondary)]">Veće kartice za istaknute kategorije</p>
          </div>
          <CategoryGrid
            categories={sampleCategories.slice(0, 4)}
            title="Istaknute kategorije"
            columns={2}
            variant="card"
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
                  <td className="px-4 py-3 font-mono text-[var(--color-primary-500)]">categories</td>
                  <td className="px-4 py-3 text-[var(--color-text-secondary)]">CategoryItem[]</td>
                  <td className="px-4 py-3 text-[var(--color-text-tertiary)]">required</td>
                  <td className="px-4 py-3 text-[var(--color-text-secondary)]">Lista kategorija za prikaz</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-[var(--color-primary-500)]">title</td>
                  <td className="px-4 py-3 text-[var(--color-text-secondary)]">string</td>
                  <td className="px-4 py-3 text-[var(--color-text-tertiary)]">-</td>
                  <td className="px-4 py-3 text-[var(--color-text-secondary)]">Naslov sekcije</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-[var(--color-primary-500)]">subtitle</td>
                  <td className="px-4 py-3 text-[var(--color-text-secondary)]">string</td>
                  <td className="px-4 py-3 text-[var(--color-text-tertiary)]">-</td>
                  <td className="px-4 py-3 text-[var(--color-text-secondary)]">Podnaslov sekcije</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-[var(--color-primary-500)]">columns</td>
                  <td className="px-4 py-3 text-[var(--color-text-secondary)]">2 | 3 | 4 | 5 | 6</td>
                  <td className="px-4 py-3 text-[var(--color-text-tertiary)]">4</td>
                  <td className="px-4 py-3 text-[var(--color-text-secondary)]">Broj kolona</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-[var(--color-primary-500)]">variant</td>
                  <td className="px-4 py-3 text-[var(--color-text-secondary)]">{`'card' | 'minimal' | 'image'`}</td>
                  <td className="px-4 py-3 text-[var(--color-text-tertiary)]">{`'card'`}</td>
                  <td className="px-4 py-3 text-[var(--color-text-secondary)]">Varijanta prikaza</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  )
}

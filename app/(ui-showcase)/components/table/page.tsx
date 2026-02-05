'use client'

import { ProductTable, type ProductTableItem } from '@/src/components/ui/ProductTable'

// Sample products for demonstration
const sampleProducts: ProductTableItem[] = [
  {
    sifra: '1851699',
    naziv: 'RG4001M2 I SKLOPKA OBICNA 10A 2M CRNA',
    proizvodac: 'LEGRAND',
    zaliha: 433,
    jedinica: 'kom',
    cijena: 1.94,
    staraCijena: 2.99,
    valuta: '€',
  },
  {
    sifra: '1848994',
    naziv: 'R4702G I NOSIVI OKVIR 2M NOŽICE',
    proizvodac: 'LEGRAND',
    zaliha: 4564,
    jedinica: 'kom',
    cijena: 0.61,
    staraCijena: 0.94,
    valuta: '€',
  },
  {
    sifra: '1014305',
    naziv: 'Kabel koax RG 6 75 Ohm',
    proizvodac: 'KABEL',
    zaliha: 13871,
    jedinica: 'm',
    cijena: 0.14,
    staraCijena: 0.25,
    valuta: '€',
  },
  {
    sifra: '1849004',
    naziv: 'RW4141 I UTIC 2P+E 16A DJ ZAS BIJELA',
    proizvodac: 'LEGRAND',
    zaliha: 4109,
    jedinica: 'kom',
    cijena: 2.07,
    staraCijena: 3.18,
    valuta: '€',
  },
  {
    sifra: '1628899',
    naziv: '1SPE007717F0321 I MISTRAL41W,PROZIRNA VRATA 8M, 12SM',
    opis: 'NADŽBUKNI PLASTIČNI RAZVODNI ORMAR MISTRAL41W,PROZ',
    proizvodac: 'ABB',
    zaliha: 7,
    jedinica: 'kom',
    cijena: 10.49,
    staraCijena: 15.43,
    valuta: '€',
  },
  {
    sifra: '1561834',
    naziv: 'EA2080 I POCINČANA PLOČA ZA AM2/IS2',
    opis: 'POCINČANA PLOČA ZA METALNI RAZVODNI ORMAR AM2/IS2,',
    proizvodac: 'ABB',
    zaliha: 45,
    jedinica: 'kom',
    cijena: 124.09,
    staraCijena: 165.45,
    valuta: '€',
  },
  {
    sifra: '1602483',
    naziv: 'Stopica FASTON Ž 1,5-2,5mm2 6,3X0,8 plava (100)',
    proizvodac: 'HAUPA',
    zaliha: 1740,
    jedinica: 'kom',
    cijena: 0.08,
    staraCijena: 0.12,
    valuta: '€',
  },
]

const lowStockProducts: ProductTableItem[] = [
  {
    sifra: '2001234',
    naziv: 'Osigurač B16A 1P',
    proizvodac: 'ABB',
    zaliha: 5,
    jedinica: 'kom',
    cijena: 3.45,
    valuta: '€',
  },
  {
    sifra: '2001235',
    naziv: 'Osigurač C16A 1P',
    proizvodac: 'ABB',
    zaliha: 3,
    jedinica: 'kom',
    cijena: 3.65,
    valuta: '€',
  },
]

const outOfStockProducts: ProductTableItem[] = [
  {
    sifra: '3001234',
    naziv: 'LED Panel 60x60 40W',
    proizvodac: 'PHILIPS',
    zaliha: 0,
    jedinica: 'kom',
    cijena: 45.99,
    staraCijena: 59.99,
    valuta: '€',
  },
]

export default function TablePage() {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-12">
        <h1 className="mb-2 text-3xl font-bold text-[var(--color-text-primary)]">
          ProductTable
        </h1>
        <p className="text-[var(--color-text-secondary)]">
          Tabela za prikaz proizvoda sa svim bitnim informacijama: šifra, naziv, proizvođač, zaliha, cijena i opcija za dodavanje u košaricu.
        </p>
      </div>

      {/* Basic Table */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Osnovna tabela
        </h2>
        <ProductTable
          items={sampleProducts}
          onAddToCart={(item, qty) => {
            console.log('Dodano u košaricu:', qty, 'x', item.naziv)
            alert(`Dodano u košaricu: ${qty} x ${item.naziv}`)
          }}
        />
      </section>

      {/* Low Stock */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Mali lager (upozorenje)
        </h2>
        <p className="mb-4 text-[var(--color-text-secondary)]">
          Proizvodi sa manje od 10 komada na stanju prikazuju se sa žutim indikatorom.
        </p>
        <ProductTable
          items={lowStockProducts}
          onAddToCart={(item, qty) => console.log('Dodano:', qty, 'x', item.naziv)}
        />
      </section>

      {/* Out of Stock */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Nema na stanju
        </h2>
        <p className="mb-4 text-[var(--color-text-secondary)]">
          Proizvodi koji nisu na stanju prikazuju se sa crvenim indikatorom i onemogućenim dodavanjem u košaricu.
        </p>
        <ProductTable
          items={outOfStockProducts}
          onAddToCart={(item, qty) => console.log('Dodano:', qty, 'x', item.naziv)}
        />
      </section>

      {/* Loading State */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Učitavanje
        </h2>
        <ProductTable items={[]} isLoading />
      </section>

      {/* Empty State */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Prazno stanje
        </h2>
        <ProductTable items={[]} />
      </section>

      {/* Custom Empty State */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Prilagođeno prazno stanje
        </h2>
        <ProductTable
          items={[]}
          emptyState={
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <svg
                className="mb-4 h-16 w-16 text-[var(--color-text-tertiary)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                />
              </svg>
              <p className="text-lg font-medium text-[var(--color-text-primary)]">
                Nema pronađenih proizvoda
              </p>
              <p className="mt-1 text-[var(--color-text-secondary)]">
                Pokušajte promijeniti filtere ili pretragu
              </p>
            </div>
          }
        />
      </section>

      {/* Usage Code */}
      <section className="rounded-[var(--radius-card)] bg-[var(--color-bg-secondary)] p-6">
        <h2 className="mb-4 text-xl font-semibold text-[var(--color-text-primary)]">
          Korištenje
        </h2>
        <pre className="overflow-x-auto rounded-md bg-[var(--color-bg-tertiary)] p-4">
          <code className="text-sm text-[var(--color-text-primary)]">
{`import { ProductTable, type ProductTableItem } from '@/src/components/ui/ProductTable'

const products: ProductTableItem[] = [
  {
    sifra: '1851699',
    naziv: 'RG4001M2 I SKLOPKA OBICNA 10A 2M CRNA',
    proizvodac: 'LEGRAND',
    zaliha: 433,
    jedinica: 'kom',
    cijena: 1.94,
    staraCijena: 2.99,
    valuta: '€',
  },
  // ...
]

// Basic usage
<ProductTable
  items={products}
  onAddToCart={(item, qty) => {
    console.log('Dodano:', qty, 'x', item.naziv)
  }}
/>

// Loading state
<ProductTable items={[]} isLoading />

// Custom empty state
<ProductTable
  items={[]}
  emptyState={<div>Nema proizvoda</div>}
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
                <th className="py-2 text-left font-semibold">Prop</th>
                <th className="py-2 text-left font-semibold">Tip</th>
                <th className="py-2 text-left font-semibold">Opis</th>
              </tr>
            </thead>
            <tbody className="text-[var(--color-text-secondary)]">
              <tr className="border-b border-[var(--color-border-primary)]">
                <td className="py-2"><code>items</code></td>
                <td className="py-2"><code>ProductTableItem[]</code></td>
                <td className="py-2">Lista proizvoda za prikaz</td>
              </tr>
              <tr className="border-b border-[var(--color-border-primary)]">
                <td className="py-2"><code>onAddToCart</code></td>
                <td className="py-2"><code>(item, qty) =&gt; void</code></td>
                <td className="py-2">Callback kad se dodaje u košaricu</td>
              </tr>
              <tr className="border-b border-[var(--color-border-primary)]">
                <td className="py-2"><code>isLoading</code></td>
                <td className="py-2"><code>boolean</code></td>
                <td className="py-2">Prikazuje loading spinner</td>
              </tr>
              <tr className="border-b border-[var(--color-border-primary)]">
                <td className="py-2"><code>emptyState</code></td>
                <td className="py-2"><code>ReactNode</code></td>
                <td className="py-2">Prilagođeni prikaz kad nema proizvoda</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ProductTableItem Interface */}
      <section className="mt-8 rounded-[var(--radius-card)] bg-[var(--color-bg-secondary)] p-6">
        <h2 className="mb-4 text-xl font-semibold text-[var(--color-text-primary)]">
          ProductTableItem Interface
        </h2>
        <pre className="overflow-x-auto rounded-md bg-[var(--color-bg-tertiary)] p-4">
          <code className="text-sm text-[var(--color-text-primary)]">
{`interface ProductTableItem {
  sifra: string        // Šifra proizvoda
  slika?: string       // URL slike proizvoda
  naziv: string        // Naziv proizvoda
  opis?: string        // Dodatni opis (opcionalno)
  proizvodac: string   // Naziv proizvođača
  zaliha: number       // Količina na stanju
  jedinica: string     // Jedinica mjere (kom, m, kg...)
  cijena: number       // Trenutna cijena
  staraCijena?: number // Stara cijena (za popust)
  valuta?: string      // Valuta (default: €)
}`}
          </code>
        </pre>
      </section>
    </div>
  )
}

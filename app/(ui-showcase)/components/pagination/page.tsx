'use client'

import { useState } from 'react'
import { Pagination } from '@/src/components/ui/Pagination'

export default function PaginationPage() {
  const [page1, setPage1] = useState(1)
  const [page2, setPage2] = useState(5)
  const [page3, setPage3] = useState(1)
  const [page4, setPage4] = useState(1)
  const [page5, setPage5] = useState(1)
  const [page6, setPage6] = useState(1)

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-12">
        <h1 className="mb-2 text-3xl font-bold text-[var(--color-text-primary)]">
          Pagination
        </h1>
        <p className="text-[var(--color-text-secondary)]">
          Pagination komponenta za navigaciju kroz stranice sa više varijanti i veličina.
        </p>
      </div>

      {/* Basic Usage */}
      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Osnovna upotreba
        </h2>
        <div className="mb-4 rounded-[var(--radius-card)] border border-[var(--color-border-primary)] bg-[var(--color-bg-elevated)] p-6">
          <Pagination
            currentPage={page1}
            totalPages={10}
            onPageChange={setPage1}
          />
          <p className="mt-4 text-sm text-[var(--color-text-secondary)]">
            Trenutna stranica: {page1}
          </p>
        </div>
      </section>

      {/* Variants */}
      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Varijante
        </h2>

        <div className="space-y-8">
          {/* Default */}
          <div>
            <h3 className="mb-4 text-lg font-medium text-[var(--color-text-primary)]">
              Default
            </h3>
            <div className="rounded-[var(--radius-card)] border border-[var(--color-border-primary)] bg-[var(--color-bg-elevated)] p-6">
              <Pagination
                currentPage={page2}
                totalPages={20}
                onPageChange={setPage2}
                variant="default"
              />
            </div>
          </div>

          {/* Outline */}
          <div>
            <h3 className="mb-4 text-lg font-medium text-[var(--color-text-primary)]">
              Outline
            </h3>
            <div className="rounded-[var(--radius-card)] border border-[var(--color-border-primary)] bg-[var(--color-bg-elevated)] p-6">
              <Pagination
                currentPage={page3}
                totalPages={10}
                onPageChange={setPage3}
                variant="outline"
              />
            </div>
          </div>

          {/* Ghost */}
          <div>
            <h3 className="mb-4 text-lg font-medium text-[var(--color-text-primary)]">
              Ghost
            </h3>
            <div className="rounded-[var(--radius-card)] border border-[var(--color-border-primary)] bg-[var(--color-bg-elevated)] p-6">
              <Pagination
                currentPage={page4}
                totalPages={10}
                onPageChange={setPage4}
                variant="ghost"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sizes */}
      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Veličine
        </h2>

        <div className="space-y-8">
          {/* Small */}
          <div>
            <h3 className="mb-4 text-lg font-medium text-[var(--color-text-primary)]">
              Small (sm)
            </h3>
            <div className="rounded-[var(--radius-card)] border border-[var(--color-border-primary)] bg-[var(--color-bg-elevated)] p-6">
              <Pagination
                currentPage={page5}
                totalPages={10}
                onPageChange={setPage5}
                size="sm"
              />
            </div>
          </div>

          {/* Medium */}
          <div>
            <h3 className="mb-4 text-lg font-medium text-[var(--color-text-primary)]">
              Medium (md) - Default
            </h3>
            <div className="rounded-[var(--radius-card)] border border-[var(--color-border-primary)] bg-[var(--color-bg-elevated)] p-6">
              <Pagination
                currentPage={page5}
                totalPages={10}
                onPageChange={setPage5}
                size="md"
              />
            </div>
          </div>

          {/* Large */}
          <div>
            <h3 className="mb-4 text-lg font-medium text-[var(--color-text-primary)]">
              Large (lg)
            </h3>
            <div className="rounded-[var(--radius-card)] border border-[var(--color-border-primary)] bg-[var(--color-bg-elevated)] p-6">
              <Pagination
                currentPage={page5}
                totalPages={10}
                onPageChange={setPage5}
                size="lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* With Edge Buttons */}
      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Sa dugmadima za prvu/zadnju stranicu
        </h2>
        <div className="rounded-[var(--radius-card)] border border-[var(--color-border-primary)] bg-[var(--color-bg-elevated)] p-6">
          <Pagination
            currentPage={page6}
            totalPages={50}
            onPageChange={setPage6}
            showEdges
          />
          <p className="mt-4 text-sm text-[var(--color-text-secondary)]">
            Trenutna stranica: {page6} od 50
          </p>
        </div>
      </section>

      {/* With More Siblings */}
      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Sa više susjednih stranica
        </h2>
        <div className="rounded-[var(--radius-card)] border border-[var(--color-border-primary)] bg-[var(--color-bg-elevated)] p-6">
          <Pagination
            currentPage={page6}
            totalPages={50}
            onPageChange={setPage6}
            siblingCount={2}
          />
        </div>
      </section>

      {/* Few Pages */}
      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Malo stranica (bez ellipsis)
        </h2>
        <div className="rounded-[var(--radius-card)] border border-[var(--color-border-primary)] bg-[var(--color-bg-elevated)] p-6">
          <Pagination
            currentPage={2}
            totalPages={5}
            onPageChange={() => {}}
          />
        </div>
      </section>

      {/* Usage Code */}
      <section className="rounded-[var(--radius-card)] bg-[var(--color-bg-secondary)] p-6">
        <h2 className="mb-4 text-xl font-semibold text-[var(--color-text-primary)]">
          Korištenje
        </h2>
        <pre className="overflow-x-auto rounded-md bg-[var(--color-bg-tertiary)] p-4">
          <code className="text-sm text-[var(--color-text-primary)]">
{`import { Pagination } from '@/src/components/ui/Pagination'

// Basic usage
const [currentPage, setCurrentPage] = useState(1)

<Pagination
  currentPage={currentPage}
  totalPages={10}
  onPageChange={setCurrentPage}
/>

// With variant and size
<Pagination
  currentPage={currentPage}
  totalPages={20}
  onPageChange={setCurrentPage}
  variant="outline"
  size="lg"
/>

// With edge buttons (first/last)
<Pagination
  currentPage={currentPage}
  totalPages={50}
  onPageChange={setCurrentPage}
  showEdges
/>

// With more siblings visible
<Pagination
  currentPage={currentPage}
  totalPages={50}
  onPageChange={setCurrentPage}
  siblingCount={2}
/>

// Custom labels (i18n)
<Pagination
  currentPage={currentPage}
  totalPages={10}
  onPageChange={setCurrentPage}
  labels={{
    previous: 'Previous',
    next: 'Next',
    first: 'First',
    last: 'Last',
    page: 'Page',
  }}
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
                <th className="py-3 pr-4 text-left font-medium text-[var(--color-text-primary)]">Prop</th>
                <th className="py-3 pr-4 text-left font-medium text-[var(--color-text-primary)]">Tip</th>
                <th className="py-3 pr-4 text-left font-medium text-[var(--color-text-primary)]">Default</th>
                <th className="py-3 text-left font-medium text-[var(--color-text-primary)]">Opis</th>
              </tr>
            </thead>
            <tbody className="text-[var(--color-text-secondary)]">
              <tr className="border-b border-[var(--color-border-primary)]">
                <td className="py-3 pr-4"><code>currentPage</code></td>
                <td className="py-3 pr-4"><code>number</code></td>
                <td className="py-3 pr-4">-</td>
                <td className="py-3">Trenutna aktivna stranica (1-based)</td>
              </tr>
              <tr className="border-b border-[var(--color-border-primary)]">
                <td className="py-3 pr-4"><code>totalPages</code></td>
                <td className="py-3 pr-4"><code>number</code></td>
                <td className="py-3 pr-4">-</td>
                <td className="py-3">Ukupan broj stranica</td>
              </tr>
              <tr className="border-b border-[var(--color-border-primary)]">
                <td className="py-3 pr-4"><code>onPageChange</code></td>
                <td className="py-3 pr-4"><code>(page: number) =&gt; void</code></td>
                <td className="py-3 pr-4">-</td>
                <td className="py-3">Callback kada se stranica promijeni</td>
              </tr>
              <tr className="border-b border-[var(--color-border-primary)]">
                <td className="py-3 pr-4"><code>variant</code></td>
                <td className="py-3 pr-4"><code>&apos;default&apos; | &apos;outline&apos; | &apos;ghost&apos;</code></td>
                <td className="py-3 pr-4"><code>&apos;default&apos;</code></td>
                <td className="py-3">Vizualna varijanta</td>
              </tr>
              <tr className="border-b border-[var(--color-border-primary)]">
                <td className="py-3 pr-4"><code>size</code></td>
                <td className="py-3 pr-4"><code>&apos;sm&apos; | &apos;md&apos; | &apos;lg&apos;</code></td>
                <td className="py-3 pr-4"><code>&apos;md&apos;</code></td>
                <td className="py-3">Veličina komponente</td>
              </tr>
              <tr className="border-b border-[var(--color-border-primary)]">
                <td className="py-3 pr-4"><code>siblingCount</code></td>
                <td className="py-3 pr-4"><code>number</code></td>
                <td className="py-3 pr-4"><code>1</code></td>
                <td className="py-3">Broj stranica sa svake strane trenutne</td>
              </tr>
              <tr className="border-b border-[var(--color-border-primary)]">
                <td className="py-3 pr-4"><code>showEdges</code></td>
                <td className="py-3 pr-4"><code>boolean</code></td>
                <td className="py-3 pr-4"><code>false</code></td>
                <td className="py-3">Prikaži dugmad za prvu/zadnju stranicu</td>
              </tr>
              <tr>
                <td className="py-3 pr-4"><code>labels</code></td>
                <td className="py-3 pr-4"><code>object</code></td>
                <td className="py-3 pr-4">BHS labels</td>
                <td className="py-3">Prilagođeni tekstovi za i18n</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* CSS Variables Used */}
      <section className="mt-8 rounded-[var(--radius-card)] bg-[var(--color-bg-secondary)] p-6">
        <h2 className="mb-4 text-xl font-semibold text-[var(--color-text-primary)]">
          CSS Varijable
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <h3 className="mb-2 font-medium text-[var(--color-text-primary)]">Boje</h3>
            <ul className="space-y-1 text-sm text-[var(--color-text-secondary)]">
              <li><code>--color-primary-500</code> - Aktivna stranica</li>
              <li><code>--color-primary-content</code> - Tekst aktivne stranice</li>
              <li><code>--color-text-secondary</code> - Tekst neaktivnih</li>
              <li><code>--color-bg-tertiary</code> - Hover background</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-2 font-medium text-[var(--color-text-primary)]">Ostalo</h3>
            <ul className="space-y-1 text-sm text-[var(--color-text-secondary)]">
              <li><code>--radius-button</code> - Border radius</li>
              <li><code>--spacing-1</code> - Gap između elemenata</li>
              <li><code>--transition-fast</code> - Animacija prelaza</li>
              <li><code>--font-size-sm/base/lg</code> - Veličine fonta</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

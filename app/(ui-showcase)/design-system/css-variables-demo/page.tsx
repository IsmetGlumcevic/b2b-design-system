'use client'

import { useState } from 'react'

export default function CSSVariablesDemo() {
  const [showValues, setShowValues] = useState(false)

  return (
    <div className="min-h-screen bg-[var(--color-bg-secondary)] p-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-3xl font-bold">CSS Varijable - Kako to radi?</h1>

        {/* Toggle za prikaz vrijednosti */}
        <button
          onClick={() => setShowValues(!showValues)}
          className="mb-8 rounded-[var(--radius-button)] bg-[var(--color-primary-500)] px-6 py-2 text-white"
        >
          {showValues ? 'Sakrij' : 'Prikaži'} resolved vrijednosti
        </button>

        <div className="space-y-8">
          {/* 1. Border Radius Demo */}
          <section className="rounded-[var(--radius-card)] bg-white p-6 shadow-[var(--shadow-card)]">
            <h2 className="mb-4 text-xl font-semibold">1. Border Radius</h2>

            <div className="space-y-4">
              {/* Button */}
              <div>
                <p className="mb-2 text-sm text-gray-600">
                  className="rounded-[var(--radius-button)]"
                </p>
                <button className="rounded-[var(--radius-button)] bg-blue-500 px-6 py-2 text-white">
                  Button
                </button>
                {showValues && (
                  <p className="mt-2 text-xs font-mono text-green-600">
                    ✅ --radius-button → {getComputedStyle(document.documentElement).getPropertyValue('--radius-button')}
                  </p>
                )}
              </div>

              {/* Card */}
              <div>
                <p className="mb-2 text-sm text-gray-600">
                  className="rounded-[var(--radius-card)]"
                </p>
                <div className="inline-block rounded-[var(--radius-card)] border-2 border-gray-300 bg-gray-50 p-4">
                  Card Element
                </div>
                {showValues && (
                  <p className="mt-2 text-xs font-mono text-green-600">
                    ✅ --radius-card → {getComputedStyle(document.documentElement).getPropertyValue('--radius-card')}
                  </p>
                )}
              </div>
            </div>
          </section>

          {/* 2. Spacing Demo */}
          <section className="rounded-[var(--radius-card)] bg-white p-6 shadow-[var(--shadow-card)]">
            <h2 className="mb-4 text-xl font-semibold">2. Spacing (Padding)</h2>

            <div className="space-y-4">
              <div>
                <p className="mb-2 text-sm text-gray-600">
                  className="p-[var(--spacing-card-padding)]"
                </p>
                <div className="inline-block border-2 border-dashed border-blue-300 bg-blue-50">
                  <div className="bg-white p-[var(--spacing-card-padding)]">
                    Ovaj tekst ima card padding
                  </div>
                </div>
                {showValues && (
                  <p className="mt-2 text-xs font-mono text-green-600">
                    ✅ --spacing-card-padding → {getComputedStyle(document.documentElement).getPropertyValue('--spacing-card-padding')}
                  </p>
                )}
              </div>

              <div>
                <p className="mb-2 text-sm text-gray-600">
                  className="px-[var(--spacing-button-padding-x)]"
                </p>
                <div className="inline-block border-2 border-dashed border-green-300 bg-green-50">
                  <div className="bg-white px-[var(--spacing-button-padding-x)] py-2">
                    Button horizontal padding
                  </div>
                </div>
                {showValues && (
                  <p className="mt-2 text-xs font-mono text-green-600">
                    ✅ --spacing-button-padding-x → {getComputedStyle(document.documentElement).getPropertyValue('--spacing-button-padding-x')}
                  </p>
                )}
              </div>
            </div>
          </section>

          {/* 3. Shadows Demo */}
          <section className="rounded-[var(--radius-card)] bg-white p-6 shadow-[var(--shadow-card)]">
            <h2 className="mb-4 text-xl font-semibold">3. Shadows</h2>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[var(--radius-card)] bg-white p-4 shadow-[var(--shadow-card)]">
                <p className="text-sm">shadow-[var(--shadow-card)]</p>
                {showValues && (
                  <p className="mt-2 text-xs font-mono text-green-600">
                    ✅ Card shadow
                  </p>
                )}
              </div>

              <div className="rounded-[var(--radius-card)] bg-white p-4 shadow-[var(--shadow-card-hover)]">
                <p className="text-sm">shadow-[var(--shadow-card-hover)]</p>
                {showValues && (
                  <p className="mt-2 text-xs font-mono text-green-600">
                    ✅ Card hover shadow (jači)
                  </p>
                )}
              </div>
            </div>
          </section>

          {/* 4. Resolution Flow */}
          <section className="rounded-[var(--radius-card)] bg-gradient-to-r from-blue-50 to-purple-50 p-6">
            <h2 className="mb-4 text-xl font-semibold">4. Kako Browser Resolve-uje Varijable</h2>

            <div className="space-y-3 text-sm">
              <div className="rounded-lg bg-white p-4">
                <p className="font-mono text-gray-600">1. className="rounded-[var(--radius-button)]"</p>
                <p className="mt-1 text-xs text-gray-500">↓ Browser traži --radius-button</p>
              </div>

              <div className="rounded-lg bg-white p-4">
                <p className="font-mono text-gray-600">2. --radius-button: var(--radius-md)</p>
                <p className="mt-1 text-xs text-gray-500">↓ Pronašao referenicu na --radius-md</p>
              </div>

              <div className="rounded-lg bg-white p-4">
                <p className="font-mono text-gray-600">3. --radius-md: 0.375rem</p>
                <p className="mt-1 text-xs text-gray-500">↓ Pronašao konkretnu vrijednost</p>
              </div>

              <div className="rounded-lg bg-green-100 p-4">
                <p className="font-mono font-bold text-green-700">✅ REZULTAT: border-radius: 0.375rem (6px)</p>
              </div>
            </div>
          </section>

          {/* 5. Sa Sharp Temom */}
          <section className="rounded-[var(--radius-card)] border-2 border-orange-200 bg-orange-50 p-6">
            <h2 className="mb-4 text-xl font-semibold">5. Što se desi sa Sharp Temom?</h2>

            <div className="space-y-3">
              <div className="rounded-lg bg-white p-4">
                <p className="font-semibold text-gray-700">PRIJE (globals.css):</p>
                <p className="font-mono text-sm text-gray-600">--radius-button: var(--radius-md) = 6px</p>
              </div>

              <div className="text-center text-2xl">↓</div>

              <div className="rounded-lg border-2 border-orange-300 bg-white p-4">
                <p className="font-semibold text-orange-600">POSLIJE (sharp.css override):</p>
                <p className="font-mono text-sm text-orange-700">--radius-button: 0</p>
              </div>

              <div className="text-center text-2xl">↓</div>

              <div className="rounded-lg bg-green-100 p-4">
                <p className="font-semibold text-green-700">REZULTAT:</p>
                <p className="font-mono text-sm text-green-700">border-radius: 0px ✨</p>
              </div>
            </div>

            <div className="mt-6 rounded-lg border-2 border-blue-200 bg-blue-50 p-4">
              <p className="text-sm font-semibold text-blue-700">💡 KLJUČNA POENTA:</p>
              <p className="mt-2 text-sm text-blue-600">
                Komponente NE ZNAJU da je tema promijenjena! One samo koriste <code className="rounded bg-white px-1">var(--radius-button)</code>
                i browser automatski uzima najnoviju vrijednost iz CSS cascade-a.
              </p>
            </div>
          </section>

          {/* 6. Praktičan primjer */}
          <section className="rounded-[var(--radius-card)] bg-white p-6 shadow-[var(--shadow-card)]">
            <h2 className="mb-4 text-xl font-semibold">6. Praktičan Primjer - Kompletan Button</h2>

            <div className="space-y-4">
              <button
                className="rounded-[var(--radius-button)] bg-[var(--color-primary-500)] px-[var(--spacing-button-padding-x)] py-[var(--spacing-button-padding-y)] text-white shadow-[var(--shadow-sm)] transition-all hover:bg-[var(--color-primary-hover)] hover:shadow-[var(--shadow-md)]"
              >
                Kompletan Button
              </button>

              <div className="rounded-lg bg-gray-50 p-4 text-xs font-mono">
                <p className="text-gray-600">className=&#123;</p>
                <p className="ml-4 text-blue-600">"rounded-[var(--radius-button)]"</p>
                <p className="ml-4 text-green-600">"px-[var(--spacing-button-padding-x)]"</p>
                <p className="ml-4 text-purple-600">"py-[var(--spacing-button-padding-y)]"</p>
                <p className="ml-4 text-red-600">"bg-[var(--color-primary-500)]"</p>
                <p className="ml-4 text-yellow-600">"shadow-[var(--shadow-sm)]"</p>
                <p className="ml-4 text-pink-600">"hover:shadow-[var(--shadow-md)]"</p>
                <p className="text-gray-600">&#125;</p>
              </div>

              {showValues && (
                <div className="rounded-lg border-2 border-green-200 bg-green-50 p-4 text-sm">
                  <p className="font-semibold text-green-700">Resolved Vrijednosti:</p>
                  <ul className="mt-2 space-y-1 text-xs font-mono text-green-600">
                    <li>border-radius: {getComputedStyle(document.documentElement).getPropertyValue('--radius-button') || '6px'}</li>
                    <li>padding-x: {getComputedStyle(document.documentElement).getPropertyValue('--spacing-button-padding-x') || '24px'}</li>
                    <li>padding-y: {getComputedStyle(document.documentElement).getPropertyValue('--spacing-button-padding-y') || '10px'}</li>
                    <li>background: {getComputedStyle(document.documentElement).getPropertyValue('--color-primary-500') || '#ed1c24'}</li>
                  </ul>
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

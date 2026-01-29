'use client'

import { ToastProvider, useToast } from '@/src/components/ui/Toast'

function ToastDemo() {
  const toast = useToast()

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-12">
        <h1 className="mb-2 text-3xl font-bold text-[var(--color-text-primary)]">
          Toast
        </h1>
        <p className="text-[var(--color-text-secondary)]">
          Toast komponenta za prikazivanje kratkih obavijesti. Koristi Context API za jednostavno upravljanje iz bilo koje komponente.
        </p>
      </div>

      {/* Basic Variants */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Varijante
        </h2>
        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => toast.success('Narudžba je uspješno kreirana.')}
            className="px-4 py-2 bg-[var(--color-success-500)] text-white rounded-[var(--radius-button)] hover:bg-[var(--color-success-600)] transition-colors"
          >
            Success Toast
          </button>
          <button
            onClick={() => toast.error('Došlo je do greške. Pokušajte ponovo.')}
            className="px-4 py-2 bg-[var(--color-error-500)] text-white rounded-[var(--radius-button)] hover:bg-[var(--color-error-600)] transition-colors"
          >
            Error Toast
          </button>
          <button
            onClick={() => toast.warning('Vaša sesija uskoro ističe.')}
            className="px-4 py-2 bg-[var(--color-warning-500)] text-white rounded-[var(--radius-button)] hover:bg-[var(--color-warning-600)] transition-colors"
          >
            Warning Toast
          </button>
          <button
            onClick={() => toast.info('Nova verzija je dostupna.')}
            className="px-4 py-2 bg-[var(--color-info-500)] text-white rounded-[var(--radius-button)] hover:bg-[var(--color-info-600)] transition-colors"
          >
            Info Toast
          </button>
          <button
            onClick={() => toast.addToast('Neutralna poruka.', { variant: 'neutral' })}
            className="px-4 py-2 bg-[var(--color-neutral-500)] text-white rounded-[var(--radius-button)] hover:bg-[var(--color-neutral-600)] transition-colors"
          >
            Neutral Toast
          </button>
        </div>
      </section>

      {/* With Titles */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Sa naslovima
        </h2>
        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => toast.success('Vaša narudžba #12345 je spremna za slanje.', { title: 'Narudžba potvrđena' })}
            className="px-4 py-2 bg-[var(--color-success-500)] text-white rounded-[var(--radius-button)] hover:bg-[var(--color-success-600)] transition-colors"
          >
            Success sa naslovom
          </button>
          <button
            onClick={() => toast.error('Transakcija nije uspjela. Provjerite podatke kartice.', { title: 'Greška plaćanja' })}
            className="px-4 py-2 bg-[var(--color-error-500)] text-white rounded-[var(--radius-button)] hover:bg-[var(--color-error-600)] transition-colors"
          >
            Error sa naslovom
          </button>
          <button
            onClick={() => toast.warning('Samo 2 artikla preostala na stanju.', { title: 'Ograničena dostupnost' })}
            className="px-4 py-2 bg-[var(--color-warning-500)] text-white rounded-[var(--radius-button)] hover:bg-[var(--color-warning-600)] transition-colors"
          >
            Warning sa naslovom
          </button>
          <button
            onClick={() => toast.info('Koristite kod POPUST20 za popust.', { title: 'Nova promocija' })}
            className="px-4 py-2 bg-[var(--color-info-500)] text-white rounded-[var(--radius-button)] hover:bg-[var(--color-info-600)] transition-colors"
          >
            Info sa naslovom
          </button>
        </div>
      </section>

      {/* Duration Options */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Trajanje
        </h2>
        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => toast.info('Ova poruka traje 2 sekunde.', { duration: 2000 })}
            className="px-4 py-2 bg-[var(--color-neutral-700)] text-white rounded-[var(--radius-button)] hover:bg-[var(--color-neutral-800)] transition-colors"
          >
            2 sekunde
          </button>
          <button
            onClick={() => toast.info('Ova poruka traje 5 sekundi (default).', { duration: 5000 })}
            className="px-4 py-2 bg-[var(--color-neutral-700)] text-white rounded-[var(--radius-button)] hover:bg-[var(--color-neutral-800)] transition-colors"
          >
            5 sekundi
          </button>
          <button
            onClick={() => toast.info('Ova poruka traje 10 sekundi.', { duration: 10000 })}
            className="px-4 py-2 bg-[var(--color-neutral-700)] text-white rounded-[var(--radius-button)] hover:bg-[var(--color-neutral-800)] transition-colors"
          >
            10 sekundi
          </button>
          <button
            onClick={() => toast.warning('Ova poruka se ne zatvara automatski.', { duration: 0, title: 'Važna poruka' })}
            className="px-4 py-2 bg-[var(--color-neutral-700)] text-white rounded-[var(--radius-button)] hover:bg-[var(--color-neutral-800)] transition-colors"
          >
            Bez auto-zatvaranja
          </button>
        </div>
      </section>

      {/* Non-dismissible */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Bez X gumba
        </h2>
        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => toast.info('Ova poruka nema gumb za zatvaranje.', { dismissible: false, duration: 3000 })}
            className="px-4 py-2 bg-[var(--color-neutral-700)] text-white rounded-[var(--radius-button)] hover:bg-[var(--color-neutral-800)] transition-colors"
          >
            Non-dismissible toast
          </button>
        </div>
      </section>

      {/* Real-world Examples */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Primjeri korištenja
        </h2>

        {/* E-commerce */}
        <div className="mb-8">
          <h3 className="mb-4 text-lg font-medium text-[var(--color-text-primary)]">
            E-commerce
          </h3>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => toast.success('Laptop Dell XPS 15 dodan u košaricu.', { title: 'Dodano u košaricu' })}
              className="px-4 py-2 border border-[var(--color-border-primary)] rounded-[var(--radius-button)] hover:bg-[var(--color-bg-tertiary)] transition-colors"
            >
              Dodaj u košaricu
            </button>
            <button
              onClick={() => toast.success('Artikal dodan na listu želja.', { title: 'Lista želja' })}
              className="px-4 py-2 border border-[var(--color-border-primary)] rounded-[var(--radius-button)] hover:bg-[var(--color-bg-tertiary)] transition-colors"
            >
              Dodaj na wishlist
            </button>
            <button
              onClick={() => toast.error('Artikal više nije dostupan.', { title: 'Nedostupno' })}
              className="px-4 py-2 border border-[var(--color-border-primary)] rounded-[var(--radius-button)] hover:bg-[var(--color-bg-tertiary)] transition-colors"
            >
              Artikal nedostupan
            </button>
          </div>
        </div>

        {/* Forms */}
        <div className="mb-8">
          <h3 className="mb-4 text-lg font-medium text-[var(--color-text-primary)]">
            Forme
          </h3>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => toast.success('Vaši podaci su uspješno spremljeni.')}
              className="px-4 py-2 border border-[var(--color-border-primary)] rounded-[var(--radius-button)] hover:bg-[var(--color-bg-tertiary)] transition-colors"
            >
              Spremi promjene
            </button>
            <button
              onClick={() => toast.error('Molimo ispunite sva obavezna polja.')}
              className="px-4 py-2 border border-[var(--color-border-primary)] rounded-[var(--radius-button)] hover:bg-[var(--color-bg-tertiary)] transition-colors"
            >
              Validacija greška
            </button>
            <button
              onClick={() => toast.info('Vaš zahtjev je poslan na obradu.')}
              className="px-4 py-2 border border-[var(--color-border-primary)] rounded-[var(--radius-button)] hover:bg-[var(--color-bg-tertiary)] transition-colors"
            >
              Pošalji zahtjev
            </button>
          </div>
        </div>

        {/* Authentication */}
        <div className="mb-8">
          <h3 className="mb-4 text-lg font-medium text-[var(--color-text-primary)]">
            Autentifikacija
          </h3>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => toast.success('Uspješno ste se prijavili.', { title: 'Dobrodošli natrag!' })}
              className="px-4 py-2 border border-[var(--color-border-primary)] rounded-[var(--radius-button)] hover:bg-[var(--color-bg-tertiary)] transition-colors"
            >
              Prijava uspješna
            </button>
            <button
              onClick={() => toast.error('Pogrešna email adresa ili lozinka.')}
              className="px-4 py-2 border border-[var(--color-border-primary)] rounded-[var(--radius-button)] hover:bg-[var(--color-bg-tertiary)] transition-colors"
            >
              Prijava neuspješna
            </button>
            <button
              onClick={() => toast.info('Uspješno ste se odjavili.')}
              className="px-4 py-2 border border-[var(--color-border-primary)] rounded-[var(--radius-button)] hover:bg-[var(--color-bg-tertiary)] transition-colors"
            >
              Odjava
            </button>
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
{`// 1. Wrap your app with ToastProvider
import { ToastProvider } from '@/src/components/ui/Toast'

function App() {
  return (
    <ToastProvider position="top-right">
      <YourApp />
    </ToastProvider>
  )
}

// 2. Use the hook in any component
import { useToast } from '@/src/components/ui/Toast'

function MyComponent() {
  const toast = useToast()

  const handleClick = () => {
    // Shorthand methods
    toast.success('Uspješno!')
    toast.error('Greška!')
    toast.warning('Upozorenje!')
    toast.info('Info!')

    // With options
    toast.success('Poruka', {
      title: 'Naslov',
      duration: 5000,
      dismissible: true
    })

    // Generic addToast
    toast.addToast('Poruka', {
      variant: 'neutral',
      title: 'Naslov'
    })
  }
}`}
          </code>
        </pre>
      </section>

      {/* CSS Variables */}
      <section className="mt-8 rounded-[var(--radius-card)] bg-[var(--color-bg-secondary)] p-6">
        <h2 className="mb-4 text-xl font-semibold text-[var(--color-text-primary)]">
          CSS Varijable
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <h3 className="mb-2 font-medium text-[var(--color-text-primary)]">Toast stilovi</h3>
            <ul className="space-y-1 text-sm text-[var(--color-text-secondary)]">
              <li><code>--toast-radius: var(--radius-lg)</code></li>
              <li><code>--toast-padding: var(--spacing-4)</code></li>
              <li><code>--toast-shadow: var(--shadow-lg)</code></li>
              <li><code>--toast-max-width: 400px</code></li>
              <li><code>--toast-min-width: 300px</code></li>
              <li><code>--toast-offset: var(--spacing-4)</code></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-2 font-medium text-[var(--color-text-primary)]">Provider Props</h3>
            <ul className="space-y-1 text-sm text-[var(--color-text-secondary)]">
              <li><code>position: top-right | top-left | top-center | bottom-*</code></li>
              <li><code>defaultDuration: 5000 (ms)</code></li>
              <li><code>maxToasts: 5</code></li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default function ToastPage() {
  return (
    <ToastProvider position="top-right">
      <ToastDemo />
    </ToastProvider>
  )
}

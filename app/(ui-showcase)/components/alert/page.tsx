'use client'

import { useState } from 'react'
import { Alert } from '@/src/components/ui/Alert'

export default function AlertPage() {
  const [dismissedAlerts, setDismissedAlerts] = useState<Record<string, boolean>>({})

  const dismissAlert = (id: string) => {
    setDismissedAlerts((prev) => ({ ...prev, [id]: true }))
  }

  const resetAlerts = () => {
    setDismissedAlerts({})
  }

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-12">
        <h1 className="mb-2 text-3xl font-bold text-[var(--color-text-primary)]">
          Alert
        </h1>
        <p className="text-[var(--color-text-secondary)]">
          Alert komponenta za prikazivanje važnih poruka korisnicima. Podržava više varijanti, naslove i mogućnost zatvaranja.
        </p>
      </div>

      {/* Variants */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Varijante
        </h2>
        <div className="space-y-4 max-w-2xl">
          <Alert variant="success">
            Vaša narudžba je uspješno kreirana i poslana na obradu.
          </Alert>
          <Alert variant="error">
            Došlo je do greške prilikom obrade. Molimo pokušajte ponovo.
          </Alert>
          <Alert variant="warning">
            Vaša sesija uskoro ističe. Molimo spremite promjene.
          </Alert>
          <Alert variant="info">
            Nova verzija aplikacije je dostupna. Osvježite stranicu za najnovije funkcionalnosti.
          </Alert>
        </div>
      </section>

      {/* With Titles */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Sa naslovima
        </h2>
        <div className="space-y-4 max-w-2xl">
          <Alert variant="success" title="Narudžba kreirana">
            Vaša narudžba #12345 je uspješno kreirana. Očekujte dostavu u roku od 3-5 radnih dana.
          </Alert>
          <Alert variant="error" title="Greška pri plaćanju">
            Transakcija nije uspjela. Molimo provjerite podatke kartice i pokušajte ponovo.
          </Alert>
          <Alert variant="warning" title="Ograničena količina">
            Samo 3 artikla preostala na stanju. Naručite sada da osigurate dostupnost.
          </Alert>
          <Alert variant="info" title="Besplatna dostava">
            Dodajte još 50 KM u košaricu za besplatnu dostavu na vašu adresu.
          </Alert>
        </div>
      </section>

      {/* Dismissible */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Sa mogućnošću zatvaranja
        </h2>
        <div className="space-y-4 max-w-2xl">
          {!dismissedAlerts['success'] && (
            <Alert
              variant="success"
              title="Promocija aktivirana"
              dismissible
              onDismiss={() => dismissAlert('success')}
            >
              Koristite kod POPUST20 za 20% popusta na sljedeću narudžbu.
            </Alert>
          )}
          {!dismissedAlerts['error'] && (
            <Alert
              variant="error"
              dismissible
              onDismiss={() => dismissAlert('error')}
            >
              Neki artikli u vašoj košarici više nisu dostupni.
            </Alert>
          )}
          {!dismissedAlerts['warning'] && (
            <Alert
              variant="warning"
              title="Ažuriranje profila"
              dismissible
              onDismiss={() => dismissAlert('warning')}
            >
              Molimo ažurirajte adresu dostave za brže procesiranje narudžbi.
            </Alert>
          )}
          {!dismissedAlerts['info'] && (
            <Alert
              variant="info"
              dismissible
              onDismiss={() => dismissAlert('info')}
            >
              Prijavite se na newsletter za ekskluzivne ponude.
            </Alert>
          )}
          {Object.keys(dismissedAlerts).length > 0 && (
            <button
              onClick={resetAlerts}
              className="text-sm text-[var(--color-text-link)] hover:underline"
            >
              Resetiraj zatvorene alerte
            </button>
          )}
        </div>
      </section>

      {/* Without Icons */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Bez ikona
        </h2>
        <div className="space-y-4 max-w-2xl">
          <Alert variant="success" showIcon={false}>
            Uspješno ste se prijavili na sustav.
          </Alert>
          <Alert variant="info" showIcon={false} title="Napomena">
            Ovaj prozor se automatski zatvara za 5 sekundi.
          </Alert>
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
          <div className="space-y-4 max-w-2xl">
            <Alert variant="success" title="Košarica ažurirana">
              Artikal je dodan u vašu košaricu. <a href="#" className="underline font-medium">Pogledaj košaricu</a>
            </Alert>
            <Alert variant="warning">
              Cijena jednog ili više artikala u vašoj košarici se promijenila.
            </Alert>
            <Alert variant="error" title="Artikal nedostupan">
              Artikal "Laptop XYZ" više nije dostupan. Uklonjen je iz vaše košarice.
            </Alert>
          </div>
        </div>

        {/* Forms */}
        <div className="mb-8">
          <h3 className="mb-4 text-lg font-medium text-[var(--color-text-primary)]">
            Forme
          </h3>
          <div className="space-y-4 max-w-2xl">
            <Alert variant="error" title="Greška validacije">
              Molimo ispravite sljedeće greške:
              <ul className="list-disc list-inside mt-2">
                <li>Email adresa nije validna</li>
                <li>Lozinka mora imati najmanje 8 znakova</li>
              </ul>
            </Alert>
            <Alert variant="success">
              Vaši podaci su uspješno spremljeni.
            </Alert>
          </div>
        </div>

        {/* System */}
        <div className="mb-8">
          <h3 className="mb-4 text-lg font-medium text-[var(--color-text-primary)]">
            Sistemske poruke
          </h3>
          <div className="space-y-4 max-w-2xl">
            <Alert variant="info" title="Planirano održavanje">
              Sistem će biti nedostupan 15.02.2025. od 02:00 do 04:00 zbog planiranog održavanja.
            </Alert>
            <Alert variant="warning" title="Istječe pretplata">
              Vaša pretplata ističe za 7 dana. <a href="#" className="underline font-medium">Obnovite sada</a>
            </Alert>
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
{`import { Alert } from '@/src/components/Alert'

// Basic usage
<Alert variant="success">Poruka uspjeha</Alert>

// With title
<Alert variant="error" title="Greška">
  Opis greške
</Alert>

// Dismissible
<Alert
  variant="warning"
  dismissible
  onDismiss={() => setShow(false)}
>
  Upozorenje koje se može zatvoriti
</Alert>

// Without icon
<Alert variant="info" showIcon={false}>
  Informacija bez ikone
</Alert>`}
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
            <h3 className="mb-2 font-medium text-[var(--color-text-primary)]">Alert stilovi</h3>
            <ul className="space-y-1 text-sm text-[var(--color-text-secondary)]">
              <li><code>--alert-radius: var(--radius-lg)</code></li>
              <li><code>--alert-padding: var(--spacing-4)</code></li>
              <li><code>--alert-icon-size: 20px</code></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-2 font-medium text-[var(--color-text-primary)]">Varijante boja</h3>
            <ul className="space-y-1 text-sm text-[var(--color-text-secondary)]">
              <li><code>--alert-success-bg / border / text / icon</code></li>
              <li><code>--alert-error-bg / border / text / icon</code></li>
              <li><code>--alert-warning-bg / border / text / icon</code></li>
              <li><code>--alert-info-bg / border / text / icon</code></li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

'use client'

import { useState } from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/src/components/ui'

export default function AccordionShowcasePage() {
  const [singleValue, setSingleValue] = useState<string>('')

  return (
    <div className="p-8">
      <div className="mb-12">
        <h1 className="mb-2 text-3xl font-bold text-[var(--color-text-primary)]">
          Accordion
        </h1>
        <p className="text-[var(--color-text-secondary)]">
          Accordion komponenta za prikaz sadrzaja koji se moze prosiriti/skupiti sa podrskom za
          pojedinacno ili visestruko otvaranje.
        </p>
      </div>

      {/* Single Type */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Single (jedan otvoren)
        </h2>
        <p className="mb-4 text-sm text-[var(--color-text-secondary)]">
          Samo jedna stavka moze biti otvorena istovremeno.
        </p>

        <div className="max-w-xl rounded-[var(--radius-card)] border border-[var(--color-border-primary)] bg-[var(--color-bg-elevated)]">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Sta je B2B e-commerce?</AccordionTrigger>
              <AccordionContent>
                B2B (Business-to-Business) e-commerce je online prodaja proizvoda ili usluga izmedu
                kompanija. Za razliku od B2C modela gdje se prodaje krajnjim potrosacima, B2B
                ukljucuje transakcije izmedu proizvodaca, veletrgovaca i maloprodavaca.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Koje su prednosti naseg sistema?</AccordionTrigger>
              <AccordionContent>
                Nas sistem nudi brzu implementaciju, fleksibilno podesavanje cijena za razlicite
                klijente, integraciju sa ERP sistemima, napredne opcije placanja i detaljnu
                analitiku prodaje.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Kako poceti sa koristenjem?</AccordionTrigger>
              <AccordionContent>
                Kontaktirajte nas tim za prodaju putem kontakt forme ili telefona. Nas tim ce vam
                pomoci sa pocetnim podesavanjem, migracijom podataka i obukom vaseih zaposlenika.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Multiple Type */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Multiple (vise otvorenih)
        </h2>
        <p className="mb-4 text-sm text-[var(--color-text-secondary)]">
          Vise stavki moze biti otvoreno istovremeno.
        </p>

        <div className="max-w-xl rounded-[var(--radius-card)] border border-[var(--color-border-primary)] bg-[var(--color-bg-elevated)]">
          <Accordion type="multiple" defaultValue={['spec-1']}>
            <AccordionItem value="spec-1">
              <AccordionTrigger>Tehnicke specifikacije</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc space-y-1 pl-4">
                  <li>Next.js 16 sa App Router-om</li>
                  <li>TypeScript strict mode</li>
                  <li>Tailwind CSS 4</li>
                  <li>Server Components po defaultu</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="spec-2">
              <AccordionTrigger>Podrska za baze podataka</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc space-y-1 pl-4">
                  <li>PostgreSQL (preporuceno)</li>
                  <li>MySQL / MariaDB</li>
                  <li>MongoDB</li>
                  <li>SQLite (za development)</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="spec-3">
              <AccordionTrigger>Integracije</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc space-y-1 pl-4">
                  <li>Stripe / PayPal za placanja</li>
                  <li>SAP / Microsoft Dynamics ERP</li>
                  <li>Sendgrid / Mailchimp za email</li>
                  <li>Google Analytics / Mixpanel</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* With Icons */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Sa ikonama
        </h2>

        <div className="max-w-xl rounded-[var(--radius-card)] border border-[var(--color-border-primary)] bg-[var(--color-bg-elevated)]">
          <Accordion type="single" collapsible>
            <AccordionItem value="shipping">
              <AccordionTrigger
                icon={
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"
                    />
                  </svg>
                }
              >
                Dostava
              </AccordionTrigger>
              <AccordionContent>
                Nudimo besplatnu dostavu za narudzbe iznad 500 KM. Standardna dostava traje 2-5
                radnih dana, a ekspresna dostava 1-2 radna dana.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="payment">
              <AccordionTrigger
                icon={
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  </svg>
                }
              >
                Nacini placanja
              </AccordionTrigger>
              <AccordionContent>
                Prihvatamo placanje karticama (Visa, Mastercard), bankovnim transferom i putem
                PayPal-a. Za B2B klijente nudimo i placanje na odgodu do 30 dana.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="returns">
              <AccordionTrigger
                icon={
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z"
                    />
                  </svg>
                }
              >
                Povrat robe
              </AccordionTrigger>
              <AccordionContent>
                Robu mozete vratiti u roku od 14 dana od prijema. Roba mora biti nekoristena i u
                originalnom pakovanju. Troskove povrata snosi kupac osim u slucaju greske.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Disabled Items */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Onemogucene stavke
        </h2>

        <div className="max-w-xl rounded-[var(--radius-card)] border border-[var(--color-border-primary)] bg-[var(--color-bg-elevated)]">
          <Accordion type="single" collapsible>
            <AccordionItem value="active">
              <AccordionTrigger>Aktivna stavka</AccordionTrigger>
              <AccordionContent>
                Ova stavka je aktivna i moze se otvoriti/zatvoriti.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="disabled" disabled>
              <AccordionTrigger disabled>Onemogucena stavka</AccordionTrigger>
              <AccordionContent>Ovaj sadrzaj nije dostupan.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="another">
              <AccordionTrigger>Druga aktivna stavka</AccordionTrigger>
              <AccordionContent>
                I ova stavka je aktivna i normalno funkcionise.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Controlled State */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Kontrolirano stanje
        </h2>

        <div className="mb-4 flex flex-wrap gap-2">
          <button
            onClick={() => setSingleValue('ctrl-1')}
            className={`rounded-[var(--radius-button)] px-3 py-1.5 text-sm transition-colors ${
              singleValue === 'ctrl-1'
                ? 'bg-[var(--color-primary-500)] text-white'
                : 'bg-[var(--color-bg-tertiary)] text-[var(--color-text-secondary)] hover:bg-[var(--color-border-primary)]'
            }`}
          >
            Otvori 1
          </button>
          <button
            onClick={() => setSingleValue('ctrl-2')}
            className={`rounded-[var(--radius-button)] px-3 py-1.5 text-sm transition-colors ${
              singleValue === 'ctrl-2'
                ? 'bg-[var(--color-primary-500)] text-white'
                : 'bg-[var(--color-bg-tertiary)] text-[var(--color-text-secondary)] hover:bg-[var(--color-border-primary)]'
            }`}
          >
            Otvori 2
          </button>
          <button
            onClick={() => setSingleValue('ctrl-3')}
            className={`rounded-[var(--radius-button)] px-3 py-1.5 text-sm transition-colors ${
              singleValue === 'ctrl-3'
                ? 'bg-[var(--color-primary-500)] text-white'
                : 'bg-[var(--color-bg-tertiary)] text-[var(--color-text-secondary)] hover:bg-[var(--color-border-primary)]'
            }`}
          >
            Otvori 3
          </button>
          <button
            onClick={() => setSingleValue('')}
            className="rounded-[var(--radius-button)] bg-[var(--color-bg-tertiary)] px-3 py-1.5 text-sm text-[var(--color-text-secondary)] hover:bg-[var(--color-border-primary)]"
          >
            Zatvori sve
          </button>
        </div>
        <p className="mb-4 text-sm text-[var(--color-text-tertiary)]">
          Trenutno otvoreno: {singleValue || 'nista'}
        </p>

        <div className="max-w-xl rounded-[var(--radius-card)] border border-[var(--color-border-primary)] bg-[var(--color-bg-elevated)]">
          <Accordion type="single" value={singleValue} onValueChange={setSingleValue} collapsible>
            <AccordionItem value="ctrl-1">
              <AccordionTrigger>Stavka 1</AccordionTrigger>
              <AccordionContent>Sadrzaj stavke 1.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="ctrl-2">
              <AccordionTrigger>Stavka 2</AccordionTrigger>
              <AccordionContent>Sadrzaj stavke 2.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="ctrl-3">
              <AccordionTrigger>Stavka 3</AccordionTrigger>
              <AccordionContent>Sadrzaj stavke 3.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Not Collapsible */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Bez zatvaranja (collapsible=false)
        </h2>
        <p className="mb-4 text-sm text-[var(--color-text-secondary)]">
          Uvijek mora biti otvorena barem jedna stavka.
        </p>

        <div className="max-w-xl rounded-[var(--radius-card)] border border-[var(--color-border-primary)] bg-[var(--color-bg-elevated)]">
          <Accordion type="single" defaultValue="always-1">
            <AccordionItem value="always-1">
              <AccordionTrigger>Prva stavka</AccordionTrigger>
              <AccordionContent>
                Ne moze se zatvoriti osim ako se otvori druga stavka.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="always-2">
              <AccordionTrigger>Druga stavka</AccordionTrigger>
              <AccordionContent>
                Kad otvoris ovu, prva se automatski zatvara.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Usage Example */}
      <section className="rounded-[var(--radius-card)] bg-[var(--color-bg-secondary)] p-6">
        <h2 className="mb-4 text-xl font-semibold text-[var(--color-text-primary)]">
          Primjer koristenja
        </h2>
        <pre className="overflow-x-auto rounded-md bg-[var(--color-bg-tertiary)] p-4">
          <code className="text-sm text-[var(--color-text-primary)]">
{`import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/src/components/ui'

// Osnovni accordion (jedan otvoren, collapsible)
<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Naslov 1</AccordionTrigger>
    <AccordionContent>Sadrzaj 1</AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Naslov 2</AccordionTrigger>
    <AccordionContent>Sadrzaj 2</AccordionContent>
  </AccordionItem>
</Accordion>

// Vise otvorenih istovremeno
<Accordion type="multiple" defaultValue={['item-1', 'item-2']}>
  <AccordionItem value="item-1">
    <AccordionTrigger>Naslov 1</AccordionTrigger>
    <AccordionContent>Sadrzaj 1</AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Naslov 2</AccordionTrigger>
    <AccordionContent>Sadrzaj 2</AccordionContent>
  </AccordionItem>
</Accordion>

// Kontrolirano stanje
const [value, setValue] = useState<string>('')

<Accordion type="single" value={value} onValueChange={setValue} collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Naslov 1</AccordionTrigger>
    <AccordionContent>Sadrzaj 1</AccordionContent>
  </AccordionItem>
</Accordion>

// Sa ikonama
<AccordionItem value="item">
  <AccordionTrigger icon={<MyIcon />}>Naslov</AccordionTrigger>
  <AccordionContent>Sadrzaj</AccordionContent>
</AccordionItem>`}
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
            <h3 className="mb-2 font-medium text-[var(--color-text-primary)]">Boje</h3>
            <ul className="space-y-1 text-sm text-[var(--color-text-secondary)]">
              <li><code>--color-text-primary</code> - Tekst triggera</li>
              <li><code>--color-text-secondary</code> - Tekst sadrzaja</li>
              <li><code>--color-text-tertiary</code> - Ikona strelice</li>
              <li><code>--color-primary-500/600</code> - Hover/focus stanja</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-2 font-medium text-[var(--color-text-primary)]">Spacing & Borders</h3>
            <ul className="space-y-1 text-sm text-[var(--color-text-secondary)]">
              <li><code>--spacing-3/4</code> - Padding elemenata</li>
              <li><code>--color-border-primary</code> - Divider linija</li>
              <li><code>--radius-card</code> - Zaobljenost kontejnera</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

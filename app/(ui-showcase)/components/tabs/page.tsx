'use client'

import { useState } from 'react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/src/components/ui'

export default function TabsShowcasePage() {
  const [controlledValue, setControlledValue] = useState('tab1')

  return (
    <div className="p-8">
      <div className="mb-12">
        <h1 className="mb-2 text-3xl font-bold text-[var(--color-text-primary)]">
          Tabs
        </h1>
        <p className="text-[var(--color-text-secondary)]">
          Tab komponenta za organizaciju sadrzaja u sekcije sa tastaturnom navigacijom i ARIA podrskom.
        </p>
      </div>

      {/* Basic Tabs */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Osnovni Tabs
        </h2>

        <div className="rounded-[var(--radius-card)] border border-[var(--color-border-primary)] p-6">
          <Tabs defaultValue="pregled">
            <TabsList>
              <TabsTrigger value="pregled">Pregled</TabsTrigger>
              <TabsTrigger value="specifikacije">Specifikacije</TabsTrigger>
              <TabsTrigger value="recenzije">Recenzije</TabsTrigger>
            </TabsList>
            <TabsContent value="pregled">
              <div className="rounded-[var(--radius-md)] bg-[var(--color-bg-secondary)] p-4">
                <h3 className="mb-2 font-medium text-[var(--color-text-primary)]">
                  Pregled proizvoda
                </h3>
                <p className="text-[var(--color-text-secondary)]">
                  Ovdje se prikazuje opsti pregled proizvoda sa svim bitnim informacijama
                  koje kupci trebaju znati prije kupovine.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="specifikacije">
              <div className="rounded-[var(--radius-md)] bg-[var(--color-bg-secondary)] p-4">
                <h3 className="mb-2 font-medium text-[var(--color-text-primary)]">
                  Tehnicke specifikacije
                </h3>
                <ul className="space-y-1 text-[var(--color-text-secondary)]">
                  <li>Dimenzije: 100 x 50 x 25 mm</li>
                  <li>Tezina: 250g</li>
                  <li>Materijal: Aluminij</li>
                  <li>Boja: Srebrna</li>
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="recenzije">
              <div className="rounded-[var(--radius-md)] bg-[var(--color-bg-secondary)] p-4">
                <h3 className="mb-2 font-medium text-[var(--color-text-primary)]">
                  Korisnicke recenzije
                </h3>
                <p className="text-[var(--color-text-secondary)]">
                  Prosjecna ocjena: 4.5/5 (128 recenzija)
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* With Icons */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Sa ikonama
        </h2>

        <div className="rounded-[var(--radius-card)] border border-[var(--color-border-primary)] p-6">
          <Tabs defaultValue="narudzbe">
            <TabsList>
              <TabsTrigger
                value="narudzbe"
                icon={
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                }
              >
                Narudzbe
              </TabsTrigger>
              <TabsTrigger
                value="adrese"
                icon={
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                }
              >
                Adrese
              </TabsTrigger>
              <TabsTrigger
                value="postavke"
                icon={
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                }
              >
                Postavke
              </TabsTrigger>
            </TabsList>
            <TabsContent value="narudzbe">
              <div className="rounded-[var(--radius-md)] bg-[var(--color-bg-secondary)] p-4">
                <p className="text-[var(--color-text-secondary)]">
                  Lista vasih narudzbi ce se prikazati ovdje.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="adrese">
              <div className="rounded-[var(--radius-md)] bg-[var(--color-bg-secondary)] p-4">
                <p className="text-[var(--color-text-secondary)]">
                  Upravljajte vasim adresama za dostavu.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="postavke">
              <div className="rounded-[var(--radius-md)] bg-[var(--color-bg-secondary)] p-4">
                <p className="text-[var(--color-text-secondary)]">
                  Postavke vaseg korisnickog racuna.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Vertical Tabs */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Vertikalni Tabs
        </h2>

        <div className="rounded-[var(--radius-card)] border border-[var(--color-border-primary)] p-6">
          <Tabs defaultValue="profil" orientation="vertical">
            <TabsList className="w-48">
              <TabsTrigger value="profil">Profil</TabsTrigger>
              <TabsTrigger value="sigurnost">Sigurnost</TabsTrigger>
              <TabsTrigger value="obavijesti">Obavijesti</TabsTrigger>
              <TabsTrigger value="integracije">Integracije</TabsTrigger>
            </TabsList>
            <TabsContent value="profil" className="pl-[var(--spacing-6)]">
              <div className="rounded-[var(--radius-md)] bg-[var(--color-bg-secondary)] p-4">
                <h3 className="mb-2 font-medium text-[var(--color-text-primary)]">
                  Profil postavke
                </h3>
                <p className="text-[var(--color-text-secondary)]">
                  Uredite vase osobne podatke, sliku profila i javne informacije.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="sigurnost" className="pl-[var(--spacing-6)]">
              <div className="rounded-[var(--radius-md)] bg-[var(--color-bg-secondary)] p-4">
                <h3 className="mb-2 font-medium text-[var(--color-text-primary)]">
                  Sigurnosne postavke
                </h3>
                <p className="text-[var(--color-text-secondary)]">
                  Upravljajte lozinkom, dvofaktorskom autentifikacijom i sesijama.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="obavijesti" className="pl-[var(--spacing-6)]">
              <div className="rounded-[var(--radius-md)] bg-[var(--color-bg-secondary)] p-4">
                <h3 className="mb-2 font-medium text-[var(--color-text-primary)]">
                  Postavke obavijesti
                </h3>
                <p className="text-[var(--color-text-secondary)]">
                  Konfigurisite email i push obavijesti za razlicite aktivnosti.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="integracije" className="pl-[var(--spacing-6)]">
              <div className="rounded-[var(--radius-md)] bg-[var(--color-bg-secondary)] p-4">
                <h3 className="mb-2 font-medium text-[var(--color-text-primary)]">
                  Integracije
                </h3>
                <p className="text-[var(--color-text-secondary)]">
                  Povezite vas racun sa vanjskim servisima i aplikacijama.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Disabled Tabs */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Onemoguceni tabovi
        </h2>

        <div className="rounded-[var(--radius-card)] border border-[var(--color-border-primary)] p-6">
          <Tabs defaultValue="dostupno">
            <TabsList>
              <TabsTrigger value="dostupno">Dostupno</TabsTrigger>
              <TabsTrigger value="uskoro" disabled>
                Uskoro (onemoguceno)
              </TabsTrigger>
              <TabsTrigger value="arhiva">Arhiva</TabsTrigger>
            </TabsList>
            <TabsContent value="dostupno">
              <div className="rounded-[var(--radius-md)] bg-[var(--color-bg-secondary)] p-4">
                <p className="text-[var(--color-text-secondary)]">
                  Sadrzaj za dostupne stavke.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="uskoro">
              <div className="rounded-[var(--radius-md)] bg-[var(--color-bg-secondary)] p-4">
                <p className="text-[var(--color-text-secondary)]">
                  Ovaj tab je onemogucen - korisnici ne mogu pristupiti ovom sadrzaju.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="arhiva">
              <div className="rounded-[var(--radius-md)] bg-[var(--color-bg-secondary)] p-4">
                <p className="text-[var(--color-text-secondary)]">
                  Arhivirane stavke se prikazuju ovdje.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Controlled Tabs */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Kontrolirano stanje
        </h2>

        <div className="rounded-[var(--radius-card)] border border-[var(--color-border-primary)] p-6">
          <div className="mb-4 flex items-center gap-4">
            <span className="text-sm text-[var(--color-text-secondary)]">
              Aktivni tab: <strong className="text-[var(--color-text-primary)]">{controlledValue}</strong>
            </span>
            <div className="flex gap-2">
              <button
                onClick={() => setControlledValue('tab1')}
                className="rounded-[var(--radius-button)] bg-[var(--color-bg-tertiary)] px-3 py-1.5 text-sm text-[var(--color-text-secondary)] hover:bg-[var(--color-border-primary)]"
              >
                Tab 1
              </button>
              <button
                onClick={() => setControlledValue('tab2')}
                className="rounded-[var(--radius-button)] bg-[var(--color-bg-tertiary)] px-3 py-1.5 text-sm text-[var(--color-text-secondary)] hover:bg-[var(--color-border-primary)]"
              >
                Tab 2
              </button>
              <button
                onClick={() => setControlledValue('tab3')}
                className="rounded-[var(--radius-button)] bg-[var(--color-bg-tertiary)] px-3 py-1.5 text-sm text-[var(--color-text-secondary)] hover:bg-[var(--color-border-primary)]"
              >
                Tab 3
              </button>
            </div>
          </div>

          <Tabs value={controlledValue} onValueChange={setControlledValue}>
            <TabsList>
              <TabsTrigger value="tab1">Tab 1</TabsTrigger>
              <TabsTrigger value="tab2">Tab 2</TabsTrigger>
              <TabsTrigger value="tab3">Tab 3</TabsTrigger>
            </TabsList>
            <TabsContent value="tab1">
              <div className="rounded-[var(--radius-md)] bg-[var(--color-bg-secondary)] p-4">
                <p className="text-[var(--color-text-secondary)]">
                  Sadrzaj prvog taba. Stanje se kontrolise izvana.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="tab2">
              <div className="rounded-[var(--radius-md)] bg-[var(--color-bg-secondary)] p-4">
                <p className="text-[var(--color-text-secondary)]">
                  Sadrzaj drugog taba. Stanje se kontrolise izvana.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="tab3">
              <div className="rounded-[var(--radius-md)] bg-[var(--color-bg-secondary)] p-4">
                <p className="text-[var(--color-text-secondary)]">
                  Sadrzaj treceg taba. Stanje se kontrolise izvana.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Usage Example */}
      <section className="rounded-[var(--radius-card)] bg-[var(--color-bg-secondary)] p-6">
        <h2 className="mb-4 text-xl font-semibold text-[var(--color-text-primary)]">
          Primjer koristenja
        </h2>
        <pre className="overflow-x-auto rounded-md bg-[var(--color-bg-tertiary)] p-4">
          <code className="text-sm text-[var(--color-text-primary)]">
{`import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/src/components/ui'

// Osnovni tabs (nekontrolisan)
<Tabs defaultValue="pregled">
  <TabsList>
    <TabsTrigger value="pregled">Pregled</TabsTrigger>
    <TabsTrigger value="specifikacije">Specifikacije</TabsTrigger>
    <TabsTrigger value="recenzije">Recenzije</TabsTrigger>
  </TabsList>
  <TabsContent value="pregled">
    Sadrzaj pregleda...
  </TabsContent>
  <TabsContent value="specifikacije">
    Sadrzaj specifikacija...
  </TabsContent>
  <TabsContent value="recenzije">
    Sadrzaj recenzija...
  </TabsContent>
</Tabs>

// Sa ikonama
<Tabs defaultValue="narudzbe">
  <TabsList>
    <TabsTrigger value="narudzbe" icon={<OrderIcon />}>
      Narudzbe
    </TabsTrigger>
    <TabsTrigger value="adrese" icon={<AddressIcon />}>
      Adrese
    </TabsTrigger>
  </TabsList>
  ...
</Tabs>

// Vertikalni tabs
<Tabs defaultValue="profil" orientation="vertical">
  <TabsList className="w-48">
    <TabsTrigger value="profil">Profil</TabsTrigger>
    <TabsTrigger value="sigurnost">Sigurnost</TabsTrigger>
  </TabsList>
  ...
</Tabs>

// Kontrolisan tabs
const [value, setValue] = useState('tab1')

<Tabs value={value} onValueChange={setValue}>
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  ...
</Tabs>`}
          </code>
        </pre>
      </section>

      {/* Keyboard Navigation */}
      <section className="mt-8 rounded-[var(--radius-card)] bg-[var(--color-bg-secondary)] p-6">
        <h2 className="mb-4 text-xl font-semibold text-[var(--color-text-primary)]">
          Tastaturna navigacija
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <h3 className="mb-2 font-medium text-[var(--color-text-primary)]">Horizontalni</h3>
            <ul className="space-y-1 text-sm text-[var(--color-text-secondary)]">
              <li><code>Arrow Left/Right</code> - Navigacija izmedju tabova</li>
              <li><code>Home</code> - Prvi tab</li>
              <li><code>End</code> - Zadnji tab</li>
              <li><code>Enter/Space</code> - Aktiviraj tab</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-2 font-medium text-[var(--color-text-primary)]">Vertikalni</h3>
            <ul className="space-y-1 text-sm text-[var(--color-text-secondary)]">
              <li><code>Arrow Up/Down</code> - Navigacija izmedju tabova</li>
              <li><code>Home</code> - Prvi tab</li>
              <li><code>End</code> - Zadnji tab</li>
              <li><code>Enter/Space</code> - Aktiviraj tab</li>
            </ul>
          </div>
        </div>
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
              <li><code>--color-primary-500</code> - Aktivni tab indikator</li>
              <li><code>--color-text-primary</code> - Aktivni tekst</li>
              <li><code>--color-text-secondary</code> - Neaktivni tekst</li>
              <li><code>--color-border-primary</code> - Razdjelnici</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-2 font-medium text-[var(--color-text-primary)]">Spacing & Radius</h3>
            <ul className="space-y-1 text-sm text-[var(--color-text-secondary)]">
              <li><code>--spacing-3</code>, <code>--spacing-4</code> - Padding</li>
              <li><code>--radius-md</code> - Zaobljenost</li>
              <li><code>--transition-fast</code> - Animacije</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

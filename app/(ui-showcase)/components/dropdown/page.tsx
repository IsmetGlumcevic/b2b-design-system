'use client'

import { useState } from 'react'
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  DropdownDivider,
  DropdownLabel,
} from '@/src/components/ui'

export default function DropdownShowcasePage() {
  const [selectedAction, setSelectedAction] = useState<string>('')

  return (
    <div className="p-8">
      <div className="mb-12">
        <h1 className="mb-2 text-3xl font-bold text-[var(--color-text-primary)]">
          Dropdown
        </h1>
        <p className="text-[var(--color-text-secondary)]">
          Dropdown meni komponenta sa podrskom za ikone, tastaturnu navigaciju i razlicite varijante.
        </p>
      </div>

      {/* Basic Dropdown */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Osnovni Dropdown
        </h2>

        <div className="flex flex-wrap gap-8">
          <div>
            <p className="mb-3 text-sm text-[var(--color-text-secondary)]">Default</p>
            <Dropdown>
              <DropdownTrigger>Opcije</DropdownTrigger>
              <DropdownMenu>
                <DropdownItem onClick={() => setSelectedAction('Pregled')}>
                  Pregled
                </DropdownItem>
                <DropdownItem onClick={() => setSelectedAction('Uredi')}>
                  Uredi
                </DropdownItem>
                <DropdownItem onClick={() => setSelectedAction('Kopiraj')}>
                  Kopiraj
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            {selectedAction && (
              <p className="mt-2 text-xs text-[var(--color-text-tertiary)]">
                Odabrano: {selectedAction}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Alignment */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Poravnanje
        </h2>

        <div className="flex flex-wrap gap-8">
          <div>
            <p className="mb-3 text-sm text-[var(--color-text-secondary)]">Start (default)</p>
            <Dropdown>
              <DropdownTrigger>Lijevo</DropdownTrigger>
              <DropdownMenu align="start">
                <DropdownItem>Opcija 1</DropdownItem>
                <DropdownItem>Opcija 2</DropdownItem>
                <DropdownItem>Opcija 3</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>

          <div>
            <p className="mb-3 text-sm text-[var(--color-text-secondary)]">Center</p>
            <Dropdown>
              <DropdownTrigger>Centar</DropdownTrigger>
              <DropdownMenu align="center">
                <DropdownItem>Opcija 1</DropdownItem>
                <DropdownItem>Opcija 2</DropdownItem>
                <DropdownItem>Opcija 3</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>

          <div>
            <p className="mb-3 text-sm text-[var(--color-text-secondary)]">End</p>
            <Dropdown>
              <DropdownTrigger>Desno</DropdownTrigger>
              <DropdownMenu align="end">
                <DropdownItem>Opcija 1</DropdownItem>
                <DropdownItem>Opcija 2</DropdownItem>
                <DropdownItem>Opcija 3</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
      </section>

      {/* With Icons */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Sa ikonama
        </h2>

        <Dropdown>
          <DropdownTrigger>Akcije</DropdownTrigger>
          <DropdownMenu>
            <DropdownItem
              icon={
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              }
            >
              Pregled
            </DropdownItem>
            <DropdownItem
              icon={
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              }
            >
              Uredi
            </DropdownItem>
            <DropdownItem
              icon={
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              }
            >
              Kopiraj
            </DropdownItem>
            <DropdownDivider />
            <DropdownItem
              icon={
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              }
              destructive
            >
              Obrisi
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </section>

      {/* With Shortcuts */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Sa precicama
        </h2>

        <Dropdown>
          <DropdownTrigger>Datoteka</DropdownTrigger>
          <DropdownMenu width={220}>
            <DropdownItem shortcut="⌘N">Nova datoteka</DropdownItem>
            <DropdownItem shortcut="⌘O">Otvori...</DropdownItem>
            <DropdownItem shortcut="⌘S">Spremi</DropdownItem>
            <DropdownItem shortcut="⇧⌘S">Spremi kao...</DropdownItem>
            <DropdownDivider />
            <DropdownItem shortcut="⌘P">Printaj</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </section>

      {/* With Labels and Groups */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Sa labelama i grupama
        </h2>

        <Dropdown>
          <DropdownTrigger>Korisnicki meni</DropdownTrigger>
          <DropdownMenu width={200}>
            <DropdownLabel>Moj racun</DropdownLabel>
            <DropdownItem>Profil</DropdownItem>
            <DropdownItem>Postavke</DropdownItem>
            <DropdownItem>Narudzbe</DropdownItem>
            <DropdownDivider />
            <DropdownLabel>Podrska</DropdownLabel>
            <DropdownItem>Pomoc</DropdownItem>
            <DropdownItem>Kontakt</DropdownItem>
            <DropdownDivider />
            <DropdownItem destructive>Odjava</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </section>

      {/* Disabled Items */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Onemogucene opcije
        </h2>

        <Dropdown>
          <DropdownTrigger>Statusi</DropdownTrigger>
          <DropdownMenu>
            <DropdownItem>Aktivno</DropdownItem>
            <DropdownItem>Na cekanju</DropdownItem>
            <DropdownItem disabled>Arhivirano (nedostupno)</DropdownItem>
            <DropdownItem disabled>Obrisano (nedostupno)</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </section>

      {/* Controlled State */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Kontrolirano stanje
        </h2>

        <ControlledDropdownExample />
      </section>

      {/* Usage Example */}
      <section className="rounded-[var(--radius-card)] bg-[var(--color-bg-secondary)] p-6">
        <h2 className="mb-4 text-xl font-semibold text-[var(--color-text-primary)]">
          Primjer koristenja
        </h2>
        <pre className="overflow-x-auto rounded-md bg-[var(--color-bg-tertiary)] p-4">
          <code className="text-sm text-[var(--color-text-primary)]">
{`import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  DropdownDivider,
  DropdownLabel,
} from '@/src/components/ui'

// Osnovni dropdown
<Dropdown>
  <DropdownTrigger>Opcije</DropdownTrigger>
  <DropdownMenu>
    <DropdownItem onClick={() => handleAction('edit')}>
      Uredi
    </DropdownItem>
    <DropdownItem onClick={() => handleAction('copy')}>
      Kopiraj
    </DropdownItem>
    <DropdownDivider />
    <DropdownItem destructive onClick={() => handleDelete()}>
      Obrisi
    </DropdownItem>
  </DropdownMenu>
</Dropdown>

// Sa ikonama i precicama
<Dropdown>
  <DropdownTrigger>Akcije</DropdownTrigger>
  <DropdownMenu align="end" width={200}>
    <DropdownLabel>Radnje</DropdownLabel>
    <DropdownItem icon={<EditIcon />} shortcut="⌘E">
      Uredi
    </DropdownItem>
    <DropdownItem icon={<CopyIcon />} shortcut="⌘C">
      Kopiraj
    </DropdownItem>
  </DropdownMenu>
</Dropdown>

// Kontrolirano stanje
const [isOpen, setIsOpen] = useState(false)

<Dropdown open={isOpen} onOpenChange={setIsOpen}>
  <DropdownTrigger>Meni</DropdownTrigger>
  <DropdownMenu>
    <DropdownItem>Opcija 1</DropdownItem>
  </DropdownMenu>
</Dropdown>`}
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
            <h3 className="mb-2 font-medium text-[var(--color-text-primary)]">Shadows & Z-Index</h3>
            <ul className="space-y-1 text-sm text-[var(--color-text-secondary)]">
              <li><code>--shadow-dropdown</code> - Sjena menija</li>
              <li><code>--z-dropdown</code> - Z-index (1000)</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-2 font-medium text-[var(--color-text-primary)]">Spacing & Radius</h3>
            <ul className="space-y-1 text-sm text-[var(--color-text-secondary)]">
              <li><code>--radius-lg</code> - Zaobljenost menija</li>
              <li><code>--radius-md</code> - Zaobljenost stavki</li>
              <li><code>--spacing-*</code> - Padding i margins</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

// Controlled example component
function ControlledDropdownExample() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex items-center gap-4">
      <Dropdown open={isOpen} onOpenChange={setIsOpen}>
        <DropdownTrigger>Kontrolirani meni</DropdownTrigger>
        <DropdownMenu>
          <DropdownItem>Opcija 1</DropdownItem>
          <DropdownItem>Opcija 2</DropdownItem>
          <DropdownItem>Opcija 3</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-[var(--radius-button)] bg-[var(--color-bg-tertiary)] px-3 py-1.5 text-sm text-[var(--color-text-secondary)] hover:bg-[var(--color-border-primary)]"
      >
        {isOpen ? 'Zatvori' : 'Otvori'} izvana
      </button>
      <span className="text-sm text-[var(--color-text-tertiary)]">
        Status: {isOpen ? 'Otvoren' : 'Zatvoren'}
      </span>
    </div>
  )
}

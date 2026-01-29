'use client'

import { useState } from 'react'
import { Tooltip } from '@/src/components/ui/Tooltip'
import { Button } from '@/src/components/ui/buttons'
import { Badge } from '@/src/components/ui/Badge'

/** Simple icons for demonstration */
function InfoIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  )
}

function HelpIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  )
}

function SettingsIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 1v6m0 6v6" />
      <path d="m21 12-6 0m-6 0-6 0" />
    </svg>
  )
}

function CopyIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  )
}

export default function TooltipPage() {
  const [controlledOpen, setControlledOpen] = useState(false)

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-12">
        <h1 className="mb-2 text-3xl font-bold text-[var(--color-text-primary)]">
          Tooltip
        </h1>
        <p className="text-[var(--color-text-secondary)]">
          Tooltip komponenta za prikazivanje kontekstualnih informacija. Koristi portal za pravilno pozicioniranje.
        </p>
      </div>

      {/* Basic Tooltip */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Osnovni tooltip
        </h2>
        <div className="flex flex-wrap items-center gap-4">
          <Tooltip content="Ovo je osnovni tooltip">
            <Button variant="outline">Hover me</Button>
          </Tooltip>

          <Tooltip content="Tooltip sa tekstom">
            <span className="inline-flex cursor-help items-center gap-1 text-[var(--color-text-secondary)]">
              Pomoć <HelpIcon />
            </span>
          </Tooltip>
        </div>
      </section>

      {/* Positions */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Pozicije
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-8 py-12">
          <div className="flex flex-col items-center gap-12">
            <Tooltip content="Tooltip na vrhu" position="top">
              <Button variant="outline">Top</Button>
            </Tooltip>

            <div className="flex items-center gap-24">
              <Tooltip content="Tooltip lijevo" position="left">
                <Button variant="outline">Left</Button>
              </Tooltip>

              <Tooltip content="Tooltip desno" position="right">
                <Button variant="outline">Right</Button>
              </Tooltip>
            </div>

            <Tooltip content="Tooltip na dnu" position="bottom">
              <Button variant="outline">Bottom</Button>
            </Tooltip>
          </div>
        </div>
      </section>

      {/* Variants */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Varijante
        </h2>
        <div className="flex flex-wrap items-center gap-4">
          <Tooltip content="Dark variant (default)" variant="dark">
            <Button variant="outline">Dark</Button>
          </Tooltip>

          <Tooltip content="Light variant sa borderom" variant="light">
            <Button variant="outline">Light</Button>
          </Tooltip>
        </div>
      </section>

      {/* Triggers */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Triggeri
        </h2>
        <div className="flex flex-wrap items-center gap-4">
          <Tooltip content="Otvara se na hover" trigger="hover">
            <Button variant="outline">Hover</Button>
          </Tooltip>

          <Tooltip content="Otvara se na focus" trigger="focus">
            <Button variant="outline">Focus (Tab to me)</Button>
          </Tooltip>

          <Tooltip content="Klikni ponovo da zatvoriš" trigger="click">
            <Button variant="outline">Click</Button>
          </Tooltip>

          <Tooltip content="Hover ili focus" trigger={['hover', 'focus']}>
            <Button variant="outline">Hover + Focus</Button>
          </Tooltip>
        </div>
      </section>

      {/* Delays */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Delay
        </h2>
        <div className="flex flex-wrap items-center gap-4">
          <Tooltip content="Bez delaya" showDelay={0} hideDelay={0}>
            <Button variant="outline">Instant</Button>
          </Tooltip>

          <Tooltip content="300ms show delay" showDelay={300}>
            <Button variant="outline">300ms Show Delay</Button>
          </Tooltip>

          <Tooltip content="500ms hide delay" hideDelay={500}>
            <Button variant="outline">500ms Hide Delay</Button>
          </Tooltip>

          <Tooltip content="Obje vrijednosti" showDelay={200} hideDelay={300}>
            <Button variant="outline">200ms / 300ms</Button>
          </Tooltip>
        </div>
      </section>

      {/* Arrow */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Strelica
        </h2>
        <div className="flex flex-wrap items-center gap-4">
          <Tooltip content="Sa strelicom (default)" showArrow={true}>
            <Button variant="outline">Sa strelicom</Button>
          </Tooltip>

          <Tooltip content="Bez strelice" showArrow={false}>
            <Button variant="outline">Bez strelice</Button>
          </Tooltip>
        </div>
      </section>

      {/* Rich Content */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Bogat sadržaj
        </h2>
        <div className="flex flex-wrap items-center gap-4">
          <Tooltip
            content={
              <div className="space-y-2">
                <p className="font-semibold">Naslov tooltipa</p>
                <p className="opacity-80">
                  Ovo je detaljniji opis koji može sadržavati više redova teksta.
                </p>
              </div>
            }
            maxWidth={300}
          >
            <Button variant="outline">Sa naslovom i opisom</Button>
          </Tooltip>

          <Tooltip
            content={
              <div className="flex items-center gap-2">
                <Badge variant="success" size="sm">Novo</Badge>
                <span>Ova funkcija je nedavno dodana</span>
              </div>
            }
            variant="light"
            maxWidth={320}
          >
            <Button variant="outline">Sa badge-om</Button>
          </Tooltip>

          <Tooltip
            content={
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <CopyIcon />
                  <span>Ctrl+C</span>
                </div>
                <p className="text-xs opacity-70">Kopiraj označeni tekst</p>
              </div>
            }
          >
            <Button variant="outline">Keyboard shortcut</Button>
          </Tooltip>
        </div>
      </section>

      {/* Controlled */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Kontrolirani tooltip
        </h2>
        <div className="flex flex-wrap items-center gap-4">
          <Tooltip
            content="Ovo je kontrolirani tooltip"
            isOpen={controlledOpen}
            onOpenChange={setControlledOpen}
          >
            <Button variant="outline">
              Kontrolirani ({controlledOpen ? 'otvoren' : 'zatvoren'})
            </Button>
          </Tooltip>

          <Button
            variant="primary"
            onClick={() => setControlledOpen(!controlledOpen)}
          >
            Toggle tooltip
          </Button>
        </div>
      </section>

      {/* Disabled */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Disabled
        </h2>
        <div className="flex flex-wrap items-center gap-4">
          <Tooltip content="Ovaj tooltip je disabled" disabled>
            <Button variant="outline">Disabled tooltip</Button>
          </Tooltip>

          <Tooltip content="Ovaj tooltip radi normalno">
            <Button variant="outline">Enabled tooltip</Button>
          </Tooltip>
        </div>
      </section>

      {/* Icon buttons example */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Primjer: Icon buttoni
        </h2>
        <p className="mb-4 text-[var(--color-text-secondary)]">
          Tooltipovi su posebno korisni za icon buttone koji nemaju labelu.
        </p>
        <div className="flex items-center gap-2 rounded-[var(--radius-lg)] border border-[var(--color-border-primary)] bg-[var(--color-bg-secondary)] p-2">
          <Tooltip content="Informacije" position="bottom">
            <button className="rounded-[var(--radius-md)] p-2 text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-bg-tertiary)] hover:text-[var(--color-text-primary)]">
              <InfoIcon />
            </button>
          </Tooltip>

          <Tooltip content="Pomoć" position="bottom">
            <button className="rounded-[var(--radius-md)] p-2 text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-bg-tertiary)] hover:text-[var(--color-text-primary)]">
              <HelpIcon />
            </button>
          </Tooltip>

          <Tooltip content="Postavke" position="bottom">
            <button className="rounded-[var(--radius-md)] p-2 text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-bg-tertiary)] hover:text-[var(--color-text-primary)]">
              <SettingsIcon />
            </button>
          </Tooltip>

          <Tooltip content="Kopiraj" position="bottom">
            <button className="rounded-[var(--radius-md)] p-2 text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-bg-tertiary)] hover:text-[var(--color-text-primary)]">
              <CopyIcon />
            </button>
          </Tooltip>
        </div>
      </section>

      {/* Usage Code */}
      <section className="rounded-[var(--radius-card)] bg-[var(--color-bg-secondary)] p-6">
        <h2 className="mb-4 text-xl font-semibold text-[var(--color-text-primary)]">
          Korištenje
        </h2>
        <pre className="overflow-x-auto rounded-md bg-[var(--color-bg-tertiary)] p-4">
          <code className="text-sm text-[var(--color-text-primary)]">
{`import { Tooltip } from '@/src/components/ui/Tooltip'

// Osnovni tooltip
<Tooltip content="Ovo je tooltip">
  <button>Hover me</button>
</Tooltip>

// Sa opcijama
<Tooltip
  content="Tooltip sadržaj"
  position="right"          // 'top' | 'bottom' | 'left' | 'right'
  trigger="hover"           // 'hover' | 'focus' | 'click' | ['hover', 'focus']
  variant="dark"            // 'dark' | 'light'
  showDelay={200}           // ms
  hideDelay={100}           // ms
  showArrow={true}          // default: true
  maxWidth={300}            // px ili string
  disabled={false}          // onemogući tooltip
>
  <button>Trigger</button>
</Tooltip>

// Kontrolirani tooltip
const [isOpen, setIsOpen] = useState(false)

<Tooltip
  content="Kontrolirani tooltip"
  isOpen={isOpen}
  onOpenChange={setIsOpen}
>
  <button>Kontrolirani</button>
</Tooltip>

// Bogat sadržaj
<Tooltip
  content={
    <div className="space-y-1">
      <p className="font-semibold">Naslov</p>
      <p>Opis tooltipa</p>
    </div>
  }
  maxWidth={320}
>
  <button>Sa bogatim sadržajem</button>
</Tooltip>`}
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
            <h3 className="mb-2 font-medium text-[var(--color-text-primary)]">Tooltip varijable</h3>
            <ul className="space-y-1 text-sm text-[var(--color-text-secondary)]">
              <li><code>--tooltip-bg: var(--color-neutral-900)</code></li>
              <li><code>--tooltip-text: var(--color-text-inverse)</code></li>
              <li><code>--tooltip-shadow: var(--shadow-md)</code></li>
              <li><code>--tooltip-radius: var(--radius-md)</code></li>
              <li><code>--tooltip-padding-x: var(--spacing-3)</code></li>
              <li><code>--tooltip-padding-y: var(--spacing-2)</code></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-2 font-medium text-[var(--color-text-primary)]">Ostale varijable</h3>
            <ul className="space-y-1 text-sm text-[var(--color-text-secondary)]">
              <li><code>--tooltip-arrow-size: 6px</code></li>
              <li><code>--tooltip-offset: var(--spacing-2)</code></li>
              <li><code>--tooltip-max-width: 280px</code></li>
              <li><code>--z-tooltip: 1070</code></li>
            </ul>
          </div>
        </div>
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
                <th className="py-2 pr-4 text-left font-semibold text-[var(--color-text-primary)]">Prop</th>
                <th className="py-2 pr-4 text-left font-semibold text-[var(--color-text-primary)]">Tip</th>
                <th className="py-2 pr-4 text-left font-semibold text-[var(--color-text-primary)]">Default</th>
                <th className="py-2 text-left font-semibold text-[var(--color-text-primary)]">Opis</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--color-border-primary)]">
              <tr>
                <td className="py-2 pr-4 font-mono text-[var(--color-primary-600)]">content</td>
                <td className="py-2 pr-4 text-[var(--color-text-secondary)]">ReactNode</td>
                <td className="py-2 pr-4 text-[var(--color-text-tertiary)]">-</td>
                <td className="py-2 text-[var(--color-text-secondary)]">Sadržaj tooltipa</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-[var(--color-primary-600)]">position</td>
                <td className="py-2 pr-4 text-[var(--color-text-secondary)]">{`'top' | 'bottom' | 'left' | 'right'`}</td>
                <td className="py-2 pr-4 text-[var(--color-text-tertiary)]">{`'top'`}</td>
                <td className="py-2 text-[var(--color-text-secondary)]">Pozicija tooltipa</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-[var(--color-primary-600)]">trigger</td>
                <td className="py-2 pr-4 text-[var(--color-text-secondary)]">{`'hover' | 'focus' | 'click' | array`}</td>
                <td className="py-2 pr-4 text-[var(--color-text-tertiary)]">{`'hover'`}</td>
                <td className="py-2 text-[var(--color-text-secondary)]">Način otvaranja tooltipa</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-[var(--color-primary-600)]">variant</td>
                <td className="py-2 pr-4 text-[var(--color-text-secondary)]">{`'dark' | 'light'`}</td>
                <td className="py-2 pr-4 text-[var(--color-text-tertiary)]">{`'dark'`}</td>
                <td className="py-2 text-[var(--color-text-secondary)]">Vizualna varijanta</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-[var(--color-primary-600)]">showDelay</td>
                <td className="py-2 pr-4 text-[var(--color-text-secondary)]">number</td>
                <td className="py-2 pr-4 text-[var(--color-text-tertiary)]">0</td>
                <td className="py-2 text-[var(--color-text-secondary)]">Delay prije prikazivanja (ms)</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-[var(--color-primary-600)]">hideDelay</td>
                <td className="py-2 pr-4 text-[var(--color-text-secondary)]">number</td>
                <td className="py-2 pr-4 text-[var(--color-text-tertiary)]">0</td>
                <td className="py-2 text-[var(--color-text-secondary)]">Delay prije skrivanja (ms)</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-[var(--color-primary-600)]">showArrow</td>
                <td className="py-2 pr-4 text-[var(--color-text-secondary)]">boolean</td>
                <td className="py-2 pr-4 text-[var(--color-text-tertiary)]">true</td>
                <td className="py-2 text-[var(--color-text-secondary)]">Prikaži strelicu</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-[var(--color-primary-600)]">disabled</td>
                <td className="py-2 pr-4 text-[var(--color-text-secondary)]">boolean</td>
                <td className="py-2 pr-4 text-[var(--color-text-tertiary)]">false</td>
                <td className="py-2 text-[var(--color-text-secondary)]">Onemogući tooltip</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-[var(--color-primary-600)]">isOpen</td>
                <td className="py-2 pr-4 text-[var(--color-text-secondary)]">boolean</td>
                <td className="py-2 pr-4 text-[var(--color-text-tertiary)]">-</td>
                <td className="py-2 text-[var(--color-text-secondary)]">Kontrolirano stanje</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-[var(--color-primary-600)]">onOpenChange</td>
                <td className="py-2 pr-4 text-[var(--color-text-secondary)]">{`(isOpen: boolean) => void`}</td>
                <td className="py-2 pr-4 text-[var(--color-text-tertiary)]">-</td>
                <td className="py-2 text-[var(--color-text-secondary)]">Callback za promjenu stanja</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-[var(--color-primary-600)]">maxWidth</td>
                <td className="py-2 pr-4 text-[var(--color-text-secondary)]">string | number</td>
                <td className="py-2 pr-4 text-[var(--color-text-tertiary)]">280px</td>
                <td className="py-2 text-[var(--color-text-secondary)]">Maksimalna širina tooltipa</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}

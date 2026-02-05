import { Icon, IconBox } from '@/src/components/ui/Icon'

export const metadata = {
  title: 'Icon - Components',
  description: 'Icon wrapper komponenta za konzistentno prikazivanje ikona',
}

/** Demo icons */
function UserIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    </svg>
  )
}

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

function AlertIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  )
}

function StarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}

function HeartIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  )
}

function ShoppingCartIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  )
}

function TruckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 17h4V5H2v12h3" />
      <path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5v8h1" />
      <circle cx="7.5" cy="17.5" r="2.5" />
      <circle cx="17.5" cy="17.5" r="2.5" />
    </svg>
  )
}

function SettingsIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  )
}

export default function IconPage() {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-12">
        <h1 className="mb-2 text-3xl font-bold text-[var(--color-text-primary)]">
          Icon
        </h1>
        <p className="text-[var(--color-text-secondary)]">
          Icon wrapper komponenta za konzistentno prikazivanje ikona sa podrskom za razlicite velicine, boje i pozadine.
        </p>
      </div>

      {/* Sizes */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Velicine
        </h2>
        <div className="flex flex-wrap items-end gap-6">
          <div className="text-center">
            <Icon icon={UserIcon} size="xs" />
            <p className="mt-2 text-xs text-[var(--color-text-secondary)]">xs (12px)</p>
          </div>
          <div className="text-center">
            <Icon icon={UserIcon} size="sm" />
            <p className="mt-2 text-xs text-[var(--color-text-secondary)]">sm (16px)</p>
          </div>
          <div className="text-center">
            <Icon icon={UserIcon} size="md" />
            <p className="mt-2 text-xs text-[var(--color-text-secondary)]">md (20px)</p>
          </div>
          <div className="text-center">
            <Icon icon={UserIcon} size="lg" />
            <p className="mt-2 text-xs text-[var(--color-text-secondary)]">lg (24px)</p>
          </div>
          <div className="text-center">
            <Icon icon={UserIcon} size="xl" />
            <p className="mt-2 text-xs text-[var(--color-text-secondary)]">xl (32px)</p>
          </div>
          <div className="text-center">
            <Icon icon={UserIcon} size="2xl" />
            <p className="mt-2 text-xs text-[var(--color-text-secondary)]">2xl (40px)</p>
          </div>
        </div>
      </section>

      {/* Colors */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Boje
        </h2>
        <div className="flex flex-wrap items-center gap-6">
          <div className="text-center">
            <Icon icon={StarIcon} size="lg" color="inherit" />
            <p className="mt-2 text-xs text-[var(--color-text-secondary)]">inherit</p>
          </div>
          <div className="text-center">
            <Icon icon={StarIcon} size="lg" color="primary" />
            <p className="mt-2 text-xs text-[var(--color-text-secondary)]">primary</p>
          </div>
          <div className="text-center">
            <Icon icon={StarIcon} size="lg" color="secondary" />
            <p className="mt-2 text-xs text-[var(--color-text-secondary)]">secondary</p>
          </div>
          <div className="text-center">
            <Icon icon={CheckIcon} size="lg" color="success" />
            <p className="mt-2 text-xs text-[var(--color-text-secondary)]">success</p>
          </div>
          <div className="text-center">
            <Icon icon={AlertIcon} size="lg" color="error" />
            <p className="mt-2 text-xs text-[var(--color-text-secondary)]">error</p>
          </div>
          <div className="text-center">
            <Icon icon={AlertIcon} size="lg" color="warning" />
            <p className="mt-2 text-xs text-[var(--color-text-secondary)]">warning</p>
          </div>
          <div className="text-center">
            <Icon icon={AlertIcon} size="lg" color="info" />
            <p className="mt-2 text-xs text-[var(--color-text-secondary)]">info</p>
          </div>
          <div className="text-center">
            <Icon icon={StarIcon} size="lg" color="muted" />
            <p className="mt-2 text-xs text-[var(--color-text-secondary)]">muted</p>
          </div>
        </div>
      </section>

      {/* With Background */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Sa pozadinom
        </h2>
        <div className="flex flex-wrap items-center gap-6">
          <div className="text-center">
            <Icon icon={UserIcon} size="lg" withBackground bgColor="primary" />
            <p className="mt-2 text-xs text-[var(--color-text-secondary)]">primary</p>
          </div>
          <div className="text-center">
            <Icon icon={UserIcon} size="lg" withBackground bgColor="secondary" />
            <p className="mt-2 text-xs text-[var(--color-text-secondary)]">secondary</p>
          </div>
          <div className="text-center">
            <Icon icon={CheckIcon} size="lg" withBackground bgColor="success" />
            <p className="mt-2 text-xs text-[var(--color-text-secondary)]">success</p>
          </div>
          <div className="text-center">
            <Icon icon={AlertIcon} size="lg" withBackground bgColor="error" />
            <p className="mt-2 text-xs text-[var(--color-text-secondary)]">error</p>
          </div>
          <div className="text-center">
            <Icon icon={AlertIcon} size="lg" withBackground bgColor="warning" />
            <p className="mt-2 text-xs text-[var(--color-text-secondary)]">warning</p>
          </div>
          <div className="text-center">
            <Icon icon={AlertIcon} size="lg" withBackground bgColor="info" />
            <p className="mt-2 text-xs text-[var(--color-text-secondary)]">info</p>
          </div>
          <div className="text-center">
            <Icon icon={SettingsIcon} size="lg" withBackground bgColor="neutral" />
            <p className="mt-2 text-xs text-[var(--color-text-secondary)]">neutral</p>
          </div>
        </div>
      </section>

      {/* IconBox Component */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          IconBox (Box sa ikonom)
        </h2>
        <div className="space-y-6">
          <div>
            <p className="mb-4 text-sm text-[var(--color-text-secondary)]">Razlicite velicine:</p>
            <div className="flex flex-wrap items-end gap-6">
              <div className="text-center">
                <IconBox icon={StarIcon} size="xs" bgColor="primary" />
                <p className="mt-2 text-xs text-[var(--color-text-secondary)]">xs</p>
              </div>
              <div className="text-center">
                <IconBox icon={StarIcon} size="sm" bgColor="primary" />
                <p className="mt-2 text-xs text-[var(--color-text-secondary)]">sm</p>
              </div>
              <div className="text-center">
                <IconBox icon={StarIcon} size="md" bgColor="primary" />
                <p className="mt-2 text-xs text-[var(--color-text-secondary)]">md</p>
              </div>
              <div className="text-center">
                <IconBox icon={StarIcon} size="lg" bgColor="primary" />
                <p className="mt-2 text-xs text-[var(--color-text-secondary)]">lg</p>
              </div>
              <div className="text-center">
                <IconBox icon={StarIcon} size="xl" bgColor="primary" />
                <p className="mt-2 text-xs text-[var(--color-text-secondary)]">xl</p>
              </div>
              <div className="text-center">
                <IconBox icon={StarIcon} size="2xl" bgColor="primary" />
                <p className="mt-2 text-xs text-[var(--color-text-secondary)]">2xl</p>
              </div>
            </div>
          </div>

          <div>
            <p className="mb-4 text-sm text-[var(--color-text-secondary)]">Razliciti radiusi:</p>
            <div className="flex flex-wrap items-center gap-6">
              <div className="text-center">
                <IconBox icon={CheckIcon} size="lg" bgColor="success" radius="sm" />
                <p className="mt-2 text-xs text-[var(--color-text-secondary)]">sm</p>
              </div>
              <div className="text-center">
                <IconBox icon={CheckIcon} size="lg" bgColor="success" radius="md" />
                <p className="mt-2 text-xs text-[var(--color-text-secondary)]">md</p>
              </div>
              <div className="text-center">
                <IconBox icon={CheckIcon} size="lg" bgColor="success" radius="lg" />
                <p className="mt-2 text-xs text-[var(--color-text-secondary)]">lg</p>
              </div>
              <div className="text-center">
                <IconBox icon={CheckIcon} size="lg" bgColor="success" radius="full" />
                <p className="mt-2 text-xs text-[var(--color-text-secondary)]">full</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Size */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Custom velicina
        </h2>
        <div className="flex flex-wrap items-end gap-6">
          <div className="text-center">
            <Icon icon={HeartIcon} customSize={18} color="error" />
            <p className="mt-2 text-xs text-[var(--color-text-secondary)]">18px</p>
          </div>
          <div className="text-center">
            <Icon icon={HeartIcon} customSize={28} color="error" />
            <p className="mt-2 text-xs text-[var(--color-text-secondary)]">28px</p>
          </div>
          <div className="text-center">
            <Icon icon={HeartIcon} customSize={48} color="error" />
            <p className="mt-2 text-xs text-[var(--color-text-secondary)]">48px</p>
          </div>
        </div>
      </section>

      {/* Real-world Examples */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Primjeri koriscenja
        </h2>

        {/* Feature List */}
        <div className="mb-8">
          <h3 className="mb-4 text-lg font-medium text-[var(--color-text-primary)]">
            Lista prednosti
          </h3>
          <div className="space-y-4 rounded-[var(--radius-lg)] border border-[var(--color-border-primary)] p-6">
            <div className="flex items-center gap-4">
              <IconBox icon={TruckIcon} size="md" bgColor="primary" />
              <div>
                <p className="font-medium text-[var(--color-text-primary)]">Besplatna dostava</p>
                <p className="text-sm text-[var(--color-text-secondary)]">Za narudzbe preko 100 KM</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <IconBox icon={CheckIcon} size="md" bgColor="success" />
              <div>
                <p className="font-medium text-[var(--color-text-primary)]">Garancija kvalitete</p>
                <p className="text-sm text-[var(--color-text-secondary)]">30 dana povrat novca</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <IconBox icon={ShoppingCartIcon} size="md" bgColor="info" />
              <div>
                <p className="font-medium text-[var(--color-text-primary)]">Sigurna kupovina</p>
                <p className="text-sm text-[var(--color-text-secondary)]">SSL enkripcija podataka</p>
              </div>
            </div>
          </div>
        </div>

        {/* Status Messages */}
        <div className="mb-8">
          <h3 className="mb-4 text-lg font-medium text-[var(--color-text-primary)]">
            Status poruke
          </h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3 rounded-[var(--radius-md)] bg-[var(--color-success-50)] p-3">
              <Icon icon={CheckIcon} size="md" color="success" />
              <span className="text-[var(--color-success-700)]">Narudzba je uspjesno kreirana</span>
            </div>
            <div className="flex items-center gap-3 rounded-[var(--radius-md)] bg-[var(--color-warning-50)] p-3">
              <Icon icon={AlertIcon} size="md" color="warning" />
              <span className="text-[var(--color-warning-700)]">Proizvod ima ogranicenu kolicinu</span>
            </div>
            <div className="flex items-center gap-3 rounded-[var(--radius-md)] bg-[var(--color-error-50)] p-3">
              <Icon icon={AlertIcon} size="md" color="error" />
              <span className="text-[var(--color-error-700)]">Doslo je do greske pri placanju</span>
            </div>
          </div>
        </div>

        {/* Inline Icons */}
        <div className="mb-8">
          <h3 className="mb-4 text-lg font-medium text-[var(--color-text-primary)]">
            Inline ikone u tekstu
          </h3>
          <div className="space-y-3 rounded-[var(--radius-lg)] border border-[var(--color-border-primary)] p-4">
            <p className="flex items-center gap-2 text-[var(--color-text-primary)]">
              <Icon icon={HeartIcon} size="sm" color="error" />
              Dodaj u favorite
            </p>
            <p className="flex items-center gap-2 text-[var(--color-text-primary)]">
              <Icon icon={ShoppingCartIcon} size="sm" color="primary" />
              Dodaj u košaricu
            </p>
            <p className="flex items-center gap-2 text-[var(--color-text-primary)]">
              <Icon icon={SettingsIcon} size="sm" color="secondary" />
              Podesavanja
            </p>
          </div>
        </div>
      </section>

      {/* Usage Code */}
      <section className="rounded-[var(--radius-card)] bg-[var(--color-bg-secondary)] p-6">
        <h2 className="mb-4 text-xl font-semibold text-[var(--color-text-primary)]">
          Koristenje
        </h2>
        <pre className="overflow-x-auto rounded-md bg-[var(--color-bg-tertiary)] p-4">
          <code className="text-sm text-[var(--color-text-primary)]">
{`import { Icon, IconBox } from '@/src/components/ui/Icon'
import { User01 } from '@/src/components/icons/Line/Users/User01'

// Sa icon komponentom
<Icon icon={User01} size="md" />

// Sa bojom
<Icon icon={User01} color="primary" />

// Sa pozadinom
<Icon icon={User01} withBackground bgColor="primary" />

// Custom velicina
<Icon icon={User01} customSize={32} />

// IconBox za feature liste
<IconBox icon={CheckIcon} size="lg" bgColor="success" />

// Sa children umjesto icon prop
<Icon size="lg" color="primary">
  <User01 />
</Icon>`}
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
            <h3 className="mb-2 font-medium text-[var(--color-text-primary)]">Velicine</h3>
            <ul className="space-y-1 text-sm text-[var(--color-text-secondary)]">
              <li><code>--icon-size-xs: 12px</code></li>
              <li><code>--icon-size-sm: 16px</code></li>
              <li><code>--icon-size-md: 20px</code></li>
              <li><code>--icon-size-lg: 24px</code></li>
              <li><code>--icon-size-xl: 32px</code></li>
              <li><code>--icon-size-2xl: 40px</code></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-2 font-medium text-[var(--color-text-primary)]">Boje</h3>
            <ul className="space-y-1 text-sm text-[var(--color-text-secondary)]">
              <li><code>Koristi --color-* varijable</code></li>
              <li><code>primary, success, error, warning, info</code></li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

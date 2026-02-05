import { Button, IconButton, LinkButton } from '@/src/components/ui/buttons'

export const metadata = {
  title: 'Buttons - Components',
  description: 'Button components with variants, sizes, and states',
}

/** Simple placeholder icons for demonstration */
function PlusIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 5v14M5 12h14" />
    </svg>
  )
}

function CartIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  )
}

function ArrowRightIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}

function SearchIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  )
}

function TrashIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  )
}

function HeartIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}

function ExternalIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3" />
    </svg>
  )
}

export default function ButtonsPage() {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-12">
        <h1 className="mb-2 text-3xl font-bold text-[var(--color-text-primary)]">
          Buttons
        </h1>
        <p className="text-[var(--color-text-secondary)]">
          Button, IconButton i LinkButton komponente sa svim varijantama i veličinama.
        </p>
      </div>

      {/* Button Component */}
      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Button
        </h2>

        {/* Variants */}
        <div className="mb-8">
          <h3 className="mb-4 text-lg font-medium text-[var(--color-text-primary)]">
            Varijante
          </h3>
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="danger">Danger</Button>
          </div>
        </div>

        {/* Sizes */}
        <div className="mb-8">
          <h3 className="mb-4 text-lg font-medium text-[var(--color-text-primary)]">
            Veličine
          </h3>
          <div className="flex flex-wrap items-center gap-4">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
            <Button size="xl">Extra Large</Button>
          </div>
        </div>

        {/* With Icons */}
        <div className="mb-8">
          <h3 className="mb-4 text-lg font-medium text-[var(--color-text-primary)]">
            Sa ikonama
          </h3>
          <div className="flex flex-wrap items-center gap-4">
            <Button leftIcon={<CartIcon />}>Dodaj u košaricu</Button>
            <Button rightIcon={<ArrowRightIcon />} variant="outline">
              Nastavi
            </Button>
            <Button leftIcon={<PlusIcon />} rightIcon={<ArrowRightIcon />} variant="secondary">
              Dodaj novi
            </Button>
          </div>
        </div>

        {/* States */}
        <div className="mb-8">
          <h3 className="mb-4 text-lg font-medium text-[var(--color-text-primary)]">
            Stanja
          </h3>
          <div className="flex flex-wrap items-center gap-4">
            <Button>Normal</Button>
            <Button disabled>Disabled</Button>
            <Button isLoading>Loading</Button>
          </div>
        </div>

        {/* Full Width */}
        <div className="mb-8">
          <h3 className="mb-4 text-lg font-medium text-[var(--color-text-primary)]">
            Full Width
          </h3>
          <div className="max-w-md space-y-4">
            <Button fullWidth>Full Width Button</Button>
            <Button fullWidth variant="outline" leftIcon={<CartIcon />}>
              Dodaj u košaricu
            </Button>
          </div>
        </div>
      </section>

      {/* IconButton Component */}
      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          IconButton
        </h2>

        {/* Variants */}
        <div className="mb-8">
          <h3 className="mb-4 text-lg font-medium text-[var(--color-text-primary)]">
            Varijante
          </h3>
          <div className="flex flex-wrap items-center gap-4">
            <IconButton icon={<SearchIcon />} aria-label="Pretraga" variant="primary" />
            <IconButton icon={<HeartIcon />} aria-label="Favoriti" variant="secondary" />
            <IconButton icon={<PlusIcon />} aria-label="Dodaj" variant="outline" />
            <IconButton icon={<SearchIcon />} aria-label="Pretraga" variant="ghost" />
            <IconButton icon={<TrashIcon />} aria-label="Obriši" variant="danger" />
          </div>
        </div>

        {/* Sizes */}
        <div className="mb-8">
          <h3 className="mb-4 text-lg font-medium text-[var(--color-text-primary)]">
            Veličine
          </h3>
          <div className="flex flex-wrap items-center gap-4">
            <IconButton icon={<SearchIcon />} aria-label="Small" size="sm" variant="outline" />
            <IconButton icon={<SearchIcon />} aria-label="Medium" size="md" variant="outline" />
            <IconButton icon={<SearchIcon />} aria-label="Large" size="lg" variant="outline" />
            <IconButton icon={<SearchIcon />} aria-label="XL" size="xl" variant="outline" />
          </div>
        </div>

        {/* States */}
        <div className="mb-8">
          <h3 className="mb-4 text-lg font-medium text-[var(--color-text-primary)]">
            Stanja
          </h3>
          <div className="flex flex-wrap items-center gap-4">
            <IconButton icon={<HeartIcon />} aria-label="Normal" variant="outline" />
            <IconButton icon={<HeartIcon />} aria-label="Disabled" variant="outline" disabled />
            <IconButton icon={<HeartIcon />} aria-label="Loading" variant="outline" isLoading />
          </div>
        </div>
      </section>

      {/* LinkButton Component */}
      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          LinkButton
        </h2>

        {/* Variants */}
        <div className="mb-8">
          <h3 className="mb-4 text-lg font-medium text-[var(--color-text-primary)]">
            Varijante
          </h3>
          <div className="flex flex-wrap items-center gap-4">
            <LinkButton href="/proizvodi" variant="primary">
              Proizvodi
            </LinkButton>
            <LinkButton href="/kategorije" variant="secondary">
              Kategorije
            </LinkButton>
            <LinkButton href="/o-nama" variant="outline">
              O nama
            </LinkButton>
            <LinkButton href="/kontakt" variant="ghost">
              Kontakt
            </LinkButton>
          </div>
        </div>

        {/* With Icons */}
        <div className="mb-8">
          <h3 className="mb-4 text-lg font-medium text-[var(--color-text-primary)]">
            Sa ikonama
          </h3>
          <div className="flex flex-wrap items-center gap-4">
            <LinkButton href="/proizvodi" rightIcon={<ArrowRightIcon />}>
              Pogledaj sve
            </LinkButton>
            <LinkButton
              href="https://example.com"
              external
              variant="outline"
              rightIcon={<ExternalIcon />}
            >
              Vanjski link
            </LinkButton>
          </div>
        </div>

        {/* Sizes */}
        <div className="mb-8">
          <h3 className="mb-4 text-lg font-medium text-[var(--color-text-primary)]">
            Veličine
          </h3>
          <div className="flex flex-wrap items-center gap-4">
            <LinkButton href="#" size="sm">
              Small
            </LinkButton>
            <LinkButton href="#" size="md">
              Medium
            </LinkButton>
            <LinkButton href="#" size="lg">
              Large
            </LinkButton>
            <LinkButton href="#" size="xl">
              Extra Large
            </LinkButton>
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
{`import { Button, IconButton, LinkButton } from '@/src/components/ui/buttons'

// Basic Button
<Button variant="primary" size="md">Dodaj u košaricu</Button>

// Button with icons
<Button leftIcon={<CartIcon />} variant="outline">
  Dodaj u košaricu
</Button>

// Loading state
<Button isLoading>Učitavanje...</Button>

// IconButton (requires aria-label)
<IconButton
  icon={<SearchIcon />}
  aria-label="Pretraga"
  variant="ghost"
/>

// LinkButton for navigation
<LinkButton href="/proizvodi" variant="primary">
  Pogledaj sve
</LinkButton>

// External link
<LinkButton href="https://example.com" external>
  Vanjski link
</LinkButton>`}
          </code>
        </pre>
      </section>

      {/* CSS Variables Used */}
      <section className="mt-8 rounded-[var(--radius-card)] bg-[var(--color-bg-secondary)] p-6">
        <h2 className="mb-4 text-xl font-semibold text-[var(--color-text-primary)]">
          CSS Varijable
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <h3 className="mb-2 font-medium text-[var(--color-text-primary)]">Visine</h3>
            <ul className="space-y-1 text-sm text-[var(--color-text-secondary)]">
              <li><code>--button-height-sm: 32px</code></li>
              <li><code>--button-height-md: 40px</code></li>
              <li><code>--button-height-lg: 48px</code></li>
              <li><code>--button-height-xl: 56px</code></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-2 font-medium text-[var(--color-text-primary)]">Ostalo</h3>
            <ul className="space-y-1 text-sm text-[var(--color-text-secondary)]">
              <li><code>--radius-button: 6px</code></li>
              <li><code>--spacing-button-padding-x: 24px</code></li>
              <li><code>--spacing-button-padding-y: 10px</code></li>
              <li><code>--transition-fast: 150ms</code></li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

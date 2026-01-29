import { Stack, HStack, VStack } from '@/src/components/ui/Stack'

export const metadata = {
  title: 'Stack - UI Showcase',
  description: 'Layout component for arranging elements with consistent spacing',
}

function DemoBox({ children, color = 'primary' }: { children: React.ReactNode; color?: 'primary' | 'secondary' | 'tertiary' }) {
  const colors = {
    primary: 'bg-[var(--color-primary-100)] border-[var(--color-primary-300)] text-[var(--color-primary-700)]',
    secondary: 'bg-[var(--color-secondary-100)] border-[var(--color-secondary-300)] text-[var(--color-secondary-700)]',
    tertiary: 'bg-[var(--color-info-50)] border-[var(--color-info-300)] text-[var(--color-info-700)]',
  }
  return (
    <div className={`${colors[color]} rounded-[var(--radius-md)] border px-4 py-2 text-sm font-medium`}>
      {children}
    </div>
  )
}

export default function StackPage() {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-12">
        <h1 className="mb-2 text-3xl font-bold text-[var(--color-text-primary)]">
          Stack
        </h1>
        <p className="text-[var(--color-text-secondary)]">
          Layout komponenta za slaganje elemenata s konzistentnim razmacima. Pojednostavljuje uobičajene flex patterne.
        </p>
      </div>

      {/* Basic Stack */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Osnovni Stack (Vertikalni)
        </h2>
        <div className="max-w-md rounded-[var(--radius-lg)] border border-[var(--color-border-primary)] p-6">
          <Stack gap="md">
            <DemoBox>Element 1</DemoBox>
            <DemoBox>Element 2</DemoBox>
            <DemoBox>Element 3</DemoBox>
          </Stack>
        </div>
      </section>

      {/* Horizontal Stack */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Horizontalni Stack
        </h2>
        <div className="rounded-[var(--radius-lg)] border border-[var(--color-border-primary)] p-6">
          <Stack direction="horizontal" gap="md">
            <DemoBox color="secondary">Element 1</DemoBox>
            <DemoBox color="secondary">Element 2</DemoBox>
            <DemoBox color="secondary">Element 3</DemoBox>
          </Stack>
        </div>
      </section>

      {/* HStack & VStack Shortcuts */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          HStack i VStack prečice
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="mb-4 text-lg font-medium text-[var(--color-text-primary)]">
              HStack (Horizontal)
            </h3>
            <div className="rounded-[var(--radius-lg)] border border-[var(--color-border-primary)] p-6">
              <HStack gap="sm" align="center">
                <div className="w-8 h-8 rounded-full bg-[var(--color-primary-500)]" />
                <span className="font-medium">Korisnik</span>
              </HStack>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-medium text-[var(--color-text-primary)]">
              VStack (Vertical)
            </h3>
            <div className="rounded-[var(--radius-lg)] border border-[var(--color-border-primary)] p-6">
              <VStack gap="sm" align="center">
                <div className="w-12 h-12 rounded-full bg-[var(--color-secondary-500)]" />
                <span className="font-medium">Avatar</span>
                <span className="text-sm text-[var(--color-text-secondary)]">Opis</span>
              </VStack>
            </div>
          </div>
        </div>
      </section>

      {/* Gap Sizes */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Veličine razmaka (Gap)
        </h2>
        <div className="space-y-6">
          {(['xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const).map((gap) => (
            <div key={gap} className="flex items-center gap-6">
              <span className="w-16 text-sm font-mono text-[var(--color-text-secondary)]">
                {gap}
              </span>
              <div className="flex-1 rounded-[var(--radius-lg)] border border-[var(--color-border-primary)] p-4">
                <HStack gap={gap}>
                  <DemoBox color="tertiary">1</DemoBox>
                  <DemoBox color="tertiary">2</DemoBox>
                  <DemoBox color="tertiary">3</DemoBox>
                </HStack>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Alignment */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Poravnanje (Align)
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {(['start', 'center', 'end'] as const).map((align) => (
            <div key={align}>
              <h3 className="mb-4 text-lg font-medium text-[var(--color-text-primary)]">
                align=&quot;{align}&quot;
              </h3>
              <div className="h-32 rounded-[var(--radius-lg)] border border-[var(--color-border-primary)] p-4">
                <HStack gap="sm" align={align} className="h-full">
                  <DemoBox>A</DemoBox>
                  <DemoBox>B tall<br/>item</DemoBox>
                  <DemoBox>C</DemoBox>
                </HStack>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Justify */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Distribucija (Justify)
        </h2>
        <div className="space-y-6">
          {(['start', 'center', 'end', 'between', 'around', 'evenly'] as const).map((justify) => (
            <div key={justify}>
              <h3 className="mb-2 text-sm font-medium text-[var(--color-text-secondary)]">
                justify=&quot;{justify}&quot;
              </h3>
              <div className="rounded-[var(--radius-lg)] border border-[var(--color-border-primary)] p-4">
                <HStack gap="sm" justify={justify} fullWidth>
                  <DemoBox color="secondary">1</DemoBox>
                  <DemoBox color="secondary">2</DemoBox>
                  <DemoBox color="secondary">3</DemoBox>
                </HStack>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Wrap */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Prelamanje (Wrap)
        </h2>
        <div className="max-w-md rounded-[var(--radius-lg)] border border-[var(--color-border-primary)] p-4">
          <HStack gap="sm" wrap="wrap">
            {Array.from({ length: 8 }, (_, i) => (
              <DemoBox key={i} color="tertiary">Element {i + 1}</DemoBox>
            ))}
          </HStack>
        </div>
      </section>

      {/* Real-world Examples */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Primjeri korištenja
        </h2>

        {/* Card layout */}
        <div className="mb-8">
          <h3 className="mb-4 text-lg font-medium text-[var(--color-text-primary)]">
            Kartica sa sadržajem
          </h3>
          <div className="max-w-sm rounded-[var(--radius-card)] border border-[var(--color-border-primary)] bg-[var(--color-bg-elevated)] p-6">
            <VStack gap="md">
              <div className="w-full aspect-video rounded-[var(--radius-md)] bg-[var(--color-bg-tertiary)]" />
              <VStack gap="sm">
                <h4 className="text-lg font-semibold">Naziv proizvoda</h4>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  Kratak opis proizvoda koji objašnjava njegove karakteristike.
                </p>
              </VStack>
              <HStack justify="between" fullWidth>
                <span className="text-xl font-bold text-[var(--color-primary-500)]">99.99 KM</span>
                <button className="px-4 py-2 rounded-[var(--radius-button)] bg-[var(--color-primary-500)] text-white text-sm font-medium">
                  Dodaj u korpu
                </button>
              </HStack>
            </VStack>
          </div>
        </div>

        {/* Form layout */}
        <div className="mb-8">
          <h3 className="mb-4 text-lg font-medium text-[var(--color-text-primary)]">
            Forma
          </h3>
          <div className="max-w-md rounded-[var(--radius-card)] border border-[var(--color-border-primary)] p-6">
            <VStack gap="lg">
              <HStack gap="md" fullWidth>
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-1">Ime</label>
                  <input className="w-full px-3 py-2 border rounded-[var(--radius-input)] border-[var(--color-border-primary)]" placeholder="Ime" />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-1">Prezime</label>
                  <input className="w-full px-3 py-2 border rounded-[var(--radius-input)] border-[var(--color-border-primary)]" placeholder="Prezime" />
                </div>
              </HStack>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input className="w-full px-3 py-2 border rounded-[var(--radius-input)] border-[var(--color-border-primary)]" placeholder="email@primjer.com" type="email" />
              </div>
              <HStack justify="end" gap="sm" fullWidth>
                <button className="px-4 py-2 rounded-[var(--radius-button)] border border-[var(--color-border-primary)] text-sm font-medium">
                  Odustani
                </button>
                <button className="px-4 py-2 rounded-[var(--radius-button)] bg-[var(--color-primary-500)] text-white text-sm font-medium">
                  Spremi
                </button>
              </HStack>
            </VStack>
          </div>
        </div>

        {/* Navigation */}
        <div className="mb-8">
          <h3 className="mb-4 text-lg font-medium text-[var(--color-text-primary)]">
            Navigacija/Header
          </h3>
          <div className="rounded-[var(--radius-card)] border border-[var(--color-border-primary)] p-4 bg-[var(--color-bg-elevated)]">
            <HStack justify="between" align="center" fullWidth>
              <span className="text-xl font-bold text-[var(--color-primary-500)]">Logo</span>
              <HStack gap="lg" align="center">
                <span className="text-sm hover:text-[var(--color-primary-500)] cursor-pointer">Početna</span>
                <span className="text-sm hover:text-[var(--color-primary-500)] cursor-pointer">Proizvodi</span>
                <span className="text-sm hover:text-[var(--color-primary-500)] cursor-pointer">O nama</span>
                <span className="text-sm hover:text-[var(--color-primary-500)] cursor-pointer">Kontakt</span>
              </HStack>
              <HStack gap="sm">
                <div className="w-8 h-8 rounded-full bg-[var(--color-bg-tertiary)]" />
              </HStack>
            </HStack>
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
{`import { Stack, HStack, VStack } from '@/src/components/ui/Stack'

// Vertical stack (default)
<Stack gap="md">
  <Card>Kartica 1</Card>
  <Card>Kartica 2</Card>
</Stack>

// Horizontal stack
<Stack direction="horizontal" gap="sm" align="center">
  <Icon />
  <span>Tekst</span>
</Stack>

// Using shortcuts
<HStack gap="md" justify="between" fullWidth>
  <Logo />
  <Navigation />
</HStack>

<VStack gap="lg" align="center">
  <Avatar />
  <UserInfo />
</VStack>

// With wrapping
<HStack gap="sm" wrap="wrap">
  {items.map(item => <Tag key={item.id}>{item.name}</Tag>)}
</HStack>`}
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
                <th className="text-left py-2 pr-4 font-medium">Prop</th>
                <th className="text-left py-2 pr-4 font-medium">Tip</th>
                <th className="text-left py-2 pr-4 font-medium">Default</th>
                <th className="text-left py-2 font-medium">Opis</th>
              </tr>
            </thead>
            <tbody className="text-[var(--color-text-secondary)]">
              <tr className="border-b border-[var(--color-border-primary)]">
                <td className="py-2 pr-4 font-mono text-xs">direction</td>
                <td className="py-2 pr-4 font-mono text-xs">&apos;horizontal&apos; | &apos;vertical&apos;</td>
                <td className="py-2 pr-4 font-mono text-xs">&apos;vertical&apos;</td>
                <td className="py-2">Smjer slaganja elemenata</td>
              </tr>
              <tr className="border-b border-[var(--color-border-primary)]">
                <td className="py-2 pr-4 font-mono text-xs">gap</td>
                <td className="py-2 pr-4 font-mono text-xs">&apos;none&apos; | &apos;xs&apos; | &apos;sm&apos; | &apos;md&apos; | &apos;lg&apos; | &apos;xl&apos; | &apos;2xl&apos; | &apos;3xl&apos;</td>
                <td className="py-2 pr-4 font-mono text-xs">&apos;md&apos;</td>
                <td className="py-2">Razmak između elemenata</td>
              </tr>
              <tr className="border-b border-[var(--color-border-primary)]">
                <td className="py-2 pr-4 font-mono text-xs">align</td>
                <td className="py-2 pr-4 font-mono text-xs">&apos;start&apos; | &apos;center&apos; | &apos;end&apos; | &apos;stretch&apos; | &apos;baseline&apos;</td>
                <td className="py-2 pr-4 font-mono text-xs">&apos;stretch&apos;</td>
                <td className="py-2">Poravnanje na poprečnoj osi</td>
              </tr>
              <tr className="border-b border-[var(--color-border-primary)]">
                <td className="py-2 pr-4 font-mono text-xs">justify</td>
                <td className="py-2 pr-4 font-mono text-xs">&apos;start&apos; | &apos;center&apos; | &apos;end&apos; | &apos;between&apos; | &apos;around&apos; | &apos;evenly&apos;</td>
                <td className="py-2 pr-4 font-mono text-xs">&apos;start&apos;</td>
                <td className="py-2">Distribucija na glavnoj osi</td>
              </tr>
              <tr className="border-b border-[var(--color-border-primary)]">
                <td className="py-2 pr-4 font-mono text-xs">wrap</td>
                <td className="py-2 pr-4 font-mono text-xs">&apos;nowrap&apos; | &apos;wrap&apos; | &apos;wrap-reverse&apos;</td>
                <td className="py-2 pr-4 font-mono text-xs">&apos;nowrap&apos;</td>
                <td className="py-2">Prelamanje elemenata</td>
              </tr>
              <tr className="border-b border-[var(--color-border-primary)]">
                <td className="py-2 pr-4 font-mono text-xs">fullWidth</td>
                <td className="py-2 pr-4 font-mono text-xs">boolean</td>
                <td className="py-2 pr-4 font-mono text-xs">false</td>
                <td className="py-2">Zauzmi punu širinu</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">as</td>
                <td className="py-2 pr-4 font-mono text-xs">&apos;div&apos; | &apos;section&apos; | &apos;nav&apos; | ...</td>
                <td className="py-2 pr-4 font-mono text-xs">&apos;div&apos;</td>
                <td className="py-2">HTML element za renderiranje</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}

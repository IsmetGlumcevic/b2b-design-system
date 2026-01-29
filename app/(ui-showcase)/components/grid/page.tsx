import { Grid, GridItem } from '@/src/components/ui/Grid'
import { Container } from '@/src/components/ui/Container'

export const metadata = {
  title: 'Grid - UI Showcase',
  description: 'CSS Grid layout component for responsive grid-based layouts',
}

function DemoBox({ children, color = 'primary' }: { children: React.ReactNode; color?: 'primary' | 'secondary' | 'tertiary' }) {
  const colors = {
    primary: 'bg-[var(--color-primary-100)] border-[var(--color-primary-300)] text-[var(--color-primary-700)]',
    secondary: 'bg-[var(--color-secondary-100)] border-[var(--color-secondary-300)] text-[var(--color-secondary-700)]',
    tertiary: 'bg-[var(--color-info-50)] border-[var(--color-info-300)] text-[var(--color-info-700)]',
  }
  return (
    <div className={`${colors[color]} rounded-[var(--radius-md)] border px-4 py-6 text-sm font-medium text-center`}>
      {children}
    </div>
  )
}

export default function GridPage() {
  return (
    <div className="py-8">
      {/* Header */}
      <Container className="mb-12">
        <h1 className="mb-2 text-3xl font-bold text-[var(--color-text-primary)]">
          Grid
        </h1>
        <p className="text-[var(--color-text-secondary)]">
          CSS Grid layout komponenta za kreiranje responzivnih grid-baziranih layouta.
        </p>
      </Container>

      {/* Basic Grid */}
      <Container className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Osnovni Grid
        </h2>
        <div className="space-y-6">
          {([1, 2, 3, 4] as const).map((cols) => (
            <div key={cols}>
              <span className="block mb-2 text-sm font-mono text-[var(--color-text-secondary)]">
                cols={cols}
              </span>
              <div className="rounded-[var(--radius-lg)] border border-[var(--color-border-primary)] p-4">
                <Grid cols={cols} gap="md">
                  {Array.from({ length: cols }, (_, i) => (
                    <DemoBox key={i}>{i + 1}</DemoBox>
                  ))}
                </Grid>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Responsive Grid */}
      <Container className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Responzivni Grid
        </h2>
        <p className="mb-4 text-[var(--color-text-secondary)]">
          Promijeni veličinu prozora da vidiš responzivno ponašanje.
        </p>
        <div className="rounded-[var(--radius-lg)] border border-[var(--color-border-primary)] p-4">
          <span className="block mb-4 text-sm font-mono text-[var(--color-text-secondary)]">
            cols=&#123;1&#125; colsMd=&#123;2&#125; colsLg=&#123;4&#125;
          </span>
          <Grid cols={1} colsMd={2} colsLg={4} gap="md">
            <DemoBox color="secondary">1</DemoBox>
            <DemoBox color="secondary">2</DemoBox>
            <DemoBox color="secondary">3</DemoBox>
            <DemoBox color="secondary">4</DemoBox>
          </Grid>
        </div>
      </Container>

      {/* Gap Sizes */}
      <Container className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Veličine razmaka (Gap)
        </h2>
        <div className="space-y-6">
          {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((gap) => (
            <div key={gap}>
              <span className="block mb-2 text-sm font-mono text-[var(--color-text-secondary)]">
                gap=&quot;{gap}&quot;
              </span>
              <div className="rounded-[var(--radius-lg)] border border-[var(--color-border-primary)] p-4">
                <Grid cols={4} gap={gap}>
                  <DemoBox color="tertiary">1</DemoBox>
                  <DemoBox color="tertiary">2</DemoBox>
                  <DemoBox color="tertiary">3</DemoBox>
                  <DemoBox color="tertiary">4</DemoBox>
                </Grid>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Separate Gap X and Y */}
      <Container className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Odvojeni gapX i gapY
        </h2>
        <div className="rounded-[var(--radius-lg)] border border-[var(--color-border-primary)] p-4">
          <span className="block mb-4 text-sm font-mono text-[var(--color-text-secondary)]">
            gapX=&quot;xl&quot; gapY=&quot;sm&quot;
          </span>
          <Grid cols={3} gapX="xl" gapY="sm">
            {Array.from({ length: 6 }, (_, i) => (
              <DemoBox key={i}>{i + 1}</DemoBox>
            ))}
          </Grid>
        </div>
      </Container>

      {/* GridItem with colSpan */}
      <Container className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          GridItem s colSpan
        </h2>
        <p className="mb-4 text-[var(--color-text-secondary)]">
          Koristi GridItem za kontrolu koliko kolona zauzima pojedinačni element.
        </p>
        <div className="rounded-[var(--radius-lg)] border border-[var(--color-border-primary)] p-4">
          <span className="block mb-4 text-sm font-mono text-[var(--color-text-secondary)]">
            12-column layout
          </span>
          <Grid cols={12} gap="md">
            <GridItem colSpan={8}>
              <DemoBox>colSpan=8</DemoBox>
            </GridItem>
            <GridItem colSpan={4}>
              <DemoBox color="secondary">colSpan=4</DemoBox>
            </GridItem>
            <GridItem colSpan={4}>
              <DemoBox color="tertiary">colSpan=4</DemoBox>
            </GridItem>
            <GridItem colSpan={4}>
              <DemoBox color="tertiary">colSpan=4</DemoBox>
            </GridItem>
            <GridItem colSpan={4}>
              <DemoBox color="tertiary">colSpan=4</DemoBox>
            </GridItem>
            <GridItem colSpan="full">
              <DemoBox>colSpan=&quot;full&quot;</DemoBox>
            </GridItem>
          </Grid>
        </div>
      </Container>

      {/* Responsive GridItem */}
      <Container className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Responzivni GridItem
        </h2>
        <p className="mb-4 text-[var(--color-text-secondary)]">
          GridItem podržava responzivne colSpan vrijednosti.
        </p>
        <div className="rounded-[var(--radius-lg)] border border-[var(--color-border-primary)] p-4">
          <span className="block mb-4 text-sm font-mono text-[var(--color-text-secondary)]">
            colSpan=&quot;full&quot; colSpanMd=&#123;6&#125; colSpanLg=&#123;4&#125;
          </span>
          <Grid cols={12} gap="md">
            {Array.from({ length: 3 }, (_, i) => (
              <GridItem key={i} colSpan="full" colSpanMd={6} colSpanLg={4}>
                <DemoBox color="secondary">Responzivna kartica {i + 1}</DemoBox>
              </GridItem>
            ))}
          </Grid>
        </div>
      </Container>

      {/* Auto-fit Grid */}
      <Container className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Auto-fit Grid
        </h2>
        <p className="mb-4 text-[var(--color-text-secondary)]">
          Automatski prilagođava broj kolona prema dostupnom prostoru.
        </p>
        <div className="rounded-[var(--radius-lg)] border border-[var(--color-border-primary)] p-4">
          <span className="block mb-4 text-sm font-mono text-[var(--color-text-secondary)]">
            cols=&quot;auto-fit&quot; minChildWidth=&quot;200px&quot;
          </span>
          <Grid cols="auto-fit" gap="md" minChildWidth="200px">
            {Array.from({ length: 6 }, (_, i) => (
              <DemoBox key={i} color="tertiary">Auto {i + 1}</DemoBox>
            ))}
          </Grid>
        </div>
      </Container>

      {/* Real-world Examples */}
      <Container className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Primjeri korištenja
        </h2>

        {/* Product Grid */}
        <div className="mb-8">
          <h3 className="mb-4 text-lg font-medium text-[var(--color-text-primary)]">
            Mreža proizvoda
          </h3>
          <div className="rounded-[var(--radius-lg)] border border-[var(--color-border-primary)] p-4">
            <Grid cols={1} colsMd={2} colsLg={4} gap="lg">
              {Array.from({ length: 4 }, (_, i) => (
                <div key={i} className="rounded-[var(--radius-card)] border border-[var(--color-border-primary)] bg-[var(--color-bg-elevated)] p-4">
                  <div className="aspect-square rounded-[var(--radius-md)] bg-[var(--color-bg-tertiary)] mb-4" />
                  <h4 className="font-semibold mb-1">Proizvod {i + 1}</h4>
                  <p className="text-sm text-[var(--color-text-secondary)] mb-2">Kratki opis proizvoda</p>
                  <span className="font-bold text-[var(--color-primary-500)]">99.99 KM</span>
                </div>
              ))}
            </Grid>
          </div>
        </div>

        {/* Dashboard Layout */}
        <div className="mb-8">
          <h3 className="mb-4 text-lg font-medium text-[var(--color-text-primary)]">
            Dashboard layout
          </h3>
          <div className="rounded-[var(--radius-lg)] border border-[var(--color-border-primary)] p-4">
            <Grid cols={12} gap="md">
              <GridItem colSpan="full" colSpanLg={8}>
                <div className="rounded-[var(--radius-card)] border border-[var(--color-border-primary)] bg-[var(--color-bg-elevated)] p-6 h-48">
                  <h4 className="font-semibold mb-2">Glavni sadržaj</h4>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    Zauzima 8 kolona na desktop-u, punu širinu na mobilnom
                  </p>
                </div>
              </GridItem>
              <GridItem colSpan="full" colSpanLg={4}>
                <div className="rounded-[var(--radius-card)] border border-[var(--color-border-primary)] bg-[var(--color-bg-secondary)] p-6 h-48">
                  <h4 className="font-semibold mb-2">Sidebar</h4>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    Zauzima 4 kolone na desktop-u
                  </p>
                </div>
              </GridItem>
              <GridItem colSpan="full" colSpanMd={6} colSpanLg={4}>
                <div className="rounded-[var(--radius-card)] border border-[var(--color-border-primary)] bg-[var(--color-bg-elevated)] p-4">
                  <span className="text-2xl font-bold">1,234</span>
                  <p className="text-sm text-[var(--color-text-secondary)]">Narudžbe</p>
                </div>
              </GridItem>
              <GridItem colSpan="full" colSpanMd={6} colSpanLg={4}>
                <div className="rounded-[var(--radius-card)] border border-[var(--color-border-primary)] bg-[var(--color-bg-elevated)] p-4">
                  <span className="text-2xl font-bold">56,789 KM</span>
                  <p className="text-sm text-[var(--color-text-secondary)]">Prihod</p>
                </div>
              </GridItem>
              <GridItem colSpan="full" colSpanMd={12} colSpanLg={4}>
                <div className="rounded-[var(--radius-card)] border border-[var(--color-border-primary)] bg-[var(--color-bg-elevated)] p-4">
                  <span className="text-2xl font-bold">89%</span>
                  <p className="text-sm text-[var(--color-text-secondary)]">Zadovoljstvo</p>
                </div>
              </GridItem>
            </Grid>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mb-8">
          <h3 className="mb-4 text-lg font-medium text-[var(--color-text-primary)]">
            Galerija slika
          </h3>
          <div className="rounded-[var(--radius-lg)] border border-[var(--color-border-primary)] p-4">
            <Grid cols={2} colsMd={3} colsLg={4} gap="sm">
              {Array.from({ length: 8 }, (_, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-[var(--radius-md)] bg-[var(--color-bg-tertiary)] flex items-center justify-center text-[var(--color-text-tertiary)]"
                >
                  {i + 1}
                </div>
              ))}
            </Grid>
          </div>
        </div>
      </Container>

      {/* Usage Code */}
      <Container>
        <div className="rounded-[var(--radius-card)] bg-[var(--color-bg-secondary)] p-6">
          <h2 className="mb-4 text-xl font-semibold text-[var(--color-text-primary)]">
            Korištenje
          </h2>
          <pre className="overflow-x-auto rounded-md bg-[var(--color-bg-tertiary)] p-4">
            <code className="text-sm text-[var(--color-text-primary)]">
{`import { Grid, GridItem } from '@/src/components/ui/Grid'

// Basic grid
<Grid cols={3} gap="md">
  <Card>1</Card>
  <Card>2</Card>
  <Card>3</Card>
</Grid>

// Responsive grid
<Grid cols={1} colsMd={2} colsLg={4} gap="lg">
  {products.map(product => (
    <ProductCard key={product.id} />
  ))}
</Grid>

// Auto-fit grid
<Grid cols="auto-fit" gap="md" minChildWidth="280px">
  {items.map(item => <Card key={item.id} />)}
</Grid>

// 12-column layout with GridItem
<Grid cols={12} gap="md">
  <GridItem colSpan={8}>
    <MainContent />
  </GridItem>
  <GridItem colSpan={4}>
    <Sidebar />
  </GridItem>
</Grid>

// Responsive GridItem
<GridItem colSpan="full" colSpanMd={6} colSpanLg={4}>
  <ResponsiveCard />
</GridItem>`}
            </code>
          </pre>
        </div>

        {/* Props Table */}
        <div className="mt-8 rounded-[var(--radius-card)] bg-[var(--color-bg-secondary)] p-6">
          <h2 className="mb-4 text-xl font-semibold text-[var(--color-text-primary)]">
            Grid Props
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
                  <td className="py-2 pr-4 font-mono text-xs">cols</td>
                  <td className="py-2 pr-4 font-mono text-xs">1 | 2 | 3 | 4 | 5 | 6 | 12 | &apos;auto-fit&apos; | &apos;auto-fill&apos;</td>
                  <td className="py-2 pr-4 font-mono text-xs">1</td>
                  <td className="py-2">Broj kolona</td>
                </tr>
                <tr className="border-b border-[var(--color-border-primary)]">
                  <td className="py-2 pr-4 font-mono text-xs">colsMd</td>
                  <td className="py-2 pr-4 font-mono text-xs">isti kao cols</td>
                  <td className="py-2 pr-4 font-mono text-xs">-</td>
                  <td className="py-2">Kolone na md breakpointu</td>
                </tr>
                <tr className="border-b border-[var(--color-border-primary)]">
                  <td className="py-2 pr-4 font-mono text-xs">colsLg</td>
                  <td className="py-2 pr-4 font-mono text-xs">isti kao cols</td>
                  <td className="py-2 pr-4 font-mono text-xs">-</td>
                  <td className="py-2">Kolone na lg breakpointu</td>
                </tr>
                <tr className="border-b border-[var(--color-border-primary)]">
                  <td className="py-2 pr-4 font-mono text-xs">gap</td>
                  <td className="py-2 pr-4 font-mono text-xs">&apos;none&apos; | &apos;xs&apos; | &apos;sm&apos; | &apos;md&apos; | &apos;lg&apos; | &apos;xl&apos; | &apos;2xl&apos;</td>
                  <td className="py-2 pr-4 font-mono text-xs">&apos;md&apos;</td>
                  <td className="py-2">Razmak između elemenata</td>
                </tr>
                <tr className="border-b border-[var(--color-border-primary)]">
                  <td className="py-2 pr-4 font-mono text-xs">gapX / gapY</td>
                  <td className="py-2 pr-4 font-mono text-xs">isti kao gap</td>
                  <td className="py-2 pr-4 font-mono text-xs">-</td>
                  <td className="py-2">Odvojeni horizontalni/vertikalni gap</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-mono text-xs">minChildWidth</td>
                  <td className="py-2 pr-4 font-mono text-xs">string</td>
                  <td className="py-2 pr-4 font-mono text-xs">&apos;280px&apos;</td>
                  <td className="py-2">Min širina za auto-fit/fill</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="mt-6 mb-4 text-lg font-semibold text-[var(--color-text-primary)]">
            GridItem Props
          </h3>
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
                  <td className="py-2 pr-4 font-mono text-xs">colSpan</td>
                  <td className="py-2 pr-4 font-mono text-xs">1-12 | &apos;full&apos;</td>
                  <td className="py-2 pr-4 font-mono text-xs">-</td>
                  <td className="py-2">Koliko kolona zauzima</td>
                </tr>
                <tr className="border-b border-[var(--color-border-primary)]">
                  <td className="py-2 pr-4 font-mono text-xs">colSpanMd / colSpanLg</td>
                  <td className="py-2 pr-4 font-mono text-xs">isti kao colSpan</td>
                  <td className="py-2 pr-4 font-mono text-xs">-</td>
                  <td className="py-2">Responzivni colSpan</td>
                </tr>
                <tr className="border-b border-[var(--color-border-primary)]">
                  <td className="py-2 pr-4 font-mono text-xs">rowSpan</td>
                  <td className="py-2 pr-4 font-mono text-xs">1-6</td>
                  <td className="py-2 pr-4 font-mono text-xs">-</td>
                  <td className="py-2">Koliko redova zauzima</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-mono text-xs">colStart / rowStart</td>
                  <td className="py-2 pr-4 font-mono text-xs">number</td>
                  <td className="py-2 pr-4 font-mono text-xs">-</td>
                  <td className="py-2">Početna pozicija</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </div>
  )
}

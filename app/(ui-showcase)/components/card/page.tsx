import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardImage,
} from '@/src/components/ui/Card'
import { Badge } from '@/src/components/ui/Badge'
import { Button } from '@/src/components/ui/buttons'

export const metadata = {
  title: 'Card - Components',
  description: 'Card komponenta sa kompozabilnom strukturom',
}

/** Simple icons for demonstration */
function HeartIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}

function CartIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  )
}

function MoreIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="1" />
      <circle cx="12" cy="5" r="1" />
      <circle cx="12" cy="19" r="1" />
    </svg>
  )
}

export default function CardPage() {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-12">
        <h1 className="mb-2 text-3xl font-bold text-[var(--color-text-primary)]">
          Card
        </h1>
        <p className="text-[var(--color-text-secondary)]">
          Card komponenta sa kompozabilnom strukturom. Koristi CardHeader, CardContent, CardFooter i druge podkomponente za fleksibilno slaganje.
        </p>
      </div>

      {/* Variants */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Varijante
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card variant="elevated">
            <CardHeader>
              <CardTitle>Elevated</CardTitle>
              <CardDescription>Kartica sa sjenom</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-[var(--color-text-secondary)]">
                Koristi se za izdvojeni sadržaj koji treba privući pažnju.
              </p>
            </CardContent>
          </Card>

          <Card variant="outlined">
            <CardHeader>
              <CardTitle>Outlined</CardTitle>
              <CardDescription>Kartica sa bordurom</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-[var(--color-text-secondary)]">
                Koristi se za grupiranje povezanog sadržaja.
              </p>
            </CardContent>
          </Card>

          <Card variant="filled">
            <CardHeader>
              <CardTitle>Filled</CardTitle>
              <CardDescription>Kartica sa pozadinom</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-[var(--color-text-secondary)]">
                Koristi se za sekundarni sadržaj.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* With Footer */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Sa footer akcijama
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card variant="elevated">
            <CardHeader>
              <CardTitle>Narudžba #12345</CardTitle>
              <CardDescription>Kreirana: 15.01.2024</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-[var(--color-text-secondary)]">
                <p>Status: <Badge variant="info">U obradi</Badge></p>
                <p>Ukupno: <span className="font-semibold text-[var(--color-text-primary)]">245,00 KM</span></p>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm">Detalji</Button>
              <Button variant="primary" size="sm">Prati dostavu</Button>
            </CardFooter>
          </Card>

          <Card variant="outlined">
            <CardHeader>
              <CardTitle>Pretplata Premium</CardTitle>
              <CardDescription>Mjesečni plan</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-3xl font-bold text-[var(--color-text-primary)]">49,99 KM<span className="text-sm font-normal text-[var(--color-text-tertiary)]">/mjesečno</span></p>
                <ul className="space-y-1 text-sm text-[var(--color-text-secondary)]">
                  <li>Neograničeni pristup</li>
                  <li>Prioritetna podrška</li>
                  <li>Ekskluzivne ponude</li>
                </ul>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="primary" fullWidth>Pretplati se</Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Hoverable Cards */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Hoverable kartice
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {['Kategorija 1', 'Kategorija 2', 'Kategorija 3'].map((cat, i) => (
            <Card key={i} variant="elevated" hoverable clickable>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-[var(--color-text-primary)]">{cat}</h3>
                    <p className="text-sm text-[var(--color-text-secondary)]">125 proizvoda</p>
                  </div>
                  <span className="text-[var(--color-text-tertiary)]">→</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* With Image */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Sa slikom (Product Card primjer)
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { name: 'Laptop Pro 15"', price: '1.899,00 KM', badge: 'Novo' },
            { name: 'Wireless Mouse', price: '79,00 KM', badge: '-20%' },
            { name: 'Mechanical Keyboard', price: '149,00 KM', badge: 'Bestseller' },
          ].map((product, i) => (
            <Card key={i} variant="elevated" hoverable>
              <CardImage
                src={`https://placehold.co/400x300/e5e7eb/9ca3af?text=Product+${i + 1}`}
                alt={product.name}
                aspectRatio="4/3"
              />
              <CardContent>
                <div className="mb-2 flex items-start justify-between">
                  <h3 className="font-semibold text-[var(--color-text-primary)]">{product.name}</h3>
                  <Badge variant={product.badge === '-20%' ? 'error' : product.badge === 'Bestseller' ? 'success' : 'primary'} size="sm">
                    {product.badge}
                  </Badge>
                </div>
                <p className="mb-4 text-lg font-bold text-[var(--color-primary-500)]">{product.price}</p>
                <div className="flex gap-2">
                  <Button variant="primary" size="sm" fullWidth leftIcon={<CartIcon />}>
                    U košaricu
                  </Button>
                  <Button variant="outline" size="sm">
                    <HeartIcon />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Simple Padding Card */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Jednostavna kartica sa paddingom
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card variant="outlined" padding="sm">
            <p className="text-[var(--color-text-secondary)]">Padding: sm</p>
          </Card>
          <Card variant="outlined" padding="md">
            <p className="text-[var(--color-text-secondary)]">Padding: md</p>
          </Card>
          <Card variant="outlined" padding="lg">
            <p className="text-[var(--color-text-secondary)]">Padding: lg</p>
          </Card>
        </div>
      </section>

      {/* Complex Example */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Kompleksni primjer
        </h2>
        <div className="max-w-lg">
          <Card variant="elevated">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle>Korisnički profil</CardTitle>
                  <CardDescription>Upravljajte svojim podacima</CardDescription>
                </div>
                <button className="rounded-[var(--radius-md)] p-1 text-[var(--color-text-tertiary)] hover:bg-[var(--color-bg-tertiary)] hover:text-[var(--color-text-primary)]">
                  <MoreIcon />
                </button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-primary-100)] text-xl font-bold text-[var(--color-primary-600)]">
                  JD
                </div>
                <div>
                  <p className="font-semibold text-[var(--color-text-primary)]">John Doe</p>
                  <p className="text-sm text-[var(--color-text-secondary)]">john.doe@example.com</p>
                  <div className="mt-1 flex gap-2">
                    <Badge variant="success" size="sm" dot>Aktivan</Badge>
                    <Badge variant="primary" size="sm" outline>Premium</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="justify-between">
              <Button variant="ghost" size="sm">Odjavi se</Button>
              <Button variant="primary" size="sm">Uredi profil</Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Usage Code */}
      <section className="rounded-[var(--radius-card)] bg-[var(--color-bg-secondary)] p-6">
        <h2 className="mb-4 text-xl font-semibold text-[var(--color-text-primary)]">
          Korištenje
        </h2>
        <pre className="overflow-x-auto rounded-md bg-[var(--color-bg-tertiary)] p-4">
          <code className="text-sm text-[var(--color-text-primary)]">
{`import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardImage,
} from '@/src/components/ui/Card'

// Basic card with header and content
<Card variant="elevated">
  <CardHeader>
    <CardTitle>Naslov</CardTitle>
    <CardDescription>Opis kartice</CardDescription>
  </CardHeader>
  <CardContent>
    Sadržaj kartice
  </CardContent>
</Card>

// Card with footer actions
<Card variant="outlined">
  <CardHeader>
    <CardTitle>Naslov</CardTitle>
  </CardHeader>
  <CardContent>Sadržaj</CardContent>
  <CardFooter>
    <Button variant="outline">Otkaži</Button>
    <Button variant="primary">Potvrdi</Button>
  </CardFooter>
</Card>

// Product card with image
<Card variant="elevated" hoverable>
  <CardImage src="/image.jpg" alt="Product" aspectRatio="4/3" />
  <CardContent>
    <h3>Naziv proizvoda</h3>
    <p>99,00 KM</p>
  </CardContent>
</Card>

// Simple card with padding
<Card variant="filled" padding="md">
  Jednostavan sadržaj bez kompozicije
</Card>`}
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
            <h3 className="mb-2 font-medium text-[var(--color-text-primary)]">Card varijable</h3>
            <ul className="space-y-1 text-sm text-[var(--color-text-secondary)]">
              <li><code>--card-bg: var(--color-bg-elevated)</code></li>
              <li><code>--card-border: var(--color-border-primary)</code></li>
              <li><code>--card-shadow: var(--shadow-card)</code></li>
              <li><code>--card-shadow-hover: var(--shadow-card-hover)</code></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-2 font-medium text-[var(--color-text-primary)]">Spacing & Radius</h3>
            <ul className="space-y-1 text-sm text-[var(--color-text-secondary)]">
              <li><code>--card-padding: var(--spacing-6)</code></li>
              <li><code>--card-radius: var(--radius-card)</code></li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

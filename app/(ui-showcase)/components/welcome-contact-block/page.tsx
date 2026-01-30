import {
  WelcomeContactBlock,
  WelcomeHeader,
  DepartmentContactCard,
  SalesRepresentativeCard,
  ContactItem,
  type DepartmentContact,
  type SalesRepresentativeProps,
} from '@/src/components/ui/WelcomeContactBlock'

export const metadata = {
  title: 'Welcome Contact Block - Components',
  description: 'Komponenta za prikaz pozdravne poruke i kontakt informacija',
}

// Sample data
const sampleDepartments: DepartmentContact[] = [
  {
    title: 'Prodaja',
    contacts: [
      { type: 'phone', value: '+381 11 123-4567' },
      { type: 'email', value: 'sales@elektro.hr' },
      { type: 'whatsapp', value: '+381 64 123-4569' },
    ],
  },
  {
    title: 'Računovodstvo',
    contacts: [
      { type: 'phone', value: '+381 11 123-4568' },
      { type: 'email', value: 'accounting@elektro.hr' },
    ],
  },
]

const sampleRepresentatives: SalesRepresentativeProps[] = [
  {
    name: 'Darija Zdrilić',
    role: 'Komercijalista',
    avatarSrc: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
    phone: '+385 23 790 004',
    email: 'darija.zdrilic@aleta.hr',
  },
]

export default function WelcomeContactBlockPage() {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-12">
        <h1 className="mb-2 text-3xl font-bold text-[var(--color-text-primary)]">
          Welcome Contact Block
        </h1>
        <p className="text-[var(--color-text-secondary)]">
          Komponenta za prikaz pozdravne poruke, kontakata odjeljenja i prodajnih predstavnika na dashboardu korisnika.
        </p>
      </div>

      {/* Full Component Example */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Kompletna komponenta
        </h2>
        <div className="rounded-[var(--radius-lg)] border border-[var(--color-border-primary)] bg-[var(--color-bg-primary)] p-6">
          <WelcomeContactBlock
            userName="ismet glumcevic"
            departments={sampleDepartments}
            representatives={sampleRepresentatives}
          />
        </div>
      </section>

      {/* WelcomeHeader Only */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          WelcomeHeader
        </h2>
        <p className="mb-4 text-[var(--color-text-secondary)]">
          Pozdravna poruka sa imenom korisnika i opcionalnim podnaslovom.
        </p>
        <div className="space-y-6">
          <div className="rounded-[var(--radius-lg)] border border-[var(--color-border-primary)] p-6">
            <WelcomeHeader
              userName="Marko Markovic"
              subtitle="za bilo kakva pitanja, slobodno se obratite putem Whatsappa, emaila ili telefona."
            />
          </div>
          <div className="rounded-[var(--radius-lg)] border border-[var(--color-border-primary)] p-6">
            <WelcomeHeader userName="Ana Anic" />
          </div>
        </div>
      </section>

      {/* ContactItem */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          ContactItem
        </h2>
        <p className="mb-4 text-[var(--color-text-secondary)]">
          Pojedinacna kontakt stavka sa ikonom. Podrzava telefon, email i WhatsApp.
        </p>
        <div className="flex flex-wrap gap-8">
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-medium text-[var(--color-text-tertiary)]">Telefon</h3>
            <ContactItem type="phone" value="+381 11 123-4567" />
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-medium text-[var(--color-text-tertiary)]">Email</h3>
            <ContactItem type="email" value="info@example.com" />
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-medium text-[var(--color-text-tertiary)]">WhatsApp</h3>
            <ContactItem type="whatsapp" value="+381 64 123-4569" />
          </div>
        </div>
      </section>

      {/* DepartmentContactCard */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          DepartmentContactCard
        </h2>
        <p className="mb-4 text-[var(--color-text-secondary)]">
          Kartica za prikaz kontakata jednog odjeljenja.
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <DepartmentContactCard
            title="Prodaja"
            contacts={[
              { type: 'phone', value: '+381 11 123-4567' },
              { type: 'email', value: 'sales@example.com' },
              { type: 'whatsapp', value: '+381 64 123-4569' },
            ]}
          />
          <DepartmentContactCard
            title="Računovodstvo"
            contacts={[
              { type: 'phone', value: '+381 11 123-4568' },
              { type: 'email', value: 'accounting@example.com' },
            ]}
          />
          <DepartmentContactCard
            title="Tehnička podrška"
            contacts={[
              { type: 'phone', value: '+381 11 123-4570' },
              { type: 'email', value: 'support@example.com' },
            ]}
          />
        </div>
      </section>

      {/* SalesRepresentativeCard */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          SalesRepresentativeCard
        </h2>
        <p className="mb-4 text-[var(--color-text-secondary)]">
          Kartica prodajnog predstavnika sa avatarem, ulogom i kontaktima.
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <SalesRepresentativeCard
            representative={{
              name: 'Darija Zdrilić',
              role: 'Komercijalista',
              avatarSrc: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
              phone: '+385 23 790 004',
              email: 'darija.zdrilic@aleta.hr',
            }}
          />
          <SalesRepresentativeCard
            representative={{
              name: 'Ivan Horvat',
              role: 'Voditelj prodaje',
              avatarSrc: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
              phone: '+385 23 790 005',
              email: 'ivan.horvat@aleta.hr',
            }}
          />
          <SalesRepresentativeCard
            representative={{
              name: 'Marija Novak',
              role: 'Account Manager',
              phone: '+385 23 790 006',
              email: 'marija.novak@aleta.hr',
            }}
          />
        </div>
      </section>

      {/* Multiple Representatives */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Vise predstavnika
        </h2>
        <div className="rounded-[var(--radius-lg)] border border-[var(--color-border-primary)] bg-[var(--color-bg-primary)] p-6">
          <WelcomeContactBlock
            userName="Petar Petrovic"
            subtitle="Vasi dodijeljeni prodajni predstavnici su tu za vas."
            departments={[]}
            representatives={[
              {
                name: 'Darija Zdrilić',
                role: 'Komercijalista',
                avatarSrc: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
                phone: '+385 23 790 004',
                email: 'darija.zdrilic@aleta.hr',
              },
              {
                name: 'Ivan Horvat',
                role: 'Voditelj prodaje',
                avatarSrc: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
                phone: '+385 23 790 005',
                email: 'ivan.horvat@aleta.hr',
              },
            ]}
          />
        </div>
      </section>

      {/* Only Departments */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Samo odjeljenja
        </h2>
        <div className="rounded-[var(--radius-lg)] border border-[var(--color-border-primary)] bg-[var(--color-bg-primary)] p-6">
          <WelcomeContactBlock
            userName="Ana Anic"
            subtitle="Kontaktirajte nas za bilo kakva pitanja u vezi narucivanja."
            departments={[
              {
                title: 'Prodaja',
                contacts: [
                  { type: 'phone', value: '+381 11 123-4567' },
                  { type: 'email', value: 'sales@example.com' },
                ],
              },
              {
                title: 'Logistika',
                contacts: [
                  { type: 'phone', value: '+381 11 123-4571' },
                  { type: 'email', value: 'logistika@example.com' },
                ],
              },
              {
                title: 'Reklamacije',
                contacts: [
                  { type: 'phone', value: '+381 11 123-4572' },
                  { type: 'email', value: 'reklamacije@example.com' },
                ],
              },
            ]}
            representatives={[]}
          />
        </div>
      </section>

      {/* Usage Code */}
      <section className="rounded-[var(--radius-card)] bg-[var(--color-bg-secondary)] p-6">
        <h2 className="mb-4 text-xl font-semibold text-[var(--color-text-primary)]">
          Koristenje
        </h2>
        <pre className="overflow-x-auto rounded-md bg-[var(--color-bg-tertiary)] p-4">
          <code className="text-sm text-[var(--color-text-primary)]">
{`import {
  WelcomeContactBlock,
  WelcomeHeader,
  DepartmentContactCard,
  SalesRepresentativeCard,
  ContactItem,
} from '@/src/components/ui/WelcomeContactBlock'

// Kompletna komponenta
<WelcomeContactBlock
  userName="Ismet Glumcevic"
  subtitle="Za bilo kakva pitanja..."
  departments={[
    {
      title: 'Prodaja',
      contacts: [
        { type: 'phone', value: '+381 11 123-4567' },
        { type: 'email', value: 'sales@example.com' },
      ],
    },
  ]}
  representatives={[
    {
      name: 'Darija Zdrilić',
      role: 'Komercijalista',
      phone: '+385 23 790 004',
      email: 'darija.zdrilic@aleta.hr',
    },
  ]}
/>

// Pojedinacne komponente
<WelcomeHeader userName="Korisnik" />

<DepartmentContactCard
  title="Prodaja"
  contacts={[{ type: 'phone', value: '+381 11 123-4567' }]}
/>

<SalesRepresentativeCard
  representative={{
    name: 'Ime Prezime',
    role: 'Uloga',
    phone: '+385 ...',
    email: 'email@example.com',
  }}
/>

<ContactItem type="phone" value="+381 11 123-4567" />
<ContactItem type="email" value="info@example.com" />
<ContactItem type="whatsapp" value="+381 64 123-4569" />`}
          </code>
        </pre>
      </section>

      {/* Props Table */}
      <section className="mt-8 rounded-[var(--radius-card)] bg-[var(--color-bg-secondary)] p-6">
        <h2 className="mb-4 text-xl font-semibold text-[var(--color-text-primary)]">
          WelcomeContactBlock Props
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[var(--color-border-primary)]">
                <th className="px-4 py-2 text-left font-medium text-[var(--color-text-primary)]">Prop</th>
                <th className="px-4 py-2 text-left font-medium text-[var(--color-text-primary)]">Tip</th>
                <th className="px-4 py-2 text-left font-medium text-[var(--color-text-primary)]">Default</th>
                <th className="px-4 py-2 text-left font-medium text-[var(--color-text-primary)]">Opis</th>
              </tr>
            </thead>
            <tbody className="text-[var(--color-text-secondary)]">
              <tr className="border-b border-[var(--color-border-secondary)]">
                <td className="px-4 py-2"><code>userName</code></td>
                <td className="px-4 py-2"><code>string</code></td>
                <td className="px-4 py-2">-</td>
                <td className="px-4 py-2">Ime korisnika za pozdravnu poruku</td>
              </tr>
              <tr className="border-b border-[var(--color-border-secondary)]">
                <td className="px-4 py-2"><code>subtitle</code></td>
                <td className="px-4 py-2"><code>string</code></td>
                <td className="px-4 py-2">Default tekst</td>
                <td className="px-4 py-2">Podnaslov ispod pozdrava</td>
              </tr>
              <tr className="border-b border-[var(--color-border-secondary)]">
                <td className="px-4 py-2"><code>departments</code></td>
                <td className="px-4 py-2"><code>DepartmentContact[]</code></td>
                <td className="px-4 py-2">-</td>
                <td className="px-4 py-2">Lista kontakata odjeljenja</td>
              </tr>
              <tr className="border-b border-[var(--color-border-secondary)]">
                <td className="px-4 py-2"><code>representatives</code></td>
                <td className="px-4 py-2"><code>SalesRepresentativeProps[]</code></td>
                <td className="px-4 py-2">-</td>
                <td className="px-4 py-2">Lista prodajnih predstavnika</td>
              </tr>
              <tr className="border-b border-[var(--color-border-secondary)]">
                <td className="px-4 py-2"><code>departmentsLabel</code></td>
                <td className="px-4 py-2"><code>string</code></td>
                <td className="px-4 py-2">{'"Kontakti odjeljenja"'}</td>
                <td className="px-4 py-2">Naslov sekcije odjeljenja</td>
              </tr>
              <tr>
                <td className="px-4 py-2"><code>representativesLabel</code></td>
                <td className="px-4 py-2"><code>string</code></td>
                <td className="px-4 py-2">{'"Vaši prodajni predstavnici"'}</td>
                <td className="px-4 py-2">Naslov sekcije predstavnika</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}

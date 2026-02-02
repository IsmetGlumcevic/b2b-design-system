'use client'

import { NewsletterSection } from '@/src/components/ui/NewsletterSection'

export default function NewsletterSectionShowcase() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-secondary)]">
      {/* Header */}
      <div className="border-b border-[var(--color-border-primary)] bg-[var(--color-bg-primary)] px-8 py-6">
        <h1 className="text-3xl font-bold text-[var(--color-text-primary)]">NewsletterSection</h1>
        <p className="mt-2 text-[var(--color-text-secondary)]">
          Komponenta za prijavu na newsletter s različitim pozadinama i layoutima.
        </p>
      </div>

      {/* Examples */}
      <div className="space-y-0 pb-16">
        {/* Dark background - Horizontal */}
        <section>
          <div className="px-8 py-4">
            <h2 className="text-xl font-semibold text-[var(--color-text-primary)]">Tamna pozadina - Horizontalni layout</h2>
            <p className="text-sm text-[var(--color-text-secondary)]">Standardna verzija za footer ili sekcije</p>
          </div>
          <NewsletterSection
            title="Budite u toku"
            subtitle="Prijavite se na newsletter i prvi saznajte za nove proizvode, akcije i ekskluzivne ponude."
            buttonText="Prijavi se"
            background="dark"
            layout="horizontal"
            consentText="Prijavom prihvaćate našu politiku privatnosti. Možete se odjaviti u bilo kojem trenutku."
            onSubmit={async (email) => {
              console.log('Newsletter signup:', email)
              await new Promise(resolve => setTimeout(resolve, 1000))
            }}
          />
        </section>

        {/* Primary background */}
        <section>
          <div className="px-8 py-4">
            <h2 className="text-xl font-semibold text-[var(--color-text-primary)]">Primarna pozadina</h2>
            <p className="text-sm text-[var(--color-text-secondary)]">Istaknuta verzija u boji brenda</p>
          </div>
          <NewsletterSection
            title="Ne propustite akcije!"
            subtitle="Ekskluzivne ponude samo za pretplatnike"
            buttonText="Pretplati se"
            background="primary"
            layout="horizontal"
            onSubmit={async (email) => {
              console.log('Newsletter signup:', email)
            }}
          />
        </section>

        {/* Vertical layout - Light */}
        <section>
          <div className="px-8 py-4">
            <h2 className="text-xl font-semibold text-[var(--color-text-primary)]">Vertikalni layout - Svijetla pozadina</h2>
            <p className="text-sm text-[var(--color-text-secondary)]">Centrirana verzija za posebne sekcije</p>
          </div>
          <NewsletterSection
            title="Prijavite se na newsletter"
            subtitle="Jednom mjesečno šaljemo pregled novosti, akcija i korisnih savjeta."
            buttonText="Prijavi me"
            background="light"
            layout="vertical"
            consentText="Vaši podaci su sigurni. Ne dijelimo ih s trećim stranama."
            onSubmit={async (email) => {
              console.log('Newsletter signup:', email)
            }}
          />
        </section>

        {/* Muted background */}
        <section>
          <div className="px-8 py-4">
            <h2 className="text-xl font-semibold text-[var(--color-text-primary)]">Siva pozadina</h2>
            <p className="text-sm text-[var(--color-text-secondary)]">Neutralna verzija za različite kontekste</p>
          </div>
          <NewsletterSection
            title="Newsletter"
            subtitle="Pratite novosti iz svijeta elektromaterijala."
            placeholder="Unesite email"
            buttonText="Pretplati"
            background="muted"
            layout="horizontal"
            onSubmit={async (email) => {
              console.log('Newsletter signup:', email)
            }}
          />
        </section>

        {/* Props Reference */}
        <section className="px-8 pt-8">
          <h2 className="mb-4 text-xl font-semibold text-[var(--color-text-primary)]">Props</h2>
          <div className="overflow-x-auto rounded-lg border border-[var(--color-border-primary)] bg-[var(--color-bg-primary)]">
            <table className="w-full text-sm">
              <thead className="border-b border-[var(--color-border-primary)] bg-[var(--color-bg-secondary)]">
                <tr>
                  <th className="px-4 py-3 text-left font-medium text-[var(--color-text-primary)]">Prop</th>
                  <th className="px-4 py-3 text-left font-medium text-[var(--color-text-primary)]">Tip</th>
                  <th className="px-4 py-3 text-left font-medium text-[var(--color-text-primary)]">Default</th>
                  <th className="px-4 py-3 text-left font-medium text-[var(--color-text-primary)]">Opis</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--color-border-primary)]">
                <tr>
                  <td className="px-4 py-3 font-mono text-[var(--color-primary-500)]">title</td>
                  <td className="px-4 py-3 text-[var(--color-text-secondary)]">string</td>
                  <td className="px-4 py-3 text-[var(--color-text-tertiary)]">{`'Prijavite se na newsletter'`}</td>
                  <td className="px-4 py-3 text-[var(--color-text-secondary)]">Naslov sekcije</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-[var(--color-primary-500)]">subtitle</td>
                  <td className="px-4 py-3 text-[var(--color-text-secondary)]">string</td>
                  <td className="px-4 py-3 text-[var(--color-text-tertiary)]">-</td>
                  <td className="px-4 py-3 text-[var(--color-text-secondary)]">Podnaslov/opis</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-[var(--color-primary-500)]">placeholder</td>
                  <td className="px-4 py-3 text-[var(--color-text-secondary)]">string</td>
                  <td className="px-4 py-3 text-[var(--color-text-tertiary)]">{`'Vaša email adresa'`}</td>
                  <td className="px-4 py-3 text-[var(--color-text-secondary)]">Placeholder za input</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-[var(--color-primary-500)]">buttonText</td>
                  <td className="px-4 py-3 text-[var(--color-text-secondary)]">string</td>
                  <td className="px-4 py-3 text-[var(--color-text-tertiary)]">{`'Prijavi se'`}</td>
                  <td className="px-4 py-3 text-[var(--color-text-secondary)]">Tekst gumba</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-[var(--color-primary-500)]">background</td>
                  <td className="px-4 py-3 text-[var(--color-text-secondary)]">{`'light' | 'dark' | 'primary' | 'muted'`}</td>
                  <td className="px-4 py-3 text-[var(--color-text-tertiary)]">{`'dark'`}</td>
                  <td className="px-4 py-3 text-[var(--color-text-secondary)]">Boja pozadine</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-[var(--color-primary-500)]">layout</td>
                  <td className="px-4 py-3 text-[var(--color-text-secondary)]">{`'horizontal' | 'vertical'`}</td>
                  <td className="px-4 py-3 text-[var(--color-text-tertiary)]">{`'horizontal'`}</td>
                  <td className="px-4 py-3 text-[var(--color-text-secondary)]">Layout varijanta</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-[var(--color-primary-500)]">onSubmit</td>
                  <td className="px-4 py-3 text-[var(--color-text-secondary)]">{`(email: string) => void | Promise<void>`}</td>
                  <td className="px-4 py-3 text-[var(--color-text-tertiary)]">-</td>
                  <td className="px-4 py-3 text-[var(--color-text-secondary)]">Handler za submit</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-[var(--color-primary-500)]">consentText</td>
                  <td className="px-4 py-3 text-[var(--color-text-secondary)]">string</td>
                  <td className="px-4 py-3 text-[var(--color-text-tertiary)]">-</td>
                  <td className="px-4 py-3 text-[var(--color-text-secondary)]">Tekst za GDPR pristanak</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  )
}

import {
  Footer,
  FooterBrand,
  FooterColumn,
  FooterLinks,
  FooterBottom,
  SocialIcons,
  PaymentMethods,
} from '@/src/components/ui/layout/footer'
import type { FooterLink, SocialLink, PaymentMethod } from '@/src/components/ui/layout/footer'

/* ============================================
   FOOTER SHOWCASE DATA
   ============================================ */

const companyLinks: FooterLink[] = [
  { label: 'O nama', href: '/o-nama' },
  { label: 'Karijere', href: '/karijere' },
  { label: 'Partneri', href: '/partneri' },
  { label: 'Blog', href: '/blog' },
  { label: 'Press', href: '/press' },
]

const customerLinks: FooterLink[] = [
  { label: 'Kontakt', href: '/kontakt' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Načini plaćanja', href: '/nacini-placanja' },
  { label: 'Dostava', href: '/dostava' },
  { label: 'Povrat i reklamacije', href: '/povrat' },
]

const catalogLinks: FooterLink[] = [
  { label: 'Svi proizvodi', href: '/proizvodi' },
  { label: 'Akcije', href: '/akcije' },
  { label: 'Novi proizvodi', href: '/novo' },
  { label: 'Najprodavanije', href: '/najprodavanije' },
  { label: 'Brendovi', href: '/brendovi' },
]

const b2bLinks: FooterLink[] = [
  { label: 'B2B Portal', href: '/b2b' },
  { label: 'Veleprodaja', href: '/veleprodaja' },
  { label: 'Registracija firme', href: '/registracija-firme' },
  { label: 'Cjenovnici', href: '/cjenovnici' },
  { label: 'Katalozi', href: '/katalozi' },
]

const socialLinks: SocialLink[] = [
  { platform: 'facebook', href: 'https://facebook.com' },
  { platform: 'instagram', href: 'https://instagram.com' },
  { platform: 'twitter', href: 'https://twitter.com' },
  { platform: 'linkedin', href: 'https://linkedin.com' },
  { platform: 'youtube', href: 'https://youtube.com' },
]

const paymentMethods: PaymentMethod[] = [
  { type: 'visa' },
  { type: 'mastercard' },
  { type: 'maestro' },
  { type: 'paypal' },
  { type: 'apple-pay' },
  { type: 'google-pay' },
  { type: 'bank-transfer' },
]

const legalLinks: FooterLink[] = [
  { label: 'Politika privatnosti', href: '/privatnost' },
  { label: 'Uvjeti korištenja', href: '/uvjeti' },
  { label: 'Kolačići', href: '/kolacici' },
]

/* ============================================
   SHOWCASE PAGE
   ============================================ */

export default function FooterShowcasePage() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <div className="border-b border-[var(--color-border-primary)] bg-[var(--color-bg-primary)] px-8 py-12">
        <h1 className="mb-4 text-3xl font-bold text-[var(--color-text-primary)]">
          Footer
        </h1>
        <p className="max-w-2xl text-lg text-[var(--color-text-secondary)]">
          Komponente za kreiranje footer-a: Footer, FooterColumn, FooterLinks,
          SocialIcons, PaymentMethods i FooterBottom.
        </p>
      </div>

      {/* Showcase Sections */}
      <div className="space-y-16 p-8">
        {/* Full Footer Example - Dark */}
        <section>
          <h2 className="mb-4 text-xl font-semibold text-[var(--color-text-primary)]">
            Kompletan Footer (Dark)
          </h2>
          <p className="mb-6 text-[var(--color-text-secondary)]">
            Prikaz kompletnog footer-a sa svim komponentama.
          </p>

          <div className="overflow-hidden rounded-lg border border-[var(--color-border-primary)]">
            <Footer variant="dark">
              {/* Main columns grid - responsive: 1 col mobile, 2 col sm, 3 col md/tablet, 5 col lg */}
              <div className="mb-12 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                {/* Brand / Logo column */}
                <div className="sm:col-span-2 md:col-span-3 lg:col-span-1">
                  <FooterBrand
                    name="ELEKTROMATERIJAL.net"
                    tagline="#elektromaterijal #sve #odmah"
                    description="Vaš pouzdani partner za elektromaterijal. Brza dostava, kvalitetni proizvodi, stručna podrška."
                    href="/"
                    colorScheme="dark"
                    className="mb-6 lg:mb-0"
                  />
                  <SocialIcons
                    links={socialLinks}
                    colorScheme="dark"
                    size="md"
                    className="mt-4 lg:mt-6"
                  />
                </div>

                <FooterColumn title="Kompanija" colorScheme="dark">
                  <FooterLinks links={companyLinks} colorScheme="dark" />
                </FooterColumn>

                <FooterColumn title="Korisnička podrška" colorScheme="dark">
                  <FooterLinks links={customerLinks} colorScheme="dark" />
                </FooterColumn>

                <FooterColumn title="Katalog" colorScheme="dark">
                  <FooterLinks links={catalogLinks} colorScheme="dark" />
                </FooterColumn>

                <FooterColumn title="B2B" colorScheme="dark">
                  <FooterLinks links={b2bLinks} colorScheme="dark" />
                </FooterColumn>
              </div>

              {/* Payment methods */}
              <div className="mb-8">
                <p className="mb-3 text-sm font-medium text-[var(--footer-text-heading)]">
                  Prihvaćamo
                </p>
                <PaymentMethods methods={paymentMethods} colorScheme="dark" />
              </div>

              {/* Footer bottom */}
              <FooterBottom
                copyright="© 2024 ELEKTROMATERIJAL.net. Sva prava zadržana."
                legalLinks={legalLinks}
                colorScheme="dark"
              />
            </Footer>
          </div>
        </section>

        {/* Full Footer Example - Light */}
        <section>
          <h2 className="mb-4 text-xl font-semibold text-[var(--color-text-primary)]">
            Kompletan Footer (Light)
          </h2>
          <p className="mb-6 text-[var(--color-text-secondary)]">
            Svijetla varijanta footer-a za stranice sa svijetlom pozadinom.
          </p>

          <div className="overflow-hidden rounded-lg border border-[var(--color-border-primary)]">
            <Footer variant="light">
              {/* Responsive: 1 col mobile, 2 col sm, 3 col md/tablet, 4 col lg */}
              <div className="mb-12 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <FooterColumn title="Kompanija" colorScheme="light">
                  <FooterLinks links={companyLinks} colorScheme="light" />
                </FooterColumn>

                <FooterColumn title="Korisnička podrška" colorScheme="light">
                  <FooterLinks links={customerLinks} colorScheme="light" />
                </FooterColumn>

                <FooterColumn title="Katalog" colorScheme="light">
                  <FooterLinks links={catalogLinks} colorScheme="light" />
                </FooterColumn>

                <div>
                  <FooterColumn title="Pratite nas" colorScheme="light">
                    <SocialIcons
                      links={socialLinks}
                      colorScheme="light"
                      size="md"
                    />
                  </FooterColumn>
                </div>
              </div>

              <FooterBottom
                copyright="© 2024 ELEKTROMATERIJAL.net. Sva prava zadržana."
                legalLinks={legalLinks}
                colorScheme="light"
              />
            </Footer>
          </div>
        </section>

        {/* Individual Components */}
        <section>
          <h2 className="mb-4 text-xl font-semibold text-[var(--color-text-primary)]">
            Pojedinačne komponente
          </h2>

          <div className="space-y-8">
            {/* FooterBrand */}
            <div className="rounded-lg border border-[var(--color-border-primary)] bg-[var(--footer-bg)] p-6">
              <h3 className="mb-4 text-lg font-medium text-[var(--color-text-inverse)]">
                FooterBrand
              </h3>
              <FooterBrand
                name="ELEKTROMATERIJAL.net"
                tagline="#elektromaterijal #sve #odmah"
                description="Vaš pouzdani partner za elektromaterijal."
                href="/"
                colorScheme="dark"
              />
            </div>

            {/* FooterColumn + FooterLinks */}
            <div className="rounded-lg border border-[var(--color-border-primary)] bg-[var(--footer-bg)] p-6">
              <h3 className="mb-4 text-lg font-medium text-[var(--color-text-inverse)]">
                FooterColumn + FooterLinks
              </h3>
              <div className="flex flex-wrap gap-12">
                <FooterColumn title="Kompanija" colorScheme="dark">
                  <FooterLinks links={companyLinks} colorScheme="dark" />
                </FooterColumn>
                <FooterColumn title="Podrška" colorScheme="dark">
                  <FooterLinks
                    links={customerLinks.slice(0, 3)}
                    colorScheme="dark"
                    size="sm"
                  />
                </FooterColumn>
              </div>
            </div>

            {/* SocialIcons */}
            <div className="rounded-lg border border-[var(--color-border-primary)] p-6">
              <h3 className="mb-4 text-lg font-medium text-[var(--color-text-primary)]">
                SocialIcons
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="w-20 text-sm text-[var(--color-text-secondary)]">
                    Small:
                  </span>
                  <SocialIcons
                    links={socialLinks}
                    colorScheme="light"
                    size="sm"
                  />
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-20 text-sm text-[var(--color-text-secondary)]">
                    Medium:
                  </span>
                  <SocialIcons
                    links={socialLinks}
                    colorScheme="light"
                    size="md"
                  />
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-20 text-sm text-[var(--color-text-secondary)]">
                    Large:
                  </span>
                  <SocialIcons
                    links={socialLinks}
                    colorScheme="light"
                    size="lg"
                  />
                </div>
              </div>
            </div>

            {/* PaymentMethods */}
            <div className="rounded-lg border border-[var(--color-border-primary)] p-6">
              <h3 className="mb-4 text-lg font-medium text-[var(--color-text-primary)]">
                PaymentMethods
              </h3>
              <PaymentMethods methods={paymentMethods} colorScheme="light" />
            </div>

            {/* FooterBottom */}
            <div className="rounded-lg border border-[var(--color-border-primary)] bg-[var(--footer-bg)]">
              <div className="p-6">
                <h3 className="mb-4 text-lg font-medium text-[var(--color-text-inverse)]">
                  FooterBottom
                </h3>
              </div>
              <FooterBottom
                copyright="© 2024 Aleta d.o.o. Sva prava zadržana."
                legalLinks={legalLinks}
                colorScheme="dark"
              />
            </div>
          </div>
        </section>

        {/* Usage Code Examples */}
        <section>
          <h2 className="mb-4 text-xl font-semibold text-[var(--color-text-primary)]">
            Primjer korištenja
          </h2>
          <pre className="overflow-x-auto rounded-lg bg-[var(--color-neutral-900)] p-6 text-sm text-[var(--color-text-inverse)]">
            <code>{`import {
  Footer,
  FooterColumn,
  FooterLinks,
  FooterBottom,
  SocialIcons,
  PaymentMethods,
} from '@/src/components/ui/layout/footer'

// Primjer
<Footer variant="dark">
  <div className="grid grid-cols-4 gap-8 mb-12">
    <FooterColumn title="Kompanija">
      <FooterLinks links={companyLinks} />
    </FooterColumn>
    <FooterColumn title="Podrška">
      <FooterLinks links={supportLinks} />
    </FooterColumn>
    <FooterColumn title="Katalog">
      <FooterLinks links={catalogLinks} />
    </FooterColumn>
    <FooterColumn title="Pratite nas">
      <SocialIcons links={socialLinks} />
    </FooterColumn>
  </div>

  <div className="mb-8">
    <PaymentMethods methods={paymentMethods} />
  </div>

  <FooterBottom
    copyright="© 2024 Kompanija. Sva prava zadržana."
    legalLinks={legalLinks}
  />
</Footer>`}</code>
          </pre>
        </section>
      </div>
    </div>
  )
}

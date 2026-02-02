'use client'

import { useState } from 'react'
import { cn } from '@/src/lib/utils'
import { MegaMenu, MegaMenuCategories, MegaMenuBrands } from '@/src/components/ui/MegaMenu'
import ChevronDown from '@/src/components/ui/icons/Line/Arrows/ChevronDown'
import type { Category, Brand } from '@/src/components/ui/layout/header'

export default function MegaMenuShowcasePage() {
  const [categoriesOpen, setCategoriesOpen] = useState(false)
  const [brandsOpen, setBrandsOpen] = useState(false)

  // Realistic elektromaterijali categories (3 levels)
  const sampleCategories: Category[] = [
    {
      id: 'kablovi',
      name: 'Kablovi i vodovi',
      slug: 'kablovi-vodovi',
      children: [
        {
          id: 'energetski',
          name: 'Energetski kablovi',
          slug: 'energetski-kablovi',
          children: [
            { id: 'nyy-j', name: 'NYY-J', slug: 'nyy-j', productCount: 45 },
            { id: 'nyy-o', name: 'NYY-O', slug: 'nyy-o', productCount: 32 },
            { id: 'nayy-j', name: 'NAYY-J', slug: 'nayy-j', productCount: 28 },
            { id: 'n2xh', name: 'N2XH', slug: 'n2xh', productCount: 18 },
          ],
        },
        {
          id: 'instalacijski',
          name: 'Instalacijski vodovi',
          slug: 'instalacijski-vodovi',
          children: [
            { id: 'pp-y', name: 'PP-Y', slug: 'pp-y', productCount: 56 },
            { id: 'pp-j', name: 'PP-J', slug: 'pp-j', productCount: 42 },
            { id: 'pgp', name: 'PGP', slug: 'pgp', productCount: 35 },
            { id: 'h07v-u', name: 'H07V-U', slug: 'h07v-u', productCount: 24 },
          ],
        },
        {
          id: 'signalni',
          name: 'Signalni kablovi',
          slug: 'signalni-kablovi',
          children: [
            { id: 'jy-st-y', name: 'JY(St)Y', slug: 'jy-st-y', productCount: 22 },
            { id: 'liycy', name: 'LiYCY', slug: 'liycy', productCount: 18 },
            { id: 'cat5e', name: 'CAT5e', slug: 'cat5e', productCount: 15 },
            { id: 'cat6', name: 'CAT6', slug: 'cat6', productCount: 12 },
          ],
        },
        {
          id: 'fleksibilni',
          name: 'Fleksibilni kablovi',
          slug: 'fleksibilni-kablovi',
          children: [
            { id: 'h05vv-f', name: 'H05VV-F', slug: 'h05vv-f', productCount: 38 },
            { id: 'h07rn-f', name: 'H07RN-F', slug: 'h07rn-f', productCount: 25 },
          ],
        },
      ],
    },
    {
      id: 'rasvjeta',
      name: 'Rasvjeta',
      slug: 'rasvjeta',
      children: [
        {
          id: 'led-rasvjeta',
          name: 'LED rasvjeta',
          slug: 'led-rasvjeta',
          children: [
            { id: 'led-paneli', name: 'LED paneli', slug: 'led-paneli', productCount: 85 },
            { id: 'led-trake', name: 'LED trake', slug: 'led-trake', productCount: 64 },
            { id: 'led-sijalice', name: 'LED sijalice', slug: 'led-sijalice', productCount: 120 },
            { id: 'led-downlight', name: 'LED downlight', slug: 'led-downlight', productCount: 45 },
          ],
        },
        {
          id: 'industrijska',
          name: 'Industrijska rasvjeta',
          slug: 'industrijska-rasvjeta',
          children: [
            { id: 'hala-reflektori', name: 'Hala reflektori', slug: 'hala-reflektori', productCount: 32 },
            { id: 'vodootporna', name: 'Vodootporna rasvjeta', slug: 'vodootporna', productCount: 28 },
            { id: 'ex-rasvjeta', name: 'Ex rasvjeta', slug: 'ex-rasvjeta', productCount: 15 },
          ],
        },
        {
          id: 'dekorativna',
          name: 'Dekorativna rasvjeta',
          slug: 'dekorativna-rasvjeta',
          children: [
            { id: 'lustri', name: 'Lustri', slug: 'lustri', productCount: 42 },
            { id: 'zidne-lampe', name: 'Zidne lampe', slug: 'zidne-lampe', productCount: 38 },
            { id: 'stolne-lampe', name: 'Stolne lampe', slug: 'stolne-lampe', productCount: 25 },
          ],
        },
      ],
    },
    {
      id: 'prekidaci-uticnice',
      name: 'Prekidači i utičnice',
      slug: 'prekidaci-uticnice',
      children: [
        {
          id: 'modularni-program',
          name: 'Modularni program',
          slug: 'modularni-program',
          children: [
            { id: 'prekidaci', name: 'Prekidači', slug: 'prekidaci', productCount: 85 },
            { id: 'uticnice', name: 'Utičnice', slug: 'uticnice', productCount: 72 },
            { id: 'okviri', name: 'Okviri', slug: 'okviri', productCount: 45 },
            { id: 'dimeri', name: 'Dimeri', slug: 'dimeri', productCount: 18 },
          ],
        },
        {
          id: 'nadgradni',
          name: 'Nadgradni program',
          slug: 'nadgradni-program',
          children: [
            { id: 'nadgradni-prekidaci', name: 'Prekidači', slug: 'nadgradni-prekidaci', productCount: 35 },
            { id: 'nadgradne-uticnice', name: 'Utičnice', slug: 'nadgradne-uticnice', productCount: 42 },
          ],
        },
        {
          id: 'industrijski',
          name: 'Industrijski program',
          slug: 'industrijski-program',
          children: [
            { id: 'cee-uticnice', name: 'CEE utičnice', slug: 'cee-uticnice', productCount: 55 },
            { id: 'cee-prikljucnice', name: 'CEE priključnice', slug: 'cee-prikljucnice', productCount: 48 },
            { id: 'razvodne-kutije', name: 'Razvodne kutije', slug: 'razvodne-kutije', productCount: 62 },
          ],
        },
      ],
    },
    {
      id: 'osiguraci-zastita',
      name: 'Osigurači i zaštita',
      slug: 'osiguraci-zastita',
      children: [
        {
          id: 'automatski-osiguraci',
          name: 'Automatski osigurači',
          slug: 'automatski-osiguraci',
          children: [
            { id: 'b-karakteristika', name: 'B karakteristika', slug: 'b-karakteristika', productCount: 45 },
            { id: 'c-karakteristika', name: 'C karakteristika', slug: 'c-karakteristika', productCount: 52 },
            { id: 'd-karakteristika', name: 'D karakteristika', slug: 'd-karakteristika', productCount: 28 },
          ],
        },
        {
          id: 'fid-sklopke',
          name: 'FID sklopke',
          slug: 'fid-sklopke',
          children: [
            { id: 'fid-30ma', name: 'FID 30mA', slug: 'fid-30ma', productCount: 35 },
            { id: 'fid-300ma', name: 'FID 300mA', slug: 'fid-300ma', productCount: 28 },
            { id: 'rcbo', name: 'RCBO', slug: 'rcbo', productCount: 42 },
          ],
        },
        {
          id: 'prenaponska-zastita',
          name: 'Prenaponska zaštita',
          slug: 'prenaponska-zastita',
          children: [
            { id: 'tip-1', name: 'Tip 1', slug: 'spd-tip-1', productCount: 15 },
            { id: 'tip-2', name: 'Tip 2', slug: 'spd-tip-2', productCount: 22 },
            { id: 'tip-1-2', name: 'Tip 1+2', slug: 'spd-tip-1-2', productCount: 18 },
          ],
        },
      ],
    },
    {
      id: 'razvodne-kutije-ormari',
      name: 'Razvodne kutije i ormari',
      slug: 'razvodne-kutije-ormari',
      children: [
        {
          id: 'razvodne-kutije',
          name: 'Razvodne kutije',
          slug: 'razvodne-kutije',
          children: [
            { id: 'ugradne-kutije', name: 'Ugradne kutije', slug: 'ugradne-kutije', productCount: 48 },
            { id: 'nadgradne-kutije', name: 'Nadgradne kutije', slug: 'nadgradne-kutije', productCount: 42 },
            { id: 'vodootporne-kutije', name: 'Vodootporne kutije', slug: 'vodootporne-kutije', productCount: 35 },
          ],
        },
        {
          id: 'razvodne-table',
          name: 'Razvodne table',
          slug: 'razvodne-table',
          children: [
            { id: 'ugradne-table', name: 'Ugradne table', slug: 'ugradne-table', productCount: 55 },
            { id: 'nadgradne-table', name: 'Nadgradne table', slug: 'nadgradne-table', productCount: 48 },
          ],
        },
        {
          id: 'elektro-ormari',
          name: 'Elektro ormari',
          slug: 'elektro-ormari',
          children: [
            { id: 'metalni-ormari', name: 'Metalni ormari', slug: 'metalni-ormari', productCount: 32 },
            { id: 'plastični-ormari', name: 'Plastični ormari', slug: 'plasticni-ormari', productCount: 28 },
          ],
        },
      ],
    },
    {
      id: 'alati',
      name: 'Alati',
      slug: 'alati',
      children: [
        {
          id: 'rucni-alati',
          name: 'Ručni alati',
          slug: 'rucni-alati',
          children: [
            { id: 'klesta', name: 'Kliješta', slug: 'klijesta', productCount: 65 },
            { id: 'odvijaci', name: 'Odvijači', slug: 'odvijaci', productCount: 85 },
            { id: 'spajalice', name: 'Spajalice', slug: 'spajalice', productCount: 42 },
          ],
        },
        {
          id: 'mjerni-instrumenti',
          name: 'Mjerni instrumenti',
          slug: 'mjerni-instrumenti',
          children: [
            { id: 'multimetri', name: 'Multimetri', slug: 'multimetri', productCount: 35 },
            { id: 'klampmetri', name: 'Klamp metri', slug: 'klampmetri', productCount: 28 },
            { id: 'ispitivaci', name: 'Ispitivači', slug: 'ispitivaci', productCount: 22 },
          ],
        },
      ],
    },
  ]

  // Sample brands (30 brands for elektromaterijali)
  const sampleBrands: Brand[] = [
    { id: '1', name: 'Schneider Electric', slug: 'schneider-electric' },
    { id: '2', name: 'Legrand', slug: 'legrand' },
    { id: '3', name: 'OBO Bettermann', slug: 'obo-bettermann' },
    { id: '4', name: 'Gewiss', slug: 'gewiss' },
    { id: '5', name: 'ETI', slug: 'eti' },
    { id: '6', name: 'Phoenix Contact', slug: 'phoenix-contact' },
    { id: '7', name: 'Weidmüller', slug: 'weidmuller' },
    { id: '8', name: 'Wago', slug: 'wago' },
    { id: '9', name: 'Cembre', slug: 'cembre' },
    { id: '10', name: 'Helukabel', slug: 'helukabel' },
    { id: '11', name: 'Elko', slug: 'elko' },
    { id: '12', name: 'Finder', slug: 'finder' },
    { id: '13', name: 'Mean Well', slug: 'mean-well' },
    { id: '14', name: 'Osram', slug: 'osram' },
    { id: '15', name: 'Philips', slug: 'philips' },
    { id: '16', name: 'ABB', slug: 'abb' },
    { id: '17', name: 'Siemens', slug: 'siemens' },
    { id: '18', name: 'Hager', slug: 'hager' },
    { id: '19', name: 'Schrack', slug: 'schrack' },
    { id: '20', name: 'General Electric', slug: 'general-electric' },
    { id: '21', name: 'Eaton', slug: 'eaton' },
    { id: '22', name: 'Rittal', slug: 'rittal' },
    { id: '23', name: 'Lapp Kabel', slug: 'lapp-kabel' },
    { id: '24', name: 'Nexans', slug: 'nexans' },
    { id: '25', name: 'Prysmian', slug: 'prysmian' },
    { id: '26', name: 'Vimar', slug: 'vimar' },
    { id: '27', name: 'BTicino', slug: 'bticino' },
    { id: '28', name: 'Jung', slug: 'jung' },
    { id: '29', name: 'Gira', slug: 'gira' },
    { id: '30', name: 'Busch-Jaeger', slug: 'busch-jaeger' },
  ]

  // Trigger button component
  const TriggerButton = ({
    label,
    isOpen,
    colorScheme = 'light',
  }: {
    label: string
    isOpen: boolean
    colorScheme?: 'light' | 'dark'
  }) => (
    <span
      className={cn(
        'inline-flex items-center gap-[var(--spacing-1)]',
        'px-[var(--spacing-3)] py-[var(--spacing-2)]',
        'rounded-[var(--radius-button)]',
        'text-[var(--font-size-sm)] font-medium',
        'transition-colors duration-150',
        colorScheme === 'light' && [
          'text-[var(--color-text-primary)]',
          'hover:bg-[var(--color-bg-tertiary)]',
        ],
        colorScheme === 'dark' && ['text-white', 'hover:bg-[var(--color-secondary-700)]']
      )}
    >
      {label}
      <ChevronDown
        className={cn('h-4 w-4 transition-transform', isOpen && 'rotate-180')}
        aria-hidden="true"
      />
    </span>
  )

  return (
    <div className="min-h-screen bg-[var(--color-bg-secondary)]">
      {/* Page Header */}
      <div className="border-b border-[var(--color-border-primary)] bg-[var(--color-bg-primary)] px-8 py-8">
        <h1 className="mb-2 text-3xl font-bold text-[var(--color-text-primary)]">MegaMenu</h1>
        <p className="text-[var(--color-text-secondary)]">
          Mega menu komponenta za višenivosku navigaciju kategorija i brendova.
        </p>
      </div>

      <div className="p-8 space-y-16">
        {/* MegaMenu Categories - Light */}
        <section>
          <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
            MegaMenu Kategorije - Light
          </h2>
          <p className="mb-4 text-[var(--color-text-secondary)]">
            3-level navigacija kategorija sa hover interakcijom. Prikazuje kategorije →
            podkategorije → pod-podkategorije.
          </p>
          <div className="rounded-lg border border-[var(--color-border-primary)] bg-[var(--color-bg-primary)] p-6">
            <MegaMenu
              trigger={
                <TriggerButton label="Proizvodi" isOpen={categoriesOpen} colorScheme="light" />
              }
              isOpen={categoriesOpen}
              onOpenChange={setCategoriesOpen}
              colorScheme="light"
            >
              <MegaMenuCategories
                categories={sampleCategories}
                colorScheme="light"
                viewAllHref="/proizvodi"
                viewAllLabel="Pogledaj sve proizvode"
                onClose={() => setCategoriesOpen(false)}
              />
            </MegaMenu>
          </div>
        </section>

        {/* MegaMenu Categories - Dark */}
        <section>
          <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
            MegaMenu Kategorije - Dark
          </h2>
          <div className="rounded-lg bg-[var(--color-secondary-800)] p-6">
            <MegaMenu
              trigger={<TriggerButton label="Proizvodi" isOpen={false} colorScheme="dark" />}
              colorScheme="dark"
            >
              <MegaMenuCategories
                categories={sampleCategories}
                colorScheme="dark"
                viewAllHref="/proizvodi"
                viewAllLabel="Pogledaj sve proizvode"
              />
            </MegaMenu>
          </div>
        </section>

        {/* MegaMenu Brands - Light */}
        <section>
          <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
            MegaMenu Brendovi - Light
          </h2>
          <p className="mb-4 text-[var(--color-text-secondary)]">
            Grid prikaz brendova sa opcionalnim logotipima. Prikazuje ~30 brendova.
          </p>
          <div className="rounded-lg border border-[var(--color-border-primary)] bg-[var(--color-bg-primary)] p-6">
            <MegaMenu
              trigger={<TriggerButton label="Brendovi" isOpen={brandsOpen} colorScheme="light" />}
              isOpen={brandsOpen}
              onOpenChange={setBrandsOpen}
              colorScheme="light"
            >
              <MegaMenuBrands
                brands={sampleBrands}
                colorScheme="light"
                viewAllHref="/brendovi"
                viewAllLabel="Pogledaj sve brendove"
                onClose={() => setBrandsOpen(false)}
              />
            </MegaMenu>
          </div>
        </section>

        {/* MegaMenu Brands - Dark */}
        <section>
          <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
            MegaMenu Brendovi - Dark
          </h2>
          <div className="rounded-lg bg-[var(--color-secondary-800)] p-6">
            <MegaMenu
              trigger={<TriggerButton label="Brendovi" isOpen={false} colorScheme="dark" />}
              colorScheme="dark"
            >
              <MegaMenuBrands
                brands={sampleBrands}
                colorScheme="dark"
                viewAllHref="/brendovi"
                viewAllLabel="Pogledaj sve brendove"
              />
            </MegaMenu>
          </div>
        </section>

        {/* Usage Example */}
        <section>
          <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
            Primjer korištenja
          </h2>
          <div className="rounded-lg border border-[var(--color-border-primary)] bg-[var(--color-neutral-900)] p-6">
            <pre className="overflow-x-auto text-sm text-[var(--color-text-inverse)]">
              <code>{`import {
  MegaMenu,
  MegaMenuCategories,
  MegaMenuBrands,
} from '@/src/components/ui/MegaMenu'

// Categories with 3 levels
<MegaMenu
  trigger={<button>Proizvodi <ChevronDown /></button>}
  colorScheme="light"
>
  <MegaMenuCategories
    categories={categories}
    viewAllHref="/proizvodi"
    viewAllLabel="Svi proizvodi"
  />
</MegaMenu>

// Brands grid
<MegaMenu
  trigger={<button>Brendovi <ChevronDown /></button>}
  colorScheme="light"
>
  <MegaMenuBrands
    brands={brands}
    viewAllHref="/brendovi"
    viewAllLabel="Svi brendovi"
  />
</MegaMenu>`}</code>
            </pre>
          </div>
        </section>

        {/* Category Structure */}
        <section>
          <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
            Struktura kategorija (3 nivoa)
          </h2>
          <div className="rounded-lg border border-[var(--color-border-primary)] bg-[var(--color-bg-primary)] p-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[var(--color-border-primary)]">
                  <th className="py-2 text-left font-medium">Nivo</th>
                  <th className="py-2 text-left font-medium">Primjer</th>
                  <th className="py-2 text-left font-medium">Opis</th>
                </tr>
              </thead>
              <tbody className="text-[var(--color-text-secondary)]">
                <tr className="border-b border-[var(--color-border-primary)]">
                  <td className="py-2 font-mono text-xs">Level 1</td>
                  <td className="py-2">Kablovi i vodovi</td>
                  <td className="py-2">Glavna kategorija</td>
                </tr>
                <tr className="border-b border-[var(--color-border-primary)]">
                  <td className="py-2 font-mono text-xs">Level 2</td>
                  <td className="py-2">Energetski kablovi</td>
                  <td className="py-2">Podkategorija</td>
                </tr>
                <tr>
                  <td className="py-2 font-mono text-xs">Level 3</td>
                  <td className="py-2">NYY-J</td>
                  <td className="py-2">Pod-podkategorija (proizvodi)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  )
}

'use client'

import { useState } from 'react'
import { Input } from '@/src/components/ui/Input'
import { TextArea } from '@/src/components/ui/TextArea'
import { Select } from '@/src/components/ui/Select'
import { Checkbox } from '@/src/components/ui/Checkbox'
import { Radio, RadioGroup } from '@/src/components/ui/Radio'
import { Switch } from '@/src/components/ui/Switch'

export default function FormsShowcasePage() {
  const [selectValue, setSelectValue] = useState('')
  const [radioValue, setRadioValue] = useState('')
  const [checkboxChecked, setCheckboxChecked] = useState(false)
  const [switchChecked, setSwitchChecked] = useState(false)

  const selectOptions = [
    { value: 'option1', label: 'Opcija 1' },
    { value: 'option2', label: 'Opcija 2' },
    { value: 'option3', label: 'Opcija 3' },
    { value: 'option4', label: 'Opcija 4 (Onemogucena)', disabled: true },
  ]

  const radioOptions = [
    { value: 'radio1', label: 'Radio opcija 1', description: 'Opis za prvu opciju' },
    { value: 'radio2', label: 'Radio opcija 2', description: 'Opis za drugu opciju' },
    { value: 'radio3', label: 'Radio opcija 3' },
  ]

  return (
    <div className="p-8">
      <div className="mb-12">
        <h1 className="mb-2 text-3xl font-bold text-[var(--color-text-primary)]">
          Form Components
        </h1>
        <p className="text-[var(--color-text-secondary)]">
          Input, TextArea, Select, Checkbox, Radio i Switch komponente za forme.
        </p>
      </div>

      {/* Input Section */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Input
        </h2>

        <div className="space-y-8">
          {/* Sizes */}
          <div>
            <h3 className="mb-4 text-lg font-medium text-[var(--color-text-primary)]">Velicine</h3>
            <div className="flex flex-wrap items-end gap-4">
              <Input size="sm" placeholder="Small input" label="Small" />
              <Input size="md" placeholder="Medium input" label="Medium" />
              <Input size="lg" placeholder="Large input" label="Large" />
            </div>
          </div>

          {/* States */}
          <div>
            <h3 className="mb-4 text-lg font-medium text-[var(--color-text-primary)]">Stanja</h3>
            <div className="flex flex-wrap gap-4">
              <Input label="Default" placeholder="Unesite tekst..." helperText="Ovo je helper tekst" />
              <Input label="Disabled" placeholder="Onemogucen" disabled />
              <Input label="Error" placeholder="Greska" error="Ovo polje je obavezno" />
            </div>
          </div>

          {/* With Icons */}
          <div>
            <h3 className="mb-4 text-lg font-medium text-[var(--color-text-primary)]">Sa ikonama</h3>
            <div className="flex flex-wrap gap-4">
              <Input
                label="Pretraga"
                placeholder="Pretrazite..."
                leftIcon={
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                }
              />
              <Input
                label="Email"
                type="email"
                placeholder="email@primjer.com"
                rightIcon={
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                }
              />
            </div>
          </div>

          {/* Full Width */}
          <div>
            <h3 className="mb-4 text-lg font-medium text-[var(--color-text-primary)]">Puna sirina</h3>
            <Input label="Puna sirina" placeholder="Ovaj input zauzima punu sirinu..." fullWidth />
          </div>
        </div>
      </section>

      {/* TextArea Section */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          TextArea
        </h2>

        <div className="space-y-8">
          <div className="grid gap-4 md:grid-cols-2">
            <TextArea label="Default" placeholder="Unesite opis..." helperText="Maksimalno 500 karaktera" />
            <TextArea label="Sa brojaccem" placeholder="Unesite tekst..." showCount maxLength={200} />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <TextArea label="Disabled" placeholder="Onemogucen textarea" disabled />
            <TextArea label="Error" placeholder="Greska" error="Ovo polje je obavezno" />
          </div>
          <TextArea label="Puna sirina" placeholder="Ovaj textarea zauzima punu sirinu..." fullWidth showCount maxLength={500} />
        </div>
      </section>

      {/* Select Section */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Select
        </h2>

        <div className="space-y-8">
          {/* Sizes */}
          <div>
            <h3 className="mb-4 text-lg font-medium text-[var(--color-text-primary)]">Velicine</h3>
            <div className="flex flex-wrap items-end gap-4">
              <Select size="sm" label="Small" options={selectOptions} placeholder="Odaberite..." />
              <Select size="md" label="Medium" options={selectOptions} placeholder="Odaberite..." />
              <Select size="lg" label="Large" options={selectOptions} placeholder="Odaberite..." />
            </div>
          </div>

          {/* States */}
          <div>
            <h3 className="mb-4 text-lg font-medium text-[var(--color-text-primary)]">Stanja</h3>
            <div className="flex flex-wrap gap-4">
              <Select
                label="Default"
                options={selectOptions}
                placeholder="Odaberite opciju..."
                helperText="Odaberite jednu od ponudjenih opcija"
                value={selectValue}
                onChange={(e) => setSelectValue(e.target.value)}
              />
              <Select label="Disabled" options={selectOptions} placeholder="Onemogucen" disabled />
              <Select label="Error" options={selectOptions} placeholder="Greska" error="Morate odabrati opciju" />
            </div>
          </div>

          {/* With Icon */}
          <div>
            <h3 className="mb-4 text-lg font-medium text-[var(--color-text-primary)]">Sa ikonom</h3>
            <Select
              label="Kategorija"
              options={selectOptions}
              placeholder="Odaberite kategoriju..."
              leftIcon={
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
              }
            />
          </div>
        </div>
      </section>

      {/* Checkbox Section */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Checkbox
        </h2>

        <div className="space-y-8">
          {/* Sizes */}
          <div>
            <h3 className="mb-4 text-lg font-medium text-[var(--color-text-primary)]">Velicine</h3>
            <div className="flex flex-wrap items-start gap-6">
              <Checkbox size="sm" label="Small checkbox" />
              <Checkbox size="md" label="Medium checkbox" />
              <Checkbox size="lg" label="Large checkbox" />
            </div>
          </div>

          {/* States */}
          <div>
            <h3 className="mb-4 text-lg font-medium text-[var(--color-text-primary)]">Stanja</h3>
            <div className="flex flex-wrap gap-6">
              <Checkbox label="Unchecked" />
              <Checkbox label="Checked" defaultChecked />
              <Checkbox label="Indeterminate" indeterminate />
              <Checkbox label="Disabled" disabled />
              <Checkbox label="Disabled checked" disabled defaultChecked />
              <Checkbox label="Error state" error="Morate prihvatiti uvjete" />
            </div>
          </div>

          {/* With Description */}
          <div>
            <h3 className="mb-4 text-lg font-medium text-[var(--color-text-primary)]">Sa opisom</h3>
            <div className="space-y-4">
              <Checkbox
                label="Prihvatam uvjete koristenja"
                description="Klikom na ovu opciju prihvatate nase uvjete koristenja i politiku privatnosti."
                checked={checkboxChecked}
                onChange={(e) => setCheckboxChecked(e.target.checked)}
              />
              <Checkbox
                label="Primaj newsletter"
                description="Zelim primati novosti i promocije na email."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Radio Section */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Radio
        </h2>

        <div className="space-y-8">
          {/* Sizes */}
          <div>
            <h3 className="mb-4 text-lg font-medium text-[var(--color-text-primary)]">Velicine</h3>
            <div className="flex flex-wrap items-start gap-6">
              <Radio size="sm" label="Small radio" name="size-demo" value="sm" />
              <Radio size="md" label="Medium radio" name="size-demo" value="md" />
              <Radio size="lg" label="Large radio" name="size-demo" value="lg" />
            </div>
          </div>

          {/* Radio Group Vertical */}
          <div>
            <h3 className="mb-4 text-lg font-medium text-[var(--color-text-primary)]">Radio Group (Vertikalno)</h3>
            <RadioGroup
              name="vertical-demo"
              label="Odaberite opciju"
              options={radioOptions}
              value={radioValue}
              onChange={setRadioValue}
            />
          </div>

          {/* Radio Group Horizontal */}
          <div>
            <h3 className="mb-4 text-lg font-medium text-[var(--color-text-primary)]">Radio Group (Horizontalno)</h3>
            <RadioGroup
              name="horizontal-demo"
              label="Velicina paketa"
              options={[
                { value: 's', label: 'S' },
                { value: 'm', label: 'M' },
                { value: 'l', label: 'L' },
                { value: 'xl', label: 'XL' },
              ]}
              direction="horizontal"
            />
          </div>

          {/* States */}
          <div>
            <h3 className="mb-4 text-lg font-medium text-[var(--color-text-primary)]">Stanja</h3>
            <div className="flex flex-wrap gap-6">
              <Radio label="Default" name="states" value="default" />
              <Radio label="Disabled" name="states" value="disabled" disabled />
              <Radio label="Error" name="states" value="error" error="Morate odabrati opciju" />
            </div>
          </div>
        </div>
      </section>

      {/* Switch Section */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Switch
        </h2>

        <div className="space-y-8">
          {/* Sizes */}
          <div>
            <h3 className="mb-4 text-lg font-medium text-[var(--color-text-primary)]">Velicine</h3>
            <div className="flex flex-wrap items-center gap-6">
              <Switch size="sm" label="Small" />
              <Switch size="md" label="Medium" />
              <Switch size="lg" label="Large" />
            </div>
          </div>

          {/* States */}
          <div>
            <h3 className="mb-4 text-lg font-medium text-[var(--color-text-primary)]">Stanja</h3>
            <div className="flex flex-wrap gap-6">
              <Switch label="Off" />
              <Switch label="On" defaultChecked />
              <Switch label="Disabled off" disabled />
              <Switch label="Disabled on" disabled defaultChecked />
            </div>
          </div>

          {/* With Description */}
          <div>
            <h3 className="mb-4 text-lg font-medium text-[var(--color-text-primary)]">Sa opisom</h3>
            <div className="space-y-4">
              <Switch
                label="Notifikacije"
                description="Primaj push notifikacije za nove narudzbe."
                checked={switchChecked}
                onChange={(e) => setSwitchChecked(e.target.checked)}
              />
              <Switch
                label="Tamni mod"
                description="Ukljuci tamnu temu za ugodnije koristenje navecer."
                labelPosition="left"
              />
            </div>
          </div>

          {/* Without Label */}
          <div>
            <h3 className="mb-4 text-lg font-medium text-[var(--color-text-primary)]">Bez labele</h3>
            <div className="flex gap-4">
              <Switch size="sm" />
              <Switch size="md" />
              <Switch size="lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Usage Example */}
      <section className="rounded-[var(--radius-card)] bg-[var(--color-bg-secondary)] p-6">
        <h2 className="mb-4 text-xl font-semibold text-[var(--color-text-primary)]">
          Primjer koristenja
        </h2>
        <pre className="overflow-x-auto rounded-md bg-[var(--color-bg-tertiary)] p-4">
          <code className="text-sm text-[var(--color-text-primary)]">
{`import { Input, TextArea, Select, Checkbox, Radio, Switch } from '@/src/components/ui'

// Input
<Input
  label="Email"
  type="email"
  placeholder="email@primjer.com"
  error={errors.email}
/>

// TextArea
<TextArea
  label="Opis"
  placeholder="Unesite opis..."
  showCount
  maxLength={500}
/>

// Select
<Select
  label="Kategorija"
  options={[
    { value: '1', label: 'Opcija 1' },
    { value: '2', label: 'Opcija 2' },
  ]}
  placeholder="Odaberite..."
/>

// Checkbox
<Checkbox
  label="Prihvatam uvjete"
  description="Klikom prihvatate uvjete."
/>

// RadioGroup
<RadioGroup
  name="velicina"
  label="Odaberite velicinu"
  options={[
    { value: 's', label: 'S' },
    { value: 'm', label: 'M' },
    { value: 'l', label: 'L' },
  ]}
  value={size}
  onChange={setSize}
/>

// Switch
<Switch
  label="Notifikacije"
  description="Primaj obavijesti"
/>`}
          </code>
        </pre>
      </section>
    </div>
  )
}

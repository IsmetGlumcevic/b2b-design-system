'use client'

import { useState } from 'react'
import { cn } from '@/src/lib/utils'
import type { DeliveryAddress } from '@/src/lib/cart/types'

interface AddressSectionProps {
  addresses: DeliveryAddress[]
  selectedAddressId: string | null
  onSelectAddress: (id: string | null) => void
  onAddAddress: (address: Omit<DeliveryAddress, 'id'>) => void
  onRemoveAddress: (id: string) => void
  onSetDefault: (id: string) => void
}

export function AddressSection({
  addresses,
  selectedAddressId,
  onSelectAddress,
  onAddAddress,
  onRemoveAddress,
  onSetDefault,
}: AddressSectionProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="bg-[var(--color-bg-elevated)] rounded-[var(--radius-card)] border border-[var(--color-border-primary)]">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--color-border-primary)]">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[var(--color-primary-500)] text-white text-xs font-semibold">
            1
          </div>
          <h2 className="text-lg font-semibold text-[var(--color-text-primary)]">
            Adresa dostave
          </h2>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="text-sm text-[var(--color-primary-500)] hover:text-[var(--color-primary-hover)] font-medium transition-colors"
        >
          + Dodaj novu
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        {addresses.length === 0 ? (
          <div className="text-center py-8">
            <LocationIcon className="h-12 w-12 text-[var(--color-text-tertiary)] mx-auto mb-3" />
            <p className="text-sm text-[var(--color-text-secondary)] mb-4">
              Nemate spremljenih adresa
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className={cn(
                'inline-flex items-center justify-center gap-2',
                'h-10 px-4',
                'rounded-[var(--radius-button)]',
                'border border-[var(--color-primary-500)]',
                'text-sm font-medium text-[var(--color-primary-500)]',
                'hover:bg-[var(--color-primary-50)]',
                'transition-colors'
              )}
            >
              <PlusIcon className="h-4 w-4" />
              Dodaj adresu
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            {addresses.map((address) => (
              <AddressCard
                key={address.id}
                address={address}
                isSelected={selectedAddressId === address.id}
                onSelect={() => onSelectAddress(address.id)}
                onRemove={() => onRemoveAddress(address.id)}
                onSetDefault={() => onSetDefault(address.id)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Add Address Modal */}
      {isModalOpen && (
        <AddAddressModal
          onClose={() => setIsModalOpen(false)}
          onAdd={(address) => {
            onAddAddress(address)
            setIsModalOpen(false)
          }}
        />
      )}
    </div>
  )
}

interface AddressCardProps {
  address: DeliveryAddress
  isSelected: boolean
  onSelect: () => void
  onRemove: () => void
  onSetDefault: () => void
}

function AddressCard({ address, isSelected, onSelect, onRemove, onSetDefault }: AddressCardProps) {
  return (
    <div
      onClick={onSelect}
      className={cn(
        'relative p-4 rounded-[var(--radius-md)] border-2 cursor-pointer transition-all',
        isSelected
          ? 'border-[var(--color-primary-500)] bg-[var(--color-primary-50)]'
          : 'border-[var(--color-border-primary)] hover:border-[var(--color-border-hover)]'
      )}
    >
      {/* Selection indicator */}
      <div className="absolute top-4 right-4">
        <div
          className={cn(
            'w-5 h-5 rounded-full border-2 flex items-center justify-center',
            isSelected
              ? 'border-[var(--color-primary-500)] bg-[var(--color-primary-500)]'
              : 'border-[var(--color-border-primary)]'
          )}
        >
          {isSelected && <CheckIcon className="h-3 w-3 text-white" />}
        </div>
      </div>

      {/* Address content */}
      <div className="pr-8">
        <div className="flex items-center gap-2 mb-1">
          <span className="font-medium text-[var(--color-text-primary)]">
            {address.naziv}
          </span>
          {address.isDefault && (
            <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--color-secondary-100)] text-[var(--color-secondary-700)]">
              Zadano
            </span>
          )}
        </div>
        <p className="text-sm text-[var(--color-text-secondary)]">
          {address.ime} {address.prezime}
        </p>
        <p className="text-sm text-[var(--color-text-secondary)]">
          {address.adresa}
        </p>
        <p className="text-sm text-[var(--color-text-secondary)]">
          {address.postanskiBroj} {address.grad}, {address.drzava}
        </p>
        <p className="text-sm text-[var(--color-text-secondary)]">
          {address.telefon}
        </p>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3 mt-3 pt-3 border-t border-[var(--color-border-primary)]">
        {!address.isDefault && (
          <button
            onClick={(e) => {
              e.stopPropagation()
              onSetDefault()
            }}
            className="text-xs text-[var(--color-text-tertiary)] hover:text-[var(--color-primary-500)] transition-colors"
          >
            Postavi kao zadanu
          </button>
        )}
        <button
          onClick={(e) => {
            e.stopPropagation()
            onRemove()
          }}
          className="text-xs text-[var(--color-text-tertiary)] hover:text-[var(--color-error-600)] transition-colors"
        >
          Ukloni
        </button>
      </div>
    </div>
  )
}

interface AddAddressModalProps {
  onClose: () => void
  onAdd: (address: Omit<DeliveryAddress, 'id'>) => void
}

function AddAddressModal({ onClose, onAdd }: AddAddressModalProps) {
  const [formData, setFormData] = useState({
    naziv: '',
    ime: '',
    prezime: '',
    adresa: '',
    grad: '',
    postanskiBroj: '',
    drzava: 'Bosna i Hercegovina',
    telefon: '',
    email: '',
    isDefault: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onAdd(formData)
  }

  const updateField = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-[var(--color-bg-elevated)] rounded-[var(--radius-lg)] shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--color-border-primary)]">
          <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
            Nova adresa dostave
          </h3>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-[var(--color-text-tertiary)] hover:bg-[var(--color-bg-tertiary)] transition-colors"
          >
            <CloseIcon className="h-5 w-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Naziv adrese */}
          <div>
            <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-1">
              Naziv adrese *
            </label>
            <input
              type="text"
              required
              placeholder="npr. Kuća, Posao, Skladište..."
              value={formData.naziv}
              onChange={(e) => updateField('naziv', e.target.value)}
              className={cn(
                'w-full h-10 px-3',
                'rounded-[var(--radius-button)]',
                'border border-[var(--color-border-primary)]',
                'bg-[var(--color-bg-primary)]',
                'text-sm text-[var(--color-text-primary)]',
                'placeholder:text-[var(--color-text-tertiary)]',
                'focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)] focus:border-transparent',
                'transition-shadow'
              )}
            />
          </div>

          {/* Ime i Prezime */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-1">
                Ime *
              </label>
              <input
                type="text"
                required
                value={formData.ime}
                onChange={(e) => updateField('ime', e.target.value)}
                className={cn(
                  'w-full h-10 px-3',
                  'rounded-[var(--radius-button)]',
                  'border border-[var(--color-border-primary)]',
                  'bg-[var(--color-bg-primary)]',
                  'text-sm text-[var(--color-text-primary)]',
                  'focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)] focus:border-transparent'
                )}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-1">
                Prezime *
              </label>
              <input
                type="text"
                required
                value={formData.prezime}
                onChange={(e) => updateField('prezime', e.target.value)}
                className={cn(
                  'w-full h-10 px-3',
                  'rounded-[var(--radius-button)]',
                  'border border-[var(--color-border-primary)]',
                  'bg-[var(--color-bg-primary)]',
                  'text-sm text-[var(--color-text-primary)]',
                  'focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)] focus:border-transparent'
                )}
              />
            </div>
          </div>

          {/* Adresa */}
          <div>
            <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-1">
              Adresa *
            </label>
            <input
              type="text"
              required
              placeholder="Ulica i broj"
              value={formData.adresa}
              onChange={(e) => updateField('adresa', e.target.value)}
              className={cn(
                'w-full h-10 px-3',
                'rounded-[var(--radius-button)]',
                'border border-[var(--color-border-primary)]',
                'bg-[var(--color-bg-primary)]',
                'text-sm text-[var(--color-text-primary)]',
                'placeholder:text-[var(--color-text-tertiary)]',
                'focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)] focus:border-transparent'
              )}
            />
          </div>

          {/* Grad i Poštanski broj */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-1">
                Grad *
              </label>
              <input
                type="text"
                required
                value={formData.grad}
                onChange={(e) => updateField('grad', e.target.value)}
                className={cn(
                  'w-full h-10 px-3',
                  'rounded-[var(--radius-button)]',
                  'border border-[var(--color-border-primary)]',
                  'bg-[var(--color-bg-primary)]',
                  'text-sm text-[var(--color-text-primary)]',
                  'focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)] focus:border-transparent'
                )}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-1">
                Poštanski broj *
              </label>
              <input
                type="text"
                required
                value={formData.postanskiBroj}
                onChange={(e) => updateField('postanskiBroj', e.target.value)}
                className={cn(
                  'w-full h-10 px-3',
                  'rounded-[var(--radius-button)]',
                  'border border-[var(--color-border-primary)]',
                  'bg-[var(--color-bg-primary)]',
                  'text-sm text-[var(--color-text-primary)]',
                  'focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)] focus:border-transparent'
                )}
              />
            </div>
          </div>

          {/* Država */}
          <div>
            <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-1">
              Država *
            </label>
            <select
              required
              value={formData.drzava}
              onChange={(e) => updateField('drzava', e.target.value)}
              className={cn(
                'w-full h-10 px-3',
                'rounded-[var(--radius-button)]',
                'border border-[var(--color-border-primary)]',
                'bg-[var(--color-bg-primary)]',
                'text-sm text-[var(--color-text-primary)]',
                'focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)] focus:border-transparent'
              )}
            >
              <option value="Bosna i Hercegovina">Bosna i Hercegovina</option>
              <option value="Hrvatska">Hrvatska</option>
              <option value="Srbija">Srbija</option>
              <option value="Crna Gora">Crna Gora</option>
              <option value="Slovenija">Slovenija</option>
            </select>
          </div>

          {/* Telefon */}
          <div>
            <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-1">
              Telefon *
            </label>
            <input
              type="tel"
              required
              placeholder="+387 XX XXX XXX"
              value={formData.telefon}
              onChange={(e) => updateField('telefon', e.target.value)}
              className={cn(
                'w-full h-10 px-3',
                'rounded-[var(--radius-button)]',
                'border border-[var(--color-border-primary)]',
                'bg-[var(--color-bg-primary)]',
                'text-sm text-[var(--color-text-primary)]',
                'placeholder:text-[var(--color-text-tertiary)]',
                'focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)] focus:border-transparent'
              )}
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-1">
              Email (opcionalno)
            </label>
            <input
              type="email"
              placeholder="email@primjer.com"
              value={formData.email}
              onChange={(e) => updateField('email', e.target.value)}
              className={cn(
                'w-full h-10 px-3',
                'rounded-[var(--radius-button)]',
                'border border-[var(--color-border-primary)]',
                'bg-[var(--color-bg-primary)]',
                'text-sm text-[var(--color-text-primary)]',
                'placeholder:text-[var(--color-text-tertiary)]',
                'focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)] focus:border-transparent'
              )}
            />
          </div>

          {/* Default checkbox */}
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={formData.isDefault}
              onChange={(e) => updateField('isDefault', e.target.checked)}
              className="w-4 h-4 rounded border-[var(--color-border-primary)] text-[var(--color-primary-500)] focus:ring-[var(--color-primary-500)]"
            />
            <span className="text-sm text-[var(--color-text-secondary)]">
              Postavi kao zadanu adresu
            </span>
          </label>

          {/* Actions */}
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className={cn(
                'flex-1 h-10 px-4',
                'rounded-[var(--radius-button)]',
                'border border-[var(--color-border-primary)]',
                'text-sm font-medium text-[var(--color-text-primary)]',
                'hover:bg-[var(--color-bg-tertiary)]',
                'transition-colors'
              )}
            >
              Odustani
            </button>
            <button
              type="submit"
              className={cn(
                'flex-1 h-10 px-4',
                'rounded-[var(--radius-button)]',
                'bg-[var(--color-primary-500)] text-white',
                'text-sm font-medium',
                'hover:bg-[var(--color-primary-hover)]',
                'transition-colors'
              )}
            >
              Spremi adresu
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

// Icons
function LocationIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  )
}

function PlusIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
    </svg>
  )
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

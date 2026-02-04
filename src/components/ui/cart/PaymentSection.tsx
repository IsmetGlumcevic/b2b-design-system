'use client'

import { cn } from '@/src/lib/utils'
import { PAYMENT_METHODS } from '@/src/lib/cart'
import type { PaymentMethod } from '@/src/lib/cart/types'

interface PaymentSectionProps {
  selectedMethodId: string | null
  onSelectMethod: (id: string | null) => void
  note: string
  onNoteChange: (note: string) => void
}

export function PaymentSection({
  selectedMethodId,
  onSelectMethod,
  note,
  onNoteChange,
}: PaymentSectionProps) {
  return (
    <div className="bg-[var(--color-bg-elevated)] rounded-[var(--radius-card)] border border-[var(--color-border-primary)]">
      {/* Header */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--color-border-primary)]">
        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[var(--color-primary-500)] text-white text-xs font-semibold">
          2
        </div>
        <h2 className="text-lg font-semibold text-[var(--color-text-primary)]">
          Način plaćanja
        </h2>
      </div>

      {/* Content */}
      <div className="p-4 space-y-4">
        {/* Payment methods */}
        <div className="space-y-2">
          {PAYMENT_METHODS.map((method) => (
            <PaymentMethodCard
              key={method.id}
              method={method}
              isSelected={selectedMethodId === method.id}
              onSelect={() => onSelectMethod(method.id)}
            />
          ))}
        </div>

        {/* Order note */}
        <div className="pt-4 border-t border-[var(--color-border-primary)]">
          <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
            Napomena uz narudžbu (opcionalno)
          </label>
          <textarea
            value={note}
            onChange={(e) => onNoteChange(e.target.value)}
            placeholder="Posebne upute za dostavu, napomene o narudžbi..."
            rows={3}
            className={cn(
              'w-full px-3 py-2',
              'rounded-[var(--radius-button)]',
              'border border-[var(--color-border-primary)]',
              'bg-[var(--color-bg-primary)]',
              'text-sm text-[var(--color-text-primary)]',
              'placeholder:text-[var(--color-text-tertiary)]',
              'resize-none',
              'focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)] focus:border-transparent',
              'transition-shadow'
            )}
          />
        </div>
      </div>
    </div>
  )
}

interface PaymentMethodCardProps {
  method: PaymentMethod
  isSelected: boolean
  onSelect: () => void
}

function PaymentMethodCard({ method, isSelected, onSelect }: PaymentMethodCardProps) {
  const getIcon = () => {
    switch (method.type) {
      case 'card':
        return <CreditCardIcon className="h-5 w-5" />
      case 'bank_transfer':
        return <BankIcon className="h-5 w-5" />
      case 'cash_on_delivery':
        return <CashIcon className="h-5 w-5" />
      case 'invoice':
        return <DocumentIcon className="h-5 w-5" />
      default:
        return <CreditCardIcon className="h-5 w-5" />
    }
  }

  return (
    <div
      onClick={onSelect}
      className={cn(
        'relative flex items-center gap-4 p-4 rounded-[var(--radius-md)] border-2 cursor-pointer transition-all',
        isSelected
          ? 'border-[var(--color-primary-500)] bg-[var(--color-primary-50)]'
          : 'border-[var(--color-border-primary)] hover:border-[var(--color-border-hover)]'
      )}
    >
      {/* Icon */}
      <div
        className={cn(
          'flex items-center justify-center w-10 h-10 rounded-full',
          isSelected
            ? 'bg-[var(--color-primary-500)] text-white'
            : 'bg-[var(--color-bg-tertiary)] text-[var(--color-text-secondary)]'
        )}
      >
        {getIcon()}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <p className="font-medium text-[var(--color-text-primary)]">{method.label}</p>
        {method.description && (
          <p className="text-xs text-[var(--color-text-secondary)]">{method.description}</p>
        )}
      </div>

      {/* Selection indicator */}
      <div
        className={cn(
          'w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0',
          isSelected
            ? 'border-[var(--color-primary-500)] bg-[var(--color-primary-500)]'
            : 'border-[var(--color-border-primary)]'
        )}
      >
        {isSelected && <CheckIcon className="h-3 w-3 text-white" />}
      </div>
    </div>
  )
}

// Icons
function CreditCardIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
    </svg>
  )
}

function BankIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
    </svg>
  )
}

function CashIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  )
}

function DocumentIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
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

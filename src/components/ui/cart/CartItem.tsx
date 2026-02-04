'use client'

import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/src/lib/utils'
import type { CartItem as CartItemType } from '@/src/lib/cart/types'

interface CartItemProps {
  item: CartItemType
  onQuantityChange: (id: string, quantity: number) => void
  onRemove: (id: string) => void
}

export function CartItem({ item, onQuantityChange, onRemove }: CartItemProps) {
  const hasDiscount = item.staraCijena && item.staraCijena > item.cijena
  const itemTotal = item.cijena * item.kolicina
  const productUrl = `/proizvod/${item.sifra}`

  return (
    <div className="flex gap-4 p-4 border-b border-[var(--color-border-primary)] last:border-b-0">
      {/* Slika */}
      <Link
        href={productUrl}
        className="relative h-20 w-20 shrink-0 overflow-hidden rounded-[var(--radius-md)] bg-[var(--color-bg-tertiary)] md:h-24 md:w-24"
      >
        {item.image ? (
          <Image src={item.image} alt={item.naziv} fill className="object-contain p-2" />
        ) : (
          <div className="flex h-full items-center justify-center">
            <PlaceholderIcon className="h-8 w-8 text-[var(--color-text-tertiary)]" />
          </div>
        )}
      </Link>

      {/* Info */}
      <div className="flex flex-1 flex-col gap-2 min-w-0">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0">
            <p className="text-xs text-[var(--color-text-tertiary)]">{item.sifra}</p>
            <Link href={productUrl}>
              <h3 className="text-sm font-medium text-[var(--color-text-primary)] line-clamp-2 hover:text-[var(--color-primary-500)] transition-colors">
                {item.naziv}
              </h3>
            </Link>
            <p className="text-xs text-[var(--color-text-secondary)]">{item.proizvodac}</p>
          </div>

          {/* Remove button - desktop */}
          <button
            onClick={() => onRemove(item.id)}
            className="hidden sm:flex items-center justify-center h-8 w-8 rounded-full text-[var(--color-text-tertiary)] hover:text-[var(--color-error-600)] hover:bg-[var(--color-error-50)] transition-colors"
            aria-label="Ukloni iz košarice"
          >
            <TrashIcon className="h-4 w-4" />
          </button>
        </div>

        {/* Price per item */}
        <div className="flex items-baseline gap-2">
          <span className="text-sm font-semibold text-[var(--color-text-primary)]">
            {item.cijena.toFixed(2)} {item.valuta}
          </span>
          {hasDiscount && (
            <span className="text-xs text-[var(--color-text-tertiary)] line-through">
              {item.staraCijena?.toFixed(2)} {item.valuta}
            </span>
          )}
          <span className="text-xs text-[var(--color-text-tertiary)]">/{item.jedinica}</span>
        </div>

        {/* Quantity + Total */}
        <div className="flex flex-wrap items-center justify-between gap-3 mt-auto">
          {/* Quantity controls */}
          <div className="flex items-center rounded-[var(--radius-button)] border border-[var(--color-border-primary)]">
            <button
              onClick={() => onQuantityChange(item.id, item.kolicina - 1)}
              disabled={item.kolicina <= 1}
              className="flex h-8 w-8 items-center justify-center text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-tertiary)] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              aria-label="Smanji količinu"
            >
              <MinusIcon className="h-4 w-4" />
            </button>
            <input
              type="number"
              min="1"
              max={item.maxZaliha}
              value={item.kolicina}
              onChange={(e) => onQuantityChange(item.id, parseInt(e.target.value) || 1)}
              className="h-8 w-12 border-x border-[var(--color-border-primary)] bg-transparent text-center text-sm text-[var(--color-text-primary)] focus:outline-none"
            />
            <button
              onClick={() => onQuantityChange(item.id, item.kolicina + 1)}
              disabled={item.kolicina >= item.maxZaliha}
              className="flex h-8 w-8 items-center justify-center text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-tertiary)] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              aria-label="Povećaj količinu"
            >
              <PlusIcon className="h-4 w-4" />
            </button>
          </div>

          {/* Total for this item */}
          <span className="text-base font-bold text-[var(--color-text-primary)]">
            {itemTotal.toFixed(2)} {item.valuta}
          </span>

          {/* Remove button - mobile */}
          <button
            onClick={() => onRemove(item.id)}
            className="sm:hidden flex items-center gap-1 text-xs text-[var(--color-text-tertiary)] hover:text-[var(--color-error-600)] transition-colors"
            aria-label="Ukloni iz košarice"
          >
            <TrashIcon className="h-3.5 w-3.5" />
            <span>Ukloni</span>
          </button>
        </div>
      </div>
    </div>
  )
}

// Icons
function PlaceholderIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
    </svg>
  )
}

function TrashIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    </svg>
  )
}

function MinusIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
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

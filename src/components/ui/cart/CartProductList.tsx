'use client'

import Link from 'next/link'
import { cn } from '@/src/lib/utils'
import { CartItem } from './CartItem'
import type { CartItem as CartItemType } from '@/src/lib/cart/types'

interface CartProductListProps {
  items: CartItemType[]
  onQuantityChange: (id: string, quantity: number) => void
  onRemove: (id: string) => void
  onClearCart: () => void
}

export function CartProductList({
  items,
  onQuantityChange,
  onRemove,
  onClearCart,
}: CartProductListProps) {
  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
        <EmptyCartIcon className="h-24 w-24 text-[var(--color-text-tertiary)] mb-6" />
        <h2 className="text-xl font-semibold text-[var(--color-text-primary)] mb-2">
          Vaša košarica je prazna
        </h2>
        <p className="text-sm text-[var(--color-text-secondary)] mb-6 max-w-md">
          Izgleda da još niste dodali nijedan proizvod u košaricu. Pregledajte našu ponudu i pronađite ono što vam treba.
        </p>
        <Link
          href="/proizvodi"
          className={cn(
            'inline-flex items-center justify-center gap-2',
            'h-11 px-6',
            'rounded-[var(--radius-button)]',
            'bg-[var(--color-primary-500)] text-white',
            'text-sm font-medium',
            'hover:bg-[var(--color-primary-hover)]',
            'transition-colors'
          )}
        >
          <ArrowLeftIcon className="h-4 w-4" />
          Nastavi kupovinu
        </Link>
      </div>
    )
  }

  return (
    <div className="bg-[var(--color-bg-elevated)] rounded-[var(--radius-card)] border border-[var(--color-border-primary)]">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--color-border-primary)]">
        <h2 className="text-lg font-semibold text-[var(--color-text-primary)]">
          Proizvodi ({items.length})
        </h2>
        <button
          onClick={onClearCart}
          className="text-sm text-[var(--color-text-tertiary)] hover:text-[var(--color-error-600)] transition-colors"
        >
          Isprazni košaricu
        </button>
      </div>

      {/* Items list */}
      <div className="divide-y divide-[var(--color-border-primary)]">
        {items.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onQuantityChange={onQuantityChange}
            onRemove={onRemove}
          />
        ))}
      </div>

      {/* Continue shopping link */}
      <div className="px-4 py-3 border-t border-[var(--color-border-primary)]">
        <Link
          href="/proizvodi"
          className="inline-flex items-center gap-2 text-sm text-[var(--color-primary-500)] hover:text-[var(--color-primary-hover)] transition-colors"
        >
          <ArrowLeftIcon className="h-4 w-4" />
          Nastavi kupovinu
        </Link>
      </div>
    </div>
  )
}

// Icons
function EmptyCartIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  )
}

function ArrowLeftIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
    </svg>
  )
}

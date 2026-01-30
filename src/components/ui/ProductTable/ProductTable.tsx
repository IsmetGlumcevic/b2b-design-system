'use client'

import { forwardRef, type HTMLAttributes, type ReactNode, useState } from 'react'
import { cn } from '@/src/lib/utils'

/* ============================================
   Types
   ============================================ */

export interface ProductTableItem {
  /** Šifra proizvoda */
  sifra: string
  /** URL slike proizvoda */
  slika?: string
  /** Naziv proizvoda */
  naziv: string
  /** Dodatni opis proizvoda (opcionalno) */
  opis?: string
  /** Naziv proizvođača */
  proizvodac: string
  /** Količina na stanju */
  zaliha: number
  /** Jedinica mjere (kom, m, kg, itd.) */
  jedinica: string
  /** Trenutna cijena */
  cijena: number
  /** Stara/originalna cijena (opcionalno, za prikaz popusta) */
  staraCijena?: number
  /** Valuta */
  valuta?: string
}

export interface ProductTableProps extends HTMLAttributes<HTMLDivElement> {
  /** Lista proizvoda za prikaz */
  items: ProductTableItem[]
  /** Callback kada se klikne na dodaj u korpu */
  onAddToCart?: (item: ProductTableItem, quantity: number) => void
  /** Da li je tabela u loading stanju */
  isLoading?: boolean
  /** Prilagođeni prikaz praznog stanja */
  emptyState?: ReactNode
}

/* ============================================
   Sub-components
   ============================================ */

/** Stock indicator with dot */
function StockIndicator({ zaliha, jedinica }: { zaliha: number; jedinica: string }) {
  const isInStock = zaliha > 0
  const isLowStock = zaliha > 0 && zaliha < 10

  return (
    <div className="flex items-center gap-[var(--spacing-2)]">
      <span
        className={cn(
          'h-2.5 w-2.5 rounded-full shrink-0',
          isInStock ? 'bg-[var(--color-success-500)]' : 'bg-[var(--color-error-500)]',
          isLowStock && 'bg-[var(--color-warning-500)]'
        )}
        aria-hidden="true"
      />
      <span
        className={cn(
          'text-[var(--font-size-sm)] font-medium',
          isInStock ? 'text-[var(--color-success-700)]' : 'text-[var(--color-error-700)]',
          isLowStock && 'text-[var(--color-warning-700)]'
        )}
      >
        {zaliha}{jedinica}
      </span>
    </div>
  )
}

/** Price display with optional old price */
function PriceDisplay({
  cijena,
  staraCijena,
  valuta = '€'
}: {
  cijena: number
  staraCijena?: number
  valuta?: string
}) {
  const formatPrice = (price: number) => {
    return price.toLocaleString('hr-HR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })
  }

  return (
    <div className="flex flex-col items-end">
      <span className="text-[var(--font-size-base)] font-bold text-[var(--color-primary-500)]">
        {formatPrice(cijena)}{valuta}
      </span>
      {staraCijena && staraCijena > cijena && (
        <span className="text-[var(--font-size-sm)] text-[var(--color-text-tertiary)] line-through">
          {formatPrice(staraCijena)}{valuta}
        </span>
      )}
    </div>
  )
}

/** Quantity selector with +/- buttons */
function QuantitySelector({
  value,
  onChange,
  min = 1,
  max = 9999
}: {
  value: number
  onChange: (value: number) => void
  min?: number
  max?: number
}) {
  const decrease = () => {
    if (value > min) onChange(value - 1)
  }

  const increase = () => {
    if (value < max) onChange(value + 1)
  }

  return (
    <div className="flex items-center">
      <button
        type="button"
        onClick={decrease}
        disabled={value <= min}
        className={cn(
          'flex h-8 w-8 items-center justify-center',
          'text-[var(--color-text-secondary)]',
          'hover:text-[var(--color-text-primary)]',
          'disabled:opacity-40 disabled:cursor-not-allowed',
          'transition-colors duration-[var(--duration-150)]'
        )}
        aria-label="Smanji količinu"
      >
        <ChevronLeftIcon />
      </button>
      <input
        type="number"
        value={value}
        onChange={(e) => {
          const newValue = parseInt(e.target.value, 10)
          if (!isNaN(newValue) && newValue >= min && newValue <= max) {
            onChange(newValue)
          }
        }}
        min={min}
        max={max}
        className={cn(
          'w-10 h-8 text-center',
          'text-[var(--font-size-sm)] font-medium',
          'text-[var(--color-text-primary)]',
          'bg-transparent',
          'border-0 outline-none',
          '[appearance:textfield]',
          '[&::-webkit-outer-spin-button]:appearance-none',
          '[&::-webkit-inner-spin-button]:appearance-none'
        )}
        aria-label="Količina"
      />
      <button
        type="button"
        onClick={increase}
        disabled={value >= max}
        className={cn(
          'flex h-8 w-8 items-center justify-center',
          'text-[var(--color-text-secondary)]',
          'hover:text-[var(--color-text-primary)]',
          'disabled:opacity-40 disabled:cursor-not-allowed',
          'transition-colors duration-[var(--duration-150)]'
        )}
        aria-label="Povećaj količinu"
      >
        <ChevronRightIcon />
      </button>
    </div>
  )
}

/** Add to cart button */
function AddToCartButton({ onClick, disabled }: { onClick: () => void; disabled?: boolean }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={cn(
        'flex h-10 w-10 items-center justify-center',
        'rounded-[var(--radius-button)]',
        'text-[var(--color-text-secondary)]',
        'hover:bg-[var(--color-bg-tertiary)]',
        'hover:text-[var(--color-primary-500)]',
        'disabled:opacity-40 disabled:cursor-not-allowed',
        'transition-all duration-[var(--duration-150)]'
      )}
      aria-label="Dodaj u korpu"
    >
      <CartIcon />
    </button>
  )
}

/* ============================================
   Icons
   ============================================ */

function ChevronLeftIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}

function ChevronRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}

function CartIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  )
}

function ImagePlaceholderIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-text-tertiary)]">
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>
  )
}

/* ============================================
   ProductTableRow
   ============================================ */

interface ProductTableRowProps {
  item: ProductTableItem
  onAddToCart?: (item: ProductTableItem, quantity: number) => void
}

function ProductTableRow({ item, onAddToCart }: ProductTableRowProps) {
  const [quantity, setQuantity] = useState(1)
  const isOutOfStock = item.zaliha <= 0

  const handleAddToCart = () => {
    if (onAddToCart && !isOutOfStock) {
      onAddToCart(item, quantity)
    }
  }

  return (
    <tr className="border-b border-[var(--color-border-primary)] hover:bg-[var(--color-bg-secondary)] transition-colors duration-[var(--duration-150)]">
      {/* Šifra */}
      <td className="px-[var(--spacing-4)] py-[var(--spacing-4)]">
        <span className="text-[var(--font-size-sm)] font-medium text-[var(--color-text-primary)]">
          {item.sifra}
        </span>
      </td>

      {/* Proizvod (slika + naziv) */}
      <td className="px-[var(--spacing-4)] py-[var(--spacing-4)]">
        <div className="flex items-center gap-[var(--spacing-4)]">
          {/* Slika proizvoda */}
          <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-[var(--radius-sm)] bg-[var(--color-bg-tertiary)]">
            {item.slika ? (
              <img
                src={item.slika}
                alt={item.naziv}
                className="h-full w-full object-contain"
              />
            ) : (
              <ImagePlaceholderIcon />
            )}
          </div>
          {/* Naziv i opis */}
          <div className="min-w-0 flex-1">
            <p className="text-[var(--font-size-sm)] font-medium text-[var(--color-text-primary)] line-clamp-2">
              {item.naziv}
            </p>
            {item.opis && (
              <p className="mt-0.5 text-[var(--font-size-xs)] text-[var(--color-text-tertiary)] line-clamp-1">
                {item.opis}
              </p>
            )}
          </div>
        </div>
      </td>

      {/* Proizvođač */}
      <td className="px-[var(--spacing-4)] py-[var(--spacing-4)]">
        <span className="text-[var(--font-size-sm)] text-[var(--color-text-secondary)]">
          {item.proizvodac}
        </span>
      </td>

      {/* Zaliha */}
      <td className="px-[var(--spacing-4)] py-[var(--spacing-4)]">
        <StockIndicator zaliha={item.zaliha} jedinica={item.jedinica} />
      </td>

      {/* Cijena */}
      <td className="px-[var(--spacing-4)] py-[var(--spacing-4)]">
        <PriceDisplay
          cijena={item.cijena}
          staraCijena={item.staraCijena}
          valuta={item.valuta}
        />
      </td>

      {/* Kupi (količina + korpa) */}
      <td className="px-[var(--spacing-4)] py-[var(--spacing-4)]">
        <div className="flex items-center justify-end gap-[var(--spacing-2)]">
          <QuantitySelector
            value={quantity}
            onChange={setQuantity}
            max={item.zaliha > 0 ? item.zaliha : 1}
          />
          <AddToCartButton onClick={handleAddToCart} disabled={isOutOfStock} />
        </div>
      </td>
    </tr>
  )
}

/* ============================================
   ProductTable Component
   ============================================ */

/**
 * ProductTable component for displaying a list of products in a table format.
 * Includes product info, stock status, pricing, and add to cart functionality.
 *
 * @example
 * <ProductTable
 *   items={products}
 *   onAddToCart={(item, qty) => console.log('Added', qty, 'of', item.naziv)}
 * />
 */
export const ProductTable = forwardRef<HTMLDivElement, ProductTableProps>(
  (
    {
      items,
      onAddToCart,
      isLoading = false,
      emptyState,
      className,
      ...props
    },
    ref
  ) => {
    if (isLoading) {
      return (
        <div
          ref={ref}
          className={cn(
            'rounded-[var(--radius-card)]',
            'border border-[var(--color-border-primary)]',
            'bg-[var(--card-bg)]',
            'overflow-hidden',
            className
          )}
          {...props}
        >
          <div className="flex items-center justify-center py-16">
            <LoadingSpinner />
          </div>
        </div>
      )
    }

    if (items.length === 0) {
      return (
        <div
          ref={ref}
          className={cn(
            'rounded-[var(--radius-card)]',
            'border border-[var(--color-border-primary)]',
            'bg-[var(--card-bg)]',
            'overflow-hidden',
            className
          )}
          {...props}
        >
          {emptyState || (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <p className="text-[var(--font-size-base)] text-[var(--color-text-secondary)]">
                Nema proizvoda za prikaz
              </p>
            </div>
          )}
        </div>
      )
    }

    return (
      <div
        ref={ref}
        className={cn(
          'rounded-[var(--radius-card)]',
          'border border-[var(--color-border-primary)]',
          'bg-[var(--card-bg)]',
          'overflow-hidden',
          className
        )}
        {...props}
      >
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px]">
            <thead>
              <tr className="border-b border-[var(--color-border-secondary)] bg-[var(--color-bg-secondary)]">
                <th className="px-[var(--spacing-4)] py-[var(--spacing-3)] text-left text-[var(--font-size-sm)] font-semibold text-[var(--color-text-primary)]">
                  Šifra
                </th>
                <th className="px-[var(--spacing-4)] py-[var(--spacing-3)] text-left text-[var(--font-size-sm)] font-semibold text-[var(--color-text-primary)]">
                  Proizvod
                </th>
                <th className="px-[var(--spacing-4)] py-[var(--spacing-3)] text-left text-[var(--font-size-sm)] font-semibold text-[var(--color-text-primary)]">
                  Proizvođač
                </th>
                <th className="px-[var(--spacing-4)] py-[var(--spacing-3)] text-left text-[var(--font-size-sm)] font-semibold text-[var(--color-text-primary)]">
                  Zaliha
                </th>
                <th className="px-[var(--spacing-4)] py-[var(--spacing-3)] text-right text-[var(--font-size-sm)] font-semibold text-[var(--color-text-primary)]">
                  Cijena
                </th>
                <th className="px-[var(--spacing-4)] py-[var(--spacing-3)] text-right text-[var(--font-size-sm)] font-semibold text-[var(--color-text-primary)]">
                  Kupi
                </th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <ProductTableRow
                  key={item.sifra}
                  item={item}
                  onAddToCart={onAddToCart}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
)

ProductTable.displayName = 'ProductTable'

/** Loading spinner */
function LoadingSpinner() {
  return (
    <svg
      className="h-8 w-8 animate-spin text-[var(--color-primary-500)]"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      role="img"
      aria-label="Učitavanje"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  )
}

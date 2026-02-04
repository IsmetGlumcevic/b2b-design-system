'use client'

import { cn } from '@/src/lib/utils'

export interface MobileCartItemData {
  id: string
  sku: string
  name: string
  manufacturer: string
  price: number
  oldPrice?: number
  currency?: string
  imageUrl?: string
  unit?: string
  quantity: number
  maxQuantity?: number
  inStock?: boolean
}

interface MobileCartItemProps {
  item: MobileCartItemData
  onQuantityChange?: (id: string, quantity: number) => void
  onRemove?: (id: string) => void
  className?: string
}

const PlaceholderIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
  </svg>
)

const TrashIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
  </svg>
)

const MinusIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 12H4" />
  </svg>
)

const PlusIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 4v16m8-8H4" />
  </svg>
)

export function MobileCartItem({
  item,
  onQuantityChange,
  onRemove,
  className,
}: MobileCartItemProps) {
  const currency = item.currency || '€'
  const hasDiscount = item.oldPrice !== undefined && item.oldPrice > item.price
  const total = item.price * item.quantity
  const canDecrease = item.quantity > 1
  const maxQty = item.maxQuantity ?? Infinity
  const canIncrease = item.quantity < maxQty

  return (
    <div className={cn('rounded-xl border border-neutral-100 bg-white p-3 shadow-sm', className)}>
      <div className="flex gap-3">
        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-neutral-100">
          {item.imageUrl ? (
            <img
              src={item.imageUrl}
              alt={item.name}
              className="h-full w-full object-contain p-1.5"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-neutral-300">
              <PlaceholderIcon />
            </div>
          )}
        </div>

        <div className="flex min-w-0 flex-1 flex-col">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              <p className="text-[10px] text-neutral-400">{item.sku}</p>
              <h4 className="line-clamp-2 text-xs font-semibold text-neutral-900">
                {item.name}
              </h4>
              <p className="text-[10px] text-neutral-400">{item.manufacturer}</p>
            </div>
            <button
              onClick={() => onRemove?.(item.id)}
              className="flex h-7 w-7 items-center justify-center rounded-full text-neutral-400 transition-colors active:bg-neutral-100 active:text-neutral-700"
              aria-label="Ukloni iz korpe"
            >
              <TrashIcon />
            </button>
          </div>

          <div className="mt-2 flex items-end justify-between gap-3">
            <div>
              <p className="text-sm font-bold text-neutral-900">
                {item.price.toFixed(2)} {currency}
              </p>
              {hasDiscount && (
                <p className="text-[10px] text-neutral-400 line-through">
                  {item.oldPrice?.toFixed(2)} {currency}
                </p>
              )}
              {item.unit && (
                <p className="text-[10px] text-neutral-400">/{item.unit}</p>
              )}
            </div>

            <div className="flex items-center rounded-lg border border-neutral-200">
              <button
                onClick={() => onQuantityChange?.(item.id, item.quantity - 1)}
                disabled={!canDecrease}
                className="flex h-7 w-7 items-center justify-center text-neutral-500 transition-colors disabled:opacity-40"
                aria-label="Smanji količinu"
              >
                <MinusIcon />
              </button>
              <span className="min-w-7 px-2 text-center text-xs font-semibold text-neutral-900">
                {item.quantity}
              </span>
              <button
                onClick={() => onQuantityChange?.(item.id, item.quantity + 1)}
                disabled={!canIncrease}
                className="flex h-7 w-7 items-center justify-center text-neutral-500 transition-colors disabled:opacity-40"
                aria-label="Povećaj količinu"
              >
                <PlusIcon />
              </button>
            </div>
          </div>

          <div className="mt-2 flex items-center justify-between text-[10px] text-neutral-500">
            <span className={item.inStock === false ? 'text-red-600' : 'text-green-600'}>
              {item.inStock === false ? 'Nema na stanju' : 'Na stanju'}
            </span>
            <span>
              Ukupno {total.toFixed(2)} {currency}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export const sampleMobileCartItems: MobileCartItemData[] = [
  {
    id: 'cart-1',
    sku: '1851699',
    name: 'RG4001M2 I SKLOPKA OBIČNA 10A 2M CRNA',
    manufacturer: 'LEGRAND',
    price: 1.94,
    oldPrice: 2.99,
    quantity: 12,
    unit: 'kom',
    inStock: true,
  },
  {
    id: 'cart-2',
    sku: '1014305',
    name: 'Kabel koax RG 6 75 Ohm',
    manufacturer: 'KABEL',
    price: 0.14,
    oldPrice: 0.25,
    quantity: 120,
    unit: 'm',
    inStock: true,
  },
  {
    id: 'cart-3',
    sku: '1628899',
    name: 'MISTRAL41W PROZIRNA VRATA 8M, 12SM',
    manufacturer: 'ABB',
    price: 10.49,
    quantity: 2,
    unit: 'kom',
    inStock: true,
  },
]

export default MobileCartItem

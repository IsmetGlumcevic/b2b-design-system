'use client'

import { cn } from '@/src/lib/utils'

export interface MobileProduct {
  id: string
  sku: string
  name: string
  manufacturer: string
  price: number
  oldPrice?: number
  currency?: string
  imageUrl?: string
  inStock: boolean
  stockCount?: number
  badge?: 'new' | 'sale' | 'hot'
}

interface MobileProductCardProps {
  product: MobileProduct
  onPress?: () => void
  onAddToCart?: () => void
  onFavorite?: () => void
  isFavorite?: boolean
  variant?: 'vertical' | 'horizontal' | 'compact'
  className?: string
}

const HeartIcon = ({ filled }: { filled?: boolean }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill={filled ? 'currentColor' : 'none'}
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
)

const CartPlusIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 6h15l-1.5 9h-12z" />
    <circle cx="9" cy="20" r="1" />
    <circle cx="18" cy="20" r="1" />
    <path d="M6 6L4 2H1" />
    <path d="M12 10v4m-2-2h4" />
  </svg>
)

const badgeStyles = {
  new: 'bg-blue-500',
  sale: 'bg-red-500',
  hot: 'bg-orange-500',
}

const badgeLabels = {
  new: 'NOVO',
  sale: 'AKCIJA',
  hot: 'TOP',
}

export function MobileProductCard({
  product,
  onPress,
  onAddToCart,
  onFavorite,
  isFavorite = false,
  variant = 'vertical',
  className,
}: MobileProductCardProps) {
  const currency = product.currency || '€'
  const discount = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0

  if (variant === 'horizontal') {
    return (
      <div
        onClick={onPress}
        className={cn(
          'flex gap-3 rounded-xl bg-white p-3 shadow-sm active:bg-neutral-50',
          className
        )}
      >
        {/* Image */}
        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-neutral-100">
          {product.imageUrl ? (
            <img
              src={product.imageUrl}
              alt={product.name}
              className="h-full w-full object-contain"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-neutral-300">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
              </svg>
            </div>
          )}
          {product.badge && (
            <span className={cn('absolute left-1 top-1 rounded px-1.5 py-0.5 text-[9px] font-bold text-white', badgeStyles[product.badge])}>
              {badgeLabels[product.badge]}
            </span>
          )}
        </div>

        {/* Info */}
        <div className="flex flex-1 flex-col justify-between">
          <div>
            <p className="text-[10px] text-neutral-400">{product.manufacturer}</p>
            <h4 className="line-clamp-2 text-xs font-medium text-neutral-900">
              {product.name}
            </h4>
          </div>
          <div className="flex items-end justify-between">
            <div>
              <p className="text-sm font-bold text-neutral-900">
                {product.price.toFixed(2)} {currency}
              </p>
              {product.oldPrice && (
                <p className="text-[10px] text-neutral-400 line-through">
                  {product.oldPrice.toFixed(2)} {currency}
                </p>
              )}
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation()
                onAddToCart?.()
              }}
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-primary-500)] text-white transition-transform active:scale-95"
            >
              <CartPlusIcon />
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (variant === 'compact') {
    return (
      <div
        onClick={onPress}
        className={cn(
          'flex items-center gap-3 border-b border-neutral-100 py-3 active:bg-neutral-50',
          className
        )}
      >
        <div className="h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-neutral-100">
          {product.imageUrl ? (
            <img
              src={product.imageUrl}
              alt={product.name}
              className="h-full w-full object-contain"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-neutral-300">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
              </svg>
            </div>
          )}
        </div>
        <div className="flex-1">
          <p className="text-xs font-medium text-neutral-900 line-clamp-1">
            {product.name}
          </p>
          <p className="text-[10px] text-neutral-400">{product.sku}</p>
        </div>
        <p className="text-sm font-bold text-neutral-900">
          {product.price.toFixed(2)} {currency}
        </p>
      </div>
    )
  }

  // Vertical variant (default)
  return (
    <div
      onClick={onPress}
      className={cn(
        'w-40 shrink-0 overflow-hidden rounded-xl bg-white shadow-sm active:bg-neutral-50',
        className
      )}
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-neutral-100">
        {product.imageUrl ? (
          <img
            src={product.imageUrl}
            alt={product.name}
            className="h-full w-full object-contain p-2"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-neutral-300">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            </svg>
          </div>
        )}

        {/* Badge */}
        {product.badge && (
          <span className={cn('absolute left-2 top-2 rounded px-2 py-0.5 text-[10px] font-bold text-white', badgeStyles[product.badge])}>
            {badgeLabels[product.badge]}
          </span>
        )}

        {/* Discount */}
        {discount > 0 && (
          <span className="absolute right-2 top-2 rounded bg-red-500 px-1.5 py-0.5 text-[10px] font-bold text-white">
            -{discount}%
          </span>
        )}

        {/* Favorite button */}
        <button
          onClick={(e) => {
            e.stopPropagation()
            onFavorite?.()
          }}
          className={cn(
            'absolute bottom-2 right-2 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md transition-transform active:scale-95',
            isFavorite ? 'text-red-500' : 'text-neutral-400'
          )}
        >
          <HeartIcon filled={isFavorite} />
        </button>
      </div>

      {/* Info */}
      <div className="p-3">
        <p className="text-[10px] font-medium text-neutral-400">
          {product.manufacturer}
        </p>
        <h4 className="mb-2 line-clamp-2 text-xs font-medium text-neutral-900">
          {product.name}
        </h4>

        {/* Stock */}
        <div className="mb-2">
          {product.inStock ? (
            <span className="inline-flex items-center gap-1 text-[10px] text-green-600">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
              Na stanju
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 text-[10px] text-red-600">
              <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
              Nema na stanju
            </span>
          )}
        </div>

        {/* Price */}
        <div className="flex items-end justify-between">
          <div>
            <p className="text-base font-bold text-neutral-900">
              {product.price.toFixed(2)} {currency}
            </p>
            {product.oldPrice && (
              <p className="text-[10px] text-neutral-400 line-through">
                {product.oldPrice.toFixed(2)} {currency}
              </p>
            )}
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation()
              onAddToCart?.()
            }}
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-primary-500)] text-white transition-transform active:scale-95"
          >
            <CartPlusIcon />
          </button>
        </div>
      </div>
    </div>
  )
}

// Sample products
export const sampleMobileProducts: MobileProduct[] = [
  {
    id: '1',
    sku: '1851699',
    name: 'RG4001M2 I SKLOPKA OBIČNA 10A 2M CRNA',
    manufacturer: 'LEGRAND',
    price: 1.94,
    oldPrice: 2.99,
    inStock: true,
    stockCount: 433,
    badge: 'sale',
  },
  {
    id: '2',
    sku: '1848994',
    name: 'R4702G I NOSIVI OKVIR 2M NOŽICE',
    manufacturer: 'LEGRAND',
    price: 0.61,
    inStock: true,
    stockCount: 4564,
    badge: 'new',
  },
  {
    id: '3',
    sku: '1014305',
    name: 'Kabel koax RG 6 75 Ohm',
    manufacturer: 'KABEL',
    price: 0.14,
    oldPrice: 0.25,
    inStock: true,
    stockCount: 13871,
  },
  {
    id: '4',
    sku: '1628899',
    name: 'MISTRAL41W PROZIRNA VRATA 8M, 12SM',
    manufacturer: 'ABB',
    price: 10.49,
    oldPrice: 15.43,
    inStock: true,
    stockCount: 7,
    badge: 'hot',
  },
]

export default MobileProductCard

'use client'

import { cn } from '@/src/lib/utils'
import { type MobileBrand } from './MobileBrandScroller'

interface MobileBrandDetailHeaderProps {
  brand: MobileBrand
  className?: string
  variant?: 'default' | 'compact' | 'expanded'
}

export function MobileBrandDetailHeader({
  brand,
  className,
  variant = 'default',
}: MobileBrandDetailHeaderProps) {
  if (variant === 'compact') {
    return (
      <div
        className={cn(
          'mx-4 flex items-center gap-3 rounded-xl bg-white p-3 shadow-sm',
          className
        )}
      >
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-neutral-100 bg-white">
          {brand.logoUrl ? (
            <img
              src={brand.logoUrl}
              alt={brand.name}
              className="max-h-full max-w-full object-contain p-1"
            />
          ) : (
            <span className="text-sm font-bold text-neutral-400">
              {brand.name.slice(0, 3).toUpperCase()}
            </span>
          )}
        </div>
        <div className="flex-1">
          <h2 className="font-semibold text-neutral-900">{brand.name}</h2>
          {brand.productCount && (
            <p className="text-xs text-neutral-500">
              {brand.productCount.toLocaleString('hr-HR')} artikala
            </p>
          )}
        </div>
      </div>
    )
  }

  if (variant === 'expanded') {
    return (
      <div
        className={cn(
          'mx-4 overflow-hidden rounded-xl bg-gradient-to-br from-neutral-50 to-white shadow-sm',
          className
        )}
      >
        {/* Background pattern */}
        <div className="relative px-4 py-6">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]" />
          </div>

          {/* Content */}
          <div className="relative flex flex-col items-center text-center">
            <div className="mb-3 flex h-20 w-20 items-center justify-center rounded-2xl border border-neutral-200 bg-white shadow-sm">
              {brand.logoUrl ? (
                <img
                  src={brand.logoUrl}
                  alt={brand.name}
                  className="max-h-full max-w-full object-contain p-2"
                />
              ) : (
                <span className="text-xl font-bold text-neutral-400">
                  {brand.name.slice(0, 3).toUpperCase()}
                </span>
              )}
            </div>
            <h2 className="mb-1 text-xl font-bold text-neutral-900">{brand.name}</h2>
            {brand.productCount && (
              <p className="mb-3 text-sm text-neutral-500">
                {brand.productCount.toLocaleString('hr-HR')} artikala u ponudi
              </p>
            )}

            {/* Quick stats */}
            <div className="flex gap-4">
              <div className="flex items-center gap-1.5 text-xs text-neutral-500">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                Ovlašteni distributer
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Default variant
  return (
    <div
      className={cn(
        'mx-4 flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm',
        className
      )}
    >
      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border border-neutral-100 bg-white">
        {brand.logoUrl ? (
          <img
            src={brand.logoUrl}
            alt={brand.name}
            className="max-h-full max-w-full object-contain p-2"
          />
        ) : (
          <span className="text-lg font-bold text-neutral-400">
            {brand.name.slice(0, 3).toUpperCase()}
          </span>
        )}
      </div>
      <div className="flex-1">
        <h2 className="text-lg font-bold text-neutral-900">{brand.name}</h2>
        {brand.productCount && (
          <p className="text-sm text-neutral-500">
            {brand.productCount.toLocaleString('hr-HR')} artikala
          </p>
        )}
        <div className="mt-1 flex items-center gap-1">
          <span className="h-2 w-2 rounded-full bg-green-500" />
          <span className="text-xs text-green-600">Ovlašteni distributer</span>
        </div>
      </div>
    </div>
  )
}

export default MobileBrandDetailHeader

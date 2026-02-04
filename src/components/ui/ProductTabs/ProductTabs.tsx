'use client'

import { useState } from 'react'
import { cn } from '@/src/lib/utils'
import { ProductSpecifications } from '@/src/components/ui/ProductSpecifications'
import type { Product, ProductReview, ProductDocument } from '@/src/types/product'

export interface ProductTabsProps {
  /** Proizvod */
  product: Product
  /** Dodatne CSS klase */
  className?: string
}

type TabId = 'opis' | 'karakteristike' | 'dokumenti' | 'recenzije'

interface Tab {
  id: TabId
  label: string
  count?: number
}

export function ProductTabs({ product, className }: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState<TabId>('opis')

  const tabs: Tab[] = [
    { id: 'opis', label: 'Opis' },
    { id: 'karakteristike', label: 'Karakteristike', count: product.karakteristike.length },
    ...(product.dokumenti && product.dokumenti.length > 0
      ? [{ id: 'dokumenti' as TabId, label: 'Dokumenti', count: product.dokumenti.length }]
      : []),
    ...(product.recenzije && product.recenzije.length > 0
      ? [{ id: 'recenzije' as TabId, label: 'Recenzije', count: product.brojRecenzija }]
      : []),
  ]

  return (
    <div className={cn('', className)}>
      {/* Tab Navigation */}
      <div className="border-b border-[var(--color-border-primary)]">
        <nav className="flex gap-8 overflow-x-auto" aria-label="Tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                'relative flex items-center gap-2 whitespace-nowrap py-4 text-sm font-medium transition-colors',
                activeTab === tab.id
                  ? 'text-[var(--color-primary-600)]'
                  : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
              )}
            >
              {tab.label}
              {tab.count !== undefined && (
                <span
                  className={cn(
                    'rounded-full px-2 py-0.5 text-xs',
                    activeTab === tab.id
                      ? 'bg-[var(--color-primary-50)] text-[var(--color-primary-600)]'
                      : 'bg-[var(--color-bg-tertiary)] text-[var(--color-text-tertiary)]'
                  )}
                >
                  {tab.count}
                </span>
              )}
              {activeTab === tab.id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--color-primary-500)]" />
              )}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="py-6">
        {activeTab === 'opis' && <DescriptionTab description={product.opis} />}
        {activeTab === 'karakteristike' && (
          <ProductSpecifications characteristics={product.karakteristike} variant="grouped" />
        )}
        {activeTab === 'dokumenti' && product.dokumenti && (
          <DocumentsTab documents={product.dokumenti} />
        )}
        {activeTab === 'recenzije' && product.recenzije && (
          <ReviewsTab
            reviews={product.recenzije}
            averageRating={product.prosjecnaOcjena}
            totalReviews={product.brojRecenzija}
          />
        )}
      </div>
    </div>
  )
}

// Description Tab
function DescriptionTab({ description }: { description?: string }) {
  if (!description) {
    return (
      <p className="text-[var(--color-text-tertiary)] italic">
        Opis proizvoda nije dostupan.
      </p>
    )
  }

  return (
    <div
      className="prose prose-sm max-w-none text-[var(--color-text-secondary)]"
      dangerouslySetInnerHTML={{ __html: description }}
    />
  )
}

// Documents Tab
function DocumentsTab({ documents }: { documents: ProductDocument[] }) {
  const getDocumentIcon = (tip: ProductDocument['tip']) => {
    switch (tip) {
      case 'datasheet':
        return <DatasheetIcon className="h-5 w-5" />
      case 'manual':
        return <ManualIcon className="h-5 w-5" />
      case 'certificate':
        return <CertificateIcon className="h-5 w-5" />
      default:
        return <DocumentIcon className="h-5 w-5" />
    }
  }

  const getDocumentTypeLabel = (tip: ProductDocument['tip']) => {
    switch (tip) {
      case 'datasheet':
        return 'Datasheet'
      case 'manual':
        return 'Upute'
      case 'certificate':
        return 'Certifikat'
      default:
        return 'Dokument'
    }
  }

  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {documents.map((doc) => (
        <a
          key={doc.id}
          href={doc.url}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            'flex items-center gap-3 p-4',
            'rounded-[var(--radius-lg)]',
            'border border-[var(--color-border-primary)]',
            'hover:border-[var(--color-primary-500)] hover:bg-[var(--color-primary-50)]',
            'transition-all group'
          )}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-bg-tertiary)] text-[var(--color-text-secondary)] group-hover:bg-[var(--color-primary-100)] group-hover:text-[var(--color-primary-600)]">
            {getDocumentIcon(doc.tip)}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-[var(--color-text-primary)] truncate">
              {doc.naziv}
            </p>
            <p className="text-xs text-[var(--color-text-tertiary)]">
              {getDocumentTypeLabel(doc.tip)}
              {doc.velicina && ` • ${doc.velicina}`}
            </p>
          </div>
          <DownloadIcon className="h-4 w-4 text-[var(--color-text-tertiary)] group-hover:text-[var(--color-primary-500)]" />
        </a>
      ))}
    </div>
  )
}

// Reviews Tab
function ReviewsTab({
  reviews,
  averageRating,
  totalReviews,
}: {
  reviews: ProductReview[]
  averageRating?: number
  totalReviews?: number
}) {
  return (
    <div className="space-y-6">
      {/* Summary */}
      {averageRating !== undefined && (
        <div className="flex items-center gap-6 rounded-[var(--radius-lg)] bg-[var(--color-bg-secondary)] p-6">
          <div className="text-center">
            <p className="text-4xl font-bold text-[var(--color-text-primary)]">
              {averageRating.toFixed(1)}
            </p>
            <div className="mt-1 flex justify-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <StarIcon
                  key={star}
                  className={cn(
                    'h-4 w-4',
                    star <= Math.round(averageRating)
                      ? 'text-[var(--color-warning-400)] fill-current'
                      : 'text-[var(--color-neutral-300)]'
                  )}
                  filled={star <= Math.round(averageRating)}
                />
              ))}
            </div>
            <p className="mt-1 text-sm text-[var(--color-text-tertiary)]">
              {totalReviews} recenzija
            </p>
          </div>
          <div className="flex-1">
            {/* Rating distribution could go here */}
          </div>
        </div>
      )}

      {/* Reviews List */}
      <div className="space-y-4">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="rounded-[var(--radius-lg)] border border-[var(--color-border-primary)] p-4"
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-medium text-[var(--color-text-primary)]">
                    {review.autor}
                  </span>
                  {review.verificiranaKupovina && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-[var(--color-success-50)] px-2 py-0.5 text-xs text-[var(--color-success-700)]">
                      <CheckIcon className="h-3 w-3" />
                      Verificirana kupovina
                    </span>
                  )}
                </div>
                <div className="mt-1 flex items-center gap-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <StarIcon
                        key={star}
                        className={cn(
                          'h-4 w-4',
                          star <= review.ocjena
                            ? 'text-[var(--color-warning-400)] fill-current'
                            : 'text-[var(--color-neutral-300)]'
                        )}
                        filled={star <= review.ocjena}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-[var(--color-text-tertiary)]">
                    {new Date(review.datum).toLocaleDateString('hr-HR', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </span>
                </div>
              </div>
            </div>
            <p className="mt-3 text-sm text-[var(--color-text-secondary)] leading-relaxed">
              {review.komentar}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

// Icons
function StarIcon({ className, filled }: { className?: string; filled?: boolean }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
  )
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}

function DatasheetIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
  )
}

function ManualIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
    </svg>
  )
}

function CertificateIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
    </svg>
  )
}

function DocumentIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
  )
}

function DownloadIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
  )
}

import { cn } from '@/src/lib/utils'
import type { ProductCharacteristic } from '@/src/types/product'

export interface ProductSpecificationsProps {
  /** Karakteristike proizvoda */
  characteristics: ProductCharacteristic[]
  /** Dodatne CSS klase */
  className?: string
  /** Varijanta prikaza */
  variant?: 'default' | 'compact' | 'grouped'
  /** Maksimalan broj prikazanih karakteristika (za compact) */
  maxVisible?: number
}

export function ProductSpecifications({
  characteristics,
  className,
  variant = 'default',
  maxVisible,
}: ProductSpecificationsProps) {
  if (!characteristics.length) {
    return null
  }

  // Group characteristics by grupa if variant is 'grouped'
  if (variant === 'grouped') {
    const grouped = characteristics.reduce((acc, char) => {
      const grupa = char.grupa || 'Ostalo'
      if (!acc[grupa]) {
        acc[grupa] = []
      }
      acc[grupa].push(char)
      return acc
    }, {} as Record<string, ProductCharacteristic[]>)

    return (
      <div className={cn('space-y-6', className)}>
        {Object.entries(grouped).map(([grupa, chars]) => (
          <div key={grupa}>
            <h4 className="mb-3 text-sm font-semibold text-[var(--color-text-primary)]">
              {grupa}
            </h4>
            <dl className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {chars.map((char) => (
                <div
                  key={char.id}
                  className="flex justify-between gap-4 rounded-[var(--radius-sm)] bg-[var(--color-bg-secondary)] px-3 py-2"
                >
                  <dt className="text-sm text-[var(--color-text-secondary)]">{char.naziv}</dt>
                  <dd className="text-sm font-medium text-[var(--color-text-primary)] text-right">
                    {char.vrijednost}
                    {char.jedinica && (
                      <span className="text-[var(--color-text-tertiary)]"> {char.jedinica}</span>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>
    )
  }

  const displayedChars = maxVisible ? characteristics.slice(0, maxVisible) : characteristics
  const hasMore = maxVisible && characteristics.length > maxVisible

  if (variant === 'compact') {
    return (
      <div className={cn('space-y-2', className)}>
        {displayedChars.map((char) => (
          <div
            key={char.id}
            className="flex items-center gap-2 text-sm"
          >
            <span className="text-[var(--color-text-tertiary)]">{char.naziv}:</span>
            <span className="font-medium text-[var(--color-text-primary)]">
              {char.vrijednost}
              {char.jedinica && (
                <span className="text-[var(--color-text-tertiary)]"> {char.jedinica}</span>
              )}
            </span>
          </div>
        ))}
        {hasMore && (
          <p className="text-sm text-[var(--color-primary-500)]">
            +{characteristics.length - maxVisible} karakteristika
          </p>
        )}
      </div>
    )
  }

  // Default table variant
  return (
    <div className={cn('overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border-primary)]', className)}>
      <table className="w-full">
        <tbody className="divide-y divide-[var(--color-border-primary)]">
          {displayedChars.map((char, index) => (
            <tr
              key={char.id}
              className={cn(
                index % 2 === 0 ? 'bg-[var(--color-bg-primary)]' : 'bg-[var(--color-bg-secondary)]'
              )}
            >
              <th
                scope="row"
                className="px-4 py-3 text-left text-sm font-medium text-[var(--color-text-secondary)] w-1/2"
              >
                {char.naziv}
              </th>
              <td className="px-4 py-3 text-sm text-[var(--color-text-primary)]">
                {char.vrijednost}
                {char.jedinica && (
                  <span className="text-[var(--color-text-tertiary)]"> {char.jedinica}</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {hasMore && (
        <div className="border-t border-[var(--color-border-primary)] bg-[var(--color-bg-secondary)] px-4 py-2 text-center">
          <span className="text-sm text-[var(--color-primary-500)]">
            +{characteristics.length - maxVisible} karakteristika
          </span>
        </div>
      )}
    </div>
  )
}

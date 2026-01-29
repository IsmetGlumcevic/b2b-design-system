import {
  Skeleton,
  SkeletonText,
  SkeletonCard,
  SkeletonAvatar,
  SkeletonRow,
} from '@/src/components/ui/Skeleton'

export const metadata = {
  title: 'Skeleton - Components',
  description: 'Skeleton komponenta za prikaz loading stanja',
}

export default function SkeletonPage() {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-12">
        <h1 className="mb-2 text-3xl font-bold text-[var(--color-text-primary)]">
          Skeleton
        </h1>
        <p className="text-[var(--color-text-secondary)]">
          Skeleton komponenta za prikaz loading placeholder-a dok se sadržaj učitava. Podržava različite oblike, animacije i složene varijante.
        </p>
      </div>

      {/* Basic Variants */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Osnovne varijante
        </h2>
        <div className="space-y-6">
          <div>
            <p className="mb-2 text-sm text-[var(--color-text-secondary)]">Text</p>
            <Skeleton variant="text" width="60%" />
          </div>
          <div>
            <p className="mb-2 text-sm text-[var(--color-text-secondary)]">Circular</p>
            <Skeleton variant="circular" width={64} height={64} />
          </div>
          <div>
            <p className="mb-2 text-sm text-[var(--color-text-secondary)]">Rectangular</p>
            <Skeleton variant="rectangular" width="100%" height={120} />
          </div>
          <div>
            <p className="mb-2 text-sm text-[var(--color-text-secondary)]">Rounded</p>
            <Skeleton variant="rounded" width="100%" height={80} />
          </div>
        </div>
      </section>

      {/* Animation Types */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Vrste animacija
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <p className="mb-2 text-sm text-[var(--color-text-secondary)]">Pulse (default)</p>
            <Skeleton variant="rounded" height={60} animation="pulse" />
          </div>
          <div>
            <p className="mb-2 text-sm text-[var(--color-text-secondary)]">Wave</p>
            <Skeleton variant="rounded" height={60} animation="wave" />
          </div>
          <div>
            <p className="mb-2 text-sm text-[var(--color-text-secondary)]">None</p>
            <Skeleton variant="rounded" height={60} animation="none" />
          </div>
        </div>
      </section>

      {/* SkeletonText */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          SkeletonText
        </h2>
        <p className="mb-4 text-sm text-[var(--color-text-secondary)]">
          Za višelinijske tekstualne placeholder-e
        </p>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <p className="mb-2 text-sm text-[var(--color-text-tertiary)]">3 linije (default)</p>
            <SkeletonText lines={3} />
          </div>
          <div>
            <p className="mb-2 text-sm text-[var(--color-text-tertiary)]">5 linija</p>
            <SkeletonText lines={5} lastLineWidth="50%" />
          </div>
        </div>
      </section>

      {/* SkeletonAvatar */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          SkeletonAvatar
        </h2>
        <div className="flex items-end gap-6">
          <div className="text-center">
            <SkeletonAvatar size="sm" />
            <p className="mt-2 text-xs text-[var(--color-text-tertiary)]">sm</p>
          </div>
          <div className="text-center">
            <SkeletonAvatar size="md" />
            <p className="mt-2 text-xs text-[var(--color-text-tertiary)]">md</p>
          </div>
          <div className="text-center">
            <SkeletonAvatar size="lg" />
            <p className="mt-2 text-xs text-[var(--color-text-tertiary)]">lg</p>
          </div>
          <div className="text-center">
            <SkeletonAvatar size="xl" />
            <p className="mt-2 text-xs text-[var(--color-text-tertiary)]">xl</p>
          </div>
        </div>
      </section>

      {/* SkeletonRow */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          SkeletonRow
        </h2>
        <p className="mb-4 text-sm text-[var(--color-text-secondary)]">
          Za liste sa avatarom i tekstom
        </p>
        <div className="max-w-md space-y-4">
          <SkeletonRow showAvatar avatarSize="md" lines={2} />
          <SkeletonRow showAvatar avatarSize="md" lines={2} />
          <SkeletonRow showAvatar avatarSize="md" lines={2} />
        </div>
      </section>

      {/* SkeletonCard */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          SkeletonCard
        </h2>
        <p className="mb-4 text-sm text-[var(--color-text-secondary)]">
          Kompletan skeleton za kartice proizvoda
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <SkeletonCard showImage imageHeight={180} lines={3} />
          <SkeletonCard showImage imageHeight={180} lines={3} />
          <SkeletonCard showImage imageHeight={180} lines={3} />
        </div>
      </section>

      {/* Real World Examples */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Primjeri korištenja
        </h2>

        {/* Product Grid Loading */}
        <div className="mb-8">
          <h3 className="mb-4 text-lg font-medium text-[var(--color-text-primary)]">
            Grid proizvoda
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((i) => (
              <SkeletonCard key={i} showImage imageHeight={160} lines={2} />
            ))}
          </div>
        </div>

        {/* User List Loading */}
        <div className="mb-8">
          <h3 className="mb-4 text-lg font-medium text-[var(--color-text-primary)]">
            Lista korisnika
          </h3>
          <div className="max-w-lg space-y-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-3 rounded-[var(--radius-lg)] border border-[var(--color-border-primary)]"
              >
                <SkeletonAvatar size="lg" />
                <div className="flex-1">
                  <Skeleton variant="text" width="40%" className="mb-2" />
                  <Skeleton variant="text" width="60%" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form Loading */}
        <div className="mb-8">
          <h3 className="mb-4 text-lg font-medium text-[var(--color-text-primary)]">
            Form loading
          </h3>
          <div className="max-w-md space-y-4">
            <div>
              <Skeleton variant="text" width="30%" height={14} className="mb-2" />
              <Skeleton variant="rounded" height={40} />
            </div>
            <div>
              <Skeleton variant="text" width="25%" height={14} className="mb-2" />
              <Skeleton variant="rounded" height={40} />
            </div>
            <div>
              <Skeleton variant="text" width="35%" height={14} className="mb-2" />
              <Skeleton variant="rounded" height={100} />
            </div>
            <Skeleton variant="rounded" width={120} height={40} />
          </div>
        </div>
      </section>

      {/* Usage Code */}
      <section className="rounded-[var(--radius-card)] bg-[var(--color-bg-secondary)] p-6">
        <h2 className="mb-4 text-xl font-semibold text-[var(--color-text-primary)]">
          Korištenje
        </h2>
        <pre className="overflow-x-auto rounded-md bg-[var(--color-bg-tertiary)] p-4">
          <code className="text-sm text-[var(--color-text-primary)]">
{`import { Skeleton, SkeletonText, SkeletonCard, SkeletonAvatar, SkeletonRow } from '@/src/components/ui/Skeleton'

// Basic shapes
<Skeleton variant="text" width="60%" />
<Skeleton variant="circular" width={48} height={48} />
<Skeleton variant="rectangular" height={200} />
<Skeleton variant="rounded" height={80} />

// Animation types
<Skeleton animation="pulse" /> {/* default */}
<Skeleton animation="wave" />
<Skeleton animation="none" />

// Multi-line text
<SkeletonText lines={3} />
<SkeletonText lines={4} lastLineWidth="60%" />

// Avatar
<SkeletonAvatar size="md" />

// List row with avatar
<SkeletonRow showAvatar avatarSize="md" lines={2} />

// Product card
<SkeletonCard showImage imageHeight={200} lines={3} />`}
          </code>
        </pre>
      </section>

      {/* CSS Variables */}
      <section className="mt-8 rounded-[var(--radius-card)] bg-[var(--color-bg-secondary)] p-6">
        <h2 className="mb-4 text-xl font-semibold text-[var(--color-text-primary)]">
          CSS Varijable
        </h2>
        <ul className="space-y-1 text-sm text-[var(--color-text-secondary)]">
          <li><code>--skeleton-bg: var(--color-neutral-200)</code> - Pozadinska boja</li>
          <li><code>--skeleton-highlight: var(--color-neutral-100)</code> - Highlight za wave animaciju</li>
        </ul>
      </section>
    </div>
  )
}

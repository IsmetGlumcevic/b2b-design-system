import { Avatar, AvatarGroup } from '@/src/components/ui/Avatar'

export const metadata = {
  title: 'Avatar - Components',
  description: 'Avatar komponenta za prikaz korisnika, profilnih slika i inicijala',
}

/** Custom icon for demonstration */
function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    </svg>
  )
}

function TeamIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
    </svg>
  )
}

export default function AvatarPage() {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-12">
        <h1 className="mb-2 text-3xl font-bold text-[var(--color-text-primary)]">
          Avatar
        </h1>
        <p className="text-[var(--color-text-secondary)]">
          Avatar komponenta za prikaz korisnika, profilnih slika, inicijala ili ikona. Podrzava vise velicina, oblika i status indikatore.
        </p>
      </div>

      {/* Sizes */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Velicine
        </h2>
        <div className="flex flex-wrap items-end gap-4">
          <div className="text-center">
            <Avatar size="xs" initials="XS" />
            <p className="mt-2 text-xs text-[var(--color-text-secondary)]">xs (24px)</p>
          </div>
          <div className="text-center">
            <Avatar size="sm" initials="SM" />
            <p className="mt-2 text-xs text-[var(--color-text-secondary)]">sm (32px)</p>
          </div>
          <div className="text-center">
            <Avatar size="md" initials="MD" />
            <p className="mt-2 text-xs text-[var(--color-text-secondary)]">md (40px)</p>
          </div>
          <div className="text-center">
            <Avatar size="lg" initials="LG" />
            <p className="mt-2 text-xs text-[var(--color-text-secondary)]">lg (48px)</p>
          </div>
          <div className="text-center">
            <Avatar size="xl" initials="XL" />
            <p className="mt-2 text-xs text-[var(--color-text-secondary)]">xl (64px)</p>
          </div>
          <div className="text-center">
            <Avatar size="2xl" initials="2X" />
            <p className="mt-2 text-xs text-[var(--color-text-secondary)]">2xl (80px)</p>
          </div>
        </div>
      </section>

      {/* Variants */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Oblici
        </h2>
        <div className="flex flex-wrap items-center gap-6">
          <div className="text-center">
            <Avatar variant="circle" initials="JD" size="lg" />
            <p className="mt-2 text-sm text-[var(--color-text-secondary)]">Circle</p>
          </div>
          <div className="text-center">
            <Avatar variant="rounded" initials="JD" size="lg" />
            <p className="mt-2 text-sm text-[var(--color-text-secondary)]">Rounded</p>
          </div>
          <div className="text-center">
            <Avatar variant="square" initials="JD" size="lg" />
            <p className="mt-2 text-sm text-[var(--color-text-secondary)]">Square</p>
          </div>
        </div>
      </section>

      {/* With Image */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Sa slikom
        </h2>
        <div className="flex flex-wrap items-center gap-4">
          <Avatar
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
            alt="Korisnik 1"
            size="sm"
          />
          <Avatar
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face"
            alt="Korisnik 2"
            size="md"
          />
          <Avatar
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
            alt="Korisnik 3"
            size="lg"
          />
          <Avatar
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
            alt="Korisnik 4"
            size="xl"
          />
        </div>
      </section>

      {/* With Initials */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Sa inicijalima
        </h2>
        <div className="flex flex-wrap items-center gap-4">
          <Avatar initials="JD" size="sm" />
          <Avatar initials="AB" size="md" />
          <Avatar initials="MK" size="lg" />
          <Avatar initials="TS" size="xl" />
        </div>
      </section>

      {/* With Fallback Icon */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Sa fallback ikonom
        </h2>
        <div className="flex flex-wrap items-center gap-4">
          <Avatar size="sm" />
          <Avatar size="md" />
          <Avatar size="lg" fallbackIcon={<UserIcon />} />
          <Avatar size="xl" fallbackIcon={<TeamIcon />} />
        </div>
      </section>

      {/* Status Indicators */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Status indikatori
        </h2>
        <div className="flex flex-wrap items-center gap-6">
          <div className="text-center">
            <Avatar initials="ON" size="lg" status="online" />
            <p className="mt-2 text-sm text-[var(--color-text-secondary)]">Online</p>
          </div>
          <div className="text-center">
            <Avatar initials="OF" size="lg" status="offline" />
            <p className="mt-2 text-sm text-[var(--color-text-secondary)]">Offline</p>
          </div>
          <div className="text-center">
            <Avatar initials="BZ" size="lg" status="busy" />
            <p className="mt-2 text-sm text-[var(--color-text-secondary)]">Busy</p>
          </div>
          <div className="text-center">
            <Avatar initials="AW" size="lg" status="away" />
            <p className="mt-2 text-sm text-[var(--color-text-secondary)]">Away</p>
          </div>
        </div>
      </section>

      {/* With Border */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Sa bordurom
        </h2>
        <div className="flex flex-wrap items-center gap-4">
          <Avatar initials="JD" size="md" bordered />
          <Avatar initials="AB" size="lg" bordered />
          <Avatar
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
            size="lg"
            bordered
          />
          <Avatar initials="MK" size="xl" bordered status="online" />
        </div>
      </section>

      {/* Avatar Group */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Avatar grupa
        </h2>
        <div className="space-y-6">
          <div>
            <p className="mb-3 text-sm text-[var(--color-text-secondary)]">Sve prikazane:</p>
            <AvatarGroup>
              <Avatar
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
                alt="Korisnik 1"
              />
              <Avatar
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face"
                alt="Korisnik 2"
              />
              <Avatar
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
                alt="Korisnik 3"
              />
              <Avatar initials="JD" />
            </AvatarGroup>
          </div>

          <div>
            <p className="mb-3 text-sm text-[var(--color-text-secondary)]">Sa max={'{3}'} (prikazuje +1):</p>
            <AvatarGroup max={3}>
              <Avatar
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
                alt="Korisnik 1"
              />
              <Avatar
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face"
                alt="Korisnik 2"
              />
              <Avatar
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
                alt="Korisnik 3"
              />
              <Avatar initials="JD" />
            </AvatarGroup>
          </div>

          <div>
            <p className="mb-3 text-sm text-[var(--color-text-secondary)]">Sa max={'{2}'} (prikazuje +3):</p>
            <AvatarGroup max={2} size="lg">
              <Avatar initials="A" size="lg" />
              <Avatar initials="B" size="lg" />
              <Avatar initials="C" size="lg" />
              <Avatar initials="D" size="lg" />
              <Avatar initials="E" size="lg" />
            </AvatarGroup>
          </div>
        </div>
      </section>

      {/* Real-world Examples */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-[var(--color-text-primary)]">
          Primjeri koriscenja
        </h2>

        {/* User Profile */}
        <div className="mb-8">
          <h3 className="mb-4 text-lg font-medium text-[var(--color-text-primary)]">
            Korisnicki profil
          </h3>
          <div className="flex items-center gap-4 rounded-[var(--radius-lg)] border border-[var(--color-border-primary)] p-4">
            <Avatar
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
              size="xl"
              status="online"
            />
            <div>
              <p className="font-semibold text-[var(--color-text-primary)]">Marko Markovic</p>
              <p className="text-sm text-[var(--color-text-secondary)]">marko@primjer.com</p>
              <p className="text-xs text-[var(--color-success-600)]">Online</p>
            </div>
          </div>
        </div>

        {/* Comment/Chat */}
        <div className="mb-8">
          <h3 className="mb-4 text-lg font-medium text-[var(--color-text-primary)]">
            Komentar
          </h3>
          <div className="flex gap-3 rounded-[var(--radius-lg)] border border-[var(--color-border-primary)] p-4">
            <Avatar initials="JD" size="md" />
            <div>
              <p className="text-sm font-medium text-[var(--color-text-primary)]">Jovan Delic</p>
              <p className="text-sm text-[var(--color-text-secondary)]">
                Odlicna komponenta! Mozda bi bilo dobro dodati jos velicina.
              </p>
            </div>
          </div>
        </div>

        {/* Team Members */}
        <div className="mb-8">
          <h3 className="mb-4 text-lg font-medium text-[var(--color-text-primary)]">
            Tim na projektu
          </h3>
          <div className="flex items-center gap-4 rounded-[var(--radius-lg)] border border-[var(--color-border-primary)] p-4">
            <AvatarGroup max={4}>
              <Avatar initials="MM" />
              <Avatar initials="JD" />
              <Avatar initials="AP" />
              <Avatar initials="SK" />
              <Avatar initials="NB" />
              <Avatar initials="TM" />
            </AvatarGroup>
            <span className="text-sm text-[var(--color-text-secondary)]">6 clanova tima</span>
          </div>
        </div>
      </section>

      {/* Usage Code */}
      <section className="rounded-[var(--radius-card)] bg-[var(--color-bg-secondary)] p-6">
        <h2 className="mb-4 text-xl font-semibold text-[var(--color-text-primary)]">
          Koristenje
        </h2>
        <pre className="overflow-x-auto rounded-md bg-[var(--color-bg-tertiary)] p-4">
          <code className="text-sm text-[var(--color-text-primary)]">
{`import { Avatar, AvatarGroup } from '@/src/components/ui/Avatar'

// Sa slikom
<Avatar src="/user.jpg" alt="Korisnik" />

// Sa inicijalima
<Avatar initials="JD" />

// Sa statusom
<Avatar initials="MK" status="online" />

// Razlicite velicine
<Avatar size="xs" initials="XS" />
<Avatar size="md" initials="MD" />
<Avatar size="xl" initials="XL" />

// Avatar grupa
<AvatarGroup max={3}>
  <Avatar src="/user1.jpg" />
  <Avatar src="/user2.jpg" />
  <Avatar src="/user3.jpg" />
  <Avatar src="/user4.jpg" />
</AvatarGroup>`}
          </code>
        </pre>
      </section>

      {/* CSS Variables */}
      <section className="mt-8 rounded-[var(--radius-card)] bg-[var(--color-bg-secondary)] p-6">
        <h2 className="mb-4 text-xl font-semibold text-[var(--color-text-primary)]">
          CSS Varijable
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <h3 className="mb-2 font-medium text-[var(--color-text-primary)]">Velicine</h3>
            <ul className="space-y-1 text-sm text-[var(--color-text-secondary)]">
              <li><code>--avatar-size-xs: 24px</code></li>
              <li><code>--avatar-size-sm: 32px</code></li>
              <li><code>--avatar-size-md: 40px</code></li>
              <li><code>--avatar-size-lg: 48px</code></li>
              <li><code>--avatar-size-xl: 64px</code></li>
              <li><code>--avatar-size-2xl: 80px</code></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-2 font-medium text-[var(--color-text-primary)]">Boje</h3>
            <ul className="space-y-1 text-sm text-[var(--color-text-secondary)]">
              <li><code>--avatar-bg: neutral-200</code></li>
              <li><code>--avatar-text: neutral-600</code></li>
              <li><code>--avatar-border: border-primary</code></li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

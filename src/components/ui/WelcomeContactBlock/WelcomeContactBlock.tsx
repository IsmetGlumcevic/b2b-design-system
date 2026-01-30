import { forwardRef, type HTMLAttributes, type ReactNode } from 'react'
import { cn } from '@/src/lib/utils'
import { Avatar, type AvatarSize } from '@/src/components/ui/Avatar/Avatar'
import SvgPhone from '@/src/components/ui/icons/Line/Communication/Phone'
import SvgMail01 from '@/src/components/ui/icons/Line/Communication/Mail01'
import SvgMessageChatCircle from '@/src/components/ui/icons/Line/Communication/MessageChatCircle'

/* ============================================
   Contact Item Types
   ============================================ */

export type ContactType = 'phone' | 'email' | 'whatsapp'

export interface ContactItemData {
  type: ContactType
  value: string
  href?: string
}

/* ============================================
   ContactItem Component
   ============================================ */

export interface ContactItemProps extends HTMLAttributes<HTMLAnchorElement> {
  /** Contact type determines the icon */
  type: ContactType
  /** Display value (phone number, email, etc.) */
  value: string
  /** Optional href for the link */
  href?: string
}

const contactIcons: Record<ContactType, ReactNode> = {
  phone: <SvgPhone className="h-4 w-4" />,
  email: <SvgMail01 className="h-4 w-4" />,
  whatsapp: <SvgMessageChatCircle className="h-4 w-4" />,
}

const contactColors: Record<ContactType, string> = {
  phone: 'text-[var(--color-neutral-600)]',
  email: 'text-[var(--color-neutral-600)]',
  whatsapp: 'text-[var(--color-success-600)]',
}

/**
 * Individual contact item with icon.
 */
export const ContactItem = forwardRef<HTMLAnchorElement, ContactItemProps>(
  ({ type, value, href, className, ...props }, ref) => {
    const defaultHref = {
      phone: `tel:${value.replace(/\s/g, '')}`,
      email: `mailto:${value}`,
      whatsapp: `https://wa.me/${value.replace(/[^0-9]/g, '')}`,
    }

    return (
      <a
        ref={ref}
        href={href || defaultHref[type]}
        className={cn(
          'flex items-center gap-[var(--spacing-2)]',
          'text-[var(--font-size-sm)]',
          'text-[var(--color-text-secondary)]',
          'hover:text-[var(--color-text-primary)]',
          'transition-colors duration-[var(--duration-150)]',
          className
        )}
        {...props}
      >
        <span className={cn('shrink-0', contactColors[type])}>
          {contactIcons[type]}
        </span>
        <span>{value}</span>
      </a>
    )
  }
)

ContactItem.displayName = 'ContactItem'

/* ============================================
   DepartmentContactCard Component
   ============================================ */

export interface DepartmentContactCardProps extends HTMLAttributes<HTMLDivElement> {
  /** Department name (e.g., "Prodaja", "Računovodstvo") */
  title: string
  /** List of contact items */
  contacts: ContactItemData[]
}

/**
 * Card displaying department contact information.
 */
export const DepartmentContactCard = forwardRef<HTMLDivElement, DepartmentContactCardProps>(
  ({ title, contacts, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'rounded-[var(--radius-lg)]',
          'border border-[var(--color-border-primary)]',
          'p-[var(--spacing-4)]',
          className
        )}
        {...props}
      >
        <h4 className="mb-[var(--spacing-3)] text-[var(--font-size-sm)] font-medium text-[var(--color-primary-600)]">
          {title}
        </h4>
        <div className="flex flex-col gap-[var(--spacing-2)]">
          {contacts.map((contact, index) => (
            <ContactItem
              key={index}
              type={contact.type}
              value={contact.value}
              href={contact.href}
            />
          ))}
        </div>
      </div>
    )
  }
)

DepartmentContactCard.displayName = 'DepartmentContactCard'

/* ============================================
   SalesRepresentativeCard Component
   ============================================ */

export interface SalesRepresentativeProps {
  /** Name of the sales representative */
  name: string
  /** Role/title (e.g., "Komercijalista") */
  role: string
  /** Avatar image URL */
  avatarSrc?: string
  /** Phone number */
  phone?: string
  /** Email address */
  email?: string
}

export interface SalesRepresentativeCardProps extends HTMLAttributes<HTMLDivElement> {
  /** Sales representative data */
  representative: SalesRepresentativeProps
  /** Avatar size */
  avatarSize?: AvatarSize
}

/**
 * Card displaying sales representative contact information.
 */
export const SalesRepresentativeCard = forwardRef<HTMLDivElement, SalesRepresentativeCardProps>(
  ({ representative, avatarSize = 'lg', className, ...props }, ref) => {
    const { name, role, avatarSrc, phone, email } = representative

    return (
      <div
        ref={ref}
        className={cn(
          'flex items-start gap-[var(--spacing-3)]',
          'rounded-[var(--radius-lg)]',
          'border border-[var(--color-border-primary)]',
          'p-[var(--spacing-4)]',
          className
        )}
        {...props}
      >
        <Avatar
          src={avatarSrc}
          alt={name}
          initials={name.split(' ').map(n => n[0]).join('')}
          size={avatarSize}
          variant="circle"
        />
        <div className="flex flex-col gap-[var(--spacing-1)]">
          <h4 className="text-[var(--font-size-sm)] font-semibold text-[var(--color-text-primary)]">
            {name}
          </h4>
          <span className="text-[var(--font-size-sm)] text-[var(--color-success-600)]">
            {role}
          </span>
          <div className="mt-[var(--spacing-1)] flex flex-col gap-[var(--spacing-1)]">
            {phone && <ContactItem type="phone" value={phone} />}
            {email && <ContactItem type="email" value={email} />}
          </div>
        </div>
      </div>
    )
  }
)

SalesRepresentativeCard.displayName = 'SalesRepresentativeCard'

/* ============================================
   WelcomeHeader Component
   ============================================ */

export interface WelcomeHeaderProps extends HTMLAttributes<HTMLDivElement> {
  /** User's name */
  userName: string
  /** Subtitle text */
  subtitle?: string
}

/**
 * Welcome header with user greeting.
 */
export const WelcomeHeader = forwardRef<HTMLDivElement, WelcomeHeaderProps>(
  ({ userName, subtitle, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('mb-[var(--spacing-6)]', className)} {...props}>
        <h2 className="text-[var(--font-size-xl)] font-semibold text-[var(--color-primary-600)] md:text-[var(--font-size-2xl)]">
          Dobrodošli {userName},
        </h2>
        {subtitle && (
          <p className="mt-[var(--spacing-2)] text-[var(--font-size-sm)] text-[var(--color-text-secondary)] md:text-[var(--font-size-base)]">
            {subtitle}
          </p>
        )}
      </div>
    )
  }
)

WelcomeHeader.displayName = 'WelcomeHeader'

/* ============================================
   WelcomeContactBlock Component (Main)
   ============================================ */

export interface DepartmentContact {
  title: string
  contacts: ContactItemData[]
}

export interface WelcomeContactBlockProps extends HTMLAttributes<HTMLDivElement> {
  /** User's name for greeting */
  userName: string
  /** Subtitle text below greeting */
  subtitle?: string
  /** Department contacts */
  departments?: DepartmentContact[]
  /** Sales representatives */
  representatives?: SalesRepresentativeProps[]
  /** Label for department contacts section */
  departmentsLabel?: string
  /** Label for representatives section */
  representativesLabel?: string
}

/**
 * Welcome contact block displaying user greeting, department contacts, and sales representatives.
 *
 * @example
 * <WelcomeContactBlock
 *   userName="Ismet Glumcevic"
 *   subtitle="Za bilo kakva pitanja, slobodno se obratite..."
 *   departments={[
 *     { title: 'Prodaja', contacts: [{ type: 'phone', value: '+381 11 123-4567' }] }
 *   ]}
 *   representatives={[
 *     { name: 'Darija Zdrilić', role: 'Komercijalista', phone: '+385 23 790 004' }
 *   ]}
 * />
 */
export const WelcomeContactBlock = forwardRef<HTMLDivElement, WelcomeContactBlockProps>(
  (
    {
      userName,
      subtitle = 'za bilo kakva pitanja, slobodno se obratite putem Whatsappa, emaila ili telefona ili kontaktirajte direktno prodajnog predstavnika.',
      departments,
      representatives,
      departmentsLabel = 'Kontakti odjeljenja',
      representativesLabel = 'Vaši prodajni predstavnici',
      className,
      ...props
    },
    ref
  ) => {
    const hasDepartments = departments && departments.length > 0
    const hasRepresentatives = representatives && representatives.length > 0

    return (
      <div
        ref={ref}
        className={cn('w-full', className)}
        {...props}
      >
        <WelcomeHeader userName={userName} subtitle={subtitle} />

        <div className="grid grid-cols-1 gap-[var(--spacing-8)] lg:grid-cols-2">
          {/* Department Contacts Section */}
          {hasDepartments && (
            <div>
              <h3 className="mb-[var(--spacing-4)] text-[var(--font-size-base)] font-semibold text-[var(--color-text-primary)]">
                {departmentsLabel}
              </h3>
              <div className="grid grid-cols-1 gap-[var(--spacing-4)] sm:grid-cols-2">
                {departments.map((department, index) => (
                  <DepartmentContactCard
                    key={index}
                    title={department.title}
                    contacts={department.contacts}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Sales Representatives Section */}
          {hasRepresentatives && (
            <div>
              <h3 className="mb-[var(--spacing-4)] text-[var(--font-size-base)] font-semibold text-[var(--color-text-primary)]">
                {representativesLabel}
              </h3>
              <div className="flex flex-col gap-[var(--spacing-4)]">
                {representatives.map((rep, index) => (
                  <SalesRepresentativeCard
                    key={index}
                    representative={rep}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
)

WelcomeContactBlock.displayName = 'WelcomeContactBlock'

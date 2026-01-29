import { forwardRef } from 'react'
import { cn } from '@/src/lib/utils'
import type { PaymentMethodsProps, PaymentMethodType } from './types'

/**
 * Payment method SVG icons
 */
const paymentIcons: Record<PaymentMethodType, React.ReactNode> = {
  visa: (
    <svg viewBox="0 0 48 32" fill="none" aria-hidden="true">
      <rect width="48" height="32" rx="4" fill="white" />
      <path
        d="M19.5 21H17L18.75 11H21.25L19.5 21ZM15.5 11L13.1 18.1L12.85 16.9L12 12.25C12 12.25 11.9 11 10.3 11H6.05L6 11.2C6 11.2 7.8 11.6 9.9 12.9L12.15 21H14.8L18.25 11H15.5ZM35.5 21H37.75L35.8 11H33.8C32.45 11 32.1 12.05 32.1 12.05L28.25 21H30.9L31.45 19.5H34.65L35.5 21ZM32.15 17.5L33.55 13.7L34.35 17.5H32.15ZM29.5 13.6L29.85 11.35C29.85 11.35 28.2 10.75 26.5 10.75C24.65 10.75 20.5 11.6 20.5 15.2C20.5 18.6 25.25 18.6 25.25 20.3C25.25 22 20.9 21.55 19.35 20.4L18.95 22.8C18.95 22.8 20.65 23.5 23.1 23.5C25.55 23.5 28.1 22.1 28.1 18.9C28.1 15.55 23.3 15.3 23.3 13.7C23.3 12.1 26.65 12.3 28.5 13.6H29.5Z"
        fill="#1434CB"
      />
    </svg>
  ),
  mastercard: (
    <svg viewBox="0 0 48 32" fill="none" aria-hidden="true">
      <rect width="48" height="32" rx="4" fill="white" />
      <circle cx="18" cy="16" r="8" fill="#EB001B" />
      <circle cx="30" cy="16" r="8" fill="#F79E1B" />
      <path
        d="M24 21.5C25.8 20 27 17.6 27 15C27 12.4 25.8 10 24 8.5C22.2 10 21 12.4 21 15C21 17.6 22.2 20 24 21.5Z"
        fill="#FF5F00"
      />
    </svg>
  ),
  maestro: (
    <svg viewBox="0 0 48 32" fill="none" aria-hidden="true">
      <rect width="48" height="32" rx="4" fill="white" />
      <circle cx="18" cy="16" r="8" fill="#6C6BBD" />
      <circle cx="30" cy="16" r="8" fill="#EB001B" />
      <path
        d="M24 21.5C25.8 20 27 17.6 27 15C27 12.4 25.8 10 24 8.5C22.2 10 21 12.4 21 15C21 17.6 22.2 20 24 21.5Z"
        fill="#7673C0"
      />
    </svg>
  ),
  paypal: (
    <svg viewBox="0 0 48 32" fill="none" aria-hidden="true">
      <rect width="48" height="32" rx="4" fill="white" />
      <path
        d="M31.8 10.4C31.2 9.6 30 9 28 9H21.2C20.6 9 20.1 9.4 20 10L17.2 22.8C17.1 23.2 17.4 23.6 17.8 23.6H21.3L22.1 19.3V19.5C22.2 18.9 22.7 18.5 23.3 18.5H25C28.7 18.5 31.5 16.8 32.4 12.5C32.4 12.3 32.4 12.1 32.5 12C32.3 11.9 32.3 11.9 32.3 11.9C32.2 11.3 32.1 10.8 31.8 10.4Z"
        fill="#003087"
      />
      <path
        d="M32.3 12C32.3 12 32.3 11.9 32.3 11.9C32.2 14.1 30.9 17.5 26.4 17.5H24L22.8 24.5C22.7 24.9 23 25.2 23.4 25.2H26.3C26.8 25.2 27.2 24.9 27.3 24.4L27.4 24.2L28.1 19.8L28.2 19.5C28.3 19 28.7 18.7 29.2 18.7H29.8C33.1 18.7 35.6 17.2 36.4 13.3C36.7 11.7 36.5 10.3 35.6 9.3C35.3 9 35 8.7 34.6 8.5C34 10.8 32.5 12 32.3 12Z"
        fill="#009CDE"
      />
    </svg>
  ),
  stripe: (
    <svg viewBox="0 0 48 32" fill="none" aria-hidden="true">
      <rect width="48" height="32" rx="4" fill="#635BFF" />
      <path
        d="M22.2 13.8C22.2 13 22.8 12.6 23.9 12.6C25.4 12.6 27.3 13.1 28.8 13.9V10.3C27.2 9.6 25.5 9.3 23.9 9.3C20.2 9.3 17.7 11.2 17.7 14.1C17.7 18.6 24 17.8 24 19.8C24 20.8 23.2 21.2 22 21.2C20.4 21.2 18.3 20.5 16.6 19.6V23.3C18.5 24.1 20.3 24.5 22 24.5C25.8 24.5 28.5 22.6 28.5 19.7C28.5 14.8 22.2 15.8 22.2 13.8Z"
        fill="white"
      />
    </svg>
  ),
  'american-express': (
    <svg viewBox="0 0 48 32" fill="none" aria-hidden="true">
      <rect width="48" height="32" rx="4" fill="#006FCF" />
      <path
        d="M13 21V11H17.8L18.5 12.7L19.3 11H37V20.3C37 20.3 36.4 21 35.5 21H27.2L26.4 19.2V21H23.2V18.8C23.2 18.8 22.8 19.1 22 19.1H21.4V21H17.5L16.7 19.2L15.9 21H13ZM14 20H16.3L17.1 18.2L17.9 20H20.4V16.9L21.7 20H23L24.3 16.8V20H25.4V17H27.8L28.5 18.8L29.3 17H35.9V12H29.8L29.1 13.7L28.4 12H24.3V15L23 12H20.6L19.3 15V12H15.5L14.8 13.7L14 12H14V20ZM14.9 14.8L15.6 16.5L16.3 14.8H14.9ZM30 14.8L30.7 16.5L31.4 14.8H30Z"
        fill="white"
      />
    </svg>
  ),
  'apple-pay': (
    <svg viewBox="0 0 48 32" fill="none" aria-hidden="true">
      <rect width="48" height="32" rx="4" fill="black" />
      <path
        d="M16.5 12.5C16.9 12 17.2 11.3 17.1 10.6C16.5 10.7 15.7 11 15.3 11.5C14.9 11.9 14.5 12.6 14.6 13.3C15.3 13.4 15.9 13 16.5 12.5ZM17.1 13.5C16.1 13.4 15.2 14 14.7 14C14.2 14 13.4 13.5 12.6 13.5C11.5 13.6 10.5 14.1 9.9 15.1C8.7 16.9 9.6 19.7 10.8 21.2C11.3 22 12 22.8 12.8 22.8C13.6 22.8 13.9 22.3 14.8 22.3C15.7 22.3 16 22.8 16.8 22.8C17.6 22.8 18.2 22 18.8 21.2C19.4 20.3 19.7 19.5 19.7 19.4C19.7 19.4 18.2 18.8 18.2 17.1C18.2 15.6 19.4 14.9 19.5 14.8C18.7 13.7 17.6 13.5 17.1 13.5Z"
        fill="white"
      />
      <path
        d="M25 11.5H28.5C30.5 11.5 31.9 12.9 31.9 15.1C31.9 17.3 30.5 18.7 28.4 18.7H26.3V22.5H25V11.5ZM26.3 17.5H28.1C29.6 17.5 30.5 16.6 30.5 15.1C30.5 13.6 29.6 12.7 28.1 12.7H26.3V17.5ZM33.3 20.5C33.3 19.1 34.4 18.3 36.3 18.2L38.5 18.1V17.4C38.5 16.4 37.9 15.9 36.9 15.9C36 15.9 35.4 16.4 35.3 17.1H34.1C34.2 15.7 35.4 14.7 37 14.7C38.6 14.7 39.8 15.6 39.8 17.2V22.5H38.5V21.2H38.5C38.1 22.1 37.1 22.7 36 22.7C34.4 22.7 33.3 21.8 33.3 20.5ZM38.5 19.7V19L36.6 19.1C35.5 19.2 34.7 19.7 34.7 20.5C34.7 21.3 35.4 21.8 36.3 21.8C37.5 21.8 38.5 21 38.5 19.7Z"
        fill="white"
      />
    </svg>
  ),
  'google-pay': (
    <svg viewBox="0 0 48 32" fill="none" aria-hidden="true">
      <rect width="48" height="32" rx="4" fill="white" />
      <path
        d="M22.3 16.7V21H20.6V10H25C26.8 10 28.3 11.4 28.3 13.3C28.3 15.2 26.8 16.7 25 16.7H22.3ZM22.3 11.5V15.1H25.1C26 15.1 26.7 14.3 26.7 13.3C26.7 12.3 26 11.5 25.1 11.5H22.3Z"
        fill="#5F6368"
      />
      <path
        d="M32.8 13.7C34.5 13.7 35.9 14.9 35.9 16.8V21H34.3V19.8H34.2C33.8 20.6 33 21.2 32 21.2C30.6 21.2 29.4 20.2 29.4 18.8C29.4 17.3 30.6 16.3 32.4 16.3C33.2 16.3 33.9 16.5 34.3 16.8V16.5C34.3 15.6 33.5 14.9 32.5 14.9C31.7 14.9 31.1 15.3 30.8 15.9L29.4 15.2C29.9 14.2 31.1 13.7 32.8 13.7ZM30.9 18.8C30.9 19.4 31.6 19.9 32.3 19.9C33.2 19.9 34 19.2 34 18.3C33.6 18 33 17.7 32.2 17.7C31.4 17.7 30.9 18.2 30.9 18.8Z"
        fill="#5F6368"
      />
      <path
        d="M40.5 13.9L36.7 22.8H35L36.5 19.5L34 13.9H35.8L37.5 18.2L39.1 13.9H40.5Z"
        fill="#5F6368"
      />
      <path
        d="M15.6 15.5C15.6 15.1 15.6 14.7 15.5 14.3H10V16.6H13.1C13 17.3 12.5 18.1 11.5 18.5V20.2H13.7C15 19 15.6 17.4 15.6 15.5Z"
        fill="#4285F4"
      />
      <path
        d="M10 21.8C11.9 21.8 13.5 21.2 14.6 20.2L12.4 18.5C11.8 18.9 11 19.2 10 19.2C8.2 19.2 6.7 17.9 6.2 16.2H4V17.9C5.1 20.2 7.4 21.8 10 21.8Z"
        fill="#34A853"
      />
      <path
        d="M6.2 16.2C6 15.6 5.9 15 5.9 14.3C5.9 13.6 6 13 6.2 12.4V10.8H4C3.4 12 3 13.3 3 14.8C3 16.3 3.4 17.6 4 18.8L6.2 16.2Z"
        fill="#FBBC04"
      />
      <path
        d="M10 9.3C11.2 9.3 12.2 9.7 13 10.5L14.7 8.8C13.5 7.7 11.9 7 10 7C7.4 7 5.1 8.6 4 10.8L6.2 12.4C6.7 10.7 8.2 9.3 10 9.3Z"
        fill="#EA4335"
      />
    </svg>
  ),
  'bank-transfer': (
    <svg viewBox="0 0 48 32" fill="none" aria-hidden="true">
      <rect width="48" height="32" rx="4" fill="white" stroke="#E5E7EB" />
      <path
        d="M24 7L10 13V15H38V13L24 7ZM14 17V23H17V17H14ZM21 17V23H24V17H21ZM28 17V23H31V17H28ZM10 25V27H38V25H10Z"
        fill="#6B7280"
      />
    </svg>
  ),
  'cash-on-delivery': (
    <svg viewBox="0 0 48 32" fill="none" aria-hidden="true">
      <rect width="48" height="32" rx="4" fill="white" stroke="#E5E7EB" />
      <path
        d="M24 8C19.6 8 16 11.6 16 16C16 20.4 19.6 24 24 24C28.4 24 32 20.4 32 16C32 11.6 28.4 8 24 8ZM24 22C20.7 22 18 19.3 18 16C18 12.7 20.7 10 24 10C27.3 10 30 12.7 30 16C30 19.3 27.3 22 24 22ZM24.5 12H23V17L27.2 19.6L28 18.3L24.5 16.2V12Z"
        fill="#6B7280"
      />
      <path d="M12 14H8V18H12V14Z" fill="#22C55E" />
      <path d="M40 14H36V18H40V14Z" fill="#22C55E" />
    </svg>
  ),
}

/**
 * Payment method labels for accessibility
 */
const paymentLabels: Record<PaymentMethodType, string> = {
  visa: 'Visa',
  mastercard: 'Mastercard',
  maestro: 'Maestro',
  paypal: 'PayPal',
  stripe: 'Stripe',
  'american-express': 'American Express',
  'apple-pay': 'Apple Pay',
  'google-pay': 'Google Pay',
  'bank-transfer': 'Bankovna transakcija',
  'cash-on-delivery': 'Plaćanje pouzećem',
}

/**
 * PaymentMethods - Payment method icons (Server Component)
 *
 * @example
 * <PaymentMethods
 *   methods={[
 *     { type: 'visa' },
 *     { type: 'mastercard' },
 *     { type: 'paypal' },
 *   ]}
 * />
 */
export const PaymentMethods = forwardRef<HTMLDivElement, PaymentMethodsProps>(
  ({ methods, colorScheme = 'dark', className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'flex flex-wrap items-center gap-[var(--spacing-2)]',
          className
        )}
        {...props}
      >
        {methods.map((method, index) => (
          <div
            key={index}
            className={cn(
              'h-[var(--footer-payment-icon-height)]',
              'rounded-[var(--radius-sm)]',
              'overflow-hidden',
              colorScheme === 'dark' && 'opacity-80 hover:opacity-100',
              colorScheme === 'light' && 'opacity-90 hover:opacity-100',
              'transition-[var(--transition-fast)]'
            )}
            title={method.label || paymentLabels[method.type]}
          >
            <div className="h-full w-auto [&>svg]:h-full [&>svg]:w-auto">
              {paymentIcons[method.type]}
            </div>
          </div>
        ))}
      </div>
    )
  }
)

PaymentMethods.displayName = 'PaymentMethods'

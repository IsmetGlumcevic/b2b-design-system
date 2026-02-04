'use client'

import { cn } from '@/src/lib/utils'

export type DeviceType = 'iphone' | 'android'
export type DeviceSize = 'small' | 'medium' | 'large'

interface PhoneFrameProps {
  children: React.ReactNode
  device?: DeviceType
  size?: DeviceSize
  showStatusBar?: boolean
  showHomeIndicator?: boolean
  className?: string
}

// Device dimensions (width x height in pixels)
const deviceDimensions: Record<DeviceType, Record<DeviceSize, { width: number; height: number }>> = {
  iphone: {
    small: { width: 375, height: 667 },   // iPhone SE
    medium: { width: 390, height: 844 },  // iPhone 14
    large: { width: 428, height: 926 },   // iPhone 14 Pro Max
  },
  android: {
    small: { width: 360, height: 640 },   // Android small
    medium: { width: 412, height: 915 },  // Pixel 7
    large: { width: 480, height: 1040 },  // Android large
  },
}

// Status bar time
function StatusBarTime() {
  return (
    <span className="text-xs font-semibold">
      {new Date().toLocaleTimeString('hr-HR', { hour: '2-digit', minute: '2-digit' })}
    </span>
  )
}

// iPhone Status Bar
function IPhoneStatusBar() {
  return (
    <div className="flex h-11 items-center justify-between bg-inherit px-6">
      <StatusBarTime />
      <div className="absolute left-1/2 top-0 h-8 w-32 -translate-x-1/2 rounded-b-3xl bg-black" />
      <div className="flex items-center gap-1">
        {/* Signal */}
        <svg width="18" height="12" viewBox="0 0 18 12" fill="currentColor">
          <rect x="0" y="6" width="3" height="6" rx="1" />
          <rect x="4" y="4" width="3" height="8" rx="1" />
          <rect x="8" y="2" width="3" height="10" rx="1" />
          <rect x="12" y="0" width="3" height="12" rx="1" />
        </svg>
        {/* WiFi */}
        <svg width="16" height="12" viewBox="0 0 16 12" fill="currentColor">
          <path d="M8 10.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm-4-3c2.2-2.2 5.8-2.2 8 0l-1.4 1.4c-1.4-1.4-3.8-1.4-5.2 0L4 7.5zm-3-3c3.9-3.9 10.1-3.9 14 0l-1.4 1.4c-3.1-3.1-8.1-3.1-11.2 0L1 4.5z" />
        </svg>
        {/* Battery */}
        <svg width="25" height="12" viewBox="0 0 25 12" fill="currentColor">
          <rect x="0" y="0" width="22" height="12" rx="3" stroke="currentColor" strokeWidth="1" fill="none" />
          <rect x="2" y="2" width="17" height="8" rx="1" />
          <rect x="23" y="4" width="2" height="4" rx="1" />
        </svg>
      </div>
    </div>
  )
}

// Android Status Bar
function AndroidStatusBar() {
  return (
    <div className="flex h-8 items-center justify-between bg-inherit px-4">
      <StatusBarTime />
      <div className="flex items-center gap-2">
        {/* WiFi */}
        <svg width="14" height="10" viewBox="0 0 16 12" fill="currentColor">
          <path d="M8 10.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm-4-3c2.2-2.2 5.8-2.2 8 0l-1.4 1.4c-1.4-1.4-3.8-1.4-5.2 0L4 7.5zm-3-3c3.9-3.9 10.1-3.9 14 0l-1.4 1.4c-3.1-3.1-8.1-3.1-11.2 0L1 4.5z" />
        </svg>
        {/* Signal */}
        <svg width="14" height="10" viewBox="0 0 18 12" fill="currentColor">
          <rect x="0" y="6" width="3" height="6" rx="1" />
          <rect x="4" y="4" width="3" height="8" rx="1" />
          <rect x="8" y="2" width="3" height="10" rx="1" />
          <rect x="12" y="0" width="3" height="12" rx="1" />
        </svg>
        {/* Battery */}
        <svg width="20" height="10" viewBox="0 0 25 12" fill="currentColor">
          <rect x="0" y="0" width="22" height="12" rx="2" stroke="currentColor" strokeWidth="1" fill="none" />
          <rect x="2" y="2" width="17" height="8" rx="1" />
          <rect x="23" y="4" width="2" height="4" rx="1" />
        </svg>
      </div>
    </div>
  )
}

// iPhone Home Indicator
function IPhoneHomeIndicator() {
  return (
    <div className="flex h-8 items-center justify-center bg-inherit">
      <div className="h-1 w-32 rounded-full bg-current opacity-20" />
    </div>
  )
}

// Android Navigation Bar
function AndroidNavigationBar() {
  return (
    <div className="flex h-12 items-center justify-center gap-16 bg-inherit">
      {/* Back */}
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-40">
        <polyline points="15 18 9 12 15 6" />
      </svg>
      {/* Home */}
      <div className="h-1 w-8 rounded-full bg-current opacity-40" />
      {/* Recent */}
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-40">
        <rect x="4" y="4" width="16" height="16" rx="2" />
      </svg>
    </div>
  )
}

export function PhoneFrame({
  children,
  device = 'iphone',
  size = 'medium',
  showStatusBar = true,
  showHomeIndicator = true,
  className,
}: PhoneFrameProps) {
  const dimensions = deviceDimensions[device][size]
  const scale = 0.75 // Scale down for display

  return (
    <div className={cn('inline-block', className)}>
      {/* Device label */}
      <div className="mb-2 text-center text-xs font-medium text-[var(--color-text-tertiary)]">
        {device === 'iphone' ? 'iPhone' : 'Android'} ({dimensions.width}x{dimensions.height})
      </div>

      {/* Device frame */}
      <div
        className={cn(
          'relative overflow-hidden bg-black shadow-2xl',
          device === 'iphone' ? 'rounded-[3rem]' : 'rounded-[1.5rem]',
          'ring-4 ring-neutral-800'
        )}
        style={{
          width: dimensions.width * scale,
          height: dimensions.height * scale,
        }}
      >
        {/* Screen */}
        <div
          className={cn(
            'relative flex h-full w-full flex-col overflow-hidden bg-white text-black',
            device === 'iphone' ? 'rounded-[2.5rem]' : 'rounded-[1rem]'
          )}
          style={{
            fontSize: `${scale * 100}%`,
            ['--safe-area-top' as never]: device === 'iphone' ? '0px' : '0px',
          }}
        >
          {/* Status bar */}
          {showStatusBar && (
            device === 'iphone' ? <IPhoneStatusBar /> : <AndroidStatusBar />
          )}

          {/* Content */}
          <div className="flex-1 overflow-y-auto overflow-x-hidden">
            {children}
          </div>

          {/* Home indicator / Navigation bar */}
          {showHomeIndicator && (
            device === 'iphone' ? <IPhoneHomeIndicator /> : <AndroidNavigationBar />
          )}
        </div>
      </div>
    </div>
  )
}

// Preview wrapper for side-by-side comparison
interface PhonePreviewProps {
  children: React.ReactNode
  title?: string
  showBoth?: boolean
}

export function PhonePreview({ children, title, showBoth = false }: PhonePreviewProps) {
  return (
    <div className="rounded-xl bg-neutral-100 p-6">
      {title && (
        <h3 className="mb-6 text-center text-lg font-semibold text-[var(--color-text-primary)]">
          {title}
        </h3>
      )}
      <div className={cn('flex justify-center', showBoth && 'gap-8')}>
        <PhoneFrame device="iphone" size="medium">
          {children}
        </PhoneFrame>
        {showBoth && (
          <PhoneFrame device="android" size="medium">
            {children}
          </PhoneFrame>
        )}
      </div>
    </div>
  )
}

export default PhoneFrame

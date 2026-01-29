import { type HTMLAttributes } from 'react'
import { cn } from '@/src/lib/utils'

export type ProgressBarVariant = 'primary' | 'success' | 'warning' | 'error' | 'info'
export type ProgressBarSize = 'sm' | 'md' | 'lg'

export interface ProgressBarProps extends HTMLAttributes<HTMLDivElement> {
  /** Current progress value (0-100) */
  value: number
  /** Maximum value (default 100) */
  max?: number
  /** Visual style variant */
  variant?: ProgressBarVariant
  /** Size of the progress bar */
  size?: ProgressBarSize
  /** Whether to show the percentage label */
  showLabel?: boolean
  /** Position of the label */
  labelPosition?: 'inside' | 'outside' | 'top'
  /** Custom label format function */
  formatLabel?: (value: number, max: number) => string
  /** Whether to show indeterminate animation */
  indeterminate?: boolean
  /** Whether to show striped pattern */
  striped?: boolean
  /** Whether stripes should animate */
  animated?: boolean
}

const variantStyles: Record<ProgressBarVariant, string> = {
  primary: 'bg-[var(--color-primary-500)]',
  success: 'bg-[var(--color-success-500)]',
  warning: 'bg-[var(--color-warning-500)]',
  error: 'bg-[var(--color-error-500)]',
  info: 'bg-[var(--color-info-500)]',
}

const trackStyles: Record<ProgressBarVariant, string> = {
  primary: 'bg-[var(--color-primary-100)]',
  success: 'bg-[var(--color-success-50)]',
  warning: 'bg-[var(--color-warning-50)]',
  error: 'bg-[var(--color-error-50)]',
  info: 'bg-[var(--color-info-50)]',
}

const sizeStyles: Record<ProgressBarSize, { track: string; bar: string; text: string }> = {
  sm: {
    track: 'h-[var(--progress-height-sm)]',
    bar: 'h-[var(--progress-height-sm)]',
    text: 'text-[var(--font-size-xs)]',
  },
  md: {
    track: 'h-[var(--progress-height-md)]',
    bar: 'h-[var(--progress-height-md)]',
    text: 'text-[var(--font-size-sm)]',
  },
  lg: {
    track: 'h-[var(--progress-height-lg)]',
    bar: 'h-[var(--progress-height-lg)]',
    text: 'text-[var(--font-size-base)]',
  },
}

/**
 * ProgressBar component for showing progress or completion status.
 * Uses CSS variables for theming support.
 *
 * @example
 * <ProgressBar value={60} />
 * <ProgressBar value={75} variant="success" showLabel />
 * <ProgressBar indeterminate variant="primary" />
 */
export function ProgressBar({
  value,
  max = 100,
  variant = 'primary',
  size = 'md',
  showLabel = false,
  labelPosition = 'outside',
  formatLabel,
  indeterminate = false,
  striped = false,
  animated = false,
  className,
  ...props
}: ProgressBarProps) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100)
  const sizeStyle = sizeStyles[size]

  const defaultFormatLabel = (val: number, maxVal: number) =>
    `${Math.round((val / maxVal) * 100)}%`

  const label = formatLabel
    ? formatLabel(value, max)
    : defaultFormatLabel(value, max)

  const showInsideLabel = showLabel && labelPosition === 'inside' && size !== 'sm'

  return (
    <div className={cn('w-full', className)} {...props}>
      {/* Top label */}
      {showLabel && labelPosition === 'top' && (
        <div className="flex justify-between mb-[var(--spacing-1)]">
          <span className={cn(
            'text-[var(--color-text-secondary)]',
            sizeStyle.text
          )}>
            Napredak
          </span>
          <span className={cn(
            'font-medium text-[var(--color-text-primary)]',
            sizeStyle.text
          )}>
            {label}
          </span>
        </div>
      )}

      <div className="flex items-center gap-[var(--spacing-3)]">
        {/* Progress track */}
        <div
          role="progressbar"
          aria-valuenow={indeterminate ? undefined : value}
          aria-valuemin={0}
          aria-valuemax={max}
          aria-label={indeterminate ? 'Učitavanje...' : `Napredak: ${label}`}
          className={cn(
            'relative w-full overflow-hidden',
            'rounded-[var(--progress-radius)]',
            trackStyles[variant],
            sizeStyle.track
          )}
        >
          {/* Progress bar fill */}
          <div
            className={cn(
              'h-full',
              'rounded-[var(--progress-radius)]',
              'transition-[width] duration-[var(--duration-300)] ease-out',
              variantStyles[variant],
              // Striped pattern
              striped && 'progress-striped',
              // Animated stripes
              animated && striped && 'progress-animated',
              // Indeterminate animation
              indeterminate && 'progress-indeterminate'
            )}
            style={{
              width: indeterminate ? undefined : `${percentage}%`,
            }}
          >
            {/* Inside label */}
            {showInsideLabel && !indeterminate && percentage > 10 && (
              <span className={cn(
                'absolute inset-0',
                'flex items-center justify-center',
                'text-white font-medium',
                sizeStyle.text
              )}>
                {label}
              </span>
            )}
          </div>
        </div>

        {/* Outside label */}
        {showLabel && labelPosition === 'outside' && !indeterminate && (
          <span className={cn(
            'shrink-0 font-medium text-[var(--color-text-primary)]',
            sizeStyle.text
          )}>
            {label}
          </span>
        )}
      </div>
    </div>
  )
}

/* ============================================
   ProgressBarGroup Component
   ============================================ */

export interface ProgressSegment {
  /** Value of this segment */
  value: number
  /** Variant/color of this segment */
  variant: ProgressBarVariant
  /** Label for this segment */
  label?: string
}

export interface ProgressBarGroupProps extends HTMLAttributes<HTMLDivElement> {
  /** Segments to display */
  segments: ProgressSegment[]
  /** Maximum value (default 100) */
  max?: number
  /** Size of the progress bar */
  size?: ProgressBarSize
  /** Whether to show legend */
  showLegend?: boolean
}

/**
 * ProgressBarGroup component for multi-segment progress bars.
 *
 * @example
 * <ProgressBarGroup
 *   segments={[
 *     { value: 30, variant: 'success', label: 'Završeno' },
 *     { value: 20, variant: 'warning', label: 'U toku' },
 *     { value: 50, variant: 'error', label: 'Preostalo' },
 *   ]}
 * />
 */
export function ProgressBarGroup({
  segments,
  max = 100,
  size = 'md',
  showLegend = false,
  className,
  ...props
}: ProgressBarGroupProps) {
  const sizeStyle = sizeStyles[size]
  const total = segments.reduce((sum, seg) => sum + seg.value, 0)

  return (
    <div className={cn('w-full', className)} {...props}>
      {/* Multi-segment track */}
      <div
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={max}
        className={cn(
          'relative w-full overflow-hidden flex',
          'rounded-[var(--progress-radius)]',
          'bg-[var(--color-neutral-100)]',
          sizeStyle.track
        )}
      >
        {segments.map((segment, index) => {
          const percentage = Math.min((segment.value / max) * 100, 100)
          return (
            <div
              key={index}
              className={cn(
                'h-full',
                'transition-[width] duration-[var(--duration-300)] ease-out',
                variantStyles[segment.variant],
                // First segment gets left radius
                index === 0 && 'rounded-l-[var(--progress-radius)]',
                // Last segment gets right radius
                index === segments.length - 1 && 'rounded-r-[var(--progress-radius)]'
              )}
              style={{ width: `${percentage}%` }}
            />
          )
        })}
      </div>

      {/* Legend */}
      {showLegend && (
        <div className="flex flex-wrap gap-[var(--spacing-4)] mt-[var(--spacing-3)]">
          {segments.map((segment, index) => (
            <div key={index} className="flex items-center gap-[var(--spacing-2)]">
              <span
                className={cn(
                  'w-3 h-3 rounded-[var(--radius-sm)]',
                  variantStyles[segment.variant]
                )}
              />
              <span className={cn(
                'text-[var(--color-text-secondary)]',
                sizeStyle.text
              )}>
                {segment.label || `${Math.round((segment.value / total) * 100)}%`}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

/* ============================================
   CircularProgress Component
   ============================================ */

export interface CircularProgressProps extends HTMLAttributes<HTMLDivElement> {
  /** Current progress value (0-100) */
  value: number
  /** Maximum value (default 100) */
  max?: number
  /** Size of the circular progress */
  size?: 'sm' | 'md' | 'lg' | 'xl'
  /** Stroke width */
  strokeWidth?: number
  /** Visual style variant */
  variant?: ProgressBarVariant
  /** Whether to show the percentage label */
  showLabel?: boolean
  /** Custom label format function */
  formatLabel?: (value: number, max: number) => string
  /** Whether to show indeterminate animation */
  indeterminate?: boolean
}

const circularSizes: Record<'sm' | 'md' | 'lg' | 'xl', { size: number; strokeWidth: number; fontSize: string }> = {
  sm: { size: 32, strokeWidth: 3, fontSize: 'text-[10px]' },
  md: { size: 48, strokeWidth: 4, fontSize: 'text-[var(--font-size-xs)]' },
  lg: { size: 64, strokeWidth: 5, fontSize: 'text-[var(--font-size-sm)]' },
  xl: { size: 96, strokeWidth: 6, fontSize: 'text-[var(--font-size-lg)]' },
}

const circularVariantStyles: Record<ProgressBarVariant, string> = {
  primary: 'stroke-[var(--color-primary-500)]',
  success: 'stroke-[var(--color-success-500)]',
  warning: 'stroke-[var(--color-warning-500)]',
  error: 'stroke-[var(--color-error-500)]',
  info: 'stroke-[var(--color-info-500)]',
}

/**
 * CircularProgress component for circular progress indicators.
 *
 * @example
 * <CircularProgress value={75} showLabel />
 * <CircularProgress value={50} variant="success" size="lg" />
 */
export function CircularProgress({
  value,
  max = 100,
  size = 'md',
  strokeWidth: customStrokeWidth,
  variant = 'primary',
  showLabel = false,
  formatLabel,
  indeterminate = false,
  className,
  ...props
}: CircularProgressProps) {
  const sizeConfig = circularSizes[size]
  const svgSize = sizeConfig.size
  const stroke = customStrokeWidth ?? sizeConfig.strokeWidth
  const radius = (svgSize - stroke) / 2
  const circumference = 2 * Math.PI * radius
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100)
  const strokeDashoffset = circumference - (percentage / 100) * circumference

  const defaultFormatLabel = (val: number, maxVal: number) =>
    `${Math.round((val / maxVal) * 100)}%`

  const label = formatLabel
    ? formatLabel(value, max)
    : defaultFormatLabel(value, max)

  return (
    <div
      role="progressbar"
      aria-valuenow={indeterminate ? undefined : value}
      aria-valuemin={0}
      aria-valuemax={max}
      aria-label={indeterminate ? 'Učitavanje...' : `Napredak: ${label}`}
      className={cn('relative inline-flex items-center justify-center', className)}
      {...props}
    >
      <svg
        width={svgSize}
        height={svgSize}
        viewBox={`0 0 ${svgSize} ${svgSize}`}
        className={cn(indeterminate && 'animate-spin')}
      >
        {/* Background track */}
        <circle
          cx={svgSize / 2}
          cy={svgSize / 2}
          r={radius}
          fill="none"
          strokeWidth={stroke}
          className="stroke-[var(--color-neutral-200)]"
        />
        {/* Progress arc */}
        <circle
          cx={svgSize / 2}
          cy={svgSize / 2}
          r={radius}
          fill="none"
          strokeWidth={stroke}
          strokeLinecap="round"
          className={cn(
            circularVariantStyles[variant],
            'transition-[stroke-dashoffset] duration-[var(--duration-300)] ease-out'
          )}
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: indeterminate ? circumference * 0.75 : strokeDashoffset,
            transform: 'rotate(-90deg)',
            transformOrigin: 'center',
          }}
        />
      </svg>
      {/* Center label */}
      {showLabel && !indeterminate && (
        <span className={cn(
          'absolute font-medium text-[var(--color-text-primary)]',
          sizeConfig.fontSize
        )}>
          {label}
        </span>
      )}
    </div>
  )
}

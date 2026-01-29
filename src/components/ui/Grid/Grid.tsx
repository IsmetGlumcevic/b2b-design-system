import { forwardRef, type HTMLAttributes, type ReactNode } from 'react'
import { cn } from '@/src/lib/utils'

/* ============================================
   Grid Component
   CSS Grid layout component for responsive
   grid-based layouts
   ============================================ */

export type GridColumns = 1 | 2 | 3 | 4 | 5 | 6 | 12 | 'auto-fit' | 'auto-fill'
export type GridGap = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
export type GridAlign = 'start' | 'center' | 'end' | 'stretch'
export type GridJustify = 'start' | 'center' | 'end' | 'stretch'

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  /** Number of columns */
  cols?: GridColumns
  /** Number of columns on tablet (md breakpoint) */
  colsMd?: GridColumns
  /** Number of columns on desktop (lg breakpoint) */
  colsLg?: GridColumns
  /** Gap between grid items */
  gap?: GridGap
  /** Gap between rows only */
  gapY?: GridGap
  /** Gap between columns only */
  gapX?: GridGap
  /** Align items vertically */
  align?: GridAlign
  /** Justify items horizontally */
  justify?: GridJustify
  /** Minimum width for auto-fit/auto-fill columns */
  minChildWidth?: string
  /** Content of the grid */
  children: ReactNode
}

const colStyles: Record<Exclude<GridColumns, 'auto-fit' | 'auto-fill'>, string> = {
  1: 'grid-cols-1',
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4',
  5: 'grid-cols-5',
  6: 'grid-cols-6',
  12: 'grid-cols-12',
}

const colsMdStyles: Record<Exclude<GridColumns, 'auto-fit' | 'auto-fill'>, string> = {
  1: 'md:grid-cols-1',
  2: 'md:grid-cols-2',
  3: 'md:grid-cols-3',
  4: 'md:grid-cols-4',
  5: 'md:grid-cols-5',
  6: 'md:grid-cols-6',
  12: 'md:grid-cols-12',
}

const colsLgStyles: Record<Exclude<GridColumns, 'auto-fit' | 'auto-fill'>, string> = {
  1: 'lg:grid-cols-1',
  2: 'lg:grid-cols-2',
  3: 'lg:grid-cols-3',
  4: 'lg:grid-cols-4',
  5: 'lg:grid-cols-5',
  6: 'lg:grid-cols-6',
  12: 'lg:grid-cols-12',
}

const gapStyles: Record<GridGap, string> = {
  none: 'gap-0',
  xs: 'gap-[var(--spacing-1)]',
  sm: 'gap-[var(--spacing-2)]',
  md: 'gap-[var(--spacing-4)]',
  lg: 'gap-[var(--spacing-6)]',
  xl: 'gap-[var(--spacing-8)]',
  '2xl': 'gap-[var(--spacing-12)]',
}

const gapYStyles: Record<GridGap, string> = {
  none: 'gap-y-0',
  xs: 'gap-y-[var(--spacing-1)]',
  sm: 'gap-y-[var(--spacing-2)]',
  md: 'gap-y-[var(--spacing-4)]',
  lg: 'gap-y-[var(--spacing-6)]',
  xl: 'gap-y-[var(--spacing-8)]',
  '2xl': 'gap-y-[var(--spacing-12)]',
}

const gapXStyles: Record<GridGap, string> = {
  none: 'gap-x-0',
  xs: 'gap-x-[var(--spacing-1)]',
  sm: 'gap-x-[var(--spacing-2)]',
  md: 'gap-x-[var(--spacing-4)]',
  lg: 'gap-x-[var(--spacing-6)]',
  xl: 'gap-x-[var(--spacing-8)]',
  '2xl': 'gap-x-[var(--spacing-12)]',
}

const alignStyles: Record<GridAlign, string> = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  stretch: 'items-stretch',
}

const justifyStyles: Record<GridJustify, string> = {
  start: 'justify-items-start',
  center: 'justify-items-center',
  end: 'justify-items-end',
  stretch: 'justify-items-stretch',
}

/**
 * Grid component for CSS Grid-based layouts.
 * Supports responsive column counts and consistent gap spacing.
 *
 * @example
 * // Responsive product grid
 * <Grid cols={1} colsMd={2} colsLg={4} gap="lg">
 *   <ProductCard />
 *   <ProductCard />
 *   <ProductCard />
 *   <ProductCard />
 * </Grid>
 *
 * @example
 * // Auto-fit grid with minimum child width
 * <Grid cols="auto-fit" gap="md" minChildWidth="280px">
 *   {products.map(product => <ProductCard key={product.id} />)}
 * </Grid>
 *
 * @example
 * // 12-column layout
 * <Grid cols={12} gap="md">
 *   <GridItem colSpan={8}>Main content</GridItem>
 *   <GridItem colSpan={4}>Sidebar</GridItem>
 * </Grid>
 *
 * @note For semantic elements, wrap Grid in a semantic container
 */
export const Grid = forwardRef<HTMLDivElement, GridProps>(
  (
    {
      cols = 1,
      colsMd,
      colsLg,
      gap = 'md',
      gapY,
      gapX,
      align,
      justify,
      minChildWidth = '280px',
      children,
      className,
      style,
      ...props
    },
    ref
  ) => {
    const isAutoColumns = cols === 'auto-fit' || cols === 'auto-fill'

    return (
      <div
        ref={ref}
        className={cn(
          // Base grid
          'grid',
          // Columns (only if not auto)
          !isAutoColumns && colStyles[cols as Exclude<GridColumns, 'auto-fit' | 'auto-fill'>],
          // Responsive columns
          colsMd && !isAutoColumns && colsMdStyles[colsMd as Exclude<GridColumns, 'auto-fit' | 'auto-fill'>],
          colsLg && !isAutoColumns && colsLgStyles[colsLg as Exclude<GridColumns, 'auto-fit' | 'auto-fill'>],
          // Gap (only if not using separate gapX/gapY)
          !gapX && !gapY && gapStyles[gap],
          // Separate gap for rows and columns
          gapY && gapYStyles[gapY],
          gapX && gapXStyles[gapX],
          // Alignment
          align && alignStyles[align],
          justify && justifyStyles[justify],
          // Custom className override
          className
        )}
        style={
          isAutoColumns
            ? {
                gridTemplateColumns: `repeat(${cols}, minmax(${minChildWidth}, 1fr))`,
                ...style,
              }
            : style
        }
        {...props}
      >
        {children}
      </div>
    )
  }
)

Grid.displayName = 'Grid'

/* ============================================
   GridItem Component
   For controlling individual grid item placement
   ============================================ */

export type GridItemColSpan = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'full'
export type GridItemRowSpan = 1 | 2 | 3 | 4 | 5 | 6

export interface GridItemProps extends HTMLAttributes<HTMLDivElement> {
  /** Number of columns to span */
  colSpan?: GridItemColSpan
  /** Number of columns to span on tablet */
  colSpanMd?: GridItemColSpan
  /** Number of columns to span on desktop */
  colSpanLg?: GridItemColSpan
  /** Number of rows to span */
  rowSpan?: GridItemRowSpan
  /** Starting column */
  colStart?: number
  /** Starting row */
  rowStart?: number
  /** Content of the grid item */
  children: ReactNode
}

const colSpanStyles: Record<GridItemColSpan, string> = {
  1: 'col-span-1',
  2: 'col-span-2',
  3: 'col-span-3',
  4: 'col-span-4',
  5: 'col-span-5',
  6: 'col-span-6',
  7: 'col-span-7',
  8: 'col-span-8',
  9: 'col-span-9',
  10: 'col-span-10',
  11: 'col-span-11',
  12: 'col-span-12',
  full: 'col-span-full',
}

const colSpanMdStyles: Record<GridItemColSpan, string> = {
  1: 'md:col-span-1',
  2: 'md:col-span-2',
  3: 'md:col-span-3',
  4: 'md:col-span-4',
  5: 'md:col-span-5',
  6: 'md:col-span-6',
  7: 'md:col-span-7',
  8: 'md:col-span-8',
  9: 'md:col-span-9',
  10: 'md:col-span-10',
  11: 'md:col-span-11',
  12: 'md:col-span-12',
  full: 'md:col-span-full',
}

const colSpanLgStyles: Record<GridItemColSpan, string> = {
  1: 'lg:col-span-1',
  2: 'lg:col-span-2',
  3: 'lg:col-span-3',
  4: 'lg:col-span-4',
  5: 'lg:col-span-5',
  6: 'lg:col-span-6',
  7: 'lg:col-span-7',
  8: 'lg:col-span-8',
  9: 'lg:col-span-9',
  10: 'lg:col-span-10',
  11: 'lg:col-span-11',
  12: 'lg:col-span-12',
  full: 'lg:col-span-full',
}

const rowSpanStyles: Record<GridItemRowSpan, string> = {
  1: 'row-span-1',
  2: 'row-span-2',
  3: 'row-span-3',
  4: 'row-span-4',
  5: 'row-span-5',
  6: 'row-span-6',
}

/**
 * GridItem component for controlling individual grid item placement.
 * Use within a Grid component to span multiple columns or rows.
 *
 * @example
 * <Grid cols={12} gap="md">
 *   <GridItem colSpan={8}>Main content</GridItem>
 *   <GridItem colSpan={4}>Sidebar</GridItem>
 * </Grid>
 *
 * @example
 * // Responsive spanning
 * <GridItem colSpan="full" colSpanMd={6} colSpanLg={4}>
 *   Responsive card
 * </GridItem>
 */
export const GridItem = forwardRef<HTMLDivElement, GridItemProps>(
  (
    {
      colSpan,
      colSpanMd,
      colSpanLg,
      rowSpan,
      colStart,
      rowStart,
      children,
      className,
      style,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          // Column span
          colSpan && colSpanStyles[colSpan],
          colSpanMd && colSpanMdStyles[colSpanMd],
          colSpanLg && colSpanLgStyles[colSpanLg],
          // Row span
          rowSpan && rowSpanStyles[rowSpan],
          // Custom className override
          className
        )}
        style={{
          ...(colStart && { gridColumnStart: colStart }),
          ...(rowStart && { gridRowStart: rowStart }),
          ...style,
        }}
        {...props}
      >
        {children}
      </div>
    )
  }
)

GridItem.displayName = 'GridItem'

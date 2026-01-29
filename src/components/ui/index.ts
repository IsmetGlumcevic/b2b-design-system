// =============================================================================
// UI Component Library - Barrel Exports
// =============================================================================

// -----------------------------------------------------------------------------
// Form Components
// -----------------------------------------------------------------------------
export { Input } from './Input'
export type { InputProps } from './Input'

export { TextArea } from './TextArea'
export type { TextAreaProps } from './TextArea'

export { Select } from './Select'
export type { SelectProps, SelectOption } from './Select'

export { Checkbox } from './Checkbox'
export type { CheckboxProps } from './Checkbox'

export { Radio, RadioGroup } from './Radio'
export type { RadioProps, RadioGroupProps, RadioOption } from './Radio'

export { Switch } from './Switch'
export type { SwitchProps } from './Switch'

// -----------------------------------------------------------------------------
// Dropdown Components
// -----------------------------------------------------------------------------
export {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  DropdownDivider,
  DropdownLabel,
} from './Dropdown'
export type {
  DropdownProps,
  DropdownTriggerProps,
  DropdownMenuProps,
  DropdownItemProps,
  DropdownDividerProps,
  DropdownLabelProps,
  DropdownAlign,
  DropdownSide,
} from './Dropdown'

// -----------------------------------------------------------------------------
// Tabs Components
// -----------------------------------------------------------------------------
export { Tabs, TabsList, TabsTrigger, TabsContent } from './Tabs'
export type {
  TabsProps,
  TabsListProps,
  TabsTriggerProps,
  TabsContentProps,
} from './Tabs'

// -----------------------------------------------------------------------------
// Accordion Components
// -----------------------------------------------------------------------------
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './Accordion'
export type {
  AccordionProps,
  AccordionSingleProps,
  AccordionMultipleProps,
  AccordionItemProps,
  AccordionTriggerProps,
  AccordionContentProps,
} from './Accordion'

// -----------------------------------------------------------------------------
// Button Components
// -----------------------------------------------------------------------------
export { Button, type ButtonProps, type ButtonVariant, type ButtonSize } from './buttons'
export { IconButton, type IconButtonProps } from './buttons'
export { LinkButton, type LinkButtonProps } from './buttons'

// -----------------------------------------------------------------------------
// Display Components
// -----------------------------------------------------------------------------
export { Badge, type BadgeProps, type BadgeVariant, type BadgeSize } from './Badge'

export { Chip, ChipGroup } from './Chip'
export type { ChipProps, ChipGroupProps, ChipVariant, ChipColor, ChipSize } from './Chip'

export { Avatar, AvatarGroup } from './Avatar'
export type { AvatarProps, AvatarGroupProps, AvatarSize, AvatarVariant, AvatarStatus } from './Avatar'

export { Icon, IconBox } from './Icon'
export type { IconProps, IconBoxProps, IconSize, IconColor } from './Icon'

// -----------------------------------------------------------------------------
// Card Components
// -----------------------------------------------------------------------------
export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardImage,
  type CardProps,
  type CardVariant,
  type CardPadding,
  type CardHeaderProps,
  type CardTitleProps,
  type CardDescriptionProps,
  type CardContentProps,
  type CardFooterProps,
  type CardImageProps,
} from './Card'

// -----------------------------------------------------------------------------
// Modal Components
// -----------------------------------------------------------------------------
export {
  Modal,
  ModalHeader,
  ModalTitle,
  ModalDescription,
  ModalBody,
  ModalFooter,
  type ModalProps,
  type ModalSize,
  type ModalHeaderProps,
  type ModalTitleProps,
  type ModalDescriptionProps,
  type ModalBodyProps,
  type ModalFooterProps,
} from './Modal'

// -----------------------------------------------------------------------------
// Feedback Components
// -----------------------------------------------------------------------------
export { Alert, type AlertProps, type AlertVariant } from './Alert'

export {
  ToastProvider,
  useToast,
  type Toast,
  type ToastOptions,
  type ToastVariant,
  type ToastPosition,
  type ToastProviderProps,
} from './Toast'

export {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  type TooltipProps,
  type TooltipPosition,
  type TooltipTrigger as TooltipTriggerType,
  type TooltipVariant,
} from './Tooltip'

// -----------------------------------------------------------------------------
// Loading & Progress Components
// -----------------------------------------------------------------------------
export {
  LoadingSpinner,
  LoadingOverlay,
  LoadingDots,
  type LoadingSpinnerProps,
  type LoadingOverlayProps,
  type LoadingDotsProps,
  type SpinnerSize,
  type SpinnerVariant,
} from './LoadingSpinner'

export {
  Skeleton,
  SkeletonText,
  SkeletonCard,
  SkeletonAvatar,
  SkeletonRow,
  type SkeletonProps,
  type SkeletonTextProps,
  type SkeletonCardProps,
  type SkeletonAvatarProps,
  type SkeletonRowProps,
  type SkeletonVariant,
} from './Skeleton'

export {
  ProgressBar,
  ProgressBarGroup,
  CircularProgress,
  type ProgressBarProps,
  type ProgressBarGroupProps,
  type CircularProgressProps,
  type ProgressSegment,
  type ProgressBarVariant,
  type ProgressBarSize,
} from './ProgressBar'

// -----------------------------------------------------------------------------
// Layout Components
// -----------------------------------------------------------------------------
export { Container, Section } from './Container'
export type {
  ContainerProps,
  ContainerSize,
  ContainerPadding,
  SectionProps,
  SectionSpacing,
} from './Container'

export { Grid, GridItem } from './Grid'
export type {
  GridProps,
  GridColumns,
  GridGap,
  GridAlign,
  GridJustify,
  GridItemProps,
  GridItemColSpan,
  GridItemRowSpan,
} from './Grid'

export {
  Stack,
  HStack,
  VStack,
} from './Stack'
export type {
  StackProps,
  HStackProps,
  VStackProps,
  StackDirection,
  StackAlign,
  StackJustify,
  StackSpacing,
  StackWrap,
} from './Stack'

export {
  Divider,
  DividerVertical,
  DividerSection,
  type DividerProps,
  type DividerVerticalProps,
  type DividerSectionProps,
  type DividerOrientation,
  type DividerVariant,
  type DividerWeight,
} from './Divider'

// -----------------------------------------------------------------------------
// Navigation Components
// -----------------------------------------------------------------------------
export { Breadcrumbs } from './Breadcrumbs/Breadcrumbs'
export type {
  BreadcrumbsProps,
  BreadcrumbItem,
  BreadcrumbsSize,
  BreadcrumbsSeparator,
} from './Breadcrumbs/Breadcrumbs'

export { Pagination } from './Pagination'
export type { PaginationProps, PaginationVariant, PaginationSize } from './Pagination'

// -----------------------------------------------------------------------------
// Empty State Components
// -----------------------------------------------------------------------------
export {
  EmptyState,
  EmptyStateIcon,
  type EmptyStateProps,
  type EmptyStateIconProps,
  type EmptyStateSize,
} from './EmptyState'

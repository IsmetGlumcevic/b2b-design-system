'use client'

import { CartProvider } from '@/src/lib/cart'
import type { ReactNode } from 'react'

interface ProvidersProps {
  children: ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return <CartProvider>{children}</CartProvider>
}

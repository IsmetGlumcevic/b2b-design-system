import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Shop Teme | Design System',
  description: 'Pregled različitih shop tema za B2B e-commerce',
}

export default function ShopTemeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

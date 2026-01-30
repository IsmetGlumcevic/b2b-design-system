// Template za Client Component
// Koristi kad treba state, eventi ili browser APIs

'use client'

import { useState } from 'react'
import { UntitledIcon } from '@/lib/icons'

interface ComponentNameProps {
  // Props tipovi
}

export default function ComponentName({ props }: ComponentNameProps) {
  const [state, setState] = useState()

  return (
    <div className="...">
      {/* Implementacija */}
    </div>
  )
}

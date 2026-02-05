# Theme System

## 📁 Struktura

```
styles/themes/
├── default.css   - Standardna tema (baseline)
├── sharp.css     - Moderna tema bez border radiusa
├── rounded.css   - Friendly tema sa velikim zaobljenjem
└── README.md     - Ovaj fajl
```

## 🎨 Dostupne teme

### 1. Default Theme (`default.css`)
**Opis:** Standardna tema sa balansiranim border radiusima i shadows.

**Karakteristike:**
- Border radius: 6-8px
- Umjereni shadows
- Standardni spacing
- Idealna za profesionalni, business izgled

**Korištenje:**
```tsx
// app/layout.tsx
import '@/styles/themes/default.css'
```

---

### 2. Sharp Theme (`sharp.css`)
**Opis:** Moderna tema bez zaobljenih ivica.

**Karakteristike:**
- **Border radius: 0px** (sve komponente imaju oštre uglove)
- Jači shadows za bolji kontrast
- Minimalistički, brutalistički dizajn
- Idealna za tehnološke/moderne brandove

**Override-ane varijable:**
```css
--radius-button: 0;
--radius-input: 0;
--radius-card: 0;
--radius-modal: 0;
--shadow-card: 0 2px 4px 0 rgba(0, 0, 0, 0.12);
--shadow-card-hover: 0 4px 8px 0 rgba(0, 0, 0, 0.16);
```

**Korištenje:**
```tsx
// app/layout.tsx
import '@/styles/themes/sharp.css'
```

---

### 3. Rounded Theme (`rounded.css`)
**Opis:** Friendly tema sa velikim zaobljenjem.

**Karakteristike:**
- Border radius: 12-24px (dvostruko veći)
- Mekši shadows
- Pristupačan, friendly dizajn
- Idealna za consumer-facing brandove

**Override-ane varijable:**
```css
--radius-button: 16px;     /* var(--radius-lg) */
--radius-input: 12px;      /* var(--radius-md) */
--radius-card: 24px;       /* var(--radius-xl) */
--radius-modal: 32px;      /* var(--radius-2xl) */
```

**Korištenje:**
```tsx
// app/layout.tsx
import '@/styles/themes/rounded.css'
```

---

## 🚀 Kako koristiti

### Opcija 1: Static Import (Preporučeno)

Dodaj import u `app/layout.tsx`:

```tsx
import '@/app/globals.css'
import '@/styles/themes/sharp.css'  // Odaberi temu

export default function RootLayout({ children }) {
  return (
    <html lang="hr">
      <body>{children}</body>
    </html>
  )
}
```

### Opcija 2: Dynamic Loading (Runtime)

Kreiraj Theme Provider:

```tsx
// src/context/ThemeContext.tsx
'use client'

import { useEffect, useState } from 'react'

type Theme = 'default' | 'sharp' | 'rounded'

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('default')

  useEffect(() => {
    const link = document.createElement('link')
    link.id = 'theme-css'
    link.rel = 'stylesheet'
    link.href = `/styles/themes/${theme}.css`
    document.head.appendChild(link)

    return () => {
      const existingLink = document.getElementById('theme-css')
      existingLink?.remove()
    }
  }, [theme])

  return <>{children}</>
}
```

### Opcija 3: Environment Variable

```bash
# .env.local
NEXT_PUBLIC_THEME=sharp
```

```tsx
// app/layout.tsx
import '@/app/globals.css'

// Dynamic import based on env
const theme = process.env.NEXT_PUBLIC_THEME || 'default'
import(`@/styles/themes/${theme}.css`)
```

---

## 🎯 Kreiranje nove teme

### Korak 1: Kreiraj novi CSS fajl

```bash
touch styles/themes/moja-tema.css
```

### Korak 2: Override varijable

```css
/* styles/themes/moja-tema.css */
:root {
  /* Override samo što želiš promijeniti */

  /* Boje */
  --color-primary-500: #yourcolor;

  /* Border radius */
  --radius-button: 20px;
  --radius-card: 30px;

  /* Spacing */
  --spacing-container-padding: var(--spacing-12);

  /* Shadows */
  --shadow-card: your-shadow;
}
```

### Korak 3: Testiraj

Dodaj temu u showcase stranicu za testiranje:

```tsx
// app/(ui-showcase)/design-system/themes/page.tsx
const themes = [
  // ... postojeće teme
  {
    id: 'moja-tema',
    name: 'Moja Tema',
    description: 'Opis moje teme',
    file: 'moja-tema.css',
  }
]
```

---

## 📐 Dostupne CSS varijable za override

### Border Radius
```css
--radius-none: 0;
--radius-sm: 0.125rem;        /* 2px */
--radius-base: 0.25rem;       /* 4px */
--radius-md: 0.375rem;        /* 6px */
--radius-lg: 0.5rem;          /* 8px */
--radius-xl: 0.75rem;         /* 12px */
--radius-2xl: 1rem;           /* 16px */
--radius-3xl: 1.5rem;         /* 24px */
--radius-full: 9999px;

/* Semantic */
--radius-button: var(--radius-md);
--radius-input: var(--radius-md);
--radius-card: var(--radius-lg);
--radius-modal: var(--radius-xl);
--radius-badge: var(--radius-full);
```

### Spacing
```css
--spacing-container-padding: var(--spacing-6);    /* 24px */
--spacing-section-gap: var(--spacing-16);         /* 64px */
--spacing-card-padding: var(--spacing-6);         /* 24px */
--spacing-input-padding-x: var(--spacing-4);      /* 16px */
--spacing-input-padding-y: var(--spacing-2-5);    /* 10px */
--spacing-button-padding-x: var(--spacing-6);     /* 24px */
--spacing-button-padding-y: var(--spacing-2-5);   /* 10px */
```

### Shadows
```css
--shadow-card: var(--shadow-sm);
--shadow-card-hover: var(--shadow-md);
--shadow-modal: var(--shadow-xl);
--shadow-dropdown: var(--shadow-lg);
```

### Colors
```css
/* Primary */
--color-primary-500: #ed1c24;
--color-primary-hover: #d71921;

/* Secondary */
--color-secondary-800: #1f2937;
--color-secondary-hover: #374151;

/* Background */
--color-bg-primary: #ffffff;
--color-bg-secondary: #f9fafb;
--color-bg-elevated: #ffffff;

/* Text */
--color-text-primary: #111827;
--color-text-secondary: #6b7280;
--color-text-tertiary: #9ca3af;

/* Border */
--color-border-primary: #e5e7eb;
--color-border-focus: var(--color-primary-500);
```

---

## 🔍 Demo

Posjetite showcase stranicu da vidite teme u akciji:

```
http://localhost:3000/design-system/themes
```

---

## 💡 Best Practices

1. **Uvijek override samo što treba promijeniti**
   ```css
   /* ✅ DOBRO */
   :root {
     --radius-button: 0;
   }

   /* ❌ LOŠE - nepotrebno dupliranje */
   :root {
     --radius-button: 0;
     --spacing-4: 1rem;  /* Već definisano u globals.css */
   }
   ```

2. **Koristi semantic varijable**
   ```css
   /* ✅ DOBRO - promijeni semantic token */
   --radius-button: var(--radius-lg);

   /* ❌ LOŠE - direktna vrijednost */
   --radius-button: 8px;
   ```

3. **Grupiši related overrides**
   ```css
   /* ✅ DOBRO */
   :root {
     /* Border Radius Group */
     --radius-button: 0;
     --radius-input: 0;
     --radius-card: 0;

     /* Shadows Group */
     --shadow-card: ...;
     --shadow-modal: ...;
   }
   ```

4. **Dokumentuj razlog za override**
   ```css
   /* Sharp theme - remove all border radius for modern look */
   --radius-button: 0;
   --radius-card: 0;
   ```

---

## 📚 Reference

- Kompletna dokumentacija: `/dizajn-sistem.md`
- Globalne varijable: `/app/globals.css`
- Showcase: `/app/(ui-showcase)/design-system/themes/page.tsx`

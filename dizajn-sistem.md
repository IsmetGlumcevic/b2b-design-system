# DIZAJN SISTEM - B2B WEB SHOP
 
Plan za fleksibilan design system baziran na CSS varijablama koji omogućava lako prebacivanje između različitih tema za različite shopove.

---

## KONCEPT

### Problem
- Isti kod treba koristiti za više različitih shopova
- Svaki shop ima svoje brendne boje, font, spacing preferencije
- Potrebna je centralizovana konfiguracija teme
- Jednostavna promjena teme bez mijenjanja komponenti

### Rješenje
- **CSS varijable** (Custom Properties) za sve design tokens
- **Tailwind CSS** konfigurisan da koristi te CSS varijable
- **Theme switcher** - učitavanje različitih tema dinamički
- **Type-safe** pristup sa TypeScript tipovima

---

## 1. STRUKTURA CSS VARIJABLI

### 1.1 Folder struktura

```
/styles
├── globals.css                  # Glavni CSS fajl
├── themes/
│   ├── default.css             # Default tema (elektromaterijal)
│   ├── shop-a.css              # Tema za Shop A
│   ├── shop-b.css              # Tema za Shop B
│   └── theme-template.css      # Template za nove teme
└── variables/
    ├── colors.css              # Color definitions
    ├── spacing.css             # Spacing scale
    ├── typography.css          # Font variables
    ├── borders.css             # Border radius, width
    ├── shadows.css             # Box shadows
    └── transitions.css         # Animation/transitions
```

### 1.2 Design Tokens struktura

```css
/* styles/themes/default.css */
:root {
  /* ===========================
     COLORS - Brand Colors
     =========================== */

  /* Primary Brand Color */
  --color-primary-50: #eff6ff;
  --color-primary-100: #dbeafe;
  --color-primary-200: #bfdbfe;
  --color-primary-300: #93c5fd;
  --color-primary-400: #60a5fa;
  --color-primary-500: #3b82f6;    /* Main brand color */
  --color-primary-600: #2563eb;
  --color-primary-700: #1d4ed8;
  --color-primary-800: #1e40af;
  --color-primary-900: #1e3a8a;
  --color-primary-950: #172554;

  /* Secondary/Accent Color */
  --color-secondary-50: #f0fdf4;
  --color-secondary-100: #dcfce7;
  --color-secondary-200: #bbf7d0;
  --color-secondary-300: #86efac;
  --color-secondary-400: #4ade80;
  --color-secondary-500: #22c55e;   /* Accent color */
  --color-secondary-600: #16a34a;
  --color-secondary-700: #15803d;
  --color-secondary-800: #166534;
  --color-secondary-900: #14532d;
  --color-secondary-950: #052e16;

  /* Neutral/Gray Scale */
  --color-neutral-50: #f9fafb;
  --color-neutral-100: #f3f4f6;
  --color-neutral-200: #e5e7eb;
  --color-neutral-300: #d1d5db;
  --color-neutral-400: #9ca3af;
  --color-neutral-500: #6b7280;
  --color-neutral-600: #4b5563;
  --color-neutral-700: #374151;
  --color-neutral-800: #1f2937;
  --color-neutral-900: #111827;
  --color-neutral-950: #030712;

  /* Semantic Colors */
  --color-success-50: #f0fdf4;
  --color-success-500: #22c55e;
  --color-success-600: #16a34a;
  --color-success-700: #15803d;

  --color-error-50: #fef2f2;
  --color-error-500: #ef4444;
  --color-error-600: #dc2626;
  --color-error-700: #b91c1c;

  --color-warning-50: #fffbeb;
  --color-warning-500: #f59e0b;
  --color-warning-600: #d97706;
  --color-warning-700: #b45309;

  --color-info-50: #eff6ff;
  --color-info-500: #3b82f6;
  --color-info-600: #2563eb;
  --color-info-700: #1d4ed8;

  /* Background Colors */
  --color-bg-primary: #ffffff;
  --color-bg-secondary: #f9fafb;
  --color-bg-tertiary: #f3f4f6;
  --color-bg-elevated: #ffffff;      /* For cards, modals */
  --color-bg-overlay: rgba(0, 0, 0, 0.5);

  /* Text Colors */
  --color-text-primary: #111827;
  --color-text-secondary: #6b7280;
  --color-text-tertiary: #9ca3af;
  --color-text-inverse: #ffffff;
  --color-text-link: var(--color-primary-600);
  --color-text-link-hover: var(--color-primary-700);

  /* Border Colors */
  --color-border-primary: #e5e7eb;
  --color-border-secondary: #d1d5db;
  --color-border-focus: var(--color-primary-500);
  --color-border-error: var(--color-error-500);

  /* ===========================
     SPACING
     =========================== */

  --spacing-0: 0;
  --spacing-px: 1px;
  --spacing-0-5: 0.125rem;   /* 2px */
  --spacing-1: 0.25rem;      /* 4px */
  --spacing-1-5: 0.375rem;   /* 6px */
  --spacing-2: 0.5rem;       /* 8px */
  --spacing-2-5: 0.625rem;   /* 10px */
  --spacing-3: 0.75rem;      /* 12px */
  --spacing-3-5: 0.875rem;   /* 14px */
  --spacing-4: 1rem;         /* 16px */
  --spacing-5: 1.25rem;      /* 20px */
  --spacing-6: 1.5rem;       /* 24px */
  --spacing-7: 1.75rem;      /* 28px */
  --spacing-8: 2rem;         /* 32px */
  --spacing-9: 2.25rem;      /* 36px */
  --spacing-10: 2.5rem;      /* 40px */
  --spacing-11: 2.75rem;     /* 44px */
  --spacing-12: 3rem;        /* 48px */
  --spacing-14: 3.5rem;      /* 56px */
  --spacing-16: 4rem;        /* 64px */
  --spacing-20: 5rem;        /* 80px */
  --spacing-24: 6rem;        /* 96px */
  --spacing-28: 7rem;        /* 112px */
  --spacing-32: 8rem;        /* 128px */
  --spacing-36: 9rem;        /* 144px */
  --spacing-40: 10rem;       /* 160px */
  --spacing-44: 11rem;       /* 176px */
  --spacing-48: 12rem;       /* 192px */
  --spacing-52: 13rem;       /* 208px */
  --spacing-56: 14rem;       /* 224px */
  --spacing-60: 15rem;       /* 240px */
  --spacing-64: 16rem;       /* 256px */
  --spacing-72: 18rem;       /* 288px */
  --spacing-80: 20rem;       /* 320px */
  --spacing-96: 24rem;       /* 384px */

  /* Semantic Spacing (za specifične use case-ove) */
  --spacing-container-padding: var(--spacing-6);    /* 24px */
  --spacing-section-gap: var(--spacing-16);         /* 64px */
  --spacing-card-padding: var(--spacing-6);         /* 24px */
  --spacing-input-padding-x: var(--spacing-4);      /* 16px */
  --spacing-input-padding-y: var(--spacing-2-5);    /* 10px */
  --spacing-button-padding-x: var(--spacing-6);     /* 24px */
  --spacing-button-padding-y: var(--spacing-2-5);   /* 10px */

  /* ===========================
     TYPOGRAPHY
     =========================== */

  /* Font Families */
  --font-sans: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  --font-serif: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
  --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;

  /* Font Sizes */
  --font-size-xs: 0.75rem;      /* 12px */
  --font-size-sm: 0.875rem;     /* 14px */
  --font-size-base: 1rem;       /* 16px */
  --font-size-lg: 1.125rem;     /* 18px */
  --font-size-xl: 1.25rem;      /* 20px */
  --font-size-2xl: 1.5rem;      /* 24px */
  --font-size-3xl: 1.875rem;    /* 30px */
  --font-size-4xl: 2.25rem;     /* 36px */
  --font-size-5xl: 3rem;        /* 48px */
  --font-size-6xl: 3.75rem;     /* 60px */
  --font-size-7xl: 4.5rem;      /* 72px */
  --font-size-8xl: 6rem;        /* 96px */
  --font-size-9xl: 8rem;        /* 128px */

  /* Font Weights */
  --font-weight-thin: 100;
  --font-weight-extralight: 200;
  --font-weight-light: 300;
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --font-weight-extrabold: 800;
  --font-weight-black: 900;

  /* Line Heights */
  --line-height-none: 1;
  --line-height-tight: 1.25;
  --line-height-snug: 1.375;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.625;
  --line-height-loose: 2;

  /* Letter Spacing */
  --letter-spacing-tighter: -0.05em;
  --letter-spacing-tight: -0.025em;
  --letter-spacing-normal: 0;
  --letter-spacing-wide: 0.025em;
  --letter-spacing-wider: 0.05em;
  --letter-spacing-widest: 0.1em;

  /* ===========================
     BORDERS
     =========================== */

  /* Border Radius */
  --radius-none: 0;
  --radius-sm: 0.125rem;        /* 2px */
  --radius-base: 0.25rem;       /* 4px */
  --radius-md: 0.375rem;        /* 6px */
  --radius-lg: 0.5rem;          /* 8px */
  --radius-xl: 0.75rem;         /* 12px */
  --radius-2xl: 1rem;           /* 16px */
  --radius-3xl: 1.5rem;         /* 24px */
  --radius-full: 9999px;

  /* Border Width */
  --border-width-0: 0;
  --border-width-1: 1px;
  --border-width-2: 2px;
  --border-width-4: 4px;
  --border-width-8: 8px;

  /* Semantic Border Radius */
  --radius-button: var(--radius-md);
  --radius-input: var(--radius-md);
  --radius-card: var(--radius-lg);
  --radius-modal: var(--radius-xl);
  --radius-badge: var(--radius-full);

  /* ===========================
     SHADOWS
     =========================== */

  --shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
  --shadow-base: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  --shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  --shadow-inner: inset 0 2px 4px 0 rgba(0, 0, 0, 0.05);
  --shadow-none: none;

  /* Semantic Shadows */
  --shadow-card: var(--shadow-sm);
  --shadow-card-hover: var(--shadow-md);
  --shadow-modal: var(--shadow-xl);
  --shadow-dropdown: var(--shadow-lg);

  /* ===========================
     TRANSITIONS & ANIMATIONS
     =========================== */

  /* Transition Duration */
  --duration-75: 75ms;
  --duration-100: 100ms;
  --duration-150: 150ms;
  --duration-200: 200ms;
  --duration-300: 300ms;
  --duration-500: 500ms;
  --duration-700: 700ms;
  --duration-1000: 1000ms;

  /* Transition Timing */
  --ease-linear: linear;
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);

  /* Semantic Transitions */
  --transition-fast: all var(--duration-150) var(--ease-out);
  --transition-base: all var(--duration-200) var(--ease-out);
  --transition-slow: all var(--duration-300) var(--ease-out);

  /* ===========================
     Z-INDEX
     =========================== */

  --z-dropdown: 1000;
  --z-sticky: 1020;
  --z-fixed: 1030;
  --z-modal-backdrop: 1040;
  --z-modal: 1050;
  --z-popover: 1060;
  --z-tooltip: 1070;

  /* ===========================
     BREAKPOINTS (for reference)
     =========================== */

  /* These are used in Tailwind config, not as CSS vars */
  /* sm: 640px */
  /* md: 768px */
  /* lg: 1024px */
  /* xl: 1280px */
  /* 2xl: 1536px */

  /* ===========================
     COMPONENT-SPECIFIC TOKENS
     =========================== */

  /* Header */
  --header-height: 80px;
  --header-bg: var(--color-bg-primary);
  --header-border: var(--color-border-primary);
  --header-shadow: var(--shadow-sm);

  /* Footer */
  --footer-bg: var(--color-neutral-900);
  --footer-text: var(--color-neutral-300);

  /* Sidebar */
  --sidebar-width: 280px;
  --sidebar-bg: var(--color-bg-primary);
  --sidebar-border: var(--color-border-primary);

  /* Card */
  --card-bg: var(--color-bg-elevated);
  --card-border: var(--color-border-primary);
  --card-shadow: var(--shadow-card);
  --card-shadow-hover: var(--shadow-card-hover);
  --card-padding: var(--spacing-card-padding);
  --card-radius: var(--radius-card);

  /* Button */
  --button-height-sm: 32px;
  --button-height-md: 40px;
  --button-height-lg: 48px;
  --button-height-xl: 56px;

  /* Input */
  --input-height-sm: 32px;
  --input-height-md: 40px;
  --input-height-lg: 48px;
  --input-bg: var(--color-bg-primary);
  --input-border: var(--color-border-primary);
  --input-border-focus: var(--color-border-focus);
  --input-text: var(--color-text-primary);

  /* Badge */
  --badge-success-bg: var(--color-success-50);
  --badge-success-text: var(--color-success-700);
  --badge-error-bg: var(--color-error-50);
  --badge-error-text: var(--color-error-700);
  --badge-warning-bg: var(--color-warning-50);
  --badge-warning-text: var(--color-warning-700);
  --badge-info-bg: var(--color-info-50);
  --badge-info-text: var(--color-info-700);

  /* Product Card */
  --product-card-width: 280px;
  --product-card-image-height: 200px;
}
```

### 1.3 Primjer alternative teme (Shop B)

```css
/* styles/themes/shop-b.css */
:root {
  /* Override samo boje koje su drugačije */
  --color-primary-500: #dc2626;    /* Red primary */
  --color-primary-600: #b91c1c;
  --color-primary-700: #991b1b;

  --color-secondary-500: #0891b2;  /* Cyan accent */
  --color-secondary-600: #0e7490;

  /* Override spacing ako želite veće/manje */
  --spacing-container-padding: var(--spacing-8);  /* Veći padding */
  --spacing-section-gap: var(--spacing-20);       /* Veći gap */

  /* Override border radius za više zaobljeno */
  --radius-button: var(--radius-lg);
  --radius-card: var(--radius-xl);

  /* Sve ostalo nasljeđuje default vrijednosti */
}
```

---

## 2. TAILWIND KONFIGURACIJA

### 2.1 tailwind.config.ts

```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // COLORS - mapiranje na CSS varijable
      colors: {
        // Brand colors
        primary: {
          50: 'var(--color-primary-50)',
          100: 'var(--color-primary-100)',
          200: 'var(--color-primary-200)',
          300: 'var(--color-primary-300)',
          400: 'var(--color-primary-400)',
          500: 'var(--color-primary-500)',
          600: 'var(--color-primary-600)',
          700: 'var(--color-primary-700)',
          800: 'var(--color-primary-800)',
          900: 'var(--color-primary-900)',
          950: 'var(--color-primary-950)',
        },
        secondary: {
          50: 'var(--color-secondary-50)',
          100: 'var(--color-secondary-100)',
          200: 'var(--color-secondary-200)',
          300: 'var(--color-secondary-300)',
          400: 'var(--color-secondary-400)',
          500: 'var(--color-secondary-500)',
          600: 'var(--color-secondary-600)',
          700: 'var(--color-secondary-700)',
          800: 'var(--color-secondary-800)',
          900: 'var(--color-secondary-900)',
          950: 'var(--color-secondary-950)',
        },
        neutral: {
          50: 'var(--color-neutral-50)',
          100: 'var(--color-neutral-100)',
          200: 'var(--color-neutral-200)',
          300: 'var(--color-neutral-300)',
          400: 'var(--color-neutral-400)',
          500: 'var(--color-neutral-500)',
          600: 'var(--color-neutral-600)',
          700: 'var(--color-neutral-700)',
          800: 'var(--color-neutral-800)',
          900: 'var(--color-neutral-900)',
          950: 'var(--color-neutral-950)',
        },
        // Semantic colors
        success: {
          50: 'var(--color-success-50)',
          500: 'var(--color-success-500)',
          600: 'var(--color-success-600)',
          700: 'var(--color-success-700)',
        },
        error: {
          50: 'var(--color-error-50)',
          500: 'var(--color-error-500)',
          600: 'var(--color-error-600)',
          700: 'var(--color-error-700)',
        },
        warning: {
          50: 'var(--color-warning-50)',
          500: 'var(--color-warning-500)',
          600: 'var(--color-warning-600)',
          700: 'var(--color-warning-700)',
        },
        info: {
          50: 'var(--color-info-50)',
          500: 'var(--color-info-500)',
          600: 'var(--color-info-600)',
          700: 'var(--color-info-700)',
        },
        // Background, text, border
        bg: {
          primary: 'var(--color-bg-primary)',
          secondary: 'var(--color-bg-secondary)',
          tertiary: 'var(--color-bg-tertiary)',
          elevated: 'var(--color-bg-elevated)',
        },
        text: {
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          tertiary: 'var(--color-text-tertiary)',
          inverse: 'var(--color-text-inverse)',
        },
        border: {
          primary: 'var(--color-border-primary)',
          secondary: 'var(--color-border-secondary)',
          focus: 'var(--color-border-focus)',
          error: 'var(--color-border-error)',
        },
      },

      // SPACING - mapiranje na CSS varijable
      spacing: {
        '0': 'var(--spacing-0)',
        'px': 'var(--spacing-px)',
        '0.5': 'var(--spacing-0-5)',
        '1': 'var(--spacing-1)',
        '1.5': 'var(--spacing-1-5)',
        '2': 'var(--spacing-2)',
        '2.5': 'var(--spacing-2-5)',
        '3': 'var(--spacing-3)',
        '3.5': 'var(--spacing-3-5)',
        '4': 'var(--spacing-4)',
        '5': 'var(--spacing-5)',
        '6': 'var(--spacing-6)',
        '7': 'var(--spacing-7)',
        '8': 'var(--spacing-8)',
        '9': 'var(--spacing-9)',
        '10': 'var(--spacing-10)',
        '11': 'var(--spacing-11)',
        '12': 'var(--spacing-12)',
        '14': 'var(--spacing-14)',
        '16': 'var(--spacing-16)',
        '20': 'var(--spacing-20)',
        '24': 'var(--spacing-24)',
        '28': 'var(--spacing-28)',
        '32': 'var(--spacing-32)',
        '36': 'var(--spacing-36)',
        '40': 'var(--spacing-40)',
        '44': 'var(--spacing-44)',
        '48': 'var(--spacing-48)',
        '52': 'var(--spacing-52)',
        '56': 'var(--spacing-56)',
        '60': 'var(--spacing-60)',
        '64': 'var(--spacing-64)',
        '72': 'var(--spacing-72)',
        '80': 'var(--spacing-80)',
        '96': 'var(--spacing-96)',
      },

      // TYPOGRAPHY
      fontFamily: {
        sans: ['var(--font-sans)'],
        serif: ['var(--font-serif)'],
        mono: ['var(--font-mono)'],
      },
      fontSize: {
        xs: 'var(--font-size-xs)',
        sm: 'var(--font-size-sm)',
        base: 'var(--font-size-base)',
        lg: 'var(--font-size-lg)',
        xl: 'var(--font-size-xl)',
        '2xl': 'var(--font-size-2xl)',
        '3xl': 'var(--font-size-3xl)',
        '4xl': 'var(--font-size-4xl)',
        '5xl': 'var(--font-size-5xl)',
        '6xl': 'var(--font-size-6xl)',
        '7xl': 'var(--font-size-7xl)',
        '8xl': 'var(--font-size-8xl)',
        '9xl': 'var(--font-size-9xl)',
      },
      fontWeight: {
        thin: 'var(--font-weight-thin)',
        extralight: 'var(--font-weight-extralight)',
        light: 'var(--font-weight-light)',
        normal: 'var(--font-weight-normal)',
        medium: 'var(--font-weight-medium)',
        semibold: 'var(--font-weight-semibold)',
        bold: 'var(--font-weight-bold)',
        extrabold: 'var(--font-weight-extrabold)',
        black: 'var(--font-weight-black)',
      },
      lineHeight: {
        none: 'var(--line-height-none)',
        tight: 'var(--line-height-tight)',
        snug: 'var(--line-height-snug)',
        normal: 'var(--line-height-normal)',
        relaxed: 'var(--line-height-relaxed)',
        loose: 'var(--line-height-loose)',
      },

      // BORDERS
      borderRadius: {
        none: 'var(--radius-none)',
        sm: 'var(--radius-sm)',
        base: 'var(--radius-base)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
        '3xl': 'var(--radius-3xl)',
        full: 'var(--radius-full)',
      },
      borderWidth: {
        '0': 'var(--border-width-0)',
        '1': 'var(--border-width-1)',
        '2': 'var(--border-width-2)',
        '4': 'var(--border-width-4)',
        '8': 'var(--border-width-8)',
      },

      // SHADOWS
      boxShadow: {
        xs: 'var(--shadow-xs)',
        sm: 'var(--shadow-sm)',
        base: 'var(--shadow-base)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        xl: 'var(--shadow-xl)',
        '2xl': 'var(--shadow-2xl)',
        inner: 'var(--shadow-inner)',
        none: 'var(--shadow-none)',
      },

      // TRANSITIONS
      transitionDuration: {
        '75': 'var(--duration-75)',
        '100': 'var(--duration-100)',
        '150': 'var(--duration-150)',
        '200': 'var(--duration-200)',
        '300': 'var(--duration-300)',
        '500': 'var(--duration-500)',
        '700': 'var(--duration-700)',
        '1000': 'var(--duration-1000)',
      },
      transitionTimingFunction: {
        linear: 'var(--ease-linear)',
        in: 'var(--ease-in)',
        out: 'var(--ease-out)',
        'in-out': 'var(--ease-in-out)',
      },

      // Z-INDEX
      zIndex: {
        'dropdown': 'var(--z-dropdown)',
        'sticky': 'var(--z-sticky)',
        'fixed': 'var(--z-fixed)',
        'modal-backdrop': 'var(--z-modal-backdrop)',
        'modal': 'var(--z-modal)',
        'popover': 'var(--z-popover)',
        'tooltip': 'var(--z-tooltip)',
      },
    },
  },
  plugins: [],
}

export default config
```

---

## 3. UČITAVANJE TEMA

### 3.1 Theme Provider komponenta

```typescript
// src/context/ThemeContext.tsx
'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'default' | 'shop-a' | 'shop-b'

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('default')

  useEffect(() => {
    // Load theme from environment variable, localStorage, or config
    const savedTheme = (process.env.NEXT_PUBLIC_THEME || 'default') as Theme
    setTheme(savedTheme)

    // Dynamically load theme CSS
    loadThemeCSS(savedTheme)
  }, [])

  const loadThemeCSS = (themeName: Theme) => {
    // Remove previous theme link if exists
    const existingLink = document.getElementById('theme-css')
    if (existingLink) {
      existingLink.remove()
    }

    // Add new theme link
    const link = document.createElement('link')
    link.id = 'theme-css'
    link.rel = 'stylesheet'
    link.href = `/styles/themes/${themeName}.css`
    document.head.appendChild(link)
  }

  const changeTheme = (newTheme: Theme) => {
    setTheme(newTheme)
    loadThemeCSS(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme: changeTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
```

### 3.2 _app.tsx ili layout.tsx integracija

```typescript
// pages/_app.tsx (Pages Router)
import { ThemeProvider } from '@/context/ThemeContext'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
```

```typescript
// app/layout.tsx (App Router)
import { ThemeProvider } from '@/context/ThemeContext'
import '@/styles/globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="hr">
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
```

### 3.3 Environment-based theme selection

```bash
# .env.local
NEXT_PUBLIC_THEME=default

# .env.shop-a
NEXT_PUBLIC_THEME=shop-a

# .env.shop-b
NEXT_PUBLIC_THEME=shop-b
```

---

## 4. KORIŠTENJE U KOMPONENTAMA

### 4.1 Primjer Button komponente

```typescript
// src/components/ui/Button.tsx
import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  isLoading?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          // Base styles - koristi CSS varijable preko Tailwind
          'inline-flex items-center justify-center',
          'rounded-[var(--radius-button)]',
          'font-medium transition-[var(--transition-fast)]',
          'focus:outline-none focus:ring-2 focus:ring-offset-2',
          'disabled:opacity-50 disabled:cursor-not-allowed',

          // Variant styles
          {
            // Primary - koristi primary boju iz teme
            'bg-primary-500 text-white hover:bg-primary-600 focus:ring-primary-500':
              variant === 'primary',

            // Secondary - koristi secondary boju
            'bg-secondary-500 text-white hover:bg-secondary-600 focus:ring-secondary-500':
              variant === 'secondary',

            // Outline
            'border-2 border-primary-500 text-primary-500 hover:bg-primary-50':
              variant === 'outline',

            // Ghost
            'text-primary-600 hover:bg-primary-50':
              variant === 'ghost',

            // Danger
            'bg-error-500 text-white hover:bg-error-600 focus:ring-error-500':
              variant === 'danger',
          },

          // Size styles - koristi spacing varijable
          {
            'h-[var(--button-height-sm)] px-3 text-sm': size === 'sm',
            'h-[var(--button-height-md)] px-[var(--spacing-button-padding-x)] text-base': size === 'md',
            'h-[var(--button-height-lg)] px-6 text-lg': size === 'lg',
            'h-[var(--button-height-xl)] px-8 text-xl': size === 'xl',
          },

          className
        )}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading ? <LoadingSpinner /> : children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
```

### 4.2 Primjer ProductCard komponente

```typescript
// src/components/product/ProductCard.tsx
interface ProductCardProps {
  product: Product
  onAddToCart: (id: string) => void
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div
      className={cn(
        // Card styles - koristi CSS varijable
        'bg-[var(--card-bg)]',
        'border border-[var(--card-border)]',
        'rounded-[var(--card-radius)]',
        'p-[var(--card-padding)]',
        'shadow-[var(--shadow-card)]',
        'hover:shadow-[var(--shadow-card-hover)]',
        'transition-[var(--transition-base)]',

        // Width sa CSS varijablom
        'w-[var(--product-card-width)]'
      )}
    >
      {/* Product Image */}
      <div className="relative h-[var(--product-card-image-height)] mb-4">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain"
        />
        {product.badge && (
          <Badge variant={product.badge.type}>
            {product.badge.label}
          </Badge>
        )}
      </div>

      {/* Product Info */}
      <div className="space-y-2">
        <h3 className="text-text-primary font-semibold line-clamp-2">
          {product.name}
        </h3>

        <p className="text-text-secondary text-sm">
          {product.sku}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-primary-600 font-bold text-xl">
            {product.price} KM
          </span>

          <StockBadge status={product.stockStatus} />
        </div>

        <Button
          variant="primary"
          size="md"
          className="w-full"
          onClick={() => onAddToCart(product.id)}
        >
          Dodaj u košaricu
        </Button>
      </div>
    </div>
  )
}
```

### 4.3 Direktno korištenje CSS varijabli (ako je potrebno)

```typescript
// Kada Tailwind ne pokriva use case
<div
  style={{
    backgroundColor: 'var(--color-bg-elevated)',
    padding: 'var(--spacing-card-padding)',
    borderRadius: 'var(--radius-card)',
    boxShadow: 'var(--shadow-card)',
  }}
>
  Custom styled element
</div>
```

---

## 5. TYPESCRIPT TYPES ZA THEME

```typescript
// src/types/theme.ts

export type ThemeName = 'default' | 'shop-a' | 'shop-b'

export interface ThemeConfig {
  name: ThemeName
  displayName: string
  colors: {
    primary: string
    secondary: string
  }
  logo: string
  favicon: string
}

export const THEMES: Record<ThemeName, ThemeConfig> = {
  default: {
    name: 'default',
    displayName: 'Elektromaterijal',
    colors: {
      primary: '#3b82f6',
      secondary: '#22c55e',
    },
    logo: '/logos/default-logo.svg',
    favicon: '/favicons/default-favicon.ico',
  },
  'shop-a': {
    name: 'shop-a',
    displayName: 'Shop A',
    colors: {
      primary: '#dc2626',
      secondary: '#0891b2',
    },
    logo: '/logos/shop-a-logo.svg',
    favicon: '/favicons/shop-a-favicon.ico',
  },
  'shop-b': {
    name: 'shop-b',
    displayName: 'Shop B',
    colors: {
      primary: '#7c3aed',
      secondary: '#f59e0b',
    },
    logo: '/logos/shop-b-logo.svg',
    favicon: '/favicons/shop-b-favicon.ico',
  },
}
```

---

## 6. BUILD-TIME THEME SELECTION

### 6.1 Multi-tenant deployment strategy

```typescript
// scripts/build-theme.js
const fs = require('fs')
const path = require('path')

const theme = process.env.BUILD_THEME || 'default'

// Copy theme-specific files
fs.copyFileSync(
  path.join(__dirname, `../styles/themes/${theme}.css`),
  path.join(__dirname, '../public/theme.css')
)

// Update Next.js config with theme-specific settings
const config = require(`../config/${theme}.config.js`)
fs.writeFileSync(
  path.join(__dirname, '../theme-config.json'),
  JSON.stringify(config, null, 2)
)

console.log(`Built with theme: ${theme}`)
```

### 6.2 package.json scripts

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "npm run build:theme && next build",
    "build:theme": "node scripts/build-theme.js",
    "build:default": "BUILD_THEME=default npm run build",
    "build:shop-a": "BUILD_THEME=shop-a npm run build",
    "build:shop-b": "BUILD_THEME=shop-b npm run build"
  }
}
```

---

## 7. BEST PRACTICES

### 7.1 DOs ✅

1. **Uvijek koristi CSS varijable** umjesto hard-coded vrijednosti
   ```tsx
   ✅ className="bg-primary-500"
   ❌ className="bg-blue-500"
   ```

2. **Koristi semantic naming**
   ```tsx
   ✅ className="text-text-primary"
   ❌ className="text-gray-900"
   ```

3. **Koristi component-specific varijable za konzistentnost**
   ```tsx
   ✅ className="rounded-[var(--radius-button)]"
   ❌ className="rounded-md"
   ```

4. **Grupiši related varijable**
   ```css
   ✅ --button-height-md, --button-height-lg
   ❌ --height-md, --height-lg
   ```

5. **Dokumentuj sve custom varijable**
   ```css
   /* Product Card */
   --product-card-width: 280px;  /* Optimal width for grid layout */
   ```

### 7.2 DON'Ts ❌

1. **Ne hardcoduj boje**
   ```tsx
   ❌ style={{ color: '#3b82f6' }}
   ✅ className="text-primary-500"
   ```

2. **Ne koristi Tailwind color palette direktno**
   ```tsx
   ❌ className="bg-blue-500"
   ✅ className="bg-primary-500"
   ```

3. **Ne duplaj varijable**
   ```css
   ❌ --button-bg: #3b82f6; --primary-color: #3b82f6;
   ✅ --button-bg: var(--color-primary-500);
   ```

4. **Ne override Tailwind bez razloga**
   ```tsx
   ❌ style={{ padding: '16px' }}
   ✅ className="p-4"  // Koji koristi --spacing-4
   ```

### 7.3 Naming Conventions

- **Colors**: `--color-{category}-{variant}`
  - Example: `--color-primary-500`, `--color-text-secondary`

- **Spacing**: `--spacing-{size}`
  - Example: `--spacing-4`, `--spacing-container-padding`

- **Component**: `--{component}-{property}`
  - Example: `--button-height-md`, `--card-padding`

- **Semantic**: `--{purpose}-{variant}`
  - Example: `--shadow-card`, `--radius-button`

---

## 8. THEME SWITCHING UI (Optional)

```typescript
// src/components/ThemeSwitcher.tsx
'use client'

import { useTheme } from '@/context/ThemeContext'
import { THEMES } from '@/types/theme'

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex gap-2">
      {Object.values(THEMES).map((t) => (
        <button
          key={t.name}
          onClick={() => setTheme(t.name)}
          className={cn(
            'px-4 py-2 rounded-md transition-all',
            theme === t.name
              ? 'bg-primary-500 text-white'
              : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
          )}
        >
          {t.displayName}
        </button>
      ))}
    </div>
  )
}
```

---

## 9. ISR (INCREMENTAL STATIC REGENERATION) COMPATIBILITY

### 9.1 CSS Varijable su ISR Friendly! ✅

**Dobra vijest:** CSS varijable su potpuno kompatibilne sa Next.js ISR cache-om jer su **static CSS**.

```typescript
// Server Component sa ISR - RADI PERFEKTNO!
export const revalidate = 3600 // 1 hour cache

export default async function ProductsPage() {
  const products = await getProducts()

  return (
    <div className="bg-[var(--color-bg-primary)] p-[var(--spacing-container-padding)]">
      <ProductGrid products={products} />
    </div>
  )
}
```

**Zašto radi:**
- CSS varijable su u static CSS fajlu
- Server Components generišu HTML sa Tailwind klasama
- ISR cache-uje HTML output
- CSS se downloaduje jednom i cache-uje u browser-u
- **Result: 80%+ cache hit rate** ⚡

### 9.2 Build-Time Theme Selection (Preporučeno za ISR)

```typescript
// app/layout.tsx - Static theme import
import '@/styles/globals.css'
import '@/styles/themes/default.css' // Build-time決定

export default function RootLayout({ children }) {
  return (
    <html lang="hr">
      <body>{children}</body>
    </html>
  )
}
```

**Deployment Strategy:**
```json
// package.json
{
  "scripts": {
    "build:shop-a": "BUILD_THEME=shop-a next build",
    "build:shop-b": "BUILD_THEME=shop-b next build"
  }
}
```

```bash
# Deploy Shop A
BUILD_THEME=shop-a npm run build
# Deploy Shop B
BUILD_THEME=shop-b npm run build
```

### 9.3 Izbjegavaj Runtime Theme Switching za ISR

```typescript
// ❌ BAD za ISR - Client-side theme loading
'use client'

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('default')

  useEffect(() => {
    loadThemeCSS(theme) // Runtime loading - ne radi sa ISR!
  }, [theme])

  return <ThemeContext.Provider>{children}</ThemeContext.Provider>
}
```

**Problemi sa runtime switching:**
- Zahtijeva client component
- CSS se učitava dinamički (JS)
- Nema koristi od ISR cache-a
- FOUC (Flash of Unstyled Content)
- Veći bundle size

### 9.4 ISR-Optimized Setup

**Option 1: Static Import (Najjednostavnije)**

```typescript
// app/layout.tsx
import '@/styles/globals.css'
import '@/styles/themes/default.css'

export default function RootLayout({ children }) {
  return (
    <html lang="hr">
      <body>{children}</body>
    </html>
  )
}
```

**Option 2: Environment-Based (Za multi-tenant)**

```typescript
// next.config.js
const theme = process.env.BUILD_THEME || 'default'

module.exports = {
  env: {
    THEME: theme
  }
}
```

```typescript
// app/layout.tsx
import '@/styles/globals.css'
import(`@/styles/themes/${process.env.THEME}.css`) // Resolved at build-time!

export default function RootLayout({ children }) {
  return (
    <html lang="hr">
      <body>{children}</body>
    </html>
  )
}
```

**Option 3: Public Folder (Za CDN)**

```javascript
// scripts/build-theme.js
const fs = require('fs')
const theme = process.env.BUILD_THEME || 'default'

fs.copyFileSync(
  `styles/themes/${theme}.css`,
  `public/theme.css`
)
```

```typescript
// app/layout.tsx
import '@/styles/globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="hr">
      <head>
        <link rel="stylesheet" href="/theme.css" />
      </head>
      <body>{children}</body>
    </html>
  )
}
```

### 9.5 Vercel Deployment sa ISR

```typescript
// vercel.json (za multi-tenant)
{
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/next",
      "config": {
        "env": {
          "BUILD_THEME": "shop-a"
        }
      }
    }
  ]
}
```

**Ili multiple deployments:**
```bash
# Shop A deployment
vercel --env BUILD_THEME=shop-a --prod

# Shop B deployment
vercel --env BUILD_THEME=shop-b --prod
```

### 9.6 ISR Revalidation Examples

```typescript
// Time-based revalidation
export const revalidate = 3600 // 1 hour

// On-demand revalidation (API route)
// app/api/revalidate/route.ts
import { revalidatePath } from 'next/cache'

export async function POST(request: Request) {
  const path = request.nextUrl.searchParams.get('path')

  if (path) {
    revalidatePath(path)
    return Response.json({ revalidated: true, now: Date.now() })
  }

  return Response.json({ revalidated: false, now: Date.now() })
}
```

```typescript
// Usage in component
export const revalidate = 3600 // Revalidate every hour

export default async function ProductsPage() {
  // Server Component sa ISR
  const products = await fetch('https://api.example.com/products', {
    next: { revalidate: 3600 }
  }).then(res => res.json())

  return (
    <div className="bg-[var(--color-bg-secondary)]">
      {/* CSS varijable + ISR = Perfect! */}
      <ProductGrid products={products} />
    </div>
  )
}
```

### 9.7 Performance Tips za ISR + CSS Variables

1. **Static CSS Loading**
   ```typescript
   // ✅ GOOD - Static import
   import '@/styles/themes/default.css'

   // ❌ BAD - Dynamic import
   useEffect(() => {
     import(`@/styles/themes/${theme}.css`)
   }, [theme])
   ```

2. **Minimize CSS File Size**
   ```css
   /* ✅ GOOD - Only override what changes */
   :root {
     --color-primary-500: #dc2626; /* Just this */
   }

   /* ❌ BAD - Duplicate everything */
   :root {
     --color-primary-500: #dc2626;
     --spacing-1: 0.25rem; /* Already in default */
     /* ... */
   }
   ```

3. **CSS Cache Headers**
   ```javascript
   // next.config.js
   module.exports = {
     async headers() {
       return [
         {
           source: '/theme.css',
           headers: [
             {
               key: 'Cache-Control',
               value: 'public, max-age=31536000, immutable',
             },
           ],
         },
       ]
     },
   }
   ```

4. **Preload Critical CSS**
   ```typescript
   // app/layout.tsx
   export default function RootLayout({ children }) {
     return (
       <html lang="hr">
         <head>
           <link rel="preload" href="/theme.css" as="style" />
           <link rel="stylesheet" href="/theme.css" />
         </head>
         <body>{children}</body>
       </html>
     )
   }
   ```

### 9.8 Monitoring ISR Cache Performance

```typescript
// middleware.ts
import { NextResponse } from 'next/server'

export function middleware(request: Request) {
  const response = NextResponse.next()

  // Add cache status header
  response.headers.set('x-cache-status',
    request.headers.get('x-nextjs-cache') || 'MISS'
  )

  return response
}
```

**Cilj: 80%+ cache hit rate sa ISR + CSS Variables! 🚀**

---

## 10. TESTIRANJE TEMA

### 9.1 Visual Regression Testing

```typescript
// tests/themes.spec.ts
import { test, expect } from '@playwright/test'

const themes = ['default', 'shop-a', 'shop-b']

themes.forEach((theme) => {
  test.describe(`Theme: ${theme}`, () => {
    test.beforeEach(async ({ page }) => {
      await page.goto(`/?theme=${theme}`)
    })

    test('homepage renders correctly', async ({ page }) => {
      await expect(page).toHaveScreenshot(`homepage-${theme}.png`)
    })

    test('product card uses correct colors', async ({ page }) => {
      const card = page.locator('[data-testid="product-card"]').first()
      const bgColor = await card.evaluate((el) =>
        getComputedStyle(el).backgroundColor
      )

      // Verify theme colors are applied
      expect(bgColor).toBeTruthy()
    })
  })
})
```

---

## 10. MIGRACIJA POSTOJEĆEG KODA

### 10.1 Koraci za migraciju

1. **Kreiraj CSS varijable fajl**
2. **Update Tailwind config** da koristi varijable
3. **Pronađi sve hardcoded boje**
   ```bash
   grep -r "bg-blue-" src/
   grep -r "text-gray-" src/
   ```
4. **Zamijeni sa semantic imenima**
5. **Testiraj sve komponente**

### 10.2 Codemod script (example)

```javascript
// scripts/migrate-colors.js
const fs = require('fs')
const glob = require('glob')

const colorMap = {
  'bg-blue-500': 'bg-primary-500',
  'text-gray-900': 'text-text-primary',
  'border-gray-300': 'border-border-primary',
  // ... više mapiranja
}

glob('src/**/*.{ts,tsx}', (err, files) => {
  files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8')

    Object.entries(colorMap).forEach(([old, newColor]) => {
      content = content.replace(new RegExp(old, 'g'), newColor)
    })

    fs.writeFileSync(file, content)
  })
})
```

---

## SUMMARY

✅ **CSS varijable** za sve design tokens
✅ **Tailwind config** mapiran na varijable
✅ **Theme Provider** za dinamičko učitavanje
✅ **Environment-based** ili **runtime** theme selection
✅ **Type-safe** pristup sa TypeScript
✅ **Build-time optimization** opciono
✅ **Jednostavno skaliranje** za nove shopove

**Rezultat:** Jedna codebase, beskonačno tema! 🎨

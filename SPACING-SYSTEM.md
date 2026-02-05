# 📏 Complete Spacing System

## Trenutno stanje vs Optimalno stanje

### ❌ Problem sa trenutnim sistemom

**Nedovoljno semantic tokena:**
```css
/* globals.css - Trenutno */
--spacing-card-padding: var(--spacing-6);         /* 24px */
--spacing-button-padding-x: var(--spacing-6);     /* 24px */

/* ALI komponente često koriste hardcoded: */
className="p-4"   /* 16px */
className="px-6"  /* 24px */
className="gap-3" /* 12px */
```

**Rezultat:** Inconsistent spacing kroz aplikaciju!

---

## ✅ Optimalno - Comprehensive Semantic Tokens

```css
:root {
  /* ===========================
     BASE SCALE (ostaje isto)
     =========================== */
  --spacing-1: 0.25rem;      /* 4px */
  --spacing-2: 0.5rem;       /* 8px */
  --spacing-3: 0.75rem;      /* 12px */
  --spacing-4: 1rem;         /* 16px */
  --spacing-6: 1.5rem;       /* 24px */
  --spacing-8: 2rem;         /* 32px */

  /* ===========================
     SEMANTIC TOKENS - COMPONENT PADDING
     =========================== */

  /* Card Spacing */
  --card-padding: var(--spacing-6);              /* 24px */
  --card-padding-sm: var(--spacing-4);           /* 16px */
  --card-padding-lg: var(--spacing-8);           /* 32px */

  /* Container Spacing */
  --container-padding: var(--spacing-6);         /* 24px */
  --container-padding-mobile: var(--spacing-4);  /* 16px */

  /* Button Spacing */
  --button-padding-x: var(--spacing-6);          /* 24px */
  --button-padding-y: var(--spacing-2-5);        /* 10px */
  --button-padding-sm-x: var(--spacing-4);       /* 16px */
  --button-padding-sm-y: var(--spacing-2);       /* 8px */

  /* Input Spacing */
  --input-padding-x: var(--spacing-4);           /* 16px */
  --input-padding-y: var(--spacing-2-5);         /* 10px */

  /* Section Spacing */
  --section-padding-y: var(--spacing-16);        /* 64px */
  --section-gap: var(--spacing-12);              /* 48px */

  /* Grid/List Spacing */
  --grid-gap: var(--spacing-6);                  /* 24px */
  --grid-gap-mobile: var(--spacing-4);           /* 16px */
  --list-gap: var(--spacing-4);                  /* 16px */

  /* Header/Footer Spacing */
  --header-padding-x: var(--spacing-6);          /* 24px */
  --header-padding-y: var(--spacing-4);          /* 16px */
  --footer-padding-y: var(--spacing-16);         /* 64px */

  /* Modal/Drawer Spacing */
  --modal-padding: var(--spacing-8);             /* 32px */
  --drawer-padding: var(--spacing-6);            /* 24px */

  /* Product Card Specific */
  --product-card-padding: var(--spacing-6);      /* 24px */
  --product-card-gap: var(--spacing-4);          /* 16px */

  /* Mobile Specific */
  --mobile-padding: var(--spacing-4);            /* 16px */
  --mobile-gap: var(--spacing-3);                /* 12px */
}
```

---

## 📐 Kako koristiti - Praktični primjeri

### 1. ProductCard

**PRIJE (hardcoded):**
```tsx
<div className="p-4">
  <div className="mb-2">
    <h3 className="mb-2">Naziv</h3>
  </div>
</div>
```

**POSLIJE (semantic):**
```tsx
<div className="p-[var(--product-card-padding)]">
  <div className="mb-[var(--spacing-4)]">
    <h3 className="mb-[var(--spacing-2)]">Naziv</h3>
  </div>
</div>
```

### 2. Button

**PRIJE:**
```tsx
<button className="px-6 py-2">Klikni</button>
```

**POSLIJE:**
```tsx
<button className="px-[var(--button-padding-x)] py-[var(--button-padding-y)]">
  Klikni
</button>
```

### 3. Container

**PRIJE:**
```tsx
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
```

**POSLIJE:**
```tsx
<div className="max-w-7xl mx-auto px-[var(--container-padding-mobile)] sm:px-[var(--container-padding)]">
```

### 4. Grid

**PRIJE:**
```tsx
<div className="grid gap-6 sm:gap-4">
```

**POSLIJE:**
```tsx
<div className="grid gap-[var(--grid-gap-mobile)] sm:gap-[var(--grid-gap)]">
```

---

## 🎨 Theme Override - Spacing Edition

### Sharp Theme - Tighter Spacing

```css
/* styles/themes/sharp.css */
:root {
  /* Radius overrides */
  --radius-button: 0;
  --radius-card: 0;

  /* Spacing overrides - tighter spacing for sharp look */
  --card-padding: var(--spacing-4);              /* 24px → 16px */
  --button-padding-x: var(--spacing-4);          /* 24px → 16px */
  --section-padding-y: var(--spacing-12);        /* 64px → 48px */
}
```

**Rezultat:** Sve komponente dobijaju tighter spacing! ✨

### Spacious Theme - Looser Spacing

```css
/* styles/themes/spacious.css */
:root {
  /* Radius overrides */
  --radius-button: var(--radius-lg);
  --radius-card: var(--radius-xl);

  /* Spacing overrides - more breathing room */
  --card-padding: var(--spacing-8);              /* 24px → 32px */
  --button-padding-x: var(--spacing-8);          /* 24px → 32px */
  --section-padding-y: var(--spacing-20);        /* 64px → 80px */
  --grid-gap: var(--spacing-8);                  /* 24px → 32px */
}
```

**Rezultat:** Sve komponente dobijaju više prostora! ✨

---

## 🔍 Gdje trenutno NEMA semantic tokena (trebalo bi dodati)

```tsx
// ❌ Hardcoded spacing u komponentama:

// ProductCard.tsx:199
<div className="p-4">  // Trebalo bi: p-[var(--product-card-padding)]

// ProductCard.tsx:225
<div className="mb-3">  // Trebalo bi: mb-[var(--spacing-3)]

// MobileHeader.tsx:88
<header className="px-4">  // Trebalo bi: px-[var(--mobile-padding)]

// MobileProductCard.tsx
<div className="gap-3">  // Trebalo bi: gap-[var(--mobile-gap)]
```

---

## 📊 Vizualni Primjer - Spacing Hierarchy

```
┌────────────────────────────────────────────┐
│  BASE SCALE (Concrete values)             │
├────────────────────────────────────────────┤
│  --spacing-2: 8px                          │
│  --spacing-4: 16px                         │
│  --spacing-6: 24px                         │
│  --spacing-8: 32px                         │
└────────────────────────────────────────────┘
                   ↓
┌────────────────────────────────────────────┐
│  SEMANTIC TOKENS (Purpose-based)          │
├────────────────────────────────────────────┤
│  --card-padding: var(--spacing-6)          │
│  --button-padding-x: var(--spacing-6)      │
│  --grid-gap: var(--spacing-6)              │
└────────────────────────────────────────────┘
                   ↓
┌────────────────────────────────────────────┐
│  COMPONENTS (Use semantic)                │
├────────────────────────────────────────────┤
│  <Card className="p-[var(--card-padding)]">│
│  <Button className="px-[var(--button-padding-x)]">│
│  <Grid className="gap-[var(--grid-gap)]">  │
└────────────────────────────────────────────┘
                   ↓
┌────────────────────────────────────────────┐
│  THEME OVERRIDE (Optional)                │
├────────────────────────────────────────────┤
│  :root {                                   │
│    --card-padding: var(--spacing-8);       │
│  }                                         │
└────────────────────────────────────────────┘
```

---

## 🎯 Action Plan - Dodati semantic tokene

### Korak 1: Dodaj u globals.css

```css
/* app/globals.css - dodaj nakon linija 154-161 */

/* ===========================
   SEMANTIC SPACING (Extended)
   =========================== */

/* Card */
--card-padding: var(--spacing-6);
--card-padding-sm: var(--spacing-4);
--card-gap: var(--spacing-4);

/* Grid */
--grid-gap: var(--spacing-6);
--grid-gap-mobile: var(--spacing-4);

/* Product Card */
--product-card-padding: var(--spacing-6);
--product-card-gap: var(--spacing-4);

/* Mobile */
--mobile-padding: var(--spacing-4);
--mobile-gap: var(--spacing-3);

/* Header */
--header-padding-x: var(--spacing-6);
--header-padding-y: var(--spacing-4);
```

### Korak 2: Refactor komponente

```tsx
// ProductCard.tsx - PRIJE
<div className="p-4">

// ProductCard.tsx - POSLIJE
<div className="p-[var(--product-card-padding)]">
```

### Korak 3: Kreiraj spacing theme

```css
/* styles/themes/compact.css */
:root {
  --card-padding: var(--spacing-4);
  --button-padding-x: var(--spacing-4);
  --grid-gap: var(--spacing-4);
}
```

---

## 💡 Benefiti Semantic Spacing Tokena

1. **Konzistentnost** - Sve kartice imaju isti padding
2. **Centralizovana kontrola** - Promijeni na jednom mjestu
3. **Theme support** - Različite teme, različit spacing
4. **Maintainability** - Lakše mijenjanje u budućnosti
5. **Predictability** - Znaš što očekivati

---

## 🚀 Primjer - Sve zajedno

```tsx
// Button komponenta sa SVIM semantic tokenima
<button className={cn(
  // Border radius
  'rounded-[var(--radius-button)]',

  // Padding
  'px-[var(--button-padding-x)]',
  'py-[var(--button-padding-y)]',

  // Height
  'h-[var(--button-height-md)]',

  // Colors
  'bg-[var(--color-primary-500)]',
  'hover:bg-[var(--color-primary-hover)]',

  // Shadow
  'shadow-[var(--shadow-sm)]'
)}>
  Klikni me
</button>
```

**Rezultat:** Svi aspekti buttona kontrolirani kroz CSS varijable! 🎯

---

## 📚 Summary

| Aspekt | Base Scale | Semantic Token | Component | Theme Override |
|--------|-----------|----------------|-----------|----------------|
| **Border Radius** | `--radius-md: 6px` | `--radius-button` | `rounded-[var(--radius-button)]` | `--radius-button: 0` ✅ |
| **Spacing** | `--spacing-6: 24px` | `--card-padding` | `p-[var(--card-padding)]` | `--card-padding: var(--spacing-8)` ✅ |
| **Colors** | `--color-primary-500` | `--color-primary-hover` | `bg-[var(--color-primary-500)]` | `--color-primary-500: #newcolor` ✅ |
| **Shadows** | `--shadow-sm` | `--shadow-card` | `shadow-[var(--shadow-card)]` | `--shadow-card: custom` ✅ |

**Ključ:** Sve radi na istom principu - Base → Semantic → Component → Theme! 🎨

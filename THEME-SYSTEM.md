# 🎨 Theme System - Vodič za korištenje

## 🎯 Što je kreirano

### 1. **Theme fajlovi** ✅

```
styles/themes/
├── default.css   - Standardna tema (baseline)
├── sharp.css     - Moderna tema bez border radiusa (0px)
├── rounded.css   - Friendly tema sa velikim zaobljenjem (12-24px)
└── README.md     - Detaljna dokumentacija
```

### 2. **Public folder** ✅

Theme fajlovi su kopirani u `public/styles/themes/` za dinamičko učitavanje u browseru.

### 3. **Showcase stranica** ✅

Interaktivna stranica za testiranje tema: `/design-system/themes`

---

## 🚀 Kako koristiti Sharp temu (bez radiusa)

### Opcija 1: Static Import (Najjednostavnije)

Dodaj import u `app/layout.tsx`:

```tsx
import '@/app/globals.css'
import '@/styles/themes/sharp.css'  // 👈 Dodaj ovu liniju

export default function RootLayout({ children }) {
  return (
    <html lang="hr">
      <body>{children}</body>
    </html>
  )
}
```

**Rezultat:** Sve komponente automatski dobijaju `border-radius: 0px`!

---

### Opcija 2: Dinamičko učitavanje

Koristi showcase stranicu da testiraš teme:

```bash
npm run dev
# Otvori: http://localhost:3000/design-system/themes
```

Na ovoj stranici možeš **live switchati između tema** i vidjeti razlike!

---

## 📐 Što Sharp tema mijenja

### Prije (Default tema)
```css
--radius-button: var(--radius-md);    /* 6px */
--radius-input: var(--radius-md);     /* 6px */
--radius-card: var(--radius-lg);      /* 8px */
--radius-modal: var(--radius-xl);     /* 12px */
```

### Poslije (Sharp tema)
```css
--radius-button: 0;                   /* 0px ✨ */
--radius-input: 0;                    /* 0px ✨ */
--radius-card: 0;                     /* 0px ✨ */
--radius-modal: 0;                    /* 0px ✨ */
```

**Bonus:** Sharp tema također ima jače shadows za bolji kontrast!

---

## 🎨 Sve teme uporedo

| Tema | Border Radius | Shadows | Stil |
|------|--------------|---------|------|
| **Default** | 6-8px | Umjereni | Profesionalni |
| **Sharp** | 0px (oštre ivice) | Jači | Minimalistički |
| **Rounded** | 12-24px | Mekši | Friendly |

---

## 🔧 Kako promijeniti samo JEDNU stvar

Da promijeniš border radius sa 8px na 0px za **SVE** komponente:

### Način 1: Koristi Sharp temu
```tsx
import '@/styles/themes/sharp.css'  // Gotovo! ✅
```

### Način 2: Kreiraj custom override
```css
/* styles/themes/my-custom.css */
:root {
  --radius-button: 0;
  --radius-input: 0;
  --radius-card: 0;
  --radius-modal: 0;
}
```

### Način 3: Override u globals.css (ne preporučuje se)
```css
/* app/globals.css */
:root {
  --radius-button: 0 !important;
}
```

---

## 🎯 Primjer komponenti sa Sharp temom

### Button
```tsx
<button className="rounded-[var(--radius-button)]">
  Klikni me
</button>
```

**Rezultat:**
- Default tema: `border-radius: 6px`
- Sharp tema: `border-radius: 0px` ✨

### Card
```tsx
<div className="rounded-[var(--radius-card)] p-[var(--card-padding)]">
  Sadržaj kartice
</div>
```

**Rezultat:**
- Default tema: `border-radius: 8px`
- Sharp tema: `border-radius: 0px` ✨

---

## 📊 Gdje su CSS varijable definirane

1. **Globalne varijable** (base scale):
   - `app/globals.css:218-227` - Border radius skala

2. **Semantic varijable** (component-specific):
   - `app/globals.css:236-241` - Semantic radius za komponente

3. **Theme overrides**:
   - `styles/themes/sharp.css` - Override za sharp temu
   - `styles/themes/rounded.css` - Override za rounded temu

---

## 🔥 Quick Start

### 1. Testiraj teme
```bash
npm run dev
# Otvori: http://localhost:3000/design-system/themes
```

### 2. Odaberi Sharp temu
Klikni na "Sharp" tile i vidi kako sve komponente dobijaju oštre uglove!

### 3. Primijeni u produkciji
```tsx
// app/layout.tsx
import '@/styles/themes/sharp.css'
```

### 4. Gotovo! 🎉
Sve komponente sada imaju `border-radius: 0px`!

---

## 💡 FAQ

**Q: Moram li mijenjati svaku komponentu?**
A: NE! Samo importaj temu i sve komponente koje koriste `var(--radius-button)`, `var(--radius-card)`, itd. automatski dobijaju nove vrijednosti.

**Q: Mogu li kombinirati teme?**
A: DA! Možeš kreirati custom temu koja uzima border radius iz Sharp teme i shadows iz Rounded teme.

**Q: Kako vratiti na default?**
A: Ukloni import Sharp teme iz `layout.tsx` ili importaj `default.css`.

**Q: Mogu li imati različite teme za različite shopove?**
A: DA! Koristi environment varijable:
```bash
# Shop A
NEXT_PUBLIC_THEME=sharp npm run build

# Shop B
NEXT_PUBLIC_THEME=rounded npm run build
```

---

## 📚 Reference

- **Kompletna dokumentacija**: `/dizajn-sistem.md`
- **Globalne varijable**: `/app/globals.css`
- **Theme fajlovi**: `/styles/themes/`
- **Theme README**: `/styles/themes/README.md`
- **Showcase**: `/app/(ui-showcase)/design-system/themes/page.tsx`

---

## 🎨 Vizualni primjer

```
┌─────────────────────────────────────┐
│  DEFAULT TEMA                       │
├─────────────────────────────────────┤
│  ╭─────────╮  ← border-radius: 8px  │
│  │ Button  │                        │
│  ╰─────────╯                        │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│  SHARP TEMA                         │
├─────────────────────────────────────┤
│  ┌─────────┐  ← border-radius: 0px  │
│  │ Button  │                        │
│  └─────────┘                        │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│  ROUNDED TEMA                       │
├─────────────────────────────────────┤
│  ╭──────────╮ ← border-radius: 16px │
│  │  Button  │                       │
│  ╰──────────╯                       │
└─────────────────────────────────────┘
```

---

**✨ Theme sistem je sada potpuno funkcionalan! ✨**

Sve što trebaš je jedan import i sve komponente automatski koriste novu temu! 🚀

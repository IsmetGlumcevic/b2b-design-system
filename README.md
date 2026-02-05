# B2B Design System

Modern, skalabilan design system za B2B e-commerce shopove. Build-time theme sistem za maksimalan performance i Next.js ISR kompatibilnost.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Development
npm run dev

# Build
npm run build

# Start production server
npm start
```

Otvori [http://localhost:3000](http://localhost:3000) u browseru.

## 🎨 Dostupne Teme

Projekat podržava **8 tema** koje se biraju na build time. Promijeni `.env` fajl i rebuild.

### 1. **Default** (Standardna)
```bash
NEXT_PUBLIC_THEME=default
```
- Border radius: 6-8px
- Spacing: 16-24px
- Stil: Balansirano, profesionalno

### 2. **Sharp** (Bez radiusa)
```bash
NEXT_PUBLIC_THEME=sharp
```
- Border radius: 0px (oštre ivice)
- Spacing: 16-24px
- Stil: Minimalistički, moderan

### 3. **Rounded** (Zaobljeno)
```bash
NEXT_PUBLIC_THEME=rounded
```
- Border radius: 12-24px
- Spacing: 16-24px
- Stil: Friendly, pristupačno

### 4. **Compact** (Gust layout)
```bash
NEXT_PUBLIC_THEME=compact
```
- Border radius: 2-6px
- Spacing: 12-16px (tighter)
- Stil: Desktop power users

### 5. **Spacious** (Prostran layout)
```bash
NEXT_PUBLIC_THEME=spacious
```
- Border radius: 12-16px
- Spacing: 32-40px (looser)
- Stil: Premium, luxury

### 6. **Industrial** (Tehnički B2B)
```bash
NEXT_PUBLIC_THEME=industrial
```
- Border radius: 0-2px
- Spacing: 12-20px (tight)
- Stil: Technical, precizno

### 7. **Corporate** (Korporativni)
```bash
NEXT_PUBLIC_THEME=corporate
```
- Border radius: 2-4px
- Spacing: 16-24px
- Stil: Formalan, konzervativan

### 8. **Brutalist** (Brutalistički)
```bash
NEXT_PUBLIC_THEME=brutalist
```
- Border radius: 0px (sharp)
- Spacing: 16-32px (asymmetric)
- Stil: Raw, minimalistički, high contrast

## 📝 Kako Promijeniti Temu

### Lokalno (Development & Testing)

1. Promijeni `.env` fajl:
```bash
# .env
NEXT_PUBLIC_THEME=sharp
```

2. Restartuj dev server:
```bash
npm run dev
```

### Production (Deployment)

Postavi environment varijablu na hosting platformi:

**Vercel Dashboard:**
```
Environment Variables:
NEXT_PUBLIC_THEME=sharp
```

**Vercel CLI:**
```bash
vercel --env NEXT_PUBLIC_THEME=sharp --prod
```

## 🎯 UI Showcase

Pregledaj sve teme i komponente:

```
http://localhost:3000/design-system
```

- **Design System** - Colors, Typography, Spacing, Shadows
- **Themes** - Live preview svih 5 tema
- **Components** - 30+ komponenti
- **Mobile** - iOS/Android komponente

## 📚 Tehnologije

- **Next.js 16.1.6** (App Router)
- **React 19.2.3**
- **TypeScript** (strict mode)
- **Tailwind CSS 4** + CSS Variables
- **Server Components** (default)
- **ISR Compatible** (build-time themes)

## 📁 Struktura

```
app/                    # Next.js App Router
├── (ui-showcase)/     # Component showcase
├── layout.tsx         # Root layout
└── page.tsx           # Homepage

src/
├── components/        # UI components
└── lib/               # Utilities & icons

styles/
└── themes/            # Theme CSS files
    ├── default.css
    ├── sharp.css
    ├── rounded.css
    ├── compact.css
    └── spacious.css

app/globals.css        # Base CSS variables
app/theme.css          # Build-time injected theme (generated)
```

## 🔧 Build Script

Build skripta automatski injektuje odabranu temu:

```bash
# scripts/build-theme.js
# Čita NEXT_PUBLIC_THEME iz .env
# Kopira styles/themes/{theme}.css → app/theme.css
# Next.js bundle-uje sa maksimalnom cache efficiency
```

## 📖 Dokumentacija

- `SIMPLE-THEME-GUIDE.md` - Brzi vodič za teme (PREPORUČENO)
- `THEME-SYSTEM.md` - Theme system overview
- `SPACING-SYSTEM.md` - Spacing varijable
- `dizajn-sistem.md` - Kompletna CSS varijable referenca

## 🎯 Performance

Build-time teme omogućavaju:
- ✅ Zero runtime JavaScript za teme
- ✅ 100% ISR compatible
- ✅ Server Components friendly
- ✅ No FOUC (Flash of Unstyled Content)
- ✅ Optimalan cache hit rate (80%+)

## 📞 Support

Za pitanja i probleme, provjeri dokumentaciju ili otvori issue.

---

**Made with ❤️ for B2B e-commerce**

# 🎨 Jednostavan Theme Guide - Samo Jedan .env Fajl!

## 🎯 Glavni Koncept

**SAMO JEDAN `.env` FAJL!**

Promijeni `NEXT_PUBLIC_THEME=sharp`, rebuild, deploy. TO JE TO! 🚀

---

## 📝 Tvoj .env Fajl

```bash
# .env

# Odaberi temu (samo promijeni ovu liniju!)
NEXT_PUBLIC_THEME=default

# Shop info
NEXT_PUBLIC_SHOP_NAME=Elektromaterijal Shop
NEXT_PUBLIC_SHOP_ID=shop-default
```

**Dostupne teme:**
- `default` - Standardni izgled (6-8px radius, 16-24px spacing)
- `sharp` - Bez radiusa (0px radius, jači shadows)
- `rounded` - Veliki radius (12-24px radius, mekši shadows)
- `compact` - Tighter spacing (2-6px radius, 12-16px spacing)
- `spacious` - Looser spacing (12-16px radius, 32-40px spacing)
- `industrial` - Tehnički B2B (0-2px radius, tight spacing, steel blue)
- `corporate` - Korporativni (2-4px radius, balanced spacing, navy blue)
- `brutalist` - Brutalistički (0px radius, asymmetric spacing, high contrast)

---

## 🚀 Workflow - Super Jednostavan!

### **1. Development (Lokalno testiranje):**

```bash
# Default tema
npm run dev

# Želiš testirati Sharp temu?
# 1. Promijeni .env: NEXT_PUBLIC_THEME=sharp
# 2. Restartuj dev server (Ctrl+C, npm run dev)
```

### **2. Build (Za deployment):**

```bash
# 1. Promijeni .env na željenu temu
NEXT_PUBLIC_THEME=sharp

# 2. Build
npm run build

# 3. Test lokalno
npm run start

# Otvori http://localhost:3000 i provjeri
```

### **3. Deploy na Vercel:**

**NE commituj .env u git!**

Umjesto toga, postavi environment varijable u Vercel dashboard-u:

```
Vercel Dashboard → Settings → Environment Variables:
├─ NEXT_PUBLIC_THEME: sharp
├─ NEXT_PUBLIC_SHOP_NAME: Moj Shop
└─ NEXT_PUBLIC_SHOP_ID: shop-1
```

Ili CLI:
```bash
vercel --env NEXT_PUBLIC_THEME=sharp --prod
```

---

## 📊 Multiple Shopova - Deployment

### **Strategija: Različiti Vercel Projekti**

```
┌─────────────────────────────────────┐
│  Shop A - Vercel Project            │
│  Domain: shop-a.example.com         │
│  Env Vars:                          │
│  ├─ NEXT_PUBLIC_THEME: sharp        │
│  └─ NEXT_PUBLIC_SHOP_NAME: Shop A   │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│  Shop B - Vercel Project            │
│  Domain: shop-b.example.com         │
│  Env Vars:                          │
│  ├─ NEXT_PUBLIC_THEME: compact      │
│  └─ NEXT_PUBLIC_SHOP_NAME: Shop B   │
└─────────────────────────────────────┘
```

**Deployment:**
```bash
# Shop A
vercel --project shop-a \
       --env NEXT_PUBLIC_THEME=sharp \
       --prod

# Shop B
vercel --project shop-b \
       --env NEXT_PUBLIC_THEME=compact \
       --prod
```

---

## 🔥 Quick Reference

### **Testiranje Lokalno:**

```bash
# Inline env var (ne mijenja .env)
NEXT_PUBLIC_THEME=sharp npm run build
NEXT_PUBLIC_THEME=compact npm run build
NEXT_PUBLIC_THEME=spacious npm run build
```

### **Provjeri Koja Tema Je Aktivna:**

```bash
# Nakon builda, provjeri app/theme.css
cat app/theme.css

# Vidjećeš header:
# /* Theme: sharp */
# /* Shop: Shop A */
# /* Built: 2025-02-05... */
```

### **Browser DevTools:**

```javascript
// Otvori Console i provjeri CSS varijable
getComputedStyle(document.documentElement)
  .getPropertyValue('--radius-button')

// "0" → Sharp theme
// "0.375rem" → Default theme
```

---

## ✅ Prednosti - Build-Time Themes

```
✅ Jedan .env fajl - jednostavno!
✅ Zero runtime JavaScript
✅ Perfektna ISR cache kompatibilnost
✅ No FOUC (Flash of Unstyled Content)
✅ Optimalan performance
✅ Server Components friendly
```

---

## 📚 Dodatna Dokumentacija

Ako želiš više detalja:
- **THEME-SYSTEM.md** - Theme sistem overview
- **SPACING-SYSTEM.md** - Spacing varijable
- **dizajn-sistem.md** - Kompletna CSS varijable referenca

---

## 💡 FAQ

**Q: Moram li restartovati dev server nakon promjene .env?**
A: DA! Next.js učitava .env na startu servera.

**Q: Kako deployovati različite shopove?**
A: Kreiraj različite Vercel projekte sa različitim env vars.

**Q: Da li mogu dodati svoju temu?**
A: DA! Kreiraj `styles/themes/moja-tema.css` i postavi `NEXT_PUBLIC_THEME=moja-tema`.

**Q: Zašto ne vidim promjene?**
A: Provijeri:
1. Da li si restartovao dev server?
2. Da li `app/theme.css` postoji?
3. Da li build skripta radi? (`npm run build:theme`)

---

## 🎯 Summary

**Sve što trebaš:**

1. Jedan `.env` fajl
2. Promijeni `NEXT_PUBLIC_THEME=sharp`
3. `npm run build`
4. Deploy

**TO JE TO!** Maksimalno jednostavno, maksimalan performance! 🚀

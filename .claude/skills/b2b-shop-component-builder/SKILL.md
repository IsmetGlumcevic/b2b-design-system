# B2B Shop Component Builder Skill

Skill za kreiranje komponenti za B2B web shop prema definisanim standardima i dokumentaciji.

**VAŽNO:** Svaka nova komponenta MORA imati svoju showcase stranicu!

---

## KAKO KORISTITI OVAJ SKILL

Ovaj skill je **self-contained** - sva dokumentacija se nalazi unutar skill foldera:
- `MASTER-PROMPT.md` - Glavni prompt sa kompletnim uputstvima
- `lista_komponenti.md` - Lista svih komponenti (~285)
- `struktura_ekrana.md` - Hijerarhijska struktura stranica
- `dizajn-sistem.md` - CSS varijable i design system
- `folder-struktura.md` - Folder organizacija projekta

**Ne trebaš ništa kopirati** - skill automatski čita dokumentaciju iz skill foldera.

---

## WORKFLOW (OPTIMIZOVANO)

Kada korisnik pozove ovaj skill, slijedi ovaj workflow:

### 1. ANALIZA ZAHTJEVA I CONDITIONAL LOADING

**Umjesto učitavanja svih MD fajlova (197 KB), učitaj samo što ti treba:**

#### Scenario A: Kreiranje nove komponente
```bash
# Korisnik: "napravi Button komponentu"

1. Odredi kategoriju komponente (Button = shared/)
2. Učitaj SAMO relevantne sekcije:
   - folder-struktura.md → sekcija "src/components/shared/"
   - lista_komponenti.md → pretraži "Button"
   - dizajn-sistem.md → sekcija "Colors" i "Spacing"

# Ušteda: ~30 KB umjesto 197 KB
```

#### Scenario B: Kreiranje showcase stranice
```bash
# Korisnik: "napravi showcase za Button"

1. Provjeri da li komponenta postoji
2. Učitaj showcase template iz templates/showcase-page.tsx
3. NE učitavaj druge MD fajlove

# Ušteda: ~190 KB
```

#### Scenario C: Update postojeće komponente
```bash
# Korisnik: "dodaj loading state u Button"

1. Prvo pročitaj postojeću komponentu (Read tool)
2. NE učitavaj MD fajlove - samo updatuj kod
3. Ako treba dizajn reference → učitaj samo dizajn-sistem.md

# Ušteda: ~169 KB
```

**Pravilo:** Učitaj dokumentaciju samo ako:
- Nisi siguran gdje komponenta treba biti (folder struktura)
- Trebaš reference za design tokens (boje, spacing)
- Korisnik traži specifičan style ili pattern

---

### 2. PROVJERI FOLDER STRUKTURU

Provjeri da li projekat prati definisanu folder strukturu:
- `app/` - Next.js App Router
- `app/(ui-showcase)/` - UI Showcase stranice
- `src/components/` - Sve komponente
- `src/styles/` - CSS fajlovi
- `src/lib/` - Utility funkcije

**Component categories:**
```
src/components/
├── shared/          # Button, Input, Badge, Card
├── layout/          # Header, Footer, Sidebar
├── product/         # ProductCard, ProductGrid, ProductDetails
├── cart/            # Cart komponente
├── checkout/        # Checkout flow
├── account/         # User account
├── search/          # Search Modal
└── filters/         # Filter sidebar
```

---

### 3. KREIRAJ KOMPONENTU

**A. Odluči Server vs Client:**
- **Server Component (default)** - statički content, nema state/eventi
- **Client Component** - treba `'use client'` (state, onClick, useEffect, browser APIs)

**B. Koristi template:**

```bash
# Server Component (default)
Pročitaj: templates/server-component.tsx
Prilagodi za konkretnu komponentu

# Client Component
Pročitaj: templates/client-component.tsx
Dodaj 'use client' na vrh
```

**C. Styling - uvijek koristi CSS varijable:**
```typescript
// Boje
className="bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]"

// Spacing
className="p-[var(--spacing-4)] gap-[var(--spacing-2)]"

// Border radius
className="rounded-[var(--radius-button)]"

// Typography
className="text-[var(--font-size-body)]"
```

**D. Ikonice - Untitled Icons Pro:**
```typescript
import { IconSearch, IconCart, IconUser } from '@/lib/icons'

<IconSearch className="w-5 h-5 text-[var(--color-icon-primary)]" />
```

**E. JEZIK - Svi UI tekstovi na hrvatskom (OBAVEZNO!):**

**VAŽNO:** Svi tekstovi u UI komponentama MORAJU biti na hrvatskom jeziku:
- ✅ Button labels: "Dodaj u košaricu", "Pretraži", "Prijavi se"
- ✅ Placeholder tekstovi: "Unesite email...", "Pretražite proizvode..."
- ✅ Error poruke: "Molimo unesite ispravnu email adresu"
- ✅ Success poruke: "Uspješno dodano u košaricu"
- ✅ Loading state: "Učitavanje...", "Molimo pričekajte..."
- ✅ Tooltips i ARIA labels: "Otvori navigaciju", "Zatvori"
- ✅ Confirmation: "Potvrdi", "Odustani", "Da", "Ne"

```typescript
// ✅ PRAVILNO - Hrvatski
<button>Dodaj u košaricu</button>
<input placeholder="Pretražite proizvode..." />
<p>Nema rezultata</p>

// ❌ POGREŠNO - Engleski ili drugi jezici
<button>Add to cart</button>
<input placeholder="Search products..." />
<p>No results</p>
```

**F. Responsive Design (OBAVEZNO!):**

**SVAKA KOMPONENTA MORA biti prilagođena za sve uređaje:**

```typescript
// Tailwind breakpoints (Mobile-first pristup)
// sm:  640px  (Tablet portrait)
// md:  768px  (Tablet landscape)
// lg:  1024px (Desktop)
// xl:  1280px (Large desktop)
// 2xl: 1536px (Extra large)

// Primjer responsive komponente:
<div className="
  flex flex-col          /* Mobile: vertikalni stack */
  gap-4                  /* Mobile: manji gap */
  p-4                    /* Mobile: manji padding */

  sm:flex-row            /* Tablet: horizontalni layout */
  sm:gap-6
  sm:p-6

  lg:gap-8               /* Desktop: veći spacing */
  lg:p-8
">
  {/* Sadržaj */}
</div>

// Typography responsive:
<h1 className="
  text-2xl               /* Mobile: 24px */
  sm:text-3xl            /* Tablet: 30px */
  lg:text-4xl            /* Desktop: 36px */
">
  Naslov
</h1>

// Grid responsive:
<div className="
  grid
  grid-cols-1            /* Mobile: 1 kolona */
  sm:grid-cols-2         /* Tablet: 2 kolone */
  lg:grid-cols-3         /* Desktop: 3 kolone */
  xl:grid-cols-4         /* Large: 4 kolone */
  gap-4
">
  {/* Cards */}
</div>
```

**Testiranje na različitim uređajima:**
- 📱 **Mobile:** 375px (iPhone SE), 390px (iPhone 12/13/14)
- 📱 **Tablet:** 768px (iPad), 820px (iPad Air)
- 💻 **Desktop:** 1280px, 1440px, 1920px

**Pravila:**
1. **Mobile-first** - dizajniraj prvo za mobile, onda scale up
2. **Testiranje** - provjeri na svim breakpoints-ima
3. **Touch targets** - minimum 44x44px za mobile (dugmad, linkovi)
4. **Hidden elements** - koristi `hidden sm:block` za desktop-only elemente
5. **Container width** - koristi `max-w-` klase za kontrolu širine

---

### 4. KREIRAJ SHOWCASE STRANICU (OBAVEZNO!)

**SVAKA KOMPONENTA MORA IMATI SHOWCASE STRANICU!**

```bash
# Lokacija
app/(ui-showcase)/components/[component-name]/page.tsx

# Template
Pročitaj: templates/showcase-page.tsx
Prilagodi za konkretnu komponentu
```

**Showcase MORA prikazati:**
- ✅ Sve varijante (primary, secondary, outline, ghost)
- ✅ Sve veličine (sm, md, lg)
- ✅ Sva stanja (default, hover, disabled, loading)
- ✅ Sa i bez ikonica
- ✅ Props tabelu
- ✅ Code snippets

---

### 5. NAKON IMPLEMENTACIJE - CHECKLIST

Provjeri da je SVE napravljeno:

- [ ] ✅ Komponenta kreirana u `src/components/[category]/`
- [ ] ✅ **Showcase stranica kreirana**
- [ ] ✅ TypeScript tipovi definisani (bez `any`)
- [ ] ✅ CSS varijable korištene (ne hardcoded)
- [ ] ✅ Untitled Icons Pro korišten
- [ ] ✅ Server/Client odluka pravilna
- [ ] ✅ **Svi UI tekstovi na HRVATSKOM jeziku** (button labels, placeholders, poruke)
- [ ] ✅ **Responsive design - testiran na:**
  - [ ] 📱 Mobile (375px, 390px)
  - [ ] 📱 Tablet (768px, 820px)
  - [ ] 💻 Desktop (1280px, 1440px, 1920px)
- [ ] ✅ Accessibility (ARIA labels, keyboard navigation)

---

## PRIMJERI KOMANDI

```bash
# Jednostavna komponenta
/b2b-shop-component-builder kreiraj Button komponentu

# Kompleksna komponenta
/b2b-shop-component-builder napravi ProductCard sa thumbnail, naziv, cijenu i add to cart dugme

# Samo showcase
/b2b-shop-component-builder napravi showcase stranicu za Input komponentu

# Update postojeće
/b2b-shop-component-builder dodaj loading state u ProductGrid
```

---

## VAŽNE NAPOMENE

1. **CONDITIONAL LOADING** - ne učitavaj sve MD fajlove odmah, samo što trebaš
2. **Server Components su default** - samo dodaj 'use client' kad je potrebno
3. **CSS varijable su obavezne** - nikad hardcode-uj boje ili spacing
4. **Untitled Icons Pro** - sve ikonice iz ovog paketa
5. **TypeScript strict mode** - nikad koristi `any`, uvijek tipizuj
6. **HRVATSKI JEZIK (OBAVEZNO!)** - svi UI tekstovi MORAJU biti na hrvatskom:
   - Button labels, placeholders, error/success poruke
   - Tooltips, ARIA labels, confirmation tekstovi
   - Loading state, validation poruke, help tekstovi
   - Primjeri: "Dodaj u košaricu", "Pretražite proizvode...", "Uspješno spremljeno"
7. **RESPONSIVE DESIGN (OBAVEZNO!)** - svaka komponenta MORA raditi na:
   - 📱 **Mobile** (375px - 767px)
   - 📱 **Tablet** (768px - 1023px)
   - 💻 **Desktop** (1024px+)
   - Koristi mobile-first pristup (dizajniraj prvo za mobile)
8. **Accessibility** - dodaj ARIA labels, keyboard navigation, focus states
9. **SHOWCASE JE OBAVEZAN** - svaka komponenta MORA imati showcase stranicu!
10. **Template fajlovi** - koristi templates/ folder za brže kreiranje

---

## TEMPLATE FAJLOVI

```
templates/
├── server-component.tsx    # Server Component template
├── client-component.tsx    # Client Component template
└── showcase-page.tsx       # Showcase stranica template
```

**Koristi Read tool za učitavanje template-a prema potrebi.**

---

## MD DOKUMENTACIJA (učitaj conditional)

Svi MD fajlovi su u skill folderu. **Ne učitavaj ih sve odjednom** - učitaj samo što trebaš:

1. **MASTER-PROMPT.md** (24 KB) - kompletan workflow i best practices
   - Učitaj samo ako trebaš detaljne upute

2. **lista_komponenti.md** (22 KB) - lista ~285 komponenti
   - Pretraži (Grep) za specifičnu komponentu umjesto čitanja cijelog fajla

3. **struktura_ekrana.md** (56 KB) - hijerarhija stranica
   - Učitaj samo ako kreiraš cijelu stranicu (ne samo komponentu)

4. **dizajn-sistem.md** (40 KB) - CSS varijable i design tokens
   - Učitaj samo sekciju koja ti treba (Colors, Spacing, Typography)

5. **folder-struktura.md** (27 KB) - folder organizacija
   - Učitaj samo ako nisi siguran gdje komponenta ide

**Strategija:** Koristi Grep za pretragu umjesto Read cijelog fajla!

---

## SUCCESS METRICS

Dobro implementirana komponenta ima:
- ✅ TypeScript tipove (strict mode)
- ✅ CSS varijable za sve boje/spacing
- ✅ Untitled Icons Pro za ikonice
- ✅ **Svi UI tekstovi na HRVATSKOM jeziku** (bez engleskog!)
- ✅ **Responsive design testirano na:**
  - 📱 Mobile (375px, 390px, 414px)
  - 📱 Tablet (768px, 820px, 1024px)
  - 💻 Desktop (1280px, 1440px, 1920px)
- ✅ Accessibility (ARIA, keyboard, focus states)
- ✅ Reusability (clear props interface)
- ✅ ISR friendly (Server Component gdje je moguće)
- ✅ **Showcase stranica sa svim varijantama**

---

## TROUBLESHOOTING

**Problem:** Komponenta treba state ali je Server Component
**Rješenje:** Dodaj 'use client' na vrh fajla

**Problem:** CSS varijabla ne postoji
**Rješenje:** Provjeri dizajn-sistem.md ili dodaj novu u globals.css

**Problem:** Ne znaš gdje komponenta ide
**Rješenje:** Učitaj folder-struktura.md sekciju za component categories

---

## OPTIMIZACIJE

**Token usage optimizacije:**
- ✅ Conditional loading MD fajlova (~70% ušteda)
- ✅ Template fajlovi u templates/ (~30% ušteda)
- ✅ Grep pretraga umjesto Read (~50% ušteda za specifične queries)
- ✅ Skraćeni inline primjeri (~20% ušteda)

**Procjena:** ~60 KB po task umjesto 200 KB (70% manje tokena!)

---

Skill je spreman za korištenje! 🚀

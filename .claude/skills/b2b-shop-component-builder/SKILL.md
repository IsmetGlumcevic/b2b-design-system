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
- [ ] ✅ Responsive design (mobile-first)
- [ ] ✅ Accessibility (ARIA labels)

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
6. **Mobile-first** - responzivnost je obavezna
7. **Accessibility** - dodaj ARIA labels gdje je potrebno
8. **SHOWCASE JE OBAVEZAN** - svaka komponenta MORA imati showcase stranicu!
9. **Template fajlovi** - koristi templates/ folder za brže kreiranje

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
- ✅ Responsive design
- ✅ Accessibility
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

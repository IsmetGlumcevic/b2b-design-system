# B2B Shop Component Builder - Skill Setup

Globalni Claude Code skill za kreiranje B2B web shop komponenti.

---

## INSTALACIJA

Skill je već instaliran u `~/.claude/skills/b2b-shop-component-builder/`

---

## KORIŠTENJE

### 1. SKILL JE SELF-CONTAINED

**Ne trebaš kopirati fajlove!** Skill je sada potpuno autonoman - sva dokumentacija je u skill folderu:

```
~/.claude/skills/b2b-shop-component-builder/
├── SKILL.md                     - Glavni skill fajl
├── README.md                    - Ova dokumentacija
├── MASTER-PROMPT.md             - Kompletna dokumentacija
├── dizajn-sistem.md             - CSS varijable i theme sistem
├── folder-struktura.md          - Folder organizacija
├── lista_komponenti.md          - Lista ~285 komponenti
└── struktura_ekrana.md          - Hijerarhijska struktura stranica
```

Skill automatski čita dokumentaciju iz svog foldera - možeš ga koristiti u **bilo kom Next.js projektu**!

### 2. POZIVANJE SKILLA

U bilo kom projektu gdje postoje gore navedeni MD fajlovi:

```bash
# Osnovni poziv
/b2b-shop-component-builder

# Sa specifičnim zahtjevom
/b2b-shop-component-builder napravi Button komponentu

# Kreiranje kompleksne komponente
/b2b-shop-component-builder implementiraj ProductCard sa slikom, nazivom, cijenom

# Update postojeće
/b2b-shop-component-builder dodaj loading state u ProductGrid
```

### 3. ALTERNATIVNO: NOVI PROJEKT TEMPLATE

Možeš kreirati template projekat sa svim potrebnim fajlovima:

```bash
# Kreiraj folder za template
mkdir -p ~/templates/b2b-shop-nextjs

# Kopiraj dokumentaciju
cp /Users/ismetglumcevic/projects/acecloud/aleta/ApisExOmega/*.md ~/templates/b2b-shop-nextjs/

# Dodaj .gitignore, package.json, tsconfig.json, itd.
```

Onda kad praviš novi projekat:

```bash
cp -r ~/templates/b2b-shop-nextjs my-new-shop
cd my-new-shop
npm install
```

---

## DOKUMENTACIJSKI FAJLOVI

Skill sadrži ove fajlove u `~/.claude/skills/b2b-shop-component-builder/`:

1. **MASTER-PROMPT.md** (~2,500 linija)
   - Kompletna dokumentacija
   - Component creation workflow
   - Best practices
   - Primjeri implementacije

2. **lista_komponenti.md** (~570 linija)
   - Lista svih ~285 komponenti
   - Organizovano po kategorijama
   - Hijerarhija komponenti

3. **struktura_ekrana.md** (~1,000 linija)
   - Hijerarhijska struktura stranica
   - Kako su komponente nested
   - 25+ stranica definisano

4. **dizajn-sistem.md** (~1,500 linija)
   - CSS varijable sistem
   - Tema switching
   - ISR compatibility
   - Tailwind config

5. **folder-struktura.md** (~800 linija)
   - Next.js App Router organizacija
   - Server vs Client komponente
   - Untitled Icons integracija

**UKUPNO: ~8,000 linija dokumentacije**

---

## ŠEME POZIVANJA

### Kreiranje pojedinačne komponente
```bash
/b2b-shop-component-builder kreiraj Button
/b2b-shop-component-builder napravi Input sa validation
/b2b-shop-component-builder implementiraj Badge sa variants
```

### Kreiranje kompleksne komponente
```bash
/b2b-shop-component-builder napravi ProductCard
/b2b-shop-component-builder implementiraj Search Modal
/b2b-shop-component-builder kreiraj Filter Sidebar
```

### Update postojećih komponenti
```bash
/b2b-shop-component-builder dodaj dark mode u Button
/b2b-shop-component-builder refaktoriši ProductCard - izdvoj ProductImage
/b2b-shop-component-builder optimizuj Header za mobile
```

### Kreiranje cijele sekcije/feature-a
```bash
/b2b-shop-component-builder implementiraj cijeli Cart flow
/b2b-shop-component-builder napravi Checkout stranicu sa svim komponentama
/b2b-shop-component-builder kreiraj Account Dashboard
```

---

## KAKO SKILL RADI

1. **Učitava MD fajlove** iz trenutnog projekta
2. **Analizira zahtjev** korisnika
3. **Odlučuje** da li je Server ili Client komponenta
4. **Određuje folder** na osnovu feature-a
5. **Implementira** komponentu sa:
   - TypeScript tipovima (strict mode)
   - CSS varijablama (ne hardcoded values)
   - Untitled Icons Pro
   - Responsive design
   - Accessibility
6. **Provjerava** da li je sve po standardu

---

## BEST PRACTICES

### ✅ DO
- Koristi skill kad praviš novu komponentu
- Čitaj MD fajlove prije implementacije
- Koristi CSS varijable za sve
- Server Components su default
- TypeScript strict mode
- Mobile-first responsive
- Accessibility first

### ❌ DON'T
- Ne hardcode-uj boje ili spacing
- Ne koristi `any` type
- Ne ignoriši dokumentaciju
- Ne preskači Server/Client odluku
- Ne ignoriši responsive design
- Ne zaboravi accessibility

---

## TROUBLESHOOTING

**Problem:** Skill pravi Client komponentu kad treba Server
```bash
# Explicit request
/b2b-shop-component-builder napravi ProductCard kao Server Component
```

**Problem:** CSS varijabla ne postoji
```bash
# Provjeri dizajn-sistem.md za dostupne varijable
cat dizajn-sistem.md | grep "color-primary"

# Ili dodaj novu u src/styles/globals.css
```

**Problem:** Untitled Icons ikonica ne postoji
```bash
# Provjeri dokumentaciju ili koristi sličnu
# https://www.untitledui.com/icons
```

---

## UPDATING SKILL

Ako trebaš update-ovati skill:

```bash
# Edit skill file
code ~/.claude/skills/b2b-shop-component-builder/SKILL.md

# Skill će automatski biti picked up u sljedećem Claude Code session-u
```

---

## STRUKTURA SKILLA

```
~/.claude/skills/b2b-shop-component-builder/
├── SKILL.md          # Glavni skill file (Claude čita ovaj fajl)
└── README.md         # Ova dokumentacija
```

---

## REQUIREMENTS

- Node.js 18+
- Next.js 15+
- TypeScript 5+
- Tailwind CSS
- Untitled Icons Pro (licenca)
- Claude Code CLI

---

## EXAMPLES PROJEKAT

Originalni projekat sa svim MD fajlovima:
```
/Users/ismetglumcevic/projects/acecloud/aleta/ApisExOmega/
```

Možeš ga koristiti kao reference ili template.

---

## SUPPORT

Ako imaš problema sa skill-om:
1. Provjeri da li MD fajlovi postoje u projektu
2. Provjeri da li su MD fajlovi up-to-date
3. Provjeri da li Next.js projekat prati folder strukturu
4. Pogledaj primjere u MASTER-PROMPT.md

---

## CHANGELOG

**v1.0.0** (2026-01-28)
- Inicijalna verzija
- Support za ~285 komponenti
- CSS varijable sistem
- ISR friendly
- Untitled Icons Pro integracija
- Server/Client component odluka
- TypeScript strict mode
- Responsive design
- Accessibility

---

## LICENSE

Private use only - za interne projekte.

---

Skill je spreman za korištenje! 🚀

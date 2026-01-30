# B2B Mobile Component Builder Skill

Skill za kreiranje React Native komponenti sa Expo tehnologijom za B2B mobilne aplikacije (iOS i Android).

**Isti design sistem kao web verzija** - komponente dijele istu CSS varijable logiku!

---

## TEHNOLOGIJE

- **React Native** - framework za native aplikacije
- **Expo** - toolchain za RN (Router, Icons, Dev tools)
- **NativeWind** - Tailwind CSS za React Native
- **TypeScript** - strict mode
- **Design tokens** - iste CSS varijable kao web verzija

---

## KAKO KORISTITI OVAJ SKILL

Ovaj skill je **self-contained** - sva dokumentacija se nalazi unutar skill foldera.

**Dijeli design sistem sa web verzijom:**
- Iste boje (CSS varijable)
- Isti spacing
- Iste komponente (Button, Input, Card, ProductCard)
- Isti workflow

---

## WORKFLOW (OPTIMIZOVANO)

### 1. ANALIZA ZAHTJEVA I CONDITIONAL LOADING

**Isto kao web skill - učitaj samo što ti treba:**

#### Scenario A: Kreiranje nove komponente
```bash
# Korisnik: "napravi Button komponentu za mobile"

1. Odredi kategoriju komponente (Button = shared/)
2. Učitaj SAMO relevantne sekcije iz web design sistema
3. Adaptiraj za React Native sintaksu

# Ušteda: ~30 KB umjesto 197 KB
```

#### Scenario B: Kreiranje screen-a
```bash
# Korisnik: "napravi ProductDetails screen"

1. Učitaj samo strukturu ekrana
2. Koristi screen-component template
3. Komponuj od postojećih komponenti

# Ušteda: ~170 KB
```

#### Scenario C: Update postojeće komponente
```bash
# Korisnik: "dodaj loading state u Button"

1. Pročitaj postojeću komponentu
2. NE učitavaj MD fajlove

# Ušteda: ~197 KB
```

---

### 2. PROVJERI FOLDER STRUKTURU

Expo projekat prati ovu strukturu:

```
mobile-app/
├── app/                    # Expo Router (file-based routing)
│   ├── (tabs)/            # Tab navigation
│   │   ├── index.tsx      # Home screen
│   │   ├── products.tsx   # Products screen
│   │   └── account.tsx    # Account screen
│   ├── product/
│   │   └── [id].tsx       # Product details (dynamic route)
│   ├── _layout.tsx        # Root layout
│   └── +not-found.tsx     # 404 screen
├── components/             # Sve komponente
│   ├── shared/            # Button, Input, Badge, Card
│   ├── layout/            # Header, TabBar, DrawerMenu
│   ├── product/           # ProductCard, ProductGrid
│   ├── cart/              # Cart komponente
│   └── account/           # User account
├── constants/             # Design tokens (boje, spacing)
│   └── Colors.ts
├── hooks/                 # Custom hooks
└── utils/                 # Utility funkcije
```

---

### 3. KREIRAJ KOMPONENTU

**A. React Native komponente - NEMA Server/Client razlike:**

```tsx
// Sve komponente su functional components
import { View, Text, TouchableOpacity } from 'react-native'
```

**B. Koristi template:**

```bash
# Functional Component (default)
Pročitaj: templates/functional-component.tsx

# Screen Component (cijeli ekran)
Pročitaj: templates/screen-component.tsx
```

**C. Styling - NativeWind (Tailwind za React Native):**

```tsx
import { View, Text } from 'react-native'

// Iste Tailwind klase kao web verzija!
<View className="flex-1 bg-[var(--color-bg-primary)] p-4">
  <Text className="text-[var(--color-text-primary)] text-lg font-semibold">
    Hello Mobile
  </Text>
</View>

// CSS varijable se učitavaju iz constants/Colors.ts
```

**D. Design Tokens (iste vrijednosti kao web):**

```typescript
// constants/Colors.ts
export const Colors = {
  light: {
    primary: {
      50: '#F0F9FF',
      100: '#E0F2FE',
      500: '#0EA5E9',
      600: '#0284C7',
      900: '#0C4A6E',
    },
    text: {
      primary: '#181d27',
      secondary: '#535862',
    },
    bg: {
      primary: '#FFFFFF',
      secondary: '#FAFAFA',
    },
  },
  dark: {
    // Dark mode boje
  },
}

// Korištenje:
<View style={{ backgroundColor: Colors.light.primary[500] }} />

// Ili sa NativeWind:
<View className="bg-primary-500" />
```

**E. Platform-specific kod (iOS vs Android):**

```tsx
import { Platform } from 'react-native'

// Platform check
{Platform.OS === 'ios' ? (
  <Text>iOS verzija</Text>
) : (
  <Text>Android verzija</Text>
)}

// Platform.select
const styles = {
  container: {
    padding: Platform.select({
      ios: 16,
      android: 12,
    }),
  },
}

// Separate fajlovi (automatsko učitavanje)
// Button.ios.tsx
// Button.android.tsx
```

**F. Responsive Design - Screen Dimensions:**

```tsx
import { Dimensions, useWindowDimensions } from 'react-native'

// Static dimensions
const { width, height } = Dimensions.get('window')

// Dynamic (responds to rotation)
function MyComponent() {
  const { width, height } = useWindowDimensions()

  return (
    <View style={{
      flexDirection: width > 768 ? 'row' : 'column'
    }}>
      {/* Tablet horizontal, mobile vertical */}
    </View>
  )
}

// Breakpoints (isti kao web):
// Mobile: < 768px
// Tablet: 768px - 1024px
// Desktop (iPad Pro): > 1024px
```

**G. Navigacija - Expo Router:**

```tsx
import { Link, router, useLocalSearchParams } from 'expo-router'

// Link komponenta
<Link href="/product/123" asChild>
  <TouchableOpacity>
    <Text>View Product</Text>
  </TouchableOpacity>
</Link>

// Programmatic navigation
router.push('/product/123')
router.back()

// Dynamic route params
// app/product/[id].tsx
const { id } = useLocalSearchParams()
```

**H. Ikonice - Expo Icons:**

```tsx
import { Ionicons } from '@expo/vector-icons'

<Ionicons
  name="cart-outline"
  size={24}
  color={Colors.light.text.primary}
/>

// Ili custom SVG sa react-native-svg
```

---

### 4. KREIRAJ SHOWCASE SCREEN (PREPORUČENO!)

**Showcase screen za testiranje komponenti:**

```bash
# Lokacija
app/(dev)/components/[component-name].tsx

# Template
Pročitaj: templates/showcase-screen.tsx
Prilagodi za konkretnu komponentu
```

**Showcase screen MORA prikazati:**
- ✅ Sve varijante (primary, secondary, outline)
- ✅ Sve veličine (sm, md, lg)
- ✅ Sva stanja (default, pressed, disabled, loading)
- ✅ iOS i Android verzije
- ✅ Light i dark mode

---

### 5. NAKON IMPLEMENTACIJE - CHECKLIST

Provjeri da je SVE napravljeno:

- [ ] ✅ Komponenta kreirana u `components/[category]/`
- [ ] ✅ TypeScript tipovi definisani (bez `any`)
- [ ] ✅ Design tokens korišteni (Colors.ts)
- [ ] ✅ NativeWind/StyleSheet styling
- [ ] ✅ **Platform-specific testiranje:**
  - [ ] 📱 iOS simulator
  - [ ] 📱 Android emulator
  - [ ] 📱 Physical device (iOS)
  - [ ] 📱 Physical device (Android)
- [ ] ✅ **Screen sizes testiranje:**
  - [ ] 📱 iPhone (375pt, 390pt, 428pt)
  - [ ] 📱 Android (360dp, 412dp)
  - [ ] 📱 iPad (768pt, 1024pt)
- [ ] ✅ Light i Dark mode
- [ ] ✅ Accessibility (Screen reader support)
- [ ] ✅ Showcase screen kreiran (preporučeno)

---

## PRIMJERI KOMANDI

```bash
# Jednostavna komponenta
/b2b-mobile-component-builder napravi Button komponentu

# Kompleksna komponenta
/b2b-mobile-component-builder napravi ProductCard za mobile

# Screen sa navigacijom
/b2b-mobile-component-builder napravi ProductDetails screen

# Platform-specific komponenta
/b2b-mobile-component-builder napravi Button sa iOS i Android verzijama

# Showcase screen
/b2b-mobile-component-builder napravi showcase screen za Button
```

---

## VAŽNE NAPOMENE

1. **CONDITIONAL LOADING** - ne učitavaj sve MD fajlove odmah
2. **Functional components** - nema Server/Client distinkcije
3. **Design tokens** - iste boje kao web verzija (CSS varijable)
4. **NativeWind** - koristi Tailwind klase (ili StyleSheet API)
5. **TypeScript strict mode** - nikad koristi `any`
6. **Platform-specific** - testiraj na iOS i Android
7. **Responsive** - koristi useWindowDimensions za breakpoints
8. **Dark mode** - podržaj light i dark teme
9. **Accessibility** - accessible={true}, accessibilityLabel
10. **Expo Router** - file-based routing (kao Next.js App Router)

---

## TEMPLATE FAJLOVI

```
templates/
├── functional-component.tsx   # Osnovni functional component
├── screen-component.tsx       # Screen sa navigacijom
└── showcase-screen.tsx        # Showcase za testiranje
```

---

## DESIGN TOKENS (dijeljeni sa web verzijom)

**Boje:**
```typescript
Colors.light.primary[500]     → #0EA5E9
Colors.light.text.primary     → #181d27
Colors.light.bg.primary       → #FFFFFF
```

**Spacing (iste vrijednosti kao web):**
```typescript
// Tailwind/NativeWind
className="p-4 gap-2 m-6"

// StyleSheet
{ padding: 16, gap: 8, margin: 24 }
```

**Typography:**
```typescript
className="text-sm"   → 14px
className="text-base" → 16px
className="text-lg"   → 18px
className="text-xl"   → 20px
```

---

## WEB vs MOBILE MAPPING

| Web (HTML) | React Native | Opis |
|------------|--------------|------|
| `<div>` | `<View>` | Container |
| `<span>`, `<p>` | `<Text>` | Tekst |
| `<button>` | `<TouchableOpacity>` | Dugme |
| `<input>` | `<TextInput>` | Input polje |
| `<img>` | `<Image>` | Slika |
| `<ScrollView>` | `<ScrollView>` | Scrollable area |
| `onClick` | `onPress` | Tap handler |
| `className` | `className` (NativeWind) ili `style` | Styling |

---

## EXPO SPECIFIČNOSTI

**Router:**
```tsx
// app/_layout.tsx - Root layout
export default function RootLayout() {
  return <Stack />
}

// app/(tabs)/_layout.tsx - Tab layout
export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" />
      <Tabs.Screen name="products" />
    </Tabs>
  )
}
```

**Icons:**
```tsx
import { Ionicons } from '@expo/vector-icons'
// 1000+ ikonica dostupno
```

**Image:**
```tsx
import { Image } from 'expo-image'
// Optimizovane slike sa caching-om
```

---

## SUCCESS METRICS

Dobro implementirana mobile komponenta ima:
- ✅ TypeScript tipove (strict mode)
- ✅ Design tokens iz Colors.ts
- ✅ NativeWind ili StyleSheet styling
- ✅ **Platform testiranje:**
  - 📱 iOS (simulator i device)
  - 📱 Android (emulator i device)
- ✅ **Screen sizes:**
  - iPhone (375pt, 390pt, 428pt)
  - Android (360dp, 412dp)
  - iPad (768pt, 1024pt)
- ✅ Light i Dark mode podrška
- ✅ Accessibility (Screen reader, Voice Control)
- ✅ Showcase screen (preporučeno)

---

## TROUBLESHOOTING

**Problem:** NativeWind ne radi
**Rješenje:** Provjeri tailwind.config.js i nativewind setup

**Problem:** Komponenta različito izgleda na iOS i Android
**Rješenje:** Koristi Platform.select() za platform-specific stilove

**Problem:** CSS varijabla ne postoji
**Rješenje:** Provjeri constants/Colors.ts ili dodaj novu boju

**Problem:** Navigacija ne radi
**Rješenje:** Provjeri Expo Router setup i file naming

---

## OPTIMIZACIJE

**Token usage optimizacije:**
- ✅ Conditional loading MD fajlova (~70% ušteda)
- ✅ Template fajlovi u templates/ (~30% ušteda)
- ✅ Dijeljeni design sistem sa web verzijom (~50% ušteda)

**Procjena:** ~40 KB po task umjesto 200 KB (80% manje tokena!)

---

Skill je spreman za kreiranje React Native/Expo komponenti! 🚀📱

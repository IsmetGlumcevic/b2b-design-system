# B2B Mobile Component Builder - React Native/Expo Skill

Globalni Claude Code skill za kreiranje React Native komponenti sa Expo tehnologijom.

**Dijeli design sistem sa web verzijom** - iste boje, spacing, komponente!

---

## INSTALACIJA

Skill je instaliran u `~/.claude/skills/b2b-mobile-component-builder/`

---

## TEHNOLOGIJE

- **React Native** - cross-platform native apps
- **Expo** - toolchain (Router, Icons, Image, Font)
- **NativeWind** - Tailwind CSS za React Native
- **TypeScript** - strict mode
- **Design Tokens** - dijeljeni sa web verzijom

---

## KORIŠTENJE

### Pozivanje skilla

```bash
# Osnovni poziv
/b2b-mobile-component-builder

# Kreiranje komponente
/b2b-mobile-component-builder napravi Button komponentu za mobile

# Kreiranje screen-a
/b2b-mobile-component-builder napravi ProductDetails screen

# Platform-specific
/b2b-mobile-component-builder napravi Button sa iOS i Android verzijama
```

---

## FOLDER STRUKTURA (Expo projekat)

```
mobile-app/
├── app/                    # Expo Router (file-based routing)
│   ├── (tabs)/            # Tab navigation
│   │   ├── index.tsx      # Home
│   │   ├── products.tsx   # Products
│   │   └── account.tsx    # Account
│   ├── product/
│   │   └── [id].tsx       # Product details
│   ├── _layout.tsx        # Root layout
│   └── +not-found.tsx     # 404
│
├── components/             # Sve komponente
│   ├── shared/            # Button, Input, Badge, Card
│   ├── layout/            # Header, TabBar
│   ├── product/           # ProductCard, ProductGrid
│   ├── cart/              # Cart komponente
│   └── account/           # User account
│
├── constants/             # Design tokens
│   └── Colors.ts          # Boje (iste kao web)
│
├── hooks/                 # Custom hooks
└── utils/                 # Utils
```

---

## DESIGN SISTEM (dijeljeni sa web-om)

### Boje

```typescript
// constants/Colors.ts
export const Colors = {
  light: {
    primary: {
      500: '#0EA5E9',  // Ista kao web --color-primary-500
      600: '#0284C7',
    },
    text: {
      primary: '#181d27',    // --color-text-primary
      secondary: '#535862',  // --color-text-secondary
    },
    bg: {
      primary: '#FFFFFF',    // --color-bg-primary
      secondary: '#FAFAFA',  // --color-bg-secondary
    },
  },
}
```

### Spacing (iste vrijednosti kao web)

```typescript
// NativeWind
className="p-4 gap-2 m-6"

// StyleSheet
{ padding: 16, gap: 8, margin: 24 }

// Mapping:
// p-1 = 4px   | p-2 = 8px   | p-3 = 12px
// p-4 = 16px  | p-6 = 24px  | p-8 = 32px
```

---

## WEB vs MOBILE KOMPONENTE

| Web (Next.js) | Mobile (React Native) | Opis |
|---------------|-----------------------|------|
| `<div>` | `<View>` | Container |
| `<span>`, `<p>` | `<Text>` | Tekst |
| `<button>` | `<TouchableOpacity>` | Dugme |
| `<input>` | `<TextInput>` | Input |
| `<img>` | `<Image>` | Slika |
| `onClick` | `onPress` | Handler |
| Server/Client | Functional | Svi functional |

---

## PRIMJERI KOMPONENTI

### Button komponenta

```tsx
// components/shared/Button.tsx
import { TouchableOpacity, Text } from 'react-native'

interface ButtonProps {
  variant?: 'primary' | 'secondary'
  onPress?: () => void
  children: React.ReactNode
}

export default function Button({
  variant = 'primary',
  onPress,
  children
}: ButtonProps) {
  return (
    <TouchableOpacity
      className={`
        px-4 py-2 rounded-lg
        ${variant === 'primary' ? 'bg-primary-500' : 'bg-secondary-500'}
      `}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text className="text-white text-base font-semibold">
        {children}
      </Text>
    </TouchableOpacity>
  )
}
```

### Screen komponenta

```tsx
// app/product/[id].tsx
import { View, Text, ScrollView } from 'react-native'
import { Stack, useLocalSearchParams } from 'expo-router'

export default function ProductDetailsScreen() {
  const { id } = useLocalSearchParams()

  return (
    <>
      <Stack.Screen options={{ title: 'Product Details' }} />

      <ScrollView className="flex-1 bg-white p-4">
        <Text className="text-2xl font-bold">Product {id}</Text>
      </ScrollView>
    </>
  )
}
```

---

## PLATFORM-SPECIFIC KOD

### iOS vs Android

```tsx
import { Platform } from 'react-native'

// Conditional rendering
{Platform.OS === 'ios' ? (
  <Text>iOS Style</Text>
) : (
  <Text>Android Style</Text>
)}

// Platform.select
const buttonHeight = Platform.select({
  ios: 44,     // Apple HIG minimum
  android: 48, // Material Design minimum
})

// Separate files (automatski učitava)
// Button.ios.tsx  ← iOS verzija
// Button.android.tsx  ← Android verzija
```

---

## RESPONSIVE DESIGN

```tsx
import { useWindowDimensions } from 'react-native'

function MyComponent() {
  const { width } = useWindowDimensions()

  // Breakpoints (isti kao web)
  const isTablet = width >= 768
  const isDesktop = width >= 1024

  return (
    <View style={{
      flexDirection: isTablet ? 'row' : 'column'
    }}>
      {/* Content */}
    </View>
  )
}
```

---

## NAVIGACIJA (Expo Router)

```tsx
import { Link, router } from 'expo-router'

// Link komponenta
<Link href="/product/123" asChild>
  <TouchableOpacity>
    <Text>View Product</Text>
  </TouchableOpacity>
</Link>

// Programmatic
router.push('/product/123')
router.back()
```

---

## IKONICE

```tsx
import { Ionicons } from '@expo/vector-icons'

<Ionicons
  name="cart-outline"
  size={24}
  color={Colors.light.primary[500]}
/>
```

---

## TESTIRANJE

### Devices

- **iOS:**
  - iPhone SE (375pt)
  - iPhone 14 Pro (393pt)
  - iPhone 14 Pro Max (430pt)
  - iPad (768pt, 1024pt)

- **Android:**
  - Small (360dp × 640dp)
  - Medium (412dp × 915dp)
  - Tablet (768dp × 1024dp)

### Simulatori

```bash
# iOS Simulator (Xcode)
npx expo run:ios

# Android Emulator
npx expo run:android

# Expo Go (fyzički device)
npx expo start
# Scan QR code
```

---

## SHOWCASE SCREENS

Kreiraj showcase screen za testiranje:

```
app/(dev)/components/button.tsx
app/(dev)/components/input.tsx
app/(dev)/components/card.tsx
```

Prikazuje:
- ✅ Sve varijante
- ✅ Sve veličine
- ✅ Sva stanja
- ✅ iOS i Android
- ✅ Light i Dark mode

---

## WORKFLOW

1. **Pozovi skill** - `/b2b-mobile-component-builder napravi Button`
2. **Skill učitava** - samo relevantnu dokumentaciju (conditional loading)
3. **Kreira komponentu** - sa design tokens iz Colors.ts
4. **Kreira showcase** - za testiranje (opciono)
5. **Testiranje** - iOS i Android simulatori

---

## BEST PRACTICES

### ✅ DO

- Koristi design tokens iz Colors.ts
- Koristi NativeWind za styling (ili StyleSheet)
- Testiraj na iOS i Android
- Testiraj na različitim screen sizes
- Podržaj light i dark mode
- Dodaj accessibility props
- Koristi TypeScript strict mode

### ❌ DON'T

- Ne hardcode-uj boje (koristi Colors.ts)
- Ne koristi web-only CSS (box-shadow, transform)
- Ne ignoriraj platform differences
- Ne koristi `any` type
- Ne zaboravi SafeAreaView na screen-ima

---

## REQUIREMENTS

- Node.js 18+
- Expo CLI
- React Native
- NativeWind
- TypeScript 5+
- iOS Simulator (Xcode) ili Android Emulator

---

## STRUKTURA SKILLA

```
~/.claude/skills/b2b-mobile-component-builder/
├── SKILL.md                           # Glavni skill file
├── README.md                          # Ova dokumentacija
└── templates/
    ├── functional-component.tsx      # Component template
    ├── screen-component.tsx          # Screen template
    └── showcase-screen.tsx           # Showcase template
```

---

## DIJELJENI DESIGN SISTEM

**Web skill:**
- `b2b-shop-component-builder`
- Next.js + Tailwind CSS
- Server/Client Components

**Mobile skill:**
- `b2b-mobile-component-builder`
- React Native + Expo + NativeWind
- Functional Components

**Isti design tokens:**
- Boje (Colors)
- Spacing
- Typography
- Komponente (Button, Input, Card, ProductCard)

---

## SUPPORT

Ako imaš problema:
1. Provjeri Expo setup
2. Provjeri NativeWind konfiguraciju
3. Provjeri constants/Colors.ts
4. Provjeri simulator/emulator

---

Skill je spreman za kreiranje React Native/Expo komponenti! 🚀📱

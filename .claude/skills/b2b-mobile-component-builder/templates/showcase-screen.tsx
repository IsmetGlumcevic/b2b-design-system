// Template za Showcase Screen
// Koristi za testiranje komponenti sa svim varijantama

import { View, Text, ScrollView, SafeAreaView } from 'react-native'
import { Stack } from 'expo-router'
import ComponentName from '@/components/shared/ComponentName'

export default function ComponentNameShowcase() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'ComponentName Showcase',
          headerShown: true,
        }}
      />

      <SafeAreaView className="flex-1 bg-[var(--color-bg-primary)]">
        <ScrollView
          className="flex-1"
          contentContainerStyle={{ padding: 16 }}
        >
          {/* Header */}
          <View className="mb-8">
            <Text className="text-3xl font-bold text-[var(--color-text-primary)] mb-2">
              ComponentName
            </Text>
            <Text className="text-base text-[var(--color-text-secondary)]">
              Kratak opis komponente i njene namjene.
            </Text>
          </View>

          {/* Variants Section */}
          <ShowcaseSection title="Variants" description="Dostupne varijante">
            <View className="flex-row flex-wrap gap-2">
              <ComponentName variant="primary">Primary</ComponentName>
              <ComponentName variant="secondary">Secondary</ComponentName>
              <ComponentName variant="outline">Outline</ComponentName>
            </View>
          </ShowcaseSection>

          {/* Sizes Section */}
          <ShowcaseSection title="Sizes" description="Dostupne veličine">
            <View className="flex-row items-center flex-wrap gap-2">
              <ComponentName size="sm">Small</ComponentName>
              <ComponentName size="md">Medium</ComponentName>
              <ComponentName size="lg">Large</ComponentName>
            </View>
          </ShowcaseSection>

          {/* States Section */}
          <ShowcaseSection title="States" description="Različita stanja">
            <View className="flex-row flex-wrap gap-2">
              <ComponentName>Default</ComponentName>
              <ComponentName disabled>Disabled</ComponentName>
              <ComponentName loading>Loading</ComponentName>
            </View>
          </ShowcaseSection>

          {/* Platform Section */}
          <ShowcaseSection
            title="Platform Specific"
            description="iOS vs Android"
          >
            <View className="gap-2">
              <Text className="text-sm font-mono text-[var(--color-text-tertiary)]">
                iOS verzija
              </Text>
              <ComponentName>iOS Style</ComponentName>

              <Text className="text-sm font-mono text-[var(--color-text-tertiary)] mt-4">
                Android verzija
              </Text>
              <ComponentName>Android Style</ComponentName>
            </View>
          </ShowcaseSection>

          {/* Dark Mode Section */}
          <ShowcaseSection title="Dark Mode" description="Light i Dark tema">
            <View className="gap-2">
              <View className="p-4 bg-white rounded-lg">
                <ComponentName>Light Mode</ComponentName>
              </View>
              <View className="p-4 bg-gray-900 rounded-lg">
                <ComponentName>Dark Mode</ComponentName>
              </View>
            </View>
          </ShowcaseSection>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

// Helper komponenta za showcase sekcije
function ShowcaseSection({
  title,
  description,
  children,
}: {
  title: string
  description: string
  children: React.ReactNode
}) {
  return (
    <View className="mb-8">
      <Text className="text-xl font-semibold text-[var(--color-text-primary)] mb-1">
        {title}
      </Text>
      <Text className="text-sm text-[var(--color-text-secondary)] mb-4">
        {description}
      </Text>
      <View className="p-4 bg-[var(--color-bg-secondary)] rounded-lg border border-[var(--color-border-primary)]">
        {children}
      </View>
    </View>
  )
}

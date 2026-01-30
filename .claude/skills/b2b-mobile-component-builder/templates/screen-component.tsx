// Template za React Native Screen Component
// Koristi za cijele ekrane (ProductDetails, Cart, Account)

import { View, Text, ScrollView, SafeAreaView } from 'react-native'
import { Stack } from 'expo-router'

export default function ScreenName() {
  return (
    <>
      {/* Screen Header Configuration */}
      <Stack.Screen
        options={{
          title: 'Screen Title',
          headerShown: true,
        }}
      />

      {/* Screen Content */}
      <SafeAreaView className="flex-1 bg-[var(--color-bg-primary)]">
        <ScrollView
          className="flex-1"
          contentContainerStyle={{ padding: 16 }}
        >
          <View className="gap-4">
            <Text className="text-2xl font-bold text-[var(--color-text-primary)]">
              Screen Heading
            </Text>

            <Text className="text-base text-[var(--color-text-secondary)]">
              Screen content goes here...
            </Text>

            {/* Komponente */}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

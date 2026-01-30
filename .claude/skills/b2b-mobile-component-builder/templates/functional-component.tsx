// Template za React Native Functional Component
// Koristi za osnovne UI komponente (Button, Input, Card, Badge)

import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Colors } from '@/constants/Colors'

interface ComponentNameProps {
  // Props tipovi
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  onPress?: () => void
}

export default function ComponentName({
  variant = 'primary',
  size = 'md',
  disabled = false,
  onPress,
}: ComponentNameProps) {
  return (
    <TouchableOpacity
      className="px-4 py-2 rounded-lg bg-primary-500"
      disabled={disabled}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text className="text-white text-base font-semibold">
        Component Content
      </Text>
    </TouchableOpacity>
  )
}

// Alternativa sa StyleSheet API:
/*
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: Colors.light.primary[500],
  },
  text: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
})
*/

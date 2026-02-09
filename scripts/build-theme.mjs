#!/usr/bin/env node

/**
 * Build-time Theme Injection Script
 *
 * Ova skripta kopira odgovarajuću CSS temu u globals.css NA BUILD TIME.
 * Rezultat: ZERO runtime overhead, maksimalan ISR cache!
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

// ESM ekvivalent __dirname
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Učitaj .env fajl (Node.js ne čita .env automatski kao Next.js)
const envPath = path.join(__dirname, '..', '.env')
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8')
  for (const line of envContent.split('\n')) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue
    const eqIndex = trimmed.indexOf('=')
    if (eqIndex === -1) continue
    const key = trimmed.slice(0, eqIndex).trim()
    const value = trimmed.slice(eqIndex + 1).trim()
    // Ne prepisuj ako je već postavljeno u okruženju
    if (!process.env[key]) {
      process.env[key] = value
    }
  }
}

// Čitaj temu iz environment varijable
const theme = process.env.NEXT_PUBLIC_THEME || 'default'
const shopName = process.env.NEXT_PUBLIC_SHOP_NAME || 'Default Shop'

console.log('🎨 Building with theme:', theme)
console.log('🏪 Shop name:', shopName)

// Putanje
const themePath = path.join(__dirname, '..', 'styles', 'themes', `${theme}.css`)
const outputPath = path.join(__dirname, '..', 'app', 'theme.css')

// Provjeri da li tema postoji
if (!fs.existsSync(themePath)) {
  console.error(`❌ Theme file not found: ${themePath}`)
  console.error('   Available themes: default, sharp, rounded, compact, spacious, industrial, corporate, brutalist')
  process.exit(1)
}

// Kopiraj theme CSS
try {
  const themeContent = fs.readFileSync(themePath, 'utf8')

  // Dodaj header sa build info
  const output = `/* ============================================
   BUILD-TIME THEME INJECTION
   Theme: ${theme}
   Shop: ${shopName}
   Built: ${new Date().toISOString()}
   ============================================ */

${themeContent}
`

  fs.writeFileSync(outputPath, output, 'utf8')
  console.log('✅ Theme injected successfully:', outputPath)
  console.log('   File size:', (output.length / 1024).toFixed(2), 'KB')
} catch (error) {
  console.error('❌ Error injecting theme:', error.message)
  process.exit(1)
}

console.log('🚀 Ready for build!')

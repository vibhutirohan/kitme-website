import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Inter, Outfit } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif"
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: 'Kitme - The cloud closet that organizes, plans, and connects',
  description: 'Transform your email receipts into a digital closet experience that saves you time, money, and decision fatigue.',
  generator: 'v0.app',
  icons: {
    icon: '/kitme icon.png',
    apple: '/kitme icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#8B4A5E',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} ${outfit.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}

import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: 'Diganta AI - Enterprise AI Solutions by Mysoftheaven',
  description: 'Discover Diganta AI by Mysoftheaven (BD) Ltd. Explore intelligent AI products like Zentix, Progga & DocNexus built to solve real business challenges.',
  keywords: [
    'Diganta AI',
    'Mysoftheaven',
    'enterprise AI solutions',
    'AI platform Bangladesh',
    'Zentix',
    'Progga',
    'DocNexus',
    'AI strategy consulting',
  ],
  openGraph: {
    title: 'Diganta AI - Enterprise AI Solutions by Mysoftheaven',
    description: 'Explore intelligent AI products like Zentix, Progga & DocNexus built to solve real business challenges in Bangladesh.',
    type: 'website',
    images: ['/og-image.png'], // Make sure to add an og-image.png to your /public folder
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`light ${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-background font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

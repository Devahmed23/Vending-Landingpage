import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from 'next'
import { Syne, Manrope } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { MotionProvider } from '@/components/motion-provider'
import './globals.css'

/* Syne — geometric editorial display, strong character for headings */
const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
})

/* Manrope — clean, modern, slightly geometric body text */
const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'VendSavvy — Manage Your Vending Machine Business',
  description:
    'Track sales, manage inventory, monitor profits, and grow your vending machine empire — all in one platform.',
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${manrope.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        <MotionProvider>
          {children}
        </MotionProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
        <SpeedInsights />
      </body>
    </html>
  )
}

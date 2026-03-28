// app/layout.tsx
import type { Metadata } from 'next'
import { Cormorant, Space_Grotesk } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Kalin Brothers',
  description: 'The proof that it\'s possible. 13.9 million followers. Zero traditional advertising.',
  openGraph: {
    title: 'Kalin Brothers',
    description: 'The proof that it\'s possible.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${spaceGrotesk.variable}`}
    >
      <body className="bg-bg-primary text-text-primary font-body antialiased">
        {children}
      </body>
    </html>
  )
}

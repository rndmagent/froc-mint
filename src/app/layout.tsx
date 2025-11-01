import type { Metadata } from 'next'
import './globals.css'
import '@rainbow-me/rainbowkit/styles.css' // стили модалки кошельков
import Providers from './providers'

export const metadata: Metadata = {
  title: 'FROC Mint',
  description: 'Mint page on Base',
  robots: { index: false, follow: false, nocache: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
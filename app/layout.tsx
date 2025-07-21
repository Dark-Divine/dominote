import './globals.css'
import { Providers } from './providers'
import { Toaster } from 'sonner'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dominote',
  applicationName: 'Dominote',
  description: 'Hamtana Project Manager',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
    shortcut: '/favicon.ico',
  },
  manifest: '/manifest.json',
  appleWebApp: {
    title: 'Dominote',
    capable: true,
    statusBarStyle: 'default',
    startupImage: '/dominote-logo.png',
  },
}

export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: 'no',
    themeColor: '000000',
  }
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning className={`${inter.className} h-dvh flex flex-col dark`}>
      <body className='flex flex-col grow text-zinc-200 '>
        <Toaster />
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

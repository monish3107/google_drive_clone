import React from 'react'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: 'Cloudora | A Cloud Storage Platform',
  description: 'Your one-stop cloud solution for secure file storage, sharing, and collaboration. Store, organize, and access your files from anywhere.',
  keywords: 'cloud storage, file sharing, document management, secure storage, file upload',
  authors: [{ name: 'Cloudora Team' }],
  creator: 'Cloudora',
  publisher: 'Cloudora',
  robots: 'index, follow',
  openGraph: {
    title: 'Cloudora | A Cloud Storage Platform',
    description: 'Your one-stop cloud solution for secure file storage, sharing, and collaboration.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Cloudora'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cloudora | A Cloud Storage Platform',
    description: 'Your one-stop cloud solution for secure file storage, sharing, and collaboration.'
  },
  icons: {
    icon: [
      {
        url: '/favicon.svg',
        type: 'image/svg+xml'
      },
      {
        url: '/favicon.ico',
        sizes: 'any'
      }
    ],
    apple: [
      {
        url: '/favicon.svg',
        type: 'image/svg+xml'
      }
    ],
    shortcut: '/favicon.ico'
  },
  manifest: '/manifest.json',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1
  },
  other: {
    'theme-color': '#3F83F8',
    'msapplication-TileColor': '#3F83F8'
  }
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}

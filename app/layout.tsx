import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Kuan Global Ventures - Professional Consultancy Services',
    template: '%s | Kuan Global Ventures'
  },
  description: 'Leading consultancy firm specializing in recruitment, training, and placement services. We help businesses and individuals achieve their goals through strategic solutions.',
  keywords: ['consultancy', 'recruitment', 'training', 'placement', 'business solutions', 'professional services'],
  authors: [{ name: 'Kuan Global Ventures' }],
  creator: 'Kuan Global Ventures',
  publisher: 'Kuan Global Ventures',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://kuanglobalventures.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Kuan Global Ventures - Professional Consultancy Services',
    description: 'Leading consultancy firm specializing in recruitment, training, and placement services.',
    url: 'https://kuanglobalventures.com',
    siteName: 'Kuan Global Ventures',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Kuan Global Ventures',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kuan Global Ventures - Professional Consultancy Services',
    description: 'Leading consultancy firm specializing in recruitment, training, and placement services.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 
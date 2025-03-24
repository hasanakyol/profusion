import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"]
})

export const metadata: Metadata = {
  metadataBase: new URL('https://profusion.io'),
  title: 'Profusion - Enterprise Expertise at Startup Speed',
  description: 'Enterprise-grade audit, design, development & operations for SMEs. Built by former UBS, HSBC & Aviva senior experts.',
  keywords: [
    "enterprise solutions",
    "startup speed",
    "fixed pricing",
    "UBS experts",
    "HSBC veterans",
    "Aviva experience",
    "tech consulting",
    "software development",
    "digital transformation",
    "enterprise security",
    "rapid delivery",
    "senior developers",
    "enterprise architecture",
    "tech audit",
    "business operations"
  ],
  authors: [{ name: "Profusion" }],
  creator: "Profusion",
  publisher: "Profusion",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
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
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://profusion.io",
    siteName: "Profusion",
    title: "Profusion - Enterprise Expertise at Startup Speed",
    description: "Enterprise-grade audit, design, development & operations for SMEs. Built by former UBS, HSBC & Aviva senior experts.",
    images: [
      {
        url: "https://profusion.io/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Profusion - Enterprise Expertise at Startup Speed",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Profusion - Enterprise Expertise at Startup Speed",
    description: "Enterprise-grade audit, design, development & operations for SMEs. Built by former UBS, HSBC & Aviva senior experts.",
    images: [
      {
        url: "https://profusion.io/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Profusion - Enterprise Expertise at Startup Speed",
      }
    ],
    creator: "@imoffactually",
  },
  alternates: {
    canonical: "https://profusion.io",
  },
  verification: {
    google: "add-your-google-site-verification-here",
  },
  category: "technology",
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
  }
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  minimumScale: 1,
  userScalable: true,
  viewportFit: "cover",
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#171717' },
    { media: '(prefers-color-scheme: dark)', color: '#171717' }
  ],
  colorScheme: 'light dark'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen bg-white">
        <div className="min-h-screen flex flex-col pb-safe pt-safe pl-safe pr-safe">
          {children}
        </div>
      </body>
    </html>
  )
}


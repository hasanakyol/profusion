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
  title: 'Profusion - Enterprise-grade Solutions at Startup Speed',
  description: 'Enterprise-grade audit, design, development, and operations delivered by senior experts from UBS, HSBC, and Aviva. Fixed pricing, rapid delivery, proven results.',
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
    },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://profusion.io",
    siteName: "Profusion",
    title: "Profusion - Enterprise-grade Solutions at Startup Speed",
    description: "Enterprise-grade solutions by senior experts from UBS, HSBC, and Aviva. Fixed pricing, rapid delivery, bank-level quality.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Profusion - Enterprise-grade Solutions at Startup Speed",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Profusion - Enterprise-grade Solutions at Startup Speed",
    description: "Enterprise-grade solutions by senior experts from UBS, HSBC, and Aviva. Fixed pricing, rapid delivery, bank-level quality.",
    images: ["/twitter-image.jpg"],
    creator: "@profusion",
  },
  alternates: {
    canonical: "https://profusion.io",
  },
  verification: {
    google: "your-google-verification-code",
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


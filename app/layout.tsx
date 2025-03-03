import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"]
})

export const metadata: Metadata = {
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
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    viewportFit: "cover",
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
  },
  themeColor: '#171717',
  colorScheme: 'light',
}

// Consistent spacing system
export const spacing = {
  section: "pt-6 sm:pt-16 md:pt-16 pb-6 sm:pb-16 md:pb-16",
  container: "container mx-auto px-4 sm:px-6 lg:px-8",
  card: "p-6 sm:p-8 rounded-2xl transition-all duration-300",
  button: "px-6 sm:px-10 py-2.5 sm:py-5",
  gap: "gap-4 sm:gap-6 lg:gap-8"
}

// Typography scale
export const typography = {
  h1: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight",
  h2: "text-3xl sm:text-4xl font-extrabold tracking-tight",
  h3: "text-xl sm:text-2xl font-bold tracking-tight",
  body: "text-base sm:text-lg leading-relaxed",
  small: "text-sm sm:text-base",
  caption: "text-sm italic"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover, user-scalable=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="theme-color" content="transparent" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="transparent" media="(prefers-color-scheme: dark)" />
      </head>
      <body className="min-h-screen bg-white">
        <div className="min-h-screen flex flex-col pb-safe pt-safe pl-safe pr-safe">
          {children}
        </div>
      </body>
    </html>
  )
}


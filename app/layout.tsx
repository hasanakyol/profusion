import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"]
})

export const metadata: Metadata = {
  metadataBase: new URL('https://profusion.io'),
  title: "Profusion - Enterprise Expertise at Startup Speed",
  description: "Design, Development, and Operations by ex-UBS, HSBC, and Shell leads. Enterprise-grade solutions at startup speed with fixed pricing.",
  keywords: ["enterprise development", "startup speed", "fixed pricing", "UBS", "HSBC", "Shell", "tech consulting", "software development", "digital transformation"],
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
    title: "Profusion - Enterprise Expertise at Startup Speed",
    description: "Design, Development, and Operations by ex-UBS, HSBC, and Shell leads. Enterprise-grade solutions at startup speed with fixed pricing.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Profusion - Enterprise Expertise at Startup Speed",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Profusion - Enterprise Expertise at Startup Speed",
    description: "Design, Development, and Operations by ex-UBS, HSBC, and Shell leads. Enterprise-grade solutions at startup speed with fixed pricing.",
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
    title: 'Profusion',
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#171717' },
    { media: '(prefers-color-scheme: dark)', color: '#171717' }
  ],
  colorScheme: 'light',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  )
}


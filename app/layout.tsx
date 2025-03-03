import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"]
})

export const metadata: Metadata = {
  title: 'Profusion - Enterprise Expertise, Startup Speed',
  description: 'Enterprise-Grade Audit, Design, Development & Operations for SMEs — Delivered by Experts from ex-UBS, HSBC & Aviva.',
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
  },
  themeColor: '#171717',
  colorScheme: 'light',
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


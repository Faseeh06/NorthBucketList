import React from "react"
import type { Metadata } from 'next'
import localFont from "next/font/local"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from '@vercel/analytics/next'
import { site } from "@/lib/content/site"
import './globals.css'

const redob = localFont({
  src: "../public/fonts/redob/REDOBtrial-REDOBRegular.ttf",
  variable: "--font-redob",
  display: "swap",
})

const metadataBase = new URL(process.env.NEXT_PUBLIC_SITE_URL || site.siteUrl)

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: "NorthBucket List — Trips in Northern Pakistan",
    template: "%s | NorthBucket List",
  },
  description:
    "Pakistan-first trips across Hunza, Skardu, and the Karakoram with local route planning, transparent PKR budgets, and practical mountain itineraries.",
  generator: "v0.app",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: site.name,
    locale: site.locale,
    title: "NorthBucket List — Trips in Northern Pakistan",
    description:
      "Plan practical Northern Pakistan trips with local teams, route-smart itineraries, and clear per-person PKR budget guidance.",
    images: [
      {
        url: "/images/passu.jpg",
        width: 1200,
        height: 630,
        alt: "Passu and Karakoram peaks in Northern Pakistan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NorthBucket List — Trips in Northern Pakistan",
    description:
      "Pakistan-first mountain trips in Hunza, Skardu, and beyond, with practical routes and budget clarity.",
    images: ["/images/passu.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const fontVariables = [GeistSans.variable, GeistMono.variable, redob.variable].join(" ")
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: metadataBase.toString(),
    inLanguage: "en-PK",
    description:
      "Local trip planning and departures for Northern Pakistan, including Hunza, Skardu, and Karakoram routes.",
  }
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: site.name,
    url: metadataBase.toString(),
    email: site.email,
    areaServed: "Pakistan",
  }

  return (
    <html lang="en" className={fontVariables}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  )
}

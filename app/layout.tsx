import React from "react"
import type { Metadata } from 'next'
import localFont from "next/font/local"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const redob = localFont({
  src: "../public/fonts/redob/REDOBtrial-REDOBRegular.ttf",
  variable: "--font-redob",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "NorthBucket List — Trips in Northern Pakistan",
    template: "%s | NorthBucket List",
  },
  description:
    "Curated journeys through Hunza, Skardu, Naran, and the Karakoram. Local guides, trusted transport, and unforgettable mountain experiences.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const fontVariables = [GeistSans.variable, GeistMono.variable, redob.variable].join(" ")

  return (
    <html lang="en" className={fontVariables}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}

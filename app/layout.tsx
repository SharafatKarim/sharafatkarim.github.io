import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ScrollProgress } from "@/components/scroll-progress"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Md Sharafat Karim - Developer Portfolio",
  description:
    "Computer Science & Engineering student at PSTU. There's no end to EXPLORATION! Portfolio showcasing projects, education, and tools.",
  generator: "v0.app",
  keywords: ["developer", "portfolio", "computer science", "PSTU", "software engineer", "Linux"],
  authors: [{ name: "Md Sharafat Karim" }],
  metadataBase: new URL("https://www.sharafat.xyz"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Md Sharafat Karim - Developer Portfolio",
    description:
      "Computer Science & Engineering student at PSTU. There's no end to EXPLORATION! Portfolio showcasing projects, education, and tools.",
    url: "https://www.sharafat.xyz",
    siteName: "Sharafat Karim",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Md Sharafat Karim portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Md Sharafat Karim - Developer Portfolio",
    description:
      "Computer Science & Engineering student at PSTU. There's no end to EXPLORATION! Portfolio showcasing projects, education, and tools.",
    site: "@sharafat2004",
    creator: "@sharafat2004",
    images: ["/twitter-image.png"],
  },
  icons: {
    icon: [
      {
        url: "/icon.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans antialiased`}>
        {children}
        <ScrollProgress />
        <Analytics />
      </body>
    </html>
  )
}

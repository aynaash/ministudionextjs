import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Suspense } from "react"
import { Analytics } from "@vercel/analytics/react"
import { ErrorBoundary } from "@/components/error-boundary"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: "MiniStudio - AI Video Generation with Character Consistency",
  description:
    "MiniStudio solves the consistency problem in AI video generation. Create videos with persistent characters, stable environments, and seamless storytelling. Open source and model-agnostic.",
  keywords: [
    "AI video generation",
    "character consistency",
    "video AI",
    "Vertex AI",
    "Sora",
    "consistent characters",
    "video storytelling",
    "open source",
  ],
  authors: [{ name: "MiniStudio" }],
  creator: "MiniStudio",
  publisher: "MiniStudio",
  metadataBase: new URL("https://ministudio.site"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/logo.png", sizes: "any" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/logo.png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ministudio.site",
    title: "MiniStudio - AI Video Generation with Character Consistency",
    description:
      "Create AI videos with perfect character consistency. Open source, model-agnostic video generation platform.",
    siteName: "MiniStudio",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "MiniStudio Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MiniStudio - AI Video Generation with Character Consistency",
    description:
      "Create AI videos with perfect character consistency. Open source and model-agnostic.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.json",
}

export const viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
      style={{ backgroundColor: "#0f0f14" }}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-sans antialiased bg-background text-foreground" style={{ backgroundColor: "#0f0f14" }}>
        <ErrorBoundary>
          <Suspense fallback={null}>{children}</Suspense>
        </ErrorBoundary>
        <Analytics />
      </body>
    </html>
  )
}

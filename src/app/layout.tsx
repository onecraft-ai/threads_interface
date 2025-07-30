import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LanguageProvider } from "@/components/providers/LanguageProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ThreadsHelper - AI-Powered Business Networking & Contact Discovery for Threads",
  description: "Transform your Threads networking with AI-powered contact discovery, automated commenting, and intelligent business relationship building. Find customers, partners, and valuable contacts automatically.",
  viewport: "width=device-width, initial-scale=1",
  keywords: [
    "Threads AI agent",
    "business networking automation",
    "contact discovery",
    "automated commenting",
    "social media AI",
    "business relationship building",
    "Threads marketing tool",
    "AI customer acquisition",
    "social selling automation",
    "networking software",
    "contact finder",
    "business development AI"
  ],
  authors: [{ name: "ThreadsHelper Team" }],
  creator: "ThreadsHelper",
  publisher: "ThreadsHelper",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://threadshelper.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en",
      "ru-RU": "/ru",
    },
  },
  openGraph: {
    title: "ThreadsHelper - AI Business Networking & Contact Discovery",
    description: "AI-powered agent that discovers valuable contacts, automates commenting, and builds business relationships on Threads. Transform social conversations into opportunities.",
    url: "https://threadshelper.com",
    siteName: "ThreadsHelper",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ThreadsHelper - AI Business Networking Tool",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ThreadsHelper - AI Business Networking & Contact Discovery",
    description: "AI-powered agent for automated contact discovery and business networking on Threads. Build relationships through intelligent comment automation.",
    images: ["/twitter-image.jpg"],
    creator: "@ThreadsHelper",
    site: "@ThreadsHelper",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "google-site-verification-placeholder",
    yandex: "yandex-verification-placeholder",
  },
  other: {
    "application-name": "ThreadsHelper",
    "msapplication-TileColor": "#00a8ff",
    "theme-color": "#00a8ff",
    "robots": "index, follow",
    "revisit-after": "7 days",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "ThreadsHelper",
              "description": "AI-powered business intelligence platform that analyzes Threads conversations for market research, contact discovery, and networking insights.",
              "url": "https://threadshelper.com",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web",
              "offers": {
                "@type": "Offer",
                "price": "49",
                "priceCurrency": "USD",
                "priceValidUntil": "2025-12-31"
              },
              "author": {
                "@type": "Organization",
                "name": "ThreadsHelper Team"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "247"
              },
              "featureList": [
                "AI-powered business intelligence",
                "Market research analytics",
                "Conversation insights analysis",
                "Networking intelligence",
                "Contact research tools",
                "Business data visualization"
              ]
            })
          }}
        />
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-8R44P9C2XH"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-8R44P9C2XH');
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}

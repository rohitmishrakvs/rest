/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import "./globals.css";
import AppBar from "./components/AppBar";

export const metadata: Metadata = {
  title: "MagicMoments - AI Art Generator for Creatives",
  description:
    "Transform your ideas into stunning illustrations and logos with our AI-powered art generator",
  keywords: [
    "AI art",
    "illustration",
    "logo design",
    "creative tools",
    "AI generator",
  ],
  openGraph: {
    title: "MagicMoments - AI Art Generator for Creatives",
    description: "Transform your ideas into stunning illustrations and logos with our AI-powered art generator",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "MagicMoments - AI Art Generator for Creatives",
    description: "Transform your ideas into stunning illustrations and logos with our AI-powered art generator",
  },
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Dancing+Script:wght@400;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Lobster&family=Pacifico&display=swap"
          rel="stylesheet"
        />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      </head>
      <body className="min-h-screen bg-white dark:bg-gray-900">
        <AppBar />
        <main className="flex min-h-screen flex-col">{children}</main>
      </body>
    </html>
  );
}

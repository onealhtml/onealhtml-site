import type { Metadata, Viewport } from "next";
import { Archivo_Black } from "next/font/google";
import "./globals.css";

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "onealhtml - Software Engineer & Music Producer",
    template: "%s | onealhtml"
  },
  description: "Portfolio of onealhtml - Software Engineer, AI Specialist, and Music Producer. Cyberpunk-inspired developer portfolio with matrix animation.",
  keywords: ["onealhtml", "software engineer", "AI specialist", "music producer", "developer", "portfolio", "web development", "fullstack", "typescript", "react", "nextjs"],
  authors: [{ name: "onealhtml", url: "https://onealhtml.dev" }],
  creator: "onealhtml",
  publisher: "onealhtml",
  metadataBase: new URL('https://onealhtml.dev'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "onealhtml - Software Engineer & Music Producer",
    description: "Portfolio of onealhtml - Software Engineer, AI Specialist, and Music Producer",
    url: "https://onealhtml.dev",
    siteName: "onealhtml",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/pixil-frame-0.png",
        width: 1200,
        height: 630,
        alt: "onealhtml portfolio"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "onealhtml - Software Engineer & Music Producer",
    description: "Portfolio of onealhtml - Software Engineer, AI Specialist, and Music Producer",
    creator: "@onealhtml",
    images: ["/pixil-frame-0.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Adicione seu Google Search Console verification code aqui quando obtiver
    // google: 'your-google-verification-code',
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#00ff00",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "onealhtml",
    "url": "https://onealhtml.dev",
    "sameAs": [
      "https://twitter.com/onealhtml",
      "https://github.com/onealhtml",
      "https://soundcloud.com/onealhtml"
    ],
    "jobTitle": "Software Engineer",
    "description": "Software Engineer, AI Specialist, and Music Producer",
    "knowsAbout": ["Software Engineering", "Artificial Intelligence", "Web Development", "Music Production"],
  };

  return (
    <html lang="en-us">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={archivoBlack.className}>
        {children}
      </body>
    </html>
  );
}

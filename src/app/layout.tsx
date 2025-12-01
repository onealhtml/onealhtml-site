import type { Metadata, Viewport } from "next";
import { Archivo_Black } from "next/font/google";
import "./globals.css";

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "onealhtml - Developer Portfolio",
  description: "Cyberpunk-inspired developer portfolio with matrix animation",
  keywords: ["onealhtml", "developer", "portfolio", "matrix", "cyberpunk", "web development"],
  authors: [{ name: "onealhtml" }],
  metadataBase: new URL('https://onealhtml.com'),
  openGraph: {
    title: "onealhtml - Developer Portfolio",
    description: "Cyberpunk-inspired developer portfolio with matrix animation",
    type: "website",
    images: ["/pixil-frame-0.png"],
  },
  twitter: {
    card: "summary",
    title: "onealhtml - Developer Portfolio",
    description: "Cyberpunk-inspired developer portfolio",
    creator: "@onealhtml",
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
  return (
    <html lang="en-us">
      <body className={archivoBlack.className}>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
import { LeadGenBar } from "@/components/LeadGenBar";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Best Kitesurf Schools | The World's Finest Instruction",
  description: "A curated directory of the world's best kitesurfing schools. Discover premier centers globally and unlock progression secrets.",
  openGraph: {
    title: "Best Kitesurf Schools",
    description: "A curated directory of the world's best kitesurfing schools.",
    url: "https://bestkitesurfschools.com",
    siteName: "BestKitesurfSchools",
    images: [
      {
        url: "https://bestkitesurfschools.com/images/hero-main.jpg",
        width: 1200,
        height: 630,
        alt: "Best Kitesurf Schools Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Kitesurf Schools",
    description: "A curated directory of the world's best kitesurfing schools.",
    images: ["https://bestkitesurfschools.com/images/hero-main.jpg"],
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased font-sans min-h-screen selection:bg-[#1A365D] selection:text-white`}
      >
        <JsonLd data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "BestKitesurfSchools",
          "url": "https://bestkitesurfschools.com/",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://bestkitesurfschools.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        }} />
        {children}
        <LeadGenBar />
      </body>
    </html>
  );
}

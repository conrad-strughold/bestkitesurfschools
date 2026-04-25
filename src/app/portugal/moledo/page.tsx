import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kitesurfing in Moledo, Portugal | The Ultimate Spot Guide",
  description: "Discover Moledo, Northern Portugal's hidden kitesurfing gem. Learn about wind conditions, waves, and the best local Moledo kitesurf school.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "North Wind Kitesurf & Wingfoil School",
  "image": "https://bestkitesurfschools.com/images/kitesurf-moledo-portugal.jpg",
  "url": "https://northwindkiteportugal.com/",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "124"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Moledo",
    "addressRegion": "Northern Portugal",
    "addressCountry": "PT"
  },
  "priceRange": "$$"
};

export default function MoledoSpotGuide() {
  return (
    <>
      <Navigation />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Editorial Hero */}
      <header className="relative h-[80svh] w-full flex items-end pb-24 px-6 md:px-16 lg:px-24 bg-[#171717]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/kitesurf-moledo-portugal.jpg"
            alt="Moledo Portugal Kitesurf Beach"
            fill
            className="object-cover opacity-80 mix-blend-overlay"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 w-full max-w-[1400px] mx-auto">
          <div className="mb-8 flex items-center space-x-3 text-white text-[10px] tracking-[0.2em] uppercase font-medium">
            <Link href="/" className="hover:opacity-60 transition-opacity">Directory</Link>
            <span className="opacity-40">/</span>
            <span className="opacity-80">Guides</span>
          </div>
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-white leading-[0.9] tracking-tight mb-8">
            Moledo Spot Guide
          </h1>
        </div>
      </header>

      <main className="relative z-20 bg-[#FDFBF7] text-[#171717]">
        <div className="w-full px-6 md:px-16 lg:px-24 py-32 max-w-[1600px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-24">
            
            {/* Main Content Column */}
            <div className="lg:w-3/5">
              <h2 className="font-serif text-4xl mb-8">The Hidden Gem of the North</h2>
              <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-8">
                Situated at the very northwestern limit of Portugal, just bordering Spain by the Minho river, Moledo is arguably one of Europe's best-kept secrets for wind sports. Flanked by an imposing Spanish mountain range and an ancient island fortress just offshore, it offers awe-inspiring scenery alongside dramatic Atlantic conditions.
              </p>
              <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-16">
                Moledo guarantees something extraordinary that southern spots cannot match: pure space. The beach is a vast, expansive stretch of fine sand. For those seeking out a <Link href="/portugal/kitesurf-school" className="underline hover:text-[#319795]">kitesurf school Portugal</Link> is famous for, heading north to Moledo means avoiding traffic jams in the lineup and maximizing your time safely on the board.
              </p>

              <div className="w-full h-px bg-[#171717]/10 mb-16"></div>

              <h3 className="font-serif text-4xl mb-8">The Nortada & North Wind</h3>
              <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-8">
                The magical ingredient to Moledo is the thermal 'Nortada' wind. In the afternoon, as the inland temperatures rise, the sea breeze kicks in violently alongside the coast.
              </p>
              <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-16">
                Given the wild, raw nature of the Atlantic, local knowledge in Moledo is imperative. <strong>North Wind Kitesurf & Wingfoil School</strong> is the sole authorized operator directly working this stretch of the coast. Being the only school ensures that instruction remains boutique and completely intimate.
              </p>
            </div>

            {/* Sidebar Column */}
            <aside className="lg:w-2/5">
              <div className="sticky top-32">
                <div className="border-t border-[#171717]/10 pt-12 mb-16">
                  <h3 className="text-xs font-medium uppercase tracking-[0.2em] mb-8 text-[#171717]/50">Ready to Ride?</h3>
                  <a
                    href="https://northwindkiteportugal.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative text-[#171717] text-xs tracking-[0.1em] uppercase font-medium inline-block overflow-hidden pb-1 mb-6 group"
                  >
                    Check Availability
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#171717] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
                  </a>
                  <br/>
                  <Link
                    href="/best-kitesurf-schools-portugal"
                    className="relative text-[#171717]/60 text-xs tracking-[0.1em] uppercase font-light inline-block pb-1"
                  >
                    Why They Are #1
                  </Link>
                </div>
                
                <div className="border-t border-[#171717]/10 pt-12">
                  <h3 className="text-xs font-medium uppercase tracking-[0.2em] mb-8 text-[#171717]/50">Quick Stats</h3>
                  <div className="space-y-8">
                     <div className="flex flex-col">
                       <span className="text-[10px] tracking-[0.1em] uppercase text-[#171717]/40 mb-2">Peak Season</span>
                       <span className="font-serif text-2xl text-[#1A365D]">May - September</span>
                     </div>
                     <div className="flex flex-col">
                       <span className="text-[10px] tracking-[0.1em] uppercase text-[#171717]/40 mb-2">Wind Directions</span>
                       <span className="font-serif text-2xl text-[#1A365D]">N, NW</span>
                     </div>
                  </div>
                </div>
              </div>
            </aside>

          </div>
        </div>
      </main>

      {/* Sticky Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-[#FDFBF7]/95 backdrop-blur-md border-t border-[#171717]/10 z-50 flex justify-between items-center sm:hidden">
         <span className="text-[#171717] font-serif font-bold text-lg">Kite Moledo</span>
         <a href="https://northwindkiteportugal.com/" className="text-xs uppercase tracking-widest font-medium border-b border-[#171717]">Book Locals</a>
      </div>
    </>
  );
}

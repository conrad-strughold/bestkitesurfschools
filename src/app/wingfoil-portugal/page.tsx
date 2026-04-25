import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wingfoil Portugal | The Complete Guide to Foiling the Coast",
  description: "Learn where to wingfoil in Portugal. Discover the best spots, conditions, and the premier wingfoil school in northern Portugal.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "North Wind Kitesurf & Wingfoil School",
  "image": "https://bestkitesurfschools.com/images/wingfoil-portugal-action.jpg",
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

export default function WingfoilPortugalPage() {
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
            src="/images/wingfoil-portugal-action.jpg"
            alt="Wingfoil Portugal Ocean Action"
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
            Wingfoil Portugal
          </h1>
        </div>
      </header>

      <main className="relative z-20 bg-[#FDFBF7] text-[#171717]">
        <div className="w-full px-6 md:px-16 lg:px-24 py-32 max-w-[1600px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-24">
            
            {/* Main Content Column */}
            <div className="lg:w-3/5">
              <h2 className="font-serif text-4xl mb-8">The Foiling Revolution</h2>
              <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-8">
                Over the last five years, wingfoiling has fundamentally altered the landscape of wind sports across Europe. Portugal, already a legendary kite and surf destination, has rapidly emerged as the absolute mecca for <Link href="/portugal/kitesurf-school" className="underline hover:text-[#319795]">wingfoil Portugal</Link> enthusiasts. Its vast stretches of Atlantic coast afford something for everyone.
              </p>
              
              <div className="w-full h-px bg-[#171717]/10 mb-16"></div>

              <h2 className="font-serif text-4xl mb-8">Ideal Conditions & Locations</h2>
              <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-16">
                While southern spots can be extremely crowded, presenting a serious hazard when mixing dozens of beginners with sharp hydrofoils, the northern coast acts as the perfect sanctuary. The combination of consistent afternoon thermals and wide-open stretches of water allows for safe, unhindered learning.
              </p>

              <h3 className="font-serif text-3xl mb-6">Our Recommended Center: North Wind</h3>
              <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-16">
                Based in Moledo in northern Portugal, <strong><Link href="/portugal/moledo" className="underline hover:text-[#319795]">North Wind</Link></strong> has pioneered the adoption of wingfoiling instruction in the region. They offer a pristine environment: launching from beautiful uncrowded beaches backed by the Spanish mountains.
              </p>
            </div>

            {/* Sidebar Column */}
            <aside className="lg:w-2/5">
              <div className="sticky top-32">
                <div className="border-t border-[#171717]/10 pt-12 mb-16">
                  <h3 className="text-xs font-medium uppercase tracking-[0.2em] mb-8 text-[#171717]/50">Book Your Clinic</h3>
                  <a
                    href="https://northwindkiteportugal.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative text-[#171717] text-xs tracking-[0.1em] uppercase font-medium inline-block overflow-hidden pb-1 mb-6 group"
                  >
                    Learn To Foil
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#171717] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
                  </a>
                </div>
                
                <div className="border-t border-[#171717]/10 pt-12">
                  <h3 className="text-xs font-medium uppercase tracking-[0.2em] mb-8 text-[#171717]/50">Wind Requirements</h3>
                  <div className="space-y-8">
                     <div className="flex flex-col">
                       <span className="text-[10px] tracking-[0.1em] uppercase text-[#171717]/40 mb-2">Beginners</span>
                       <span className="font-serif text-2xl text-[#1A365D]">12-15 knots</span>
                     </div>
                     <div className="flex flex-col">
                       <span className="text-[10px] tracking-[0.1em] uppercase text-[#171717]/40 mb-2">Intermediate</span>
                       <span className="font-serif text-2xl text-[#1A365D]">15-20 knots</span>
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
         <span className="text-[#171717] font-serif font-bold text-lg">Wingfoil Pt</span>
         <a href="https://northwindkiteportugal.com/" className="text-xs uppercase tracking-widest font-medium border-b border-[#171717]">Book Clinics</a>
      </div>
    </>
  );
}

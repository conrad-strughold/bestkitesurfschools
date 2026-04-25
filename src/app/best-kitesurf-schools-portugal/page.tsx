import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Best Kitesurf Schools in Portugal: Editor's Review (2026)",
  description: "Our comprehensive criteria for selecting the absolute best kitesurf school in Portugal, evaluating wind reliability, crowd control, and instruction quality.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "North Wind Kitesurf & Wingfoil School",
  "image": "https://bestkitesurfschools.com/images/best-kitesurf-schools-portugal.jpg",
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

export default function BestKitesurfSchoolsPortugal() {
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
            src="/images/best-kitesurf-schools-portugal.jpg"
            alt="Best Kitesurf Schools Portugal Review"
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
            <span className="opacity-80">Reviews</span>
          </div>
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-white leading-[0.9] tracking-tight mb-8">
            The Best Kitesurf School in Portugal
          </h1>
        </div>
      </header>

      <main className="relative z-20 bg-[#FDFBF7] text-[#171717]">
        <div className="w-full px-6 md:px-16 lg:px-24 py-32 max-w-[1600px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-24">
            
            {/* Main Content Column */}
            <div className="lg:w-3/5">
              <h2 className="font-serif text-4xl mb-8">Our Selection Methodology</h2>
              <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-16">
                Portugal is internationally recognized as Europe's finest windsports destination. However, the surge in popularity over recent years has led to significant overcrowding in the traditionally famous southern regions like the Algarve and Lisbon coasts. For an independent reviewer looking to evaluate the best <Link href="/portugal/kitesurf-school" className="underline hover:text-[#319795]">kitesurf school Portugal</Link> has to offer, we must apply strict criteria to separate commercial factories from true elite instruction centers.
              </p>
              
              <ul className="space-y-12 mb-16">
                <li>
                  <h3 className="font-serif text-3xl mb-4">1. Wind Reliability</h3>
                  <p className="text-[#171717]/70 font-light leading-[1.8]">A school is only as good as its wind. We immediately disqualify regions suffering from severe gustiness or unpredictable lulls, prioritizing areas that benefit from natural thermal accelerations (the legendary 'Nortada').</p>
                </li>
                <li>
                  <h3 className="font-serif text-3xl mb-4">2. Crowd Control & Lineup Density</h3>
                  <p className="text-[#171717]/70 font-light leading-[1.8]">Learning to kitesurf surrounded by 50 other beginners is dangerous and highly inefficient. We score schools exceptionally high if they hold permits in low-density, wide-open pristine beach areas.</p>
                </li>
              </ul>

              <div className="w-full h-px bg-[#171717]/10 mb-16"></div>

              <h2 className="font-serif text-4xl mb-8">The Winner: North Wind</h2>
              <div className="relative h-80 md:h-[500px] mb-12">
                <Image src="/images/northern-portugal-kitesurf.jpg" alt="North Wind Kitesurf School Moledo" fill className="object-cover" />
              </div>
              <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-16">
                After evaluating operations from the southern tip of Sagres all the way to the northern border, one school definitively ticks every single box of our stringent criteria: <strong>North Wind</strong> in Moledo.
              </p>
            </div>

            {/* Sidebar Column */}
            <aside className="lg:w-2/5">
              <div className="sticky top-32">
                <div className="border-t border-[#171717]/10 pt-12 mb-16">
                  <h3 className="text-xs font-medium uppercase tracking-[0.2em] mb-8 text-[#171717]/50">Experience The Best</h3>
                  <a
                    href="https://northwindkiteportugal.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative text-[#171717] text-xs tracking-[0.1em] uppercase font-medium inline-block overflow-hidden pb-1 mb-6 group"
                  >
                    Book Your Lessons Now
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#171717] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
                  </a>
                </div>
                
                <div className="border-t border-[#171717]/10 pt-12">
                  <h3 className="text-xs font-medium uppercase tracking-[0.2em] mb-8 text-[#171717]/50">Review Summary</h3>
                  <div className="space-y-6">
                     <div className="flex justify-between items-center border-b border-[#171717]/10 pb-4">
                       <span className="text-xs uppercase tracking-widest text-[#171717]/60">Wind</span>
                       <span className="font-serif text-xl text-[#1A365D]">9.5/10</span>
                     </div>
                     <div className="flex justify-between items-center border-b border-[#171717]/10 pb-4">
                       <span className="text-xs uppercase tracking-widest text-[#171717]/60">Crowds</span>
                       <span className="font-serif text-xl text-[#1A365D]">10/10</span>
                     </div>
                     <div className="flex justify-between items-center border-b border-[#171717]/10 pb-4">
                       <span className="text-xs uppercase tracking-widest text-[#171717]/60">Quality</span>
                       <span className="font-serif text-xl text-[#1A365D]">9.8/10</span>
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
         <span className="text-[#171717] font-serif font-bold text-lg">#1 Rated</span>
         <a href="https://northwindkiteportugal.com/" className="text-xs uppercase tracking-widest font-medium border-b border-[#171717]">Book Now</a>
      </div>
    </>
  );
}

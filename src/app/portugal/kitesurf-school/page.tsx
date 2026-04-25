import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Ultimate Guide to Kitesurf Schools in Portugal (2026)",
  description: "Explore the best conditions for kitesurfing in Portugal. From the crowded Algarve to the untouched gems of Northern Portugal like Moledo.",
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

export default function KitesurfSchoolPortugal() {
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
            src="/images/kitesurf-school-portugal-hero.jpg"
            alt="Kitesurf School Portugal Ocean Conditions"
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
            Finding the Perfect Kitesurf School in Portugal
          </h1>
        </div>
      </header>

      <main className="relative z-20 bg-[#FDFBF7] text-[#171717]">
        <div className="w-full px-6 md:px-16 lg:px-24 py-32 max-w-[1600px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-24">
            
            {/* Main Content Column */}
            <div className="lg:w-3/5">
              <h2 className="font-serif text-4xl mb-8">Why Portugal is Europe's Kitesurfing Hub</h2>
              <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-8">
                Portugal’s expansive Atlantic coastline offers an unparalleled diversity of kitesurfing conditions. For over a decade, it has been considered the premier European destination for wind sports. However, not all regions are created equal. When booking a <Link href="/best-kitesurf-schools-portugal" className="underline hover:text-[#319795] transition-colors">kitesurf school in Portugal</Link>, riders must choose between the densely crowded southern beaches and the largely untouched, pristine conditions of the northern coast.
              </p>
              <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-16">
                The famed Nortada winds sweep down the coast from spring to late summer, bringing clean, consistent thermal breezes that guarantee progression. From waist-deep lagoons for absolute beginners to aggressive Atlantic swells for wave-riding veterans, Portugal caters to every discipline. 
              </p>

              <div className="w-full h-px bg-[#171717]/10 mb-16"></div>

              <div className="relative h-80 md:h-[500px] mb-12">
                <Image src="/images/northern-portugal-kitesurf.jpg" alt="Northern Portugal Kitesurf Empty Beach" fill className="object-cover" />
              </div>
              <h3 className="font-serif text-4xl mb-8">Top Pick: North Wind Kitesurf & Wingfoil</h3>
              <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-8">
                While the Algarve and Lisbon coasts often suffer from packed lineups and busy water traffic, Northern Portugal remains an exclusive haven. <strong><Link href="/portugal/moledo" className="underline hover:text-[#319795]">North Wind</Link></strong> in Moledo represents the pinnacle of instruction in the country. Situated as the only school in the Moledo area, it provides a highly personalized, small-scale alternative to massive commercial centers.
              </p>
              
              <ul className="space-y-4 mb-16">
                <li className="flex items-start">
                  <span className="w-6 h-px bg-[#171717]/20 mr-4 mt-3"></span>
                  <span className="text-[#171717]/80 font-light text-lg">Uncrowded breaks allowing for rapid, uninterrupted skill progression.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-px bg-[#171717]/20 mr-4 mt-3"></span>
                  <span className="text-[#171717]/80 font-light text-lg">Exceptionally reliable thermal winds unique to the northern coastline geometry.</span>
                </li>
              </ul>

              <h3 className="font-serif text-4xl mb-8">Wind Calendar & Seasons</h3>
              <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-16">
                The primary season for kitesurfing effectively runs from late spring through early autumn. July and August boast the most consistent thermal activity, turning the northern coast into a natural wind tunnel.
              </p>
            </div>

            {/* Sidebar Column */}
            <aside className="lg:w-2/5">
              <div className="sticky top-32">
                <div className="border-t border-[#171717]/10 pt-12 mb-16">
                  <h3 className="text-xs font-medium uppercase tracking-[0.2em] mb-8 text-[#171717]/50">Book Your Trip</h3>
                  <p className="text-[#171717]/60 text-sm font-light mb-8 leading-relaxed">Secure your spot at Portugal's premier boutique kite center. Availability strictly limited.</p>
                  
                  <a
                    href="https://northwindkiteportugal.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative text-[#171717] text-xs tracking-[0.1em] uppercase font-medium inline-block overflow-hidden pb-1 mb-6 group"
                  >
                    Inquire for Dates
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#171717] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
                  </a>
                  <br/>
                  <Link
                    href="/best-kitesurf-schools-portugal"
                    className="relative text-[#171717]/60 text-xs tracking-[0.1em] uppercase font-light inline-block pb-1"
                  >
                    Read the Methodology
                  </Link>
                </div>
                
                <div className="border-t border-[#171717]/10 pt-12">
                  <h3 className="text-xs font-medium uppercase tracking-[0.2em] mb-8 text-[#171717]/50">Travel Essentials</h3>
                  <div className="space-y-8">
                     <div className="flex flex-col">
                       <span className="text-[10px] tracking-[0.1em] uppercase text-[#171717]/40 mb-2">Closest Airport</span>
                       <span className="font-serif text-2xl text-[#1A365D]">Porto (OPO)</span>
                     </div>
                     <div className="flex flex-col">
                       <span className="text-[10px] tracking-[0.1em] uppercase text-[#171717]/40 mb-2">Water Temp</span>
                       <span className="font-serif text-2xl text-[#1A365D]">15-18°C</span>
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
         <span className="text-[#171717] font-serif font-bold text-lg">Portugal Lessons</span>
         <a href="https://northwindkiteportugal.com/" className="text-xs uppercase tracking-widest font-medium border-b border-[#171717]">Book Now</a>
      </div>
    </>
  );
}

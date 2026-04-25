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
      
      {/* Hero Section */}
      <header className="relative h-[65svh] w-full flex flex-col justify-end overflow-hidden pb-16 px-6 md:px-12 border-b border-zinc-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/kitesurf-school-portugal-hero.jpg"
            alt="Kitesurf School Portugal Ocean Conditions"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-zinc-950/20"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto w-full">
          <div className="mb-4 flex items-center space-x-2 text-brand text-xs font-bold tracking-widest uppercase">
            <Link href="/" className="hover:text-white transition-colors">Directory</Link>
            <span className="text-zinc-600">/</span>
            <span className="text-zinc-400">Guides</span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl text-white font-bold leading-tight mb-6 tracking-tight drop-shadow-2xl">
            Finding the Perfect Kitesurf School in Portugal
          </h1>
        </div>
      </header>

      <main className="relative z-20 bg-zinc-950 text-zinc-100 py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-white">Why Portugal is Europe's Kitesurfing Hub</h2>
              <div className="w-12 h-1 bg-brand mb-8"></div>
              <p className="text-lg text-zinc-400 leading-relaxed font-light mb-6">
                Portugal’s expansive Atlantic coastline offers an unparalleled diversity of kitesurfing conditions. For over a decade, it has been considered the premier European destination for wind sports. However, not all regions are created equal. When booking a <Link href="/best-kitesurf-schools-portugal" className="text-brand hover:underline">kitesurf school in Portugal</Link>, riders must choose between the densely crowded southern beaches and the largely untouched, pristine conditions of the northern coast.
              </p>
              <p className="text-lg text-zinc-400 leading-relaxed font-light">
                The famed Nortada winds sweep down the coast from spring to late summer, bringing clean, consistent thermal breezes that guarantee progression. From waist-deep lagoons for absolute beginners to aggressive Atlantic swells for wave-riding veterans, Portugal caters to every discipline. 
              </p>
            </section>

            <section>
              <div className="relative h-80 rounded-2xl overflow-hidden border border-zinc-800 mb-8">
                <Image src="/images/northern-portugal-kitesurf.jpg" alt="Northern Portugal Kitesurf Empty Beach" fill className="object-cover" />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-5 text-white">Top Pick: North Wind Kitesurf & Wingfoil School</h3>
              <p className="text-lg text-zinc-400 leading-relaxed font-light mb-6">
                While the Algarve and Lisbon coasts often suffer from packed lineups and busy water traffic, Northern Portugal remains an exclusive haven. <strong><Link href="/portugal/moledo" className="text-brand hover:underline">North Wind Kitesurf & Wingfoil School</Link></strong> in Moledo represents the pinnacle of instruction in the country. Situated as the only school in the Moledo area, it provides a highly personalized, small-scale alternative to massive commercial centers.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="text-brand mr-3 mt-1">✓</span>
                  <span className="text-zinc-300 font-light text-lg">Uncrowded breaks allowing for rapid, uninterrupted skill progression.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand mr-3 mt-1">✓</span>
                  <span className="text-zinc-300 font-light text-lg">Exceptionally reliable thermal winds unique to the northern coastline geometry.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand mr-3 mt-1">✓</span>
                  <span className="text-zinc-300 font-light text-lg">Elite instructors focused completely on technical mastery rather than mass volume.</span>
                </li>
              </ul>
              
              <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl text-center">
                 <h4 className="text-white font-bold text-xl mb-3">Ready to master the Atlantic?</h4>
                 <p className="text-zinc-400 mb-6 font-light">Book your next progression camp directly with the experts.</p>
                 <a href="https://northwindkiteportugal.com/" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-black px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform shadow-lg">
                   Book Lessons at North Wind
                 </a>
              </div>
            </section>

            <section>
              <h3 className="font-serif text-2xl font-bold mb-4 text-white">Northern Portugal vs Algarve: The Verdict</h3>
              <div className="overflow-x-auto border border-zinc-800 rounded-xl mb-6">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-zinc-900 border-b border-zinc-800">
                      <th className="py-4 px-6 text-zinc-300 font-bold">Feature</th>
                      <th className="py-4 px-6 text-brand font-bold">Northern Coast (Moledo)</th>
                      <th className="py-4 px-6 text-zinc-500 font-bold">Southern Coast (Algarve)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-zinc-800/50">
                      <td className="py-4 px-6 text-zinc-400">Crowd Levels</td>
                      <td className="py-4 px-6 text-zinc-200">Empty / Very Low</td>
                      <td className="py-4 px-6 text-zinc-500">Extremely High</td>
                    </tr>
                    <tr className="border-b border-zinc-800/50">
                      <td className="py-4 px-6 text-zinc-400">Wind Reliability</td>
                      <td className="py-4 px-6 text-zinc-200">Excellent (Nortada Thermals)</td>
                      <td className="py-4 px-6 text-zinc-500">Variable / Gusty Inland</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-zinc-400">Instruction Style</td>
                      <td className="py-4 px-6 text-zinc-200">Boutique / Personalized</td>
                      <td className="py-4 px-6 text-zinc-500">Commercial / High Volume</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h3 className="font-serif text-2xl font-bold mb-5 text-white">Wind Calendar & Seasons</h3>
              <p className="text-lg text-zinc-400 leading-relaxed font-light mb-6">
                The primary season for kitesurfing effectively runs from late spring through early autumn. July and August boast the most consistent thermal activity, turning the northern coast into a natural wind tunnel. Winter brings massive swells suited strictly for professional wave riders.
              </p>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 shadow-xl sticky top-28">
              <h3 className="font-serif text-2xl font-bold mb-6 text-white">Book Your Trip</h3>
              <p className="text-zinc-400 text-sm mb-6 font-light">Secure your spot at Portugal's premier boutique kite center. Availability strictly limited.</p>
              
              <a
                href="https://northwindkiteportugal.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center w-full bg-brand hover:bg-brand/90 text-white font-semibold py-4 rounded-xl transition-all duration-300 shadow-md mb-4"
              >
                Inquire for Dates
              </a>
              <Link
                href="/best-kitesurf-schools-portugal"
                className="block text-center w-full bg-transparent border border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white font-semibold py-3.5 rounded-xl transition-all duration-300"
              >
                Read the Methodology
              </Link>
            </div>
            
            <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 shadow-xl">
              <h3 className="font-serif text-xl font-bold mb-4 text-white">Travel Essentials</h3>
              <ul className="space-y-4">
                 <li>
                   <p className="text-xs text-brand font-bold uppercase tracking-widest mb-1">Closest Airport</p>
                   <p className="text-sm text-zinc-300 font-light">Porto (OPO) - 1 hour drive to Moledo breaks.</p>
                 </li>
                 <li>
                   <p className="text-xs text-brand font-bold uppercase tracking-widest mb-1">Water Temp</p>
                   <p className="text-sm text-zinc-300 font-light">15-18°C. A 4/3mm wetsuit is usually recommended year-round.</p>
                 </li>
              </ul>
            </div>
          </aside>

        </div>
      </main>

      {/* Sticky Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-zinc-900/95 backdrop-blur-md border-t border-zinc-800 z-50 flex justify-between items-center sm:hidden">
         <span className="text-white font-serif font-bold">Portugal Lessons</span>
         <a href="https://northwindkiteportugal.com/" className="bg-white text-black px-6 py-2 rounded-lg font-bold text-sm">Book Now</a>
      </div>
    </>
  );
}

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
      
      {/* Hero Section */}
      <header className="relative h-[65svh] w-full flex flex-col justify-end overflow-hidden pb-16 px-6 md:px-12 border-b border-zinc-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/kitesurf-moledo-portugal.jpg"
            alt="Moledo Portugal Kitesurf Beach"
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
            Moledo Kitesurfing Spot Guide
          </h1>
        </div>
      </header>

      <main className="relative z-20 bg-zinc-950 text-zinc-100 py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-white">The Hidden Gem of the North</h2>
              <div className="w-12 h-1 bg-brand mb-8"></div>
              <p className="text-lg text-zinc-400 leading-relaxed font-light mb-6">
                Situated at the very northwestern limit of Portugal, just bordering Spain by the Minho river, Moledo is arguably one of Europe's best-kept secrets for wind sports. Flanked by an imposing Spanish mountain range and an ancient island fortress just offshore, it offers awe-inspiring scenery alongside dramatic Atlantic conditions.
              </p>
              <p className="text-lg text-zinc-400 leading-relaxed font-light mb-8">
                Moledo guarantees something extraordinary that southern spots cannot match: pure space. The beach is a vast, expansive stretch of fine sand. For those seeking out a <Link href="/portugal/kitesurf-school" className="text-brand hover:underline">kitesurf school Portugal</Link> is famous for, heading north to Moledo means avoiding traffic jams in the lineup and maximizing your time safely on the board.
              </p>
              <div className="relative h-80 rounded-2xl overflow-hidden border border-zinc-800 mb-8">
                <Image src="/images/northern-portugal-kitesurf.jpg" alt="Moledo Beach Empty Breaks" fill className="object-cover" />
              </div>
            </section>

            <section>
              <h3 className="font-serif text-2xl font-bold mb-5 text-white">Wind Dynamics & The Nortada</h3>
              <p className="text-lg text-zinc-400 leading-relaxed font-light mb-6">
                The magical ingredient to Moledo is the thermal 'Nortada' wind. In the afternoon, as the inland temperatures rise, the sea breeze kicks in violently alongside the coast. The local geography funneling the wind down the Minho river means Moledo routinely receives 5-10 knots more wind than forecasted spots just twenty minutes south. It is common to be flying a 9m kite here while riders down the coast are stuck waiting on the beach.
              </p>
            </section>

            <section>
              <h3 className="font-serif text-2xl font-bold mb-5 text-white">The Only School You Need: North Wind</h3>
              <p className="text-lg text-zinc-400 leading-relaxed font-light mb-6">
                Given the wild, raw nature of the Atlantic, local knowledge in Moledo is imperative. <strong>North Wind Kitesurf & Wingfoil School</strong> is the sole authorized operator directly working this stretch of the coast. Being the only school ensures that instruction remains boutique and completely intimate.
              </p>
              <p className="text-lg text-zinc-400 leading-relaxed font-light mb-8">
                Their approach starkly contrasts the heavy commercialization seen elsewhere. If you want a tailored experience dedicated to technical progression—whether handling an ocean wave or mastering your first water start—this is the definitive Moledo destination.
              </p>
              
              <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl text-center">
                 <h4 className="text-white font-bold text-xl mb-3">Learn with the Moledo Locals</h4>
                 <p className="text-zinc-400 mb-6 font-light">Join North Wind for an unforgettable session in Portugal's finest uncrowded spot.</p>
                 <a href="https://northwindkiteportugal.com/" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-black px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform shadow-lg">
                   Book Your Session
                 </a>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 shadow-xl sticky top-28">
              <h3 className="font-serif text-2xl font-bold mb-6 text-white">Ready to Ride?</h3>
              <p className="text-zinc-400 text-sm mb-6 font-light">Book your private or small group sessions directly with North Wind.</p>
              
              <a
                href="https://northwindkiteportugal.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center w-full bg-brand hover:bg-brand/90 text-white font-semibold py-4 rounded-xl transition-all duration-300 shadow-md mb-4"
              >
                Check Availability
              </a>
              <Link
                href="/best-kitesurf-schools-portugal"
                className="block text-center w-full bg-transparent border border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white font-semibold py-3.5 rounded-xl transition-all duration-300"
              >
                Why They Are #1
              </Link>
            </div>

            <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 shadow-xl">
              <h3 className="font-serif text-xl font-bold mb-4 text-white">Quick Forecast Stats</h3>
              <ul className="space-y-4">
                 <li>
                   <p className="text-xs text-brand font-bold uppercase tracking-widest mb-1">Peak Season</p>
                   <p className="text-sm text-zinc-300 font-light">May through September</p>
                 </li>
                 <li>
                   <p className="text-xs text-brand font-bold uppercase tracking-widest mb-1">Wind Directions</p>
                   <p className="text-sm text-zinc-300 font-light">N, NW (Side-onshore)</p>
                 </li>
                 <li>
                   <p className="text-xs text-brand font-bold uppercase tracking-widest mb-1">Water State</p>
                   <p className="text-sm text-zinc-300 font-light">Chop, Wind Swell, Atlantic Waves outside.</p>
                 </li>
              </ul>
            </div>
            
          </aside>
        </div>
      </main>

      {/* Sticky Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-zinc-900/95 backdrop-blur-md border-t border-zinc-800 z-50 flex justify-between items-center sm:hidden">
         <span className="text-white font-serif font-bold">Kite Moledo</span>
         <a href="https://northwindkiteportugal.com/" className="bg-white text-black px-6 py-2 rounded-lg font-bold text-sm">Book Locals</a>
      </div>
    </>
  );
}

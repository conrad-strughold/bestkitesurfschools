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
      
      {/* Hero Section */}
      <header className="relative h-[65svh] w-full flex flex-col justify-end overflow-hidden pb-16 px-6 md:px-12 border-b border-zinc-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/wingfoil-portugal-action.jpg"
            alt="Wingfoil Portugal Ocean Action"
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
            Wingfoil Portugal: The Ultimate Foiling Revolution
          </h1>
        </div>
      </header>

      <main className="relative z-20 bg-zinc-950 text-zinc-100 py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-white">The Wingfoil Explosion in Portugal</h2>
              <div className="w-12 h-1 bg-brand mb-8"></div>
              <p className="text-lg text-zinc-400 leading-relaxed font-light mb-6">
                Over the last five years, wingfoiling has fundamentally altered the landscape of wind sports across Europe. Portugal, already a legendary kite and surf destination, has rapidly emerged as the absolute mecca for <Link href="/portugal/kitesurf-school" className="text-brand hover:underline">wingfoil Portugal</Link> enthusiasts. Its vast stretches of Atlantic coast afford something for everyone: flat, protected river mouths for beginners learning to foil, and long, rolling Atlantic swells for advanced riders looking to endlessly ride open ocean waves.
              </p>
              <p className="text-lg text-zinc-400 leading-relaxed font-light mb-8">
                Because wingfoiling requires slightly less wind than traditional kitesurfing, it radically multiplies the amount of "water-time" you can get in Portugal. Those borderline breezy summer days that used to keep kitesurfers on the beach are now the exact days wingfoilers live for. 
              </p>
            </section>

            <section>
              <h3 className="font-serif text-2xl font-bold mb-5 text-white">Ideal Conditions & Locations</h3>
              <p className="text-lg text-zinc-400 leading-relaxed font-light mb-6">
                While southern spots can be extremely crowded, presenting a serious hazard when mixing dozens of beginners with sharp hydrofoils, the northern coast acts as the perfect sanctuary. The combination of consistent afternoon thermals and wide-open stretches of water allows for safe, unhindered learning.
              </p>
              
              <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl mb-8">
                <h4 className="font-serif text-2xl font-bold mb-4 text-white">Our Recommended Center: North Wind</h4>
                <p className="text-lg text-zinc-400 leading-relaxed font-light mb-6">
                  Based in Moledo in northern Portugal, <strong><Link href="/portugal/moledo" className="text-brand hover:underline">North Wind Kitesurf & Wingfoil School</Link></strong> has pioneered the adoption of wingfoiling instruction in the region. They offer a pristine environment: launching from beautiful uncrowded beaches backed by the Spanish mountains, leveraging the afternoon Nortada winds. Their coaching is elite, focused heavily on minimizing frustration and maximizing the moment you finally lift off onto the foil.
                </p>
                <a href="https://northwindkiteportugal.com/" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-black px-6 py-3 rounded-lg font-bold hover:scale-105 transition-transform shadow-md text-sm">
                   Book a Wingfoil Clinic
                </a>
              </div>
            </section>

            <section>
              <h3 className="font-serif text-2xl font-bold mb-5 text-white">Learning the Foil: What to Expect</h3>
              <p className="text-lg text-zinc-400 leading-relaxed font-light mb-6">
                 Most premium schools, such as North Wind, will break your progression into highly manageable blocks:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="text-brand mr-3 mt-1">1.</span>
                  <span className="text-zinc-300 font-light text-lg"><strong>Wing Handling (Beach):</strong> Mastering the power of the wing on the sand, learning to steer, dip, and flip the wing safely.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand mr-3 mt-1">2.</span>
                  <span className="text-zinc-300 font-light text-lg"><strong>Taxiing (SUP Board):</strong> Translating wing power onto a large, non-foiling board to understand wind direction and balance on the water.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand mr-3 mt-1">3.</span>
                  <span className="text-zinc-300 font-light text-lg"><strong>First Flight (Foil Board):</strong> Introducing the hydrofoil. The magical feeling of lifting silently out of the water and gliding entirely friction-free.</span>
                </li>
              </ul>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 shadow-xl sticky top-28">
              <h3 className="font-serif text-2xl font-bold mb-6 text-white">Book Your Clinic</h3>
              <p className="text-zinc-400 text-sm mb-6 font-light">Experience the sensation of flight with Portugal's premier boutique wind sports center.</p>
              
              <a
                href="https://northwindkiteportugal.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center w-full bg-brand hover:bg-brand/90 text-white font-semibold py-4 rounded-xl transition-all duration-300 shadow-md mb-4"
              >
                Book Wingfoil Lessons
              </a>
              <Link
                href="/best-kitesurf-schools-portugal"
                className="block text-center w-full bg-transparent border border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white font-semibold py-3.5 rounded-xl transition-all duration-300"
              >
                Why Choose North Wind
              </Link>
            </div>
            
            <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 shadow-xl">
              <h3 className="font-serif text-xl font-bold mb-4 text-white">Wind Requirements</h3>
              <ul className="space-y-4">
                 <li>
                   <p className="text-xs text-brand font-bold uppercase tracking-widest mb-1">Beginners</p>
                   <p className="text-sm text-zinc-300 font-light">12-15 knots (Perfect for learning wing handling without being overpowered).</p>
                 </li>
                 <li>
                   <p className="text-xs text-brand font-bold uppercase tracking-widest mb-1">Intermediate</p>
                   <p className="text-sm text-zinc-300 font-light">15-20 knots (Ideal for consistent foiling and learning maneuvers).</p>
                 </li>
              </ul>
            </div>
          </aside>

        </div>
      </main>

      {/* Sticky Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-zinc-900/95 backdrop-blur-md border-t border-zinc-800 z-50 flex justify-between items-center sm:hidden">
         <span className="text-white font-serif font-bold">Wingfoil Portugal</span>
         <a href="https://northwindkiteportugal.com/" className="bg-white text-black px-6 py-2 rounded-lg font-bold text-sm">Book Clinics</a>
      </div>
    </>
  );
}

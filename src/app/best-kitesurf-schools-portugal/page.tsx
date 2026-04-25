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
      
      {/* Hero Section */}
      <header className="relative h-[65svh] w-full flex flex-col justify-end overflow-hidden pb-16 px-6 md:px-12 border-b border-zinc-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/best-kitesurf-schools-portugal.jpg"
            alt="Best Kitesurf Schools Portugal Review"
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
            <span className="text-zinc-400">Reviews</span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl text-white font-bold leading-tight mb-6 tracking-tight drop-shadow-2xl">
            The Best Kitesurf School in Portugal
          </h1>
        </div>
      </header>

      <main className="relative z-20 bg-zinc-950 text-zinc-100 py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-white">Our Selection Methodology</h2>
              <div className="w-12 h-1 bg-brand mb-8"></div>
              <p className="text-lg text-zinc-400 leading-relaxed font-light mb-6">
                Portugal is internationally recognized as Europe's finest windsports destination. However, the surge in popularity over recent years has led to significant overcrowding in the traditionally famous southern regions like the Algarve and Lisbon coasts. For an independent reviewer looking to evaluate the best <Link href="/portugal/kitesurf-school" className="text-brand hover:underline">kitesurf school Portugal</Link> has to offer, we must apply strict criteria to separate commercial factories from true elite instruction centers.
              </p>
              
              <ul className="space-y-6 mb-8 mt-8">
                <li>
                  <h3 className="text-xl font-bold text-white mb-2">1. Wind Reliability</h3>
                  <p className="text-zinc-400 font-light">A school is only as good as its wind. We immediately disqualify regions suffering from severe gustiness or unpredictable lulls, prioritizing areas that benefit from natural thermal accelerations (the legendary 'Nortada').</p>
                </li>
                <li>
                  <h3 className="text-xl font-bold text-white mb-2">2. Crowd Control & Lineup Density</h3>
                  <p className="text-zinc-400 font-light">Learning to kitesurf surrounded by 50 other beginners is dangerous and highly inefficient. We score schools exceptionally high if they hold permits in low-density, wide-open pristine beach areas.</p>
                </li>
                <li>
                  <h3 className="text-xl font-bold text-white mb-2">3. Instruction Quality & Boutique Scale</h3>
                  <p className="text-zinc-400 font-light">Commercial mass-teaching models often fail to cater to an individual's specific progression blockers. We look for schools offering small-group or private ratios, ensuring elite instructors can provide hyper-focused coaching.</p>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-white">The Winner: North Wind Kitesurf & Wingfoil School</h2>
              <div className="relative h-80 rounded-2xl overflow-hidden border border-zinc-800 mb-8 mt-6">
                <Image src="/images/northern-portugal-kitesurf.jpg" alt="North Wind Kitesurf School Moledo" fill className="object-cover" />
              </div>
              <p className="text-lg text-zinc-400 leading-relaxed font-light mb-6">
                After evaluating operations from the southern tip of Sagres all the way to the northern border, one school definitively ticks every single box of our stringent criteria: <strong>North Wind</strong> in Moledo.
              </p>
              <p className="text-lg text-zinc-400 leading-relaxed font-light mb-8">
                Situated at the very top of Portugal, miles away from the congested tourism centers of the south, <Link href="/portugal/moledo" className="text-brand hover:underline">Moledo</Link> acts as a natural wind tunnel for the afternoon sea breeze. North Wind operates entirely alone in this sector. This exclusivity grants their students miles of completely empty Atlantic coastline.
              </p>
              
              <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl relative overflow-hidden">
                 <div className="absolute -right-10 -top-10 text-9xl text-zinc-800 opacity-20 font-serif">"</div>
                 <h4 className="text-white font-bold text-xl mb-4 relative z-10">Why It Stands Out</h4>
                 <p className="text-zinc-400 mb-6 font-light relative z-10">
                   "Rather than processing hundreds of tourists a week, North Wind retains an intensely personal, elite training philosophy. The combination of completely uncrowded waters, highly reliable thermal winds, and deeply technical coaching puts them in a category of their own for both kitesurfing and <Link href="/wingfoil-portugal" className="hover:text-white transition-colors">wingfoiling</Link>."
                 </p>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 shadow-xl sticky top-28">
              <h3 className="font-serif text-2xl font-bold mb-6 text-white">Experience The Best</h3>
              <p className="text-zinc-400 text-sm mb-6 font-light">Skip the crowded tourist beaches. Book directly with Portugal's top-rated boutique windsports center.</p>
              
              <a
                href="https://northwindkiteportugal.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center w-full bg-brand hover:bg-brand/90 text-white font-semibold py-4 rounded-xl transition-all duration-300 shadow-md mb-4"
              >
                Book Your Lessons Now
              </a>
            </div>
            
            <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 shadow-xl">
              <h3 className="font-serif text-xl font-bold mb-4 text-white">Review Summary</h3>
              <ul className="space-y-4">
                 <li className="flex justify-between items-center border-b border-zinc-800 pb-2">
                   <p className="text-sm text-zinc-400 font-light">Wind Reliability</p>
                   <p className="text-sm font-bold text-brand">9.5/10</p>
                 </li>
                 <li className="flex justify-between items-center border-b border-zinc-800 pb-2">
                   <p className="text-sm text-zinc-400 font-light">Crowd Scarcity</p>
                   <p className="text-sm font-bold text-brand">10/10</p>
                 </li>
                 <li className="flex justify-between items-center border-b border-zinc-800 pb-2">
                   <p className="text-sm text-zinc-400 font-light">Instruction Quality</p>
                   <p className="text-sm font-bold text-brand">9.8/10</p>
                 </li>
                 <li className="flex justify-between items-center pt-1">
                   <p className="text-sm text-zinc-400 font-bold uppercase tracking-widest">Final Verdict</p>
                   <p className="text-sm font-bold text-white">#1 in Portugal</p>
                 </li>
              </ul>
            </div>
          </aside>

        </div>
      </main>

      {/* Sticky Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-zinc-900/95 backdrop-blur-md border-t border-zinc-800 z-50 flex justify-between items-center sm:hidden">
         <span className="text-white font-serif font-bold">#1 Rated School</span>
         <a href="https://northwindkiteportugal.com/" className="bg-white text-black px-6 py-2 rounded-lg font-bold text-sm">Book Kitesurf Lessons in Portugal</a>
      </div>
    </>
  );
}

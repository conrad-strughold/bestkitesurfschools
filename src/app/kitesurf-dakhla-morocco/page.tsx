import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kitesurfing in Dakhla, Morocco 2026: Flat Water and Constant Wind | BestKitesurfSchools",
  description: "Dakhla is one of the world's elite kitesurf destinations. Massive lagoon, constant trade winds, and a unique desert-ocean landscape. Full spot guide for 2026.",
  openGraph: {
    title: "Kitesurfing in Dakhla, Morocco 2026: Flat Water and Constant Wind",
    description: "Dakhla is one of the world's elite kitesurf destinations. Massive lagoon, constant trade winds, and a unique desert-ocean landscape.",
    url: "https://bestkitesurfschools.com/kitesurf-dakhla-morocco",
    images: [{ url: "https://bestkitesurfschools.com/images/dakhla-lagoon.jpg", width: 1200, height: 630, alt: "Dakhla lagoon kitesurfing Morocco" }],
    type: "article",
  },
};

export default function KitesurfDakhlaPage() {
  return (
    <>
      <Navigation />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Kitesurfing in Dakhla, Morocco: Spot Guide 2026",
        "datePublished": "2026-04-27",
        "author": { "@type": "Organization", "name": "BestKitesurfSchools" }
      })}} />

      <header className="relative min-h-[65svh] w-full flex flex-col justify-end pt-40 pb-20 px-6 md:px-16 lg:px-24 bg-[#171717]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/dakhla-lagoon.jpg"
            alt="Dakhla lagoon kitesurfing Morocco"
            fill
            className="object-cover opacity-75 mix-blend-overlay"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 w-full max-w-[1000px] mx-auto">
          <div className="mb-4 flex items-center space-x-3 text-white text-[10px] tracking-[0.2em] uppercase font-medium">
            <Link href="/" className="hover:opacity-60 transition-opacity">Home</Link>
            <span className="opacity-40">/</span>
            <span className="opacity-80">Morocco: Dakhla</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight mb-6">
            Kitesurfing in Dakhla, Morocco
          </h1>
          <p className="text-white/60 font-light text-lg">Lagoon Conditions, Trade Winds and Travel Tips: 2026</p>
        </div>
      </header>

      <main className="relative z-20 bg-[#FDFBF7] text-[#171717]">
        <div className="w-full px-6 md:px-16 lg:px-24 py-24 max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-24">

            <article className="lg:w-2/3 max-w-[720px]">

              <aside className="border-l-4 border-[#1A365D] bg-[#F0EDE6] p-8 mb-12">
                <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1A365D] mb-4">Quick Facts</h2>
                <ul className="space-y-2 text-sm text-[#171717]/80 font-light">
                  <li>• Wind: N / NE Trade winds, among the most consistent on the planet</li>
                  <li>• Average wind: 18 to 28 knots, 320+ days per year</li>
                  <li>• Water: Flat lagoon for beginners, open ocean for advanced riders</li>
                  <li>• Best season: Year-round; peak November to April for strongest trades</li>
                  <li>• Level: All levels welcome, lagoon is exceptional for learning</li>
                </ul>
              </aside>

              <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-10">
                Dakhla sits on a narrow peninsula jutting into a vast lagoon in southern Morocco, and it is one of the most geographically gifted kitesurf locations on the planet. The Saharan trade wind system delivers north-northeasterly winds with a consistency that simply does not exist in European spots: 320+ windy days per year, with averages sitting comfortably between 18 and 28 knots. The lagoon is enormous, shallow, and flat, a natural teaching tank of almost absurd dimensions.
              </p>

              <h2 className="font-serif text-3xl mb-5">The Lagoon: Why Dakhla is Special</h2>
              <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-10">
                The Dakhla lagoon stretches over 40km in length and sits mostly at knee-to-thigh depth across its inland zones. The surface on classic trade wind days is remarkably flat, almost lake-like in the sheltered central sections. For beginner kitesurfers, this translates into extended body-dragging sessions and water starts without wrestling swell or navigating current. For advanced freeride and freestyle riders, the open Atlantic ocean side of the peninsula delivers powerful rolling chop and occasional waves. Dakhla caters to both in a way almost no other destination on Earth does simultaneously.
              </p>

              <h2 className="font-serif text-3xl mb-5">Wind Reliability</h2>
              <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-10">
                Dakhla's wind is driven by the Saharan High, a persistent high-pressure system over the African desert that generates reliable trade winds blowing from the north-northeast. Unlike thermal winds (which are restricted to afternoon windows), the Dakhla trades blow throughout the day. Early morning sessions are entirely normal. The peak months of November through April deliver the most powerful winds, typically 20 to 30 knots, while the summer months are slightly lighter at 15 to 22 knots but still highly consistent. Very few places on Earth match this level of year-round wind reliability.
              </p>

              <h2 className="font-serif text-3xl mb-5">Getting to Dakhla</h2>
              <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-6">
                Dakhla Airport (VIL) receives direct charter and scheduled flights from several European cities, with Royal Air Maroc operating connections via Casablanca. Several Dakhla-focused kite camps offer airport transfers as part of all-inclusive packages, which is the most practical way to handle logistics in a remote destination.
              </p>
              <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-10">
                Most visitors stay at one of the lagoon-side kite camps, which provide accommodation, meals, equipment, and instruction in a single package. This all-inclusive model suits Dakhla well, as the remoteness of the location makes self-organising significantly more complex than a European destination.
              </p>

              <h2 className="font-serif text-3xl mb-5">Dakhla vs European Destinations</h2>
              <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-10">
                Dakhla wins on raw wind reliability and flat water quality. No European destination comes close on those metrics. The trade-off is logistical complexity, cost (camp packages run around 1,200 to 2,000 euros per week all-in), and the need to fly to a genuinely remote location. For riders planning a dedicated kitesurf trip, Dakhla is extraordinary. For those integrating a kitesurf course with a broader European trip, <Link href="/kitesurf-portugal" className="underline hover:text-[#319795] transition-colors">Portugal</Link>, particularly <Link href="/kitesurf-moledo" className="underline hover:text-[#319795] transition-colors">northern Portugal</Link>, offers a more accessible combination of excellent conditions and cultural richness.
              </p>

              <div className="border-t border-[#171717]/10 pt-10">
                <h3 className="text-xs font-medium uppercase tracking-[0.2em] mb-6 text-[#171717]/50">Compare Destinations</h3>
                <ul className="space-y-3 text-sm">
                  <li><Link href="/kitesurf-portugal" className="hover:text-[#319795] transition-colors underline">Kitesurfing in Portugal: Complete Guide</Link></li>
                  <li><Link href="/kitesurf-tarifa-spain" className="hover:text-[#319795] transition-colors underline">Tarifa, Spain: Europe's Wind Capital</Link></li>
                  <li><Link href="/kitesurf-brazil" className="hover:text-[#319795] transition-colors underline">Brazil: Jericoacoara and Beyond</Link></li>
                </ul>
              </div>
            </article>

            <aside className="lg:w-1/3">
              <div className="sticky top-32">
                <div className="border-t border-[#171717]/10 pt-12 mb-12">
                  <h3 className="text-xs font-medium uppercase tracking-[0.2em] mb-8 text-[#171717]/50">Spot Data</h3>
                  <div className="space-y-5 text-sm">
                    <div><span className="text-xs uppercase tracking-widest text-[#171717]/40 block mb-1">Wind</span><span className="font-serif text-xl text-[#1A365D]">N / NE Trades</span></div>
                    <div><span className="text-xs uppercase tracking-widest text-[#171717]/40 block mb-1">Avg Speed</span><span className="font-serif text-xl text-[#1A365D]">18 to 28 kt</span></div>
                    <div><span className="text-xs uppercase tracking-widest text-[#171717]/40 block mb-1">Wind Days/Yr</span><span className="font-serif text-xl text-[#319795]">320+</span></div>
                    <div><span className="text-xs uppercase tracking-widest text-[#171717]/40 block mb-1">Level</span><span className="font-serif text-xl">All Levels</span></div>
                    <div><span className="text-xs uppercase tracking-widests text-[#171717]/40 block mb-1">Best Season</span><span className="font-serif text-xl">Year-Round</span></div>
                  </div>
                </div>
                <div className="border-t border-[#171717]/10 pt-12">
                  <h3 className="text-xs font-medium uppercase tracking-[0.2em] mb-6 text-[#171717]/50">Other Destinations</h3>
                  <ul className="space-y-3 text-sm font-light text-[#171717]/80">
                    <li><Link href="/kitesurf-portugal" className="hover:text-[#319795]">Portugal</Link></li>
                    <li><Link href="/kitesurf-tarifa-spain" className="hover:text-[#319795]">Tarifa, Spain</Link></li>
                    <li><Link href="/kitesurf-brazil" className="hover:text-[#319795]">Brazil</Link></li>
                  </ul>
                </div>
              </div>
            </aside>

          </div>
        </div>
      </main>
    </>
  );
}

import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kitesurfing in Essaouira, Morocco 2026 — Spot Guide | BestKitesurfSchools",
  description: "Essaouira is Morocco's Atlantic kitesurf capital — strong trade winds, medina culture, and a dramatic windswept coast. Full spot guide and travel tips for 2026.",
  openGraph: {
    title: "Kitesurfing Essaouira Morocco 2026",
    description: "Essaouira is Morocco's Atlantic kitesurf capital — strong trade winds, medina culture, and a dramatic windswept coast.",
    url: "https://bestkitesurfschools.com/kitesurf-essaouira-morocco",
    type: "article",
  },
};

export default function KitesurfEssaouiraPage() {
  return (
    <>
      <Navigation />

      <header className="relative min-h-[55svh] w-full flex flex-col justify-end pt-40 pb-20 px-6 md:px-16 lg:px-24 bg-[#171717]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2D3748] to-[#171717]"></div>
        <div className="relative z-10 w-full max-w-[1000px] mx-auto">
          <div className="mb-4 flex items-center space-x-3 text-white text-[10px] tracking-[0.2em] uppercase font-medium">
            <Link href="/" className="hover:opacity-60 transition-opacity">Home</Link>
            <span className="opacity-40">/</span>
            <span className="opacity-80">Morocco — Essaouira</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight mb-6">
            Kitesurfing in Essaouira, Morocco
          </h1>
          <p className="text-white/60 font-light text-lg">Atlantic Winds, Medina Culture &amp; Spot Guide — 2026</p>
        </div>
      </header>

      <main className="relative z-20 bg-[#FDFBF7] text-[#171717]">
        <div className="w-full px-6 md:px-16 lg:px-24 py-24 max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-24">

            <article className="lg:w-2/3 max-w-[720px]">

              <aside className="border-l-4 border-[#1A365D] bg-[#F0EDE6] p-8 mb-12">
                <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1A365D] mb-4">Quick Facts</h2>
                <ul className="space-y-2 text-sm text-[#171717]/80 font-light">
                  <li>• Wind: N / NE Atlantic trade winds — nicknamed &ldquo;the wind city of Africa&rdquo;</li>
                  <li>• Average wind: 20–35 knots in peak season</li>
                  <li>• Best season: May–September for strongest, most reliable winds</li>
                  <li>• Level: Intermediate to Advanced recommended due to power</li>
                  <li>• Gateway: Marrakech (RAK) — 2.5 hours by road</li>
                </ul>
              </aside>

              <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-10">
                Essaouira has been a windsurfing destination since the 1980s, and kitesurfing naturally followed as the sport evolved. The city&apos;s UNESCO-listed blue-doored medina, situated directly behind its wide Atlantic beach, creates a dramatic and culturally rich context for wind sports. The Mogador peninsula geography funnels and accelerates Atlantic north-northeasterlies onto the beach with extraordinary power — which is precisely why Essaouira earned the epithet &ldquo;Wind City of Africa.&rdquo;
              </p>

              <h2 className="font-serif text-3xl mb-5">Wind Conditions</h2>
              <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-10">
                Essaouira&apos;s wind blows from the north-northeast, side-onshore for the main beach, between May and September. Wind speeds routinely reach 25–35 knots during peak season, making it one of the more powerful consistent spots in the Morocco-Atlantic region. This power makes Essaouira superb for experienced riders who thrive in strong conditions, and a challenging environment for beginners. The ocean side delivers regular chop with occasional swell — rewarding for freeriders and wave enthusiasts, but not the protected flat water of Dakhla.
              </p>

              <h2 className="font-serif text-3xl mb-5">Essaouira vs Dakhla</h2>
              <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-10">
                <Link href="/kitesurf-dakhla-morocco" className="underline hover:text-[#319795] transition-colors">Dakhla</Link> wins on raw wind reliability, flat water quality, and consistency. Essaouira wins on cultural richness, accessibility (shorter flight, road trip from Marrakech), and the appeal of combining a kitesurf session with the extraordinary experience of the medina. Riders who want flat-water learning should go to Dakhla; riders who want powerful sessions in a culturally compelling destination should consider Essaouira.
              </p>

              <h2 className="font-serif text-3xl mb-5">Travel Logistics</h2>
              <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-6">
                Marrakech Menara Airport (RAK) is the most practical entry point, with abundant cheap European connections. The road from Marrakech to Essaouira takes approximately 2.5 hours through the Atlas foothills — a scenic drive. Essaouira town itself has a well-developed tourism infrastructure with riads, hotels, restaurants, and kite schools operating on the main beach.
              </p>
              <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-10">
                Accommodation ranges from budget hostels in the medina to high-end boutique riads. Most kite schools operate as day-hire or lesson operations rather than full kite camps. Combining a Marrakech city break with 3–4 days in Essaouira is a popular and excellent itinerary for European visitors.
              </p>

              <div className="border-t border-[#171717]/10 pt-10">
                <h3 className="text-xs font-medium uppercase tracking-[0.2em] mb-6 text-[#171717]/50">Compare Destinations</h3>
                <ul className="space-y-3 text-sm">
                  <li><Link href="/kitesurf-dakhla-morocco" className="hover:text-[#319795] transition-colors underline">Dakhla, Morocco — Flat Water Paradise</Link></li>
                  <li><Link href="/kitesurf-portugal" className="hover:text-[#319795] transition-colors underline">Portugal — The European Alternative</Link></li>
                  <li><Link href="/kitesurf-tarifa-spain" className="hover:text-[#319795] transition-colors underline">Tarifa, Spain</Link></li>
                </ul>
              </div>
            </article>

            <aside className="lg:w-1/3">
              <div className="sticky top-32">
                <div className="border-t border-[#171717]/10 pt-12 mb-12">
                  <h3 className="text-xs font-medium uppercase tracking-[0.2em] mb-8 text-[#171717]/50">Spot Data</h3>
                  <div className="space-y-5 text-sm">
                    <div><span className="text-xs uppercase tracking-widest text-[#171717]/40 block mb-1">Wind</span><span className="font-serif text-xl text-[#1A365D]">N / NE Atlantic</span></div>
                    <div><span className="text-xs uppercase tracking-widest text-[#171717]/40 block mb-1">Avg Speed</span><span className="font-serif text-xl text-[#1A365D]">20–35 kt</span></div>
                    <div><span className="text-xs uppercase tracking-widest text-[#171717]/40 block mb-1">Level</span><span className="font-serif text-xl">Intermediate+</span></div>
                    <div><span className="text-xs uppercase tracking-widest text-[#171717]/40 block mb-1">Best Season</span><span className="font-serif text-xl">May–Sep</span></div>
                    <div><span className="text-xs uppercase tracking-widest text-[#171717]/40 block mb-1">Gateway</span><span className="font-serif text-xl">Marrakech</span></div>
                  </div>
                </div>
                <div className="border-t border-[#171717]/10 pt-12">
                  <h3 className="text-xs font-medium uppercase tracking-[0.2em] mb-6 text-[#171717]/50">Morocco</h3>
                  <ul className="space-y-3 text-sm font-light text-[#171717]/80">
                    <li><Link href="/kitesurf-dakhla-morocco" className="hover:text-[#319795]">Dakhla — Trade Wind Lagoon</Link></li>
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

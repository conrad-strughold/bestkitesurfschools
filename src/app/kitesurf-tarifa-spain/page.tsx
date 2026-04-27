import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kitesurfing in Tarifa, Spain 2026 — Spot Guide, Wind & Schools | BestKitesurfSchools",
  description: "Tarifa is Europe's wind capital — but is it right for you? Our honest guide covers the spot, the Levante and Poniente winds, the crowds, and what to expect.",
  openGraph: {
    title: "Kitesurfing in Tarifa, Spain 2026 — Spot Guide, Wind & Schools",
    description: "Tarifa is Europe's wind capital — but is it right for you? Our honest guide covers the spot, the Levante and Poniente winds, the crowds, and what to expect.",
    url: "https://bestkitesurfschools.com/kitesurf-tarifa-spain",
    type: "article",
  },
};

export default function KitesurfTarifaPage() {
  return (
    <>
      <Navigation />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Kitesurfing in Tarifa, Spain — Spot Guide 2026",
        "datePublished": "2026-04-27",
        "author": { "@type": "Organization", "name": "BestKitesurfSchools" }
      })}} />

      <header className="relative min-h-[55svh] w-full flex flex-col justify-end pt-40 pb-20 px-6 md:px-16 lg:px-24 bg-[#171717]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A365D] to-[#171717]"></div>
        <div className="relative z-10 w-full max-w-[1000px] mx-auto">
          <div className="mb-4 flex items-center space-x-3 text-white text-[10px] tracking-[0.2em] uppercase font-medium">
            <Link href="/" className="hover:opacity-60 transition-opacity">Home</Link>
            <span className="opacity-40">/</span>
            <span className="opacity-80">Spain — Tarifa</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight mb-6">
            Kitesurfing in Tarifa, Spain
          </h1>
          <p className="text-white/60 font-light text-lg">Spot Guide, Conditions & Honest Assessment — 2026</p>
        </div>
      </header>

      <main className="relative z-20 bg-[#FDFBF7] text-[#171717]">
        <div className="w-full px-6 md:px-16 lg:px-24 py-24 max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-24">

            <article className="lg:w-2/3 max-w-[720px]">

              <aside className="border-l-4 border-[#1A365D] bg-[#F0EDE6] p-8 mb-12">
                <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1A365D] mb-4">Quick Facts</h2>
                <ul className="space-y-2 text-sm text-[#171717]/80 font-light">
                  <li>• Wind: Levante (E) and Poniente (W) — two completely different experiences</li>
                  <li>• Average wind speed: 20–35 knots on strong days</li>
                  <li>• Best season: April–October (Poniente); year-round (Levante)</li>
                  <li>• Difficulty: Intermediate to Advanced recommended</li>
                  <li>• Crowds: Very high in summer — one of Europe&apos;s busiest kite beaches</li>
                </ul>
              </aside>

              <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-10">
                Tarifa has been the default answer to &ldquo;where in Europe should I learn to kitesurf?&rdquo; for the better part of two decades. Sitting at the southern tip of the Iberian peninsula where the Atlantic meets the Mediterranean, Tarifa is geographically configured to receive powerful, consistent wind from two entirely different directions. The marketing is effective. The reality is more nuanced.
              </p>

              <h2 className="font-serif text-3xl mb-5">The Wind: Levante vs Poniente</h2>
              <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-6">
                <strong>Levante</strong> is the easterly wind that blows in from the Mediterranean side. It is frequently powerful — sometimes excessively so, reaching 30–40 knots — and notoriously gusty. The Levante is thermal in origin but heavily influenced by the Strait of Gibraltar&apos;s funnel effect, which can produce wind acceleration that catches inexperienced riders completely off guard. Side-offshore direction at many beach setups means a rescue boat is non-negotiable.
              </p>
              <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-10">
                <strong>Poniente</strong> is the westerly, arriving from the Atlantic. Steadier, warmer, and more forgiving than Levante — this is the wind that beginners should ideally target, though it visits less predictably. The spring and summer months offer the best Poniente windows, typically 15–25 knots with a side-onshore direction that provides a natural safety buffer.
              </p>

              <h2 className="font-serif text-3xl mb-5">The Crowd Problem</h2>
              <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-10">
                Tarifa is enormously popular. During July and August, the main kite beach at Los Lances can host hundreds of kiters simultaneously. For an experienced, independent rider who understands right-of-way rules, this is manageable. For a beginner still learning to control their kite, it is genuinely dangerous — and actively impedes learning pace. Most schools manage this by using secondary launch zones or timing lessons for early mornings, but compromises are being made regardless.
              </p>

              <h2 className="font-serif text-3xl mb-5">Who Should Choose Tarifa</h2>
              <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-10">
                Tarifa earns its reputation for riders who are already competent and seeking powerful, challenging conditions. The strong Levante sessions, the dramatic Strait of Gibraltar backdrop, and the vibrant town infrastructure make it a genuinely compelling destination for those who can handle it. For beginners, however, calmer and less crowded alternatives — particularly <Link href="/kitesurf-portugal" className="underline hover:text-[#319795] transition-colors">northern Portugal</Link> — deliver a more productive and enjoyable learning environment.
              </p>

              <h2 className="font-serif text-3xl mb-5">Practical Info</h2>
              <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-6">
                <strong>Getting there:</strong> Málaga Airport (AGP) is the most connected hub, approximately 1.5 hours by car. Algeciras is the nearest large town. Tarifa itself has a compact, lively old town with good accommodation ranging from budget kite camps to boutique hotels.
              </p>
              <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-10">
                <strong>Best months:</strong> May–June for Poniente + manageable crowds. September for the best balance of conditions, temperature, and beach density.
              </p>

              <div className="border-t border-[#171717]/10 pt-10">
                <h3 className="text-xs font-medium uppercase tracking-[0.2em] mb-6 text-[#171717]/50">Compare Destinations</h3>
                <ul className="space-y-3 text-sm">
                  <li><Link href="/kitesurf-portugal" className="hover:text-[#319795] transition-colors underline">Kitesurfing in Portugal — Complete Guide</Link></li>
                  <li><Link href="/kitesurf-moledo" className="hover:text-[#319795] transition-colors underline">Moledo, Portugal — Low Crowds, High Wind</Link></li>
                  <li><Link href="/kitesurf-dakhla-morocco" className="hover:text-[#319795] transition-colors underline">Dakhla, Morocco — Flat Water Paradise</Link></li>
                </ul>
              </div>
            </article>

            <aside className="lg:w-1/3">
              <div className="sticky top-32">
                <div className="border-t border-[#171717]/10 pt-12 mb-12">
                  <h3 className="text-xs font-medium uppercase tracking-[0.2em] mb-8 text-[#171717]/50">Spot Data</h3>
                  <div className="space-y-5 text-sm">
                    <div><span className="text-xs uppercase tracking-widest text-[#171717]/40 block mb-1">Wind</span><span className="font-serif text-xl text-[#1A365D]">Levante / Poniente</span></div>
                    <div><span className="text-xs uppercase tracking-widest text-[#171717]/40 block mb-1">Avg Speed</span><span className="font-serif text-xl text-[#1A365D]">20–35 kt</span></div>
                    <div><span className="text-xs uppercase tracking-widest text-[#171717]/40 block mb-1">Level</span><span className="font-serif text-xl">Intermediate+</span></div>
                    <div><span className="text-xs uppercase tracking-widest text-[#171717]/40 block mb-1">Crowds</span><span className="font-serif text-xl text-orange-500">High</span></div>
                    <div><span className="text-xs uppercase tracking-widest text-[#171717]/40 block mb-1">Best Season</span><span className="font-serif text-xl">Apr–Oct</span></div>
                  </div>
                </div>
                <div className="border-t border-[#171717]/10 pt-12">
                  <h3 className="text-xs font-medium uppercase tracking-[0.2em] mb-6 text-[#171717]/50">Other Destinations</h3>
                  <ul className="space-y-3 text-sm font-light text-[#171717]/80">
                    <li><Link href="/kitesurf-portugal" className="hover:text-[#319795]">Portugal</Link></li>
                    <li><Link href="/kitesurf-dakhla-morocco" className="hover:text-[#319795]">Dakhla, Morocco</Link></li>
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

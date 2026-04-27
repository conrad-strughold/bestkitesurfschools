import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kitesurfing in Brazil 2026: Jericoacoara, Prea and Best Spots | BestKitesurfSchools",
  description: "Brazil's northeast coast is one of the world's elite kitesurf destinations. Trade winds, warm water, and world-class spots from Jericoacoara to Prea. Full guide.",
  openGraph: {
    title: "Kitesurfing in Brazil 2026: Jericoacoara, Prea and Best Spots",
    description: "Brazil's northeast coast is one of the world's elite kitesurf destinations. Trade winds, warm water, and world-class spots from Jericoacoara to Prea.",
    url: "https://bestkitesurfschools.com/kitesurf-brazil",
    images: [{ url: "https://bestkitesurfschools.com/images/brazil-kitesurf.jpg", width: 1200, height: 630, alt: "Kitesurfing in Brazil Jericoacoara" }],
    type: "article",
  },
};

const spots = [
  { name: "Jericoacoara", region: "Ceara", wind: "E / SE Trades", level: "All Levels", crowd: "Medium", note: "The benchmark: reliable wind, vibrant scene, flat lagoon nearby." },
  { name: "Prea", region: "Ceara", wind: "E / SE Trades", level: "Intermediate to Adv", crowd: "Low", note: "The insider's alternative to Jeri. Powerful, great wave potential." },
  { name: "Cumbuco", region: "Ceara", wind: "SE Trades", level: "Beginner to Int", crowd: "Medium", note: "Flat water close to Fortaleza airport. Popular intro spot." },
  { name: "Barra Grande", region: "Piaui", wind: "SE Trades", level: "All Levels", crowd: "Low", note: "Part of the Ilha do Caju lagoon system, extraordinary flat water." },
];

export default function KitesurfBrazilPage() {
  return (
    <>
      <Navigation />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Kitesurfing in Brazil: Best Spots and Season Guide 2026",
        "datePublished": "2026-04-27",
        "author": { "@type": "Organization", "name": "BestKitesurfSchools" }
      })}} />

      <header className="relative min-h-[65svh] w-full flex flex-col justify-end pt-40 pb-20 px-6 md:px-16 lg:px-24 bg-[#171717]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/brazil-kitesurf.jpg"
            alt="Kitesurfing in Brazil"
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
            <span className="opacity-80">Brazil</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight mb-6">
            Kitesurfing in Brazil: Best Spots and Season Guide
          </h1>
          <p className="text-white/60 font-light text-lg">Jericoacoara, Prea, Cumbuco and Beyond: 2026</p>
        </div>
      </header>

      <main className="relative z-20 bg-[#FDFBF7] text-[#171717]">
        <div className="w-full px-6 md:px-16 lg:px-24 py-24 max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-24">

            <article className="lg:w-2/3 max-w-[720px]">

              <aside className="border-l-4 border-[#1A365D] bg-[#F0EDE6] p-8 mb-12">
                <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1A365D] mb-4">Quick Facts</h2>
                <ul className="space-y-2 text-sm text-[#171717]/80 font-light">
                  <li>• Wind: SE / E Trade winds, 8 to 9 months of consistent sailing per year</li>
                  <li>• Average wind: 20 to 30 knots during peak season</li>
                  <li>• Water temperature: 26 to 30 degrees C, no wetsuit needed</li>
                  <li>• Best season: July to January (northeast coast)</li>
                  <li>• Gateway airport: Fortaleza (FOR) for most top spots</li>
                </ul>
              </aside>

              <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-10">
                Brazil's northeast coast is not just one of the world's great kitesurf regions. It is genuinely in the argument for the greatest. The combination of south-easterly trade winds that blow with remarkable consistency from July through January, warm crystal water at 28 degrees, enormous flat-water lagoon systems, and world-class freestyle and wave conditions across hundreds of kilometres of coastline makes the Ceara and Piaui states a dedicated kiter's dream. Jericoacoara alone carries a mythological status among the global kitesurf community that very few spots on Earth have matched.
              </p>

              <h2 className="font-serif text-3xl mb-5">Why Brazil is World-Class</h2>
              <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-6">
                The SE trade wind system that drives Brazil's northeast coast is powered by the South Atlantic High, one of the most stable atmospheric systems on Earth. From approximately July through January, this system delivers a remarkably steady easterly to south-easterly wind directly onto the coastline, running at 20 to 30 knots the vast majority of days. Water temperatures hover between 26 and 30 degrees year-round. The combination is almost unreasonably generous.
              </p>
              <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-10">
                Add to this the unique geography of the region: a coastline studded with freshwater lagoons fed by seasonal rains, which fill up between February and June and then sit calm and glassy behind natural dune barriers during the dry, windy season. These lagoons are among the finest flat-water kitesurf environments anywhere in the world.
              </p>

              <h2 className="font-serif text-3xl mb-6">Best Spots in Brazil</h2>
              <div className="overflow-x-auto mb-12">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b-2 border-[#171717]/20">
                      {["Spot", "Region", "Wind", "Level", "Crowds", "Best For"].map(h => (
                        <th key={h} className="py-3 pr-4 text-xs uppercase tracking-widest text-[#171717]/50 font-medium text-left">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {spots.map(s => (
                      <tr key={s.name} className="border-b border-[#171717]/10">
                        <td className="py-3 pr-4 font-medium text-[#171717]">{s.name}</td>
                        <td className="py-3 pr-4 text-[#171717]/60 font-light">{s.region}</td>
                        <td className="py-3 pr-4 text-[#171717]/60 font-light">{s.wind}</td>
                        <td className="py-3 pr-4 text-[#171717]/60 font-light">{s.level}</td>
                        <td className="py-3 pr-4 text-[#171717]/60 font-light">{s.crowd}</td>
                        <td className="py-3 text-[#171717]/60 font-light text-xs">{s.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="font-serif text-3xl mb-5">When to Go</h2>
              <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-6">
                <strong>July to January</strong> is peak season for the northeast coast. The trades are fully active, the lagoons from the previous wet season are still filled, and conditions align perfectly. August and September are statistically the windiest months, with 25 to 30 knot days common. December through January remain strong but begin transitioning toward the wet season.
              </p>
              <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-10">
                <strong>February to June</strong> is the wet season in the northeast. The trades weaken significantly, rainfall increases, and kite conditions deteriorate. This fills the lagoons that make the July to January season so spectacular, so this downtime is a necessary part of the cycle.
              </p>

              <h2 className="font-serif text-3xl mb-5">Travel Logistics</h2>
              <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-6">
                <strong>Flying:</strong> Fortaleza International Airport (Pinto Martins, FOR) is the primary gateway for most northeast spots. Direct flights from Lisbon and various European hubs via Sao Paulo (GRU) or connecting in Fortaleza. Journey time from Europe is typically 11 to 14 hours with one connection.
              </p>
              <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-10">
                <strong>Getting around:</strong> A 4WD vehicle is recommended for the best spots, as roads to Jericoacoara and Prea involve sand tracks through dunes. Many kite camps offer transfers. Budget approximately 1,000 to 1,500 euros per week all-in for a comprehensive kite camp experience.
              </p>

              <div className="border-t border-[#171717]/10 pt-10">
                <h3 className="text-xs font-medium uppercase tracking-[0.2em] mb-6 text-[#171717]/50">Compare Destinations</h3>
                <ul className="space-y-3 text-sm">
                  <li><Link href="/kitesurf-portugal" className="hover:text-[#319795] transition-colors underline">Portugal: Expert-Reviewed European Option</Link></li>
                  <li><Link href="/kitesurf-tarifa-spain" className="hover:text-[#319795] transition-colors underline">Tarifa, Spain: Europe's Wind Capital</Link></li>
                  <li><Link href="/kitesurf-dakhla-morocco" className="hover:text-[#319795] transition-colors underline">Dakhla, Morocco: 320+ Wind Days</Link></li>
                </ul>
              </div>
            </article>

            <aside className="lg:w-1/3">
              <div className="sticky top-32">
                <div className="border-t border-[#171717]/10 pt-12 mb-12">
                  <h3 className="text-xs font-medium uppercase tracking-[0.2em] mb-8 text-[#171717]/50">Destination Data</h3>
                  <div className="space-y-5 text-sm">
                    <div><span className="text-xs uppercase tracking-widest text-[#171717]/40 block mb-1">Wind</span><span className="font-serif text-xl text-[#1A365D]">SE / E Trades</span></div>
                    <div><span className="text-xs uppercase tracking-widest text-[#171717]/40 block mb-1">Peak Wind</span><span className="font-serif text-xl text-[#1A365D]">20 to 30 kt</span></div>
                    <div><span className="text-xs uppercase tracking-widest text-[#171717]/40 block mb-1">Water Temp</span><span className="font-serif text-xl text-[#319795]">26 to 30 C</span></div>
                    <div><span className="text-xs uppercase tracking-widest text-[#171717]/40 block mb-1">Best Season</span><span className="font-serif text-xl">Jul to Jan</span></div>
                    <div><span className="text-xs uppercase tracking-widest text-[#171717]/40 block mb-1">Level</span><span className="font-serif text-xl">All Levels</span></div>
                  </div>
                </div>
                <div className="border-t border-[#171717]/10 pt-12">
                  <h3 className="text-xs font-medium uppercase tracking-[0.2em] mb-6 text-[#171717]/50">Other Destinations</h3>
                  <ul className="space-y-3 text-sm font-light text-[#171717]/80">
                    <li><Link href="/kitesurf-portugal" className="hover:text-[#319795]">Portugal</Link></li>
                    <li><Link href="/kitesurf-tarifa-spain" className="hover:text-[#319795]">Tarifa, Spain</Link></li>
                    <li><Link href="/kitesurf-dakhla-morocco" className="hover:text-[#319795]">Dakhla, Morocco</Link></li>
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

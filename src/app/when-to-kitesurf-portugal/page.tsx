import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Time to Kitesurf in Portugal :  Month-by-Month Wind Guide 2026 | BestKitesurfSchools",
  description: "Planning a kitesurf trip to Portugal? Our month-by-month guide covers wind windows, water temperature, crowds, and cost by season. Updated for 2026.",
  openGraph: {
    title: "Best Time to Kitesurf Portugal :  Month-by-Month Wind Guide 2026",
    description: "Planning a kitesurf trip to Portugal? Our month-by-month guide covers wind windows, water temperature, crowds, and cost by season.",
    url: "https://bestkitesurfschools.com/when-to-kitesurf-portugal",
    type: "article",
  },
};

const months = [
  { month: "January", wind: "12-20 kt", water: "14°C", crowds: "None", cost: "Low", verdict: "Atlantic storms :  advanced SW wind. Not for beginners." },
  { month: "February", wind: "12-20 kt", water: "13°C", crowds: "None", cost: "Low", verdict: "Similar to January. Cold, variable. Experienced riders only." },
  { month: "March", wind: "10-18 kt", water: "14°C", crowds: "Low", cost: "Low", verdict: "Transition begins. Occasional Nortada hints. Still cold." },
  { month: "April", wind: "12-20 kt", water: "15°C", crowds: "Low", cost: "Low", verdict: "Shoulder season value. Unpredictable but uncrowded." },
  { month: "May", wind: "14-20 kt", water: "16°C", crowds: "Low", cost: "Low-Mid", verdict: "Nortada beginning to establish. Great for flexible intermediates." },
  { month: "June", wind: "15-22 kt", water: "17°C", crowds: "Medium", cost: "Mid", verdict: "Peak season start. Excellent consistency. Highly recommended." },
  { month: "July", wind: "18-25 kt", water: "18°C", crowds: "Medium-High", cost: "High", verdict: "★ Peak Nortada. Best month for lessons. Book early." },
  { month: "August", wind: "18-25 kt", water: "19°C", crowds: "High", cost: "High", verdict: "★ Peak :  windiest month. Busiest beaches. Arrive early." },
  { month: "September", wind: "15-22 kt", water: "19°C", crowds: "Low-Med", cost: "Mid", verdict: "★ Best overall. Wind + warmth + crowds drop. Local favourite." },
  { month: "October", wind: "12-18 kt", water: "18°C", crowds: "Low", cost: "Low-Mid", verdict: "Season tailing off. Warm water, quieter. Flexible riders." },
  { month: "November", wind: "12-20 kt", water: "16°C", crowds: "None", cost: "Low", verdict: "Atlantic SW swells. Cold, powerful. Advanced wave riders." },
  { month: "December", wind: "10-18 kt", water: "14°C", crowds: "None", cost: "Low", verdict: "Deep off-season. Storm seasoned riders only." },
];

export default function WhenToKitesurfPortugalPage() {
  return (
    <>
      <Navigation />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Article",
        "headline": "When Is the Best Time to Kitesurf in Portugal?",
        "datePublished": "2026-04-27", "dateModified": "2026-04-27",
        "author": { "@type": "Organization", "name": "BestKitesurfSchools" }
      })}} />

      <header className="relative min-h-[55svh] w-full flex flex-col justify-end pt-40 pb-20 px-6 md:px-16 lg:px-24 bg-[#171717]">
        <div className="absolute inset-0 bg-[#1A365D]/80"></div>
        <div className="relative z-10 w-full max-w-[1000px] mx-auto">
          <div className="mb-4 flex items-center space-x-3 text-white text-[10px] tracking-[0.2em] uppercase font-medium">
            <Link href="/" className="hover:opacity-60 transition-opacity">Home</Link>
            <span className="opacity-40">/</span>
            <Link href="/kitesurf-portugal" className="hover:opacity-60 transition-opacity">Portugal</Link>
            <span className="opacity-40">/</span>
            <span className="opacity-80">When To Go</span>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-[0.95] tracking-tight mb-6">
            When Is the Best Time to Kitesurf in Portugal?
          </h1>
          <p className="text-white/60 font-light text-lg">Month-by-month wind, conditions & season guide :  2026</p>
        </div>
      </header>

      <main className="relative z-20 bg-[#FDFBF7] text-[#171717]">
        <div className="w-full px-6 md:px-16 lg:px-24 py-24 max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-24">

            <article className="lg:w-2/3 max-w-[720px]">

              <aside className="border-l-4 border-[#1A365D] bg-[#F0EDE6] p-8 mb-12">
                <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1A365D] mb-4">TL;DR</h2>
                <ul className="space-y-2 text-sm text-[#171717]/80 font-light">
                  <li>• <strong>Best for beginners:</strong> July-August (most reliable Nortada, safest conditions)</li>
                  <li>• <strong>Best overall:</strong> September (peak wind, warm water, beaches clearing)</li>
                  <li>• <strong>Best value:</strong> May-June or October (shoulder season prices, still good wind)</li>
                  <li>• <strong>Avoid:</strong> November-March unless you're an experienced rider chasing Atlantic swell</li>
                </ul>
              </aside>

              <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-12">
                Portugal's kitesurf season is defined by two distinct wind regimes. From June to September, the Nortada thermal delivers reliable 15-25 knot northerly winds on most afternoons. From October through to May, Atlantic pressure systems take over :  more powerful, more variable, and suited to experienced riders rather than learners. Understanding this split is the foundation of planning any kitesurf trip to Portugal.
              </p>

              <h2 className="font-serif text-4xl mb-6">The Nortada Season: June to September</h2>
              <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-6">
                This is Portugal's kitesurf golden window. The Nortada is a thermally-driven northerly that builds each afternoon as the hot Iberian interior draws cooler Atlantic air south along the coast. It activates predictably :  usually between 11am and 1pm :  and hits its peak output of 18-25 knots from around 2pm to sunset. This afternoon reliability is what makes Portugal such an efficient place to learn.
              </p>
              <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-16">
                July and August are the statistically windiest months but also the busiest for tourism. September is the insider's choice: the Nortada is still firing strongly, the water has reached its peak temperature (18-19°C), and the beaches are noticeably quieter as European school holidays end. For maximising progression time with a school like <Link href="/best-kitesurf-schools-portugal" className="underline hover:text-[#319795]">North Wind at Moledo</Link>, September is the sweet spot.
              </p>

              <h2 className="font-serif text-4xl mb-6">The Atlantic Season: October to March</h2>
              <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-16">
                As the Iberian interior cools and the Nortada retreats, large Atlantic pressure systems take over. Winds become SW to W, often stronger (20-35 knots in storm fronts), and significantly more variable. Swell heights at open-beach spots like Guincho and coastal Viana rise to 2-4m regularly. This is wave-riding season :  powerful, raw, and for competent riders with solid self-rescue skills. Water temperatures drop to 14-16°C, requiring a 5/4mm wetsuit. Zero crowds is the upside. <Link href="/kitesurf-northern-portugal" className="underline hover:text-[#319795]">Northern Portugal spots</Link> in a November swell are genuinely spectacular.
              </p>

              <h2 className="font-serif text-4xl mb-6">Shoulder Season: April-May & October</h2>
              <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-16">
                The shoulder months are characterised by transitional, unpredictable wind patterns. You might score three days of 20-knot Nortada followed by two days of calm. This unreliability rules them out for strict 5-day lesson courses, but for intermediate or advanced riders travelling with flexibility, they represent exceptional value: empty beaches, 25-35% cheaper accommodation versus peak season, mild air temperatures, and occasional perfect windows.
              </p>

              <h2 className="font-serif text-4xl mb-6">Month-by-Month Table</h2>
              <div className="overflow-x-auto mb-16">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b-2 border-[#171717]/20">
                      {["Month", "Avg Wind", "Water", "Crowds", "Cost", "Verdict"].map(h => (
                        <th key={h} className="py-3 pr-4 text-left text-xs uppercase tracking-widest text-[#171717]/50 font-medium">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {months.map(({ month, wind, water, crowds, cost, verdict }) => (
                      <tr key={month} className={`border-b border-[#171717]/10 ${["July", "August", "September"].includes(month) ? "bg-[#E8F4F4]" : ""}`}>
                        <td className="py-3 pr-4 font-medium text-[#171717]">{month}</td>
                        <td className="py-3 pr-4 text-[#171717]/70 font-light">{wind}</td>
                        <td className="py-3 pr-4 text-[#171717]/70 font-light">{water}</td>
                        <td className="py-3 pr-4 text-[#171717]/70 font-light">{crowds}</td>
                        <td className="py-3 pr-4 text-[#171717]/70 font-light">{cost}</td>
                        <td className="py-3 text-[#171717]/60 font-light text-xs">{verdict}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="font-serif text-4xl mb-6">Which Season Is Right for Your Level?</h2>
              <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-6">
                <strong>Absolute beginners:</strong> July and August are the safest bet. The Nortada arrives on time, runs steady, and allows instructors to plan consistent lesson windows. Mornings are often calm enough for theory and kite control training on land, with the afternoon thermal reliably delivering water time.
              </p>
              <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-6">
                <strong>Intermediates:</strong> September is the best month at every skill level. The wind is strong, the water warm, the beaches emptier, and the conditions forgiving enough to focus on transitions and upwind riding without fighting crowd management.
              </p>
              <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-16">
                <strong>Advanced riders:</strong> October and November for Atlantic swell kitesurfing. February and March for those chasing storm fronts. The north coast in winter, particularly around the Minho and Viana do Castelo estuaries, delivers some genuinely dramatic and powerful sessions for confident independent riders.
              </p>

              <div className="border-t border-[#171717]/10 pt-12">
                <h3 className="text-xs font-medium uppercase tracking-[0.2em] mb-6 text-[#171717]/50">Related Reads</h3>
                <ul className="space-y-3 text-sm">
                  <li><Link href="/kitesurf-portugal" className="hover:text-[#319795] transition-colors underline">Kitesurfing in Portugal: The Complete Guide</Link></li>
                  <li><Link href="/kitesurf-moledo" className="hover:text-[#319795] transition-colors underline">Kitesurf Moledo: Spot Guide & Wind Data</Link></li>
                  <li><Link href="/kitesurfing-for-beginners" className="hover:text-[#319795] transition-colors underline">Kitesurfing for Beginners: Where to Start</Link></li>
                </ul>
              </div>

            </article>

            <aside className="lg:w-1/3">
              <div className="sticky top-32">
                <div className="border-t border-[#171717]/10 pt-12 mb-12">
                  <h3 className="text-xs font-medium uppercase tracking-[0.2em] mb-8 text-[#171717]/50">Quick Season Guide</h3>
                  <div className="space-y-6 text-sm">
                    <div className="border-l-4 border-[#319795] pl-4">
                      <span className="text-xs uppercase tracking-widest text-[#319795] block mb-1">Peak Season</span>
                      <span className="font-serif text-xl">Jul · Aug · Sep</span>
                    </div>
                    <div className="border-l-4 border-[#1A365D] pl-4">
                      <span className="text-xs uppercase tracking-widest text-[#1A365D] block mb-1">Good Season</span>
                      <span className="font-serif text-xl">May · Jun · Oct</span>
                    </div>
                    <div className="border-l-4 border-[#171717]/20 pl-4">
                      <span className="text-xs uppercase tracking-widest text-[#171717]/40 block mb-1">Advanced Only</span>
                      <span className="font-serif text-xl">Nov - Mar</span>
                    </div>
                  </div>
                </div>
                <div className="border-t border-[#171717]/10 pt-12">
                  <h3 className="text-xs font-medium uppercase tracking-[0.2em] mb-6 text-[#171717]/50">Portugal Guides</h3>
                  <ul className="space-y-3 text-sm font-light text-[#171717]/80">
                    <li><Link href="/kitesurf-portugal" className="hover:text-[#319795]">Portugal Overview</Link></li>
                    <li><Link href="/kitesurf-moledo" className="hover:text-[#319795]">Moledo Spot Guide</Link></li>
                    <li><Link href="/kitesurf-northern-portugal" className="hover:text-[#319795]">Northern Portugal</Link></li>
                    <li><Link href="/best-kitesurf-schools-portugal" className="hover:text-[#319795]">Best Schools Review</Link></li>
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

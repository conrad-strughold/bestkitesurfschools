import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wingfoil Portugal 2026: Best Spots, Lessons and Conditions | BestKitesurfSchools",
  description: "Portugal's consistent Atlantic winds make it ideal for wingfoiling. Discover the best spots, top-rated schools, and when to visit for your first flights.",
  openGraph: {
    title: "Wingfoil Portugal 2026: Best Spots, Lessons and Conditions",
    description: "Portugal's consistent Atlantic winds make it ideal for wingfoiling. Discover the best spots, top-rated schools, and when to visit.",
    url: "https://bestkitesurfschools.com/wingfoil-portugal",
    images: [{ url: "https://bestkitesurfschools.com/images/wingfoil-portugal.jpg", width: 1200, height: 630, alt: "Wingfoiling in Portugal" }],
    type: "article",
  },
};

export default function WingfoilPortugalPage() {
  return (
    <>
      <Navigation />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Article",
        "headline": "Wingfoiling in Portugal: Lessons, Spots and Season Guide",
        "datePublished": "2026-04-27", "dateModified": "2026-04-27",
        "author": { "@type": "Organization", "name": "BestKitesurfSchools" }
      })}} />

      <header className="relative min-h-[65svh] w-full flex flex-col justify-end pt-40 pb-20 px-6 md:px-16 lg:px-24 bg-[#171717]">
        <div className="absolute inset-0 z-0">
          <Image src="/images/wingfoil-portugal.jpg" alt="Wingfoiling in Portugal" fill className="object-cover opacity-75 mix-blend-overlay" priority />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 w-full max-w-[1000px] mx-auto">
          <div className="mb-4 flex items-center space-x-3 text-white text-[10px] tracking-[0.2em] uppercase font-medium">
            <Link href="/" className="hover:opacity-60 transition-opacity">Home</Link>
            <span className="opacity-40">/</span>
            <span className="opacity-80">Wingfoil Portugal</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight mb-6">
            Wingfoiling in Portugal :  Lessons, Spots & Season Guide
          </h1>
          <span className="text-xs uppercase tracking-widest text-white/40">Updated April 2026</span>
        </div>
      </header>

      <main className="relative z-20 bg-[#FDFBF7] text-[#171717]">
        <div className="w-full px-6 md:px-16 lg:px-24 py-24 max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-24">

            <article className="lg:w-2/3 max-w-[720px]">

              <aside className="border-l-4 border-[#1A365D] bg-[#F0EDE6] p-8 mb-12">
                <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1A365D] mb-4">Key Takeaways</h2>
                <ul className="space-y-2 text-sm text-[#171717]/80 font-light">
                  <li>• Wingfoiling is the fastest-growing watersport globally :  Portugal is ideally positioned for it</li>
                  <li>• Moledo's flat lagoon zone is one of Europe's best wingfoil learning environments</li>
                  <li>• Portugal's Nortada thermal delivers the steady 15-22kt winds ideal for foil flight</li>
                  <li>• Most kitesurfers take 5-10 hours to achieve first flights on a wingfoil setup</li>
                  <li>• North Wind at Moledo runs dedicated wingfoil clinics alongside kitesurf courses</li>
                </ul>
              </aside>

              <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-12">
                Wingfoiling :  riding a hydrofoil board while holding a handheld inflatable wing :  has experienced explosive growth since 2021. The sport sits at the intersection of kitesurfing, windsurfing, and surf foiling, borrowing the best elements from each. Portugal's Atlantic coast, with its reliable Nortada thermal and extensive flatwater zones, is one of Europe's most productive environments for learning and progressing the sport.
              </p>

              <h2 className="font-serif text-4xl mb-6">Why Portugal is Perfect for Wingfoiling</h2>
              <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-6">
                Wingfoiling requires a consistent, steady wind in the 14-22 knot range :  powerful enough to generate lift through the wing, steady enough not to dump riders back into the water every few seconds with unpredictable gusts. The Nortada thermal that runs along Portugal's northern coast from June through September is almost textbook perfect for this requirement. It builds steadily, runs for 4-6 hours each afternoon, and maintains a clean laminar flow rather than the turbulent gustiness characteristic of thermally compressed southern exposure sites.
              </p>
              <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-16">
                Equally important is water surface quality. The river mouth zones at spots like Moledo and Viana do Castelo provide protected flat water that absorbs Atlantic chop :  creating glassy surfaces where wingfoilers can focus on body position and foil technique without fighting waves. This is a significant advantage over ocean-exposed sites where learning is consistently interrupted by rolling swell.
              </p>

              <h2 className="font-serif text-4xl mb-6">Best Wingfoil Spots in Portugal</h2>

              <h3 className="font-serif text-2xl mb-3 text-[#1A365D]">Moledo (Top Pick)</h3>
              <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-8">
                The river mouth lagoon side of <Link href="/kitesurf-moledo" className="underline hover:text-[#319795]">Moledo beach</Link> is the finest wingfoil learning environment on the Portuguese coast. Shallow depth (knee to waist for 200m), flat surface, clean side-shore Nortada at 15-22 knots most summer afternoons, and professional instruction from North Wind's wingfoil team. This is where most foil flights happen for newcomers.
              </p>

              <h3 className="font-serif text-2xl mb-3 text-[#1A365D]">Guincho (Advanced Foilers)</h3>
              <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-8">
                Open-ocean Guincho near Cascais delivers powerful, consistent wind and Atlantic swell :  the combination that advanced surf foilers crave. Wingfoiling downwind with natural swell energy at Guincho on a 12-knot Atlantic groundswell is a genuinely elite experience. But this is not for beginners :  you need solid foil control and confident self-rescue skills before tackling Guincho in any wind condition.
              </p>

              <h3 className="font-serif text-2xl mb-3 text-[#1A365D]">Algarve Options</h3>
              <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-16">
                Several Algarve spots host wingfoil sessions, particularly calm interior lagoons like Ria Formosa near Faro. Flat water and reliable afternoon sea breeze make these workable for beginners. The primary drawback remains crowd density and the overall tourist infrastructure adding cost and friction to the experience.
              </p>

              <h2 className="font-serif text-4xl mb-6">Wingfoil Lessons at North Wind, Moledo</h2>
              <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-6">
                <Link href="/best-kitesurf-schools-portugal" className="underline hover:text-[#319795]">North Wind</Link> runs dedicated wingfoil clinics at Moledo across the summer season. Their curriculum mirrors the IKO approach applied to kitesurfing: structured progression, safety-first protocols, and small group sizes that ensure maximum active time per student.
              </p>
              <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-6">
                The typical beginner wingfoil trajectory at Moledo: Day 1 covers wing handling on land and in water (no foil), body positioning, and basic downwind runs with the board flat on the water. Day 2 introduces the foil in shallow water, focusing on sensations and instinctive response. Day 3-4 brings first short flights: brief moments of lift that gradually extend as the student interprets foil feedback. By Day 5, most motivated students with decent fitness and board sports backgrounds are achieving sustained runs. Read our <Link href="/wingfoil-beginner-guide" className="underline hover:text-[#319795]">wingfoil beginner guide</Link> for a full breakdown of the learning curve.
              </p>
              <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-16">
                All equipment is provided: wing (typically 4m² to 6m² options depending on wind and student weight), foil board (90-120L volume for learning), foil mast and fuselage, impact vest, helmet, and wetsuit. Nothing is left to chance.
              </p>

              <h2 className="font-serif text-4xl mb-6">Gear You'll Use</h2>
              <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-6">
                <strong>Wing size:</strong> For Portugal's 15-22 knot Nortada, most beginners use a 5m² or 6m² wing. Lighter riders (under 70kg) may prefer 5m² in stronger winds; heavier riders will appreciate the 6m² in lighter conditions. Schools typically set wing size based on day conditions and rider weight.
              </p>
              <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-6">
                <strong>Board:</strong> Learning boards run 90-120 litres of volume :  high enough to provide stability between foil flights. As skill improves, volume reduces. Your school will select the appropriate board width and length for your size and experience level.
              </p>
              <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-16">
                <strong>Foil mast height:</strong> Beginner setups typically use shorter mast (60-70cm) to limit the height of falls and reduce the swing-weight sensation under the board. Once comfortable, longer masts (80-90cm) unlock smoother, more efficient flight arcs.
              </p>

              <h2 className="font-serif text-4xl mb-6">When to Wingfoil in Portugal</h2>
              <div className="overflow-x-auto mb-16">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b-2 border-[#171717]/20">
                      {["Season", "Wind", "Water", "Verdict"].map(h => (
                        <th key={h} className="py-3 pr-6 text-xs uppercase tracking-widest text-[#171717]/50 font-medium text-left">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="text-[#171717]/70 font-light">
                    {[
                      ["Jun-Sep", "15-25 kt Nortada", "17-19°C", "★★★★★ Ideal for all levels"],
                      ["May & Oct", "12-18 kt variable", "16-17°C", "★★★☆☆ Good for experienced"],
                      ["Nov-Apr", "Storm Atlantic", "13-15°C", "★★☆☆☆ Advanced only"],
                    ].map(([season, wind, water, verdict]) => (
                      <tr key={season} className="border-b border-[#171717]/10">
                        <td className="py-3 pr-6 font-medium text-[#171717]">{season}</td>
                        <td className="py-3 pr-6">{wind}</td>
                        <td className="py-3 pr-6">{water}</td>
                        <td className="py-3">{verdict}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="border-t border-[#171717]/10 pt-12">
                <h3 className="text-xs font-medium uppercase tracking-[0.2em] mb-6 text-[#171717]/50">Related Reads</h3>
                <ul className="space-y-3 text-sm">
                  <li><Link href="/wingfoil-beginner-guide" className="hover:text-[#319795] transition-colors underline">Wingfoil Beginner Guide: Taking Flight</Link></li>
                  <li><Link href="/kitesurf-moledo" className="hover:text-[#319795] transition-colors underline">Kitesurf Moledo: Spot Guide & School Review</Link></li>
                  <li><Link href="/when-to-kitesurf-portugal" className="hover:text-[#319795] transition-colors underline">When to Kitesurf in Portugal: Season Guide</Link></li>
                </ul>
              </div>

            </article>

            <aside className="lg:w-1/3">
              <div className="sticky top-32">
                <div className="border-t border-[#171717]/10 pt-12 mb-12">
                  <h3 className="text-xs font-medium uppercase tracking-[0.2em] mb-6 text-[#171717]/50">Wingfoil Quick Facts</h3>
                  <div className="space-y-5 text-sm">
                    <div><span className="text-xs uppercase tracking-widest text-[#171717]/40 block mb-1">Ideal Wind</span><span className="font-serif text-xl text-[#1A365D]">14-22 kt</span></div>
                    <div><span className="text-xs uppercase tracking-widest text-[#171717]/40 block mb-1">Best Season</span><span className="font-serif text-xl text-[#1A365D]">Jun-Sep</span></div>
                    <div><span className="text-xs uppercase tracking-widest text-[#171717]/40 block mb-1">Time to First Flight</span><span className="font-serif text-xl">5-10 hrs</span></div>
                    <div><span className="text-xs uppercase tracking-widest text-[#171717]/40 block mb-1">Top Spot</span><span className="font-serif text-xl">Moledo</span></div>
                  </div>
                </div>
                <div className="border-t border-[#171717]/10 pt-12">
                  <h3 className="text-xs font-medium uppercase tracking-[0.2em] mb-6 text-[#171717]/50">Related Guides</h3>
                  <ul className="space-y-3 text-sm font-light text-[#171717]/80">
                    <li><Link href="/wingfoil-beginner-guide" className="hover:text-[#319795]">Wingfoil Beginner Guide</Link></li>
                    <li><Link href="/kitesurf-portugal" className="hover:text-[#319795]">Portugal Overview</Link></li>
                    <li><Link href="/kitesurf-moledo" className="hover:text-[#319795]">Moledo Spot Guide</Link></li>
                    <li><Link href="/best-kitesurf-schools-portugal" className="hover:text-[#319795]">Best Schools in Portugal</Link></li>
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

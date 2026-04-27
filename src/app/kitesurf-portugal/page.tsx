import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kitesurfing in Portugal 2026 — Best Spots, Schools & Seasons | BestKitesurfSchools",
  description: "Kitesurfing in Portugal: the complete 2026 guide to spots, schools, conditions, and seasons. Find out why northern Portugal beats the Algarve for serious kiters.",
  openGraph: {
    title: "Kitesurfing in Portugal 2026 — Best Spots, Schools & Seasons",
    description: "Everything you need to plan a kitesurf trip to Portugal. Best spots, seasonal wind windows, school recommendations, and where to stay. Updated for 2026.",
    url: "https://bestkitesurfschools.com/kitesurf-portugal",
    images: [{ url: "https://bestkitesurfschools.com/images/northern-portugal-kitesurf.jpg", width: 1200, height: 630, alt: "Kitesurfing in Portugal" }],
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Kitesurfing in Portugal: The Complete 2026 Guide",
  "datePublished": "2026-04-27",
  "dateModified": "2026-04-27",
  "author": { "@type": "Organization", "name": "BestKitesurfSchools" },
  "publisher": { "@type": "Organization", "name": "BestKitesurfSchools", "url": "https://bestkitesurfschools.com" }
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://bestkitesurfschools.com" },
    { "@type": "ListItem", "position": 2, "name": "Kitesurfing in Portugal", "item": "https://bestkitesurfschools.com/kitesurf-portugal" }
  ]
};

export default function KitesurfPortugalPage() {
  return (
    <>
      <Navigation />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <header className="relative min-h-[65svh] w-full flex flex-col justify-end pt-40 pb-20 px-6 md:px-16 lg:px-24 bg-[#171717]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/northern-portugal-kitesurf.jpg"
            alt="Kitesurfing in Portugal"
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
            <Link href="/kitesurf-portugal" className="opacity-80">Portugal</Link>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[0.9] tracking-tight mb-6">
            Kitesurfing in Portugal: The Complete 2026 Guide
          </h1>
          <span className="text-xs uppercase tracking-widest text-white/50">By the BestKitesurfSchools Editorial Team | Updated April 2026</span>
        </div>
      </header>

      <main className="relative z-20 bg-[#FDFBF7] text-[#171717]">
        <div className="w-full px-6 md:px-16 lg:px-24 py-24 max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-24">

            <article className="lg:w-2/3 max-w-[720px]">

              {/* Key Takeaways */}
              <aside className="border-l-4 border-[#1A365D] bg-[#F0EDE6] p-8 mb-12">
                <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1A365D] mb-4">Key Takeaways</h2>
                <ul className="space-y-2 text-sm text-[#171717]/80 font-light">
                  <li>• Portugal offers 180+ wind days per year driven by the Atlantic Nortada thermal</li>
                  <li>• Northern Portugal is dramatically less crowded than the Algarve, with equal or better wind</li>
                  <li>• Peak kitesurf season runs June to September; shoulder seasons offer excellent value</li>
                  <li>• Moledo is the top spot for beginner-to-intermediate learning — flat, wide, uncrowded</li>
                  <li>• IKO-certified schools are concentrated in the north and central coast</li>
                </ul>
              </aside>

              <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-12">
                Kitesurfing in Portugal has quietly become one of Europe's most compelling watersport pilgrimages. With over 850km of Atlantic coastline, a reliable thermal wind engine that runs like clockwork from June through September, and an infrastructure of elite schools that punches well above its weight, Portugal sits comfortably in the global top five for kitesurf destinations. Whether you're a first-timer looking for your first beach start or an experienced freerider chasing consistent 20-knot thermals, the right region of Portugal has something extraordinary to offer.
              </p>

              <h2 className="font-serif text-4xl mb-6">Why Portugal is a World-Class Kitesurf Destination</h2>
              <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-6">
                The Atlantic Ocean dominates Portugal's western edge. That exposure is the engine of everything. Unlike the enclosed Mediterranean, Portugal's coastline faces open ocean fetch, which means swells, pressure systems, and importantly, thermally-driven wind patterns that develop with remarkable regularity every summer afternoon.
              </p>
              <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-6">
                The "Nortada" is the name locals give to the prevailing northerly thermal wind that builds along Portugal's west coast during the summer months. It typically activates around 11am to 1pm and builds steadily to its peak of 18–25 knots by mid-afternoon, before easing at sunset. This predictability is gold for kiters — you can plan your days with confidence, knowing the window will open.
              </p>
              <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-16">
                Add to this year-round mild temperatures, low rainfall in summer, excellent infrastructure, affordable cost compared to Western European alternatives, and a thriving community of certified schools, and Portugal's credentials are obvious. The country has produced multiple world-class freestylers and is home to some of the most respected IKO instruction facilities in Europe.
              </p>

              <h2 className="font-serif text-4xl mb-6">The Best Kitesurfing Spots in Portugal</h2>

              <h3 className="font-serif text-2xl mb-3 text-[#1A365D]">Moledo (Northern Portugal — #1 Pick)</h3>
              <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-6">
                Situated at the mouth of the Minho river, directly on the Spanish border, <Link href="/kitesurf-moledo" className="underline hover:text-[#319795] transition-colors">Moledo</Link> is the undeniable crown jewel of Portuguese kitesurfing. The beach is vast — several kilometres of pristine north-facing sand — and crucially, it sees a fraction of the foot traffic of southern alternatives. The Nortada funnels through the elevated terrain behind the beach and accelerates measurably, making Moledo consistently windier than surrounding spots. The river mouth creates a natural shallow-water lagoon ideal for beginners, while the open ocean side caters to experienced riders. <strong>Difficulty: Beginner–Advanced. Best season: June–September.</strong>
              </p>

              <h3 className="font-serif text-2xl mb-3 text-[#1A365D]">Viana do Castelo</h3>
              <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-6">
                Just 20km south of Moledo, Viana do Castelo is the regional capital and offers solid kitesurf conditions on its long estuary beach. The wind is slightly less powerful than Moledo due to less terrain channeling, but conditions are still very good in summer. <strong>Difficulty: Beginner–Intermediate. Best season: July–August.</strong>
              </p>

              <h3 className="font-serif text-2xl mb-3 text-[#1A365D]">Guincho (Lisbon Area)</h3>
              <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-6">
                Guincho is beautiful and iconic — dramatic dunes, powerful Atlantic swells, and consistent strong winds. But strong is the operative word. Guincho can reach Beaufort 6–7 regularly, making it a poor choice for beginners or even lower-intermediates. The beach is also significantly busier with surfers, swimmers, and general tourists. For experienced freeriders who want power, Guincho is a legendary session. <strong>Difficulty: Advanced. Best season: April–October.</strong>
              </p>

              <h3 className="font-serif text-2xl mb-3 text-[#1A365D]">Algarve</h3>
              <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-12">
                The Algarve gets the tourists, the media exposure, and the crowded lineups. Spots like Lagos, Meia Praia, and Ferragudo have operational kite schools, but the sheer density of people in peak season turns beaches into obstacle courses. The wind can also be gustier and more inconsistent, influenced by local topography rather than clean Nortada thermals. <strong>Difficulty: All levels (but crowded). Best season: May–September.</strong>
              </p>

              {/* Spots table */}
              <div className="overflow-x-auto mb-16">
                <table className="w-full text-sm text-left border-collapse">
                  <thead>
                    <tr className="border-b-2 border-[#171717]/20">
                      <th className="py-3 pr-6 text-xs uppercase tracking-widest text-[#171717]/50 font-medium">Spot</th>
                      <th className="py-3 pr-6 text-xs uppercase tracking-widest text-[#171717]/50 font-medium">Best Season</th>
                      <th className="py-3 pr-6 text-xs uppercase tracking-widest text-[#171717]/50 font-medium">Difficulty</th>
                      <th className="py-3 text-xs uppercase tracking-widest text-[#171717]/50 font-medium">Crowds</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#171717]/70 font-light">
                    <tr className="border-b border-[#171717]/10">
                      <td className="py-3 pr-6 font-medium text-[#171717]">Moledo</td>
                      <td className="py-3 pr-6">Jun–Sep</td>
                      <td className="py-3 pr-6">Beginner–Adv</td>
                      <td className="py-3 text-[#319795]">Low ✓</td>
                    </tr>
                    <tr className="border-b border-[#171717]/10">
                      <td className="py-3 pr-6 font-medium text-[#171717]">Viana do Castelo</td>
                      <td className="py-3 pr-6">Jul–Aug</td>
                      <td className="py-3 pr-6">Beginner–Int</td>
                      <td className="py-3">Medium</td>
                    </tr>
                    <tr className="border-b border-[#171717]/10">
                      <td className="py-3 pr-6 font-medium text-[#171717]">Guincho</td>
                      <td className="py-3 pr-6">Apr–Oct</td>
                      <td className="py-3 pr-6">Advanced</td>
                      <td className="py-3">Medium</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-6 font-medium text-[#171717]">Algarve</td>
                      <td className="py-3 pr-6">May–Sep</td>
                      <td className="py-3 pr-6">All levels</td>
                      <td className="py-3 text-red-400">High ✗</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="font-serif text-4xl mb-6">When to Go: Portugal Kitesurf Seasons</h2>
              <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-6">
                <strong>June–September (Nortada Peak):</strong> This is the money window. The Nortada thermal activates reliably across all northern coast spots. Average wind speeds sit at 15–25 knots on most days. Water temperature reaches 18–20°C, making a 3/2mm wetsuit sufficient. August is the busiest month for tourism across Portugal, so plan your accommodation well in advance if you're targeting Moledo or Viana. September is a local favourite — the Nortada is still firing but the beaches are noticeably quieter.
              </p>
              <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-6">
                <strong>October–March (Atlantic Season):</strong> The Nortada retreats but the Atlantic swell season arrives. Winds become stronger, more variable, and predominantly from the southwest. This suits advanced wave riders rather than beginners. Water drops to 15°C — you'll want a 5/4mm wetsuit. The upside: zero crowds, dramatically cheaper accommodation, and an entirely different and raw beauty to the coastline.
              </p>
              <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-16">
                <strong>April–May & October (Shoulder Season):</strong> Transitional winds, genuinely mild weather, uncrowded beaches, and best-value accommodation. Conditions are unpredictable enough that you wouldn't book a strict 5-day beginner course, but for an intermediate or advanced rider with flexibility in their schedule, shoulder season Portugal is excellent value. <Link href="/when-to-kitesurf-portugal" className="underline hover:text-[#319795] transition-colors">See our full month-by-month seasonal breakdown →</Link>
              </p>

              <h2 className="font-serif text-4xl mb-6">North vs South: Which Region Is Right For You?</h2>
              <div className="overflow-x-auto mb-16">
                <table className="w-full text-sm text-left border-collapse">
                  <thead>
                    <tr className="border-b-2 border-[#171717]/20">
                      <th className="py-3 pr-6 text-xs uppercase tracking-widest text-[#171717]/50 font-medium w-1/3"></th>
                      <th className="py-3 pr-6 text-xs uppercase tracking-widest text-[#1A365D] font-medium">North (Moledo)</th>
                      <th className="py-3 text-xs uppercase tracking-widest text-[#171717]/50 font-medium">South (Algarve)</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#171717]/70 font-light">
                    {[
                      ["Wind Reliability", "★★★★★", "★★★☆☆"],
                      ["Crowds", "Low — ideal", "High in summer"],
                      ["Beginner Friendly", "Yes (flat lagoon)", "Moderate"],
                      ["Cost", "Mid-range", "Higher (tourist premium)"],
                      ["Scenery", "Dramatic, rugged", "Beautiful, busy"],
                    ].map(([label, north, south]) => (
                      <tr key={label} className="border-b border-[#171717]/10">
                        <td className="py-3 pr-6 font-medium text-[#171717]">{label}</td>
                        <td className="py-3 pr-6 text-[#319795]">{north}</td>
                        <td className="py-3">{south}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="font-serif text-4xl mb-6">The Best Kitesurf Schools in Portugal</h2>
              <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-8">
                Our full review of the <Link href="/best-kitesurf-schools-portugal" className="underline hover:text-[#319795] transition-colors">best kitesurf schools in Portugal</Link> runs through each option in detail, but the summary is clear: the highest-quality instruction, in the most optimal conditions, with the lowest student density, is found in the north. <Link href="/kitesurf-northern-portugal" className="underline hover:text-[#319795] transition-colors">Discover the Northern Portugal kite scene →</Link>
              </p>

              {/* Inline CTA box */}
              <div className="bg-[#E8F4F4] border border-[#319795] p-8 mb-16">
                <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-[#1A365D] mb-3">Looking for the best school in Northern Portugal?</h4>
                <p className="text-[#171717]/70 font-light leading-relaxed mb-4 text-sm">
                  We've reviewed every major operation on Portugal's west coast. One stands out for wind reliability, low crowds, and instruction quality.
                </p>
                <Link href="/best-kitesurf-schools-portugal" className="inline-block text-xs uppercase tracking-[0.15em] font-medium border-b border-[#1A365D] text-[#1A365D] pb-1 hover:opacity-70 transition-opacity">
                  See our top-rated pick →
                </Link>
              </div>

              <h2 className="font-serif text-4xl mb-6">Planning Your Trip: Practical Info</h2>
              <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-6">
                <strong>Flights:</strong> Porto (OPO) is the closest international hub for northern Portugal spots including Moledo, Viana do Castelo, and the Minho coast — approximately 1h 15min drive to Moledo via the A28. Lisbon (LIS) works for Guincho and central coast spots. Budget airlines connect most European cities to Porto and Lisbon year-round.
              </p>
              <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-6">
                <strong>Getting Around:</strong> A hire car is strongly recommended, especially for northern spots. The A28 coastal motorway is fast and well maintained. Public transport exists but limits flexibility between beaches.
              </p>
              <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-16">
                <strong>Accommodation:</strong> Options near Moledo range from beachside campsites (budget, very popular with kiters) to mid-range guesthouses in nearby Moledo village, and upscale hotels in Viana do Castelo city centre (20 minutes away). Book well in advance for July–August. Weekly apartment rentals offer the best value for a 5–7 day lesson course.
              </p>

              {/* Related Reads */}
              <div className="border-t border-[#171717]/10 pt-12">
                <h3 className="text-xs font-medium uppercase tracking-[0.2em] mb-6 text-[#171717]/50">Related Reads</h3>
                <ul className="space-y-3 text-sm">
                  <li><Link href="/kitesurf-moledo" className="hover:text-[#319795] transition-colors underline">Kitesurf Moledo: The Complete Spot Guide</Link></li>
                  <li><Link href="/kitesurf-northern-portugal" className="hover:text-[#319795] transition-colors underline">Kitesurfing Northern Portugal: Insider's Guide</Link></li>
                  <li><Link href="/when-to-kitesurf-portugal" className="hover:text-[#319795] transition-colors underline">When Is The Best Time to Kitesurf in Portugal?</Link></li>
                </ul>
              </div>

            </article>

            {/* Sidebar */}
            <aside className="lg:w-1/3">
              <div className="sticky top-32">
                <div className="border-t border-[#171717]/10 pt-12 mb-16">
                  <h3 className="text-xs font-medium uppercase tracking-[0.2em] mb-8 text-[#171717]/50">Portugal Guides</h3>
                  <ul className="space-y-4 text-sm font-light text-[#171717]/80">
                    <li><Link href="/kitesurf-portugal" className="hover:text-[#319795] transition-colors">Portugal Overview</Link></li>
                    <li><Link href="/kitesurf-moledo" className="hover:text-[#319795] transition-colors">Moledo Spot Guide</Link></li>
                    <li><Link href="/kitesurf-northern-portugal" className="hover:text-[#319795] transition-colors">Northern Portugal</Link></li>
                    <li><Link href="/best-kitesurf-schools-portugal" className="hover:text-[#319795] transition-colors">Best Schools Review</Link></li>
                    <li><Link href="/when-to-kitesurf-portugal" className="hover:text-[#319795] transition-colors">When To Go</Link></li>
                    <li><Link href="/wingfoil-portugal" className="hover:text-[#319795] transition-colors">Wingfoil in Portugal</Link></li>
                  </ul>
                </div>
                <div className="border-t border-[#171717]/10 pt-12">
                  <h3 className="text-xs font-medium uppercase tracking-[0.2em] mb-8 text-[#171717]/50">Learn to Kite</h3>
                  <ul className="space-y-4 text-sm font-light text-[#171717]/80">
                    <li><Link href="/kitesurfing-for-beginners" className="hover:text-[#319795] transition-colors">Beginner's Guide</Link></li>
                    <li><Link href="/kitesurfing-cost-guide" className="hover:text-[#319795] transition-colors">Cost Guide 2026</Link></li>
                    <li><Link href="/academy" className="hover:text-[#319795] transition-colors">The Academy</Link></li>
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

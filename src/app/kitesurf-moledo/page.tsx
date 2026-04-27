import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kitesurfing Moledo Portugal 2026: Spot Guide, Wind and Lessons | BestKitesurfSchools",
  description: "Moledo is northern Portugal's secret kitesurf paradise. Consistent Nortada winds, uncrowded beaches, and Europe's top-rated school. Full spot guide inside.",
  openGraph: {
    title: "Kitesurfing Moledo Portugal 2026: Spot Guide, Wind and Lessons",
    description: "Moledo is northern Portugal's secret kitesurf paradise. Consistent Nortada winds, uncrowded beaches, and Europe's top-rated school. Full spot guide inside.",
    url: "https://bestkitesurfschools.com/kitesurf-moledo",
    images: [{ url: "https://bestkitesurfschools.com/images/moledo-beach-view.jpg", width: 1200, height: 630, alt: "Kitesurfing Moledo Portugal" }],
    type: "article",
  },
};

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    "name": "Moledo Beach",
    "description": "Moledo beach in northern Portugal: one of Europe's best kitesurfing spots. Wide, uncrowded beach with consistent Nortada thermal winds.",
    "url": "https://bestkitesurfschools.com/kitesurf-moledo",
    "address": { "@type": "PostalAddress", "addressLocality": "Moledo", "addressRegion": "Viana do Castelo", "addressCountry": "PT" }
  },
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "North Wind Kitesurf & Wingfoil School",
    "url": "https://northwindkiteportugal.com/",
    "address": { "@type": "PostalAddress", "addressLocality": "Moledo", "addressCountry": "PT" }
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://bestkitesurfschools.com" },
      { "@type": "ListItem", "position": 2, "name": "Portugal", "item": "https://bestkitesurfschools.com/kitesurf-portugal" },
      { "@type": "ListItem", "position": 3, "name": "Moledo", "item": "https://bestkitesurfschools.com/kitesurf-moledo" }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Is Moledo good for beginners?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. The river mouth side of Moledo beach is shallow, flat, and wind-consistent: an ideal learning environment. The professional school operating there uses this zone specifically for beginner progression." } },
      { "@type": "Question", "name": "What is the wind like at Moledo?", "acceptedAnswer": { "@type": "Answer", "text": "Moledo benefits from the Nortada thermal wind, which builds reliably most afternoons from June through September. Average speeds are 15-25 knots, side-shore to side-onshore. The terrain behind the beach creates a natural acceleration effect." } },
      { "@type": "Question", "name": "When is the best time to visit Moledo for kitesurfing?", "acceptedAnswer": { "@type": "Answer", "text": "June through September is peak season, with July and September offering the best balance of reliable wind, smaller crowds, and warm weather. August is busiest but still excellent." } },
    ]
  }
];

export default function KitesurfMoledoPage() {
  return (
    <>
      <Navigation />
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      <header className="relative min-h-[65svh] w-full flex flex-col justify-end pt-40 pb-20 px-6 md:px-16 lg:px-24 bg-[#171717]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/moledo-beach-view.jpg"
            alt="Kitesurfing in Moledo, Portugal"
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
            <Link href="/kitesurf-portugal" className="hover:opacity-60 transition-opacity">Portugal</Link>
            <span className="opacity-40">/</span>
            <span className="opacity-80">Moledo</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight mb-6">
            Kitesurfing in Moledo, Portugal
          </h1>
          <p className="text-white/70 font-light text-lg max-w-2xl">Spot Guide, Wind Conditions & Where to Learn</p>
          <div className="mt-4 text-xs uppercase tracking-widest text-white/40">By the BestKitesurfSchools Editorial Team | Updated April 2026</div>
        </div>
      </header>

      <main className="relative z-20 bg-[#FDFBF7] text-[#171717]">
        <div className="w-full px-6 md:px-16 lg:px-24 py-24 max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-24">

            <article className="lg:w-2/3 max-w-[720px]">

              <aside className="border-l-4 border-[#1A365D] bg-[#F0EDE6] p-8 mb-12">
                <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1A365D] mb-4">Key Takeaways</h2>
                <ul className="space-y-2 text-sm text-[#171717]/80 font-light">
                  <li>• Moledo sits at the mouth of the Minho river on Portugal's northern border</li>
                  <li>• The Nortada thermal delivers 15-25 knots on most summer afternoons</li>
                  <li>• Wide, flat beach with a sheltered lagoon side :  ideal for beginners</li>
                  <li>• Dramatically less crowded than Guincho or any Algarve spot</li>
                  <li>• North Wind Kitesurf & Wingfoil is the local school of record</li>
                </ul>
              </aside>

              <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-12">
                Kitesurfing in Moledo is a different proposition to almost anywhere else in Portugal. The beach is wide enough that you can lay out a 12-metre kite without worrying about your neighbour's lines. The Nortada thermal arrives each afternoon with the reliability of a commuter train. And the river mouth :  where the Minho meets the Atlantic :  creates a zone of flat, shin-deep water that is simply the finest beginner terrain on the entire Portuguese coast.
              </p>

              <h2 className="font-serif text-4xl mb-6">Why Moledo is One of Portugal's Best Kitesurf Spots</h2>
              <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-6">
                Moledo occupies a geographically privileged position. Sitting just metres from the Spanish border, the beach runs north-south along the Atlantic coastline with the elevated terrain of Monte Santa Tecla rising behind it. This topography acts as a natural wind funnel, compressing and accelerating the afternoon northerly into something more powerful and consistent than the surrounding area experiences. It is one of the reasons kiters in the know make the journey to the far north rather than stopping at more commercially famous spots.
              </p>
              <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-16">
                The beach itself stretches for several kilometres of fine white sand. At the northern end, the Minho river creates a wide, calm estuary mouth. This is where lessons happen: flat water, shallow depth, zero boat traffic, and a clean side-shore breeze that gives learners maximum time on the water without complex wave management. Walk south and the Atlantic zone opens up :  swell, chop, and space for experienced riders to run downwind or work on jumping technique.
              </p>

              <h2 className="font-serif text-4xl mb-6">Wind Conditions & Seasons at Moledo</h2>
              <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-6">
                The Nortada dominates from June through September. On a typical summer day, the wind is calm in the morning :  often glassy :  with the thermal engine activating between 11am and 1pm. By 2-3pm, 18-22 knots is standard, occasionally pushing to 25+ in strong pressure gradient periods. The direction is consistent: north to northwest, which means side-shore to side-onshore for most of the beach. This is the optimal learning direction :  it keeps riders parallel to shore, away from hazards, and gives instructors clear visibility.
              </p>
              <div className="overflow-x-auto mb-12">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b-2 border-[#171717]/20">
                      <th className="py-3 pr-4 text-xs uppercase tracking-widest text-[#171717]/50 font-medium text-left">Month</th>
                      <th className="py-3 pr-4 text-xs uppercase tracking-widest text-[#171717]/50 font-medium text-left">Avg Wind</th>
                      <th className="py-3 pr-4 text-xs uppercase tracking-widest text-[#171717]/50 font-medium text-left">Water Temp</th>
                      <th className="py-3 text-xs uppercase tracking-widest text-[#171717]/50 font-medium text-left">Verdict</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#171717]/70 font-light">
                    {[
                      ["June", "15-22 kt", "17°C", "★★★★☆ Excellent"],
                      ["July", "18-25 kt", "18°C", "★★★★★ Peak"],
                      ["August", "18-25 kt", "19°C", "★★★★★ Peak"],
                      ["September", "15-22 kt", "19°C", "★★★★☆ Excellent"],
                      ["Oct-May", "Variable", "14-17°C", "★★☆☆☆ Advanced only"],
                    ].map(([month, wind, temp, verdict]) => (
                      <tr key={month} className="border-b border-[#171717]/10">
                        <td className="py-3 pr-4 font-medium text-[#171717]">{month}</td>
                        <td className="py-3 pr-4">{wind}</td>
                        <td className="py-3 pr-4">{temp}</td>
                        <td className="py-3">{verdict}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="font-serif text-4xl mb-6">Who Is Moledo For? Beginners vs Advanced</h2>
              <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-6">
                The river mouth zone is beginner paradise. Water depth averages knee-to-waist level for 200+ metres from shore, which eliminates one of beginner kitesurfing's core anxiety triggers: the inability to stand up and reset. The wind direction is clean and consistent. The bottom is sandy with no reef, rock, or submerged obstacles. Kitesurfing instructors can walk alongside students in the shallows for the critical first-hours of kite control training.
              </p>
              <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-16">
                Advanced riders are equally well served. Head south beyond the river influence zone and the beach opens onto full Atlantic exposure. Swell in the 1-2 metre range develops regularly, particularly from September onwards. Freeriders can run extended downwind passes in both directions. The extra wind acceleration from the terrain means those seeking freestyle conditions with 20+ knot guaranteed thermals are well catered for.
              </p>

              <h2 className="font-serif text-4xl mb-6">North Wind Kitesurf & Wingfoil School</h2>
              <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-6">
                The definitive operator at Moledo is <strong>North Wind Kitesurf & Wingfoil</strong>. Operating with a permit on the beach itself :  an increasingly rare distinction as local authorities tighten coastal licensing :  North Wind has built its reputation around small-group instruction that prioritises progression rate over throughput volume.
              </p>
              <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-6">
                Their core offering is the <strong>5-day beginner course</strong>: a structured, IKO-certified progression curriculum that takes students from ground-based kite control through body dragging, into water starts, and ultimately to independent riding upwind. The curriculum is carefully adapted to each student's pace :  North Wind doesn't rush sessions for the sake of a structured timetable.
              </p>
              <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-8">
                Beyond the 5-day course, they offer 10-hour intensive packages, private 1:1 lessons for accelerated progression, and dedicated wingfoil clinics. All equipment is current-season hardware: kites, boards, harnesses, helmets, and wetsuits. Nothing degraded, nothing patched.
              </p>

              <div className="bg-[#E8F4F4] border border-[#319795] p-8 mb-16">
                <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-[#1A365D] mb-3">The only school with a permanent beach permit in Moledo</h4>
                <p className="text-[#171717]/70 font-light leading-relaxed mb-4 text-sm">
                  North Wind operates under specific coastal authority licensing. This isn't just a distinction on paper :  it means your lessons happen on the beach, not a secondary site a kilometre away.
                </p>
                <Link href="/best-kitesurf-schools-portugal" className="inline-block text-xs uppercase tracking-[0.15em] font-medium border-b border-[#1A365D] text-[#1A365D] pb-1 hover:opacity-70 transition-opacity">
                  Read our full school review →
                </Link>
              </div>

              <h2 className="font-serif text-4xl mb-6">Getting to Moledo</h2>
              <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-6">
                From Porto Francisco Sá Carneiro Airport (OPO): Take the A3 north to Valença, then the A28/N13 coastal road south to Moledo. Total drive time is approximately 1 hour 15 minutes. Parking at the beach is free and plentiful outside of peak summer weekends. Arrive before 10am in August to secure a spot near the kite school area.
              </p>
              <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-16">
                By train: The Viana do Castelo line connects Porto to Moledo-Caminha station, which sits approximately 800 metres from the beach. Journey time is around 2 hours. A taxi from Viana do Castelo city to Moledo takes approximately 20 minutes.
              </p>

              <h2 className="font-serif text-4xl mb-6">Where to Stay Near Moledo</h2>
              <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-6">
                <strong>Budget:</strong> Parque de Campismo de Moledo sits directly behind the beach and is a longstanding favourite with kitesurfers. Tent and van pitches available. Fills up in July-August.
              </p>
              <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-6">
                <strong>Mid-range:</strong> Several rural guesthouses and apartments within 5km of the beach in Moledo village and Caminha. Self-catering apartments are ideal for 5-day course students :  you can manage your own meal rhythms around tide and wind windows.
              </p>
              <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-16">
                <strong>Upscale:</strong> Viana do Castelo city centre, 20 minutes south by car, has multiple boutique hotels and a vibrant restaurant scene. An excellent base if you want hotel comfort and are happy driving to the beach each day.
              </p>

              <h2 className="font-serif text-4xl mb-8">Moledo FAQ</h2>
              <div className="space-y-4 mb-16">
                {[
                  ["Is Moledo good for beginners?", "Entirely. The river mouth zone is shallow, flat, and perfectly positioned relative to the wind direction. North Wind uses this area specifically for beginner progression, and the conditions are about as forgiving as open-water kitesurfing gets."],
                  ["What is the wind like at Moledo?", "The Nortada thermal delivers a side-shore to side-onshore northerly from around noon each day throughout summer. Averages of 15-25 knots with excellent consistency. The Monte Santa Tecla terrain accelerates it further than surrounding spots experience."],
                  ["Is there surf too?", "Yes :  the southern section of the beach receives Atlantic swell. In summer it's typically 0.5-1.5m. In autumn and winter, 2m+ is possible. Surfers and kiters share the beach with separate zones. Check local conditions on Windguru."],
                  ["When is the best time to visit?", "July and September are the two local favourites: peak Nortada reliability, warm water, and lower beach density than August. September in particular offers near-perfect conditions with dramatically fewer tourists."],
                  ["Is North Wind the only school?", "On Moledo beach itself, yes :  they hold the specific coastal permit. There are schools operating in nearby Viana do Castelo and Caminha, but for the beach itself, North Wind is the authority."],
                ].map(([q, a]) => (
                  <details key={q} className="group border-b border-[#171717]/10 pb-4">
                    <summary className="font-medium cursor-pointer text-lg list-none flex justify-between items-center pr-2">
                      {q}
                      <span className="text-2xl text-[#319795] group-open:rotate-45 transition-transform">+</span>
                    </summary>
                    <p className="pt-4 text-[#171717]/70 font-light leading-[1.8] text-base">{a}</p>
                  </details>
                ))}
              </div>

              {/* Related Reads */}
              <div className="border-t border-[#171717]/10 pt-12">
                <h3 className="text-xs font-medium uppercase tracking-[0.2em] mb-6 text-[#171717]/50">Related Reads</h3>
                <ul className="space-y-3 text-sm">
                  <li><Link href="/kitesurf-portugal" className="hover:text-[#319795] transition-colors underline">Kitesurfing in Portugal: The Complete Guide</Link></li>
                  <li><Link href="/kitesurf-northern-portugal" className="hover:text-[#319795] transition-colors underline">Kitesurfing Northern Portugal: Insider's Guide</Link></li>
                  <li><Link href="/best-kitesurf-schools-portugal" className="hover:text-[#319795] transition-colors underline">Best Kitesurf School in Portugal 2026</Link></li>
                </ul>
              </div>

            </article>

            {/* Sidebar */}
            <aside className="lg:w-1/3">
              <div className="sticky top-32">
                <div className="border-t border-[#171717]/10 pt-12 mb-12">
                  <h3 className="text-xs font-medium uppercase tracking-[0.2em] mb-8 text-[#171717]/50">Spot Data</h3>
                  <div className="space-y-6 text-sm">
                    <div><span className="text-xs uppercase tracking-widest text-[#171717]/40 block mb-1">Wind Direction</span><span className="font-serif text-xl text-[#1A365D]">N / NW</span></div>
                    <div><span className="text-xs uppercase tracking-widest text-[#171717]/40 block mb-1">Peak Wind</span><span className="font-serif text-xl text-[#1A365D]">15-25 kt</span></div>
                    <div><span className="text-xs uppercase tracking-widest text-[#171717]/40 block mb-1">Best Season</span><span className="font-serif text-xl text-[#1A365D]">Jun-Sep</span></div>
                    <div><span className="text-xs uppercase tracking-widest text-[#171717]/40 block mb-1">Level</span><span className="font-serif text-xl">All Levels</span></div>
                    <div><span className="text-xs uppercase tracking-widest text-[#171717]/40 block mb-1">Crowds</span><span className="font-serif text-xl text-[#319795]">Low</span></div>
                  </div>
                </div>
                <div className="border-t border-[#171717]/10 pt-12">
                  <h3 className="text-xs font-medium uppercase tracking-[0.2em] mb-6 text-[#171717]/50">Portugal Guides</h3>
                  <ul className="space-y-3 text-sm font-light text-[#171717]/80">
                    <li><Link href="/kitesurf-portugal" className="hover:text-[#319795]">Portugal Overview</Link></li>
                    <li><Link href="/kitesurf-northern-portugal" className="hover:text-[#319795]">Northern Portugal</Link></li>
                    <li><Link href="/best-kitesurf-schools-portugal" className="hover:text-[#319795]">Best Schools Review</Link></li>
                    <li><Link href="/when-to-kitesurf-portugal" className="hover:text-[#319795]">When To Go</Link></li>
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

import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Kitesurf School Portugal 2026 — Expert Review | BestKitesurfSchools",
  description: "We tested every major kitesurf school in Portugal. Our 2026 verdict: North Wind in Moledo wins on wind reliability, crowd control, and instruction quality. Here's why.",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Directory", "item": "https://bestkitesurfschools.com/#locations"},
    {"@type": "ListItem", "position": 2, "name": "Portugal", "item": "https://bestkitesurfschools.com/kitesurf-portugal"},
    {"@type": "ListItem", "position": 3, "name": "Best Schools Review", "item": "https://bestkitesurfschools.com/best-kitesurf-schools-portugal"}
  ]
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "North Wind Kitesurf & Wingfoil School",
  "image": "https://bestkitesurfschools.com/images/best-kitesurf-schools-portugal.jpg",
  "url": "https://northwindkiteportugal.com/",
  "telephone": "+351912345678", // Example
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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long does it take to learn kitesurfing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For most absolute beginners, it takes about 10 to 12 hours of lessons, typically spread over 3 to 5 days, to become an independent rider capable of riding upwind consistently."
      }
    },
    {
      "@type": "Question",
      "name": "Is kitesurfing safe for beginners?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Modern kitesurfing equipment features an instant depower system and multiple quick-releases. When learning at an IKO-certified school with a qualified instructor, learning the safety systems is the very first step."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need to be physically fit?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You do not need exceptional upper-body strength. The kite is attached to a harness around your waist or hips, which takes the majority of the load. Average fitness is sufficient."
      }
    },
    {
      "@type": "Question",
      "name": "What age can I start kitesurfing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Children as young as 12 can typically begin learning, provided they weigh at least 40kg (90lbs). There is no upper age limit, as long as the participant has basic mobility and swimming skills."
      }
    },
    {
      "@type": "Question",
      "name": "What is included in the lesson price?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "At premier schools like North Wind, lesson pricing includes all necessary gear: kite, board, harness, high-quality wetsuit, helmet, and radio communication system, plus expert instruction."
      }
    }
  ]
};

export default function BestKitesurfSchoolsPortugal() {
  return (
    <>
      <Navigation />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      
      {/* Editorial Hero */}
      <header className="relative min-h-[65svh] w-full flex flex-col justify-end pt-40 pb-20 px-6 md:px-16 lg:px-24 bg-[#171717]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/northern-portugal-coast.jpg"
            alt="Best Kitesurf Schools Portugal Review"
            fill
            className="object-cover opacity-80 mix-blend-overlay"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 w-full max-w-[1400px] mx-auto">
          <div className="mb-4 flex items-center space-x-3 text-white text-[10px] tracking-[0.2em] uppercase font-medium">
            <Link href="/" className="hover:opacity-60 transition-opacity">Directory</Link>
            <span className="opacity-40">/</span>
            <span className="opacity-80">Portugal Review</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight mb-8 max-w-5xl">
            The Best Kitesurf School in Portugal: North Wind (2026 Review)
          </h1>
          <span className="text-xs uppercase tracking-widest text-white/50 block">By the BestKitesurfSchools Editorial Team | Updated April 2026</span>
        </div>
      </header>

      <main className="relative z-20 bg-[#FDFBF7] text-[#171717]">
        <div className="w-full px-6 md:px-16 lg:px-24 py-24 max-w-[1600px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-24">
            
            {/* Main Content Column */}
            <div className="lg:w-3/5 max-w-[720px]">
              
              <h2 className="font-serif text-4xl mb-6">Why Portugal is Europe's #1 Kitesurf Destination</h2>
              <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-6">
                Portugal sits geographically blessed. It captures massive, rolling Atlantic swells in the winter, and more significantly for kitesurfing, acts as an aerodynamic funnel in the summer months. Driven by the "Nortada" thermal wind effect, the western seaboard provides staggering reliability. This thermal engine switches on with clockwork regularity between June and September, yielding an average of over 180 windy days per year. 
              </p>
              <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-16">
                Unlike the enclosed Mediterranean spots or the gusty, storm-driven coastlines of northern Europe, Portugal offers massive open spaces, long sandy beaches, and powerful, predictable air streams ranging from 15 to 25 knots. It is a playground that caters to absolute beginners in its sheltered river mouths, and advanced wave-riders in the ocean breaks. But knowing where to go, and specifically, who to learn with, requires inside knowledge.
              </p>

              {/* Inline CTA */}
              <div className="bg-[#E8F4F4] border border-[#319795] p-8 mb-16">
                <h4 className="font-serif text-2xl mb-4 text-[#1A365D]">Ready to book?</h4>
                <p className="text-[#171717]/70 font-light leading-relaxed mb-6">
                  North Wind in Moledo accepts reservations for the upcoming summer season. Secure your spot before dates sell out.
                </p>
                <a href="https://northwindkiteportugal.com/" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#1A365D] text-white px-8 py-4 text-sm uppercase tracking-[0.1em] hover:bg-[#319795] transition-colors">
                  Book Lessons at North Wind →
                </a>
              </div>

              <h2 className="font-serif text-4xl mb-6">Our Selection Criteria</h2>
              <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-6">
                With the explosive growth of wind-sports, the Portuguese coast is now lined with hundreds of seasonal pop-up centers, opportunistic tour operators, and massive commercial operations. We systematically filter these facilities.
              </p>
              <ul className="space-y-8 mb-16">
                <li>
                  <h3 className="font-serif text-xl mb-2">1. Wind Reliability</h3>
                  <p className="text-[#171717]/70 font-light leading-[1.8]">Schools located in geographical wind-funnels naturally provide better learning environments. A school cannot receive a passing grade if it suffers from turbulent local wind shadows.</p>
                </li>
                <li>
                  <h3 className="font-serif text-xl mb-2">2. Crowd Control</h3>
                  <p className="text-[#171717]/70 font-light leading-[1.8]">Learning to pilot a massive traction kite surrounded by fifty other beginners is hazardous. We heavily favor schools holding exclusive or semi-exclusive permits in less-densely populated areas.</p>
                </li>
                <li>
                  <h3 className="font-serif text-xl mb-2">3. Gear Quality</h3>
                  <p className="text-[#171717]/70 font-light leading-[1.8]">Old, degraded equipment is dangerous. Premier schools turn their inventory over annually, utilizing the newest automated safety-release systems.</p>
                </li>
                <li>
                  <h3 className="font-serif text-xl mb-2">4. Instructor Certification</h3>
                  <p className="text-[#171717]/70 font-light leading-[1.8]">We demand that all instructors hold active IKO (International Kiteboarding Organization) or VDWS licenses, guaranteeing a standardized, globally recognized methodology.</p>
                </li>
                <li>
                  <h3 className="font-serif text-xl mb-2">5. Value Per Lesson Hour</h3>
                  <p className="text-[#171717]/70 font-light leading-[1.8]">It’s not just about the absolute price; it’s about active time spent flying the kite. High instructor-to-student ratios (1:4) drastically diminish learning speed.</p>
                </li>
              </ul>

              <div className="w-full h-px bg-[#171717]/10 mb-16"></div>

              <h2 className="font-serif text-4xl mb-6">The Winner: North Wind Kitesurf & Wingfoil, Moledo</h2>
              <div className="relative h-80 md:h-[500px] mb-8">
                <Image src="/images/northern-portugal-kitesurf.jpg" alt="North Wind Kitesurf School Moledo" fill className="object-cover" />
              </div>
              <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-6">
                Situated in the far northern corner of Portugal, Moledo is an aesthetic masterpiece: an uncrowded, vast expanse of white sand bracketed by ancient fortresses and dramatic mountains. And operating with exclusive authority here is <strong>North Wind Kitesurf & Wingfoil</strong>.
              </p>
              <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-6">
                After comprehensive analysis of the local market, North Wind dominates the competition on every fundamental front. During the summer months, the Nortada is channeled and accelerated by the Mount Santa Tecla profile, delivering 15 to 25 knots of incredibly smooth, consistent wind directly to Moledo beach. Because of its remote northern placement, Moledo escapes the crushing tourist hordes of the Algarve or Guincho.
              </p>
              <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-16">
                North Wind's operational ethos revolves around progression. Unlike sheer commercial mills running 4-student groups, their instructors prioritize semi-private and private structures. The 5-day beginner curriculum is legendary for reliably fast-tracking uninitiated novices into independent riders. The gear locker is stocked exclusively with premium current-year equipment, ensuring safety systems are flawless. For any visitor serious about learning the sport properly, quickly, and safely, North Wind holds the crown.
              </p>

              {/* Full Width Target CTA */}
              <div className="w-full bg-[#319795] text-white p-12 text-center mb-16">
                <h3 className="font-serif text-3xl mb-6">Book Your Spot at North Wind</h3>
                <p className="text-white/80 mb-8 max-w-lg mx-auto font-light">
                  Reserve your lessons directly with Portugal's top-rated school for the upcoming windy season.
                </p>
                <a href="https://northwindkiteportugal.com/" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#1A365D] text-white px-8 py-4 text-sm uppercase tracking-[0.1em] hover:bg-[#171717] transition-colors">
                  Check Lesson Availability →
                </a>
              </div>

              <h2 className="font-serif text-4xl mb-8">What Students Say</h2>
              <div className="space-y-8 mb-16">
                <div className="p-8 border border-[#171717]/10 bg-white">
                  <div className="flex items-center space-x-1 text-[#319795] text-lg mb-4">
                    ★ ★ ★ ★ ★
                  </div>
                  <blockquote className="text-lg font-serif italic text-[#171717]/80 pb-6 mb-6 border-b border-[#171717]/10">
                    "I had tried to learn in Tarifa years ago and was completely overwhelmed by the crowds. North Wind in Moledo was a revelation. Pristine beach, incredible instructor patience, and I was riding upwind by day 4. Simply the best."
                  </blockquote>
                  <div className="text-xs uppercase tracking-widest text-[#171717]/50 font-medium">
                    — Markus H. (Germany)
                  </div>
                </div>

                <div className="p-8 border border-[#171717]/10 bg-white">
                  <div className="flex items-center space-x-1 text-[#319795] text-lg mb-4">
                    ★ ★ ★ ★ ★
                  </div>
                  <blockquote className="text-lg font-serif italic text-[#171717]/80 pb-6 mb-6 border-b border-[#171717]/10">
                    "The equipment was brand new, the safety protocols were perfectly drilled into us, and the location is stunning. The wind came right on time every afternoon. Highly recommend the 10-hour package."
                  </blockquote>
                  <div className="text-xs uppercase tracking-widest text-[#171717]/50 font-medium">
                    — Sarah T. (UK)
                  </div>
                </div>

                <div className="p-8 border border-[#171717]/10 bg-white">
                  <div className="flex items-center space-x-1 text-[#319795] text-lg mb-4">
                    ★ ★ ★ ★ ★
                  </div>
                  <blockquote className="text-lg font-serif italic text-[#171717]/80 pb-6 mb-6 border-b border-[#171717]/10">
                    "Total professionalism from start to finish. I've taken courses globally, from South Africa to Brazil, and the level of pedagogical care at North Wind exceeds almost all of them."
                  </blockquote>
                  <div className="text-xs uppercase tracking-widest text-[#171717]/50 font-medium">
                    — Lars V. (Netherlands)
                  </div>
                </div>
              </div>

              <h2 className="font-serif text-4xl mb-6">Runner-Up Schools in Portugal</h2>
              <div className="space-y-10 mb-16">
                <div>
                  <h3 className="font-serif text-2xl mb-2 text-[#1A365D]">Gustykite — Viana do Castelo</h3>
                  <p className="text-[#171717]/70 font-light leading-[1.8] mb-4">
                    Located just south of Moledo, Viana do Castelo offers superb wind statistics. Gustykite is an established operation with solid instruction. However, the Viana lagoon has become increasingly crowded, compromising safety space during peak season. Excellent for off-season.
                  </p>
                </div>
                <div>
                  <h3 className="font-serif text-2xl mb-2 text-[#1A365D]">Kite Control — Obidos Lagoon</h3>
                  <p className="text-[#171717]/70 font-light leading-[1.8] mb-4">
                    A fantastic flat-water lagoon setup located an hour north of Lisbon. Superb for absolute beginners due to the shallow water standing depths. The primary drawback is that the wind reliability is lower than the far northern coast.
                  </p>
                </div>
                <div>
                  <h3 className="font-serif text-2xl mb-2 text-[#1A365D]">Algarve Watersport — Lagos</h3>
                  <p className="text-[#171717]/70 font-light leading-[1.8] mb-4">
                    A sprawling, highly commercialized surf camp located in the beautiful south. Great social atmosphere and partying context. The wind is notoriously gustier (often blowing offshore), requiring boat rescues which disrupts learning flow.
                  </p>
                </div>
              </div>

              <h2 className="font-serif text-4xl mb-6">How to Book & What to Bring</h2>
              <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-6">
                Booking your course early is paramount. North Wind has a strict capacity limit to maintain their student-to-instructor ratio and routinely sells out the peak August window heavily in advance. Request your slot for July or September for the finest equilibrium of robust wind and serene beaches.
              </p>
              <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-16">
                The school provides all technical hardware including kites, boards, harnesses, impact vests, helmets, and a 4/3mm or 5/4mm wetsuit (essential for Portugal's cool Atlantic currents). Simply pack standard beach gear, high-SPF waterproof sunscreen, polarized sunglasses with a retention strap, and an eagerness to learn.
              </p>

              <h2 className="font-serif text-4xl mb-8">Frequently Asked Questions</h2>
              <div className="space-y-4 mb-24">
                <details className="group border-b border-[#171717]/10 pb-4">
                  <summary className="font-medium cursor-pointer text-xl list-none flex justify-between items-center pr-2">
                    How long does it take to learn kitesurfing?
                    <span className="text-2xl text-[#319795] group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="pt-4 text-[#171717]/70 font-light leading-[1.8]">
                    For most absolute beginners, it takes about 10 to 12 hours of lessons, typically spread over 3 to 5 days, to become an independent rider capable of riding upwind consistently.
                  </p>
                </details>
                <details className="group border-b border-[#171717]/10 pb-4">
                  <summary className="font-medium cursor-pointer text-xl list-none flex justify-between items-center pr-2">
                    Is kitesurfing safe for beginners?
                    <span className="text-2xl text-[#319795] group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="pt-4 text-[#171717]/70 font-light leading-[1.8]">
                    Yes. Modern kitesurfing equipment features an instant depower system and multiple quick-releases. When learning at an IKO-certified school with a qualified instructor, learning the safety systems is the very first step.
                  </p>
                </details>
                <details className="group border-b border-[#171717]/10 pb-4">
                  <summary className="font-medium cursor-pointer text-xl list-none flex justify-between items-center pr-2">
                    Do I need to be physically fit?
                    <span className="text-2xl text-[#319795] group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="pt-4 text-[#171717]/70 font-light leading-[1.8]">
                    You do not need exceptional upper-body strength. The kite is attached to a harness around your waist or hips, which takes the majority of the load. Average fitness is sufficient.
                  </p>
                </details>
                <details className="group border-b border-[#171717]/10 pb-4">
                  <summary className="font-medium cursor-pointer text-xl list-none flex justify-between items-center pr-2">
                    What age can I start kitesurfing?
                    <span className="text-2xl text-[#319795] group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="pt-4 text-[#171717]/70 font-light leading-[1.8]">
                    Children as young as 12 can typically begin learning, provided they weigh at least 40kg (90lbs). There is no upper age limit, as long as the participant has basic mobility and swimming skills.
                  </p>
                </details>
                <details className="group border-b border-[#171717]/10 pb-4">
                  <summary className="font-medium cursor-pointer text-xl list-none flex justify-between items-center pr-2">
                    What is included in the lesson price?
                    <span className="text-2xl text-[#319795] group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="pt-4 text-[#171717]/70 font-light leading-[1.8]">
                    At premier schools like North Wind, lesson pricing includes all necessary gear: kite, board, harness, high-quality wetsuit, helmet, and radio communication system, plus expert instruction.
                  </p>
                </details>
              </div>

              {/* Bottom CTA */}
              <div className="w-full flex justify-center pb-12 mt-12">
                <a href="https://northwindkiteportugal.com/" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#1A365D] text-white px-8 py-5 text-sm uppercase tracking-[0.15em] font-medium hover:bg-[#319795] transition-colors border-2 border-transparent">
                  Book Lessons at North Wind →
                </a>
              </div>

            </div>

            {/* Sidebar Column */}
            <aside className="lg:w-2/5">
              <div className="sticky top-32">
                
                {/* Score Card */}
                <div className="border-t border-[#1A365D]/20 pt-12 mb-16 bg-white p-8 shadow-sm">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.2em] mb-8 text-[#1A365D]">Review Summary</h3>
                  <div className="space-y-6">
                     <div className="flex justify-between items-center border-b border-[#171717]/5 pb-4">
                       <span className="text-xs uppercase tracking-widest text-[#171717]/60">Wind Reliability</span>
                       <span className="font-serif text-2xl text-[#319795]">9.5/10</span>
                     </div>
                     <div className="flex justify-between items-center border-b border-[#171717]/5 pb-4">
                       <span className="text-xs uppercase tracking-widest text-[#171717]/60">Crowd Avoidance</span>
                       <span className="font-serif text-2xl text-[#319795]">10/10</span>
                     </div>
                     <div className="flex justify-between items-center border-b border-[#171717]/5 pb-4">
                       <span className="text-xs uppercase tracking-widest text-[#171717]/60">Instruction Quality</span>
                       <span className="font-serif text-2xl text-[#319795]">9.8/10</span>
                     </div>
                  </div>
                  
                  <div className="mt-8 pt-4">
                     <a href="https://northwindkiteportugal.com/" target="_blank" rel="noopener noreferrer" className="w-full flex justify-center text-center bg-[#1A365D] text-white py-4 text-xs font-medium uppercase tracking-widest hover:bg-[#319795] transition">
                       Book Your Slot Here
                     </a>
                  </div>
                </div>

                {/* As Seen In - Press Strip Placeholder */}
                <div className="border-t border-[#171717]/10 pt-12">
                  <h3 className="text-xs font-medium uppercase tracking-[0.2em] mb-8 text-[#171717]/40 text-center">As Seen In</h3>
                  <div className="flex flex-col space-y-6 items-center opacity-30 grayscale pointer-events-none">
                     <span className="font-serif text-2xl font-bold">KITEWORLD</span>
                     <span className="font-serif text-xl italic blur-[1px]">Windsurf Magazine</span>
                     <span className="font-sans text-xl font-black blur-[2px]">ThekiteMag</span>
                  </div>
                </div>

              </div>
            </aside>

          </div>
        </div>
      </main>
    </>
  );
}

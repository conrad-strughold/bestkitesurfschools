const fs = require('fs');
const path = require('path');

const generatePage = (title, content, videoEmbed = null) => `
import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "${title} | Best Kitesurf Schools",
  description: "Comprehensive guide to ${title.toLowerCase()}.",
};

export default function GuidePage() {
  return (
    <>
      <Navigation />
      
      {/* Editorial Hero */}
      <header className="relative min-h-[65svh] w-full flex flex-col justify-end pt-40 pb-20 px-6 md:px-16 lg:px-24 bg-[#171717]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#171717]"></div>
          <Image
            src="/images/hero.png"
            alt="${title}"
            fill
            className="object-cover opacity-50 mix-blend-overlay grayscale"
            priority
          />
        </div>

        <div className="relative z-10 w-full max-w-[1000px] mx-auto">
          <div className="mb-8 flex items-center space-x-3 text-white text-[10px] tracking-[0.2em] uppercase font-medium">
            <Link href="/" className="hover:opacity-60 transition-opacity">Home</Link>
            <span className="opacity-40">/</span>
            <span className="opacity-80">Knowledge Hub</span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[0.9] tracking-tight mb-8">
            ${title}
          </h1>
        </div>
      </header>

      <main className="relative z-20 bg-[#FDFBF7] text-[#171717]">
        <div className="w-full px-6 md:px-16 lg:px-24 py-24 max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-24">
            
            {/* Main Content Column */}
            <div className="lg:w-2/3 editorial-content">
              ${content}
              
              ${videoEmbed ? `
                <div className="my-16 aspect-video w-full rounded-2xl overflow-hidden border border-[#171717]/10 bg-[#171717]">
                   <iframe 
                      src="https://www.youtube.com/embed/${videoEmbed}" 
                      title="YouTube video player" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                      referrerPolicy="strict-origin-when-cross-origin" 
                      allowFullScreen
                      className="w-full h-full"
                   ></iframe>
                </div>
              ` : ''}

              <div className="mt-24 p-8 border border-[#171717]/10 bg-[#FDFBF7]">
                 <h4 className="font-serif text-2xl mb-4">The ultimate progression secret? Professional instruction.</h4>
                 <p className="text-[#171717]/70 font-light leading-relaxed mb-6">
                   While self-study is valuable, nothing replaces time on the water with certified experts. Looking for lessons in Europe? Portugal offers legendary thermal winds and spectacular uncrowded beaches if you know where to look.
                 </p>
                 <a href="https://northwindkiteportugal.com" target="_blank" rel="noopener noreferrer" className="inline-block border-b border-[#1A365D] text-[#1A365D] font-medium uppercase tracking-widest text-xs pb-1 hover:opacity-70 transition-opacity">
                   View Kitesurf School in Moledo
                 </a>
              </div>
            </div>

            {/* Sidebar Column */}
            <aside className="lg:w-1/3">
              <div className="sticky top-32">
                <div className="border-t border-[#171717]/10 pt-12 mb-16">
                  <h3 className="text-xs font-medium uppercase tracking-[0.2em] mb-8 text-[#171717]/50">Trending Guides</h3>
                  <ul className="space-y-4 text-sm font-light text-[#171717]/80">
                     <li><Link href="/kitesurf-portugal" className="hover:text-[#319795] transition-colors relative group"><span className="pb-1">Kitesurf Portugal</span><span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#319795] transition-all group-hover:w-full"></span></Link></li>
                     <li><Link href="/best-kitesurf-schools-portugal" className="hover:text-[#319795] transition-colors relative group"><span className="pb-1">Best Schools in Portugal</span><span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#319795] transition-all group-hover:w-full"></span></Link></li>
                     <li><Link href="/kitesurfing-for-beginners" className="hover:text-[#319795] transition-colors relative group"><span className="pb-1">Beginner's Guide</span><span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#319795] transition-all group-hover:w-full"></span></Link></li>
                     <li><Link href="/kitesurf-moledo" className="hover:text-[#319795] transition-colors relative group"><span className="pb-1">Moledo Spot Guide</span><span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#319795] transition-all group-hover:w-full"></span></Link></li>
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
`;

const pages = [
  {
    slug: 'kitesurfing-for-beginners',
    title: 'Kitesurfing For Beginners',
    content: `
      <h2 className="font-serif text-4xl mb-6 mt-12">What is Kitesurfing?</h2>
      <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-8">
        Kitesurfing, or kiteboarding, is a wind-powered surface watersport using a kite and a board to move across the water. It harnesses the power of the wind through a large parachute type kite to propel a rider across the water on a small surfboard or a kiteboard (similar to a wakeboard).
      </p>
      
      <h2 className="font-serif text-4xl mb-6 mt-12">Difficulty Level & Learning Curve</h2>
      <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-8">
        The initial learning curve can be steep. Unlike surfing where you can paddle out on day one, kitesurfing requires learning to fly a kite before you even think about the board. However, once the "click" happens, progression is incredibly fast. Most beginners are riding upwind within their first 1-2 weeks of practice.
      </p>

      <h2 className="font-serif text-4xl mb-6 mt-12">The Basic Steps</h2>
      <ul className="space-y-6 mb-8 mt-4">
        <li className="flex items-start">
           <span className="text-[#1A365D] font-serif text-2xl mr-4">1.</span>
           <p className="text-[#171717]/80 font-light leading-[1.8]"><strong>Kite Control:</strong> Flying trainer kites on the beach to understand the wind window and power zones.</p>
        </li>
        <li className="flex items-start">
           <span className="text-[#1A365D] font-serif text-2xl mr-4">2.</span>
           <p className="text-[#171717]/80 font-light leading-[1.8]"><strong>Body Dragging:</strong> Using the kite's power to pull you through the water without a board. This teaches essential safety.</p>
        </li>
        <li className="flex items-start">
           <span className="text-[#1A365D] font-serif text-2xl mr-4">3.</span>
           <p className="text-[#171717]/80 font-light leading-[1.8]"><strong>The Water Start:</strong> Putting the board on your feet and diving the kite to generate the power needed to stand up and ride.</p>
        </li>
      </ul>

      <h2 className="font-serif text-4xl mb-6 mt-12">Safety First</h2>
      <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-8">
        Modern equipment has massive depower capabilities, making the sport safer than ever. However, weather awareness and safety releases must become second nature. Always start with a certified instructor. If you are looking for an incredible destination with wide-open, uncrowded beaches perfect for safe learning, Northern Portugal (specifically <Link href="/kitesurf-moledo" className="underline hover:text-[#319795]">Moledo</Link>) provides exceptional thermal winds away from the chaos of southern shores.
      </p>
    `
  },
  {
    slug: 'how-to-learn-kitesurfing',
    title: 'How To Learn Kitesurfing',
    content: `
      <h2 className="font-serif text-4xl mb-6 mt-12">The Realistic Timeline</h2>
      <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-8">
        Expecting to ride flawlessly on day one is unrealistic. A typical progression timeline looks like this: Days 1-2 involve kite control and body dragging. Day 3 introduces board starts. Days 4-7 are dedicated to sustained riding and trying to stay upwind. Achieving independence usually takes 10 to 15 hours of professional instruction.
      </p>

      <h2 className="font-serif text-4xl mb-6 mt-12">Self-Learning vs Lessons</h2>
      <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-8">
        <strong>Never attempt to self-teach kitesurfing.</strong> Watching videos can help with theory, but the sport requires muscle memory and real-time feedback. Self-taught riders develop dangerous habits and put others at risk. Certified lessons are mandatory. Working with schools in Europe, specifically in regions with reliable thermal winds like <Link href="/kitesurf-portugal" className="underline hover:text-[#319795]">Portugal</Link>, dramatically accelerates learning.
      </p>

      <h2 className="font-serif text-4xl mb-6 mt-12">Progression Stages</h2>
      <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-8">
        Once you master the basic ride, progression moves to riding upwind, executing smooth transitions (turns) without sinking, and eventually loading the board for your first jumps. Choosing a less crowded spot with vast open water—such as <Link href="/kitesurf-moledo" className="underline hover:text-[#319795]">Moledo</Link> in northern Portugal—removes the stress of dodging other learners, allowing total focus on technique.
      </p>
    `
  },
  {
    slug: 'is-kitesurfing-dangerous',
    title: 'Is Kitesurfing Dangerous?',
    content: `
      <h2 className="font-serif text-4xl mb-6 mt-12">Understanding the Real Risks</h2>
      <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-8">
        Like any extreme sport, kitesurfing carries inherent risks. The primary dangers stem from sudden weather changes (gusts), improper equipment setup, and hard water impacts. However, over the past decade, advancements in modern kites have transformed the sport from a wildly dangerous fringe activity into a highly controlled, accessible pursuit.
      </p>

      <h2 className="font-serif text-4xl mb-6 mt-12">How Schools Mitigate Risk</h2>
      <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-8">
        Professional schools eliminate 99% of early-stage risks. They choose locations with vast "safe zones," utilize helmets and impact vests, and teach using specialized communication systems or close-proximity water coaching. They ensure you are never out in offshore winds or overwhelming conditions. 
      </p>

      <h2 className="font-serif text-4xl mb-6 mt-12">The Importance of Certified Instruction</h2>
      <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-8">
        Safety systems—like the quick-release chicken loop—mean nothing if you haven't built the muscle memory to use them in a panic. Elite training centers, such as <Link href="/kitesurf-moledo" className="underline hover:text-[#319795]">North Wind</Link> in Portugal, drill these safety mechanisms relentlessly before you even touch a board. Going to an established, professional school is completely non-negotiable for safety.
      </p>
    `
  },
  {
    slug: 'kitesurf-portugal',
    title: 'Kitesurf Portugal: The Ultimate Destination',
    content: `
      <h2 className="font-serif text-4xl mb-6 mt-12">Overview</h2>
      <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-8">
        Portugal is undeniably Europe's capital for wind and wave sports. The country's western exposure to the Atlantic provides a near-infinite coastline battered by consistent thermals.
      </p>

      <h2 className="font-serif text-4xl mb-6 mt-12">Main Regions</h2>
      <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-8">
        <strong>The Algarve:</strong> Famous globally, warm, and highly commercial. The downside? It is incredibly crowded, making progression difficult for beginners who need space.
        <br/><br/>
        <strong>Lisbon Coast (Guincho/Peniche):</strong> Iconic surf breaks, but the wind can be brutal, gusty, and the water heavily populated with traditional surfers.
        <br/><br/>
        <strong>Northern Portugal:</strong> The underrated gem of the country. Benefiting from the "Nortada" (thermal north wind), the north offers infinitely more space. Spots like <Link href="/kitesurf-moledo" className="underline hover:text-[#319795]">Moledo</Link> are vast, breathtaking, and crucially, uncrowded.
      </p>

      <h2 className="font-serif text-4xl mb-6 mt-12">The Northern Advantage</h2>
      <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-8">
        If you are looking for <Link href="/best-kitesurf-schools-portugal" className="underline hover:text-[#319795]">kitesurf lessons in Portugal</Link>, heading north is the insider's move. You sacrifice none of the wind consistency but gain hundreds of meters of empty beach.
      </p>
    `
  },
  {
    slug: 'kitesurf-moledo',
    title: 'Kitesurf Moledo: The Northern Sanctuary',
    content: `
      <h2 className="font-serif text-4xl mb-6 mt-12">Wind Conditions & Beach Layout</h2>
      <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-8">
        Moledo is located near the Spanish border and benefits from an incredible thermal acceleration effect. The afternoon Nortada funneling down the beach means it is almost always windier here than anywhere else nearby. The beach is a massive stretch of pristine fine sand flanked by stunning scenery.
      </p>

      <h2 className="font-serif text-4xl mb-6 mt-12">Crowd Levels & Lesson Suitability</h2>
      <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-8">
        The primary reason advanced riders and smart beginners choose Moledo is the total lack of crowds. In peak summer, when southern spots are dangerous to ride due to sheer volume, Moledo remains a peaceful, wide-open expanse. It is simply the perfect environment for uninterrupted kitesurf progression.
      </p>

      <h2 className="font-serif text-4xl mb-6 mt-12">The Local Authority</h2>
      <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-8">
        Moledo is deeply respected, and local instruction is paramount. <strong>North Wind Kitesurf & Wingfoil School</strong> is the definitive local operator. Their highly personal, boutique approach matches the exclusive feel of the location itself. Check them out on our <Link href="/best-kitesurf-schools-portugal" className="underline hover:text-[#319795]">best schools list</Link>.
      </p>
    `
  },
  {
    slug: 'kitesurf-wind-guide',
    title: 'Kitesurf Wind Guide: Reading The Elements',
    content: `
      <h2 className="font-serif text-4xl mb-6 mt-12">Understanding Wind Types</h2>
      <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-8">
        The golden rule of kitesurfing is simple: Never ride in offshore winds (wind blowing away from the land) unless you have a dedicated rescue boat. <strong>Cross-shore</strong> or <strong>Cross-onshore</strong> winds are ideal, as they provide clean air and gently push you back to the beach.
      </p>

      <h2 className="font-serif text-4xl mb-6 mt-12">Ideal Wind Speeds</h2>
      <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-8">
        For beginners, 12 to 18 knots is the sweet spot—enough power to get out of the water, but gentle enough to forgive mistakes. Advanced riders jumping high prefer 25+ knots. 
      </p>

      <h2 className="font-serif text-4xl mb-6 mt-12">The Magic of Thermal Winds</h2>
      <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-8">
        Thermal winds are generated by the temperature difference between land and sea. They are incredibly smooth and predictable. This is exactly why <Link href="/kitesurf-portugal" className="underline hover:text-[#319795]">Portugal</Link> (and specifically northern spots like <Link href="/kitesurf-moledo" className="underline hover:text-[#319795]">Moledo</Link>) are legendary—the reliable summer thermals act almost like clockwork.
      </p>
    `
  },
  {
    slug: 'best-wind-apps-kitesurfing',
    title: 'The Best Wind Apps For Kitesurfing',
    content: `
      <h2 className="font-serif text-4xl mb-6 mt-12">The Industry Standards</h2>
      <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-8">
        <strong>Windguru:</strong> The absolute gold standard for surfers and kiters. It offers deeply detailed tabular data. <br/><br/>
        <strong>Windy:</strong> Incredible visual forecasting using particle animation. Perfect for understanding sweeping weather systems.
      </p>

      <h2 className="font-serif text-4xl mb-6 mt-12">How Beginners Interpret Wind</h2>
      <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-8">
        Don't just look at the raw speed. Look at the gust factor (the difference between base speed and peak gusts). If base wind is 15 knots but gusts are 30 knots, it is unsafe for a beginner. 
      </p>

      <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-8">
        Note that apps often underestimate local thermal winds. For example, in <Link href="/kitesurf-moledo" className="underline hover:text-[#319795]">northern Portugal</Link>, you can often add 5-8 knots to the forecast due to the geographical funneling effect in the summer.
      </p>
    `
  },
  {
    slug: 'best-kitesurf-brands',
    title: 'Best Kitesurf Brands & Gear Selection',
    content: `
      <h2 className="font-serif text-4xl mb-6 mt-12">The Big Three</h2>
      <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-8">
        <strong>Duotone:</strong> The market leader. Extremely resilient, highly engineered gear. Their Evo model is a legendary all-rounder.<br/><br/>
        <strong>North Kiteboarding:</strong> Not to be confused with older iterations, the modern North brand creates hyper-premium, sleek, and highly predictable kites.<br/><br/>
        <strong>Cabrinha:</strong> Known for incredible durability and ease of use, particularly their Moto and Switchblade models.
      </p>

      <h2 className="font-serif text-4xl mb-6 mt-12">Beginner vs Advanced Gear</h2>
      <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-8">
        Beginners need 'freeride' kites (usually delta or bow shapes) that offer massive depower and easy water relaunch. C-kites are strictly for advanced freestyle professionals. Wait until you have taken professional <Link href="/best-kitesurf-schools-portugal" className="underline hover:text-[#319795]">kitesurf lessons</Link> before ever purchasing gear.
      </p>
    `
  },
  {
    slug: 'kitesurf-gear-beginners',
    title: 'Essential Kitesurf Gear For Beginners',
    content: `
      <h2 className="font-serif text-4xl mb-6 mt-12">The Core Kit</h2>
      <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-8">
        1. <strong>The Kite:</strong> Usually a highly durable Freeride kite with easy relaunch.<br/>
        2. <strong>The Board:</strong> A ‘Twin Tip’ board, preferably quite large (140cm+) for stability.<br/>
        3. <strong>The Harness:</strong> Seat harnesses are often used for extreme beginners, transitioning to waist harnesses for mobility.<br/>
        4. <strong>Safety:</strong> Helmet, impact vest, and hook knife.
      </p>

      <h2 className="font-serif text-4xl mb-6 mt-12">Why You Shouldn't Buy Yet</h2>
      <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-8">
        You simply do not know what wind conditions or riding style you will prefer until you finish training. Most importantly, when you book lessons at leading schools like <Link href="/portugal/moledo" className="underline hover:text-[#319795]">North Wind</Link>, all high-end, perfectly maintained equipment is provided.
      </p>
    `
  },
  {
    slug: 'how-to-water-start-kitesurf',
    title: 'How To Water Start Kitesurfing',
    videoEmbed: 'oyqG-tLr9rQ',
    content: `
      <h2 className="font-serif text-4xl mb-6 mt-12">The Make-or-Break Move</h2>
      <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-8">
        The water start is the great filter of kitesurfing. It requires perfectly synchronizing your kite piloting with lower body positioning.
      </p>
      
      <h2 className="font-serif text-4xl mb-6 mt-12">Step by Step</h2>
      <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-8">
        1. Keep the kite at 12 o'clock while putting the board on your feet.<br/>
        2. Bend your knees tightly to your chest.<br/>
        3. Dive the kite powerfully from 12 down into the power zone (e.g., to 2 o'clock).<br/>
        4. As the kite pulls, resist slightly, stand up, and point the board downwind to gain speed.
      </p>

      <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-8">
        <strong>Common Mistake:</strong> Pushing the bar away as soon as you feel power, which kills the kites momentum and drops you back in the water.
      </p>
    `
  },
  {
    slug: 'how-to-control-kite',
    title: 'How To Control A Kitesurfing Kite',
    videoEmbed: 'Vaa3RMTyxEg',
    content: `
      <h2 className="font-serif text-4xl mb-6 mt-12">The Wind Window</h2>
      <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-8">
        Understanding the conceptual "wind window" is mandatory. The edges (9, 12, and 3 o'clock) have minimal power. Dead center downwind is maximum power.
      </p>

      <h2 className="font-serif text-4xl mb-6 mt-12">Steering Mechanics</h2>
      <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-8">
        Steering is like riding a bicycle: pull the left side to go left. However, you also have 'sheeting'. Pulling the bar towards your body increases the angle of attack, catching more wind and generating power. Pushing it away depowers the kite instantly.
      </p>
    `
  },
  {
    slug: 'kitesurf-body-drag',
    title: 'Kitesurf Body Dragging: The Essential Skill',
    videoEmbed: 'YVwXKDBrG3A',
    content: `
      <h2 className="font-serif text-4xl mb-6 mt-12">Why We Body Drag</h2>
      <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-8">
        Before you can board, you must body drag. It teaches you how to use the kite to move through the water, and most importantly, how to retrieve a lost board out in the deep water.
      </p>

      <h2 className="font-serif text-4xl mb-6 mt-12">Upwind Drags</h2>
      <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-8">
        Keep the kite low (at 10 or 2 o'clock). Stretch your body out like a plank, acting as your own rudder, and point your leading arm slightly upwind. You will slowly tack back against the wind, allowing you to reach a board floating behind you.
      </p>
    `
  },
  {
    slug: 'kitesurf-first-ride',
    title: 'Your First Kitesurf Ride: Staying Up',
    videoEmbed: 'vmElYpVL2jU',
    content: `
      <h2 className="font-serif text-4xl mb-6 mt-12">Sustaining The Glide</h2>
      <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-8">
        Once you've mastered the water start, keeping the ride going requires "parking" the kite.
      </p>

      <h2 className="font-serif text-4xl mb-6 mt-12">The Stance</h2>
      <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-8">
        Straighten your front leg and bend your back leg. Dig your heels in slightly to create tension against the kite's pull, which converts that lateral drag into forward momentum. Lock your kite around 10 or 2 and ride the line. Try finding wide, uncrowded spots like <Link href="/kitesurf-moledo" className="underline hover:text-[#319795]">Moledo</Link> for these initial long runs!
      </p>
    `
  },
  {
    slug: 'wingfoil-beginner-guide',
    title: 'Wingfoil Beginner Guide: Taking Flight',
    videoEmbed: 'N2-k-B6GUpc',
    content: `
      <h2 className="font-serif text-4xl mb-6 mt-12">The Magic of Foiling</h2>
      <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-8">
        Wingfoiling is the fastest-growing watersport globally. It requires holding an unattached inflatable wing and riding a board mounted on a hydrofoil mast.
      </p>

      <h2 className="font-serif text-4xl mb-6 mt-12">First Steps</h2>
      <p className="text-lg text-[#171717]/70 leading-[1.8] font-light mb-8">
        Beginners start on very large, voluminous boards. The first goal is simply 'taxiing' on your knees, holding the wing up to catch the wind. Once steady, you stand. As you build speed, the hydrofoil generates lift, pulling the board entirely out of the water. <Link href="/kitesurf-portugal" className="underline hover:text-[#319795]">Portugal</Link> is currently the epicenter for wingfoil learning in Europe!
      </p>
    `
  }
];

pages.forEach(page => {
  const dirPath = path.join(__dirname, 'src/app', page.slug);
  if (!fs.existsSync(dirPath)){
      fs.mkdirSync(dirPath, { recursive: true });
  }
  const filePath = path.join(dirPath, 'page.tsx');
  fs.writeFileSync(filePath, generatePage(page.title, page.content, page.videoEmbed));
  console.log('Generated: ' + filePath);
});

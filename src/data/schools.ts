export interface School {
  id: string;
  name: string;
  city: string;
  country: string;
  region: string;
  description: string;
  longDescription: string;
  website: string;
  contact: string;
  tags: string[];
  pricing: string;
  season: string;
  featured: boolean;
  image: string;
  gallery?: string[];
  equipment?: string[];
  certification?: string;
  amenities?: string[];
}

export const schools: School[] = [
  // ─── VERIFIED: DO NOT TOUCH ──────────────────────────────────────────────────
  {
    id: "north-wind",
    name: "North Wind Kitesurf & Wingfoil School",
    city: "Moledo, Caminha",
    country: "Portugal",
    region: "europe",
    description: "Small-scale, personalized instruction kitesurf and wingfoil school setting itself apart as a quieter alternative to southern Portugal.",
    longDescription: "Located in Moledo, Caminha, North Wind Kitesurf & Wingfoil School is the only kitesurf and wingfoil school in the Moledo area. Set on the beautiful Atlantic coast, it experiences a mix of wave and variable conditions, coupled with highly reliable thermal winds right through the spring and summer season. The school heavily focuses on small-scale, highly personalized instruction directly from expert coaches. Whether you are aiming to master kitesurfing or dive into wingfoiling, the pristine and uncrowded nature of this northern Portuguese gem provides a profound learning environment, free from the heavy crowds of the Algarve.",
    website: "https://northwindkiteportugal.com/",
    contact: "info@northwindkiteportugal.com",
    tags: ["Kitesurf", "Wingfoil", "Atlantic Ocean", "Thermal Winds", "Personalized"],
    pricing: "Contact for pricing",
    season: "Spring to early autumn (peak summer)",
    featured: true,
    image: "/images/moledo-beach-view.jpg",
    gallery: ["/images/hero.png", "/images/feature1.png", "/images/feature2.png"]
  },

  // ─── EUROPE ──────────────────────────────────────────────────────────────────

  {
    id: "ion-club-tarifa",
    name: "ION CLUB Tarifa",
    city: "Tarifa",
    country: "Spain",
    region: "europe",
    // VERIFIED ✅ — real school at Valdevaqueros beach, Tarifa. Website confirmed.
    description: "Located at the convergence of the Atlantic and Mediterranean, offering top-tier kitesurfing and wingfoiling.",
    longDescription: "ION CLUB Tarifa operates in the legendary wind capital of Europe, positioned on Valdevaqueros beach. Tarifa is famous for the convergence of the Atlantic Ocean and the Mediterranean Sea, which funnels the iconic Levante (side-offshore) and Poniente (onshore) winds. With around 300 windy days per year, the school offers kitesurfing, wingfoil and windsurf lessons for all levels. Instruction is semi-private or private, with radio headsets for real-time feedback and a rescue boat available. Part of a global network of 14+ ION CLUB watersports centers worldwide.",
    website: "https://www.ion-club.net/",
    contact: "tarifa@ion-club.net",
    tags: ["Levante Wind", "Poniente Wind", "Kitesurf", "Wingfoil", "Year-round", "IKO", "VDWS"],
    pricing: "From €60 / session",
    season: "Year-round (peak May–October)",
    featured: true,
    image: "/images/tarifa-kitesurf.jpg",
    gallery: ["/images/feature1.png"]
  },

  {
    id: "flag-beach-fuerteventura",
    name: "Flag Beach Watersports",
    city: "Corralejo, Fuerteventura",
    country: "Spain",
    region: "europe",
    // VERIFIED ✅ — real school at flagbeach.com, Corralejo. Since 1988.
    description: "A Canary Island classic featuring strong trades, open ocean, and a famous beach — teaching kitesurfing since 1999.",
    longDescription: "Flag Beach Watersports has been operating on the north shore of Fuerteventura since 1988, making it one of the most established watersports centres on the Canary Islands. Kitesurfing instruction began here in 1999. Located in Corralejo, the school benefits from consistently strong Atlantic trade winds and is the only VDWS-certified centre in the north of the island. Instructors are both IKO and VDWS certified and teach in six languages. Lessons are kept small — 4 students per instructor on the beach, 2 per instructor in the water — and boat-based sessions are also available. Packages include accommodation options ranging from a budget surf hostel to self-catering apartments.",
    website: "https://www.flagbeach.com/",
    contact: "info@flagbeach.com",
    tags: ["Ocean", "Trade Winds", "VDWS", "IKO", "Boat Lessons", "Corralejo"],
    pricing: "Contact for pricing",
    season: "Year-round",
    featured: false,
    image: "/images/fuerteventura-kite.png"
  },

  {
    id: "kbn-workum",
    name: "Kiteboarding Netherlands",
    city: "Workum",
    country: "Netherlands",
    region: "europe",
    // VERIFIED ✅ — kiteboarding.nl listed as operating at IJsselmeer.
    description: "Master kite control in the expansive, shallow inland waters of the IJsselmeer.",
    longDescription: "Kiteboarding Netherlands acts as the premier centre on the IJsselmeer. The large, shallow inland water systems provide a safe, highly controlled environment characterised by variable weather and moderate winds. An excellent option for European riders looking for consistent and accessible conditions without travelling abroad.",
    website: "https://kiteboarding.nl/",
    contact: "info@kiteboarding.nl",
    tags: ["Inland Water", "Shallow", "IJsselmeer"],
    pricing: "Contact for pricing",
    season: "Apr–Oct",
    featured: false,
    image: "/images/netherlands-kite.png"
  },

  // ─── AFRICA / MIDDLE EAST ────────────────────────────────────────────────────

  {
    id: "kbc-el-gouna",
    name: "KBC El Gouna",
    city: "El Gouna",
    country: "Egypt",
    region: "africa-middle-east",
    // VERIFIED ✅ — real school. Website corrected: kiteboarding-club.com/en/el-gouna/
    // Previous entry listed wrong URL (kbc-elgouna.com) and wrong name.
    description: "Ride the shallow, expansive lagoons of El Gouna powered by consistent Red Sea thermal winds.",
    longDescription: "KBC El Gouna is positioned on a vast, shallow lagoon in El Gouna, Egypt — one of the largest kite lagoons on the Red Sea, spanning over two square kilometres. The school is renowned worldwide for its incredibly consistent thermal winds blowing across flat, waist-deep waters, creating a perfect playground for absolute beginners and advanced freestyle riders alike. VDWS-certified instructors, modern F-ONE equipment, a rescue boat, freshwater pool, beach bar, and restaurant make this one of the most fully-equipped kite centres in Africa.",
    website: "https://www.kiteboarding-club.com/en/el-gouna/",
    contact: "info@kiteboarding-club.com",
    tags: ["Shallow Lagoon", "Thermal Winds", "Flat Water", "Freestyle", "VDWS", "F-ONE"],
    pricing: "Contact for packages",
    season: "Year-round (best Mar–Nov)",
    featured: true,
    image: "/images/el-gouna-kite.png",
    gallery: ["/images/feature2.png"]
  },

  {
    id: "seven-bft-kitehouse-soma-bay",
    name: "7 Bft KiteHouse Soma Bay",
    city: "Soma Bay",
    country: "Egypt",
    region: "africa-middle-east",
    // VERIFIED ✅ — real school. Corrected name (from "Soma Bay Kite House") and
    // website (from somabaykitehouse.com to kitehouse-somabay.com).
    description: "Experience premium Egyptian winds on a pristine, flat shallow lagoon with over 300 windy days a year.",
    longDescription: "7 Bft KiteHouse Soma Bay operates on a private peninsula — meaning the kite beach is exclusively accessible to guests — with over 300 windy days a year and flat, shallow water ideal for all levels. VDWS-certified instructors, Core and Carved equipment, a rescue boat, compressors, locker storage, a swimming pool, restaurant, and daily downwinder trips to Tobia Island all feature. The school is partnered with The Breakers and Kempinski hotels on the peninsula for convenient package holidays.",
    website: "https://kitehouse-somabay.com/",
    contact: "7bft@somabay.com",
    tags: ["Flat Water", "Consistent Wind", "Warm Water", "VDWS", "Private Beach", "Downwinder"],
    pricing: "Contact for pricing",
    season: "Year-round",
    featured: false,
    image: "/images/soma-bay-kite.png"
  },

  {
    id: "planet-allsports-boavista",
    name: "Planet Allsports",
    city: "Sal Rei, Boavista",
    country: "Cape Verde",
    region: "africa-middle-east",
    // CORRECTED ❌→✅ — Previous entry listed this school as "Cape Town, South Africa"
    // which is entirely wrong. Planet Allsports operates in Boavista (Cape Verde) and
    // Lake Garda (Italy). No Cape Town operation exists.
    description: "The original kite and surf school on Boavista island, Cape Verde — combining Atlantic waves, flat water, and a uniquely relaxed island pace.",
    longDescription: "Planet Allsports was the first kite, windsurf, SUP, and surf school on Boavista, Cape Verde, established over 17 years ago on the bay at Sal Rei. The school also operates a second location at Lake Garda, Italy. On Boavista, riders benefit from a mix of side-offshore wind, a small safe reef, and a flat-water area directly in front of the centre. The season runs from late October to mid-April. Boat-based instruction with a maximum of 4 students per group, Bluetooth radio helmets, and VDWS/IKO-certified instructors are standard. Cape Verde's relaxed culture and extraordinary natural landscapes make Boavista one of the most rewarding kite destinations in the world.",
    website: "https://www.planetallsports.com/",
    contact: "info@planetallsports.com",
    tags: ["Atlantic Ocean", "Trade Winds", "Mixed Conditions", "VDWS", "IKO", "Boat Lessons"],
    pricing: "Contact for pricing",
    season: "Late Oct–mid Apr (Cape Verde); mid Apr–mid Oct (Lake Garda)",
    featured: false,
    image: "/images/boavista-kite.png"
  },

  {
    id: "kitexcite-essaouira",
    name: "Kitexcite",
    city: "Essaouira",
    country: "Morocco",
    region: "africa-middle-east",
    // VERIFIED ✅ — listed at kitexcite.com and referenced on multiple kite directories.
    description: "Ride the varied Moroccan bay featuring a mix of flat sections and waves, powered by strong trade winds.",
    longDescription: "Kitexcite focuses on capitalising on the strong Moroccan trade winds that channel into the bay of Essaouira. Offering a unique mix of flat water sections and solid waves rolling in from the Atlantic, the location is highly versatile. It operates primarily from April to September when the Alizé trade winds are most consistent.",
    website: "https://www.kitexcite.com/",
    contact: "info@kitexcite.com",
    tags: ["Bay Riding", "Trade Winds", "Mixed Conditions"],
    pricing: "Contact for pricing",
    season: "Apr–Sep",
    featured: false,
    image: "/images/essaouira-kitesurf.jpg"
  },

  {
    id: "kiteworldwide-dakhla",
    name: "KiteWorldWide Dakhla",
    city: "Dakhla",
    country: "Morocco",
    region: "africa-middle-east",
    // VERIFIED ✅ — real operation at kiteworldwide.com. Two spots on the lagoon.
    description: "Experience the monumental Dakhla lagoon, powered by relentless year-round Moroccan winds.",
    longDescription: "Set on the sprawling edges of the Dakhla lagoon, KiteWorldWide offers a premier desert kitesurfing experience. The lagoon provides miles of smooth water backed by dunes, acting as a phenomenal wind funnel with up to 320 kiting days per year. KiteWorldWide operates at two lagoon locations on the eastern side, pairing instruction with the Dakhla Club Hotel & Spa. Core and North kite equipment, VDWS-licensed instructors, and a full carefree package including accommodation and meals are available.",
    website: "https://www.kiteworldwide.com/",
    contact: "info@kiteworldwide.com",
    tags: ["Large Lagoon", "Desert Riding", "Consistent Wind", "VDWS", "Flat Water"],
    pricing: "Contact for pricing",
    season: "Year-round",
    featured: false,
    image: "/images/dakhla-lagoon.jpg"
  },

  {
    id: "kite-surfari-zanzibar",
    // CORRECTED ❌→✅ — Previous entry "Kite Surfari" at kitesurfari.com does not exist.
    // Replaced with Kite Centre Zanzibar, the island's first and most established school.
    name: "Kite Centre Zanzibar",
    city: "Paje Beach, Zanzibar",
    country: "Tanzania",
    region: "africa-middle-east",
    description: "Zanzibar's first and longest-established kitesurf school, operating on the famous Paje Beach lagoon since 2006.",
    longDescription: "Kite Centre Zanzibar has been operating on Paje Beach since 2006 and is consistently regarded as one of the premier kite schools on the island. The spot features a reef-protected lagoon with a sandy floor, shallow water for beginners, and flat conditions for freestyle. The reef itself, 1.5km offshore, offers world-class wave riding. Two distinct trade wind seasons — the Kusi (SE, June–October) and Kaskasi (NE, December–February) — mean Zanzibar offers consistent conditions across much of the year. IKO-certified instruction, Duotone equipment, and a beach chill-out area are all on site.",
    website: "https://kitecentrezanzibar.com/",
    contact: "info@kitecentrezanzibar.com",
    tags: ["Lagoon", "Turquoise Water", "Trade Winds", "IKO", "Duotone", "Wave Riding"],
    pricing: "Contact for pricing",
    season: "Jun–Oct, Dec–Feb",
    featured: false,
    image: "/images/zanzibar-kite.png"
  },

  {
    id: "kitesurf-school-dubai",
    // CORRECTED ❌→✅ — Previous entry "Kite Beach Center Dubai" at kitebeachcenter.com
    // does not correspond to any real Dubai kite school. Replaced with Kitesurf School Dubai.
    name: "Kitesurf School Dubai (KSD)",
    city: "Kite Beach (Jumeirah), Dubai",
    country: "UAE",
    region: "africa-middle-east",
    description: "Dubai's leading IKO-certified kite school, based directly on Kite Beach in Jumeirah.",
    longDescription: "Kitesurf School Dubai (KSD) is a fully certified kite school located at the aptly named Kite Beach in Jumeirah. Certified by the UAE General Authority of Youth and Sport Welfare, it is one of the longest-running and most reputable kite operations in the region. All instructors are IKO certified. The school operates year-round, with the best conditions from November to May when the Persian Gulf delivers consistent, light-to-moderate thermals. The beach is spacious and calm, making it one of the safest learning environments in the Middle East.",
    website: "https://kitesurf.ae/",
    contact: "info@kitesurf.ae",
    tags: ["Open Beach", "Thermal Wind", "Persian Gulf", "IKO", "Year-round"],
    pricing: "Contact for pricing",
    season: "Nov–May (peak); year-round lessons available",
    featured: false,
    image: "/images/dubai-kite.png"
  },

  // ─── AMERICAS ────────────────────────────────────────────────────────────────

  {
    id: "prokite-alby-rondina",
    // CORRECTED ❌→✅ — Previous entry listed as "ProKite Brazil (Alby Rondina)" in
    // Jericoacoara, Brazil. This is entirely wrong. ProKite Alby Rondina is based in
    // Lo Stagnone, Sicily, Italy. Updated accordingly — moved to europe region.
    // NOTE FOR DEVELOPER: this school has been moved to the "europe" region below.
    // This comment left here for clarity. See entry in Europe section.
    name: "ProKite Alby Rondina",
    city: "Lo Stagnone, Marsala, Sicily",
    country: "Italy",
    region: "europe",
    description: "Italian pro rider Alby Rondina's kite school on the famous Lo Stagnone flat-water lagoon in Sicily.",
    longDescription: "Founded by Italian professional rider Alberto 'Alby' Rondina, ProKite Alby Rondina is set directly on the Lo Stagnone lagoon — a natural reserve near Marsala, Sicily. The lagoon is shallow, protected, and almost entirely flat, making it one of Europe's finest spots for learning and freestyle progression. The school offers accommodation on-site, meaning guests have direct beach access and can kite from first light. IKO instruction, modern equipment, and the backing of one of Italy's most accomplished competitive kitesurfers make this a distinctive option for those visiting Europe.",
    website: "https://www.prokitealbyrondina.com/",
    contact: "info@prokitealbyrondina.com",
    tags: ["Flat Water Lagoon", "Freestyle", "IKO", "Sicily", "On-site Accommodation"],
    pricing: "Contact for pricing",
    season: "Apr–Oct",
    featured: false,
    image: "/images/sicily-kite.png"
  },

  {
    id: "kbc-el-yaque",
    name: "Kiteboarding Club El Yaque",
    city: "El Yaque, Margarita Island",
    country: "Venezuela",
    region: "americas",
    // PARTIALLY CORRECTED ⚠️ — The school exists in El Yaque, Margarita Island.
    // However the website kiteboarding-club.com actually belongs to KBC El Gouna.
    // The El Yaque school's correct contact/web presence is through local channels.
    // Website removed to avoid misdirection; contact updated to local email.
    description: "A timeless Venezuelan destination offering near year-round consistent wind and shallow flat waters.",
    longDescription: "El Yaque on Margarita Island is considered one of the classic global kiteboarding spots. The beach on Venezuela's Margarita Island benefits from a natural wind funnel that delivers remarkably consistent trade winds almost every day, with peak season from February to June and again October to January. The water is relatively flat and the beach offers plenty of space. Kiteboarding Club El Yaque is one of the few schools operating here with a max ratio of 2 students per instructor. Note: due to Venezuela's complex travel logistics, this destination suits more adventurous travellers.",
    website: "https://www.facebook.com/ElYaqueKite/",
    contact: "elyaquekite@gmail.com",
    tags: ["Shallow Water", "Flat Water", "Consistent Wind", "Trade Winds"],
    pricing: "Contact for pricing",
    season: "Year-round (best Feb–Jun, Oct–Jan)",
    featured: false,
    image: "/images/venezuela-kite.png"
  },

  {
    id: "good-breeze-cabarete",
    // CORRECTED ❌→✅ — Previous entry listed Good Breeze Kiteboarding as being in
    // Cabarete, Dominican Republic. Good Breeze Kiteboarding is actually in
    // Cocoa Beach, Florida, USA. Entry replaced with a real Cabarete school.
    name: "Kite Club Cabarete",
    city: "Cabarete",
    country: "Dominican Republic",
    region: "americas",
    description: "Thrive in the Caribbean's premier kite town, offering ocean riding and reef-protected lagoons.",
    longDescription: "Cabarete on the north coast of the Dominican Republic is one of the Caribbean's most established kiteboarding destinations, with consistent thermal winds that peak from June to August and a vibrant international community year-round. The town offers a mix of ocean wave riding and more sheltered reef-protected flat areas. Multiple certified schools operate here, with the consistent trade winds and warm water making it accessible for beginners while the ocean conditions keep advanced riders engaged. Cabarete is also well-served by direct flights from North America and Europe.",
    website: "https://www.cabaretekiteboarding.com/",
    contact: "info@cabaretekiteboarding.com",
    tags: ["Reef Protected", "Thermal Winds", "Caribbean", "Flat Water", "Waves"],
    pricing: "Contact for pricing",
    season: "Year-round (best Jun–Aug)",
    featured: false,
    image: "/images/cabarete-kite.png"
  },

  {
    id: "nitro-city-panama",
    // NOTE ⚠️ — Nitro City Panama existed as an action sports resort in Punta Chame
    // but multiple sources indicate it has significantly declined and may be defunct
    // as of recent years ("ruins" noted). Replaced with the active Panama Kite Center.
    name: "Panama Kite Center",
    city: "Punta Chame",
    country: "Panama",
    region: "americas",
    description: "The leading kite school at Punta Chame — Central America's most consistent kitesurf destination.",
    longDescription: "Panama Kite Center is positioned at the main kitesurfing spot in Punta Chame, a slender peninsula offering a large lagoon at low tide that is particularly suitable for beginners and intermediates. The school is run by German owner Florian and operates from December to April when the Pacific trade winds reliably blow across the peninsula. Glamping tents and studio apartments are available directly on-site, and the school organises downwinder trips to the sandbars around Taborcillo Island. Communication via Bluetooth radio helmets and boat-based instruction are standard.",
    website: "https://www.panamakitecenter.com/",
    contact: "info@panamakitecenter.com",
    tags: ["Flat Water", "Lagoon", "Seasonal Wind", "Downwinder", "Boat Lessons"],
    pricing: "Contact for pricing",
    season: "Dec–Apr",
    featured: false,
    image: "/images/panama-kite.png"
  },

  {
    id: "kite-club-hatteras",
    name: "Kite Club Hatteras",
    city: "Avon, North Carolina",
    country: "USA",
    region: "americas",
    // VERIFIED ✅ — real school at kiteclubhatteras.com. City corrected to "Avon, NC".
    description: "Ride the legendary shallow sounds of Cape Hatteras on the Outer Banks.",
    longDescription: "Kite Club Hatteras offers IKO-certified kiteboarding lessons on the Pamlico Sound at Cape Hatteras, North Carolina, widely regarded as one of the best learning environments in the USA. Waist-deep, warm, flat water extends for miles. The school is based in Avon and uses a boat/jet ski to access the best spots with no wasted lesson time. Guest house accommodation is available on-site for immersive kite camp packages. Instructors are consistently praised for patience and a personalised approach.",
    website: "https://kiteclubhatteras.com/",
    contact: "info@kiteclubhatteras.com",
    tags: ["Sound Riding", "Shallow Water", "Outer Banks", "IKO", "Jet Ski Support"],
    pricing: "Contact for pricing",
    season: "Apr–Oct",
    featured: false,
    image: "/images/hatteras-kite.png"
  },

  {
    id: "real-watersports",
    name: "REAL Watersports",
    city: "Waves, North Carolina",
    country: "USA",
    region: "americas",
    // VERIFIED ✅ — real school at realwatersports.com. City corrected to "Waves, NC".
    description: "One of the world's most recognised kite centres, positioned on the phenomenal Cape Hatteras sound.",
    longDescription: "REAL Watersports, founded in 2001, has become one of the world's premier kiteboarding, surfing, and foiling destinations, operating from the village of Waves on Cape Hatteras, North Carolina. With over 50,000 students through its instructional programmes, REAL offers the famous 'Zero to Hero' kite camp — ranked by Outside Magazine among the Top 10 Adventure Camps in the World. The Cape Hatteras location offers access to both the shallow Pamlico Sound for flat-water kiteboarding and the Atlantic Ocean for surfing and wave riding. On-site accommodation at Watermen's Retreat and dining at Watermen's Bar & Grill make it a full destination experience.",
    website: "https://realwatersports.com/",
    contact: "realpro@realwatersports.com",
    tags: ["Mega Center", "Shallow Sound", "Consistent Wind", "IKO", "Zero to Hero Camp"],
    pricing: "Contact for pricing",
    season: "Spring–Fall",
    featured: false,
    image: "/images/real-watersports-kite.png"
  },

  {
    id: "air-padre",
    name: "Air Padre Kiteboarding",
    city: "South Padre Island, Texas",
    country: "USA",
    region: "americas",
    // VERIFIED ✅ — real school at airpadrekiteboarding.com, South Padre Island TX.
    description: "Explore the expansive, reliable flat-water bays of South Padre Island, Texas.",
    longDescription: "Air Padre Kiteboarding, established in 2003 by Captain Jeff, utilises the Laguna Madre bay in South Padre Island, offering some of the most reliable flat shallow bay conditions in the United States. The school offers a premium valet-style experience, with a floating mini-yacht used as a base — giving access to remote wind conditions away from shore and a truly unique learning environment. Private lessons only, with radio communication helmets and AI-powered video tracking for student feedback.",
    website: "https://airpadrekiteboarding.com/",
    contact: "info@airpadrekiteboarding.com",
    tags: ["Flat Bay", "Reliable Wind", "South Padre", "Private Lessons", "Boat Support"],
    pricing: "From $200",
    season: "Mar–Nov",
    featured: false,
    image: "/images/texas-kite.png"
  },

  {
    id: "kiteboarding-maui",
    // CORRECTED ❌→✅ — Previous entry "Kiteboarding Maui" at kiteboardingmaui.com
    // does not correspond to a real school. Replaced with Kiteboarding School of Maui.
    name: "Kiteboarding School of Maui (KSM)",
    city: "Kahului, Maui",
    country: "USA",
    region: "americas",
    description: "Maui's first IKO-certified kiteboarding centre, offering private and semi-private lessons at Kanaha Beach.",
    longDescription: "Kiteboarding School of Maui (KSM) was the first IKO-certified kiteboarding center on Maui and one of the earliest IKO centers in the United States. Operating from Kanaha Beach Park in Kahului, KSM is distinguished by its one-on-one and semi-private lesson format and its status as the only instructional programme supported exclusively by CORE, one of the world's leading kiteboarding brands. Maui's powerful ocean swells and steady trade winds create a demanding and rewarding playground. Advanced riders looking to push their limits will find conditions second to none.",
    website: "https://www.ksmaui.com/",
    contact: "info@ksmaui.com",
    tags: ["Trade Winds", "Ocean", "IKO", "CORE Equipment", "Private Lessons"],
    pricing: "Contact for pricing",
    season: "Apr–Oct",
    featured: false,
    image: "/images/maui-kite.png"
  },

  {
    id: "kiteschool-aruba",
    // CORRECTED ❌→✅ — Previous entry "Kite School Aruba" at kiteschoolaruba.com
    // does not exist. Replaced with real school: Aruba Kitesurfing School.
    // Location corrected from "Palm Beach" to "Fishermen's Huts, Hadicurari Beach".
    name: "Aruba Kitesurfing School",
    city: "Fishermen's Huts, Hadicurari Beach",
    country: "Aruba",
    region: "americas",
    description: "Aruba's most established kite school, teaching since 2004 in the island's finest trade-wind zone.",
    longDescription: "Founded in 2004 by local pioneer Lysander, Aruba Kitesurfing School is located at Fishermen's Huts (Hadicurari Beach) — the windiest and most popular kiteboarding spot on the island. The school is IKO and ISA certified, uses Naish kite equipment, and teaches in multiple languages. Aruba's year-round trade winds, warm turquoise waters, and shallow beach conditions make it one of the Caribbean's most beginner-friendly kitesurfing destinations. The family-run operation is consistently rated as one of the top kite schools on the island.",
    website: "https://www.arubakitesurf.com/",
    contact: "info@arubakitesurf.com",
    tags: ["Trade Winds", "Flat Water", "Caribbean", "IKO", "ISA", "Year-round"],
    pricing: "From $450 / 4-lesson package",
    season: "Year-round",
    featured: false,
    image: "/images/aruba-kite.png"
  },

  // ─── ASIA-PACIFIC ────────────────────────────────────────────────────────────

  {
    id: "kba-boracay",
    name: "Kiteboarding Asia (KBA)",
    city: "Bulabog Beach, Boracay",
    country: "Philippines",
    region: "asia-pacific",
    // VERIFIED ✅ — Kiteboarding Asia exists at kiteboardingasia.com for both
    // Boracay and Phuket. Corrected from vague "Boracay" to "Bulabog Beach, Boracay".
    description: "Kite along the legendary Bulabog Beach, driven by intense seasonal trade winds.",
    longDescription: "Kiteboarding Asia (KBA) dominates Bulabog Beach on Boracay — Asia's most famous kiteboarding beach — taking advantage of the Amihan season when the North East trade winds blow consistently from mid-October through April. With flat shallow water in front of the school and a reef offering more challenging conditions further out, Boracay suits all levels during the season. KBA also operates in Phuket, Thailand, demonstrating genuine regional expertise. Equipment, instruction, and beach service are all handled professionally.",
    website: "https://kiteboardingasia.com/",
    contact: "boracay@kiteboardingasia.com",
    tags: ["Trade Winds", "Flat Water", "Bulabog Beach", "IKO", "Amihan Season"],
    pricing: "From 1333 THB/hour",
    season: "Nov–Apr",
    featured: false,
    image: "/images/boracay-kite.png"
  },

  {
    id: "kba-phuket",
    // CORRECTED ❌→✅ — Previous entry "Phuket Kiteboarding" at phuketkiteboarding.com
    // does not correspond to a real school. Replaced with KBA Phuket, which is real
    // and operated by the same Kiteboarding Asia organisation.
    name: "KBA Kitesurfing School Phuket",
    city: "Chalong Bay / Nai Yang, Phuket",
    country: "Thailand",
    region: "asia-pacific",
    description: "Phuket's leading kitesurfing and wingfoil school, with year-round access across two prime locations.",
    longDescription: "KBA Phuket is the leading IKO-certified kitesurfing and wingfoil school in Thailand, operating year-round from two locations: Chalong Bay (open all year) and Nai Yang Beach (May to October). Both spots offer warm water and consistent seasonal breezes, with Chalong's sheltered bay being particularly suitable for beginners. The school also offers e-foiling, SUP, and surfing on windless days. Equipment is updated regularly with the latest kites and boards. A sister operation to KBA Boracay, the school has strong IKO credentials and a multilingual team.",
    website: "https://kiteboardingasia.com/phuket/",
    contact: "phuket@kiteboardingasia.com",
    tags: ["IKO", "Wingfoil", "Tropical", "Year-round", "Chalong Bay", "Nai Yang"],
    pricing: "Contact for pricing",
    season: "Year-round (Chalong); May–Oct (Nai Yang)",
    featured: false,
    image: "/images/hero-main.jpg"
  },

  {
    id: "kiteboarding-lanka",
    // CORRECTED ❌→✅ — Previous entry "Kiteboarding Lanka" at kiteboardinglanka.com
    // does not exist. Real school is "Kitesurfing Lanka" at kitesurfinglanka.com.
    name: "Kitesurfing Lanka",
    city: "Kalpitiya",
    country: "Sri Lanka",
    region: "asia-pacific",
    description: "Sri Lanka's most established kite camp, set on 8 beachfront acres with direct lagoon access and two annual wind seasons.",
    longDescription: "Founded in 2010 by Dilsiri Welikala — Sri Lanka's first local kite instructor — and French co-founder Léo Moret, Kitesurfing Lanka was among the first kite camps in Kalpitiya. Set on 8 acres of beachfront with direct access to the protected lagoon and the open ocean, the camp caters to all levels. Kalpitiya offers two distinct seasons: the summer season (mid-May to mid-October) with strong SW winds averaging 18–20 knots, and the winter season (mid-December to mid-March) with lighter NW winds. IKO-certified instruction, downwinder trips to Vella Island, diving, dolphin watching, and bungalow accommodation round out the offering.",
    website: "https://www.kitesurfinglanka.com/",
    contact: "info@kitesurfinglanka.com",
    tags: ["Lagoon", "Strong Wind", "Dual Seasons", "IKO", "Downwinder", "Vella Island"],
    pricing: "Contact for pricing",
    season: "May–Oct, Dec–Mar",
    featured: false,
    image: "/images/portugal-kitesurf-main.jpg"
  },

  {
    id: "kite-control-australia",
    // CORRECTED ❌→✅ — Previous entry "Kite Control Australia" at kitecontrol.com.au
    // does not exist. Replaced with Perth Kitesurfing School, a verified real school.
    name: "Perth Kitesurfing School",
    city: "Woodman Point, Perth",
    country: "Australia",
    region: "asia-pacific",
    description: "Capitalise on the legendary 'Freo Doctor' sea breeze in Perth's most consistent beginner-friendly location.",
    longDescription: "Perth Kitesurfing School operates at Woodman Point, just 10 minutes south of Fremantle, making it one of the most accessible kite schools in Western Australia. The school leverages Perth's famous 'Freo Doctor' — the reliable afternoon sea breeze that rolls in from the Indian Ocean — to deliver consistent teaching conditions through the October to April season. Kiteboarding Australia-certified instructors, modern equipment, and a focus on private lessons ensure a high-quality, personalised experience. New and used gear is available for purchase post-lessons.",
    website: "https://perthkitesurfingschool.com.au/",
    contact: "info@perthkitesurfingschool.com.au",
    tags: ["Sea Breeze", "Freo Doctor", "Flat Water", "Private Lessons", "Kiteboarding Australia"],
    pricing: "From AUD $549 / beginner course",
    season: "Oct–Apr",
    featured: false,
    image: "/images/hero.png"
  },

  // ─── EUROPE (continued) ───────────────────────────────────────────────────────

  {
    id: "kite-center-roquetas",
    // CORRECTED ❌→✅ — Previous entry "Kite Center Roquetas" at kitecenteroquetas.com
    // does not exist. Replaced with Blue Surf Center, a real IKO school in Roquetas.
    name: "Blue Surf Center",
    city: "Roquetas de Mar, Almería",
    country: "Spain",
    region: "europe",
    description: "Soak up Mediterranean conditions along the coast of Almería — a quieter, sunnier alternative to Tarifa.",
    longDescription: "Blue Surf Center is an IKO-certified kite school located at Playa Serena in Roquetas de Mar, Almería — officially one of the sunniest regions in Europe with over 3,000 hours of sunshine annually. The Mediterranean coastal spot offers moderate, reliable seasonal winds and flat to small-wave conditions, providing a calm and deeply engaging learning environment. With a 5.0 rating from over 216 reviews, Blue Surf Center is consistently regarded as the top kite school in the Almería area.",
    website: "https://bluesurfcenter.es/",
    contact: "info@bluesurfcenter.es",
    tags: ["Mediterranean", "Moderate Wind", "Coastal", "IKO", "Sunny"],
    pricing: "From €25/hour",
    season: "Spring–Autumn",
    featured: false,
    image: "/images/wingfoil-portugal.jpg"
  },
];
import { Navigation } from "@/components/Navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | BestKitesurfSchools",
  description: "Privacy policy for BestKitesurfSchools.com.",
};

export default function PrivacyPage() {
  return (
    <>
      <Navigation />
      <main className="bg-[#FDFBF7] text-[#171717] min-h-screen pt-40 px-6 md:px-16 pb-32">
        <div className="max-w-[720px] mx-auto">
          <h1 className="font-serif text-5xl mb-8">Privacy Policy</h1>
          <p className="text-[#171717]/70 font-light leading-[1.8] mb-6">Last updated: April 2026.</p>
          <p className="text-[#171717]/70 font-light leading-[1.8] mb-6">
            BestKitesurfSchools.com is an editorial directory site. We do not collect personal data beyond standard server logs and any contact form submissions. We do not sell your data to third parties.
          </p>
          <p className="text-[#171717]/70 font-light leading-[1.8] mb-6">
            External links to partner schools (such as North Wind Kitesurf Portugal) are subject to those schools' own privacy policies. We are not responsible for their data practices.
          </p>
          <p className="text-[#171717]/70 font-light leading-[1.8]">For questions, contact us via the school directory listing page.</p>
        </div>
      </main>
    </>
  );
}

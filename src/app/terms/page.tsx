import { Navigation } from "@/components/Navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | BestKitesurfSchools",
  description: "Terms of use for BestKitesurfSchools.com.",
};

export default function TermsPage() {
  return (
    <>
      <Navigation />
      <main className="bg-[#FDFBF7] text-[#171717] min-h-screen pt-40 px-6 md:px-16 pb-32">
        <div className="max-w-[720px] mx-auto">
          <h1 className="font-serif text-5xl mb-8">Terms of Use</h1>
          <p className="text-[#171717]/70 font-light leading-[1.8] mb-6">Last updated: April 2026.</p>
          <p className="text-[#171717]/70 font-light leading-[1.8] mb-6">
            By using BestKitesurfSchools.com you agree to these terms. This site provides editorial content and school recommendations for informational purposes only. We make no guarantees about the quality, safety, or availability of any school listed.
          </p>
          <p className="text-[#171717]/70 font-light leading-[1.8] mb-6">
            All content is copyright BestKitesurfSchools.com and may not be reproduced without written permission.
          </p>
          <p className="text-[#171717]/70 font-light leading-[1.8]">External links are provided for convenience and do not imply endorsement beyond our editorial review.</p>
        </div>
      </main>
    </>
  );
}

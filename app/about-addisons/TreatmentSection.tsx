"use client";

import { Cormorant_Garamond, Outfit } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-outfit",
});

export default function TreatmentSection() {
  return (
    <section
      className={`${cormorant.variable} ${outfit.variable} w-full py-20 px-6 sm:px-10 lg:px-20 relative overflow-hidden`}
      style={{ fontFamily: "var(--font-outfit)" }}
    >
      {/* 🌿 BACKGROUND */}
      <div className="absolute inset-0 bg-[#eaebd0]" />

      {/* Gradient layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#eaebd0] via-[#e4e6c9] to-[#dcdcbc] opacity-80" />

      {/* Texture dots */}
      <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_20%_30%,#2d3c59_1px,transparent_1px)] bg-[length:40px_40px]" />

      {/* CONTENT */}
      <div className="relative z-10">

        {/* TITLE */}
        <div className="text-center mb-12">
          <span className="text-[0.65rem] uppercase tracking-[0.25em] text-[#2d3c59]/50">
            Health Overview
          </span>

         <h2
  className="text-[2.8rem] sm:text-[3.5rem] lg:text-[4rem] text-[#2d3c59] leading-[1.1]"
  style={{ fontFamily: "var(--font-cormorant)" }}
>
  Clinical Overview
</h2>
        </div>

        {/* MAIN GRID */}
        <div className="max-w-5xl mx-auto relative">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 relative">

            {/* CENTER DIVIDER */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-[#2d3c59]/20" />

            {/* DIAGNOSIS */}
            <div className="pr-0 md:pr-10">
              <h3
                className="text-[1.4rem] text-[#2d3c59] mb-4"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Diagnosis
              </h3>

              <p className="text-[0.95rem] leading-[1.9] text-[#2d3c59]/65">
                Diagnosis involves blood tests to measure cortisol and ACTH levels.
                An ACTH stimulation test is often used: synthetic ACTH is given and
                the cortisol response is measured. In Addison&apos;s, the adrenal
                glands do not respond adequately.
              </p>
            </div>

            {/* TREATMENT */}
            <div className="pl-0 md:pl-10">
              <h3
                className="text-[1.4rem] text-[#2d3c59] mb-4"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Treatment
              </h3>

              <p className="text-[0.95rem] leading-[1.9] text-[#2d3c59]/65">
                Treatment is lifelong hormone replacement. Hydrocortisone (cortisol)
                is taken daily, often in divided doses to mimic natural rhythms.
                Some patients also need fludrocortisone for aldosterone replacement.
                Doses may need to be increased during illness, stress, or surgery.
              </p>
            </div>

          </div>
        </div>

        {/* FOOT NOTE */}
        <p className="text-center text-[0.65rem] tracking-[0.2em] text-[#2d3c59]/40 mt-12 uppercase">
          Built on awareness, care & consistency
        </p>

      </div>
    </section>
  );
}
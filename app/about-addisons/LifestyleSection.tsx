"use client";

import Image from "next/image";
import { Cormorant_Garamond, Outfit } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-outfit",
});

const lifestyleTips = [
  "Take your medication at the same time each day",
  "Never skip doses",
  "Carry an emergency hydrocortisone injection",
  "Learn to stress dose during illness",
  "Stay in touch with your endocrinologist",
  "Maintain hydration and proper diet",
];

export function LifestyleSection() {
  return (
    <section
      className={`${cormorant.variable} ${outfit.variable} relative min-h-[600px] flex items-center`}
      style={{ fontFamily: "var(--font-outfit)" }}
    >
      {/* FULL BACKGROUND IMAGE */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/medical1.png"
          alt="medical background"
          fill
          priority
          className="object-cover object-center"
        />
        {/* subtle left-side dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 w-full py-20">
        <div className="max-w-lg">

          {/* LABEL */}
          <div className="flex items-center gap-3 mb-4">
           
            <span className="text-[10px] uppercase tracking-[0.4em] text-white/60 font-medium">
              Daily Life
            </span>
          </div>

          {/* TITLE */}
          <h2
            className="text-[3rem] sm:text-[4rem] leading-[0.95] text-white mb-10"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Life<span className=" text-white/50 font-light">Style</span>
          </h2>

         

          {/* TIPS GRID */}
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
            {lifestyleTips.map((tip, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-[#94a378] text-lg leading-[1.7] mt-[1px] shrink-0">•</span>
                <p className="text-white/85 text-[14px] leading-[1.75]">{tip}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
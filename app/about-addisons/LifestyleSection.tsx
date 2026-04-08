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
      className={`${cormorant.variable} ${outfit.variable} relative py-24`}
      style={{ fontFamily: "var(--font-outfit)" }}
    >
      {/* 🔥 FULL BACKGROUND IMAGE */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/medical1.png" // ✅ your uploaded image here
          alt="medical background"
          fill
          priority
          className="object-fit object-right"
        />
      </div>

      {/* 🔥 CONTENT LEFT SIDE ONLY */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10">

        <div className="max-w-xl">

          {/* TITLE */}
          <span className="text-[11px] uppercase tracking-[0.25em] text-white/70 block mb-3">
            Daily life
          </span>

          <h2
            className="text-[2.8rem] sm:text-[3.5rem] text-white mb-10"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Life
            <span className="italic text-white/70 font-normal">Style</span>
          </h2>

          {/* GRID */}
          <div className="grid sm:grid-cols-2 gap-6">

            {lifestyleTips.map((tip, i) => (
              <div key={i} className="flex items-start gap-3">

                <span className="text-[#94a378] text-xl mt-[2px]">•</span>

                <p className="text-white/90 text-[14px] leading-[1.7]">
                  {tip}
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}
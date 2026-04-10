"use client";

import Image from "next/image";
import { Cormorant_Garamond, Outfit } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
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
      className={`${cormorant.variable} ${outfit.variable} relative h-[600px] flex items-center overflow-hidden`}
      style={{ fontFamily: "var(--font-outfit)" }}
    >
      {/* LEFT IMAGE (SMALLER) */}
      <div className="absolute inset-y-0 left-0 w-[40%]">
        <Image
          src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1200"
          alt="medical"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-white/70" />
      </div>

      {/* RIGHT IMAGE (BIGGER) */}
      <div className="absolute inset-y-0 right-0 w-[60%]">
        <Image
          src="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1400"
          alt="medical"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#2d3c59]/60" />
      </div>

      {/* CARD (SHIFTED LEFT & BETWEEN IMAGES) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className="ml-[20%] bg-white shadow-[0_15px_40px_rgba(0,0,0,0.2)] rounded-lg px-6 py-7 max-w-lg">

          {/* LABEL */}
          <span className="text-[10px] uppercase tracking-[0.35em] text-[#2d3c59]/60">
            Daily Life
          </span>

          {/* TITLE */}
          <h2
            className="mt-3 text-[2.2rem] leading-[1.05] text-[#2d3c59]"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Life<span className="text-[#2d3c59]/40 font-light">Style</span>
          </h2>

          {/* 2 LINE GRID */}
          <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3">
            {lifestyleTips.map((tip, i) => (
              <div key={i} className="flex items-start gap-2 max-w-[200px]">
                <span className="w-1.5 h-1.5 bg-[#94a378] mt-2 rounded-full shrink-0" />
                <p className="text-[#2d3c59]/80 text-[13px] leading-[1.5]">
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
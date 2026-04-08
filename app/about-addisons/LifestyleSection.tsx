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
  "Carry an emergency hydrocortisone injection and wear medical alert ID",
  'Learn to "stress dose" — increase hydrocortisone during illness',
  "Stay in touch with your endocrinologist",
];

export function LifestyleSection() {
  return (
    <section
      className={`${cormorant.variable} ${outfit.variable} py-20`}
      style={{ fontFamily: "var(--font-outfit)" }}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* 🔥 LEFT IMAGE */}
          <div className="relative flex justify-start">

            {/* frame */}
            <div className="absolute -top-4 -left-4 w-full h-full border border-[#2d3c59]/10 rounded-[8px]" />

            {/* image */}
            <div className="relative w-full h-[340px] sm:h-[420px] rounded-[8px] overflow-hidden shadow-[0_15px_50px_rgba(0,0,0,0.12)]">
              <Image
                src="https://images.unsplash.com/photo-1521334884684-d80222895322"
                alt="Lifestyle"
                fill
                className="object-cover"
              />
            </div>

          </div>
{/* 🔥 RIGHT CONTENT */}
<div className="space-y-8">

  <div>
    <span className="text-[11px] uppercase tracking-[0.25em] text-[#2d3c59]/40 block mb-3">
      Daily life
    </span>

    <h2
      className="text-[2.6rem] sm:text-[3.2rem] text-[#2d3c59]"
      style={{ fontFamily: "var(--font-cormorant)" }}
    >
      Life
      <span className="italic text-[#2d3c59]/50 font-normal">
        Style
      </span>
    </h2>
  </div>

  {/* ✅ BULLETS INSTEAD OF CARDS */}
  <ul className="space-y-4">
    {lifestyleTips.map((tip, i) => (
      <li
        key={i}
        className="flex items-start gap-3 text-[#2d3c59]/70 text-[14px] leading-[1.8]"
      >
        <span className="text-[#94a378] text-lg mt-[3px]">•</span>
        <span>{tip}</span>
      </li>
    ))}
  </ul>


          </div>

        </div>

      </div>
    </section>
  );
}
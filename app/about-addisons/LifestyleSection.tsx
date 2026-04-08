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
      className={`${cormorant.variable} ${outfit.variable} w-full py-16 sm:py-20`}
      style={{ fontFamily: "var(--font-outfit)" }}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10">

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT IMAGE */}
          <div className="relative w-full h-[320px] sm:h-[420px] bg-[#eaebd0] overflow-hidden">
            <Image 
              src="https://images.unsplash.com/photo-1521334884684-d80222895322"
              alt="Lifestyle"
              fill
              className="object-cover"
            />
          
          </div>

          {/* RIGHT CONTENT */}
          <div>

            {/* TITLE */}
            <span className="text-[0.65rem] uppercase tracking-[0.25em] text-[#2d3c59]/40 block mb-3">
              05 — Daily life
            </span>

            <h2
              className="text-[2.4rem] sm:text-[3rem] text-[#2d3c59] mb-6"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Lifestyle
              <span className="block italic text-[#2d3c59]/50 font-normal">
                tips
              </span>
            </h2>

            {/* LIST */}
            <ul className="space-y-4">
              {lifestyleTips.map((tip) => (
                <li
                  key={tip}
                  className="flex items-start gap-3 text-[#2d3c59]/70 text-sm leading-[1.8]"
                >
                  <span className="text-[#94a378] mt-[4px]">•</span>
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
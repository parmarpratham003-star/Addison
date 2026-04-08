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
  weight: ["300", "400", "500", "600"],
  variable: "--font-outfit",
});

const symptoms = [
  "Extreme fatigue and weakness",
  "Weight loss and loss of appetite",
  "Darkening of the skin (hyperpigmentation)",
  "Low blood pressure, dizziness",
  "Salt craving",
  "Nausea, vomiting, diarrhea",
  "Muscle or joint pains",
  "Irritability or depression",
];

export function SymptomsSection() {
  return (
    <section
      className={`${cormorant.variable} ${outfit.variable} bg-[#2d3c59] py-16 sm:py-20 px-6 sm:px-10`}
      style={{ fontFamily: "var(--font-outfit)" }}
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-start">

        {/* LEFT SIDE */}
        <div className="space-y-8">

          <div>
            <span className="text-[0.65rem] uppercase tracking-[0.25em] text-[#eaebd0]/30 block mb-3">
              Signs
            </span>

            <h2
              className="text-[3rem] sm:text-[4rem] xl:text-[5rem] text-[#eaebd0]"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Symp
              <span className="italic text-[#eaebd0]/40">toms</span>
            </h2>
          </div>

          {/* QUOTE */}
          <p
            className="text-[1.4rem] sm:text-[1.7rem] italic text-[#eaebd0]/75 leading-[1.4] border-l border-[#eaebd0]/20 pl-5"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Symptoms often appear gradually — months or years before a diagnosis is made.
          </p>

          {/* SMALL NOTE */}
          <p className="text-[12px] text-[#eaebd0]/40 leading-[1.8] max-w-sm">
            Early-stage Addison&apos;s is frequently misattributed to stress or depression. A simple blood test can confirm adrenal insufficiency.
          </p>

        </div>

        {/* RIGHT SIDE (GRID) */}
        <div className="grid sm:grid-cols-2 gap-4">

          {symptoms.map((item, i) => (
            <div
              key={i}
              className="p-4 rounded-[8px] border border-[#eaebd0]/10 text-[#eaebd0]/70 text-sm leading-[1.7] bg-[#ffffff05] hover:bg-[#ffffff10] transition"
            >
              {item}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
"use client";

import { useEffect, useRef } from "react";
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
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const pullRef = useRef<HTMLParagraphElement>(null);
  const noteRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const els = [
      ...rowRefs.current.filter(Boolean),
      pullRef.current,
      noteRef.current,
    ].filter(Boolean) as Element[];

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("symp-in");
        });
      },
      { threshold: 0.15 }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className={`${cormorant.variable} ${outfit.variable}`}>
      <style>{`
        .symp-row {
          opacity: 0;
          transform: translateY(14px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .symp-row.symp-in { opacity: 1; transform: translateY(0); }
        .symp-pull {
          opacity: 0;
          transform: translateX(16px);
          transition: opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s;
        }
        .symp-pull.symp-in { opacity: 1; transform: translateX(0); }
        .symp-note {
          opacity: 0;
          transition: opacity 0.6s ease 0.5s;
        }
        .symp-note.symp-in { opacity: 1; }
      `}</style>

      <div
        className="bg-[#2d3c59] border-b border-[#eaebd0]/[0.08] py-14 sm:py-16 lg:py-20 px-5 sm:px-8 lg:px-20"
        style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
      >
        <div className="max-w-7xl mx-auto">

          {/* Header — title left, description top-right */}
          <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] items-start gap-3 sm:gap-6 mb-12 lg:mb-14">
            <div>
              <span
                className="text-[0.62rem] uppercase tracking-[0.25em] text-[#eaebd0]/30 block mb-2"
                style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
              >
                Signs
              </span>
              <h2
                className="text-[2.8rem] sm:text-[3.8rem] xl:text-[5.5rem] font-semibold leading-[0.92] text-[#eaebd0]"
                style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
              >
                Symp
                <span className="font-normal italic text-[#eaebd0]/32">toms</span>
              </h2>
            </div>
            <p
              className="text-[11.5px] font-light leading-[1.9] text-[#eaebd0]/38 max-w-[200px] text-right sm:pt-1"
              style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
            >
              Addison&apos;s disease develops slowly. Recognising these signs
              early leads to faster diagnosis and better outcomes.
            </p>
          </div>

          {/* Body */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">

            {/* Symptom list */}
            <div>
              <p
                className="text-[9px] uppercase tracking-[0.2em] text-[#eaebd0]/22 mb-4"
                style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
              >
                All symptoms
              </p>
              {symptoms.map((item, i) => (
                <div
                  key={item}
                  ref={(el) => { rowRefs.current[i] = el; }}
                  className="symp-row flex items-baseline gap-3 py-3.5 border-t border-[#eaebd0]/[0.07] last:border-b last:border-[#eaebd0]/[0.07]"
                  style={{ transitionDelay: `${i * 0.07}s` }}
                >
                  <span
                    className="text-[0.7rem] text-[#eaebd0]/16 flex-shrink-0"
                    style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
                  >
                    —
                  </span>
                  <span
                    className="text-[0.79rem] font-light text-[#eaebd0]/58 leading-[1.5]"
                    style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Pull quote + note */}
            <div>
              <p
                ref={pullRef}
                className="symp-pull text-[1.45rem] sm:text-[1.8rem] font-medium italic text-[#eaebd0]/75 leading-[1.35] border-l border-[#eaebd0]/18 pl-5 mb-8"
                style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
              >
                Symptoms often appear gradually — months or years before a
                diagnosis is made.
              </p>
              <p
                ref={noteRef}
                className="symp-note text-[11.5px] font-light text-[#eaebd0]/33 leading-[1.85] border-t border-[#eaebd0]/[0.07] pt-5"
                style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
              >
                Early-stage Addison&apos;s is frequently misattributed to stress
                or depression. A simple blood test can confirm adrenal
                insufficiency.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
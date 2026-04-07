"use client";

import { useEffect, useRef, useState } from "react";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { text } from "stream/consumers";

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

export default function TreatmentSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`${cormorant.variable} ${outfit.variable} w-full border-b border-[#2d3c59]/10 overflow-hidden`}
      style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
    >
      {/* ── FULL-BLEED TWO-PANEL ROW ── */}
      <div className="flex flex-col lg:flex-row min-h-[520px]">

        {/* ══ LEFT PANEL — cream bg, holds the floating card ══ */}
        <div className="relative bg-[#eaebd0] lg:w-[42%] flex items-center justify-center py-16 px-6 sm:px-12 lg:py-0 lg:px-0">

          {/* Faint watermark */}
         

          {/* ── FLOATING CARD — overlaps onto dark right panel on lg ── */}
          <div
            className="
              relative z-10 bg-[#eaebd0]
              w-full sm:max-w-[400px]
              px-8 py-10 sm:px-10 sm:py-12
              shadow-[0_24px_64px_rgba(45,60,89,0.16)]
              lg:absolute lg:right-[-72px] lg:top-1/2 lg:-translate-y-1/2 lg:w-[400px]
            "
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(var(--ty,0))" : "translateX(-28px) translateY(var(--ty,0))",
              transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s",
            }}
          >
           

            {/* Heading */}
            

            {/* Accent line — animates width */}
            <div
              className="h-[2px] bg-[#94a378] mb-7"
              style={{
                width: visible ? "52px" : "0px",
                transition: "width 0.6s ease 0.55s",
              }}
            />

            {/* Body */}
            <p
              className="text-[13px] sm:text-sm font-light leading-[1.9] text-[#2d3c59]/58 mb-8"
              style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
            >
              Treatment is lifelong hormone replacement. Hydrocortisone
              (cortisol) is taken daily, often in divided doses to mimic
              natural rhythms. Some patients also need fludrocortisone for
              aldosterone replacement. Doses may need to be increased during
              illness, stress, or surgery.
            </p>

            
          </div>
        </div>

        {/* ══ RIGHT PANEL — dark navy bg ══ */}
        <div
          className="
            flex-1 bg-[#2d3c59]
            flex flex-col justify-center
            px-8 py-14
            sm:px-12
            lg:pl-28 lg:pr-16 lg:py-20
          "
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(32px)",
            transition: "opacity 0.7s ease 0.25s, transform 0.7s ease 0.25s",
          }}
        >
          {/* Label */}
          <span
            className="text-[0.58rem] uppercase tracking-[0.28em] text-[#eaebd0]/30 mb-5 block"
            style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
          >
            Management
          </span>

          {/* Heading */}
          <h3
            className="font-semibold text-[#eaebd0] leading-[1.05] mb-5"
            style={{
              fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
            }}
          >
            Treat
            <span className="font-normal italic text-[#eaebd0]/45">Ment</span>
          </h3>

          {/* Accent line */}
          <div
            className="h-[2px] bg-[#94a378] mb-8"
            style={{
              width: visible ? "52px" : "0px",
              transition: "width 0.6s ease 0.7s",
            }}
          />

          {/* Supporting text */}
          <p
            className="text-[0.78rem] sm:text-[0.82rem] font-light leading-[1.9] text-[#eaebd0]/42 max-w-xs mb-10"
            style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
          >
            Your body needs cortisol to function. Since the adrenal glands
            can&apos;t make it, you replace it daily — adjusting doses to
            match life&apos;s demands.
          </p>

          {/* Key points — staggered fade up */}
          
        </div>

      </div>
    </section>
  );
}
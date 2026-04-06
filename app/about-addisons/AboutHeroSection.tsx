"use client";

import Link from "next/link";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { ShieldAlert, Stethoscope, Heart } from "lucide-react";

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

const heroBoxes = [
  {
    icon: ShieldAlert,
    label: "Emergency Ready",
    title: "Crisis Guide",
    desc: "Know exactly what to do during an Addisonian crisis — fast action saves lives.",
    href: "/emergency",
    featured: false,
  },
  {
    icon: Stethoscope,
    label: "Find Doctors",
    title: "Specialist Care",
    desc: "Find experienced endocrinologists and adrenal specialists across India.",
    href: "/directory",
    featured: true,
  },
  {
    icon: Heart,
    label: "Day to Day",
    title: "Daily Wellbeing",
    desc: "Practical routines, diet guidance, and travel tips for life with Addison's.",
    href: "/information",
    featured: false,
  },
];

export function AboutHeroSection() {
  return (
    <section
      className={`${cormorant.variable} ${outfit.variable}`}
      style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
    >
      {/* ── Full-bleed image hero ── */}
      <div className="relative w-full" style={{ minHeight: "480px" }}>

        {/* Background image */}
        <img
          src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600&q=85"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(18,26,40,0.93) 0%, rgba(18,26,40,0.78) 55%, rgba(18,26,40,0.60) 100%)",
          }}
        />

        {/* Content */}
        <div
          className="relative z-10 max-w-7xl mx-auto px-8 lg:px-16 flex flex-col justify-between"
          style={{ minHeight: "480px" }}
        >
          {/* Top text block */}
          <div className="pt-20 pb-10 max-w-xl">

            <p
              className="text-[0.58rem] tracking-[0.26em] uppercase text-[#eaebd0]/40 font-light mb-6"
              style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
            >
              About Addison's Disease
            </p>

            <h1
              className="font-semibold leading-[1.06] text-[#eaebd0] mb-6"
              style={{
                fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                fontSize: "clamp(2.4rem, 5vw, 3.6rem)",
              }}
            >
            
              <span className="font-normal italic text-[#eaebd0]/65">Addison&apos;s</span>{" "}
              Disease
            </h1>

            <p
              className="text-[0.87rem] font-light leading-[1.9] text-[#eaebd0]/50 max-w-sm mb-10"
              style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
            >
              A rare disorder where the adrenal glands don&apos;t produce
              enough hormones — especially cortisol and often aldosterone —
              essential for life.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/emergency-card"
                className="bg-[#94a378] text-[#2d3c59] px-7 py-2.5 rounded-full
                  text-[0.7rem] font-medium tracking-[0.1em] uppercase
                  hover:bg-[#a3b388] transition-colors duration-150"
                style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
              >
                Emergency card
              </Link>
              <Link
                href="/emergency"
                className="border border-[#eaebd0]/30 text-[#eaebd0]/80 px-7 py-2.5 rounded-full
                  text-[0.7rem] font-medium tracking-[0.1em] uppercase
                  hover:border-[#eaebd0]/55 hover:text-[#eaebd0] transition-colors duration-150"
                style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
              >
                Crisis guide
              </Link>
            </div>
          </div>

          {/* ── 3 CARDS — half-inside hero, half outside ── */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pb-0" style={{ marginBottom: "-72px" }}>
            {heroBoxes.map((box, i) => {
              const Icon = box.icon;
              return (
                <Link
                  key={i}
                  href={box.href}
                  className="group relative flex flex-col items-center text-center gap-5 px-8 py-10
                    bg-[#2d3c59] rounded-[16px] transition-all duration-300
                    hover:bg-[#344870] hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
                  style={{
                    boxShadow: box.featured
                      ? "0 20px_50px_rgba(0,0,0,0.4)"
                      : "0 8px 32px rgba(0,0,0,0.25)",
                  }}
                >
                  {/* Circle icon — matching reference style */}
                  <div
                    className={`
                      w-[68px] h-[68px] rounded-full flex items-center justify-center
                      border-2 transition-colors duration-300 -mt-2
                      ${box.featured
                        ? "border-[#94a378] text-[#94a378]"
                        : "border-[#eaebd0]/25 text-[#eaebd0]/60 group-hover:border-[#94a378]/70 group-hover:text-[#94a378]/90"
                      }
                    `}
                  >
                    <Icon size={26} strokeWidth={1.4} />
                  </div>

                  {/* Title */}
                  <h3
                    className="text-[0.72rem] font-semibold tracking-[0.2em] uppercase text-[#eaebd0]"
                    style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
                  >
                    {box.title}
                  </h3>

                  {/* Divider */}
                  <span
                    className={`w-8 h-[1.5px] rounded-full -mt-2
                      ${box.featured ? "bg-[#94a378]" : "bg-[#eaebd0]/20"}`}
                  />

                  {/* Desc */}
                  <p
                    className="text-[0.75rem] font-light leading-[1.85] text-[#eaebd0]/45 max-w-[200px]"
                    style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
                  >
                    {box.desc}
                  </p>

                  {/* Learn more */}
                  <span
                    className={`
                      text-[0.66rem] tracking-widest uppercase mt-1 inline-block font-medium
                      transition-all duration-200 group-hover:translate-x-1
                      ${box.featured ? "text-[#94a378]" : "text-[#eaebd0]/30 group-hover:text-[#94a378]/70"}
                    `}
                    style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
                  >
                    Learn more →
                  </span>

                  {/* Featured top accent line */}
                  {box.featured && (
                    <span className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-[#94a378] rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

        </div>
      </div>

      {/* Spacer to account for cards overlapping below */}
      <div className="bg-[#eaebd0]" style={{ paddingTop: "88px" }} />

    </section>
  );
}
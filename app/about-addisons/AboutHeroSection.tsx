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

      {/* HERO */}
      <div className="relative w-full" style={{ minHeight: "480px" }}>

        {/* IMAGE */}
        <img
         src="https://images.unsplash.com/photo-1579154204601-01588f351e67?w=1600&q=85"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* OVERLAY */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(18,26,40,0.93) 0%, rgba(18,26,40,0.78) 55%, rgba(18,26,40,0.60) 100%)",
          }}
        />

        {/* CONTENT */}
        <div
          className="relative z-10 max-w-7xl mx-auto px-8 lg:px-16 flex flex-col justify-between"
          style={{ minHeight: "480px" }}
        >

          {/* TEXT */}
          <div className="pt-20 pb-10 max-w-xl">

            <p className="text-[0.58rem] tracking-[0.26em] uppercase text-[#f5f5f5]/45 mb-6">
              About Addison's Disease
            </p>

            <h1
              className="font-semibold leading-[1.06] text-[#f5f5f5] mb-6"
              style={{
                fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                fontSize: "clamp(2.4rem, 5vw, 3.6rem)",
              }}
            >
              <span className="font-normal italic text-[#f5f5f5]/65">
                Addison&apos;s
              </span>{" "}
              Disease
            </h1>

            <p className="text-[0.87rem] leading-[1.9] text-[#f5f5f5]/55 max-w-sm mb-10">
              A rare disorder where the adrenal glands don&apos;t produce
              enough hormones — especially cortisol and often aldosterone —
              essential for life.
            </p>

            {/* 🔥 SAME BUTTON STYLE */}
            <div className="flex flex-wrap gap-3">
              <Link
                href="/emergency-card"
                className="
                  bg-[#94a378] text-[#2d3c59]
                  px-7 py-2.5 rounded-full
                  text-[0.7rem] uppercase tracking-[0.1em]
                  transition-all duration-200
                  hover:bg-[#a3b388]
                "
              >
                Emergency card
              </Link>

              <Link
                href="/emergency"
                className="
                  border border-[#f5f5f5]/30 text-[#f5f5f5]/80
                  px-7 py-2.5 rounded-full
                  text-[0.7rem] uppercase tracking-[0.1em]
                  transition-all duration-200
                  hover:border-[#f5f5f5]/60 hover:text-[#f5f5f5]
                "
              >
                Crisis guide
              </Link>
            </div>

          </div>

          {/* 🔥 CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pb-0" style={{ marginBottom: "-110px" }}>

            {heroBoxes.map((box, i) => {
              const Icon = box.icon;

              return (
                <Link
                  key={i}
                  href={box.href}
                  className="
                    group flex flex-col items-center text-center gap-2.5
                    px-5 py-5 bg-[#2d3c59] rounded-[14px]
                    transition-all duration-300
                    hover:-translate-y-2 hover:shadow-[0_16px_40px_rgba(0,0,0,0.35)]
                  "
                >

                  {/* ICON */}
                  <div
                    className={`
                      w-[52px] h-[52px] rounded-full flex items-center justify-center border
                      ${box.featured
                        ? "border-[#94a378] text-[#94a378]"
                        : "border-[#f5f5f5]/25 text-[#f5f5f5]/70"}
                    `}
                  >
                    <Icon size={20} strokeWidth={1.4} />
                  </div>

                  {/* TITLE */}
                  <h3 className="text-[0.7rem] tracking-[0.2em] uppercase text-[#f5f5f5]">
                    {box.title}
                  </h3>

                  {/* DIVIDER */}
                  <span
                    className={`w-7 h-[1.5px] ${
                      box.featured ? "bg-[#94a378]" : "bg-[#f5f5f5]/20"
                    }`}
                  />

                  {/* DESC */}
                  <p className="text-[0.75rem] leading-[1.7] text-[#f5f5f5]/55 max-w-[170px]">
                    {box.desc}
                  </p>

                  {/* LINK */}
                  <span
                    className={`text-[0.66rem] uppercase ${
                      box.featured
                        ? "text-[#94a378]"
                        : "text-[#f5f5f5]/30"
                    }`}
                  >
                    Learn more →
                  </span>

                  {/* FEATURE LINE */}
                  {box.featured && (
                    <span className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-[2px] bg-[#94a378]" />
                  )}

                </Link>
              );
            })}

          </div>

        </div>
      </div>

      {/* SPACER */}
      <div className="bg-[#eaebd0]" style={{ paddingTop: "80px" }} />

    </section>
  );
}
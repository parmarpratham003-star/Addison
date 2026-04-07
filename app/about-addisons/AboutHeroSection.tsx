"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
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
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
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

        {/* OVERLAY — HeroSection gradient style */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

        {/* CONTENT */}
        <div
          className="relative z-10 max-w-7xl mx-auto px-8 lg:px-16 flex flex-col justify-between"
          style={{ minHeight: "480px" }}
        >

          {/* TEXT — fade + slide up on scroll */}
          <div
            className="pt-20 pb-10 max-w-xl"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(32px)",
              transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s",
            }}
          >
            <p className="text-[0.58rem] tracking-[0.26em] uppercase text-[#f5f5f5]/45 mb-6">
              About Addison&apos;s Disease
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

            {/* BUTTONS — HeroSection style with shine sweep */}
            <div className="flex flex-wrap gap-3">
              <Link
                href="/emergency-card"
                className="group relative overflow-hidden bg-[#2d3c59] text-[#f5f5f5]/70 px-7 py-3 rounded-xl text-sm font-medium border border-[#2d3c59] transition-all duration-300 hover:bg-transparent hover:text-[#eaebd0] hover:border-[#eaebd0]/50 hover:shadow-lg"
              >
                <span className="relative z-10">Emergency card</span>
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
              </Link>

              <Link
                href="/emergency"
                className="group relative overflow-hidden px-6 py-3 rounded-xl text-sm font-medium border border-[#eaebd0]/50 text-[#f5f5f5]/70 transition-all duration-300 hover:bg-[#2d3c59] hover:border-[#2d3c59] hover:shadow-lg"
              >
                <span className="relative z-10">Crisis guide</span>
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
              </Link>
            </div>
          </div>

          {/* CARDS — staggered fade + slide up */}
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-5"
            style={{ marginBottom: "-110px" }}
          >
            {heroBoxes.map((box, i) => {
              const Icon = box.icon;

              return (
                <Link
                  key={i}
                  href={box.href}
                  className="group relative flex flex-col items-center text-center gap-2.5 px-5 py-5 rounded-[14px] overflow-hidden"
                  style={{
                    /* ✅ Inverted: bg = #f5f5f5 (was text colour), all text = blue tones */
                    backgroundColor: "#f5f5f5",
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(48px)",
                    transition: `
                      opacity 0.65s ease ${0.3 + i * 0.15}s,
                      transform 0.65s ease ${0.3 + i * 0.15}s,
                      box-shadow 0.3s ease,
                      translate 0.3s ease
                    `,
                  }}
                >
                  {/* Hover lift handled via wrapper */}
                  <div className="absolute inset-0 transition-transform duration-300 group-hover:-translate-y-2 pointer-events-none" />

                  {/* HOVER SHINE */}
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/60 to-transparent group-hover:translate-x-full transition-transform duration-700 ease-in-out z-10" />

                  {/* FEATURE TOP LINE */}
                  {box.featured && (
                    <span className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-[2.5px] bg-[#1e3a5f]" />
                  )}

                  {/* ICON */}
                  <div
                    className="w-[52px] h-[52px] rounded-full flex items-center justify-center border transition-all duration-300 group-hover:scale-110"
                    style={{
                      borderColor: box.featured ? "#1e3a5f" : "#1e3a5f50",
                      color: "#1e3a5f",
                    }}
                  >
                    <Icon size={20} strokeWidth={1.4} />
                  </div>

                  {/* TITLE */}
                  <h3
                    className="text-[0.7rem] tracking-[0.2em] uppercase font-semibold"
                    style={{ color: "#1e3a5f" }}
                  >
                    {box.title}
                  </h3>

                  {/* DIVIDER */}
                  <span
                    className="w-7 h-[1.5px]"
                    style={{
                      backgroundColor: box.featured ? "#1e3a5f" : "#1e3a5f35",
                    }}
                  />

                  {/* DESC */}
                  <p
                    className="text-[0.75rem] leading-[1.7] max-w-[170px]"
                    style={{ color: "#2d5080bb" }}
                  >
                    {box.desc}
                  </p>

                  {/* LINK */}
                  <span
                    className="text-[0.66rem] uppercase transition-colors duration-200"
                    style={{
                      color: box.featured ? "#1e3a5f" : "#1e3a5f70",
                    }}
                  >
                    Learn more →
                  </span>
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
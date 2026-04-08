"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { ShieldAlert, Stethoscope, Heart } from "lucide-react";

// Font configurations
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

// Card content - Descriptions adjusted to naturally fill ~4 lines
const heroBoxes = [
  {
    icon: ShieldAlert,
    title: "Crisis Guide",
    desc: "Immediate steps to manage an Addisonian crisis effectively. Learn how to administer emergency injections and when to seek urgent medical intervention for stabilization.",
    href: "/emergency",
  },
  {
    icon: Stethoscope,
    title: "Specialist Care",
    desc: "Connect with leading endocrinologists across India who specialize in adrenal insufficiency and long-term hormone replacement therapy management for patients.",
    href: "/directory",
  },
  {
    icon: Heart,
    title: "Daily Wellbeing",
    desc: "Master your daily routine with guidance on steroid dosing, salt intake, and managing physical stress to maintain a high quality of life with Addison's disease.",
    href: "/information",
  },
];

export function AboutHeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  // Scroll reveal animation logic
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
      className={`${cormorant.variable} ${outfit.variable} mb-28`}
      style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
    >
      {/* --- HERO IMAGE & OVERLAY --- */}
      <div className="relative w-full" style={{ minHeight: "480px" }}>
        
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1579154204601-01588f351e67?w=1600&q=85"
          alt="Medical Research"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

        {/* --- HERO CONTENT WRAPPER --- */}
        <div
          className="relative z-10 max-w-7xl mx-auto px-8 lg:px-20 flex flex-col justify-between"
          style={{ minHeight: "480px" }}
        >

          {/* Top Text Content */}
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

            {/* ACTION BUTTONS */}
            <div className="flex flex-wrap gap-3">
              <Link
                href="/emergency-card"
                className="group relative overflow-hidden bg-[#2d3c59] text-[#f5f5f5]/70 px-7 py-3 rounded-[3px] text-sm font-medium border border-[#2d3c59] transition-all duration-300 hover:bg-transparent hover:text-[#eaebd0] hover:border-[#eaebd0]/50 hover:shadow-lg"
              >
                <span className="relative z-10">Emergency card</span>
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
              </Link>

              <Link
                href="/emergency"
                className="group relative overflow-hidden px-6 py-3 rounded-[3px] text-sm font-medium border border-[#eaebd0]/50 text-[#f5f5f5]/70 transition-all duration-300 hover:bg-[#2d3c59] hover:border-[#2d3c59] hover:shadow-lg"
              >
                <span className="relative z-10">Crisis guide</span>
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
              </Link>
            </div>
          </div>

          {/* --- BOTTOM CARDS GRID --- */}
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-6xl"
            style={{ marginBottom: "-90px" }}
          >
            {heroBoxes.map((box, i) => {
              const Icon = box.icon;

              return (
                <Link
                  key={i}
                  href={box.href}
                  className="group relative flex flex-col items-start text-left gap-3 px-8 py-8 rounded-[14px] bg-[#f5f5f5] overflow-hidden"
                  style={{
                    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(48px)",
                    transition: `
                      opacity 0.65s ease ${0.3 + i * 0.15}s,
                      transform 0.65s ease ${0.3 + i * 0.15}s,
                      box-shadow 0.3s ease,
                      background-color 0.3s ease
                    `,
                  }}
                >
                  {/* ICON - Rotating Animation and Color Fill */}
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center border border-[#1e3a5f]/20 text-[#1e3a5f] bg-white transition-all duration-700 group-hover:rotate-[360deg] group-hover:bg-[#1e3a5f] group-hover:text-white group-hover:border-[#1e3a5f]"
                  >
                    <Icon size={20} strokeWidth={1.5} />
                  </div>

                  {/* TITLE */}
                  <h3 className="text-[0.7rem] tracking-[0.2em] uppercase font-bold text-[#1e3a5f]">
                    {box.title}
                  </h3>

                  {/* DIVIDER */}
                  <span className="w-8 h-[1.5px] bg-[#1e3a5f]/30 group-hover:w-16 group-hover:bg-[#1e3a5f] transition-all duration-500" />

                  {/* DESCRIPTION - Fixed Height for 4 Lines */}
                  <p
                    className="text-[0.78rem] leading-[1.6] text-[#2d5080bb]"
                    style={{
                      height: "5.2rem", 
                      display: "-webkit-box",
                      WebkitLineClamp: "4",
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden"
                    }}
                  >
                    {box.desc}
                  </p>

                  {/* LEARN MORE LINK */}
                  <span className="text-[0.66rem] font-bold uppercase tracking-widest text-[#1e3a5f]/80 flex items-center gap-1 group-hover:gap-3 transition-all duration-300">
                    Learn more <span className="text-lg leading-none">→</span>
                  </span>

                  {/* HOVER SHINE EFFECT */}
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:translate-x-full transition-transform duration-1000 ease-in-out z-10" />
                </Link>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
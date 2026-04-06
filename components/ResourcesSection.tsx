"use client";

import Link from "next/link";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import {
  AlertTriangle,
  BookOpen,
  Stethoscope,
  FileText,
  Pill,
  Plane,
} from "lucide-react";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const items = [
  {
    title: "Addisonian Crisis",
    desc: "Recognize symptoms, respond quickly, and manage emergencies effectively.",
    href: "/emergency",
    icon: AlertTriangle,
  },
  {
    title: "Clinical Blog",
    desc: "Patient experiences and expert-backed insights for daily management.",
    href: "/blog",
    icon: BookOpen,
  },
  {
    title: "Find Specialists",
    desc: "Connect with endocrinologists and healthcare professionals across India.",
    href: "/directory",
    icon: Stethoscope,
  },
  {
    title: "Information Hub",
    desc: "Evidence-based knowledge, symptoms, and long-term care strategies.",
    href: "/information",
    icon: FileText,
  },
  {
    title: "Medication Guide",
    desc: "Understand steroid therapy, dosage, and long-term treatment planning.",
    href: "/information",
    icon: Pill,
  },
  {
    title: "Lifestyle & Travel",
    desc: "Daily routines, diet tips, and travel safety practices for Addison's.",
    href: "/information",
    icon: Plane,
  },
];

export function ResourcesSection() {
  return (
    <section className={`${outfit.className} py-20 bg-[#f5f5f5]`}>

      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 sm:gap-4 mb-20">
          <h2
            className={`${cormorant.className} text-[2.4rem] sm:text-[clamp(2.8rem,5vw,4rem)] font-semibold leading-[0.9] text-[#2d3c59] tracking-tight`}
          >
            Resources{" "}
            <span className="font-normal text-[#2d3c59]/65">& Guides</span>
          </h2>
          <p
            className={`${outfit.className} sm:max-w-[220px] text-[12px] sm:text-[13px] font-light leading-[1.65] text-[#2d3c59]/48 sm:pb-0.5`}
          >
            Curated information, professional directories, and emergency support
          </p>
        </div>

        {/* ROW 1 */}
        <div className="hidden lg:grid lg:grid-cols-3 mb-12">
          {items.slice(0, 3).map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="relative">
                {/* Vertical divider — right side, not on last col */}
                {i < 2 && (
                  <span className="absolute right-0 top-0 h-full w-px bg-[#2d3c59]/10" />
                )}
                <Link
                  href={item.href}
                  className={`group flex items-start gap-5 py-3 ${i === 0 ? "pr-8" : "px-8"}`}
                >
                  <div className="perspective flex-shrink-0">
                    <div className="flip-inner w-14 h-14 relative">
                      <div className="face face-front">
                        <Icon size={20} strokeWidth={1.8} />
                      </div>
                      <div className="face face-back">
                        <Icon size={20} strokeWidth={1.8} />
                      </div>
                    </div>
                  </div>
                  <div className="max-w-[260px]">
                    <h3 className={`${cormorant.className} text-[1.35rem] font-semibold text-[#2d3c59] leading-[1.2]`}>
                      {item.title}
                    </h3>
                    <p className="text-[14px] text-[#2d3c59]/60 mt-2 leading-[1.9]">
                      {item.desc}
                    </p>
                    <span className="text-[12px] text-[#2d3c59] mt-3 inline-block transition group-hover:translate-x-1">
                      Learn more →
                    </span>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

       

        {/* ROW 2 */}
        <div className="hidden lg:grid lg:grid-cols-3 mt-12">
          {items.slice(3, 6).map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="relative">
                {/* Vertical divider — right side, not on last col */}
                {i < 2 && (
                  <span className="absolute right-0 top-0 h-full w-px bg-[#2d3c59]/10" />
                )}
                <Link
                  href={item.href}
                  className={`group flex items-start gap-5 py-3 ${i === 0 ? "pr-8" : "px-8"}`}
                >
                  <div className="perspective flex-shrink-0">
                    <div className="flip-inner w-14 h-14 relative">
                      <div className="face face-front">
                        <Icon size={20} strokeWidth={1.8} />
                      </div>
                      <div className="face face-back">
                        <Icon size={20} strokeWidth={1.8} />
                      </div>
                    </div>
                  </div>
                  <div className="max-w-[260px]">
                    <h3 className={`${cormorant.className} text-[1.35rem] font-semibold text-[#2d3c59] leading-[1.2]`}>
                      {item.title}
                    </h3>
                    <p className="text-[14px] text-[#2d3c59]/60 mt-2 leading-[1.9]">
                      {item.desc}
                    </p>
                    <span className="text-[12px] text-[#2d3c59] mt-3 inline-block transition group-hover:translate-x-1">
                      Learn more →
                    </span>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

        {/* MOBILE FALLBACK */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12 lg:hidden">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <Link key={i} href={item.href} className="group flex items-start gap-5 py-3">
                <div className="perspective flex-shrink-0">
                  <div className="flip-inner w-14 h-14 relative">
                    <div className="face face-front"><Icon size={20} strokeWidth={1.8} /></div>
                    <div className="face face-back"><Icon size={20} strokeWidth={1.8} /></div>
                  </div>
                </div>
                <div className="max-w-[260px]">
                  <h3 className={`${cormorant.className} text-[1.35rem] font-semibold text-[#2d3c59] leading-[1.2]`}>
                    {item.title}
                  </h3>
                  <p className="text-[14px] text-[#2d3c59]/60 mt-2 leading-[1.9]">{item.desc}</p>
                  <span className="text-[12px] text-[#2d3c59] mt-3 inline-block transition group-hover:translate-x-1">
                    Learn more →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

      </div>

      <style>{`
        .perspective { perspective: 1000px; }
        .flip-inner {
          transform-style: preserve-3d;
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 3px;
        }
        .group:hover .flip-inner { transform: rotateY(180deg); }
        .face {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          backface-visibility: hidden;
          border-radius: 3px;
          border: 1.5px solid transparent;
          transition: border-color 0.5s ease;
        }
        .group:hover .face { border-color: #94a378; }
        .face-front { background: #eaebd0; color: #2d3c59; }
        .face-back { background: #2d3c59; color: #eaebd0; transform: rotateY(180deg); }
      `}</style>

    </section>
  );
}
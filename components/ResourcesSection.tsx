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

function ResourceCard({
  item,
  colIndex,
  isLastInRow,
}: {
  item: (typeof items)[0];
  colIndex: number;
  isLastInRow: boolean;
}) {
  const Icon = item.icon;
  return (
    <div className="relative">
      {/* Vertical divider — right side, not on last col */}
      {!isLastInRow && (
        <span className="hidden lg:block absolute right-0 top-0 h-full w-px bg-[#2d3c59]/10" />
      )}
      <Link
        href={item.href}
        className={`group flex items-start gap-4 sm:gap-5 py-3 ${
          colIndex === 0 ? "lg:pr-8" : "lg:px-8"
        }`}
      >
        <div className="perspective flex-shrink-0">
          <div className="flip-inner w-12 h-12 sm:w-14 sm:h-14 relative">
            <div className="face face-front">
             <Icon size={24} strokeWidth={1.8} className="sm:hidden" />
            <Icon size={28} strokeWidth={1.8} className="hidden sm:block" />
            </div>
            <div className="face face-back">
              <Icon size={24} strokeWidth={1.8} className="sm:hidden" />
              <Icon size={28} strokeWidth={1.8} className="hidden sm:block" />
            </div>
          </div>
        </div>
        <div className="min-w-0">
          <h3
            className={`${cormorant.className} text-[1.2rem] sm:text-[1.35rem] font-semibold text-[#2d3c59] leading-[1.2]`}
          >
            {item.title}
          </h3>
          <p className="text-[13px] sm:text-[14px] text-[#2d3c59]/60 mt-1.5 sm:mt-2 leading-[1.8] sm:leading-[1.9] line-clamp-2">
            {item.desc}
          </p>
          <span className="text-[11px] sm:text-[12px] text-[#2d3c59] mt-2 sm:mt-3 inline-block transition group-hover:translate-x-1">
            Learn more →
          </span>
        </div>
      </Link>
    </div>
  );
}

export function ResourcesSection() {
  const row1 = items.slice(0, 3);
  const row2 = items.slice(3, 6);

  return (
    <section className={`${outfit.className} py-8 sm:py-20 bg-[#f5f5f5]`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-1.5 sm:gap-4 mb-6 sm:mb-16 lg:mb-20">
          <h2
            className={`${cormorant.className} text-[1.85rem] sm:text-[2.4rem] lg:text-[clamp(2.8rem,5vw,4rem)] font-semibold leading-[0.9] text-[#2d3c59] tracking-tight`}
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

        {/* DESKTOP: ROW 1 */}
        <div className="hidden lg:grid lg:grid-cols-3 mb-12">
          {row1.map((item, i) => (
            <ResourceCard
              key={i}
              item={item}
              colIndex={i}
              isLastInRow={i === row1.length - 1}
            />
          ))}
        </div>

        {/* DESKTOP: Horizontal Divider between rows */}
        <div className="hidden lg:block h-px bg-[#2d3c59]/10 my-0" />

        {/* DESKTOP: ROW 2 */}
        <div className="hidden lg:grid lg:grid-cols-3 mt-12">
          {row2.map((item, i) => (
            <ResourceCard
              key={i}
              item={item}
              colIndex={i}
              isLastInRow={i === row2.length - 1}
            />
          ))}
        </div>

        {/* TABLET (sm–lg): 2-column grid with dividers */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:hidden gap-x-0 gap-y-0">
          {items.map((item, i) => {
            const Icon = item.icon;
            const isRightCol = i % 2 === 1;
            const isLastRow = i >= items.length - 2;
            return (
              <div key={i} className="relative">
                {!isRightCol && (
                  <span className="absolute right-0 top-0 h-full w-px bg-[#2d3c59]/10" />
                )}
                {!isLastRow && (
                  <span className="absolute bottom-0 left-0 w-full h-px bg-[#2d3c59]/10" />
                )}
                <Link
                  href={item.href}
                  className={`group flex items-start gap-4 py-6 ${
                    isRightCol ? "pl-8 pr-0" : "pr-8 pl-0"
                  }`}
                >
                  <div className="perspective flex-shrink-0">
                    <div className="flip-inner w-12 h-12 relative">
                      <div className="face face-front">
                        <Icon size={18} strokeWidth={1.8} />
                      </div>
                      <div className="face face-back">
                        <Icon size={18} strokeWidth={1.8} />
                      </div>
                    </div>
                  </div>
                  <div className="min-w-0">
                    <h3
                      className={`${cormorant.className} text-[1.2rem] font-semibold text-[#2d3c59] leading-[1.2]`}
                    >
                      {item.title}
                    </h3>
                    <p className="text-[13px] text-[#2d3c59]/60 mt-1.5 leading-[1.8] line-clamp-2">
                      {item.desc}
                    </p>
                    <span className="text-[11px] text-[#2d3c59] mt-2 inline-block transition group-hover:translate-x-1">
                      Learn more →
                    </span>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

        {/* MOBILE (<sm): Single column stacked list */}
        <div className="flex flex-col sm:hidden divide-y divide-[#2d3c59]/10">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <Link
                key={i}
                href={item.href}
                className="group flex items-start gap-3 py-4"
              >
                <div className="perspective flex-shrink-0">
                  <div className="flip-inner w-10 h-10 relative">
                    <div className="face face-front">
                      <Icon size={16} strokeWidth={1.8} />
                    </div>
                    <div className="face face-back">
                      <Icon size={16} strokeWidth={1.8} />
                    </div>
                  </div>
                </div>
                <div className="min-w-0">
                  <h3
                    className={`${cormorant.className} text-[1.1rem] font-semibold text-[#2d3c59] leading-[1.2]`}
                  >
                    {item.title}
                  </h3>
                  <p className="text-[12.5px] text-[#2d3c59]/60 mt-0.5 leading-[1.7] line-clamp-2">
                    {item.desc}
                  </p>
                  <span className="text-[10.5px] text-[#2d3c59] mt-1 inline-block transition group-hover:translate-x-1">
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
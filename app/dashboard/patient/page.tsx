"use client";

import Link from "next/link";
import { UserCircle, Stethoscope, BookOpen, AlertTriangle } from "lucide-react";
import { Cormorant_Garamond, Outfit } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const cards = [
  {
    href: "/profile",
    icon: UserCircle,
    title: "My Profile",
    description: "View and edit your profile",
    tag: "Account",
    emergency: false,
  },
  {
    href: "/map",
    icon: Stethoscope,
    title: "Find Doctors",
    description: "Search doctors by location",
    tag: "Directory",
    emergency: false,
  },
  {
    href: "/blog",
    icon: BookOpen,
    title: "Blog",
    description: "Read health articles and posts",
    tag: "Resources",
    emergency: false,
  },
  {
    href: "/emergency-card",
    icon: AlertTriangle,
    title: "Emergency Card",
    description: "Create your emergency info card",
    tag: "Safety",
    emergency: true,
  },
];

export default function PatientDashboard() {
  return (
    <div className={`${outfit.className} min-h-screen bg-[#f5f5f5] relative overflow-hidden`}>

      {/* Background blobs */}
      <div className="pointer-events-none absolute -top-20 -left-20 h-[400px] w-[400px] rounded-full bg-[#eaebd0] opacity-45 blur-[80px]" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-[320px] w-[320px] rounded-full bg-[#2d3c59]/10 opacity-30 blur-[96px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8 sm:py-14">
        <div className="lg:pl-8 xl:pl-12">

          {/* ── HEADER ── */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-1.5 sm:gap-4 mb-7 sm:mb-10">
            <h1 className={`${cormorant.className} text-[2rem] sm:text-[clamp(2.8rem,5vw,4rem)] font-semibold leading-[0.9] text-[#2d3c59] tracking-tight`}>
              Welcome{" "}
              <span className="font-normal text-[#2d3c59]/65">back 👋</span>
            </h1>
            <p className={`${outfit.className} sm:max-w-[220px] text-[11.5px] sm:text-[13px] font-light leading-[1.65] text-[#2d3c59]/48 sm:pb-0.5`}>
              Explore community and find doctors easily
            </p>
          </div>

          {/* ── GRID ── */}
          {/* Mobile: 1 col | sm: 2 col | xl: 4 col */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4">
            {cards.map((card) => {
              const Icon = card.icon;
              return (
                <Link
                  key={card.href}
                  href={card.href}
                  style={{ borderRadius: "6px" }}
                  className={`group relative flex flex-col justify-between
                    border p-5 sm:p-6
                    transition-all duration-300
                    hover:-translate-y-0.5
                    ${card.emergency
                      ? "border-red-400/20 bg-white hover:border-red-400/40 hover:shadow-[0_8px_30px_rgba(239,68,68,0.10)]"
                      : "border-[#2d3c59]/10 bg-white hover:border-[#2d3c59]/25 hover:shadow-[0_8px_30px_rgba(45,60,89,0.10)]"
                    }`}
                >
                  {/* Top: icon + tag */}
                  <div className="flex items-start justify-between mb-8 sm:mb-10">

                    {/* Icon box */}
                    <div
                      style={{ borderRadius: "3px" }}
                      className={`w-10 h-10 flex items-center justify-center border
                        transition-all duration-500 group-hover:scale-[1.05]
                        ${card.emergency
                          ? "border-red-400/25 text-red-400/60 group-hover:bg-red-500 group-hover:border-red-500 group-hover:text-white group-hover:shadow-[0_4px_14px_rgba(239,68,68,0.28)]"
                          : "border-[#2d3c59]/15 text-[#2d3c59]/50 group-hover:bg-[#2d3c59] group-hover:border-[#2d3c59] group-hover:text-[#eaebd0] group-hover:shadow-[0_4px_14px_rgba(45,60,89,0.20)]"
                        }`}
                    >
                      <Icon size={17} strokeWidth={1.5} />
                    </div>

                    {/* Tag */}
                    <span
                      style={{ borderRadius: "3px" }}
                      className={`${outfit.className} text-[9px] uppercase tracking-[0.16em] font-medium px-2.5 py-1 border
                        ${card.emergency
                          ? "border-red-400/20 text-red-400/50 bg-red-50/60"
                          : "border-[#2d3c59]/10 text-[#2d3c59]/35 bg-[#2d3c59]/[0.03]"
                        }`}
                    >
                      {card.tag}
                    </span>
                  </div>

                  {/* Bottom: title + desc + arrow */}
                  <div>
                    <div className="flex items-end justify-between gap-2">
                      <div className="min-w-0">
                        <h3
                          className={`${cormorant.className} text-[1.45rem] sm:text-[1.55rem] font-semibold leading-tight
                            transition-colors duration-300
                            ${card.emergency
                              ? "text-red-400/75 group-hover:text-red-500"
                              : "text-[#2d3c59]/70 group-hover:text-[#2d3c59]"
                            }`}
                        >
                          {card.title}
                        </h3>
                        <p className={`${outfit.className} text-[11.5px] font-light leading-[1.7] mt-1
                          ${card.emergency ? "text-red-400/45" : "text-[#2d3c59]/40"}`}
                        >
                          {card.description}
                        </p>
                      </div>

                      {/* Arrow icon */}
                      <div
                        style={{ borderRadius: "3px" }}
                        className={`flex-shrink-0 w-8 h-8 flex items-center justify-center border
                          opacity-0 group-hover:opacity-100
                          translate-x-1 group-hover:translate-x-0
                          transition-all duration-300
                          ${card.emergency
                            ? "border-red-400/30 text-red-400 bg-red-50"
                            : "border-[#2d3c59]/15 text-[#2d3c59] bg-[#2d3c59]/[0.04]"
                          }`}
                      >
                        <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>

                    {/* Animated bottom line */}
                    <div className={`mt-4 h-[1.5px] w-0 group-hover:w-full transition-all duration-500
                      ${card.emergency ? "bg-red-400/30" : "bg-[#2d3c59]/15"}`}
                    />
                  </div>
                </Link>
              );
            })}
          </div>

        </div>
      </div>
    </div>
  );
}
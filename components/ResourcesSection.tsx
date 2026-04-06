"use client";

import Link from "next/link";
import { Outfit } from "next/font/google";
import {
  AlertTriangle,
  BookOpen,
  Stethoscope,
  FileText,
  Pill,
  Plane,
} from "lucide-react";

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
        <div className="flex flex-col sm:flex-row justify-between items-start gap-6 mb-20">

          {/* LEFT */}
          <h2 className="text-[3rem] sm:text-[3.6rem] font-medium text-[#2d3c59] leading-[1]">
            Resources <br />
            <span className="text-[#2d3c59]/50">& Guides</span>
          </h2>

          {/* RIGHT DESCRIPTION */}
          <p className="text-sm text-[#2d3c59]/50 max-w-[260px] leading-relaxed">
            Curated information, professional directories, and emergency support
          </p>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">

          {items.map((item, i) => {
            const Icon = item.icon;

            return (
              <Link
                key={i}
                href={item.href}
                className="group flex items-start gap-5 py-3"
              >

                {/* ICON FLIP */}
                <div className="perspective flex-shrink-0">
                  <div className="flip-inner w-14 h-14 relative">

                    {/* FRONT — light bg, dark icon */}
                    <div className="face face-front">
                      <Icon size={20} strokeWidth={1.8} />
                    </div>

                    {/* BACK — dark bg, light icon (same icon, inverted) */}
                    <div className="face face-back">
                      <Icon size={20} strokeWidth={1.8} />
                    </div>

                  </div>
                </div>

                {/* CONTENT */}
                <div className="max-w-[260px]">

                  <h3 className="text-[17px] font-medium text-[#2d3c59] leading-[1.4]">
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
            );
          })}

        </div>

      </div>

      <style>{`
        /* Flip container */
        .perspective {
          perspective: 1000px;
        }

        /* The card that flips */
        .flip-inner {
          transform-style: preserve-3d;
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 3px;
        }

        /* Trigger flip on group hover */
        .group:hover .flip-inner {
          transform: rotateY(180deg);
        }

        /* Shared face styles */
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

        /* Border color appears on hover for both faces */
        .group:hover .face {
          border-color: #94a378;
        }

        /* Front: light background, dark icon */
        .face-front {
          background: #eaebd0;
          color: #2d3c59;
        }

        /* Back: dark background, light icon — rotated to start hidden */
        .face-back {
          background: #2d3c59;
          color: #eaebd0;
          transform: rotateY(180deg);
        }
      `}</style>

    </section>
  );
}
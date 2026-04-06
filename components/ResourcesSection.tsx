"use client";

import Link from "next/link";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const cards = [
  {
    title: "Addisonian Crisis Info",
    desc: "Recognize symptoms, respond quickly, and manage critical emergencies with confidence.",
    tag: "Emergency",
    href: "/emergency",
  },
  {
    title: "Blog",
    desc: "Patient stories, expert insights, and practical guidance for daily life.",
    tag: "Articles",
    href: "/blog",
  },
  {
    title: "Find Professionals",
    desc: "Connect with trusted endocrinologists who specialise in Addison's disease.",
    tag: "Directory",
    href: "/directory",
  },
  {
    title: "Information Hub",
    desc: "Verified knowledge, symptoms, and care strategies for everyday management.",
    tag: "Guides",
    href: "/information",
  },
];

export function ResourcesSection() {
  return (
    <section className={`${outfit.className} relative py-24 bg-[#f5f5f5] overflow-hidden`}>

      {/* Background */}
      <div className="pointer-events-none absolute -top-28 -left-28 h-[380px] w-[380px] rounded-full bg-[#eaebd0] opacity-40 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-28 -right-28 h-[320px] w-[320px] rounded-full bg-[#2d3c59]/10 opacity-30 blur-[110px]" />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-end mb-14 gap-6">

          <h2 className="text-[2.8rem] sm:text-[3.6rem] font-medium text-[#2d3c59] leading-[0.95]">
            Resources <br />
            <span className="text-[#2d3c59]/50">& Guides</span>
          </h2>

          <p
            className="text-sm text-[#2d3c59]/50 leading-relaxed"
            style={{
              maxWidth: "220px",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            Curated information, professional directories, and emergency support
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-6">

          {cards.map((card, i) => (
            <Link
              key={i}
              href={card.href}
              className="
                relative h-[230px] p-6
                flex flex-col justify-between
                bg-white text-[#2d3c59]
                border border-[#2d3c59]/10
              "
              style={{
                borderRadius: "6px",
                clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)",
              }}
            >

              {/* Tag */}
              <span className="text-[10px] tracking-[0.18em] uppercase text-[#2d3c59]/50">
                {card.tag}
              </span>

              {/* Content */}
              <div>
                <h3 className="text-[20px] font-medium mb-2">
                  {card.title}
                </h3>

                <p
                  className="text-[13px] text-[#2d3c59]/60 leading-[1.7]"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {card.desc}
                </p>
              </div>

              {/* CTA */}
              <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.12em]">
                <span>Explore</span>
                <span>→</span>
              </div>

              {/* Line Hover */}
              <div className="hover-line" />

            </Link>
          ))}

        </div>
      </div>

      {/* Line Hover Style */}
      <style>{`
        .hover-line {
          position: absolute;
          bottom: 0;
          left: 50%;
          height: 2px;
          width: 0%;
          background: #2d3c59;
          transition: all 0.35s ease;
          transform: translateX(-50%);
        }

        a:hover .hover-line {
          width: 85%;
        }
      `}</style>

    </section>
  );
}
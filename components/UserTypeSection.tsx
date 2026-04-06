"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Cormorant_Garamond, Outfit } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const roles = [
  {
    id: "patient",
    title: "I have Addison's",
    subtitle: "Patient",
    description:
      "Get your personal emergency card, access curated medical resources, and connect with verified specialists and a supportive community across India.",
    cta: "Register as Patient",
    href: "/register",
    icon: (
      <svg className="h-[18px] w-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    tags: ["Emergency Card", "Community", "Resources"],
  },
  {
    id: "endo",
    title: "Endocrinologist",
    subtitle: "Specialist",
    description:
      "Volunteer your expertise to help Addison's patients across India. Get listed in our searchable specialist directory and make a real difference to those who need you.",
    cta: "Volunteer as Specialist",
    href: "/register",
    icon: (
      <svg className="h-[18px] w-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    tags: ["Directory Listing", "Volunteering", "Patient Support"],
  },
  {
    id: "psych",
    title: "Psychiatrist",
    subtitle: "Mental Health",
    description:
      "Offer dedicated mental health support to the Addison's community. Your compassion and expertise can transform the lives of those navigating this rare condition.",
    cta: "Volunteer as Psychiatrist",
    href: "/register",
    icon: (
      <svg className="h-[18px] w-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    tags: ["Mental Wellness", "Community Care", "Volunteering"],
  },
];

function AccordionPanel({ isOpen, children }: { isOpen: boolean; children: React.ReactNode }) {
  const innerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const el = innerRef.current;
    if (!el) return;
    const measure = () => {
      if (innerRef.current) setHeight(innerRef.current.scrollHeight);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [children]);

  return (
    <div
      style={{
        height: isOpen ? height : 0,
        opacity: isOpen ? 1 : 0,
        overflow: "hidden",
        transition:
          "height 550ms cubic-bezier(0.16,1,0.3,1), opacity 400ms cubic-bezier(0.16,1,0.3,1)",
      }}
    >
      <div ref={innerRef}>{children}</div>
    </div>
  );
}

export function UserTypeSection() {
  const [active, setActive] = useState<string>("patient");

  return (
    <section
      className={`${outfit.className} relative min-h-[90vh] flex items-center py-14 sm:py-20 overflow-hidden bg-[#f5f5f5]`}
    >
      {/* Background blobs */}
      <div className="pointer-events-none absolute -top-20 -left-20 h-[400px] w-[400px] rounded-full bg-[#eaebd0] opacity-45 blur-[80px]" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-[320px] w-[320px] rounded-full bg-[#2d3c59]/10 opacity-30 blur-[96px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full">
        <div className="lg:pl-8 xl:pl-12">

          {/* Header — stacks on mobile, row on sm+ */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 sm:gap-4 mb-7 sm:mb-9">
            <h2
              className={`${cormorant.className} text-[2.4rem] sm:text-[clamp(2.8rem,5vw,4rem)] font-semibold leading-[0.9] text-[#2d3c59] tracking-tight`}
            >
              Who{" "}
              <span className="font-normal text-[#2d3c59]/65">are you?</span>
            </h2>
            <p
              className={`${outfit.className} sm:max-w-[220px] text-[12px] sm:text-[13px] font-light leading-[1.65] text-[#2d3c59]/48 sm:pb-0.5`}
            >
              Select your role below to find out how this community can help you.
            </p>
          </div>

          {/* Accordion List */}
          <div className="border-t border-[#2d3c59]/10">
            {roles.map((role) => {
              const isOpen = active === role.id;

              return (
                <div
                  key={role.id}
                  className={`
                    border-b border-[#2d3c59]/10
                    flex flex-col sm:flex-row sm:items-stretch
                    transition-colors duration-300
                    ${isOpen ? "bg-[#2d3c59]/[0.04]" : "bg-transparent"}
                  `}
                >
                  {/* Left: trigger button + accordion panel */}
                  <div className="flex flex-col flex-1 min-w-0">

                    {/* Trigger row */}
                    <button
                      type="button"
                      onClick={() => setActive(isOpen ? "" : role.id)}
                      className="flex flex-row items-center gap-4 sm:gap-5 w-full text-left px-1 py-5 sm:py-6 bg-transparent border-none cursor-pointer focus:outline-none"
                    >
                      {/* Square icon with 3px border radius */}
                      <div
                        className={`
                          flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center
                          border transition-all duration-500
                          ${isOpen
                            ? "bg-[#2d3c59] border-[#2d3c59] text-[#eaebd0] scale-[1.06] shadow-[0_4px_18px_rgba(45,60,89,0.22)]"
                            : "bg-transparent border-[#2d3c59]/20 text-[#2d3c59]/55"
                          }
                        `}
                        style={{ borderRadius: "3px" }}
                      >
                        {role.icon}
                      </div>

                      {/* Title + subtitle badge */}
                      <div className="flex items-baseline flex-wrap flex-1 min-w-0">
                        <span
                          className={`
                            ${cormorant.className}
                            text-[1.5rem] sm:text-[clamp(1.5rem,2.5vw,2.1rem)] font-semibold leading-tight
                            transition-colors duration-300
                            ${isOpen ? "text-[#2d3c59]" : "text-[#2d3c59]/58"}
                          `}
                        >
                          {role.title}
                        </span>
                        <span
                          className={`
                            ${outfit.className}
                            text-[9px] sm:text-[10px] uppercase tracking-[0.18em] font-medium ml-2
                            transition-colors duration-300
                            ${isOpen ? "text-[#2d3c59]/38" : "text-[#2d3c59]/25"}
                          `}
                        >
                          {role.subtitle}
                        </span>
                      </div>
                    </button>

                    {/* Accordion panel */}
                    <AccordionPanel isOpen={isOpen}>
                      <div className="pb-6 sm:pb-8 pl-[56px] sm:pl-16 pr-1">
                        <p
                          className={`${outfit.className} text-[13px] sm:text-[13.5px] font-light leading-[1.85] text-[#2d3c59]/52 max-w-lg`}
                        >
                          {role.description}
                        </p>

                        <div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
                          {role.tags.map((tag, i) => (
                            <span
                              key={tag}
                              className={`${outfit.className} rounded-full border border-[#2d3c59]/12 px-3 sm:px-3.5 py-1 text-[10px] sm:text-[10.5px] uppercase tracking-[0.12em] text-[#2d3c59]/42 font-medium bg-[#2d3c59]/[0.025]`}
                              style={{
                                opacity: isOpen ? 1 : 0,
                                transform: isOpen ? "translateY(0)" : "translateY(4px)",
                                transition: "opacity 350ms ease, transform 350ms ease",
                                transitionDelay: isOpen ? `${180 + i * 60}ms` : "0ms",
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* CTA button inside panel on mobile only */}
                        <Link
                          href={role.href}
                          className={`
                            ${outfit.className} sm:hidden
                            mt-5 inline-flex items-center justify-center gap-2
                            rounded-full px-5 py-[10px]
                            text-[10px] font-medium tracking-[0.08em] uppercase whitespace-nowrap
                            text-[#eaebd0] bg-[#2d3c59]
                            shadow-[0_2px_10px_rgba(45,60,89,0.18)]
                            transition-all duration-200
                            hover:shadow-[0_4px_18px_rgba(45,60,89,0.28)] hover:-translate-y-px
                            group
                          `}
                        >
                          <span>{role.cta}</span>
                          <svg className="h-3 w-3 flex-shrink-0 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </Link>
                      </div>
                    </AccordionPanel>
                  </div>

                  {/* Right: CTA column — desktop only (hidden on mobile, shown inside panel instead) */}
                  <div className="hidden sm:flex flex-shrink-0 w-[260px] items-center justify-end py-4 pl-6 pr-1">
                    <Link
                      href={role.href}
                      className={`
                        ${outfit.className}
                        inline-flex items-center justify-center gap-2
                        w-full rounded-full px-6 py-[11px]
                        text-[11px] font-medium tracking-[0.08em] uppercase whitespace-nowrap
                        text-[#eaebd0] bg-[#2d3c59]
                        shadow-[0_2px_10px_rgba(45,60,89,0.18)]
                        transition-all duration-200
                        hover:shadow-[0_4px_18px_rgba(45,60,89,0.28)] hover:-translate-y-px
                        group
                      `}
                    >
                      <span className="whitespace-nowrap">{role.cta}</span>
                      <svg
                        className="h-3.5 w-3.5 flex-shrink-0 transition-transform duration-200 group-hover:translate-x-0.5"
                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
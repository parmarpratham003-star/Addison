"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Cormorant_Garamond, Outfit } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-outfit",
});

const roles = [
  {
    id: "patient",
    number: "01",
    title: "I have Addison's",
    subtitle: "Patient",
    description:
      "Get your personal emergency card, access curated medical resources, and connect with verified specialists and a supportive community across India.",
    cta: "Register as Patient",
    href: "/register",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    tags: ["Emergency Card", "Community", "Resources"],
  },
  {
    id: "endo",
    number: "02",
    title: "Endocrinologist",
    subtitle: "Specialist",
    description:
      "Volunteer your expertise to help Addison's patients across India. Get listed in our searchable specialist directory and make a real difference to those who need you.",
    cta: "Volunteer as Specialist",
    href: "/register",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    tags: ["Directory Listing", "Volunteering", "Patient Support"],
  },
  {
    id: "psych",
    number: "03",
    title: "Psychiatrist",
    subtitle: "Mental Health",
    description:
      "Offer dedicated mental health support to the Addison's community. Your compassion and expertise can transform the lives of those navigating this rare condition.",
    cta: "Volunteer as Psychiatrist",
    href: "/register",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    tags: ["Mental Wellness", "Community Care", "Volunteering"],
  },
];

function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

export function UserTypeSection() {
  const [active, setActive] = useState<string>("patient");
  const { ref: sectionRef, visible: sectionVisible } = useScrollAnimation();

  return (
    <section
      ref={sectionRef}
      className={`${cormorant.variable} ${outfit.variable} relative py-24 overflow-hidden`}
      // Hero text colour (#f5f5f5) used as the section background
      style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif", backgroundColor: "#f5f5f5" }}
    >

      {/* Background blobs */}
      <div
        className="pointer-events-none absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-[#eaebd0] opacity-50 blur-[100px] animate-pulse"
        style={{ animationDuration: "6s" }}
      />
      <div
        className="pointer-events-none absolute -bottom-32 -right-32 h-[400px] w-[400px] rounded-full bg-[#2d3c59]/10 opacity-30 blur-[120px] animate-pulse"
        style={{ animationDuration: "8s", animationDelay: "2s" }}
      />

      {/* Outer container */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">

        {/* Inner left column aligns with hero */}
        <div className="lg:pl-8 xl:pl-12">

          {/* Header */}
          <div
            className={`mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 transition-all duration-700 ${
              sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div>
              {/* ✅ Italic removed */}
              <h2
                className="text-[3rem] sm:text-[4.5rem] font-semibold leading-[0.95] text-[#2d3c59]"
                style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
              >
                Who{" "}
                <span className="font-normal text-[#2d3c59]/70">are you?</span>
              </h2>
            </div>
            <p
              className="max-w-[240px] text-sm font-light leading-relaxed text-[#2d3c59]/50 sm:pb-2"
              style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
            >
              Select your role below to find out how this community can help you.
            </p>
          </div>

          {/* Accordion */}
          <div className="flex flex-col border-t border-[#2d3c59]/10">
            {roles.map((role, index) => {
              const isOpen = active === role.id;
              return (
                <div
                  key={role.id}
                  className={`
                    border-b border-[#2d3c59]/10
                    transition-all duration-700
                    ${isOpen ? "bg-[#2d3c59]/[0.04]" : "bg-transparent hover:bg-[#2d3c59]/[0.02]"}
                    ${sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
                  `}
                  style={{
                    transitionDelay: sectionVisible ? `${index * 120}ms` : "0ms",
                  }}
                >
                  {/* Row header */}
                  <button
                    type="button"
                    onClick={() => setActive(isOpen ? "" : role.id)}
                    className="w-full flex items-center gap-5 sm:gap-6 py-7 px-2 text-left group/btn"
                  >
                    {/* Number */}
                    <span
                      className={`
                        hidden sm:block w-10 text-[0.65rem] uppercase tracking-[0.25em] font-medium flex-shrink-0
                        transition-colors duration-300
                        ${isOpen ? "text-[#2d3c59]/50" : "text-[#2d3c59]/25"}
                      `}
                      style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
                    >
                      {role.number}
                    </span>

                    {/* Icon circle */}
                    <div
                      className={`
                        flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full
                        border transition-all duration-500 ease-out
                        ${isOpen
                          ? "bg-[#2d3c59] border-[#2d3c59] text-[#eaebd0] scale-110 shadow-[0_4px_20px_rgba(45,60,89,0.25)]"
                          : "bg-transparent border-[#2d3c59]/20 text-[#2d3c59]/60 group-hover/btn:border-[#2d3c59]/40 group-hover/btn:text-[#2d3c59] group-hover/btn:scale-105"
                        }
                      `}
                    >
                      {role.icon}
                    </div>

                    {/* Title + subtitle */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline gap-3 flex-wrap">
                        <span
                          className={`
                            text-[1.6rem] sm:text-[2.2rem] font-semibold leading-tight
                            transition-all duration-300
                            ${isOpen ? "text-[#2d3c59]" : "text-[#2d3c59]/60 group-hover/btn:text-[#2d3c59]/90"}
                          `}
                          style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
                        >
                          {role.title}
                        </span>
                        <span
                          className={`
                            text-[0.65rem] uppercase tracking-[0.2em] font-medium
                            transition-colors duration-300
                            ${isOpen ? "text-[#2d3c59]/40" : "text-[#2d3c59]/25"}
                          `}
                          style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
                        >
                          {role.subtitle}
                        </span>
                      </div>
                    </div>

                    {/* Chevron */}
                    <div
                      className={`
                        flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full
                        border transition-all duration-400
                        ${isOpen
                          ? "border-[#2d3c59]/30 bg-[#2d3c59]/5 rotate-180"
                          : "border-[#2d3c59]/10 bg-transparent group-hover/btn:border-[#2d3c59]/20"
                        }
                      `}
                    >
                      <svg
                        className="h-3.5 w-3.5 text-[#2d3c59]/40"
                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>

                  {/* Expanded content */}
                  <div
                    className={`
                      overflow-hidden
                      transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
                      ${isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}
                    `}
                  >
                    <div
                      className={`
                        pb-10 px-2 sm:pl-[88px] sm:pr-2
                        flex flex-col sm:flex-row gap-8 sm:gap-12 items-start
                        transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
                        ${isOpen ? "translate-y-0" : "-translate-y-3"}
                      `}
                    >
                      {/* Description + tags */}
                      <div className="flex-1">
                        <p
                          className="text-sm font-light leading-[1.8] text-[#2d3c59]/55 max-w-lg"
                          style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
                        >
                          {role.description}
                        </p>

                        <div className="mt-5 flex flex-wrap gap-2">
                          {role.tags.map((tag, i) => (
                            <span
                              key={tag}
                              className={`
                                rounded-full border border-[#2d3c59]/12 px-4 py-1.5
                                text-[0.68rem] uppercase tracking-[0.12em] text-[#2d3c59]/45 font-medium
                                bg-[#2d3c59]/[0.03]
                                transition-all duration-500
                                ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"}
                              `}
                              style={{
                                fontFamily: "var(--font-outfit), Outfit, sans-serif",
                                transitionDelay: isOpen ? `${150 + i * 60}ms` : "0ms",
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <div
                        className={`
                          flex-shrink-0
                          transition-all duration-500
                          ${isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-3"}
                        `}
                        style={{ transitionDelay: isOpen ? "200ms" : "0ms" }}
                      >
                        <Link
                          href={role.href}
                          className="
                            inline-flex items-center gap-3 rounded-full
                            bg-[#2d3c59] px-8 py-3.5
                            text-[0.75rem] font-medium tracking-[0.08em] uppercase text-[#eaebd0]
                            shadow-[0_2px_12px_rgba(45,60,89,0.2)]
                            transition-all duration-200
                            hover:bg-[#1f2a40] hover:shadow-[0_4px_20px_rgba(45,60,89,0.35)] hover:-translate-y-px
                            group/link
                          "
                          style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
                        >
                          {role.cta}
                          <svg
                            className="h-3.5 w-3.5 transition-transform duration-200 group-hover/link:translate-x-1"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </Link>
                      </div>

                    </div>
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
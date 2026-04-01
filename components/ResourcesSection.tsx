import Link from "next/link";
import { Cormorant_Garamond, Outfit } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cormorant",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-outfit",
});

export function ResourcesSection() {
  return (
    <section
      className={`${cormorant.variable} ${outfit.variable} bg-[#f3f2ee] py-28 px-6`}
      style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex items-end justify-between mb-20">
          <h2
            className="text-[3.5rem] sm:text-[4.5rem] leading-[0.95] text-[#2d3c59]"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Resources
          </h2>

          <span className="text-[0.7rem] tracking-[0.3em] uppercase text-[#2d3c59]/40">
            Addison&apos;s Disease
          </span>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[200px]">

          {/* 🔵 BIG CARD */}
          <Link
            href="/emergency"
            className="relative md:col-span-2 row-span-2 bg-[#2d3c59] text-[#eaebd0] p-10 flex flex-col justify-between overflow-hidden"
            style={{ borderRadius: "36px" }}
          >
            <div className="absolute top-0 right-0 w-60 h-60 bg-white/10 rounded-full blur-2xl" />

            <div>
              <span className="text-[0.65rem] uppercase tracking-[0.25em] text-[#eaebd0]/60">
                Emergency
              </span>

              <h3
                className="mt-4 text-4xl italic leading-snug"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Addisonian Crisis Info
              </h3>

              <p className="mt-5 text-sm text-[#eaebd0]/70 max-w-md leading-relaxed">
                Learn how to recognize symptoms, respond quickly, and manage
                critical Addisonian emergencies with confidence.
              </p>

              <p className="mt-3 text-xs text-[#eaebd0]/50">
                Emergency signs • Treatment steps • Prevention
              </p>
            </div>

            <span className="text-sm text-[#eaebd0]/70">
              Explore →
            </span>
          </Link>

          {/* ⚪ BLOG */}
          <Link
            href="/blog"
            className="bg-[#e8e6e1] p-6 flex flex-col justify-between"
            style={{ borderRadius: "28px" }}
          >
            <span className="text-[0.65rem] uppercase tracking-[0.25em] text-[#2d3c59]/30">
              Articles
            </span>

            <div>
              <h3
                className="text-2xl italic text-[#2d3c59]"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Blog
              </h3>

              <p className="mt-2 text-sm text-[#2d3c59]/50">
                Patient stories, expert insights, and guidance.
              </p>
            </div>

            <span className="text-sm text-[#2d3c59]/40">
              Explore →
            </span>
          </Link>

          {/* 🟢 INFO HUB */}
          <Link
            href="/information"
            className="relative bg-[#94a378] text-[#f3f2ee] p-6 flex flex-col justify-between overflow-hidden"
            style={{ borderRadius: "28px" }}
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full" />

            <span className="text-[0.65rem] uppercase tracking-[0.25em] text-white/70">
              Guides
            </span>

            <div>
              <h3
                className="text-2xl italic"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Information Hub
              </h3>

              <p className="mt-2 text-sm text-white/80">
                Verified knowledge, symptoms, and care strategies.
              </p>
            </div>

            <span className="text-sm text-white/80">
              Explore →
            </span>
          </Link>

          {/* ⚪ DIRECTORY */}
          <Link
            href="/directory"
            className="md:col-span-2 bg-[#e8e6e1] p-8 flex flex-col justify-between"
            style={{ borderRadius: "36px" }}
          >
            <span className="text-[0.65rem] uppercase tracking-[0.25em] text-[#2d3c59]/30">
              Directory
            </span>

            <div>
              <h3
                className="text-3xl italic text-[#2d3c59]"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Find Professionals
              </h3>

              <p className="mt-3 text-sm text-[#2d3c59]/50 max-w-lg">
                Connect with trusted endocrinologists and specialists who
                understand Addison’s disease and provide personalized care.
              </p>
            </div>

            <span className="text-sm text-[#2d3c59]/40">
              Explore →
            </span>
          </Link>

          {/* 🔵 QUOTE */}
          <div
            className="bg-[#2d3c59] text-[#eaebd0] p-6 flex items-center justify-center text-center"
            style={{ borderRadius: "28px" }}
          >
            <p
              className="italic text-sm text-[#eaebd0]/70"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Your health,<br /> informed.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
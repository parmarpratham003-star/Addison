import Link from "next/link";
import { createPageMetadata } from "@/lib/seo";
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

export const metadata = createPageMetadata({
  title: "Professional Directory | Addison's Disease Community",
  description:
    "Find volunteer endocrinologists and psychiatrists who support the Addison's disease community.",
  path: "/directory",
});

const features = [
  {
    label: "Location",
    desc: "Search professionals by city or state across India",
    number: "01",
  },
  {
    label: "Specialty",
    desc: "Endocrinology and Psychiatry specialists",
    number: "02",
  },
  {
    label: "Language",
    desc: "Filter by your preferred spoken language",
    number: "03",
  },
];

export default function DirectoryPage() {
  return (
    <div
      className={`${cormorant.variable} ${outfit.variable} bg-[#f5f5f5] min-h-screen`}
      style={{ fontFamily: "var(--font-outfit)" }}
    >

      {/* ── HERO ── */}
      <div
        className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-14 pt-16 sm:pt-12pb-12"
        style={{ borderBottom: "1px solid rgba(45,60,89,0.12)" }}
      >
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">

          <div>
            <p className="text-[10px] uppercase tracking-[0.35em] text-[#2d3c59]/35 mb-5">
              Find a Specialist
            </p>
            <h1
              className="text-[3.2rem] sm:text-[5.5rem] font-semibold leading-[0.88] text-[#2d3c59]"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Professional<br />
              <span className="text-[#2d3c59]/30 font-normal">Directory</span>
            </h1>
          </div>

          <p className="text-[12px] text-[#2d3c59]/50 max-w-[200px] leading-[1.8] sm:pb-3">
            Verified endocrinologists and psychiatrists supporting the Addison&apos;s community.
          </p>

        </div>
      </div>

      {/* ── IMAGE + DESCRIPTION SPLIT ── */}
      <div
        className="max-w-[1080px] h-[300px] mx-auto grid lg:grid-cols-2"
        style={{ borderBottom: "1px solid rgba(45,60,89,0.12)" }}
      >

        {/* Image */}
        <div
          className="overflow-hidden min-h-[200px] "
          style={{ borderRight: "1px solid rgba(45,60,89,0.12)" }}
        >
          <img
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1200&q=80"
            alt="Doctors"
            className="w-full h-full object-cover"
            style={{ minHeight: "200px" }}
          />
        </div>

        {/* Description */}
        <div className="px-8 sm:px-12 py-12 h-[300px] flex flex-col justify-between gap-10">
          <div>
            <p className="text-[10px] uppercase tracking-[0.28em] text-[#2d3c59]/30 mb-5">
              About
            </p>
            <p className="text-[14px] text-[#2d3c59]/65 leading-[1.9] max-w-md">
              Volunteer endocrinologists and psychiatrists who have registered to support
              the Addison&apos;s community. All listings are reviewed and verified by our team
              before appearing in the directory.
            </p>
          </div>

          <p className="text-[13px] text-[#2d3c59]/55 leading-[1.85]">
            Are you an endocrinologist or psychiatrist?{" "}
            <Link
              href="/register"
              className="text-[#2d3c59] font-medium underline underline-offset-4 hover:text-[#2d3c59]/60 transition-colors"
            >
              Register to volunteer
            </Link>{" "}
            and join the directory.
          </p>
        </div>

      </div>

      {/* ── FEATURES — ruled row ── */}
      <div
        className="max-w-6xl mx-auto grid sm:grid-cols-3"
        style={{ borderBottom: "1px solid rgba(45,60,89,0.12)" }}
      >
        {features.map((f, i) => (
          <div
            key={f.label}
            className="px-8 sm:px-10 py-10 sm:py-12"
            style={{
              borderRight: i < 2 ? "1px solid rgba(45,60,89,0.12)" : "none",
            }}
          >
            <div className="flex items-start justify-between mb-6">
              <span
                className="text-[0.75rem] font-medium text-[#2d3c59]/20"
                style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.1rem" }}
              >
                {f.number}
              </span>
              <div className="w-5 h-px bg-[#2d3c59]/20 mt-2.5" />
            </div>
            <p
              className="text-[1.3rem] sm:text-[1.5rem] font-semibold text-[#2d3c59] mb-2 leading-tight"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              {f.label}
            </p>
            <p className="text-[12px] text-[#2d3c59]/45 leading-[1.7]">
              {f.desc}
            </p>
          </div>
        ))}
      </div>

      {/* ── FOOT ── */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-14 py-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p className="text-[11px] text-[#2d3c59]/40 leading-[1.7] max-w-lg">
          Professionals can be searched by location, specialty, and language once the directory is populated.
        </p>
        <Link
          href="/register"
          className="flex-shrink-0 inline-flex items-center gap-3 bg-[#2d3c59] text-[#eaebd0] px-6 py-3.5 text-[10px] uppercase tracking-[0.2em] font-medium transition-opacity hover:opacity-80"
        >
          Join Directory
          <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>

    </div>
  );
}
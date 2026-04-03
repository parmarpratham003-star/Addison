import Link from "next/link";
import { Cormorant_Garamond, Outfit } from "next/font/google";

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

export function ResourcesSection() {
  return (
    <section
      className={`${cormorant.variable} ${outfit.variable} bg-[#f3f2ee] py-20 overflow-hidden`}
      style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="lg:pl-8 xl:pl-12">

          {/* Header */}
          <div className="mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] text-[#2d3c59]"
              style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
            >
              Resources
              <span className="font-normal italic text-[#2d3c59]/60"> & Guides</span>
            </h2>
            <p
              className="max-w-[240px] text-base font-light leading-relaxed text-[#2d3c59]/60 sm:pb-2"
              style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
            >
              Curated information, professional directories, and emergency support
            </p>
          </div>

          {/* Masonry grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">

            {/* Emergency — dark card */}
            <Link
              href="/emergency"
              className="group bg-[#2d3c59] rounded-[22px] overflow-hidden flex flex-col break-inside-avoid mb-4 block
                transition-shadow duration-300 hover:shadow-[0_12px_40px_rgba(45,60,89,0.22)]"
            >
              <div className="overflow-hidden rounded-t-[22px]">
                <img
                  src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=700&q=80"
                  alt="Emergency care"
                  className="w-full object-cover h-56 transition-opacity duration-500 group-hover:opacity-75"
                />
              </div>
              <div className="p-5 pb-6 flex flex-col gap-3">
                <span className="text-[0.7rem] tracking-[0.2em] uppercase text-[#eaebd0]/40 font-light"
                  style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}>
                  Emergency
                </span>
                <h3 className="text-[1.6rem] font-semibold leading-[1.15] text-[#eaebd0]"
                  style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}>
                  Addisonian Crisis Info
                </h3>
                <p className="text-sm font-light leading-[1.75] text-[#eaebd0]/60"
                  style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}>
                  Learn how to recognize symptoms, respond quickly, and manage
                  critical Addisonian emergencies with confidence.
                </p>
                <p className="text-[0.72rem] font-light text-[#eaebd0]/30"
                  style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}>
                  Emergency signs · Treatment steps · Prevention
                </p>
                <span className="text-[0.75rem] font-medium text-[#eaebd0]/40 mt-1 tracking-wide
                  transition-colors duration-200 group-hover:text-[#eaebd0]/75"
                  style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}>
                  Explore →
                </span>
              </div>
            </Link>

            {/* Quote card */}
            <div className="bg-[#eaebd0] rounded-[22px] p-6 break-inside-avoid mb-4">
              <p className="text-[1.4rem] font-semibold leading-[1.4] text-[#2d3c59]/50"
                style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}>
                Your health,<br />
                <span className="font-normal italic">informed.</span>
              </p>
            </div>

            {/* Blog */}
            <Link
              href="/blog"
              className="group bg-white rounded-[22px] overflow-hidden flex flex-col break-inside-avoid mb-4 block
                transition-shadow duration-300 hover:shadow-[0_12px_40px_rgba(45,60,89,0.10)]"
            >
              <div className="overflow-hidden rounded-t-[22px]">
                <img
                  src="https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&q=80"
                  alt="Blog articles"
                  className="w-full object-cover h-40 transition-opacity duration-500 group-hover:opacity-75"
                />
              </div>
              <div className="p-5 pb-6 flex flex-col gap-2">
                <span className="text-[0.7rem] tracking-[0.2em] uppercase text-[#2d3c59]/30 font-light"
                  style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}>
                  Articles
                </span>
                <h3 className="text-[1.5rem] font-semibold leading-[1.15] text-[#2d3c59]"
                  style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}>
                  Blog
                </h3>
                <p className="text-sm font-light leading-[1.7] text-[#2d3c59]/50"
                  style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}>
                  Patient stories, expert insights, and guidance.
                </p>
                <span className="text-[0.75rem] font-medium text-[#2d3c59]/35 mt-1 tracking-wide
                  transition-colors duration-200 group-hover:text-[#2d3c59]/65"
                  style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}>
                  Explore →
                </span>
              </div>
            </Link>

            {/* Directory */}
            <Link
              href="/directory"
              className="group bg-white rounded-[22px] overflow-hidden flex flex-col break-inside-avoid mb-4 block
                transition-shadow duration-300 hover:shadow-[0_12px_40px_rgba(45,60,89,0.10)]"
            >
              <div className="overflow-hidden rounded-t-[22px]">
                <img
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80"
                  alt="Find professionals"
                  className="w-full object-cover h-60 transition-opacity duration-500 group-hover:opacity-75"
                />
              </div>
              <div className="p-5 pb-6 flex flex-col gap-2">
                <span className="text-[0.7rem] tracking-[0.2em] uppercase text-[#2d3c59]/30 font-light"
                  style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}>
                  Directory
                </span>
                <h3 className="text-[1.5rem] font-semibold leading-[1.15] text-[#2d3c59]"
                  style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}>
                  Find Professionals
                </h3>
                <p className="text-sm font-light leading-[1.7] text-[#2d3c59]/50"
                  style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}>
                  Connect with trusted endocrinologists and specialists who
                  understand Addison&apos;s disease and provide personalized care.
                </p>
                <span className="text-[0.75rem] font-medium text-[#2d3c59]/35 mt-1 tracking-wide
                  transition-colors duration-200 group-hover:text-[#2d3c59]/65"
                  style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}>
                  Explore →
                </span>
              </div>
            </Link>

            {/* Information Hub */}
            <Link
              href="/information"
              className="group bg-[#94a378] rounded-[22px] overflow-hidden flex flex-col break-inside-avoid mb-4 block
                transition-shadow duration-300 hover:shadow-[0_12px_40px_rgba(148,163,120,0.35)]"
            >
              <div className="overflow-hidden rounded-t-[22px]">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80"
                  alt="Information hub"
                  className="w-full object-cover h-64 transition-opacity duration-500 group-hover:opacity-75"
                />
              </div>
              <div className="p-5 pb-6 flex flex-col gap-2">
                <span className="text-[0.7rem] tracking-[0.2em] uppercase text-white/40 font-light"
                  style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}>
                  Guides
                </span>
                <h3 className="text-[1.5rem] font-semibold leading-[1.15] text-white"
                  style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}>
                  Information Hub
                </h3>
                <p className="text-sm font-light leading-[1.7] text-white/65"
                  style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}>
                  Verified knowledge, symptoms, and care strategies.
                </p>
                <span className="text-[0.75rem] font-medium text-white/45 mt-1 tracking-wide
                  transition-colors duration-200 group-hover:text-white/75"
                  style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}>
                  Explore →
                </span>
              </div>
            </Link>

            {/* Dark accent quote */}
            <div className="bg-[#2d3c59] rounded-[22px] p-6 flex items-center justify-center text-center break-inside-avoid mb-4">
              <p className="text-[1.1rem] font-semibold leading-relaxed text-[#eaebd0]/60"
                style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}>
                Your health,<br />
                <span className="font-normal italic">your confidence.</span>
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
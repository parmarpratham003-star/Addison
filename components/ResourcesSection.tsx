import Link from "next/link";
import { Playfair_Display, DM_Sans } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm",
});

export function ResourcesSection() {
  return (
    <section
      className={`${playfair.variable} ${dmSans.variable} bg-[#f3f2ee] py-24 px-6`}
      style={{ fontFamily: "var(--font-dm), DM Sans, sans-serif" }}
    >
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <h2
            className="text-[3.2rem] leading-[0.95] text-[#2d3c59] font-normal"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Resources
          </h2>
          <span className="text-[0.58rem] tracking-[0.28em] uppercase text-[#2d3c59]/30 font-light">
            Addison&apos;s Disease
          </span>
        </div>

        {/* Masonry — 3 columns */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">

          {/* Emergency — tall dark card, col 1 */}
          <Link
            href="/emergency"
            className="group bg-[#2d3c59] rounded-[22px] overflow-hidden flex flex-col break-inside-avoid mb-4 block"
          >
            <div className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=700&q=80"
                alt="Emergency care"
                className="w-full object-cover h-56 transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-5 pb-6 flex flex-col gap-3">
              <span className="text-[0.58rem] tracking-[0.28em] uppercase text-[#eaebd0]/40 font-light">
                Emergency
              </span>
              <h3
                className="text-[1.75rem] italic leading-[1.25] text-[#eaebd0] font-normal"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Addisonian Crisis Info
              </h3>
              <p className="text-[0.81rem] leading-[1.75] text-[#eaebd0]/55 font-light">
                Learn how to recognize symptoms, respond quickly, and manage
                critical Addisonian emergencies with confidence.
              </p>
              <p className="text-[0.7rem] text-[#eaebd0]/28 font-light">
                Emergency signs · Treatment steps · Prevention
              </p>
              <span className="text-[0.76rem] text-[#eaebd0]/38 mt-1">
                Explore →
              </span>
            </div>
          </Link>

          {/* Quote card — col 1 bottom */}
          <div className="bg-[#eaebd0] rounded-[22px] p-6 break-inside-avoid mb-4">
            <p
              className="text-[1.35rem] italic text-[#2d3c59]/50 leading-[1.55] font-normal"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Your health,<br />informed.
            </p>
          </div>

          {/* Blog — col 2 top */}
          <Link
            href="/blog"
            className="group bg-white rounded-[22px] overflow-hidden flex flex-col break-inside-avoid mb-4 block"
          >
            <div className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&q=80"
                alt="Blog articles"
                className="w-full object-cover h-40 transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-5 pb-6 flex flex-col gap-2">
              <span className="text-[0.58rem] tracking-[0.28em] uppercase text-[#2d3c59]/30 font-light">
                Articles
              </span>
              <h3
                className="text-[1.5rem] italic text-[#2d3c59] font-normal"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Blog
              </h3>
              <p className="text-[0.8rem] leading-[1.7] text-[#2d3c59]/46 font-light">
                Patient stories, expert insights, and guidance.
              </p>
              <span className="text-[0.76rem] text-[#2d3c59]/30 mt-1">
                Explore →
              </span>
            </div>
          </Link>

          {/* Directory — col 2 bottom, taller image */}
          <Link
            href="/directory"
            className="group bg-white rounded-[22px] overflow-hidden flex flex-col break-inside-avoid mb-4 block"
          >
            <div className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80"
                alt="Find professionals"
                className="w-full object-cover h-60 transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-5 pb-6 flex flex-col gap-2">
              <span className="text-[0.58rem] tracking-[0.28em] uppercase text-[#2d3c59]/30 font-light">
                Directory
              </span>
              <h3
                className="text-[1.5rem] italic text-[#2d3c59] font-normal"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Find Professionals
              </h3>
              <p className="text-[0.8rem] leading-[1.7] text-[#2d3c59]/46 font-light">
                Connect with trusted endocrinologists and specialists who
                understand Addison&apos;s disease and provide personalized care.
              </p>
              <span className="text-[0.76rem] text-[#2d3c59]/30 mt-1">
                Explore →
              </span>
            </div>
          </Link>

          {/* Information Hub — col 3 top, tallest image */}
          <Link
            href="/information"
            className="group bg-[#94a378] rounded-[22px] overflow-hidden flex flex-col break-inside-avoid mb-4 block"
          >
            <div className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80"
                alt="Information hub"
                className="w-full object-cover h-64 transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-5 pb-6 flex flex-col gap-2">
              <span className="text-[0.58rem] tracking-[0.28em] uppercase text-white/40 font-light">
                Guides
              </span>
              <h3
                className="text-[1.5rem] italic text-white font-normal"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Information Hub
              </h3>
              <p className="text-[0.8rem] leading-[1.7] text-white/65 font-light">
                Verified knowledge, symptoms, and care strategies.
              </p>
              <span className="text-[0.76rem] text-white/45 mt-1">
                Explore →
              </span>
            </div>
          </Link>

          {/* Dark accent quote — col 3 bottom */}
          <div className="bg-[#2d3c59] rounded-[22px] p-6 flex items-center justify-center text-center break-inside-avoid mb-4">
            <p
              className="text-[0.95rem] italic text-[#eaebd0]/60 leading-relaxed font-normal"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Your health,<br />your confidence.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
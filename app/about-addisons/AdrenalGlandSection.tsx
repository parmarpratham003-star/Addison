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

export function AdrenalGlandsSection() {
  return (
    <div
      className={`${cormorant.variable} ${outfit.variable}`}
      style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
    >
      {/* ── 01 ADRENAL GLANDS ── */}
      <div className="flex flex-col lg:flex-row items-stretch border-b border-[#2d3c59]/10 min-h-[420px]">
        {/* Image */}
        <div className="relative flex-shrink-0 lg:w-[38%] h-[220px] sm:h-[280px] lg:h-auto overflow-hidden">
          <div className="absolute bottom-0 left-0 w-[82%] h-[88%] bg-[#2d3c59]/[0.04]" />
          <div className="absolute top-4 left-6 sm:top-6 sm:left-12 right-0 bottom-4 sm:bottom-6 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&auto=format&fit=crop&q=60"
              alt="Adrenal glands medical"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex items-center px-5 py-10 sm:px-8 sm:py-14 lg:px-16 xl:px-20">
          <div className="max-w-xl">
            <span
              className="text-[0.65rem] uppercase tracking-[0.25em] text-[#2d3c59]/35 mb-4 block"
              style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
            >
               Overview
            </span>
            <h2
              className="text-[2rem] sm:text-[2.6rem] xl:text-[3.6rem] font-semibold leading-[1.05] text-[#2d3c59] mb-4 sm:mb-6"
              style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
            >
              What are the
              <span className="block font-normal italic text-[#2d3c59]/52">
                adrenal glands?
              </span>
            </h2>
            <p
              className="text-[13px] sm:text-sm font-light leading-[1.85] sm:leading-[1.9] text-[#2d3c59]/58"
              style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
            >
              The adrenal glands sit on top of the kidneys and produce hormones
              essential for life: cortisol (helps manage stress, blood sugar,
              blood pressure) and aldosterone (manages salt and water balance). In
              Addison&apos;s disease, these glands are damaged, usually by an
              autoimmune response.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
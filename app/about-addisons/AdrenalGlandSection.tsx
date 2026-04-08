  import Image from "next/image";
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
      <section
        className={`${cormorant.variable} ${outfit.variable} bg-[#f5f5f5] py-16 sm:py-24`}
        style={{ fontFamily: "var(--font-outfit)" }}
      >
        <div className="max-w-6xl mx-auto px- sm:px-6 grid lg:grid-cols-2 gap-10 items-center">

          {/* LEFT CONTENT */}
          <div>
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#2d3c59]/40 mb-4 block">
              Overview
            </span>

            <h2
              className="text-[2.2rem] sm:text-[3rem] lg:text-[3.8rem] leading-[1.05] text-[#2d3c59]"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              What are the
              <span className="block italic font-normal text-[#2d3c59]/50">
                adrenal glands?
              </span>
            </h2>

            <p className="mt-5 text-[14px] sm:text-[15px] leading-[1.9] text-[#2d3c59]/65 max-w-lg">
              The adrenal glands sit on top of the kidneys and produce hormones
              essential for life: cortisol (helps manage stress, blood sugar,
              blood pressure) and aldosterone (manages salt and water balance).
              In Addison&apos;s disease, these glands are damaged, usually by an
              autoimmune response.
            </p>
          </div>

          {/* RIGHT IMAGE (MODERN CARD STYLE) */}
          <div className="relative">

            {/* background accent */}
            <div className="absolute -top-6 -left-6 w-full h-full bg-[#2d3c59]/5 rounded-[6px]" />

            <div className="relative w-full h-[300px] sm:h-[380px] rounded-[6px] overflow-hidden shadow-md">
  <Image
    src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&auto=format&fit=crop&q=60"
    alt="Adrenal glands medical"
    fill
    className="object-cover"
  />
</div>
          </div>
        </div>
      </section>
    );
  }
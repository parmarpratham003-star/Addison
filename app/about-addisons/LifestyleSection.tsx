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

const lifestyleTips = [
  "Take your medication at the same time each day",
  "Never skip doses",
  "Carry an emergency hydrocortisone injection and wear medical alert ID",
  'Learn to "stress dose" — increase hydrocortisone during illness',
  "Stay in touch with your endocrinologist",
];

export function LifestyleSection() {
  return (
    <div
      className={`${cormorant.variable} ${outfit.variable}`}
      style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
    >
      {/* ── 05 LIFESTYLE ── */}
      <div className="relative overflow-hidden">
        <span
          className="pointer-events-none absolute -top-4 right-4 sm:right-6 text-[8rem] sm:text-[12rem] xl:text-[16rem] font-semibold leading-none text-[#2d3c59]/[0.04] select-none"
          style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
        >
          05
        </span>

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-20 py-12 sm:py-16 lg:py-20 relative z-10">
          <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-28 items-start">
            <div className="flex-shrink-0 lg:w-[280px]">
              <span
                className="text-[0.65rem] uppercase tracking-[0.25em] text-[#2d3c59]/35 mb-3 sm:mb-5 block"
                style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
              >
                05 — Daily life
              </span>
              <h2
                className="text-[2.4rem] sm:text-[3.4rem] font-semibold leading-[1.0] text-[#2d3c59]"
                style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
              >
                Life
                <span className="block font-normal italic text-[#2d3c59]/52">
                  style tips
                </span>
              </h2>
            </div>

            <ul className="flex-1 flex flex-col divide-y divide-[#2d3c59]/08">
              {lifestyleTips.map((tip, i) => (
                <li key={tip} className="flex items-start gap-4 sm:gap-6 py-4 sm:py-5">
                  <span
                    className="flex-shrink-0 text-[0.6rem] text-[#2d3c59]/28 tracking-[0.15em] pt-[3px]"
                    style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="text-[13px] sm:text-sm font-light text-[#2d3c59]/62 leading-[1.75] flex-1"
                    style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
                  >
                    {tip}
                  </span>
                  <span className="flex-shrink-0 text-[#94a378] text-[0.8rem] mt-[2px] font-medium">
                    ✔
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="pb-6 sm:pb-8" />
    </div>
  );
}
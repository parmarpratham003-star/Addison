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

const diagnosisSteps = [
  {
    
    title: "Blood Tests",
    desc: "Cortisol and ACTH levels are measured in the morning when cortisol is naturally highest.",
  },
  {

    title: "ACTH Stimulation",
    desc: "Synthetic ACTH is administered and the adrenal glands' cortisol response is measured.",
  },
  {

    title: "Inadequate Response",
    desc: "In Addison's, the adrenal glands fail to produce adequate cortisol in response to ACTH.",
  },
];

export function DiagnosisSection() {
  return (
    <div
      className={`${cormorant.variable} ${outfit.variable}`}
      style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
    >
      {/* ── 03 DIAGNOSIS ── */}
      <div className="bg-[#eaebd0] w-full border-b border-[#2d3c59]/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-20 py-12 sm:py-16 lg:py-20">

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 sm:gap-4 mb-10 sm:mb-14 lg:mb-16">
            <div>
              <span
                className="text-[0.65rem] uppercase tracking-[0.25em] text-[#2d3c59]/35 mb-3 sm:mb-4 block"
                style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
              >
                Testing
              </span>
              <h2
                className="text-[2.6rem] sm:text-[4rem] font-semibold leading-[0.95] text-[#2d3c59]"
                style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
              >
                Diag
                <span className="font-normal italic text-[#2d3c59]/45">nosis</span>
              </h2>
            </div>
            <p
              className="text-[0.75rem] sm:text-[0.78rem] font-light leading-[1.85] text-[#2d3c59]/50 max-w-[260px] sm:pb-1"
              style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
            >
              A step-by-step process used by endocrinologists to confirm
              adrenal insufficiency.
            </p>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-[#2d3c59]/10">
            {diagnosisSteps.map((item) => (
              <div
                
                className="bg-[#eaebd0] px-5 py-8 sm:px-8 sm:py-10 relative group hover:bg-[#2d3c59]/[0.05] transition-colors duration-300"
              >
                {/* Faint watermark number */}
                <span
                  className="absolute top-5 right-5 sm:top-6 sm:right-7 text-[3rem] sm:text-[4rem] font-semibold leading-none text-[#2d3c59]/[0.06] select-none"
                  style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
                >
                  
                </span>

                <span
                  className="text-[0.6rem] uppercase tracking-[0.2em] text-[#2d3c59]/30 block mb-5 sm:mb-6"
                  style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
                >
                  
                </span>

                <h3
                  className="text-[1.4rem] sm:text-[1.6rem] font-semibold text-[#2d3c59] leading-[1.1] mb-3 sm:mb-4"
                  style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
                >
                  {item.title}
                </h3>

                <p
                  className="text-[0.78rem] sm:text-[0.8rem] font-light text-[#2d3c59]/52 leading-[1.85]"
                  style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
                >
                  {item.desc}
                </p>

                {/* Hover underline */}
                <div className="mt-6 sm:mt-8 w-6 h-px bg-[#2d3c59]/20 group-hover:w-12 transition-all duration-500" />
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
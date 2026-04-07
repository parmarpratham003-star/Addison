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

const symptoms = [
  "Extreme fatigue and weakness",
  "Weight loss and loss of appetite",
  "Darkening of the skin (hyperpigmentation)",
  "Low blood pressure, dizziness",
  "Salt craving",
  "Nausea, vomiting, diarrhea",
  "Muscle or joint pains",
  "Irritability or depression",
];

export function SymptomsSection() {
  return (
    <div
      className={`${cormorant.variable} ${outfit.variable} `}
      style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
    >
      {/* ── 02 SYMPTOMS ── */}
      <div className="bg-[#2d3c59] border-b border-[#eaebd0]/08 py-12 sm:py-16 lg:py-20 px-5 sm:px-8 lg:px-20">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end gap-4 lg:gap-20 mb-8 sm:mb-12 lg:mb-14">
            <div className="flex-shrink-0">
              <span
                className="text-[0.65rem] uppercase tracking-[0.25em] text-[#eaebd0]/30 block mb-2 sm:mb-3"
                style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
              >
                 Signs
              </span>
              <h2
                className="text-[2.6rem] sm:text-[3.5rem] xl:text-[5rem] font-semibold leading-[0.95] text-[#eaebd0]"
                style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
              >
                Symp
                <span className="font-normal italic text-[#eaebd0]/40">toms</span>
              </h2>
            </div>
            <p
              className="text-[13px] sm:text-sm font-light leading-[1.85] text-[#eaebd0]/45 max-w-sm lg:pb-2"
              style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
            >
              Addison&apos;s disease develops slowly. Recognising these signs
              early leads to faster diagnosis and better outcomes.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
            {symptoms.map((item, i) => (
              <div
                key={item}
                className="bg-[#eaebd0]/[0.05] hover:bg-[#eaebd0]/[0.09] transition-colors duration-300 px-4 py-4 sm:px-5 sm:py-5"
                style={{ borderRadius: "3px" }}
              >
                <span
                  className="text-[0.6rem] text-[#eaebd0]/25 font-medium tracking-[0.15em] block mb-1.5 sm:mb-2"
                  style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
                >
               
                </span>
                <p
                  className="text-[0.78rem] sm:text-[0.82rem] text-[#eaebd0]/60 font-light leading-[1.6] sm:leading-[1.65]"
                  style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
                >
                  {item}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
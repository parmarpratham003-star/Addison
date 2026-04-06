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

const lifestyleTips = [
  "Take your medication at the same time each day",
  "Never skip doses",
  "Carry an emergency hydrocortisone injection and wear medical alert ID",
  'Learn to "stress dose" — increase hydrocortisone during illness',
  "Stay in touch with your endocrinologist",
];

const diagnosisSteps = [
  {
    step: "01",
    title: "Blood Tests",
    desc: "Cortisol and ACTH levels are measured in the morning when cortisol is naturally highest.",
  },
  {
    step: "02",
    title: "ACTH Stimulation",
    desc: "Synthetic ACTH is administered and the adrenal glands' cortisol response is measured.",
  },
  {
    step: "03",
    title: "Inadequate Response",
    desc: "In Addison's, the adrenal glands fail to produce adequate cortisol in response to ACTH.",
  },
];

export function AboutContent() {
  return (
    <div
      className={`${cormorant.variable} ${outfit.variable} pt-12 sm:pt-16 lg:py-25 bg-[#eaebd0]`}
      style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
    >

      {/* ── 01 ADRENAL GLANDS ── */}
      <div className="flex flex-col lg:flex-row items-stretch border-b border-[#2d3c59]/10 min-h-[420px]">
        {/* Image — shorter on mobile */}
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
              01 — Overview
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

      {/* ── 02 SYMPTOMS ── */}
      <div className="border-b border-[#2d3c59]/10 py-12 sm:py-16 lg:py-20 px-5 sm:px-8 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end gap-4 lg:gap-20 mb-8 sm:mb-12 lg:mb-14">
            <div className="flex-shrink-0">
              <span
                className="text-[0.65rem] uppercase tracking-[0.25em] text-[#2d3c59]/35 block mb-2 sm:mb-3"
                style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
              >
                02 — Signs
              </span>
              <h2
                className="text-[2.6rem] sm:text-[3.5rem] xl:text-[5rem] font-semibold leading-[0.95] text-[#2d3c59]"
                style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
              >
                Symp
                <span className="font-normal italic text-[#2d3c59]/50">toms</span>
              </h2>
            </div>
            <p
              className="text-[13px] sm:text-sm font-light leading-[1.85] text-[#2d3c59]/55 max-w-sm lg:pb-2"
              style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
            >
              Addison&apos;s disease develops slowly. Recognising these signs
              early leads to faster diagnosis and better outcomes.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
            {symptoms.map((item, i) => (
              <div
                key={item}
                className="bg-[#2d3c59]/[0.05] hover:bg-[#2d3c59]/[0.09] transition-colors duration-300 px-4 py-4 sm:px-5 sm:py-5"
                style={{ borderRadius: "3px" }}
              >
                <span
                  className="text-[0.6rem] text-[#2d3c59]/25 font-medium tracking-[0.15em] block mb-1.5 sm:mb-2"
                  style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p
                  className="text-[0.78rem] sm:text-[0.82rem] text-[#2d3c59]/65 font-light leading-[1.6] sm:leading-[1.65]"
                  style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
                >
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 03 DIAGNOSIS ── */}
      <div className="bg-[#2d3c59] w-full border-b border-[#eaebd0]/08">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-20 py-12 sm:py-16 lg:py-20">

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 sm:gap-4 mb-10 sm:mb-14 lg:mb-16">
            <div>
              <span
                className="text-[0.65rem] uppercase tracking-[0.25em] text-[#eaebd0]/30 mb-3 sm:mb-4 block"
                style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
              >
                03 — Testing
              </span>
              <h2
                className="text-[2.6rem] sm:text-[3.5rem] sm:text-[4rem] font-semibold leading-[0.95] text-[#eaebd0]"
                style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
              >
                Diag
                <span className="font-normal italic text-[#eaebd0]/40">nosis</span>
              </h2>
            </div>
            <p
              className="text-[0.75rem] sm:text-[0.78rem] font-light leading-[1.85] text-[#eaebd0]/40 max-w-[260px] sm:pb-1"
              style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
            >
              A step-by-step process used by endocrinologists to confirm
              adrenal insufficiency.
            </p>
          </div>

          {/* Steps — stack on mobile, 3-col on sm+ */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-[#eaebd0]/08">
            {diagnosisSteps.map((item) => (
              <div
                key={item.step}
                className="bg-[#2d3c59] px-5 py-8 sm:px-8 sm:py-10 relative group hover:bg-[#eaebd0]/[0.04] transition-colors duration-300"
              >
                <span
                  className="absolute top-5 right-5 sm:top-6 sm:right-7 text-[3rem] sm:text-[4rem] font-semibold leading-none text-[#eaebd0]/[0.05] select-none"
                  style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
                >
                  {item.step}
                </span>
                <span
                  className="text-[0.6rem] uppercase tracking-[0.2em] text-[#eaebd0]/28 block mb-5 sm:mb-6"
                  style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
                >
                  Step {item.step}
                </span>
                <h3
                  className="text-[1.4rem] sm:text-[1.6rem] font-semibold text-[#eaebd0] leading-[1.1] mb-3 sm:mb-4"
                  style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-[0.78rem] sm:text-[0.8rem] font-light text-[#eaebd0]/48 leading-[1.85]"
                  style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
                >
                  {item.desc}
                </p>
                <div className="mt-6 sm:mt-8 w-6 h-px bg-[#eaebd0]/15 group-hover:w-12 transition-all duration-500" />
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ── 04 TREATMENT ── */}
      <div className="w-full border-b border-[#2d3c59]/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-20">
          <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-32 py-12 sm:py-16 lg:py-20 items-start lg:items-center">
            <div className="flex-shrink-0 lg:w-[40%]">
              <span
                className="text-[0.65rem] uppercase tracking-[0.25em] text-[#2d3c59]/35 mb-3 sm:mb-4 block"
                style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
              >
                04 — Management
              </span>
              <h2
                className="text-[2.6rem] sm:text-[3.5rem] xl:text-[5rem] font-semibold leading-[0.95] text-[#2d3c59]"
                style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
              >
                Treat
                <span className="block font-normal italic text-[#2d3c59]/45">
                  ment
                </span>
              </h2>
            </div>
            <div className="flex-1 border-t border-[#2d3c59]/10 pt-8 sm:pt-10 lg:border-t-0 lg:pt-0 lg:border-l lg:border-[#2d3c59]/10 lg:pl-16">
              <p
                className="text-[13px] sm:text-sm font-light leading-[1.9] sm:leading-[2] text-[#2d3c59]/58 max-w-xl"
                style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
              >
                Treatment is lifelong hormone replacement. Hydrocortisone
                (cortisol) is taken daily, often in divided doses to mimic natural
                rhythms. Some patients also need fludrocortisone for aldosterone
                replacement. Doses may need to be increased during illness,
                stress, or surgery.
              </p>
              <div className="mt-7 sm:mt-10 flex items-center gap-4">
                <div className="w-8 h-px bg-[#2d3c59]/20" />
                <span
                  className="text-[0.65rem] uppercase tracking-[0.2em] text-[#2d3c59]/28"
                  style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
                >
                  Lifelong management
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

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
                className="text-[2.4rem] sm:text-[2.8rem] sm:text-[3.4rem] font-semibold leading-[1.0] text-[#2d3c59]"
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
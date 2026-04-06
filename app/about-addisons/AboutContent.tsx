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

export function AboutContent() {
  return (
    <div
      className={`${cormorant.variable} ${outfit.variable} bg-[#eaebd0]`}
      style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="lg:pl-8 xl:pl-12">

          {/* ── 01 ADRENAL GLANDS ── */}
          <div className="grid grid-cols-[200px_1fr] gap-10 py-10 border-b border-[#2d3c59]/10 items-start">
            <div>
              <h2
                className="text-[1.6rem] font-semibold leading-[1.2] text-[#2d3c59]"
                style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
              >
                What are the
                <span className="block font-normal italic text-[#2d3c59]/60">adrenal glands?</span>
              </h2>
            </div>
            <p
              className="text-sm font-light leading-[1.85] text-[#2d3c59]/60 pt-1"
              style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
            >
              The adrenal glands sit on top of the kidneys and produce hormones
              essential for life: cortisol (helps manage stress, blood sugar,
              blood pressure) and aldosterone (manages salt and water balance). In
              Addison&apos;s disease, these glands are damaged, usually by an
              autoimmune response.
            </p>
          </div>

          {/* ── 02 SYMPTOMS ── */}
          <div className="grid grid-cols-[200px_1fr] gap-10 py-10 border-b border-[#2d3c59]/10 items-start">
            <div>
              <h2
                className="text-[1.6rem] font-semibold leading-[1.2] text-[#2d3c59]"
                style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
              >
                Symptoms
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
              {symptoms.map((item) => (
                <div
                  key={item}
                  className="bg-[#2d3c59]/06 rounded-[10px] px-4 py-3
                    text-[0.8rem] text-[#2d3c59]/65 font-light leading-[1.6]"
                  style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* ── 03 DIAGNOSIS ── */}
          <div className="grid grid-cols-[200px_1fr] gap-10 py-10 border-b border-[#2d3c59]/10 items-start">
            <div>
              <h2
                className="text-[1.6rem] font-semibold leading-[1.2] text-[#2d3c59]"
                style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
              >
                Diagnosis
              </h2>
            </div>
            <p
              className="text-sm font-light leading-[1.85] text-[#2d3c59]/60 pt-1"
              style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
            >
              Diagnosis involves blood tests to measure cortisol and ACTH levels.
              An ACTH stimulation test is often used: synthetic ACTH is given and
              the cortisol response is measured. In Addison&apos;s, the adrenal
              glands do not respond adequately.
            </p>
          </div>

        </div>
      </div>

      {/* ── 04 TREATMENT — full-width dark ── */}
      <div className="bg-[#2d3c59] w-full">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="lg:pl-8 xl:pl-12">
            <div className="grid grid-cols-[200px_1fr] gap-10 py-10 items-start">
              <div>
                <h2
                  className="text-[1.6rem] font-semibold leading-[1.2] text-[#eaebd0]"
                  style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
                >
                  Treatment
                </h2>
              </div>
              <p
                className="text-sm font-light leading-[1.85] text-[#eaebd0]/60 pt-1"
                style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
              >
                Treatment is lifelong hormone replacement. Hydrocortisone
                (cortisol) is taken daily, often in divided doses to mimic natural
                rhythms. Some patients also need fludrocortisone for aldosterone
                replacement. Doses may need to be increased during illness,
                stress, or surgery.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="lg:pl-8 xl:pl-12">

          {/* ── 05 LIFESTYLE ── */}
          <div className="grid grid-cols-[200px_1fr] gap-10 py-10 border-b border-[#2d3c59]/10 items-start">
            <div>
              <h2
                className="text-[1.6rem] font-semibold leading-[1.2] text-[#2d3c59]"
                style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
              >
                Lifestyle
                <span className="block font-normal italic text-[#2d3c59]/60">tips</span>
              </h2>
            </div>
            <ul className="pt-1 flex flex-col gap-3 list-none">
              {lifestyleTips.map((tip) => (
                <li
                  key={tip}
                  className="flex items-start gap-3 text-sm text-[#2d3c59]/60 font-light leading-[1.7]"
                  style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
                >
                  <span className="text-[#94a378] text-[0.85rem] mt-[0.15rem] shrink-0 font-medium">✔</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>

          <div className="pb-16" />

        </div>
      </div>
    </div>
  );
}
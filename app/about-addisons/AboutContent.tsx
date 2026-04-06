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
      className={`${cormorant.variable} ${outfit.variable} bg-[#eaebd0]}`}
      style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
    >

      {/* ── 01 ADRENAL GLANDS — image left, content right ── */}
<div className="flex flex-col lg:flex-row items-stretch border-b py-20 border-[#2d3c59]/10 min-h-[360px]">

  {/* LEFT — image block, narrower ~35% */}
  <div className="relative flex-shrink-0 lg:w-[35%] xl:w-[38%] min-h-[280px] lg:min-h-full overflow-hidden">
    {/* Offset shadow block bottom-left */}
    <div className="absolute bottom-0 left-0 w-[82%] h-[88%] bg-[#2d3c59]/[0.04]" />
    {/* Image container — shifted up-right */}
    <div className="absolute top-6 left-12 right-0 bottom-6 overflow-hidden">
      <div className="w-full h-full bg-[#2d3c59]/[0.07] flex items-center justify-center">
        <span
          className="text-[#2d3c59]/20 text-[0.6rem] uppercase tracking-[0.25em]"
          style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
        >
          Adrenal Glands
        </span>
       <img
        src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&auto=format&fit=crop&q=60"
        alt="Adrenal glands medical illustration"
        className="w-full h-full object-cover"
      />
      </div>
    </div>
  </div>

  {/* RIGHT — heading + body, wider ~65% */}
  <div className="flex-1 flex items-center px-8 py-25 lg:px-16 xl:px-20">
    <div className="max-w-2xl">
      <h2
        className="text-[2.4rem] sm:text-[3rem] xl:text-[3.4rem] font-semibold leading-[1.05] text-[#2d3c59] mb-6"
        style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
      >
        What are the
        <span className="block font-normal italic text-[#2d3c59]/55">
          adrenal glands?
        </span>
      </h2>
      <p
        className="text-sm font-light leading-[1.9] text-[#2d3c59]/58"
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

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="lg:pl-8 xl:pl-12">

          {/* ── 02 SYMPTOMS ── */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 py-14 border-b border-[#2d3c59]/10 items-start">

            <div className="flex-shrink-0 lg:w-[260px] pl-5 border-l-[1.5px] border-[#2d3c59]/30">
              <h2
                className="text-[2rem] font-semibold leading-[1.15] text-[#2d3c59]"
                style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
              >
                Symptoms
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 flex-1">
              {symptoms.map((item) => (
                <div
                  key={item}
                  className="bg-[#2d3c59]/[0.06] rounded-[10px] px-4 py-3
                    text-[0.8rem] text-[#2d3c59]/65 font-light leading-[1.6]"
                  style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* ── 03 DIAGNOSIS ── */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 py-14 border-b border-[#2d3c59]/10 items-start">

            <div className="flex-shrink-0 lg:w-[260px] pl-5 border-l-[1.5px] border-[#2d3c59]/30">
              <h2
                className="text-[2rem] font-semibold leading-[1.15] text-[#2d3c59]"
                style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
              >
                Diagnosis
              </h2>
            </div>

            <p
              className="text-sm font-light leading-[1.85] text-[#2d3c59]/60 pt-1 max-w-2xl"
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
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 py-14 items-start">

              <div className="flex-shrink-0 lg:w-[260px] pl-5 border-l-[1.5px] border-[#eaebd0]/30">
                <h2
                  className="text-[2rem] font-semibold leading-[1.15] text-[#eaebd0]"
                  style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
                >
                  Treatment
                </h2>
              </div>

              <p
                className="text-sm font-light leading-[1.85] text-[#eaebd0]/60 pt-1 max-w-2xl"
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
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 py-14 border-b border-[#2d3c59]/10 items-start">

            <div className="flex-shrink-0 lg:w-[260px] pl-5 border-l-[1.5px] border-[#2d3c59]/30">
              <h2
                className="text-[2rem] font-semibold leading-[1.15] text-[#2d3c59]"
                style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
              >
                Lifestyle
                <span className="block font-normal italic text-[#2d3c59]/60">tips</span>
              </h2>
            </div>

            <ul className="pt-1 flex flex-col gap-3 list-none flex-1 max-w-2xl">
              {lifestyleTips.map((tip) => (
                <li
                  key={tip}
                  className="flex items-start gap-3 text-sm text-[#2d3c59]/60 font-light leading-[1.7]"
                  style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
                >
                  <span className="text-[#94a378] text-[0.85rem] mt-[0.15rem] shrink-0 font-medium">
                    ✔
                  </span>
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
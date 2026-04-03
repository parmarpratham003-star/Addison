import Link from "next/link";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { createPageMetadata } from "@/lib/seo";

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

export const metadata = createPageMetadata({
  title: "About Addison's Disease",
  description:
    "Learn about Addison's disease: symptoms, diagnosis, treatment with cortisol replacement, and lifestyle tips.",
  path: "/about-addisons",
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

export default function AboutAddisonsPage() {
  return (
    <div
      className={`${cormorant.variable} ${outfit.variable} bg-[#eaebd0] min-h-screen`}
      style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
    >
      {/* ── Outer container: max-w-7xl + px-6 lg:px-12 (matches hero) ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* ── Inner indent: lg:pl-8 xl:pl-12 (matches hero left col) ── */}
        <div className="lg:pl-8 xl:pl-12">

          {/* ── HERO ── */}
          <div className="pt-16 pb-0">
            <p
              className="text-[0.62rem] tracking-[0.2em] uppercase text-[#2d3c59]/40 font-light mb-6"
              style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
            >
              Primary adrenal insufficiency
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-end pb-10 border-b border-[#2d3c59]/12">
              {/* Left: title + intro + mini CTAs */}
              <div className="flex flex-col gap-5 pb-1">
                <h1
                  className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] text-[#2d3c59]"
                  style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
                >
                  About
                  <br />
                  <span className="font-normal italic text-[#2d3c59]/70">Addison&apos;s</span>
                  <br />
                  Disease
                </h1>

                <p
                  className="text-base font-light leading-relaxed text-[#2d3c59]/60 max-w-xl"
                  style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
                >
                  A rare disorder where the adrenal glands don&apos;t produce
                  enough hormones — especially cortisol and often aldosterone —
                  essential for life.
                </p>

                <div className="flex flex-wrap gap-2 mt-2">
                  <Link
                    href="/emergency-card"
                    className="bg-[#2d3c59] text-[#eaebd0] px-5 py-2 rounded-full
                      text-[0.75rem] font-medium tracking-[0.05em] uppercase
                      hover:bg-[#3a4e72] transition-colors duration-150"
                    style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
                  >
                    Emergency card
                  </Link>
                  <Link
                    href="/emergency"
                    className="border border-[#2d3c59]/35 text-[#2d3c59] px-5 py-2 rounded-full
                      text-[0.75rem] font-medium tracking-[0.05em] uppercase
                      hover:bg-[#2d3c59]/08 transition-colors duration-150"
                    style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
                  >
                    Crisis guide
                  </Link>
                </div>
              </div>

              {/* Right: hero image */}
              <div className="rounded-[20px] overflow-hidden h-[340px]">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80"
                  alt="Medical care"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

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

          {/* ── Further reading ── */}
          <div className="py-12 pb-16">
            <p
              className="text-[0.62rem] tracking-[0.2em] uppercase text-[#2d3c59]/35 font-light mb-8"
              style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
            >
              Further reading
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">

              {/* Card 1 */}
              <Link
                href="/emergency-card"
                className="group bg-[#2d3c59] rounded-[18px] p-6 flex flex-col justify-between
                  transition-shadow duration-300 hover:shadow-[0_12px_40px_rgba(45,60,89,0.22)]"
              >
                <span
                  className="text-[0.62rem] tracking-[0.2em] uppercase text-[#eaebd0]/40 font-light"
                  style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
                >
                  Free tool
                </span>
                <h3
                  className="text-[1.4rem] font-semibold leading-[1.2] text-[#eaebd0] mt-3"
                  style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
                >
                  Emergency
                  <span className="block font-normal italic text-[#eaebd0]/70">Card</span>
                </h3>
                <span
                  className="text-[0.75rem] font-medium text-[#eaebd0]/40 mt-4 tracking-wide
                    transition-colors duration-200 group-hover:text-[#eaebd0]/75"
                  style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
                >
                  Get started →
                </span>
              </Link>

              {/* Card 2 */}
              <Link
                href="/emergency"
                className="group bg-[#94a378] rounded-[18px] p-6 flex flex-col justify-between
                  transition-shadow duration-300 hover:shadow-[0_12px_40px_rgba(148,163,120,0.35)]"
              >
                <span
                  className="text-[0.62rem] tracking-[0.2em] uppercase text-white/50 font-light"
                  style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
                >
                  Emergency
                </span>
                <h3
                  className="text-[1.4rem] font-semibold leading-[1.2] text-white mt-3"
                  style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
                >
                  Crisis
                  <span className="block font-normal italic text-white/70">Guide</span>
                </h3>
                <span
                  className="text-[0.75rem] font-medium text-white/50 mt-4 tracking-wide
                    transition-colors duration-200 group-hover:text-white/80"
                  style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
                >
                  Read →
                </span>
              </Link>

              {/* Card 3 */}
              <Link
                href="/information/children"
                className="group bg-[#e2e3c8] rounded-[18px] p-6 flex flex-col justify-between
                  border border-[#2d3c59]/10
                  transition-shadow duration-300 hover:shadow-[0_12px_40px_rgba(45,60,89,0.10)]"
              >
                <span
                  className="text-[0.62rem] tracking-[0.2em] uppercase text-[#2d3c59]/40 font-light"
                  style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
                >
                  Children
                </span>
                <h3
                  className="text-[1.4rem] font-semibold leading-[1.2] text-[#2d3c59] mt-3"
                  style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
                >
                  Children
                  <span className="block font-normal italic text-[#2d3c59]/60">Info</span>
                </h3>
                <span
                  className="text-[0.75rem] font-medium text-[#2d3c59]/40 mt-4 tracking-wide
                    transition-colors duration-200 group-hover:text-[#2d3c59]/70"
                  style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
                >
                  Learn →
                </span>
              </Link>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
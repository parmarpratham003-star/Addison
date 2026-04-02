import Link from "next/link";
import { Playfair_Display, DM_Sans } from "next/font/google";
import { createPageMetadata } from "@/lib/seo";

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
      className={`${playfair.variable} ${dmSans.variable} bg-[#eaebd0] min-h-screen`}
      style={{ fontFamily: "var(--font-dm), DM Sans, sans-serif" }}
    >
      <div className="max-w-4xl mx-auto px-6">

        {/* ── HERO ── */}
        <div className="pt-16 pb-0">
          <p className="text-[0.58rem] tracking-[0.3em] uppercase text-[#2d3c59]/38 font-light mb-6">
            Primary adrenal insufficiency
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-end pb-10 border-b border-[#2d3c59]/12">
            {/* Left: title + intro + mini CTAs */}
            <div className="flex flex-col gap-5 pb-1">
              <h1
                className="text-[3.4rem] leading-[1] text-[#2d3c59] font-normal"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                About
                <br />
                <em>Addison&apos;s</em>
                <br />
                Disease
              </h1>

              <p className="text-[0.86rem] leading-[1.85] text-[#2d3c59]/60 font-light">
                A rare disorder where the adrenal glands don&apos;t produce
                enough hormones — especially cortisol and often aldosterone —
                essential for life.
              </p>

              <div className="flex flex-wrap gap-2">
                <Link
                  href="/emergency-card"
                  className="bg-[#2d3c59] text-[#eaebd0] px-4 py-[0.55rem] rounded-full text-[0.75rem] font-normal hover:bg-[#3d5070] transition-colors"
                >
                  Emergency card
                </Link>
                <Link
                  href="/emergency"
                  className="border border-[#2d3c59]/35 text-[#2d3c59] px-4 py-[0.55rem] rounded-full text-[0.75rem] font-normal hover:bg-[#2d3c59]/08 transition-colors"
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
        <div className="grid grid-cols-[180px_1fr] gap-10 py-10 border-b border-[#2d3c59]/10 items-start">
          <div>
           
            <h2
              className="text-[1.35rem] italic text-[#2d3c59] font-normal leading-[1.3]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              What are the adrenal glands?
            </h2>
          </div>
          <p className="text-[0.85rem] leading-[1.85] text-[#2d3c59]/62 font-light pt-7">
            The adrenal glands sit on top of the kidneys and produce hormones
            essential for life: cortisol (helps manage stress, blood sugar,
            blood pressure) and aldosterone (manages salt and water balance). In
            Addison&apos;s disease, these glands are damaged, usually by an
            autoimmune response.
          </p>
        </div>

        {/* ── 02 SYMPTOMS ── */}
        <div className="grid grid-cols-[180px_1fr] gap-10 py-10 border-b border-[#2d3c59]/10 items-start">
          <div>
           
            <h2
              className="text-[1.35rem] italic text-[#2d3c59] font-normal leading-[1.3]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Symptoms
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-7">
            {symptoms.map((item) => (
              <div
                key={item}
                className="bg-[#2d3c59]/06 rounded-[10px] px-4 py-3 text-[0.78rem] text-[#2d3c59]/65 font-light leading-[1.5]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* ── 03 DIAGNOSIS ── */}
        <div className="grid grid-cols-[180px_1fr] gap-10 py-10 border-b border-[#2d3c59]/10 items-start">
          <div>
           
            <h2
              className="text-[1.35rem] italic text-[#2d3c59] font-normal leading-[1.3]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Diagnosis
            </h2>
          </div>
          <p className="text-[0.85rem] leading-[1.85] text-[#2d3c59]/62 font-light pt-7">
            Diagnosis involves blood tests to measure cortisol and ACTH levels.
            An ACTH stimulation test is often used: synthetic ACTH is given and
            the cortisol response is measured. In Addison&apos;s, the adrenal
            glands do not respond adequately.
          </p>
        </div>

      </div>

      {/* ── 04 TREATMENT — full-width dark ── */}
      <div className="bg-[#2d3c59] w-full">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-[180px_1fr] gap-10 py-10 items-start">
            <div>
              
              <h2
                className="text-[1.35rem] italic text-[#eaebd0] font-normal leading-[1.3]"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Treatment
              </h2>
            </div>
            <p className="text-[0.85rem] leading-[1.85] text-[#eaebd0]/65 font-light pt-7">
              Treatment is lifelong hormone replacement. Hydrocortisone
              (cortisol) is taken daily, often in divided doses to mimic natural
              rhythms. Some patients also need fludrocortisone for aldosterone
              replacement. Doses may need to be increased during illness,
              stress, or surgery.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6">

        {/* ── 05 LIFESTYLE ── */}
        <div className="grid grid-cols-[180px_1fr] gap-10 py-10 border-b border-[#2d3c59]/10 items-start">
          <div>
            
            <h2
              className="text-[1.35rem] italic text-[#2d3c59] font-normal leading-[1.3]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Lifestyle tips
            </h2>
          </div>
          <ul className="pt-7 flex flex-col gap-3 list-none">
            {lifestyleTips.map((tip) => (
              <li
                key={tip}
                className="flex items-start gap-3 text-[0.85rem] text-[#2d3c59]/62 font-light leading-[1.7]"
              >
                <span className="text-[#94a378] text-[0.9rem] mt-[0.1rem] shrink-0">
                  ✔
                </span>
                {tip}
              </li>
            ))}
          </ul>
        </div>

        <div className="py-12 pb-16">
  <p className="text-[0.58rem] tracking-[0.28em] uppercase text-[#2d3c59]/35 font-light mb-6 text-center">
    Further reading
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">

    {/* Card 1 */}
    <Link
      href="/emergency-card"
      className="group bg-[#2d3c59] rounded-[18px] p-6 flex flex-col justify-between text-center hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
    >
      <span className="text-[0.58rem] tracking-[0.26em] uppercase text-[#eaebd0]/40">
        Free tool
      </span>

      <h3
        className="text-[1.1rem] italic text-[#eaebd0] mt-3 leading-[1.3]"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        Emergency Card
      </h3>

      <span className="text-[0.75rem] text-[#eaebd0]/50 mt-4 group-hover:translate-x-1 transition">
        Get started →
      </span>
    </Link>

    {/* Card 2 */}
    <Link
      href="/emergency"
      className="group bg-[#94a378] rounded-[18px] p-6 flex flex-col justify-between text-center hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
    >
      <span className="text-[0.58rem] tracking-[0.26em] uppercase text-white/50">
        Emergency
      </span>

      <h3
        className="text-[1.1rem] italic text-white mt-3 leading-[1.3]"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        Crisis Guide
      </h3>

      <span className="text-[0.75rem] text-white/60 mt-4 group-hover:translate-x-1 transition">
        Read →
      </span>
    </Link>

    {/* Card 3 */}
    <Link
      href="/information/children"
      className="group bg-[#e2e3c8] rounded-[18px] p-6 flex flex-col justify-between text-center border border-[#2d3c59]/10 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
    >
      <span className="text-[0.58rem] tracking-[0.26em] uppercase text-[#2d3c59]/40">
        Children
      </span>

      <h3
        className="text-[1.1rem] italic text-[#2d3c59] mt-3 leading-[1.3]"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        Children Info
      </h3>

      <span className="text-[0.75rem] text-[#2d3c59]/50 mt-4 group-hover:translate-x-1 transition">
        Learn →
      </span>
    </Link>

  </div>
</div>
      </div>
    </div>
  );
}
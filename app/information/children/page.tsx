"use client";

import Link from "next/link";
import { Cormorant_Garamond, Outfit } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal"],
  variable: "--font-cormorant",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-outfit",
});

const symptoms = [
  "Tiredness or dizziness",
  "Fast or fluttery pulse",
  "Skin darkening (hands/face)",
  "Weight loss / Salt craving",
  "Nausea or diarrhea",
  "Muscle aches / Feeling cold",
  "Dehydration",
  "Dark freckles / nipple spots",
];

const takeaways = [
  "Adrenal glands don't make enough cortisol/aldosterone",
  "Kids can live full lives with daily medication",
  "Autoimmune damage is the most common cause",
  "Salt craving is a major clinical clue",
  "Vomiting/diarrhea need prompt attention",
];

const doctorTips = [
  "Write down questions before the visit",
  "Note new medicines or instructions precisely",
  "Ask specifically about stress dosing amounts",
  "Keep after-hours contact info accessible",
  "Create a free emergency card for school",
];

export default function AddisonInChildrenPage() {
  return (
    <section
      className={`${cormorant.variable} ${outfit.variable} min-h-screen w-full py-14 bg-white`}
      style={{ fontFamily: "var(--font-outfit)" }}
    >
      <div className="max-w-[1200px] mx-auto px-9">

        {/* BACK LINK */}
        <Link
          href="/information"
          className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.36em] text-[#2d3c59]/38 hover:text-[#94a378] transition-colors mb-12"
        >
          <span>←</span> Information Hub
        </Link>

        {/* ── HERO ─────────────────────────────────────────────────── */}
        <div className="border-t-[1.5px] border-[#2d3c59] pt-8 mb-16">
          <p className="text-[10px] font-semibold tracking-[0.45em] uppercase text-[#94a378] mb-3">
            Pediatric Dossier // Case Study
          </p>
          <div className="grid lg:grid-cols-[1fr_380px] gap-8 items-end mb-9">
            <h1
              className="text-[clamp(3rem,7vw,4.5rem)] leading-[0.88] font-light text-[#2d3c59]"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Children & Care
                          </h1>
            <p className="text-[0.95rem] leading-[1.78] text-[#2d3c59]/55 font-light  border-l-2 border-[#94a378] pl-[18px]">
              Addison&apos;s is rare in kids, but when it does appear, parents often
              feel overwhelmed. Here is the clinical overview for families.
            </p>
          </div>
         
        </div>

        {/* ── 01 FOUNDATION ────────────────────────────────────────── */}
        <div className="grid lg:grid-cols-[5fr_7fr] gap-[2px] mb-[2px]">

          {/* Image panel */}
          <div className="overflow-hidden min-h-[300px]">
            <img
              src="https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=700&q=75&fit=crop&crop=center"
              alt="Adrenal glands anatomy"
              className="w-full h-full object-cover"
              style={{ minHeight: "300px" }}
            />
          </div>

          {/* Text panel */}
          <div className="bg-[#f7f8f2] p-9">
            <span className="font-mono text-[10px] text-[#2d3c59]/28 tracking-[0.08em] block mb-2">
              01 — Foundation
            </span>
            <h2
              className="text-[1.8rem] leading-[1.1] font-light text-[#2d3c59] mb-4"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              What is it &amp; What causes it?
            </h2>
            <p className="text-[0.9rem] leading-[1.85] text-[#2d3c59]/65 font-light">
              Addison&apos;s disease (primary adrenal insufficiency) means the adrenal
              glands—small glands that sit on top of each kidney—aren&apos;t producing
              enough hormones. The main one is cortisol, which helps the body handle
              stress, blood sugar, and inflammation. Kids with Addison&apos;s often have
              low aldosterone too, which affects salt and water balance and blood pressure.
            </p>
            <div className="bg-[#2d3c59]/[0.06] p-5 mt-4">
              <p className="text-[10px] font-semibold tracking-[0.14em] uppercase text-[#2d3c59] mb-2">
                The Immune Factor
              </p>
              <p className="text-[0.9rem] leading-[1.85] text-[#2d3c59]/65 font-light">
                In most children, the immune system mistakenly attacks the adrenal glands.
                Other causes include infection, cancer, surgery that removes the glands, or
                a rare inherited condition. A family history of Addison&apos;s or other
                autoimmune disorders can increase the risk.
              </p>
            </div>
          </div>
        </div>

        {/* ── 02 OBSERVATION ───────────────────────────────────────── */}
        <div className="grid lg:grid-cols-3 gap-[2px] mb-[2px]">

          {/* Dark intro panel */}
          <div className="bg-[#2d3c59] p-9">
            <span className="font-mono text-[10px] text-white/30 tracking-[0.08em] block mb-2">
              02 — Observation
            </span>
            <h2
              className="text-[1.8rem] leading-[1.1] font-light text-white mb-4"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Signs &amp; Risk Factors
            </h2>
            <p className="text-[0.9rem] leading-[1.85] text-white/70 font-light">
              Families should be aware if a child already has another autoimmune condition,
              such as type 1 diabetes or thyroid disease. Vitiligo, tuberculosis, or
              certain cancers can also be associated.
            </p>
          </div>

          {/* Symptoms grid */}
          <div className="bg-white border border-[#2d3c59]/08 p-9">
            <div className="grid grid-cols-2 gap-0">
              {symptoms.map((s, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 py-[9px] border-b border-[#2d3c59]/07 hover:border-[#94a378] transition-colors group"
                >
                  <span className="text-[9px] font-semibold text-[#94a378] min-w-[16px] font-mono">
                    0{i + 1}
                  </span>
                  <span className="text-[0.84rem] text-[#2d3c59]/62 group-hover:text-[#2d3c59] transition-colors">
                    {s}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-[0.8rem] text-[#2d3c59]/40 font-light">
              Many of these can point to other conditions too. If you notice a combination,
              especially skin darkening or salt craving, see a doctor.
            </p>
          </div>

          {/* Image panel */}
          <div className="overflow-hidden min-h-[260px]">
            <img
              src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=600&q=75&fit=crop&crop=faces,top"
              alt="Tired child resting"
              className="w-full h-full object-cover"
              style={{ minHeight: "260px" }}
            />
          </div>
        </div>

        {/* ── 03 PROTOCOL ──────────────────────────────────────────── */}
        <div className="grid lg:grid-cols-3 gap-[2px] mb-[2px]">

          {/* Diagnosis text */}
          <div className="bg-[#f7f8f2] p-9">
            <span className="font-mono text-[10px] text-[#2d3c59]/28 tracking-[0.08em] block mb-2">
              03 — Protocol
            </span>
            <h2
              className="text-[1.8rem] leading-[1.1] font-light text-[#2d3c59] mb-4"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Diagnosis &amp; Therapy
            </h2>
            <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-[#94a378] block mb-3">
              Diagnostic Tests
            </span>
            <p className="text-[0.9rem] leading-[1.85] text-[#2d3c59]/65 font-light">
              The doctor will review your child&apos;s symptoms and family history, then
              order blood tests to check cortisol and related hormone levels. The ACTH
              stimulation test is often used: your child gets a small dose of synthetic
              ACTH, and the response is measured.
            </p>
          </div>

          {/* Blood test image */}
          <div className="overflow-hidden min-h-[260px]">
            <img
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=75&fit=crop&crop=center"
              alt="Blood test cortisol diagnosis"
              className="w-full h-full object-cover"
              style={{ minHeight: "260px" }}
            />
          </div>

          {/* Treatment dark panel */}
          <div className="bg-[#2d3c59] p-9 relative overflow-hidden">
            <span
              className="absolute top-3 right-5 text-[6rem] font-bold text-white/[0.04] leading-none select-none pointer-events-none"
              aria-hidden
            >
              RX
            </span>
            <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-white/40 block mb-3">
              Treatment Plan
            </span>
            <p className="text-[0.9rem] leading-[1.85] text-white/70 font-light mb-4">
              Treatment aims to replace the missing hormones so your child can lead a
              normal, active life. Corticosteroids (such as hydrocortisone) are given by
              mouth daily.
            </p>
            <p className="text-[0.86rem] leading-[1.82] text-white/45 font-light">
              Most children will need this for life. Some also need fludrocortisone to
              maintain salt and potassium balance. Your endocrinologist will tailor the
              doses to your child.
            </p>
          </div>
        </div>

        {/* ── SAFETY STRIP ─────────────────────────────────────────── */}
        <div className="border-t-[1.5px] border-[#2d3c59]/12 border-b border-[#2d3c59]/06 py-14 my-[2px]">
          <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-[#94a378] block mb-3">
            Emergency Protocol
          </span>
          <h3
            className="text-[2rem] font-light text-[#2d3c59] mb-6"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Staying Safe &amp; Avoiding Complications
          </h3>
          <div className="grid lg:grid-cols-[1fr_1fr_340px] gap-10 items-start">
            <p className="text-[0.9rem] leading-[1.85] text-[#2d3c59]/65 font-light">
              Without treatment, children can develop severe weakness, low blood pressure,
              and dehydration. The key is never missing medication and knowing when to
              increase doses—for example, during fever, stomach bugs, or major stress.
            </p>
            <p className="border-l-2 border-[#94a378] pl-5  text-[0.93rem] leading-[1.82] text-[#2d3c59]/60 font-light">
              Call your child&apos;s doctor if you see possible symptoms. Seek care right
              away when they have vomiting, diarrhea, fever, or any infection.
            </p>
            <img
              src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&q=75&fit=crop&crop=top"
              alt="Child receiving emergency hospital care"
              className="w-full h-[200px] object-cover object-top"
            />
          </div>
        </div>

        {/* ── TAKEAWAYS + DOCTOR VISITS + IMAGE ────────────────────── */}
        <div className="grid lg:grid-cols-[1fr_1fr_340px] gap-[2px] mb-[2px]">

          {/* Takeaways */}
          <div className="bg-[#f7f8f2] p-8">
            <h3
              className="text-[1.45rem] font-light text-[#2d3c59] mb-5"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Quick Takeaways
            </h3>
            <ul className="space-y-0">
              {takeaways.map((t, i) => (
                <li
                  key={i}
                  className="flex gap-3 items-start py-2 border-b border-[#2d3c59]/06 last:border-0 text-[0.87rem] text-[#2d3c59]/65 leading-[1.6]"
                >
                  <span className="text-[#94a378] text-[11px] mt-[3px] flex-shrink-0">+</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Doctor visits */}
          <div className="bg-white border border-[#2d3c59]/08 p-8">
            <h3
              className="text-[1.45rem] font-light text-[#2d3c59] mb-5"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Optimizing Doctor Visits
            </h3>
            <ul className="space-y-0">
              {doctorTips.map((t, i) => (
                <li
                  key={i}
                  className="flex gap-3 items-start py-2 border-b border-[#2d3c59]/06 last:border-0 text-[0.87rem] text-[#2d3c59]/65 leading-[1.6]"
                >
                  <span className="text-[#94a378] text-[11px] mt-[3px] flex-shrink-0">+</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image panel */}
          <div className="overflow-hidden min-h-[280px]">
            <img
              src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=600&q=75&fit=crop&crop=faces,top"
              alt="Parent and child at doctor consultation"
              className="w-full h-full object-cover"
              style={{ minHeight: "280px" }}
            />
          </div>
        </div>

        {/* ── CTA ──────────────────────────────────────────────────── */}
        <div className="flex flex-wrap gap-3 pt-10 mb-10">
          <Link
            href="/emergency-card"
            className="bg-[#2d3c59] text-[#eaebd0] px-7 py-3.5 text-[0.68rem] tracking-[0.18em] uppercase font-semibold rounded-sm hover:bg-[#94a378] hover:-translate-y-px transition-all duration-150"
          >
            Create free emergency card
          </Link>
          <Link
            href="/emergency"
            className="border border-[#2d3c59]/30 text-[#2d3c59] px-7 py-3.5 text-[0.68rem] tracking-[0.18em] uppercase font-semibold rounded-sm hover:bg-[#2d3c59]/05 transition-all duration-150"
          >
            Addisonian crisis – what to do
          </Link>
        </div>


      </div>
    </section>
  );
}
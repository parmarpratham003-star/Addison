import Link from "next/link";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { createPageMetadata } from "@/lib/seo";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  variable: "--font-cormorant",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-outfit",
});

export const metadata = createPageMetadata({
  title: "Addisonian Crisis | Emergency",
  description: "Emergency information for Addisonian crisis.",
  path: "/emergency",
});

const symptoms = [
  "Severe weakness or collapse",
  "Abdominal pain, vomiting, diarrhea",
  "Confusion or unconsciousness",
  "Low blood pressure or shock",
  "Dehydration",
  "Low blood sugar",
];

const steps = [
  { title: "Inject hydrocortisone", desc: "100 mg intramuscularly" },
  { title: "Call 112",              desc: "Contact emergency services" },
  { title: "Inform responders",     desc: "Tell them it's adrenal crisis" },
  { title: "Show emergency card",   desc: "Provide medical info" },
];

export default function EmergencyPage() {
  return (
    <div
      className={`${cormorant.variable} ${outfit.variable}`}
      style={{
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
        fontFamily: "var(--font-outfit), Outfit, sans-serif",
      }}
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-20">

        {/* ── HEADER ── */}
        <div className="mb-14 border-b border-[#2d3c59]/10 pb-10">
          <div className="flex items-center gap-2 mb-3">
            <span
              className="w-1.5 h-1.5 rounded-full bg-red-500"
            />
            <p
              className="text-[0.65rem] uppercase tracking-[0.25em] font-medium"
              style={{ color: "rgba(45,60,89,0.4)", fontFamily: "var(--font-outfit)" }}
            >
              Medical Emergency
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h1
              className="font-semibold leading-[0.95]"
              style={{
                fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                fontSize: "clamp(2.8rem, 5vw, 4.5rem)",
                color: "#2d3c59",
              }}
            >
              Addisonian{" "}
              <span style={{ color: "rgba(45,60,89,0.4)", fontWeight: 400 }}>Crisis</span>
            </h1>
            <p
              className="text-sm font-light leading-relaxed sm:pb-2 max-w-[220px]"
              style={{ color: "rgba(45,60,89,0.45)", fontFamily: "var(--font-outfit)" }}
            >
              Inject emergency hydrocortisone immediately and call 112.
            </p>
          </div>
        </div>

        {/* ── ALERT BANNER ── */}
        <div
          className="mb-10 flex items-start gap-4 rounded-[14px] px-6 py-5"
          style={{
            background: "rgba(239,68,68,0.06)",
            border: "1px solid rgba(239,68,68,0.2)",
          }}
        >
          <span
            className="mt-0.5 w-2 h-2 rounded-full flex-shrink-0"
            style={{ background: "#ef4444", marginTop: "6px" }}
          />
          <p
            className="text-sm font-light leading-[1.8]"
            style={{ color: "rgba(45,60,89,0.7)", fontFamily: "var(--font-outfit)" }}
          >
            If you or someone with Addison&apos;s shows crisis signs —
            inject emergency hydrocortisone <strong style={{ fontWeight: 500 }}>immediately</strong> and call 112.
          </p>
        </div>

        {/* ── SYMPTOMS ── */}
        <div className="mb-2 border-t border-[#2d3c59]/10">
          <div className="py-8 border-b border-[#2d3c59]/10">
            <p
              className="text-[0.65rem] uppercase tracking-[0.25em] font-medium mb-6"
              style={{ color: "rgba(45,60,89,0.35)", fontFamily: "var(--font-outfit)" }}
            >
              Recognize
            </p>
            <h2
              className="mb-6 font-semibold leading-tight"
              style={{
                fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                fontSize: "clamp(1.6rem, 2.5vw, 2rem)",
                color: "#2d3c59",
              }}
            >
              Signs of Crisis
            </h2>
            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-0">
              {symptoms.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 py-3 border-b"
                  style={{ borderColor: "rgba(45,60,89,0.07)" }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: "#ef4444" }}
                  />
                  <span
                    className="text-sm font-light"
                    style={{ color: "rgba(45,60,89,0.65)", fontFamily: "var(--font-outfit)" }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── WHAT TO DO ── */}
        <div className="py-8 border-b border-[#2d3c59]/10">
          <p
            className="text-[0.65rem] uppercase tracking-[0.25em] font-medium mb-6"
            style={{ color: "rgba(45,60,89,0.35)", fontFamily: "var(--font-outfit)" }}
          >
            Act Immediately
          </p>
          <h2
            className="mb-8 font-semibold leading-tight"
            style={{
              fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
              fontSize: "clamp(1.6rem, 2.5vw, 2rem)",
              color: "#2d3c59",
            }}
          >
            What to Do
          </h2>

          <div className="flex flex-col">
            {steps.map((step, i) => (
              <div
                key={i}
                className="flex items-start gap-5 py-5 border-b"
                style={{ borderColor: "rgba(45,60,89,0.07)" }}
              >
                {/* Number */}
                <span
                  className="hidden sm:flex w-10 flex-shrink-0 text-[0.65rem] uppercase tracking-[0.25em] font-medium pt-0.5"
                  style={{ color: "rgba(45,60,89,0.25)", fontFamily: "var(--font-outfit)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Step indicator dot */}
                <div
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold sm:hidden"
                  style={{ background: "#2d3c59", color: "#f5f5f5" }}
                >
                  {i + 1}
                </div>

                {/* Text */}
                <div className="flex-1">
                  <p
                    className="font-medium mb-0.5"
                    style={{
                      fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                      fontSize: "1.1rem",
                      color: "#2d3c59",
                    }}
                  >
                    {step.title}
                  </p>
                  <p
                    className="text-sm font-light"
                    style={{ color: "rgba(45,60,89,0.5)", fontFamily: "var(--font-outfit)" }}
                  >
                    {step.desc}
                  </p>
                </div>

                {/* Red dot for emphasis on first step */}
                {i === 0 && (
                  <span
                    className="flex-shrink-0 text-[0.65rem] uppercase tracking-[0.15em] font-medium px-3 py-1 rounded-full"
                    style={{
                      background: "rgba(239,68,68,0.08)",
                      color: "#ef4444",
                      border: "1px solid rgba(239,68,68,0.2)",
                      fontFamily: "var(--font-outfit)",
                    }}
                  >
                    Priority
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── STRESS DOSING ── */}
        <div className="py-8 border-b border-[#2d3c59]/10 flex items-start gap-5">
          <span
            className="hidden sm:block w-10 flex-shrink-0 text-[0.65rem] uppercase tracking-[0.25em] font-medium pt-0.5"
            style={{ color: "rgba(45,60,89,0.25)", fontFamily: "var(--font-outfit)" }}
          >
            ⚡
          </span>
          <div className="flex-1">
            <p
              className="text-[0.65rem] uppercase tracking-[0.25em] font-medium mb-3"
              style={{ color: "rgba(45,60,89,0.35)", fontFamily: "var(--font-outfit)" }}
            >
              Prevention
            </p>
            <h3
              className="mb-3 font-semibold"
              style={{
                fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                fontSize: "1.3rem",
                color: "#2d3c59",
              }}
            >
              When to Stress Dose
            </h3>
            <p
              className="text-sm font-light leading-[1.8]"
              style={{ color: "rgba(45,60,89,0.55)", fontFamily: "var(--font-outfit)" }}
            >
              Increase hydrocortisone during illness, injury, or stress.
              When in doubt, take extra and contact your doctor.
            </p>
          </div>
        </div>

        {/* ── BOTTOM: NUMBERS + CTA ── */}
        <div className="pt-8 grid sm:grid-cols-2 gap-10">

          {/* Emergency numbers */}
          <div>
            <p
              className="text-[0.65rem] uppercase tracking-[0.25em] font-medium mb-5"
              style={{ color: "rgba(45,60,89,0.35)", fontFamily: "var(--font-outfit)" }}
            >
              Emergency Numbers
            </p>
            {[
              { number: "112", label: "National emergency number" },
              { number: "102", label: "Ambulance (some states)" },
            ].map(({ number, label }) => (
              <div
                key={number}
                className="flex items-center gap-4 py-4 border-b"
                style={{ borderColor: "rgba(45,60,89,0.07)" }}
              >
                <span
                  className="text-sm font-semibold px-4 py-1.5 rounded-full"
                  style={{
                    background: "#2d3c59",
                    color: "#f5f5f5",
                    fontFamily: "var(--font-outfit)",
                  }}
                >
                  {number}
                </span>
                <span
                  className="text-sm font-light"
                  style={{ color: "rgba(45,60,89,0.55)", fontFamily: "var(--font-outfit)" }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div>
            <p
              className="text-[0.65rem] uppercase tracking-[0.25em] font-medium mb-5"
              style={{ color: "rgba(45,60,89,0.35)", fontFamily: "var(--font-outfit)" }}
            >
              Be Prepared
            </p>
            <p
              className="text-sm font-light leading-[1.8] mb-6"
              style={{ color: "rgba(45,60,89,0.55)", fontFamily: "var(--font-outfit)" }}
            >
              Carry your emergency injection kit and medical card at all times.
            </p>
            <Link
              href="/emergency-card"
              className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-[0.75rem] uppercase tracking-[0.08em] font-medium transition-all duration-200 hover:-translate-y-px hover:shadow-[0_4px_20px_rgba(45,60,89,0.2)]"
              style={{
                background: "#2d3c59",
                color: "#f5f5f5",
                boxShadow: "0 2px 12px rgba(45,60,89,0.15)",
                fontFamily: "var(--font-outfit)",
              }}
            >
              Create Emergency Card
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}
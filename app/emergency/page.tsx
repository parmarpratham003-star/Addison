import Link from "next/link";
import { Playfair_Display, DM_Sans } from "next/font/google";
import { createPageMetadata } from "@/lib/seo";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-playfair",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm",
});

export const metadata = createPageMetadata({
  title: "Addisonian Crisis | Emergency",
  description: "Emergency information for Addisonian crisis.",
  path: "/emergency",
});

export default function EmergencyPage() {
  return (
    <div
      className={`${playfair.variable} ${dmSans.variable} bg-[#eaebd0] min-h-screen`}
      style={{ fontFamily: "var(--font-dm)" }}
    >
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-10">

        {/* 🔴 HERO */}
        <div className="bg-red-100 border border-red-300 rounded-2xl p-8 shadow-sm">
          <div className="flex items-center gap-2 text-red-600 text-xs uppercase tracking-[0.3em]">
            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
            Medical Emergency
          </div>

          <h1
            className="text-[2.5rem] text-[#2d3c59] mt-3"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Addisonian Crisis
          </h1>

          <p className="mt-4 text-[0.95rem] text-[#2d3c59]/75 leading-[1.7]">
            If you or someone with Addison&apos;s shows crisis signs — inject
            emergency hydrocortisone immediately and call 112.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* LEFT */}
          <div className="bg-white/70 backdrop-blur rounded-2xl p-6 border border-[#2d3c59]/10 shadow-sm hover:shadow-md transition">
            <p className="text-xs uppercase tracking-[0.2em] text-[#2d3c59]/40 mb-3">
              Recognize
            </p>

            <h2 className="text-xl text-[#2d3c59]" style={{ fontFamily: "var(--font-playfair)" }}>
              Signs of crisis
            </h2>

            <ul className="mt-5 space-y-3 text-[0.85rem] text-[#2d3c59]/70">

              {[
                "Severe weakness or collapse",
                "Abdominal pain, vomiting, diarrhea",
                "Confusion or unconsciousness",
                "Low blood pressure or shock",
                "Dehydration",
                "Low blood sugar",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-2 bg-red-500 rounded-full"></span>
                  {item}
                </li>
              ))}

            </ul>
          </div>

          {/* RIGHT */}
          <div className="bg-[#2d3c59] text-white rounded-2xl p-6 shadow-md">
            <p className="text-xs uppercase tracking-[0.2em] text-white/50 mb-3">
              Act Immediately
            </p>

            <h2 className="text-xl" style={{ fontFamily: "var(--font-playfair)" }}>
              What to do
            </h2>

            <div className="mt-6 space-y-5">

              {[
                {
                  title: "Inject hydrocortisone",
                  desc: "100 mg intramuscularly",
                },
                {
                  title: "Call 112",
                  desc: "Contact emergency services",
                },
                {
                  title: "Inform responders",
                  desc: "Tell them it's adrenal crisis",
                },
                {
                  title: "Show emergency card",
                  desc: "Provide medical info",
                },
              ].map((step, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-red-500 text-white text-xs font-semibold shadow">
                    {i + 1}
                  </div>
                  <div>
                    <p className="font-medium">{step.title}</p>
                    <p className="text-white/70 text-sm">{step.desc}</p>
                  </div>
                </div>
              ))}

            </div>
          </div>

        </div>

        {/* STRESS */}
        <div className="bg-[#2d3c59]/10 rounded-2xl p-6 flex gap-4 items-start shadow-sm">
          <div className="w-10 h-10 flex items-center justify-center bg-[#2d3c59] text-white rounded-xl">
            ⚡
          </div>

          <div>
            <h3 className="text-lg text-[#2d3c59]" style={{ fontFamily: "var(--font-playfair)" }}>
              When to stress dose
            </h3>

            <p className="mt-2 text-sm text-[#2d3c59]/70 leading-[1.7]">
              Increase hydrocortisone during illness, injury, or stress.
              When in doubt, take extra and contact your doctor.
            </p>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* NUMBERS */}
          <div className="bg-[#2d3c59] text-white rounded-2xl p-6 shadow-md">
            <h3 className="text-lg" style={{ fontFamily: "var(--font-playfair)" }}>
              Emergency numbers
            </h3>

            <div className="mt-5 space-y-4">

              <div className="flex items-center gap-4">
                <span className="bg-red-500 px-3 py-1 rounded-full font-semibold">
                  112
                </span>
                <p className="text-white/80 text-sm">
                  National emergency number
                </p>
              </div>

              <div className="flex items-center gap-4">
                <span className="bg-red-500 px-3 py-1 rounded-full font-semibold">
                  102
                </span>
                <p className="text-white/80 text-sm">
                  Ambulance (some states)
                </p>
              </div>

            </div>
          </div>

          {/* CTA */}
          <div className="bg-white/70 backdrop-blur rounded-2xl p-6 border border-[#2d3c59]/10 shadow-sm hover:shadow-md transition">
            <h3 className="text-lg text-[#2d3c59]" style={{ fontFamily: "var(--font-playfair)" }}>
              Be prepared
            </h3>

            <p className="mt-3 text-sm text-[#2d3c59]/70">
              Carry your emergency injection kit and medical card.
            </p>

            <Link
              href="/emergency-card"
              className="mt-6 inline-flex items-center gap-2 border border-[#2d3c59]/30 px-5 py-3 rounded-xl text-sm text-[#2d3c59] hover:bg-[#2d3c59] hover:text-white transition"
            >
              Create emergency card →
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}
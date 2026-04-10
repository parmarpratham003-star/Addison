import Link from "next/link";
import { Cormorant_Garamond, Outfit } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
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
  { title: "Call 112", desc: "Contact emergency services" },
  { title: "Inform responders", desc: "Tell them it's adrenal crisis" },
  { title: "Show emergency card", desc: "Provide medical info" },
];

export default function EmergencyPage() {
  return (
    <div className={`${outfit.className} bg-[#f5f5f5] min-h-screen`}>

      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-10 py-16">

        {/* 🔥 HERO (IMAGE + CONTENT) */}
        <div className="grid lg:grid-cols-2 gap-10 items-center mb-16">

          {/* LEFT IMAGE */}
          <div className="overflow-hidden rounded-md">
            <img
              src="https://plus.unsplash.com/premium_photo-1664304339622-ccb9031b7373?q=80&w=739&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-full h-[280px] sm:h-[360px] object-cover"
              alt="Emergency care"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-red-500 mb-3">
              Medical Emergency
            </p>

            <h1 className={`${cormorant.className} text-[2.5rem] sm:text-[3.5rem] leading-[0.95] text-[#2d3c59]`}>
              Addisonian <span className="text-[#2d3c59]/40">Crisis</span>
            </h1>

            <p className="mt-4 text-[14px] text-[#2d3c59]/60 max-w-md leading-[1.6]">
              Immediate action is critical. Recognize symptoms and respond quickly to prevent life-threatening complications.
            </p>

            {/* SMALL ACTION BOX */}
            <div className="mt-6 bg-white/70 p-5 rounded-md">
              <p className="text-[12px] uppercase tracking-[0.2em] text-red-500 mb-2">
                Immediate Action
              </p>
              <p className="text-[14px] text-[#2d3c59] leading-[1.6]">
                Inject hydrocortisone immediately and call emergency services (112).
              </p>
            </div>
          </div>

        </div>

        {/* 🔥 SYMPTOMS + STEPS */}
        <div className="grid lg:grid-cols-2 gap-10 mb-16">

          {/* Symptoms */}
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#2d3c59]/50 mb-3">
              Recognize
            </p>

            <h2 className={`${cormorant.className} text-2xl text-[#2d3c59] mb-6`}>
              Signs of Crisis
            </h2>

            <div className="space-y-3">
              {symptoms.map((s, i) => (
                <div key={i} className="flex items-center gap-3 text-[14px] text-[#2d3c59]/70">
                  <span className="w-1.5 h-1.5 bg-[#2d3c59] rounded-full" />
                  {s}
                </div>
              ))}
            </div>
          </div>

          {/* Steps */}
          <div className="bg-[#2d3c59] text-white p-6 sm:p-8 rounded-md">
            <p className="text-[11px] uppercase tracking-[0.2em] text-white/50 mb-3">
              Act Immediately
            </p>

            <h2 className={`${cormorant.className} text-2xl mb-6`}>
              What to Do
            </h2>

            <div className="space-y-5">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <span className="text-xl opacity-40">{i + 1}</span>
                  <div>
                    <p className="text-[14px] font-medium">{step.title}</p>
                    <p className="text-[12px] text-white/60">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* 🔥 PREVENTION (IMAGE STRIP STYLE) */}
        <div className="mb-16 relative overflow-hidden rounded-md">
          <img
            src="https://plus.unsplash.com/premium_photo-1672759455710-70c879daf721?q=80&w=1416&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-full h-[220px] object-cover"
            alt="Prevention"
          />
          <div className="absolute inset-0 bg-[#2d3c59]/80 flex items-center">
            <div className="px-6 sm:px-10">
              <p className="text-[11px] uppercase tracking-[0.2em] text-white/50 mb-2">
                Prevention
              </p>
              <h3 className={`${cormorant.className} text-xl text-white mb-2`}>
                Stress Dosing
              </h3>
              <p className="text-[14px] text-white/70 max-w-lg">
                Increase hydrocortisone during illness, injury, or stress. When unsure, take extra and consult your doctor.
              </p>
            </div>
          </div>
        </div>

        {/* 🔥 FOOTER */}
        <div className="grid sm:grid-cols-2 gap-10">

          {/* Numbers */}
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#2d3c59]/50 mb-4">
              Emergency Numbers
            </p>

            <div className="space-y-4">
              {["112", "102"].map((num) => (
                <div key={num} className="flex items-center gap-4">
                  <span className="w-12 h-12 bg-[#2d3c59]/5 flex items-center justify-center rounded-full text-[#2d3c59]">
                    {num}
                  </span>
                  <span className="text-[13px] text-[#2d3c59]/70">
                    {num === "112" ? "National emergency" : "Ambulance"}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#2d3c59]/50 mb-3">
              Be Prepared
            </p>

            <p className="text-[14px] text-[#2d3c59]/70 mb-6">
              Always carry your emergency kit and medical card.
            </p>

            <Link
              href="/emergency-card"
              className="inline-block bg-[#2d3c59] text-white px-6 py-3 text-[12px] uppercase tracking-[0.1em]"
            >
              Create Emergency Card
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}
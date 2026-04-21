"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Cormorant_Garamond, Outfit } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const INDIAN_STATES = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
  "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
  "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
  "Andaman & Nicobar Islands", "Chandigarh", "Dadra & Nagar Haveli",
  "Daman & Diu", "Delhi", "Jammu & Kashmir", "Ladakh", "Lakshadweep", "Puducherry",
];

export default function EditProfile() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", state: "" });
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/me")
      .then((res) => res.json())
      .then((user) => {
        if (!user) return;
        setForm({ name: user.name || "", state: user.state || "" });
      })
      .finally(() => setLoading(false));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    setSaving(true);
    const res = await fetch("/api/profile", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setSaving(false);

    if (!res.ok) { alert("Error updating profile"); return; }
    router.push("/profile");
  };

  const inputCls = `${outfit.className} w-full px-4 py-2.5 text-[13px] font-light
    border border-[#2d3c59]/12 bg-[#f5f5f5] text-[#2d3c59]
    placeholder-[#2d3c59]/30 outline-none
    focus:border-[#2d3c59]/30 focus:bg-white
    transition-all duration-200`;

  if (loading) {
    return (
      <div className={`${outfit.className} min-h-screen bg-[#f5f5f5] flex items-center justify-center`}>
        <div className="text-center space-y-3">
          <div className="w-8 h-8 border border-[#2d3c59]/20 border-t-[#2d3c59] rounded-full animate-spin mx-auto" />
          <p className="text-[12px] font-light text-[#2d3c59]/45 tracking-wide">Loading…</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`${outfit.className} min-h-screen bg-[#f5f5f5] relative overflow-hidden`}>

      {/* Background blobs */}
      <div className="pointer-events-none absolute -top-20 -left-20 h-[400px] w-[400px] rounded-full bg-[#eaebd0] opacity-45 blur-[80px]" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-[320px] w-[320px] rounded-full bg-[#2d3c59]/10 opacity-30 blur-[96px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8 sm:py-16">
        <div className="lg:pl-8 xl:pl-12 max-w-xl">

          {/* ── HEADER ── */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-1.5 sm:gap-4 mb-5 sm:mb-9">
            <h1 className={`${cormorant.className} text-[2rem] sm:text-[clamp(2.8rem,5vw,4rem)] font-semibold leading-[0.9] text-[#2d3c59] tracking-tight`}>
              Edit{" "}
              <span className="font-normal text-[#2d3c59]/65">Profile</span>
            </h1>
            <p className={`${outfit.className} text-[11.5px] sm:text-[13px] font-light leading-[1.65] text-[#2d3c59]/48 sm:pb-0.5`}>
              Update your personal details
            </p>
          </div>

          {/* ── FORM CARD ── */}
          <div className="border-t border-[#2d3c59]/10">

            {/* Avatar + name preview strip */}
            <div className="border-b border-[#2d3c59]/10 py-5 sm:py-6 px-3 sm:px-7 flex items-center gap-5 bg-[#2d3c59]/[0.03]">
              <div
                className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-[#2d3c59] text-[#eaebd0]"
                style={{ borderRadius: "3px" }}
              >
                <span className={`${cormorant.className} text-xl font-semibold leading-none`}>
                  {form.name ? form.name.charAt(0).toUpperCase() : "?"}
                </span>
              </div>
              <div>
                <p className={`${cormorant.className} text-[1.2rem] sm:text-[1.4rem] font-semibold leading-tight text-[#2d3c59]`}>
                  {form.name || <span className="text-[#2d3c59]/30 font-normal italic text-base">Your name</span>}
                </p>
                {form.state && (
                  <p className={`${outfit.className} text-[11px] font-light text-[#2d3c59]/40 mt-0.5`}>
                    {form.state}
                  </p>
                )}
              </div>
            </div>

            {/* Fields */}
            <div className="border-b border-[#2d3c59]/10 py-5 sm:py-7 px-3 sm:px-7 space-y-4">
              <p className={`${outfit.className} text-[9.5px] sm:text-[10.5px] uppercase tracking-[0.18em] font-medium text-[#2d3c59]/38`}>
                Personal info
              </p>

              {/* Name */}
              <div className="space-y-1">
                <label className={`${outfit.className} text-[10px] uppercase tracking-[0.14em] font-medium text-[#2d3c59]/38`}>
                  Full Name
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  style={{ borderRadius: "3px" }}
                  className={inputCls}
                />
              </div>

              {/* State */}
              <div className="space-y-1">
                <label className={`${outfit.className} text-[10px] uppercase tracking-[0.14em] font-medium text-[#2d3c59]/38`}>
                  State
                </label>
                <select
                  name="state"
                  value={form.state}
                  onChange={handleChange}
                  style={{ borderRadius: "3px" }}
                  className={`${inputCls} cursor-pointer appearance-none`}
                >
                  <option value="">Select your state</option>
                  {INDIAN_STATES.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Footer */}
            <div className="py-4 sm:py-5 px-3 sm:px-7 flex items-center justify-between gap-3 bg-[#2d3c59]/[0.025]">
              <p className={`${outfit.className} text-[11px] font-light text-[#2d3c59]/38`}>
                Changes saved instantly
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => router.push("/profile")}
                  style={{ borderRadius: "3px" }}
                  className={`${outfit.className} px-5 py-[9px]
                    text-[10px] font-medium tracking-[0.08em] uppercase
                    border border-[#2d3c59]/20 text-[#2d3c59]
                    hover:bg-[#2d3c59]/5 transition-all duration-200`}
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={saving}
                  style={{ borderRadius: "3px" }}
                  className={`${outfit.className} inline-flex items-center gap-2 px-6 py-[9px]
                    text-[10px] font-medium tracking-[0.08em] uppercase text-[#eaebd0]
                    shadow-[0_2px_10px_rgba(45,60,89,0.18)] transition-all duration-200 group
                    ${saving
                      ? "bg-[#2d3c59]/40 cursor-not-allowed"
                      : "bg-[#2d3c59] hover:shadow-[0_4px_18px_rgba(45,60,89,0.28)] hover:-translate-y-px"
                    }`}
                >
                  <span>{saving ? "Saving…" : "Save Profile"}</span>
                  {!saving && (
                    <svg className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5"
                      fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
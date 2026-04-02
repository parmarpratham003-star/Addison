"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { Document, Page, Text, View, StyleSheet, pdf } from "@react-pdf/renderer";

// ── Fonts ─────────────────────────────────────────────────────────────────────
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cormorant",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-outfit",
});

// ── PDF styles ────────────────────────────────────────────────────────────────
const pdfStyles = StyleSheet.create({
  page: { padding: 16, fontSize: 9, fontFamily: "Helvetica" },
  card: {
    border: "2px solid #2d3c59",
    borderRadius: 8,
    padding: 12,
    backgroundColor: "#eaebd0",
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#2d3c59",
    marginBottom: 8,
    textAlign: "center",
  },
  label: {
    fontSize: 8,
    fontWeight: "bold",
    color: "#2d3c59",
    marginTop: 6,
    marginBottom: 2,
  },
  value: { fontSize: 9, color: "#334155" },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: "#2d3c59",
    marginVertical: 4,
    opacity: 0.2,
  },
});

// ── PDF document ──────────────────────────────────────────────────────────────
function EmergencyCardPDF({ data }: { data: EmergencyCardData }) {
  return (
    <Document>
      <Page size="A6" style={pdfStyles.page}>
        <View style={pdfStyles.card}>
          <Text style={pdfStyles.title}>ADDISON&apos;S DISEASE — EMERGENCY CARD</Text>
          <Text style={pdfStyles.label}>PATIENT NAME</Text>
          <Text style={pdfStyles.value}>{data.name}</Text>
          <View style={pdfStyles.divider} />
          <Text style={pdfStyles.label}>EMERGENCY CONTACT</Text>
          <Text style={pdfStyles.value}>{data.emergencyContact}</Text>
          <View style={pdfStyles.divider} />
          <Text style={pdfStyles.label}>MEDICATIONS (cortisol replacement)</Text>
          <Text style={pdfStyles.value}>{data.medications}</Text>
          <View style={pdfStyles.divider} />
          <Text style={pdfStyles.label}>ENDOCRINOLOGIST / DOCTOR</Text>
          <Text style={pdfStyles.value}>{data.doctorContact || "—"}</Text>
          <View style={pdfStyles.divider} />
          <Text style={pdfStyles.label}>ALLERGIES</Text>
          <Text style={pdfStyles.value}>{data.allergies || "None known"}</Text>
          {data.additionalInfo && (
            <>
              <View style={pdfStyles.divider} />
              <Text style={pdfStyles.label}>ADDITIONAL INFO</Text>
              <Text style={pdfStyles.value}>{data.additionalInfo}</Text>
            </>
          )}
          <Text style={{ fontSize: 8, color: "#2d3c59", marginTop: 8, textAlign: "center" }}>
            In crisis: Give hydrocortisone immediately. Call 112.
          </Text>
        </View>
      </Page>
    </Document>
  );
}

// ── Types ─────────────────────────────────────────────────────────────────────
export interface EmergencyCardData {
  name: string;
  emergencyContact: string;
  medications: string;
  doctorContact: string;
  allergies: string;
  additionalInfo: string;
}

const initialState: EmergencyCardData = {
  name: "",
  emergencyContact: "",
  medications: "",
  doctorContact: "",
  allergies: "",
  additionalInfo: "",
};

// ── Animation keyframes (injected once) ──────────────────────────────────────
const animStyles = `
  @keyframes ec-fadeUp {
    from { opacity: 0; transform: translateY(22px); }
    to   { opacity: 1; transform: translateY(0);    }
  }
  @keyframes ec-slideRight {
    from { opacity: 0; transform: translateX(28px); }
    to   { opacity: 1; transform: translateX(0);    }
  }
  @keyframes ec-scaleIn {
    from { opacity: 0; transform: scale(0.96); }
    to   { opacity: 1; transform: scale(1);    }
  }
  .ec-anim-1 { animation: ec-fadeUp    .55s          cubic-bezier(.22,1,.36,1) both; }
  .ec-anim-2 { animation: ec-fadeUp    .55s  .08s    cubic-bezier(.22,1,.36,1) both; }
  .ec-anim-3 { animation: ec-fadeUp    .55s  .16s    cubic-bezier(.22,1,.36,1) both; }
  .ec-anim-4 { animation: ec-fadeUp    .55s  .24s    cubic-bezier(.22,1,.36,1) both; }
  .ec-anim-5 { animation: ec-slideRight .6s  .30s    cubic-bezier(.22,1,.36,1) both; }
  .ec-anim-6 { animation: ec-scaleIn   .5s   .40s    cubic-bezier(.22,1,.36,1) both; }

  @media (max-width: 680px) {
    .ec-anim-5 { animation: ec-fadeUp .55s .30s cubic-bezier(.22,1,.36,1) both; }
  }
`;

// ── Page component ────────────────────────────────────────────────────────────
export default function EmergencyCardPage() {
  const { status } = useSession();
  const [data, setData] = useState<EmergencyCardData>(initialState);
  const [downloading, setDownloading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const isValid =
    data.name.trim() && data.emergencyContact.trim() && data.medications.trim();

  useEffect(() => {
    if (status === "authenticated") {
      fetch("/api/emergency-card")
        .then((r) => r.json())
        .then((card) => {
          if (card?.name) {
            setData({
              name: card.name,
              emergencyContact: card.emergencyContact ?? "",
              medications: card.medications ?? "",
              doctorContact: card.doctorContact ?? "",
              allergies: card.allergies ?? "",
              additionalInfo: card.additionalInfo ?? "",
            });
          }
        })
        .catch(() => {});
    }
  }, [status]);

  async function handleSave() {
    if (!isValid) return;
    setSaving(true);
    try {
      const res = await fetch("/api/emergency-card", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) setSaved(true);
    } catch {
      // ignore
    }
    setSaving(false);
  }

  async function handleDownloadPDF() {
    if (!isValid) return;
    setDownloading(true);
    try {
      const blob = await pdf(<EmergencyCardPDF data={data} />).toBlob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `addisons-emergency-card-${data.name.replace(/\s+/g, "-")}.pdf`;
      a.click();
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error(err);
    }
    setDownloading(false);
  }

  // Shared field classes
  const inputCls = [
    "w-full rounded-full px-4 py-2.5 text-sm outline-none",
    "bg-[#eaebd0]/60 border border-[#2d3c59]/10",
    "text-[#2d3c59] placeholder-[#2d3c59]/28",
    "transition-all duration-200",
    "focus:border-[#2d3c59]/30 focus:bg-[#eaebd0]/90 focus:scale-[1.01]",
  ].join(" ");

  const textareaCls = [
    "w-full rounded-[14px] px-4 py-3 text-sm outline-none resize-none",
    "bg-[#eaebd0]/60 border border-[#2d3c59]/10",
    "text-[#2d3c59] placeholder-[#2d3c59]/28",
    "transition-all duration-200",
    "focus:border-[#2d3c59]/30 focus:bg-[#eaebd0]/90",
  ].join(" ");

  const sectionCls = [
    "bg-white/40 border border-[#2d3c59]/10 rounded-[24px] p-6",
    "transition-all duration-250",
    "hover:bg-white/55 hover:border-[#2d3c59]/16",
  ].join(" ");

  const previewFields = [
    { label: "Emergency Contact", value: data.emergencyContact },
    { label: "Medications",       value: data.medications       },
    { label: "Doctor",            value: data.doctorContact     },
    { label: "Allergies",         value: data.allergies || "None known" },
  ];

  return (
    <div
      className={`${cormorant.variable} ${outfit.variable} bg-[#eaebd0] min-h-screen px-4 sm:px-6 py-10 sm:py-25`}
      style={{ fontFamily: "var(--font-outfit), sans-serif" }}
    >
      {/* Inject animation keyframes */}
      <style>{animStyles}</style>

      {/* ── HEADER ── */}
      <div className="max-w-[960px] mx-auto mb-8 sm:mb-10 flex items-end justify-between flex-wrap gap-3 ec-anim-1">
        <div>
          <h1
            className="text-[clamp(2rem,5vw,2.8rem)] leading-[0.95] text-[#2d3c59]"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Emergency Card
          </h1>
          <p className="text-[0.62rem] tracking-[0.28em] uppercase text-[#2d3c59]/40 mt-2">
            Addison&apos;s Disease
          </p>
        </div>
        <span className="text-[0.62rem] tracking-[0.18em] uppercase text-[#2d3c59]/40 border border-[#2d3c59]/18 px-4 py-1.5 rounded-full transition-colors hover:border-[#2d3c59]/35 hover:text-[#2d3c59]/65">
          Adrenal Insufficiency
        </span>
      </div>

      {/* ── BODY GRID ── */}
      <div className="max-w-[960px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_290px] gap-4 sm:gap-5 items-start">

        {/* ── LEFT: FORM ── */}
        <div className="flex flex-col gap-3 sm:gap-4">

          {/* Section 1 — Patient Details */}
          <div className={`${sectionCls} ec-anim-2`}>
            <p className="text-[0.58rem] tracking-[0.24em] uppercase text-[#2d3c59] mb-4 sm:mb-5">
              Patient Details
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
              <input
                placeholder="Full Name *"
                value={data.name}
                onChange={(e) => setData((d) => ({ ...d, name: e.target.value }))}
                className={inputCls}
              />
              <input
                placeholder="Emergency Contact *"
                value={data.emergencyContact}
                onChange={(e) =>
                  setData((d) => ({ ...d, emergencyContact: e.target.value }))
                }
                className={inputCls}
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                placeholder="Allergies"
                value={data.allergies}
                onChange={(e) =>
                  setData((d) => ({ ...d, allergies: e.target.value }))
                }
                className={inputCls}
              />
              <input
                placeholder="Doctor / Endocrinologist"
                value={data.doctorContact}
                onChange={(e) =>
                  setData((d) => ({ ...d, doctorContact: e.target.value }))
                }
                className={inputCls}
              />
            </div>
          </div>

          {/* Section 2 — Medical Information */}
          <div className={`${sectionCls} ec-anim-3`}>
            <p className="text-[0.58rem] tracking-[0.24em] uppercase text-[#2d3c59] mb-4 sm:mb-5">
              Medical Information
            </p>
            <textarea
              rows={3}
              placeholder="Medications (cortisol replacement) *"
              value={data.medications}
              onChange={(e) =>
                setData((d) => ({ ...d, medications: e.target.value }))
              }
              className={`${textareaCls} mb-3`}
            />
            <textarea
              rows={2}
              placeholder="Additional notes or instructions"
              value={data.additionalInfo}
              onChange={(e) =>
                setData((d) => ({ ...d, additionalInfo: e.target.value }))
              }
              className={textareaCls}
            />
          </div>

          {/* ── Actions bar ── */}
          <div className="ec-anim-4 bg-white/40 border border-[#2d3c59]/10 rounded-[24px] px-5 sm:px-6 py-4 flex items-center gap-3 flex-wrap">
            <button
              onClick={handleDownloadPDF}
              disabled={!isValid || downloading}
              className="bg-[#2d3c59] text-[#eaebd0] px-6 sm:px-7 py-2.5 rounded-full text-sm font-medium transition-all duration-200 hover:bg-[#3d5070] hover:-translate-y-px active:scale-[0.97] disabled:opacity-30 disabled:cursor-not-allowed disabled:translate-y-0"
            >
              {downloading ? "Generating…" : "Download PDF"}
            </button>

            {status === "authenticated" && (
              <button
                onClick={handleSave}
                disabled={!isValid || saving}
                className="border border-[#2d3c59]/20 text-[#2d3c59] px-5 sm:px-6 py-2.5 rounded-full text-sm transition-all duration-200 hover:bg-[#2d3c59]/7 hover:border-[#2d3c59]/35 active:scale-[0.97] disabled:opacity-30 disabled:cursor-not-allowed"
              >
                {saving ? "Saving…" : saved ? "Saved ✓" : "Save card"}
              </button>
            )}

            <span className="ml-auto text-[11px] text-[#2d3c59]/32 hidden sm:inline">
              {isValid ? "Ready to download" : "Fill required fields to continue"}
            </span>
          </div>
        </div>

        {/* ── RIGHT: FLOATING PREVIEW ── */}
        <div className="md:sticky md:top-6 flex flex-col gap-3 sm:gap-4">

          {/* Card preview */}
          <div className="ec-anim-5 bg-[#2d3c59] rounded-[24px] p-5 sm:p-6 transition-transform duration-300 hover:-translate-y-1">
            <p className="text-[0.55rem] tracking-[0.2em] uppercase text-[#eaebd0]/38 mb-4 text-center">
              Live Preview
            </p>

            <p
              className="text-[1.65rem] leading-tight text-[#eaebd0] mb-5 min-h-[32px] italic transition-all duration-200"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              {data.name || "Your name"}
            </p>

            {previewFields.map(({ label, value }, i) => (
              <div key={label}>
                {i > 0 && (
                  <hr className="border-none border-t border-[#eaebd0]/8 my-2.5" />
                )}
                <p className="text-[0.55rem] tracking-[0.14em] uppercase text-[#eaebd0]/33 mb-1">
                  {label}
                </p>
                <p className="text-[0.75rem] text-[#eaebd0]/65 leading-snug min-h-[16px] transition-all duration-200">
                  {value || "—"}
                </p>
              </div>
            ))}

            <div className="mt-5 border border-[#eaebd0]/13 rounded-[10px] px-3 py-3 text-[0.62rem] text-[#eaebd0]/42 text-center leading-relaxed">
              In crisis — give hydrocortisone immediately
              <br />
              Call emergency services (112)
            </div>
          </div>

          {/* Tips */}
          <div className="ec-anim-6 bg-white/40 border border-[#2d3c59]/10 rounded-[24px] p-4 sm:p-5 flex flex-col gap-3">
            {[
              "Keep medications always updated",
              "Emergency contact is required",
              "Print and carry at all times",
            ].map((tip) => (
              <div
                key={tip}
                className="flex items-center gap-3 text-xs text-[#2d3c59]/45 group"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#2d3c59]/22 flex-shrink-0 transition-colors group-hover:bg-[#2d3c59]/50" />
                {tip}
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
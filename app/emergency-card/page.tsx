"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { Document, Page, Text, View, StyleSheet, pdf } from "@react-pdf/renderer";

// ── Fonts ─────────────────────────────────────────────────────────────────────
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

// ── PDF styles ────────────────────────────────────────────────────────────────
const pdfStyles = StyleSheet.create({
  page: { padding: 16, fontSize: 9, fontFamily: "Helvetica" },
  card: {
    border: "2px solid #2d3c59",
    borderRadius: 8,
    padding: 12,
    backgroundColor: "#f5f5f5",
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

// ── Animation keyframes ───────────────────────────────────────────────────────
const animStyles = `
  @keyframes ec-fadeUp {
    from { opacity: 0; transform: translateY(22px); }
    to   { opacity: 1; transform: translateY(0);    }
  }
  @keyframes ec-slideRight {
    from { opacity: 0; transform: translateX(24px); }
    to   { opacity: 1; transform: translateX(0);    }
  }
  .ec-anim-1 { animation: ec-fadeUp     .55s         cubic-bezier(.22,1,.36,1) both; }
  .ec-anim-2 { animation: ec-fadeUp     .55s  .08s   cubic-bezier(.22,1,.36,1) both; }
  .ec-anim-3 { animation: ec-fadeUp     .55s  .16s   cubic-bezier(.22,1,.36,1) both; }
  .ec-anim-4 { animation: ec-fadeUp     .55s  .24s   cubic-bezier(.22,1,.36,1) both; }
  .ec-anim-5 { animation: ec-slideRight .6s   .30s   cubic-bezier(.22,1,.36,1) both; }
  .ec-anim-6 { animation: ec-fadeUp     .55s  .40s   cubic-bezier(.22,1,.36,1) both; }

  .ec-input {
    width: 100%;
    border-radius: 3px;
    padding: 10px 18px;
    font-size: 0.85rem;
    outline: none;
    background: #ffffff;
    border: 1px solid rgba(45,60,89,0.12);
    color: #2d3c59;
    font-family: var(--font-outfit), sans-serif;
    transition: border-color 0.2s, box-shadow 0.2s;
  }
  .ec-input::placeholder { color: rgba(45,60,89,0.3); }
  .ec-input:focus {
    border-color: rgba(45,60,89,0.35);
    box-shadow: 0 0 0 3px rgba(45,60,89,0.06);
  }

  .ec-textarea {
    width: 100%;
    border-radius: 3px;
    padding: 12px 18px;
    font-size: 0.85rem;
    outline: none;
    background: #ffffff;
    border: 1px solid rgba(45,60,89,0.12);
    color: #2d3c59;
    font-family: var(--font-outfit), sans-serif;
    resize: none;
    transition: border-color 0.2s, box-shadow 0.2s;
  }
  .ec-textarea::placeholder { color: rgba(45,60,89,0.3); }
  .ec-textarea:focus {
    border-color: rgba(45,60,89,0.35);
    box-shadow: 0 0 0 3px rgba(45,60,89,0.06);
  }

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
    } catch { /* ignore */ }
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

  const previewFields = [
    { label: "Emergency Contact", value: data.emergencyContact },
    { label: "Medications",       value: data.medications       },
    { label: "Doctor",            value: data.doctorContact     },
    { label: "Allergies",         value: data.allergies || "None known" },
  ];

  return (
    <div
      className={`${cormorant.variable} ${outfit.variable}`}
      style={{
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
        fontFamily: "var(--font-outfit), Outfit, sans-serif",
      }}
    >
      <style>{animStyles}</style>

      {/* ── OUTER WRAPPER — matches hero max-w-7xl ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-6">

        {/* ── INNER WRAPPER — matches hero lg:pl-8 xl:pl-12 ── */}
        <div className="lg:pl-8 xl:pl-12">

          {/* ── HEADER ── */}
          <div className="ec-anim-1 mb-14 border-b border-[#2d3c59]/10 pb-10">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h1
                className="font-semibold leading-[0.95]"
                style={{
                  fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                  fontSize: "clamp(2.8rem, 5vw, 4.5rem)",
                  color: "#2d3c59",
                }}
              >
                Emergency{" "}
                <span style={{ color: "rgba(45,60,89,0.45)", fontWeight: 400 }}>Card</span>
              </h1>
              <p
                className="text-sm font-light leading-relaxed sm:pb-2 max-w-[250px]"
                style={{ color: "rgba(45,60,89,0.45)", fontFamily: "var(--font-outfit)" }}
              >
                Fill in your details and download a personalised card to carry at all times.
              </p>
            </div>
          </div>

          {/* ── BODY GRID ── */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_280px] gap-5 items-start">

            {/* ── LEFT: FORM ── */}
            <div className="flex flex-col gap-4">

              {/* Section 1 — Patient Details */}
              <div className="ec-anim-2 border-b border-[#2d3c59]/10 pb-8">
                <p
                  className="text-[0.65rem] uppercase tracking-[0.25em] font-medium mb-5"
                  style={{ color: "#2d3c59", fontFamily: "var(--font-outfit)" }}
                >
                  Patient Details
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                  <input
                    className="ec-input"
                    placeholder="Full Name *"
                    value={data.name}
                    onChange={(e) => setData((d) => ({ ...d, name: e.target.value }))}
                  />
                  <input
                    className="ec-input"
                    placeholder="Emergency Contact *"
                    value={data.emergencyContact}
                    onChange={(e) => setData((d) => ({ ...d, emergencyContact: e.target.value }))}
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    className="ec-input"
                    placeholder="Allergies"
                    value={data.allergies}
                    onChange={(e) => setData((d) => ({ ...d, allergies: e.target.value }))}
                  />
                  <input
                    className="ec-input"
                    placeholder="Doctor / Endocrinologist"
                    value={data.doctorContact}
                    onChange={(e) => setData((d) => ({ ...d, doctorContact: e.target.value }))}
                  />
                </div>
              </div>

              {/* Section 2 — Medical Information */}
              <div className="ec-anim-3 border-b border-[#2d3c59]/10 pb-12">
                <p
                  className="text-[0.65rem] uppercase tracking-[0.25em] font-medium mb-5"
                  style={{ color: "#2d3c59", fontFamily: "var(--font-outfit)" }}
                >
                  Medical Information
                </p>
                <textarea
                  className="ec-textarea mb-3"
                  rows={3}
                  placeholder="Medications (cortisol replacement) *"
                  value={data.medications}
                  onChange={(e) => setData((d) => ({ ...d, medications: e.target.value }))}
                />
                <textarea
                  className="ec-textarea"
                  rows={2}
                  placeholder="Additional notes or instructions"
                  value={data.additionalInfo}
                  onChange={(e) => setData((d) => ({ ...d, additionalInfo: e.target.value }))}
                />
              </div>

              {/* ── Actions ── */}
              <div className="ec-anim-4 flex items-center pt-1 pb-8">
                <button
                  onClick={handleDownloadPDF}
                  disabled={!isValid || downloading}
                  className="inline-flex items-center gap-2 px-8 py-3 text-[0.75rem] uppercase tracking-[0.08em] font-medium transition-all duration-200 hover:-translate-y-px disabled:opacity-30 disabled:cursor-not-allowed disabled:translate-y-0 shrink-0"
                  style={{
                    background: "#2d3c59",
                    color: "#f5f5f5",
                    boxShadow: "0 2px 12px rgba(45,60,89,0.2)",
                    fontFamily: "var(--font-outfit)",
                    borderRadius: "3px",
                  }}
                >
                  {downloading ? "Generating…" : "Download PDF"}
                  <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>

                {status === "authenticated" && (
                  <button
                    onClick={handleSave}
                    disabled={!isValid || saving}
                    className="inline-flex items-center gap-2 rounded-full border px-6 py-3 text-[0.75rem] uppercase tracking-[0.08em] font-medium transition-all duration-200 hover:bg-[#2d3c59] hover:text-[#f5f5f5] disabled:opacity-30 disabled:cursor-not-allowed shrink-0"
                    style={{
                      borderColor: "rgba(45,60,89,0.2)",
                      color: "rgba(45,60,89,0.6)",
                      fontFamily: "var(--font-outfit)",
                      marginLeft: "12px",
                    }}
                  >
                    {saving ? "Saving…" : saved ? "Saved ✓" : "Save card"}
                  </button>
                )}

                <span
                  className="ml-auto text-[11px] leading-relaxed text-right"
                  style={{
                    color: "rgba(45,60,89,0.45)",
                    fontFamily: "var(--font-outfit)",
                    maxWidth: "200px",
                  }}
                >
                  {status === "authenticated" ? (
                    isValid ? "Ready to download" : "Fill required fields to continue"
                  ) : (
                    <>
                      No account needed.{" "}
                      <Link
                        href="/register"
                        className="underline underline-offset-2 transition-colors duration-150"
                        style={{ color: "rgba(45,60,89,0.85)" }}
                      >
                        Create account
                      </Link>{" "}
                      to save and update your card anytime.
                    </>
                  )}
                </span>
              </div>
            </div>

            {/* ── RIGHT: PREVIEW ── */}
            <div className="md:sticky md:top-6 flex flex-col gap-4">
              <div
                className="ec-anim-5 p-6 transition-transform duration-300 hover:-translate-y-1"
                style={{
                  background: "#2d3c59",
                  boxShadow: "0 4px 24px rgba(45,60,89,0.2)",
                  borderRadius: "3px",
                }}
              >
                <p
                  className="text-[0.55rem] uppercase tracking-[0.22em] text-center mb-5"
                  style={{ color: "rgba(245,245,245,0.35)", fontFamily: "var(--font-outfit)" }}
                >
                  Live Preview
                </p>

                <p
                  className="text-[1.7rem] leading-tight mb-5 min-h-[34px] transition-all duration-200"
                  style={{
                    fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                    color: "rgba(245,245,245,0.9)",
                    fontWeight: 500,
                  }}
                >
                  {data.name || "Your name"}
                </p>

                {previewFields.map(({ label, value }, i) => (
                  <div key={label}>
                    {i > 0 && (
                      <div
                        className="my-3"
                        style={{ borderTop: "1px solid rgba(245,245,245,0.08)" }}
                      />
                    )}
                    <p
                      className="text-[0.55rem] uppercase tracking-[0.14em] mb-1"
                      style={{ color: "rgba(245,245,245,0.32)", fontFamily: "var(--font-outfit)" }}
                    >
                      {label}
                    </p>
                    <p
                      className="text-[0.75rem] leading-snug min-h-[16px] transition-all duration-200"
                      style={{ color: "rgba(245,245,245,0.62)", fontFamily: "var(--font-outfit)" }}
                    >
                      {value || "—"}
                    </p>
                  </div>
                ))}

                <div
                  className="mt-5 px-3 py-3 text-[0.62rem] text-center leading-relaxed"
                  style={{
                    border: "1px solid rgba(245,245,245,0.1)",
                    borderRadius: "10px",
                    color: "rgba(245,245,245,0.38)",
                    fontFamily: "var(--font-outfit)",
                  }}
                >
                  In crisis — give hydrocortisone immediately
                  <br />
                  Call emergency services (112)
                </div>
              </div>
            </div>

          </div>
        </div>{/* end inner lg:pl-8 xl:pl-12 */}
      </div>{/* end outer max-w-7xl */}
    </div>
  );
}
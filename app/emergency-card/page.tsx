"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { Document, Page, Text, View, StyleSheet, pdf } from "@react-pdf/renderer";
import { EmergencyCardPreview } from "@/components/EmergencyCardPreview";

const styles = StyleSheet.create({
  page: {
    padding: 16,
    fontSize: 9,
    fontFamily: "Helvetica",
  },
  card: {
    border: "2px solid #2c5282",
    borderRadius: 8,
    padding: 12,
    backgroundColor: "#f0f9ff",
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#2c5282",
    marginBottom: 8,
    textAlign: "center",
  },
  label: {
    fontSize: 8,
    fontWeight: "bold",
    color: "#64748b",
    marginTop: 6,
    marginBottom: 2,
  },
  value: {
    fontSize: 9,
    color: "#334155",
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: "#94a3b8",
    marginVertical: 4,
  },
});

function EmergencyCardPDF({ data }: { data: EmergencyCardData }) {
  return (
    <Document>
      <Page size="A6" style={styles.page}>
        <View style={styles.card}>
          <Text style={styles.title}>ADDISON&apos;S DISEASE - EMERGENCY CARD</Text>
          <Text style={styles.label}>PATIENT NAME</Text>
          <Text style={styles.value}>{data.name}</Text>
          <View style={styles.divider} />
          <Text style={styles.label}>EMERGENCY CONTACT</Text>
          <Text style={styles.value}>{data.emergencyContact}</Text>
          <View style={styles.divider} />
          <Text style={styles.label}>MEDICATIONS (cortisol replacement)</Text>
          <Text style={styles.value}>{data.medications}</Text>
          <View style={styles.divider} />
          <Text style={styles.label}>ENDOCRINOLOGIST / DOCTOR</Text>
          <Text style={styles.value}>{data.doctorContact || "—"}</Text>
          <View style={styles.divider} />
          <Text style={styles.label}>ALLERGIES</Text>
          <Text style={styles.value}>{data.allergies || "None known"}</Text>
          {data.additionalInfo && (
            <>
              <View style={styles.divider} />
              <Text style={styles.label}>ADDITIONAL INFO</Text>
              <Text style={styles.value}>{data.additionalInfo}</Text>
            </>
          )}
          <Text style={{ fontSize: 8, color: "#94a3b8", marginTop: 8, textAlign: "center" }}>
            In crisis: Give hydrocortisone immediately. Call 112.
          </Text>
        </View>
      </Page>
    </Document>
  );
}

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

export default function EmergencyCardPage() {
  const { data: session, status } = useSession();
  const [data, setData] = useState<EmergencyCardData>(initialState);
  const [downloading, setDownloading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const isValid = data.name.trim() && data.emergencyContact.trim() && data.medications.trim();

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

 return (
  <div className="bg-[#eaebd0] py-20 px-6">
    <div className="max-w-6xl mx-auto">

      {/* HEADER */}
      <div className="text-center mb-12">
        <h1 className="text-4xl italic text-[#2d3c59]">
          Emergency Card
        </h1>
        <p className="mt-3 text-sm text-[#2d3c59]/60">
          Fill your details and generate your medical emergency card.
        </p>
      </div>

      {/* MAIN BOX */}
      <div className="grid lg:grid-cols-3 rounded-3xl overflow-hidden shadow-xl">

        {/* 🔥 LEFT FORM */}
        <div className="lg:col-span-2 bg-white p-8 sm:p-10">

          <h2 className="text-lg font-semibold text-[#2d3c59] mb-6">
            Enter Your Details
          </h2>

          <form className="space-y-5">

            {/* ROW */}
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                placeholder="Full Name *"
                value={data.name}
                onChange={(e) =>
                  setData((d) => ({ ...d, name: e.target.value }))
                }
                className="w-full rounded-xl border border-[#2d3c59]/20 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#94a378]"
              />

              <input
                placeholder="Doctor Contact"
                value={data.doctorContact}
                onChange={(e) =>
                  setData((d) => ({ ...d, doctorContact: e.target.value }))
                }
                className="w-full rounded-xl border border-[#2d3c59]/20 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#94a378]"
              />
            </div>

            {/* ROW */}
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                placeholder="Allergies"
                value={data.allergies}
                onChange={(e) =>
                  setData((d) => ({ ...d, allergies: e.target.value }))
                }
                className="w-full rounded-xl border border-[#2d3c59]/20 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#94a378]"
              />

              <textarea
                rows={2}
                placeholder="Emergency Contact *"
                value={data.emergencyContact}
                onChange={(e) =>
                  setData((d) => ({ ...d, emergencyContact: e.target.value }))
                }
                className="w-full rounded-xl border border-[#2d3c59]/20 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#94a378]"
              />
            </div>

            {/* TEXTAREAS */}
            <textarea
              rows={2}
              placeholder="Medications *"
              value={data.medications}
              onChange={(e) =>
                setData((d) => ({ ...d, medications: e.target.value }))
              }
              className="w-full rounded-xl border border-[#2d3c59]/20 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#94a378]"
            />

            <textarea
              rows={2}
              placeholder="Additional Info"
              value={data.additionalInfo}
              onChange={(e) =>
                setData((d) => ({ ...d, additionalInfo: e.target.value }))
              }
              className="w-full rounded-xl border border-[#2d3c59]/20 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#94a378]"
            />

            {/* BUTTON */}
            <button
              type="button"
              onClick={handleDownloadPDF}
              disabled={!isValid || downloading}
              className="mt-4 bg-[#2d3c59] text-white px-6 py-3 rounded-full text-sm hover:bg-[#1f2a40] transition"
            >
              {downloading ? "Generating..." : "Download Card"}
            </button>

          </form>
        </div>

        {/* 🔥 RIGHT PANEL */}
        <div className="bg-[#2d3c59] text-white p-8 flex flex-col justify-between">

          <div>
            <h3 className="text-lg font-semibold mb-4">
              Your Card Preview
            </h3>

            {/* PREVIEW */}
            <div className="bg-white rounded-xl p-4 flex justify-center">
              <EmergencyCardPreview data={data} />
            </div>
          </div>

          {/* ACTIONS */}
          <div className="mt-8 space-y-4">

            {status === "authenticated" && (
              <button
                onClick={handleSave}
                disabled={!isValid || saving}
                className="w-full bg-[#94a378] text-white py-3 rounded-xl text-sm hover:bg-[#7e8f5e] transition"
              >
                {saving ? "Saving..." : saved ? "Saved ✓" : "Save to Account"}
              </button>
            )}

            <p className="text-xs text-white/60 text-center">
              Keep this card accessible in emergencies.
            </p>
          </div>

        </div>

      </div>
    </div>
  </div>
);
}
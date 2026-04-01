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
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-addisons-primary-dark sm:text-4xl">
          Medical Emergency Card
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-addisons-text-light">
          Create a wallet-sized card with your critical medical information. In an
          Addisonian crisis, ambulance crew and hospital staff need this information immediately.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Form - single column on mobile */}
        <div className="rounded-2xl bg-addisons-surface p-6 shadow-sm ring-1 ring-addisons-primary/20 sm:p-8">
          <h2 className="text-lg font-semibold text-addisons-primary-dark">
            Your information
          </h2>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-6 space-y-4"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-addisons-primary-dark">
                Full name *
              </label>
              <input
                id="name"
                type="text"
                required
                value={data.name}
                onChange={(e) => setData((d) => ({ ...d, name: e.target.value }))}
                placeholder="Your name"
                className="mt-1 block w-full rounded-lg border border-addisons-primary/30 px-4 py-3 text-addisons-text focus:border-addisons-primary focus:outline-none focus:ring-1 focus:ring-addisons-primary"
              />
            </div>
            <div>
              <label htmlFor="emergencyContact" className="block text-sm font-medium text-addisons-primary-dark">
                Emergency contact (name & phone) *
              </label>
              <textarea
                id="emergencyContact"
                required
                rows={2}
                value={data.emergencyContact}
                onChange={(e) => setData((d) => ({ ...d, emergencyContact: e.target.value }))}
                placeholder="e.g. 98765 43210"
                className="mt-1 block w-full rounded-lg border border-addisons-primary/30 px-4 py-3 text-addisons-text focus:border-addisons-primary focus:outline-none focus:ring-1 focus:ring-addisons-primary"
              />
            </div>
            <div>
              <label htmlFor="medications" className="block text-sm font-medium text-addisons-primary-dark">
                Medications (e.g. hydrocortisone dosage) *
              </label>
              <textarea
                id="medications"
                required
                rows={2}
                value={data.medications}
                onChange={(e) => setData((d) => ({ ...d, medications: e.target.value }))}
                placeholder="e.g. Hydrocortisone 10mg AM, 5mg PM"
                className="mt-1 block w-full rounded-lg border border-addisons-primary/30 px-4 py-3 text-addisons-text focus:border-addisons-primary focus:outline-none focus:ring-1 focus:ring-addisons-primary"
              />
            </div>
            <div>
              <label htmlFor="doctorContact" className="block text-sm font-medium text-addisons-primary-dark">
                Endocrinologist / doctor contact
              </label>
              <input
                id="doctorContact"
                type="text"
                value={data.doctorContact}
                onChange={(e) => setData((d) => ({ ...d, doctorContact: e.target.value }))}
                placeholder="Name and phone"
                className="mt-1 block w-full rounded-lg border border-addisons-primary/30 px-4 py-3 text-addisons-text focus:border-addisons-primary focus:outline-none focus:ring-1 focus:ring-addisons-primary"
              />
            </div>
            <div>
              <label htmlFor="allergies" className="block text-sm font-medium text-addisons-primary-dark">
                Allergies
              </label>
              <input
                id="allergies"
                type="text"
                value={data.allergies}
                onChange={(e) => setData((d) => ({ ...d, allergies: e.target.value }))}
                placeholder="None or list allergies"
                className="mt-1 block w-full rounded-lg border border-addisons-primary/30 px-4 py-3 text-addisons-text focus:border-addisons-primary focus:outline-none focus:ring-1 focus:ring-addisons-primary"
              />
            </div>
            <div>
              <label htmlFor="additionalInfo" className="block text-sm font-medium text-addisons-primary-dark">
                Additional info
              </label>
              <textarea
                id="additionalInfo"
                rows={2}
                value={data.additionalInfo}
                onChange={(e) => setData((d) => ({ ...d, additionalInfo: e.target.value }))}
                placeholder="Any other critical information"
                className="mt-1 block w-full rounded-lg border border-addisons-primary/30 px-4 py-3 text-addisons-text focus:border-addisons-primary focus:outline-none focus:ring-1 focus:ring-addisons-primary"
              />
            </div>
            <button
              type="button"
              onClick={handleDownloadPDF}
              disabled={!isValid || downloading}
              className="w-full rounded-lg bg-addisons-primary py-4 font-semibold text-addisons-primary-dark transition hover:bg-addisons-primary/90 disabled:opacity-50"
            >
              {downloading ? "Generating PDF..." : "Download PDF (wallet size)"}
            </button>
            {status === "authenticated" && (
              <button
                type="button"
                onClick={handleSave}
                disabled={!isValid || saving}
                className="w-full rounded-lg border-2 border-addisons-accent py-3 font-medium text-addisons-primary-dark transition hover:bg-addisons-accent/20 disabled:opacity-50"
              >
                {saving ? "Saving..." : saved ? "Saved ✓" : "Save to account"}
              </button>
            )}
          </form>
          <p className="mt-4 text-center text-sm text-addisons-text-light">
            {status === "authenticated" ? (
              "Your card is saved to your account. Update anytime."
            ) : (
              <>
                No account needed.{" "}
                <Link href="/register" className="font-medium text-addisons-primary hover:underline">
                  Create account
                </Link>{" "}
                to save and update your card anytime.
              </>
            )}
          </p>
        </div>

        {/* Live preview */}
        <div className="rounded-2xl bg-addisons-surface p-6 shadow-sm ring-1 ring-addisons-primary/20 sm:p-8">
          <h2 className="text-lg font-semibold text-addisons-primary-dark">
            Preview
          </h2>
          <div className="mt-6 flex justify-center">
            <EmergencyCardPreview data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}

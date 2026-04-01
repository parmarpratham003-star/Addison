"use client";

import type { EmergencyCardData } from "@/app/emergency-card/page";

export function EmergencyCardPreview({ data }: { data: EmergencyCardData }) {
  return (
    <div
      className="w-full max-w-[320px] rounded-xl border-2 border-addisons-primary-dark bg-addisons-surface p-5 shadow-lg"
      style={{ aspectRatio: "1.586/1" }}
    >
      <p className="mb-3 text-center text-xs font-bold uppercase tracking-wider text-addisons-primary-dark">
        Addison&apos;s Disease – Emergency Card
      </p>
      <div className="space-y-2 text-xs">
        <div>
          <p className="text-addisons-muted font-semibold">Patient name</p>
          <p className="text-addisons-text">{data.name || "—"}</p>
        </div>
        <div>
          <p className="text-addisons-muted font-semibold">Emergency contact</p>
          <p className="text-addisons-text whitespace-pre-wrap">{data.emergencyContact || "—"}</p>
        </div>
        <div>
          <p className="text-addisons-muted font-semibold">Medications</p>
          <p className="text-addisons-text whitespace-pre-wrap">{data.medications || "—"}</p>
        </div>
        <div>
          <p className="text-addisons-muted font-semibold">Doctor</p>
          <p className="text-addisons-text">{data.doctorContact || "—"}</p>
        </div>
        <div>
          <p className="text-addisons-muted font-semibold">Allergies</p>
          <p className="text-addisons-text">{data.allergies || "None known"}</p>
        </div>
        {data.additionalInfo && (
          <div>
            <p className="text-addisons-muted font-semibold">Additional</p>
            <p className="text-addisons-text whitespace-pre-wrap">{data.additionalInfo}</p>
          </div>
        )}
      </div>
      <p className="mt-3 text-center text-[10px] text-addisons-muted">
        In crisis: Give hydrocortisone immediately. Call 112.
      </p>
    </div>
  );
}

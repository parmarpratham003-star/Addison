"use client";

import type { EmergencyCardData } from "@/app/emergency-card/page";
export function EmergencyCardPreview({ data }: { data: EmergencyCardData }) {
  return (
    <div className="relative w-[260px] rounded-2xl bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0] p-5 shadow-xl border border-[#2d3c59]/10">

      {/* Header */}
      <div className="text-center mb-4">
        <h3 className="text-[11px] font-semibold tracking-wide text-[#2d3c59] uppercase">
          Addison's Disease
        </h3>
        <p className="text-[10px] text-[#2d3c59]/60">
          Emergency Card
        </p>
      </div>

      {/* Divider */}
      <div className="h-[1px] bg-[#2d3c59]/10 mb-3"></div>

      {/* Name */}
      <div className="mb-3">
        <p className="text-[9px] text-[#2d3c59]/50">Patient Name</p>
        <p className="text-[12px] font-semibold text-[#2d3c59]">
          {data.name || "—"}
        </p>
      </div>

      {/* Emergency Contact */}
      <div className="mb-3">
        <p className="text-[9px] text-[#2d3c59]/50">Emergency Contact</p>
        <p className="text-[11px] text-[#2d3c59]">
          {data.emergencyContact || "—"}
        </p>
      </div>

      {/* Medications */}
      <div className="mb-3">
        <p className="text-[9px] text-[#2d3c59]/50">Medications</p>
        <p className="text-[11px] text-[#2d3c59]">
          {data.medications || "—"}
        </p>
      </div>

      {/* Doctor */}
      <div className="mb-3">
        <p className="text-[9px] text-[#2d3c59]/50">Doctor</p>
        <p className="text-[11px] text-[#2d3c59]">
          {data.doctorContact || "—"}
        </p>
      </div>

      {/* Allergies */}
      <div className="mb-4">
        <p className="text-[9px] text-[#2d3c59]/50">Allergies</p>
        <p className="text-[11px] text-[#2d3c59]">
          {data.allergies || "None"}
        </p>
      </div>

      {/* Emergency Note */}
      <div className="bg-[#2d3c59] text-white text-[9px] rounded-lg px-3 py-2 text-center">
        ⚠️ In crisis: Give hydrocortisone immediately. Call 112.
      </div>

    </div>
  );
}
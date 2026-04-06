"use client";

import { useState, useEffect } from "react";
import { IndiaMap } from "@/components/IndiaMap";

interface MapStats {
  patientsByState: Record<string, number>;
  professionalsByState: Record<string, number>;
  totalPatients: number;
  totalProfessionals: number;
}

function toRegionData(byState: Record<string, number>): Record<string, { value: number }> {
  const result: Record<string, { value: number }> = {};
  for (const [state, count] of Object.entries(byState)) {
    result[state] = { value: count };
  }
  return result;
}

export default function MapPage() {
  const [stats, setStats] = useState<MapStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"patients" | "professionals">("patients");

  useEffect(() => {
    fetch("/api/stats/map")
      .then((r) => r.json())
      .then(setStats)
      .catch(() =>
        setStats({
          patientsByState: {},
          professionalsByState: {},
          totalPatients: 0,
          totalProfessionals: 0,
        })
      )
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-16 text-center">
        <p className="text-[#2d3c59]/50">Loading map...</p>
      </div>
    );
  }

  const regionData =
    activeTab === "patients"
      ? toRegionData(stats?.patientsByState ?? {})
      : toRegionData(stats?.professionalsByState ?? {});

  return (
    <section className="relative bg-[#f5f5f5] py-24">

      {/* Background blobs */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-[400px] w-[400px] rounded-full bg-[#eaebd0] opacity-40 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-[350px] w-[350px] rounded-full bg-[#2d3c59]/10 opacity-30 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-6">

        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-end gap-6 mb-14">
          <h1 className="text-[2.8rem] sm:text-[3.6rem] font-medium text-[#2d3c59] leading-[0.95]">
            Community <br />
            <span className="text-[#2d3c59]/50">Map</span>
          </h1>

          <p className="text-sm text-[#2d3c59]/50 max-w-[240px] leading-relaxed">
            Addison’s patients and professionals across India
          </p>
        </div>

        {/* 🔥 UPDATED STATS (NEW STYLE) */}
        <div className="grid grid-cols-2 gap-6 mb-12">

          {/* Patients */}
          <div
            className="bg-white px-6 py-5 flex flex-col justify-between border border-[#2d3c59]/10"
            style={{ borderRadius: "3px" }}
          >
            <span className="text-[11px] uppercase tracking-[0.14em] text-[#2d3c59]/50">
              Patients
            </span>

            <div className="flex items-end justify-between mt-4">
              <span className="text-3xl font-medium text-[#2d3c59]">
                {stats?.totalPatients ?? 0}
              </span>

              <span className="text-[11px] text-[#2d3c59]/40 uppercase">
                Total
              </span>
            </div>
          </div>

          {/* Professionals */}
          <div
            className="bg-white px-6 py-5 flex flex-col justify-between border border-[#2d3c59]/10"
            style={{ borderRadius: "3px" }}
          >
            <span className="text-[11px] uppercase tracking-[0.14em] text-[#2d3c59]/50">
              Professionals
            </span>

            <div className="flex items-end justify-between mt-4">
              <span className="text-3xl font-medium text-[#2d3c59]">
                {stats?.totalProfessionals ?? 0}
              </span>

              <span className="text-[11px] text-[#2d3c59]/40 uppercase">
                Total
              </span>
            </div>
          </div>

        </div>

        {/* Tabs */}
        <div className="flex gap-3 mb-10">

          <button
            onClick={() => setActiveTab("patients")}
            className={`
              px-5 py-2 text-[12px] font-medium uppercase tracking-[0.08em]
              transition-all duration-200
              ${activeTab === "patients"
                ? "bg-[#2d3c59] text-[#eaebd0]"
                : "text-[#2d3c59] border border-[#2d3c59]/20 hover:bg-[#2d3c59]/5"}
            `}
            style={{ borderRadius: "3px" }}
          >
            Patients
          </button>

          <button
            onClick={() => setActiveTab("professionals")}
            className={`
              px-5 py-2 text-[12px] font-medium uppercase tracking-[0.08em]
              transition-all duration-200
              ${activeTab === "professionals"
                ? "bg-[#2d3c59] text-[#eaebd0]"
                : "text-[#2d3c59] border border-[#2d3c59]/20 hover:bg-[#2d3c59]/5"}
            `}
            style={{ borderRadius: "3px" }}
          >
            Professionals
          </button>

        </div>

        {/* Divider */}
        <div className="h-px w-full bg-[#2d3c59]/10 mb-10" />

        {/* ✅ MAP (FULL VISIBLE FIXED) */}
        <div className="w-full">

          <IndiaMap
            regionData={regionData}
            title={
              activeTab === "patients"
                ? "Patients by State"
                : "Professionals by State"
            }
          />

        </div>

      </div>
    </section>
  );
}
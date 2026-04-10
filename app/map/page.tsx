"use client";

import { useState, useEffect } from "react";
import { IndiaMap } from "@/components/IndiaMap";
import { Cormorant_Garamond, Outfit } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

interface MapStats {
  patientsByState: Record<string, number>;
  professionalsByState: Record<string, number>;
  totalPatients: number;
  totalProfessionals: number;
}

function toRegionData(byState: Record<string, number>) {
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
        <p className={`${outfit.className} text-[#2d3c59]/50`}>
          Loading map...
        </p>
      </div>
    );
  }

  const regionData =
    activeTab === "patients"
      ? toRegionData(stats?.patientsByState ?? {})
      : toRegionData(stats?.professionalsByState ?? {});

  return (
    <section className="relative bg-[#f5f5f5] py-10 sm:py-12">

      {/* Background */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-[350px] w-[550px] rounded-full bg-[#eaebd0] opacity-40 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-[320px] w-[320px] rounded-full bg-[#2d3c59]/10 opacity-30 blur-[120px]" />

      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-10">

        {/* HEADER */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3 sm:gap-4 mb-8 sm:mb-14">
          <h1
            className={`${cormorant.className}
            text-[2rem] sm:text-[3.2rem]
            font-semibold leading-[0.9]
            text-[#2d3c59]`}
          >
            Community <br />
            <span className="text-[#2d3c59]/65 font-normal">Map</span>
          </h1>

          <p
            className={`${outfit.className}
            text-[11px] sm:text-[14px]
            text-[#2d3c59]/60 max-w-[200px] sm:max-w-[240px] leading-[1.5]`}
          >
            Addison's patients and professionals across India
          </p>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 gap-3 sm:gap-6 mb-8 sm:mb-12">

          <div className="bg-white px-4 py-3 sm:px-6 sm:py-5 border border-[#2d3c59]/10">
            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.14em] text-[#2d3c59]/45">
              Patients
            </span>
            <div className="flex items-end justify-between mt-2 sm:mt-3">
              <span className="text-xl sm:text-3xl font-medium text-[#2d3c59]">
                {stats?.totalPatients ?? 0}
              </span>
              <span className="text-[9px] sm:text-[10px] text-[#2d3c59]/35 uppercase">
                Total
              </span>
            </div>
          </div>

          <div className="bg-white px-4 py-3 sm:px-6 sm:py-5 border border-[#2d3c59]/10">
            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.14em] text-[#2d3c59]/45">
              Professionals
            </span>
            <div className="flex items-end justify-between mt-2 sm:mt-3">
              <span className="text-xl sm:text-3xl font-medium text-[#2d3c59]">
                {stats?.totalProfessionals ?? 0}
              </span>
              <span className="text-[9px] sm:text-[10px] text-[#2d3c59]/35 uppercase">
                Total
              </span>
            </div>
          </div>

        </div>

        {/* TABS */}
        <div className="flex gap-2 sm:gap-3 mb-6 sm:mb-8">

          <button
            onClick={() => setActiveTab("patients")}
            className={`
              ${outfit.className}
              px-3 sm:px-5 py-2
              text-[10px] sm:text-[12px]
              uppercase tracking-[0.08em]
              transition-all
              ${activeTab === "patients"
                ? "bg-[#2d3c59] text-[#eaebd0]"
                : "text-[#2d3c59] border border-[#2d3c59]/20 hover:bg-[#2d3c59]/5"}
            `}
          >
            Patients
          </button>

          <button
            onClick={() => setActiveTab("professionals")}
            className={`
              ${outfit.className}
              px-3 sm:px-5 py-2
              text-[10px] sm:text-[12px]
              uppercase tracking-[0.08em]
              transition-all
              ${activeTab === "professionals"
                ? "bg-[#2d3c59] text-[#eaebd0]"
                : "text-[#2d3c59] border border-[#2d3c59]/20 hover:bg-[#2d3c59]/5"}
            `}
          >
            Professionals
          </button>

        </div>

        {/* DIVIDER */}
        <div className="h-px w-full bg-[#2d3c59]/10 mb-6 sm:mb-8" />

        {/* MAP — height scales with viewport on mobile */}
        <div
          className="
            w-full
            h-[900px]
            border border-[#2d3c59]/10
            bg-white
            overflow-hidden
          "
          style={{
            borderRadius: "4px",
            height: "clamp(900px, 90vw, 900px)",
          }}
        >
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
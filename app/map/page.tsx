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
      .catch(() => setStats({
        patientsByState: {},
        professionalsByState: {},
        totalPatients: 0,
        totalProfessionals: 0,
      }))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-12 text-center">
        <p className="text-addisons-text-light">Loading map...</p>
      </div>
    );
  }

  const regionData =
    activeTab === "patients"
      ? toRegionData(stats?.patientsByState ?? {})
      : toRegionData(stats?.professionalsByState ?? {});

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-addisons-primary-dark">
        Community Map
      </h1>
      <p className="mt-2 text-addisons-text-light">
        Addison&apos;s patients and professionals across India
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <div className="rounded-2xl bg-addisons-surface p-6 ring-1 ring-addisons-primary/20">
          <h3 className="text-sm font-medium text-addisons-muted">
            Total Patients
          </h3>
          <p className="mt-2 text-3xl font-bold text-addisons-primary-dark">
            {stats?.totalPatients ?? 0}
          </p>
        </div>
        <div className="rounded-2xl bg-addisons-surface p-6 ring-1 ring-addisons-primary/20">
          <h3 className="text-sm font-medium text-addisons-muted">
            Total Professionals
          </h3>
          <p className="mt-2 text-3xl font-bold text-addisons-primary-dark">
            {stats?.totalProfessionals ?? 0}
          </p>
        </div>
      </div>

      <div className="mt-8 flex gap-4">
        <button
          type="button"
          onClick={() => setActiveTab("patients")}
          className={`rounded-lg px-4 py-2 font-medium transition ${
            activeTab === "patients"
              ? "bg-addisons-primary text-addisons-primary-dark"
              : "border border-addisons-primary/40 text-addisons-primary-dark hover:bg-addisons-primary/20"
          }`}
        >
          Patients by State
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("professionals")}
          className={`rounded-lg px-4 py-2 font-medium transition ${
            activeTab === "professionals"
              ? "bg-addisons-primary text-addisons-primary-dark"
              : "border border-addisons-primary/40 text-addisons-primary-dark hover:bg-addisons-primary/20"
          }`}
        >
          Professionals by State
        </button>
      </div>

      <div className="mt-8 -mx-4 sm:-mx-6 lg:-mx-8">
        <div className="overflow-hidden px-4 sm:px-6 lg:px-8">
          <div className="min-h-[55vh] overflow-hidden rounded-2xl bg-white ring-1 ring-addisons-primary/20 sm:min-h-[65vh]">
            <div className="flex h-[55vh] min-h-[1000px] flex-col p-3 sm:h-[65vh]">
              <IndiaMap
                regionData={regionData}
                title={activeTab === "patients" ? "Patients by State" : "Professionals by State"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

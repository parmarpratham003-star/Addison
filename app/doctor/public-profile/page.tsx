"use client";

import { useEffect, useState } from "react";
import { Cormorant_Garamond, Outfit } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export default function DoctorPublicProfile() {
  const [doctors, setDoctors] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/doctors")
      .then(res => res.json())
      .then(data => {
        setDoctors(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="p-10 text-[#2d3c59]">Loading...</div>;
  }

  if (!doctors.length) {
    return <div className="p-10 text-[#2d3c59]/60">No doctors found</div>;
  }

  return (
    <div className={`${outfit.className} min-h-screen bg-[#f5f5f5]`}>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10">
        <div className="lg:pl-8">

          {/* HEADER */}
          <h1 className={`${cormorant.className} text-4xl font-semibold text-[#2d3c59] mb-10`}>
            Our Doctors
          </h1>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {doctors.map((data) => (

              <div
                key={data.id}
                className="border border-[#2d3c59]/10 bg-white p-5"
              >

                {/* IMAGE */}
                <div className="w-full flex items-center justify-center mb-4 p-4">
                  <img
                    src={data.image || "https://i.pravatar.cc/300"}
                    className="max-h-[200px] max-w-full object-contain"
                    alt="doctor"
                  />
                </div>
                {/* NAME */}
                <h2 className={`${cormorant.className} text-xl font-semibold text-[#2d3c59]`}>
                  Dr. {data.name}
                </h2>

                {/* SPECIALTY */}
                <p className="text-sm text-[#2d3c59]/60 mt-1">
                  {data.specialty || "General Physician"}
                </p>

                {/* DETAILS */}
                <div className="mt-3 text-[12px] text-[#2d3c59]/50 space-y-1">
                  <p>{data.credentials}</p>
                  <p>{data.location}</p>
                </div>

                {/* FOOTER */}
                <div className="mt-4 pt-3 border-t text-[12px] flex justify-between text-[#2d3c59]/60">
                  <span>{data.languages || "N/A"}</span>
                  <span>{data.type || "N/A"}</span>
                </div>

              </div>

            ))}

          </div>

        </div>
      </div>
    </div>
  );
}
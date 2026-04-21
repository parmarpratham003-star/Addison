"use client";

import Link from "next/link";
import { UserCircle, Globe, Users, Stethoscope } from "lucide-react";
import { Cormorant_Garamond, Outfit } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

// ✅ Doctor Cards (same UI, different links)
const cards = [
  {
    href: "/doctor/profile",
    icon: UserCircle,
    title: "My Profile",
    description: "View and edit your profile",
    tag: "Account",
  },
  {
    href: "/doctor/public-profile",
    icon: Globe,
    title: "Public Profile",
    description: "How patients see you",
    tag: "Visibility",
  },
  {
    href: "/blog",
    icon: Users,
    title: "Community",
    description: "Join discussions with patients",
    tag: "Community",
  },
  {
    href: "/map",
    icon: Stethoscope,
    title: "Find Doctors",
    description: "Explore other doctors",
    tag: "Directory",
  },
];

export default function DoctorDashboard() {
  return (
    <div className={`${outfit.className} min-h-screen bg-[#f5f5f5] relative overflow-hidden`}>

      {/* Background blobs */}
      <div className="pointer-events-none absolute -top-20 -left-20 h-[400px] w-[400px] rounded-full bg-[#eaebd0] opacity-45 blur-[80px]" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-[320px] w-[320px] rounded-full bg-[#2d3c59]/10 opacity-30 blur-[96px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8 sm:py-14">
        <div className="lg:pl-8 xl:pl-12">

          {/* HEADER */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 mb-8 sm:mb-10">

            <h1 className={`${cormorant.className} text-[2rem] sm:text-[clamp(2.8rem,5vw,4rem)] font-semibold leading-[0.9] text-[#2d3c59]`}>
              Welcome{" "}
              <span className="font-normal text-[#2d3c59]/65">
                Doctor
              </span>
            </h1>

            <p className="text-[11.5px] sm:text-[13px] font-light text-[#2d3c59]/48 sm:max-w-[240px]">
              Manage your profile and connect with patients
            </p>

          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4">

            {cards.map((card) => {
              const Icon = card.icon;

              return (
                <Link
                  key={card.href}
                  href={card.href}
                  className="group relative flex flex-col justify-between border p-5 sm:p-6 transition-all duration-300 hover:-translate-y-0.5 border-[#2d3c59]/10 bg-white hover:border-[#2d3c59]/25 hover:shadow-[0_8px_30px_rgba(45,60,89,0.10)]"
                  style={{ borderRadius: "6px" }}
                >

                  {/* Top */}
                  <div className="flex items-start justify-between mb-8 sm:mb-10">

                    {/* Icon */}
                    <div className="w-10 h-10 flex items-center justify-center border border-[#2d3c59]/15 text-[#2d3c59]/50 group-hover:bg-[#2d3c59] group-hover:text-[#eaebd0] transition-all duration-500">
                      <Icon size={17} strokeWidth={1.5} />
                    </div>

                    {/* Tag */}
                    <span className="text-[9px] uppercase tracking-[0.16em] font-medium px-2.5 py-1 border border-[#2d3c59]/10 text-[#2d3c59]/35 bg-[#2d3c59]/[0.03]">
                      {card.tag}
                    </span>

                  </div>

                  {/* Bottom */}
                  <div>
                    <div className="flex items-end justify-between gap-2">

                      <div>
                        <h3 className={`${cormorant.className} text-[1.45rem] sm:text-[1.55rem] font-semibold text-[#2d3c59]/70 group-hover:text-[#2d3c59]`}>
                          {card.title}
                        </h3>

                        <p className="text-[11.5px] text-[#2d3c59]/40 mt-1">
                          {card.description}
                        </p>
                      </div>

                      {/* Arrow */}
                      <div className="w-8 h-8 flex items-center justify-center border border-[#2d3c59]/15 text-[#2d3c59] bg-[#2d3c59]/[0.04] opacity-0 group-hover:opacity-100 transition">
                        →
                      </div>

                    </div>

                    {/* Bottom line */}
                    <div className="mt-4 h-[1.5px] w-0 group-hover:w-full transition-all duration-500 bg-[#2d3c59]/15" />

                  </div>

                </Link>
              );
            })}

          </div>

        </div>
      </div>
    </div>
  );
}
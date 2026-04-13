import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { createPageMetadata } from "@/lib/seo";
import { Cormorant_Garamond, Outfit } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata = createPageMetadata({
  title: "Dashboard",
  description: "Your Addison's disease community dashboard.",
  path: "/dashboard",
  noIndex: true,
});

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    redirect("/login?callbackUrl=/dashboard");
  }

  const role = session.user?.role || "PATIENT";
  const isDoctor = ["ENDOCRINOLOGIST", "PSYCHIATRIST"].includes(role);

  const roleDisplay: Record<string, string> = {
    PATIENT: "Patient",
    ENDOCRINOLOGIST: "Endocrinologist",
    PSYCHIATRIST: "Psychiatrist",
  };

  return (
    <div className={`${outfit.className} bg-[#eaebd0] min-h-screen`}>

      {/* ── Top bar ── */}
      <header className="border-b border-[#2d3c59]/10 bg-[#eaebd0]/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 h-14 flex items-center justify-between">
          <span
            className={`${cormorant.className} text-[1.1rem] font-semibold tracking-tight text-[#2d3c59]`}
          >
            Addison&apos;s
          </span>

          <div className="flex items-center gap-3">
            {/* Role pill */}
            <span className="hidden sm:inline-flex items-center gap-1.5 text-[10px] font-medium tracking-[0.14em] uppercase text-[#2d3c59]/50 border border-[#2d3c59]/15 rounded-full px-3 py-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2d3c59]/30 inline-block" />
              {roleDisplay[role] ?? role}
            </span>

            {/* Avatar */}
            <div className="w-8 h-8 rounded-full bg-[#2d3c59] flex items-center justify-center text-[#eaebd0] text-xs font-medium select-none">
              {(session.user.name ?? session.user.email ?? "?")[0].toUpperCase()}
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-5 sm:px-8 py-10 sm:py-14">

        {/* ── Hero greeting ── */}
        <div className="mb-10 sm:mb-14">
          <p className="text-[10px] tracking-[0.28em] uppercase text-[#2d3c59]/40 mb-3">
            Dashboard
          </p>
          <h1
            className={`${cormorant.className} text-[2.2rem] sm:text-[2.8rem] font-semibold leading-[1.05] text-[#2d3c59]`}
          >
            Welcome back,<br />
            <span className="font-medium">{session.user.name ?? session.user.email}</span>
          </h1>
          <div className="mt-5 h-px w-12 bg-[#2d3c59]/20" />
        </div>

        {/* ── PATIENT UI ── */}
        {role === "PATIENT" && (
          <section>
            <p className="text-[10px] tracking-[0.22em] uppercase text-[#2d3c59]/35 mb-5">
              Your tools
            </p>

            <div className="grid gap-4 sm:gap-5 sm:grid-cols-2">

              {/* Emergency Card — active */}
              <Link
                href="/emergency-card"
                className="group relative bg-[#2d3c59] rounded-2xl p-6 sm:p-7 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(45,60,89,0.22)]"
              >
                {/* subtle radial glow */}
                <div className="pointer-events-none absolute -top-8 -right-8 w-40 h-40 rounded-full bg-white/5 group-hover:bg-white/8 transition-all duration-500" />

                <div className="flex items-start justify-between mb-8 sm:mb-10">
                  {/* Icon */}
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#eaebd0]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>

                  <span className="text-[#eaebd0]/40 text-lg transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    ↗
                  </span>
                </div>

                <h2 className={`${cormorant.className} text-[1.25rem] sm:text-[1.35rem] font-semibold text-[#eaebd0] mb-1.5`}>
                  Emergency Card
                </h2>
                <p className="text-[12px] font-light text-[#eaebd0]/55 leading-relaxed">
                  Edit and download your saved emergency card.
                </p>
              </Link>

              {/* Saved Resources — coming soon */}
              <div className="relative bg-white/50 border border-[#2d3c59]/10 rounded-2xl p-6 sm:p-7 overflow-hidden">
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[repeating-linear-gradient(45deg,transparent,transparent_6px,rgba(45,60,89,0.025)_6px,rgba(45,60,89,0.025)_7px)]" />

                <div className="flex items-start justify-between mb-8 sm:mb-10">
                  <div className="w-9 h-9 rounded-xl bg-[#2d3c59]/8 flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#2d3c59]/35" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                    </svg>
                  </div>

                  <span className="text-[9px] tracking-[0.18em] uppercase font-medium text-[#2d3c59]/30 border border-[#2d3c59]/15 rounded-full px-2.5 py-1">
                    Soon
                  </span>
                </div>

                <h2 className={`${cormorant.className} text-[1.25rem] sm:text-[1.35rem] font-semibold text-[#2d3c59]/40 mb-1.5`}>
                  Saved Resources
                </h2>
                <p className="text-[12px] font-light text-[#2d3c59]/30 leading-relaxed">
                  Your saved articles and resources.
                </p>
              </div>

            </div>
          </section>
        )}

        {/* ── DOCTOR UI ── */}
        {isDoctor && (
          <section>
            <p className="text-[10px] tracking-[0.22em] uppercase text-[#2d3c59]/35 mb-5">
              Your tools
            </p>

            <div className="grid gap-4 sm:gap-5 sm:grid-cols-2">

              {/* My Profile — active */}
              <Link
                href="/doctor/profile"
                className="group relative bg-[#2d3c59] rounded-2xl p-6 sm:p-7 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(45,60,89,0.22)]"
              >
                <div className="pointer-events-none absolute -top-8 -right-8 w-40 h-40 rounded-full bg-white/5 group-hover:bg-white/8 transition-all duration-500" />

                <div className="flex items-start justify-between mb-8 sm:mb-10">
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#eaebd0]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>

                  <span className="text-[#eaebd0]/40 text-lg transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    ↗
                  </span>
                </div>

                <h2 className={`${cormorant.className} text-[1.25rem] sm:text-[1.35rem] font-semibold text-[#eaebd0] mb-1.5`}>
                  My Profile
                </h2>
                <p className="text-[12px] font-light text-[#eaebd0]/55 leading-relaxed">
                  Manage your professional profile.
                </p>
              </Link>

              {/* Patient Requests */}
              <div className="relative bg-white/50 border border-[#2d3c59]/10 rounded-2xl p-6 sm:p-7 overflow-hidden">
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[repeating-linear-gradient(45deg,transparent,transparent_6px,rgba(45,60,89,0.025)_6px,rgba(45,60,89,0.025)_7px)]" />

                <div className="flex items-start justify-between mb-8 sm:mb-10">
                  <div className="w-9 h-9 rounded-xl bg-[#2d3c59]/8 flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#2d3c59]/35" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                  </div>

                  <span className="text-[9px] tracking-[0.18em] uppercase font-medium text-[#2d3c59]/30 border border-[#2d3c59]/15 rounded-full px-2.5 py-1">
                    Soon
                  </span>
                </div>

                <h2 className={`${cormorant.className} text-[1.25rem] sm:text-[1.35rem] font-semibold text-[#2d3c59]/40 mb-1.5`}>
                  Patient Requests
                </h2>
                <p className="text-[12px] font-light text-[#2d3c59]/30 leading-relaxed">
                  View and manage patient queries.
                </p>
              </div>

            </div>
          </section>
        )}

        {/* ── Fallback ── */}
        {!role && (
          <p className="text-sm text-[#2d3c59]/40">No dashboard available.</p>
        )}

      </main>
    </div>
  );
}
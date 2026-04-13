"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { INDIAN_STATES } from "@/lib/indian-states";
import { Cormorant_Garamond, Outfit } from "next/font/google";

// Fonts
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cormorant",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-outfit",
});

// Input style
const inputCls = `
w-full rounded-full px-4 py-3 text-sm outline-none
bg-[#eaebd0]/60 border border-[#2d3c59]/10
text-[#2d3c59] placeholder-[#2d3c59]/30
focus:border-[#2d3c59]/30 focus:bg-[#eaebd0]/90
transition-all duration-200
`;

// FIX 1: Proper Role type
type Role = "PATIENT" | "ENDOCRINOLOGIST" | "PSYCHIATRIST";

const roleLabels: Record<Role, string> = {
  PATIENT: "Patient",
  ENDOCRINOLOGIST: "Endocrinologist",
  PSYCHIATRIST: "Psychiatrist",
};

export default function RegisterPage() {
  const router = useRouter();

  // FIX 1: Typed state
  const [role, setRole] = useState<Role>("PATIENT");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [state, setState] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    // FIX 2: Name validation
    if (!name.trim()) {
      setError("Name is required");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          role, // FIX 5: role sent correctly
          state: state || undefined,
        }),
      });

      // FIX 3: Cleaner error handling
      let data;

      try {
        data = await res.json();
      } catch {
        setError("Server error");
        setLoading(false);
        return;
      }

      if (!res.ok) {
        setError(data?.error || "Registration failed");
        setLoading(false);
        return;
      }

      router.push("/login");

    } catch (err) {
      console.error("FETCH ERROR:", err);
      setError("Something went wrong");
    }

    setLoading(false);
  }

  return (
    <div
      className={`${cormorant.variable} ${outfit.variable} bg-[#eaebd0] min-h-screen flex items-center justify-center px-4 py-12 sm:py-18`}
      style={{ fontFamily: "var(--font-outfit), sans-serif" }}
    >
      {/* Smooth Animation */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .fade-1 { animation: fadeUp .5s ease forwards; }
        .fade-2 { animation: fadeUp .5s .1s ease forwards; opacity:0; }
        .fade-3 { animation: fadeUp .5s .2s ease forwards; opacity:0; }
        .fade-4 { animation: fadeUp .5s .3s ease forwards; opacity:0; }
        .fade-5 { animation: fadeUp .5s .4s ease forwards; opacity:0; }
      `}</style>

      <div className="w-full max-w-sm sm:max-w-md">

        {/* Heading */}
        <div className="text-center mb-8 fade-1">
          <h1
            className="text-[clamp(2rem,6vw,3rem)] text-[#2d3c59] leading-tight"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Sign up
          </h1>
          <p className="text-[0.65rem] tracking-[0.25em] uppercase text-[#2d3c59]/40 mt-2">
            Addison&apos;s Disease
          </p>
        </div>

        {/* Card */}
        <div className="bg-white/70 backdrop-blur rounded-2xl p-5 sm:p-8 border border-[#2d3c59]/10 shadow-md">

          <form onSubmit={handleSubmit} className="space-y-4">

            {error && (
              <div className="text-sm text-red-500 fade-2">{error}</div>
            )}

            {/* Role */}
            <div className="fade-2">
              <label className="text-xs uppercase tracking-wider text-[#2d3c59]">
                I am a
              </label>

              <div className="flex flex-wrap gap-2 mt-2">
                {(["PATIENT", "ENDOCRINOLOGIST", "PSYCHIATRIST"] as Role[]).map((r) => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => setRole(r)}
                    className={`flex-1 sm:flex-none text-center px-5 py-2 rounded-full text-xs border transition ${
                      role === r
                        ? "bg-[#2d3c59] text-white"
                        : "border-[#2d3c59]/20 text-[#2d3c59] hover:bg-[#2d3c59]/10"
                    }`}
                  >
                    {roleLabels[r]}
                  </button>
                ))}
              </div>
            </div>

            {/* State */}
            <div className="fade-3">
              <select
                value={state}
                onChange={(e) => setState(e.target.value)}
                className={inputCls}
              >
                <option value="">Select your state</option>
                {INDIAN_STATES.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>

            {/* Name */}
            <div className="fade-3">
              <input
                type="text"
                placeholder="Full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={inputCls}
              />
            </div>

            {/* Email */}
            <div className="fade-4">
              <input
                type="email"
                placeholder="Email address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={inputCls}
              />
            </div>

            {/* Password */}
            <div className="fade-4">
              <input
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={inputCls}
              />
            </div>

            {/* Confirm Password */}
            <div className="fade-5">
              <input
                type="password"
                placeholder="Confirm password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={inputCls}
              />
            </div>

            {/* FIX 4: Button with proper disabled state */}
            <div className="fade-5 pt-2">
              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 rounded-full text-sm font-medium transition-all duration-200
                  ${loading
                    ? "bg-[#2d3c59]/50 cursor-not-allowed"
                    : "bg-[#2d3c59] hover:bg-[#3d5070] hover:-translate-y-[1px] active:scale-[0.97]"
                  }
                  text-white
                `}
              >
                {loading ? "Creating..." : "Create account"}
              </button>
            </div>
          </form>

          {/* Footer */}
          <p className="mt-6 text-center text-xs text-[#2d3c59]/40 fade-5">
            Already have an account?{" "}
            <Link href="/login" className="underline text-[#2d3c59] hover:text-[#2d3c59]/70 transition-colors">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
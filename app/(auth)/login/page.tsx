"use client";

import { useState, Suspense } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { Cormorant_Garamond, Outfit } from "next/font/google";

// ── Fonts ─────────────────────────────────────────────────────────────────────
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

// ── Animation keyframes ───────────────────────────────────────────────────────
const animStyles = `
  @keyframes lp-fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0);    }
  }
  @keyframes lp-fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  .lp-anim-1 { animation: lp-fadeUp .5s          cubic-bezier(.22,1,.36,1) both; }
  .lp-anim-2 { animation: lp-fadeUp .5s  .08s    cubic-bezier(.22,1,.36,1) both; }
  .lp-anim-3 { animation: lp-fadeUp .5s  .14s    cubic-bezier(.22,1,.36,1) both; }
  .lp-anim-4 { animation: lp-fadeUp .5s  .20s    cubic-bezier(.22,1,.36,1) both; }
  .lp-anim-5 { animation: lp-fadeUp .5s  .26s    cubic-bezier(.22,1,.36,1) both; }
  .lp-anim-6 { animation: lp-fadeIn .6s  .32s    cubic-bezier(.22,1,.36,1) both; }
`;

// ── Shared field classes ──────────────────────────────────────────────────────
const inputCls = [
  "mt-1 block w-full rounded-full px-4 py-2.5 text-sm outline-none",
  "bg-[#eaebd0]/60 border border-[#2d3c59]/10",
  "text-[#2d3c59] placeholder-[#2d3c59]/28",
  "transition-all duration-200",
  "focus:border-[#2d3c59]/30 focus:bg-[#eaebd0]/90 focus:scale-[1.01]",
].join(" ");

// ── Form ──────────────────────────────────────────────────────────────────────
function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") ?? "/dashboard";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (res?.error) {
        setError("Invalid email or password");
        setLoading(false);
        return;
      }
      router.push(callbackUrl);
      router.refresh();
    } catch {
      setError("Something went wrong");
    }
    setLoading(false);
  }

  return (
    <div
      className={`${cormorant.variable} ${outfit.variable} bg-[#eaebd0] min-h-screen flex items-center justify-center px-4 py-25`}
      style={{ fontFamily: "var(--font-outfit), sans-serif" }}
    >
      <style>{animStyles}</style>

      <div className="w-full max-w-sm">

        {/* ── Heading ── */}
        <div className="mb-8 text-center lp-anim-1">
          <h1
            className="text-[clamp(2.4rem,6vw,3rem)]  leading-[0.95] text-[#2d3c59]"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Sign in
          </h1>
          <p className="text-[0.62rem] tracking-[0.26em] uppercase text-[#2d3c59]/40 mt-2">
            Addison&apos;s Disease
          </p>
        </div>

        {/* ── Card ── */}
        <div className="bg-white/42 border border-[#2d3c59]/10 rounded-[24px] p-7 sm:p-8 transition-all duration-300 hover:bg-white/55 hover:border-[#2d3c59]/16">

          <p className="text-sm text-[#2d3c59]/50 mb-7 lp-anim-2 leading-relaxed">
            Sign in to access your dashboard and saved emergency card.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Error */}
            {error && (
              <div className="rounded-[12px] bg-[#2d3c59]/6 border border-[#2d3c59]/12 px-4 py-3 text-sm text-[#2d3c59]/70 lp-anim-1">
                {error}
              </div>
            )}

            {/* Email */}
            <div className="lp-anim-3">
              <label
                htmlFor="email"
                className="block text-[0.58rem] tracking-[0.22em] uppercase text-[#2d3c59] mb-1.5"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className={inputCls}
              />
            </div>

            {/* Password */}
            <div className="lp-anim-4">
              <div className="flex items-center justify-between mb-1.5">
                <label
                  htmlFor="password"
                  className="block text-[0.58rem] tracking-[0.22em] uppercase text-[#2d3c59]"
                >
                  Password
                </label>
                <Link
                  href="/forgot-password"
                  className="text-[0.65rem] text-[#2d3c59] hover:text-[#2d3c59]/65 transition-colors"
                >
                  Forgot?
                </Link>
              </div>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className={inputCls}
              />
            </div>

            {/* Submit */}
            <div className="pt-2 lp-anim-5">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#2d3c59] text-[#eaebd0] py-2.5 rounded-full text-sm font-medium transition-all duration-200 hover:bg-[#3d5070] hover:-translate-y-px active:scale-[0.97] disabled:opacity-30 disabled:cursor-not-allowed disabled:translate-y-0"
              >
                {loading ? "Signing in…" : "Sign in"}
              </button>
            </div>

          </form>

          {/* Footer link */}
          <p className="mt-6 text-center text-xs text-[#2d3c59]/48 lp-anim-6">
            Don&apos;t have an account?{" "}
            <Link
              href="/register"
              className="text-[#2d3c59] font-medium underline underline-offset-2 decoration-[#2d3c59]/25 hover:text-[#2d3c59] hover:decoration-[#2d3c59]/50 transition-colors"
            >
              Register
            </Link>
          </p>

        </div>

        

      </div>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <div
          className="bg-[#eaebd0] min-h-screen flex items-center justify-center text-[#2d3c59]/40 text-sm"
          style={{ fontFamily: "var(--font-outfit), sans-serif" }}
        >
          Loading…
        </div>
      }
    >
      <LoginForm />
    </Suspense>
  );
}
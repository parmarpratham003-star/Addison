"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { INDIAN_STATES } from "@/lib/indian-states";

export default function RegisterPage() {
  const router = useRouter();
  const [role, setRole] = useState<"PATIENT" | "ENDOCRINOLOGIST" | "PSYCHIATRIST">("PATIENT");
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
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          password,
          role,
          state: state || undefined,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Registration failed");
        setLoading(false);
        return;
      }
      router.push("/login");
      router.refresh();
    } catch {
      setError("Something went wrong");
    }
    setLoading(false);
  }

  return (
    <div className="mx-auto flex min-h-[calc(100vh-200px)] max-w-md flex-col justify-center px-4 py-12">
      <div className="rounded-2xl bg-addisons-surface p-8 shadow-sm ring-1 ring-addisons-primary/20">
        <h1 className="text-2xl font-bold text-addisons-primary-dark">
          Create account
        </h1>
        <p className="mt-2 text-sm text-addisons-text-light">
          Join the Addison&apos;s community.
        </p>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          {error && (
            <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
              {error}
            </p>
          )}
          <div>
            <label className="block text-sm font-medium text-addisons-primary-dark">
              I am a
            </label>
            <div className="mt-2 flex gap-4">
              {(["PATIENT", "ENDOCRINOLOGIST", "PSYCHIATRIST"] as const).map((r) => (
                <label key={r} className="flex cursor-pointer items-center gap-2">
                  <input
                    type="radio"
                    name="role"
                    checked={role === r}
                    onChange={() => setRole(r)}
                    className="h-4 w-4 text-addisons-primary"
                  />
                  <span className="text-sm">
                    {r === "PATIENT"
                      ? "Patient"
                      : r === "ENDOCRINOLOGIST"
                        ? "Endocrinologist"
                        : "Psychiatrist"}
                  </span>
                </label>
              ))}
            </div>
          </div>
          <div>
            <label htmlFor="state" className="block text-sm font-medium text-addisons-primary-dark">
              State (India)
            </label>
            <select
              id="state"
              name="state"
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="mt-1 block w-full rounded-lg border border-addisons-primary/30 px-4 py-3 text-addisons-text focus:border-addisons-primary focus:outline-none focus:ring-1 focus:ring-addisons-primary"
            >
              <option value="">Select your state</option>
              {INDIAN_STATES.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-addisons-primary-dark">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full rounded-lg border border-addisons-primary/30 px-4 py-3 text-addisons-text focus:border-addisons-primary focus:outline-none focus:ring-1 focus:ring-addisons-primary"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-addisons-primary-dark">
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
              className="mt-1 block w-full rounded-lg border border-addisons-primary/30 px-4 py-3 text-addisons-text focus:border-addisons-primary focus:outline-none focus:ring-1 focus:ring-addisons-primary"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-addisons-primary-dark">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full rounded-lg border border-addisons-primary/30 px-4 py-3 text-addisons-text focus:border-addisons-primary focus:outline-none focus:ring-1 focus:ring-addisons-primary"
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-addisons-primary-dark">
              Confirm password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              autoComplete="new-password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="mt-1 block w-full rounded-lg border border-addisons-primary/30 px-4 py-3 text-addisons-text focus:border-addisons-primary focus:outline-none focus:ring-1 focus:ring-addisons-primary"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-addisons-primary py-3 font-medium text-addisons-primary-dark transition hover:bg-addisons-primary/90 disabled:opacity-50"
          >
            {loading ? "Creating account..." : "Register"}
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-addisons-text-light">
          Already have an account?{" "}
          <Link href="/login" className="font-medium text-addisons-primary hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}

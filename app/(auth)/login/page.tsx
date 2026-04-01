"use client";

import { useState, Suspense } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";

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
    <div className="mx-auto flex min-h-[calc(100vh-200px)] max-w-md flex-col justify-center px-4 py-12">
      <div className="rounded-2xl bg-addisons-surface p-8 shadow-sm ring-1 ring-addisons-primary/20">
        <h1 className="text-2xl font-bold text-addisons-primary-dark">
          Sign in
        </h1>
        <p className="mt-2 text-sm text-addisons-text-light">
          Sign in to access your dashboard and saved emergency card.
        </p>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          {error && (
            <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
              {error}
            </p>
          )}
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
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full rounded-lg border border-addisons-primary/30 px-4 py-3 text-addisons-text focus:border-addisons-primary focus:outline-none focus:ring-1 focus:ring-addisons-primary"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-addisons-primary py-3 font-medium text-addisons-primary-dark transition hover:bg-addisons-primary/90 disabled:opacity-50"
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-addisons-text-light">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="font-medium text-addisons-primary hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="mx-auto max-w-md px-4 py-12 text-center text-addisons-text-light">Loading...</div>}>
      <LoginForm />
    </Suspense>
  );
}

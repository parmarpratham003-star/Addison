import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Dashboard",
  description: "Your Addison's disease community dashboard.",
  path: "/dashboard",
  noIndex: true,
});

export default async function DashboardPage() {
  const session = await auth();
  if (!session?.user) {
    redirect("/login?callbackUrl=/dashboard");
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-addisons-primary-dark">
        Dashboard
      </h1>
      <p className="mt-2 text-addisons-text-light">
        Welcome back, {session.user.name ?? session.user.email}.
      </p>
      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        <Link
          href="/emergency-card"
          className="rounded-2xl bg-addisons-surface p-6 ring-1 ring-addisons-primary/20 hover:ring-addisons-primary/40"
        >
          <h2 className="text-lg font-semibold text-addisons-primary-dark">
            Emergency Card
          </h2>
          <p className="mt-2 text-sm text-addisons-text-light">
            Edit and download your saved emergency card.
          </p>
        </Link>
        <div className="rounded-2xl bg-addisons-surface p-6 ring-1 ring-addisons-primary/20">
          <h2 className="text-lg font-semibold text-addisons-primary-dark">
            Saved Resources
          </h2>
          <p className="mt-2 text-sm text-addisons-text-light">
            Your saved articles and resources. (Coming soon)
          </p>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Professional Directory | Addison's Disease Community",
  description:
    "Find volunteer endocrinologists and psychiatrists who support the Addison's disease community.",
  path: "/directory",
});

export default function DirectoryPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-addisons-primary-dark sm:text-4xl">
        Professional Directory
      </h1>
      <p className="mt-4 text-addisons-text-light">
        Volunteer endocrinologists and psychiatrists who have registered to support
        the Addison&apos;s community. Listings are verified by our team.
      </p>
      <div className="mt-12 rounded-2xl bg-addisons-surface p-8 text-center ring-1 ring-addisons-primary/20">
        <p className="text-addisons-text-light">
          The directory will show verified professionals once they register and are
          approved. If you are an endocrinologist or psychiatrist and would like to
          volunteer, please{" "}
          <Link href="/register" className="font-medium text-addisons-primary hover:underline">
            register
          </Link>
          .
        </p>
        <p className="mt-4 text-sm text-addisons-muted">
          Professionals can be searched by location, specialty, and language
          once the directory is populated.
        </p>
      </div>
    </div>
  );
}

import Link from "next/link";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "About Addison's Disease",
  description:
    "Learn about Addison's disease: symptoms, diagnosis, treatment with cortisol replacement, and lifestyle tips.",
  path: "/about-addisons",
});

export default function AboutAddisonsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-addisons-primary-dark sm:text-4xl">
        About Addison&apos;s Disease
      </h1>
      <p className="mt-4 text-addisons-text-light">
        Addison&apos;s disease (primary adrenal insufficiency) is a rare disorder
        where the adrenal glands don&apos;t produce enough hormones, especially cortisol
        and often aldosterone.
      </p>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-addisons-primary-dark">
          What are the adrenal glands?
        </h2>
        <p className="mt-2 text-addisons-text-light">
          The adrenal glands sit on top of the kidneys and produce hormones essential
          for life: cortisol (helps manage stress, blood sugar, blood pressure) and
          aldosterone (manages salt and water balance). In Addison&apos;s disease,
          these glands are damaged, usually by an autoimmune response.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-addisons-primary-dark">
          Symptoms
        </h2>
        <ul className="mt-2 list-inside list-disc space-y-1 text-addisons-text-light">
          <li>Extreme fatigue and weakness</li>
          <li>Weight loss and loss of appetite</li>
          <li>Darkening of the skin (hyperpigmentation)</li>
          <li>Low blood pressure, dizziness</li>
          <li>Salt craving</li>
          <li>Nausea, vomiting, diarrhea</li>
          <li>Muscle or joint pains</li>
          <li>Irritability or depression</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-addisons-primary-dark">
          Diagnosis
        </h2>
        <p className="mt-2 text-addisons-text-light">
          Diagnosis involves blood tests to measure cortisol and ACTH levels. An
          ACTH stimulation test is often used: synthetic ACTH is given and the
          cortisol response is measured. In Addison&apos;s, the adrenal glands do not
          respond adequately.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-addisons-primary-dark">
          Treatment
        </h2>
        <p className="mt-2 text-addisons-text-light">
          Treatment is lifelong hormone replacement. Hydrocortisone (cortisol) is
          taken daily, often in divided doses to mimic natural rhythms. Some
          patients also need fludrocortisone for aldosterone replacement. Doses may
          need to be increased during illness, stress, or surgery.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-addisons-primary-dark">
          Lifestyle tips
        </h2>
        <ul className="mt-2 list-inside list-disc space-y-1 text-addisons-text-light">
          <li>Take your medication at the same time each day</li>
          <li>Never skip doses</li>
          <li>Carry an emergency hydrocortisone injection and wear medical alert ID</li>
          <li>Learn to &quot;stress dose&quot;—increase hydrocortisone during illness</li>
          <li>Stay in touch with your endocrinologist</li>
        </ul>
      </section>

      <div className="mt-12 flex flex-wrap gap-4">
        <Link
          href="/emergency-card"
          className="rounded-lg bg-addisons-primary px-6 py-3 font-medium text-addisons-primary-dark hover:bg-addisons-primary/90"
        >
          Create your free emergency card
        </Link>
        <Link
          href="/emergency"
          className="rounded-lg border-2 border-addisons-primary px-6 py-3 font-medium text-addisons-primary-dark hover:bg-addisons-primary/10"
        >
          Addisonian crisis – what to do
        </Link>
        <Link
          href="/information/children"
          className="rounded-lg border-2 border-addisons-primary px-6 py-3 font-medium text-addisons-primary-dark hover:bg-addisons-primary/10"
        >
          Addison&apos;s in Children
        </Link>
      </div>
    </div>
  );
}

import Link from "next/link";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Addisonian Crisis | Emergency Information",
  description:
    "Signs of Addisonian crisis, what to do, when to inject emergency hydrocortisone. Life-saving information for patients and first responders.",
  path: "/emergency",
});

export default function EmergencyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="rounded-2xl bg-red-50 p-6 ring-2 ring-red-200 sm:p-8">
        <h1 className="text-2xl font-bold text-red-800 sm:text-3xl">
          Addisonian Crisis – Medical Emergency
        </h1>
        <p className="mt-4 font-semibold text-red-700">
          If you or someone with Addison&apos;s shows crisis signs: inject emergency
          hydrocortisone immediately and call 112 (India&apos;s national emergency number).
        </p>
      </div>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-addisons-primary-dark">
          Signs of Addisonian crisis
        </h2>
        <ul className="mt-4 list-inside list-disc space-y-2 text-addisons-text-light">
          <li>Severe weakness, collapse, or inability to stand</li>
          <li>Severe abdominal pain, vomiting, or diarrhea</li>
          <li>Confusion, drowsiness, or loss of consciousness</li>
          <li>Low blood pressure or shock</li>
          <li>Dehydration</li>
          <li>Low blood sugar (hypoglycemia)</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-addisons-primary-dark">
          What to do
        </h2>
        <ol className="mt-4 list-inside list-decimal space-y-2 text-addisons-text-light">
          <li>
            <strong>Inject emergency hydrocortisone</strong> (Solu-Cortef/ hydrocortisone sodium
            succinate) – 100 mg intramuscularly. The patient or family should know
            where the injection is kept.
          </li>
          <li>
            <strong>Call 112</strong> immediately.
          </li>
          <li>
            Tell the ambulance crew or emergency responders: &quot;This person has Addison&apos;s disease and is in adrenal
            crisis. They need hydrocortisone.&quot;
          </li>
          <li>
            If you have an emergency card, show it to first responders.
          </li>
        </ol>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-addisons-primary-dark">
          When to stress dose (increase hydrocortisone)
        </h2>
        <p className="mt-2 text-addisons-text-light">
          Increase your oral hydrocortisone during fever, infection, injury,
          surgery, or significant emotional stress. Your endocrinologist will give
          you a plan. When in doubt, take extra hydrocortisone and call your
          doctor.
        </p>
      </section>

      <div className="mt-12 rounded-2xl bg-addisons-surface p-6">
        <h3 className="font-semibold text-addisons-primary-dark">
          Emergency numbers in India
        </h3>
        <p className="mt-2 text-sm text-addisons-text-light">
          <strong>112</strong> is India&apos;s national unified emergency number (works from mobile and landline across India). <strong>102</strong> is the ambulance-specific number in some states; 112 connects to all emergency services.
        </p>
        <h3 className="mt-6 font-semibold text-addisons-primary-dark">
          Be prepared
        </h3>
        <p className="mt-2 text-sm text-addisons-text-light">
          Carry an emergency hydrocortisone injection kit and a medical emergency
          card. Create your free card here:
        </p>
        <Link
          href="/emergency-card"
          className="mt-4 inline-block rounded-lg bg-addisons-primary px-6 py-3 font-medium text-addisons-primary-dark hover:bg-addisons-primary/90"
        >
          Create free emergency card
        </Link>
      </div>
    </div>
  );
}

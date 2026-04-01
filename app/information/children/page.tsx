import Link from "next/link";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Addison's Disease in Children | Pediatric Information",
  description:
    "A parent's guide to Addison's in children: what it is, signs to watch for, how it's treated, and how to support your child day to day.",
  path: "/information/children",
});

export default function AddisonInChildrenPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <Link
        href="/information"
        className="text-sm font-medium text-addisons-primary hover:underline"
      >
        ← Back to Information Hub
      </Link>

      <h1 className="mt-6 text-3xl font-bold text-addisons-primary-dark sm:text-4xl">
        Addison&apos;s Disease in Children
      </h1>
      <p className="mt-4 text-addisons-text-light">
        Addison&apos;s is rare in kids, but when it does appear, parents often
        feel overwhelmed. Here&apos;s what you need to know: the basics, what to
        look for, and how families can manage it together.
      </p>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-addisons-primary-dark">
          What is Addison&apos;s in a child?
        </h2>
        <p className="mt-2 text-addisons-text-light">
          Addison&apos;s disease (primary adrenal insufficiency) means the adrenal
          glands—small glands that sit on top of each kidney—aren&apos;t producing
          enough hormones. The main one is cortisol, which helps the body handle
          stress, blood sugar, and inflammation. Kids with Addison&apos;s often
          have low aldosterone too, which affects salt and water balance and blood
          pressure. The condition is uncommon and tends to affect girls slightly
          more often than boys. It can show up at any age, including early
          childhood.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-addisons-primary-dark">
          What causes it?
        </h2>
        <p className="mt-2 text-addisons-text-light">
          In most children, the immune system mistakenly attacks the adrenal
          glands. Other causes include infection, cancer, surgery that removes
          the glands, or a rare inherited condition. A family history of Addison&apos;s
          or other autoimmune disorders can increase the risk.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-addisons-primary-dark">
          Who might be at higher risk?
        </h2>
        <p className="mt-2 text-addisons-text-light">
          Families should be aware if a child already has another autoimmune
          condition, such as type 1 diabetes or thyroid disease. Vitiligo,
          tuberculosis, or certain cancers can also be associated. A family
          history of Addison&apos;s or autoimmune diseases may warrant closer
          monitoring.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-addisons-primary-dark">
          Signs and symptoms to watch for
        </h2>
        <p className="mt-2 text-addisons-text-light">
          Early on, symptoms can be subtle and may only show up during illness or
          stress. Parents might notice:
        </p>
        <ul className="mt-2 list-inside list-disc space-y-1 text-addisons-text-light">
          <li>Tiredness, muscle weakness, or feeling dizzy</li>
          <li>A fast or fluttery pulse</li>
          <li>Darkening of the skin, especially on hands, face, or in skin folds</li>
          <li>Patches of dark freckles or bluish-black areas around nipples, mouth, or groin</li>
          <li>Weight loss, poor appetite, or craving salty foods</li>
          <li>Nausea, vomiting, or diarrhea</li>
          <li>Muscle aches or feeling cold when others are comfortable</li>
          <li>Dehydration even when drinking fluids</li>
        </ul>
        <p className="mt-2 text-addisons-text-light">
          Many of these can point to other conditions too. If you notice a
          combination of these, especially with skin darkening or salt craving, a
          doctor visit is important.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-addisons-primary-dark">
          How is it diagnosed?
        </h2>
        <p className="mt-2 text-addisons-text-light">
          The doctor will review your child&apos;s symptoms and family history,
          then order blood tests to check cortisol and related hormone levels.
          The ACTH stimulation test is often used: your child gets a small dose
          of synthetic ACTH, and the response is measured. In Addison&apos;s, the
          adrenal glands don&apos;t respond as they should. Sometimes a CT scan of
          the adrenal area is done to look for structural changes.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-addisons-primary-dark">
          How is it treated?
        </h2>
        <p className="mt-2 text-addisons-text-light">
          Treatment aims to replace the missing hormones so your child can lead a
          normal, active life. Because untreated Addison&apos;s can be serious,
          doctors usually start therapy quickly. Corticosteroids (such as
          hydrocortisone) are given by mouth daily, or by injection if your
          child is too unwell to take pills. Most children will need this for
          life. Some also need fludrocortisone to maintain salt and potassium
          balance. Your endocrinologist will tailor the doses to your child.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-addisons-primary-dark">
          Possible complications if left untreated
        </h2>
        <p className="mt-2 text-addisons-text-light">
          Without treatment, children can develop severe weakness, very low blood
          pressure, kidney problems, shock from dehydration, or dangerous drops
          in blood sugar. These are most likely during illness, injury, or
          surgery. With proper care and stress dosing when needed, these risks
          are greatly reduced.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-addisons-primary-dark">
          Daily life and staying safe
        </h2>
        <p className="mt-2 text-addisons-text-light">
          Addison&apos;s is lifelong, but kids can go to school, play sports, and
          grow up normally. The key is never missing medication and knowing when
          to increase doses—for example, during fever, stomach bugs, surgery,
          or major stress. Always discuss any planned surgery with your doctor
          beforehand. A medical alert bracelet or necklace helps caregivers and
          emergency responders act quickly if needed.
        </p>
        <p className="mt-2 text-addisons-text-light">
          Caring for a child with a chronic condition can be hard on the whole
          family. It&apos;s okay to ask for support—emotional, practical, or
          financial—from your care team or local support groups.
        </p>
      </section>

      <section className="mt-10">
        <div className="rounded-2xl bg-addisons-surface p-6 ring-1 ring-addisons-primary/20">
          <h2 className="text-xl font-semibold text-addisons-primary-dark">
            When to call the doctor or seek care
          </h2>
          <p className="mt-2 text-addisons-text-light">
            Call your child&apos;s doctor if you see possible symptoms of
            Addison&apos;s. If your child already has Addison&apos;s, seek care
            right away—and consider stress dosing—when they have vomiting,
            diarrhea, fever, or any infection. Before any surgery or procedure,
            check in with your endocrinologist about dose adjustments.
          </p>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-addisons-primary-dark">
          Quick takeaways
        </h2>
        <ul className="mt-2 list-inside list-disc space-y-1 text-addisons-text-light">
          <li>Addison&apos;s means the adrenal glands don&apos;t make enough cortisol and often aldosterone.</li>
          <li>With daily medication and stress dosing when needed, children can live full lives.</li>
          <li>The most common cause in kids is autoimmune damage to the adrenal glands.</li>
          <li>Skin darkening and salt craving are important clues to watch for.</li>
          <li>Never hesitate to seek care during illness—vomiting and diarrhea need prompt attention.</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-addisons-primary-dark">
          Getting the most from doctor visits
        </h2>
        <ul className="mt-2 list-inside list-disc space-y-1 text-addisons-text-light">
          <li>Write down your questions before the visit so you don&apos;t forget anything.</li>
          <li>Note any new medicines, doses, or instructions the doctor gives.</li>
          <li>Ask about stress dosing—when and how much to increase during illness.</li>
          <li>Save your doctor&apos;s after-hours contact info somewhere easy to find.</li>
          <li>Create a free emergency card so schools and caregivers know what to do in a crisis.</li>
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
      </div>

      <footer className="mt-12 border-t border-addisons-primary/20 pt-8 text-sm text-addisons-muted">
        <p>
          Further reading:{" "}
          <a
            href="https://www.cedars-sinai.org/health-library/diseases-and-conditions---pediatrics/a/addisons-disease-in-children.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-addisons-primary hover:underline"
          >
            Cedars-Sinai Health Library
          </a>
          . This information is not a substitute for professional medical care.
          Always follow your healthcare provider&apos;s advice.
        </p>
      </footer>
    </div>
  );
}

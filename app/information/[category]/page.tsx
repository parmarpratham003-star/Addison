import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import { createPageMetadata } from "@/lib/seo";

const categoryDescriptions: Record<string, string> = {
  medications:
    "Hydrocortisone, fludrocortisone, and emergency hydrocortisone injection—how to take and store your Addison's medications.",
  diet: "Salt intake, hydration, and eating well with Addison's disease. Nutrition tips for patients.",
  stress:
    "When to stress dose and how much to increase hydrocortisone during illness, surgery, or emotional stress.",
  travel:
    "Traveling safely with Addison's: pack medication, documentation, and plan for time zones and emergencies.",
};

const content: Record<string, { title: string; body: string }> = {
  medications: {
    title: "Medications",
    body: `
**Hydrocortisone** (cortisol replacement)
- Taken 2–3 times daily, often in divided doses (e.g., more in the morning, less in the afternoon/evening).
- Never skip doses. If you miss one, take it as soon as you remember.
- During illness, stress, or surgery, your dose may need to be increased (stress dosing). Follow your endocrinologist's plan.

**Fludrocortisone** (aldosterone replacement)
- Some patients need this to manage salt and water balance.
- Take as prescribed, usually once daily.
- Your doctor may adjust based on blood pressure and electrolyte levels.

**Emergency hydrocortisone injection**
- Keep a kit (e.g., Solu-Cortef) for Addisonian crisis.
- Inject 100 mg intramuscularly if you cannot keep oral medication down or if you show crisis signs.
- Train a family member or close friend how to inject.
    `,
  },
  diet: {
    title: "Diet & Nutrition",
    body: `
**Salt**
- Many Addison's patients need extra salt, especially in heat or during exercise.
- Add salt to food as tolerated. Your doctor may recommend specific amounts.
- Carry salty snacks when traveling or exercising.

**Hydration**
- Stay well hydrated, especially in hot weather or when ill.
- Dehydration can worsen low blood pressure and trigger crisis.

**General**
- Eat regular meals to help stabilize blood sugar.
- No special diet is required unless your doctor advises otherwise.
- Avoid excessive alcohol, which can affect blood sugar and blood pressure.
    `,
  },
  stress: {
    title: "Stress Management",
    body: `
**When to stress dose**
- Fever, infection, flu, stomach bug
- Injury, surgery, dental work
- Significant emotional stress (bereavement, major life changes)
- Intense physical exertion (e.g., marathon, heavy labor)
- Travel, especially across time zones

**How much to increase**
- Your endocrinologist will give you a plan. Common guidance: double or triple your usual hydrocortisone during illness.
- When in doubt, take extra hydrocortisone and call your doctor. It's safer to over-replace briefly than to risk crisis.

**Mental health**
- Living with a chronic condition can affect mood and anxiety.
- Consider support from a therapist or psychiatrist. Our directory lists mental health professionals who volunteer to support the Addison's community.
    `,
  },
  travel: {
    title: "Travel Tips",
    body: `
**Pack medication**
- Bring more than you need—at least twice the amount for your trip.
- Keep medication in carry-on luggage. Never pack emergency hydrocortisone in checked bags.
- Spread medication across bags in case one is lost.

**Documentation**
- Get a letter from your doctor explaining your condition and need for medication and syringes.
- Use our free emergency card in your wallet.

**Planning**
- Research healthcare at your destination.
- Know how to access emergency care abroad.
- Consider travel insurance that covers pre-existing conditions.

**Time zones**
- Take hydrocortisone on a schedule that roughly matches your home time zone, or gradually shift. Your doctor can advise.
    `,
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const data = content[category];
  if (!data) return {};
  const description =
    categoryDescriptions[category] ||
    `${data.title} - Resources from the Addison's Disease Community.`;
  return createPageMetadata({
    title: data.title,
    description,
    path: `/information/${category}`,
  });
}

export default async function InformationCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const data = content[category];
  if (!data) notFound();

  const markdownComponents = {
    strong: ({ children }: { children?: ReactNode }) => (
      <strong className="font-semibold text-addisons-primary-dark">{children}</strong>
    ),
    p: ({ children }: { children?: ReactNode }) => (
      <p className="mt-2 text-addisons-text-light">{children}</p>
    ),
    ul: ({ children }: { children?: ReactNode }) => (
      <ul className="mt-2 list-inside list-disc space-y-1 text-addisons-text-light">{children}</ul>
    ),
    li: ({ children }: { children?: ReactNode }) => (
      <li className="text-addisons-text-light">{children}</li>
    ),
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <Link
        href="/information"
        className="text-sm font-medium text-addisons-primary hover:underline"
      >
        ← Back to Information Hub
      </Link>
      <h1 className="mt-6 text-3xl font-bold text-addisons-primary-dark sm:text-4xl">
        {data.title}
      </h1>
      <article className="mt-8 space-y-6">
        <ReactMarkdown components={markdownComponents}>
          {data.body.trim()}
        </ReactMarkdown>
      </article>
    </div>
  );
}

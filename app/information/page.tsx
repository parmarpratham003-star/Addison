import Link from "next/link";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Information Hub | Addison's Disease Community",
  description:
    "Resources on medications, diet, stress management, and travel for Addison's disease patients.",
  path: "/information",
});

const categories = [
  {
    id: "medications",
    title: "Medications",
    description: "Cortisol replacement (hydrocortisone), fludrocortisone, and emergency injection.",
    icon: "💊",
  },
  {
    id: "diet",
    title: "Diet & Nutrition",
    description: "Salt intake, hydration, and eating well with Addison's.",
    icon: "🥗",
  },
  {
    id: "stress",
    title: "Stress Management",
    description: "When to stress dose and how to manage daily stress.",
    icon: "🧘",
  },
  {
    id: "travel",
    title: "Travel Tips",
    description: "Traveling safely with Addison's disease—medication, letters, and planning.",
    icon: "✈️",
  },
  {
    id: "children",
    title: "Addison's in Children",
    description: "Pediatric-specific information: symptoms, causes, treatment, and living with Addison's.",
    icon: "🧒",
  },
];

export default function InformationPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-addisons-primary-dark sm:text-4xl">
        Information Hub
      </h1>
      <p className="mt-4 text-addisons-text-light">
        Categorized resources for living with Addison&apos;s disease.
      </p>
      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            href={`/information/${cat.id}`}
            className="rounded-2xl bg-addisons-surface p-6 shadow-sm ring-1 ring-addisons-primary/20 transition hover:ring-addisons-primary/40"
          >
            <span className="text-3xl">{cat.icon}</span>
            <h2 className="mt-4 text-lg font-semibold text-addisons-primary-dark">
              {cat.title}
            </h2>
            <p className="mt-2 text-sm text-addisons-text-light">{cat.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

import Link from "next/link";
import { Playfair_Display, DM_Sans } from "next/font/google";
import { createPageMetadata } from "@/lib/seo";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm",
});

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
    description:
      "Cortisol replacement (hydrocortisone), fludrocortisone, and emergency injection.",
    image:
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "diet",
    title: "Diet & Nutrition",
    description:
      "Salt intake, hydration, and eating well with Addison's.",
    image:
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "stress",
    title: "Stress Management",
    description:
      "When to stress dose and how to manage daily stress.",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "travel",
    title: "Travel Tips",
    description:
      "Traveling safely with Addison's disease—medication, letters, and planning.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "children",
    title: "Addison's in Children",
    description:
      "Pediatric-specific information: symptoms, causes, treatment, and living with Addison's.",
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function InformationPage() {
  return (
    <div
      className={`${playfair.variable} ${dmSans.variable} bg-[#eaebd0] min-h-screen`}
      style={{ fontFamily: "var(--font-dm)" }}
    >
      <div className="max-w-5xl mx-auto px-6 py-16">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto">
          <h1
            className="text-3xl sm:text-4xl text-[#2d3c59]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Information Hub
          </h1>

          <p className="mt-4 text-[#2d3c59]/70 text-sm">
            Categorized resources for living with Addison&apos;s disease.
          </p>
        </div>

        {/* 🔥 NEW LAYOUT */}
        <div className="mt-16 space-y-10">

          {categories.map((cat, i) => (
            <Link
              key={cat.id}
              href={`/information/${cat.id}`}
              className={`group grid sm:grid-cols-2 gap-6 items-center ${
                i % 2 === 1 ? "sm:[&>div:first-child]:order-2" : ""
              }`}
            >

              {/* IMAGE */}
              <div className="rounded-2xl overflow-hidden border border-[#2d3c59]/10">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-[220px] object-cover"
                />
              </div>

              {/* TEXT */}
              <div className="max-w-md">
                <h2
                  className="text-xl text-[#2d3c59]"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {cat.title}
                </h2>

                <p className="mt-3 text-sm text-[#2d3c59]/65 leading-relaxed">
                  {cat.description}
                </p>

                <span className="mt-4 inline-block text-sm text-[#2d3c59]/50 group-hover:translate-x-1 transition">
                  Explore →
                </span>
              </div>

            </Link>
          ))}

        </div>

      </div>
    </div>
  );
}
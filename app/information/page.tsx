import Link from "next/link";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { createPageMetadata } from "@/lib/seo";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  variable: "--font-cormorant",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-outfit",
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
      className={`${cormorant.variable} ${outfit.variable} bg-[#f5f5f5] min-h-screen`}
      style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
    >
      {/* ── OUTER WRAPPER — matches hero max-w-7xl ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-16">

        {/* ── INNER WRAPPER — matches hero lg:pl-8 xl:pl-12 ── */}
        <div className="lg:pl-8 xl:pl-12">

          {/* ── HEADER ── */}
          <div className="mb-14 border-b border-[#2d3c59]/10 pb-10">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h1
                className="font-semibold leading-[0.95]"
                style={{
                  fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                  fontSize: "clamp(2.8rem, 5vw, 4.5rem)",
                  color: "#2d3c59",
                }}
              >
                Information{" "}
                <span style={{ color: "rgba(45,60,89,0.45)", fontWeight: 400 }}>Hub</span>
              </h1>
              <p
                className="text-sm font-light leading-relaxed sm:pb-2 max-w-[220px]"
                style={{
                  color: "rgba(45,60,89,0.45)",
                  fontFamily: "var(--font-outfit)",
                }}
              >
                Categorized resources for living with Addison&apos;s disease.
              </p>
            </div>
          </div>

          {/* ── CATEGORY LIST ── */}
          <div className="space-y-10">
            {categories.map((cat, i) => (
              <Link
                key={cat.id}
                href={`/information/${cat.id}`}
                className={`group grid sm:grid-cols-2 gap-8 items-center border-b border-[#2d3c59]/10 pb-10 last:border-0 ${
                  i % 2 === 1 ? "sm:[&>div:first-child]:order-2" : ""
                }`}
              >
                {/* IMAGE */}
                <div
                  className="overflow-hidden"
                  style={{ borderRadius: "3px" }}
                >
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-[220px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* TEXT */}
                <div className="max-w-md">
                  <p
                    className="text-[0.65rem] uppercase tracking-[0.25em] font-medium mb-3"
                    style={{
                      color: "rgba(45,60,89,0.4)",
                      fontFamily: "var(--font-outfit)",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </p>

                  <h2
                    className="font-semibold leading-[1.05] mb-4"
                    style={{
                      fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                      fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                      color: "#2d3c59",
                    }}
                  >
                    {cat.title}
                  </h2>

                  <p
                    className="text-sm font-light leading-relaxed mb-5"
                    style={{
                      color: "rgba(45,60,89,0.55)",
                      fontFamily: "var(--font-outfit)",
                    }}
                  >
                    {cat.description}
                  </p>

                  <span
                    className="inline-flex items-center gap-2 text-[0.75rem] uppercase tracking-[0.08em] font-medium transition-all duration-200 group-hover:gap-3"
                    style={{
                      color: "#2d3c59",
                      fontFamily: "var(--font-outfit)",
                    }}
                  >
                    Explore
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>

        </div>{/* end inner lg:pl-8 xl:pl-12 */}
      </div>{/* end outer max-w-7xl */}
    </div>
  );
}
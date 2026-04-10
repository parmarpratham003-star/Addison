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
      "https://plus.unsplash.com/premium_photo-1670981099538-c3e088946081?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjU3fHxtZWRpY2luZXxlbnwwfHwwfHx8MA%3D%3D",
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
      "https://images.unsplash.com/flagged/photo-1558954157-7104f14c2ecc?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "children",
    title: "Addison's in Children",
    description:
      "Pediatric-specific information: symptoms, causes, treatment, and living with Addison's.",
    image:
      "https://images.unsplash.com/photo-1578496781379-7dcfb995293d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function InformationPage() {
  return (
    <div
      className={`${cormorant.variable} ${outfit.variable} bg-[#f5f5f5] min-h-screen`}
      style={{ fontFamily: "var(--font-outfit), sans-serif" }}
    >
      {/* OUTER */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-10 pb-16">

        {/* INNER */}
        <div className="lg:pl-8 xl:pl-12">

          {/* HEADER */}
          <div className="mb-12 border-b border-[#2d3c59]/10 pb-8">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
              <h1
                className="font-semibold leading-[0.9]"
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontSize: "clamp(2.5rem, 4vw, 4rem)",
                  color: "#2d3c59",
                }}
              >
                Information{" "}
                <span style={{ color: "rgba(45,60,89,0.4)", fontWeight: 400 }}>
                  Hub
                </span>
              </h1>

              <p
                className="text-[13px] font-light leading-[1.4] sm:pb-1 max-w-[200px]"
                style={{
                  color: "rgba(45,60,89,0.45)",
                }}
              >
                Categorized resources for living with Addison&apos;s disease.
              </p>
            </div>
          </div>

          {/* LIST */}
          <div className="space-y-8">
            {categories.map((cat, i) => (
              <Link
                key={cat.id}
                href={`/information/${cat.id}`}
                className={`group grid sm:grid-cols-2 gap-6 items-center border-b border-[#2d3c59]/10 pb-8 last:border-0 ${
                  i % 2 === 1 ? "sm:[&>div:first-child]:order-2" : ""
                }`}
              >
                {/* IMAGE */}
                <div className="overflow-hidden rounded-[3px]">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-[200px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* TEXT */}
                <div className="max-w-md">
                  <p
                    className="text-[0.6rem] uppercase tracking-[0.22em] font-medium mb-2"
                    style={{ color: "rgba(45,60,89,0.4)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </p>

                  <h2
                    className="font-semibold leading-[0.95] mb-3"
                    style={{
                      fontFamily: "var(--font-cormorant), serif",
                      fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)",
                      color: "#2d3c59",
                    }}
                  >
                    {cat.title}
                  </h2>

                  <p
                    className="text-[13px] font-light leading-[1.4] mb-4"
                    style={{
                      color: "rgba(45,60,89,0.55)",
                    }}
                  >
                    {cat.description}
                  </p>

                  <span
                    className="inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.08em] font-medium transition-all duration-200 group-hover:gap-3"
                    style={{ color: "#2d3c59" }}
                  >
                    Explore
                    <svg
                      className="h-3 w-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
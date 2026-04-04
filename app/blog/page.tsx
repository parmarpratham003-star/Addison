import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { createPageMetadata } from "@/lib/seo";
import { Cormorant_Garamond, Outfit } from "next/font/google";

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

export const dynamic = "force-dynamic";

export const metadata = createPageMetadata({
  title: "Blog | Addison's Disease Community",
  description:
    "Articles, patient stories, and updates for the Addison's disease community.",
  path: "/blog",
});

export default async function BlogPage() {
  const posts = await prisma.post.findMany({
    where: { published: true },
    orderBy: { createdAt: "desc" },
    select: { slug: true, title: true, excerpt: true, createdAt: true },
  });

  return (
    <div
      className={`${cormorant.variable} ${outfit.variable}`}
      style={{
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
        fontFamily: "var(--font-outfit), Outfit, sans-serif",
      }}
    >
      <div className="mx-auto max-w-4xl px-6 py-20 lg:px-12">

        {/* ── Header ── */}
        <div className="mb-14 border-b border-[#2d3c59]/10 pb-10">
          <p
            className="mb-3 text-[0.65rem] uppercase tracking-[0.25em] font-medium text-[#2d3c59]/40"
            style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
          >
            Community
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h1
              className="text-[3rem] sm:text-[4.5rem] font-semibold leading-[0.95] text-[#2d3c59]"
              style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
            >
              The{" "}
              <span className="font-normal text-[#2d3c59]/50">Blog</span>
            </h1>
            <p
              className="max-w-[220px] text-sm font-light leading-relaxed text-[#2d3c59]/45 sm:pb-2"
              style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
            >
              Stories, tips, and updates for the Addison&apos;s community.
            </p>
          </div>
        </div>

        {/* ── Posts list ── */}
        {posts.length === 0 ? (
          <p
            className="text-sm font-light text-[#2d3c59]/40"
            style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
          >
            No posts yet. Check back soon.
          </p>
        ) : (
          <div className="flex flex-col border-t border-[#2d3c59]/10">
            {posts.map((post, index) => (
              <article
                key={post.slug}
                className="group border-b border-[#2d3c59]/10 py-8 px-2 transition-colors duration-200 hover:bg-[#2d3c59]/[0.03]"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">

                  {/* Left — number + content */}
                  <div className="flex items-start gap-5 sm:gap-6 flex-1 min-w-0">

                    {/* Index number */}
                    <span
                      className="hidden sm:block w-10 flex-shrink-0 text-[0.65rem] uppercase tracking-[0.25em] font-medium text-[#2d3c59]/25 pt-1"
                      style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Text */}
                    <div className="flex-1 min-w-0">
                      <time
                        dateTime={post.createdAt.toISOString()}
                        className="text-[0.65rem] uppercase tracking-[0.2em] font-medium text-[#2d3c59]/35"
                        style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
                      >
                        {post.createdAt.toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>

                      <h2
                        className="mt-2 text-[1.6rem] sm:text-[2rem] font-semibold leading-tight text-[#2d3c59]/70 group-hover:text-[#2d3c59] transition-colors duration-300"
                        style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
                      >
                        {post.title}
                      </h2>

                      {post.excerpt && (
                        <p
                          className="mt-2 text-sm font-light leading-[1.8] text-[#2d3c59]/45 max-w-xl"
                          style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
                        >
                          {post.excerpt}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Right — CTA */}
                  <div className="sm:flex-shrink-0 sm:pt-8 pl-0 sm:pl-4">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 rounded-full border border-[#2d3c59]/15 px-5 py-2 text-[0.7rem] uppercase tracking-[0.12em] font-medium text-[#2d3c59]/50 transition-all duration-200 hover:bg-[#2d3c59] hover:text-[#eaebd0] hover:border-[#2d3c59] hover:shadow-[0_4px_16px_rgba(45,60,89,0.2)]"
                      style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
                    >
                      Read more
                      <svg
                        className="h-3 w-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>

                </div>
              </article>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
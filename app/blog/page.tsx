import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { createPageMetadata } from "@/lib/seo";
import { Cormorant_Garamond, Outfit } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
      className={`${cormorant.variable} ${outfit.variable} bg-[#f5f5f5] min-h-screen`}
      style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
    >

      {/* ── HEADER ── */}
      <div
        className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-14 pt-14 sm:pt-20 pb-10"
        style={{ borderBottom: "1px solid rgba(45,60,89,0.1)" }}
      >
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">

          <div>
            <p className="text-[10px] uppercase tracking-[0.35em] text-[#2d3c59]/30 mb-4">
              Community
            </p>
            <h1
              className="text-[3.5rem] sm:text-[5.5rem] font-semibold leading-[0.85] text-[#2d3c59]"
              style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
            >
              The{" "}
              <span className="text-[#2d3c59]/25 font-normal">Blog</span>
            </h1>
          </div>

          <div className="flex flex-col gap-3 sm:pb-2 sm:items-end">
            <p className="text-[12px] text-[#2d3c59]/45 max-w-[200px] leading-[1.75] sm:text-right">
              Stories, tips, and updates for the Addison&apos;s community.
            </p>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#2d3c59]/20">
              {posts.length} {posts.length === 1 ? "article" : "articles"}
            </span>
          </div>

        </div>
      </div>

      {/* ── POSTS ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-14">

        {posts.length === 0 ? (
          <p className="py-20 text-[13px] text-[#2d3c59]/40">
            No posts yet. Check back soon.
          </p>
        ) : (
          <div>
            {posts.map((post, index) => {
              const isEven = index % 2 === 0;
              const isFirst = index === 0;

              return (
                <article
                  key={post.slug}
                  className="group"
                  style={{ borderBottom: "1px solid rgba(45,60,89,0.09)" }}
                >
                  <Link href={`/blog/${post.slug}`} className="block">
                    <div
                      className={`
                        grid gap-0 py-8 sm:py-10 transition-colors duration-200
                        group-hover:bg-[#2d3c59]/[0.025]
                        ${isFirst
                          ? "grid-cols-1 sm:grid-cols-[auto_1fr_auto]"
                          : "grid-cols-1 sm:grid-cols-[auto_1fr_auto]"
                        }
                      `}
                    >

                      {/* Index */}
                      <div className="hidden sm:flex items-start pr-8 pt-1 w-16">
                        <span
                          className="text-[0.95rem] font-semibold text-[#2d3c59]/15"
                          style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      {/* Main content */}
                      <div className={`flex flex-col gap-3 min-w-0 ${isFirst ? "sm:pr-16" : "sm:pr-12"}`}>

                        <div className="flex items-center gap-4">
                          <time className="text-[10px] uppercase tracking-[0.22em] text-[#2d3c59]/30">
                            {post.createdAt.toLocaleDateString("en-US", {
                              year: "numeric", month: "long", day: "numeric",
                            })}
                          </time>
                          {isFirst && (
                            <span
                              className="text-[9px] uppercase tracking-[0.2em] font-medium px-2.5 py-1 text-[#2d3c59] bg-[#2d3c59]/08"
                            >
                              Latest
                            </span>
                          )}
                        </div>

                        <h2
                          className={`
                            font-semibold leading-[1.05] text-[#2d3c59]/80 group-hover:text-[#2d3c59] transition-colors
                            ${isFirst
                              ? "text-[2rem] sm:text-[3rem]"
                              : "text-[1.5rem] sm:text-[2rem]"
                            }
                          `}
                          style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
                        >
                          {post.title}
                        </h2>

                        {post.excerpt && (
                          <p
                            className={`
                              text-[#2d3c59]/45 leading-[1.8]
                              ${isFirst ? "text-[13px] max-w-2xl" : "text-[12px] max-w-xl line-clamp-1"}
                            `}
                          >
                            {post.excerpt}
                          </p>
                        )}

                      </div>

                      {/* Right — arrow */}
                      <div className="hidden sm:flex items-center justify-end pl-8">
                        <span
                          className="w-10 h-10 flex items-center justify-center border border-[#2d3c59]/12 text-[#2d3c59]/30 group-hover:bg-[#2d3c59] group-hover:text-white group-hover:border-[#2d3c59] transition-all"
                        >
                          <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </span>
                      </div>

                    </div>
                  </Link>
                </article>
              );
            })}
          </div>
        )}

      </div>

      {/* ── FOOTER STRIP ── */}
      <div
        className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-14 py-10 mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
        style={{ borderTop: "1px solid rgba(45,60,89,0.08)" }}
      >
        <p className="text-[10px] uppercase tracking-[0.28em] text-[#2d3c59]/25">
          Addison&apos;s Community — Blog
        </p>
        <p className="text-[10px] uppercase tracking-[0.28em] text-[#2d3c59]/25">
          {new Date().getFullYear()}
        </p>
      </div>

    </div>
  );
}
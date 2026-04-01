import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { createPageMetadata } from "@/lib/seo";

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
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-addisons-primary-dark sm:text-4xl">
        Blog
      </h1>
      <p className="mt-4 text-addisons-text-light">
        Stories, tips, and updates for the Addison&apos;s community.
      </p>
      <div className="mt-12 space-y-8">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="rounded-2xl bg-addisons-surface p-6 shadow-sm ring-1 ring-addisons-primary/20"
          >
            <time
              dateTime={post.createdAt.toISOString()}
              className="text-sm text-addisons-muted"
            >
              {post.createdAt.toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <h2 className="mt-2 text-xl font-semibold text-addisons-primary-dark">
              {post.title}
            </h2>
            <p className="mt-2 text-addisons-text-light">{post.excerpt}</p>
            <Link
              href={`/blog/${post.slug}`}
              className="mt-4 inline-block font-medium text-addisons-primary hover:underline"
            >
              Read more
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}

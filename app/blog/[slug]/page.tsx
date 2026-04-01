import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { createPageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await prisma.post.findUnique({
    where: { slug, published: true },
    select: { title: true, excerpt: true, content: true },
  });
  if (!post) return {};
  const description =
    post.excerpt || post.content.slice(0, 160).replace(/\s+/g, " ").trim() + "...";
  return createPageMetadata({
    title: post.title,
    description,
    path: `/blog/${slug}`,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await prisma.post.findUnique({
    where: { slug, published: true },
  });

  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <Link
        href="/blog"
        className="text-sm font-medium text-addisons-primary hover:underline"
      >
        ← Back to Blog
      </Link>
      <time
        dateTime={post.createdAt.toISOString()}
        className="mt-4 block text-sm text-addisons-muted"
      >
        {post.createdAt.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </time>
      <h1 className="mt-2 text-3xl font-bold text-addisons-primary-dark">
        {post.title}
      </h1>
      <div className="prose prose-addisons mt-8 max-w-none">
        <div className="whitespace-pre-wrap text-addisons-text-light">
          {post.content.trim()}
        </div>
      </div>
    </article>
  );
}

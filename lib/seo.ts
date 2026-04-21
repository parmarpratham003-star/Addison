import type { Metadata } from "next";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.NEXTAUTH_URL ||
  "http://localhost:3000";

export const SITE_NAME = "Addison's Disease Community India";

export const DEFAULT_OG_IMAGE = "/adsn.png";

export interface PageSEOProps {
  title: string;
  description: string;
  path?: string;
  noIndex?: boolean;
}

/**
 * Build page metadata with OpenGraph, Twitter, and canonical URL.
 * Use for static pages that need consistent SEO.
 */
export function createPageMetadata({
  title,
  description,
  path = "",
  noIndex = false,
}: PageSEOProps): Metadata {
  const url = path ? `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}` : SITE_URL;

  const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    openGraph: {
      type: "website",
      url,
      siteName: SITE_NAME,
      locale: "en_IN",
      title,
      description,
      images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: SITE_NAME }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: url,
    },
  };

  if (noIndex) {
    metadata.robots = { index: false, follow: false };
  }

  return metadata;
}

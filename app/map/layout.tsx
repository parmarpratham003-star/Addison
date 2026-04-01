import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Community Map | Addison's Community India",
  description:
    "View Addison's disease patients and healthcare professionals registered across Indian states.",
  path: "/map",
});

export default function MapLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

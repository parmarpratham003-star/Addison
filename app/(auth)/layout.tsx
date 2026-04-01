import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Account | Addison's Disease Community",
  description:
    "Sign in or register to access your Addison's disease emergency card, dashboard, and community resources.",
  path: "/login",
  noIndex: true,
});

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

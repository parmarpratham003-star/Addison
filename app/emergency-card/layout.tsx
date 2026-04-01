import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Free Emergency Card | Addison's Disease Community",
  description:
    "Create and download your free Addison's disease emergency card. Keep critical medical info in your wallet for first responders and healthcare providers.",
  path: "/emergency-card",
});

export default function EmergencyCardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

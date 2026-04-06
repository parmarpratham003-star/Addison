import { createPageMetadata } from "@/lib/seo";
import { AboutHeroSection } from "./AboutHeroSection";
import { AboutContent } from "./AboutContent";

export const metadata = createPageMetadata({
  title: "About Addison's Disease",
  description:
    "Learn about Addison's disease: symptoms, diagnosis, treatment with cortisol replacement, and lifestyle tips.",
  path: "/about-addisons",
});

export default function AboutAddisonsPage() {
  return (
    <>
      <AboutHeroSection />
      <AboutContent />
    </>
  );
}
import { HeroSection } from "@/components/HeroSection";
import { UserTypeSection } from "@/components/UserTypeSection";
import { ResourcesSection } from "@/components/ResourcesSection";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <UserTypeSection />
      <ResourcesSection />
    </div>
  );
}
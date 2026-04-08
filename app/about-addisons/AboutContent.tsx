import { Cormorant_Garamond, Outfit } from "next/font/google";
import { AdrenalGlandsSection } from "./AdrenalGlandSection";
import { SymptomsSection } from "./SymptomsSection";
import { LifestyleSection } from "./LifestyleSection";
import TreatmentSection from "./TreatmentSection";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-outfit",
});

export function AboutContent() {
  return (
    <div
      className={`${cormorant.variable} ${outfit.variable} `}
      style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
    >
      <AdrenalGlandsSection />
      <SymptomsSection />
     
      <TreatmentSection />
      <LifestyleSection />
    </div>
  );
}
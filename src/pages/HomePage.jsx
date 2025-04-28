import React from "react";
import HowItWorksSection from "../components/HowItWorksSection";
import FeaturesSection from "../components/FeaturesSection";
import WhyItMattersSection from "../components/WhyItMattersSection";
import RealStoriesSection from "../components/RealStoriesSection";
import FAQSection from "../components/FAQSection";
import TumorDetectionForm from "../components/TumorDetectionForm";

export default function HomePage() {
  return (
    <>
      <HowItWorksSection />
      <FeaturesSection />
      <WhyItMattersSection />
      <RealStoriesSection />
      <FAQSection />
    </>
  );
}

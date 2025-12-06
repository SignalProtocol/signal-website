import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import HowItWorks from "@/components/sections/HowItWorks";
import Technology from "@/components/sections/Technology";
import Traction from "@/components/sections/Traction";
import Tokenomics from "@/components/sections/Tokenomics";
import Market from "@/components/sections/Market";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/Footer";
import Mixpanel from "@/mixpanel";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { TrackableSection } from "@/hooks/useSectionTracking.tsx";

const Index = () => {
  const location = useLocation();
  useEffect(() => {
    Mixpanel.track("Page Viewed", { location: "Initial Render" });
  }, [location.pathname]);
  return (
    <main className="min-h-screen">
      <Navbar />
      <TrackableSection sectionName="Hero" threshold={0.3}>
        <Hero />
      </TrackableSection>
      <TrackableSection sectionName="Problem" threshold={0.5}>
        <Problem />
      </TrackableSection>
      <TrackableSection sectionName="Solution" threshold={0.5}>
        <Solution />
      </TrackableSection>
      <TrackableSection sectionName="HowItWorks" threshold={0.5}>
        <HowItWorks />
      </TrackableSection>
      <TrackableSection sectionName="Technology" threshold={0.5}>
        <Technology />
      </TrackableSection>
      <TrackableSection sectionName="Traction" threshold={0.5}>
        <Traction />
      </TrackableSection>
      <TrackableSection sectionName="Tokenomics" threshold={0.5}>
        <Tokenomics />
      </TrackableSection>
      <TrackableSection sectionName="Market" threshold={0.5}>
        <Market />
      </TrackableSection>
      <TrackableSection sectionName="CTA" threshold={0.5}>
        <CTA />
      </TrackableSection>
      <Footer />
    </main>
  );
};

export default Index;

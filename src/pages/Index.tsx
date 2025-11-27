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

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <Technology />
      <Traction />
      <Tokenomics />
      <Market />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;

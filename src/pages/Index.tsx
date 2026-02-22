import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CountdownSection from "@/components/CountdownSection";
import AboutSection from "@/components/AboutSection";
import HighlightsSection from "@/components/HighlightsSection";
import TechnologiesSection from "@/components/TechnologiesSection";
import TimelineSection from "@/components/TimelineSection";
import RulesSection from "@/components/RulesSection";
import FAQSection from "@/components/FAQSection";
import SponsorSection from "@/components/SponsorSection";
import LocationSection from "@/components/LocationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <CountdownSection />
      <AboutSection />
      <HighlightsSection />
      <TechnologiesSection />
      <TimelineSection />
      <RulesSection />
      <FAQSection />
      <SponsorSection />
      <LocationSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;

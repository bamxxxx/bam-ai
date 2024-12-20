import { useEffect } from "react";
import { HeroSection } from "@/components/consulting/HeroSection";
import { TestimonialsCarousel } from "@/components/consulting/TestimonialsCarousel";
import { IntroSection } from "@/components/consulting/IntroSection";
import { ProfileSection } from "@/components/consulting/ProfileSection";
import { ServicesSection } from "@/components/consulting/ServicesSection";
import { ApproachSection } from "@/components/consulting/ApproachSection";
import { WhyWorkWithMeSection } from "@/components/consulting/WhyWorkWithMeSection";
import { ClientsSection } from "@/components/consulting/ClientsSection";
import { ContactSection } from "@/components/consulting/ContactSection";

const Index = () => {
  useEffect(() => {
    document.title = "AI Strategy Consulting - Michael Bamberger";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-consulting-bg via-purple-50 to-consulting-bg text-consulting-text">
      <div className="max-w-[1200px] mx-auto px-6 py-12 print:py-8">
        <HeroSection />
        <IntroSection />
        <TestimonialsCarousel />
        <ProfileSection />
        <ServicesSection />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ApproachSection />
          <WhyWorkWithMeSection />
        </div>
        <ClientsSection />
        <ContactSection />
      </div>
    </div>
  );
};

export default Index;
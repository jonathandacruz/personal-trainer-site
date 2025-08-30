import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import AboutSection from "@/components/AboutSection";
import MethodsSection from "@/components/MethodsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <MissionSection />
        <AboutSection />
        <MethodsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

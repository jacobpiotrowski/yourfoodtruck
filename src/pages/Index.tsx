import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import GallerySection from "@/components/GallerySection";
import WhyUsSection from "@/components/WhyUsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import logo from "@/assets/yfl-logo-white.png";

const Index = () => {
  return (
    <main className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center py-4">
        <img alt="Your Food Truck" className="h-36 md:h-48" src="/lovable-uploads/b602524e-35e3-499e-a5b8-674d6f6bf037.png" />
        <div className="absolute right-4">
          <LanguageSwitcher />
        </div>
      </header>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <WhyUsSection />
      <CTASection />
      <Footer />
    </main>);

};

export default Index;
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import GallerySection from "@/components/GallerySection";
import WhyUsSection from "@/components/WhyUsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import logo from "@/assets/yft-logo-white.png";

const Index = () => {
  return (
    <main className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center py-4">
        <img src={logo} alt="Your Food Truck" className="h-12 md:h-16" />
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
    </main>
  );
};

export default Index;

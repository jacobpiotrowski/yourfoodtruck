import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import RentalSection from "@/components/RentalSection";
import GallerySection from "@/components/GallerySection";
import WhyUsSection from "@/components/WhyUsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import LanguageSwitcher from "@/components/LanguageSwitcher";


const Index = () => {
  return (
    <main className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center py-4">
        <div className="flex flex-col items-center">
          <img alt="Your Food Truck" className="h-24 md:h-48" src="/lovable-uploads/99f52abd-3682-4bea-8758-73379330a270.png" />
          <span className="font-display text-xs md:text-sm tracking-[0.3em] uppercase text-muted-foreground mt-1">Since 2013</span>
        </div>
        <div className="absolute right-4">
          <LanguageSwitcher />
        </div>
      </header>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <RentalSection />
      <GallerySection />
      <WhyUsSection />
      <CTASection />
      <Footer />
    </main>);
};

export default Index;

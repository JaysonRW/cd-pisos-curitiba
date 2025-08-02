import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import StructureSection from "@/components/StructureSection";
import PartnersSection from "@/components/PartnersSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <HowWeWorkSection />
        <StructureSection />
        <PartnersSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

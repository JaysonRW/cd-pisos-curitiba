import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import logoImage from "@/assets/logo-cdpisos.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "Quem Somos",
    "Produtos", 
    "Calculadoras",
    "Pedidos",
    "Como Trabalhamos",
    "Estrutura",
    "Parceiros",    
  ];

  const scrollToSection = (sectionName: string) => {
    // Map menu items to section IDs
    const sectionMap: { [key: string]: string } = {
      "Quem Somos": "quem-somos",
      "Produtos": "produtos",
      "Calculadoras": "calculadoras",
      "Pedidos": "pedidos",
      "Como Trabalhamos": "como-trabalhamos",
      "Estrutura": "estrutura",
      "Parceiros": "parceiros",
      "Contato": "contato"
    };
    
    const sectionId = sectionMap[sectionName];
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/5541996190069?text=Ol%C3%A1%2C%20tudo%20bem%3F%20Acabei%20de%20visitar%20o%20site%20da%20CD%20Pisos%20%26%20Distribui%C3%A7%C3%A3o%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20produtos.%20Pode%20me%20ajudar%2C%20por%20favor%3F%20%F0%9F%98%8A", "_blank");
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={logoImage} 
              alt="CD Pisos" 
              className="h-12 w-auto"
            />
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-brand-purple">CD Pisos</h1>
              <p className="text-xs text-muted-foreground">O Atacadão de Pisos</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-6">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-foreground hover:text-brand-purple transition-colors font-medium"
              >
                {item}
              </button>
            ))}
          </nav>

          {/* WhatsApp Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button
              onClick={openWhatsApp}
              className="bg-brand-green hover:bg-brand-green/90 text-white"
              size="sm"
            >
              <Phone className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">WhatsApp</span>
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-3">
              {menuItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-left text-foreground hover:text-brand-purple transition-colors font-medium py-2"
                >
                  {item}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
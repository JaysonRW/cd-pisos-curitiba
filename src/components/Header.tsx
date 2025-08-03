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
    "Contato"
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
    window.open("https://wa.me/5541996190069", "_blank");
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
              <p className="text-xs text-muted-foreground">Pisos e Revestimentos</p>
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
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import logoImage from "@/assets/logo-cdpisos.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const menuItems = [
    {
      title: "Sobre Nós",
      items: [
        { name: "Quem Somos", section: "quem-somos" },
        { name: "Como Trabalhamos", section: "como-trabalhamos" },
        { name: "Estrutura", section: "estrutura" }
      ]
    },
    {
      title: "Produtos",
      section: "produtos"
    },
    {
      title: "Serviços",
      items: [
        { name: "Calculadoras", section: "calculadoras" },
        { name: "Pedidos", section: "pedidos" }
      ]
    },
    {
      title: "Parceiros",
      section: "parceiros"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/5541996190069?text=Ol%C3%A1%2C%20tudo%20bem%3F%20Acabei%20de%20visitar%20o%20site%20da%20CD%20Pisos%20%26%20Distribui%C3%A7%C3%A3o%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20produtos.%20Pode%20me%20ajudar%2C%20por%20favor%3F%20%F0%9F%98%8A", "_blank");
  };

  const handleDropdownToggle = (title: string) => {
    setActiveDropdown(activeDropdown === title ? null : title);
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
              <div key={item.title} className="relative group">
                {item.items ? (
                  // Dropdown Menu
                  <div className="relative">
                    <button
                      className="flex items-center text-foreground hover:text-brand-purple transition-colors font-medium py-2"
                      onMouseEnter={() => setActiveDropdown(item.title)}
                    >
                      {item.title}
                      <ChevronDown className="w-4 h-4 ml-1" />
                    </button>
                    
                    {/* Dropdown Content */}
                    <div 
                      className={`absolute top-full left-0 mt-1 bg-background border rounded-lg shadow-lg py-2 min-w-[180px] transition-all duration-200 ${
                        activeDropdown === item.title ? 'opacity-100 visible' : 'opacity-0 invisible'
                      }`}
                      onMouseEnter={() => setActiveDropdown(item.title)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      {item.items.map((subItem) => (
                        <button
                          key={subItem.name}
                          onClick={() => scrollToSection(subItem.section)}
                          className="block w-full text-left px-4 py-2 text-foreground hover:text-brand-purple hover:bg-muted transition-colors"
                        >
                          {subItem.name}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  // Single Menu Item
                  <button
                    onClick={() => scrollToSection(item.section!)}
                    className="text-foreground hover:text-brand-purple transition-colors font-medium"
                  >
                    {item.title}
                  </button>
                )}
              </div>
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
            <div className="flex flex-col space-y-2">
              {menuItems.map((item) => (
                <div key={item.title}>
                  {item.items ? (
                    // Mobile Dropdown
                    <div>
                      <button
                        onClick={() => handleDropdownToggle(item.title)}
                        className="flex items-center justify-between w-full text-left text-foreground hover:text-brand-purple transition-colors font-medium py-2"
                      >
                        {item.title}
                        <ChevronDown className={`w-4 h-4 transition-transform ${
                          activeDropdown === item.title ? 'rotate-180' : ''
                        }`} />
                      </button>
                      
                      {activeDropdown === item.title && (
                        <div className="ml-4 mt-2 space-y-2">
                          {item.items.map((subItem) => (
                            <button
                              key={subItem.name}
                              onClick={() => scrollToSection(subItem.section)}
                              className="block w-full text-left text-muted-foreground hover:text-brand-purple transition-colors py-1"
                            >
                              {subItem.name}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    // Single Mobile Menu Item
                    <button
                      onClick={() => scrollToSection(item.section!)}
                      className="text-left text-foreground hover:text-brand-purple transition-colors font-medium py-2"
                    >
                      {item.title}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
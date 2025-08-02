import { MessageCircle, MapPin, Clock, Phone } from "lucide-react";
import logoImage from "@/assets/logo-cdpisos.png";

const Footer = () => {
  const openWhatsApp = () => {
    window.open("https://wa.me/5541996190069", "_blank");
  };

  const quickLinks = [
    "Quem Somos",
    "Produtos",
    "Como Trabalhamos", 
    "Estrutura",
    "Parceiros",
    "Contato"
  ];

  const products = [
    "Pisos Cerâmicos",
    "Porcelanatos",
    "Argamassas",
    "Consulta Técnica"
  ];

  const scrollToSection = (sectionName: string) => {
    const element = document.getElementById(sectionName.toLowerCase().replace(" ", "-"));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gradient-to-r from-brand-purple to-brand-blue text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src={logoImage} 
                alt="CD Pisos" 
                className="h-12 w-auto bg-white rounded-lg p-1"
              />
              <div>
                <h3 className="text-xl font-bold">CD Pisos</h3>
                <p className="text-white/80 text-sm">Pisos e Revestimentos</p>
              </div>
            </div>
            
            <p className="text-white/90 leading-relaxed">
              Especialistas em pisos cerâmicos, porcelanatos e argamassas. 
              Atendemos lojistas e consumidores finais em Curitiba e região 
              metropolitana com qualidade e agilidade.
            </p>
            
            <button
              onClick={openWhatsApp}
              className="flex items-center space-x-2 bg-brand-green hover:bg-brand-green/90 transition-colors px-4 py-2 rounded-lg font-semibold"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp</span>
            </button>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollToSection(link)}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Nossos Produtos</h4>
            <ul className="space-y-3">
              {products.map((product) => (
                <li key={product} className="text-white/80">
                  {product}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MessageCircle className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">(41) 99619-0069</p>
                  <p className="text-white/80 text-sm">WhatsApp preferencial</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-brand-blue mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">(41) 99619-0069</p>
                  <p className="text-white/80 text-sm">Telefone</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-brand-red mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Curitiba e Região</p>
                  <p className="text-white/80 text-sm">Entrega própria</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Seg-Sex: 8h às 18h</p>
                  <p className="text-white/80 text-sm">Sáb: 8h às 12h</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-white/80">
                © 2024 CD Pisos. Todos os direitos reservados.
              </p>
              <p className="text-white/60 text-sm">
                Pisos cerâmicos, porcelanatos e argamassas em Curitiba
              </p>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-white font-semibold">
                Atendimento em PRIMEIRO LUGAR
              </p>
              <p className="text-white/80 text-sm">
                Qualidade, agilidade e preços justos
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
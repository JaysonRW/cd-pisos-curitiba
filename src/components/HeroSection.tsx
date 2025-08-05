import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

const HeroSection = () => {
  const openWhatsApp = () => {
    window.open("https://wa.me/5541996190069?text=Olá! Estou interessado na Semana de Ofertas da CD Pisos!", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-r from-brand-purple via-brand-blue to-brand-purple overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <div className="inline-block bg-brand-red/20 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                <span className="text-white font-semibold">🔥 Semana de Ofertas</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Pisos Premium
                <span className="block text-brand-blue"> para sua Obra</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 max-w-lg">
                Cerâmicos, Porcelanatos e Argamassas com qualidade garantida e entrega rápida em Curitiba
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={openWhatsApp}
                size="lg"
                className="bg-brand-green hover:bg-brand-green/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-4 text-lg"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Aproveitar Ofertas
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-brand-purple bg-brand-purple text-white hover:bg-brand-purple/90 backdrop-blur-sm px-8 py-4 text-lg"
                onClick={() => document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ver Produtos
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm text-white/80">Produtos</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-2xl font-bold">24h</div>
                <div className="text-sm text-white/80">Entrega</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-2xl font-bold">10+</div>
                <div className="text-sm text-white/80">Anos</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
              <img 
                src="https://i.ibb.co/5hhK12nd/CD-PISOS-OFERTAS-SEMANAIS.jpg" 
                alt="CD Pisos - Ofertas Semanais"
                className="w-full h-auto rounded-lg shadow-lg"
              />
              
              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-brand-red text-white rounded-full px-6 py-3 shadow-lg">
                <div className="text-center">
                  <div className="text-sm font-semibold">Até</div>
                  <div className="text-2xl font-bold">40%</div>
                  <div className="text-sm">OFF</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-12 text-background">
          <path fill="currentColor" d="M0,120L48,110C96,100,192,80,288,70C384,60,480,60,576,65C672,70,768,80,864,85C960,90,1056,90,1152,80C1248,70,1344,50,1392,40L1440,30L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
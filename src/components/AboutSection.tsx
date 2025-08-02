import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Handshake, Target, TrendingUp, CheckCircle } from "lucide-react";

const AboutSection = () => {
  const openWhatsApp = () => {
    window.open("https://wa.me/5541996190069?text=Olá! Gostaria de fazer uma parceria com a CD Pisos!", "_blank");
  };

  const features = [
    {
      icon: <Handshake className="w-8 h-8 text-brand-blue" />,
      title: "Parcerias Estratégicas",
      description: "Focamos em bons negócios que resultem em lucro para sua empresa"
    },
    {
      icon: <Target className="w-8 h-8 text-brand-green" />,
      title: "Preços Justos",
      description: "Eliminamos custos com armazenamento, avarias e pontas de estoque"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-brand-purple" />,
      title: "Fonte de Renda",
      description: "Seja mais uma fonte de rendimentos para sua empresa"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-brand-red" />,
      title: "Qualidade Garantida",
      description: "Melhores produtos do mercado com eficiência e rapidez"
    }
  ];

  return (
    <section id="quem-somos" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-purple mb-6">
            Quem Somos
          </h2>
          <div className="w-24 h-1 bg-brand-blue mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Nossa empresa busca fazer parcerias que resultem em bons negócios, 
            focada em ser mais uma fonte de rendimentos para sua empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-brand-purple mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-brand-purple to-brand-blue rounded-2xl p-8 md:p-12 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Trabalhamos com preços justos, eliminando despesas com armazenamento, 
              avarias, pontas de estoques e com os melhores produtos do mercado, 
              com qualidade, eficiência e rapidez.
            </h3>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <h4 className="text-xl md:text-2xl font-semibold">
                Vamos fechar essa parceria hoje?!
              </h4>
              <Button
                onClick={openWhatsApp}
                size="lg"
                className="bg-brand-green hover:bg-brand-green/90 text-white shadow-lg px-8 py-3"
              >
                <Handshake className="w-5 h-5 mr-2" />
                Fazer Parceria
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
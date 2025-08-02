import { Card } from "@/components/ui/card";
import { Truck, Clock, Package, Users, MapPin, Award } from "lucide-react";

const StructureSection = () => {
  const features = [
    {
      icon: <Truck className="w-12 h-12 text-brand-blue" />,
      title: "Logística Própria",
      description: "Frota própria para entregas rápidas e seguras em Curitiba e região metropolitana",
      highlight: "Entrega Garantida"
    },
    {
      icon: <Clock className="w-12 h-12 text-brand-green" />,
      title: "Agilidade no Atendimento", 
      description: "Resposta rápida via WhatsApp e atendimento personalizado para cada cliente",
      highlight: "24h de Resposta"
    },
    {
      icon: <Package className="w-12 h-12 text-brand-purple" />,
      title: "Estoque Dinâmico",
      description: "Produtos sempre disponíveis sem necessidade de armazenamento por parte do cliente",
      highlight: "Sem Estoque Parado"
    },
    {
      icon: <Users className="w-12 h-12 text-brand-red" />,
      title: "Atendimento Especializado",
      description: "Equipe técnica preparada para orientar lojistas e consumidores finais",
      highlight: "Consultoria Grátis"
    },
    {
      icon: <MapPin className="w-12 h-12 text-brand-blue" />,
      title: "Cobertura Regional",
      description: "Atendemos toda Curitiba e região metropolitana com eficiência",
      highlight: "Grande Curitiba"
    },
    {
      icon: <Award className="w-12 h-12 text-brand-green" />,
      title: "Qualidade Garantida",
      description: "Parcerias exclusivas com as melhores marcas do mercado nacional",
      highlight: "Marcas Premium"
    }
  ];

  return (
    <section id="estrutura" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-purple mb-6">
            Nossa Estrutura
          </h2>
          <div className="w-24 h-1 bg-brand-blue mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Infraestrutura completa para atender suas necessidades com excelência e rapidez
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="relative p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-b from-white to-muted/10">
              {/* Highlight Badge */}
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-brand-purple to-brand-blue text-white px-4 py-1 rounded-full text-xs font-semibold shadow-lg">
                  {feature.highlight}
                </span>
              </div>

              <div className="pt-6">
                <div className="flex justify-center mb-6">
                  {feature.icon}
                </div>
                
                <h3 className="text-xl font-bold text-brand-purple mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="bg-gradient-to-r from-brand-purple via-brand-blue to-brand-green rounded-2xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
              <div className="text-white/90">Produtos Disponíveis</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">24h</div>
              <div className="text-white/90">Entrega Rápida</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">10+</div>
              <div className="text-white/90">Anos de Experiência</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">100%</div>
              <div className="text-white/90">Qualidade Garantida</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StructureSection;
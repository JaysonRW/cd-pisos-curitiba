import { Card } from "@/components/ui/card";
import { Search, MessageCircle, Truck } from "lucide-react";

const HowWeWorkSection = () => {
  const steps = [
    {
      number: "01",
      icon: <Search className="w-8 h-8 text-brand-blue" />,
      title: "Escolha o Produto",
      description: "Navegue pelos nossos produtos ou entre em contato para orientação personalizada sobre qual piso é ideal para seu projeto."
    },
    {
      number: "02", 
      icon: <MessageCircle className="w-8 h-8 text-brand-green" />,
      title: "Entre em Contato",
      description: "Fale conosco pelo WhatsApp ou telefone. Nossa equipe especializada irá tirar todas suas dúvidas e passar o melhor orçamento."
    },
    {
      number: "03",
      icon: <Truck className="w-8 h-8 text-brand-purple" />,
      title: "Receba com Logística Própria",
      description: "Entregamos rapidamente em Curitiba e região metropolitana com nossa frota própria, garantindo agilidade e cuidado."
    }
  ];

  return (
    <section id="como-trabalhamos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-purple mb-6">
            Como Trabalhamos
          </h2>
          <div className="w-24 h-1 bg-brand-blue mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Processo simples e eficiente em apenas 3 passos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="relative p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              {/* Step Number */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-brand-purple to-brand-blue text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg shadow-lg">
                  {step.number}
                </div>
              </div>

              <div className="pt-8">
                <div className="flex justify-center mb-4">
                  {step.icon}
                </div>
                
                <h3 className="text-xl font-bold text-brand-purple mb-4">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector Line (hidden on last item and mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-brand-blue to-brand-purple"></div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
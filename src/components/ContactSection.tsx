import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, Phone, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  const openWhatsApp = () => {
    window.open("https://wa.me/5541996190069?text=Olá! Gostaria de falar com a equipe da CD Pisos!", "_blank");
  };

  const contactInfo = [
    {
      icon: <MessageCircle className="w-8 h-8 text-brand-green" />,
      title: "WhatsApp",
      info: "(41) 99619-0069",
      description: "Atendimento rápido e direto"
    },
    {
      icon: <Phone className="w-8 h-8 text-brand-blue" />,
      title: "Telefone",
      info: "(41) 99619-0069", 
      description: "Ligação direta"
    },
    {
      icon: <MapPin className="w-8 h-8 text-brand-purple" />,
      title: "Região de Atendimento",
      info: "Curitiba e Região Metropolitana",
      description: "Entrega com frota própria"
    },
    {
      icon: <Clock className="w-8 h-8 text-brand-red" />,
      title: "Horário de Atendimento",
      info: "Segunda a Sexta: 8h às 18h",
      description: "Sábado: 8h às 12h"
    }
  ];

  return (
    <section id="contato" className="py-20 bg-gradient-to-b from-background to-brand-purple/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-purple mb-6">
            Contato
          </h2>
          <div className="w-24 h-1 bg-brand-blue mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estamos prontos para atender você com excelência
          </p>
        </div>

        {/* Main CTA */}
        <div className="bg-gradient-to-r from-brand-green to-brand-blue rounded-3xl p-8 md:p-16 text-white text-center mb-16 shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Queremos estar próximos de você!
          </h3>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            O seu atendimento vem em <strong>PRIMEIRO LUGAR</strong>
          </p>
          
          <div className="flex flex-col items-center space-y-6">
            <Button
              onClick={openWhatsApp}
              size="lg"
              className="bg-white text-brand-green hover:bg-white/90 shadow-xl px-12 py-4 text-xl font-semibold"
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              Falar no WhatsApp
            </Button>
            
            <div className="text-center">
              <p className="text-2xl font-bold">(41) 99619-0069</p>
              <p className="text-white/90">Clique no botão acima para atendimento direto</p>
            </div>
          </div>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((contact, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md">
              <div className="flex justify-center mb-4">
                {contact.icon}
              </div>
              <h3 className="font-bold text-brand-purple mb-2">
                {contact.title}
              </h3>
              <p className="font-semibold text-foreground mb-2">
                {contact.info}
              </p>
              <p className="text-sm text-muted-foreground">
                {contact.description}
              </p>
            </Card>
          ))}
        </div>            
      </div>
    </section>
  );
};

export default ContactSection;
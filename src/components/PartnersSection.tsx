import { Card } from "@/components/ui/card";
import partnerKerakoll from "@/assets/partner-kerakoll.jpg";
import partnerCejatel from "@/assets/partner-cejatel.webp";

const PartnersSection = () => {
  const partners = [
    { name: "Kerakoll", logo: partnerKerakoll, description: "Argamassas e produtos técnicos" },
    { name: "Idealle", logo: "", description: "Porcelanatos premium" },
    { name: "Cecafi", logo: "", description: "Pisos cerâmicos" },
    { name: "Pisoforte", logo: "", description: "Revestimentos resistentes" },
    { name: "Fioranno", logo: "", description: "Pisos de alta qualidade" },
    { name: "Cejatel", logo: partnerCejatel, description: "Materiais cerâmicos" }
  ];

  return (
    <section id="parceiros" className="py-20 bg-muted/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-purple mb-6">
            Nossos Parceiros
          </h2>
          <div className="w-24 h-1 bg-brand-blue mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Trabalhamos com as melhores marcas do mercado para garantir qualidade excepcional
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {partners.map((partner, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md bg-white">
              <div className="aspect-square flex items-center justify-center mb-4 bg-muted/20 rounded-lg overflow-hidden">
                {partner.logo ? (
                  <img 
                    src={partner.logo} 
                    alt={`Logo ${partner.name}`}
                    className="w-full h-full object-contain p-2"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-brand-purple to-brand-blue text-white font-bold text-lg">
                    {partner.name}
                  </div>
                )}
              </div>
              <h3 className="font-bold text-brand-purple mb-2">{partner.name}</h3>
              <p className="text-xs text-muted-foreground">{partner.description}</p>
            </Card>
          ))}
        </div>

        {/* Trust Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border-l-4 border-brand-blue">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-brand-purple mb-6">
              Marcas de Confiança, Qualidade Garantida
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Nossas parcerias estratégicas com fabricantes renomados garantem que você tenha acesso 
              aos melhores produtos do mercado, com preços competitivos e qualidade certificada.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-green mb-2">+10</div>
                <div className="text-muted-foreground">Anos de Parceria</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-blue mb-2">100%</div>
                <div className="text-muted-foreground">Produtos Originais</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-purple mb-2">500+</div>
                <div className="text-muted-foreground">Produtos Disponíveis</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
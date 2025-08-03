import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, X, Info, Ruler, Package } from "lucide-react";
import product1 from "@/assets/product-clean-ac.webp";
import product2 from "@/assets/product-lisboa.webp";
import product3 from "@/assets/product-noble.webp";

// Nova URL da imagem de argamassas
const argamassasImage = "https://i.ibb.co/vKs9rTM/Argamassas-Kerakoll.jpg";

const ProductsSection = () => {
  const openWhatsApp = () => {
    window.open("https://wa.me/5541996190069?text=Olá! Gostaria de saber mais sobre os produtos da CD Pisos!", "_blank");
  };

  const products = [
    {
      title: "Pisos Cerâmicos",
      description: "Durabilidade e beleza para todos os ambientes",
      image: product1,
      features: [
        "Resistência superior",
        "Fácil manutenção", 
        "Variedade de designs",
        "Preços competitivos"
      ],
      specs: {
        dimensions: ["45x45cm", "50x50cm", "60x60cm"],
        absorption: "10% a 20%",
        usage: "Ambientes internos e externos",
        coverage: "1,5 a 2,0 peças/m²"
      }
    },
    {
      title: "Porcelanatos",
      description: "Elegância e sofisticação premium",
      image: product2,
      features: [
        "Baixa absorção de água",
        "Resistência a manchas",
        "Acabamento perfeito",
        "Tecnologia avançada"
      ],
      specs: {
        dimensions: ["60x60cm", "90x90cm", "100x100cm", "120x120cm"],
        absorption: "Menos de 0,5%",
        usage: "Todos os ambientes, incluindo externos",
        coverage: "1,1 a 2,8 peças/m²"
      }
    },
    {
      title: "Argamassas",
      description: "Qualidade profissional para fixação",
      image: argamassasImage,
      features: [
        "Aderência garantida",
        "Fácil aplicação",
        "Secagem rápida",
        "Múltiplos usos"
      ],
      specs: {
        types: ["AC-I", "AC-II", "AC-III"],
        coverage: "3,5 a 4,5 m²/saco",
        packaging: "Sacos de 20kg",
        cureTime: "24h para tráfego leve"
      }
    }
  ];

  const notSold = [
    "Pisos Vinílicos",
    "Laminados",
    "Carpetes",
    "Madeira"
  ];

  return (
    <section id="produtos" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-purple mb-6">
            Nossos Produtos e Serviços
          </h2>
          <div className="w-24 h-1 bg-brand-blue mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Especializados em pisos cerâmicos, porcelanatos e argamassas de alta qualidade
          </p>
        </div>

        {/* Main Products */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-brand-purple mb-3">
                  {product.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {product.description}
                </p>

                <Tabs defaultValue="features" className="mb-6">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="features" className="text-xs">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Benefícios
                    </TabsTrigger>
                    <TabsTrigger value="specs" className="text-xs">
                      <Info className="w-3 h-3 mr-1" />
                      Técnico
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="features" className="mt-4">
                    <ul className="space-y-2">
                      {product.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-brand-green mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </TabsContent>
                  
                  <TabsContent value="specs" className="mt-4">
                    <div className="space-y-3 text-sm">
                      {product.title === "Pisos Cerâmicos" && (
                        <>
                          <div className="flex items-start">
                            <Ruler className="w-4 h-4 text-brand-blue mr-2 mt-0.5 flex-shrink-0" />
                            <div>
                              <strong>Dimensões:</strong>
                              <div className="text-muted-foreground">
                                {product.specs.dimensions.join(", ")}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <Package className="w-4 h-4 text-brand-purple mr-2 mt-0.5 flex-shrink-0" />
                            <div>
                              <strong>Absorção:</strong>
                              <div className="text-muted-foreground">{product.specs.absorption}</div>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <Info className="w-4 h-4 text-brand-green mr-2 mt-0.5 flex-shrink-0" />
                            <div>
                              <strong>Uso:</strong>
                              <div className="text-muted-foreground">{product.specs.usage}</div>
                            </div>
                          </div>
                        </>
                      )}
                      
                      {product.title === "Porcelanatos" && (
                        <>
                          <div className="flex items-start">
                            <Ruler className="w-4 h-4 text-brand-blue mr-2 mt-0.5 flex-shrink-0" />
                            <div>
                              <strong>Dimensões:</strong>
                              <div className="text-muted-foreground">
                                {product.specs.dimensions.join(", ")}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <Package className="w-4 h-4 text-brand-purple mr-2 mt-0.5 flex-shrink-0" />
                            <div>
                              <strong>Absorção:</strong>
                              <div className="text-muted-foreground">{product.specs.absorption}</div>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <Info className="w-4 h-4 text-brand-green mr-2 mt-0.5 flex-shrink-0" />
                            <div>
                              <strong>Uso:</strong>
                              <div className="text-muted-foreground">{product.specs.usage}</div>
                            </div>
                          </div>
                        </>
                      )}
                      
                      {product.title === "Argamassas" && (
                        <>
                          <div className="flex items-start">
                            <Package className="w-4 h-4 text-brand-blue mr-2 mt-0.5 flex-shrink-0" />
                            <div>
                              <strong>Tipos:</strong>
                              <div className="text-muted-foreground">
                                {product.specs.types.join(", ")}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <Ruler className="w-4 h-4 text-brand-purple mr-2 mt-0.5 flex-shrink-0" />
                            <div>
                              <strong>Rendimento:</strong>
                              <div className="text-muted-foreground">{product.specs.coverage}</div>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <Info className="w-4 h-4 text-brand-green mr-2 mt-0.5 flex-shrink-0" />
                            <div>
                              <strong>Embalagem:</strong>
                              <div className="text-muted-foreground">{product.specs.packaging}</div>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </TabsContent>
                </Tabs>

                <Button 
                  onClick={openWhatsApp}
                  className="w-full bg-brand-blue hover:bg-brand-blue/90"
                >
                  Solicitar Orçamento
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* What we don't sell */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-brand-red">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-brand-purple mb-4">
              O que NÃO trabalhamos
            </h3>
            <p className="text-muted-foreground">
              Focamos exclusivamente em nossa especialidade para garantir a melhor qualidade
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {notSold.map((item, index) => (
              <div key={index} className="flex items-center justify-center p-4 bg-red-50 rounded-lg">
                <X className="w-5 h-5 text-brand-red mr-2" />
                <span className="text-brand-red font-medium">{item}</span>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-brand-purple font-semibold">
              Nossa especialização garante preços melhores e atendimento expert!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
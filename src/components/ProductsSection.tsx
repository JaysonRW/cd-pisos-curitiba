import { useState, useCallback } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, X, Info, Ruler, Package, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SearchBar from "@/components/SearchBar";
import product1 from "@/assets/product-trentino.jpg";
import product2 from "@/assets/product-lisboa.webp";

// Nova URL da imagem de argamassas
const argamassasImage = "https://i.ibb.co/vKs9rTM/Argamassas-Kerakoll.jpg";

const ProductsSection = () => {
  const navigate = useNavigate();
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);

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

  const handleSearchResults = useCallback((results: any[]) => {
    setFilteredProducts(results);
  }, []);

  const displayProducts = filteredProducts.length > 0 ?
    filteredProducts.map((fp: any) => fp.originalProduct || fp) :
    products;

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

        {/* SearchBar para produtos */}
        <div className="mb-12 max-w-4xl mx-auto">
          <SearchBar 
            products={products} 
            onResults={handleSearchResults}
          />
        </div>

        {/* Main Products */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {displayProducts.map((product: any, index: number) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-brand-purple mb-3">{product.title}</h3>
                <p className="text-muted-foreground mb-6">{product.description}</p>
                
                <Tabs defaultValue="features" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="features">Características</TabsTrigger>
                    <TabsTrigger value="specs">Especificações</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="features" className="mt-4">
                    <div className="space-y-3">
                      {product.features.map((feature: string, idx: number) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-brand-green mr-2 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="specs" className="mt-4">
                    <div className="space-y-3 text-sm">
                      {product.specs.dimensions && (
                        <div className="flex items-start">
                          <Ruler className="w-4 h-4 text-brand-purple mr-2 mt-0.5 flex-shrink-0" />
                          <div>
                            <strong>Dimensões:</strong>
                            <div className="text-muted-foreground">{product.specs.dimensions.join(", ")}</div>
                          </div>
                        </div>
                      )}
                      {product.specs.absorption && (
                        <div className="flex items-start">
                          <Info className="w-4 h-4 text-brand-blue mr-2 mt-0.5 flex-shrink-0" />
                          <div>
                            <strong>Absorção:</strong>
                            <div className="text-muted-foreground">{product.specs.absorption}</div>
                          </div>
                        </div>
                      )}
                      {product.specs.usage && (
                        <div className="flex items-start">
                          <Package className="w-4 h-4 text-brand-green mr-2 mt-0.5 flex-shrink-0" />
                          <div>
                            <strong>Uso:</strong>
                            <div className="text-muted-foreground">{product.specs.usage}</div>
                          </div>
                        </div>
                      )}
                      {product.specs.coverage && (
                        <div className="flex items-start">
                          <Package className="w-4 h-4 text-brand-blue mr-2 mt-0.5 flex-shrink-0" />
                          <div>
                            <strong>Cobertura:</strong>
                            <div className="text-muted-foreground">{product.specs.coverage}</div>
                          </div>
                        </div>
                      )}
                      {product.specs.types && (
                        <div className="flex items-start">
                          <Info className="w-4 h-4 text-brand-purple mr-2 mt-0.5 flex-shrink-0" />
                          <div>
                            <strong>Tipos:</strong>
                            <div className="text-muted-foreground">{product.specs.types.join(", ")}</div>
                          </div>
                        </div>
                      )}
                    </div>
                  </TabsContent>
                </Tabs>
                
                <Button 
                  onClick={openWhatsApp}
                  className="w-full mt-6 bg-brand-green hover:bg-brand-green/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Solicitar Orçamento
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Ver Mais Produtos Button */}
        <div className="text-center mb-16">
          <Button 
            onClick={() => navigate("/produtos")}
            size="lg"
            className="bg-brand-green hover:bg-brand-green/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-4 text-lg"
          >
            <Package className="w-5 h-5 mr-2" />
            Ver Todos os Produtos
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto">
            Explore nossa linha completa com mais de 20 opções de pisos e argamassas Kerakoll
          </p>
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
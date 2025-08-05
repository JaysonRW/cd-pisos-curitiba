import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, MessageCircle, Package, Ruler, Droplets } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AllProductsPage = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("pisos");

  const openWhatsApp = (productName: string) => {
    const message = `Olá! Gostaria de solicitar um orçamento para: ${productName}`;
    window.open(`https://wa.me/5541996190069?text=${encodeURIComponent(message)}`, "_blank");
  };

  const pisos = [
    { name: "Clean AC RT", image: "https://i.ibb.co/1GYzP8xk/clean-ac-rt.webp", size: "45x45cm", type: "Cerâmico" },
    { name: "Lisboa PO RT", image: "https://i.ibb.co/S420J8M1/lisboa-po-rt.webp", size: "60x60cm", type: "Porcelanato" },
    { name: "Noble", image: "https://i.ibb.co/ZzJPvc7j/noble.webp", size: "60x60cm", type: "Porcelanato" },
    { name: "Espanha", image: "https://i.ibb.co/ttb6bc7/espanha.webp", size: "45x45cm", type: "Cerâmico" },
    { name: "Chicago AC RT", image: "https://i.ibb.co/4R7kR7St/chicago-ac-rt.webp", size: "45x45cm", type: "Cerâmico" },
    { name: "Varena Soft RT", image: "https://i.ibb.co/cSvzS3Bk/varena-soft-rt.webp", size: "60x60cm", type: "Porcelanato" },
    { name: "Lodz Rustic Plus RT", image: "https://i.ibb.co/4ZM2HfPQ/lodz-rustic-plus-rt.webp", size: "60x60cm", type: "Porcelanato" },
    { name: "Albury AC RT", image: "https://i.ibb.co/1Gs8xDkm/albury-ac-rt.webp", size: "45x45cm", type: "Cerâmico" },
    { name: "Branco Neve Soft RT", image: "https://i.ibb.co/MWYTrbn/branco-neve-soft-rt.webp", size: "60x60cm", type: "Porcelanato" },
    { name: "Cintra Bege Plus AC RT", image: "https://i.ibb.co/M5pt5PFv/cintra-bege-plus-ac-rt.webp", size: "45x45cm", type: "Cerâmico" },
    { name: "Nobium Plus", image: "https://i.ibb.co/JRtBspJb/nobium-plus.webp", size: "60x60cm", type: "Porcelanato" },
    { name: "Chicago Plus", image: "https://i.ibb.co/whwbQ2hv/chicago-plus.webp", size: "60x60cm", type: "Porcelanato" },
    { name: "Piazza Plus", image: "https://i.ibb.co/h11WDw7K/piazza-plus.webp", size: "60x60cm", type: "Porcelanato" },
    { name: "Trentino Plus RT", image: "https://i.ibb.co/rfF8X6Bj/trentino-plus-rt.webp", size: "60x60cm", type: "Porcelanato" },
    { name: "London Gray", image: "https://i.ibb.co/PzPD4jhm/london-gray.webp", size: "60x60cm", type: "Porcelanato" },
    { name: "Croata Bege Plus", image: "https://i.ibb.co/93W5bRbv/croata-bege-plus.webp", size: "60x60cm", type: "Porcelanato" },
    { name: "Nexis", image: "https://i.ibb.co/84MtVBC6/nexis.webp", size: "60x60cm", type: "Porcelanato" },
    { name: "Nivus", image: "https://i.ibb.co/1JvBbqyD/nivus.webp", size: "60x60cm", type: "Porcelanato" },
    { name: "Elegance Plus RT", image: "https://i.ibb.co/twbkqwWv/elegance-plus-rt.webp", size: "60x60cm", type: "Porcelanato" },
    { name: "Ares Gray Ambiente", image: "https://i.ibb.co/8gpY6ry8/ares-gray-ambiente.webp", size: "60x60cm", type: "Porcelanato" },
    { name: "Ares Gray", image: "https://i.ibb.co/WWGN24Y8/ares-gray.webp", size: "60x60cm", type: "Porcelanato" }
  ];

  const argamassas = [
    { name: "Kerakoll Polivalente Pro", image: "https://i.ibb.co/9m1mGtwG/Kerakoll-COMP-Polivalente-Pro-BR-24.jpg", size: "20kg", type: "AC-II" },
    { name: "Kerakoll Polivalente 7em1", image: "https://i.ibb.co/KcQP6J1B/Kerakoll-Polivalente-7em1-BR-24.jpg", size: "20kg", type: "AC-I" },
    { name: "Kerakoll Polivalente Super", image: "https://i.ibb.co/gMrq85YR/Kerakoll-COMP-Polivalente-Super-BR-24.jpg", size: "20kg", type: "AC-III" },
    { name: "Kerakoll Assenta Flex Extra Plus", image: "https://i.ibb.co/CsS0QnLj/Kerakoll-Assenta-Flex-Extra-Plus-BR-24.jpg", size: "20kg", type: "AC-III" },
    { name: "Kerakoll Assenta Flex Extra", image: "https://i.ibb.co/QjbmCprJ/Kerakoll-Assenta-Flex-Extra-BR-24.jpg", size: "20kg", type: "AC-II" },
    { name: "Kerakoll Assenta Bem", image: "https://i.ibb.co/pBLZndgY/Kerakoll-Assenta-Bem-BR-24.jpg", size: "20kg", type: "AC-I" }
  ];

  const filteredPisos = selectedCategory === "ceramicos" 
    ? pisos.filter(p => p.type === "Cerâmico")
    : selectedCategory === "porcelanatos"
    ? pisos.filter(p => p.type === "Porcelanato")
    : pisos;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-brand-purple to-brand-blue text-white py-16">
        <div className="container mx-auto px-4">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="text-white hover:bg-white/10 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar ao Início
          </Button>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Todos os Nossos Produtos
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Explore nossa linha completa de pisos cerâmicos, porcelanatos e argamassas Kerakoll
          </p>
        </div>
      </div>

      {/* Products Section */}
      <div className="container mx-auto px-4 py-16">
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="pisos">Todos os Pisos</TabsTrigger>
            <TabsTrigger value="ceramicos">Cerâmicos</TabsTrigger>
            <TabsTrigger value="porcelanatos">Porcelanatos</TabsTrigger>
          </TabsList>

          <TabsContent value="pisos" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {pisos.map((produto, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={produto.image} 
                      alt={produto.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-brand-purple mb-2">{produto.name}</h3>
                    <div className="flex items-center text-sm text-muted-foreground mb-2">
                      <Package className="w-4 h-4 mr-1" />
                      {produto.type}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground mb-4">
                      <Ruler className="w-4 h-4 mr-1" />
                      {produto.size}
                    </div>
                    <Button 
                      onClick={() => openWhatsApp(produto.name)}
                      className="w-full bg-brand-green hover:bg-brand-green/90"
                      size="sm"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Solicitar Orçamento
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="ceramicos" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredPisos.map((produto, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={produto.image} 
                      alt={produto.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-brand-purple mb-2">{produto.name}</h3>
                    <div className="flex items-center text-sm text-muted-foreground mb-2">
                      <Package className="w-4 h-4 mr-1" />
                      {produto.type}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground mb-4">
                      <Ruler className="w-4 h-4 mr-1" />
                      {produto.size}
                    </div>
                    <Button 
                      onClick={() => openWhatsApp(produto.name)}
                      className="w-full bg-brand-green hover:bg-brand-green/90"
                      size="sm"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Solicitar Orçamento
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="porcelanatos" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredPisos.map((produto, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={produto.image} 
                      alt={produto.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-brand-purple mb-2">{produto.name}</h3>
                    <div className="flex items-center text-sm text-muted-foreground mb-2">
                      <Package className="w-4 h-4 mr-1" />
                      {produto.type}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground mb-4">
                      <Ruler className="w-4 h-4 mr-1" />
                      {produto.size}
                    </div>
                    <Button 
                      onClick={() => openWhatsApp(produto.name)}
                      className="w-full bg-brand-green hover:bg-brand-green/90"
                      size="sm"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Solicitar Orçamento
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Argamassas Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-purple mb-4">
              Argamassas Kerakoll
            </h2>
            <div className="w-24 h-1 bg-brand-blue mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Linha completa de argamassas profissionais para fixação de pisos e revestimentos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {argamassas.map((argamassa, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={argamassa.image} 
                    alt={argamassa.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-brand-purple mb-2">{argamassa.name}</h3>
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <Droplets className="w-4 h-4 mr-1" />
                    Classificação: {argamassa.type}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <Package className="w-4 h-4 mr-1" />
                    Embalagem: {argamassa.size}
                  </div>
                  <Button 
                    onClick={() => openWhatsApp(argamassa.name)}
                    className="w-full bg-brand-green hover:bg-brand-green/90"
                    size="sm"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Solicitar Orçamento
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProductsPage;
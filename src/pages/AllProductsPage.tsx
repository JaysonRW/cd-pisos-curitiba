import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, MessageCircle, Package, Ruler, Droplets } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ProductModal from "@/components/ProductModal";

const AllProductsPage = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openWhatsApp = (productName: string) => {
    const message = `Olá! Gostaria de solicitar um orçamento para: ${productName}`;
    window.open(`https://wa.me/5541996190069?text=${encodeURIComponent(message)}`, "_blank");
  };

  // Informações detalhadas das argamassas
  const argamassasDetails = {
    "Kerakoll Polivalente 7em1": {
      title: "Polivalente 7 em 1",
      description: "Argamassa colante multiuso para grandes formatos em assentamento e piso sobre piso de porcelanatos, cerâmicas, pedras naturais e pastilhas.",
      features: [
        "Assentamento e sobreposição (piso sobre piso) de peças até 160x160 cm",
        "Secagem rápida: 24 horas para rejuntar",
        "Fachadas até 15 metros de altura",
        "Piscinas frias e aquecidas",
        "Pisos, paredes e drywall"
      ]
    },
    "Kerakoll Assenta Bem": {
      title: "AssentaBem",
      description: "Argamassa colante flexível para cerâmicas em áreas internas.",
      features: [
        "Assentamento de peças até 90x90 cm",
        "Secagem rápida: 24 horas para rejuntar",
        "Pisos e paredes",
        "Áreas internas"
      ]
    },
    "Kerakoll Assenta Flex Extra": {
      title: "AssentaFlex Extra",
      description: "Argamassa colante flexível para cerâmicas e pedras naturais em áreas internas e externas.",
      features: [
        "Assentamento de peças até 100x100 cm",
        "Secagem rápida: 24 horas para rejuntar",
        "Pisos e paredes",
        "Áreas internas e externas"
      ]
    },
    "Kerakoll Assenta Flex Extra Plus": {
      title: "AssentaFlex Extra+",
      description: "Argamassa colante flexível para porcelanatos, cerâmicas, pedras naturais e pastilhas em áreas internas e externas.",
      features: [
        "Assentamento de peças até 120x120 cm",
        "Secagem rápida: 24 horas para rejuntar",
        "Fachadas até 6 metros de altura",
        "Piscinas não aquecidas",
        "Pisos, paredes e drywall"
      ]
    },
    "Kerakoll Polivalente Super": {
      title: "Polivalente Super",
      description: "Argamassa colante ACIII para super formatos e uso de alto desempenho com porcelanatos, cerâmicas, pedras naturais e pastilhas.",
      features: [
        "Assentamento e sobreposição (piso sobre piso) de peças até 180x180 cm",
        "Secagem super rápida: 16 horas para rejuntar",
        "Fachadas até 60 metros de altura",
        "Churrasqueiras, piscinas e saunas",
        "Pisos, paredes e drywall"
      ]
    },
    "Kerakoll Polivalente Pro": {
      title: "Polivalente Pro",
      description: "Argamassa colante ACIII‑DE sem limite de formatos, tempo em aberto estendido e uso de alto desempenho em assentamentos e piso sobre piso.",
      features: [
        "Assentamento e sobreposição (piso sobre piso) sem limite de formato",
        "Secagem rápida: 48 horas para rejuntar",
        "Fachadas até 60 metros de altura",
        "Churrasqueiras, piscinas e saunas",
        "Pisos normais e aquecidos, paredes e drywall",
        "Tempo em aberto estendido",
        "Deslizamento reduzido"
      ]
    }
  };

  const openProductModal = (product: any) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  // Revestimentos Cerâmicos (31x59, 32x57, 38x75)
  const revestimentos = [
    { name: "Asturias", image: "https://i.ibb.co/JRx0P66Y/asturias-31x59.jpg", size: "31x59cm", type: "Revestimento" },
    { name: "Arenisca Beige", image: "https://i.ibb.co/rGN6qcMw/Arenisca-beige-31-X59.webp", size: "31x59cm", type: "Revestimento" },
    { name: "Arenisca Gray", image: "https://i.ibb.co/Cs0TqZVS/arenisca-gray-31x59.webp", size: "31x59cm", type: "Revestimento" },
    { name: "Carrara", image: "https://i.ibb.co/wN358MkG/Carrara-31x59.webp", size: "31x59cm", type: "Revestimento" },
    { name: "Alaska", image: "https://i.ibb.co/0W0vSHh/alaska-32x57.webp", size: "32x57cm", type: "Revestimento" },
    { name: "Menfi Beige Plus", image: "https://i.ibb.co/Zz3yVrdC/menfi-beige-plus-38x75.webp", size: "38x75cm", type: "Revestimento" },
    { name: "Menfi Grigio Plus", image: "https://i.ibb.co/jPXGq2xw/menfi-grigio-plus-38x75.webp", size: "38x75cm", type: "Revestimento" }
  ];

  // Pisos Cerâmicos (demais tamanhos)
  const ceramicos = [
    { name: "Doha Lux", image: "https://i.ibb.co/r2ZB1b0x/DOHA-LUX-68x68.webp", size: "68x68cm", type: "Cerâmico" },
    { name: "Copacabana Gris", image: "https://i.ibb.co/5W2Ltxzh/copacabana-gris-50x50.jpg", size: "50x50cm", type: "Cerâmico" },
    { name: "Arenisca Bege", image: "https://i.ibb.co/XZfMtqqs/ARENISCA-BEGE-50x50.webp", size: "50x50cm", type: "Cerâmico" },
    { name: "Arenisca Gray", image: "https://i.ibb.co/RGtg5mvp/ARENISCA-GRAY-50x50.webp", size: "50x50cm", type: "Cerâmico" },
    { name: "Carrara", image: "https://i.ibb.co/QvmqkzmK/Carrara-50x50.webp", size: "50x50cm", type: "Cerâmico" },
    { name: "Laser", image: "https://i.ibb.co/nsCwskwL/LASER-50x50.webp", size: "50x50cm", type: "Cerâmico" },
    { name: "Doha White", image: "https://i.ibb.co/K3p7nSb/DOHA-WHITE-53x53.webp", size: "53x53cm", type: "Cerâmico" },
    { name: "Portland Out Gray", image: "https://i.ibb.co/ymQj7rX1/PORTLAND-OUT-GRAY-53x53.jpg", size: "53x53cm", type: "Cerâmico" },
    { name: "Portland Gray", image: "https://i.ibb.co/8qJ175y/PORTALND-GRAY-53x53.jpg", size: "53x53cm", type: "Cerâmico" },
    { name: "Basalto Beige", image: "https://i.ibb.co/6RM8zp2q/Basalto-Beige-50x50.webp", size: "50x50cm", type: "Cerâmico" },
    { name: "Asphalt Plus", image: "https://i.ibb.co/N6Qy2g6M/asphalt-plus-62x62.webp", size: "62x62cm", type: "Cerâmico" },
    { name: "Pompeia Marrom", image: "https://i.ibb.co/Kpj9stjz/pompeia-marrom-50x50.webp", size: "50x50cm", type: "Cerâmico" }
  ];

  // Porcelanatos
  const porcelanatos = [
    { name: "Porcelanato Paglia", image: "https://i.ibb.co/yBmf1Xjk/porcelanato-paglia-63x63.jpg", size: "63x63cm", type: "Porcelanato" },
    { name: "Porcelanato Xingu Polido", image: "https://i.ibb.co/d0q000wq/porcelanato-xingu-polido-71x71.jpg", size: "71x71cm", type: "Porcelanato" },
    { name: "Porcelanato Piguês Polido", image: "https://i.ibb.co/N2Y9MqJL/porcelanato-pigu-s-polido-71x71.jpg", size: "71x71cm", type: "Porcelanato" },
    { name: "Porcelanato Alvorada Bege", image: "https://i.ibb.co/3mfQLxtH/porcelanato-alvorada-bege-35x71.jpg", size: "35x71cm", type: "Porcelanato" },
    { name: "Porcelanato Unique Bege", image: "https://i.ibb.co/ghmvm43/porcelanato-unique-bege-70x70.jpg", size: "70x70cm", type: "Porcelanato" },
    { name: "Porcelanato Manila", image: "https://i.ibb.co/xSgkmQ7j/porcelanato-manila-63x63.jpg", size: "63x63cm", type: "Porcelanato" },
    { name: "Porcelanato Montreal Cement", image: "https://i.ibb.co/tT0cp6Mx/porcelanato-montreal-cement-53x106.jpg", size: "53x106cm", type: "Porcelanato" }
  ];

  // Todos os pisos (cerâmicos + porcelanatos)
  const todosPisos = [...ceramicos, ...porcelanatos];

  // Argamassas
  const argamassas = [
    { name: "Kerakoll Polivalente Pro", image: "https://i.ibb.co/9m1mGtwG/Kerakoll-COMP-Polivalente-Pro-BR-24.jpg", size: "20kg", type: "AC-II" },
    { name: "Kerakoll Polivalente 7em1", image: "https://i.ibb.co/KcQP6J1B/Kerakoll-Polivalente-7em1-BR-24.jpg", size: "20kg", type: "AC-I" },
    { name: "Kerakoll Polivalente Super", image: "https://i.ibb.co/gMrq85YR/Kerakoll-COMP-Polivalente-Super-BR-24.jpg", size: "20kg", type: "AC-III" },
    { name: "Kerakoll Assenta Flex Extra Plus", image: "https://i.ibb.co/CsS0QnLj/Kerakoll-Assenta-Flex-Extra-Plus-BR-24.jpg", size: "20kg", type: "AC-II" },
    { name: "Kerakoll Assenta Flex Extra", image: "https://i.ibb.co/QjbmCprJ/Kerakoll-Assenta-Flex-Extra-BR-24.jpg", size: "20kg", type: "AC-II" },
    { name: "Kerakoll Assenta Bem", image: "https://i.ibb.co/pBLZndgY/Kerakoll-Assenta-Bem-BR-24.jpg", size: "20kg", type: "AC-I" }
  ];

  const getCurrentProducts = () => {
    switch (selectedCategory) {
      case "ceramicos":
        return ceramicos;
      case "revestimentos":
        return revestimentos;
      case "porcelanatos":
        return porcelanatos;
      case "argamassas":
        return argamassas;
      default:
        return todosPisos;
    }
  };

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
            Catálogo Completo de Produtos
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Explore nossa linha completa de pisos cerâmicos, revestimentos, porcelanatos e argamassas Kerakoll
          </p>
        </div>
      </div>

      {/* Products Section */}
      <div className="container mx-auto px-4 py-16">
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="todos">Todos os Pisos</TabsTrigger>
            <TabsTrigger value="ceramicos">Cerâmicos</TabsTrigger>
            <TabsTrigger value="revestimentos">Revestimentos</TabsTrigger>
            <TabsTrigger value="porcelanatos">Porcelanatos</TabsTrigger>
          </TabsList>

          <TabsContent value="todos" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-brand-purple mb-2">
                Todos os Nossos Pisos
              </h2>
              <p className="text-muted-foreground">
                {todosPisos.length} produtos disponíveis entre cerâmicos e porcelanatos
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {getCurrentProducts().map((produto, index) => (
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
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-brand-purple mb-2">
                Pisos Cerâmicos
              </h2>
              <p className="text-muted-foreground">
                {ceramicos.length} produtos cerâmicos para pisos com excelente custo-benefício
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {getCurrentProducts().map((produto, index) => (
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

          <TabsContent value="revestimentos" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-brand-purple mb-2">
                Revestimentos Cerâmicos
              </h2>
              <p className="text-muted-foreground">
                {revestimentos.length} produtos cerâmicos ideais para revestimento de paredes
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {getCurrentProducts().map((produto, index) => (
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
                  <div className="flex gap-2">
                    <Button
                      onClick={() => openProductModal(argamassa)}
                      variant="outline"
                      className="flex-1 border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white"
                      size="sm"
                    >
                      Ver Detalhes
                    </Button>
                    <Button
                      onClick={() => openWhatsApp(argamassa.name)}
                      className="flex-1 bg-brand-green hover:bg-brand-green/90"
                      size="sm"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Orçamento
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Modal de detalhes do produto */}
      {selectedProduct && (
        <ProductModal
          isOpen={isModalOpen}
          onClose={closeModal}
          product={selectedProduct}
          productDetails={argamassasDetails[selectedProduct.name as keyof typeof argamassasDetails]}
        />
      )}
    </div>
  );
};

export default AllProductsPage;
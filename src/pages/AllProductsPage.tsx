import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, MessageCircle, Package, Ruler } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ProductModal from "@/components/ProductModal";
import SearchBar from "@/components/SearchBar";

const AllProductsPage = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);

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
    // Se o produto tem informações detalhadas (como argamassas), separar os dados
    const hasDetails = product.title && product.description && product.features;

    if (hasDetails) {
      // Produto com detalhes (argamassas)
      const productData = {
        name: product.name,
        image: product.image,
        size: product.size,
        type: product.type
      };

      const productDetails = {
        title: product.title,
        description: product.description,
        features: product.features
      };

      setSelectedProduct({ ...productData, productDetails });
    } else {
      // Produto simples (cerâmicos, porcelanatos)
      setSelectedProduct(product);
    }

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
    { name: "Menfi Grigio Plus", image: "https://i.ibb.co/jPXGq2xw/menfi-grigio-plus-38x75.webp", size: "38x75cm", type: "Revestimento" },
    { name: "Elegance", image: "https://i.ibb.co/zVzMf1Hd/revestimento-elegance-32x60.png", size: "32x60cm", type: "Revestimento" },
    { name: "Decorare", image: "https://i.ibb.co/qYFrv42X/Decorare-32x60.png", size: "32x60cm", type: "Revestimento" },
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
    { name: "Pompeia Marrom", image: "https://i.ibb.co/Kpj9stjz/pompeia-marrom-50x50.webp", size: "50x50cm", type: "Cerâmico" },
    { name: "Linz", image: "https://i.ibb.co/XrPhX7NJ/Piso-Cer-mico-Linz-50x50.png", size: "50x50cm", type: "Cerâmico" },
    { name: "Noble", image: "https://i.ibb.co/Q3NzvsCZ/Piso-Cer-mico-Noble-57x57.png", size: "50x50cm", type: "Cerâmico" },
    { name: "Espanha", image: "https://i.ibb.co/gLH0NDGX/Piso-Cer-mico-Espanha-57x57.png", size: "50x50cm", type: "Cerâmico" },
    { name: "Selena Cinza", image: "https://i.ibb.co/bgSzmHhD/CD-Pisos-Selena-Cinza.jpg", size: "57x57cm", type: "Cerâmico" },
    { name: "Stone", image: "https://i.ibb.co/tMdFpdyf/CD-Pisos-Stone.jpg", size: "50x50cm", type: "Cerâmico" },

    
    
  ];

  // Porcelanatos
  const porcelanatos = [
    { name: "Paglia", image: "https://i.ibb.co/yBmf1Xjk/porcelanato-paglia-63x63.jpg", size: "63x63cm", type: "Porcelanato" },
    { name: "Xingu Polido", image: "https://i.ibb.co/d0q000wq/porcelanato-xingu-polido-71x71.jpg", size: "71x71cm", type: "Porcelanato" },
    { name: "Piguês Polido", image: "https://i.ibb.co/N2Y9MqJL/porcelanato-pigu-s-polido-71x71.jpg", size: "71x71cm", type: "Porcelanato" },
    { name: "Alvorada Bege", image: "https://i.ibb.co/3mfQLxtH/porcelanato-alvorada-bege-35x71.jpg", size: "35x71cm", type: "Porcelanato" },
    { name: "Unique Bege", image: "https://i.ibb.co/ghmvm43/porcelanato-unique-bege-70x70.jpg", size: "70x70cm", type: "Porcelanato" },
    { name: "Manila", image: "https://i.ibb.co/xSgkmQ7j/porcelanato-manila-63x63.jpg", size: "63x63cm", type: "Porcelanato" },
    { name: "Montreal Cement", image: "https://i.ibb.co/tT0cp6Mx/porcelanato-montreal-cement-53x106.jpg", size: "53x106cm", type: "Porcelanato" },
    { name: "Campania Stone", image: "https://i.ibb.co/b5vnNK7g/Campania-72x72.png", size: "72x72cm", type: "Porcelanato" },
    { name: "Soft Gr", image: "https://i.ibb.co/0pfKgwVx/Soft-Gr-72x72.png", size: "72x72cm", type: "Porcelanato" },
    { name: "Vesuvio", image: "https://i.ibb.co/VcJKM3zv/Vesuvio-61x61.png", size: "61x61cm", type: "Porcelanato" },
    { name: "Unique", image: "https://i.ibb.co/ynFqxZP7/Unique-70x70.png", size: "70x70cm", type: "Porcelanato" },
    { name: "Arpuoador", image: "https://i.ibb.co/LhS2jxJz/Arpoador-70x70.png", size: "70x70cm", type: "Porcelanato" },

  ];

  // Todos os pisos (cerâmicos + porcelanatos)
  const todosPisos = [...ceramicos, ...porcelanatos];

  // Argamassas
  const argamassas = [
    { name: "Kerakoll Polivalente Pro", image: "https://i.ibb.co/9m1mGtwG/Kerakoll-COMP-Polivalente-Pro-BR-24.jpg", size: "20kg", type: "Argamassa" },
    { name: "Kerakoll Polivalente 7em1", image: "https://i.ibb.co/KcQP6J1B/Kerakoll-Polivalente-7em1-BR-24.jpg", size: "20kg", type: "Argamassa" },
    { name: "Kerakoll Polivalente Super", image: "https://i.ibb.co/gMrq85YR/Kerakoll-COMP-Polivalente-Super-BR-24.jpg", size: "20kg", type: "Argamassa" },
    { name: "Kerakoll Assenta Flex Extra Plus", image: "https://i.ibb.co/CsS0QnLj/Kerakoll-Assenta-Flex-Extra-Plus-BR-24.jpg", size: "20kg", type: "Argamassa" },
    { name: "Kerakoll Assenta Flex Extra", image: "https://i.ibb.co/QjbmCprJ/Kerakoll-Assenta-Flex-Extra-BR-24.jpg", size: "20kg", type: "Argamassa" },
    { name: "Kerakoll Assenta Bem", image: "https://i.ibb.co/pBLZndgY/Kerakoll-Assenta-Bem-BR-24.jpg", size: "20kg", type: "Argamassa" }
  ];

  // Transformar produtos em formato compatível com SearchBar
  const transformProductsForSearch = (products: any[]) => {
    return products.map(product => ({
      title: product.name,
      description: product.type === "Argamassa" ? 
        (argamassasDetails[product.name as keyof typeof argamassasDetails]?.description || "Argamassa de alta qualidade") :
        `${product.type} de alta qualidade`,
      features: product.type === "Argamassa" ? 
        (argamassasDetails[product.name as keyof typeof argamassasDetails]?.features || []) :
        ["Resistência superior", "Fácil manutenção", "Acabamento perfeito"],
      specs: {
        dimensions: [product.size],
        absorption: product.type === "Porcelanato" ? "Menos de 0,5%" : 
                   product.type === "Cerâmico" ? "10% a 20%" : undefined,
        usage: product.type === "Revestimento" ? "Paredes internas" :
               product.type === "Porcelanato" ? "Todos os ambientes" :
               product.type === "Cerâmico" ? "Ambientes internos e externos" :
               "Assentamento de pisos e revestimentos",
        coverage: product.type === "Argamassa" ? "3,5 a 4,5 m²/saco" : "1,1 a 2,8 peças/m²"
      },
      originalProduct: product
    }));
  };

  // Todos os produtos para o SearchBar
  const allProducts = transformProductsForSearch([...todosPisos, ...revestimentos, ...argamassas]);

  const handleSearchResults = useCallback((results: any[]) => {
    setFilteredProducts(results);
  }, []);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    // Limpar a busca quando mudar de categoria para que as abas funcionem corretamente
    setFilteredProducts([]);
  };

  const getCurrentProducts = () => {
    // Se há produtos filtrados pela busca, filtrar também por categoria se não for "todos"
    if (filteredProducts.length > 0) {
      const searchResults = filteredProducts.map(p => p.originalProduct);

      // Se a categoria selecionada não for "todos", filtrar os resultados da busca por categoria
      if (selectedCategory !== "todos") {
        return searchResults.filter(product => {
          switch (selectedCategory) {
            case "ceramicos":
              return product.type === "Cerâmico";
            case "revestimentos":
              return product.type === "Revestimento";
            case "porcelanatos":
              return product.type === "Porcelanato";
            case "argamassas":
              return product.type === "Argamassa";
            default:
              return true;
          }
        });
      }

      return searchResults;
    }

    // Caso contrário, usar filtro por categoria
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
        return [...todosPisos, ...revestimentos, ...argamassas];
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
        {/* SearchBar */}
        <div className="mb-8">
          <SearchBar 
            products={allProducts} 
            onResults={handleSearchResults}
          />
        </div>

        <Tabs value={selectedCategory} onValueChange={handleCategoryChange} className="w-full">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 mb-8 h-auto gap-1 p-1">
            <TabsTrigger value="todos" className="text-xs sm:text-sm px-2 py-2">Todos</TabsTrigger>
            <TabsTrigger value="ceramicos" className="text-xs sm:text-sm px-2 py-2">Cerâmicos</TabsTrigger>
            <TabsTrigger value="revestimentos" className="text-xs sm:text-sm px-2 py-2">Revestimentos</TabsTrigger>
            <TabsTrigger value="porcelanatos" className="text-xs sm:text-sm px-2 py-2">Porcelanatos</TabsTrigger>
            <TabsTrigger value="argamassas" className="text-xs sm:text-sm px-2 py-2">Argamassas</TabsTrigger>
          </TabsList>

          <TabsContent value="todos" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-brand-purple mb-2">
                {filteredProducts.length > 0 ? "Resultados da Busca" : "Todos os Nossos Produtos"}
              </h2>
              <p className="text-muted-foreground">
                {getCurrentProducts().length} produtos {filteredProducts.length > 0 ? "encontrados" : "disponíveis"}
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
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Button
                        onClick={() => openWhatsApp(produto.name)}
                        className="flex-1 bg-brand-green hover:bg-brand-green/90 text-xs sm:text-sm"
                        size="sm"
                      >
                        <MessageCircle className="w-4 h-4 mr-1 sm:mr-2" />
                        Orçamento
                      </Button>
                      {produto.type === "Argamassa" && argamassasDetails[produto.name as keyof typeof argamassasDetails] && (
                        <Button
                          onClick={() => openProductModal({
                            ...produto,
                            ...argamassasDetails[produto.name as keyof typeof argamassasDetails]
                          })}
                          variant="outline"
                          size="sm"
                          className="text-xs sm:text-sm"
                        >
                          <Package className="w-4 h-4 mr-1 sm:mr-0" />
                          <span className="sm:hidden">Detalhes</span>
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            {getCurrentProducts().length === 0 && (
              <div className="text-center py-12">
                <Package className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-muted-foreground mb-2">
                  Nenhum produto encontrado
                </h3>
                <p className="text-muted-foreground">
                  Tente ajustar os filtros ou termo de busca
                </p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="ceramicos" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-brand-purple mb-2">
                Pisos Cerâmicos
              </h2>
              <p className="text-muted-foreground">
                {getCurrentProducts().length} produtos cerâmicos para pisos com excelente custo-benefício
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
                {getCurrentProducts().length} produtos para revestimento de paredes
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

          <TabsContent value="porcelanatos" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-brand-purple mb-2">
                Porcelanatos
              </h2>
              <p className="text-muted-foreground">
                {getCurrentProducts().length} produtos porcelanatos premium
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

          <TabsContent value="argamassas" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-brand-purple mb-2">
                Argamassas Kerakoll
              </h2>
              <p className="text-muted-foreground">
                {getCurrentProducts().length} produtos argamassas profissionais
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
                    <div className="flex gap-2">
                      <Button 
                        onClick={() => openWhatsApp(produto.name)}
                        className="flex-1 bg-brand-green hover:bg-brand-green/90"
                        size="sm"
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Orçamento
                      </Button>
                      {argamassasDetails[produto.name as keyof typeof argamassasDetails] && (
                        <Button 
                          onClick={() => openProductModal({
                            ...produto,
                            ...argamassasDetails[produto.name as keyof typeof argamassasDetails]
                          })}
                          variant="outline"
                          size="sm"
                        >
                          <Package className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          productDetails={selectedProduct.productDetails}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default AllProductsPage;
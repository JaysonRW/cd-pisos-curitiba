 import React from 'react';
import SearchBar from '@/components/SearchBar';

// Exemplo de dados de produtos para teste
const sampleProducts = [
  {
    title: "Piso Cerâmico Premium",
    description: "Piso cerâmico de alta qualidade para ambientes internos e externos",
    features: [
      "Resistência superior",
      "Fácil manutenção",
      "Antiderrapante",
      "Variedade de cores"
    ],
    specs: {
      dimensions: ["45x45cm", "50x50cm"],
      absorption: "10% a 20%",
      usage: "Ambientes internos e externos",
      coverage: "1,5 a 2,0 peças/m²"
    }
  },
  {
    title: "Porcelanato Polido",
    description: "Porcelanato de luxo com acabamento polido e brilhante",
    features: [
      "Baixa absorção de água",
      "Resistência a manchas",
      "Acabamento espelhado",
      "Fácil limpeza"
    ],
    specs: {
      dimensions: ["60x60cm", "90x90cm", "120x120cm"],
      absorption: "Menos de 0,5%",
      usage: "Todos os ambientes",
      coverage: "1,1 a 2,8 peças/m²"
    }
  },
  {
    title: "Argamassa Kerakoll AC-III",
    description: "Argamassa colante de alta performance para grandes formatos",
    features: [
      "Aderência garantida",
      "Secagem rápida",
      "Resistente à água",
      "Fácil aplicação"
    ],
    specs: {
      types: ["AC-I", "AC-II", "AC-III"],
      coverage: "3,5 a 4,5 m²/saco",
      packaging: "Sacos de 20kg",
      cureTime: "24h para tráfego leve"
    }
  }
];

interface Product {
  title: string;
  description: string;
  features: string[];
  specs: {
    dimensions?: string[];
    absorption?: string;
    usage?: string;
    coverage?: string;
    types?: string[];
    packaging?: string;
    cureTime?: string;
  };
}

const SearchBarExample = () => {
  const [searchResults, setSearchResults] = React.useState<Product[]>([]);

  const handleSearchResults = (results: Product[]) => {
    setSearchResults(results);
    console.log('Resultados da busca:', results);
  };

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Exemplo de SearchBar Melhorado
      </h1>
      
      {/* SearchBar Component */}
      <div className="mb-8">
        <SearchBar 
          products={sampleProducts}
          onResults={handleSearchResults}
        />
      </div>

      {/* Resultados */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Resultados ({searchResults.length})
        </h2>
        
        {searchResults.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            <p>Nenhum produto encontrado. Tente ajustar os filtros.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {searchResults.map((product, index) => (
              <div key={index} className="border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                
                <div className="space-y-2">
                  <h4 className="font-medium">Características:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {product.features.map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 pt-4 border-t space-y-2">
                  <h4 className="font-medium">Especificações:</h4>
                  <div className="text-sm text-gray-600 space-y-1">
                    {product.specs.dimensions && (
                      <p><strong>Dimensões:</strong> {product.specs.dimensions.join(', ')}</p>
                    )}
                    {product.specs.absorption && (
                      <p><strong>Absorção:</strong> {product.specs.absorption}</p>
                    )}
                    {product.specs.usage && (
                      <p><strong>Uso:</strong> {product.specs.usage}</p>
                    )}
                    {product.specs.coverage && (
                      <p><strong>Cobertura:</strong> {product.specs.coverage}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Instruções de Teste */}
      <div className="mt-12 p-6 bg-blue-50 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Como Testar o SearchBar:</h3>
        <div className="space-y-2 text-sm">
          <p><strong>1. Busca por texto:</strong> Digite "cerâmico", "porcelanato" ou "argamassa"</p>
          <p><strong>2. Busca por características:</strong> Digite "resistência", "polido" ou "secagem"</p>
          <p><strong>3. Busca por dimensões:</strong> Digite "60x60", "45x45" ou "120x120"</p>
          <p><strong>4. Use os filtros:</strong> Clique em "Filtros" e selecione categorias, dimensões, etc.</p>
          <p><strong>5. Combine filtros:</strong> Use busca + filtros para resultados mais precisos</p>
          <p><strong>6. Limpe filtros:</strong> Use o botão "Limpar filtros" ou remova tags individuais</p>
        </div>
      </div>
    </div>
  );
};

export default SearchBarExample;
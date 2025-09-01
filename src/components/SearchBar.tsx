import { useState, useEffect, useCallback } from "react";
import { Search, Filter, X, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";

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

interface SearchBarProps {
  products: Product[];
  onResults: (results: Product[]) => void;
}

interface FilterState {
  categories: string[];
  dimensions: string[];
  absorptionLevels: string[];
  usageTypes: string[];
}

const SearchBar = ({ products, onResults }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    dimensions: [],
    absorptionLevels: [],
    usageTypes: [],
  });

  // Extrair opções únicas dos produtos
  const getFilterOptions = useCallback(() => {
    const categories = [...new Set(products.map(p => p.title))];
    const dimensions = [...new Set(products.flatMap(p => p.specs.dimensions || []))];
    const absorptionLevels = [...new Set(products.map(p => p.specs.absorption).filter(Boolean))];
    const usageTypes = [...new Set(products.map(p => p.specs.usage).filter(Boolean))];

    return { categories, dimensions, absorptionLevels, usageTypes };
  }, [products]);

  const { categories, dimensions, absorptionLevels, usageTypes } = getFilterOptions();

  // Função de busca e filtro melhorada - memoizada para evitar loops
  const filterProducts = useCallback(() => {
    let filtered = products;

    // Filtro por termo de busca
    if (searchTerm.length > 0) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(searchLower) ||
        product.description.toLowerCase().includes(searchLower) ||
        product.features.some(feature => feature.toLowerCase().includes(searchLower)) ||
        (product.specs.dimensions && product.specs.dimensions.some(dim =>
          dim.toLowerCase().includes(searchLower)
        )) ||
        (product.specs.absorption && product.specs.absorption.toLowerCase().includes(searchLower)) ||
        (product.specs.usage && product.specs.usage.toLowerCase().includes(searchLower)) ||
        (product.specs.types && product.specs.types.some(type =>
          type.toLowerCase().includes(searchLower)
        ))
      );
    }

    // Filtros por categoria
    if (filters.categories.length > 0) {
      filtered = filtered.filter(product =>
        filters.categories.includes(product.title)
      );
    }

    // Filtros por dimensões
    if (filters.dimensions.length > 0) {
      filtered = filtered.filter(product =>
        product.specs.dimensions &&
        product.specs.dimensions.some(dim => filters.dimensions.includes(dim))
      );
    }

    // Filtros por absorção
    if (filters.absorptionLevels.length > 0) {
      filtered = filtered.filter(product =>
        product.specs.absorption &&
        filters.absorptionLevels.includes(product.specs.absorption)
      );
    }

    // Filtros por uso
    if (filters.usageTypes.length > 0) {
      filtered = filtered.filter(product =>
        product.specs.usage &&
        filters.usageTypes.includes(product.specs.usage)
      );
    }

    return filtered;
  }, [products, searchTerm, filters]);

  // useEffect corrigido para evitar loops infinitos
  useEffect(() => {
    const filtered = filterProducts();
    onResults(filtered);
  }, [searchTerm, filters, products]); // Removendo onResults das dependências para evitar loops

  const handleFilterChange = (filterType: keyof FilterState, value: string, checked: boolean) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: checked 
        ? [...prev[filterType], value]
        : prev[filterType].filter(item => item !== value)
    }));
  };

  const clearAllFilters = () => {
    setFilters({
      categories: [],
      dimensions: [],
      absorptionLevels: [],
      usageTypes: [],
    });
    setSearchTerm("");
  };

  const getActiveFiltersCount = () => {
    return Object.values(filters).reduce((count, filterArray) => count + filterArray.length, 0);
  };

  const removeFilter = (filterType: keyof FilterState, value: string) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: prev[filterType].filter(item => item !== value)
    }));
  };

  return (
    <div className="space-y-4">
      {/* Barra de busca principal */}
      <div className="flex flex-col sm:flex-row gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar produtos, características, dimensões..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button
          variant="outline"
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center justify-center gap-2 whitespace-nowrap min-w-fit px-4"
        >
          <Filter className="h-4 w-4" />
          <span className="hidden sm:inline">Filtros</span>
          <span className="sm:hidden">Filtrar</span>
          {getActiveFiltersCount() > 0 && (
            <Badge variant="secondary" className="ml-1">
              {getActiveFiltersCount()}
            </Badge>
          )}
          <ChevronDown className={`h-4 w-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
        </Button>
      </div>

      {/* Filtros expandidos */}
      {showFilters && (
        <div className="bg-muted/30 p-3 sm:p-4 rounded-lg border">
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-4 mb-4">
            {/* Filtro por Categoria */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="text-xs sm:text-sm">
                  Categoria
                  {filters.categories.length > 0 && (
                    <Badge variant="secondary" className="ml-1 sm:ml-2">
                      {filters.categories.length}
                    </Badge>
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Categorias</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {categories.map((category) => (
                  <DropdownMenuCheckboxItem
                    key={category}
                    checked={filters.categories.includes(category)}
                    onCheckedChange={(checked) =>
                      handleFilterChange('categories', category, checked)
                    }
                  >
                    {category}
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Filtro por Dimensões */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="text-xs sm:text-sm">
                  Dimensões
                  {filters.dimensions.length > 0 && (
                    <Badge variant="secondary" className="ml-1 sm:ml-2">
                      {filters.dimensions.length}
                    </Badge>
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Dimensões</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {dimensions.map((dimension) => (
                  <DropdownMenuCheckboxItem
                    key={dimension}
                    checked={filters.dimensions.includes(dimension)}
                    onCheckedChange={(checked) =>
                      handleFilterChange('dimensions', dimension, checked)
                    }
                  >
                    {dimension}
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Filtro por Absorção */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="text-xs sm:text-sm">
                  Absorção
                  {filters.absorptionLevels.length > 0 && (
                    <Badge variant="secondary" className="ml-1 sm:ml-2">
                      {filters.absorptionLevels.length}
                    </Badge>
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Níveis de Absorção</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {absorptionLevels.map((level) => (
                  <DropdownMenuCheckboxItem
                    key={level}
                    checked={filters.absorptionLevels.includes(level)}
                    onCheckedChange={(checked) =>
                      handleFilterChange('absorptionLevels', level, checked)
                    }
                  >
                    {level}
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Filtro por Uso */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="text-xs sm:text-sm">
                  Uso
                  {filters.usageTypes.length > 0 && (
                    <Badge variant="secondary" className="ml-1 sm:ml-2">
                      {filters.usageTypes.length}
                    </Badge>
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Tipos de Uso</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {usageTypes.map((usage) => (
                  <DropdownMenuCheckboxItem
                    key={usage}
                    checked={filters.usageTypes.includes(usage)}
                    onCheckedChange={(checked) =>
                      handleFilterChange('usageTypes', usage, checked)
                    }
                  >
                    {usage}
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Botão limpar filtros */}
            {getActiveFiltersCount() > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearAllFilters}
                className="text-muted-foreground hover:text-foreground text-xs sm:text-sm col-span-2 sm:col-span-1"
              >
                <X className="h-4 w-4 mr-1" />
                <span className="hidden sm:inline">Limpar filtros</span>
                <span className="sm:hidden">Limpar</span>
              </Button>
            )}
          </div>

          {/* Tags dos filtros ativos */}
          {getActiveFiltersCount() > 0 && (
            <div className="flex flex-wrap gap-2">
              {filters.categories.map((category) => (
                <Badge key={`cat-${category}`} variant="secondary" className="flex items-center gap-1">
                  {category}
                  <X 
                    className="h-3 w-3 cursor-pointer hover:text-destructive" 
                    onClick={() => removeFilter('categories', category)}
                  />
                </Badge>
              ))}
              {filters.dimensions.map((dimension) => (
                <Badge key={`dim-${dimension}`} variant="secondary" className="flex items-center gap-1">
                  {dimension}
                  <X 
                    className="h-3 w-3 cursor-pointer hover:text-destructive" 
                    onClick={() => removeFilter('dimensions', dimension)}
                  />
                </Badge>
              ))}
              {filters.absorptionLevels.map((level) => (
                <Badge key={`abs-${level}`} variant="secondary" className="flex items-center gap-1">
                  {level}
                  <X 
                    className="h-3 w-3 cursor-pointer hover:text-destructive" 
                    onClick={() => removeFilter('absorptionLevels', level)}
                  />
                </Badge>
              ))}
              {filters.usageTypes.map((usage) => (
                <Badge key={`use-${usage}`} variant="secondary" className="flex items-center gap-1">
                  {usage}
                  <X 
                    className="h-3 w-3 cursor-pointer hover:text-destructive" 
                    onClick={() => removeFilter('usageTypes', usage)}
                  />
                </Badge>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator, Ruler, Package, DollarSign, MessageCircle } from "lucide-react";
import { toast } from "sonner";

const CalculatorSection = () => {
  // Area Calculator State
  const [dimensions, setDimensions] = useState({
    length: "",
    width: "",
    area: 0
  });

  // Floor Quantity Calculator State
  const [floorCalc, setFloorCalc] = useState({
    area: "",
    tileLength: "",
    tileWidth: "",
    wastePercentage: "10",
    totalTiles: 0,
    totalBoxes: 0
  });

  // Mortar Calculator State
  const [mortarCalc, setMortarCalc] = useState({
    area: "",
    mortarType: "",
    coverage: 0,
    totalBags: 0
  });

  // Cost Calculator State
  const [costCalc, setCostCalc] = useState({
    floorType: "",
    area: "",
    pricePerM2: "",
    mortarBags: "",
    mortarPrice: "",
    totalCost: 0
  });

  const mortarTypes = [
    { id: "ac1", name: "Argamassa AC-I (Piso Cerâmico)", coverage: 4.5 },
    { id: "ac2", name: "Argamassa AC-II (Porcelanato Médio)", coverage: 4.0 },
    { id: "ac3", name: "Argamassa AC-III (Porcelanato Grande)", coverage: 3.5 }
  ];

  const floorTypes = [
    { id: "ceramic", name: "Piso Cerâmico", avgPrice: 25 },
    { id: "porcelain", name: "Porcelanato", avgPrice: 45 },
    { id: "premium", name: "Porcelanato Premium", avgPrice: 80 }
  ];

  // Area Calculator Functions
  const calculateArea = () => {
    const length = parseFloat(dimensions.length) || 0;
    const width = parseFloat(dimensions.width) || 0;
    const area = length * width;
    
    setDimensions(prev => ({ ...prev, area }));
    
    if (area > 0) {
      toast.success(`Área calculada: ${area.toFixed(2)} m²`);
    }
  };

  // Floor Quantity Calculator Functions
  const calculateFloorQuantity = () => {
    const area = parseFloat(floorCalc.area) || 0;
    const tileLength = parseFloat(floorCalc.tileLength) || 0;
    const tileWidth = parseFloat(floorCalc.tileWidth) || 0;
    const wastePercentage = parseFloat(floorCalc.wastePercentage) || 10;

    if (area > 0 && tileLength > 0 && tileWidth > 0) {
      const tileArea = (tileLength * tileWidth) / 10000; // Convert cm² to m²
      const tilesNeeded = Math.ceil(area / tileArea);
      const tilesWithWaste = Math.ceil(tilesNeeded * (1 + wastePercentage / 100));
      const boxesNeeded = Math.ceil(tilesWithWaste / 10); // Assuming 10 tiles per box

      setFloorCalc(prev => ({
        ...prev,
        totalTiles: tilesWithWaste,
        totalBoxes: boxesNeeded
      }));

      toast.success(`Cálculo realizado: ${tilesWithWaste} peças em ${boxesNeeded} caixas`);
    }
  };

  // Mortar Calculator Functions
  const calculateMortar = () => {
    const area = parseFloat(mortarCalc.area) || 0;
    const coverage = mortarCalc.coverage || 0;

    if (area > 0 && coverage > 0) {
      const bags = Math.ceil(area / coverage);
      setMortarCalc(prev => ({
        ...prev,
        totalBags: bags
      }));

      toast.success(`Argamassa necessária: ${bags} sacos`);
    }
  };

  // Cost Calculator Functions
  const calculateCost = () => {
    const area = parseFloat(costCalc.area) || 0;
    const pricePerM2 = parseFloat(costCalc.pricePerM2) || 0;
    const mortarBags = parseFloat(costCalc.mortarBags) || 0;
    const mortarPrice = parseFloat(costCalc.mortarPrice) || 0;

    const floorCost = area * pricePerM2;
    const mortarCost = mortarBags * mortarPrice;
    const total = floorCost + mortarCost;

    setCostCalc(prev => ({
      ...prev,
      totalCost: total
    }));

    if (total > 0) {
      toast.success(`Custo estimado: R$ ${total.toFixed(2)}`);
    }
  };

  const shareCalculation = (calculatorName: string, result: string) => {
    const message = `🧮 *CÁLCULO ${calculatorName.toUpperCase()} - CD PISOS*

${result}

---
Gostaria de solicitar um orçamento personalizado com base neste cálculo!`;

    const whatsappMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5541996190069?text=${whatsappMessage}`;
    
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="calculadoras" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-purple mb-6">
            Calculadoras Inteligentes
          </h2>
          <div className="w-24 h-1 bg-brand-blue mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ferramentas práticas para planejar seu projeto com precisão
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="area" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
              <TabsTrigger value="area" className="flex items-center gap-2">
                <Ruler className="w-4 h-4" />
                Área
              </TabsTrigger>
              <TabsTrigger value="quantity" className="flex items-center gap-2">
                <Package className="w-4 h-4" />
                Quantidade
              </TabsTrigger>
              <TabsTrigger value="mortar" className="flex items-center gap-2">
                <Calculator className="w-4 h-4" />
                Argamassa
              </TabsTrigger>
              <TabsTrigger value="cost" className="flex items-center gap-2">
                <DollarSign className="w-4 h-4" />
                Custo
              </TabsTrigger>
            </TabsList>

            {/* Area Calculator */}
            <TabsContent value="area">
              <Card className="p-8 shadow-xl border-0">
                <h3 className="text-2xl font-bold text-brand-purple mb-6 flex items-center">
                  <Ruler className="w-6 h-6 mr-2" />
                  Calculadora de Área
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
                  <div>
                    <Label htmlFor="length">Comprimento (metros)</Label>
                    <Input
                      id="length"
                      type="number"
                      value={dimensions.length}
                      onChange={(e) => setDimensions(prev => ({ ...prev, length: e.target.value }))}
                      placeholder="Ex: 5.50"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="width">Largura (metros)</Label>
                    <Input
                      id="width"
                      type="number"
                      value={dimensions.width}
                      onChange={(e) => setDimensions(prev => ({ ...prev, width: e.target.value }))}
                      placeholder="Ex: 4.20"
                      className="mt-2"
                    />
                  </div>

                  <Button onClick={calculateArea} className="bg-brand-blue hover:bg-brand-blue/90">
                    Calcular Área
                  </Button>
                </div>

                {dimensions.area > 0 && (
                  <div className="mt-6 p-6 bg-brand-blue/5 rounded-lg">
                    <h4 className="text-xl font-bold text-brand-purple mb-2">Resultado:</h4>
                    <p className="text-3xl font-bold text-brand-blue mb-4">
                      {dimensions.area.toFixed(2)} m²
                    </p>
                    <Button
                      onClick={() => shareCalculation("de Área", `Área calculada: ${dimensions.area.toFixed(2)} m²\nDimensões: ${dimensions.length}m x ${dimensions.width}m`)}
                      variant="outline"
                      className="border-brand-green text-brand-green hover:bg-brand-green hover:text-white"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Compartilhar via WhatsApp
                    </Button>
                  </div>
                )}
              </Card>
            </TabsContent>

            {/* Floor Quantity Calculator */}
            <TabsContent value="quantity">
              <Card className="p-8 shadow-xl border-0">
                <h3 className="text-2xl font-bold text-brand-purple mb-6 flex items-center">
                  <Package className="w-6 h-6 mr-2" />
                  Calculadora de Quantidade
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="floorArea">Área Total (m²)</Label>
                      <Input
                        id="floorArea"
                        type="number"
                        value={floorCalc.area}
                        onChange={(e) => setFloorCalc(prev => ({ ...prev, area: e.target.value }))}
                        placeholder="Ex: 50"
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="tileLength">Comprimento da Peça (cm)</Label>
                      <Input
                        id="tileLength"
                        type="number"
                        value={floorCalc.tileLength}
                        onChange={(e) => setFloorCalc(prev => ({ ...prev, tileLength: e.target.value }))}
                        placeholder="Ex: 60"
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="tileWidth">Largura da Peça (cm)</Label>
                      <Input
                        id="tileWidth"
                        type="number"
                        value={floorCalc.tileWidth}
                        onChange={(e) => setFloorCalc(prev => ({ ...prev, tileWidth: e.target.value }))}
                        placeholder="Ex: 60"
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="waste">Margem de Segurança (%)</Label>
                      <Select value={floorCalc.wastePercentage} onValueChange={(value) => setFloorCalc(prev => ({ ...prev, wastePercentage: value }))}>
                        <SelectTrigger className="mt-2">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="5">5% - Profissional experiente</SelectItem>
                          <SelectItem value="10">10% - Recomendado</SelectItem>
                          <SelectItem value="15">15% - Formato irregular</SelectItem>
                          <SelectItem value="20">20% - Primeira vez</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Button onClick={calculateFloorQuantity} className="w-full bg-brand-green hover:bg-brand-green/90">
                      Calcular Quantidade
                    </Button>
                  </div>

                  {floorCalc.totalTiles > 0 && (
                    <div className="p-6 bg-brand-green/5 rounded-lg">
                      <h4 className="text-xl font-bold text-brand-purple mb-4">Resultado:</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span>Peças necessárias:</span>
                          <strong className="text-brand-green">{floorCalc.totalTiles} unidades</strong>
                        </div>
                        <div className="flex justify-between">
                          <span>Caixas necessárias:</span>
                          <strong className="text-brand-green">{floorCalc.totalBoxes} caixas</strong>
                        </div>
                      </div>
                      <Button
                        onClick={() => shareCalculation("de Quantidade", `Quantidade calculada:\n• ${floorCalc.totalTiles} peças\n• ${floorCalc.totalBoxes} caixas\n• Área: ${floorCalc.area}m²\n• Dimensão da peça: ${floorCalc.tileLength}x${floorCalc.tileWidth}cm\n• Margem de segurança: ${floorCalc.wastePercentage}%`)}
                        variant="outline"
                        className="w-full mt-4 border-brand-green text-brand-green hover:bg-brand-green hover:text-white"
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Compartilhar via WhatsApp
                      </Button>
                    </div>
                  )}
                </div>
              </Card>
            </TabsContent>

            {/* Mortar Calculator */}
            <TabsContent value="mortar">
              <Card className="p-8 shadow-xl border-0">
                <h3 className="text-2xl font-bold text-brand-purple mb-6 flex items-center">
                  <Calculator className="w-6 h-6 mr-2" />
                  Calculadora de Argamassa
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="mortarArea">Área a ser coberta (m²)</Label>
                      <Input
                        id="mortarArea"
                        type="number"
                        value={mortarCalc.area}
                        onChange={(e) => setMortarCalc(prev => ({ ...prev, area: e.target.value }))}
                        placeholder="Ex: 50"
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="mortarType">Tipo de Argamassa</Label>
                      <Select 
                        value={mortarCalc.mortarType} 
                        onValueChange={(value) => {
                          const selectedType = mortarTypes.find(type => type.id === value);
                          setMortarCalc(prev => ({ 
                            ...prev, 
                            mortarType: value,
                            coverage: selectedType?.coverage || 0
                          }));
                        }}
                      >
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Selecione o tipo de argamassa" />
                        </SelectTrigger>
                        <SelectContent>
                          {mortarTypes.map((type) => (
                            <SelectItem key={type.id} value={type.id}>
                              {type.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {mortarCalc.coverage > 0 && (
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <p className="text-sm text-brand-blue">
                          <strong>Rendimento:</strong> {mortarCalc.coverage}m² por saco de 20kg
                        </p>
                      </div>
                    )}

                    <Button onClick={calculateMortar} className="w-full bg-brand-purple hover:bg-brand-purple/90">
                      Calcular Argamassa
                    </Button>
                  </div>

                  {mortarCalc.totalBags > 0 && (
                    <div className="p-6 bg-brand-purple/5 rounded-lg">
                      <h4 className="text-xl font-bold text-brand-purple mb-4">Resultado:</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span>Sacos necessários:</span>
                          <strong className="text-brand-purple">{mortarCalc.totalBags} sacos (20kg)</strong>
                        </div>
                        <div className="flex justify-between">
                          <span>Total de argamassa:</span>
                          <strong className="text-brand-purple">{mortarCalc.totalBags * 20}kg</strong>
                        </div>
                      </div>
                      <Button
                        onClick={() => shareCalculation("de Argamassa", `Argamassa calculada:\n• ${mortarCalc.totalBags} sacos de 20kg\n• Total: ${mortarCalc.totalBags * 20}kg\n• Área: ${mortarCalc.area}m²\n• Tipo: ${mortarTypes.find(t => t.id === mortarCalc.mortarType)?.name}`)}
                        variant="outline"
                        className="w-full mt-4 border-brand-green text-brand-green hover:bg-brand-green hover:text-white"
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Compartilhar via WhatsApp
                      </Button>
                    </div>
                  )}
                </div>
              </Card>
            </TabsContent>

            {/* Cost Calculator */}
            <TabsContent value="cost">
              <Card className="p-8 shadow-xl border-0">
                <h3 className="text-2xl font-bold text-brand-purple mb-6 flex items-center">
                  <DollarSign className="w-6 h-6 mr-2" />
                  Calculadora de Custo
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="costFloorType">Tipo de Piso</Label>
                      <Select 
                        value={costCalc.floorType} 
                        onValueChange={(value) => {
                          const selectedType = floorTypes.find(type => type.id === value);
                          setCostCalc(prev => ({ 
                            ...prev, 
                            floorType: value,
                            pricePerM2: selectedType?.avgPrice.toString() || ""
                          }));
                        }}
                      >
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Selecione o tipo de piso" />
                        </SelectTrigger>
                        <SelectContent>
                          {floorTypes.map((type) => (
                            <SelectItem key={type.id} value={type.id}>
                              {type.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="costArea">Área (m²)</Label>
                      <Input
                        id="costArea"
                        type="number"
                        value={costCalc.area}
                        onChange={(e) => setCostCalc(prev => ({ ...prev, area: e.target.value }))}
                        placeholder="Ex: 50"
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="pricePerM2">Preço por m² (R$)</Label>
                      <Input
                        id="pricePerM2"
                        type="number"
                        value={costCalc.pricePerM2}
                        onChange={(e) => setCostCalc(prev => ({ ...prev, pricePerM2: e.target.value }))}
                        placeholder="Ex: 45.00"
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="mortarBags">Sacos de Argamassa</Label>
                      <Input
                        id="mortarBags"
                        type="number"
                        value={costCalc.mortarBags}
                        onChange={(e) => setCostCalc(prev => ({ ...prev, mortarBags: e.target.value }))}
                        placeholder="Ex: 12"
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="mortarPrice">Preço por Saco (R$)</Label>
                      <Input
                        id="mortarPrice"
                        type="number"
                        value={costCalc.mortarPrice}
                        onChange={(e) => setCostCalc(prev => ({ ...prev, mortarPrice: e.target.value }))}
                        placeholder="Ex: 25.00"
                        className="mt-2"
                      />
                    </div>

                    <Button onClick={calculateCost} className="w-full bg-brand-red hover:bg-brand-red/90">
                      Calcular Custo
                    </Button>
                  </div>

                  {costCalc.totalCost > 0 && (
                    <div className="p-6 bg-brand-red/5 rounded-lg">
                      <h4 className="text-xl font-bold text-brand-purple mb-4">Estimativa:</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span>Custo do piso:</span>
                          <strong>R$ {(parseFloat(costCalc.area) * parseFloat(costCalc.pricePerM2)).toFixed(2)}</strong>
                        </div>
                        <div className="flex justify-between">
                          <span>Custo da argamassa:</span>
                          <strong>R$ {(parseFloat(costCalc.mortarBags) * parseFloat(costCalc.mortarPrice)).toFixed(2)}</strong>
                        </div>
                        <div className="border-t pt-2">
                          <div className="flex justify-between">
                            <span className="text-lg font-bold">Total Estimado:</span>
                            <strong className="text-2xl text-brand-red">R$ {costCalc.totalCost.toFixed(2)}</strong>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 p-3 bg-yellow-50 rounded border-l-4 border-yellow-400">
                        <p className="text-sm text-yellow-800">
                          <strong>Atenção:</strong> Esta é apenas uma estimativa. Solicite um orçamento oficial para valores exatos.
                        </p>
                      </div>
                      <Button
                        onClick={() => shareCalculation("de Custo", `Estimativa de custo:\n• Área: ${costCalc.area}m²\n• Custo do piso: R$ ${(parseFloat(costCalc.area) * parseFloat(costCalc.pricePerM2)).toFixed(2)}\n• Custo da argamassa: R$ ${(parseFloat(costCalc.mortarBags) * parseFloat(costCalc.mortarPrice)).toFixed(2)}\n• TOTAL ESTIMADO: R$ ${costCalc.totalCost.toFixed(2)}\n\n*Valores aproximados, solicitar orçamento oficial`)}
                        variant="outline"
                        className="w-full mt-4 border-brand-green text-brand-green hover:bg-brand-green hover:text-white"
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Compartilhar via WhatsApp
                      </Button>
                    </div>
                  )}
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default CalculatorSection;

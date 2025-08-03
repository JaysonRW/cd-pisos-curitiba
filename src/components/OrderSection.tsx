
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle, Package, MessageCircle, Calculator } from "lucide-react";
import { toast } from "sonner";

interface OrderData {
  name: string;
  phone: string;
  email: string;
  address: string;
  floorType: string;
  area: string;
  quantity: string;
  observations: string;
}

const OrderSection = () => {
  const [orderData, setOrderData] = useState<OrderData>({
    name: "",
    phone: "",
    email: "",
    address: "",
    floorType: "",
    area: "",
    quantity: "",
    observations: ""
  });

  const floorTypes = [
    { id: "ceramicos", name: "Pisos Cerâmicos" },
    { id: "porcelanatos", name: "Porcelanatos" },
    { id: "argamassas", name: "Argamassas" },
    { id: "combinado", name: "Combinação de Produtos" }
  ];

  const handleInputChange = (field: keyof OrderData, value: string) => {
    setOrderData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const formatWhatsAppMessage = () => {
    const message = `🏠 *SOLICITAÇÃO DE ORÇAMENTO - CD PISOS*

📋 *DADOS DO CLIENTE:*
• Nome: ${orderData.name || 'Não informado'}
• Telefone: ${orderData.phone || 'Não informado'}
• Email: ${orderData.email || 'Não informado'}
• Endereço: ${orderData.address || 'Não informado'}

🔸 *DETALHES DO PEDIDO:*
• Tipo de Piso: ${orderData.floorType || 'Não informado'}
• Área Total: ${orderData.area || 'Não informado'} m²
• Quantidade: ${orderData.quantity || 'Não informado'}
• Observações: ${orderData.observations || 'Nenhuma observação adicional'}

---
Olá! Gostaria de solicitar um orçamento com base nas informações acima. Aguardo contato para maiores detalhes.`;
    
    return encodeURIComponent(message);
  };

  const handleSubmitOrder = () => {
    // Validate required fields
    if (!orderData.name || !orderData.phone || !orderData.floorType) {
      toast.error("Por favor, preencha os campos obrigatórios: Nome, Telefone e Tipo de Piso");
      return;
    }

    // Format and send via WhatsApp
    const whatsappMessage = formatWhatsAppMessage();
    const whatsappUrl = `https://wa.me/5541996190069?text=${whatsappMessage}`;
    
    window.open(whatsappUrl, "_blank");
    
    toast.success("Redirecionando para WhatsApp...", {
      description: "Sua solicitação será enviada automaticamente!"
    });
  };

  const isFormValid = orderData.name && orderData.phone && orderData.floorType;

  return (
    <section id="pedidos" className="py-20 bg-gradient-to-b from-background to-brand-blue/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-purple mb-6">
            Sistema de Pedidos
          </h2>
          <div className="w-24 h-1 bg-brand-blue mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Solicite seu orçamento de forma rápida e organizada
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Order Form */}
          <Card className="p-8 shadow-xl border-0 mb-8">
            <div className="flex items-center mb-8">
              <Package className="w-8 h-8 text-brand-purple mr-3" />
              <h3 className="text-2xl font-bold text-brand-purple">
                Formulário de Orçamento
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Customer Data */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-brand-purple mb-4">
                  Dados do Cliente
                </h4>
                
                <div>
                  <Label htmlFor="name">Nome Completo *</Label>
                  <Input
                    id="name"
                    value={orderData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Seu nome completo"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Telefone/WhatsApp *</Label>
                  <Input
                    id="phone"
                    value={orderData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="(41) 99999-9999"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={orderData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="seu@email.com"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="address">Endereço da Obra</Label>
                  <Textarea
                    id="address"
                    value={orderData.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                    placeholder="Endereço completo da obra..."
                    className="mt-1"
                    rows={3}
                  />
                </div>
              </div>

              {/* Order Details */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-brand-purple mb-4">
                  Detalhes do Pedido
                </h4>

                <div>
                  <Label htmlFor="floorType">Tipo de Piso *</Label>
                  <Select value={orderData.floorType} onValueChange={(value) => handleInputChange("floorType", value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Selecione o tipo de piso" />
                    </SelectTrigger>
                    <SelectContent>
                      {floorTypes.map((type) => (
                        <SelectItem key={type.id} value={type.name}>
                          {type.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="area">Área Total (m²)</Label>
                  <Input
                    id="area"
                    value={orderData.area}
                    onChange={(e) => handleInputChange("area", e.target.value)}
                    placeholder="Ex: 50"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="quantity">Quantidade Estimada</Label>
                  <Input
                    id="quantity"
                    value={orderData.quantity}
                    onChange={(e) => handleInputChange("quantity", e.target.value)}
                    placeholder="Ex: 15 caixas ou 20 sacos"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="observations">Observações</Label>
                  <Textarea
                    id="observations"
                    value={orderData.observations}
                    onChange={(e) => handleInputChange("observations", e.target.value)}
                    placeholder="Informações adicionais, preferências, prazo, etc..."
                    className="mt-1"
                    rows={4}
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-8 pt-6 border-t">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-sm text-muted-foreground">
                  * Campos obrigatórios
                </div>
                <Button
                  onClick={handleSubmitOrder}
                  disabled={!isFormValid}
                  size="lg"
                  className="bg-brand-green hover:bg-brand-green/90 px-8"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Enviar via WhatsApp
                </Button>
              </div>
            </div>
          </Card>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CheckCircle className="w-8 h-8 text-brand-green mx-auto mb-4" />
              <h4 className="font-bold text-brand-purple mb-2">Rapidez</h4>
              <p className="text-sm text-muted-foreground">
                Resposta em até 2 horas durante horário comercial
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <Calculator className="w-8 h-8 text-brand-blue mx-auto mb-4" />
              <h4 className="font-bold text-brand-purple mb-2">Precisão</h4>
              <p className="text-sm text-muted-foreground">
                Orçamento detalhado com cálculos exatos
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <Package className="w-8 h-8 text-brand-purple mx-auto mb-4" />
              <h4 className="font-bold text-brand-purple mb-2">Sem Compromisso</h4>
              <p className="text-sm text-muted-foreground">
                Orçamento gratuito e sem obrigação de compra
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderSection;

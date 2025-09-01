import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MessageCircle, X } from "lucide-react";

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    name: string;
    image: string;
    size: string;
    type: string;
  };
  productDetails?: {
    title: string;
    description: string;
    features: string[];
  };
}

const ProductModal = ({ isOpen, onClose, product, productDetails }: ProductModalProps) => {
  const openWhatsApp = () => {
    const message = `Olá! Gostaria de solicitar um orçamento para: ${product.name}`;
    window.open(`https://wa.me/5541996190069?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="flex flex-row items-center justify-between">
          <DialogTitle className="text-2xl font-bold text-gray-800">
            {productDetails?.title || product.name}
          </DialogTitle>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="h-6 w-6"
          >
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Imagem do produto */}
          <div className="space-y-4">
            <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Informações básicas */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">Especificações</h3>
              <div className="space-y-1 text-sm text-gray-600">
                <p><span className="font-medium">Embalagem:</span> {product.size}</p>
                <p><span className="font-medium">Classificação:</span> {product.type}</p>
              </div>
            </div>
          </div>
          
          {/* Descrição e características */}
          <div className="space-y-4">
            {productDetails && (
              <>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Descrição</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {productDetails.description}
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Características</h3>
                  <ul className="space-y-2">
                    {productDetails.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-600">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}
            
            {/* Botão de orçamento */}
            <div className="pt-4">
              <Button
                onClick={openWhatsApp}
                className="w-full bg-green-600 hover:bg-green-700 text-white"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Solicitar Orçamento via WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;
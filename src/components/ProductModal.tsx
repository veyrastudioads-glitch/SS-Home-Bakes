import React, { useEffect } from "react";
import type { Product } from "../data/products";
import { getProductOrderUrl, openWhatsApp } from "../utils/whatsapp";
import { X, MessageCircle, Heart, Sparkles, CheckCircle2 } from "lucide-react";
import assets from "../assets";

interface ProductModalProps {
  product: (Product & { image?: string; category?: string }) | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (product) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  const whatsappUrl = getProductOrderUrl(product.name, product.price);
  const imageSrc = product.image || assets.brownies;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-chocolate-950/70 backdrop-blur-sm transition-opacity animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
    >
      <div
        className="relative w-full max-w-2xl bg-cream-50 rounded-3xl border border-cocoa-600/20 shadow-warm-xl overflow-hidden overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-cream-100/90 text-chocolate-900 hover:bg-cream-200 transition-colors shadow-warm-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-caramel-500"
          aria-label="Close product preview"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="relative aspect-square sm:aspect-auto sm:h-full bg-cream-100 overflow-hidden">
            <img
              src={imageSrc}
              alt={product.name}
              className="w-full h-full object-cover object-center"
            />
            {product.badge && (
              <span className="absolute top-4 left-4 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-chocolate-900/90 text-caramel-300 text-xs font-semibold tracking-wide backdrop-blur-sm border border-caramel-500/30">
                <Sparkles className="w-3 h-3 text-caramel-400" />
                {product.badge}
              </span>
            )}
          </div>

          <div className="p-6 sm:p-7 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div>
                {product.category && (
                  <span className="text-xs font-bold uppercase tracking-widest text-caramel-600">
                    {product.category}
                  </span>
                )}
                <h2
                  id="modal-product-title"
                  className="font-serif text-2xl sm:text-3xl font-bold text-chocolate-950 mt-1 leading-snug"
                >
                  {product.name}
                </h2>
              </div>

              <div className="flex items-baseline gap-2 pb-2 border-b border-cream-200">
                <span className="font-serif text-3xl font-bold text-chocolate-950">
                  {product.priceDisplay || `₹${product.price}`}
                </span>
                <span className="text-xs text-chocolate-800/70 font-medium">
                  Fresh homemade preparation
                </span>
              </div>

              {product.description && (
                <p className="text-sm text-chocolate-800/90 leading-relaxed">
                  {product.description}
                </p>
              )}

              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2 text-xs text-chocolate-900">
                  <CheckCircle2 className="w-4 h-4 text-caramel-600 flex-shrink-0" />
                  <span>Prepared freshly on order in Villivakkam</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-chocolate-900">
                  <Heart className="w-4 h-4 text-cocoa-600 flex-shrink-0" />
                  <span>Handcrafted with premium cocoa & care</span>
                </div>
              </div>
            </div>

            <div className="space-y-2 pt-4 border-t border-cream-200">
              <button
                onClick={() => {
                  onClose();
                  openWhatsApp(whatsappUrl);
                }}
                className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-full bg-chocolate-900 text-cream-50 hover:bg-chocolate-800 font-medium text-sm sm:text-base shadow-warm-md hover:shadow-warm-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 text-caramel-400" />
                <span>ORDER ON WHATSAPP</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

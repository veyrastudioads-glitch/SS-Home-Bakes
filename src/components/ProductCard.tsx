import React from "react";
import type { Product } from "../data/products";
import { getProductOrderUrl, openWhatsApp } from "../utils/whatsapp";
import { MessageCircle, Eye, Sparkles } from "lucide-react";
import assets from "../assets";

interface ProductCardProps {
  product: Product & { image?: string; wheatFlourOption?: boolean };
  onQuickView: (product: Product & { image?: string; wheatFlourOption?: boolean }) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickView }) => {
  const whatsappUrl = getProductOrderUrl(product.name, product.price);
  const imageSrc = product.image || assets.brownies;

  return (
    <div className="group relative bg-cream-50 rounded-2xl sm:rounded-3xl border border-cocoa-600/15 overflow-hidden shadow-warm-sm hover:shadow-warm-lg transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
      <div
        className="relative aspect-square overflow-hidden bg-cream-100 cursor-pointer"
        onClick={() => onQuickView(product)}
      >
        <img
          src={imageSrc}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-chocolate-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cream-50/95 text-chocolate-950 text-xs font-medium shadow-warm-md transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <Eye className="w-3.5 h-3.5 text-caramel-600" />
            View Details
          </span>
        </div>

        {product.badge && (
          <div className="absolute top-3 left-3">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-chocolate-900/90 text-caramel-300 text-[11px] font-semibold tracking-wide shadow-warm-sm backdrop-blur-sm border border-caramel-500/30">
              <Sparkles className="w-2.5 h-2.5 text-caramel-400" />
              {product.badge}
            </span>
          </div>
        )}
      </div>

      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
        <div>
          <h3
            onClick={() => onQuickView(product)}
            className="font-serif text-lg sm:text-xl font-bold text-chocolate-950 group-hover:text-cocoa-600 transition-colors cursor-pointer leading-snug"
          >
            {product.name}
          </h3>

          {product.description && (
            <p className="mt-1.5 text-xs sm:text-sm text-chocolate-800/80 line-clamp-2 leading-relaxed">
              {product.description}
            </p>
          )}
        </div>

        <div className="pt-3 border-t border-cream-200 flex items-center justify-between gap-2">
          <div>
            <span className="text-[10px] uppercase tracking-wider text-caramel-600 block font-semibold">
              Price
            </span>
            <span className="font-serif text-xl sm:text-2xl font-bold text-chocolate-950">
              {product.priceDisplay || `₹${product.price}`}
            </span>
          </div>

          <button
            onClick={() => openWhatsApp(whatsappUrl)}
            className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-full bg-chocolate-900 text-cream-50 hover:bg-chocolate-800 transition-all duration-200 text-xs sm:text-sm font-medium shadow-warm-sm hover:shadow-warm-md hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-caramel-500"
            aria-label={`Order ${product.name} on WhatsApp`}
          >
            <MessageCircle className="w-3.5 h-3.5 text-caramel-400" />
            <span>ORDER</span>
          </button>
        </div>
      </div>
    </div>
  );
};

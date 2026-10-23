import React from "react";
import type { CategoryCardData, MenuItem } from "../data/products";
import { getProductOrderUrl, openWhatsApp } from "../utils/whatsapp";
import { MessageCircle, Heart, Wheat, Sparkles, ChevronRight } from "lucide-react";

interface CategoryMenuCardProps {
  card: CategoryCardData;
  onItemSelect?: (item: MenuItem, categoryTitle: string, image: string) => void;
}

export const CategoryMenuCard: React.FC<CategoryMenuCardProps> = ({
  card,
  onItemSelect,
}) => {
  return (
    <div className="bg-cream-50 rounded-3xl border-2 border-cocoa-600/15 overflow-hidden shadow-warm-md hover:shadow-warm-xl transition-all duration-300 flex flex-col lg:flex-row group">
      
      {/* Category Image Column */}
      <div className="lg:w-5/12 relative bg-cream-100 flex flex-col justify-between overflow-hidden">
        <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full min-h-[220px] sm:min-h-[280px] overflow-hidden">
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-chocolate-950/70 via-chocolate-950/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-chocolate-950/30" />

          {/* Floating Tagline on image */}
          <div className="absolute top-4 left-4 right-4 flex items-start justify-between gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-chocolate-900/90 text-caramel-300 text-xs font-semibold tracking-wider uppercase backdrop-blur-sm border border-caramel-500/30 shadow-warm-sm">
              <Sparkles className="w-3 h-3 text-caramel-400" />
              {card.tagline || card.title}
            </span>

            {card.wheatFlourBadge && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-wheat-100 text-chocolate-950 text-[11px] font-semibold border border-caramel-400/50 shadow-sm backdrop-blur-xs">
                <Wheat className="w-3.5 h-3.5 text-caramel-600" />
                Wheat Option
              </span>
            )}
          </div>

          {/* Bottom Title on Image (mobile only) */}
          <div className="absolute bottom-3 left-4 right-4 lg:hidden text-cream-50">
            <h3 className="font-serif text-2xl font-bold flex items-center gap-1.5">
              <span>{card.title}</span>
              <Heart className="w-4 h-4 text-caramel-400 fill-caramel-400" />
            </h3>
          </div>
        </div>

        {/* Small desktop footnote */}
        {card.note && (
          <div className="hidden lg:block p-3.5 bg-cream-200/50 border-t border-cocoa-600/10 text-[11px] text-chocolate-800/80 italic text-center">
            {card.note}
          </div>
        )}
      </div>

      {/* Product List Column */}
      <div className="lg:w-7/12 p-5 sm:p-7 flex flex-col justify-between space-y-5">
        <div>
          {/* Header on Desktop */}
          <div className="hidden lg:flex items-center justify-between pb-3 border-b border-cream-200">
            <div>
              <h3 className="font-serif text-2xl font-bold text-chocolate-950 flex items-center gap-2">
                <span>{card.title}</span>
                <Heart className="w-4 h-4 text-caramel-600 fill-caramel-600/20" />
              </h3>
              <p className="font-script text-sm text-caramel-600">
                {card.tagline}
              </p>
            </div>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-cream-200 text-chocolate-800">
              {card.items.length} {card.items.length === 1 ? "Item" : "Varieties"}
            </span>
          </div>

          {/* Mobile Note */}
          {card.note && (
            <p className="lg:hidden text-xs text-chocolate-800/80 italic pb-2 border-b border-cream-200">
              {card.note}
            </p>
          )}

          {/* List of items inside this card */}
          <div className="divide-y divide-cream-200/70 mt-3 space-y-1">
            {card.items.map((item) => {
              const orderUrl = getProductOrderUrl(item.name, item.price);

              return (
                <div
                  key={item.id}
                  className="pt-3 pb-3 first:pt-1 last:pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-cream-100/40 p-2 rounded-xl transition-colors"
                >
                  {/* Item info */}
                  <div
                    className="flex-1 cursor-pointer"
                    onClick={() => onItemSelect?.(item, card.title, card.image)}
                  >
                    <div className="flex items-center gap-2">
                      <h4 className="font-serif text-base sm:text-lg font-bold text-chocolate-950 hover:text-cocoa-600 transition-colors">
                        {item.name}
                      </h4>
                      {item.badge && (
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-caramel-100 border border-caramel-300 text-chocolate-900 font-semibold">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    {item.description && (
                      <p className="text-xs text-chocolate-800/75 mt-0.5 line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </div>

                  {/* Price & Order Action */}
                  <div className="flex items-center justify-between sm:justify-end gap-3 flex-shrink-0 pt-1 sm:pt-0">
                    <span className="font-serif text-lg sm:text-xl font-bold text-chocolate-950">
                      {item.priceDisplay || `₹${item.price}`}
                    </span>

                    <button
                      onClick={() => openWhatsApp(orderUrl)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:py-2 rounded-full bg-chocolate-900 text-cream-50 hover:bg-chocolate-800 text-xs sm:text-sm font-medium shadow-warm-sm hover:shadow-warm-md hover:scale-105 active:scale-95 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-caramel-500"
                      aria-label={`Order ${item.name} on WhatsApp`}
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-caramel-400" />
                      <span>ORDER</span>
                      <ChevronRight className="w-3 h-3 text-cream-300 hidden sm:inline" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Card Footer Quick Link */}
        <div className="pt-3 border-t border-cream-200/80 flex items-center justify-between text-xs text-chocolate-800/70">
          <span>Freshly baked to order in Villivakkam</span>
          <button
            onClick={() =>
              openWhatsApp(
                getProductOrderUrl(
                  card.title,
                  card.items[0]?.price
                )
              )
            }
            className="text-cocoa-600 hover:text-chocolate-950 font-semibold underline underline-offset-2 flex items-center gap-1"
          >
            <span>Enquire on WhatsApp</span>
            <ChevronRight className="w-3 h-3" />
          </button>
        </div>

      </div>

    </div>
  );
};

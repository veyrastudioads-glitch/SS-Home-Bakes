import React, { useState, useMemo } from "react";
import { categoryCards } from "../data/products";
import type { CategoryTabId, MenuItem } from "../data/products";
import { CategoryFilter } from "./CategoryFilter";
import { CategoryMenuCard } from "./CategoryMenuCard";
import { getProductOrderUrl, openWhatsApp } from "../utils/whatsapp";
import { Sparkles, Heart, X, MessageCircle, CheckCircle2, Wheat } from "lucide-react";

export const ProductGrid: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<CategoryTabId>("ALL");
  const [modalItem, setModalItem] = useState<{
    item: MenuItem;
    categoryTitle: string;
    image: string;
  } | null>(null);

  // Compute category counts
  const cardCounts = useMemo(() => {
    const counts: Record<CategoryTabId, number> = {
      ALL: categoryCards.reduce((acc, c) => acc + c.items.length, 0),
      BROWNIES: 0,
      SPECIAL_BOX: 0,
      CHOCO_LAVA: 0,
      BOMBOLONI: 0,
      MINI_CHOCOLATES: 0,
      HOT_CHOCOLATE: 0,
    };

    categoryCards.forEach((c) => {
      const key = c.categoryKey as CategoryTabId;
      if (counts[key] !== undefined) {
        counts[key] = c.items.length;
      }
    });

    return counts;
  }, []);

  // Filter cards
  const displayedCards = useMemo(() => {
    if (selectedTab === "ALL") return categoryCards;
    return categoryCards.filter((c) => c.categoryKey === selectedTab);
  }, [selectedTab]);

  return (
    <section id="menu" className="py-20 sm:py-28 bg-cream-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cream-200/80 border border-caramel-400/40 text-xs text-caramel-700 font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-caramel-600" />
            <span>Handcrafted Menu</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-chocolate-950 tracking-tight">
            Our Signature Bakes
          </h2>

          <p className="text-sm sm:text-base text-chocolate-800/80 leading-relaxed font-normal">
            Browse card-wise by treat category. Each card features our authentic bake and a complete price list with direct WhatsApp ordering.
          </p>

          <p className="font-script text-base sm:text-lg text-caramel-600 pt-1">
            "Because every bite matters"
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="mb-10 sm:mb-12">
          <CategoryFilter
            selectedCategory={selectedTab}
            onSelectCategory={setSelectedTab}
            cardCounts={cardCounts}
          />
        </div>

        {/* Card-Wise Menu Grid */}
        <div className="space-y-8 sm:space-y-10">
          {displayedCards.map((card) => (
            <CategoryMenuCard
              key={card.id}
              card={card}
              onItemSelect={(item, categoryTitle, image) =>
                setModalItem({ item, categoryTitle, image })
              }
            />
          ))}
        </div>

        {/* Helper Note Under Menu */}
        <div className="mt-14 text-center text-xs text-chocolate-800/70 flex items-center justify-center gap-2">
          <Heart className="w-3.5 h-3.5 text-cocoa-600 fill-cocoa-600/30" />
          <span>
            Looking for something custom or specific quantities? We bake to order on request.
          </span>
        </div>

      </div>

      {/* Item Details Lightbox / Quick View Modal */}
      {modalItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-chocolate-950/70 backdrop-blur-sm animate-fadeIn"
          onClick={() => setModalItem(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-xl bg-cream-50 rounded-3xl border border-cocoa-600/20 shadow-warm-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setModalItem(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-cream-100/90 text-chocolate-900 hover:bg-cream-200 transition-colors shadow-warm-sm"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image from Assets */}
            <div className="relative aspect-[16/9] bg-cream-100 overflow-hidden">
              <img
                src={modalItem.image}
                alt={modalItem.item.name}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-chocolate-950/60 to-transparent" />
              <div className="absolute bottom-3 left-4 text-cream-50">
                <span className="text-xs uppercase tracking-wider text-caramel-300 font-semibold">
                  {modalItem.categoryTitle}
                </span>
                <h3 className="font-serif text-2xl font-bold">
                  {modalItem.item.name}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-5">
              <div className="flex items-baseline justify-between border-b border-cream-200 pb-3">
                <span className="font-serif text-3xl font-bold text-chocolate-950">
                  {modalItem.item.priceDisplay || `₹${modalItem.item.price}`}
                </span>
                <span className="text-xs text-chocolate-800/70 font-medium">
                  Fresh homemade preparation
                </span>
              </div>

              {modalItem.item.description && (
                <p className="text-sm text-chocolate-800/90 leading-relaxed">
                  {modalItem.item.description}
                </p>
              )}

              <div className="space-y-2 text-xs text-chocolate-900 pt-1">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-caramel-600 flex-shrink-0" />
                  <span>Baked fresh on order in small batches</span>
                </div>
                <div className="flex items-center gap-2">
                  <Wheat className="w-4 h-4 text-cocoa-600 flex-shrink-0" />
                  <span>Wheat flour option available on request</span>
                </div>
              </div>

              {/* Order Button */}
              <div className="pt-3">
                <button
                  onClick={() => {
                    const url = getProductOrderUrl(
                      modalItem.item.name,
                      modalItem.item.price
                    );
                    setModalItem(null);
                    openWhatsApp(url);
                  }}
                  className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-full bg-chocolate-900 text-cream-50 hover:bg-chocolate-800 font-medium text-sm sm:text-base shadow-warm-md hover:shadow-warm-lg transition-all"
                >
                  <MessageCircle className="w-5 h-5 text-caramel-400" />
                  <span>ORDER THIS ON WHATSAPP</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

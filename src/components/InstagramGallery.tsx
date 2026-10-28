import React, { useState } from "react";
import { businessConfig } from "../config/business";
import { Eye, X, ExternalLink } from "lucide-react";
import { InstagramIcon } from "./BrandIcons";
import assets from "../assets";

interface GalleryItem {
  id: string;
  title: string;
  category: "Brownies" | "Cakes" | "Desserts" | "Chocolates" | "Special Box";
  image: string;
  caption: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Signature Brownie Bites Box",
    category: "Special Box",
    image: assets.specialBox,
    caption: "250g box decorated with Nutella, dark chocolate, Schokobons & Kit Kat pieces.",
  },
  {
    id: "g2",
    title: "Fresh Baked Brownies Stack",
    category: "Brownies",
    image: assets.brownies,
    caption: "Classic, Nutella, Nuts, Oreo, White Chocolate and Rose Milk brownies.",
  },
  {
    id: "g3",
    title: "Nutella Filled Bomboloni",
    category: "Desserts",
    image: assets.bomboloni,
    caption: "Soft Italian sugar-dusted doughnuts bursting with smooth Nutella.",
  },
  {
    id: "g4",
    title: "Warm Molten Choco Lava",
    category: "Desserts",
    image: assets.chocoLava,
    caption: "Rich, irresistible melted dark chocolate core baked in gold cups.",
  },
  {
    id: "g5",
    title: "Handcrafted Mini Chocolates",
    category: "Chocolates",
    image: assets.miniChocolates,
    caption: "Little hearts, big joy — artisanal bite-sized festive chocolates.",
  },
  {
    id: "g6",
    title: "Comforting Hot Chocolate & Brownie",
    category: "Desserts",
    image: assets.hotChocolate,
    caption: "Steaming rich chocolate drink paired with a warm homemade brownie.",
  },
];

export const InstagramGallery: React.FC = () => {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-cream-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cream-200/80 border border-caramel-400/40 text-xs text-caramel-700 font-semibold tracking-wider uppercase">
            <InstagramIcon className="w-3.5 h-3.5 text-caramel-600" />
            <span>On Our Feed</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-chocolate-950 tracking-tight">
            Follow The Baking Journey
          </h2>

          <p className="text-sm sm:text-base text-chocolate-800/80 leading-relaxed font-normal">
            Take a look into our home baking kitchen. Fresh treats, new flavor experiments, and celebration bakes shared on Instagram.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group relative aspect-square rounded-2xl sm:rounded-3xl overflow-hidden bg-cream-100 border border-cocoa-600/15 cursor-pointer shadow-warm-sm hover:shadow-warm-lg transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                loading="lazy"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-chocolate-950/80 via-chocolate-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 sm:p-5 flex flex-col justify-end text-cream-50">
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-caramel-300">
                  {item.category}
                </span>
                <h3 className="font-serif text-sm sm:text-base font-bold leading-snug">
                  {item.title}
                </h3>
                <div className="mt-2 inline-flex items-center gap-1 text-[11px] text-cream-200">
                  <Eye className="w-3 h-3 text-caramel-400" />
                  <span>Click to expand</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Follow CTA */}
        <div className="mt-12 sm:mt-16 text-center">
          <a
            href={businessConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-cream-100 hover:bg-cream-200 text-chocolate-950 border border-cocoa-600/20 transition-all duration-300 text-sm sm:text-base font-medium shadow-warm-sm hover:shadow-warm-md hover:-translate-y-0.5"
          >
            <InstagramIcon className="w-5 h-5 text-cocoa-600" />
            <span>FOLLOW OUR BAKING JOURNEY</span>
            <ExternalLink className="w-4 h-4 text-chocolate-800/70" />
          </a>
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-chocolate-950/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setActiveItem(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-w-xl w-full bg-cream-50 rounded-3xl overflow-hidden shadow-warm-xl border border-cocoa-600/20"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-cream-100/90 text-chocolate-900 hover:bg-cream-200 transition-colors shadow-warm-sm"
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-[4/3] bg-cream-100 overflow-hidden">
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-caramel-600">
                {activeItem.category}
              </span>
              <h3 className="font-serif text-2xl font-bold text-chocolate-950">
                {activeItem.title}
              </h3>
              <p className="text-sm text-chocolate-800/80">
                {activeItem.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

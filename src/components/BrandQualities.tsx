import React from "react";
import { Heart, Sparkles, Home, Wheat } from "lucide-react";

export const BrandQualities: React.FC = () => {
  const qualities = [
    {
      icon: Home,
      title: "100% HOMEMADE",
      description: "Freshly prepared from our home kitchen with care, passion, and genuine craftsmanship.",
    },
    {
      icon: Sparkles,
      title: "FRESHLY PREPARED",
      description: "Baked upon order to ensure you receive moist, fragrant, and warm bakes every single time.",
    },
    {
      icon: Heart,
      title: "MADE WITH LOVE",
      description: "A thoughtful personal touch in every creation. Because every single bite matters.",
    },
    {
      icon: Wheat,
      title: "WHEAT FLOUR OPTION",
      description: "Made with wheat flour option available for those looking for a wholesome choice.",
    },
  ];

  return (
    <section id="why-us" className="py-20 sm:py-24 bg-cream-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14 sm:mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-caramel-600">
            Our Core Promise
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-chocolate-950 tracking-tight">
            The SS Home Bakes Touch
          </h2>
          <p className="text-sm sm:text-base text-chocolate-800/80 leading-relaxed font-normal">
            No preservatives, no mass warehousing. Just small batch homemade baking crafted specifically for your celebration.
          </p>
        </div>

        {/* Qualities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {qualities.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-6 sm:p-7 rounded-3xl bg-cream-100/60 border border-cocoa-600/10 shadow-warm-sm hover:shadow-warm-md hover:bg-cream-100 transition-all duration-300 space-y-4 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-cream-50 border border-caramel-400/30 flex items-center justify-center text-cocoa-600 group-hover:scale-110 group-hover:text-caramel-600 group-hover:bg-chocolate-900 transition-all duration-300">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-chocolate-950 tracking-wide">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-chocolate-800/80 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

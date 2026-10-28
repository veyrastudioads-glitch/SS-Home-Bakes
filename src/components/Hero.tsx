import React from "react";
import { businessConfig } from "../config/business";
import { getGeneralEnquiryUrl, openWhatsApp } from "../utils/whatsapp";
import { MessageCircle, ArrowRight, Heart, Sparkles, MapPin, Wheat } from "lucide-react";
import assets from "../assets";

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-b from-cream-100 via-cream-50 to-cream-100"
    >
      {/* Decorative Warm Ambient Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-caramel-300/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 right-0 w-[350px] h-[350px] bg-cocoa-500/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6 sm:space-y-7">
            {/* Location & Brand Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream-200/80 border border-caramel-500/30 shadow-warm-sm">
              <MapPin className="w-3.5 h-3.5 text-caramel-600" />
              <span className="text-xs sm:text-sm font-medium text-chocolate-900 tracking-wide">
                Freshly Handcrafted Home Bakery
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-caramel-500 animate-pulse" />
            </div>

            {/* Editorial Brand Heading */}
            <div className="space-y-2 sm:space-y-3">
              <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-caramel-600 font-semibold">
                {businessConfig.tagline}
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-chocolate-950 leading-[1.08]">
                Small bites. <br />
                <span className="font-serif italic text-cocoa-600 font-normal">
                  Big happiness.
                </span>
              </h1>
            </div>

            {/* Editorial Subheadline */}
            <p className="text-base sm:text-lg md:text-xl text-chocolate-800/90 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
              {businessConfig.heroSubheadline} From fudgy brownies and molten choco lava to fluffy bomboloni, freshly prepared in small batches upon order.
            </p>

            {/* Verified Menu Highlights Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-wheat-100/90 border border-caramel-400/40 text-xs text-chocolate-900 font-medium">
                <Wheat className="w-3.5 h-3.5 text-caramel-600" />
                Made with Wheat Flour option
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cream-200/70 border border-cocoa-600/20 text-xs text-chocolate-900 font-medium">
                <Heart className="w-3.5 h-3.5 text-cocoa-600 fill-cocoa-600/20" />
                100% Homemade
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cream-200/70 border border-cocoa-600/20 text-xs text-chocolate-900 font-medium">
                <Sparkles className="w-3.5 h-3.5 text-caramel-500" />
                Freshly Baked to Order
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 sm:gap-4 pt-2">
              <button
                onClick={() => openWhatsApp(getGeneralEnquiryUrl())}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-chocolate-900 text-cream-50 hover:bg-chocolate-800 text-base font-medium shadow-warm-md hover:shadow-warm-lg hover:-translate-y-0.5 transition-all duration-300 group focus:outline-none focus-visible:ring-2 focus-visible:ring-caramel-500"
              >
                <MessageCircle className="w-5 h-5 text-caramel-400 group-hover:scale-110 transition-transform" />
                <span>ORDER ON WHATSAPP</span>
              </button>

              <a
                href="#menu"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-cream-100 hover:bg-cream-200/80 text-chocolate-900 border border-cocoa-600/20 text-base font-medium shadow-warm-sm hover:shadow-warm-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <span>EXPLORE MENU</span>
                <ArrowRight className="w-4 h-4 text-cocoa-600" />
              </a>
            </div>

            {/* WhatsApp Phone Quick Note */}
            <p className="text-xs text-chocolate-800/70 pt-1">
              Direct Orders & Custom Enquiries:{" "}
              <span className="font-semibold text-chocolate-900">
                Online WhatsApp Order System
              </span>
            </p>
          </div>

          {/* Right Column: Close-up Product Showcase using only Assets */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-none">
              
              {/* Outer Decorative Card Frame */}
              <div className="relative rounded-3xl bg-gradient-to-br from-cream-100 to-cream-200/70 p-3 sm:p-4 border-2 border-caramel-400/30 shadow-warm-xl">
                
                {/* Main Product Showcase Image (Real Brownie Bites Box from assets) */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-chocolate-900/5 shadow-inner group">
                  <img
                    src={assets.specialBox}
                    alt="SS Home Bakes 250g Brownie Bites Special Box"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-chocolate-950/70 via-transparent to-transparent" />
                  
                  {/* Floating Tag inside picture */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between text-cream-50">
                    <div>
                      <span className="font-script text-caramel-300 text-sm">Signature Favorite</span>
                      <h3 className="font-serif text-lg sm:text-xl font-bold leading-tight">
                        250g Brownie Bites Box
                      </h3>
                      <p className="text-xs text-cream-100/80">
                        Nutella, Kit Kat & Schokobons
                      </p>
                    </div>
                    <span className="text-lg font-serif font-bold text-caramel-300 bg-chocolate-900/80 px-2.5 py-1 rounded-lg border border-caramel-500/40">
                      ₹199
                    </span>
                  </div>
                </div>

                {/* Sub Image Pill: Fresh Bomboloni & Choco Lava from assets */}
                <div className="mt-3 grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2.5 p-2 rounded-xl bg-cream-50/90 border border-cocoa-600/10 shadow-warm-sm">
                    <img
                      src={assets.bomboloni}
                      alt="Bomboloni"
                      className="w-12 h-12 object-cover rounded-lg flex-shrink-0"
                    />
                    <div className="min-w-0">
                      <p className="text-xs font-serif font-bold text-chocolate-950 truncate">Bomboloni</p>
                      <p className="text-[11px] text-caramel-600 font-semibold">From ₹59</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 p-2 rounded-xl bg-cream-50/90 border border-cocoa-600/10 shadow-warm-sm">
                    <img
                      src={assets.chocoLava}
                      alt="Choco Lava"
                      className="w-12 h-12 object-cover rounded-lg flex-shrink-0"
                    />
                    <div className="min-w-0">
                      <p className="text-xs font-serif font-bold text-chocolate-950 truncate">Choco Lava</p>
                      <p className="text-[11px] text-caramel-600 font-semibold">₹59</p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Floating Handcrafted Stamp Badge */}
              <div className="absolute -top-4 -right-3 sm:-right-4 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-chocolate-950 text-cream-50 border-2 border-caramel-400 p-2 flex flex-col items-center justify-center text-center shadow-gold-glow animate-subtle-pulse">
                <Heart className="w-4 h-4 text-caramel-400 fill-caramel-400 mb-0.5" />
                <span className="font-serif text-[11px] sm:text-xs font-bold leading-tight text-caramel-300">
                  LOADED
                </span>
                <span className="font-script text-xs sm:text-sm text-cream-100">
                  with Love
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

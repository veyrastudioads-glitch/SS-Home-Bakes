import React from "react";
import { getGeneralEnquiryUrl, openWhatsApp } from "../utils/whatsapp";
import { MapPin, MessageCircle, Navigation, Phone } from "lucide-react";

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-20 sm:py-28 bg-cream-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-cream-100 to-cream-200/80 rounded-3xl p-8 sm:p-12 md:p-16 border-2 border-caramel-400/30 shadow-warm-xl text-center space-y-8 relative">
          
          {/* Decorative Corner Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-chocolate-900 text-cream-50 text-xs sm:text-sm font-semibold tracking-wide shadow-warm-sm">
            <MapPin className="w-4 h-4 text-caramel-400" />
            <span>Local Home Bakery</span>
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-chocolate-950 tracking-tight">
              Fresh Handcrafted Bakery
            </h2>
            <p className="text-base sm:text-lg text-chocolate-800/85 max-w-xl mx-auto font-normal">
              Freshly prepared in our home kitchen. We bake each batch to order for dessert lovers and sweet celebrations.
            </p>
          </div>

          {/* Details Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto text-left">
            <div className="p-4 rounded-2xl bg-cream-50/90 border border-cocoa-600/10 shadow-warm-sm flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cream-200 flex items-center justify-center text-caramel-700 flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-caramel-700 font-bold">Service Area</p>
                <p className="text-sm font-semibold text-chocolate-950">Local Delivery & Pickup</p>
                <p className="text-[11px] text-chocolate-800/70">Freshly packed upon order</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-cream-50/90 border border-cocoa-600/10 shadow-warm-sm flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cream-200 flex items-center justify-center text-cocoa-600 flex-shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-caramel-700 font-bold">Direct Ordering</p>
                <span className="text-sm font-semibold text-chocolate-950">
                  Online WhatsApp System
                </span>
                <p className="text-[11px] text-chocolate-800/70">Fast enquiry & quotation</p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={() => openWhatsApp(getGeneralEnquiryUrl())}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-chocolate-900 text-cream-50 hover:bg-chocolate-800 font-medium text-sm sm:text-base shadow-warm-md hover:shadow-warm-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5 text-caramel-400" />
              <span>ORDER ON WHATSAPP</span>
            </button>

            <a
              href="#menu"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-cream-100 hover:bg-cream-200 text-chocolate-900 border border-cocoa-600/20 font-medium text-sm sm:text-base shadow-warm-sm hover:shadow-warm-md hover:-translate-y-0.5 transition-all duration-300"
            >
              <Navigation className="w-4 h-4 text-cocoa-600" />
              <span>EXPLORE MENU</span>
            </a>
          </div>

          <p className="font-script text-base text-caramel-700">
            "Thank you for supporting our small dream!"
          </p>

        </div>

      </div>
    </section>
  );
};

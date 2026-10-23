import React from "react";
import { businessConfig } from "../config/business";
import { getGeneralEnquiryUrl, openWhatsApp } from "../utils/whatsapp";
import { MessageCircle } from "lucide-react";

export const WhatsAppButton: React.FC = () => {
  const handleClick = () => {
    openWhatsApp(getGeneralEnquiryUrl());
  };

  return (
    <>
      {/* 1. Mobile Fixed Sticky Bottom CTA Banner (Crucial for Instagram Mobile Traffic) */}
      <div className="fixed bottom-0 inset-x-0 z-40 p-3 sm:hidden bg-gradient-to-t from-cream-100 via-cream-100/95 to-transparent pointer-events-none">
        <button
          onClick={handleClick}
          className="pointer-events-auto w-full flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-full bg-chocolate-900 text-cream-50 font-bold text-sm tracking-wide shadow-warm-lg active:scale-95 transition-transform border border-caramel-500/40"
          aria-label="Order on WhatsApp"
        >
          <MessageCircle className="w-5 h-5 text-caramel-400 fill-caramel-400/20 animate-pulse" />
          <span>ORDER ON WHATSAPP</span>
          <span className="text-[11px] text-caramel-300 font-normal">
            ({businessConfig.whatsappNumber})
          </span>
        </button>
      </div>

      {/* 2. Desktop Floating Action Button (Bottom Right) */}
      <div className="hidden sm:block fixed bottom-6 right-6 z-40">
        <button
          onClick={handleClick}
          className="group relative flex items-center gap-3 pl-4 pr-5 py-3 rounded-full bg-chocolate-900 hover:bg-chocolate-800 text-cream-50 shadow-warm-lg hover:shadow-warm-xl border border-caramel-500/40 hover:-translate-y-1 transition-all duration-300"
          aria-label="Order or enquire on WhatsApp"
        >
          <div className="w-9 h-9 rounded-full bg-caramel-500 text-chocolate-950 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
            <MessageCircle className="w-5 h-5 fill-chocolate-950" />
          </div>
          <div className="text-left">
            <span className="block text-[11px] uppercase tracking-wider text-caramel-400 font-semibold leading-tight">
              Direct Enquiry
            </span>
            <span className="block text-sm font-bold text-cream-50 leading-tight">
              Order on WhatsApp
            </span>
          </div>
        </button>
      </div>
    </>
  );
};

import React from "react";
import { businessConfig } from "../config/business";
import { getGeneralEnquiryUrl, openWhatsApp } from "../utils/whatsapp";
import { Cake, MessageCircle, CheckCircle, Gift, ArrowRight } from "lucide-react";

export const HowToOrder: React.FC = () => {
  const stepIcons = [Cake, MessageCircle, CheckCircle, Gift];

  return (
    <section className="py-20 sm:py-28 bg-cream-100/70 border-y border-cocoa-600/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14 sm:mb-20">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-caramel-600">
            Simple & Personal
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-chocolate-950 tracking-tight">
            How Ordering Works
          </h2>
          <p className="text-sm sm:text-base text-chocolate-800/80 leading-relaxed font-normal">
            No complicated checkouts or automated bots. Connect directly with the baker on WhatsApp for freshly prepared home desserts.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {businessConfig.orderingSteps.map((step, idx) => {
            const IconComponent = stepIcons[idx] || Cake;
            return (
              <div
                key={step.number}
                className="relative bg-cream-50 rounded-3xl p-6 sm:p-7 border border-cocoa-600/15 shadow-warm-sm hover:shadow-warm-md transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                {/* Step Number Stamp */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-serif text-3xl sm:text-4xl font-bold text-caramel-400/80 group-hover:text-caramel-600 transition-colors">
                    {step.number}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-cream-100 border border-caramel-400/30 flex items-center justify-center text-cocoa-600 group-hover:bg-chocolate-900 group-hover:text-cream-50 transition-all duration-300">
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-chocolate-950 tracking-wide">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-chocolate-800/80 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Decorative bottom progress accent */}
                <div className="mt-6 pt-4 border-t border-cream-200 flex items-center gap-2 text-xs font-semibold text-caramel-700">
                  <span>Step {idx + 1} of 4</span>
                  <ArrowRight className="w-3.5 h-3.5 text-caramel-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Order Enquiries CTA Banner */}
        <div className="mt-14 sm:mt-16 text-center">
          <button
            onClick={() => openWhatsApp(getGeneralEnquiryUrl())}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-chocolate-900 text-cream-50 hover:bg-chocolate-800 transition-all duration-300 text-sm sm:text-base font-medium shadow-warm-md hover:shadow-warm-lg hover:-translate-y-0.5"
          >
            <MessageCircle className="w-5 h-5 text-caramel-400" />
            <span>START YOUR WHATSAPP ENQUIRY</span>
          </button>
        </div>

      </div>
    </section>
  );
};

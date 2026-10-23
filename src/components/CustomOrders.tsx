import React, { useState } from "react";
import { getCustomOrderUrl, openWhatsApp } from "../utils/whatsapp";
import type { CustomOrderData } from "../utils/whatsapp";
import { Cake, Calendar, Sparkles, MessageCircle, Heart, Send } from "lucide-react";

export const CustomOrders: React.FC = () => {
  const [formData, setFormData] = useState<CustomOrderData>({
    occasion: "",
    cakeType: "",
    flavour: "",
    approxSize: "",
    requiredDate: "",
    notes: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = getCustomOrderUrl(formData);
    openWhatsApp(url);
  };

  return (
    <section id="custom-orders" className="py-20 sm:py-28 bg-gradient-to-b from-cream-100 to-cream-50 relative overflow-hidden">
      {/* Decorative ambient backdrop */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-caramel-300/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Story & Inspiration */}
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cream-200/90 border border-caramel-400/40 text-xs text-caramel-700 font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-caramel-600" />
              <span>Bespoke Celebrations</span>
            </div>

            <div className="space-y-2">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-chocolate-950 tracking-tight leading-tight">
                YOUR IDEA. <br />
                <span className="font-serif italic text-cocoa-600 font-normal">
                  OUR BAKE.
                </span>
              </h2>
            </div>

            <p className="text-sm sm:text-base text-chocolate-800/80 leading-relaxed font-normal">
              Planning something special? Tell us what you're looking for and we'll discuss your order on WhatsApp. Share your theme, flavors, and required dates with us.
            </p>

            {/* Feature points */}
            <div className="space-y-3.5 pt-2 text-left max-w-md mx-auto lg:mx-0">
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-cream-50/80 border border-cocoa-600/10 shadow-warm-sm">
                <Cake className="w-5 h-5 text-caramel-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-chocolate-950">Custom Bakes for Every Occasion</h4>
                  <p className="text-xs text-chocolate-800/70">Birthdays, anniversaries, baby showers, or sweet gift hampers.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-cream-50/80 border border-cocoa-600/10 shadow-warm-sm">
                <Calendar className="w-5 h-5 text-cocoa-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-chocolate-950">Advance Notice Recommended</h4>
                  <p className="text-xs text-chocolate-800/70">Kindly enquire 24–48 hours in advance to guarantee your preferred slot.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-cream-50/80 border border-cocoa-600/10 shadow-warm-sm">
                <Heart className="w-5 h-5 text-caramel-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-chocolate-950">Reference Photos Welcome</h4>
                  <p className="text-xs text-chocolate-800/70">Have a design picture from Instagram or Pinterest? You can attach it directly in our WhatsApp chat!</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-cream-50 rounded-3xl p-6 sm:p-8 md:p-10 border border-cocoa-600/15 shadow-warm-xl">
              <div className="mb-6 pb-4 border-b border-cream-200">
                <h3 className="font-serif text-2xl font-bold text-chocolate-950">
                  Custom Order Enquiry
                </h3>
                <p className="text-xs text-chocolate-800/75 mt-1">
                  Fill in your ideas below — this opens WhatsApp with your pre-filled inquiry ready to send.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-chocolate-900 mb-1.5">
                      Occasion
                    </label>
                    <input
                      type="text"
                      name="occasion"
                      value={formData.occasion}
                      onChange={handleChange}
                      placeholder="e.g. Birthday, Anniversary, Get-together"
                      className="w-full px-4 py-2.5 rounded-xl bg-cream-100/60 border border-cocoa-600/20 text-chocolate-950 text-sm focus:outline-none focus:ring-2 focus:ring-caramel-500 focus:bg-cream-50 transition-all placeholder:text-chocolate-800/40"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-chocolate-900 mb-1.5">
                      Treat Type
                    </label>
                    <input
                      type="text"
                      name="cakeType"
                      value={formData.cakeType}
                      onChange={handleChange}
                      placeholder="e.g. Custom Cake, Brownie Hamper, Cupcakes"
                      className="w-full px-4 py-2.5 rounded-xl bg-cream-100/60 border border-cocoa-600/20 text-chocolate-950 text-sm focus:outline-none focus:ring-2 focus:ring-caramel-500 focus:bg-cream-50 transition-all placeholder:text-chocolate-800/40"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-chocolate-900 mb-1.5">
                      Preferred Flavour
                    </label>
                    <input
                      type="text"
                      name="flavour"
                      value={formData.flavour}
                      onChange={handleChange}
                      placeholder="e.g. Nutella, Dark Chocolate, Rose Milk"
                      className="w-full px-4 py-2.5 rounded-xl bg-cream-100/60 border border-cocoa-600/20 text-chocolate-950 text-sm focus:outline-none focus:ring-2 focus:ring-caramel-500 focus:bg-cream-50 transition-all placeholder:text-chocolate-800/40"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-chocolate-900 mb-1.5">
                      Approx Size / Qty
                    </label>
                    <input
                      type="text"
                      name="approxSize"
                      value={formData.approxSize}
                      onChange={handleChange}
                      placeholder="e.g. 500g, 1kg, 12 pieces"
                      className="w-full px-4 py-2.5 rounded-xl bg-cream-100/60 border border-cocoa-600/20 text-chocolate-950 text-sm focus:outline-none focus:ring-2 focus:ring-caramel-500 focus:bg-cream-50 transition-all placeholder:text-chocolate-800/40"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-chocolate-900 mb-1.5">
                      Required Date
                    </label>
                    <input
                      type="date"
                      name="requiredDate"
                      value={formData.requiredDate}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-cream-100/60 border border-cocoa-600/20 text-chocolate-950 text-sm focus:outline-none focus:ring-2 focus:ring-caramel-500 focus:bg-cream-50 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-chocolate-900 mb-1.5">
                    Design Idea or Special Instructions
                  </label>
                  <textarea
                    name="notes"
                    rows={3}
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="Describe your design, wheat flour preferences, message on cake, or any allergies..."
                    className="w-full px-4 py-2.5 rounded-xl bg-cream-100/60 border border-cocoa-600/20 text-chocolate-950 text-sm focus:outline-none focus:ring-2 focus:ring-caramel-500 focus:bg-cream-50 transition-all placeholder:text-chocolate-800/40"
                  />
                </div>

                <p className="text-[11px] text-chocolate-800/70 italic">
                  💡 Tip: You can directly attach reference photos and inspiration pictures inside the WhatsApp chat once it opens!
                </p>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-full bg-chocolate-900 text-cream-50 hover:bg-chocolate-800 font-medium text-sm sm:text-base shadow-warm-md hover:shadow-warm-lg hover:-translate-y-0.5 transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5 text-caramel-400" />
                  <span>REQUEST A CUSTOM ORDER ON WHATSAPP</span>
                  <Send className="w-4 h-4 text-cream-200" />
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

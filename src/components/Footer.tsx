import React from "react";
import { businessConfig } from "../config/business";
import { getGeneralEnquiryUrl, openWhatsApp } from "../utils/whatsapp";
import { MessageCircle, Heart, MapPin, ArrowUp } from "lucide-react";
import { InstagramIcon, YouTubeIcon } from "./BrandIcons";
import assets from "../assets";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-chocolate-950 text-cream-100 pt-16 pb-28 sm:pb-16 border-t border-caramel-500/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-chocolate-800/60">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-caramel-400 bg-chocolate-900 shadow-gold-glow flex-shrink-0">
                <img
                  src={assets.logo}
                  alt="SS Home Bakes Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-wide text-cream-50">
                  {businessConfig.brandName}
                </h3>
                <p className="font-script text-xs sm:text-sm text-caramel-400">
                  {businessConfig.tagline}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-cream-200/80 max-w-sm mx-auto md:mx-0 leading-relaxed">
              Homemade fresh brownies, cakes, bomboloni, and chocolate delights crafted with love in our home kitchen.
            </p>

            <div className="flex items-center justify-center md:justify-start gap-2 text-xs text-caramel-300">
              <MapPin className="w-3.5 h-3.5" />
              <span>{businessConfig.location}</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 text-center md:text-left space-y-3">
            <h4 className="font-serif text-base font-bold text-cream-50 tracking-wider uppercase">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-cream-200/80">
              <li>
                <a href="#home" className="hover:text-caramel-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-caramel-400 transition-colors">
                  Menu & Prices
                </a>
              </li>
              <li>
                <a href="#custom-orders" className="hover:text-caramel-400 transition-colors">
                  Custom Orders
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-caramel-400 transition-colors">
                  Our Promise
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-caramel-400 transition-colors">
                  Baking Gallery
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-caramel-400 transition-colors">
                  Location & Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Connect / Socials */}
          <div className="md:col-span-4 text-center md:text-left space-y-4">
            <h4 className="font-serif text-base font-bold text-cream-50 tracking-wider uppercase">
              Connect With Us
            </h4>
            <p className="text-xs text-cream-200/80">
              For new updates, seasonal treats, and surprise menu specials:
            </p>

            <div className="flex items-center justify-center md:justify-start gap-3">
              {/* WhatsApp */}
              <button
                onClick={() => openWhatsApp(getGeneralEnquiryUrl())}
                className="w-10 h-10 rounded-full bg-chocolate-900 border border-caramel-500/40 hover:bg-caramel-500 hover:text-chocolate-950 flex items-center justify-center text-caramel-300 transition-all duration-300 shadow-warm-sm"
                aria-label="Contact on WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </button>

              {/* Instagram */}
              <a
                href={businessConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-chocolate-900 border border-caramel-500/40 hover:bg-caramel-500 hover:text-chocolate-950 flex items-center justify-center text-caramel-300 transition-all duration-300 shadow-warm-sm"
                aria-label="Follow on Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>

              {/* YouTube */}
              <a
                href={businessConfig.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-chocolate-900 border border-caramel-500/40 hover:bg-caramel-500 hover:text-chocolate-950 flex items-center justify-center text-caramel-300 transition-all duration-300 shadow-warm-sm"
                aria-label="Subscribe on YouTube"
              >
                <YouTubeIcon className="w-5 h-5" />
              </a>
            </div>

            <p className="text-xs text-caramel-400 font-medium">
              Online WhatsApp Order System • Fresh to Order
            </p>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream-200/60">
          <p>© 2026 {businessConfig.brandName}. All rights reserved.</p>

          <p className="flex items-center gap-1.5 text-caramel-400/90 font-script text-sm">
            <span>Made with</span>
            <Heart className="w-3.5 h-3.5 text-caramel-500 fill-caramel-500" />
            <span>for every sweet moment</span>
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 hover:text-caramel-400 transition-colors"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};

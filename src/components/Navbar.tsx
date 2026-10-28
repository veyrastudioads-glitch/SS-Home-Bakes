import React, { useState, useEffect } from "react";
import { businessConfig } from "../config/business";
import { getGeneralEnquiryUrl, openWhatsApp } from "../utils/whatsapp";
import { Menu, X, MessageCircle } from "lucide-react";
import assets from "../assets";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Menu", href: "#menu" },
    { label: "Custom Orders", href: "#custom-orders" },
    { label: "Why Us", href: "#why-us" },
    { label: "Gallery", href: "#gallery" },
    { label: "Location", href: "#location" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-cream-100/90 backdrop-blur-md shadow-warm-sm border-b border-cocoa-600/10 py-3"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Name */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-caramel-500 rounded-lg p-1"
            aria-label="SS Home Bakes Home"
          >
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-caramel-500/80 shadow-warm-sm group-hover:scale-105 transition-transform duration-300 bg-chocolate-950 flex-shrink-0">
              <img
                src={assets.logo}
                alt="SS Home Bakes Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-wide text-chocolate-900 group-hover:text-cocoa-600 transition-colors leading-tight">
                {businessConfig.brandName}
              </span>
              <span className="font-script text-xs sm:text-sm text-caramel-600 tracking-wider">
                Homemade • Fresh • With Love
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-chocolate-900 hover:text-caramel-600 font-medium text-sm tracking-wide transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-caramel-500 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => openWhatsApp(getGeneralEnquiryUrl())}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-chocolate-900 text-cream-50 hover:bg-chocolate-800 transition-all duration-300 text-sm font-medium shadow-warm-sm hover:shadow-warm-md hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-caramel-500"
            >
              <MessageCircle className="w-4 h-4 text-caramel-400" />
              <span>ORDER NOW</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-chocolate-900 hover:bg-cream-200/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-caramel-500"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-full bg-cream-50/95 backdrop-blur-xl border-b border-cocoa-600/10 shadow-warm-lg transition-all animate-fadeIn px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-chocolate-900 hover:text-caramel-600 transition-colors py-2 border-b border-cream-200/50"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openWhatsApp(getGeneralEnquiryUrl());
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-chocolate-900 text-cream-50 font-medium text-sm shadow-warm-sm"
            >
              <MessageCircle className="w-4 h-4 text-caramel-400" />
              <span>Order on WhatsApp</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

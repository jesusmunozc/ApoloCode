"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import Logo from "./Logo";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative bg-gray-900 text-white py-6 overflow-hidden">
      {/* Animated border top */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 animate-[rgbBorder_3s_linear_infinite] bg-[length:200%_100%]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Company Info */}
          <div className="flex items-center">
            <Logo width={32} height={32} variant="white" />
          </div>

          {/* Quick Links */}
          <nav className="flex space-x-6">
            <a
              href="#home"
              className="relative text-gray-300 hover:text-white transition-all duration-300 text-sm group"
            >
              <span className="relative z-10">{t("nav.home")}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 scale-0 group-hover:scale-100 transition-transform duration-300 rounded"></div>
            </a>
            <a
              href="#services"
              className="relative text-gray-300 hover:text-white transition-all duration-300 text-sm group"
            >
              <span className="relative z-10">{t("nav.services")}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 scale-0 group-hover:scale-100 transition-transform duration-300 rounded"></div>
            </a>
            <a
              href="#portfolio"
              className="relative text-gray-300 hover:text-white transition-all duration-300 text-sm group"
            >
              <span className="relative z-10">{t("nav.portfolio")}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 to-cyan-400/20 scale-0 group-hover:scale-100 transition-transform duration-300 rounded"></div>
            </a>
            <a
              href="#contact"
              className="relative text-gray-300 hover:text-white transition-all duration-300 text-sm group"
            >
              <span className="relative z-10">{t("nav.contact")}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 scale-0 group-hover:scale-100 transition-transform duration-300 rounded"></div>
            </a>
          </nav>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-600/50 mt-4 pt-4 text-center relative">
          <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-purple-400/50 to-transparent"></div>
          <p className="text-gray-400 text-xs">{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  );
}

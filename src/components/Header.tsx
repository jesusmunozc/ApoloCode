"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSelector from "./LanguageSelector";
import Logo from "./Logo";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <header className="fixed w-full bg-white/50 backdrop-blur-sm z-50 shadow-sm border-b border-secondary-100/30">
      {/* Subtle tech accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-300/30 to-transparent"></div>

      <nav className="container mx-auto px-4 sm:px-6 lg:container-padding relative z-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#home"
            className="transition-all duration-300 hover:scale-105"
          >
            <Logo width={48} height={48} />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-secondary-700 hover:text-primary-600 font-medium transition-colors duration-300"
            >
              {t("nav.home")}
            </a>
            <a
              href="#services"
              className="text-secondary-700 hover:text-primary-600 font-medium transition-colors duration-300"
            >
              {t("nav.services")}
            </a>
            <a
              href="#portfolio"
              className="text-secondary-700 hover:text-primary-600 font-medium transition-colors duration-300"
            >
              {t("nav.portfolio")}
            </a>
            <a
              href="#contact"
              className="text-secondary-700 hover:text-primary-600 font-medium transition-colors duration-300"
            >
              {t("nav.contact")}
            </a>
            <LanguageSelector />
          </div>

          {/* Enhanced Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2 sm:space-x-3">
            <LanguageSelector />
            <button
              className="flex flex-col space-y-1.5 p-2 rounded-lg hover:bg-secondary-100 transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span
                className={`block w-7 h-0.5 bg-secondary-600 transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`block w-7 h-0.5 bg-secondary-600 transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block w-7 h-0.5 bg-secondary-600 transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-6 pb-6 border-t border-secondary-200/30">
            <div className="flex flex-col space-y-4 pt-6">
              <a
                href="#home"
                className="text-secondary-700 hover:text-primary-600 font-medium transition-all duration-300 hover:translate-x-2 hover:scale-105"
              >
                {t("nav.home")}
              </a>
              <a
                href="#services"
                className="text-secondary-700 hover:text-primary-600 font-medium transition-all duration-300 hover:translate-x-2 hover:scale-105"
              >
                {t("nav.services")}
              </a>
              <a
                href="#portfolio"
                className="text-secondary-700 hover:text-primary-600 font-medium transition-all duration-300 hover:translate-x-2 hover:scale-105"
              >
                {t("nav.portfolio")}
              </a>
              <a
                href="#contact"
                className="text-secondary-700 hover:text-primary-600 font-medium transition-all duration-300 hover:translate-x-2 hover:scale-105"
              >
                {t("nav.contact")}
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

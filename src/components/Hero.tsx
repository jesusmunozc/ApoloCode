"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Hero() {
  const { t } = useLanguage();
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const words = ["Diseñamos", "Creamos"];

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      // Escribir letra por letra
      if (displayedText.length < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, displayedText.length + 1));
        }, 100); // 100ms por letra al escribir
      } else {
        // Pausa de 3 segundos una vez que la palabra está completa
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 3000); // 3 segundos de pausa
      }
    } else {
      // Borrar letra por letra
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 50); // 50ms por letra al borrar (rápido)
      } else {
        // Cambiar a la siguiente palabra
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isTyping, currentWordIndex, words]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 pb-8 sm:pt-20 sm:pb-12 lg:pt-24 lg:pb-20 bg-gradient-to-br from-secondary-50 via-white to-secondary-50 white-wall-texture tech-pattern-elegant subtle-texture-base tech-overlay tech-overlay-enhanced tech-shine overflow-hidden relative"
    >
      {/* Subtle tech accents with enhanced blue effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-1/4 w-32 h-32 bg-gradient-to-br from-primary-100/50 to-blue-100/60 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-gradient-to-tl from-secondary-100/50 to-blue-200/40 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-50/30 to-primary-50/40 rounded-full blur-3xl"></div>
      </div>

      {/* Additional blue tech overlay effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-1/3 w-24 h-24 bg-gradient-to-br from-blue-300/40 to-transparent rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-16 left-1/3 w-28 h-28 bg-gradient-to-tr from-blue-200/35 to-primary-200/40 rounded-full blur-2xl"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-gradient-to-br from-blue-400/30 to-transparent rounded-full blur-lg"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:container-padding relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6 md:gap-8 lg:gap-16 min-h-[70vh] sm:min-h-[75vh] lg:min-h-[70vh]">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left animate-fade-in order-1 lg:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-tight mb-3 sm:mb-4 lg:mb-6 relative px-2 sm:px-0">
              <span className="text-secondary-900 relative inline-block align-baseline">
                <span className="inline-block align-baseline">
                  {displayedText}
                </span>
                <span
                  className={`inline-block w-0.5 h-[0.9em] bg-primary-600 ml-1 align-baseline ${
                    (isTyping &&
                      displayedText.length ===
                        words[currentWordIndex].length) ||
                    (!isTyping && displayedText.length > 0)
                      ? "animate-[cursorBlink_1s_infinite]"
                      : "opacity-100"
                  }`}
                ></span>
              </span>
              <span className="text-primary-600 block lg:inline relative">
                <span className="relative z-10">
                  {" "}
                  {t("hero.title.highlight")}
                </span>
              </span>
              <br className="hidden lg:block" />
              <span className="block text-secondary-900">
                {t("hero.title.end")}
              </span>
            </h1>
            <p className="text-sm sm:text-base lg:text-xl text-secondary-600 leading-relaxed mb-4 sm:mb-6 lg:mb-8 max-w-2xl mx-auto lg:mx-0 px-2 sm:px-0">
              {t("hero.description")}
            </p>

            {/* Experience Statistics */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:flex lg:gap-8 justify-center lg:justify-start mb-6 lg:mb-8 px-1 sm:px-2 lg:px-0">
              <div className="text-center lg:text-left">
                <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-primary-600 mb-0.5 lg:mb-1">
                  3+
                </div>
                <div className="text-xs sm:text-sm lg:text-base text-secondary-600 leading-tight">
                  Años de experiencia
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-primary-600 mb-0.5 lg:mb-1">
                  20+
                </div>
                <div className="text-xs sm:text-sm lg:text-base text-secondary-600 leading-tight">
                  Proyectos realizados
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-primary-600 mb-0.5 lg:mb-1">
                  100%
                </div>
                <div className="text-xs sm:text-sm lg:text-base text-secondary-600 leading-tight">
                  Clientes satisfechos
                </div>
              </div>
            </div>

            {/* Buttons for desktop */}
            <div className="hidden lg:flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start w-full max-w-md sm:max-w-none mx-auto lg:mx-0">
              <a
                href="#contact"
                className="bg-secondary-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-600 transition-colors duration-300 text-center"
              >
                {t("hero.cta.primary")}
              </a>
              <a
                href="#portfolio"
                className="border-2 border-secondary-900 text-secondary-900 px-8 py-4 rounded-lg font-semibold hover:bg-secondary-900 hover:text-white transition-colors duration-300 text-center"
              >
                {t("hero.cta.secondary")}
              </a>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="w-full lg:w-1/2 flex justify-center animate-slide-up order-2 lg:order-2 mb-4 sm:mb-6 lg:mb-0">
            <div className="relative group w-full max-w-sm sm:max-w-md lg:max-w-lg">
              {/* Professional Development Image */}
              <div className="relative w-full aspect-[5/4] rounded-2xl sm:rounded-3xl overflow-hidden shadow-large transform group-hover:scale-[1.02] transition-all duration-500">
                <Image
                  src="/images/hero-development.png"
                  alt="Professional Web Development with React and Next.js"
                  width={500}
                  height={400}
                  className="object-cover w-full h-full"
                  priority
                  quality={100}
                />

                {/* Simplified overlay */}
                <div className="absolute inset-0 bg-secondary-900/10"></div>
              </div>

              {/* Simplified floating elements */}
              <div className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 w-12 h-12 sm:w-16 sm:h-16 bg-primary-100/80 rounded-2xl rotate-12 animate-pulse"></div>
              <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 w-8 h-8 sm:w-12 sm:h-12 bg-secondary-100/80 rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>

          {/* Buttons - Moved to bottom on mobile */}
          <div className="w-full lg:hidden flex flex-col items-center order-3">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full max-w-sm sm:max-w-md">
              <a
                href="#contact"
                className="bg-secondary-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-primary-600 transition-colors duration-300 text-center text-sm sm:text-base"
              >
                {t("hero.cta.primary")}
              </a>
              <a
                href="#portfolio"
                className="border-2 border-secondary-900 text-secondary-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-secondary-900 hover:text-white transition-colors duration-300 text-center text-sm sm:text-base"
              >
                {t("hero.cta.secondary")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

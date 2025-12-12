"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FloatingElement } from "./animations/MotionWrapper";

export default function Hero() {
  const { t, language } = useLanguage();
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  // Obtener las palabras del contexto de idioma
  const words = Array.isArray(t("hero.words"))
    ? (t("hero.words") as string[])
    : ["Diseñamos", "Creamos"];

  // Reiniciar la animación cuando cambia el idioma
  useEffect(() => {
    setCurrentWordIndex(0);
    setDisplayedText("");
    setIsTyping(true);
  }, [language]);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      if (displayedText.length < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, displayedText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 3000);
      }
    } else {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 50);
      } else {
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isTyping, currentWordIndex, words]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, x: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  const statVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.98 },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 pb-8 sm:pt-20 sm:pb-12 lg:pt-24 lg:pb-20 bg-gradient-to-br from-secondary-50 via-white to-secondary-50 white-wall-texture tech-pattern-elegant subtle-texture-base tech-overlay tech-overlay-enhanced tech-shine overflow-hidden relative"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-1/4 w-32 h-32 bg-gradient-to-br from-primary-100/50 to-blue-100/60 rounded-full blur-2xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-20 right-1/4 w-40 h-40 bg-gradient-to-tl from-secondary-100/50 to-blue-200/40 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-50/30 to-primary-50/40 rounded-full blur-3xl"
        />
      </div>

      {/* Additional animated overlay effects */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 right-1/3 w-24 h-24 bg-gradient-to-br from-blue-300/40 to-transparent rounded-full blur-xl"
        />
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="absolute bottom-16 left-1/3 w-28 h-28 bg-gradient-to-tr from-blue-200/35 to-primary-200/40 rounded-full blur-2xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:container-padding relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6 md:gap-8 lg:gap-16 min-h-[70vh] sm:min-h-[75vh] lg:min-h-[70vh]">
          {/* Left Content */}
          <motion.div
            className="w-full lg:w-1/2 text-center lg:text-left order-1 lg:order-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-3 sm:mb-4 lg:mb-6 relative px-2 sm:px-0"
            >
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
              <motion.span
                className="text-primary-600 block lg:inline relative"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <span className="relative z-10">
                  {" "}
                  {t("hero.title.highlight")}
                </span>
              </motion.span>
              <br className="hidden lg:block" />
              <motion.span
                className="block text-secondary-900"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {t("hero.title.end")}
              </motion.span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base lg:text-xl text-secondary-600 leading-relaxed mb-4 sm:mb-6 lg:mb-8 max-w-2xl mx-auto lg:mx-0 px-2 sm:px-0 whitespace-pre-line"
            >
              {t("hero.description")}
            </motion.p>

            {/* Experience Statistics */}
            <motion.div
              className="grid grid-cols-3 gap-3 sm:gap-4 lg:flex lg:gap-8 justify-center lg:justify-start mb-6 lg:mb-8 px-1 sm:px-2 lg:px-0"
              variants={containerVariants}
            >
              {[
                { value: "3+", label: t("hero.stats.years") },
                { value: "20+", label: t("hero.stats.projects") },
                { value: "100%", label: t("hero.stats.clients") },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={statVariants}
                  className="text-center lg:text-left"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-primary-600 mb-0.5 lg:mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm lg:text-base text-secondary-600 leading-tight">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Buttons for desktop */}
            <motion.div
              className="hidden lg:flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start w-full max-w-md sm:max-w-none mx-auto lg:mx-0"
              variants={itemVariants}
            >
              <motion.a
                href="#contact"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="bg-secondary-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-600 transition-colors duration-300 text-center"
              >
                {t("hero.cta.primary")}
              </motion.a>
              <motion.a
                href="#portfolio"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="border-2 border-secondary-900 text-secondary-900 px-8 py-4 rounded-lg font-semibold hover:bg-secondary-900 hover:text-white transition-colors duration-300 text-center"
              >
                {t("hero.cta.secondary")}
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            className="w-full lg:w-1/2 flex justify-center order-2 lg:order-2 mb-4 sm:mb-6 lg:mb-0"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="relative group w-full max-w-sm sm:max-w-md lg:max-w-lg">
              {/* Professional Development Image */}
              <motion.div
                className="relative w-full aspect-[5/4] rounded-2xl sm:rounded-3xl overflow-hidden shadow-large"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <Image
                  src="/images/hero-development.png"
                  alt="Professional Web Development with React and Next.js"
                  width={500}
                  height={400}
                  className="object-cover w-full h-full"
                  priority
                  quality={100}
                />
                <div className="absolute inset-0 bg-secondary-900/10"></div>
              </motion.div>

              {/* Floating decorative elements */}
              <FloatingElement
                duration={4}
                className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary-100/80 rounded-2xl rotate-12"></div>
              </FloatingElement>
              <FloatingElement
                duration={5}
                className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4"
              >
                <div className="w-8 h-8 sm:w-12 sm:h-12 bg-secondary-100/80 rounded-full"></div>
              </FloatingElement>
            </div>
          </motion.div>

          {/* Buttons - Mobile */}
          <motion.div
            className="w-full lg:hidden flex flex-col items-center order-3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full max-w-sm sm:max-w-md">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="bg-secondary-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-primary-600 transition-colors duration-300 text-center text-sm sm:text-base"
              >
                {t("hero.cta.primary")}
              </motion.a>
              <motion.a
                href="#portfolio"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="border-2 border-secondary-900 text-secondary-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-secondary-900 hover:text-white transition-colors duration-300 text-center text-sm sm:text-base"
              >
                {t("hero.cta.secondary")}
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

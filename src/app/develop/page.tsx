"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { useRef } from "react";

export default function DevelopPage() {
  const { t } = useLanguage();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const technologies = [
    { name: "Next.js", icon: "⚡", category: "frontend" },
    { name: "React", icon: "⚛️", category: "frontend" },
    { name: "TypeScript", icon: "📘", category: "language" },
    { name: "Node.js", icon: "🟢", category: "backend" },
    { name: "Python", icon: "🐍", category: "language" },
    { name: "Tailwind CSS", icon: "🎨", category: "frontend" },
    { name: "Vite", icon: "⚡", category: "tools" },
    { name: "Supabase", icon: "🗄️", category: "backend" },
    { name: "AWS", icon: "☁️", category: "cloud" },
    { name: "Vercel", icon: "▲", category: "cloud" },
    { name: "n8n", icon: "🔗", category: "automation" },
    { name: "Meta Developer", icon: "📱", category: "platforms" },
    { name: "Relevance AI", icon: "🤖", category: "ai" },
    { name: "OpenAI", icon: "🧠", category: "ai" },
    { name: "PostgreSQL", icon: "🐘", category: "database" },
    { name: "MongoDB", icon: "🍃", category: "database" },
    { name: "Firebase", icon: "🔥", category: "backend" },
    { name: "Docker", icon: "🐳", category: "tools" },
    { name: "Git", icon: "📦", category: "tools" },
    { name: "REST APIs", icon: "🔌", category: "backend" },
    { name: "GraphQL", icon: "◈", category: "backend" },
    { name: "Shopify", icon: "🛒", category: "platforms" },
    { name: "WordPress", icon: "📝", category: "platforms" },
    { name: "Stripe", icon: "💳", category: "integrations" },
  ];

  const services = [
    {
      icon: "🚀",
      titleKey: "develop.service1.title",
      descKey: "develop.service1.desc",
      features: [
        "develop.service1.feature1",
        "develop.service1.feature2",
        "develop.service1.feature3",
      ],
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: "🔧",
      titleKey: "develop.service2.title",
      descKey: "develop.service2.desc",
      features: [
        "develop.service2.feature1",
        "develop.service2.feature2",
        "develop.service2.feature3",
      ],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: "🤖",
      titleKey: "develop.service3.title",
      descKey: "develop.service3.desc",
      features: [
        "develop.service3.feature1",
        "develop.service3.feature2",
        "develop.service3.feature3",
      ],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: "☁️",
      titleKey: "develop.service4.title",
      descKey: "develop.service4.desc",
      features: [
        "develop.service4.feature1",
        "develop.service4.feature2",
        "develop.service4.feature3",
      ],
      gradient: "from-emerald-500 to-teal-500",
    },
  ];

  const highlights = [
    {
      icon: "🚀",
      titleKey: "team.highlight1.title",
      descKey: "team.highlight1.desc",
    },
    {
      icon: "💡",
      titleKey: "team.highlight2.title",
      descKey: "team.highlight2.desc",
    },
    {
      icon: "🤝",
      titleKey: "team.highlight3.title",
      descKey: "team.highlight3.desc",
    },
    {
      icon: "⚡",
      titleKey: "team.highlight4.title",
      descKey: "team.highlight4.desc",
    },
  ];

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const techVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <main className="min-h-screen" ref={containerRef}>
      <Header />

      {/* Hero Section with Parallax */}
      <section className="min-h-screen flex items-center pt-20 pb-12 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <motion.div className="absolute inset-0" style={{ y, opacity }}>
          {/* Gradient orbs with animation */}
          <motion.div
            className="absolute top-20 left-1/4 w-72 h-72 bg-primary-500/15 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 30, 0],
              y: [0, -20, 0],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-20 right-1/4 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -40, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-primary-500/10 to-blue-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 180, 360],
            }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />

          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />

          {/* Floating particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary-400/40 rounded-full"
              style={{
                top: `${20 + i * 15}%`,
                left: `${10 + i * 15}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          ))}
        </motion.div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500/20 to-orange-500/20 border border-primary-500/30 rounded-full px-6 py-2.5 mb-8 backdrop-blur-sm"
            >
              <motion.span
                className="w-2 h-2 bg-primary-400 rounded-full"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-primary-300 text-sm font-medium tracking-wide">
                {t("develop.badge")}
              </span>
            </motion.div>

            {/* Title with gradient animation */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6"
            >
              <span className="text-white block">
                {t("develop.hero.title")}
              </span>
              <motion.span
                className="bg-gradient-to-r from-primary-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent inline-block"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 5, repeat: Infinity }}
                style={{ backgroundSize: "200% 200%" }}
              >
                {t("develop.hero.highlight")}
              </motion.span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg lg:text-xl text-slate-300 leading-relaxed mb-10 max-w-3xl mx-auto"
            >
              {t("develop.hero.description")}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.a
                href="#contact-develop"
                className="relative bg-gradient-to-r from-primary-500 to-orange-500 text-white px-8 py-4 rounded-xl font-semibold overflow-hidden group"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">
                  {t("develop.cta.primary")}
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/"
                  className="inline-block border-2 border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                >
                  {t("develop.cta.secondary")}
                </Link>
              </motion.div>
            </motion.div>

            {/* Tech preview badges */}
            <motion.div
              variants={itemVariants}
              className="mt-16 flex flex-wrap justify-center gap-3"
            >
              {["React", "Next.js", "TypeScript", "Node.js", "Python"].map(
                (tech, i) => (
                  <motion.span
                    key={tech}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-slate-400 text-sm backdrop-blur-sm"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + i * 0.1 }}
                    whileHover={{
                      scale: 1.1,
                      borderColor: "rgba(249, 115, 22, 0.5)",
                    }}
                  >
                    {tech}
                  </motion.span>
                )
              )}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <motion.div
              className="w-1.5 h-3 bg-white/50 rounded-full"
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 lg:py-24 bg-slate-800 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-transparent" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group relative"
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-full overflow-hidden">
                  {/* Animated border gradient */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, rgba(249,115,22,0.3), transparent)",
                      backgroundSize: "200% 100%",
                    }}
                    animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />

                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-primary-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative z-10">
                    <motion.div
                      className="w-14 h-14 bg-gradient-to-br from-primary-500/30 to-orange-500/30 rounded-xl flex items-center justify-center mb-4"
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <span className="text-3xl">{highlight.icon}</span>
                    </motion.div>
                    <h3 className="text-white font-bold text-lg mb-2">
                      {t(highlight.titleKey)}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {t(highlight.descKey)}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Background decoration */}
        <motion.div
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl"
          animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              className="inline-block px-4 py-1.5 bg-primary-500/10 border border-primary-500/20 rounded-full text-primary-400 text-sm font-medium mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              {t("develop.services.title")}
            </motion.span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              {t("develop.services.title")}
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              {t("develop.services.description")}
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group relative"
                whileHover={{ y: -8 }}
              >
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full overflow-hidden">
                  {/* Gradient accent line */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
                  />

                  {/* Icon glow on hover */}
                  <div
                    className={`absolute top-6 left-6 w-20 h-20 bg-gradient-to-r ${service.gradient} rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                  />

                  <div className="relative z-10">
                    <motion.div
                      className={`w-16 h-16 bg-gradient-to-br ${service.gradient} bg-opacity-20 rounded-xl flex items-center justify-center mb-6`}
                      style={{
                        background: `linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))`,
                      }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <span className="text-4xl">{service.icon}</span>
                    </motion.div>

                    <h3 className="text-white font-bold text-xl mb-3">
                      {t(service.titleKey)}
                    </h3>
                    <p className="text-slate-400 mb-6 leading-relaxed">
                      {t(service.descKey)}
                    </p>

                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          className="flex items-center gap-3 text-slate-300 text-sm"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 * idx }}
                        >
                          <motion.svg
                            className={`w-5 h-5 flex-shrink-0`}
                            style={{
                              color:
                                index === 0
                                  ? "#f97316"
                                  : index === 1
                                  ? "#06b6d4"
                                  : index === 2
                                  ? "#a855f7"
                                  : "#10b981",
                            }}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            whileHover={{ scale: 1.2 }}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </motion.svg>
                          {t(feature)}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 lg:py-28 bg-slate-800 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
            animate={{ y: [0, 50, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary-500/5 rounded-full blur-3xl"
            animate={{ y: [0, -40, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              {t("develop.tech.title")}
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              {t("develop.tech.description")}
            </p>

            {/* Decorative line */}
            <motion.div
              className="mt-8 mx-auto w-24 h-1 bg-gradient-to-r from-primary-500 to-orange-500 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
          </motion.div>

          {/* Technology Grid with stagger animation */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 lg:gap-4 max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                variants={techVariants}
                custom={index}
                className="group relative"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center gap-2.5 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-5 py-3 cursor-default transition-all duration-300 group-hover:border-primary-500/50 group-hover:bg-white/15">
                  <motion.span
                    className="text-xl"
                    animate={{ rotate: [0, 0, 0] }}
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.2 }}
                    transition={{ duration: 0.4 }}
                  >
                    {tech.icon}
                  </motion.span>
                  <span className="text-slate-300 font-medium text-sm whitespace-nowrap group-hover:text-white transition-colors duration-300">
                    {tech.name}
                  </span>
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 bg-primary-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300 -z-10" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact-develop"
        className="py-20 lg:py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden"
      >
        {/* Background effects */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary-500/10 to-orange-500/10 rounded-full blur-3xl" />
        </motion.div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {t("develop.contact.title")}
            </motion.h2>
            <motion.p
              className="text-slate-300 text-lg mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              {t("develop.contact.description")}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <motion.a
                href="https://wa.me/573137756939?text=Hola!%20Estoy%20interesado%20en%20contratar%20servicios%20de%20desarrollo%20freelance."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-xl font-semibold"
                whileHover={{
                  scale: 1.05,
                  y: -3,
                  boxShadow: "0 20px 40px -10px rgba(34, 197, 94, 0.4)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </motion.a>
              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  {t("develop.contact.email")}
                </Link>
              </motion.div>
            </motion.div>

            {/* Back to main site */}
            <motion.div
              className="mt-12 pt-8 border-t border-white/10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Link
                href="/"
                className="group inline-flex items-center gap-2 text-slate-400 hover:text-primary-400 transition-colors duration-300"
              >
                <motion.svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  whileHover={{ x: -5 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </motion.svg>
                <span>{t("develop.back")}</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

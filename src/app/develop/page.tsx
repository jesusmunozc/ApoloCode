"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function DevelopPage() {
  const { t } = useLanguage();

  const technologies = [
    { name: "Next.js", icon: "⚡", category: "frontend", color: "from-black to-gray-700" },
    { name: "React", icon: "⚛️", category: "frontend", color: "from-cyan-400 to-blue-500" },
    { name: "TypeScript", icon: "📘", category: "language", color: "from-blue-500 to-blue-700" },
    { name: "Node.js", icon: "🟢", category: "backend", color: "from-green-500 to-green-700" },
    { name: "Python", icon: "🐍", category: "language", color: "from-yellow-400 to-blue-500" },
    { name: "Tailwind CSS", icon: "🎨", category: "frontend", color: "from-cyan-400 to-teal-500" },
    { name: "Vite", icon: "⚡", category: "tools", color: "from-purple-500 to-yellow-500" },
    { name: "Supabase", icon: "🗄️", category: "backend", color: "from-green-400 to-emerald-600" },
    { name: "AWS", icon: "☁️", category: "cloud", color: "from-orange-400 to-yellow-500" },
    { name: "Vercel", icon: "▲", category: "cloud", color: "from-gray-700 to-black" },
    { name: "n8n", icon: "🔗", category: "automation", color: "from-red-400 to-orange-500" },
    { name: "Meta Developer", icon: "📱", category: "platforms", color: "from-blue-500 to-indigo-600" },
    { name: "Relevance AI", icon: "🤖", category: "ai", color: "from-purple-500 to-pink-500" },
    { name: "OpenAI", icon: "🧠", category: "ai", color: "from-emerald-400 to-teal-600" },
    { name: "PostgreSQL", icon: "🐘", category: "database", color: "from-blue-400 to-indigo-500" },
    { name: "MongoDB", icon: "🍃", category: "database", color: "from-green-500 to-green-700" },
    { name: "Firebase", icon: "🔥", category: "backend", color: "from-yellow-400 to-orange-500" },
    { name: "Docker", icon: "🐳", category: "tools", color: "from-blue-400 to-cyan-500" },
    { name: "Git", icon: "📦", category: "tools", color: "from-orange-500 to-red-500" },
    { name: "REST APIs", icon: "🔌", category: "backend", color: "from-gray-500 to-gray-700" },
    { name: "GraphQL", icon: "◈", category: "backend", color: "from-pink-500 to-purple-600" },
    { name: "Shopify", icon: "🛒", category: "platforms", color: "from-green-400 to-lime-500" },
    { name: "WordPress", icon: "📝", category: "platforms", color: "from-blue-500 to-indigo-500" },
    { name: "Stripe", icon: "💳", category: "integrations", color: "from-indigo-500 to-purple-600" },
  ];

  const services = [
    {
      icon: "🚀",
      titleKey: "develop.service1.title",
      descKey: "develop.service1.desc",
      features: ["develop.service1.feature1", "develop.service1.feature2", "develop.service1.feature3"],
    },
    {
      icon: "🔧",
      titleKey: "develop.service2.title",
      descKey: "develop.service2.desc",
      features: ["develop.service2.feature1", "develop.service2.feature2", "develop.service2.feature3"],
    },
    {
      icon: "🤖",
      titleKey: "develop.service3.title",
      descKey: "develop.service3.desc",
      features: ["develop.service3.feature1", "develop.service3.feature2", "develop.service3.feature3"],
    },
    {
      icon: "☁️",
      titleKey: "develop.service4.title",
      descKey: "develop.service4.desc",
      features: ["develop.service4.feature1", "develop.service4.feature2", "develop.service4.feature3"],
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

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-20 pb-12 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
          
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary-500/10 border border-primary-500/20 rounded-full px-5 py-2 mb-8 animate-fade-in">
              <span className="text-primary-400 text-sm font-medium">{t("develop.badge")}</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              <span className="text-white">{t("develop.hero.title")}</span>
              <br />
              <span className="bg-gradient-to-r from-primary-400 via-orange-400 to-primary-500 bg-clip-text text-transparent">
                {t("develop.hero.highlight")}
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg lg:text-xl text-slate-300 leading-relaxed mb-10 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              {t("develop.hero.description")}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <a
                href="#contact-develop"
                className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-primary-600 hover:to-primary-700 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25 hover:-translate-y-0.5"
              >
                {t("develop.cta.primary")}
              </a>
              <Link
                href="/"
                className="border-2 border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5"
              >
                {t("develop.cta.secondary")}
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 lg:py-20 bg-slate-800 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-primary-500/30 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500/20 to-primary-600/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">{highlight.icon}</span>
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">{t(highlight.titleKey)}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{t(highlight.descKey)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-900 to-slate-800 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              {t("develop.services.title")}
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              {t("develop.services.description")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-primary-500/30 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-500/20 to-primary-600/20 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">{service.icon}</span>
                  </div>
                  <h3 className="text-white font-bold text-xl mb-3">{t(service.titleKey)}</h3>
                  <p className="text-slate-400 mb-5 leading-relaxed">{t(service.descKey)}</p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-slate-300 text-sm">
                        <svg className="w-4 h-4 text-primary-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {t(feature)}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 lg:py-24 bg-slate-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              {t("develop.tech.title")}
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              {t("develop.tech.description")}
            </p>
          </div>

          {/* Technology Grid */}
          <div className="flex flex-wrap justify-center gap-3 lg:gap-4 max-w-6xl mx-auto">
            {technologies.map((tech, index) => (
              <div
                key={tech.name}
                className="group relative animate-slide-up"
                style={{ animationDelay: `${index * 30}ms` }}
              >
                <div className="flex items-center gap-2.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 hover:bg-white/10 hover:border-primary-500/40 hover:scale-105 transition-all duration-300 cursor-default">
                  <span className="text-xl group-hover:scale-110 transition-transform duration-300">{tech.icon}</span>
                  <span className="text-slate-300 font-medium text-sm whitespace-nowrap group-hover:text-white transition-colors duration-300">{tech.name}</span>
                </div>
                
                {/* Hover glow */}
                <div className="absolute inset-0 bg-primary-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-develop" className="py-16 lg:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              {t("develop.contact.title")}
            </h2>
            <p className="text-slate-300 text-lg mb-10 leading-relaxed">
              {t("develop.contact.description")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/573137756939?text=Hola!%20Estoy%20interesado%20en%20contratar%20servicios%20de%20desarrollo%20freelance."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-600 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25 hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {t("develop.contact.email")}
              </Link>
            </div>

            {/* Back to main site */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-slate-400 hover:text-primary-400 transition-colors duration-300"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                {t("develop.back")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

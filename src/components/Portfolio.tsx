"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";
import { useState } from "react";

export default function Portfolio() {
  const { t } = useLanguage();
  const [imageErrors, setImageErrors] = useState<{ [key: number]: boolean }>(
    {}
  );

  const projects = [
    {
      titleKey: "portfolio.project1.title",
      descriptionKey: "portfolio.project1.description",
      categoryKey: "portfolio.project1.category",
      tech: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
      emoji: "🏗️",
      logo: "/images/logofectum.jpg",
      url: "https://fectumsas.com",
      isLive: true,
    },
    {
      titleKey: "portfolio.project5.title",
      descriptionKey: "portfolio.project5.description",
      categoryKey: "portfolio.project5.category",
      tech: ["React", "Firebase", "Material-UI", "JavaScript"],
      emoji: "🍰",
      logo: "/images/logoKardhamo.png",
      url: "https://control-inventario-ventas.web.app/menu",
      isLive: true,
    },
    {
      titleKey: "portfolio.project6.title",
      descriptionKey: "portfolio.project6.description",
      categoryKey: "portfolio.project6.category",
      tech: ["Next.js", "React", "Tailwind CSS", "Vercel"],
      emoji: "💇‍♂️",
      logo: "/images/LogoCelebrityBarber.jpg",
      url: "https://celebritybarber.vercel.app/",
      isLive: true,
    },
  ];

  return (
    <section
      id="portfolio"
      className="pt-8 lg:pt-12 pb-8 lg:pb-12 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-1/4 w-64 h-64 bg-primary-100 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-secondary-100 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto container-padding relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          {/* Enhanced section header */}
          <div className="inline-block mb-4">
            <span className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase">
              Nuestros Proyectos
            </span>
          </div>
          <h2 className="heading-2 mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
            {t("portfolio.title")}
          </h2>
          <p className="text-large max-w-3xl mx-auto text-gray-600 leading-relaxed">
            {t("portfolio.description")}
          </p>

          {/* Decorative line */}
          <div className="mt-8 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"></div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="w-full animate-slide-up opacity-0"
                style={{
                  animationDelay: `${index * 200}ms`,
                  animationFillMode: "forwards",
                }}
              >
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 group hover:-translate-y-3 overflow-hidden">
                  {/* Enhanced animated background elements */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute top-0 right-0 w-80 h-40 bg-gradient-to-l from-primary-500/8 via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-32 bg-gradient-to-r from-secondary-500/8 via-transparent to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/3 via-transparent to-secondary-500/3"></div>
                  </div>

                  {/* Main horizontal layout */}
                  <div className="flex items-center p-4 sm:p-6 gap-4 sm:gap-6 relative z-10">
                    {/* Logo Section - Left Side */}
                    <div className="flex-shrink-0 relative">
                      <div className="w-16 h-16 sm:w-18 sm:h-18 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl flex items-center justify-center shadow-xl border-2 border-gray-100 group-hover:shadow-2xl group-hover:scale-110 group-hover:border-primary-200 transition-all duration-500 relative overflow-hidden">
                        {/* Enhanced background pattern for logo container */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/8 to-secondary-500/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        {project.logo && !imageErrors[index] ? (
                          <div className="relative z-10">
                            <Image
                              src={project.logo}
                              alt={`${t(project.titleKey)} logo`}
                              width={44}
                              height={44}
                              className="object-contain group-hover:scale-110 transition-transform duration-300"
                              onError={() => {
                                setImageErrors((prev) => ({
                                  ...prev,
                                  [index]: true,
                                }));
                              }}
                            />
                          </div>
                        ) : (
                          <span className="text-4xl group-hover:scale-110 transition-transform duration-300 relative z-10">
                            {project.emoji}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Content Section - Center */}
                    <div className="flex-grow min-w-0">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-grow">
                          {/* Enhanced Category Badge */}
                          <div className="mb-2">
                            <span className="inline-block text-primary-700 font-bold text-xs bg-gradient-to-r from-primary-50 to-primary-100 px-3 py-1.5 rounded-full border border-primary-200 shadow-sm">
                              {t(project.categoryKey)}
                            </span>
                          </div>

                          {/* Enhanced Project Title */}
                          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1.5 group-hover:text-primary-700 transition-colors duration-300 line-clamp-1">
                            {t(project.titleKey)}
                          </h3>

                          {/* Enhanced Description */}
                          <p className="text-gray-600 text-sm sm:text-base mb-3 line-clamp-2 leading-relaxed">
                            {t(project.descriptionKey)}
                          </p>

                          {/* Enhanced Tech Stack - Smaller */}
                          <div className="flex flex-wrap gap-1.5">
                            {project.tech.slice(0, 4).map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-2 py-1 bg-gradient-to-r from-gray-100 to-gray-50 text-gray-600 rounded-md text-xs font-medium hover:from-primary-50 hover:to-primary-100 hover:text-primary-700 transition-all duration-200 border border-gray-200 hover:border-primary-200 shadow-sm"
                              >
                                {tech}
                              </span>
                            ))}
                            {project.tech.length > 4 && (
                              <span className="px-2 py-1 bg-gray-100 text-gray-500 rounded-md text-xs font-medium border border-gray-200">
                                +{project.tech.length - 4} más
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Enhanced Action Button - Right Side */}
                        <div className="flex-shrink-0 ml-3 sm:ml-4">
                          {project.isLive && project.url ? (
                            <a
                              href={project.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl text-sm font-bold hover:from-primary-700 hover:to-primary-800 hover:shadow-xl hover:shadow-primary-500/30 transition-all duration-300 hover:scale-105 transform group/button shadow-lg"
                            >
                              <span className="hidden sm:inline">
                                Visitar Sitio
                              </span>
                              <span className="sm:hidden">Visitar</span>
                              <svg
                                className="w-4 h-4 group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5 transition-transform duration-300"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                />
                              </svg>
                            </a>
                          ) : (
                            <button className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl text-sm font-bold hover:from-gray-200 hover:to-gray-300 hover:text-gray-800 transition-all duration-300 hover:scale-105 transform shadow-lg">
                              <span className="hidden sm:inline">Ver Demo</span>
                              <span className="sm:hidden">Demo</span>
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                />
                              </svg>
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Bottom border accent on hover */}
                  <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

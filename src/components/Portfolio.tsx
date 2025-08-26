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
      emoji: "🏗️",
      logo: "/images/logofectum.jpg",
      url: "https://fectumsas.com",
      isLive: true,
    },
    {
      titleKey: "portfolio.project5.title",
      descriptionKey: "portfolio.project5.description",
      categoryKey: "portfolio.project5.category",
      emoji: "🍰",
      logo: "/images/logoKardhamo.png",
      url: "https://control-inventario-ventas.web.app/menu",
      isLive: true,
    },
    {
      titleKey: "portfolio.project6.title",
      descriptionKey: "portfolio.project6.description",
      categoryKey: "portfolio.project6.category",
      emoji: "💇‍♂️",
      logo: "/images/LogoCelebrityBarber.jpg",
      url: "https://celebritybarber.vercel.app/",
      isLive: true,
    },
  ];

  return (
    <section
      id="portfolio"
      className="pt-8 lg:pt-12 pb-8 lg:pb-12 bg-gradient-to-br from-gray-50 via-white to-gray-50 white-wall-texture relative overflow-hidden"
    >
      {/* Enhanced tech background pattern */}
      <div className="absolute inset-0 opacity-25">
        <div className="absolute top-10 left-1/4 w-64 h-64 bg-primary-100 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-secondary-100 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto container-padding relative z-10">
        <div className="text-center mb-8 md:mb-12 lg:mb-16 animate-fade-in">
          {/* Enhanced section header */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent leading-tight">
            {t("portfolio.title")}
          </h2>
          <p className="text-sm md:text-base lg:text-lg xl:text-xl max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto text-gray-600 leading-relaxed px-4 md:px-0">
            {t("portfolio.description")}
          </p>

          {/* Decorative line */}
          <div className="mt-6 md:mt-8 flex justify-center">
            <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"></div>
          </div>
        </div>

        {/* Responsive grid layout: single column on mobile, multiple columns on larger screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-6 md:gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="w-full animate-slide-up opacity-0"
              style={{
                animationDelay: `${index * 200}ms`,
                animationFillMode: "forwards",
              }}
            >
              <div className="relative bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 group hover:-translate-y-1 overflow-hidden h-full">
                {/* Category Badge - Top left corner on mobile, hidden on desktop */}
                <div className="absolute top-4 left-4 z-20 md:hidden">
                  <span className="inline-block text-orange-600 font-medium text-xs bg-orange-50 px-2.5 py-1 rounded-full border border-orange-200">
                    {t(project.categoryKey)}
                  </span>
                </div>

                {/* Subtle background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-white"></div>

                {/* Responsive layout: mobile centered, desktop horizontal */}
                <div className="flex flex-col items-center text-center md:flex-row md:items-center md:text-left p-6 md:px-8 md:py-6 gap-4 md:gap-5 relative z-10">
                  {/* Logo Section - Larger on mobile, centered */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 md:w-20 md:h-20 bg-white rounded-xl flex items-center justify-center shadow-sm border border-gray-100 group-hover:shadow-md transition-all duration-300 relative overflow-hidden">
                      {project.logo && !imageErrors[index] ? (
                        <div className="relative z-10">
                          <Image
                            src={project.logo}
                            alt={`${t(project.titleKey)} logo`}
                            width={48}
                            height={48}
                            className="w-12 h-12 md:w-12 md:h-12 object-contain"
                            onError={() => {
                              setImageErrors((prev) => ({
                                ...prev,
                                [index]: true,
                              }));
                            }}
                          />
                        </div>
                      ) : (
                        <span className="text-3xl md:text-3xl relative z-10">
                          {project.emoji}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Content Section - Different layouts for mobile vs desktop */}
                  <div className="flex-grow w-full md:min-w-0">
                    {/* Mobile Layout: Title first, then category, then description */}
                    <div className="flex flex-col items-center md:hidden gap-2">
                      {/* Project Title - Large and centered on mobile */}
                      <h3 className="text-2xl font-bold text-gray-900 leading-tight">
                        {t(project.titleKey)}
                      </h3>

                      {/* Description on mobile - Left aligned for better readability */}
                      <p className="text-gray-600 text-sm leading-relaxed text-left mb-4 w-full">
                        {t(project.descriptionKey)}
                      </p>
                    </div>

                    {/* Desktop Layout: Category first, then title, then description */}
                    <div className="hidden md:flex md:flex-row md:items-start md:justify-between gap-4 md:gap-6">
                      <div className="flex-grow md:min-w-0">
                        {/* Category Badge - Above the title on desktop */}
                        <div className="mb-2">
                          <span className="inline-block text-orange-600 font-medium text-xs bg-orange-50 px-2.5 py-1 rounded-full border border-orange-200">
                            {t(project.categoryKey)}
                          </span>
                        </div>

                        {/* Project Title - Desktop */}
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight mb-3">
                          {t(project.titleKey)}
                        </h3>

                        {/* Description - Desktop */}
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4 md:mb-0">
                          {t(project.descriptionKey)}
                        </p>
                      </div>

                      {/* Action Button - Desktop */}
                      <div className="flex justify-end flex-shrink-0 self-start">
                        {project.isLive && project.url ? (
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-orange-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-orange-700 transition-all duration-300 shadow-lg shadow-orange-600/25 hover:shadow-xl hover:shadow-orange-600/35 hover:-translate-y-0.5 min-w-[130px] justify-center"
                          >
                            <span>Visitar Sitio</span>
                            <svg
                              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5"
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
                          <button className="inline-flex items-center gap-2 bg-gray-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-gray-700 transition-all duration-300 shadow-lg shadow-gray-600/25 hover:shadow-xl hover:shadow-gray-600/35 hover:-translate-y-0.5 min-w-[130px] justify-center">
                            <span>Ver Demo</span>
                            <svg
                              className="w-4 h-4 transition-transform duration-300"
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

                    {/* Mobile Action Button - Centered */}
                    <div className="flex justify-center md:hidden">
                      {project.isLive && project.url ? (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-orange-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-orange-700 transition-all duration-300 shadow-lg shadow-orange-600/25 hover:shadow-xl hover:shadow-orange-600/35 hover:-translate-y-0.5 min-w-[130px] justify-center"
                        >
                          <span>Visitar Sitio</span>
                          <svg
                            className="w-4 h-4 transition-transform duration-300"
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
                        <button className="inline-flex items-center gap-2 bg-gray-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-gray-700 transition-all duration-300 shadow-lg shadow-gray-600/25 hover:shadow-xl hover:shadow-gray-600/35 hover:-translate-y-0.5 min-w-[130px] justify-center">
                          <span>Ver Demo</span>
                          <svg
                            className="w-4 h-4 transition-transform duration-300"
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

                {/* Enhanced Bottom border accent on hover */}
                <div className="absolute bottom-0 left-0 w-full h-1 md:h-2 bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

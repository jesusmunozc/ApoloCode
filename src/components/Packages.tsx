"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";

interface PackageItem {
  titleKey: string;
  descriptionKey: string;
  icon: string;
  packages: {
    nameKey: string;
    priceKey: string;
    featuresKey: string[];
    timeKey?: string;
  }[];
}

export default function Packages() {
  const { t } = useLanguage();
  const [openPackage, setOpenPackage] = useState<number | null>(null);
  const [openSubPackage, setOpenSubPackage] = useState<{
    [key: number]: number | null;
  }>({});

  const togglePackage = (index: number) => {
    setOpenPackage(openPackage === index ? null : index);
    // Reset sub-packages when main package closes
    if (openPackage === index) {
      setOpenSubPackage({ ...openSubPackage, [index]: null });
    }
  };

  const toggleSubPackage = (packageIndex: number, subIndex: number) => {
    setOpenSubPackage({
      ...openSubPackage,
      [packageIndex]:
        openSubPackage[packageIndex] === subIndex ? null : subIndex,
    });
  };

  const packageCategories: PackageItem[] = [
    {
      titleKey: "packages.webdev.title",
      descriptionKey: "packages.webdev.description",
      icon: "🚀",
      packages: [
        {
          nameKey: "packages.webdev.wordpress.basic.name",
          priceKey: "packages.webdev.wordpress.basic.price",
          featuresKey: [
            "packages.webdev.wordpress.basic.feature1",
            "packages.webdev.wordpress.basic.feature2",
            "packages.webdev.wordpress.basic.feature3",
            "packages.webdev.wordpress.basic.feature4",
            "packages.webdev.wordpress.basic.feature5",
            "packages.webdev.wordpress.basic.feature6",
            "packages.webdev.wordpress.basic.feature7",
          ],
          timeKey: "packages.webdev.wordpress.basic.time",
        },
        {
          nameKey: "packages.webdev.wordpress.professional.name",
          priceKey: "packages.webdev.wordpress.professional.price",
          featuresKey: [
            "packages.webdev.wordpress.professional.feature1",
            "packages.webdev.wordpress.professional.feature2",
            "packages.webdev.wordpress.professional.feature3",
            "packages.webdev.wordpress.professional.feature4",
            "packages.webdev.wordpress.professional.feature5",
            "packages.webdev.wordpress.professional.feature6",
          ],
          timeKey: "packages.webdev.wordpress.professional.time",
        },
        {
          nameKey: "packages.webdev.wordpress.premium.name",
          priceKey: "packages.webdev.wordpress.premium.price",
          featuresKey: [
            "packages.webdev.wordpress.premium.feature1",
            "packages.webdev.wordpress.premium.feature2",
            "packages.webdev.wordpress.premium.feature3",
            "packages.webdev.wordpress.premium.feature4",
            "packages.webdev.wordpress.premium.feature5",
            "packages.webdev.wordpress.premium.feature6",
          ],
          timeKey: "packages.webdev.wordpress.premium.time",
        },
      ],
    },
    {
      titleKey: "packages.shopify.title",
      descriptionKey: "packages.shopify.description",
      icon: "🛍️",
      packages: [
        {
          nameKey: "packages.shopify.basic.name",
          priceKey: "packages.shopify.basic.price",
          featuresKey: [
            "packages.shopify.basic.feature1",
            "packages.shopify.basic.feature2",
            "packages.shopify.basic.feature3",
            "packages.shopify.basic.feature4",
            "packages.shopify.basic.feature5",
          ],
          timeKey: "packages.shopify.basic.time",
        },
        {
          nameKey: "packages.shopify.professional.name",
          priceKey: "packages.shopify.professional.price",
          featuresKey: [
            "packages.shopify.professional.feature1",
            "packages.shopify.professional.feature2",
            "packages.shopify.professional.feature3",
            "packages.shopify.professional.feature4",
            "packages.shopify.professional.feature5",
          ],
          timeKey: "packages.shopify.professional.time",
        },
        {
          nameKey: "packages.shopify.premium.name",
          priceKey: "packages.shopify.premium.price",
          featuresKey: [
            "packages.shopify.premium.feature1",
            "packages.shopify.premium.feature2",
            "packages.shopify.premium.feature3",
            "packages.shopify.premium.feature4",
            "packages.shopify.premium.feature5",
          ],
          timeKey: "packages.shopify.premium.time",
        },
      ],
    },
    {
      titleKey: "packages.maintenance.title",
      descriptionKey: "packages.maintenance.description",
      icon: "🔧",
      packages: [
        {
          nameKey: "packages.maintenance.basic.name",
          priceKey: "packages.maintenance.basic.price",
          featuresKey: [
            "packages.maintenance.basic.feature1",
            "packages.maintenance.basic.feature2",
            "packages.maintenance.basic.feature3",
            "packages.maintenance.basic.feature4",
            "packages.maintenance.basic.feature5",
          ],
        },
        {
          nameKey: "packages.maintenance.professional.name",
          priceKey: "packages.maintenance.professional.price",
          featuresKey: [
            "packages.maintenance.professional.feature1",
            "packages.maintenance.professional.feature2",
            "packages.maintenance.professional.feature3",
            "packages.maintenance.professional.feature4",
            "packages.maintenance.professional.feature5",
          ],
        },
        {
          nameKey: "packages.maintenance.premium.name",
          priceKey: "packages.maintenance.premium.price",
          featuresKey: [
            "packages.maintenance.premium.feature1",
            "packages.maintenance.premium.feature2",
            "packages.maintenance.premium.feature3",
            "packages.maintenance.premium.feature4",
            "packages.maintenance.premium.feature5",
          ],
        },
        {
          nameKey: "packages.maintenance.enterprise.name",
          priceKey: "packages.maintenance.enterprise.price",
          featuresKey: [
            "packages.maintenance.enterprise.feature1",
            "packages.maintenance.enterprise.feature2",
            "packages.maintenance.enterprise.feature3",
            "packages.maintenance.enterprise.feature4",
          ],
        },
      ],
    },
    {
      titleKey: "packages.seo.title",
      descriptionKey: "packages.seo.description",
      icon: "🎯",
      packages: [
        {
          nameKey: "packages.seo.basic.name",
          priceKey: "packages.seo.basic.price",
          featuresKey: [
            "packages.seo.basic.feature1",
            "packages.seo.basic.feature2",
            "packages.seo.basic.feature3",
            "packages.seo.basic.feature4",
            "packages.seo.basic.feature5",
          ],
          timeKey: "packages.seo.basic.time",
        },
        {
          nameKey: "packages.seo.professional.name",
          priceKey: "packages.seo.professional.price",
          featuresKey: [
            "packages.seo.professional.feature1",
            "packages.seo.professional.feature2",
            "packages.seo.professional.feature3",
            "packages.seo.professional.feature4",
            "packages.seo.professional.feature5",
          ],
          timeKey: "packages.seo.professional.time",
        },
        {
          nameKey: "packages.seo.premium.name",
          priceKey: "packages.seo.premium.price",
          featuresKey: [
            "packages.seo.premium.feature1",
            "packages.seo.premium.feature2",
            "packages.seo.premium.feature3",
            "packages.seo.premium.feature4",
            "packages.seo.premium.feature5",
          ],
          timeKey: "packages.seo.premium.time",
        },
      ],
    },
  ];

  return (
    <section
      id="packages"
      className="pt-12 md:pt-16 lg:pt-20 pb-12 md:pb-16 lg:pb-20 bg-gradient-to-br from-white via-gray-50 to-white white-wall-texture relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-1/4 w-32 h-32 bg-gradient-to-br from-primary-100/60 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-1/4 w-40 h-40 bg-gradient-to-tr from-secondary-100/60 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto container-padding relative z-10">
        <div className="text-center mb-12 md:mb-14 lg:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-5 lg:mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent leading-tight px-4">
            {t("packages.title")}
          </h2>
          <p className="text-base sm:text-lg md:text-lg lg:text-xl max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto text-gray-600 leading-relaxed px-6 md:px-8 lg:px-0">
            {t("packages.description")}
          </p>

          {/* Decorative line */}
          <div className="mt-6 md:mt-7 lg:mt-8 flex justify-center">
            <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"></div>
          </div>
        </div>

        {/* Packages Accordion */}
        <div className="max-w-5xl mx-auto space-y-4 md:space-y-5">
          {packageCategories.map((category, index) => (
            <div
              key={index}
              className="animate-slide-up opacity-0 bg-white rounded-2xl shadow-soft border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-medium"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: "forwards",
              }}
            >
              {/* Main Category Header */}
              <button
                onClick={() => togglePackage(index)}
                className="w-full px-5 sm:px-6 md:px-8 py-5 md:py-6 flex items-center justify-between bg-gradient-to-r from-gray-50 to-white hover:from-primary-50 hover:to-secondary-50 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-secondary-100 rounded-xl flex items-center justify-center group-hover:bg-primary-100 transition-all duration-300">
                    <span className="text-2xl md:text-3xl">
                      {category.icon}
                    </span>
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 group-hover:text-primary-700 transition-colors duration-300">
                      {t(category.titleKey)}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600 mt-1">
                      {t(category.descriptionKey)}
                    </p>
                  </div>
                </div>
                <svg
                  className={`w-6 h-6 md:w-7 md:h-7 text-gray-600 transition-transform duration-300 flex-shrink-0 ${
                    openPackage === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Sub-packages Content */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openPackage === index
                    ? "max-h-[5000px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-4 sm:px-5 md:px-8 py-4 md:py-6 space-y-3 md:space-y-4 bg-gray-50/50">
                  {category.packages.map((pkg, subIndex) => (
                    <div
                      key={subIndex}
                      className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      {/* Sub-package Header */}
                      <button
                        onClick={() => toggleSubPackage(index, subIndex)}
                        className="w-full px-4 sm:px-5 md:px-6 py-4 md:py-5 flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
                      >
                        <div className="flex items-center gap-3 md:gap-4 flex-1 min-w-0">
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 flex-1 min-w-0">
                            <h4 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 text-left">
                              {t(pkg.nameKey)}
                            </h4>
                            <div className="inline-flex items-center">
                              <span className="bg-primary-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-bold text-sm sm:text-base whitespace-nowrap">
                                {t(pkg.priceKey)}
                              </span>
                            </div>
                          </div>
                        </div>
                        <svg
                          className={`w-5 h-5 md:w-6 md:h-6 text-gray-600 transition-transform duration-300 flex-shrink-0 ml-2 ${
                            openSubPackage[index] === subIndex
                              ? "rotate-180"
                              : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>

                      {/* Sub-package Features */}
                      <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${
                          openSubPackage[index] === subIndex
                            ? "max-h-[2000px] opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="px-4 sm:px-5 md:px-6 pb-4 md:pb-5 pt-2">
                          {pkg.timeKey && (
                            <div className="mb-4 pb-3 border-b border-gray-200">
                              <div className="inline-flex items-center gap-2 text-sm md:text-base text-gray-700 bg-secondary-50 px-3 py-1.5 rounded-lg">
                                <svg
                                  className="w-4 h-4 md:w-5 md:h-5 text-secondary-600"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                  />
                                </svg>
                                <span className="font-semibold">
                                  {t(pkg.timeKey)}
                                </span>
                              </div>
                            </div>
                          )}
                          <ul className="space-y-2.5 md:space-y-3">
                            {pkg.featuresKey.map((featureKey, featureIndex) => (
                              <li
                                key={featureIndex}
                                className="flex items-start gap-2.5 md:gap-3 text-sm md:text-base text-gray-700"
                              >
                                <svg
                                  className="w-5 h-5 md:w-6 md:h-6 text-primary-600 flex-shrink-0 mt-0.5"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                  />
                                </svg>
                                <span className="leading-relaxed">
                                  {t(featureKey)}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 md:mt-16 text-center animate-fade-in">
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-6 md:p-8 lg:p-10 max-w-3xl mx-auto border border-primary-100">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
              {t("packages.cta.title")}
            </h3>
            <p className="text-base md:text-lg text-gray-600 mb-5 md:mb-6 leading-relaxed">
              {t("packages.cta.description")}
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-primary-700 transition-all duration-300 shadow-lg shadow-primary-600/25 hover:shadow-xl hover:shadow-primary-600/35 hover:-translate-y-0.5"
            >
              <span>{t("packages.cta.button")}</span>
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
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

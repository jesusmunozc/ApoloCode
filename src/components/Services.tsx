"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function Services() {
  const { t, language } = useLanguage();

  // Function to generate WhatsApp link with custom message
  const generateWhatsAppLink = (serviceTitle: string) => {
    const phoneNumber = "573137756939";
    // Clean the service title and create a simple message
    const cleanTitle = serviceTitle.trim();

    // Create message based on selected language
    const message =
      language === "en"
        ? `Hello! I am interested in hiring the ${cleanTitle} service. Could you provide me with more information and a detailed quote?`
        : `Hola! Estoy interesado en contratar el servicio de ${cleanTitle}. Podrias brindarme mas informacion y un presupuesto detallado?`;

    // Encode the message properly for URL
    const encodedMessage = encodeURIComponent(message);

    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  };

  // Function to handle WhatsApp click
  const handleWhatsAppClick = (serviceTitle: string) => {
    const whatsappUrl = generateWhatsAppLink(serviceTitle);
    window.open(whatsappUrl, "_blank");
  };

  const services = [
    {
      titleKey: "services.webapp.title",
      descriptionKey: "services.webapp.description",
      icon: "📄",
      features: [
        "services.webapp.feature1",
        "services.webapp.feature2",
        "services.webapp.feature3",
        "services.webapp.feature4",
        "services.webapp.feature5",
        "services.webapp.feature6",
        "services.webapp.feature7",
      ],
    },
    {
      titleKey: "services.web.title",
      descriptionKey: "services.web.description",
      icon: "💻",
      features: [
        "services.web.feature1",
        "services.web.feature2",
        "services.web.feature3",
        "services.web.feature4",
        "services.web.feature5",
        "services.web.feature6",
        "services.web.feature7",
        "services.web.feature8",
        "services.web.feature9",
      ],
    },
    {
      titleKey: "services.ecommerce.title",
      descriptionKey: "services.ecommerce.description",
      icon: "🛒",
      features: [
        "services.ecommerce.feature1",
        "services.ecommerce.feature2",
        "services.ecommerce.feature3",
        "services.ecommerce.feature4",
        "services.ecommerce.feature5",
        "services.ecommerce.feature6",
        "services.ecommerce.feature7",
        "services.ecommerce.feature8",
      ],
    },
    {
      titleKey: "services.optimization.title",
      descriptionKey: "services.optimization.description",
      icon: "⚡",
      features: [
        "services.optimization.feature1",
        "services.optimization.feature2",
        "services.optimization.feature3",
        "services.optimization.feature4",
        "services.optimization.feature5",
        "services.optimization.feature6",
      ],
    },
    {
      titleKey: "services.maintenance.title",
      descriptionKey: "services.maintenance.description",
      icon: "🛠️",
      features: [
        "services.maintenance.feature1",
        "services.maintenance.feature2",
        "services.maintenance.feature3",
        "services.maintenance.feature4",
      ],
    },
  ];

  return (
    <section
      id="services"
      className="pt-20 lg:pt-24 pb-8 lg:pb-12 bg-white white-wall-texture relative"
    >
      {/* Tech accent elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-1/4 w-24 h-24 bg-gradient-to-br from-primary-100/60 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 left-1/4 w-32 h-32 bg-gradient-to-tr from-secondary-100/60 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto container-padding relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="heading-2 mb-6">{t("services.title")}</h2>
          <p className="text-large max-w-3xl mx-auto">
            {t("services.description")}
          </p>
        </div>

        {/* Primera fila: Página Informativa, Landing Page, Tienda Online */}
        <div className="flex justify-center mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {services.slice(0, 3).map((service, index) => (
              <div
                key={index}
                className="group relative overflow-hidden animate-slide-up w-full"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Etiqueta "Más Contratado" solo para Landing Page (index 1) */}
                {index === 1 && (
                  <div className="absolute top-2 right-2 z-20">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-lg shadow-lg backdrop-blur-sm">
                      <span className="text-sm font-semibold">
                        {language === "en" ? "Most Hired" : "Más Contratado"}
                      </span>
                    </div>
                  </div>
                )}
                {/* Subtle premium border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-secondary-200 via-primary-200 to-secondary-200 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-white rounded-xl p-6 border border-secondary-200 shadow-soft group-hover:shadow-medium transition-all duration-300 group-hover:-translate-y-1 h-full flex flex-col tech-pattern-dots subtle-texture-card tech-shine-card">
                  {/* Tech overlay for cards */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-50/20 via-transparent to-secondary-50/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  {/* Centered icon */}
                  <div className="text-center mb-6 relative z-10">
                    <div className="w-16 h-16 bg-secondary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-100 transition-all duration-300 mx-auto">
                      <span className="text-3xl text-secondary-700 group-hover:text-primary-700 transition-colors duration-300">
                        {service.icon}
                      </span>
                    </div>
                  </div>

                  {/* Centered title with fixed height */}
                  <div className="text-center mb-6 relative z-10">
                    <div className="h-24 flex items-center justify-center">
                      <h3 className="text-3xl font-bold text-secondary-900 group-hover:text-primary-700 transition-colors duration-300 leading-tight">
                        {t(service.titleKey)}
                      </h3>
                    </div>
                  </div>

                  {/* Aligned price */}
                  <div className="text-center mb-6 relative z-10">
                    <div className="bg-secondary-900 text-white font-bold text-xl px-6 py-3 rounded-xl shadow-sm group-hover:bg-primary-600 transition-colors duration-300 inline-block">
                      {t(service.titleKey.replace("title", "price"))}
                    </div>
                  </div>

                  <p className="text-base text-secondary-600 mb-4 leading-relaxed relative z-10 text-center">
                    {t(service.descriptionKey)}
                  </p>

                  {/* Clean features list - Start from top */}
                  <div className="space-y-2 mb-6 flex-grow relative z-10">
                    {service.features.map((featureKey, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center text-base"
                      >
                        <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-3 flex-shrink-0"></div>
                        <span className="text-secondary-700">
                          {t(featureKey)}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom-aligned CTA button */}
                  <div className="mt-auto relative z-10">
                    <button
                      onClick={() => {
                        const titleValue = t(service.titleKey);
                        const serviceTitle =
                          typeof titleValue === "string"
                            ? titleValue
                            : Array.isArray(titleValue)
                            ? titleValue.join(" ")
                            : "";
                        handleWhatsAppClick(serviceTitle);
                      }}
                      className="w-full bg-secondary-900 text-white py-3.5 px-6 rounded-lg font-semibold hover:bg-primary-600 transition-all duration-300 text-base cursor-pointer"
                    >
                      {t("services.cta")}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Segunda fila: Optimización y Mantenimiento - Centrados */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-3xl">
            {services.slice(3, 5).map((service, index) => (
              <div
                key={index + 3}
                className="group relative overflow-hidden animate-slide-up w-full"
                style={{ animationDelay: `${(index + 3) * 150}ms` }}
              >
                {/* Subtle premium border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-secondary-200 via-primary-200 to-secondary-200 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-white rounded-xl p-6 border border-secondary-200 shadow-soft group-hover:shadow-medium transition-all duration-300 group-hover:-translate-y-1 h-full flex flex-col tech-pattern-dots subtle-texture-card tech-shine-card">
                  {/* Tech overlay for cards */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-50/20 via-transparent to-secondary-50/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  {/* Centered icon */}
                  <div className="text-center mb-6 relative z-10">
                    <div className="w-16 h-16 bg-secondary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-100 transition-all duration-300 mx-auto">
                      <span className="text-3xl text-secondary-700 group-hover:text-primary-700 transition-colors duration-300">
                        {service.icon}
                      </span>
                    </div>
                  </div>

                  {/* Centered title with fixed height */}
                  <div className="text-center mb-6 relative z-10">
                    <div className="h-24 flex items-center justify-center">
                      <h3 className="text-3xl font-bold text-secondary-900 group-hover:text-primary-700 transition-colors duration-300 leading-tight">
                        {t(service.titleKey)}
                      </h3>
                    </div>
                  </div>

                  {/* Aligned price */}
                  <div className="text-center mb-6 relative z-10">
                    <div className="bg-secondary-900 text-white font-bold text-xl px-6 py-3 rounded-xl shadow-sm group-hover:bg-primary-600 transition-colors duration-300 inline-block">
                      {t(service.titleKey.replace("title", "price"))}
                    </div>
                  </div>

                  <p className="text-base text-secondary-600 mb-4 leading-relaxed relative z-10 text-center">
                    {t(service.descriptionKey)}
                  </p>

                  {/* Clean features list - Start from top */}
                  <div className="space-y-2 mb-6 flex-grow relative z-10">
                    {service.features.map((featureKey, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center text-base"
                      >
                        <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-3 flex-shrink-0"></div>
                        <span className="text-secondary-700">
                          {t(featureKey)}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom-aligned CTA button */}
                  <div className="mt-auto relative z-10">
                    <button
                      onClick={() => {
                        const titleValue = t(service.titleKey);
                        const serviceTitle =
                          typeof titleValue === "string"
                            ? titleValue
                            : Array.isArray(titleValue)
                            ? titleValue.join(" ")
                            : "";
                        handleWhatsAppClick(serviceTitle);
                      }}
                      className="w-full bg-secondary-900 text-white py-3.5 px-6 rounded-lg font-semibold hover:bg-primary-600 transition-all duration-300 text-base cursor-pointer"
                    >
                      {t("services.cta")}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Subtle gradient separator */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
    </section>
  );
}

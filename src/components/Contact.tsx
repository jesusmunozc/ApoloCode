"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic will be implemented later
    console.log("Form submitted:", formData);
    alert(t("contact.form.success"));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const faqItems = [
    {
      titleKey: "faq.payment.title",
      contentKey: "faq.payment.text",
    },
    {
      titleKey: "faq.time.title",
      contentKey: "faq.time.text",
    },
    {
      titleKey: "faq.cost.title",
      contentKey: "faq.cost.text",
    },
    {
      titleKey: "faq.benefits.title",
      contentKey: "faq.benefits.text",
    },
    {
      titleKey: "faq.warranty.title",
      contentKey: "faq.warranty.text",
    },
    {
      titleKey: "faq.maintenance.title",
      contentKey: "faq.maintenance.text",
    },
  ];

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <section
      id="contact"
      className="pt-8 lg:pt-12 pb-16 lg:pb-20 bg-white white-wall-texture relative"
    >
      {/* Tech accent elements */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-20 left-1/4 w-40 h-40 bg-gradient-to-br from-primary-100/70 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-48 h-48 bg-gradient-to-tl from-secondary-100/70 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto container-padding relative z-10">
        <div className="text-center mb-8 lg:mb-12 animate-fade-in">
          <h2 className="heading-2 mb-3 lg:mb-4">{t("contact.title")}</h2>
          <p className="text-large max-w-3xl mx-auto">
            {t("contact.description")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
          {/* Enhanced Contact Form - First on mobile */}
          <div className="card p-6 lg:p-10 animate-slide-up bg-gradient-to-br from-secondary-50 to-primary-50/30 relative order-1 lg:order-2">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 via-transparent to-secondary-50/30 rounded-2xl opacity-60"></div>
            <form
              onSubmit={handleSubmit}
              className="space-y-5 lg:space-y-8 relative z-10"
            >
              <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-bold text-secondary-700 mb-2 lg:mb-3 tracking-wider uppercase"
                  >
                    {t("contact.form.name")} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 lg:px-6 lg:py-4 border-2 border-secondary-200 rounded-xl focus-ring transition-all duration-300 bg-white/80 backdrop-blur-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-bold text-secondary-700 mb-2 lg:mb-3 tracking-wider uppercase"
                  >
                    {t("contact.form.email")} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 lg:px-6 lg:py-4 border-2 border-secondary-200 rounded-xl focus-ring transition-all duration-300 bg-white/80 backdrop-blur-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-bold text-secondary-700 mb-2 lg:mb-3 tracking-wider uppercase"
                >
                  {t("contact.form.company")}
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 lg:px-6 lg:py-4 border-2 border-secondary-200 rounded-xl focus-ring transition-all duration-300 bg-white/80 backdrop-blur-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-bold text-secondary-700 mb-2 lg:mb-3 tracking-wider uppercase"
                >
                  {t("contact.form.message")} *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 lg:px-6 lg:py-4 border-2 border-secondary-200 rounded-xl focus-ring transition-all duration-300 resize-vertical bg-white/80 backdrop-blur-sm lg:rows-6"
                  placeholder={t("contact.form.placeholder.message")}
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary py-3 lg:py-5 text-lg font-bold tracking-wide"
              >
                {t("contact.form.submit")}
              </button>
            </form>
          </div>

          {/* FAQ Section - Second on mobile */}
          <div className="animate-slide-up order-2 lg:order-1">
            <h3 className="heading-3 mb-4 lg:mb-6 text-primary-600">
              {t("faq.title")}
            </h3>

            <div className="space-y-2 lg:space-y-3">
              {faqItems.map((faq, index) => (
                <div
                  key={index}
                  className={`border border-secondary-200 rounded-lg lg:rounded-xl overflow-hidden bg-white/50 backdrop-blur-sm faq-card ${
                    expandedFaq === index
                      ? "faq-card-active border-primary-200 bg-white/80"
                      : "hover:border-secondary-300"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-4 py-2.5 lg:px-5 lg:py-3 text-left flex items-center justify-between hover:bg-primary-50/50 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-200"
                  >
                    <span className="font-semibold text-secondary-900 flex items-center text-sm lg:text-base">
                      <span className="text-primary-600 mr-2 lg:mr-3 text-base lg:text-lg">
                        +
                      </span>
                      {t(faq.titleKey)}
                    </span>
                    <div
                      className={`text-primary-600 text-lg lg:text-xl font-bold faq-icon ${
                        expandedFaq === index ? "faq-icon-open" : ""
                      }`}
                    >
                      +
                    </div>
                  </button>

                  {/* Contenido con transición ultra suave */}
                  <div
                    className={`border-t border-secondary-100 bg-gradient-to-b from-secondary-50/50 to-primary-50/30 faq-content ${
                      expandedFaq === index ? "faq-content-open" : ""
                    }`}
                  >
                    <div className="px-4 lg:px-5">
                      <div
                        className={`text-secondary-700 leading-relaxed text-sm lg:text-base faq-text ${
                          expandedFaq === index ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        {t(faq.contentKey)
                          .split("\n")
                          .map((paragraph, pIndex) =>
                            paragraph.trim() ? (
                              <p
                                key={pIndex}
                                className={pIndex > 0 ? "mt-3" : ""}
                              >
                                {paragraph}
                              </p>
                            ) : null
                          )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Info Summary */}
            <div className="mt-4 lg:mt-6 p-3 bg-gradient-to-br from-primary-50/50 to-secondary-50/30 rounded-lg lg:rounded-xl border border-primary-100">
              <h4 className="font-bold text-secondary-900 mb-2 text-sm lg:text-base">
                Información de Contacto
              </h4>
              <div className="space-y-1 lg:space-y-1.5">
                <div className="flex items-center">
                  <span className="text-primary-600 mr-2 text-xs lg:text-sm">
                    📧
                  </span>
                  <span className="text-secondary-700 text-xs lg:text-sm">
                    contacto@apolocode.com
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="text-primary-600 mr-2 text-xs lg:text-sm">
                    ⚡
                  </span>
                  <span className="text-secondary-700 text-xs lg:text-sm">
                    Respuesta en 24 horas
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import ReCAPTCHA from "react-google-recaptcha";

export default function Contact() {
  const { t } = useLanguage();
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [notification, setNotification] = useState<{
    type: "success" | "error" | null;
    message: string;
    show: boolean;
  }>({
    type: null,
    message: "",
    show: false,
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  // Función para mostrar notificaciones
  const showNotification = (type: "success" | "error", message: string) => {
    setNotification({ type, message, show: true });

    // Auto-ocultar después de 5 segundos
    setTimeout(() => {
      setNotification((prev) => ({ ...prev, show: false }));
    }, 5000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Verificar que el captcha esté completado
    if (!captchaToken) {
      showNotification("error", t("contact.form.captcha.required"));
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          captchaToken,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        // Éxito - limpiar formulario y mostrar mensaje
        setFormData({
          name: "",
          email: "",
          company: "",
          message: "",
        });
        setCaptchaToken(null);
        if (recaptchaRef.current) {
          recaptchaRef.current.reset();
        }
        showNotification("success", t("contact.form.success"));
      } else {
        // Error del servidor
        showNotification("error", t("contact.form.error"));
        console.error("Error:", result.error);
      }
    } catch (error) {
      // Error de red o conexión
      showNotification("error", t("contact.form.error"));
      console.error("Error de red:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCaptchaChange = (token: string | null) => {
    setCaptchaToken(token);
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

              {/* reCAPTCHA */}
              <div className="flex justify-center">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
                  onChange={handleCaptchaChange}
                  theme="light"
                  size="normal"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || !captchaToken}
                className={`w-full py-3 lg:py-5 text-lg font-bold tracking-wide transition-all duration-300 rounded-lg ${
                  isSubmitting || !captchaToken
                    ? "bg-gray-400 cursor-not-allowed"
                    : "btn-primary hover:bg-primary-700"
                }`}
              >
                {isSubmitting
                  ? t("contact.form.sending")
                  : t("contact.form.submit")}
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

      {/* Notificación Profesional */}
      {notification.show && (
        <div
          className={`fixed top-4 right-4 z-50 max-w-md w-full mx-4 transform transition-all duration-500 ease-in-out ${
            notification.show
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          }`}
        >
          <div
            className={`rounded-xl shadow-2xl border-l-4 p-4 lg:p-6 backdrop-blur-sm ${
              notification.type === "success"
                ? "bg-green-50/95 border-green-500 text-green-800"
                : "bg-red-50/95 border-red-500 text-red-800"
            }`}
          >
            <div className="flex items-start">
              <div className="flex-shrink-0">
                {notification.type === "success" ? (
                  <svg
                    className="w-6 h-6 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6 text-red-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>
              <div className="ml-3 flex-1">
                <div
                  className={`text-sm font-semibold mb-1 ${
                    notification.type === "success"
                      ? "text-green-800"
                      : "text-red-800"
                  }`}
                >
                  {notification.type === "success"
                    ? t("contact.notification.success.title")
                    : t("contact.notification.error.title")}
                </div>
                <div
                  className={`text-sm ${
                    notification.type === "success"
                      ? "text-green-700"
                      : "text-red-700"
                  }`}
                >
                  {notification.message}
                </div>
              </div>
              <div className="ml-4 flex-shrink-0">
                <button
                  onClick={() =>
                    setNotification((prev) => ({ ...prev, show: false }))
                  }
                  className={`inline-flex text-sm font-medium rounded-md p-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                    notification.type === "success"
                      ? "text-green-500 hover:bg-green-100 focus:ring-green-500"
                      : "text-red-500 hover:bg-red-100 focus:ring-red-500"
                  }`}
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

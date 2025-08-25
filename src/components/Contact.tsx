"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
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

  return (
    <section id="contact" className="pt-12 lg:pt-16 pb-20 lg:pb-24 bg-white">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="heading-2 mb-6">{t("contact.title")}</h2>
          <p className="text-large max-w-3xl mx-auto">
            {t("contact.description")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Enhanced Contact Information */}
          <div className="animate-slide-up">
            <h3 className="heading-3 mb-8">{t("contact.subtitle")}</h3>
            <p className="text-body mb-12">{t("contact.intro")}</p>

            <div className="space-y-8">
              <div className="flex items-start group">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-primary-600 text-2xl">📧</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-secondary-900 mb-2">
                    {t("contact.email.title")}
                  </h4>
                  <p className="text-body">{t("contact.email.text")}</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-primary-600 text-2xl">💬</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-secondary-900 mb-2">
                    {t("contact.chat.title")}
                  </h4>
                  <p className="text-body">{t("contact.chat.text")}</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-primary-600 text-2xl">⚡</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-secondary-900 mb-2">
                    {t("contact.response.title")}
                  </h4>
                  <p className="text-body">{t("contact.response.text")}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <div className="card p-10 animate-slide-up bg-gradient-to-br from-secondary-50 to-primary-50/30">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-bold text-secondary-700 mb-3 tracking-wider uppercase"
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
                    className="w-full px-6 py-4 border-2 border-secondary-200 rounded-xl focus-ring transition-all duration-300 bg-white/80 backdrop-blur-sm"
                    placeholder={t("contact.form.placeholder.name")}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-bold text-secondary-700 mb-3 tracking-wider uppercase"
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
                    className="w-full px-6 py-4 border-2 border-secondary-200 rounded-xl focus-ring transition-all duration-300 bg-white/80 backdrop-blur-sm"
                    placeholder={t("contact.form.placeholder.email")}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-bold text-secondary-700 mb-3 tracking-wider uppercase"
                >
                  {t("contact.form.company")}
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-6 py-4 border-2 border-secondary-200 rounded-xl focus-ring transition-all duration-300 bg-white/80 backdrop-blur-sm"
                  placeholder={t("contact.form.placeholder.company")}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-bold text-secondary-700 mb-3 tracking-wider uppercase"
                >
                  {t("contact.form.message")} *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-6 py-4 border-2 border-secondary-200 rounded-xl focus-ring transition-all duration-300 resize-vertical bg-white/80 backdrop-blur-sm"
                  placeholder={t("contact.form.placeholder.message")}
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary py-5 text-lg font-bold tracking-wide"
              >
                {t("contact.form.submit")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

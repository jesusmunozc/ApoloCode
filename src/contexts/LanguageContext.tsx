"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "es";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Header
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.portfolio": "Portfolio",
    "nav.contact": "Contact",

    // Hero
    "hero.title": "Professional",
    "hero.title.highlight": "Web Development",
    "hero.title.end": "Services",
    "hero.description":
      "We create stunning, high-performance websites and web applications that help your business grow and succeed in the digital world.",
    "hero.cta.primary": "Start Your Project",
    "hero.cta.secondary": "View Our Work",

    // Services
    "services.title": "Our Services",
    "services.description":
      "We offer comprehensive web development services to help your business establish a strong online presence and achieve digital success.",
    "services.cta": "Get Started Today",

    "services.web.title": "Landing Page",
    "services.web.description":
      "High-converting landing pages designed to capture leads and showcase your key product or service effectively.",
    "services.web.price": "Starting at $1,500",
    "services.web.feature1": "Lead Capture Forms",
    "services.web.feature2": "Conversion Optimized",
    "services.web.feature3": "Mobile Responsive",
    "services.web.feature4": "Fast Loading",

    "services.ecommerce.title": "E-commerce Solutions",
    "services.ecommerce.description":
      "Complete online store development with secure payment integration and inventory management systems.",
    "services.ecommerce.price": "Starting at $3,500",
    "services.ecommerce.feature1": "Payment Integration",
    "services.ecommerce.feature2": "Inventory Management",
    "services.ecommerce.feature3": "Mobile Friendly",
    "services.ecommerce.feature4": "Security Focused",

    "services.webapp.title": "Informational Website",
    "services.webapp.description":
      "Professional websites to showcase your business, services, and build trust with detailed information about your company.",
    "services.webapp.price": "Starting at $2,000",
    "services.webapp.feature1": "Content Management",
    "services.webapp.feature2": "SEO Optimized",
    "services.webapp.feature3": "Professional Design",
    "services.webapp.feature4": "Contact Integration",

    "services.maintenance.title": "Website Maintenance",
    "services.maintenance.description":
      "Ongoing support and maintenance to keep your website secure, updated, and performing at its best.",
    "services.maintenance.price": "$200/month",
    "services.maintenance.feature1": "Security Updates",
    "services.maintenance.feature2": "Performance Monitoring",
    "services.maintenance.feature3": "Content Updates",
    "services.maintenance.feature4": "Technical Support",

    // Portfolio
    "portfolio.title": "Our Portfolio",
    "portfolio.description":
      "Take a look at some of our recent projects and see how we've helped businesses succeed online.",
    "portfolio.button.details": "View Details",
    "portfolio.button.demo": "Live Demo",
    "portfolio.button.visit": "Visit Site",
    "portfolio.tech.used": "Technologies Used:",

    "portfolio.project1.title": "Fectum SAS",
    "portfolio.project1.description":
      "Modern corporate website for construction and engineering company featuring responsive design, project showcases, and professional service presentation.",
    "portfolio.project1.category": "Corporate",

    "portfolio.project5.title": "Kárdhamo Desserts",
    "portfolio.project5.description":
      "Inventory and sales control system for dessert business with real-time management and analytics.",
    "portfolio.project5.category": "Business App",

    "portfolio.project6.title": "Celebrity Barber",
    "portfolio.project6.description":
      "Modern barbershop website with appointment booking system, service showcase, and professional presentation.",
    "portfolio.project6.category": "Business",

    // Contact
    "contact.title": "Get In Touch",
    "contact.description":
      "Ready to start your project? Contact us today and let's discuss how we can help bring your vision to life.",
    "contact.subtitle": "Let's Start a Conversation",
    "contact.intro":
      "We're here to help you build amazing web solutions. Whether you need a simple website or a complex web application, our team is ready to make it happen.",

    "contact.email.title": "Email Us",
    "contact.email.text": "contact@apolocode.com",
    "contact.chat.title": "Let's Chat",
    "contact.chat.text": "Available for consultations and project discussions",
    "contact.response.title": "Quick Response",
    "contact.response.text": "We typically respond within 24 hours",

    "contact.form.name": "Your Name",
    "contact.form.email": "Email Address",
    "contact.form.company": "Company (Optional)",
    "contact.form.message": "Project Details",
    "contact.form.placeholder.name": "John Doe",
    "contact.form.placeholder.email": "john@example.com",
    "contact.form.placeholder.company": "Your Company",
    "contact.form.placeholder.message":
      "Tell us about your project, requirements, timeline, and any specific features you need...",
    "contact.form.submit": "Send Message",
    "contact.form.success":
      "Thank you for your message! We'll get back to you soon.",

    // Footer
    "footer.description":
      "Professional web development services for businesses and companies. We create stunning, high-performance websites and web applications that help your business grow.",
    "footer.services.title": "Services",
    "footer.services.web": "Web Development",
    "footer.services.ecommerce": "E-commerce Solutions",
    "footer.services.webapp": "Web Applications",
    "footer.services.maintenance": "Website Maintenance",
    "footer.links.title": "Quick Links",
    "footer.copyright":
      "© 2024 ApoloCode. All rights reserved. Built with passion for web development.",
  },
  es: {
    // Header
    "nav.home": "Inicio",
    "nav.services": "Servicios",
    "nav.portfolio": "Portafolio",
    "nav.contact": "Contacto",

    // Hero
    "hero.title": "Servicios",
    "hero.title.highlight": "Desarrollo Web",
    "hero.title.end": "Profesionales",
    "hero.description":
      "Creamos sitios web y aplicaciones web impresionantes y de alto rendimiento que ayudan a tu negocio a crecer y tener éxito en el mundo digital.",
    "hero.cta.primary": "Iniciar Tu Proyecto",
    "hero.cta.secondary": "Ver Nuestro Trabajo",

    // Services
    "services.title": "Nuestros Servicios",
    "services.description":
      "Ofrecemos servicios integrales de desarrollo web para ayudar a tu negocio a establecer una sólida presencia en línea y lograr el éxito digital.",
    "services.cta": "Comienza Hoy",

    "services.web.title": "Landing Page",
    "services.web.description":
      "Páginas de aterrizaje optimizadas para conversión, diseñadas para capturar leads y mostrar tu producto o servicio clave de manera efectiva.",
    "services.web.price": "Desde $1,500",
    "services.web.feature1": "Formularios de Captura",
    "services.web.feature2": "Optimizado para Conversión",
    "services.web.feature3": "Responsive Mobile",
    "services.web.feature4": "Carga Rápida",

    "services.ecommerce.title": "Soluciones E-commerce",
    "services.ecommerce.description":
      "Desarrollo completo de tiendas en línea con integración de pagos seguros y sistemas de gestión de inventario.",
    "services.ecommerce.price": "Desde $3,500",
    "services.ecommerce.feature1": "Integración de Pagos",
    "services.ecommerce.feature2": "Gestión de Inventario",
    "services.ecommerce.feature3": "Móvil Amigable",
    "services.ecommerce.feature4": "Enfoque en Seguridad",

    "services.webapp.title": "Página Informativa",
    "services.webapp.description":
      "Sitios web profesionales para mostrar tu empresa, servicios y generar confianza con información detallada sobre tu compañía.",
    "services.webapp.price": "Desde $2,000",
    "services.webapp.feature1": "Gestión de Contenido",
    "services.webapp.feature2": "Optimizado para SEO",
    "services.webapp.feature3": "Diseño Profesional",
    "services.webapp.feature4": "Integración de Contacto",

    "services.maintenance.title": "Mantenimiento de Sitios Web",
    "services.maintenance.description":
      "Soporte y mantenimiento continuo para mantener tu sitio web seguro, actualizado y funcionando de la mejor manera.",
    "services.maintenance.price": "$200/mes",
    "services.maintenance.feature1": "Actualizaciones de Seguridad",
    "services.maintenance.feature2": "Monitoreo de Rendimiento",
    "services.maintenance.feature3": "Actualizaciones de Contenido",
    "services.maintenance.feature4": "Soporte Técnico",

    // Portfolio
    "portfolio.title": "Nuestro Portafolio",
    "portfolio.description":
      "Echa un vistazo a algunos de nuestros proyectos recientes y ve cómo hemos ayudado a las empresas a tener éxito en línea.",
    "portfolio.button.details": "Ver Detalles",
    "portfolio.button.demo": "Demo en Vivo",
    "portfolio.button.visit": "Visitar Sitio",
    "portfolio.tech.used": "Tecnologías Utilizadas:",

    "portfolio.project1.title": "Fectum SAS",
    "portfolio.project1.description":
      "Sitio web corporativo moderno para empresa de construcción e ingeniería con diseño responsivo, muestra de proyectos y presentación profesional de servicios.",
    "portfolio.project1.category": "Corporativo",

    "portfolio.project5.title": "Kárdhamo Desserts",
    "portfolio.project5.description":
      "Sistema de control de inventario y ventas para negocio de postres con gestión en tiempo real y análisis de datos.",
    "portfolio.project5.category": "App de Negocio",

    "portfolio.project6.title": "Celebrity Barber",
    "portfolio.project6.description":
      "Sitio web moderno para barbería con sistema de reserva de citas, muestra de servicios y presentación profesional.",
    "portfolio.project6.category": "Negocio",

    // Contact
    "contact.title": "Ponte en Contacto",
    "contact.description":
      "¿Listo para comenzar tu proyecto? Contáctanos hoy y hablemos sobre cómo podemos ayudar a dar vida a tu visión.",
    "contact.subtitle": "Comencemos una Conversación",
    "contact.intro":
      "Estamos aquí para ayudarte a construir soluciones web increíbles. Ya sea que necesites un sitio web simple o una aplicación web compleja, nuestro equipo está listo para hacerlo realidad.",

    "contact.email.title": "Envíanos un Email",
    "contact.email.text": "contacto@apolocode.com",
    "contact.chat.title": "Hablemos",
    "contact.chat.text": "Disponible para consultas y discusiones de proyectos",
    "contact.response.title": "Respuesta Rápida",
    "contact.response.text": "Normalmente respondemos dentro de 24 horas",

    "contact.form.name": "Tu Nombre",
    "contact.form.email": "Dirección de Email",
    "contact.form.company": "Empresa (Opcional)",
    "contact.form.message": "Detalles del Proyecto",
    "contact.form.placeholder.name": "Juan Pérez",
    "contact.form.placeholder.email": "juan@ejemplo.com",
    "contact.form.placeholder.company": "Tu Empresa",
    "contact.form.placeholder.message":
      "Cuéntanos sobre tu proyecto, requisitos, cronograma y cualquier característica específica que necesites...",
    "contact.form.submit": "Enviar Mensaje",
    "contact.form.success": "¡Gracias por tu mensaje! Te responderemos pronto.",

    // Footer
    "footer.description":
      "Servicios profesionales de desarrollo web para empresas y compañías. Creamos sitios web y aplicaciones web impresionantes y de alto rendimiento que ayudan a tu negocio a crecer.",
    "footer.services.title": "Servicios",
    "footer.services.web": "Desarrollo Web",
    "footer.services.ecommerce": "Soluciones E-commerce",
    "footer.services.webapp": "Aplicaciones Web",
    "footer.services.maintenance": "Mantenimiento Web",
    "footer.links.title": "Enlaces Rápidos",
    "footer.copyright":
      "© 2024 ApoloCode. Todos los derechos reservados. Construido con pasión por el desarrollo web.",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("es");

  const t = (key: string): string => {
    return (
      translations[language][key as keyof (typeof translations)["en"]] || key
    );
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

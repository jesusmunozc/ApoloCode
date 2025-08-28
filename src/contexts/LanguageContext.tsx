"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "es";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string | string[];
}

const translations = {
  en: {
    // Header
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.portfolio": "Portfolio",
    "nav.contact": "Contact",

    // Hero
    "hero.title": "We Design",
    "hero.title.highlight": "your personalized website",
    "hero.title.end": "for your business",
    "hero.description":
      "We create stunning, high-performance websites and web applications that help your business grow and succeed in the digital world.",
    "hero.cta.primary": "Start Your Project",
    "hero.cta.secondary": "View Our Work",
    "hero.words": ["We Design", "We Create"],
    "hero.stats.years": "Years of experience",
    "hero.stats.projects": "Projects completed",
    "hero.stats.clients": "Satisfied clients",

    // Services
    "services.title": "Our Services",
    "services.description":
      "We offer comprehensive web development services to help your business establish a strong online presence and achieve digital success.",
    "services.cta": "Hire Now",

    "services.web.title": "Landing Page",
    "services.web.description": "Website similar to this one",
    "services.web.price": "$800.000 COP",
    "services.web.feature1": "Unique design",
    "services.web.feature2": "Animations",
    "services.web.feature3": "Responsive design",
    "services.web.feature4": "Up to 4 additional sections",
    "services.web.feature5": "Load optimization",
    "services.web.feature6": "Social media integration",
    "services.web.feature7": "Contact form",
    "services.web.feature8": "Hosting and domain",
    "services.web.feature9": "60 days warranty and maintenance",

    "services.ecommerce.title": "Online Store",
    "services.ecommerce.description": "Better known as E-commerce",
    "services.ecommerce.price": "$1.400.000 COP",
    "services.ecommerce.feature1": "Personalized design",
    "services.ecommerce.feature2": "Responsive design",
    "services.ecommerce.feature3": "Entry of 50 products",
    "services.ecommerce.feature4": "SEO optimization for products",
    "services.ecommerce.feature5": "Load optimization",
    "services.ecommerce.feature6": "Social media integration",
    "services.ecommerce.feature7": "Contact form",
    "services.ecommerce.feature8": "Hosting and domain",
    "services.ecommerce.feature9": "90 days warranty and maintenance",

    "services.webapp.title": "Informational Website",
    "services.webapp.description": "About your business or service",
    "services.webapp.price": "$400.000 COP",
    "services.webapp.feature1": "Traditional and static design",
    "services.webapp.feature2": "Responsive design",
    "services.webapp.feature3": "Load optimization",
    "services.webapp.feature4": "Social media integration",
    "services.webapp.feature5": "Contact form",
    "services.webapp.feature6": "Hosting and domain",
    "services.webapp.feature7": "30 days warranty and maintenance",

    "services.maintenance.title": "Website Maintenance",
    "services.maintenance.description":
      "Ongoing support and maintenance to keep your website secure, updated, and performing at its best.",
    "services.maintenance.price": "$60.000 COP/month",
    "services.maintenance.feature1": "Security updates",
    "services.maintenance.feature2": "Performance monitoring",
    "services.maintenance.feature3": "Content updates",
    "services.maintenance.feature4": "Technical support",

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
      "Inventory and sales control system for dessert business with real-time management and data analysis.",
    "portfolio.project5.category": "Business App",

    "portfolio.project6.title": "Celebrity Barber",
    "portfolio.project6.description":
      "Modern website for barbershop with appointment booking system, service showcase and professional presentation.",
    "portfolio.project6.category": "Business",

    // Contact
    "contact.title": "Get in Touch",
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

    // FAQ
    "faq.title": "Frequently Asked Questions",
    "faq.payment.title": "Payment Method",
    "faq.payment.text":
      "50% is paid to start and the remaining 50% to finish.\n\nAdditional products are charged once the web is finalized and delivered.",
    "faq.time.title": "How long does it take?",
    "faq.time.text":
      "Delivery time depends on the number of ongoing projects. However, the maximum deadline is 30 business days.\n\nIn many cases, delivery can be made in 7 to 14 business days, but in case of any unforeseen circumstances, we guarantee it will not exceed 30 business days.",
    "faq.cost.title": "Cost for additional products uploads",
    "faq.cost.text":
      "Depending on the plan, uploading the first products is free and includes all detailed information to maximize visibility.\n\nIf you want to add additional products, the cost is $5 USD for the E-commerce plan and $3 USD for the Premium plan.\n\nThis additional cost applies only when you choose to have me upload additional products.",
    "faq.benefits.title": "Benefits of uploading all your products",
    "faq.benefits.text":
      "Each product is optimized to the maximum to stand out on the web. This includes improving attributes and personalized descriptions (such as quantity, color, and key features), facilitating more precise and effective search.\n\nAdditionally, this process is done manually and optimized for SEO, ensuring better results and greater visibility in search engines.",
    "faq.warranty.title": "What does the warranty cover?",
    "faq.warranty.text":
      "The warranty covers updating information on the web after delivery, without any problems or additional cost.",
    "faq.maintenance.title": "Will my web have maintenance?",
    "faq.maintenance.text":
      "Maintenance is included for free during the first days, depending on the contracted plan. After that period, it has an additional cost, which is completely optional.",

    // Contact Form
    "contact.form.name": "Your Name",
    "contact.form.email": "Email Address",
    "contact.form.company": "Company (Optional)",
    "contact.form.message": "Project Details",
    "contact.form.placeholder.name": "John Doe",
    "contact.form.placeholder.email": "john@example.com",
    "contact.form.placeholder.company": "Your Company",
    "contact.form.placeholder.message":
      "Tell us about your project, requirements, timeline, and any specific features you need...",
    "contact.form.captcha": "Please complete the security verification",
    "contact.form.captcha.required": "Please complete the captcha verification",
    "contact.form.submit": "Send Message",
    "contact.form.sending": "Sending...",
    "contact.form.success":
      "Thank you for your message! We'll get back to you soon.",
    "contact.form.error":
      "There was an error sending your message. Please try again or contact us directly.",

    // Notificaciones
    "contact.notification.success.title": "Message Sent Successfully!",
    "contact.notification.error.title": "Error Sending Message",

    // Footer
    "footer.description":
      "Professional web development services for businesses and companies. We create stunning, high-performance websites and web applications that help your business grow.",
    "footer.services.title": "Services",
    "footer.services.web": "Web Development",
    "footer.services.ecommerce": "E-commerce Solutions",
    "footer.services.webapp": "Web Applications",
    "footer.services.maintenance": "Website Maintenance",
    "footer.links.title": "Quick Links",
    "footer.copyright": "© 2024 ApoloCode. All rights reserved.",
  },
  es: {
    // Header
    "nav.home": "Inicio",
    "nav.services": "Servicios",
    "nav.portfolio": "Portafolio",
    "nav.contact": "Contacto",

    // Hero
    "hero.title": "Diseñamos",
    "hero.title.highlight": "tu sitio web personalizado",
    "hero.title.end": "para tu negocio",
    "hero.description":
      "Creamos sitios web y aplicaciones web impresionantes y de alto rendimiento que ayudan a tu negocio a crecer y tener éxito en el mundo digital.",
    "hero.cta.primary": "Iniciar Tu Proyecto",
    "hero.words": ["Diseñamos", "Creamos"],
    "hero.stats.years": "Años de experiencia",
    "hero.stats.projects": "Proyectos realizados",
    "hero.stats.clients": "Clientes satisfechos",
    "hero.cta.secondary": "Ver Nuestro Trabajo",

    // Services
    "services.title": "Nuestros Servicios",
    "services.description":
      "Ofrecemos servicios integrales de desarrollo web para ayudar a tu negocio a establecer una sólida presencia en línea y lograr el éxito digital.",
    "services.cta": "Contratar",

    "services.web.title": "Landing Page",
    "services.web.description": "Web similar a esta",
    "services.web.price": "$800.000 COP",
    "services.web.feature1": "Diseño único",
    "services.web.feature2": "Animaciones",
    "services.web.feature3": "Diseño Responsive",
    "services.web.feature4": "Hasta 4 secciones adicionales",
    "services.web.feature5": "Optimización de carga",
    "services.web.feature6": "Integración con redes sociales",
    "services.web.feature7": "Formulario de contacto",
    "services.web.feature8": "Hosting y dominio",
    "services.web.feature9": "60 Días de garantía y mantención",

    "services.ecommerce.title": "Tienda Online",
    "services.ecommerce.description": "Más conocida como E-commerce",
    "services.ecommerce.price": "$1.400.000 COP",
    "services.ecommerce.feature1": "Diseño Personalizado",
    "services.ecommerce.feature2": "Diseño Responsive",
    "services.ecommerce.feature3": "Ingreso de 50 Producto",
    "services.ecommerce.feature4": "Optimización de SEO para producto",
    "services.ecommerce.feature5": "Optimización de carga",
    "services.ecommerce.feature6": "Integración con redes sociales",
    "services.ecommerce.feature7": "Formulario de contacto",
    "services.ecommerce.feature8": "Hosting y dominio",
    "services.ecommerce.feature9": "90 Días de garantía y mantención",

    "services.webapp.title": "Página Informativa",
    "services.webapp.description": "Sobre tu negocio o servicio",
    "services.webapp.price": "$400.000 COP",
    "services.webapp.feature1": "Diseño tradicional y estático",
    "services.webapp.feature2": "Diseño Responsive",
    "services.webapp.feature3": "Optimización de carga",
    "services.webapp.feature4": "Integración con redes sociales",
    "services.webapp.feature5": "Formulario de contacto",
    "services.webapp.feature6": "Hosting y dominio",
    "services.webapp.feature7": "30 Días de garantía y mantención",

    "services.maintenance.title": "Mantenimiento de Sitios Web",
    "services.maintenance.description":
      "Soporte y mantenimiento continuo para mantener tu sitio web seguro, actualizado y funcionando de la mejor manera.",
    "services.maintenance.price": "$60.000 COP/mes",
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

    // FAQ
    "faq.title": "Preguntas Frecuentes",
    "faq.payment.title": "Modalidad de pago",
    "faq.payment.text":
      "Se paga el 50% al iniciar y el 50% restante al finalizar.\n\nLos productos adicionales se sube una vez finalizado y entregada la web.",
    "faq.time.title": "¿Cuanto tiempo se demora?",
    "faq.time.text":
      "El tiempo de entrega depende de la cantidad de proyectos en curso. Sin embargo, el plazo máximo es de 30 días hábiles.\n\nEn muchos casos, la entrega puede realizarse en 7 a 14 días hábiles, pero ante cualquier imprevisto, garantizamos que no excederá los 30 días hábiles.",
    "faq.cost.title": "Costo por subir productos adicionales",
    "faq.cost.text":
      "Dependiendo del plan, la subida de los primeros productos es gratuita e incluye toda la información detallada para maximizar su visibilidad.\n\nSi deseas agregar productos adicionales, el costo es de 5 USD en el plan E-commerce y 3 USD en el plan Premium.\n\nEste costo adicional es siempre y cuando elijas que yo te suba productos adicionales.",
    "faq.benefits.title": "Beneficios de que suba todos tus productos",
    "faq.benefits.text":
      "Cada producto se optimiza al máximo para destacar en la web. Esto incluye la mejora de atributos y descripciones personalizadas (como cantidad, color y características clave), lo que facilita una búsqueda más precisa y efectiva.\n\nAdemás, este proceso se realiza de forma manual y optimizada para SEO, asegurando mejores resultados y mayor visibilidad en los buscadores.",
    "faq.warranty.title": "¿Que cubre la garantía?",
    "faq.warranty.text":
      "La garantía cubre la actualización de información en la web después de la entrega, sin ningún problema ni costo adicional.",
    "faq.maintenance.title": "¿Mi web tendrá mantenimiento?",
    "faq.maintenance.text":
      "El mantenimiento está incluido de forma gratuita durante los primeros días, según el plan contratado.\n\nDespués de ese período, tiene un costo adicional, que es completamente opcional.",

    "contact.form.name": "Tu Nombre",
    "contact.form.email": "Dirección de Email",
    "contact.form.company": "Empresa (Opcional)",
    "contact.form.message": "Detalles del Proyecto",
    "contact.form.placeholder.name": "Juan Pérez",
    "contact.form.placeholder.email": "juan@ejemplo.com",
    "contact.form.placeholder.company": "Tu Empresa",
    "contact.form.placeholder.message":
      "Cuéntanos sobre tu proyecto, requisitos, cronograma y cualquier característica específica que necesites...",
    "contact.form.captcha": "Por favor completa la verificación de seguridad",
    "contact.form.captcha.required":
      "Por favor completa la verificación captcha",
    "contact.form.submit": "Enviar Mensaje",
    "contact.form.sending": "Enviando...",
    "contact.form.success": "¡Gracias por tu mensaje! Te responderemos pronto.",
    "contact.form.error":
      "Hubo un error al enviar tu mensaje. Por favor intenta de nuevo o contáctanos directamente.",

    // Notificaciones
    "contact.notification.success.title": "¡Mensaje Enviado Exitosamente!",
    "contact.notification.error.title": "Error al Enviar Mensaje",

    // Footer
    "footer.description":
      "Servicios profesionales de desarrollo web para empresas y compañías. Creamos sitios web y aplicaciones web impresionantes y de alto rendimiento que ayudan a tu negocio a crecer.",
    "footer.services.title": "Servicios",
    "footer.services.web": "Desarrollo Web",
    "footer.services.ecommerce": "Soluciones E-commerce",
    "footer.services.webapp": "Aplicaciones Web",
    "footer.services.maintenance": "Mantenimiento Web",
    "footer.links.title": "Enlaces Rápidos",
    "footer.copyright": "© 2024 ApoloCode. Todos los derechos reservados.",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("es");

  const t = (key: string): string | string[] => {
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

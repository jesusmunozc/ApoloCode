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
    // Language code
    language: "en",
    // Header
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.packages": "Packages",
    "nav.portfolio": "Portfolio",
    "nav.contact": "Contact",

    // Hero
    "hero.title": "We Design",
    "hero.title.highlight": "your personalized website",
    "hero.title.end": "for your business",
    "hero.description":
      "Your website is your business card that never sleeps.\n\nWe create digital experiences, optimization, and custom automations to boost your brand while you focus on what you do best.",
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
    "services.web.price": "$250 USD",
    "services.web.feature1": "Unique design",
    "services.web.feature2": "Animations",
    "services.web.feature3": "Responsive design",
    "services.web.feature4": "Up to 4 additional sections",
    "services.web.feature5": "Load optimization",
    "services.web.feature6": "Social media integration",
    "services.web.feature7": "Contact form",
    "services.web.feature8": "Hosting and domain configuration",
    "services.web.feature9": "60 days warranty and maintenance",

    "services.ecommerce.title": "Online Store",
    "services.ecommerce.description": "Better known as E-commerce",
    "services.ecommerce.price": "$500 USD",
    "services.ecommerce.feature1": "Personalized design",
    "services.ecommerce.feature2": "Responsive design",
    "services.ecommerce.feature3": "SEO optimization for products",
    "services.ecommerce.feature4": "Load optimization",
    "services.ecommerce.feature5": "Social media integration",
    "services.ecommerce.feature6": "Contact form",
    "services.ecommerce.feature7": "Hosting and domain configuration",
    "services.ecommerce.feature8": "90 days warranty and maintenance",

    "services.webapp.title": "Informational Website",
    "services.webapp.description": "About your business or service",
    "services.webapp.price": "$120 USD",
    "services.webapp.feature1": "Traditional and static design",
    "services.webapp.feature2": "Responsive design",
    "services.webapp.feature3": "Load optimization",
    "services.webapp.feature4": "Social media integration",
    "services.webapp.feature5": "Contact form",
    "services.webapp.feature6": "Hosting and domain configuration",
    "services.webapp.feature7": "30 days warranty and maintenance",

    "services.maintenance.title": "Website Maintenance",
    "services.maintenance.description":
      "Ongoing support and maintenance to keep your website secure, updated, and performing at its best.",
    "services.maintenance.price": "From $50 USD/month",
    "services.maintenance.feature1": "Security updates",
    "services.maintenance.feature2": "Performance monitoring",
    "services.maintenance.feature3": "Content updates",
    "services.maintenance.feature4": "Technical support",

    // Optimization and Automation
    "services.optimization.title": "Process Optimization & Automation",
    "services.optimization.description":
      "We streamline your business processes and implement smart automations to increase efficiency and reduce manual work.",
    "services.optimization.price": "From $50 USD",
    "services.optimization.feature1": "Workflow analysis and optimization",
    "services.optimization.feature2": "Task automation systems",
    "services.optimization.feature3": "Data integration and synchronization",
    "services.optimization.feature4": "Custom business tools development",
    "services.optimization.feature5": "API integrations",
    "services.optimization.feature6": "Performance monitoring and reporting",

    // Packages
    "packages.title": "Our Service Packages",
    "packages.description":
      "Explore our comprehensive packages designed to fit your business needs. From basic solutions to enterprise-level services.",
    "packages.cta.title": "Ready to Get Started?",
    "packages.cta.description":
      "Contact us today and let's discuss which package is right for your project.",
    "packages.cta.button": "Request a Quote",

    // Web Development Packages
    "packages.webdev.title": "WordPress + WooCommerce Development",
    "packages.webdev.description": "Complete e-commerce solutions",

    "packages.webdev.wordpress.basic.name": "Basic Package",
    "packages.webdev.wordpress.basic.price": "$640 USD",
    "packages.webdev.wordpress.basic.time": "Delivery: 7-10 business days",
    "packages.webdev.wordpress.basic.feature1":
      "WordPress + WooCommerce installation",
    "packages.webdev.wordpress.basic.feature2": "Premium template included ($60)",
    "packages.webdev.wordpress.basic.feature3": "Up to 20 products configured",
    "packages.webdev.wordpress.basic.feature4":
      "Payment gateway setup (1 option)",
    "packages.webdev.wordpress.basic.feature5": "Basic SEO configuration",
    "packages.webdev.wordpress.basic.feature6": "Responsive design",
    "packages.webdev.wordpress.basic.feature7": "1 round of revisions",

    "packages.webdev.wordpress.professional.name": "Professional Package",
    "packages.webdev.wordpress.professional.price": "$1,200 USD",
    "packages.webdev.wordpress.professional.time":
      "Delivery: 14-18 business days",
    "packages.webdev.wordpress.professional.feature1":
      "Everything in Basic + Premium template ($100)",
    "packages.webdev.wordpress.professional.feature2":
      "Up to 50 products configured",
    "packages.webdev.wordpress.professional.feature3":
      "Multiple payment gateways (up to 3)",
    "packages.webdev.wordpress.professional.feature4":
      "Abandoned cart recovery",
    "packages.webdev.wordpress.professional.feature5": "Blog setup (5 articles)",
    "packages.webdev.wordpress.professional.feature6": "2 rounds of revisions",

    "packages.webdev.wordpress.premium.name": "Premium Package",
    "packages.webdev.wordpress.premium.price": "$2,240 USD",
    "packages.webdev.wordpress.premium.time": "Delivery: 25-30 business days",
    "packages.webdev.wordpress.premium.feature1":
      "Everything in Professional + Custom template ($200)",
    "packages.webdev.wordpress.premium.feature2":
      "Up to 150 products configured",
    "packages.webdev.wordpress.premium.feature3":
      "Membership/subscription system",
    "packages.webdev.wordpress.premium.feature4":
      "Multi-language (up to 2 languages)",
    "packages.webdev.wordpress.premium.feature5":
      "Custom features (20 hours development)",
    "packages.webdev.wordpress.premium.feature6": "1 month post-launch support",

    // Shopify Packages
    "packages.shopify.title": "Shopify Development",
    "packages.shopify.description": "Fast and reliable Shopify stores",

    "packages.shopify.basic.name": "Basic Package",
    "packages.shopify.basic.price": "$560 USD",
    "packages.shopify.basic.time": "Delivery: 5-7 business days",
    "packages.shopify.basic.feature1": "Complete Shopify store setup",
    "packages.shopify.basic.feature2": "Theme from Shopify Theme Store",
    "packages.shopify.basic.feature3": "Up to 20 products configured",
    "packages.shopify.basic.feature4": "Payment gateway configuration",
    "packages.shopify.basic.feature5": "Google Analytics integration",

    "packages.shopify.professional.name": "Professional Package",
    "packages.shopify.professional.price": "$960 USD",
    "packages.shopify.professional.time": "Delivery: 10-14 business days",
    "packages.shopify.professional.feature1":
      "Everything in Basic + Premium theme ($180-$350)",
    "packages.shopify.professional.feature2": "Up to 50 products configured",
    "packages.shopify.professional.feature3":
      "Complementary apps integration (up to 5)",
    "packages.shopify.professional.feature4": "Advanced theme customization",
    "packages.shopify.professional.feature5": "SEO optimized + Blog",

    "packages.shopify.premium.name": "Premium Package",
    "packages.shopify.premium.price": "$1,760 USD",
    "packages.shopify.premium.time": "Delivery: 20-25 business days",
    "packages.shopify.premium.feature1":
      "Everything in Professional + 150 products",
    "packages.shopify.premium.feature2":
      "Custom Liquid development (15 hours)",
    "packages.shopify.premium.feature3": "External systems integration (API)",
    "packages.shopify.premium.feature4": "Multi-language and multi-currency",
    "packages.shopify.premium.feature5": "1 month post-launch support",

    // Maintenance Packages
    "packages.maintenance.title": "Maintenance & Support Plans",
    "packages.maintenance.description": "Keep your site running smoothly",

    "packages.maintenance.basic.name": "Basic Plan",
    "packages.maintenance.basic.price": "$120 USD/month",
    "packages.maintenance.basic.feature1": "Up to 3 hours of work per month",
    "packages.maintenance.basic.feature2": "Plugin/theme updates",
    "packages.maintenance.basic.feature3": "Weekly automatic backups",
    "packages.maintenance.basic.feature4": "Uptime monitoring",
    "packages.maintenance.basic.feature5": "Email support (48hr response)",

    "packages.maintenance.professional.name": "Professional Plan",
    "packages.maintenance.professional.price": "$240 USD/month",
    "packages.maintenance.professional.feature1": "Up to 8 hours of work per month",
    "packages.maintenance.professional.feature2": "Daily automatic backups",
    "packages.maintenance.professional.feature3": "Monthly speed optimization",
    "packages.maintenance.professional.feature4": "Up to 10 products/month",
    "packages.maintenance.professional.feature5":
      "Email & WhatsApp support (24hr response)",

    "packages.maintenance.premium.name": "Premium Plan",
    "packages.maintenance.premium.price": "$480 USD/month",
    "packages.maintenance.premium.feature1": "Up to 16 hours of work per month",
    "packages.maintenance.premium.feature2": "24/7 monitoring with alerts",
    "packages.maintenance.premium.feature3": "Unlimited product updates",
    "packages.maintenance.premium.feature4": "Priority support (4hr response)",
    "packages.maintenance.premium.feature5": "A/B testing & conversion optimization",

    "packages.maintenance.enterprise.name": "Enterprise Plan",
    "packages.maintenance.enterprise.price": "$960 USD/month",
    "packages.maintenance.enterprise.feature1": "Up to 40 hours of work per month",
    "packages.maintenance.enterprise.feature2": "Dedicated account manager",
    "packages.maintenance.enterprise.feature3": "24/7 emergency availability",
    "packages.maintenance.enterprise.feature4": "Advanced security with dedicated firewall",

    // SEO Packages
    "packages.seo.title": "SEO Optimization",
    "packages.seo.description": "Improve your search engine rankings",

    "packages.seo.basic.name": "Basic SEO",
    "packages.seo.basic.price": "$320 USD",
    "packages.seo.basic.time": "Delivery: 3-5 business days",
    "packages.seo.basic.feature1": "SEO plugin installation & configuration",
    "packages.seo.basic.feature2": "Title & meta description optimization (10 pages)",
    "packages.seo.basic.feature3": "XML sitemap configuration",
    "packages.seo.basic.feature4": "Google Search Console integration",
    "packages.seo.basic.feature5": "Basic image optimization (alt tags)",

    "packages.seo.professional.name": "Professional SEO",
    "packages.seo.professional.price": "$640 USD",
    "packages.seo.professional.time": "Delivery: 7-10 business days",
    "packages.seo.professional.feature1":
      "Everything in Basic + Keyword research (20 keywords)",
    "packages.seo.professional.feature2": "Complete on-page optimization (30 pages)",
    "packages.seo.professional.feature3": "Basic schema markup",
    "packages.seo.professional.feature4": "Internal linking strategy",
    "packages.seo.professional.feature5": "3 months of monthly reviews",

    "packages.seo.premium.name": "Premium SEO",
    "packages.seo.premium.price": "$1,200 USD",
    "packages.seo.premium.time": "Delivery: 14-18 business days",
    "packages.seo.premium.feature1":
      "Everything in Professional + Deep keyword research (50+)",
    "packages.seo.premium.feature2": "Advanced schema markup",
    "packages.seo.premium.feature3": "Core Web Vitals optimization",
    "packages.seo.premium.feature4": "Link building strategy",
    "packages.seo.premium.feature5": "6 months of monthly reports",

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
    "contact.info.title": "Contact Information",
    "contact.info.response": "Response within 24 hours",

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
    // Language code
    language: "es",
    // Header
    "nav.home": "Inicio",
    "nav.services": "Servicios",
    "nav.packages": "Paquetes",
    "nav.portfolio": "Portafolio",
    "nav.contact": "Contacto",

    // Hero
    "hero.title": "Diseñamos",
    "hero.title.highlight": "tu sitio web personalizado",
    "hero.title.end": "para tu negocio",
    "hero.description":
      "Tu sitio web es tu tarjeta de presentación que nunca duerme.\n\nCreamos experiencias digitales, optimización y automatizaciones a tu medida para impulsar tu marca mientras tú te enfocas en lo mejor que sabes hacer.",
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
    "services.web.price": "$250 USD",
    "services.web.feature1": "Diseño único",
    "services.web.feature2": "Animaciones",
    "services.web.feature3": "Diseño Responsive",
    "services.web.feature4": "Hasta 4 secciones adicionales",
    "services.web.feature5": "Optimización de carga",
    "services.web.feature6": "Integración con redes sociales",
    "services.web.feature7": "Formulario de contacto",
    "services.web.feature8": "Configuración de hosting y dominio",
    "services.web.feature9": "60 Días de garantía y mantención",

    "services.ecommerce.title": "Tienda Online",
    "services.ecommerce.description": "Más conocida como E-commerce",
    "services.ecommerce.price": "$500 USD",
    "services.ecommerce.feature1": "Diseño Personalizado",
    "services.ecommerce.feature2": "Diseño Responsive",
    "services.ecommerce.feature3": "Optimización de SEO para producto",
    "services.ecommerce.feature4": "Optimización de carga",
    "services.ecommerce.feature5": "Integración con redes sociales",
    "services.ecommerce.feature6": "Formulario de contacto",
    "services.ecommerce.feature7": "Configuración de hosting y dominio",
    "services.ecommerce.feature8": "90 Días de garantía y mantención",

    "services.webapp.title": "Página Informativa",
    "services.webapp.description": "Sobre tu negocio o servicio",
    "services.webapp.price": "$120 USD",
    "services.webapp.feature1": "Diseño tradicional y estático",
    "services.webapp.feature2": "Diseño Responsive",
    "services.webapp.feature3": "Optimización de carga",
    "services.webapp.feature4": "Integración con redes sociales",
    "services.webapp.feature5": "Formulario de contacto",
    "services.webapp.feature6": "Configuración de hosting y dominio",
    "services.webapp.feature7": "30 Días de garantía y mantención",

    "services.maintenance.title": "Mantenimiento de Sitios Web",
    "services.maintenance.description":
      "Soporte y mantenimiento continuo para mantener tu sitio web seguro, actualizado y funcionando de la mejor manera.",
    "services.maintenance.price": "Desde $50 USD/mes",
    "services.maintenance.feature1": "Actualizaciones de Seguridad",
    "services.maintenance.feature2": "Monitoreo de Rendimiento",
    "services.maintenance.feature3": "Actualizaciones de Contenido",
    "services.maintenance.feature4": "Soporte Técnico",

    // Optimización y Automatización
    "services.optimization.title": "Optimización y Automatización de Procesos",
    "services.optimization.description":
      "Optimizamos los procesos de tu negocio e implementamos automatizaciones inteligentes para aumentar la eficiencia y reducir el trabajo manual.",
    "services.optimization.price": "Desde $50 USD",
    "services.optimization.feature1":
      "Análisis y optimización de flujos de trabajo",
    "services.optimization.feature2": "Sistemas de automatización de tareas",
    "services.optimization.feature3": "Integración y sincronización de datos",
    "services.optimization.feature4":
      "Desarrollo de herramientas empresariales personalizadas",
    "services.optimization.feature5": "Integraciones de API",
    "services.optimization.feature6": "Monitoreo de rendimiento y reportes",

    // Packages
    "packages.title": "Nuestros Paquetes de Servicios",
    "packages.description":
      "Explora nuestros paquetes completos diseñados para adaptarse a las necesidades de tu negocio. Desde soluciones básicas hasta servicios de nivel empresarial.",
    "packages.cta.title": "¿Listo para Comenzar?",
    "packages.cta.description":
      "Contáctanos hoy y hablemos sobre qué paquete es el adecuado para tu proyecto.",
    "packages.cta.button": "Solicitar Cotización",

    // Paquetes de Desarrollo Web
    "packages.webdev.title": "Desarrollo WordPress + WooCommerce",
    "packages.webdev.description": "Soluciones completas de e-commerce",

    "packages.webdev.wordpress.basic.name": "Paquete Básico",
    "packages.webdev.wordpress.basic.price": "$640 USD",
    "packages.webdev.wordpress.basic.time": "Entrega: 7-10 días hábiles",
    "packages.webdev.wordpress.basic.feature1":
      "Instalación de WordPress + WooCommerce",
    "packages.webdev.wordpress.basic.feature2":
      "Template premium incluido ($60)",
    "packages.webdev.wordpress.basic.feature3": "Hasta 20 productos configurados",
    "packages.webdev.wordpress.basic.feature4":
      "Configuración de pasarela de pago (1 opción)",
    "packages.webdev.wordpress.basic.feature5": "Configuración básica de SEO",
    "packages.webdev.wordpress.basic.feature6": "Diseño responsive",
    "packages.webdev.wordpress.basic.feature7": "1 revisión de cambios",

    "packages.webdev.wordpress.professional.name": "Paquete Profesional",
    "packages.webdev.wordpress.professional.price": "$1,200 USD",
    "packages.webdev.wordpress.professional.time":
      "Entrega: 14-18 días hábiles",
    "packages.webdev.wordpress.professional.feature1":
      "Todo lo del Básico + Template premium ($100)",
    "packages.webdev.wordpress.professional.feature2":
      "Hasta 50 productos configurados",
    "packages.webdev.wordpress.professional.feature3":
      "Múltiples pasarelas de pago (hasta 3)",
    "packages.webdev.wordpress.professional.feature4":
      "Recuperación de carrito abandonado",
    "packages.webdev.wordpress.professional.feature5":
      "Blog configurado (5 artículos)",
    "packages.webdev.wordpress.professional.feature6": "2 revisiones de cambios",

    "packages.webdev.wordpress.premium.name": "Paquete Premium",
    "packages.webdev.wordpress.premium.price": "$2,240 USD",
    "packages.webdev.wordpress.premium.time": "Entrega: 25-30 días hábiles",
    "packages.webdev.wordpress.premium.feature1":
      "Todo lo del Profesional + Template custom ($200)",
    "packages.webdev.wordpress.premium.feature2":
      "Hasta 150 productos configurados",
    "packages.webdev.wordpress.premium.feature3":
      "Sistema de membresías/suscripciones",
    "packages.webdev.wordpress.premium.feature4":
      "Multi-idioma (hasta 2 idiomas)",
    "packages.webdev.wordpress.premium.feature5":
      "Funcionalidades custom (20 horas desarrollo)",
    "packages.webdev.wordpress.premium.feature6":
      "1 mes de soporte post-lanzamiento",

    // Paquetes Shopify
    "packages.shopify.title": "Desarrollo Shopify",
    "packages.shopify.description": "Tiendas Shopify rápidas y confiables",

    "packages.shopify.basic.name": "Paquete Básico",
    "packages.shopify.basic.price": "$560 USD",
    "packages.shopify.basic.time": "Entrega: 5-7 días hábiles",
    "packages.shopify.basic.feature1": "Configuración completa de tienda Shopify",
    "packages.shopify.basic.feature2": "Theme de Shopify Theme Store",
    "packages.shopify.basic.feature3": "Hasta 20 productos configurados",
    "packages.shopify.basic.feature4": "Configuración de pasarela de pago",
    "packages.shopify.basic.feature5": "Integración con Google Analytics",

    "packages.shopify.professional.name": "Paquete Profesional",
    "packages.shopify.professional.price": "$960 USD",
    "packages.shopify.professional.time": "Entrega: 10-14 días hábiles",
    "packages.shopify.professional.feature1":
      "Todo lo del Básico + Theme premium ($180-$350)",
    "packages.shopify.professional.feature2": "Hasta 50 productos configurados",
    "packages.shopify.professional.feature3":
      "Integración de apps complementarias (hasta 5)",
    "packages.shopify.professional.feature4":
      "Personalización avanzada del tema",
    "packages.shopify.professional.feature5": "SEO optimizado + Blog",

    "packages.shopify.premium.name": "Paquete Premium",
    "packages.shopify.premium.price": "$1,760 USD",
    "packages.shopify.premium.time": "Entrega: 20-25 días hábiles",
    "packages.shopify.premium.feature1":
      "Todo lo del Profesional + 150 productos",
    "packages.shopify.premium.feature2":
      "Desarrollo custom con Liquid (15 horas)",
    "packages.shopify.premium.feature3":
      "Integración con sistemas externos (API)",
    "packages.shopify.premium.feature4": "Multi-idioma y multi-moneda",
    "packages.shopify.premium.feature5": "1 mes de soporte post-lanzamiento",

    // Paquetes de Mantenimiento
    "packages.maintenance.title": "Planes de Mantenimiento y Soporte",
    "packages.maintenance.description": "Mantén tu sitio funcionando sin problemas",

    "packages.maintenance.basic.name": "Plan Básico",
    "packages.maintenance.basic.price": "$120 USD/mes",
    "packages.maintenance.basic.feature1": "Hasta 3 horas de trabajo al mes",
    "packages.maintenance.basic.feature2": "Actualizaciones de plugins/temas",
    "packages.maintenance.basic.feature3": "Backups automáticos semanales",
    "packages.maintenance.basic.feature4": "Monitoreo de uptime",
    "packages.maintenance.basic.feature5":
      "Soporte por email (respuesta en 48hrs)",

    "packages.maintenance.professional.name": "Plan Profesional",
    "packages.maintenance.professional.price": "$240 USD/mes",
    "packages.maintenance.professional.feature1":
      "Hasta 8 horas de trabajo al mes",
    "packages.maintenance.professional.feature2": "Backups automáticos diarios",
    "packages.maintenance.professional.feature3":
      "Optimización mensual de velocidad",
    "packages.maintenance.professional.feature4": "Hasta 10 productos/mes",
    "packages.maintenance.professional.feature5":
      "Soporte por email y WhatsApp (respuesta en 24hrs)",

    "packages.maintenance.premium.name": "Plan Premium",
    "packages.maintenance.premium.price": "$480 USD/mes",
    "packages.maintenance.premium.feature1": "Hasta 16 horas de trabajo al mes",
    "packages.maintenance.premium.feature2": "Monitoreo 24/7 con alertas",
    "packages.maintenance.premium.feature3":
      "Actualizaciones ilimitadas de productos",
    "packages.maintenance.premium.feature4":
      "Soporte prioritario (respuesta en 4hrs)",
    "packages.maintenance.premium.feature5":
      "A/B testing y optimización de conversión",

    "packages.maintenance.enterprise.name": "Plan Enterprise",
    "packages.maintenance.enterprise.price": "$960 USD/mes",
    "packages.maintenance.enterprise.feature1":
      "Hasta 40 horas de trabajo al mes",
    "packages.maintenance.enterprise.feature2": "Gestor de cuenta dedicado",
    "packages.maintenance.enterprise.feature3":
      "Disponibilidad 24/7 para emergencias",
    "packages.maintenance.enterprise.feature4":
      "Seguridad avanzada con firewall dedicado",

    // Paquetes SEO
    "packages.seo.title": "Optimización SEO",
    "packages.seo.description": "Mejora tu posicionamiento en buscadores",

    "packages.seo.basic.name": "SEO Básico",
    "packages.seo.basic.price": "$320 USD",
    "packages.seo.basic.time": "Entrega: 3-5 días hábiles",
    "packages.seo.basic.feature1":
      "Instalación y configuración de plugin SEO",
    "packages.seo.basic.feature2":
      "Optimización de títulos y meta descripciones (10 páginas)",
    "packages.seo.basic.feature3": "Configuración de sitemap XML",
    "packages.seo.basic.feature4": "Integración con Google Search Console",
    "packages.seo.basic.feature5": "Optimización básica de imágenes (alt tags)",

    "packages.seo.professional.name": "SEO Profesional",
    "packages.seo.professional.price": "$640 USD",
    "packages.seo.professional.time": "Entrega: 7-10 días hábiles",
    "packages.seo.professional.feature1":
      "Todo lo del Básico + Research de keywords (20 palabras clave)",
    "packages.seo.professional.feature2":
      "Optimización on-page completa (30 páginas)",
    "packages.seo.professional.feature3": "Schema markup básico",
    "packages.seo.professional.feature4": "Estrategia de internal linking",
    "packages.seo.professional.feature5": "3 meses de revisiones mensuales",

    "packages.seo.premium.name": "SEO Premium",
    "packages.seo.premium.price": "$1,200 USD",
    "packages.seo.premium.time": "Entrega: 14-18 días hábiles",
    "packages.seo.premium.feature1":
      "Todo lo del Profesional + Research profundo (50+ keywords)",
    "packages.seo.premium.feature2": "Schema markup avanzado",
    "packages.seo.premium.feature3": "Optimización de Core Web Vitals",
    "packages.seo.premium.feature4": "Estrategia de link building",
    "packages.seo.premium.feature5": "6 meses de reportes mensuales",

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
    "contact.email.text": "apolocodeagency@gmail.com",
    "contact.chat.title": "Hablemos",
    "contact.chat.text": "Disponible para consultas y discusiones de proyectos",
    "contact.response.title": "Respuesta Rápida",
    "contact.response.text": "Normalmente respondemos dentro de 24 horas",
    "contact.info.title": "Información de Contacto",
    "contact.info.response": "Respuesta en 24 horas",

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

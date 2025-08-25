'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Logo from './Logo';

export default function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-secondary-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <Logo width={40} height={40} variant="white" />
            </div>
            <p className="text-secondary-400 mb-6 leading-relaxed max-w-md">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-secondary-400 hover:text-primary-400 transition-colors">
                <span className="text-xl">📧</span>
              </a>
              <a href="#" className="text-secondary-400 hover:text-primary-400 transition-colors">
                <span className="text-xl">💼</span>
              </a>
              <a href="#" className="text-secondary-400 hover:text-primary-400 transition-colors">
                <span className="text-xl">🐙</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.services.title')}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-secondary-400 hover:text-white transition-colors">
                  {t('footer.services.web')}
                </a>
              </li>
              <li>
                <a href="#services" className="text-secondary-400 hover:text-white transition-colors">
                  {t('footer.services.ecommerce')}
                </a>
              </li>
              <li>
                <a href="#services" className="text-secondary-400 hover:text-white transition-colors">
                  {t('footer.services.webapp')}
                </a>
              </li>
              <li>
                <a href="#services" className="text-secondary-400 hover:text-white transition-colors">
                  {t('footer.services.maintenance')}
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.links.title')}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-secondary-400 hover:text-white transition-colors">
                  {t('nav.home')}
                </a>
              </li>
              <li>
                <a href="#services" className="text-secondary-400 hover:text-white transition-colors">
                  {t('nav.services')}
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-secondary-400 hover:text-white transition-colors">
                  {t('nav.portfolio')}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-secondary-400 hover:text-white transition-colors">
                  {t('nav.contact')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-800 mt-8 pt-8 text-center">
          <p className="text-secondary-400">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}

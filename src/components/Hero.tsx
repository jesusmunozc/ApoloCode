'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="pt-20 pb-12 lg:pt-24 lg:pb-16 bg-gradient-to-br from-secondary-50 via-white to-secondary-50 overflow-hidden">
      <div className="container mx-auto container-padding">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left animate-fade-in">
            <h1 className="heading-1 mb-6">
              {t('hero.title')}
              <span className="text-primary-600 block lg:inline"> {t('hero.title.highlight')}</span>
              <br className="hidden lg:block" />
              <span className="block">{t('hero.title.end')}</span>
            </h1>
            <p className="text-large mb-10 max-w-2xl mx-auto lg:mx-0">
              {t('hero.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#contact" className="bg-secondary-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-600 transition-colors duration-300 text-center">
                {t('hero.cta.primary')}
              </a>
              <a href="#portfolio" className="border-2 border-secondary-900 text-secondary-900 px-8 py-4 rounded-lg font-semibold hover:bg-secondary-900 hover:text-white transition-colors duration-300 text-center">
                {t('hero.cta.secondary')}
              </a>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:w-1/2 flex justify-center animate-slide-up">
            <div className="relative group">
              {/* Professional Development Image */}
              <div className="relative w-[500px] h-[400px] rounded-3xl overflow-hidden shadow-large transform group-hover:scale-[1.02] transition-all duration-500">
                <Image
                  src="/images/hero-development.png"
                  alt="Professional Web Development with React and Next.js"
                  width={500}
                  height={400}
                  className="object-cover w-full h-full"
                  priority
                  quality={100}
                />
                
                {/* Simplified overlay */}
                <div className="absolute inset-0 bg-secondary-900/10"></div>
                
                {/* Simplified floating ApoloCode logo */}
                <div className="absolute bottom-6 left-6 bg-white/95 p-4 rounded-lg shadow-md border border-secondary-200 transform group-hover:translate-y-[-2px] transition-transform duration-300">
                  <div className="flex items-center space-x-3">
                    <div className="bg-secondary-900 p-1.5 rounded-lg">
                      <Image
                        src="/images/apolocode-logo.png"
                        alt="ApoloCode Logo"
                        width={28}
                        height={28}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <div className="text-secondary-900 font-bold text-sm">ApoloCode</div>
                      <div className="text-primary-600 text-xs font-medium">Professional Development</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Simplified floating elements */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary-100/80 rounded-2xl rotate-12 animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-secondary-100/80 rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

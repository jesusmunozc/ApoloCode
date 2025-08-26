"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="relative">
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value as "en" | "es")}
        className="bg-white/80 backdrop-blur-sm border border-gray-300/50 rounded-lg px-2 py-1.5 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 cursor-pointer shadow-sm min-w-[60px] sm:min-w-[70px]"
      >
        <option value="en">🇺🇸 EN</option>
        <option value="es">🇪🇸 ES</option>
      </select>
    </div>
  );
}

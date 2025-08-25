import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from '@/contexts/LanguageContext';

export const metadata: Metadata = {
  title: "ApoloCode - Professional Web Development Services",
  description: "Professional web development services for businesses and companies. Custom websites, web applications, and digital solutions.",
  icons: {
    icon: '/images/apolocode-logo.png',
    shortcut: '/images/apolocode-logo.png',
    apple: '/images/apolocode-logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}

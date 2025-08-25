/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary colors based on ApoloCode logo
        primary: {
          50: '#fff7ed',   // Very light orange
          100: '#ffedd5',  // Light orange
          200: '#fed7aa',  // Soft orange
          300: '#fdba74',  // Medium orange
          400: '#fb923c',  // Orange
          500: '#f97316',  // Main orange (logo color)
          600: '#ea580c',  // Dark orange
          700: '#c2410c',  // Darker orange
          800: '#9a3412',  // Very dark orange
          900: '#7c2d12',  // Deepest orange
        },
        // Secondary colors (grays for professional look)
        secondary: {
          50: '#f9fafb',   // Very light gray
          100: '#f3f4f6',  // Light gray
          200: '#e5e7eb',  // Soft gray
          300: '#d1d5db',  // Medium gray
          400: '#9ca3af',  // Gray
          500: '#6b7280',  // Main gray
          600: '#4b5563',  // Dark gray
          700: '#374151',  // Darker gray
          800: '#1f2937',  // Very dark gray
          900: '#111827',  // Almost black
        },
        // Accent colors for highlights
        accent: {
          orange: '#f97316',  // Logo orange
          black: '#0f172a',   // Professional black
          white: '#ffffff',   // Pure white
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

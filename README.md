# ApoloCode - Professional Web Development Services

A modern, responsive website built with Next.js, React, and Tailwind CSS for ApoloCode, a professional web development services company.

## Features

- **Modern Design**: Clean, professional, and attractive design that stands out
- **Responsive**: Fully responsive design that works on all devices
- **Multi-language Support**: Complete internationalization with English and Spanish
- **Fast Performance**: Built with Next.js for optimal performance and SEO
- **Professional Sections**:
  - Hero section with call-to-action
  - Services overview with detailed offerings
  - Portfolio showcase with project examples
  - Contact form for client inquiries
  - Professional footer with links

## Tech Stack

- **Framework**: Next.js 14
- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Development**: ESLint, PostCSS

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn package manager

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
├── src/
│   ├── app/
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx       # Root layout with language provider
│   │   └── page.tsx         # Home page
│   ├── components/
│   │   ├── Header.tsx       # Navigation header with language selector
│   │   ├── Hero.tsx         # Hero section
│   │   ├── Services.tsx     # Services section
│   │   ├── Portfolio.tsx    # Portfolio section
│   │   ├── Contact.tsx      # Contact form
│   │   ├── Footer.tsx       # Footer component
│   │   ├── Logo.tsx         # Reusable logo component
│   │   └── LanguageSelector.tsx  # Language switcher component
│   └── contexts/
│       └── LanguageContext.tsx   # Internationalization context
├── public/
│   └── images/
│       └── apolocode-logo.png    # Company logo
├── tailwind.config.js       # Tailwind configuration
├── next.config.mjs          # Next.js configuration
└── package.json            # Dependencies and scripts
```

## Services Offered

1. **Custom Web Development**: Tailor-made websites with modern frameworks
2. **E-commerce Solutions**: Complete online stores with payment integration
3. **Web Application Development**: Complex applications with advanced functionality
4. **Website Maintenance**: Ongoing support and security updates

## Customization

### Languages
The website supports English and Spanish languages. The language can be changed using the selector in the header. All translations are stored in `src/contexts/LanguageContext.tsx`. To add new languages or modify translations:

1. Add a new language key to the `translations` object
2. Translate all the required keys
3. Update the `Language` type to include the new language
4. Add the new option to the language selector

### Colors
The website uses a custom color palette defined in `tailwind.config.js`. The primary color scheme can be easily modified by updating the `primary` color values.

### Content
All content can be updated by modifying the respective component files in the `src/components/` directory.

### Logo
The ApoloCode logo is stored in `public/images/apolocode-logo.png` and is used throughout the site via the `Logo` component. The logo appears in:
- Header navigation
- Hero section
- Footer
- Browser favicon

To update the logo, simply replace the PNG file in the public/images directory.

### Styling
The project uses Tailwind CSS for styling. Custom styles can be added to `src/app/globals.css`.

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new) from the creators of Next.js.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is created for ApoloCode and is proprietary software.

## Contact

For any questions or inquiries, please contact ApoloCode through the website's contact form.

# A1 Service Expert - Static Website

Professional static website for A1 Service Expert - Independent Car Service & Repair Garage in Kettering, Northamptonshire.

## 🚀 Tech Stack

- **Framework:** Astro 4.x (Static Site Generator)
- **Styling:** Tailwind CSS 3.4
- **Deployment:** Netlify
- **Forms:** Netlify Forms
- **Analytics:** Google Analytics 4

## 📋 Features

- ✅ Fully static HTML (no JavaScript dependencies)
- ✅ SEO optimized with meta tags and structured data
- ✅ Mobile-responsive design
- ✅ Contact form with email notifications
- ✅ Google Analytics integration
- ✅ Sitemap generation
- ✅ Fast loading (Lighthouse 95+ score)

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📞 Contact Information

- **Phone:** 07394 433889
- **WhatsApp:** https://wa.me/447394433889
- **Email:** support@a1serviceexpert.com
- **Address:** 11 Cunliffe Dr, Kettering NN16 8LD

## 📄 Pages

- Home (`/`)
- Services (`/services`)
- Car Servicing (`/car-servicing`)
- Air Conditioning (`/air-conditioning`)
- Diagnostics (`/diagnostics`)
- Brake Repair (`/brake-repair`)
- Clutch Replacement (`/clutch-replacement`)
- Cambelt Replacement (`/cambelt-replacement`)
- About Us (`/about`)
- Contact (`/contact`)
- Terms (`/terms`)
- Privacy (`/privacy`)
- Cookie Policy (`/cookie-policy`)

## 🔧 Google Analytics Setup

1. Create a Google Analytics 4 property at https://analytics.google.com
2. Get your Measurement ID (format: G-XXXXXXXXXX)
3. Create `.env` file in project root:
   ```
   PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```
4. Add the environment variable in Netlify dashboard

## 📦 Deployment

The site is configured for automatic deployment on Netlify:

1. Push to GitHub repository
2. Netlify automatically builds and deploys
3. Forms are automatically configured
4. Email notifications sent to support@a1serviceexpert.com

## 📝 License

© 2025 A1 Service Expert. All rights reserved.

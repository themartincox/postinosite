# Postino - AI-Enhanced Marketing Agency Website

A modern, responsive website for Postino Ltd, an AI-enhanced marketing agency specializing in growth strategies and intelligent automation for SMEs.

## 🚀 Live Website

**Production URL:** [https://same-hk5rhfvx2xr-latest.netlify.app](https://same-hk5rhfvx2xr-latest.netlify.app)

## 🛠️ Built With

- **Framework:** Next.js 15.3.2 with TypeScript
- **Styling:** Tailwind CSS with custom design system
- **UI Components:** shadcn/ui + Radix UI
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Runtime:** Bun (recommended) or Node.js
- **Deployment:** Netlify

## 🎨 Features

### ✨ Key Features
- **Mobile-responsive design** with professional navigation
- **AI-enhanced particle background** animations
- **Comprehensive contact forms** for lead generation
- **Complete blog system** ready for content management
- **Service showcase** with interactive cards
- **Client testimonials** and social proof sections

### 📄 Pages Included
1. **Homepage** - Hero section with dual CTAs
2. **Growth Marketing Services** - Inbound, SEO, branding, strategy
3. **AI & Automation Solutions** - Process automation, data analysis, custom AI
4. **About Us** - Company story and team approach
5. **Contact** - Professional contact forms
6. **Growth Consultation** - £50 strategy session booking
7. **SEO Services** - AI-enhanced SEO methodology
8. **Content Strategy** - Strategic content framework
9. **Blog** - Article listing with search and categories
10. **Blog Posts** - Dynamic blog post template
11. **AI Automation Demo** - Demo booking with industry examples

### 🎯 Design System
- **Colors:** Midnight blue, forest green, coral red, soft grays
- **Typography:** Inter (headings) + Crimson Text (body)
- **British English** spelling throughout
- **Consistent branding** with "Postino." logo

## 🚀 Getting Started

### Prerequisites
- Bun (recommended) or Node.js 18+
- Git

### Installation

1. **Clone the repository**
```bash
git clone <your-repository-url>
cd postino-website
```

2. **Install dependencies**
```bash
bun install
# or
npm install
```

3. **Run the development server**
```bash
bun run dev
# or
npm run dev
```

4. **Open in browser**
Navigate to [http://localhost:3000](http://localhost:3000)

### Build Commands

```bash
# Development server
bun run dev

# Production build
bun run build

# Start production server
bun run start

# Linting and type checking
bun run lint
```

## 📁 Project Structure

```
postino-website/
├── src/
│   ├── app/                    # Next.js app router pages
│   │   ├── page.tsx           # Homepage
│   │   ├── about/             # About page
│   │   ├── ai-automation/     # AI services
│   │   ├── blog/              # Blog system
│   │   ├── contact/           # Contact forms
│   │   └── ...               # Other service pages
│   ├── components/            # Reusable components
│   │   ├── ui/               # shadcn/ui components
│   │   ├── Navigation.tsx    # Site navigation
│   │   ├── ContactForm.tsx   # Contact forms
│   │   └── ...              # Other components
│   └── lib/                  # Utility functions
├── public/                   # Static assets
├── styles/                   # Global styles
└── ...
```

## 🎨 Design System

### Custom Colors (Tailwind)
```css
--midnight-blue: 213 40% 20%
--forest-green: 142 76% 36%
--coral-red: 14 86% 60%
--soft-gray: 0 0% 97%
--charcoal: 214 32% 15%
```

### Typography
- **Headings:** `font-heading` (Inter)
- **Body:** `font-body` (Crimson Text)
- **Responsive scales** for all screen sizes

## 🚀 Deployment Options

### 1. Netlify (Current)
The site is configured for Netlify with `netlify.toml`:

```toml
[build]
  command = "bun run build"
  publish = ".next"
```

### 2. Vercel
```bash
npm i -g vercel
vercel
```

### 3. Static Export
```bash
# Add to next.config.js
output: 'export'

# Build static files
bun run build
```

## 📝 Content Management

### Blog Posts
- Located in `/src/app/blog/[slug]/page.tsx`
- Sample content structure provided
- Ready for CMS integration (Sanity, Contentful, etc.)

### Contact Forms
- Three form types: General, Growth Consultation, AI Demo
- Form validation and success states included
- Ready for backend integration

## 🔧 Configuration

### Environment Variables
Create `.env.local` for local development:
```env
# Add your environment variables here
```

### Next.js Configuration
- Image optimization configured for Unsplash
- TypeScript strict mode enabled
- Custom Tailwind configuration

## 🏢 Company Information

**Postino Ltd.**
- Company Number: 15378485
- Registered Address: 1 Fisher Lane, Bingham, Nottingham, NG13 8BQ
- Copyright: © 2025 Postino Ltd.

## 📄 License

This project is proprietary and confidential. All rights reserved.

## 🤝 Contributing

This is a private project for Postino Ltd. For internal development:

1. Create feature branches from `main`
2. Follow the existing code style and conventions
3. Test thoroughly before merging
4. Update documentation as needed

## 📞 Support

For technical support or questions about the website:
- Email: hello@postino.cc
- Website: [https://same-hk5rhfvx2xr-latest.netlify.app](https://same-hk5rhfvx2xr-latest.netlify.app)

---

Built with ❤️ for SME growth through intelligent marketing and AI automation.

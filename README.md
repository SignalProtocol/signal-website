# Signal402 SPA

A modern, high-performance single-page application for Signal402 - the first pay-per-signal marketplace on Solana.

## 🚀 Overview

Signal402 is a revolutionary platform that provides tokenized alpha for perpetual traders. Access verified trading signals with x402 micropayments and stake $SIGNAL tokens for exclusive alpha.

**Live App**: [https://app.signal402.xyz](https://app.signal402.xyz)  
**Twitter/X**: [@signal402_xyz](https://x.com/signal402_xyz)

## ✨ Features

- **Modern Tech Stack**: Built with Vite, React 18, TypeScript, and Tailwind CSS
- **Responsive Design**: Mobile-first approach with beautiful animations
- **Whitelist System**: Email collection with Supabase integration
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Type-Safe**: Full TypeScript support
- **Component Library**: shadcn/ui components with Radix UI primitives
- **Dark Theme**: Cyan and purple gradient design system

## 📁 Project Structure

```
signal-spa/
├── src/
│   ├── components/
│   │   ├── icons/          # Custom icon components (X logo)
│   │   ├── sections/       # Page sections (Hero, CTA, etc.)
│   │   ├── ui/             # shadcn/ui components
│   │   ├── Footer.tsx
│   │   └── Navbar.tsx
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utilities and configurations
│   │   ├── supabase.ts     # Supabase client
│   │   └── utils.ts
│   ├── pages/              # Route pages
│   │   ├── Index.tsx       # Home page
│   │   ├── Whitelist.tsx   # Whitelist form
│   │   └── NotFound.tsx
│   ├── App.tsx             # Root component with routing
│   ├── main.tsx            # App entry point
│   └── index.css           # Global styles & design tokens
├── public/                 # Static assets
├── index.html              # HTML template
├── .env.example            # Environment variables template
├── WHITELIST_SETUP.md      # Supabase setup guide
└── package.json
```

## 🛠️ Tech Stack

### Core

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing

### Styling

- **Tailwind CSS** - Utility-first CSS
- **shadcn/ui** - Component library
- **Radix UI** - Headless UI primitives
- **Lucide React** - Icon library

### Backend & Data

- **Supabase** - Backend as a Service (whitelist storage)
- **TanStack Query** - Data fetching and caching

### Developer Experience

- **ESLint** - Code linting
- **TypeScript ESLint** - TypeScript-specific linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18+ (recommended: v20+)
- **pnpm** (recommended), npm, or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd signal-spa
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env
   ```

   Edit `.env` and add your Supabase credentials:

   ```env
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Start development server**

   ```bash
   pnpm dev
   # or
   npm run dev
   ```

   The app will be available at `http://localhost:8080`

### Supabase Setup (Optional)

The whitelist feature requires Supabase. See [WHITELIST_SETUP.md](./WHITELIST_SETUP.md) for detailed instructions on:

- Creating a Supabase project
- Setting up the database table
- Configuring Row Level Security
- Getting your API credentials

**Note**: The app will run without Supabase, but the whitelist form will show a configuration error.

## 📜 Available Scripts

| Command          | Description                           |
| ---------------- | ------------------------------------- |
| `pnpm dev`       | Start development server on port 8080 |
| `pnpm build`     | Build for production                  |
| `pnpm build:dev` | Build in development mode             |
| `pnpm preview`   | Preview production build locally      |
| `pnpm lint`      | Run ESLint                            |

## 🎨 Design System

### Color Palette

```css
--primary: hsl(180 100% 50%)      /* Cyan */
--accent: hsl(260 100% 65%)       /* Purple */
--background: hsl(220 20% 4%)     /* Dark slate */
--foreground: hsl(210 40% 98%)    /* Light text */
```

### Custom Utilities

- `text-gradient-primary` - Cyan gradient text
- `glass` - Glassmorphism effect
- `glass-card` - Card with glass effect
- `glow-primary` - Cyan glow shadow
- `grid-pattern` - Subtle grid background

### Animations

- `animate-slide-up` - Slide up fade-in
- `animate-float` - Floating animation
- `animate-pulse-slow` - Slow pulse
- `animate-glow` - Glowing effect

## 🗺️ Routes

| Route        | Component   | Description                 |
| ------------ | ----------- | --------------------------- |
| `/`          | `Index`     | Home page with all sections |
| `/whitelist` | `Whitelist` | Email whitelist signup form |
| `*`          | `NotFound`  | 404 page                    |

## 🧩 Key Components

### Pages

- **Index**: Main landing page with Hero, Problem, Solution, How It Works, Technology, Traction, Tokenomics, Market, CTA sections
- **Whitelist**: Beautiful form for email collection with Supabase integration
- **NotFound**: Custom 404 page

### Sections

- **Hero**: Main banner with CTA buttons
- **Problem**: Problem statement
- **Solution**: Solution overview
- **HowItWorks**: Step-by-step guide
- **Technology**: Tech stack showcase
- **Traction**: Metrics and achievements
- **Tokenomics**: Token distribution
- **Market**: Market analysis
- **CTA**: Call-to-action with social links

### Layout

- **Navbar**: Responsive navigation with mobile menu
- **Footer**: Links and copyright

## 🔧 Configuration Files

- `vite.config.ts` - Vite configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `eslint.config.js` - ESLint rules
- `postcss.config.js` - PostCSS plugins
- `components.json` - shadcn/ui configuration

## 📦 Build & Deployment

### Production Build

```bash
pnpm build
```

This creates an optimized production build in the `dist/` directory.

### Preview Build

```bash
pnpm preview
```

Preview the production build locally before deployment.

### Deployment

The `dist/` folder can be deployed to any static hosting service:

- Vercel
- Netlify
- Cloudflare Pages
- AWS S3 + CloudFront
- GitHub Pages

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style

- Use TypeScript for all new files
- Follow the existing component structure
- Use Tailwind CSS for styling (avoid inline styles)
- Ensure components are responsive
- Add proper TypeScript types
- Run `pnpm lint` before committing

## 📄 License

This project is proprietary. All rights reserved.

## 📞 Support

- **Twitter/X**: [@signal402_xyz](https://x.com/signal402_xyz)
- **Website**: [signal402.xyz](https://signal402.xyz)
- **App**: [app.signal402.xyz](https://app.signal402.xyz)

## 🙏 Acknowledgments

- Built with [Vite](https://vitejs.dev/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- Backend by [Supabase](https://supabase.com/)

---

**Made with ❤️ by the Signal402 team**

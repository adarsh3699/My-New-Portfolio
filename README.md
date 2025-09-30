# 🚀 My Portfolio Website

A modern, GitHub-inspired portfolio website built with Next.js 15, showcasing my projects, experience, and skills with a clean, professional design.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen) ![Next.js](https://img.shields.io/badge/Next.js-15.3.5-black) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC)

## ✨ Features

-   **🎨 GitHub-Inspired Design** - Clean, professional interface inspired by GitHub's UI
-   **🌙 Dark/Light Mode** - Toggle between themes with system preference detection
-   **📱 Fully Responsive** - Optimized for all devices and screen sizes
-   **⚡ Performance Optimized** - Built with Next.js 15 and Turbopack for lightning-fast development
-   **🔍 Interactive Search** - Search through projects and content
-   **📊 Project Showcase** - Dynamic filtering and sorting of projects
-   **🎯 Contact Integration** - Direct contact forms and social links
-   **♿ Accessible** - WCAG compliant with proper ARIA labels and keyboard navigation

## 🛠️ Tech Stack

-   **Framework:** [Next.js 15](https://nextjs.org/) with App Router
-   **Language:** [TypeScript](https://www.typescriptlang.org/)
-   **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
-   **Icons:** [Heroicons](https://heroicons.com/)
-   **Animations:** [Motion](https://motion.dev/)
-   **Package Manager:** [pnpm](https://pnpm.io/)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with Header/Footer
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── projects/          # Projects showcase
│   ├── experience/        # Work experience
│   ├── contact/           # Contact information
│   └── api/               # API routes
│       ├── github-contributions/
│       └── github-profile/
├── components/            # Reusable components
│   ├── layout/           # Layout components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── theme-provider.tsx
│   │   └── index.ts
│   ├── home/             # Home page components
│   │   ├── ProfileSection.tsx
│   │   ├── ContributionsGraph.tsx
│   │   └── index.ts
│   ├── projects/         # Project page components
│   │   ├── ProjectsSection.tsx
│   │   └── index.ts
│   ├── ui/               # Generic UI components
│   │   ├── Tooltip.tsx
│   │   ├── input.tsx
│   │   ├── typewriter-effect.tsx
│   │   └── index.ts
│   └── icons/            # Custom icons
│       └── index.tsx
├── data/                 # Static data
│   ├── index.ts
│   └── projects.ts
└── lib/                  # Utilities
    └── utils.ts
```

## 🚀 Getting Started

### Prerequisites

-   Node.js 18+
-   pnpm (recommended) or npm

### Installation

1. **Clone the repository**

    ```bash
    git clone https://github.com/adarsh3699/My-New-Portfolio.git
    cd My-New-Portfolio
    ```

2. **Install dependencies**

    ```bash
    pnpm install
    # or
    npm install
    ```

3. **Start development server**

    ```bash
    pnpm dev
    # or
    npm run dev
    ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

```bash
pnpm dev        # Start development server with Turbopack
pnpm build      # Build for production
pnpm start      # Start production server
pnpm lint       # Run ESLint
```

## 📄 Pages

-   **🏠 Home** (`/`) - Personal introduction and overview
-   **👤 About** (`/about`) - Detailed background and skills
-   **💼 Projects** (`/projects`) - Showcase of all projects with filtering
-   **📈 Experience** (`/experience`) - Professional work history
-   **📞 Contact** (`/contact`) - Contact information and form

## 🎨 Design System

The project uses a consistent design system inspired by GitHub's interface:

-   **Colors:** GitHub's color palette with dark/light mode support
-   **Typography:** Geist font family for optimal readability
-   **Components:** Modular, reusable components with consistent spacing
-   **Responsive:** Mobile-first approach with Tailwind CSS breakpoints

## 📱 Mobile Experience

-   Optimized touch interactions
-   Responsive navigation with mobile drawer
-   Adaptive layouts for all screen sizes
-   Fast loading with optimized images

## 🔧 Customization

### Adding New Projects

Edit `src/data/projects.ts` to add new projects:

```typescript
{
  id: "unique-id",
  name: "Project Name",
  description: "Project description",
  technologies: ["React", "TypeScript"],
  githubUrl: "https://github.com/...",
  liveUrl: "https://...",
  // ... other fields
}
```

### Modifying Themes

Theme configuration is in `src/components/layout/theme-provider.tsx`. The system supports:

-   Light mode
-   Dark mode
-   System preference detection
-   Persistent theme storage

### Customizing Styles

The project uses Tailwind CSS with custom GitHub-inspired utilities. Global styles are in `src/app/globals.css`.

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically on every push

### Other Platforms

The project is a standard Next.js application and can be deployed to:

-   Netlify
-   AWS Amplify
-   Railway
-   Any platform supporting Node.js

## 📊 Performance

-   **Lighthouse Score:** 95+ across all metrics
-   **Core Web Vitals:** Optimized for excellent user experience
-   **Bundle Size:** Minimized with code splitting and tree shaking
-   **Images:** Optimized with Next.js Image component

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Contact

-   **GitHub:** [@adarsh3699](https://github.com/adarsh3699)
-   **LinkedIn:** [adarsh3699](https://linkedin.com/in/adarsh3699)
-   **Email:** adarsh3699@gmail.com

---

⭐ If you found this portfolio helpful, please give it a star on GitHub!

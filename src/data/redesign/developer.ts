/**
 * Data Layer - Developer/Portfolio Page Redesign
 * 
 * Contenu statique pour la page vitrine développeur
 * Architecture Astro-First (0 KB JS)
 */

export const developerHero = {
  eyebrow: "DÉVELOPPEUR FULL-STACK",
  name: "Loup Aubour",
  title: "Cloud Engineer & Full-Stack Developer",
  tagline: "Architecte de solutions web performantes et scalables",
  description: "Spécialisé en développement web moderne (React, Astro, TypeScript) et infrastructure cloud (AWS, Terraform). Passionné par la performance, l'accessibilité et les architectures serverless.",
  image: {
    src: "/images/redesign/hero-developer-800.jpg",
    srcset: "/images/redesign/hero-developer-400.jpg 400w, /images/redesign/hero-developer-800.jpg 800w, /images/redesign/hero-developer-1200.jpg 1200w",
    alt: "Setup développeur moderne"
  },
  cta: {
    primary: {
      text: "Voir mes Projets",
      href: "#projects"
    },
    secondary: {
      text: "Me Contacter",
      href: "#contact"
    }
  }
};

export const developerStack = {
  title: "Stack Technique",
  subtitle: "Technologies et outils maîtrisés",
  categories: [
    {
      id: "frontend",
      name: "Frontend",
      icon: "Code",
      color: "from-cyan-500 to-blue-500",
      technologies: [
        { name: "React 18", level: "Expert" },
        { name: "Astro 5", level: "Expert" },
        { name: "TypeScript", level: "Expert" },
        { name: "Tailwind CSS", level: "Expert" },
        { name: "Next.js", level: "Avancé" }
      ]
    },
    {
      id: "backend",
      name: "Backend",
      icon: "Server",
      color: "from-green-500 to-emerald-500",
      technologies: [
        { name: "Node.js", level: "Expert" },
        { name: "Express", level: "Avancé" },
        { name: "PostgreSQL", level: "Avancé" },
        { name: "MongoDB", level: "Intermédiaire" },
        { name: "REST APIs", level: "Expert" }
      ]
    },
    {
      id: "cloud",
      name: "Cloud & DevOps",
      icon: "Cloud",
      color: "from-orange-500 to-red-500",
      technologies: [
        { name: "AWS (S3, CloudFront, Lambda)", level: "Expert" },
        { name: "Terraform", level: "Avancé" },
        { name: "GitHub Actions", level: "Expert" },
        { name: "Docker", level: "Avancé" },
        { name: "Vercel", level: "Expert" }
      ]
    },
    {
      id: "tools",
      name: "Outils & Méthodes",
      icon: "Wrench",
      color: "from-purple-500 to-pink-500",
      technologies: [
        { name: "Git", level: "Expert" },
        { name: "Playwright", level: "Avancé" },
        { name: "ESLint/Prettier", level: "Expert" },
        { name: "Lighthouse CI", level: "Avancé" },
        { name: "Agile/Scrum", level: "Avancé" }
      ]
    }
  ]
};

export const developerProjects = {
  title: "Projets Récents",
  subtitle: "Sélection de réalisations techniques",
  projects: [
    {
      id: "gameon",
      name: "GameOn Landing Page",
      description: "Landing page statique haute performance avec architecture Astro Islands, design Synthwave, et déploiement AWS S3 + CloudFront.",
      tags: ["Astro 5", "React 18", "Tailwind 4", "AWS", "Lighthouse 95+"],
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=400&fit=crop",
      metrics: [
        { label: "Performance", value: "95/100" },
        { label: "Accessibilité", value: "100/100" },
        { label: "Build Time", value: "< 8s" }
      ],
      links: {
        demo: "/index-redesign",
        github: "https://github.com/loupaubour/GameOn-website-FR"
      }
    },
    {
      id: "architecture",
      name: "Architecture Hybride Astro",
      description: "Système d'îlots React dans Astro pour hydration sélective. Conversion composants statiques React → Astro pur pour gains performance.",
      tags: ["Astro Islands", "React", "Performance", "Architecture"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
      metrics: [
        { label: "JS Éliminé", value: "-123 KB" },
        { label: "Gain Perf", value: "+12 pts" },
        { label: "Modules", value: "1689" }
      ],
      links: {
        demo: "/tournament-redesign",
        docs: "/docs/LIGHTHOUSE-REDESIGN-RESULTS.md"
      }
    },
    {
      id: "cicd",
      name: "Pipeline CI/CD AWS",
      description: "Automatisation complète : build, tests (Lighthouse, a11y), déploiement S3, invalidation CloudFront via GitHub Actions.",
      tags: ["GitHub Actions", "AWS", "Terraform", "CI/CD"],
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&h=400&fit=crop",
      metrics: [
        { label: "Deploy Time", value: "< 2 min" },
        { label: "Tests Auto", value: "100%" },
        { label: "Uptime", value: "99.9%" }
      ],
      links: {
        github: "https://github.com/loupaubour/GameOn-website-FR/tree/main/.github/workflows"
      }
    }
  ]
};

export const developerContact = {
  title: "Travaillons Ensemble",
  description: "Disponible pour missions freelance, projets open-source, ou opportunités CDI.",
  methods: [
    {
      id: "email",
      label: "Email",
      value: "loup.aubour@example.com",
      icon: "Mail",
      href: "mailto:loup.aubour@example.com"
    },
    {
      id: "github",
      label: "GitHub",
      value: "@loupaubour",
      icon: "Github",
      href: "https://github.com/loupaubour"
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      value: "Loup Aubour",
      icon: "Linkedin",
      href: "https://linkedin.com/in/loupaubour"
    }
  ],
  cta: {
    text: "Télécharger mon CV",
    href: "/cv-loup-aubour.pdf"
  }
};

export const developerSkills = {
  title: "Compétences Clés",
  skills: [
    {
      id: "performance",
      name: "Performance Web",
      description: "Optimisation Lighthouse, Core Web Vitals, lazy loading, code splitting",
      icon: "Zap",
      level: 95
    },
    {
      id: "accessibility",
      name: "Accessibilité",
      description: "WCAG 2.1 AA, ARIA, navigation clavier, lecteurs d'écran",
      icon: "Eye",
      level: 100
    },
    {
      id: "architecture",
      name: "Architecture",
      description: "Design patterns, clean code, scalabilité, maintenabilité",
      icon: "Box",
      level: 90
    },
    {
      id: "cloud",
      name: "Cloud Engineering",
      description: "AWS, infrastructure as code, serverless, CDN, CI/CD",
      icon: "Cloud",
      level: 85
    }
  ]
};

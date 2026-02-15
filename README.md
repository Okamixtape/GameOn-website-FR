# 🎮 PIXEL CLASH Championship 2026

> Site événementiel pour un championnat de retrogaming fictif. Projet portfolio démontrant des compétences en développement web moderne : Astro, React Islands, SEO, accessibilité et performance.

**🔗 Demo Live** : [pixel-clash.netlify.app](https://pixel-clash.netlify.app)

**⚠️ Note** : L'événement PIXEL CLASH est fictif et créé à des fins de démonstration technique.

---

## 📊 Résultats

| Métrique | Score |
|----------|-------|
| Performance Lighthouse | 97/100 |
| Accessibilité | 100/100 (WCAG 2.1 AA) |
| Best Practices | 95+/100 |
| SEO | 95+/100 |

---

## 🚀 Stack Technique

| Catégorie | Technologies |
|-----------|-------------|
| **Framework** | Astro 5.15 (SSG) + React 18 (Islands) |
| **Langage** | TypeScript 5.x (strict) |
| **Styling** | Tailwind CSS 3.4 |
| **Formulaire** | React Hook Form + Zod (simulation, pas de backend) |
| **Tests** | Playwright + axe-core + Lighthouse CI |
| **Linting** | ESLint + Prettier |
| **Hébergement** | Netlify |

---

## 📁 Structure du Projet

```
src/
├── components/
│   ├── redesign/
│   │   ├── about/          # AboutPage.tsx
│   │   ├── blog/           # BlogListingPage, BlogProgressBar, BlogTOC
│   │   ├── common/         # CTAButton, OptimizedImage
│   │   ├── home/           # Hero, Gallery, Testimonials, GamesShowcase, CommunityStats, FinalCTA
│   │   ├── inscription/    # InscriptionModalSimple (formulaire avec validation)
│   │   ├── layout/         # Header, Footer, GridBackground, InscriptionModalWrapper
│   │   └── tournament/     # TournamentPage.tsx
│   ├── GoogleAnalytics.astro
│   ├── GoogleSearchConsole.astro
│   └── SchemaOrg.astro
├── content/blog/           # 6 articles Markdown (retrogaming, SEO)
├── data/redesign/          # Données statiques (home, about, developer, inscription, testimonials)
├── hooks/                  # useInscriptionModal
├── layouts/                # LayoutRedesign.astro
├── pages/
│   ├── index.astro         # Homepage
│   ├── tournament.astro    # Page tournoi
│   ├── about.astro         # Notre Histoire
│   ├── blog/               # Blog (listing + [slug])
│   ├── faq.astro           # FAQ (Schema.org FAQPage)
│   ├── glossaire-retrogaming.astro  # Glossaire 50+ termes
│   ├── developer.astro     # Portfolio développeur Loup Aubour
│   ├── cgu.astro           # Conditions générales
│   ├── mentions-legales.astro
│   └── politique-confidentialite.astro
└── styles/                 # critical.css
```

---

## 🛠️ Installation & Développement

### Prérequis
- Node.js 20+ et npm

### Installation
```bash
git clone https://github.com/Okamixtape/GameOn-website-FR.git
cd GameOn-website-FR
npm install
```

### Commandes

| Commande | Action |
|----------|--------|
| `npm run dev` | Serveur dev sur `localhost:4321` |
| `npm run build` | Build production → `./dist/` |
| `npm run preview` | Preview du build |
| `npm run lint` | Linter ESLint |
| `npm run format` | Formatter Prettier |
| `npm run test:a11y` | Tests accessibilité (Playwright + axe) |
| `npm run seo:audit` | Audit SEO automatisé |

### Variables d'environnement (optionnelles)

Copier `.env.example` en `.env` :

```bash
PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX    # Google Analytics 4
PUBLIC_GSC_VERIFICATION=XXXX             # Google Search Console
```

---

## ✨ Pages & Fonctionnalités

| Page | Description |
|------|-------------|
| `/` | Homepage : Hero, galerie retrogaming, témoignages, stats communauté, CTA |
| `/tournament` | Tournoi : détails, podium, règlement, programme 3 jours |
| `/about` | Notre Histoire : timeline 2015-2026, valeurs, stats |
| `/blog` | 6 articles SEO retrogaming |
| `/faq` | FAQ avec Schema.org FAQPage |
| `/glossaire-retrogaming` | Glossaire 50+ termes |
| `/developer` | Portfolio Loup Aubour : services, projets, compétences, contact |
| Pages légales | CGU, mentions légales, politique de confidentialité |

### Formulaire d'inscription
- Modale accessible avec validation temps réel (blur)
- Messages d'erreur ARIA
- Écran de succès clarifiant la nature fictive du site (démo technique)
- Simulation uniquement — aucune donnée collectée

---

## 🚀 Déploiement

Hébergé sur **Netlify** avec déploiement automatique.

```
Build command: npm run build
Publish directory: dist
```

URL : [pixel-clash.netlify.app](https://pixel-clash.netlify.app)

---

## 👤 Auteur

**Loup Aubour** — Développeur web indépendant

- 🌐 [loupaubour.fr](https://loupaubour.fr)
- 💻 [@Okamixtape](https://github.com/Okamixtape)
- 💼 [LinkedIn](https://linkedin.com/in/loup-aubour)

---

## 📝 Licence

MIT — Voir [LICENSE](./LICENSE)

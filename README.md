# 🎮 PIXEL CLASH Championship 2025

[![Netlify Status](https://api.netlify.com/api/v1/badges/YOUR-BADGE-ID/deploy-status)](https://app.netlify.com/sites/pixelclash/deploys)
[![Lighthouse Score](https://img.shields.io/badge/Lighthouse-95%2B-success)](./LIGHTHOUSE_RESULTS.md)

> Landing page moderne pour un championnat de retro gaming fictif. Projet portfolio démontrant des compétences en développement web full-stack et design UX/UI.

**🔗 Demo Live** : [pixelclash.netlify.app](https://pixelclash.netlify.app) *(à venir)*

---

## 📋 À Propos

**PIXEL CLASH Championship 2025** est une landing page professionnelle créée comme projet portfolio. Elle simule un événement de gaming retro avec :

- ✅ Design moderne et identité visuelle forte (cyan/violet/rose néon)
- ✅ Formulaire d'inscription fonctionnel avec validation temps réel
- ✅ Performance optimale (Lighthouse ≥ 95/100)
- ✅ Accessibilité WCAG 2.1 AA (axe-core 100%)
- ✅ Responsive design (mobile-first)
- ✅ SEO optimisé

**⚠️ Note** : L'événement PIXEL CLASH est fictif et créé à des fins de démonstration.

---

## 🚀 Stack Technique

### Framework & Build
- **[Astro 5.14.8](https://astro.build)** - SSG (Static Site Generator)
- **[TypeScript 5.x](https://www.typescriptlang.org/)** - Strict mode
- **[Tailwind CSS 4.x](https://tailwindcss.com/)** - Styling via @tailwindcss/vite

### Testing & Quality
- **[Playwright](https://playwright.dev/)** - Tests E2E et accessibilité
- **[axe-core](https://github.com/dequelabs/axe-core)** - Tests accessibilité automatisés
- **[Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)** - Performance monitoring
- **ESLint** + **Prettier** - Code quality

### Infrastructure
- **[Netlify](https://www.netlify.com/)** - Hébergement + CI/CD
- **[Formspark](https://formspark.io/)** - Gestion formulaire (API)
- **GitHub Actions** - Automatisation

---

## 📁 Structure du Projet

```
GameOn-website-FR/
├── public/                  # Assets statiques
│   ├── Logo.png            # Logo PIXEL CLASH (header)
│   ├── favicon.png         # Favicon
│   └── retro-gaming-hero.jpg
├── src/
│   ├── components/         # Composants Astro réutilisables
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   └── RegistrationModal.astro
│   ├── layouts/            # Layouts de page
│   │   └── Layout.astro
│   ├── pages/              # Pages (routing automatique)
│   │   ├── index.astro     # Page d'accueil
│   │   ├── details.astro   # Détails du tournoi
│   │   ├── about.astro     # À propos
│   │   ├── mentions-legales.astro
│   │   ├── politique-confidentialite.astro
│   │   └── cgu.astro
│   └── styles/
│       └── global.css
├── BRAND_GUIDELINES.md     # Guide de style de marque
├── LIGHTHOUSE_RESULTS.md   # Scores de performance
└── README.md               # Ce fichier
```

---

## 🛠️ Installation & Développement

### Prérequis
- Node.js 20+ et npm

### Installation
```bash
# Cloner le repo
git clone https://github.com/Okamixtape/GameOn-website-FR.git
cd GameOn-website-FR

# Installer les dépendances
npm install
```

### Commandes

| Commande | Action |
|----------|--------|
| `npm run dev` | Démarre le serveur dev sur `localhost:4321` |
| `npm run build` | Build production dans `./dist/` |
| `npm run preview` | Preview du build en local |
| `npm run lint` | Linter le code |
| `npm run format` | Formatter le code (Prettier) |
| `npm run test:a11y` | Tests accessibilité (Playwright + axe) |

---

## 🎨 Design System

### Palette de Couleurs
- **Cyan Retro** : `#00D9FF` - Accent principal
- **Violet Retro** : `#7209B7` - Accent secondaire
- **Rose Néon** : `#FF006E` - Urgence/CTA
- **Amber Gaming** : `#F59E0B` - Récompenses

### Typographie
- **Rajdhani** (600, 700) - Titres gaming
- **DM Sans** (400, 500, 700) - Corps de texte

Voir [BRAND_GUIDELINES.md](./BRAND_GUIDELINES.md) pour le guide complet.

---

## ✨ Fonctionnalités

### Page d'Accueil
- Hero section avec gradient retro et CTA impactant
- Trust signals (487 inscrits, Places limitées)
- Responsive design avec image optimisée

### Page Détails
- Informations pratiques (dates, lieu, prix, participants)
- Règlement du tournoi détaillé
- Programme des 3 jours
- Répartition du cashprize (15 000€)

### Page À Propos
- Mission et valeurs de PIXEL CLASH
- Timeline de l'organisation (2024-2026)
- Section CTA pour inscription

### Formulaire d'Inscription
- Modal responsive avec header gradient
- Validation temps réel (blur)
- Messages d'erreur accessibles (ARIA)
- Intégration Formspark pour soumission
- Champs : Prénom, Nom, Email, Date de naissance, Ville, Nombre de tournois, CGU, Newsletter

---

## 📊 Performance & Accessibilité

### Lighthouse Scores (Objectif : ≥ 95)
- **Performance** : 95+
- **Accessibility** : 100
- **Best Practices** : 95+
- **SEO** : 95+

### Core Web Vitals
- **FCP** : < 0.8s
- **TTI** : < 1.5s
- **CLS** : < 0.1

### Accessibilité
- ✅ WCAG 2.1 AA compliant
- ✅ Navigation clavier complète
- ✅ ARIA labels appropriés
- ✅ Contraste 4.5:1 minimum
- ✅ Focus visible sur tous les éléments

Voir [LIGHTHOUSE_RESULTS.md](./LIGHTHOUSE_RESULTS.md) pour les détails.

---

## 🚀 Déploiement

### Netlify (Recommandé)
1. Connecter le repo GitHub à Netlify
2. Build settings :
   ```
   Build command: npm run build
   Publish directory: dist
   ```
3. Déploiement automatique sur push `main`

### Autres Options
- **Vercel** : Compatible Astro
- **Cloudflare Pages** : Compatible Astro
- **GitHub Pages** : Nécessite configuration

---

## 🤝 Contribution

Ce projet est un portfolio personnel, mais les suggestions sont bienvenues !

1. Fork le projet
2. Créer une branche (`git checkout -b feature/AmazingFeature`)
3. Commit (`git commit -m 'feat: Add AmazingFeature'`)
4. Push (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

---

## 📝 License

Ce projet est sous licence MIT. Voir [LICENSE](./LICENSE) pour plus d'informations.

---

## 👤 Auteur

**Loup Aubour**
- GitHub : [@Okamixtape](https://github.com/Okamixtape)
- LinkedIn : [Loup Aubour](https://linkedin.com/in/loup-aubour)
- Portfolio : [loupaubour.dev](https://loupaubour.dev) *(à venir)*

---

## 🙏 Remerciements

- [Astro](https://astro.build) - Framework SSG incroyable
- [Tailwind CSS](https://tailwindcss.com) - Styling rapide et moderne
- [Heroicons](https://heroicons.com) - Icônes SVG
- [Google Fonts](https://fonts.google.com) - Rajdhani & DM Sans
- [Unsplash](https://unsplash.com) - Images retro gaming

---

**⭐ Si ce projet vous plaît, n'hésitez pas à lui donner une étoile !**

# Contexte Projet PIXEL CLASH - Pour Cascade/Claude Code

> **Note** : Ce fichier est lu automatiquement par Cascade pour comprendre le contexte du projet.

---

## 🎯 Mission Principale

Transformer la landing page PIXEL CLASH (anciennement GameOn) en **projet portfolio professionnel** démontrant :
- ✅ Performance optimale (Lighthouse 95+)
- ✅ Accessibilité WCAG 2.1 AA
- ✅ Sécurité et conformité RGPD

---

## 📍 Localisation Documentation

- **Spécifications complètes** : `/docs/SPECIFICATIONS.md` (source : Confluence)
- **Architecture technique** : `/docs/ARCHITECTURE.md` 
- **Guide déploiement AWS** : `/docs/DEPLOYMENT.md` 
- **README principal** : `/README.md` 

**Liens externes** :
- [Confluence - Specs](https://loupaubour.atlassian.net/wiki/spaces/DL/pages/163843)
- [Jira - Epic SCRUM-5](https://loupaubour.atlassian.net/browse/SCRUM-5)

---

## ⚡ Quick Context

### Type de Projet
**Landing page statique** (PAS une application full-stack)

### Stack Technique (Validée Oct 2025)
- **Frontend** : Astro 5.14.8 + Tailwind CSS 4
- **Formulaire** : Service externe (Formspark recommandé)
- **Tests** : Playwright + axe-core (accessibilité) + Lighthouse CI (performance)
- **CI/CD** : GitHub Actions
- **Hosting** : AWS S3 + CloudFront CDN

### Objectifs Mesurables
- Lighthouse Score : ≥ 95/100 (toutes catégories)
- Accessibilité : WCAG 2.1 AA (axe score 100%)
- TTI : < 1.5s
- Responsive : 320px → 1920px+

---

## 🎨 Contraintes Importantes

### ✅ À Faire (Best Practices)

**Architecture** :
- Composants Astro réutilisables (`.astro` files)
- Mobile-first design (Tailwind breakpoints)
- Zero JavaScript par défaut (sauf interactions nécessaires)
- Images optimisées (WebP + lazy loading)
- Fonts auto-hébergées (public/fonts/)

**Performance** :
- Génération statique (SSG, pas de SSR)
- CSS critique inline dans `<head>` 
- Préchargement fonts importantes
- Cache CloudFront configuré (24h assets, 1h HTML)

**Accessibilité** :
- Labels formulaire explicites
- Navigation clavier complète
- Contraste ≥ 4.5:1
- ARIA landmarks appropriés
- Tests automatisés (axe-core)

**Sécurité** :
- HTTPS obligatoire
- Headers CSP configurés
- Protection CSRF (service formulaire)
- Conformité RGPD

### ❌ À Éviter (Anti-patterns)

**Architecture** :
- ❌ Backend Node.js custom (utiliser service externe pour formulaire)
- ❌ Framework JS lourd (React/Vue) sauf composants isolés si vraiment nécessaire
- ❌ Over-engineering (garder simple = landing page)
- ❌ Base de données (pas nécessaire)

**Performance** :
- ❌ Images non optimisées (toujours WebP + fallback)
- ❌ Fonts externes (Google Fonts → auto-héberger)
- ❌ JavaScript inutile (Astro = 0 JS par défaut)
- ❌ CSS non purgé (Tailwind purge automatique)

**Code** :
- ❌ Anciennes méthodes Tailwind (`@astrojs/tailwind` déprécié)
- ❌ CSS-in-JS (pas nécessaire avec Tailwind)
- ❌ jQuery ou librairies obsolètes

---

## 📋 Tickets Jira En Cours

**Epic** : SCRUM-5 - PIXEL CLASH Refonte Professionnelle

**Stories (ordre chronologique)** :

| Ticket | Titre | Status | Priorité |
|--------|-------|--------|----------|
| [SCRUM-6](https://loupaubour.atlassian.net/browse/SCRUM-6) | Setup Projet Astro | ✅ Done | P1 |
| [SCRUM-7](https://loupaubour.atlassian.net/browse/SCRUM-7) | Développement Frontend | 🔄 En cours | P1 |
| [SCRUM-8](https://loupaubour.atlassian.net/browse/SCRUM-8) | Intégration Formulaire | ⏳ To Do | P2 |
| [SCRUM-9](https://loupaubour.atlassian.net/browse/SCRUM-9) | Configuration CI/CD | ⏳ To Do | P2 |
| [SCRUM-10](https://loupaubour.atlassian.net/browse/SCRUM-10) | Déploiement AWS | ⏳ To Do | P3 |
| [SCRUM-11](https://loupaubour.atlassian.net/browse/SCRUM-11) | Documentation | 🔄 En cours | P3 |

**Estimation totale** : 16-23 heures

---

## 🏗️ Structure Composants Cible

```
src/
├── components/
│   ├── Header.astro           # Navigation + Logo
│   ├── HeroSection.astro      # Section hero avec CTA
│   ├── RegistrationForm.astro # Formulaire inscription
│   └── Footer.astro           # Footer avec liens
├── layouts/
│   └── Layout.astro           # Layout principal (HTML base)
├── pages/
│   └── index.astro            # Page d'accueil (assemble composants)
└── styles/
    └── global.css             # Imports Tailwind + fonts
```

**Convention nommage** :
- Composants : PascalCase (ex: `HeroSection.astro`)
- Fichiers styles : kebab-case (ex: `global.css`)
- Assets : kebab-case (ex: `bg-img.jpg`)

---

## 🔗 Références Rapides

### Documentation Officielle
- **Astro** : [docs.astro.build](https://docs.astro.build)
- **Tailwind** : [tailwindcss.com/docs](https://tailwindcss.com/docs) + [Astro Guide](https://tailwindcss.com/docs/installation/framework-guides/astro)
- **axe-core** : [github.com/dequelabs/axe-core](https://github.com/dequelabs/axe-core)
- **Playwright** : [playwright.dev](https://playwright.dev)

### Ressources Projet
- **Specs fonctionnelles** : `/docs/SPECIFICATIONS.md` 
- **Architecture** : `/docs/ARCHITECTURE.md` 
- **Guide AWS** : `/docs/DEPLOYMENT.md` 

### Assets Disponibles
- Logo : `public/Logo.png` 
- Background : `public/bg_img.jpg` 
- Fonts : `public/fonts/DM_Sans/` 

---

## 💡 Tips Développement

### Commandes Fréquentes
```bash
npm run dev           # Dev server (hot reload)
npm run build         # Build production
npm run preview       # Preview build local
npm run test:a11y     # Tests accessibilité
npm run lint          # ESLint
npm run format        # Prettier
```

### Workflow Git
```bash
# Feature branch
git checkout -b feature/nom-feature

# Développer + commiter
git add .
git commit -m "feat: description"

# Pusher + PR
git push origin feature/nom-feature
```

### Tests Accessibilité Manuels
- Navigation clavier (Tab, Enter, Escape)
- Zoom 200% (texte lisible)
- Lecteur d'écran (NVDA/VoiceOver)
- Contraste couleurs (devtools)

### Debug Performance
```bash
# Lighthouse local
npx lighthouse http://localhost:4321 --view

# Bundle analyzer
npm run build
npx vite-bundle-visualizer
```

---

## 🚨 Points d'Attention

### Tailwind CSS 4

**Important** : Utiliser `@tailwindcss/vite`, PAS `@astrojs/tailwind` (déprécié)

Vérifier config (`astro.config.mjs`) :
```javascript
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  }
});
```

### Formulaire

**Ne PAS créer de backend custom.**

Utiliser : Formspark ou Netlify Forms (voir `/docs/SPECIFICATIONS.md`)

### Images

Toujours :
- Format WebP + fallback JPEG/PNG
- Attributs `width` et `height` (éviter CLS)
- `loading="lazy"` sauf hero image
- Sizes responsive si nécessaire

### Performance

Vérifier avant commit :
- Build réussit (`npm run build`)
- Aucune erreur console
- Tests a11y passent (`npm run test:a11y`)

---

## 🎓 Contexte Métier

**Client fictif** : Organisateurs événement gaming "PIXEL CLASH" (anciennement GameOn)

**Besoin** : Landing page pour collecter inscriptions

**Utilisateurs cibles** :
- Gamers 18-35 ans
- Accès mobile/desktop
- Besoin simplicité + rapidité

**Critères succès** :
- Taux conversion ≥ 5%
- Temps chargement < 1s
- Accessible à tous

---

## 📊 Métriques à Suivre

**Performance** :
- Lighthouse Score ≥ 95/100
- Core Web Vitals "Passed"

**Accessibilité** :
- axe violations : 0
- WCAG 2.1 AA : 100%

**Qualité code** :
- ESLint errors : 0
- TypeScript errors : 0

---

*Ce fichier est maintenu à jour avec l'évolution du projet.*  
*Dernière mise à jour : Octobre 23, 2025*
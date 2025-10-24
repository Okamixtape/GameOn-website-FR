# Architecture Technique GameOn

> Documentation architecture pour projet portfolio professionnel

---

## 🎯 Vue d'Ensemble

Landing page statique générée avec **Astro 5.14**, stylée avec **Tailwind CSS 4**, déployée sur infrastructure **AWS** via **CI/CD GitHub Actions**.

**Type d'architecture** : Jamstack (JavaScript, APIs, Markup)

---

## 🏗️ Stack Détaillée

### Frontend

#### Astro 5.14.8
- **Rôle** : Static Site Generator (SSG)
- **Pourquoi ?**
  - Génération HTML statique = temps de réponse < 50ms
  - Zero JavaScript par défaut (sauf interactions nécessaires)
  - Composants réutilisables (.astro)
  - Optimisations automatiques (images, fonts, CSS)
  - Support multi-framework (React, Vue si besoin futur)

**Configuration** (`astro.config.mjs`) :
```javascript
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  }
});
```

#### Tailwind CSS 4
- **Rôle** : Framework CSS utility-first
- **Méthode d'intégration** : Via plugin Vite `@tailwindcss/vite`
- **Pourquoi ?**
  - Développement rapide (classes utility)
  - Purge CSS automatique (seules classes utilisées)
  - Design system cohérent
  - Mobile-first par défaut

**Note importante** : L'ancienne intégration `@astrojs/tailwind` est dépréciée depuis Astro 5.2.

#### TypeScript (Strict Mode)
- **Rôle** : Type safety
- **Configuration** : Mode strict activé
- **Bénéfices** :
  - Détection erreurs compilation
  - Autocomplétion IDE
  - Refactoring sécurisé

---

### Backend (Formulaire)

**Approche** : Backend-as-a-Service (BaaS)

**Service recommandé** : **Formspark**
- Endpoint API dédié
- Gestion spam intégrée (honeypot + reCAPTCHA optionnel)
- Notifications email automatiques
- Export CSV des soumissions
- 50 soumissions/mois gratuit

**Alternatives** :
- Netlify Forms (100 soumissions/mois)
- Getform (50 soumissions/mois)

**Pourquoi pas de backend custom ?**
- Landing page = cas d'usage simple
- Maintenance minimale
- Sécurité gérée par le service
- Focus sur frontend + cloud engineering

**Intégration** :
```html
<form action="https://submit-form.com/YOUR_FORM_ID" method="POST">
  <!-- Champs formulaire -->
</form>
```

---

### CI/CD Pipeline

**Platform** : GitHub Actions

**Fichier** : `.github/workflows/deploy.yml`

**Workflow** :
```yaml
name: Deploy GameOn

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build-test-deploy:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build production
        run: npm run build
      
      - name: Run accessibility tests
        run: npm run test:a11y
      
      - name: Run Lighthouse CI
        uses: treosh/lighthouse-ci-action@v10
        with:
          urls: http://localhost:4321
          uploadArtifacts: true
      
      - name: Deploy to AWS S3
        if: github.ref == 'refs/heads/main'
        run: |
          aws s3 sync dist/ s3://${{ secrets.S3_BUCKET }} --delete
          aws cloudfront create-invalidation --distribution-id ${{ secrets.CLOUDFRONT_ID }} --paths "/*"
        env:
          AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
          AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          AWS_DEFAULT_REGION: eu-west-3
```

**Tests automatisés** :
- ✅ Build réussi
- ✅ Tests accessibilité (axe-core) : 0 violations
- ✅ Tests performance (Lighthouse) : ≥ 95/100
- ✅ Linting (ESLint) : 0 erreurs

**Déploiement conditionnel** :
- Déploiement automatique uniquement si :
  - Branche `main`
  - Tous les tests passent

---

### Cloud Infrastructure (AWS)

#### Architecture

```
┌─────────────────────────────────────────────────┐
│              DÉVELOPPEUR                        │
│         git push origin main                    │
└───────────────────┬─────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────────────┐
│           GITHUB ACTIONS (CI/CD)                │
│  • npm ci                                       │
│  • npm run build                                │
│  • npm run test:a11y (Playwright + axe-core)   │
│  • Lighthouse CI (Performance)                  │
│  • aws s3 sync dist/ s3://bucket                │
└───────────────────┬─────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────────────┐
│          AWS S3 BUCKET (Origin)                 │
│  • Hébergement fichiers statiques               │
│  • Static Website Hosting activé                │
│  • Public read policy                           │
│  • Coût: ~0.023$/GB/mois                        │
└───────────────────┬─────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────────────┐
│     AWS CLOUDFRONT (CDN Distribution)           │
│  • Cache global (Edge Locations)                │
│  • HTTPS (Certificat SSL/TLS gratuit)           │
│  • Compression Gzip/Brotli                      │
│  • TTL cache: 24h (fichiers), 1h (HTML)         │
│  • Coût: ~0.085$/GB transfert                   │
└───────────────────┬─────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────────────┐
│        AWS CERTIFICATE MANAGER (ACM)            │
│  • Certificat SSL/TLS gratuit                   │
│  • Renouvellement automatique                   │
└───────────────────┬─────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────────────┐
│       AWS ROUTE 53 (DNS - Optionnel)            │
│  • Gestion nom de domaine                       │
│  • Coût: ~0.50$/mois                            │
└───────────────────┬─────────────────────────────┘
                    │
                    ▼
            👤 UTILISATEURS
         (Monde entier < 200ms)
```

#### Services AWS Détaillés

**1. S3 Bucket**
- **Nom** : `gameon-landing-prod` (exemple)
- **Région** : `eu-west-3` (Paris)
- **Configuration** :
  - Static Website Hosting activé
  - Index document : `index.html`
  - Error document : `404.html`
  - Bucket policy : Public read
- **Coût estimé** : ~0.10€/mois (1GB stockage)

**2. CloudFront Distribution**
- **Origin** : S3 Bucket endpoint
- **Viewer Protocol Policy** : Redirect HTTP to HTTPS
- **Allowed HTTP Methods** : GET, HEAD, OPTIONS
- **Compress Objects Automatically** : Yes
- **Price Class** : All Edge Locations
- **Default TTL** : 86400 (24h)
- **Coût estimé** : ~1-3€/mois (1-5GB transfert)

**3. AWS Certificate Manager**
- **Type** : Public certificate
- **Domain names** : `gameon.example.com` (si domaine custom)
- **Validation** : DNS validation
- **Coût** : Gratuit

**Coût total AWS estimé** : 1-5€/mois (free tier première année)

---

## 🔐 Sécurité

### Headers HTTP

**Configuration CloudFront → Custom Headers** :
```
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://submit-form.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:;
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: geolocation=(), microphone=(), camera=()
```

### HTTPS
- Certificat SSL/TLS via AWS Certificate Manager
- Redirect automatique HTTP → HTTPS (CloudFront)
- TLS 1.2 minimum

### Conformité RGPD
- Collecte données minimales (pas de cookies analytics tiers)
- Consentement explicite (checkbox newsletter)
- Politique de confidentialité visible
- Données stockées via service externe (Formspark) conforme RGPD

---

## ⚡ Performance

### Stratégies d'Optimisation

**1. Génération Statique (SSG)**
- HTML pré-généré au build
- Temps de réponse serveur < 50ms
- Pas de requêtes base de données

**2. Images Optimisées**
- Format WebP avec fallback JPEG
- Attributs `width`, `height` (éviter CLS)
- Lazy loading (`loading="lazy"`)
- Sizes responsive (`sizes="(max-width: 768px) 100vw, 50vw"`)

**3. Fonts Optimisées**
- DM Sans auto-hébergée (`public/fonts/`)
- Préchargement dans `<head>` :
```html
<link rel="preload" href="/fonts/DM_Sans/..." as="font" crossorigin>
```
- `font-display: swap` (éviter FOIT)

**4. CSS**
- Purge Tailwind automatique (seules classes utilisées)
- CSS critique inline dans `<head>`
- CSS non-critique chargé async

**5. JavaScript**
- Zero JS par défaut (Astro)
- JS uniquement pour interactions formulaire (validation)
- Compression Brotli/Gzip (CloudFront)

**6. CDN**
- CloudFront : 450+ Edge Locations
- Cache 24h pour assets statiques
- Cache 1h pour HTML (invalidation possible)

### Métriques Cibles

| Métrique | Cible | Mesure |
|----------|-------|--------|
| **Lighthouse Performance** | ≥ 95/100 | Lighthouse CI |
| **TTI** | < 1.5s | Lighthouse |
| **FCP** | < 0.8s | Lighthouse |
| **LCP** | < 2.5s | Core Web Vitals |
| **CLS** | < 0.1 | Core Web Vitals |
| **CDN Response Time** | < 200ms | WebPageTest |

---

## ♿ Accessibilité

### Tests Automatisés

**Outil** : axe-core via Playwright

**Configuration** (`playwright.config.ts`) :
```typescript
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: {
    baseURL: 'http://localhost:4321',
  },
  webServer: {
    command: 'npm run dev',
    port: 4321,
  },
});
```

**Test** (`tests/accessibility.test.ts`) :
```typescript
import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('should not have accessibility violations', async ({ page }) => {
  await page.goto('/');
  
  const accessibilityScanResults = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
    .analyze();
  
  expect(accessibilityScanResults.violations).toEqual([]);
});
```

**Critères validés** :
- WCAG 2.1 Level A
- WCAG 2.1 Level AA
- Contraste couleurs ≥ 4.5:1
- Navigation clavier
- Labels ARIA appropriés

---

## 📦 Structure Projet

```
GameOn-website-FR/
├── .github/
│   └── workflows/
│       └── deploy.yml          # CI/CD GitHub Actions
├── .cascade/
│   └── project-context.md      # Context pour Cascade (Claude)
├── docs/
│   ├── ARCHITECTURE.md         # Ce fichier
│   ├── SPECIFICATIONS.md       # Specs fonctionnelles/techniques
│   └── DEPLOYMENT.md           # Guide AWS setup
├── public/
│   ├── bg_img.jpg             # Image background
│   ├── Logo.png               # Logo GameOn
│   ├── fonts/
│   │   └── DM_Sans/           # Fonts auto-hébergées
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Header.astro       # Navigation + Logo
│   │   ├── HeroSection.astro  # Section hero
│   │   ├── RegistrationForm.astro  # Formulaire
│   │   └── Footer.astro       # Footer
│   ├── layouts/
│   │   └── Layout.astro       # Layout principal
│   ├── pages/
│   │   └── index.astro        # Page d'accueil
│   └── styles/
│       └── global.css         # Styles globaux + Tailwind
├── tests/
│   └── accessibility.test.ts  # Tests axe-core
├── astro.config.mjs           # Config Astro
├── playwright.config.ts       # Config Playwright
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🎯 Décisions Architecture (ADR)

### ADR-001 : Pourquoi Astro ?

**Contexte** : Besoin d'un framework pour landing page performante

**Décision** : Utiliser Astro 5.14

**Raison** :
- **Performance native** : 0 JS par défaut → Lighthouse 95+
- **Simplicité** : Pas de complexité React/Vue inutile
- **Flexibilité** : Possibilité d'ajouter React/Vue si besoin futur
- **DX** : Composants modernes, TypeScript, Hot reload

**Alternatives considérées** :
- ❌ Next.js : Trop lourd pour landing page statique
- ❌ HTML/CSS/JS vanilla : Pas de composants réutilisables
- ❌ Gatsby : Complexité inutile, GraphQL overhead

---

### ADR-002 : Pourquoi pas de backend custom ?

**Contexte** : Besoin de gérer soumissions formulaire

**Décision** : Utiliser service externe (Formspark)

**Raison** :
- **Simplicité** : Pas de serveur à maintenir
- **Sécurité** : Gestion spam par le service
- **Focus** : Portfolio = démonstration frontend + cloud (pas backend)
- **Coût** : Gratuit jusqu'à 50 soumissions/mois

**Alternatives considérées** :
- ❌ Backend Node.js : Over-engineering pour landing page
- ❌ Serverless Functions : Complexité inutile pour cas simple

---

### ADR-003 : Pourquoi AWS ?

**Contexte** : Choix plateforme hébergement

**Décision** : AWS S3 + CloudFront

**Raison** :
- **Portfolio** : Démontre compétences cloud engineering
- **Production-ready** : Infrastructure entreprise
- **Performance** : CDN global 450+ Edge Locations
- **Coût** : 1-5€/mois acceptable

**Alternatives considérées** :
- ✅ Vercel/Netlify : Plus simple, mais moins impressionnant portfolio
- ❌ Hébergement mutualisé (OVH) : Pas adapté pour statique

---

## 🔄 Flux de Développement

```
1. Feature Branch
   ↓
2. Développement Local (npm run dev)
   ↓
3. Tests manuels
   ↓
4. Commit + Push
   ↓
5. Pull Request → GitHub
   ↓
6. GitHub Actions (CI)
   • Build
   • Tests a11y
   • Tests Lighthouse
   ↓
7. Review + Merge → main
   ↓
8. GitHub Actions (CD)
   • Deploy AWS S3
   • Invalidate CloudFront
   ↓
9. Production Live
```

---

## 📚 Ressources Techniques

**Documentation** :
- [Astro Docs](https://docs.astro.build)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [AWS S3 Static Website](https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html)
- [CloudFront Docs](https://docs.aws.amazon.com/cloudfront/)
- [Playwright Docs](https://playwright.dev)
- [axe-core GitHub](https://github.com/dequelabs/axe-core)

**Outils** :
- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)
- [WebPageTest](https://www.webpagetest.org/)
- [Can I Use](https://caniuse.com/)

---

*Dernière mise à jour : Octobre 23, 2025*
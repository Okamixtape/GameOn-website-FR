---
trigger: always_on
---

# GameOn Landing Page - Règles Workspace

<project_identity>
## Identité du projet
- **Nom** : GameOn Landing Page
- **Type** : Landing page statique pour inscriptions événement gaming
- **Objectif** : Projet portfolio démontrant expertise Full-Stack + Cloud Engineering
- **Statut** : En développement actif (Octobre 2025)
</project_identity>

<tech_stack>
## Stack technique validée

### Framework & Build
- **Astro 5.14.8** : SSG (Static Site Generator)
- **TypeScript 5.x** : strict mode obligatoire
- **Tailwind CSS 4.x** : via @tailwindcss/vite

### Testing & Quality
- **Playwright** : Tests E2E et accessibilité
- **axe-core** : Tests accessibilité automatisés (WCAG 2.1 AA)
- **ESLint** : Linting
- **Prettier** : Formatting

### Infrastructure
- **AWS S3** : Hébergement statique
- **CloudFront** : CDN global
- **GitHub Actions** : CI/CD automatisé
- **Formspark** : Gestion formulaire (API)
</tech_stack>

<code_conventions>
## Conventions de code

### Structure fichiers
```
src/
  ├── components/     # Composants Astro réutilisables
  ├── layouts/        # Layouts de page
  ├── pages/          # Pages (routing automatique)
  └── styles/         # Styles globaux
```

### Naming conventions
- **Composants Astro** : PascalCase (ex: `HeroSection.astro`)
- **Fichiers TypeScript** : camelCase (ex: `formValidation.ts`)
- **Styles** : kebab-case (ex: `global.css`)
- **Tests** : `*.test.ts` (ex: `accessibility.test.ts`)

### TypeScript
- **Mode strict** : toujours activé
- **Types explicites** : pour les paramètres de fonction et retours
- **Interfaces** : préférer aux types pour les objets
- **Imports** : groupés (externes → internes → types)

### Commits
Format : `type: description`
- `feat:` - Nouvelle fonctionnalité
- `fix:` - Correction bug
- `docs:` - Documentation
- `style:` - Formatting
- `refactor:` - Refactoring
- `test:` - Tests
- `chore:` - Maintenance
</code_conventions>

<performance_requirements>
## Exigences de performance

### Lighthouse (objectif : ≥ 95/100)
- **Performance** : ≥ 95
- **Accessibility** : 100
- **Best Practices** : ≥ 95
- **SEO** : ≥ 95

### Core Web Vitals
- **FCP** (First Contentful Paint) : < 0.8s
- **TTI** (Time to Interactive) : < 1.5s
- **CLS** (Cumulative Layout Shift) : < 0.1

### Contraintes
- Temps de chargement total : < 1 seconde
- Taille bundle JS : minimale (Astro = 0 JS par défaut)
</performance_requirements>

<accessibility_requirements>
## Exigences d'accessibilité

### Standard : WCAG 2.1 AA minimum
- **Tests automatisés** : axe-core (score 100%)
- **Navigation clavier** : complète et logique
- **ARIA** : labels appropriés sur tous les éléments interactifs
- **Contraste** : ratio minimum 4.5:1 (texte normal)
- **Focus visible** : toujours visible et distinct

### Formulaire
- Labels explicites pour tous les champs
- Messages d'erreur clairs et accessibles
- Validation temps réel avec feedback accessible
</accessibility_requirements>

<security_requirements>
## Exigences de sécurité

### Headers HTTP
- **CSP** (Content Security Policy) : configuré
- **HTTPS** : obligatoire (via CloudFront)
- **HSTS** : activé

### RGPD
- Consentement explicite pour collecte données
- Politique de confidentialité accessible
- Pas de cookies tiers
</security_requirements>

<testing_strategy>
## Stratégie de tests

### Tests automatisés obligatoires
1. **Accessibilité** : `npm run test:a11y`
   - axe-core sur toutes les pages
   - Navigation clavier
   - Lecteurs d'écran

2. **Performance** : `npm run test:lighthouse`
   - Lighthouse CI
   - Vérification Core Web Vitals

3. **Linting** : `npm run lint`
   - ESLint sur tout le code

### Avant chaque commit
```bash
npm run lint
npm run test:a11y
npm run build  # Vérifier que le build passe
```

### Avant chaque PR
- Tous les tests CI doivent passer
- Lighthouse score ≥ 95
- axe score = 100%
</testing_strategy>

<documentation_references>
## Références documentation

### Projet
- **Specs complètes** : [Confluence](https://loupaubour.atlassian.net/wiki/spaces/DL/pages/163843)
- **Suivi projet** : [Jira Epic SCRUM-5](https://loupaubour.atlassian.net/browse/SCRUM-5)
- **Architecture** : `docs/ARCHITECTURE.md`
- **Déploiement** : `docs/DEPLOYMENT.md`

### Technologies
- **Astro** : https://docs.astro.build
- **Tailwind CSS** : https://tailwindcss.com/docs
- **Playwright** : https://playwright.dev
- **axe-core** : https://github.com/dequelabs/axe-core
</documentation_references>

<development_workflow>
## Workflow de développement

### Créer une feature
```bash
git checkout -b feature/nom-feature
# Développer
npm run dev  # http://localhost:4321
# Tester
npm run lint
npm run test:a11y
npm run build
# Commiter
git add .
git commit -m "feat: description"
git push origin feature/nom-feature
# Créer PR sur GitHub
```

### Commandes essentielles
- `npm run dev` : Serveur dev avec hot reload
- `npm run build` : Build production → `dist/`
- `npm run preview` : Preview du build
- `npm run test:a11y` : Tests accessibilité
- `npm run lint` : Linter
- `npm run format` : Formatter

### CI/CD
- **Trigger** : Push sur `main` ou PR
- **Pipeline** :
  1. Install dependencies (`npm ci`)
  2. Lint (`npm run lint`)
  3. Build (`npm run build`)
  4. Tests (`npm run test:a11y`)
  5. Deploy to S3 + invalidate CloudFront (si `main`)
</development_workflow>

<ai_assistance_guidelines>
## Guidelines pour assistance IA

### Lors de génération de code
1. **Toujours** respecter TypeScript strict mode
2. **Toujours** inclure les imports nécessaires en haut du fichier
3. **Toujours** vérifier la compatibilité avec Astro 5.x et Tailwind 4.x
4. **Privilégier** les composants Astro (`.astro`) aux composants framework
5. **Minimiser** le JavaScript côté client (Astro = 0 JS par défaut)

### Lors de suggestions d'amélioration
1. **Vérifier** l'impact sur les performances (Lighthouse)
2. **Vérifier** l'impact sur l'accessibilité (axe)
3. **Proposer** des tests pour valider les changements
4. **Citer** la documentation officielle pertinente

### Lors de debugging
1. **Analyser** les erreurs de build Astro
2. **Vérifier** la configuration TypeScript
3. **Tester** en local avant de proposer une solution
4. **Documenter** la cause du bug et la solution

### Interdictions
- ❌ Ne jamais proposer de code sans gestion d'erreurs
- ❌ Ne jamais ignorer les warnings TypeScript
- ❌ Ne jamais sacrifier l'accessibilité pour le design
- ❌ Ne jamais ajouter de dépendances sans justification
- ❌ Ne jamais proposer de code non testé
</ai_assistance_guidelines>

<project_goals>
## Objectifs du projet

### Objectif principal
Démontrer une expertise technique professionnelle à travers :
- Performance exceptionnelle (Lighthouse 95+)
- Accessibilité exemplaire (WCAG 2.1 AA)
- Architecture cloud moderne (AWS S3 + CloudFront)
- CI/CD automatisé (GitHub Actions)
- Tests automatisés complets

### Différenciation
Ce n'est **pas** une landing page classique, c'est une **vitrine technique** :
- Code production-ready
- Best practices appliquées
- Documentation complète
- Tests automatisés
- Infrastructure scalable

### Métriques de succès
- ✅ Lighthouse ≥ 95/100 (toutes catégories)
- ✅ axe score = 100%
- ✅ Temps de chargement < 1s
- ✅ CI/CD fonctionnel
- ✅ Documentation à jour
</project_goals>

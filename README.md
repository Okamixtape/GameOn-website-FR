# GameOn Landing Page 🎮

> Landing page professionnelle pour inscriptions événement GameOn  
> **Projet Portfolio** : Démonstration compétences Full-Stack + Cloud Engineering

[![Astro](https://img.shields.io/badge/Astro-5.14.8-FF5D01?logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.x-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

---

## 🎯 Objectif Projet

### Problème Résolu
Les organisateurs d'événements gaming ont besoin d'une solution pour collecter des inscriptions de manière **fiable**, **performante** et **accessible**, sans nécessiter de compétences backend complexes.

### Solution Proposée
Landing page statique **ultra-performante** (Lighthouse 95+) avec :
- ⚡ Temps de chargement < 1 seconde
- ♿ Accessibilité WCAG 2.1 AA validée
- 🔒 Sécurité HTTPS + conformité RGPD
- 🌍 CDN global (CloudFront)
- 🤖 CI/CD automatisé (GitHub Actions)

### Différenciation
Ce n'est **pas** une landing page classique. C'est une **démonstration d'expertise technique** :

| Critère | Landing Page Standard | GameOn Portfolio |
|---------|----------------------|------------------|
| Performance | ~50-70 Lighthouse | **95+** |
| Accessibilité | Non testée | **WCAG 2.1 AA** (tests auto) |
| Hébergement | Hébergement mutualisé | **AWS S3 + CloudFront** |
| Déploiement | FTP manuel | **CI/CD GitHub Actions** |
| Tests | Manuels | **Automatisés** (axe, Lighthouse) |
| Sécurité | Basique | **Headers CSP + SSL** |

---

## 📊 Liens Projet

- **📋 Spécifications complètes** : [Confluence - GameOn Specs](https://loupaubour.atlassian.net/wiki/spaces/DL/pages/163843)
- **🎫 Suivi de projet** : [Jira - Epic SCRUM-5](https://loupaubour.atlassian.net/browse/SCRUM-5)
- **🌐 Demo Live** : [À venir]
- **📦 Archive version originale** : [Branche archive/html-vanilla](https://github.com/Okamixtape/GameOn-website-FR/tree/archive/html-vanilla)

---

## 🏗️ Stack Technique

**Validée Octobre 2025** - Production-ready

| Composant | Version | Rôle | Documentation |
|-----------|---------|------|---------------|
| **Astro** | 5.14.8 | SSG Framework | [docs.astro.build](https://docs.astro.build) |
| **Tailwind CSS** | 4.x | Styling (via @tailwindcss/vite) | [Installation Guide](https://tailwindcss.com/docs/installation/framework-guides/astro) |
| **TypeScript** | 5.x | Type Safety (strict mode) | [typescriptlang.org](https://www.typescriptlang.org/) |
| **Playwright** | Latest | Tests E2E | [playwright.dev](https://playwright.dev) |
| **axe-core** | Latest | Tests accessibilité | [github.com/dequelabs/axe-core](https://github.com/dequelabs/axe-core) |
| **Formspark** | API | Gestion formulaire | [formspark.io](https://formspark.io) |
| **AWS S3** | - | Hébergement statique | [AWS S3 Docs](https://docs.aws.amazon.com/s3/) |
| **CloudFront** | - | CDN global | [CloudFront Docs](https://docs.aws.amazon.com/cloudfront/) |
| **GitHub Actions** | - | CI/CD | [GitHub Actions Docs](https://docs.github.com/actions) |

---

## 🎨 Architecture

```
Developer
    ↓ git push
┌─────────────────┐
│  GitHub Repo    │
└────────┬────────┘
         ↓ trigger
┌─────────────────┐
│ GitHub Actions  │  ← Build + Tests
│  - npm ci       │    • Lighthouse CI
│  - npm build    │    • axe (a11y)
│  - npm test     │    • ESLint
└────────┬────────┘
         ↓ deploy
┌─────────────────┐
│    AWS S3       │  ← Hébergement statique
│    Bucket       │
└────────┬────────┘
         ↓
┌─────────────────┐
│   CloudFront    │  ← CDN + HTTPS + Cache
│     (CDN)       │
└────────┬────────┘
         ↓
   👤 Users (Global)
```

---

## 🚀 Quick Start

### Prérequis
- Node.js ≥ 18.x
- npm ≥ 9.x
- Git

### Installation

```bash
# 1. Cloner le repo
git clone https://github.com/Okamixtape/GameOn-website-FR.git
cd GameOn-website-FR

# 2. Installer dépendances
npm install

# 3. Lancer dev server
npm run dev
# → http://localhost:4321
```

### Commandes Disponibles

| Commande | Description |
|----------|-------------|
| `npm run dev` | Lancer serveur dev (hot reload) |
| `npm run build` | Build production (`dist/`) |
| `npm run preview` | Prévisualiser build production |
| `npm run test:a11y` | Tests accessibilité (Playwright + axe) |
| `npm run test:lighthouse` | Tests performance (Lighthouse CI) |
| `npm run lint` | Linter ESLint |
| `npm run format` | Formatter Prettier |

---

## 📋 Spécifications Quick Reference

### Fonctionnelles (RF)
- **RF-001** : Affichage événement responsive (320px → 1920px+)
- **RF-002** : Formulaire inscription (prénom, nom, email, date naissance, ville, tournois)
- **RF-003** : Validation temps réel + messages erreur explicites

### Techniques (ST)
- **ST-001** : Performance Lighthouse ≥ 95/100
- **ST-002** : Accessibilité WCAG 2.1 AA minimum (axe score 100%)
- **ST-003** : Responsive mobile-first
- **ST-004** : Sécurité HTTPS + CSP headers + RGPD

---

## 📚 Documentation

### Documentation Technique
- **Architecture Détaillée** : `docs/ARCHITECTURE.md` - Stack, diagrammes, décisions techniques
- **Spécifications Complètes** : `docs/SPECIFICATIONS.md` - Besoins fonctionnels/techniques
- **Guide Déploiement AWS** : `docs/DEPLOYMENT.md` - Configuration S3 + CloudFront

### Assistance IA & Windsurf
- **Règles Workspace** : `.windsurf/rules/` - Règles Cascade pour le projet
- **Références IA** : `.windsurf/AI-REFERENCES.md` - Articles leaders tech sur l'IA
- **Setup Guide** : `.windsurf/SETUP-COMPLETE.md` - Configuration complète Windsurf

> Ce projet utilise Windsurf/Cascade avec des règles professionnelles pour garantir qualité et cohérence du code. Voir `.windsurf/` pour détails.

---

## 📈 Métriques Cibles

### Performance
- **Lighthouse Score** : ≥ 95/100 (toutes catégories)
- **Time to Interactive (TTI)** : < 1.5s
- **First Contentful Paint (FCP)** : < 0.8s
- **Cumulative Layout Shift (CLS)** : < 0.1

### Business
- **Taux de conversion** : ≥ 5% (visiteurs → inscriptions)
- **Taux de rebond** : ≤ 40%
- **Temps moyen sur page** : ≥ 2 minutes

### Technique
- **Uptime** : ≥ 99.9%
- **Temps réponse CDN** : ≤ 200ms
- **Erreurs JS production** : 0

---

## 🤝 Contribution

Voir `CONTRIBUTING.md` pour les guidelines.

### Workflow Git

```bash
# 1. Créer branche feature
git checkout -b feature/nom-feature

# 2. Développer + commiter
git add .
git commit -m "feat: description"

# 3. Pusher + créer PR
git push origin feature/nom-feature
```

### Conventions Commits
- `feat:` - Nouvelle fonctionnalité
- `fix:` - Correction bug
- `docs:` - Documentation
- `style:` - Formatting (pas de changement code)
- `refactor:` - Refactoring
- `test:` - Ajout/modification tests
- `chore:` - Maintenance (deps, config)

---

## 📝 License

Ce projet est un portfolio personnel.  
Code source disponible à des fins éducatives.

---

## 👤 Auteur

**Loup Aubour** - Développeur Full-Stack indépendant

- **Portfolio** : [À venir]
- **GitHub** : [@Okamixtape](https://github.com/Okamixtape)
- **LinkedIn** : [À compléter]

---

## 🙏 Remerciements

- **Astro Team** pour l'excellent framework
- **Tailwind Labs** pour Tailwind CSS
- **Deque Systems** pour axe-core
- **Gemini & Claude** pour l'assistance technique

---

*Dernière mise à jour : Octobre 2025*

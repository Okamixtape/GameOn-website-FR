# 🎯 Stratégie d'Intégration Redesign Synthwave → Astro

**Date** : 24 novembre 2025  
**Status** : 📋 Plan d'action  
**Objectif** : Intégrer le redesign Figma Make (React SPA) dans l'architecture Astro existante

---

## 📊 Analyse de la Situation

### Trois Versions en Présence

**V1 Production** : Astro pur (Lighthouse 95+, 0 KB JS)  
**V2 Zeus** : Astro + React Islands (jaune éclair, 1 page test)  
**Redesign Figma** : React SPA (synthwave, 5 pages, 100+ animations)

### Décision : Intégrer Redesign dans Astro

**Raisons** :
- ✅ Design plus abouti (polish AAA)
- ✅ Animations professionnelles
- ✅ Composants shadcn/ui
- ⚠️ Nécessite refactoring pour performance

---

## 🏗️ Architecture Cible

```
Astro Hybride Optimisé
├── Layout Astro (Statique - SEO)
├── Header Astro (Navigation native)
├── Pages Astro (1 fichier = 1 route)
│   ├── index.astro
│   ├── tournament.astro
│   ├── about.astro
│   ├── blog.astro
│   └── blog/[slug].astro
└── React Islands (Sélectifs)
    ├── Animations critiques (client:load)
    ├── Interactions (client:visible)
    └── Effets visuels (client:idle)
```

---

## 📦 Phase 1 : Infrastructure (Jour 1)

### Installation Dépendances

```bash
npm install @radix-ui/react-collapsible
npm install @radix-ui/react-scroll-area
```

### Tailwind Config (Palette Synthwave)

```javascript
// tailwind.config.mjs
colors: {
  // V3 Redesign - Synthwave
  'neon-cyan': '#00f3ff',
  'neon-magenta': '#ff00ff',
  'bg-dark': '#0a0a1f',
  'bg-dark-accent': '#1a0a2e',
  'text-light': '#f8fafc',
}
```

### Copier Styles Globaux

```bash
cp "Redesign Landing Page UI/src/styles/globals.css" \
   src/styles/redesign-globals.css
```

---

## 📦 Phase 2 : Composants Réutilisables (Jour 2)

### Structure

```bash
mkdir -p src/components/redesign/{layout,cards,ui-custom}
```

### Composants Prioritaires

**Layout** :
- `SectionHeader.tsx` (Eyebrow + Title + Subtitle)
- `GridBackground.tsx` (Grille cyberpunk fixe)
- `PageContainer.tsx` (Wrapper avec background)

**Cards** :
- `GlowCard.tsx` (Glassmorphism pattern)
- `FeatureCard.tsx` (Feature avec icon)

**UI Custom** :
- `NeonButton.tsx` (Button avec glow)

---

## 📦 Phase 3 : Data Layer (Jour 2)

### Structure Data

```bash
mkdir -p src/data/redesign
```

### Fichiers Data

- `articles.ts` (6 articles blog)
- `timeline-events.ts` (Événements historiques)
- `games.ts` (Liste jeux rétro)
- `faq.ts` (Questions fréquentes)

---

## 📦 Phase 4 : Migration Pages (Jours 3-4)

### Mapping React → Astro

| React | Astro | Stratégie |
|-------|-------|-----------|
| `App.tsx` (HomePage) | `index.astro` | Hybride (Islands) |
| `TournamentDetails.tsx` | `tournament.astro` | Islands sélectifs |
| `AboutUs.tsx` | `about.astro` | Timeline animée |
| `BlogListing.tsx` | `blog.astro` | Statique + search |
| `BlogArticle.tsx` | `blog/[slug].astro` | Statique + TOC |

### Exemple Homepage

```astro
---
import Layout from '../layouts/Layout.astro';
import HeroSection from '../components/redesign/sections/HeroSection';
import { FeatureCard } from '../components/redesign/cards/FeatureCard';
---

<Layout>
  {/* Hero - React Island (animations) */}
  <HeroSection client:load />
  
  {/* Features - Statique Astro */}
  <section>
    <FeatureCard title="Cashprize 15K€" />
  </section>
</Layout>
```

---

## 📦 Phase 5 : Optimisations (Jour 5)

### Stratégie Hydratation

- `client:load` : Hero uniquement
- `client:visible` : Sections below-fold
- `client:idle` : FAQ, TOC
- `client:media` : Effets desktop

### Réduction Animations

```typescript
// Motion config optimisé
export const motionConfig = {
  reducedMotion: "user",
  transition: { duration: 0.3 }
};
```

---

## 📊 Métriques Attendues

| Métrique | V1 | Redesign | Objectif |
|----------|-----|----------|----------|
| Bundle JS | 0 KB | ~300 KB | < 400 KB |
| LCP | 1.2s | 2.0s | < 2.5s |
| Lighthouse | 95+ | 90+ | ≥ 90 |

---

## 🚨 Risques & Mitigations

### Risque : Performance < 90

**Mitigations** :
1. Animations CSS au lieu de Motion
2. `client:visible` au lieu de `client:load`
3. Images WebP optimisées
4. Lazy loading sections

### Risque : Contraste Couleurs

**Mitigations** :
1. Tester avec WebAIM Contrast Checker
2. Utiliser `text-light` (#f8fafc)
3. Créer variantes foncées si besoin

---

## 📅 Planning (6 jours)

**Jour 1** : Infrastructure (dépendances, Tailwind, styles)  
**Jour 2** : Composants + Data layer  
**Jour 3** : Homepage + Tournament pages  
**Jour 4** : About + Blog pages  
**Jour 5** : Optimisations performance  
**Jour 6** : Tests & validation

---

## 🎯 Prochaines Actions

1. Valider le plan avec l'équipe
2. Créer branche `redesign-integration`
3. Commencer Phase 1 (Infrastructure)
4. Tests continus à chaque phase

---

**Estimation** : 6 jours développement senior  
**Objectif** : Lighthouse ≥ 90, Accessibilité 100%

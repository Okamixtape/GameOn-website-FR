# 🏗️ PROMPT WINDSURF HOME ARCHITECT - Sprint 1

**Version** : Optimisée pour Cascade (Windsurf)  
**Objectif** : Extraire et refactorer Homepage de `App.tsx` (Figma Make)  
**Durée estimée** : 4-6 heures

---

## 📋 Prompt à Copier dans Cascade

```
# SPRINT 1 : REFONTE HOME PAGE - ARCHITECTURE ASTRO

## 🎯 CONTEXTE PROJET

Je travaille sur PIXEL CLASH Championship, une landing page Astro avec :
- **Architecture actuelle** : Astro SSG + React Islands (V2 Zeus en cours)
- **Performance baseline** : Lighthouse 95+ (V1 production)
- **Objectif** : Intégrer redesign Synthwave (Figma Make) en préservant perf

**Fichier source** : `App.tsx` (React SPA monolithique, ~800 lignes)
**Destination** : Architecture Astro hybride (statique + Islands sélectifs)

---

## 🎯 TA MISSION

Extraire la **Homepage** de `App.tsx` et la transformer en architecture Astro optimisée :
1. ✅ Data layer séparé (maintenabilité)
2. ✅ Composants atomiques React (réutilisabilité)
3. ✅ Performance préservée (Lighthouse ≥ 90)
4. ✅ Accessibilité maintenue (WCAG 2.1 AA)

---

## 📦 ÉTAPE 1 : DATA LAYER (30 min)

### Créer `src/data/redesign/home.ts`

**Objectif** : Extraire TOUTES les données hardcodées de la Homepage

**Structure attendue** :

\`\`\`typescript
// src/data/redesign/home.ts

export interface HeroData {
  eyebrow: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
  ctaPrimary: {
    text: string;
    href: string;
  };
  ctaSecondary?: {
    text: string;
    href: string;
  };
  image: {
    src: string;
    alt: string;
  };
}

export const heroData: HeroData = {
  eyebrow: "🎮 CHAMPIONNAT 2026",
  title: "Championnat",
  titleHighlight: "Rétro Gaming",
  subtitle: "Plongez dans l'univers compétitif du rétro gaming...",
  ctaPrimary: {
    text: "Voir le tournoi",
    href: "/tournament",
  },
  image: {
    src: "/redesign/hero-retro-gaming.jpg",
    alt: "Championnat Rétro Gaming PIXEL CLASH",
  },
};

export interface FeatureCard {
  id: string;
  icon: string; // Nom icône Lucide (ex: "Trophy")
  title: string;
  description: string;
}

export const featuresData: FeatureCard[] = [
  {
    id: "cashprize",
    icon: "Trophy",
    title: "Cashprize 15K€",
    description: "Les meilleurs sont récompensés à leur juste valeur",
  },
  // ... 3 autres features
];

export interface Game {
  id: string;
  name: string;
  platform: string;
  year: number;
  image: string;
}

export const gamesData: Game[] = [
  {
    id: "street-fighter-2",
    name: "Street Fighter II",
    platform: "Arcade",
    year: 1991,
    image: "/redesign/games/sf2.jpg",
  },
  // ... autres jeux
];

export interface Stat {
  id: string;
  value: string;
  label: string;
}

export const statsData: Stat[] = [
  { id: "participants", value: "500+", label: "Participants" },
  { id: "games", value: "15+", label: "Jeux Rétro" },
];
\`\`\`

**Instructions** :
- ✅ Typer TOUTES les interfaces
- ✅ Exporter TOUTES les constantes
- ✅ Utiliser chemins `/redesign/...` pour images
- ✅ Icônes = noms Lucide React (string)

---

## 🧱 ÉTAPE 2 : COMPOSANTS ATOMIQUES (2-3h)

### Créer `src/components/redesign/home/`

**Contraintes critiques** :
- ✅ Utiliser palette Tailwind existante (`bg-background`, `text-primary`, `neon-cyan`, `neon-magenta`)
- ✅ Importer data depuis `@/data/redesign/home`
- ✅ Performance : CSS Tailwind > Motion (sauf animations critiques)
- ✅ Accessibilité : ARIA labels, semantic HTML

---

### 2.1 Hero.tsx (React Island - Animations critiques)

\`\`\`typescript
// src/components/redesign/home/Hero.tsx
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { heroData } from "@/data/redesign/home";

/**
 * Hero Section - Homepage Redesign
 * 
 * @hydration client:load (animations critiques UX)
 * @performance Framer Motion uniquement pour fade-in initial
 */
export default function Hero() {
  return (
    <section className="relative z-10 container mx-auto px-6 pt-40 pb-48">
      <div className="grid lg:grid-cols-12 gap-20 items-center">
        
        {/* Left Content - 7 cols */}
        <div className="lg:col-span-7 space-y-12">
          
          {/* Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block"
          >
            <div className="px-4 py-2 rounded-full bg-neon-cyan/10 border border-neon-cyan/30">
              <span className="text-neon-cyan text-sm font-medium">
                {heroData.eyebrow}
              </span>
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-7xl font-bold"
          >
            <span className="text-text-light">{heroData.title}</span>
            <br />
            <span className="bg-gradient-to-r from-neon-cyan to-neon-magenta bg-clip-text text-transparent">
              {heroData.titleHighlight}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-text-muted max-w-lg"
          >
            {heroData.subtitle}
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a
              href={heroData.ctaPrimary.href}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-neon-cyan to-neon-magenta text-white font-bold rounded-lg transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,243,255,0.8)]"
            >
              {heroData.ctaPrimary.text}
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex gap-16 pt-12 border-t border-text-light/10"
          >
            {statsData.map((stat) => (
              <div key={stat.id}>
                <div className="text-3xl font-bold text-text-light mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-text-muted uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Image - 5 cols */}
        <motion.div
          className="lg:col-span-5 relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute -inset-8 bg-neon-cyan rounded-lg blur-3xl opacity-10" />
            
            {/* Image */}
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={heroData.image.src}
                alt={heroData.image.alt}
                className="w-full h-auto"
                loading="eager"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-bg-dark/40" />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
\`\`\`

---

### 2.2 Features.tsx (Statique - CSS Tailwind uniquement)

\`\`\`typescript
// src/components/redesign/home/Features.tsx
import * as LucideIcons from "lucide-react";
import { featuresData } from "@/data/redesign/home";

/**
 * Features Section - 4 cartes glassmorphism
 * 
 * @hydration Aucune (statique Astro)
 * @performance CSS Tailwind pur (pas de Motion)
 */
export default function Features() {
  return (
    <section className="relative py-20">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="px-4 py-2 rounded-full bg-neon-cyan/10 border border-neon-cyan/30">
              <span className="text-neon-cyan text-sm font-medium">
                🎯 POURQUOI NOUS REJOINDRE
              </span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-neon-cyan to-neon-magenta bg-clip-text text-transparent">
              L'Expérience Ultime
            </span>
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Quatre piliers pour une compétition inoubliable
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresData.map((feature) => {
            const Icon = (LucideIcons as any)[feature.icon];
            
            return (
              <div key={feature.id} className="group relative">
                {/* Glow effect (CSS pur) */}
                <div className="absolute inset-0 bg-gradient-to-r from-neon-magenta to-neon-cyan rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
                
                {/* Card */}
                <div className="relative p-8 rounded-2xl bg-bg-dark/60 backdrop-blur-xl border border-neon-cyan/20 group-hover:border-neon-cyan/50 transition-all duration-300 group-hover:scale-105">
                  
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-full bg-neon-cyan/10 flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-neon-cyan" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-text-light mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-text-muted">
                    {feature.description}
                  </p>
                  
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
\`\`\`

---

### 2.3 GamesShowcase.tsx (React Island - Carousel)

\`\`\`typescript
// src/components/redesign/home/GamesShowcase.tsx
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { gamesData } from "@/data/redesign/home";

/**
 * Games Showcase - Carousel jeux rétro
 * 
 * @hydration client:visible (below fold)
 * @performance Carousel simple sans lib externe
 */
export default function GamesShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % gamesData.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + gamesData.length) % gamesData.length);
  };

  return (
    <section className="relative py-20 bg-bg-dark-accent/50">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-neon-magenta to-neon-cyan bg-clip-text text-transparent">
              Jeux Légendaires
            </span>
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Current Game */}
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <img
              src={gamesData[currentIndex].image}
              alt={gamesData[currentIndex].name}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-bg-dark to-transparent">
              <h3 className="text-2xl font-bold text-text-light mb-2">
                {gamesData[currentIndex].name}
              </h3>
              <p className="text-text-muted">
                {gamesData[currentIndex].platform} • {gamesData[currentIndex].year}
              </p>
            </div>
          </div>

          {/* Navigation */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-bg-dark/80 backdrop-blur border border-neon-cyan/30 flex items-center justify-center hover:border-neon-cyan transition-colors"
            aria-label="Jeu précédent"
          >
            <ChevronLeft className="w-6 h-6 text-neon-cyan" />
          </button>
          
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-bg-dark/80 backdrop-blur border border-neon-cyan/30 flex items-center justify-center hover:border-neon-cyan transition-colors"
            aria-label="Jeu suivant"
          </button>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {gamesData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-neon-cyan w-8"
                    : "bg-text-muted/30"
                }`}
                aria-label={`Aller au jeu ${index + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
\`\`\`

---

### 2.4 HomeCTA.tsx (Statique)

\`\`\`typescript
// src/components/redesign/home/HomeCTA.tsx

/**
 * Home CTA - Bandeau final appel à l'action
 * 
 * @hydration Aucune (statique)
 */
export default function HomeCTA() {
  return (
    <section className="relative py-20">
      <div className="container mx-auto px-6 text-center">
        
        <h2 className="text-5xl md:text-6xl font-bold mb-8">
          <span className="bg-gradient-to-r from-neon-cyan to-neon-magenta bg-clip-text text-transparent">
            Prêt à Rejoindre la Légende ?
          </span>
        </h2>

        <p className="text-xl text-text-muted mb-12 max-w-2xl mx-auto">
          Inscrivez-vous dès maintenant et faites partie de l'histoire
        </p>

        <a
          href="/tournament"
          className="inline-flex items-center gap-3 px-12 py-6 bg-gradient-to-r from-neon-cyan to-neon-magenta text-white font-bold text-lg rounded-lg transition-all duration-300 hover:shadow-[0_0_50px_rgba(0,243,255,0.8)]"
        >
          Voir le Tournoi
        </a>

      </div>
    </section>
  );
}
\`\`\`

---

## 🚀 ÉTAPE 3 : ASSEMBLAGE (30 min)

### Créer `src/pages/index-redesign.astro`

\`\`\`astro
---
/**
 * Homepage Redesign - PoC Sprint 1
 * 
 * Architecture Astro Hybride :
 * - Layout statique (SEO, meta)
 * - Hero React Island (animations)
 * - Features statique (performance)
 * - Games React Island (carousel)
 * - CTA statique
 */

import Layout from '../layouts/Layout.astro';
import { GridBackground } from '../components/redesign/layout/GridBackground';

// React Islands
import Hero from '../components/redesign/home/Hero';
import Features from '../components/redesign/home/Features';
import GamesShowcase from '../components/redesign/home/GamesShowcase';
import HomeCTA from '../components/redesign/home/HomeCTA';

const title = "Accueil Redesign";
const description = "PIXEL CLASH Championship - Le tournoi rétro gaming ultime";
---

<Layout title={title} description={description}>
  
  <!-- Wrapper Synthwave -->
  <div class="min-h-screen bg-bg-dark text-text-light relative overflow-hidden">
    
    <!-- Grid Background (statique) -->
    <GridBackground />
    
    <!-- Gradient Orbs -->
    <div class="absolute top-0 right-0 w-[600px] h-[600px] bg-neon-cyan rounded-full blur-[200px] opacity-10 animate-pulse" />
    <div class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-neon-magenta rounded-full blur-[180px] opacity-5" />

    <!-- Hero Section - React Island (animations critiques) -->
    <Hero client:load />

    <!-- Features Section - Statique (performance) -->
    <Features />

    <!-- Games Showcase - React Island (carousel interactif) -->
    <GamesShowcase client:visible />

    <!-- CTA Section - Statique -->
    <HomeCTA />

  </div>

</Layout>
\`\`\`

---

## ✅ CHECKLIST VALIDATION

Après exécution, vérifier :

### Build
\`\`\`bash
npm run build
# → Doit passer sans erreurs TypeScript
\`\`\`

### Preview
\`\`\`bash
npm run preview
# → Ouvrir http://localhost:4321/index-redesign
\`\`\`

### Tests Visuels
- [ ] Grille cyberpunk visible en arrière-plan
- [ ] Hero avec animations fade-in fluides
- [ ] Features cards avec hover glow (CSS pur)
- [ ] Carousel jeux fonctionnel (prev/next)
- [ ] CTA finale visible

### Tests Performance
- [ ] Build time < 30s
- [ ] Bundle JS < 200 KB (homepage seule)
- [ ] Hot reload < 3s

---

## 🚨 GESTION ERREURS

### Si erreur "Cannot find module '@/data/redesign/home'"

\`\`\`typescript
// Remplacer par chemin relatif
import { heroData } from "../../../data/redesign/home";
\`\`\`

### Si erreur "Module 'lucide-react' not found"

\`\`\`bash
npm install lucide-react
\`\`\`

### Si image hero non trouvée

\`\`\`typescript
// Utiliser placeholder temporaire
src: "https://placehold.co/1920x1080/0a0f24/FFDE00?text=Hero"
\`\`\`

---

## 📊 MÉTRIQUES ATTENDUES

| Métrique | Objectif PoC |
|----------|--------------|
| Build time | < 30s |
| Bundle JS | < 200 KB |
| Composants créés | 5 fichiers |
| Data layer | 1 fichier |
| Page Astro | 1 fichier |

---

**ATTENDS MON PROCHAIN MESSAGE AVEC LE CODE SOURCE DE App.tsx POUR COMMENCER.**
```

---

## 📝 Instructions d'Utilisation

1. **Copier le prompt ci-dessus** dans Cascade (Windsurf)
2. **Attendre validation** de Cascade
3. **Coller le code `App.tsx`** de Figma Make
4. **Laisser Cascade exécuter** les 3 étapes
5. **Tester** : `npm run build && npm run preview`

---

**Temps estimé** : 4-6 heures  
**Livrable** : Homepage redesign fonctionnelle sur `/index-redesign`

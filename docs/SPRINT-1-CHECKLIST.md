# ✅ Sprint 1 - Checklist Préparation & Exécution

**Date** : 24 novembre 2025  
**Objectif** : Homepage Redesign PoC  
**Durée estimée** : 4-6 heures

---

## 📋 Préparation (FAIT ✅)

### Infrastructure
- [x] Branche Git créée : `redesign-poc-homepage`
- [x] Dossiers créés :
  - `src/components/redesign/home/`
  - `src/data/redesign/`
  - `public/redesign/`
  - `public/redesign/games/`
- [x] Image hero copiée : `public/redesign/hero-retro-gaming.jpg`

### Dépendances
- [x] `lucide-react` : Installé (déjà présent)
- [x] `framer-motion` : Installé (déjà présent)
- [x] `@radix-ui/*` : À installer si nécessaire

---

## 🚀 Exécution Prompt (EN COURS)

### Étape 1 : Copier Prompt dans Cascade

1. Ouvrir Cascade : `Cmd+L` (ou `Ctrl+L`)
2. Copier le contenu de `docs/PROMPT-WINDSURF-HOME-ARCHITECT.md`
3. Coller dans Cascade
4. Attendre validation de Cascade

### Étape 2 : Fournir Code Source

1. Ouvrir `Redesign Landing Page UI/src/App.tsx`
2. Copier TOUT le contenu (lignes 1-800+)
3. Coller dans Cascade après validation du prompt

### Étape 3 : Laisser Cascade Travailler

Cascade va créer automatiquement :
- `src/data/redesign/home.ts`
- `src/components/redesign/home/Hero.tsx`
- `src/components/redesign/home/Features.tsx`
- `src/components/redesign/home/GamesShowcase.tsx`
- `src/components/redesign/home/HomeCTA.tsx`
- `src/pages/index-redesign.astro`

**Durée estimée** : 30-60 min

---

## 🧪 Tests Post-Exécution

### Build Test
```bash
npm run build
# ✅ Doit passer sans erreurs TypeScript
```

### Preview Test
```bash
npm run preview
# ✅ Ouvrir http://localhost:4321/index-redesign
```

### Tests Visuels
- [ ] Grille cyberpunk visible en arrière-plan
- [ ] Hero avec animations fade-in fluides
- [ ] Features cards avec hover glow (CSS pur)
- [ ] Carousel jeux fonctionnel (prev/next)
- [ ] CTA finale visible

### Tests Performance
```bash
# Bundle size
du -sh dist/_astro/*.js | awk '{sum+=$1} END {print sum}'
# ✅ Objectif : < 200 KB

# Build time
time npm run build
# ✅ Objectif : < 30s
```

### Tests Accessibilité
```bash
npm run test:a11y
# ✅ Objectif : 0 erreurs
```

---

## 🚨 Gestion Erreurs Potentielles

### Erreur : "Cannot find module '@/data/redesign/home'"

**Solution** :
```typescript
// Remplacer imports avec alias par chemins relatifs
import { heroData } from "../../../data/redesign/home";
```

### Erreur : "Module 'lucide-react' not found"

**Solution** :
```bash
npm install lucide-react
```

### Erreur : Image hero non trouvée

**Solution** :
```typescript
// Vérifier chemin dans data/redesign/home.ts
image: {
  src: "/redesign/hero-retro-gaming.jpg", // ✅ Existe
  alt: "Hero PIXEL CLASH"
}
```

### Erreur : Tailwind classes non reconnues

**Solution** :
```bash
# Vérifier tailwind.config.mjs contient palette Synthwave
# Si non, ajouter :
colors: {
  'neon-cyan': '#00f3ff',
  'neon-magenta': '#ff00ff',
  'bg-dark': '#0a0a1f',
  'bg-dark-accent': '#1a0a2e',
  'text-light': '#f8fafc',
  'text-muted': '#94a3b8',
}
```

---

## 📊 Métriques Attendues

| Métrique | Objectif | Résultat |
|----------|----------|----------|
| Fichiers créés | 6 | ⏳ |
| Build time | < 30s | ⏳ |
| Bundle JS | < 200 KB | ⏳ |
| Lighthouse Performance | ≥ 90 | ⏳ |
| Lighthouse Accessibility | 100 | ⏳ |
| Erreurs TypeScript | 0 | ⏳ |

---

## ✅ Validation Finale

### Checklist Succès

- [ ] Page `/index-redesign` accessible
- [ ] Animations fluides (60 FPS)
- [ ] Aucune erreur console
- [ ] Responsive (mobile → desktop)
- [ ] Lighthouse ≥ 90
- [ ] Bundle < 200 KB

### Commit & Push

```bash
git add .
git commit -m "feat(redesign): add homepage PoC with Astro Islands"
git push -u origin redesign-poc-homepage
```

---

## 🎯 Prochaines Étapes (Après Succès)

1. **Documenter résultats** dans `docs/REDESIGN-POC-REPORT.md`
2. **Décider** : Migration complète (10j) ou progressive (4 semaines)
3. **Sprint 2** : Tournament page (si migration complète)

---

**Status** : 🟢 Prêt à exécuter  
**Dernière mise à jour** : 24 nov 2025, 12:05

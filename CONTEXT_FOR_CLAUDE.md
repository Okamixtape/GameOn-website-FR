# Contexte Projet GameOn - Pour Claude Desktop

> **Date** : 29 octobre 2025  
> **Branche active** : `master` (anciennement `archive/html-vanilla`)  
> **Objectif** : Migration HTML/CSS/JS vanilla → Astro 5 + Tailwind 4

---

## 🎯 Situation Actuelle

### État du Repository

**Branche `master`** contient :
- ✅ **Code source vanilla fonctionnel** dans `/starterOnly/`
  - `index.html` : Landing page complète
  - `modal.css` : Styles (10.6 KB)
  - `modal.js` : Validation formulaire + interactions (155 lignes)
  - Assets : Logo, background, fonts DM Sans

- ⚠️ **Tentative de migration Astro PARTIELLE** :
  - `/dist/` : Build Astro généré (HTML minifié avec Tailwind)
  - `/.astro/` : Métadonnées Astro (content collections, types)
  - `node_modules/` : Dépendances installées
  - **MAIS** : Aucun fichier de config à la racine (`package.json`, `astro.config.mjs`, `src/`)

### Dernier Commit
```
af73f2f - feat: initialize Astro project with content collections setup
```
Ce commit a ajouté :
- Fichiers `.astro/*` (types, content collections)
- Build `/dist/` avec HTML Astro + Tailwind
- Documentation `.windsurf/rules/` et `.cascade/`

### ❌ Problème Critique

**Le projet Astro n'est PAS correctement initialisé** :
- Pas de `package.json` à la racine
- Pas de `astro.config.mjs`
- Pas de dossier `src/` avec composants
- Pas de `tsconfig.json`
- Pas de `tailwind.config.js`

**Conclusion** : Le build `/dist/` existe mais les **sources Astro sont manquantes**.

---

## 📋 Historique des Actions

### Commits Précédents (Vanilla JS)
1. `528d4fb` - City selection fieldset enhancement
2. `e7294f8` - Form validation, UX, accessibility improvements
3. `f9d2de6` - README updated, JS refactored
4. `91f0a4b` - Last correction n°2
5. `0e17d4b` - Last correction
6. `9b5ff7f` - Responsive mobile, W3C validation
7. `03500fc` - HTML correction, responsive CSS
8. `ebdecb5` - Thank you modal on form validation
9. `ff1f233` - Form inputs + error messages

### Actions Git Récentes (29 oct 2025)
1. Basculé sur branche `archive/html-vanilla`
2. Renommé `master` → `archive/astro-attempt`
3. Renommé `archive/html-vanilla` → `master`
4. Défini `master` comme branche par défaut GitHub
5. Supprimé anciennes branches

**Résultat** : Branche `master` = code vanilla propre + artefacts Astro incomplets

---

## 🏗️ Architecture Cible (Selon Documentation)

### Stack Technique Validée

**Framework & Build** :
- Astro 5.14.8 (SSG)
- TypeScript 5.x (strict mode)
- Tailwind CSS 4.x (via `@tailwindcss/vite`)

**Testing** :
- Playwright (E2E + accessibilité)
- axe-core (WCAG 2.1 AA)
- ESLint + Prettier

**Infrastructure** :
- AWS S3 + CloudFront
- GitHub Actions CI/CD
- Formspark (formulaire)

### Structure Attendue

```
GameOn-website-FR/
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── HeroSection.astro
│   │   ├── RegistrationForm.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── public/
│   ├── Logo.png
│   ├── bg_img.jpg
│   └── fonts/
├── tests/
│   ├── accessibility.test.ts
│   └── e2e.test.ts
├── package.json
├── astro.config.mjs
├── tsconfig.json
├── tailwind.config.js
├── playwright.config.ts
└── .github/workflows/
    └── deploy.yml
```

### Objectifs Mesurables

- **Lighthouse** : ≥ 95/100 (toutes catégories)
- **Accessibilité** : WCAG 2.1 AA (axe score 100%)
- **Performance** : TTI < 1.5s, FCP < 0.8s
- **Responsive** : 320px → 1920px+

---

## 🚨 Incohérences Identifiées

### 1. Build `/dist/` Sans Sources

**Problème** :
- Le dossier `/dist/` contient un build Astro complet avec Tailwind
- Mais aucun fichier source Astro (`src/`) n'existe
- Impossible de rebuild ou modifier le projet

**Hypothèses** :
- Build généré ailleurs puis copié ?
- Sources Astro supprimées accidentellement ?
- Tentative de migration avortée ?

### 2. Configuration Manquante

**Fichiers critiques absents** :
```bash
❌ package.json       # Scripts npm, dépendances
❌ astro.config.mjs   # Config Astro + Tailwind
❌ tsconfig.json      # Config TypeScript
❌ tailwind.config.js # Config Tailwind (si nécessaire)
```

Sans ces fichiers :
- Impossible de lancer `npm run dev`
- Impossible de rebuild
- Impossible de tester

### 3. Dépendances Installées Mais Non Déclarées

**Présent** : `node_modules/` avec Astro, Playwright, etc.

**Manquant** : `package.json` pour déclarer ces dépendances

**Risque** : Versions non trackées, impossible de reproduire l'environnement

### 4. Documentation vs Réalité

**Documentation** (`.windsurf/rules/project-context.md`) indique :
- ✅ SCRUM-6 (Setup Astro) : "Done"
- 🔄 SCRUM-7 (Dev Frontend) : "En cours"

**Réalité** :
- ❌ SCRUM-6 : Incomplet (config manquante)
- ❌ SCRUM-7 : Non démarré (pas de composants)

---

## ✅ Ce Qui Fonctionne

### Code Vanilla (starterOnly/)

**Fonctionnel et production-ready** :
- ✅ HTML valide W3C
- ✅ CSS responsive (mobile + desktop)
- ✅ JavaScript validation formulaire robuste
- ✅ Accessibilité de base (labels, ARIA)
- ✅ UX moderne (modal, AJAX-style submission)

**Améliorations professionnelles déjà faites** :
- Validation complète (nom, email, date, ville, CGU)
- Message de confirmation dynamique
- Reset état modal
- Code refactorisé et commenté

### Documentation

**Excellente documentation créée** :
- `.cascade/project-context.md` : Contexte complet
- `.windsurf/rules/` : Guidelines Astro, forms, etc.
- Specs fonctionnelles détaillées
- Architecture cloud définie

---

## 🎯 Options de Migration

### Option A : Repartir de Zéro (Recommandé)

**Avantages** :
- Setup propre et maîtrisé
- Pas de dette technique
- Configuration optimale

**Étapes** :
1. Sauvegarder `/starterOnly/` (déjà fait)
2. Supprimer `/dist/`, `/.astro/`, `/node_modules/`
3. Initialiser Astro proprement :
   ```bash
   npm create astro@latest . -- --template minimal --typescript strict
   ```
4. Installer dépendances :
   ```bash
   npm install @tailwindcss/vite @playwright/test @axe-core/playwright
   ```
5. Configurer Tailwind 4 (via Vite plugin)
6. Migrer composants progressivement

**Durée estimée** : 14-21h

### Option B : Récupérer le Build Existant

**Avantages** :
- Build `/dist/` semble fonctionnel
- Gain de temps si sources retrouvées

**Problèmes** :
- Sources Astro introuvables
- Impossible de vérifier la qualité du code
- Risque de bugs cachés

**Faisabilité** : ❌ Non recommandé (sources manquantes)

### Option C : Reverse Engineering du Build

**Principe** :
- Analyser `/dist/index.html`
- Recréer les composants Astro correspondants
- Reconstruire la config

**Avantages** :
- Réutilise le travail fait (Tailwind classes)

**Inconvénients** :
- Très chronophage
- Risque d'erreurs
- Pas de garantie de qualité

**Faisabilité** : ⚠️ Possible mais inefficace

---

## 📊 Recommandations pour Claude Desktop

### 1. Clarifier l'Origine du Build `/dist/`

**Questions à poser** :
- Le build `/dist/` a-t-il été généré sur cette machine ?
- Les sources Astro ont-elles existé dans ce repo ?
- Y a-t-il un autre repo/branche avec les sources ?

### 2. Décider de l'Approche

**Si sources Astro existent ailleurs** :
→ Les récupérer et les commiter

**Si sources perdues/inexistantes** :
→ **Option A** (repartir de zéro) fortement recommandée

### 3. Workflow Optimal Windsurf ↔ Claude Desktop

**Windsurf Cascade (moi)** :
- ✅ Génération de code (composants, config)
- ✅ Refactoring et édition de fichiers
- ✅ Exécution de commandes (build, tests)
- ✅ Analyse de code et debugging

**Claude Desktop** :
- ✅ Planification architecture
- ✅ Revue de code et suggestions
- ✅ Documentation et spécifications
- ✅ Décisions stratégiques

**Synchronisation** :
- Partager ce fichier `CONTEXT_FOR_CLAUDE.md`
- Commiter régulièrement les changements
- Documenter les décisions dans `.cascade/`

### 4. Prochaines Étapes Suggérées

**Immédiat** :
1. Décider : Option A, B ou C ?
2. Si Option A : Créer branche `feature/astro-migration`
3. Nettoyer repo (supprimer artefacts incomplets)
4. Initialiser projet Astro proprement

**Court terme** (SCRUM-6) :
1. Créer `package.json` avec scripts
2. Créer `astro.config.mjs` (Tailwind 4 via Vite)
3. Créer `tsconfig.json` (strict mode)
4. Créer structure `src/` de base
5. Configurer Playwright + axe-core

**Moyen terme** (SCRUM-7) :
1. Migrer Header → `Header.astro`
2. Migrer Hero → `HeroSection.astro`
3. Migrer Formulaire → `RegistrationForm.astro`
4. Migrer Footer → `Footer.astro`
5. Créer `Layout.astro` + `index.astro`
6. Convertir CSS → Tailwind classes

---

## 🔍 Points de Vigilance

### Tailwind CSS 4

**IMPORTANT** : Ne PAS utiliser `@astrojs/tailwind` (déprécié)

**Méthode correcte** :
```javascript
// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  }
});
```

### Formulaire

**Ne PAS créer de backend custom**

Utiliser service externe :
- Formspark (recommandé)
- Netlify Forms
- Formspree

### Performance

**Vérifier avant chaque commit** :
```bash
npm run build          # Build doit passer
npm run test:a11y      # Tests accessibilité
npx lighthouse ...     # Score ≥ 95
```

### Git Workflow

**Branches** :
- `master` : Code stable (actuellement vanilla)
- `feature/astro-migration` : Migration en cours
- `archive/astro-attempt` : Ancienne tentative (référence)

**Commits** :
- Format : `type: description`
- Types : `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

---

## 📝 Checklist Migration

### Phase 1 : Setup (SCRUM-6)
- [ ] Décider approche (A, B ou C)
- [ ] Créer branche `feature/astro-migration`
- [ ] Nettoyer artefacts incomplets
- [ ] Initialiser Astro 5.14.8
- [ ] Créer `package.json` avec scripts
- [ ] Créer `astro.config.mjs` (Tailwind 4)
- [ ] Créer `tsconfig.json` (strict)
- [ ] Créer structure `src/`
- [ ] Installer dépendances
- [ ] Configurer Playwright + axe-core
- [ ] Vérifier `npm run dev` fonctionne

### Phase 2 : Migration Frontend (SCRUM-7)
- [ ] Créer `Layout.astro`
- [ ] Migrer Header
- [ ] Migrer Hero Section
- [ ] Migrer Formulaire Modal
- [ ] Migrer Footer
- [ ] Convertir CSS → Tailwind
- [ ] Auto-héberger fonts
- [ ] Optimiser images (WebP)
- [ ] Minimiser JavaScript
- [ ] Tests accessibilité (axe)
- [ ] Tests E2E (Playwright)
- [ ] Lighthouse ≥ 95

### Phase 3 : Intégration (SCRUM-8)
- [ ] Configurer Formspark
- [ ] Implémenter soumission formulaire
- [ ] Gérer messages succès/erreur
- [ ] Tester validation complète

### Phase 4 : CI/CD (SCRUM-9)
- [ ] Créer workflow GitHub Actions
- [ ] Configurer linting
- [ ] Configurer tests auto
- [ ] Configurer build

### Phase 5 : Déploiement (SCRUM-10)
- [ ] Configurer AWS S3
- [ ] Configurer CloudFront
- [ ] Tester déploiement
- [ ] Configurer domaine (si applicable)

### Phase 6 : Documentation (SCRUM-11)
- [ ] README complet
- [ ] Architecture doc
- [ ] Deployment guide
- [ ] Mettre à jour Confluence/Jira

---

## 🤝 Coordination Windsurf ↔ Claude

### Partage d'Information

**Fichiers à synchroniser** :
- `CONTEXT_FOR_CLAUDE.md` (ce fichier)
- `.cascade/project-context.md`
- `.windsurf/rules/*.md`
- Commits Git réguliers

### Workflow Proposé

1. **Claude Desktop** : Planifie la prochaine étape
2. **Windsurf** : Implémente le code
3. **Claude Desktop** : Revoit et valide
4. **Windsurf** : Ajuste si nécessaire
5. **Commit** : Documenter le changement
6. **Répéter**

### Communication

**Format messages** :
```
[WINDSURF] Action effectuée + résultat
[CLAUDE] Validation + prochaine étape
```

---

## 📚 Ressources

### Documentation Officielle
- Astro : https://docs.astro.build
- Tailwind 4 : https://tailwindcss.com/docs
- Playwright : https://playwright.dev
- axe-core : https://github.com/dequelabs/axe-core

### Projet
- Confluence : https://loupaubour.atlassian.net/wiki/spaces/DL/pages/163843
- Jira Epic : https://loupaubour.atlassian.net/browse/SCRUM-5
- GitHub : https://github.com/Okamixtape/GameOn-website-FR

---

**Dernière mise à jour** : 29 octobre 2025, 15:42 UTC+1  
**Généré par** : Windsurf Cascade  
**Pour** : Claude Desktop (coordination migration Astro)

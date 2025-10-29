# 🚀 GameOn Migration Astro - Suivi de Workflow

> **Mémoire partagée** : Windsurf Cascade ↔ Claude Desktop ↔ Loup  
> **Dernière mise à jour** : 29 octobre 2025, 15:58 UTC+1  
> **Branche active** : `master` → `feature/astro-migration` (à créer)

---

## 📋 PHASE 0 : PRÉPARATION [⏳ EN ATTENTE]

**Durée estimée** : 10 minutes  
**Responsable** : Loup (Git) + Cascade (nettoyage)

### Tâches

- [ ] **0.1** Créer branche `feature/astro-migration`
  ```bash
  git checkout -b feature/astro-migration
  ```

- [ ] **0.2** Nettoyer artefacts incomplets
  ```bash
  rm -rf dist/ .astro/ node_modules/
  ```

- [ ] **0.3** Vérifier .gitignore
  - Doit contenir : `dist/`, `.astro/`, `node_modules/`, `.env`

- [ ] **0.4** Commit état propre
  ```bash
  git add .
  git commit -m "chore: clean repo before Astro migration"
  ```

**Critère de succès** : Repository propre, branche créée, prêt pour init Astro

---

## 📋 PHASE 1 : SETUP ASTRO [⏳ EN ATTENTE]

**Durée estimée** : 30 minutes  
**Responsable** : Cascade (implémentation) + Loup (validation)

### 1.1 Initialisation Astro [⏳]

**Commande** :
```bash
npm create astro@latest . -- --template minimal --typescript strict --install
```

**Prompts attendus** :
- OK to proceed? → `Yes`
- Where should we create? → `.` (current directory)
- How would you like to start? → `Empty`
- Install dependencies? → `Yes`
- TypeScript? → `Yes, strict`
- Git repository? → `No` (déjà initialisé)

**Fichiers créés attendus** :
- `package.json`
- `tsconfig.json`
- `astro.config.mjs`
- `src/` directory

**Validation** :
- [ ] `package.json` existe
- [ ] `astro` dans dependencies
- [ ] `tsconfig.json` avec `"strict": true`

---

### 1.2 Installation Dépendances [⏳]

**Commandes** :
```bash
npm install -D @tailwindcss/vite@next
npm install -D @playwright/test @axe-core/playwright
npm install -D prettier prettier-plugin-astro
npm install -D eslint eslint-plugin-astro
```

**Validation** :
- [ ] `@tailwindcss/vite` dans devDependencies
- [ ] `@playwright/test` installé
- [ ] `prettier-plugin-astro` installé
- [ ] Aucune erreur npm

**Versions attendues** :
- Astro : `^5.14.8` ou `^5.15.x`
- @tailwindcss/vite : `^4.x`
- Playwright : `^1.x`

---

### 1.3 Configuration Astro [⏳]

**Fichier** : `astro.config.mjs`

**Contenu** :
```javascript
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://gameon-events.web.app',
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  },
  build: {
    inlineStylesheets: 'auto'
  }
});
```

**Points critiques** :
- ✅ Import `@tailwindcss/vite` (PAS `@astrojs/tailwind`)
- ✅ Plugin dans `vite.plugins`
- ✅ `output: 'static'` pour SSG

**Validation** :
- [ ] Fichier créé
- [ ] Syntaxe correcte (pas d'erreur ESLint)
- [ ] Import Tailwind via Vite

---

### 1.4 Structure Dossiers [⏳]

**Arborescence à créer** :
```
src/
├── layouts/
│   └── Layout.astro
├── components/
│   └── .gitkeep
├── pages/
│   └── index.astro
└── styles/
    └── global.css
```

**Commandes** :
```bash
mkdir -p src/layouts src/components src/pages src/styles
touch src/components/.gitkeep
```

**Validation** :
- [ ] Tous les dossiers créés
- [ ] `.gitkeep` dans `components/`

---

### 1.5 Styles Globaux Tailwind [⏳]

**Fichier** : `src/styles/global.css`

**Contenu** :
```css
@import "tailwindcss";
```

**Note** : Tailwind 4 = zero-config, pas besoin de `tailwind.config.js`

**Validation** :
- [ ] Fichier créé
- [ ] Import Tailwind correct

---

### 1.6 Layout de Base [⏳]

**Fichier** : `src/layouts/Layout.astro`

**Contenu** :
```astro
---
interface Props {
  title: string;
}
const { title } = Astro.props;
---
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>{title}</title>
  <link rel="stylesheet" href="/src/styles/global.css" />
</head>
<body>
  <slot />
</body>
</html>
```

**Points critiques** :
- ✅ Interface TypeScript pour Props
- ✅ `lang="fr"` (projet français)
- ✅ Import `global.css`
- ✅ `<slot />` pour contenu

**Validation** :
- [ ] Fichier créé
- [ ] Pas d'erreur TypeScript
- [ ] Props typées correctement

---

### 1.7 Page Index Minimale [⏳]

**Fichier** : `src/pages/index.astro`

**Contenu** :
```astro
---
import Layout from '../layouts/Layout.astro';
---
<Layout title="GameOn - Migration Test">
  <main class="min-h-screen flex items-center justify-center bg-zinc-900">
    <div class="text-center">
      <h1 class="text-5xl font-bold text-white mb-4">
        GameOn Events
      </h1>
      <p class="text-xl text-gray-300">
        Migration Astro en cours...
      </p>
      <div class="mt-8">
        <button class="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg transition">
          Test Tailwind
        </button>
      </div>
    </div>
  </main>
</Layout>
```

**Points critiques** :
- ✅ Import Layout relatif
- ✅ Classes Tailwind fonctionnelles
- ✅ Test visuel simple (bouton rouge)

**Validation** :
- [ ] Fichier créé
- [ ] Import Layout correct
- [ ] Classes Tailwind présentes

---

### 1.8 Configuration Prettier [⏳]

**Fichier** : `.prettierrc`

**Contenu** :
```json
{
  "plugins": ["prettier-plugin-astro"],
  "overrides": [
    {
      "files": "*.astro",
      "options": {
        "parser": "astro"
      }
    }
  ]
}
```

**Validation** :
- [ ] Fichier créé
- [ ] Plugin Astro configuré

---

### 1.9 Scripts NPM [⏳]

**Fichier** : `package.json` (modification)

**Scripts à ajouter/vérifier** :
```json
"scripts": {
  "dev": "astro dev",
  "build": "astro build",
  "preview": "astro preview",
  "check": "astro check",
  "lint": "eslint . --ext .js,.astro",
  "format": "prettier --write ."
}
```

**Validation** :
- [ ] Tous les scripts présents
- [ ] Syntaxe JSON correcte

---

### 1.10 Copie Assets [⏳]

**Commandes** :
```bash
mkdir -p public/fonts
cp starterOnly/Logo.png public/
cp starterOnly/bg_img.jpg public/
cp -r starterOnly/DM_Sans public/fonts/
```

**Fichiers attendus** :
```
public/
├── Logo.png
├── bg_img.jpg
└── fonts/
    └── DM_Sans/
        ├── DMSans-Regular.ttf
        ├── DMSans-Bold.ttf
        └── ...
```

**Validation** :
- [ ] `public/` créé
- [ ] Logo copié
- [ ] Background copié
- [ ] Fonts copiées

---

## ✅ DEFINITION OF DONE - PHASE 1

### Critères de Succès

- [ ] **1.1** `npm run dev` démarre sans erreur
- [ ] **1.2** http://localhost:4321 accessible
- [ ] **1.3** Page affiche "GameOn Events" en blanc sur fond sombre
- [ ] **1.4** Bouton "Test Tailwind" rouge visible et stylé
- [ ] **1.5** Hover bouton change couleur (rouge foncé)
- [ ] **1.6** `npm run check` : 0 erreur TypeScript
- [ ] **1.7** `npm run build` : build réussit
- [ ] **1.8** Assets présents dans `public/`

### Tests de Validation

**Test 1 : Dev Server**
```bash
npm run dev
# Attendu : Server started at http://localhost:4321
```

**Test 2 : TypeScript**
```bash
npm run check
# Attendu : 0 errors
```

**Test 3 : Build**
```bash
npm run build
# Attendu : Build successful, dist/ créé
```

**Test 4 : Visuel**
- Ouvrir http://localhost:4321
- Vérifier fond gris foncé
- Vérifier texte blanc centré
- Vérifier bouton rouge
- Tester hover bouton

---

## 📊 MÉTRIQUES & SUIVI

### Temps Réel

| Tâche | Statut | Durée | Problèmes |
|-------|--------|-------|-----------|
| 0.1 Branche | ⏳ | - | - |
| 0.2 Nettoyage | ⏳ | - | - |
| 0.3 .gitignore | ⏳ | - | - |
| 0.4 Commit | ⏳ | - | - |
| 1.1 Init Astro | ⏳ | - | - |
| 1.2 Dépendances | ⏳ | - | - |
| 1.3 Config Astro | ⏳ | - | - |
| 1.4 Structure | ⏳ | - | - |
| 1.5 Global CSS | ⏳ | - | - |
| 1.6 Layout | ⏳ | - | - |
| 1.7 Index | ⏳ | - | - |
| 1.8 Prettier | ⏳ | - | - |
| 1.9 Scripts | ⏳ | - | - |
| 1.10 Assets | ⏳ | - | - |

**Légende** :
- ⏳ En attente
- 🔄 En cours
- ✅ Terminé
- ❌ Bloqué
- ⚠️ Problème mineur

---

## 🚨 JOURNAL DES PROBLÈMES

### Format de Report

```markdown
#### [TIMESTAMP] Problème #X

**Tâche** : X.X  
**Type** : Erreur / Warning / Blocage  
**Gravité** : P0 (critique) / P1 (majeur) / P2 (mineur)

**Description** :
[Message d'erreur exact ou description]

**Tentatives** :
- [Ce qui a été essayé]

**Résolution** :
- [Solution appliquée ou "En attente guidance"]

**Impact** :
- [Temps perdu, tâches bloquées]
```

---

## 📝 NOTES DE SESSION

### Session 1 : [DATE À REMPLIR]

**Objectif** : Phase 0 + Phase 1  
**Participants** : Loup + Cascade

**Actions** :
- [ ] Phase 0 complétée
- [ ] Phase 1.1 à 1.10 complétées
- [ ] Tests validation OK
- [ ] Screenshot pris
- [ ] Code review envoyé à Claude

**Décisions** :
- [À remplir pendant session]

**Blocages** :
- [À remplir si nécessaire]

**Next Steps** :
- [Préparation Phase 2]

---

## 🎯 CHECKLIST COORDINATION

### Avant Phase 1

- [ ] **Claude Chat** : Specs Phase 1 validées
- [ ] **Loup** : Specs copiées dans Cascade
- [ ] **Cascade** : Confirmation compréhension

### Pendant Phase 1

- [ ] **Cascade** : Exécution autonome tâches 1.1 à 1.10
- [ ] **Loup** : Monitoring sans micro-management
- [ ] **Cascade** : Report immédiat si problème

### Après Phase 1

- [ ] **Loup** : Test visuel http://localhost:4321
- [ ] **Loup** : Screenshot pris
- [ ] **Cascade** : `package.json` copié pour revue
- [ ] **Loup** : Envoi à Claude Chat pour revue
- [ ] **Claude Chat** : Feedback structuré
- [ ] **Cascade** : Application corrections si nécessaire
- [ ] **Loup** : Validation finale
- [ ] **Loup** : Commit Phase 1
  ```bash
  git add .
  git commit -m "feat(setup): complete Astro 5 + Tailwind 4 initialization"
  ```

---

## 🔄 FORMATS COMMUNICATION RAPIDE

### [WINDSURF BLOCAGE]
```
Phase : X.X
Erreur : [message exact]
Tentatives : [ce qui a été essayé]
Besoin : Guidance Claude Chat
```

### [WINDSURF OK]
```
Phase X.X complétée ✅
Durée : Xmin
Prochaine tâche : X.X
```

### [WINDSURF PHASE COMPLETE]
```
Phase X terminée ✅
Screenshot : [disponible]
Code review ready
Tests : [résultats]
```

### [CLAUDE URGENT]
```
Bug critique : [description]
Impact : [utilisateur/performance/sécurité]
Priorité : P0/P1/P2
Action requise : [immédiate/planifiée]
```

---

## 📚 RESSOURCES RAPIDES

### Commandes Fréquentes

```bash
# Dev server
npm run dev

# TypeScript check
npm run check

# Build
npm run build

# Preview build
npm run preview

# Format code
npm run format

# Lint
npm run lint
```

### Ports

- Dev server : http://localhost:4321
- Preview : http://localhost:4322 (généralement)

### Documentation

- Astro : https://docs.astro.build
- Tailwind 4 : https://tailwindcss.com/docs
- Playwright : https://playwright.dev

---

**Prochaine mise à jour** : Après Phase 1 complétée  
**Maintenu par** : Cascade (auto-update) + Loup (validation)

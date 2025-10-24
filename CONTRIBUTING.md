# Guide de Contribution - GameOn

Merci de votre intérêt pour contribuer à GameOn ! 🎮

---

## 📋 Table des Matières

1. [Code de Conduite](#code-de-conduite)
2. [Comment Contribuer](#comment-contribuer)
3. [Configuration Environnement](#configuration-environnement)
4. [Workflow Git](#workflow-git)
5. [Standards de Code](#standards-de-code)
6. [Commits Conventionnels](#commits-conventionnels)
7. [Pull Requests](#pull-requests)
8. [Tests](#tests)

---

## 📜 Code de Conduite

Ce projet adhère à un code de conduite basé sur le respect et l'inclusion. En participant, vous acceptez de respecter ces valeurs.

---

## 🤝 Comment Contribuer

### Types de Contributions

- 🐛 **Bug fixes** : Corrections de bugs
- ✨ **Features** : Nouvelles fonctionnalités
- 📝 **Documentation** : Améliorations documentation
- 🎨 **Design** : Améliorations UI/UX
- ♿ **Accessibilité** : Améliorations a11y
- ⚡ **Performance** : Optimisations

### Avant de Commencer

1. **Vérifier les issues existantes** : [GitHub Issues](https://github.com/Okamixtape/GameOn-website-FR/issues)
2. **Créer une issue** si nécessaire (feature request, bug report)
3. **Discuter** de l'approche avant les grosses modifications

---

## 🔧 Configuration Environnement

### Prérequis

- Node.js ≥ 18.x
- npm ≥ 9.x
- Git

### Installation

```bash
# 1. Fork le repo sur GitHub

# 2. Cloner votre fork
git clone https://github.com/VOTRE_USERNAME/GameOn-website-FR.git
cd GameOn-website-FR

# 3. Ajouter upstream
git remote add upstream https://github.com/Okamixtape/GameOn-website-FR.git

# 4. Installer dépendances
npm install

# 5. Lancer dev server
npm run dev
```

### Vérification Setup

```bash
# Build
npm run build

# Tests
npm run test:a11y

# Lint
npm run lint
```

Tout doit passer ✅

---

## 🌿 Workflow Git

### 1. Créer une Branche Feature

```bash
# Mettre à jour main
git checkout main
git pull upstream main

# Créer branche feature
git checkout -b feature/nom-feature
# ou
git checkout -b fix/nom-bug
```

**Convention nommage branches** :
- `feature/` : Nouvelles fonctionnalités
- `fix/` : Corrections bugs
- `docs/` : Documentation
- `refactor/` : Refactoring
- `test/` : Tests
- `chore/` : Maintenance

### 2. Développer

```bash
# Faire vos modifications...

# Vérifier régulièrement
npm run dev       # Visuel OK ?
npm run lint      # Code propre ?
npm run test:a11y # Accessibilité OK ?
```

### 3. Commiter

```bash
git add .
git commit -m "feat: description de la feature"
```

Voir section [Commits Conventionnels](#commits-conventionnels)

### 4. Pousser

```bash
git push origin feature/nom-feature
```

### 5. Créer Pull Request

Sur GitHub → "New Pull Request"

---

## 💻 Standards de Code

### TypeScript

- Mode strict activé
- Typage explicite pour fonctions publiques
- Éviter `any` (utiliser `unknown` si nécessaire)

### Astro Components

```astro
---
// Script (TypeScript)
interface Props {
  title: string;
  description?: string;
}

const { title, description = '' } = Astro.props;
---

<!-- Template (HTML) -->
<div class="component">
  <h2>{title}</h2>
  {description && <p>{description}</p>}
</div>

<style>
  /* Styles scopés (optionnel si Tailwind suffit) */
</style>
```

### Tailwind CSS

- Utiliser classes utility Tailwind autant que possible
- Éviter CSS custom sauf nécessaire
- Mobile-first : `sm:`, `md:`, `lg:`
- Grouper classes logiquement

```html
<!-- ✅ Bon -->
<button class="rounded-lg bg-primary px-4 py-2 font-medium text-white transition hover:bg-primary-dark">
  Click me
</button>

<!-- ❌ Éviter CSS custom pour ça -->
<button class="custom-button">Click me</button>
<style>.custom-button { ... }</style>
```

### Accessibilité

**Checklist obligatoire** :
- [ ] Labels formulaire explicites
- [ ] Navigation clavier fonctionnelle
- [ ] Contraste couleurs ≥ 4.5:1
- [ ] ARIA appropriés si nécessaire
- [ ] Images ont attribut `alt`
- [ ] Tests axe passent (`npm run test:a11y`)

### Performance

**Checklist obligatoire** :
- [ ] Images optimisées (WebP + lazy loading)
- [ ] Fonts préchargées
- [ ] Zero JavaScript inutile
- [ ] Build réussit sans warnings
- [ ] Lighthouse ≥ 90/100 (local)

---

## 📝 Commits Conventionnels

**Format** : `<type>(<scope>): <description>`

### Types

| Type | Description | Exemple |
|------|-------------|----------|
| `feat` | Nouvelle fonctionnalité | `feat(form): add email validation` |
| `fix` | Correction bug | `fix(header): mobile menu overflow` |
| `docs` | Documentation | `docs(readme): update installation` |
| `style` | Formatting (pas de changement code) | `style: format with prettier` |
| `refactor` | Refactoring | `refactor(form): extract validation logic` |
| `test` | Tests | `test(a11y): add form accessibility tests` |
| `chore` | Maintenance | `chore(deps): update astro to 5.14.8` |
| `perf` | Performance | `perf(images): implement webp format` |

### Scope (optionnel)

- `header`, `footer`, `form`, `hero`, etc.
- `deps` pour dépendances
- `config` pour configuration

### Description

- Impératif présent ("add" pas "added")
- Minuscules (pas de majuscule initiale)
- Pas de point final
- Max 72 caractères

### Exemples

```bash
# ✅ Bons commits
git commit -m "feat(form): add real-time validation"
git commit -m "fix(hero): correct background image alignment"
git commit -m "docs: update contribution guidelines"
git commit -m "test(a11y): add keyboard navigation tests"

# ❌ Mauvais commits
git commit -m "fixed stuff"
git commit -m "WIP"
git commit -m "Updated files"
```

---

## 🔍 Pull Requests

### Avant de Soumettre

**Checklist** :
- [ ] Code lint sans erreurs (`npm run lint`)
- [ ] Tests passent (`npm run test:a11y`)
- [ ] Build réussit (`npm run build`)
- [ ] Commits suivent convention
- [ ] Branche à jour avec `main`

### Template PR

```markdown
## 🎯 Objectif

[Description claire de ce que fait la PR]

## 📋 Type de changement

- [ ] Bug fix
- [ ] Nouvelle feature
- [ ] Breaking change
- [ ] Documentation

## ✅ Checklist

- [ ] Mon code suit les standards du projet
- [ ] J'ai testé mes changements
- [ ] J'ai mis à jour la documentation si nécessaire
- [ ] Tests accessibilité passent
- [ ] Build production réussit

## 📸 Screenshots (si applicable)

[Ajouter captures d'écran avant/après]

## 🔗 Issue liée

Fixes #[numéro issue]
```

### Review Process

1. **Automated checks** : GitHub Actions (build, tests, lint)
2. **Code review** : Mainteneur reviendra sous 48h
3. **Feedback** : Appliquer changements demandés
4. **Merge** : Mainteneur merge si tout OK ✅

---

## 🧪 Tests

### Tests Accessibilité (Obligatoires)

```bash
# Lancer tous les tests a11y
npm run test:a11y

# Tests spécifiques
npx playwright test tests/accessibility.test.ts
```

**Tests automatiques** :
- WCAG 2.1 A
- WCAG 2.1 AA
- Contraste couleurs
- Labels formulaire
- Navigation clavier (basique)

**Tests manuels recommandés** :
- Navigation complète au clavier (Tab, Enter, Escape)
- Lecteur d'écran (NVDA/VoiceOver)
- Zoom 200%

### Tests Performance (Recommandés)

```bash
# Lighthouse local
npm run build
npm run preview
# Dans autre terminal :
npx lighthouse http://localhost:4321 --view
```

**Cibles** :
- Performance ≥ 90/100
- Accessibility ≥ 95/100
- Best Practices ≥ 95/100
- SEO ≥ 90/100

---

## 🆘 Besoin d'Aide ?

- **Questions** : GitHub Discussions
- **Bugs** : GitHub Issues
- **Documentation** : `README.md` + `/docs`

---

## 🎉 Merci !

Vos contributions rendent ce projet meilleur ! 🚀

---

*Dernière mise à jour : Octobre 23, 2025*
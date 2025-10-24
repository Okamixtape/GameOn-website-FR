# Tests GameOn

Tests automatisés pour garantir la qualité, l'accessibilité et les performances de GameOn.

---

## 🧪 Types de Tests

### Tests d'Accessibilité (WCAG 2.1 AA)
- **Fichier** : `accessibility.test.ts`
- **Outil** : axe-core via Playwright
- **Couverture** :
  - ✅ WCAG 2.0 Level A & AA
  - ✅ WCAG 2.1 Level A & AA
  - ✅ Contraste couleurs (4.5:1)
  - ✅ Navigation clavier
  - ✅ Labels formulaires
  - ✅ Images alt
  - ✅ Landmarks ARIA
  - ✅ Hiérarchie titres

### Tests E2E (End-to-End)
- **Fichier** : `accessibility.test.ts` (section E2E)
- **Couverture** :
  - ✅ Chargement page
  - ✅ Navigation fonctionnelle
  - ✅ Responsive (mobile, tablet, desktop)

---

## 🚀 Commandes

### Lancer tous les tests
```bash
npm run test
```

### Tests accessibilité uniquement
```bash
npm run test:a11y
```

### Mode interactif (UI)
```bash
npm run test:ui
```

### Mode headed (voir le navigateur)
```bash
npm run test:headed
```

### Voir le rapport HTML
```bash
npm run test:report
```

### Tester un navigateur spécifique
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

---

## 📊 Résultats Attendus

### ✅ Tests Passants (Cible)
- **Accessibilité** : 0 violations WCAG 2.1 AA
- **Navigation clavier** : Tous éléments accessibles
- **Contraste** : ≥ 4.5:1 pour texte normal
- **Responsive** : Fonctionnel 320px → 1920px+

### ❌ Tests Échouants (Avant Composants)
**Normal** : Les tests échoueront tant que les composants ne sont pas créés.

Erreurs attendues :
```
✗ Page d'accueil - Aucune violation WCAG 2.1 AA
  → Raison : Pas de contenu à tester
```

---

## 🏗️ Workflow de Développement

### 1. Créer un Composant
```bash
# Exemple : Header.astro
```

### 2. Lancer les Tests
```bash
npm run test:a11y
```

### 3. Corriger les Violations
- Lire le rapport : `npm run test:report`
- Identifier les violations axe-core
- Corriger le composant
- Re-tester

### 4. Valider
```bash
npm run test:a11y
# ✅ Tous les tests passent
```

---

## 🔍 Debugging

### Voir les tests en action
```bash
npm run test:headed
```

### Mode debug interactif
```bash
npx playwright test --debug
```

### Inspecter un test spécifique
```bash
npx playwright test tests/accessibility.test.ts:10 --debug
```

---

## 📚 Ressources

- **Playwright Docs** : [playwright.dev](https://playwright.dev)
- **axe-core** : [github.com/dequelabs/axe-core](https://github.com/dequelabs/axe-core)
- **WCAG 2.1** : [w3.org/WAI/WCAG21/quickref](https://www.w3.org/WAI/WCAG21/quickref/)

---

## 🎯 Prochaines Étapes

1. ✅ Tests configurés
2. ⏳ Créer Layout.astro
3. ⏳ Créer Header.astro
4. ⏳ Lancer tests → Valider accessibilité
5. ⏳ Itérer sur composants restants

---

*Dernière mise à jour : Octobre 23, 2025*

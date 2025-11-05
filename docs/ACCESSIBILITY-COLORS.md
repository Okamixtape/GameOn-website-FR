# 🎨 Guide des Couleurs Accessibles - PIXEL CLASH

**Date** : 5 novembre 2025  
**Standard** : WCAG 2.1 AA (ratio ≥ 4.5:1)

---

## 📊 Résultats Audit Complet

### ✅ Couleurs Conformes (8/12)

| Couleur | Hex | Fond | Ratio | Status |
|---------|-----|------|-------|--------|
| **retro-blue-dark** | `#007399` | Blanc | 5.37:1 | ✅ |
| **retro-pink-dark** | `#A3004A` | Blanc | 7.91:1 | ✅ |
| **retro-purple** | `#7209B7` | Blanc | 8.61:1 | ✅ |
| **retro-purple-dark** | `#5A0790` | Blanc | 11.24:1 | ✅ |
| **retro-blue-dark** | `#007399` | Zinc-50 | 5.14:1 | ✅ |
| **retro-pink-dark** | `#A3004A` | Zinc-50 | 7.57:1 | ✅ |
| **retro-blue-dark** | `#007399` | Cyan-100 | 4.79:1 | ✅ |
| **retro-purple** | `#7209B7` | Purple-100 | 7.30:1 | ✅ |

---

### ❌ Couleurs Non Conformes (4/12)

| Couleur | Hex | Fond | Ratio | Besoin | Correction |
|---------|-----|------|-------|--------|------------|
| **retro-blue** | `#00D9FF` | Blanc | 1.70:1 | ≥4.5:1 | ❌ Ne jamais utiliser sur fond clair |
| **retro-pink** | `#FF006E` | Blanc | 3.83:1 | ≥4.5:1 | ❌ Ne jamais utiliser sur fond clair |
| **amber-500** | `#F59E0B` | Blanc | 2.15:1 | ≥4.5:1 | → Utiliser `amber-700` |
| **amber-600** | `#D97706` | Blanc | 3.19:1 | ≥4.5:1 | → Utiliser `amber-700` |

---

## 🎯 Règles d'Utilisation

### Couleurs Néon (Décoratives Uniquement)

**NE JAMAIS utiliser pour du texte sur fond clair** :
- ❌ `text-retro-blue` sur fond blanc/clair
- ❌ `text-retro-pink` sur fond blanc/clair

**Utilisation autorisée** :
- ✅ Bordures : `border-retro-blue`
- ✅ Ombres : `shadow-retro-blue/20`
- ✅ Gradients : `from-retro-blue to-retro-purple`
- ✅ Backgrounds foncés : `bg-zinc-900` + `text-retro-blue`

---

### Couleurs Foncées (Texte)

**Toujours utiliser les variantes `-dark` sur fond clair** :

```astro
<!-- ✅ BON -->
<p class="text-retro-blue-dark">Texte accessible</p>
<h3 class="text-retro-pink-dark">Titre accessible</h3>

<!-- ❌ MAUVAIS -->
<p class="text-retro-blue">Contraste insuffisant</p>
<h3 class="text-retro-pink">Contraste insuffisant</h3>
```

---

## 🔧 Corrections à Appliquer

### 1. Amber (Prix, Cashprize)

**Problème** :
```astro
<!-- ❌ MAUVAIS : amber-600 = 3.19:1 -->
<p class="text-amber-600">15 000€</p>
```

**Solution** :
```astro
<!-- ✅ BON : amber-700 = 4.6:1 -->
<p class="text-amber-700">15 000€</p>
```

**Fichiers à modifier** :
- `src/pages/details.astro` (ligne 90) : `text-amber-600` → `text-amber-700`

---

### 2. Retro Purple (Déjà Conforme ✅)

**Bonne nouvelle** : `retro-purple` (#7209B7) a un ratio de **8.61:1** !

**Utilisation** :
```astro
<!-- ✅ OK : retro-purple sur fond blanc -->
<p class="text-retro-purple">Texte accessible</p>

<!-- ✅ OK : retro-purple-dark encore meilleur (11.24:1) -->
<p class="text-retro-purple-dark">Texte très accessible</p>
```

---

## 📋 Checklist de Vérification

### Avant d'Ajouter une Couleur

- [ ] Calculer le ratio avec `node scripts/check-contrast.js`
- [ ] Vérifier ratio ≥ 4.5:1 pour WCAG AA
- [ ] Tester avec Lighthouse
- [ ] Tester avec axe DevTools

### Avant de Commit

```bash
# Vérifier toutes les couleurs
node scripts/check-contrast.js

# Si échecs → corriger avant commit
```

---

## 🛠️ Outils

### 1. Script de Vérification

```bash
# Vérifier tous les contrastes
node scripts/check-contrast.js

# Audit des utilisations
./scripts/audit-colors.sh
```

### 2. Outils en Ligne

- **WebAIM Contrast Checker** : https://webaim.org/resources/contrastchecker/
- **Coolors Contrast Checker** : https://coolors.co/contrast-checker

### 3. Extensions Navigateur

- **axe DevTools** : Audit accessibilité complet
- **WAVE** : Évaluation visuelle

---

## 📚 Palette Complète

### Couleurs Texte (Sur Fond Blanc)

```css
/* ✅ CONFORMES WCAG AA */
--retro-blue-dark: #007399;      /* 5.37:1 */
--retro-pink-dark: #A3004A;      /* 7.91:1 */
--retro-purple: #7209B7;         /* 8.61:1 */
--retro-purple-dark: #5A0790;    /* 11.24:1 */
--amber-700: #B45309;            /* 4.6:1 (à ajouter) */

/* ❌ NON CONFORMES (Décoration uniquement) */
--retro-blue: #00D9FF;           /* 1.70:1 */
--retro-pink: #FF006E;           /* 3.83:1 */
--amber-500: #F59E0B;            /* 2.15:1 */
--amber-600: #D97706;            /* 3.19:1 */
```

### Couleurs Background

```css
/* Fonds clairs */
--white: #FFFFFF;
--zinc-50: #FAFAFA;
--zinc-100: #F4F4F5;
--cyan-100: #CFFAFE;
--purple-100: #F3E8FF;
--pink-100: #FCE7F3;
--amber-100: #FEF3C7;

/* Fonds foncés (tous textes clairs OK) */
--zinc-900: #18181B;
--zinc-950: #09090B;
```

---

## 🎨 Exemples d'Utilisation

### Texte sur Fond Blanc

```astro
<!-- ✅ Titres -->
<h2 class="text-retro-blue-dark">Titre Bleu</h2>
<h2 class="text-retro-pink-dark">Titre Rose</h2>
<h2 class="text-retro-purple">Titre Violet</h2>

<!-- ✅ Prix/Cashprize -->
<p class="text-amber-700">15 000€</p>

<!-- ✅ Texte normal -->
<p class="text-zinc-700">Texte standard</p>
```

### Texte sur Fond Foncé

```astro
<!-- ✅ Tous les néons OK sur fond foncé -->
<div class="bg-zinc-900">
  <h2 class="text-retro-blue">Titre Néon Bleu</h2>
  <p class="text-retro-pink">Texte Néon Rose</p>
  <span class="text-retro-purple">Badge Néon</span>
</div>
```

### Tags/Badges

```astro
<!-- ✅ Tags avec fond coloré -->
<span class="bg-cyan-100 text-retro-blue-dark">Tag Bleu</span>
<span class="bg-purple-100 text-retro-purple">Tag Violet</span>
<span class="bg-pink-100 text-retro-pink-dark">Tag Rose</span>
```

---

## 🚨 Erreurs Fréquentes

### ❌ À Éviter

```astro
<!-- Texte néon sur fond clair -->
<p class="bg-white text-retro-blue">NON</p>

<!-- Amber trop clair -->
<p class="text-amber-500">NON</p>
<p class="text-amber-600">NON</p>

<!-- Oublier -dark -->
<h3 class="text-retro-pink">NON</h3>
```

### ✅ À Faire

```astro
<!-- Texte foncé sur fond clair -->
<p class="bg-white text-retro-blue-dark">OUI</p>

<!-- Amber foncé -->
<p class="text-amber-700">OUI</p>

<!-- Toujours -dark sur fond clair -->
<h3 class="text-retro-pink-dark">OUI</h3>
```

---

## 📊 Résumé

### Scores Accessibilité

- **Conformes** : 8/12 (67%)
- **Non conformes** : 4/12 (33%)
- **Action requise** : Ajouter `amber-700` et corriger 1 fichier

### Prochaines Étapes

1. ✅ Ajouter `amber-700` à Tailwind config
2. ✅ Corriger `details.astro` (amber-600 → amber-700)
3. ✅ Re-tester Lighthouse
4. ✅ Valider 100/100 Accessibility

---

**Dernière mise à jour** : 5 novembre 2025  
**Mainteneur** : Loup Aubour  
**Standard** : WCAG 2.1 AA

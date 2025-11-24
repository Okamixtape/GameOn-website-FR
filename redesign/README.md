# 🎨 Composants Redesign - PIXEL CLASH Championship

## 📂 Structure

```
/components/redesign/
├── layout/
│   └── Header.tsx          ← Header avec navigation Synthwave
├── home/
│   ├── Hero.tsx           (à créer)
│   ├── Features.tsx       (à créer)
│   └── ...
└── README.md              ← Ce fichier
```

---

## 🚀 Header Component

### Localisation
`/components/redesign/layout/Header.tsx`

### Description
Header fixed avec style Synthwave/Retro-Gaming pour le redesign PIXEL CLASH Championship.

### Features
- ✅ **Style 100% conforme** au header original (App.tsx)
- ✅ **Navigation par liens** (`<a href>`) compatible Astro
- ✅ **Active state detection** basée sur l'URL
- ✅ **Mobile menu fonctionnel** avec Shadcn Sheet
- ✅ **CTA "S'inscrire"** avec gradient et icon
- ✅ **Responsive design** desktop + mobile

### Props

```typescript
interface HeaderProps {
  currentPath?: string;  // URL actuelle (ex: "/tournament")
}
```

### Utilisation dans React

```tsx
import Header from './components/redesign/layout/Header';

function MyPage() {
  const currentPath = window.location.pathname;
  
  return (
    <div>
      <Header currentPath={currentPath} />
      {/* Contenu */}
    </div>
  );
}
```

### Utilisation dans Astro

```astro
---
// src/pages/index-redesign.astro
import Header from '../components/redesign/layout/Header';
---

<html>
  <head>
    <title>PIXEL CLASH Championship 2026</title>
  </head>
  <body>
    <Header client:load currentPath={Astro.url.pathname} />
    
    <!-- Contenu de la page -->
    <main class="pt-20">
      <!-- pt-20 pour compenser le header fixed -->
    </main>
  </body>
</html>
```

### Routes Configurées

| Label | Path | Active Shadow |
|-------|------|---------------|
| Accueil | `/` | cyan |
| Le Tournoi | `/tournament` | pink |
| Notre Histoire | `/about` | purple |
| Blog | `/blog` | cyan |

### Modification des Routes

Pour changer les routes, éditer le tableau `navItems` dans `Header.tsx` :

```tsx
const navItems = [
  { label: 'Accueil', path: '/', shadowColor: 'shadow-cyan-500/50' },
  { label: 'Le Tournoi', path: '/tournament', shadowColor: 'shadow-pink-500/50' },
  // ...
];
```

---

## 🎨 Style System

### Couleurs
- **Cyan primaire :** `#00f3ff`
- **Magenta primaire :** `#ff00ff`
- **Background :** `#0a0a1f`

### Effects
- **Glassmorphism :** `bg-[#0a0a1f]/80 backdrop-blur-md`
- **Gradients :** `from-[#00f3ff] to-[#ff00ff]`
- **Shadows :** `shadow-cyan-500/50`, `shadow-pink-500/50`, `shadow-purple-500/50`

---

## 📱 Responsive Breakpoints

- **Mobile (<768px) :** 
  - Navigation cachée
  - Menu drawer avec Sheet
  - CTA caché

- **Desktop (≥768px) :**
  - Navigation visible
  - Menu drawer caché
  - CTA visible

---

## ⚠️ IMPORTANT

### Isolation Garantie
Ce composant Header **N'AFFECTE PAS** le header original dans `/App.tsx`.

Les deux headers coexistent :
- **App.tsx** : Header avec state React pour SPA
- **Header.tsx** : Header avec liens Astro pour SSR

### Dépendances
- `lucide-react` : Icons (ArrowRight, Menu, X)
- `@/components/ui/button` : Shadcn Button
- `@/components/ui/sheet` : Shadcn Sheet (mobile menu)

---

## 🧪 Test

Pour tester le Header :

```bash
# Ouvrir RedesignExample.tsx dans le navigateur
# Le Header apparaîtra en haut avec :
# - Logo PIXEL CLASH cliquable
# - 4 liens de navigation
# - CTA "S'inscrire"
# - Mobile menu fonctionnel (réduire la fenêtre)
```

---

## 🔧 Customisation

### Changer la hauteur du Header
```tsx
// Modifier dans Header.tsx
<div className="container mx-auto px-4 py-4">  {/* py-4 = hauteur */}
```

### Changer l'opacité du background
```tsx
// Modifier dans Header.tsx
<header className="... bg-[#0a0a1f]/80 ...">  {/* /80 = opacité */}
```

### Ajouter un lien de navigation
```tsx
// Ajouter dans navItems
const navItems = [
  // ... existants
  { label: 'Contact', path: '/contact', shadowColor: 'shadow-yellow-500/50' },
];
```

---

## 📚 Prochains Composants

À créer dans `/components/redesign/` :
- [ ] `home/Hero.tsx`
- [ ] `home/Features.tsx`
- [ ] `home/GamesShowcase.tsx`
- [ ] `home/CommunityStats.tsx`
- [ ] `home/FinalCTA.tsx`
- [ ] `layout/Footer.tsx`
- [ ] `layout/GridBackground.tsx`

---

## 🎯 Migration Astro

Ce Header est prêt pour la migration Astro Islands Architecture :
- ✅ Hydratation client-side (`client:load`)
- ✅ Props SSR-friendly
- ✅ Navigation par liens (pas de state)
- ✅ Performance optimisée

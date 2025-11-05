# PIXEL CLASH - Brand Guidelines

## 📝 Nom de Marque

### Règle Officielle
**Toujours écrire : `PIXEL CLASH`**
- ✅ Tout en majuscules
- ✅ Avec espace entre les deux mots
- ✅ Jamais de trait d'union

### Exemples Corrects
```
✅ PIXEL CLASH Championship 2025
✅ PIXEL CLASH Arena Paris
✅ Inscription PIXEL CLASH
✅ À Propos de PIXEL CLASH
✅ © 2025 PIXEL CLASH. Tous droits réservés.
```

### Exemples Incorrects
```
❌ Pixel Clash (title case)
❌ pixel clash (lowercase)
❌ PixelClash (camelCase)
❌ PIXELCLASH (sans espace)
❌ Pixel-Clash (avec trait d'union)
```

### Exception : Email & Domaines
Pour les emails et noms de domaine (contraintes techniques) :
```
✅ contact@pixelclash.fr (lowercase, sans espace)
✅ pixelclash.netlify.app (lowercase, sans espace)
```

---

## 🎨 Palette de Couleurs

### Couleurs Principales
- **Cyan Retro** : `#00D9FF` (`retro-blue`)
- **Violet Retro** : `#7209B7` (`retro-purple`)
- **Rose Néon** : `#FF006E` (`retro-pink`)

### Couleurs Secondaires
- **Amber Gaming** : `#F59E0B` (`gaming-amber`)
- **Blanc** : `#FFFFFF`
- **Noir/Gris foncé** : `#18181B` (zinc-900)

### Gradients
```css
/* Header/Footer */
background: linear-gradient(to right, #7209B7, #6b21a8, #1e3a8a);

/* CTA Buttons */
background: linear-gradient(to right, #00D9FF, #7209B7);
hover: linear-gradient(to right, #FF006E, #00D9FF);
```

---

## 🔤 Typographie

### Fonts
- **Titres Gaming** : Rajdhani (600, 700)
  - Utiliser pour : H1, H2 gaming, CTA, badges
  - Classe Tailwind : `font-gaming`
  
- **Corps de Texte** : DM Sans (400, 500, 700)
  - Utiliser pour : Paragraphes, descriptions, formulaires
  - Classe Tailwind : `font-sans`

### Hiérarchie
```
H1 (Hero) : font-gaming text-4xl md:text-5xl uppercase
H2 (Sections) : font-gaming text-3xl uppercase
H3 (Sous-sections) : font-bold text-xl
Body : text-base text-zinc-700
```

---

## 🖼️ Logo

### Fichiers
- **Header** : `/public/Logo.png` (400x100px)
- **Favicon** : `/public/favicon.png` (32x32px)

### Usage
```html
<!-- Header -->
<img 
  src="/Logo.png" 
  alt="Logo PIXEL CLASH - Retro Gaming Championship"
  width="400"
  height="100"
/>

<!-- Favicon -->
<link rel="icon" type="image/png" href="/favicon.png" />
```

### Règles
- ✅ Toujours sur fond sombre (header violet/bleu)
- ✅ Jamais déformer (respecter ratio 4:1)
- ✅ Espace minimum autour : 20px

---

## 🎯 Ton & Voice

### Personnalité de Marque
- **Nostalgique** : Célèbre l'âge d'or du gaming
- **Passionné** : Communauté soudée de gamers
- **Professionnel** : Organisation de qualité
- **Inclusif** : Ouvert à tous les niveaux

### Vocabulaire
**À utiliser** :
- Retro gaming, classiques, arcade
- Nostalgie, racines du jeu vidéo
- Compétition, championnat, tournoi
- Communauté, passionnés

**À éviter** :
- Termes trop techniques
- Jargon élitiste
- Anglicismes excessifs

---

## 📱 Composants UI

### Boutons CTA
```html
<!-- Style principal -->
<button class="bg-gradient-to-r from-retro-blue to-retro-purple 
               hover:from-retro-pink hover:to-retro-blue 
               text-white font-bold px-8 py-4 rounded-lg 
               shadow-lg shadow-retro-blue/50 
               hover:shadow-xl hover:shadow-retro-pink/70 
               hover:scale-105 transition-all duration-300">
  Je m'inscris
</button>
```

### Cards
```html
<!-- Card avec hover -->
<div class="bg-white border-2 border-zinc-200 rounded-xl p-8 
            hover:border-retro-blue hover:-translate-y-2 
            hover:shadow-2xl hover:shadow-retro-blue/20 
            transition-all duration-300">
  <!-- Contenu -->
</div>
```

### Badges
```html
<!-- Badge urgence -->
<div class="bg-retro-pink text-white font-bold px-4 py-2 
            rounded-lg animate-pulse-slow shadow-lg shadow-retro-pink/50">
  Places limitées !
</div>
```

---

## ✅ Checklist Qualité

### Avant Chaque Commit
- [ ] Nom "PIXEL CLASH" en majuscules partout
- [ ] Palette de couleurs respectée
- [ ] Typographie cohérente (Rajdhani + DM Sans)
- [ ] Accessibilité WCAG 2.1 AA
- [ ] Build Astro sans erreurs
- [ ] Tests Lighthouse ≥ 95

### Avant Déploiement
- [ ] README.md à jour
- [ ] Bannière portfolio présente
- [ ] Mentions légales complètes
- [ ] Formulaire fonctionnel
- [ ] Images optimisées

---

**Dernière mise à jour** : Novembre 2025  
**Mainteneur** : Loup Aubour  
**Contact** : contact@pixelclash.fr

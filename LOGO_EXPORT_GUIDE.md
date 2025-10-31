# 🎨 Guide Export Logo PIXEL CLASH

## 📦 Fichiers à Créer

1. **Logo Header** : `Logo.png` (400x100px)
2. **Favicon** : `favicon.svg` (256x256px)

---

## 🚀 Méthode 1 : Screenshot Chrome DevTools (RECOMMANDÉ)

### Étape par Étape

1. **Ouvrir le fichier**
   ```bash
   # Double-cliquer sur logo-generator.html
   # Ou ouvrir dans Chrome
   ```

2. **Screenshot Logo Header**
   - Clic droit sur "PIXEL CLASH" (grand logo)
   - "Inspecter l'élément"
   - Dans DevTools, clic droit sur `<div class="export-container" id="logo-header">`
   - "Capture node screenshot"
   - Sauvegarder : `Logo.png`

3. **Screenshot Favicon**
   - Même process sur le logo "PC"
   - Sauvegarder : `favicon-temp.png`

4. **Placer les fichiers**
   ```bash
   # Copier dans /public/
   mv ~/Downloads/Logo.png public/Logo.png
   mv ~/Downloads/favicon-temp.png public/favicon-temp.png
   ```

---

## 🎨 Méthode 2 : Canva (ALTERNATIVE)

Si tu préfères Canva pour plus de contrôle :

### Template Canva

1. **Créer nouveau design**
   - Dimensions : 400 x 100 px (Logo)
   - Dimensions : 256 x 256 px (Favicon)

2. **Ajouter texte**
   - Texte : "PIXEL CLASH"
   - Police : "Press Start 2P" (ou similaire pixel)
   - Couleur : Bleu cyan #00F3FF

3. **Effet ombre**
   - Dupliquer texte
   - Décaler : +4px droite, +4px bas
   - Couleur : Violet #BF00FF

4. **Effet glow (optionnel)**
   - Effets → Ombre portée
   - Flou : 20px
   - Couleur : Bleu cyan #00F3FF
   - Opacité : 80%

5. **Export**
   - Télécharger → PNG
   - Qualité : Haute
   - Fond : Transparent

---

## 📁 Structure Fichiers Finale

```
public/
├── Logo.png              # Logo header (remplace ancien)
├── favicon.svg           # Favicon (à créer ou convertir)
└── retro-gaming-hero.jpg # Image hero (déjà fait ✅)
```

---

## ✅ Checklist

- [ ] Logo.png créé (400x100px)
- [ ] Placé dans `/public/Logo.png`
- [ ] Favicon créé (256x256px)
- [ ] Converti en SVG ou PNG
- [ ] Placé dans `/public/favicon.svg`
- [ ] Testé dans le site (npm run dev)

---

## 🎯 Prochaine Étape

Une fois les fichiers créés et placés dans `/public/`, je mettrai à jour :
1. Header.astro (logo)
2. Layout.astro (favicon)
3. Meta tags (nom site)

**Prêt à exporter ?** 🚀

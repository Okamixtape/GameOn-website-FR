# 🎨 Prompt Relooking UX/UI - GameOn Landing Page

**Date** : 31 octobre 2025  
**Contexte** : Demande d'analyse et recommandations pour relooking express  
**Objectif** : Identifier 5-10 améliorations visuelles à fort impact (2-3h implémentation)

---

## 📋 Contexte Projet

### Identité Projet
- **Nom** : GameOn - Tournoi Gaming Régional 2025
- **Type** : Landing page événementielle (inscription tournoi esport)
- **Cible** : Joueurs esport 13-35 ans, tous niveaux
- **Objectif conversion** : Maximiser inscriptions (formulaire modal)
- **Origine** : Projet portfolio OpenClassrooms (démonstration compétences Full-Stack + Cloud)

### État Actuel
- **Scores Lighthouse** : 98.5/100 moyenne (98 Perf / 100 A11y / 96 BP / 100 SEO)
- **Structure** : Solide et fonctionnelle ✅
- **Quick wins appliqués** : Contraste, wording, mobile nav ✅
- **Besoin** : Relooking visuel pour rendre plus engageant et moderne

---

## 🎯 Mission Claude Desktop

### Objectif Principal
**Identifier 5-10 améliorations visuelles à fort impact** basées sur :
1. **Benchmarks UX/UI** (Mobbin, Dribbble, Awwwards)
2. **Règles design officielles** (Material Design, Apple HIG, Nielsen Norman)
3. **Tendances esport/gaming 2025**
4. **Best practices conversion landing pages**

### Contraintes Techniques
- ✅ **Maintenir** : Scores Lighthouse ≥95, accessibilité WCAG 2.1 AA
- ✅ **Conserver** : Structure HTML actuelle (pas de refonte complète)
- ✅ **Durée implémentation** : 2-3h maximum
- ✅ **Technologies** : Astro 5 + Tailwind CSS 4 (pas de frameworks JS lourds)

---

## 📊 Analyse Demandée

### 1. Benchmarking Visuel (Mobbin + Dribbble)

**Rechercher sur Mobbin.com** :
- Mots-clés : "esport landing page", "gaming event", "tournament registration", "event signup"
- Filtres : Web, Landing pages, Gaming/Entertainment
- **Objectif** : Identifier 3-5 patterns visuels récurrents dans l'industrie esport

**Rechercher sur Dribbble.com** :
- Mots-clés : "gaming landing page", "esport website", "tournament page", "gaming event"
- Filtres : Web Design, UI Design
- **Objectif** : Trouver inspirations visuelles modernes et engageantes

**Questions à répondre** :
1. Quels **éléments visuels** reviennent systématiquement ? (gradients, glassmorphism, animations, etc.)
2. Comment les **CTA** sont-ils mis en avant ? (couleurs, tailles, positions)
3. Quels **micro-interactions** sont utilisés ? (hover effects, transitions, loading states)
4. Comment les **informations clés** sont-elles présentées ? (cards, timelines, stats)
5. Quelles **typographies** dominent ? (gaming fonts, modern sans-serif)

---

### 2. Assets Visuels (Unsplash)

**Rechercher sur Unsplash.com** :
- Mots-clés : "gaming setup", "esport", "gamer", "gaming tournament", "gaming arena"
- Filtres : High resolution, Landscape orientation
- **Objectif** : Trouver 3-5 images hero de qualité professionnelle

**Critères sélection** :
- ✅ Résolution ≥1920x1080
- ✅ Ambiance gaming/esport authentique
- ✅ Couleurs compatibles palette rouge GameOn (#DC2626)
- ✅ Licence Unsplash (usage commercial autorisé)

**Questions à répondre** :
1. Quelles images transmettent le mieux l'**énergie compétitive** ?
2. Quelles compositions fonctionnent pour un **hero 50/50** (texte gauche, image droite) ?
3. Quelles images ont un **contraste suffisant** pour overlay texte ?

---

### 3. Logo GameOn (Création Nécessaire)

**Contexte** : Logo actuel = placeholder OpenClassrooms, besoin d'identité propre

**Brief logo** :
- **Nom** : GameOn
- **Style** : Moderne, gaming, énergique
- **Couleur principale** : Rouge #DC2626 (déjà utilisé dans le site)
- **Format** : SVG (scalable, léger)
- **Variations** : Logo complet + icône seule (favicon)

**Rechercher inspirations sur** :
- **Logopond.com** : "gaming logo", "esport logo"
- **Behance.net** : "gaming brand identity"
- **Dribbble.com** : "esport logo design"

**Questions à répondre** :
1. Quels **symboles gaming** sont les plus efficaces ? (manette, casque, éclair, bouclier)
2. Quelles **typographies** fonctionnent pour "GameOn" ? (bold, condensed, futuristic)
3. Comment intégrer le **rouge #DC2626** de manière impactante ?
4. Quels logos esport existants sont les plus **mémorables** ? (pourquoi ?)

**Options création** :
- **Option A** : Générateur IA (Looka.com, Brandmark.io) + personnalisation
- **Option B** : Fiverr/Upwork (logo professionnel 50-100€, délai 24-48h)
- **Option C** : Figma + icônes Heroicons/Lucide (DIY rapide)

---

### 4. Règles UX/UI Officielles Applicables

**Analyser selon** :

#### Material Design 3 (Google)
- **Source** : https://m3.material.io/
- **Focus** : Color system, Typography scale, Elevation, Motion
- **Questions** :
  1. Comment appliquer le **color system** (primary, secondary, surface) ?
  2. Quelles **élévations** (shadows) pour hiérarchie visuelle ?
  3. Quelles **animations** (duration, easing) pour micro-interactions ?

#### Apple Human Interface Guidelines
- **Source** : https://developer.apple.com/design/human-interface-guidelines/
- **Focus** : Visual hierarchy, Color and contrast, Typography
- **Questions** :
  1. Comment améliorer la **hiérarchie visuelle** actuelle ?
  2. Quels **espacements** (8pt grid) optimiser ?
  3. Comment renforcer le **focus utilisateur** sur CTA ?

#### Nielsen Norman Group - Landing Page UX
- **Source** : https://www.nngroup.com/articles/landing-page-design/
- **Focus** : Above the fold, Visual hierarchy, CTA prominence
- **Questions** :
  1. Le **hero** communique-t-il la value proposition en <3 secondes ?
  2. Les **CTA** sont-ils suffisamment visibles (taille, contraste, position) ?
  3. La **hiérarchie d'information** guide-t-elle naturellement vers conversion ?

#### Baymard Institute - Form UX
- **Source** : https://baymard.com/blog/checkout-usability
- **Focus** : Form layout, Input design, Error states
- **Questions** :
  1. Le **modal formulaire** peut-il être plus engageant visuellement ?
  2. Les **champs** sont-ils assez spacieux et lisibles ?
  3. Les **états** (focus, error, success) sont-ils assez distincts ?

---

## 🎨 Livrables Attendus

### Format Réponse Structurée

```markdown
# 🎨 Recommandations Relooking UX/UI - GameOn

## 1. Benchmarking Visuel

### Patterns Identifiés (Mobbin + Dribbble)
1. **[Pattern Name]**
   - Description : ...
   - Exemples : [liens screenshots]
   - Applicabilité GameOn : ...
   - Impact estimé : ...

### Top 3 Inspirations
1. **[Site/Design Name]**
   - URL/Screenshot : ...
   - Éléments à reprendre : ...
   - Adaptation GameOn : ...

## 2. Assets Visuels Recommandés

### Images Hero (Unsplash)
1. **[Image Title]**
   - URL : https://unsplash.com/photos/...
   - Photographe : @username
   - Résolution : 1920x1080
   - Pourquoi : ...

### Palette Couleurs Complémentaires
- **Rouge principal** : #DC2626 (existant)
- **Couleur secondaire** : #... (proposition)
- **Couleur accent** : #... (proposition)
- **Justification** : ...

## 3. Logo GameOn - Brief Création

### Inspirations Sélectionnées
1. **[Logo Example 1]**
   - Source : ...
   - Éléments intéressants : ...

### Recommandation Création
- **Option préférée** : [A/B/C]
- **Symbole suggéré** : ...
- **Typographie suggérée** : ...
- **Mockup concept** : [description visuelle]

## 4. Améliorations Visuelles Prioritaires

### 🔴 High Impact (Quick Wins Visuels)
1. **[Amélioration 1]**
   - **Élément** : Hero section
   - **Changement** : ...
   - **Règle UX/UI** : Material Design - Elevation
   - **Impact** : +X% engagement
   - **Effort** : 30 min
   - **Code suggestion** : 
     ```css
     /* Tailwind classes */
     ```

2. **[Amélioration 2]**
   - **Élément** : CTA buttons
   - **Changement** : ...
   - **Règle UX/UI** : Nielsen Norman - Visual Hierarchy
   - **Impact** : +X% conversion
   - **Effort** : 20 min
   - **Code suggestion** : ...

[... 3-5 améliorations high impact]

### 🟡 Medium Impact (Polish)
[... 2-3 améliorations medium impact]

## 5. Roadmap Implémentation

### Phase 1 : Assets (30 min)
- [ ] Télécharger images Unsplash
- [ ] Créer/commander logo
- [ ] Préparer palette couleurs

### Phase 2 : Hero Redesign (45 min)
- [ ] Amélioration 1
- [ ] Amélioration 2
- [ ] ...

### Phase 3 : Components (45 min)
- [ ] CTA buttons
- [ ] Cards détails
- [ ] ...

### Phase 4 : Micro-interactions (30 min)
- [ ] Hover effects
- [ ] Transitions
- [ ] ...

**Total estimé** : 2h30

## 6. Checklist Validation

- [ ] Lighthouse ≥95 maintenu
- [ ] Accessibilité WCAG 2.1 AA
- [ ] Responsive mobile/desktop
- [ ] Build 0 erreurs
- [ ] Preview visuel satisfaisant
```

---

## 📚 Sources à Consulter

### Benchmarking
- **Mobbin** : https://mobbin.com/browse/web/apps?sort=latest
- **Dribbble** : https://dribbble.com/tags/gaming-landing-page
- **Awwwards** : https://www.awwwards.com/websites/gaming/
- **Behance** : https://www.behance.net/search/projects?search=esport+landing+page

### Assets
- **Unsplash** : https://unsplash.com/s/photos/gaming
- **Pexels** : https://www.pexels.com/search/esport/
- **Freepik** : https://www.freepik.com/search?format=search&query=gaming

### Logo
- **Looka** : https://looka.com/ (générateur IA)
- **Brandmark** : https://brandmark.io/ (générateur IA)
- **Logopond** : https://logopond.com/gallery/list/?gallery=gaming
- **Fiverr** : https://www.fiverr.com/search/gigs?query=gaming%20logo

### Règles UX/UI
- **Material Design 3** : https://m3.material.io/
- **Apple HIG** : https://developer.apple.com/design/human-interface-guidelines/
- **Nielsen Norman** : https://www.nngroup.com/articles/
- **Baymard Institute** : https://baymard.com/blog
- **Laws of UX** : https://lawsofux.com/

---

## 🎯 Critères Succès

### Objectifs Mesurables
1. **Engagement visuel** : Temps sur page +20%
2. **Taux conversion** : Inscriptions +10-15%
3. **Professionnalisme perçu** : Site "premium" vs "basique"
4. **Mémorabilité** : Identité visuelle distinctive

### Validation Qualitative
- [ ] Le site **impressionne** au premier coup d'œil
- [ ] L'identité **gaming/esport** est immédiatement perçue
- [ ] Les **CTA** attirent naturellement l'œil
- [ ] Le **formulaire** donne envie d'être rempli
- [ ] Le site se démarque des **landing pages génériques**

---

## 💡 Questions Ouvertes pour Claude Desktop

1. **Tendances 2025** : Quelles tendances design gaming/esport dominent actuellement ?
2. **Différenciation** : Comment se démarquer des landing pages événementielles classiques ?
3. **Émotions** : Quels éléments visuels déclenchent l'**excitation** et l'**urgence** ?
4. **Trust signals** : Comment renforcer la **crédibilité** visuellement ?
5. **Mobile-first** : Quelles adaptations visuelles spécifiques pour mobile ?

---

## 🚀 Prochaine Étape

**Après réception recommandations Claude Desktop** :
1. Valider les 5-10 améliorations prioritaires
2. Créer/télécharger assets (logo, images)
3. Implémenter en 2-3h (pair programming Cascade)
4. Valider Lighthouse + responsive
5. Commit + merge

**Prêt pour l'analyse ! 🎨**

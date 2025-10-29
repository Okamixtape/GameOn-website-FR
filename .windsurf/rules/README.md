---
trigger: always_on
---

# Règles Workspace GameOn - Guide d'Utilisation

## 📋 Vue d'ensemble

Ce dossier contient les règles spécifiques au projet GameOn Landing Page. Ces règles complètent les règles globales (`~/.codeium/windsurf/memories/global_rules.md`) et sont automatiquement chargées par Cascade lors du travail sur ce projet.

## 📁 Structure des Règles

```
.windsurf/rules/
├── README.md                    # Ce fichier
├── project-context.md           # Contexte général du projet (ALWAYS ON)
├── astro-components.md          # Règles pour composants Astro (GLOB: *.astro)
└── forms-validation.md          # Règles formulaires (GLOB: *form*.ts, *validation*.ts)
```

## 🎯 Modes d'Activation

### 1. **Always On** (Toujours actif)
- `project-context.md` : Contexte projet, stack, conventions

### 2. **Glob Pattern** (Activation automatique par fichier)
- `astro-components.md` : Activé sur `*.astro`
- `forms-validation.md` : Activé sur `*form*.ts`, `*validation*.ts`

### 3. **Manual** (Activation manuelle via @mention)
- Aucune règle en mode manuel pour l'instant
- Pour activer : `@nom-de-la-regle` dans Cascade

### 4. **Model Decision** (Décision IA)
- Aucune règle en mode automatique pour l'instant

## 📖 Contenu des Règles

### project-context.md
**Activation** : Always On  
**Contenu** :
- Identité et objectifs du projet
- Stack technique complète (Astro 5.14.8, Tailwind 4.x, TypeScript 5.x)
- Conventions de code et naming
- Exigences de performance (Lighthouse ≥ 95)
- Exigences d'accessibilité (WCAG 2.1 AA)
- Workflow de développement
- Guidelines pour assistance IA

**Utilisation** : Toujours chargé, fournit le contexte de base à Cascade.

### astro-components.md
**Activation** : Glob `*.astro`  
**Contenu** :
- Structure standard d'un composant Astro
- Best practices (Zero JS, Props typées, Accessibilité)
- Patterns de composants (présentation, slots, interaction client)
- Pièges courants à éviter
- Tests de composants
- Template de documentation

**Utilisation** : Automatiquement chargé lors de l'édition de fichiers `.astro`.

### forms-validation.md
**Activation** : Glob `*form*.ts`, `*validation*.ts`  
**Contenu** :
- Exigences formulaire GameOn (RF-002, RF-003)
- Règles de validation (prénom, nom, email, date, etc.)
- Pattern de composant formulaire
- Gestion de la soumission
- Checklist accessibilité
- Intégration Formspark

**Utilisation** : Automatiquement chargé lors de l'édition de fichiers de formulaire/validation.

## 🚀 Comment Utiliser

### Développement Normal
1. Ouvrir un fichier du projet
2. Les règles appropriées se chargent automatiquement
3. Cascade utilise ces règles pour ses suggestions

### Vérifier les Règles Actives
1. Ouvrir Cascade (Cmd+L ou Ctrl+L)
2. Cliquer sur l'icône "Customizations" (en haut à droite)
3. Onglet "Rules" → voir les règles actives

### Activer une Règle Manuellement
```
@nom-de-la-regle Explique-moi comment créer un composant
```

### Créer une Nouvelle Règle
1. Créer un fichier `.md` dans `.windsurf/rules/`
2. Structurer avec balises XML (voir exemples)
3. Définir le mode d'activation en haut du fichier
4. Redémarrer Windsurf pour charger la règle

## 📝 Template de Nouvelle Règle

```markdown
# Titre de la Règle

<!-- Mode d'activation (choisir un) -->
<!-- ACTIVATION: always_on -->
<!-- ACTIVATION: glob:*.extension -->
<!-- ACTIVATION: manual -->
<!-- ACTIVATION: model_decision:"description" -->

<section_name>
## Titre Section

Contenu de la section avec :
- Listes à puces
- Exemples de code
- Explications claires

\`\`\`typescript
// Exemple de code
const example = "code";
\`\`\`
</section_name>

<another_section>
## Autre Section

Plus de contenu...
</another_section>
```

## 🔧 Maintenance

### Mise à Jour des Règles
1. Éditer le fichier `.md` concerné
2. Sauvegarder
3. Redémarrer Windsurf (ou recharger la fenêtre)
4. Vérifier que les changements sont pris en compte

### Désactiver une Règle
1. Renommer le fichier avec extension `.md.disabled`
2. Ou déplacer hors de `.windsurf/rules/`
3. Redémarrer Windsurf

### Tester une Règle
1. Créer un fichier de test correspondant au glob pattern
2. Ouvrir Cascade et vérifier les suggestions
3. Demander explicitement à Cascade de suivre la règle
4. Vérifier que les réponses respectent les directives

## 📚 Ressources

### Documentation Officielle
- **Windsurf Memories & Rules** : https://docs.windsurf.com/windsurf/cascade/memories
- **Règles Communautaires** : https://windsurf.com/editor/directory
- **Best Practices** : Voir `global_rules.md`

### Projet GameOn
- **Specs Complètes** : [Confluence](https://loupaubour.atlassian.net/wiki/spaces/DL/pages/163843)
- **Suivi Projet** : [Jira](https://loupaubour.atlassian.net/browse/SCRUM-5)
- **Architecture** : `docs/ARCHITECTURE.md`

### Articles IA & Développement
- **Références Complètes** : `.windsurf/AI-REFERENCES.md`
- Kent C. Dodds, Guillermo Rauch, GitHub Research, Josh Comeau

## ⚠️ Limitations

### Taille des Règles
- **Maximum** : 12 000 caractères par fichier
- Si dépassement : diviser en plusieurs fichiers avec glob patterns différents

### Nombre de Règles
- Pas de limite stricte
- Mais trop de règles = contexte surchargé
- Privilégier la qualité à la quantité

### Conflits
- Si plusieurs règles contradictoires : la plus spécifique gagne
- Ordre de priorité : Workspace > Global
- En cas de doute : spécifier explicitement dans la règle

## 🎯 Bonnes Pratiques

### Rédaction
- ✅ Concis et structuré
- ✅ Exemples de code concrets
- ✅ Balises XML pour grouper
- ✅ Listes à puces plutôt que paragraphes
- ❌ Éviter les généralités vagues
- ❌ Pas de règles redondantes avec global

### Organisation
- ✅ Un fichier = un domaine précis
- ✅ Noms de fichiers descriptifs
- ✅ Glob patterns spécifiques
- ✅ README à jour

### Tests
- ✅ Tester après chaque modification
- ✅ Vérifier avec différents types de fichiers
- ✅ Demander feedback à Cascade
- ✅ Ajuster selon résultats

## 🔄 Workflow Recommandé

### Nouvelle Feature
1. Lire les règles pertinentes
2. Développer avec assistance Cascade
3. Vérifier conformité aux règles
4. Si pattern récurrent → créer nouvelle règle

### Bug Fix
1. Cascade analyse avec contexte des règles
2. Propose solution conforme aux standards
3. Vérifie impact sur tests/performance
4. Si bug récurrent → ajouter à règles

### Refactoring
1. Cascade suggère améliorations basées sur règles
2. Vérifie cohérence avec architecture
3. Propose tests pour valider
4. Met à jour règles si nouveaux patterns

## 📊 Métriques de Qualité

### Règles Efficaces
- Cascade les suit systématiquement
- Réduisent les allers-retours
- Améliorent la cohérence du code
- Accélèrent le développement

### Règles à Améliorer
- Cascade les ignore ou mal interprète
- Trop vagues ou contradictoires
- Rarement utilisées
- Génèrent de la confusion

### Indicateurs
- Temps de développement
- Nombre de corrections nécessaires
- Cohérence du code généré
- Satisfaction développeur

---

**Dernière mise à jour** : Octobre 2025  
**Mainteneur** : Loup Aubour  
**Questions** : Consulter `AI-REFERENCES.md` ou documentation Windsurf

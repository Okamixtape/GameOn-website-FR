# Migration Redesign → Production

## 🎯 Objectif
Remplacer les anciennes pages par les nouvelles pages redesign optimisées SEO.

---

## 📊 État Actuel

### Pages Anciennes (À Remplacer)
- `index.astro` → Ancienne homepage
- `about.astro` → Ancien About
- `developer.astro` → Ancien Developer
- `cgu.astro` → Anciennes CGU
- `mentions-legales.astro` → Anciennes mentions
- `politique-confidentialite.astro` → Ancienne politique
- `details.astro` → Ancienne page (à supprimer ?)

### Pages Redesign (Nouvelles - Optimisées SEO)
- `index-redesign.astro` → Nouvelle homepage ✅
- `about-redesign.astro` → Nouveau About ✅
- `developer-redesign.astro` → Nouveau Developer ✅
- `tournament-redesign.astro` → Nouveau Tournament ✅
- `faq-redesign.astro` → FAQ (nouvelle) ✅
- `glossaire-retrogaming.astro` → Glossaire (nouveau) ✅
- `cgu-redesign.astro` → Nouvelles CGU ✅
- `mentions-legales-redesign.astro` → Nouvelles mentions ✅
- `politique-confidentialite-redesign.astro` → Nouvelle politique ✅
- `blog-redesign/` → Nouveau blog ✅

### Pages Sans Équivalent Redesign
- `404.astro` → Garder (page erreur)
- `details.astro` → À analyser
- `redesign-index.astro` → Doublon ? À supprimer

---

## 🚀 Plan de Migration

### Option 1 : Migration Brutale (Recommandée)
**Avantages** :
- Simple et rapide
- Pas de duplication de contenu (SEO)
- URLs propres sans `-redesign`

**Inconvénients** :
- Pas de rollback facile
- Nécessite tests complets avant

**Étapes** :
1. Backup anciennes pages (git branch)
2. Renommer pages redesign → pages principales
3. Supprimer anciennes pages
4. Mettre à jour liens internes
5. Tester toutes les pages
6. Déployer

### Option 2 : Migration Progressive (Sécurisée)
**Avantages** :
- Rollback facile
- Tests en production
- Migration par étape

**Inconvénients** :
- Plus long
- Duplication temporaire
- URLs avec redirections

**Étapes** :
1. Garder anciennes pages
2. Ajouter redirections 301
3. Migrer page par page
4. Tester chaque migration
5. Supprimer anciennes pages après validation

---

## ✅ Recommandation : Option 1 (Migration Brutale)

### Pourquoi ?
- Site en développement (pas encore en production)
- Pas de trafic SEO à préserver
- Pages redesign 100% prêtes et testées
- Évite duplication de contenu

---

## 📋 Checklist Migration

### Avant Migration
- [ ] Créer branche `migration-redesign-to-prod`
- [ ] Backup complet (git tag)
- [ ] Lister tous les liens internes à mettre à jour
- [ ] Vérifier que toutes les pages redesign existent

### Pendant Migration
- [ ] Renommer `index-redesign.astro` → `index.astro`
- [ ] Renommer `about-redesign.astro` → `about.astro`
- [ ] Renommer `tournament-redesign.astro` → `tournament.astro`
- [ ] Renommer `developer-redesign.astro` → `developer.astro`
- [ ] Renommer `faq-redesign.astro` → `faq.astro`
- [ ] Renommer `cgu-redesign.astro` → `cgu.astro`
- [ ] Renommer `mentions-legales-redesign.astro` → `mentions-legales.astro`
- [ ] Renommer `politique-confidentialite-redesign.astro` → `politique-confidentialite.astro`
- [ ] Renommer `blog-redesign/` → `blog/`
- [ ] Supprimer anciennes pages
- [ ] Supprimer `redesign-index.astro` (doublon)
- [ ] Mettre à jour tous les liens internes
- [ ] Mettre à jour Header navigation
- [ ] Mettre à jour Footer liens

### Après Migration
- [ ] Build complet : `npm run build`
- [ ] Tester toutes les pages
- [ ] Vérifier tous les liens
- [ ] Vérifier navigation Header/Footer
- [ ] Audit SEO : `npm run seo:audit`
- [ ] Lighthouse : `npm run test:lighthouse`
- [ ] Commit : "feat: Migrate redesign pages to production"
- [ ] Déployer

---

## 🔧 Script de Migration Automatique

```bash
#!/bin/bash

echo "🚀 MIGRATION REDESIGN → PRODUCTION"
echo "===================================="
echo ""

# 1. Créer branche
git checkout -b migration-redesign-to-prod

# 2. Backup (tag)
git tag backup-before-migration

# 3. Supprimer anciennes pages
echo "🗑️  Suppression anciennes pages..."
rm src/pages/index.astro
rm src/pages/about.astro
rm src/pages/developer.astro
rm src/pages/cgu.astro
rm src/pages/mentions-legales.astro
rm src/pages/politique-confidentialite.astro
rm src/pages/details.astro
rm src/pages/redesign-index.astro

# 4. Renommer pages redesign
echo "📝 Renommage pages redesign..."
mv src/pages/index-redesign.astro src/pages/index.astro
mv src/pages/about-redesign.astro src/pages/about.astro
mv src/pages/tournament-redesign.astro src/pages/tournament.astro
mv src/pages/developer-redesign.astro src/pages/developer.astro
mv src/pages/faq-redesign.astro src/pages/faq.astro
mv src/pages/cgu-redesign.astro src/pages/cgu.astro
mv src/pages/mentions-legales-redesign.astro src/pages/mentions-legales.astro
mv src/pages/politique-confidentialite-redesign.astro src/pages/politique-confidentialite.astro

# 5. Renommer dossier blog
mv src/pages/blog-redesign src/pages/blog
mv src/content/blog-redesign src/content/blog

echo ""
echo "✅ Migration terminée !"
echo ""
echo "⚠️  ATTENTION : Il faut maintenant :"
echo "1. Mettre à jour les liens internes dans les composants"
echo "2. Tester le build : npm run build"
echo "3. Vérifier toutes les pages"
echo ""
```

---

## 🔗 Liens à Mettre à Jour

### Header Navigation
**Fichier** : `src/components/redesign/layout/Header.tsx`

**Avant** :
```tsx
{ name: 'Accueil', href: '/index-redesign' }
{ name: 'Tournoi', href: '/tournament-redesign' }
{ name: 'Blog', href: '/blog-redesign' }
{ name: 'À Propos', href: '/about-redesign' }
```

**Après** :
```tsx
{ name: 'Accueil', href: '/' }
{ name: 'Tournoi', href: '/tournament' }
{ name: 'Blog', href: '/blog' }
{ name: 'À Propos', href: '/about' }
```

### Footer Liens
**Fichier** : `src/components/redesign/layout/Footer.astro`

**Mettre à jour tous les liens** :
- `/index-redesign` → `/`
- `/tournament-redesign` → `/tournament`
- `/blog-redesign` → `/blog`
- `/about-redesign` → `/about`
- `/faq-redesign` → `/faq`
- `/cgu-redesign` → `/cgu`
- `/mentions-legales-redesign` → `/mentions-legales`
- `/politique-confidentialite-redesign` → `/politique-confidentialite`

### Pages Internes
**Fichiers à vérifier** :
- `src/pages/faq.astro` : Liens vers autres pages
- `src/pages/glossaire-retrogaming.astro` : Liens vers autres pages
- `src/pages/blog/[slug].astro` : Liens vers autres pages
- Tous les composants avec liens

---

## 🧪 Tests Après Migration

### Build
```bash
npm run build
```

### Audit SEO
```bash
npm run seo:audit
```

### Lighthouse
```bash
npm run test:lighthouse
```

### Tests Manuels
- [ ] Homepage `/` fonctionne
- [ ] Tournoi `/tournament` fonctionne
- [ ] Blog `/blog` fonctionne
- [ ] Article blog `/blog/slug` fonctionne
- [ ] About `/about` fonctionne
- [ ] FAQ `/faq` fonctionne
- [ ] Glossaire `/glossaire-retrogaming` fonctionne
- [ ] CGU `/cgu` fonctionne
- [ ] Mentions `/mentions-legales` fonctionne
- [ ] Politique `/politique-confidentialite` fonctionne
- [ ] Navigation Header fonctionne
- [ ] Navigation Footer fonctionne
- [ ] Tous les liens internes fonctionnent

---

## 🚨 Rollback (Si Problème)

### Option 1 : Git Reset
```bash
git reset --hard backup-before-migration
git checkout main
```

### Option 2 : Git Revert
```bash
git revert HEAD
git push
```

---

## 📊 Impact SEO

### Positif ✅
- URLs propres sans `-redesign`
- Pas de duplication de contenu
- Schema.org sur toutes les pages
- Titles et descriptions optimisés
- Maillage interne cohérent

### À Surveiller ⚠️
- Google Search Console : Vérifier indexation
- Google Analytics : Vérifier trafic
- Positions : Suivre évolution rankings

---

## 🎯 Timeline Recommandée

### Aujourd'hui (1h)
1. Créer branche migration
2. Exécuter script migration
3. Mettre à jour liens Header/Footer
4. Tester build

### Demain (30min)
1. Tests manuels complets
2. Audit SEO
3. Lighthouse
4. Corrections si nécessaire

### Après-demain (15min)
1. Merge dans main
2. Déployer en production
3. Vérifier en production
4. Soumettre à Google Search Console

---

## ✅ Validation Finale

### Avant de Merger
- [ ] Build passe sans erreur
- [ ] Toutes les pages accessibles
- [ ] Tous les liens fonctionnent
- [ ] Navigation Header/Footer OK
- [ ] Audit SEO ≥ 60%
- [ ] Lighthouse ≥ 90

### Après Déploiement
- [ ] Site accessible en production
- [ ] Toutes les pages chargent
- [ ] Pas d'erreurs console
- [ ] Google Search Console mis à jour
- [ ] Sitemap soumis

---

**Prêt à lancer la migration ?** 🚀

**Commande** :
```bash
bash scripts/migrate-redesign-to-prod.sh
```

Ou migration manuelle étape par étape pour plus de contrôle.

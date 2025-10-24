# GameOn - Spécifications Projet

> **Source de vérité** : [Confluence - Page originale](https://loupaubour.atlassian.net/wiki/spaces/DL/pages/163843)  
> **Dernière synchronisation** : Octobre 23, 2025

---

## 📋 Vue d'Ensemble

**Type** : Landing Page  
**Objectif** : Convertir les visiteurs en inscriptions pour l'événement GameOn  
**Statut** : Refonte professionnelle en cours  
**Stack cible** : Astro 5.14+ + Tailwind CSS 4 + AWS/Azure + CI/CD  
**Dernière validation technique** : Octobre 2025

---

## 🎯 Analyse du Besoin

### Problème à Résoudre

Les organisateurs d'événements GameOn ont besoin d'une solution pour :
- Collecter les inscriptions de manière **fiable** et **sécurisée**
- Présenter l'événement de manière **attractive** sur tous les appareils
- Garantir une expérience utilisateur **fluide** et **accessible**
- Obtenir un **taux de conversion maximal** (visiteur → inscrit)

### Solution Proposée

Une landing page optimisée avec :
- **Performance** : Temps de chargement < 1 seconde (Lighthouse 95+)
- **Accessibilité** : Conformité WCAG 2.1 niveau AA minimum
- **Sécurité** : Collecte de données conforme RGPD
- **Fiabilité** : Hébergement cloud avec CDN global

### Différenciation

❌ **Ce n'est PAS** : Une application web avec backend complexe, système d'authentification, base de données  
✅ **C'est** : Un site statique performant avec intégration service de formulaire

---

## 📊 Spécifications Fonctionnelles

### RF-001 : Affichage de l'Événement

**Description** : Présentation de l'événement GameOn

**Éléments affichés** :
- Titre événement
- Description événement
- Informations clés (date, lieu, programme)
- Visuels attractifs

**Contraintes** :
- Responsive 320px → 1920px+
- Images optimisées (WebP + lazy loading)
- Design cohérent avec identité GameOn

---

### RF-002 : Formulaire d'Inscription

**Description** : Formulaire de collecte des inscriptions

**Champs obligatoires** :
| Champ | Type | Validation |
|-------|------|------------|
| Prénom | Text | Non vide, 2-50 caractères |
| Nom | Text | Non vide, 2-50 caractères |
| Email | Email | Format email valide |
| Date de naissance | Date | Âge minimum 18 ans |
| Ville | Text | Non vide |
| Nombre de tournois | Number | 0-99 |

**Champs optionnels** :
- Acceptation newsletter (checkbox)

**Validation** :
- Validation temps réel (on blur)
- Messages d'erreur explicites
- Protection CSRF
- Acceptation conditions d'utilisation obligatoire

**Soumission** :
- Envoi vers service externe (Formspark/Netlify Forms)
- Feedback immédiat (succès/erreur)
- Gestion erreurs réseau

---

### RF-003 : Feedback Utilisateur

**Description** : Retours visuels pour l'utilisateur

**Feedback inclus** :
- Message de confirmation après soumission
- Validation des champs en temps réel
- Messages d'erreur explicites et contextuels
- États de chargement (loading states)

---

## 🔧 Spécifications Techniques

### ST-001 : Performance

**Cibles Lighthouse** :
- **Performance** : ≥ 95/100
- **Accessibility** : ≥ 95/100
- **Best Practices** : ≥ 95/100
- **SEO** : ≥ 95/100

**Core Web Vitals** :
- **Time to Interactive (TTI)** : < 1.5s
- **First Contentful Paint (FCP)** : < 0.8s
- **Largest Contentful Paint (LCP)** : < 2.5s
- **Cumulative Layout Shift (CLS)** : < 0.1
- **First Input Delay (FID)** : < 100ms

**Stratégies d'optimisation** :
- Génération statique (SSG)
- Images optimisées (WebP, sizes, srcset)
- CSS critique inline
- 0 JavaScript par défaut (sauf interactions nécessaires)
- Fonts préchargées

---

### ST-002 : Accessibilité

**Niveau cible** : **WCAG 2.1 AA** minimum

**Critères** :
- Contraste des couleurs ≥ 4.5:1 (texte normal)
- Contraste des couleurs ≥ 3:1 (texte large)
- Navigation clavier complète (tab, enter, escape)
- Lecteurs d'écran compatibles (NVDA, JAWS, VoiceOver)
- Landmarks ARIA appropriés
- Labels formulaire explicites
- Focus visible sur tous les éléments interactifs

**Tests automatisés** :
- Intégration axe-core via Playwright
- Tests exécutés dans CI/CD
- Score axe : 100% (0 violations)

---

### ST-003 : Responsive Design

**Breakpoints** :
- **Mobile** : 320px → 767px
- **Tablet** : 768px → 1023px
- **Desktop** : 1024px+

**Approche** : Mobile-first

**Tests navigateurs** :
- Chrome (dernière version)
- Firefox (dernière version)
- Safari (dernière version)
- Edge (dernière version)

---

### ST-004 : Sécurité

**Mesures obligatoires** :
- **HTTPS** : Certificat SSL/TLS valide
- **Headers sécurité** :
  - `Content-Security-Policy` 
  - `X-Frame-Options: DENY` 
  - `X-Content-Type-Options: nosniff` 
  - `Referrer-Policy: strict-origin-when-cross-origin` 
- **Protection CSRF** : Token dans formulaire
- **Conformité RGPD** :
  - Collecte données minimales
  - Consentement explicite
  - Politique de confidentialité visible

---

## 🏗️ Architecture Cible

### Frontend

**Framework** : Astro 5.14.8 (stable)

**Avantages** :
- Génération statique (0 JS par défaut)
- Composants réutilisables
- Optimisation images native
- Score Lighthouse optimal

**Styling** : Tailwind CSS 4 via `@tailwindcss/vite` 

**Intégration** : `npx astro add tailwind` (méthode officielle)

**Note** : L'ancienne intégration `@astrojs/tailwind` est dépréciée depuis Astro 5.2

---

### Gestion Formulaire

**Service externe** : Formspark / Netlify Forms / Getform

**Raison** :
- Pas de backend custom nécessaire
- Gestion spam intégrée
- Notifications email automatiques
- Export CSV des soumissions
- Protection CSRF native

**Recommandation** : **Formspark** (50 soumissions/mois gratuit)

---

### CI/CD

**Platform** : GitHub Actions

**Workflow** :
1. Checkout code (`actions/checkout@v4`)
2. Installation dépendances (`npm ci`)
3. Build production (`npm run build`)
4. Tests automatisés :
   - Tests accessibilité (axe-core)
   - Tests performance (Lighthouse CI)
   - Linting (ESLint)
5. Déploiement automatique (si tests OK)

---

### Hébergement Cloud

**Option A : AWS (Recommandé)**

| Service | Rôle | Coût |
|---------|------|------|
| **S3 Bucket** | Hébergement statique | ~0.023$/GB/mois |
| **CloudFront** | CDN global | ~0.085$/GB transfert |
| **Route 53** | DNS (optionnel) | ~0.50$/mois |
| **Certificate Manager** | SSL gratuit | Gratuit |

**Coût total estimé** : 1-5€/mois (free tier an 1)

**Option B : Azure**
- **Storage** : Azure Blob Storage ($web container)
- **CDN** : Azure CDN
- **Certificat** : Azure Managed Certificate

**Option C : Alternatives Simplifiées**
- Vercel (CI/CD + hébergement intégré, gratuit)
- Netlify (CI/CD + hébergement + Forms, gratuit)
- Cloudflare Pages (CDN + hosting, gratuit)

**Pour démonstration professionnelle** : AWS S3 + CloudFront reste le meilleur choix (compétences cloud engineering).

---

## 📝 Plan d'Implémentation

### Phase 1 : Setup Projet (2-3h)

- [x] Initialiser repo Git
- [x] Setup Astro projet
- [x] Configurer ESLint + Prettier
- [x] Intégrer Tailwind CSS 4 (via `npx astro add tailwind`)
- [x] Créer structure de dossiers
- [x] Premier commit + push

### Phase 2 : Développement Frontend (4-6h)

- [ ] Refonte HTML/CSS en composants Astro
- [ ] Implémentation formulaire
- [ ] Responsive design
- [ ] Tests manuels multi-navigateurs

### Phase 3 : Intégration Service Formulaire (1-2h)

- [ ] Choix et configuration service (Formspark recommandé)
- [ ] Intégration API
- [ ] Tests soumission
- [ ] Configuration notifications email

### Phase 4 : CI/CD (3-4h)

- [ ] Création workflow GitHub Actions
- [ ] Configuration tests accessibilité (axe)
- [ ] Tests performance (Lighthouse CI)
- [ ] Validation build

### Phase 5 : Déploiement Cloud (4-6h)

- [ ] Configuration S3 bucket
- [ ] Setup CloudFront distribution
- [ ] Configuration certificat SSL
- [ ] Configuration domaine custom (optionnel)
- [ ] Tests production

### Phase 6 : Documentation (2h)

- [x] README.md complet
- [x] Documentation architecture
- [ ] Guide déploiement
- [ ] Métriques et KPIs

**Estimation totale** : 16-23 heures

---

## 📈 Métriques de Succès

### Performance

- Lighthouse Score ≥ 95/100 (Performance, Accessibility, Best Practices, SEO)
- Core Web Vitals "Passed"

### Business

- Taux de conversion ≥ 5% (visiteurs → soumissions formulaire)
- Taux de rebond ≤ 40%
- Temps moyen sur page ≥ 2 minutes

### Technique

- Uptime ≥ 99.9%
- Temps de réponse CDN ≤ 200ms
- 0 erreurs JavaScript en production

---

## ✅ Validation Technique (Octobre 2025)

**Stack validée et production-ready** :

| Composant | Version | Statut | Documentation |
|-----------|---------|--------|---------------|
| Astro | 5.14.8 | ✅ Stable | [docs.astro.build](https://docs.astro.build) |
| Tailwind CSS | 4.x | ✅ Stable | [Installation Astro](https://tailwindcss.com/docs/installation/framework-guides/astro) |
| Lighthouse CI | Latest | ✅ Mature | [GitHub Action](https://github.com/treosh/lighthouse-ci-action) |
| axe-core | Latest | ✅ Production | [Deque axe-core](https://github.com/dequelabs/axe-core) |

**Méthode d'intégration Tailwind** :
- ✅ Utiliser `@tailwindcss/vite` plugin (méthode officielle depuis Astro 5.2)
- ❌ Ne PAS utiliser `@astrojs/tailwind` (déprécié)

**Tests d'accessibilité** :
- Intégration via `@axe-core/playwright` 
- Détection automatique 57% des problèmes WCAG
- Zéro faux positifs

---

## 🔗 Ressources

**Documentation Officielle** :
- [Astro Documentation](https://docs.astro.build)
- [AWS S3 Static Website](https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html)
- [CloudFront CDN](https://docs.aws.amazon.com/cloudfront/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

**Outils** :
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [axe DevTools](https://www.deque.com/axe/devtools/)
- [WebPageTest](https://www.webpagetest.org/)

---

*Dernière mise à jour : Octobre 23, 2025*  
*Maintenir synchronisé avec [Confluence](https://loupaubour.atlassian.net/wiki/spaces/DL/pages/163843)*

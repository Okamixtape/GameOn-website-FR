# 📊 Configuration Google Analytics & Search Console

**Site** : https://pixel-clash.netlify.app  
**Date** : 5 novembre 2025

---

## 🎯 Objectifs

### Google Search Console (SEO)
- ✅ Suivi des performances de recherche
- ✅ Indexation des pages
- ✅ Détection d'erreurs techniques
- ✅ Mots-clés qui génèrent du trafic
- ✅ Sitemap soumis automatiquement

### Google Analytics 4 (Trafic)
- ✅ Nombre de visiteurs
- ✅ Pages vues
- ✅ Durée des sessions
- ✅ Taux de rebond
- ✅ Conversions (inscriptions)
- ✅ Sources de trafic

---

## 🚀 Configuration Étape par Étape

### 1️⃣ Google Search Console

#### A. Créer un Compte

1. **Aller sur** : https://search.google.com/search-console
2. **Se connecter** avec compte Google
3. **Cliquer** sur "Ajouter une propriété"
4. **Choisir** : "Préfixe d'URL"
5. **Entrer** : `https://pixel-clash.netlify.app`

#### B. Vérifier la Propriété

1. **Choisir** : "Balise HTML" (méthode recommandée)
2. **Copier** le code de vérification :
   ```
   google-site-verification=XXXXXXXXXXXXXXXXXXXXXX
   ```
3. **Créer** un fichier `.env` à la racine du projet :
   ```bash
   cp .env.example .env
   ```
4. **Ajouter** le code dans `.env` :
   ```env
   PUBLIC_GSC_VERIFICATION=XXXXXXXXXXXXXXXXXXXXXX
   ```
5. **Déployer** sur Netlify
6. **Retourner** sur Search Console et cliquer "Vérifier"

#### C. Soumettre le Sitemap

1. Dans Search Console, aller dans **"Sitemaps"**
2. **Ajouter** : `https://pixel-clash.netlify.app/sitemap.xml`
3. **Soumettre**

✅ **Résultat** : Google indexera toutes les pages automatiquement

---

### 2️⃣ Google Analytics 4

#### A. Créer un Compte

1. **Aller sur** : https://analytics.google.com/
2. **Se connecter** avec compte Google
3. **Cliquer** sur "Commencer à mesurer"
4. **Nom du compte** : "PIXEL CLASH"
5. **Nom de la propriété** : "PIXEL CLASH Website"
6. **Fuseau horaire** : France (GMT+1)
7. **Devise** : Euro (EUR)

#### B. Configurer le Flux de Données

1. **Plateforme** : Web
2. **URL du site** : `https://pixel-clash.netlify.app`
3. **Nom du flux** : "Production Site"
4. **Cliquer** sur "Créer un flux"

#### C. Obtenir le Measurement ID

1. Dans le flux créé, copier le **Measurement ID** :
   ```
   G-XXXXXXXXXX
   ```
2. **Ajouter** dans `.env` :
   ```env
   PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```
3. **Déployer** sur Netlify

✅ **Résultat** : Analytics actif uniquement en production

---

### 3️⃣ Configuration Netlify

#### A. Ajouter les Variables d'Environnement

1. **Aller sur** : https://app.netlify.com/sites/pixel-clash/settings
2. **Cliquer** : "Environment variables"
3. **Ajouter** :
   - `PUBLIC_GSC_VERIFICATION` = `XXXXXXXXXXXXXXXXXXXXXX`
   - `PUBLIC_GA_MEASUREMENT_ID` = `G-XXXXXXXXXX`
4. **Sauvegarder**
5. **Re-déployer** le site

#### B. Vérifier l'Intégration

1. **Ouvrir** : https://pixel-clash.netlify.app
2. **Inspecter** le code source (Ctrl+U)
3. **Chercher** :
   ```html
   <meta name="google-site-verification" content="XXXX" />
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXX"></script>
   ```

✅ **Si présent** : Configuration réussie !

---

## 📊 Données Disponibles

### Google Search Console (après 2-3 jours)

#### Performances
- **Clics** : Nombre de clics depuis Google
- **Impressions** : Nombre d'affichages dans les résultats
- **CTR** : Taux de clic (clics / impressions)
- **Position moyenne** : Classement moyen dans Google

#### Couverture
- **Pages indexées** : Nombre de pages dans Google
- **Pages exclues** : Pages non indexées (et pourquoi)
- **Erreurs** : Problèmes techniques à corriger

#### Expérience
- **Core Web Vitals** : Performance réelle des utilisateurs
- **Mobile-friendly** : Compatibilité mobile

---

### Google Analytics 4 (en temps réel)

#### Temps Réel
- **Utilisateurs actifs** : Visiteurs en ce moment
- **Pages vues** : Pages consultées maintenant
- **Sources** : D'où viennent les visiteurs

#### Rapports
- **Acquisition** : Comment les utilisateurs arrivent
  - Recherche organique (Google)
  - Réseaux sociaux
  - Direct (URL tapée)
  - Référents (autres sites)

- **Engagement** : Ce que font les utilisateurs
  - Pages vues par page
  - Durée moyenne
  - Taux de rebond
  - Événements (clics, scrolls)

- **Conversions** : Objectifs atteints
  - Inscriptions au tournoi
  - Clics sur "Je m'inscris"
  - Téléchargements (si applicable)

---

## 🎯 Événements Personnalisés (Optionnel)

### Suivi des Inscriptions

Pour tracker les inscriptions au tournoi :

```astro
<!-- Dans RegistrationModal.astro -->
<script>
  // Après soumission réussie du formulaire
  if (window.gtag) {
    gtag('event', 'inscription_tournoi', {
      'event_category': 'conversion',
      'event_label': 'PIXEL CLASH 2026',
      'value': 1
    });
  }
</script>
```

### Suivi des Clics CTA

```astro
<!-- Sur les boutons CTA -->
<button 
  onclick="gtag('event', 'clic_cta', {
    'event_category': 'engagement',
    'event_label': 'Je m\'inscris maintenant'
  })"
>
  Je m'inscris maintenant
</button>
```

---

## 🔒 RGPD & Confidentialité

### Configuration Actuelle (Conforme)

✅ **Anonymisation IP** : Activée
```javascript
'anonymize_ip': true
```

✅ **Pas de signaux Google** : Désactivés
```javascript
'allow_google_signals': false
```

✅ **Pas de pub personnalisée** : Désactivée
```javascript
'allow_ad_personalization_signals': false
```

✅ **Cookies sécurisés** : SameSite + Secure
```javascript
'cookie_flags': 'SameSite=None;Secure'
```

### Mentions Légales à Ajouter

Dans `src/pages/politique-confidentialite.astro` :

```markdown
## Cookies et Suivi

Ce site utilise Google Analytics pour analyser l'audience et améliorer l'expérience utilisateur. Les données collectées sont :
- Pages visitées
- Durée de visite
- Source de trafic
- Appareil utilisé (ordinateur/mobile)

**Données anonymisées** : Votre adresse IP est anonymisée.
**Pas de publicité** : Aucune donnée n'est utilisée pour de la publicité ciblée.
**Désactivation** : Vous pouvez désactiver le suivi avec l'extension [Google Analytics Opt-out](https://tools.google.com/dlpage/gaoptout).
```

---

## 📈 Objectifs à Suivre

### Semaine 1
- ✅ Vérifier que les données arrivent
- ✅ Configurer les événements de conversion
- ✅ Créer un rapport personnalisé

### Mois 1
- 📊 **Trafic** : Nombre de visiteurs uniques
- 📊 **Engagement** : Temps moyen sur site
- 📊 **Conversions** : Nombre d'inscriptions
- 📊 **SEO** : Position moyenne sur Google

### Mois 3
- 📈 **Croissance** : Évolution du trafic
- 📈 **Sources** : Canaux les plus performants
- 📈 **Pages** : Contenus les plus consultés
- 📈 **Optimisation** : Améliorations basées sur données

---

## 🛠️ Commandes Utiles

### Développement Local

```bash
# Analytics désactivé en local (normal)
npm run dev

# Tester en mode production
npm run build
npm run preview
```

### Vérifier la Configuration

```bash
# Voir les variables d'environnement
cat .env

# Vérifier le build
npm run build

# Chercher les balises GA dans le HTML
grep -r "gtag" dist/
```

---

## 🚨 Troubleshooting

### Analytics ne s'affiche pas

**Problème** : Pas de données dans GA4

**Solutions** :
1. ✅ Vérifier que `PUBLIC_GA_MEASUREMENT_ID` est dans Netlify
2. ✅ Vérifier que le site est en production (pas en dev)
3. ✅ Attendre 24-48h pour les premières données
4. ✅ Tester avec "Temps réel" dans GA4

### Search Console non vérifié

**Problème** : Vérification échoue

**Solutions** :
1. ✅ Vérifier que `PUBLIC_GSC_VERIFICATION` est correct
2. ✅ Vérifier que la balise est dans le `<head>`
3. ✅ Attendre 5 minutes après déploiement
4. ✅ Tester avec `curl` :
   ```bash
   curl https://pixel-clash.netlify.app | grep "google-site-verification"
   ```

---

## 📚 Ressources

### Documentation Officielle
- **Google Search Console** : https://support.google.com/webmasters
- **Google Analytics 4** : https://support.google.com/analytics
- **RGPD** : https://www.cnil.fr/fr/cookies-et-autres-traceurs

### Outils Complémentaires
- **Google Tag Manager** : Pour événements avancés
- **Google Data Studio** : Pour rapports personnalisés
- **Search Console Insights** : Vue simplifiée des données

---

## ✅ Checklist de Configuration

- [ ] Compte Google Search Console créé
- [ ] Propriété `pixel-clash.netlify.app` ajoutée
- [ ] Code de vérification copié dans `.env`
- [ ] Sitemap soumis (`/sitemap.xml`)
- [ ] Compte Google Analytics 4 créé
- [ ] Measurement ID copié dans `.env`
- [ ] Variables ajoutées dans Netlify
- [ ] Site re-déployé
- [ ] Balises présentes dans le HTML
- [ ] Données visibles dans "Temps réel" (GA4)
- [ ] Politique de confidentialité mise à jour

---

**Dernière mise à jour** : 5 novembre 2025  
**Mainteneur** : Loup Aubour  
**Support** : docs.google.com/analytics

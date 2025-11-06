# 🔒 Configuration Content Security Policy (CSP)

**Fichier** : `netlify.toml`  
**Date** : 6 novembre 2025  
**Status** : ✅ Configuré pour Google Analytics 4

---

## 📋 Configuration Actuelle

### Script Sources (`script-src`)
Autorise les scripts provenant de :
- ✅ `'self'` : Scripts du même domaine (PIXEL CLASH)
- ✅ `'unsafe-inline'` : Scripts inline (nécessaire pour certains composants)
- ✅ `https://fonts.googleapis.com` : Google Fonts
- ✅ `https://www.googletagmanager.com` : Google Tag Manager (GA4)
- ✅ `https://www.google-analytics.com` : Google Analytics

### Connect Sources (`connect-src`)
Autorise les connexions réseau vers :
- ✅ `'self'` : API du même domaine
- ✅ `https://submit-form.com` : Formspark (formulaire)
- ✅ `https://www.google-analytics.com` : GA4 data collection
- ✅ `https://analytics.google.com` : GA4 API
- ✅ `https://region1.google-analytics.com` : GA4 régional

### Image Sources (`img-src`)
Autorise les images de :
- ✅ `'self'` : Images locales
- ✅ `data:` : Images base64
- ✅ `https:` : Toutes les images HTTPS (Unsplash, etc.)
- ✅ `https://www.google-analytics.com` : Pixels GA4
- ✅ `https://www.googletagmanager.com` : Pixels GTM

---

## 🚨 Erreurs CSP Courantes

### 1. Script Bloqué
**Erreur** :
```
Refused to load the script 'https://www.googletagmanager.com/gtag/js?id=G-XXXXX' 
because it violates the following Content Security Policy directive: "script-src 'self'..."
```

**Solution** : Ajouter le domaine à `script-src`

### 2. Connexion Bloquée
**Erreur** :
```
Refused to connect to 'https://www.google-analytics.com/...' 
because it violates the following Content Security Policy directive: "connect-src 'self'..."
```

**Solution** : Ajouter le domaine à `connect-src`

### 3. Image Bloquée
**Erreur** :
```
Refused to load the image 'https://www.google-analytics.com/...' 
because it violates the following Content Security Policy directive: "img-src 'self'..."
```

**Solution** : Ajouter le domaine à `img-src`

---

## 🔧 Ajouter un Nouveau Service

### Exemple : Ajouter Hotjar

```toml
Content-Security-Policy = """
  default-src 'self';
  script-src 'self' 'unsafe-inline' 
    https://fonts.googleapis.com 
    https://www.googletagmanager.com 
    https://www.google-analytics.com
    https://static.hotjar.com;  # ← Nouveau
  connect-src 'self' 
    https://submit-form.com 
    https://www.google-analytics.com 
    https://analytics.google.com 
    https://region1.google-analytics.com
    https://*.hotjar.com;  # ← Nouveau
  img-src 'self' data: https: 
    https://www.google-analytics.com 
    https://www.googletagmanager.com;
  frame-ancestors 'none';
  base-uri 'self';
  form-action 'self' https://submit-form.com;
"""
```

---

## 📚 Ressources

### Documentation Officielle
- **MDN CSP** : https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
- **Google Analytics CSP** : https://developers.google.com/tag-platform/security/guides/csp
- **Netlify Headers** : https://docs.netlify.com/routing/headers/

### Outils de Test
- **CSP Evaluator** : https://csp-evaluator.withgoogle.com/
- **Report URI** : https://report-uri.com/home/generate

### Domaines Google Analytics 4
- `www.googletagmanager.com` : Chargement du script gtag.js
- `www.google-analytics.com` : Collecte de données
- `analytics.google.com` : API et dashboard
- `region1.google-analytics.com` : Endpoints régionaux (Europe)

---

## ⚠️ Sécurité vs Fonctionnalité

### Directives Strictes (Recommandé)
```toml
script-src 'self' https://trusted-domain.com;  # ✅ Pas de 'unsafe-inline'
```

### Directives Permissives (Nécessaire pour certains frameworks)
```toml
script-src 'self' 'unsafe-inline';  # ⚠️ Moins sécurisé mais parfois requis
```

**PIXEL CLASH** utilise `'unsafe-inline'` car :
- Astro génère des scripts inline pour l'hydratation
- Google Analytics nécessite des scripts inline
- Compromis acceptable pour un site statique sans données sensibles

---

## 🧪 Tester la CSP

### 1. Console Navigateur
Ouvrir DevTools → Console → Chercher erreurs CSP

### 2. Lighthouse
```bash
npm run test:lighthouse
```

### 3. CSP Evaluator
1. Aller sur https://csp-evaluator.withgoogle.com/
2. Coller la CSP de `netlify.toml`
3. Analyser les recommandations

---

## 📝 Changelog

### 6 novembre 2025
- ✅ Ajout domaines Google Analytics 4
  - `https://www.googletagmanager.com` (script-src)
  - `https://www.google-analytics.com` (script-src, img-src, connect-src)
  - `https://analytics.google.com` (connect-src)
  - `https://region1.google-analytics.com` (connect-src)
- ✅ Résolution erreur CSP bloquant GA4

### 5 novembre 2025 (Initial)
- ✅ Configuration CSP de base
- ✅ Google Fonts autorisé
- ✅ Formspark autorisé
- ✅ Images HTTPS autorisées

---

## 🎯 Best Practices

1. **Toujours tester après modification** : Vérifier console + Lighthouse
2. **Être spécifique** : Préférer `https://domain.com` à `https:`
3. **Éviter `'unsafe-eval'`** : Jamais nécessaire pour Astro
4. **Documenter les ajouts** : Expliquer pourquoi chaque domaine est autorisé
5. **Monitorer les erreurs** : Utiliser Google Analytics pour tracker les violations CSP

---

**Dernière mise à jour** : 6 novembre 2025  
**Mainteneur** : Loup Aubour

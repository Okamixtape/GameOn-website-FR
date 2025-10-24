# Guide Déploiement AWS - GameOn

> Guide step-by-step pour déployer GameOn sur AWS S3 + CloudFront

---

## 🎯 Prérequis

- Compte AWS (free tier OK)
- AWS CLI installée et configurée
- Nom de domaine (optionnel)
- Repository GitHub avec code GameOn

---

## 📋 Table des Matières

1. [Configuration AWS CLI](#1-configuration-aws-cli)
2. [Création S3 Bucket](#2-création-s3-bucket)
3. [Configuration CloudFront](#3-configuration-cloudfront)
4. [Certificat SSL](#4-certificat-ssl-optionnel)
5. [GitHub Actions Setup](#5-github-actions-setup)
6. [Premier Déploiement](#6-premier-déploiement)
7. [Domaine Custom](#7-domaine-custom-optionnel)
8. [Monitoring](#8-monitoring)

---

## 1. Configuration AWS CLI

### Installation

**macOS** :
```bash
brew install awscli
```

**Linux** :
```bash
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install
```

**Windows** : Télécharger depuis [aws.amazon.com/cli](https://aws.amazon.com/cli)

### Configuration

```bash
aws configure
```

Entrer :
- **AWS Access Key ID** : (depuis IAM Console)
- **AWS Secret Access Key** : (depuis IAM Console)
- **Default region name** : `eu-west-3` (Paris)
- **Default output format** : `json`

### Vérification

```bash
aws s3 ls
# Devrait lister vos buckets (ou rien si nouveau compte)
```

---

## 2. Création S3 Bucket

### Via AWS Console

1. Aller sur : [S3 Console](https://s3.console.aws.amazon.com/)
2. Cliquer : "Create bucket"
3. **Bucket name** : `gameon-landing-prod` (unique globally)
4. **Region** : EU (Paris) `eu-west-3`
5. **Block Public Access** : Décocher "Block all public access" ⚠️
   - Confirmer en cochant "I acknowledge..."
6. **Bucket Versioning** : Disabled (optionnel)
7. **Default encryption** : Amazon S3-managed keys (SSE-S3)
8. Cliquer : "Create bucket"

### Via AWS CLI

```bash
# Créer bucket
aws s3 mb s3://gameon-landing-prod --region eu-west-3

# Activer static website hosting
aws s3 website s3://gameon-landing-prod \
  --index-document index.html \
  --error-document 404.html
```

### Bucket Policy (Public Read)

Créer fichier `bucket-policy.json` :
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::gameon-landing-prod/*"
    }
  ]
}
```

Appliquer :
```bash
aws s3api put-bucket-policy \
  --bucket gameon-landing-prod \
  --policy file://bucket-policy.json
```

### Test Upload

```bash
# Build local
npm run build

# Upload vers S3
aws s3 sync dist/ s3://gameon-landing-prod --delete

# Tester
# URL: http://gameon-landing-prod.s3-website.eu-west-3.amazonaws.com
```

---

## 3. Configuration CloudFront

### Via AWS Console

1. Aller sur : [CloudFront Console](https://console.aws.amazon.com/cloudfront/)
2. Cliquer : "Create Distribution"
3. **Origin Settings** :
   - **Origin Domain** : Sélectionner votre bucket S3
   - ⚠️ Utiliser l'endpoint **website** (pas REST API)
   - Format : `gameon-landing-prod.s3-website.eu-west-3.amazonaws.com`
   - **Origin Path** : (laisser vide)
   - **Name** : `S3-gameon-landing`
4. **Default Cache Behavior** :
   - **Viewer Protocol Policy** : Redirect HTTP to HTTPS
   - **Allowed HTTP Methods** : GET, HEAD, OPTIONS
   - **Cache Policy** : CachingOptimized
   - **Compress Objects Automatically** : Yes
5. **Settings** :
   - **Price Class** : Use All Edge Locations
   - **Alternate Domain Names (CNAMEs)** : (laisser vide pour l'instant)
   - **Custom SSL Certificate** : (voir section 4 si domaine custom)
   - **Default Root Object** : `index.html`
6. Cliquer : "Create Distribution"
7. ⏰ Attendre : ~15-20 minutes (Status: "Deployed")

### Via AWS CLI

```bash
# Créer distribution (exemple simplifié)
aws cloudfront create-distribution \
  --origin-domain-name gameon-landing-prod.s3-website.eu-west-3.amazonaws.com \
  --default-root-object index.html
```

### Noter les Informations

- **Distribution ID** : `E1234ABCDEFGH` (exemple)
- **Domain Name** : `d1234abcd.cloudfront.net`
- **Tester** : `https://d1234abcd.cloudfront.net`

---

## 4. Certificat SSL (Optionnel)

⚠️ **Prérequis** : Nom de domaine personnalisé

### Demander Certificat

1. Aller sur : [Certificate Manager Console](https://console.aws.amazon.com/acm/) (région **us-east-1** obligatoire pour CloudFront)
2. Cliquer : "Request certificate"
3. **Type** : "Request a public certificate"
4. **Domain names** : `gameon.votredomaine.com`
5. **Validation method** : DNS validation (recommandé)
6. Cliquer : "Request"

### Valider Certificat

1. Copier : CNAME name et value fournis
2. Aller sur : Console de votre registrar (Gandi, OVH, Cloudflare, etc.)
3. Créer : Enregistrement DNS CNAME
4. Attendre : ~5-30 minutes (validation automatique)
5. Status : "Issued" ✅

### Associer à CloudFront

1. Retour : CloudFront Console
2. Sélectionner : Votre distribution
3. Edit : General Settings
4. **Alternate Domain Names** : `gameon.votredomaine.com`
5. **Custom SSL Certificate** : Sélectionner votre certificat ACM
6. Save

---

## 5. GitHub Actions Setup

### Créer Workflow

Fichier : `.github/workflows/deploy.yml`

```yaml
name: Deploy GameOn to AWS

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build-test-deploy:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build production
        run: npm run build
      
      - name: Run accessibility tests
        run: npm run test:a11y
      
      - name: Run Lighthouse CI
        uses: treosh/lighthouse-ci-action@v10
        with:
          urls: |
            http://localhost:4321
          uploadArtifacts: true
          temporaryPublicStorage: true
      
      - name: Deploy to AWS S3
        if: github.ref == 'refs/heads/main' && github.event_name == 'push'
        run: |
          aws s3 sync dist/ s3://${{ secrets.S3_BUCKET }} \
            --delete \
            --cache-control "public, max-age=31536000, immutable" \
            --exclude "*.html" \
            --exclude "*.xml"
          
          aws s3 sync dist/ s3://${{ secrets.S3_BUCKET }} \
            --exclude "*" \
            --include "*.html" \
            --include "*.xml" \
            --cache-control "public, max-age=3600, must-revalidate"
        env:
          AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
          AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          AWS_DEFAULT_REGION: eu-west-3
      
      - name: Invalidate CloudFront
        if: github.ref == 'refs/heads/main' && github.event_name == 'push'
        run: |
          aws cloudfront create-invalidation \
            --distribution-id ${{ secrets.CLOUDFRONT_DISTRIBUTION_ID }} \
            --paths "/*"
        env:
          AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
          AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          AWS_DEFAULT_REGION: eu-west-3
```

### Configurer Secrets GitHub

1. Aller sur : Repository GitHub → Settings → Secrets and variables → Actions
2. Cliquer : "New repository secret"
3. Créer 3 secrets :

| Name | Value |
|------|-------|
| `AWS_ACCESS_KEY_ID` | Votre AWS Access Key |
| `AWS_SECRET_ACCESS_KEY` | Votre AWS Secret Key |
| `S3_BUCKET` | `gameon-landing-prod` |
| `CLOUDFRONT_DISTRIBUTION_ID` | `E1234ABCDEFGH` (votre ID) |

⚠️ **Sécurité** : Créer un utilisateur IAM dédié avec permissions minimales :
- `s3:PutObject`
- `s3:DeleteObject`
- `cloudfront:CreateInvalidation`

---

## 6. Premier Déploiement

### Test Local

```bash
# Build
npm run build

# Vérifier dist/
ls -la dist/

# Preview local
npm run preview
```

### Déploiement Manuel (Test)

```bash
# Upload S3
aws s3 sync dist/ s3://gameon-landing-prod --delete

# Invalidate CloudFront
aws cloudfront create-invalidation \
  --distribution-id E1234ABCDEFGH \
  --paths "/*"

# Vérifier
# https://d1234abcd.cloudfront.net
```

### Déploiement Automatique

```bash
# Commit + push vers main
git add .
git commit -m "feat: initial deployment"
git push origin main

# GitHub Actions se déclenche automatiquement
# Voir: Repository → Actions tab
```

Vérifier :
- ✅ Build réussi
- ✅ Tests accessibilité passés
- ✅ Tests Lighthouse passés (≥ 95/100)
- ✅ Déploiement S3
- ✅ Invalidation CloudFront

---

## 7. Domaine Custom (Optionnel)

### Configuration DNS

Chez votre registrar (Gandi, OVH, Cloudflare, etc.) :

**Option A : CNAME (sous-domaine uniquement)**
```
Type: CNAME
Name: gameon
Value: d1234abcd.cloudfront.net
TTL: 3600
```

**Option B : ALIAS (domaine apex + sous-domaine, si supporté)**
```
Type: ALIAS / ANAME
Name: @ (ou gameon)
Value: d1234abcd.cloudfront.net
TTL: 3600
```

**Option C : Route 53 (recommandé)**
1. Créer hosted zone : `votredomaine.com`
2. Créer record A :
   - **Name** : `gameon`
   - **Type** : A - IPv4 address
   - **Value** : Alias to CloudFront distribution
   - **Distribution** : Sélectionner votre distribution

### Vérification

```bash
# Propagation DNS (peut prendre 1-48h)
dig gameon.votredomaine.com

# Test HTTPS
curl -I https://gameon.votredomaine.com
```

---

## 8. Monitoring

### CloudWatch (AWS)

**Métriques CloudFront** :
- Requests
- Bytes Downloaded
- Error Rate (4xx, 5xx)

**Alarmes recommandées** :
- 5xx Error Rate > 1% → SNS Email

### Lighthouse CI

- **Intégration** : GitHub Actions (déjà configuré)
- **Voir rapports** : GitHub Actions → Job → Artifacts

### Uptime Monitoring

**Services recommandés** :
- [UptimeRobot](https://uptimerobot.com/) (gratuit)
- [Pingdom](https://www.pingdom.com/)
- [StatusCake](https://www.statuscake.com/)

**Configuration** :
- **URL** : `https://gameon.votredomaine.com`
- **Interval** : 5 minutes
- **Alertes** : Email si down

---

## 🔧 Troubleshooting

### Problème : S3 Access Denied

**Solution** :
```bash
# Vérifier bucket policy
aws s3api get-bucket-policy --bucket gameon-landing-prod

# Ré-appliquer policy
aws s3api put-bucket-policy \
  --bucket gameon-landing-prod \
  --policy file://bucket-policy.json
```

### Problème : CloudFront Cache

**Solution** :
```bash
# Invalidation complète
aws cloudfront create-invalidation \
  --distribution-id E1234ABCDEFGH \
  --paths "/*"

# Attendre 2-5 minutes
```

### Problème : GitHub Actions Fail

**Solution** :
- Vérifier secrets GitHub (AWS keys valides)
- Vérifier permissions IAM user
- Checker logs GitHub Actions

### Problème : HTTPS Not Working

**Solution** :
- Vérifier certificat ACM (status "Issued")
- Vérifier région certificat (us-east-1 obligatoire)
- Vérifier CNAME CloudFront
- Attendre propagation CloudFront (15-20 min)

---

## 💰 Estimation Coûts

**Hypothèses** :
- 1000 visiteurs/mois
- 2 pages vues/visite
- 500 KB/page

| Service | Coût/mois |
|---------|----------|
| **S3 Storage (1 GB)** | ~0.02€ |
| **S3 Requests** | ~0.01€ |
| **CloudFront Transfer (1 GB)** | ~0.09€ |
| **CloudFront Requests** | ~0.01€ |
| **Route 53 (optionnel)** | ~0.50€ |
| **Total** | **~0.13-0.63€** |

**Free tier première année** : Encore moins cher !

---

## 📚 Ressources

**AWS Docs** :
- [S3 Static Website](https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html)
- [CloudFront Getting Started](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/GettingStarted.html)
- [Certificate Manager](https://docs.aws.amazon.com/acm/)

**Tutoriels** :
- [AWS Static Website Tutorial](https://docs.aws.amazon.com/AmazonS3/latest/userguide/HostingWebsiteOnS3Setup.html)

---

*Dernière mise à jour : Octobre 23, 2025*
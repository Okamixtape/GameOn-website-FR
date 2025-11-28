# Setup Modale d'Inscription - PIXEL CLASH

## 🎯 Problème Résolu

**Avant** : URL `/inscription` pointait vers une page inexistante  
**Après** : Modale d'inscription accessible via boutons sur toutes les pages

---

## ✅ Ce Qui a Été Fait

### 1. Système de Modale Globale

#### Hook Custom (`useInscriptionModal.ts`)
```typescript
// Hook pour gérer l'état global de la modale
export function useInscriptionModal() {
  const [isOpen, setIsOpen] = useState(false);
  // ...
}

// Fonction helper pour ouvrir depuis n'importe où
export function openInscriptionModal() {
  window.dispatchEvent(new Event('inscription-modal-toggle'));
}
```

**Avantages** :
- État global partagé entre tous les composants
- Ouverture via événement custom
- Pas de prop drilling

### 2. Composant Modale (`InscriptionModal.tsx`)

**Features** :
- ✅ Formulaire avec validation (Zod + React Hook Form)
- ✅ Validation inline en temps réel
- ✅ 3 états : idle, loading, success, error
- ✅ Écran de succès avec next steps
- ✅ Écran d'erreur avec retry
- ✅ Design Synthwave (cyan/magenta)
- ✅ Responsive mobile/desktop
- ✅ Accessibilité complète

**Champs** :
- Prénom (requis, 2-50 caractères)
- Nom (requis, 2-50 caractères)
- Email (requis, format valide)
- Confirmation âge 13+ (requis)
- Acceptation CGU (requis, avec liens)
- Newsletter (optionnel)

### 3. Données & Configuration (`inscription.ts`)

**Contenu** :
- Schema Zod pour validation
- Configuration des champs
- Contenu de la modale (textes, messages)
- Fonction de soumission (à intégrer avec Formspark)

### 4. Wrapper Global (`InscriptionModalWrapper.tsx`)

Composant à intégrer dans le layout pour rendre la modale disponible partout.

### 5. Mise à Jour des Boutons

#### Header (`Header.tsx`)
- ✅ Bouton desktop "S'inscrire"
- ✅ Bouton mobile "S'inscrire"
- ✅ Appelle `openInscriptionModal()` au clic

#### Tournament Page (`TournamentPage.tsx`)
- ✅ CTA "S'INSCRIRE MAINTENANT"
- ✅ Appelle `openInscriptionModal()` au clic

---

## 📦 Dépendances Ajoutées

```bash
npm install react-hook-form @hookform/resolvers/zod
```

**Packages** :
- `react-hook-form` : Gestion formulaire performante
- `@hookform/resolvers/zod` : Intégration Zod avec React Hook Form

---

## 🚧 À Faire (Dépendances Manquantes)

### Composants UI Shadcn

Les composants suivants sont utilisés mais n'existent pas encore :

1. **Dialog** (`src/components/ui/dialog.tsx`)
   - Composant modal de base
   - Gère overlay, fermeture, focus trap

2. **Button** (`src/components/ui/button.tsx`)
   - Bouton stylisé avec variants
   - Gère loading state, disabled

3. **Input** (`src/components/ui/input.tsx`)
   - Input text stylisé
   - Gère focus, error states

4. **Label** (`src/components/ui/label.tsx`)
   - Label accessible
   - Lié aux inputs via htmlFor

5. **Checkbox** (`src/components/ui/checkbox.tsx`)
   - Checkbox stylisé
   - Gère checked state, disabled

### Options

#### Option 1 : Installer Shadcn UI (Recommandé)
```bash
npx shadcn-ui@latest init
npx shadcn-ui@latest add dialog button input label checkbox
```

#### Option 2 : Créer Composants Custom
Créer des versions simplifiées des composants UI.

#### Option 3 : Utiliser Headless UI
```bash
npm install @headlessui/react
```

---

## 🔗 Intégration dans le Layout

### Ajouter dans `LayoutRedesign.astro`

```astro
---
import InscriptionModalWrapper from '../components/redesign/layout/InscriptionModalWrapper';
---

<body>
  <slot />
  
  <!-- Modale d'inscription globale -->
  <InscriptionModalWrapper client:load />
</body>
```

**Important** : `client:load` est nécessaire pour que le hook fonctionne.

---

## 🎨 Design

### Couleurs
- **Cyan** : `#00f3ff`
- **Magenta** : `#ff00ff`
- **Background** : `#0a0a1f`
- **Borders** : cyan/magenta avec opacity

### États
- **Idle** : Formulaire normal
- **Loading** : Spinner + texte "Inscription en cours..."
- **Success** : Écran de confirmation avec next steps
- **Error** : Écran d'erreur avec bouton retry

### Validation
- **Valide** : Bordure verte + icône checkmark
- **Invalide** : Bordure rouge + icône alert + message d'erreur
- **Neutre** : Bordure cyan

---

## 📊 Flux Utilisateur

```
1. User clique "S'inscrire" (Header ou Tournament)
   ↓
2. Modale s'ouvre
   ↓
3. User remplit formulaire
   ↓
4. Validation temps réel (inline)
   ↓
5. User clique "Valider mon inscription"
   ↓
6. État loading (1.5s simulé)
   ↓
7a. Succès → Écran confirmation
    ↓
    User peut :
    - Voir le tournoi
    - Fermer la modale
    
7b. Erreur → Écran erreur
    ↓
    User peut :
    - Réessayer
```

---

## 🔧 Configuration Formspark

### Étape 1 : Créer Formulaire
1. Aller sur https://formspark.io
2. Créer un nouveau formulaire
3. Copier le Form ID

### Étape 2 : Mettre à Jour `inscription.ts`

```typescript
export async function submitInscription(data: InscriptionFormData) {
  try {
    const response = await fetch('https://submit-form.com/YOUR_FORM_ID', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      throw new Error('Submission failed');
    }
    
    return { success: true };
  } catch (error) {
    console.error('Inscription error:', error);
    return {
      success: false,
      message: 'Une erreur est survenue. Veuillez réessayer.',
    };
  }
}
```

### Étape 3 : Configurer Notifications
- Email de confirmation automatique
- Notification admin
- Intégration Discord/Slack (optionnel)

---

## ✅ Checklist Finale

### Avant Production
- [ ] Installer dépendances UI (Shadcn ou custom)
- [ ] Intégrer `InscriptionModalWrapper` dans layout
- [ ] Configurer Formspark avec vrai Form ID
- [ ] Tester formulaire complet
- [ ] Tester validation de tous les champs
- [ ] Tester états success/error
- [ ] Tester responsive mobile/desktop
- [ ] Tester accessibilité (keyboard navigation)
- [ ] Vérifier emails de confirmation

### Tests
- [ ] Ouvrir modale depuis Header desktop
- [ ] Ouvrir modale depuis Header mobile
- [ ] Ouvrir modale depuis Tournament CTA
- [ ] Remplir formulaire valide → succès
- [ ] Remplir formulaire invalide → erreurs
- [ ] Tester fermeture modale (X, overlay, ESC)
- [ ] Tester navigation clavier
- [ ] Tester avec lecteur d'écran

---

## 🎯 Avantages de Cette Approche

### UX ✅
- Pas de rechargement de page
- Feedback instantané
- Expérience fluide
- Accessible partout

### SEO ✅
- Pas d'URL `/inscription` inutile
- Pas de duplication de contenu
- URLs propres

### Performance ✅
- Chargement lazy de la modale
- Validation côté client
- Pas de navigation inutile

### Maintenance ✅
- Code centralisé
- Facile à mettre à jour
- Réutilisable

---

## 📚 Fichiers Créés

1. `src/hooks/useInscriptionModal.ts` - Hook global
2. `src/components/redesign/inscription/InscriptionModal.tsx` - Composant modale
3. `src/components/redesign/layout/InscriptionModalWrapper.tsx` - Wrapper
4. `src/data/redesign/inscription.ts` - Configuration & données

## 📝 Fichiers Modifiés

1. `src/components/redesign/layout/Header.tsx` - Boutons → modale
2. `src/components/redesign/tournament/TournamentPage.tsx` - CTA → modale

---

**Dernière mise à jour** : 28 novembre 2025  
**Responsable** : Loup Aubour  
**Statut** : ⚠️ EN COURS - Nécessite composants UI

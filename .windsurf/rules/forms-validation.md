---
trigger: always_on
---

# Règles pour Formulaires et Validation

<form_requirements>
## Exigences formulaire GameOn

### Champs requis (RF-002)
1. **Prénom** (firstName) : texte, 2-50 caractères
2. **Nom** (lastName) : texte, 2-50 caractères
3. **Email** : format email valide
4. **Date de naissance** (birthdate) : date, âge ≥ 13 ans
5. **Ville** (city) : sélection parmi liste prédéfinie
6. **Nombre de tournois** (tournamentsCount) : nombre, 0-99
7. **Conditions générales** (terms) : checkbox, obligatoire
8. **Newsletter** (newsletter) : checkbox, optionnelle

### Validation temps réel (RF-003)
- Validation à la perte de focus (blur)
- Messages d'erreur explicites et accessibles
- Indicateurs visuels clairs (bordure rouge, icône erreur)
- Désactivation du submit si erreurs présentes
</form_requirements>

<validation_rules>
## Règles de validation

### Prénom & Nom
```typescript
const nameRegex = /^[a-zA-ZÀ-ÿ\s'-]{2,50}$/;

function validateName(value: string, fieldName: string): string | null {
  if (!value.trim()) {
    return `Le ${fieldName} est requis`;
  }
  if (value.length < 2) {
    return `Le ${fieldName} doit contenir au moins 2 caractères`;
  }
  if (value.length > 50) {
    return `Le ${fieldName} ne peut pas dépasser 50 caractères`;
  }
  if (!nameRegex.test(value)) {
    return `Le ${fieldName} contient des caractères invalides`;
  }
  return null;
}
```

### Email
```typescript
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateEmail(value: string): string | null {
  if (!value.trim()) {
    return "L'email est requis";
  }
  if (!emailRegex.test(value)) {
    return "Format d'email invalide";
  }
  return null;
}
```

### Date de naissance
```typescript
function validateBirthdate(value: string): string | null {
  if (!value) {
    return 'La date de naissance est requise';
  }
  
  const birthDate = new Date(value);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  
  if (age < 13) {
    return 'Vous devez avoir au moins 13 ans';
  }
  
  if (age > 120) {
    return 'Date de naissance invalide';
  }
  
  return null;
}
```
</validation_rules>

<accessibility_checklist>
## Checklist accessibilité formulaire

### Labels et structure
- Tous les champs ont un label associé avec for
- Labels explicites et descriptifs
- Champs requis indiqués avec aria-required
- Groupes logiques avec fieldset et legend

### Validation et erreurs
- aria-invalid sur champs en erreur
- Messages d'erreur avec role="alert"
- aria-describedby pour lier champ et erreur
- Focus sur premier champ en erreur après submit

### Navigation clavier
- Tous les champs accessibles au clavier
- Ordre de tabulation logique
- Focus visible sur tous les éléments
- Submit possible avec Enter

### Tests
- Testé avec lecteur d'écran
- Testé navigation clavier uniquement
- Testé avec zoom 200%
- axe-core score 100%
</accessibility_checklist>

<formspark_integration>
## Intégration Formspark

### Configuration
```typescript
const FORMSPARK_ENDPOINT = 'https://submit-form.com/YOUR_FORM_ID';

async function submitForm(data: FormData): Promise<boolean> {
  try {
    const response = await fetch(FORMSPARK_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(Object.fromEntries(data)),
    });
    
    return response.ok;
  } catch (error) {
    console.error('Formspark error:', error);
    return false;
  }
}
```

### RGPD
- Checkbox consentement obligatoire
- Lien vers politique de confidentialité
- Option désabonnement newsletter
- Pas de cookies tiers
</formspark_integration>

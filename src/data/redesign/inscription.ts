import { z } from 'zod';

// ===========================
// SCHEMA VALIDATION
// ===========================

export const inscriptionSchema = z.object({
  prenom: z.string().min(2, 'Le prénom doit contenir au moins 2 caractères').max(50),
  nom: z.string().min(2, 'Le nom doit contenir au moins 2 caractères').max(50),
  email: z.string().email('Email invalide'),
  ageConfirm: z.boolean().refine((val) => val === true, {
    message: 'Vous devez confirmer avoir au moins 13 ans',
  }),
  cguAccept: z.boolean().refine((val) => val === true, {
    message: 'Vous devez accepter les CGU',
  }),
  newsletter: z.boolean().optional(),
});

export type InscriptionFormData = z.infer<typeof inscriptionSchema>;

// ===========================
// FORM FIELDS CONFIG
// ===========================

export const formFields = {
  prenom: {
    name: 'prenom',
    label: 'Prénom',
    type: 'text',
    placeholder: 'John',
    required: true,
    autoComplete: 'given-name',
    maxLength: 50,
  },
  nom: {
    name: 'nom',
    label: 'Nom',
    type: 'text',
    placeholder: 'Doe',
    required: true,
    autoComplete: 'family-name',
    maxLength: 50,
  },
  email: {
    name: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'john.doe@example.com',
    required: true,
    autoComplete: 'email',
    helper: 'Nous vous enverrons la confirmation par email',
  },
  ageConfirm: {
    name: 'ageConfirm',
    label: 'Je confirme avoir au moins 13 ans',
    required: true,
  },
  cguAccept: {
    name: 'cguAccept',
    label: 'J\'accepte les Conditions Générales d\'Utilisation',
    required: true,
    links: [
      { text: 'Lire les CGU', href: '/cgu' },
      { text: 'Politique de confidentialité', href: '/politique-confidentialite' },
    ],
  },
  newsletter: {
    name: 'newsletter',
    label: 'Je souhaite recevoir la newsletter et les actualités du tournoi',
    helper: 'Vous pouvez vous désabonner à tout moment',
  },
};

// ===========================
// MODAL CONTENT
// ===========================

export const modalContent = {
  title: 'Inscription PIXEL CLASH 2026',
  subtitle: 'Rejoignez le plus grand tournoi retrogaming de France',
  cta: {
    default: 'Valider mon inscription',
    loading: 'Inscription en cours...',
  },
  success: {
    icon: '🎉',
    title: 'Inscription Confirmée !',
    subtitle: 'Bienvenue dans l\'aventure PIXEL CLASH',
    message: 'Vous recevrez un email de confirmation avec tous les détails dans quelques instants.',
    stats: [
      { emoji: '🎮', text: '125 places' },
      { emoji: '💰', text: '15K€ cashprize' },
      { emoji: '📅', text: '15-17 Juin 2026' },
    ],
    nextSteps: {
      title: 'Prochaines étapes',
      steps: [
        'Consultez votre email pour confirmer votre inscription',
        'Rejoignez notre Discord pour rencontrer la communauté',
        'Préparez-vous en consultant le règlement du tournoi',
        'Entraînez-vous sur les jeux du championnat',
      ],
    },
    actions: {
      primary: 'Voir le Tournoi',
      secondary: 'Fermer',
    },
  },
  error: {
    title: 'Erreur d\'inscription',
    message: 'Une erreur est survenue lors de l\'inscription. Veuillez réessayer.',
    action: 'Réessayer',
  },
};

// ===========================
// DEFAULT VALUES
// ===========================

export const defaultValues: Partial<InscriptionFormData> = {
  prenom: '',
  nom: '',
  email: '',
  ageConfirm: false,
  cguAccept: false,
  newsletter: false,
};

// ===========================
// SUBMIT FUNCTION
// ===========================

export async function submitInscription(data: InscriptionFormData): Promise<{ success: boolean; message?: string }> {
  try {
    // TODO: Intégrer avec Formspark ou votre backend
    console.log('Inscription data:', data);
    
    // Simuler un délai réseau
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    // Simuler succès
    return { success: true };
    
    // En production, remplacer par :
    // const response = await fetch('https://submit-form.com/YOUR_FORM_ID', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(data),
    // });
    // return { success: response.ok };
    
  } catch (error) {
    console.error('Inscription error:', error);
    return {
      success: false,
      message: 'Une erreur est survenue. Veuillez réessayer.',
    };
  }
}

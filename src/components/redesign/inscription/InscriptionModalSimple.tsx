/**
 * Modale d'inscription simplifiée - Version sans dépendances UI
 * TODO: Remplacer par InscriptionModal.tsx une fois les composants UI installés
 */

import { useState } from 'react';
import { X, ArrowRight, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';

interface InscriptionModalSimpleProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

type FormState = 'idle' | 'loading' | 'success' | 'error';

export default function InscriptionModalSimple({ open, onOpenChange }: InscriptionModalSimpleProps) {
  const [formState, setFormState] = useState<FormState>('idle');
  const [formData, setFormData] = useState({
    prenom: '',
    nom: '',
    email: '',
    ageConfirm: false,
    cguAccept: false,
    newsletter: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!open) return null;

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.prenom || formData.prenom.length < 2) {
      newErrors.prenom = 'Le prénom doit contenir au moins 2 caractères';
    }
    if (!formData.nom || formData.nom.length < 2) {
      newErrors.nom = 'Le nom doit contenir au moins 2 caractères';
    }
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email invalide';
    }
    if (!formData.ageConfirm) {
      newErrors.ageConfirm = 'Vous devez confirmer avoir au moins 13 ans';
    }
    if (!formData.cguAccept) {
      newErrors.cguAccept = 'Vous devez accepter les CGU';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setFormState('loading');

    try {
      // Simuler l'envoi
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log('Inscription:', formData);
      setFormState('success');
    } catch (error) {
      setFormState('error');
    }
  };

  const handleClose = () => {
    setFormState('idle');
    setFormData({
      prenom: '',
      nom: '',
      email: '',
      ageConfirm: false,
      cguAccept: false,
      newsletter: false,
    });
    setErrors({});
    onOpenChange(false);
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-md bg-[#0a0a1f]/95 border-2 border-cyan-500/30 backdrop-blur-xl text-white rounded-xl shadow-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="relative p-6 pb-4 border-b border-cyan-500/20">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-pink-500/10" />
          <div className="relative space-y-2">
            <h2 className="text-2xl md:text-3xl text-center">
              <span className="bg-gradient-to-r from-[#00f3ff] to-[#ff00ff] bg-clip-text text-transparent font-bold">
                Inscription PIXEL CLASH 2026
              </span>
            </h2>
            <p className="text-sm text-gray-400 text-center">
              Rejoignez le plus grand tournoi retrogaming de France
            </p>
          </div>
          
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5 text-gray-400 hover:text-white" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {formState === 'success' ? (
            <div className="text-center py-8 space-y-6">
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[#00f3ff] to-[#ff00ff] flex items-center justify-center text-4xl">
                🎉
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-[#00f3ff] to-[#ff00ff] bg-clip-text text-transparent">
                  Inscription Confirmée !
                </h3>
                <p className="text-cyan-400">Bienvenue dans l'aventure PIXEL CLASH</p>
                <p className="text-sm text-gray-400">
                  Vous recevrez un email de confirmation dans quelques instants.
                </p>
              </div>
              <button
                onClick={handleClose}
                className="px-6 py-3 bg-gradient-to-r from-[#ff00ff] to-[#00f3ff] hover:from-[#ff00ff]/90 hover:to-[#00f3ff]/90 text-white rounded-lg font-bold transition-all"
              >
                Fermer
              </button>
            </div>
          ) : formState === 'error' ? (
            <div className="text-center py-8 space-y-6">
              <div className="w-20 h-20 mx-auto rounded-full bg-red-500/20 border-2 border-red-500/50 flex items-center justify-center">
                <AlertCircle className="w-10 h-10 text-red-500" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl text-red-400 font-bold">Erreur d'inscription</h3>
                <p className="text-gray-400">Une erreur est survenue. Veuillez réessayer.</p>
              </div>
              <button
                onClick={() => setFormState('idle')}
                className="px-6 py-3 bg-gradient-to-r from-[#ff00ff] to-[#00f3ff] hover:from-[#ff00ff]/90 hover:to-[#00f3ff]/90 text-white rounded-lg font-bold transition-all"
              >
                Réessayer
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Prénom */}
              <div className="space-y-2">
                <label htmlFor="prenom" className="text-gray-300 text-sm">
                  Prénom <span className="text-[#ff00ff]">*</span>
                </label>
                <input
                  id="prenom"
                  type="text"
                  value={formData.prenom}
                  onChange={(e) => setFormData({ ...formData, prenom: e.target.value })}
                  className={`w-full px-4 py-2 bg-[#0a0a1f]/60 border-2 rounded-lg text-white placeholder:text-gray-500 focus:outline-none transition-all ${
                    errors.prenom ? 'border-red-500/50' : 'border-cyan-500/30 focus:border-[#ff00ff]'
                  }`}
                  placeholder="John"
                />
                {errors.prenom && (
                  <p className="text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.prenom}
                  </p>
                )}
              </div>

              {/* Nom */}
              <div className="space-y-2">
                <label htmlFor="nom" className="text-gray-300 text-sm">
                  Nom <span className="text-[#ff00ff]">*</span>
                </label>
                <input
                  id="nom"
                  type="text"
                  value={formData.nom}
                  onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                  className={`w-full px-4 py-2 bg-[#0a0a1f]/60 border-2 rounded-lg text-white placeholder:text-gray-500 focus:outline-none transition-all ${
                    errors.nom ? 'border-red-500/50' : 'border-cyan-500/30 focus:border-[#ff00ff]'
                  }`}
                  placeholder="Doe"
                />
                {errors.nom && (
                  <p className="text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.nom}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-gray-300 text-sm">
                  Email <span className="text-[#ff00ff]">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full px-4 py-2 bg-[#0a0a1f]/60 border-2 rounded-lg text-white placeholder:text-gray-500 focus:outline-none transition-all ${
                    errors.email ? 'border-red-500/50' : 'border-cyan-500/30 focus:border-[#ff00ff]'
                  }`}
                  placeholder="john.doe@example.com"
                />
                {errors.email && (
                  <p className="text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="border-t border-cyan-500/20 pt-5" />

              {/* Age Confirmation */}
              <div className="flex items-start gap-3">
                <input
                  id="ageConfirm"
                  type="checkbox"
                  checked={formData.ageConfirm}
                  onChange={(e) => setFormData({ ...formData, ageConfirm: e.target.checked })}
                  className="mt-1 w-4 h-4 rounded border-2 border-cyan-500/50 bg-transparent checked:bg-gradient-to-r checked:from-[#00f3ff] checked:to-[#ff00ff]"
                />
                <div className="flex-1">
                  <label htmlFor="ageConfirm" className="text-sm text-gray-300 cursor-pointer">
                    Je confirme avoir au moins 13 ans <span className="text-[#ff00ff]">*</span>
                  </label>
                  {errors.ageConfirm && (
                    <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.ageConfirm}
                    </p>
                  )}
                </div>
              </div>

              {/* CGU */}
              <div className="flex items-start gap-3">
                <input
                  id="cguAccept"
                  type="checkbox"
                  checked={formData.cguAccept}
                  onChange={(e) => setFormData({ ...formData, cguAccept: e.target.checked })}
                  className="mt-1 w-4 h-4 rounded border-2 border-cyan-500/50 bg-transparent checked:bg-gradient-to-r checked:from-[#00f3ff] checked:to-[#ff00ff]"
                />
                <div className="flex-1">
                  <label htmlFor="cguAccept" className="text-sm text-gray-300 cursor-pointer">
                    J'accepte les CGU <span className="text-[#ff00ff]">*</span>
                  </label>
                  <div className="flex gap-3 mt-1">
                    <a href="/cgu" target="_blank" className="text-xs text-cyan-400 hover:text-[#ff00ff] underline">
                      Lire les CGU
                    </a>
                    <a href="/politique-confidentialite" target="_blank" className="text-xs text-cyan-400 hover:text-[#ff00ff] underline">
                      Politique de confidentialité
                    </a>
                  </div>
                  {errors.cguAccept && (
                    <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.cguAccept}
                    </p>
                  )}
                </div>
              </div>

              {/* Newsletter */}
              <div className="flex items-start gap-3">
                <input
                  id="newsletter"
                  type="checkbox"
                  checked={formData.newsletter}
                  onChange={(e) => setFormData({ ...formData, newsletter: e.target.checked })}
                  className="mt-1 w-4 h-4 rounded border-2 border-cyan-500/50 bg-transparent checked:bg-gradient-to-r checked:from-[#00f3ff] checked:to-[#ff00ff]"
                />
                <label htmlFor="newsletter" className="text-sm text-gray-300 cursor-pointer">
                  Je souhaite recevoir la newsletter
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={formState === 'loading'}
                className="w-full px-6 py-3 bg-gradient-to-r from-[#ff00ff] to-[#00f3ff] hover:from-[#ff00ff]/90 hover:to-[#00f3ff]/90 text-white rounded-lg font-bold shadow-lg shadow-purple-500/40 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {formState === 'loading' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Inscription en cours...
                  </>
                ) : (
                  <>
                    Valider mon inscription
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>

              <p className="text-xs text-center text-gray-500">
                Vos données sont protégées et ne seront jamais partagées.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

/**
 * Hook pour gérer l'état global de la modale d'inscription
 * Utilise le localStorage pour persister l'état entre les pages
 */

import { useEffect, useState } from 'react';

const MODAL_EVENT = 'inscription-modal-toggle';

export function useInscriptionModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Écouter l'événement custom pour ouvrir la modale
    const handleToggle = () => {
      setIsOpen(true);
    };

    window.addEventListener(MODAL_EVENT, handleToggle);

    return () => {
      window.removeEventListener(MODAL_EVENT, handleToggle);
    };
  }, []);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return {
    isOpen,
    openModal,
    closeModal,
  };
}

// Fonction helper pour ouvrir la modale depuis n'importe où
export function openInscriptionModal() {
  window.dispatchEvent(new Event(MODAL_EVENT));
}

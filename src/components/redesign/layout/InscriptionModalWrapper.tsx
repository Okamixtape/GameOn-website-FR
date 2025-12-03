/**
 * Wrapper pour la modale d'inscription
 * À intégrer dans le layout principal pour qu'elle soit disponible partout
 */

import InscriptionModalSimple from '../inscription/InscriptionModalSimple';
import { useInscriptionModal } from '../../../hooks/useInscriptionModal';

export default function InscriptionModalWrapper() {
  const { isOpen, closeModal } = useInscriptionModal();

  return (
    <InscriptionModalSimple 
      open={isOpen} 
      onOpenChange={closeModal} 
    />
  );
}

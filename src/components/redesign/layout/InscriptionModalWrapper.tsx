/**
 * Wrapper pour la modale d'inscription
 * À intégrer dans le layout principal pour qu'elle soit disponible partout
 */

import InscriptionModal from '../inscription/InscriptionModal';
import { useInscriptionModal } from '../../../hooks/useInscriptionModal';

export default function InscriptionModalWrapper() {
  const { isOpen, closeModal } = useInscriptionModal();

  return (
    <InscriptionModal 
      open={isOpen} 
      onOpenChange={closeModal} 
    />
  );
}

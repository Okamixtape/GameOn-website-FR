import TournamentPage from './components/redesign/tournament/TournamentPage';
import Header from './components/redesign/layout/Header';

/**
 * PAGE DE DÉMO - Tournament Redesign
 * 
 * Cette page démontre le nouveau design de la page Tournament.
 * Elle utilise :
 * - Header redesign (avec navigation)
 * - TournamentPage redesign (toutes les sections)
 * 
 * IMPORTANT : Cette page N'AFFECTE PAS TournamentDetails.tsx original
 * 
 * Pour tester :
 * 1. Importer ce component dans votre App ou router
 * 2. Naviguer vers cette page
 * 3. Comparer avec TournamentDetails.tsx original
 */

export default function TournamentRedesignDemo() {
  const currentPath = '/tournament-redesign';

  return (
    <div className="min-h-screen bg-[#0a0a1f]">
      {/* Header avec navigation */}
      <Header currentPath={currentPath} />
      
      {/* Page Tournament Redesign */}
      <main className="pt-20">
        {/* pt-20 pour compenser le header fixed */}
        <TournamentPage />
      </main>

      {/* Footer info (optionnel) */}
      <div className="fixed bottom-4 right-4 z-50">
        <div className="px-4 py-2 rounded-lg bg-cyan-500/10 backdrop-blur-md border border-cyan-500/30">
          <p className="text-xs text-cyan-400">
            ✨ Tournament Redesign Demo
          </p>
        </div>
      </div>
    </div>
  );
}

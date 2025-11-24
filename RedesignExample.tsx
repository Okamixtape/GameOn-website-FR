import Header from './components/redesign/layout/Header';

/**
 * EXEMPLE D'UTILISATION DU NOUVEAU HEADER REDESIGN
 * 
 * Ce fichier montre comment intégrer le Header redesign.
 * Il peut être utilisé dans :
 * - Une page Astro (avec client:load)
 * - Un composant React standalone
 * - N'importe quel contexte React
 * 
 * IMPORTANT : Ce fichier N'AFFECTE PAS App.tsx
 */

export default function RedesignExample() {
  // Simuler le path actuel (dans Astro, ce serait Astro.url.pathname)
  const currentPath = window.location.pathname;

  return (
    <div className="min-h-screen bg-[#0a0a1f]">
      {/* Header Redesign */}
      <Header currentPath={currentPath} />
      
      {/* Padding pour compenser le header fixed */}
      <div className="pt-20">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl md:text-6xl mb-8">
            <span className="bg-gradient-to-r from-[#00f3ff] to-[#ff00ff] bg-clip-text text-transparent">
              HEADER REDESIGN
            </span>
          </h1>
          
          <div className="space-y-4 text-gray-400">
            <p>✅ Nouveau Header créé dans : <code className="text-cyan-400">/components/redesign/layout/Header.tsx</code></p>
            <p>✅ Style 100% conforme au header original (App.tsx)</p>
            <p>✅ Navigation par liens <code className="text-cyan-400"><a href></code> (Astro-ready)</p>
            <p>✅ Active state basé sur l'URL actuelle</p>
            <p>✅ Mobile menu fonctionnel avec Shadcn Sheet</p>
            <p>✅ CTA "S'inscrire" avec gradient + icon</p>
            <p className="pt-4 text-green-400">✅ App.tsx reste 100% intact !</p>
          </div>

          <div className="mt-12 p-6 rounded-xl bg-cyan-500/10 border border-cyan-500/30">
            <h2 className="text-xl text-cyan-400 mb-4">🎯 Comment l'utiliser dans Astro :</h2>
            <pre className="text-sm text-gray-300 overflow-x-auto">
{`<!-- src/pages/index-redesign.astro -->
---
import Header from '../components/redesign/layout/Header';
---

<html>
  <body>
    <Header client:load currentPath={Astro.url.pathname} />
    <!-- Votre contenu -->
  </body>
</html>`}
            </pre>
          </div>

          <div className="mt-8 p-6 rounded-xl bg-purple-500/10 border border-purple-500/30">
            <h2 className="text-xl text-purple-400 mb-4">📋 Features du Header :</h2>
            <ul className="space-y-2 text-gray-300">
              <li>🎨 <strong>Style Synthwave :</strong> Glassmorphism, gradients cyan/magenta</li>
              <li>🔗 <strong>4 liens de navigation :</strong> Accueil, Le Tournoi, Notre Histoire, Blog</li>
              <li>✨ <strong>Active states :</strong> Gradient + glow shadows colorées</li>
              <li>📱 <strong>Responsive :</strong> Drawer mobile avec animations</li>
              <li>🎯 <strong>CTA sticky :</strong> Bouton "S'inscrire" toujours visible</li>
              <li>🚀 <strong>Performance :</strong> Hydratation optimale avec client:load</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * FinalCTA - Appel à l'action final avant footer
 * 
 * @hydration Aucune (statique)
 * @performance CSS pur
 */

import { ArrowRight, Zap } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-dark via-bg-dark-accent to-bg-dark" />

      {/* Gradient Orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-neon-cyan rounded-full blur-[200px] opacity-10 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-neon-magenta rounded-full blur-[180px] opacity-10" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neon-cyan/10 border border-neon-cyan/30 backdrop-blur-md mb-8">
            <Zap className="w-5 h-5 text-neon-cyan animate-pulse" />
            <span className="text-neon-cyan text-sm font-medium uppercase tracking-wider">
              Dernière Chance
            </span>
          </div>

          {/* Title */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="block text-text-light mb-2">
              Prêt à Rejoindre
            </span>
            <span className="block bg-gradient-to-r from-neon-cyan via-neon-magenta to-neon-cyan bg-clip-text text-transparent">
              L'Histoire ?
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-text-muted mb-12 max-w-2xl mx-auto">
            Inscrivez-vous dès maintenant et faites partie des 500 joueurs qui
            vont marquer le championnat 2026
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Primary CTA */}
            <a
              href="/tournament"
              className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-neon-magenta via-neon-cyan to-neon-magenta bg-size-200 hover:bg-pos-100 text-white font-bold text-lg rounded-lg shadow-2xl shadow-neon-magenta/50 hover:shadow-neon-cyan/70 transition-all duration-500 animate-pulse hover:animate-none"
            >
              <span className="relative z-10">S'INSCRIRE MAINTENANT</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-neon-magenta opacity-0 group-hover:opacity-20 transition-opacity rounded-lg" />
            </a>

            {/* Secondary CTA */}
            <a
              href="/about"
              className="inline-flex items-center gap-2 px-10 py-5 bg-transparent border-2 border-neon-cyan/30 text-neon-cyan hover:bg-neon-cyan/10 hover:border-neon-cyan/50 font-bold text-lg rounded-lg transition-all duration-300"
            >
              En Savoir Plus
            </a>
          </div>

          {/* Social Proof */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-green-400 font-medium">
                487 inscrits aujourd'hui
              </span>
            </div>
            <span className="text-text-muted">•</span>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span className="text-yellow-400 font-medium">
                Places limitées
              </span>
            </div>
            <span className="text-text-muted">•</span>
            <span className="text-text-muted">Inscription gratuite</span>
          </div>
        </div>
      </div>
    </section>
  );
}

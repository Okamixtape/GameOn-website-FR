import { Trophy, Gamepad2, Users, Shield, Zap, ArrowRight, CheckCircle2, Star, Target, Award, Swords, Crown } from 'lucide-react';
import { openInscriptionModal } from '../../../hooks/useInscriptionModal';

/**
 * TOURNAMENT PAGE - Conforme à la maquette Figma Make
 * 
 * Version basée sur le code original TournamentDetails.tsx
 * avec adaptations pour Astro (pas de Shadcn Button)
 * 
 * Toutes les classes sont hardcodées pour garantir
 * la conformité 100% avec la maquette.
 */

export default function TournamentPage() {
  return (
    <div className="min-h-screen bg-[#0a0a1f] text-white">
      {/* Grid Pattern Background */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div 
          className="w-full h-full" 
          style={{
            backgroundImage: 'linear-gradient(#00f3ff 1px, transparent 1px), linear-gradient(90deg, #00f3ff 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            opacity: 0.1
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden border-b border-cyan-500/20">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1f] via-[#1a0a2e] to-[#0a0a1f]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Eyebrow */}
            <div className="inline-block mb-4">
              <span className="text-[#ff00ff] tracking-widest text-sm uppercase">
                MISSION BRIEFING
              </span>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-7xl mb-6">
              <span className="bg-gradient-to-r from-[#00f3ff] via-[#ff00ff] to-[#00f3ff] bg-clip-text text-transparent">
                LE TOURNOI
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-gray-300 mb-8">
              Format, récompenses et règlement du championnat
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-4">
              <div className="px-5 py-3 rounded-xl bg-[#0a0a1f]/70 border border-cyan-500/40 backdrop-blur-lg">
                <div className="text-[#00f3ff] text-sm">125 Slots</div>
              </div>
              <div className="px-5 py-3 rounded-xl bg-[#0a0a1f]/70 border border-yellow-500/40 backdrop-blur-lg">
                <div className="text-yellow-400 text-sm">€15,000 Prize Pool</div>
              </div>
              <div className="px-5 py-3 rounded-xl bg-[#0a0a1f]/70 border border-pink-500/40 backdrop-blur-lg">
                <div className="text-[#ff00ff] text-sm">3 Stages</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section - Format */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <div className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-md">
                <span className="text-[#00f3ff] text-sm">📋 FORMAT DU TOURNOI</span>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl mb-4">
              <span className="bg-gradient-to-r from-[#00f3ff] to-[#ff00ff] bg-clip-text text-transparent">
                VOTRE PARCOURS VERS LA VICTOIRE
              </span>
            </h2>
          </div>

          {/* Horizontal Timeline */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* Connecting Line - Desktop Only */}
              <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-30" 
                   style={{ top: '80px', left: '15%', right: '15%' }} />

              {/* Stage 1 - Qualifications */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
                <div className="relative bg-[#0a0a1f]/80 backdrop-blur-xl border-2 border-cyan-500/50 rounded-2xl p-8 group-hover:border-cyan-500 transition-all">
                  {/* Step Number */}
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/50">
                    1
                  </div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center">
                    <Target className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl mb-3 text-center text-cyan-400">Qualifications</h3>
                  
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-xs text-cyan-300 mb-4">
                    <Zap className="w-3 h-3" />
                    En ligne
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-4">
                    Phase de sélection en ligne. Les 32 meilleurs joueurs se qualifient pour la phase suivante.
                  </p>

                  {/* Details */}
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span>125 joueurs maximum</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span>Format Swiss rounds</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span>Top 32 qualifiés</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Stage 2 - Playoffs */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
                <div className="relative bg-[#0a0a1f]/80 backdrop-blur-xl border-2 border-purple-500/50 rounded-2xl p-8 group-hover:border-purple-500 transition-all">
                  {/* Step Number */}
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-purple-500/50">
                    2
                  </div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                    <Swords className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl mb-3 text-center text-purple-400">Playoffs</h3>
                  
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-xs text-purple-300 mb-4">
                    <Gamepad2 className="w-3 h-3" />
                    Double élimination
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-4">
                    Les 32 qualifiés s'affrontent en bracket double élimination. Les 3 finalistes émergent.
                  </p>

                  {/* Details */}
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                      <span>32 joueurs qualifiés</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                      <span>Format BO3 (Best of 3)</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                      <span>Top 3 en finale</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Stage 3 - Grande Finale */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
                <div className="relative bg-[#0a0a1f]/80 backdrop-blur-xl border-2 border-pink-500/50 rounded-2xl p-8 group-hover:border-pink-500 transition-all">
                  {/* Step Number */}
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center text-white shadow-lg shadow-pink-500/50">
                    3
                  </div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center">
                    <Crown className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl mb-3 text-center text-pink-400">Grande Finale</h3>
                  
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/20 border border-pink-500/30 text-xs text-pink-300 mb-4">
                    <Star className="w-3 h-3" />
                    En direct • Live
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-4">
                    Finale en présentiel à Paris La Défense Arena. Les 3 finalistes s'affrontent sur scène devant le public.
                  </p>

                  {/* Details */}
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-pink-400 mt-0.5 flex-shrink-0" />
                      <span>3 finalistes en direct</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-pink-400 mt-0.5 flex-shrink-0" />
                      <span>Format BO5 (Best of 5)</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-pink-400 mt-0.5 flex-shrink-0" />
                      <span>€15,000 distribués</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Podium Section - Prizes */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1f] via-[#1a0a2e] to-[#0a0a1f]" />
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <div className="px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 backdrop-blur-md">
                <span className="text-yellow-400 text-sm">💰 RÉCOMPENSES</span>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl mb-4">
              <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 bg-clip-text text-transparent">
                PRIZE POOL
              </span>
            </h2>
            <p className="text-3xl text-white mb-2">
              <span className="text-yellow-400">€15,000</span> à remporter
            </p>
          </div>

          {/* Podium Cards */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
              {/* 2nd Place - Silver */}
              <div className="relative group md:mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-400 to-gray-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
                <div className="relative bg-[#0a0a1f]/80 backdrop-blur-xl border-2 border-gray-400/50 rounded-2xl p-8 group-hover:border-gray-400 transition-all group-hover:scale-105 duration-300">
                  {/* Rank Badge */}
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-gray-300 to-gray-500 flex items-center justify-center text-white shadow-lg shadow-gray-500/50">
                    <Award className="w-6 h-6" />
                  </div>
                  
                  {/* Position */}
                  <div className="text-center mb-4">
                    <div className="text-5xl mb-2">🥈</div>
                    <h3 className="text-2xl text-gray-300">2ème Place</h3>
                  </div>

                  {/* Prize Amount */}
                  <div className="text-center py-6 mb-4 rounded-xl bg-gradient-to-br from-gray-400/20 to-gray-500/20 border border-gray-400/30">
                    <div className="text-4xl text-gray-300 mb-1">€5,000</div>
                    <div className="text-sm text-gray-400">Cash Prize</div>
                  </div>

                  {/* Extras */}
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-gray-400 flex-shrink-0" />
                      <span>Trophée Argent</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-gray-400 flex-shrink-0" />
                      <span>Pack Goodies Premium</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* 1st Place - Gold (Biggest) */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl opacity-50 group-hover:opacity-100 transition-opacity blur-2xl animate-pulse" />
                <div className="relative bg-[#0a0a1f]/90 backdrop-blur-xl border-4 border-yellow-400/70 rounded-2xl p-10 group-hover:border-yellow-400 transition-all group-hover:scale-110 duration-300 shadow-2xl shadow-yellow-500/40">
                  {/* Rank Badge */}
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-14 h-14 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-600 flex items-center justify-center text-white shadow-xl shadow-yellow-500/60">
                    <Crown className="w-7 h-7" />
                  </div>
                  
                  {/* Position */}
                  <div className="text-center mb-6">
                    <div className="text-6xl mb-3">🥇</div>
                    <h3 className="text-3xl text-yellow-400">CHAMPION</h3>
                    <div className="text-sm text-yellow-500/70 mt-1">1ère Place</div>
                  </div>

                  {/* Prize Amount */}
                  <div className="text-center py-8 mb-6 rounded-xl bg-gradient-to-br from-yellow-400/30 to-yellow-600/30 border-2 border-yellow-400/50 shadow-lg shadow-yellow-500/20">
                    <div className="text-6xl text-yellow-400 mb-2">€7,500</div>
                    <div className="text-sm text-yellow-500">Grand Prize</div>
                  </div>

                  {/* Extras */}
                  <ul className="space-y-3 text-sm text-gray-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                      <span>Trophée Or + Médaille</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                      <span>Pack Goodies Collector</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                      <span>Interview exclusive</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* 3rd Place - Bronze */}
              <div className="relative group md:mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
                <div className="relative bg-[#0a0a1f]/80 backdrop-blur-xl border-2 border-orange-600/50 rounded-2xl p-8 group-hover:border-orange-600 transition-all group-hover:scale-105 duration-300">
                  {/* Rank Badge */}
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-orange-700 flex items-center justify-center text-white shadow-lg shadow-orange-600/50">
                    <Award className="w-6 h-6" />
                  </div>
                  
                  {/* Position */}
                  <div className="text-center mb-4">
                    <div className="text-5xl mb-2">🥉</div>
                    <h3 className="text-2xl text-orange-400">3ème Place</h3>
                  </div>

                  {/* Prize Amount */}
                  <div className="text-center py-6 mb-4 rounded-xl bg-gradient-to-br from-orange-600/20 to-orange-700/20 border border-orange-600/30">
                    <div className="text-4xl text-orange-400 mb-1">€2,500</div>
                    <div className="text-sm text-orange-500/70">Cash Prize</div>
                  </div>

                  {/* Extras */}
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0" />
                      <span>Trophée Bronze</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0" />
                      <span>Pack Goodies</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rules Section - Bento Grid */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <div className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-md">
                <span className="text-[#00f3ff] text-sm">📜 RÈGLEMENT</span>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl mb-4">
              <span className="bg-gradient-to-r from-[#00f3ff] to-[#ff00ff] bg-clip-text text-transparent">
                RÈGLES DU JEU
              </span>
            </h2>
            <p className="text-gray-400 text-lg">
              Les conditions pour participer au championnat
            </p>
          </div>

          {/* Bento Grid */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Rule 1 - Material */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur-lg" />
              <div className="relative bg-[#0a0a1f]/70 backdrop-blur-xl border border-cyan-500/30 rounded-xl p-6 group-hover:border-cyan-500/60 transition-all">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center mb-4">
                  <Gamepad2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg text-cyan-400 mb-2">Matériel Fourni</h3>
                <p className="text-gray-400 text-sm">
                  Consoles et manettes rétro authentiques fournies sur place. Aucun matériel personnel requis.
                </p>
              </div>
            </div>

            {/* Rule 2 - Fair Play */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-pink-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur-lg" />
              <div className="relative bg-[#0a0a1f]/70 backdrop-blur-xl border border-pink-500/30 rounded-xl p-6 group-hover:border-pink-500/60 transition-all">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg text-pink-400 mb-2">Fair-Play Obligatoire</h3>
                <p className="text-gray-400 text-sm">
                  Tout comportement antisportif ou tricherie entraînera une disqualification immédiate.
                </p>
              </div>
            </div>

            {/* Rule 3 - Age */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur-lg" />
              <div className="relative bg-[#0a0a1f]/70 backdrop-blur-xl border border-purple-500/30 rounded-xl p-6 group-hover:border-purple-500/60 transition-all">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg text-purple-400 mb-2">Âge Minimum</h3>
                <p className="text-gray-400 text-sm">
                  Ouvert à tous les joueurs de 16 ans et plus. Autorisation parentale requise pour les mineurs.
                </p>
              </div>
            </div>

            {/* Rule 4 - Registration */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur-lg" />
              <div className="relative bg-[#0a0a1f]/70 backdrop-blur-xl border border-yellow-500/30 rounded-xl p-6 group-hover:border-yellow-500/60 transition-all">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg text-yellow-400 mb-2">Inscription Gratuite</h3>
                <p className="text-gray-400 text-sm">
                  Aucun frais d'inscription. Places limitées à 125 joueurs, premier arrivé premier servi.
                </p>
              </div>
            </div>

            {/* Rule 5 - Schedule */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur-lg" />
              <div className="relative bg-[#0a0a1f]/70 backdrop-blur-xl border border-green-500/30 rounded-xl p-6 group-hover:border-green-500/60 transition-all">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg text-green-400 mb-2">Ponctualité</h3>
                <p className="text-gray-400 text-sm">
                  Soyez présent 30min avant votre match. Tout retard peut entraîner une pénalité ou forfait.
                </p>
              </div>
            </div>

            {/* Rule 6 - Stream */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur-lg" />
              <div className="relative bg-[#0a0a1f]/70 backdrop-blur-xl border border-red-500/30 rounded-xl p-6 group-hover:border-red-500/60 transition-all">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg text-red-400 mb-2">Diffusion Autorisée</h3>
                <p className="text-gray-400 text-sm">
                  Les matchs seront diffusés en live. En vous inscrivant, vous acceptez d'être filmé.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky CTA Section */}
      <section className="relative py-20 overflow-hidden border-t border-cyan-500/20">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1f] via-[#1a0a2e] to-[#0a0a1f]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl mb-6">
              <span className="bg-gradient-to-r from-[#00f3ff] via-[#ff00ff] to-[#00f3ff] bg-clip-text text-transparent">
                PRÊT À REJOINDRE LA COMPÉTITION ?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Ne manquez pas votre chance de remporter €15,000 et le titre de Champion
            </p>

            {/* CTA Button */}
            <button 
              onClick={openInscriptionModal}
              className="inline-flex items-center gap-3 text-xl px-12 py-8 bg-gradient-to-r from-[#ff00ff] via-[#ff0080] to-[#ff00ff] hover:from-[#ff00ff]/90 hover:to-[#ff00ff]/70 text-white border-0 shadow-2xl shadow-pink-500/60 hover:shadow-pink-500/80 transition-all animate-pulse hover:animate-none relative group rounded-lg"
            >
              <span className="relative z-10 flex items-center gap-3">
                S'INSCRIRE MAINTENANT
                <ArrowRight className="w-6 h-6" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#00f3ff] to-[#ff00ff] opacity-0 group-hover:opacity-20 transition-opacity rounded-lg" />
            </button>

            {/* Social Proof */}
            <div className="inline-flex flex-wrap items-center justify-center gap-3 px-5 py-3 rounded-xl bg-gradient-to-r from-green-500/10 via-yellow-500/10 to-red-500/10 border border-green-500/30 backdrop-blur-md mt-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-green-400 text-sm">✓ 487 inscrits</span>
              </div>
              <span className="text-gray-500">•</span>
              <div className="flex items-center gap-2">
                <Trophy className="w-4 h-4 text-yellow-400" />
                <span className="text-yellow-400 text-sm font-semibold">€15,000 cashprize</span>
              </div>
              <span className="text-gray-500">•</span>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-red-400" />
                <span className="text-red-400 text-sm">38 places restantes</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

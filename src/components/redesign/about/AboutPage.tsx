/**
 * AboutPage Component - Conforme Figma Make
 * 
 * Sections :
 * 1. THE ORIGIN STORY (Hero)
 * 2. NOTRE PARCOURS (Timeline animée)
 * 3. NOS STATISTIQUES (Compteurs)
 * 4. NOS VALEURS (3 cartes)
 * 5. CTA Final
 */

import { Trophy, Zap, Users, Sparkles, Gamepad2, Flag, Rocket, ArrowRight, Target, Heart, Swords } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function AboutPage() {
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

      {/* Hero Section - Origin Story */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1759171053096-e7dbe7c36eb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNhZGUlMjBjYWJpbmV0JTIwdmludGFnZSUyMG5lb258ZW58MXx8fHwxNzYzOTc1MTI2fDA&ixlib=rb-4.1.0&q=80&w=1080" 
            alt="Origin story background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a1f] via-[#0a0a1f]/90 to-[#0a0a1f]/70" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a1f]" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 pb-16">
          <div className="max-w-4xl">
            {/* Eyebrow */}
            <div className="inline-block mb-6">
              <div className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-md">
                <span className="text-[#00f3ff] text-sm tracking-widest">📖 NOTRE HISTOIRE</span>
              </div>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl mb-8 leading-tight font-bold">
              <span className="block mb-2">THE</span>
              <span className="block bg-gradient-to-r from-[#00f3ff] via-[#ff00ff] to-[#00f3ff] bg-clip-text text-transparent">
                ORIGIN STORY
              </span>
            </h1>

            {/* Lead Text */}
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mb-8">
              Le championnat qui célèbre les racines du jeu vidéo et rassemble les passionnés de l'âge d'or de l'arcade.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
              Depuis 2015, PIXEL CLASH est bien plus qu'un tournoi : c'est une communauté, une passion, et une célébration de l'esprit compétitif qui a défini une génération de gamers.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section - The Journey */}
      <TimelineSection />

      {/* High Scores Section - Key Stats */}
      <StatsSection />

      {/* Our DNA Section - Values */}
      <ValuesSection />

      {/* Final CTA */}
      <CTASection />
    </div>
  );
}

// Timeline Section Component
function TimelineSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1f] via-[#1a0a2e] to-[#0a0a1f]" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <div className="px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/30 backdrop-blur-md">
              <span className="text-[#ff00ff] text-sm tracking-widest">🎮 THE JOURNEY</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl mb-4 font-bold">
            <span className="bg-gradient-to-r from-[#ff00ff] to-[#00f3ff] bg-clip-text text-transparent">
              NOTRE PARCOURS
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            L'évolution de PIXEL CLASH à travers les années
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="max-w-5xl mx-auto relative">
          {/* Neon Energy Tube with Pulse Animation */}
          <div className="absolute left-1/2 top-0 bottom-0 transform -translate-x-1/2 hidden md:block">
            {/* Thick Neon Line */}
            <div className="absolute inset-0 w-2 bg-gradient-to-b from-[#00f3ff] via-[#ff00ff] to-[#00f3ff] rounded-full shadow-[0_0_20px_rgba(0,243,255,0.5)]" />
            
            {/* Animated Pulse Beam */}
            <motion.div
              className="absolute w-3 h-24 bg-gradient-to-b from-transparent via-white to-transparent rounded-full blur-sm"
              style={{ left: '-0.125rem' }}
              animate={{
                top: ['-6rem', '100%'],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>
          
          {/* Timeline Items */}
          <div className="space-y-0">
            <TimelineItem
              year="2015"
              title="PRESS START"
              description="Le premier tournoi PIXEL CLASH voit le jour dans un petit bar arcade de Paris. 30 joueurs, une passion commune, et le début d'une légende."
              icon={<Gamepad2 className="w-6 h-6" />}
              iconColor="from-cyan-400 to-cyan-600"
              side="left"
              glowColor="cyan"
              index={0}
            />

            <TimelineItem
              year="2018"
              title="FIRST BOSS FIGHT"
              description="Expansion majeure : 5 tournois organisés, 200 participants, et notre premier partenariat avec des sponsors gaming. Le cashprize atteint 5,000€."
              icon={<Swords className="w-6 h-6" />}
              iconColor="from-purple-400 to-purple-600"
              side="right"
              glowColor="purple"
              index={1}
            />

            <TimelineItem
              year="2021"
              title="POWER UP"
              description="PIXEL CLASH devient un événement annuel incontournable. Plus de 1000 joueurs inscrits, streaming live sur Twitch, et une communauté internationale."
              icon={<Zap className="w-6 h-6" />}
              iconColor="from-yellow-400 to-yellow-600"
              side="left"
              glowColor="yellow"
              index={2}
            />

            <TimelineItem
              year="2025"
              title="LEVEL UP"
              description="Notre plus gros événement à ce jour : Paris La Défense Arena, 15,000€ de cashprize, et 3 jours de compétitions intenses. Le retro gaming n'a jamais été aussi vivant."
              icon={<Rocket className="w-6 h-6" />}
              iconColor="from-pink-400 to-pink-600"
              side="right"
              glowColor="pink"
              index={3}
            />

            <TimelineItem
              year="2026"
              title="ULTIMATE CHALLENGE"
              description="L'avenir s'annonce épique. Nouveaux jeux, nouveaux défis, et une communauté plus forte que jamais. Rejoignez-nous pour écrire la prochaine page de l'histoire."
              icon={<Flag className="w-8 h-8" />}
              iconColor="from-cyan-400 to-pink-600"
              side="left"
              glowColor="cyan"
              isFuture
              index={4}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// Stats Section Component
function StatsSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1f] via-[#0a0a1f] to-[#1a0a2e]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 backdrop-blur-md">
              <span className="text-yellow-400 text-sm tracking-widest">🏆 HIGH SCORES</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl mb-4 font-bold">
            <span className="bg-gradient-to-r from-[#00f3ff] to-[#ff00ff] bg-clip-text text-transparent">
              NOS STATISTIQUES
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Les chiffres qui racontent notre succès
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <StatCard number={10} suffix="+" label="ANNÉES D'XP" icon={<Trophy className="w-8 h-8" />} color="cyan" />
          <StatCard number={50} suffix="+" label="TOURNOIS" icon={<Gamepad2 className="w-8 h-8" />} color="purple" />
          <StatCard number={5000} suffix="+" label="JOUEURS" icon={<Users className="w-8 h-8" />} color="pink" />
          <StatCard number={15} suffix="K€" label="CASHPRIZE 2026" icon={<Sparkles className="w-8 h-8" />} color="yellow" />
        </div>
      </div>
    </section>
  );
}

// Values Section Component
function ValuesSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a0a2e] via-[#0a0a1f] to-[#0a0a1f]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-md">
              <span className="text-[#00f3ff] text-sm tracking-widest">💎 OUR DNA</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl mb-4 font-bold">
            <span className="bg-gradient-to-r from-[#ff00ff] to-[#00f3ff] bg-clip-text text-transparent">
              NOS VALEURS
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Ce qui fait battre le cœur de PIXEL CLASH
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Passion */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#ff00ff] to-[#00f3ff] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity blur-2xl" />
            <div className="relative h-full p-8 rounded-3xl bg-[#0a0a1f]/60 backdrop-blur-xl border border-cyan-500/20 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_40px_rgba(0,243,255,0.3)] transition-all">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center mb-6 mx-auto shadow-lg shadow-pink-500/50">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl mb-4 text-center text-white font-bold">PASSION</h3>
              <p className="text-gray-400 text-center leading-relaxed">
                Le retro gaming n'est pas qu'un passe-temps, c'est une passion qui nous anime. Chaque tournoi est une célébration de l'âge d'or du jeu vidéo.
              </p>
            </div>
          </div>

          {/* Community */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#ff00ff] to-[#00f3ff] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity blur-2xl" />
            <div className="relative h-full p-8 rounded-3xl bg-[#0a0a1f]/60 backdrop-blur-xl border border-purple-500/20 group-hover:border-purple-500/50 group-hover:shadow-[0_0_40px_rgba(168,85,247,0.3)] transition-all">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center mb-6 mx-auto shadow-lg shadow-purple-500/50">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl mb-4 text-center text-white font-bold">COMMUNAUTÉ</h3>
              <p className="text-gray-400 text-center leading-relaxed">
                PIXEL CLASH est avant tout une famille de gamers. Nous créons des connexions, des amitiés, et des souvenirs qui durent toute une vie.
              </p>
            </div>
          </div>

          {/* Competition */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#ff00ff] to-[#00f3ff] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity blur-2xl" />
            <div className="relative h-full p-8 rounded-3xl bg-[#0a0a1f]/60 backdrop-blur-xl border border-cyan-500/20 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_40px_rgba(0,243,255,0.3)] transition-all">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center mb-6 mx-auto shadow-lg shadow-cyan-500/50">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl mb-4 text-center text-white font-bold">COMPÉTITION</h3>
              <p className="text-gray-400 text-center leading-relaxed">
                L'esprit de compétition fair-play est au cœur de chaque événement. Que le meilleur gagne, mais que tout le monde reparte avec des étoiles dans les yeux.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// CTA Section Component
function CTASection() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="absolute inset-0 bg-gradient-to-r from-[#ff00ff] to-[#00f3ff] opacity-20 blur-3xl" />
          
          <div className="relative p-12 rounded-3xl bg-[#0a0a1f]/60 backdrop-blur-xl border border-cyan-500/30 shadow-[0_0_60px_rgba(0,243,255,0.2)]">
            <h2 className="text-4xl md:text-5xl mb-6 font-bold">
              <span className="bg-gradient-to-r from-[#00f3ff] via-[#ff00ff] to-[#00f3ff] bg-clip-text text-transparent">
                PRÊT À REJOINDRE L'HISTOIRE ?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Inscrivez-vous au PIXEL CLASH Championship 2026 et faites partie de la légende.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/details"
                className="inline-flex items-center justify-center gap-2 text-lg px-8 py-7 bg-gradient-to-r from-[#ff00ff] via-[#ff0080] to-[#ff00ff] hover:from-[#ff00ff]/90 hover:to-[#ff00ff]/70 text-white rounded-md shadow-2xl shadow-pink-500/60 hover:shadow-pink-500/80 transition-all relative group font-bold"
              >
                <span className="relative z-10 flex items-center gap-2">
                  JE M'INSCRIS MAINTENANT
                  <ArrowRight className="w-5 h-5" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#00f3ff] to-[#ff00ff] opacity-0 group-hover:opacity-20 transition-opacity rounded-md" />
              </a>
              <a 
                href="/tournament-redesign"
                className="inline-flex items-center justify-center gap-2 text-lg px-8 py-7 bg-transparent border-2 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500 rounded-md transition-all font-bold"
              >
                VOIR LE TOURNOI
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            <p className="text-gray-500 text-sm mt-6">
              Places limitées • Inscription gratuite • L'aventure commence le 15 juin 2026
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Timeline Item Component (suite dans le prochain message)

// Timeline Item Component
interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  iconColor: string;
  side: 'left' | 'right';
  glowColor: string;
  isFuture?: boolean;
  index?: number;
}

function TimelineItem({ year, title, description, icon, iconColor, side, glowColor, isFuture, index = 0 }: TimelineItemProps) {
  const glowColors = {
    cyan: {
      border: 'border-cyan-500/30',
      hoverBorder: 'hover:border-cyan-500',
      shadow: 'shadow-cyan-500/50',
      hoverShadow: 'hover:shadow-[0_0_40px_rgba(0,243,255,0.8)]',
      text: 'text-[#00f3ff]',
    },
    purple: {
      border: 'border-purple-500/30',
      hoverBorder: 'hover:border-purple-500',
      shadow: 'shadow-purple-500/50',
      hoverShadow: 'hover:shadow-[0_0_40px_rgba(168,85,247,0.8)]',
      text: 'text-purple-400',
    },
    yellow: {
      border: 'border-yellow-500/30',
      hoverBorder: 'hover:border-yellow-500',
      shadow: 'shadow-yellow-500/50',
      hoverShadow: 'hover:shadow-[0_0_40px_rgba(234,179,8,0.8)]',
      text: 'text-yellow-400',
    },
    pink: {
      border: 'border-pink-500/30',
      hoverBorder: 'hover:border-pink-500',
      shadow: 'shadow-pink-500/50',
      hoverShadow: 'hover:shadow-[0_0_40px_rgba(236,72,153,0.8)]',
      text: 'text-[#ff00ff]',
    },
  };

  const colors = glowColors[glowColor as keyof typeof glowColors];
  const verticalOffset = index % 2 === 0 ? 'md:-mt-4' : 'md:mt-4';

  return (
    <motion.div 
      className={`relative flex items-center ${side === 'right' ? 'md:flex-row-reverse' : ''} ${verticalOffset} mb-16 md:mb-20`}
      initial={{ opacity: 0, x: side === 'left' ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <motion.div 
        className={`w-full md:w-5/12 ${side === 'right' ? 'md:pl-8' : 'md:pr-8'}`}
        whileHover={{ scale: isFuture ? 1.08 : 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {isFuture && (
          <>
            <motion.div 
              className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#00f3ff] via-[#ff00ff] to-[#00f3ff] opacity-50"
              animate={{
                scale: [1, 1.02, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{ filter: 'blur(8px)' }}
            />
            <motion.div
              className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/20 to-pink-400/20"
              animate={{
                x: [0, -2, 2, 0],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 0.3,
                repeat: Infinity,
                repeatDelay: 3,
              }}
            />
          </>
        )}

        <div className={`relative p-8 rounded-2xl bg-[#0a0a1f]/80 backdrop-blur-xl border ${colors.border} ${colors.hoverBorder} ${colors.shadow} ${colors.hoverShadow} transition-all duration-300 ${
          isFuture ? 'border-2' : ''
        }`}>
          {isFuture && (
            <motion.div 
              className="absolute -top-3 -right-3 px-3 py-1 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-xs uppercase tracking-wider shadow-lg shadow-yellow-500/50 font-bold"
              animate={{
                y: [0, -2, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              🔥 BOSS LEVEL
            </motion.div>
          )}

          <div className="flex items-center gap-4 mb-4">
            <motion.div 
              className={`${isFuture ? 'w-14 h-14' : 'w-12 h-12'} rounded-xl bg-gradient-to-br ${iconColor} flex items-center justify-center ${colors.shadow} relative`}
              animate={isFuture ? {
                boxShadow: [
                  '0 0 20px rgba(0,243,255,0.5)',
                  '0 0 40px rgba(255,0,255,0.8)',
                  '0 0 20px rgba(0,243,255,0.5)',
                ],
              } : {}}
              transition={isFuture ? {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              } : {}}
            >
              {icon}
              {isFuture && (
                <motion.div
                  className="absolute inset-0 rounded-xl border-2 border-cyan-400"
                  animate={{
                    scale: [1, 1.3],
                    opacity: [0.8, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                />
              )}
            </motion.div>
            
            <div className="flex-1">
              <motion.div 
                className={`text-3xl font-mono ${colors.text} tracking-wider relative font-bold`}
                style={{
                  textShadow: isFuture ? '0 0 10px currentColor' : 'none',
                }}
                animate={isFuture ? {
                  textShadow: [
                    '0 0 10px currentColor',
                    '0 0 20px currentColor',
                    '0 0 10px currentColor',
                  ],
                } : {}}
                transition={isFuture ? {
                  duration: 2,
                  repeat: Infinity,
                } : {}}
              >
                {year}
              </motion.div>
              {isFuture && (
                <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">
                  INCOMING...
                </div>
              )}
            </div>
          </div>

          <h3 className={`text-2xl mb-3 ${isFuture ? 'text-transparent bg-gradient-to-r from-[#00f3ff] to-[#ff00ff] bg-clip-text' : 'text-white'} tracking-wider uppercase font-bold`}>
            {title}
          </h3>

          <p className="text-gray-400 leading-relaxed">
            {description}
          </p>

          <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-800">
            <div className={`w-2 h-2 rounded-full ${isFuture ? 'bg-yellow-400 animate-pulse' : 'bg-green-400'}`} />
            <span className="text-xs text-gray-500 uppercase tracking-wider">
              {isFuture ? 'Mission Active' : 'Mission Completed'}
            </span>
          </div>
        </div>
      </motion.div>

      <motion.div 
        className={`hidden md:flex absolute left-1/2 ${isFuture ? 'w-10 h-10' : 'w-8 h-8'} rounded-full bg-gradient-to-r from-[#00f3ff] to-[#ff00ff] shadow-lg ${colors.shadow} z-10 border-4 border-[#0a0a1f] items-center justify-center`}
        style={{ transform: 'translateX(-50%)' }}
        animate={isFuture ? {
          scale: [1, 1.2, 1],
          boxShadow: [
            '0 0 20px rgba(0,243,255,0.5)',
            '0 0 40px rgba(255,0,255,0.8)',
            '0 0 20px rgba(0,243,255,0.5)',
          ],
        } : {}}
        transition={isFuture ? {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        } : {}}
      >
        {isFuture && (
          <>
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-cyan-400"
              animate={{
                scale: [1, 1.8],
                opacity: [0.8, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-pink-400"
              animate={{
                scale: [1, 1.8],
                opacity: [0.8, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut",
                delay: 1,
              }}
            />
          </>
        )}
        <div className={`${isFuture ? 'w-4 h-4' : 'w-3 h-3'} rounded-full bg-white`} />
      </motion.div>
    </motion.div>
  );
}

// Stat Card Component with Counter Animation
interface StatCardProps {
  number: number;
  suffix: string;
  label: string;
  icon: React.ReactNode;
  color: string;
}

function StatCard({ number, suffix, label, icon, color }: StatCardProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const end = number;
          const duration = 2000;
          const increment = end / (duration / 16);

          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [number]);

  const colorClasses = {
    cyan: {
      gradient: 'from-cyan-400 to-cyan-600',
      text: 'text-[#00f3ff]',
      border: 'border-cyan-500/30',
      shadow: 'shadow-cyan-500/50',
    },
    purple: {
      gradient: 'from-purple-400 to-purple-600',
      text: 'text-purple-400',
      border: 'border-purple-500/30',
      shadow: 'shadow-purple-500/50',
    },
    pink: {
      gradient: 'from-pink-400 to-pink-600',
      text: 'text-[#ff00ff]',
      border: 'border-pink-500/30',
      shadow: 'shadow-pink-500/50',
    },
    yellow: {
      gradient: 'from-yellow-400 to-yellow-600',
      text: 'text-yellow-400',
      border: 'border-yellow-500/30',
      shadow: 'shadow-yellow-500/50',
    },
  };

  const colors = colorClasses[color as keyof typeof colorClasses];

  return (
    <div ref={ref} className="group relative">
      <div className="absolute inset-0 bg-gradient-to-r from-[#ff00ff] to-[#00f3ff] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
      <div className={`relative h-full p-8 rounded-2xl bg-[#0a0a1f]/60 backdrop-blur-xl border ${colors.border} ${colors.shadow} hover:shadow-2xl transition-all`}>
        <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center mb-4 mx-auto ${colors.shadow}`}>
          {icon}
        </div>
        <div className={`text-5xl font-mono mb-2 text-center ${colors.text} tracking-tight font-bold`}>
          {count.toLocaleString()}{suffix}
        </div>
        <div className="text-sm text-gray-400 text-center tracking-widest uppercase">
          {label}
        </div>
      </div>
    </div>
  );
}

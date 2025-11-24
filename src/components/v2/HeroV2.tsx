import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

/**
 * Hero Section V2 - Zeus (Cyberpunk)
 * 
 * Composant React pour Astro Islands
 * Utilise framer-motion pour animations fluides
 * 
 * @client:load - Hydraté immédiatement (hero critique)
 */
export default function HeroV2() {
  return (
    <section className="relative z-10 container mx-auto px-6 pt-40 pb-48">
      <div className="grid lg:grid-cols-12 gap-20 items-center">
        {/* Left Content - 7 columns */}
        <div className="lg:col-span-7 space-y-12">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 
              className="text-6xl md:text-7xl font-bold text-text"
              style={{ fontFamily: "Orbitron, sans-serif" }}
            >
              Championnat
              <br />
              <span 
                className="text-primary inline-block" 
                style={{ 
                  textShadow: "0 0 20px rgba(255, 222, 0, 0.3)"
                }}
              >
                Rétro Gaming
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.h2
            className="text-xl md:text-2xl text-text-secondary max-w-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Plongez dans l'univers compétitif du rétro gaming. Affrontez les
            meilleurs joueurs et revivez l'âge d'or du jeu vidéo.
          </motion.h2>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button 
              className="group relative px-12 py-6 bg-primary text-background font-bold text-lg transition-all duration-300 hover:shadow-[0_0_50px_rgba(255,222,0,0.5)]"
              style={{ fontFamily: "Orbitron, sans-serif" }}
            >
              <span className="relative z-10 flex items-center gap-3">
                Voir le tournoi
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
              </span>
            </button>
          </motion.div>

          {/* Stats - Minimalist */}
          <motion.div
            className="flex gap-16 pt-12 border-t border-text/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div>
              <div 
                className="text-3xl text-text mb-1 font-bold"
                style={{ fontFamily: "Orbitron, sans-serif" }}
              >
                500+
              </div>
              <div className="text-sm text-text-secondary uppercase tracking-wider">
                Participants
              </div>
            </div>
            <div>
              <div 
                className="text-3xl text-text mb-1 font-bold"
                style={{ fontFamily: "Orbitron, sans-serif" }}
              >
                15+
              </div>
              <div className="text-sm text-text-secondary uppercase tracking-wider">
                Jeux Rétro
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Image - 5 columns */}
        <motion.div
          className="lg:col-span-5 relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="relative">
            {/* Subtle Glow - Only Yellow */}
            <div className="absolute -inset-8 bg-primary rounded-lg blur-3xl opacity-10" />
            
            {/* Image Container */}
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1583634852966-130c15654305?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRybyUyMGdhbWluZyUyMGFyY2FkZSUyMG5lb258ZW58MXx8fHwxNzYzOTA0NDk3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Retro Gaming Championship"
                className="w-full h-auto"
                loading="eager"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/40" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

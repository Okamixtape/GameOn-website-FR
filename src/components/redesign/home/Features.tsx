/**
 * Features Section - 4 cartes glassmorphism
 * 
 * @hydration Aucune (statique Astro recommandé)
 * @performance CSS Tailwind pur (pas de Motion pour hover)
 */

import { Trophy, Users, Gamepad2, Star, ArrowRight } from "lucide-react";
import {
  featuresData,
  featuresHeader,
  featuresCTA,
} from "../../../data/redesign/home";

// Mapping manuel des icônes (évite import wildcard de 1000+ icônes)
const iconMap = {
  Trophy,
  Users,
  Gamepad2,
  Star,
} as const;

export default function Features() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-dark via-bg-dark-accent to-bg-dark" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="px-4 py-2 rounded-full bg-neon-cyan/10 border border-neon-cyan/30 backdrop-blur-md">
              <span className="text-neon-cyan text-sm font-medium">
                {featuresHeader.eyebrow}
              </span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl mb-4 font-bold">
            <span className="bg-gradient-to-r from-neon-cyan to-neon-magenta bg-clip-text text-transparent">
              {featuresHeader.title}
            </span>
          </h2>
          <p className="text-text-muted text-lg">{featuresHeader.subtitle}</p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuresData.map((feature) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap];

            return (
              <div key={feature.id} className="group relative">
                {/* Glow effect (CSS pur - performance) */}
                <div className="absolute inset-0 bg-gradient-to-r from-neon-magenta to-neon-cyan rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />

                {/* Card - Glassmorphism Cyberpunk */}
                <div className="relative h-full p-6 rounded-2xl bg-bg-dark/60 backdrop-blur-xl border border-neon-cyan/20 group-hover:border-neon-cyan/50 group-hover:shadow-[0_0_25px_rgba(0,243,255,0.3)] transition-all duration-300">
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.iconColor} flex items-center justify-center mb-4`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl mb-2 text-text-light font-bold">{feature.title}</h3>
                  <p className="text-text-muted">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <a
            href={featuresCTA.href}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-neon-magenta to-neon-cyan hover:from-neon-magenta/90 hover:to-neon-cyan/90 text-white font-bold border-0 rounded-lg shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 transition-all"
          >
            {featuresCTA.text}
            <ArrowRight className="w-4 h-4" />
          </a>
          <p className="text-text-muted text-sm mt-4">{featuresCTA.note}</p>
        </div>
      </div>
    </section>
  );
}

/**
 * Hero Section - Homepage Redesign
 * 
 * @hydration client:load (animations critiques UX)
 * @performance Utilise des images optimisées et animations légères
 */

import { Calendar, MapPin, Trophy, Clock, ArrowRight } from "lucide-react";
import { heroData } from "../../../data/redesign/home";

export default function Hero() {
  return (
    <section className="relative min-h-[700px] flex items-center overflow-visible py-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroData.image.src}
          alt={heroData.image.alt}
          className="w-full h-full object-cover"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a1f] via-[#0a0a1f]/95 to-[#0a0a1f]/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a1f]" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          {/* Eyebrow - Brand Presentation */}
          <div className="inline-block mb-4">
            <span className="text-neon-magenta tracking-widest text-sm uppercase font-bold">
              {heroData.eyebrow}
            </span>
          </div>

          {/* Main H1 - SEO Optimized */}
          <h1 className="mb-8 leading-none">
            <span className="block text-5xl md:text-7xl lg:text-8xl tracking-tight mb-4 text-text-light font-bold">
              {heroData.title}
            </span>
            <span className="block text-5xl md:text-7xl lg:text-8xl tracking-tight font-bold">
              <span className="bg-gradient-to-r from-neon-cyan via-neon-magenta to-neon-cyan bg-clip-text text-transparent">
                {heroData.titleHighlight}
              </span>
            </span>
          </h1>

          {/* Date & Location Badges - Critical Info Above Fold */}
          <div className="flex flex-wrap gap-3 mb-8">
            <div className="px-5 py-3 rounded-xl bg-[#0a0a1f]/70 border border-cyan-500/40 backdrop-blur-lg flex items-center gap-3 shadow-lg shadow-cyan-500/20">
              <Calendar className="w-5 h-5 text-[#00f3ff]" />
              <div>
                <div className="text-xs text-gray-400 uppercase">
                  {heroData.date.label}
                </div>
                <div className="text-white">{heroData.date.value}</div>
              </div>
            </div>
            <div className="px-5 py-3 rounded-xl bg-[#0a0a1f]/70 border border-pink-500/40 backdrop-blur-lg flex items-center gap-3 shadow-lg shadow-pink-500/20">
              <MapPin className="w-5 h-5 text-[#ff00ff]" />
              <div>
                <div className="text-xs text-gray-400 uppercase">
                  {heroData.location.label}
                </div>
                <div className="text-white">{heroData.location.value}</div>
              </div>
            </div>
          </div>

          {/* Primary CTA */}
          <div className="mb-4">
            <a
              href={heroData.ctaPrimary.href}
              className="inline-flex items-center gap-2 text-lg px-8 py-7 bg-gradient-to-r from-[#ff00ff] via-[#ff0080] to-[#ff00ff] hover:from-[#ff00ff]/90 hover:to-[#ff00ff]/70 text-white border-0 rounded-lg shadow-2xl shadow-pink-500/60 hover:shadow-pink-500/80 transition-all animate-pulse hover:animate-none relative group"
            >
              <span className="relative z-10 flex items-center gap-2">
                {heroData.ctaPrimary.text}
                <ArrowRight className="w-5 h-5" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#00f3ff] to-[#ff00ff] opacity-0 group-hover:opacity-20 transition-opacity rounded-lg" />
            </a>
          </div>

          {/* Combined Badge - Social Proof + Cashprize + Urgency */}
          <div className="inline-flex flex-wrap items-center gap-3 px-5 py-3 rounded-xl bg-gradient-to-r from-green-500/10 via-yellow-500/10 to-red-500/10 border border-green-500/30 backdrop-blur-md mb-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-green-400 text-sm">
                ✓ {heroData.socialProof.registrations}
              </span>
            </div>
            <span className="text-gray-500">•</span>
            <div className="flex items-center gap-2">
              <Trophy className="w-4 h-4 text-yellow-400" />
              <span className="text-yellow-400 text-sm font-semibold">
                {heroData.socialProof.cashprize}
              </span>
            </div>
            <span className="text-gray-500">•</span>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-red-400" />
              <span className="text-red-400 text-sm">
                {heroData.socialProof.urgency}
              </span>
            </div>
          </div>

          {/* Secondary CTA */}
          <div>
            <a
              href={heroData.ctaSecondary.href}
              className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-white/30 text-white hover:bg-white/5 hover:border-white/50 rounded-lg transition-all"
            >
              {heroData.ctaSecondary.text}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

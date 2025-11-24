import { ArrowRight, CheckCircle2, type LucideIcon } from 'lucide-react';
import { heroData, tournamentStages, prizePool, rules, ctaData } from '../../../data/redesign/tournament';

// Grid Background Component
function GridBackground() {
  return (
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
  );
}

// Hero Section Component
function HeroSection() {
  return (
    <section className="relative py-20 overflow-hidden border-b border-cyan-500/20">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1f] via-[#1a0a2e] to-[#0a0a1f]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Eyebrow */}
          <div className="inline-block mb-4">
            <span className="text-[#ff00ff] tracking-widest text-sm uppercase">
              {heroData.eyebrow}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl mb-6">
            <span className="bg-gradient-to-r from-[#00f3ff] via-[#ff00ff] to-[#00f3ff] bg-clip-text text-transparent">
              {heroData.title}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-gray-300 mb-8">
            {heroData.subtitle}
          </p>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-4">
            {heroData.quickStats.map((stat, index) => (
              <div 
                key={index}
                className={`px-5 py-3 rounded-xl bg-[#0a0a1f]/70 ${stat.borderColor} border backdrop-blur-lg`}
              >
                <div className={`${stat.textColor} text-sm`}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Tournament Format Section Component
function TournamentFormatSection() {
  return (
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
            <div 
              className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-30" 
              style={{ top: '80px', left: '15%', right: '15%' }} 
            />

            {/* Stage Cards */}
            {tournamentStages.map((stage) => {
              const IconComponent = stage.icon;
              const BadgeIcon = stage.badge.icon;
              
              return (
                <div key={stage.id} className="relative group">
                  <div className={`absolute inset-0 bg-gradient-to-r ${stage.gradient.from} ${stage.gradient.to} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl`} />
                  <div className={`relative bg-[#0a0a1f]/80 backdrop-blur-xl border-2 ${stage.borderColor} rounded-2xl p-8 ${stage.hoverBorder} transition-all`}>
                    {/* Step Number */}
                    <div className={`absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-br ${stage.gradient.from} ${stage.gradient.to} flex items-center justify-center text-white shadow-lg ${stage.shadowColor}`}>
                      {stage.number}
                    </div>
                    
                    {/* Icon */}
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${stage.gradient.from} ${stage.gradient.to} flex items-center justify-center`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className={`text-2xl mb-3 text-center ${stage.textColor}`}>{stage.title}</h3>
                    
                    {/* Badge */}
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-${stage.color}-500/20 border border-${stage.color}-500/30 text-xs text-${stage.color}-300 mb-4`}>
                      <BadgeIcon className="w-3 h-3" />
                      {stage.badge.text}
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 text-sm mb-4">
                      {stage.description}
                    </p>

                    {/* Details */}
                    <ul className="space-y-2 text-sm">
                      {stage.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-300">
                          <CheckCircle2 className={`w-4 h-4 ${stage.checkColor} mt-0.5 flex-shrink-0`} />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// Prize Pool Section Component
function PrizePoolSection() {
  return (
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
            <span className="text-yellow-400">{prizePool.total}</span> à remporter
          </p>
        </div>

        {/* Podium Cards */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
            {prizePool.podium.map((place) => {
              const IconComponent = place.icon;
              const isWinner = place.isWinner;
              
              return (
                <div key={place.id} className={`relative group ${place.mdOffset || ''}`}>
                  <div className={`absolute inset-0 bg-gradient-to-r ${place.gradient.from} ${place.gradient.to} rounded-2xl opacity-${isWinner ? '50' : '0'} group-hover:opacity-100 transition-opacity blur-${isWinner ? '2xl' : 'xl'} ${isWinner ? 'animate-pulse' : ''}`} />
                  <div className={`relative bg-[#0a0a1f]/${isWinner ? '90' : '80'} backdrop-blur-xl border-${isWinner ? '4' : '2'} ${place.borderColor} rounded-2xl p-${isWinner ? '10' : '8'} ${place.hoverBorder} transition-all group-hover:scale-${isWinner ? '110' : '105'} duration-300 ${isWinner ? 'shadow-2xl shadow-yellow-500/40' : ''}`}>
                    {/* Rank Badge */}
                    <div className={`absolute -top-${isWinner ? '6' : '5'} left-1/2 transform -translate-x-1/2 w-${isWinner ? '14' : '12'} h-${isWinner ? '14' : '12'} rounded-full bg-gradient-to-br ${place.gradient.from} ${place.gradient.to} flex items-center justify-center text-white shadow-${isWinner ? 'xl' : 'lg'} ${place.shadowColor}`}>
                      <IconComponent className={`w-${isWinner ? '7' : '6'} h-${isWinner ? '7' : '6'}`} />
                    </div>
                    
                    {/* Position */}
                    <div className={`text-center mb-${isWinner ? '6' : '4'}`}>
                      <div className={`text-${isWinner ? '6xl' : '5xl'} mb-${isWinner ? '3' : '2'}`}>{place.emoji}</div>
                      <h3 className={`text-${isWinner ? '3xl' : '2xl'} ${place.textColor}`}>{place.rank}</h3>
                      {place.rankSubtitle && (
                        <div className="text-sm text-yellow-500/70 mt-1">{place.rankSubtitle}</div>
                      )}
                    </div>

                    {/* Prize Amount */}
                    <div className={`text-center py-${isWinner ? '8' : '6'} mb-${isWinner ? '6' : '4'} rounded-xl bg-gradient-to-br from-${place.color}-${isWinner ? '400' : '600'}/${isWinner ? '30' : '20'} to-${place.color}-${isWinner ? '600' : '700'}/${isWinner ? '30' : '20'} border-${isWinner ? '2' : ''} border-${place.color}-${isWinner ? '400' : '600'}/${isWinner ? '50' : '30'} ${isWinner ? 'shadow-lg shadow-yellow-500/20' : ''}`}>
                      <div className={`text-${isWinner ? '6xl' : '4xl'} ${place.textColor} mb-${isWinner ? '2' : '1'}`}>{place.prize}</div>
                      <div className={`text-sm text-${place.color}-${isWinner ? '500' : '500/70'}`}>{place.prizeLabel || 'Cash Prize'}</div>
                    </div>

                    {/* Extras */}
                    <ul className={`space-y-${isWinner ? '3' : '2'} text-sm text-gray-300`}>
                      {place.extras.map((extra, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className={`w-${isWinner ? '5' : '4'} h-${isWinner ? '5' : '4'} ${place.checkColor} flex-shrink-0`} />
                          <span>{extra}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// Rules Section Component
function RulesSection() {
  return (
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
          {rules.map((rule) => {
            const IconComponent = rule.icon;
            
            return (
              <div key={rule.id} className="group relative">
                <div className={`absolute inset-0 bg-gradient-to-r ${rule.gradient.from} ${rule.gradient.to} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur-lg`} />
                <div className={`relative bg-[#0a0a1f]/70 backdrop-blur-xl border ${rule.borderColor} rounded-xl p-6 ${rule.hoverBorder} transition-all`}>
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${rule.gradient.from} ${rule.gradient.to} flex items-center justify-center mb-4`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className={`text-lg ${rule.textColor} mb-2`}>{rule.title}</h3>
                  <p className="text-gray-400 text-sm">
                    {rule.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// CTA Section Component
function CTASection() {
  return (
    <section className="relative py-20 overflow-hidden border-t border-cyan-500/20">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1f] via-[#1a0a2e] to-[#0a0a1f]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl mb-6">
            <span className="bg-gradient-to-r from-[#00f3ff] via-[#ff00ff] to-[#00f3ff] bg-clip-text text-transparent">
              {ctaData.title}
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            {ctaData.subtitle}
          </p>

          {/* CTA Button */}
          <a
            href="/inscription"
            className="inline-flex items-center gap-3 text-xl px-12 py-8 bg-gradient-to-r from-[#ff00ff] via-[#ff0080] to-[#ff00ff] hover:from-[#ff00ff]/90 hover:to-[#ff00ff]/70 text-white rounded-lg shadow-2xl shadow-pink-500/60 hover:shadow-pink-500/80 transition-all animate-pulse hover:animate-none relative group"
          >
            <span className="relative z-10 flex items-center gap-3">
              {ctaData.buttonText}
              <ArrowRight className="w-6 h-6" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#00f3ff] to-[#ff00ff] opacity-0 group-hover:opacity-20 transition-opacity rounded-lg" />
          </a>

          {/* Social Proof */}
          <div className="inline-flex flex-wrap items-center justify-center gap-3 px-5 py-3 rounded-xl bg-gradient-to-r from-green-500/10 via-yellow-500/10 to-red-500/10 border border-green-500/30 backdrop-blur-md mt-6">
            {ctaData.socialProof.map((item, index) => {
              const IconComponent = item.icon !== 'dot' ? item.icon as LucideIcon : null;
              
              return (
                <div key={index} className="flex items-center gap-2">
                  {index > 0 && <span className="text-gray-500">•</span>}
                  {item.icon === 'dot' ? (
                    <>
                      <div className={`w-2 h-2 ${item.dotColor} rounded-full animate-pulse`} />
                      <span className={`${item.textColor} text-sm`}>{item.text}</span>
                    </>
                  ) : IconComponent ? (
                    <>
                      <IconComponent className={`w-4 h-4 ${item.textColor}`} />
                      <span className={`${item.textColor} text-sm ${item.color === 'yellow' ? 'font-semibold' : ''}`}>{item.text}</span>
                    </>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// Main Tournament Page Component
export default function TournamentPage() {
  return (
    <div className="min-h-screen bg-[#0a0a1f] text-white">
      {/* Grid Background */}
      <GridBackground />

      {/* All Sections */}
      <HeroSection />
      <TournamentFormatSection />
      <PrizePoolSection />
      <RulesSection />
      <CTASection />
    </div>
  );
}

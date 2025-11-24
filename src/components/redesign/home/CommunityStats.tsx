/**
 * CommunityStats - Compteurs animés
 * 
 * @hydration client:visible (animations au scroll)
 * @performance Compteurs animés avec IntersectionObserver
 */

import { Trophy, Users, Gamepad2, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const stats = [
  {
    id: "players",
    icon: Users,
    value: 500,
    suffix: "+",
    label: "Joueurs Inscrits",
    color: "from-cyan-400 to-cyan-600",
  },
  {
    id: "tournaments",
    icon: Trophy,
    value: 15,
    suffix: "+",
    label: "Jeux au Programme",
    color: "from-yellow-400 to-yellow-600",
  },
  {
    id: "cashprize",
    icon: Zap,
    value: 15,
    suffix: "K€",
    label: "Prize Pool",
    color: "from-purple-400 to-purple-600",
  },
  {
    id: "experience",
    icon: Gamepad2,
    value: 3,
    suffix: " jours",
    label: "D'Expérience Gaming",
    color: "from-pink-400 to-pink-600",
  },
];

function StatCard({ stat }: { stat: typeof stats[0] }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = stat.value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= stat.value) {
        setCount(stat.value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, stat.value]);

  const Icon = stat.icon;

  return (
    <div ref={ref} className="group relative">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-neon-magenta rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />

      {/* Card */}
      <div className="relative p-8 rounded-2xl bg-bg-dark/60 backdrop-blur-xl border border-neon-cyan/20 group-hover:border-neon-cyan/50 transition-all duration-300 text-center">
        {/* Icon */}
        <div
          className={`w-16 h-16 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto mb-4`}
        >
          <Icon className="w-8 h-8 text-white" />
        </div>

        {/* Counter */}
        <div className="text-4xl md:text-5xl font-bold text-text-light mb-2">
          {count}
          {stat.suffix}
        </div>

        {/* Label */}
        <div className="text-text-muted uppercase tracking-wider text-sm">
          {stat.label}
        </div>
      </div>
    </div>
  );
}

export default function CommunityStats() {
  return (
    <section className="relative py-20">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-dark via-bg-dark-accent to-bg-dark" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="px-4 py-2 rounded-full bg-neon-cyan/10 border border-neon-cyan/30 backdrop-blur-md">
              <span className="text-neon-cyan text-sm font-medium">
                📊 NOTRE COMMUNAUTÉ
              </span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl mb-4 font-bold">
            <span className="bg-gradient-to-r from-neon-cyan to-neon-magenta bg-clip-text text-transparent">
              En Chiffres
            </span>
          </h2>
          <p className="text-text-muted text-lg">
            Une communauté passionnée qui ne cesse de grandir
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <StatCard key={stat.id} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}

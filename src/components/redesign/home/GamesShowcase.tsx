/**
 * GamesShowcase - Grille de jeux rétro
 * 
 * @hydration client:visible (below fold)
 * @performance Images lazy loaded
 */

import { Gamepad2 } from "lucide-react";

const games = [
  {
    id: "sf2",
    name: "Street Fighter II",
    year: "1991",
    platform: "Arcade",
    image: "https://placehold.co/400x300/1a0a2e/00f3ff?text=Street+Fighter+II",
  },
  {
    id: "pac-man",
    name: "Pac-Man",
    year: "1980",
    platform: "Arcade",
    image: "https://placehold.co/400x300/1a0a2e/ff00ff?text=Pac-Man",
  },
  {
    id: "tetris",
    name: "Tetris",
    year: "1984",
    platform: "Multi",
    image: "https://placehold.co/400x300/1a0a2e/00f3ff?text=Tetris",
  },
  {
    id: "mario",
    name: "Super Mario Bros",
    year: "1985",
    platform: "NES",
    image: "https://placehold.co/400x300/1a0a2e/ff00ff?text=Super+Mario",
  },
  {
    id: "sonic",
    name: "Sonic the Hedgehog",
    year: "1991",
    platform: "Mega Drive",
    image: "https://placehold.co/400x300/1a0a2e/00f3ff?text=Sonic",
  },
  {
    id: "donkey-kong",
    name: "Donkey Kong",
    year: "1981",
    platform: "Arcade",
    image: "https://placehold.co/400x300/1a0a2e/ff00ff?text=Donkey+Kong",
  },
];

export default function GamesShowcase() {
  return (
    <section className="relative py-20 bg-bg-dark-accent/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="px-4 py-2 rounded-full bg-neon-magenta/10 border border-neon-magenta/30 backdrop-blur-md">
              <span className="text-neon-magenta text-sm font-medium flex items-center gap-2">
                <Gamepad2 className="w-4 h-4" />
                JEUX LÉGENDAIRES
              </span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl mb-4 font-bold">
            <span className="bg-gradient-to-r from-neon-magenta to-neon-cyan bg-clip-text text-transparent">
              Les Classiques du Tournoi
            </span>
          </h2>
          <p className="text-text-muted text-lg">
            6 jeux iconiques qui ont marqué l'histoire du gaming
          </p>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game) => (
            <div key={game.id} className="group relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-neon-magenta rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg" />

              {/* Card */}
              <div className="relative overflow-hidden rounded-xl bg-bg-dark/60 backdrop-blur-xl border border-neon-cyan/20 group-hover:border-neon-cyan/50 transition-all duration-300">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={game.image}
                    alt={game.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-text-light mb-2">
                    {game.name}
                  </h3>
                  <div className="flex items-center gap-3 text-sm text-text-muted">
                    <span>{game.platform}</span>
                    <span>•</span>
                    <span>{game.year}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

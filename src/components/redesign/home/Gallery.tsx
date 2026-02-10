/**
 * Gallery Section - Moments Forts Édition Précédente
 * 
 * @hydration client:visible (lazy load images)
 * @performance Images optimisées avec placeholder
 */

import { useState } from "react";
import { X } from "lucide-react";

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: "arcade-1",
    src: "https://images.unsplash.com/photo-1511882150382-421056c89033?w=600&h=400&fit=crop",
    alt: "Bornes d'arcade rétro alignées - Ambiance néon",
    category: "Compétition",
  },
  {
    id: "retro-2",
    src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=400&fit=crop",
    alt: "Manettes retrogaming vintage - Setup classique",
    category: "Équipement",
  },
  {
    id: "gaming-3",
    src: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop",
    alt: "Compétition esport - Joueurs sur scène",
    category: "Compétition",
  },
  {
    id: "arcade-4",
    src: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=600&h=400&fit=crop",
    alt: "Salle d'arcade rétro - Ambiance années 80",
    category: "Ambiance",
  },
  {
    id: "esport-5",
    src: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=600&h=400&fit=crop",
    alt: "Joueur concentré devant son écran - Gaming intense",
    category: "Compétition",
  },
  {
    id: "retro-6",
    src: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=600&h=400&fit=crop",
    alt: "Borne d'arcade Pac-Man classique - Icône retrogaming",
    category: "Ambiance",
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <section className="relative py-20">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-dark via-bg-dark-accent to-bg-dark" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="px-4 py-2 rounded-full bg-neon-magenta/10 border border-neon-magenta/30 backdrop-blur-md">
              <span className="text-neon-magenta text-sm font-medium">
                📸 GALERIE
              </span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl mb-4 font-bold">
            <span className="bg-gradient-to-r from-neon-cyan to-neon-magenta bg-clip-text text-transparent">
              Moments Forts de l'Édition Précédente
            </span>
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Revivez l'ambiance unique du plus grand tournoi retrogaming de France
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <button
              key={image.id}
              onClick={() => setSelectedImage(image)}
              className="group relative aspect-video rounded-xl overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <img
                src={image.src}
                alt={image.alt}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="text-white">
                  <div className="font-semibold mb-1">{image.category}</div>
                  <div className="text-sm text-gray-300">{image.alt}</div>
                </div>
              </div>

              {/* Category Badge */}
              <div className="absolute top-4 right-4">
                <div className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/20">
                  <span className="text-white text-xs font-medium">
                    {image.category}
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.src.replace('w=600&h=400', 'w=1200&h=800')}
              alt={selectedImage.alt}
              className="w-full rounded-xl object-cover"
            />
            <div className="mt-4 text-center">
              <div className="text-white font-semibold">{selectedImage.category}</div>
              <div className="text-gray-400 text-sm">{selectedImage.alt}</div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

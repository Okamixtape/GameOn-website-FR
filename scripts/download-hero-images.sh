#!/bin/bash

# Script pour télécharger et optimiser les images hero
# Remplace les URLs Unsplash par des images locales WebP

set -e

echo "🖼️  Téléchargement et optimisation des images hero..."
echo ""

# Créer dossier si nécessaire
mkdir -p public/images/redesign

# URLs Unsplash actuelles
HERO_HOME="https://images.unsplash.com/photo-1511512578047-dfb367046420"
HERO_TOURNAMENT="https://images.unsplash.com/photo-1542751371-adc38448a05e"
HERO_ABOUT="https://images.unsplash.com/photo-1538481199705-c710c4e965fc"
HERO_DEVELOPER="https://images.unsplash.com/photo-1498050108023-c5249f4df085"

# Fonction de téléchargement et conversion
download_and_optimize() {
  local url=$1
  local name=$2
  
  echo "📥 Téléchargement: $name..."
  
  # Télécharger 1200px
  curl -s "${url}?w=1200&q=80&fm=jpg" -o "public/images/redesign/${name}-1200.jpg"
  
  # Télécharger 800px
  curl -s "${url}?w=800&q=80&fm=jpg" -o "public/images/redesign/${name}-800.jpg"
  
  # Télécharger 400px
  curl -s "${url}?w=400&q=80&fm=jpg" -o "public/images/redesign/${name}-400.jpg"
  
  echo "✅ ${name} téléchargé (3 tailles)"
}

# Télécharger toutes les images
download_and_optimize "$HERO_HOME" "hero-home"
download_and_optimize "$HERO_TOURNAMENT" "hero-tournament"
download_and_optimize "$HERO_ABOUT" "hero-about"
download_and_optimize "$HERO_DEVELOPER" "hero-developer"

echo ""
echo "✨ Téléchargement terminé !"
echo ""
echo "📊 Images créées:"
ls -lh public/images/redesign/hero-*.jpg
echo ""
echo "💡 Prochaine étape: Mettre à jour les data layers pour utiliser ces images locales"

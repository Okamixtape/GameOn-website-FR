#!/bin/bash

# Script d'optimisation des images blog
# Utilise ImageMagick (brew install imagemagick)

BLOG_DIR="public/blog"
MAX_WIDTH=1200
QUALITY=85

echo "🖼️  Optimisation des images blog..."

for img in "$BLOG_DIR"/*.{jpg,jpeg,png,JPG,JPEG,PNG} 2>/dev/null; do
  if [ -f "$img" ]; then
    filename=$(basename "$img")
    echo "📸 Traitement: $filename"
    
    # Taille originale
    original_size=$(du -h "$img" | cut -f1)
    echo "   Taille originale: $original_size"
    
    # Backup
    cp "$img" "$img.backup"
    
    # Optimisation avec ImageMagick
    magick "$img" \
      -resize "${MAX_WIDTH}x>" \
      -quality $QUALITY \
      -strip \
      "$img"
    
    # Taille optimisée
    optimized_size=$(du -h "$img" | cut -f1)
    echo "   ✅ Taille optimisée: $optimized_size"
    echo ""
  fi
done

echo "✨ Optimisation terminée !"
echo ""
echo "💡 Pour restaurer les originaux: mv public/blog/*.backup public/blog/"

#!/bin/bash

# 🚀 Tests Lighthouse Production - PIXEL CLASH
# URL: https://pixel-clash.netlify.app

PROD_URL="https://pixel-clash.netlify.app"
OUTPUT_DIR="lighthouse-production"
TIMESTAMP=$(date +%Y%m%d-%H%M%S)

echo "🚀 Tests Lighthouse Production"
echo "URL: $PROD_URL"
echo "Timestamp: $TIMESTAMP"
echo ""

# Créer dossier output
mkdir -p "$OUTPUT_DIR"

# Pages à tester
PAGES=(
  ""                                    # Homepage
  "details"                             # Détails tournoi
  "about"                               # Histoire
  "developer"                           # Portfolio
  "blog"                                # Index blog
  "blog/debuter-retro-gaming-guide"    # Article blog
)

echo "📊 Test de ${#PAGES[@]} pages..."
echo ""

# Tester chaque page
for page in "${PAGES[@]}"; do
  PAGE_NAME=${page:-"homepage"}
  PAGE_NAME=${PAGE_NAME//\//-}
  
  echo "⏳ Test: $PAGE_NAME"
  
  lighthouse "$PROD_URL/$page" \
    --output html \
    --output json \
    --output-path "$OUTPUT_DIR/lhr-$PAGE_NAME-$TIMESTAMP" \
    --chrome-flags="--headless" \
    --quiet \
    --only-categories=performance,accessibility,best-practices,seo
  
  echo "✅ $PAGE_NAME terminé"
  echo ""
done

echo ""
echo "✅ Tous les tests terminés !"
echo ""
echo "📊 Rapports disponibles dans: $OUTPUT_DIR/"
echo ""
echo "🔍 Ouvrir les rapports:"
echo "open $OUTPUT_DIR/*.html"

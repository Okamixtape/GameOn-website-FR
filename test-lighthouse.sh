#!/bin/bash

# Script de test Lighthouse pour Pixel Clash
# Teste la performance après optimisations

echo "🚀 Test Lighthouse - Pixel Clash Optimisé"
echo "=========================================="
echo ""

# Vérifier que le serveur tourne
if ! curl -s http://localhost:4323/ > /dev/null; then
    echo "❌ Erreur: Le serveur dev n'est pas démarré"
    echo "Lancez 'npm run dev' d'abord"
    exit 1
fi

echo "✅ Serveur détecté sur http://localhost:4323/"
echo ""
echo "🔍 Lancement de Lighthouse..."
echo ""

# Lancer Lighthouse
npx lighthouse http://localhost:4323/ \
  --output=json \
  --output=html \
  --output-path=./lighthouse-optimized \
  --chrome-flags="--headless" \
  --only-categories=performance,accessibility,best-practices,seo \
  --quiet

echo ""
echo "📊 Résultats Lighthouse :"
echo "========================"

# Extraire les scores
PERF=$(jq '.categories.performance.score * 100' lighthouse-optimized.report.json)
A11Y=$(jq '.categories.accessibility.score * 100' lighthouse-optimized.report.json)
BP=$(jq '.categories["best-practices"].score * 100' lighthouse-optimized.report.json)
SEO=$(jq '.categories.seo.score * 100' lighthouse-optimized.report.json)

echo "Performance:     ${PERF}/100"
echo "Accessibility:   ${A11Y}/100"
echo "Best Practices:  ${BP}/100"
echo "SEO:             ${SEO}/100"
echo ""

# Extraire LCP
LCP=$(jq '.audits["largest-contentful-paint"].displayValue' lighthouse-optimized.report.json)
echo "LCP (Largest Contentful Paint): ${LCP}"
echo ""

echo "✅ Rapport complet : lighthouse-optimized.report.html"
echo ""

# Comparer avec l'ancien score
if [ -f "lighthouse-results.json" ]; then
    OLD_PERF=$(jq '.categories.performance.score * 100' lighthouse-results.json)
    DIFF=$(echo "$PERF - $OLD_PERF" | bc)
    echo "📈 Amélioration Performance : +${DIFF} points"
fi

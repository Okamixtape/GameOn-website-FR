#!/bin/bash

# 🚀 Migration Redesign → Production
# Remplace les anciennes pages par les nouvelles pages redesign

set -e  # Exit on error

echo ""
echo "🚀 MIGRATION REDESIGN → PRODUCTION"
echo "===================================="
echo ""
echo "⚠️  ATTENTION : Ce script va :"
echo "  1. Supprimer les anciennes pages"
echo "  2. Renommer les pages redesign"
echo "  3. Mettre à jour les liens internes"
echo ""
read -p "Continuer ? (y/N) " -n 1 -r
echo ""
if [[ ! $REPLY =~ ^[Yy]$ ]]
then
    echo "❌ Migration annulée"
    exit 1
fi

echo ""
echo "📦 Étape 1/6 : Création branche migration..."
git checkout -b migration-redesign-to-prod 2>/dev/null || git checkout migration-redesign-to-prod
echo "✅ Branche créée"

echo ""
echo "🏷️  Étape 2/6 : Backup (tag git)..."
git tag -f backup-before-migration
echo "✅ Tag créé : backup-before-migration"

echo ""
echo "🗑️  Étape 3/6 : Suppression anciennes pages..."
rm -f src/pages/index.astro
rm -f src/pages/about.astro
rm -f src/pages/developer.astro
rm -f src/pages/cgu.astro
rm -f src/pages/mentions-legales.astro
rm -f src/pages/politique-confidentialite.astro
rm -f src/pages/details.astro
rm -f src/pages/redesign-index.astro
echo "✅ Anciennes pages supprimées"

echo ""
echo "📝 Étape 4/6 : Renommage pages redesign..."
mv src/pages/index-redesign.astro src/pages/index.astro
mv src/pages/about-redesign.astro src/pages/about.astro
mv src/pages/tournament-redesign.astro src/pages/tournament.astro
mv src/pages/developer-redesign.astro src/pages/developer.astro
mv src/pages/faq-redesign.astro src/pages/faq.astro
mv src/pages/cgu-redesign.astro src/pages/cgu.astro
mv src/pages/mentions-legales-redesign.astro src/pages/mentions-legales.astro
mv src/pages/politique-confidentialite-redesign.astro src/pages/politique-confidentialite.astro
echo "✅ Pages renommées"

echo ""
echo "📁 Étape 5/6 : Renommage dossiers blog..."
if [ -d "src/pages/blog-redesign" ]; then
  rm -rf src/pages/blog 2>/dev/null || true
  mv src/pages/blog-redesign src/pages/blog
  echo "✅ Dossier blog-redesign → blog"
fi

if [ -d "src/content/blog-redesign" ]; then
  rm -rf src/content/blog 2>/dev/null || true
  mv src/content/blog-redesign src/content/blog
  echo "✅ Dossier content/blog-redesign → content/blog"
fi

echo ""
echo "🔗 Étape 6/6 : Mise à jour liens internes..."
echo "⚠️  ATTENTION : Vous devez maintenant mettre à jour manuellement :"
echo ""
echo "  📄 src/components/redesign/layout/Header.tsx"
echo "     - /index-redesign → /"
echo "     - /tournament-redesign → /tournament"
echo "     - /blog-redesign → /blog"
echo "     - /about-redesign → /about"
echo ""
echo "  📄 src/components/redesign/layout/Footer.astro"
echo "     - Tous les liens -redesign → sans -redesign"
echo ""
echo "  📄 src/pages/faq.astro"
echo "     - Liens internes vers autres pages"
echo ""
echo "  📄 src/pages/glossaire-retrogaming.astro"
echo "     - Liens internes vers autres pages"
echo ""
echo "  📄 src/content/config.ts"
echo "     - Collection 'blog-redesign' → 'blog'"
echo ""

echo ""
echo "✅ MIGRATION TERMINÉE !"
echo ""
echo "📋 PROCHAINES ÉTAPES :"
echo ""
echo "  1. Mettre à jour les liens (voir ci-dessus)"
echo "  2. Tester le build :"
echo "     npm run build"
echo ""
echo "  3. Vérifier les pages :"
echo "     npm run preview"
echo ""
echo "  4. Audit SEO :"
echo "     npm run seo:audit"
echo ""
echo "  5. Si tout est OK, commit :"
echo "     git add -A"
echo "     git commit -m 'feat: Migrate redesign pages to production'"
echo "     git push origin migration-redesign-to-prod"
echo ""
echo "  6. Si problème, rollback :"
echo "     git reset --hard backup-before-migration"
echo ""
echo "🚀 Bonne migration !"
echo ""

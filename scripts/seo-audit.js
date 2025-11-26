#!/usr/bin/env node

/**
 * SEO Audit Script
 * Analyse les pages du site pour détecter les problèmes SEO
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.join(__dirname, '../dist');
const issues = [];
const warnings = [];
const success = [];

// Couleurs console
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function analyzeHTML(filePath, content) {
  const fileName = path.relative(distDir, filePath);
  
  // 1. Title
  const titleMatch = content.match(/<title>(.*?)<\/title>/i);
  if (!titleMatch) {
    issues.push(`❌ ${fileName}: Pas de balise <title>`);
  } else {
    const title = titleMatch[1];
    if (title.length < 30) {
      warnings.push(`⚠️  ${fileName}: Title trop court (${title.length} caractères, min 30)`);
    } else if (title.length > 60) {
      warnings.push(`⚠️  ${fileName}: Title trop long (${title.length} caractères, max 60)`);
    } else {
      success.push(`✅ ${fileName}: Title OK (${title.length} caractères)`);
    }
    
    // Vérifier mots-clés dans title
    const keywords = ['pixel clash', 'retrogaming', 'tournoi', 'arcade', 'championnat'];
    const hasKeyword = keywords.some(kw => title.toLowerCase().includes(kw));
    if (!hasKeyword) {
      warnings.push(`⚠️  ${fileName}: Aucun mot-clé SEO dans le title`);
    }
  }
  
  // 2. Meta Description
  const metaDescMatch = content.match(/<meta\s+name="description"\s+content="(.*?)"/i);
  if (!metaDescMatch) {
    issues.push(`❌ ${fileName}: Pas de meta description`);
  } else {
    const desc = metaDescMatch[1];
    if (desc.length < 120) {
      warnings.push(`⚠️  ${fileName}: Meta description trop courte (${desc.length} caractères, min 120)`);
    } else if (desc.length > 160) {
      warnings.push(`⚠️  ${fileName}: Meta description trop longue (${desc.length} caractères, max 160)`);
    } else {
      success.push(`✅ ${fileName}: Meta description OK (${desc.length} caractères)`);
    }
  }
  
  // 3. H1
  const h1Matches = content.match(/<h1[^>]*>(.*?)<\/h1>/gi);
  if (!h1Matches) {
    issues.push(`❌ ${fileName}: Pas de balise <h1>`);
  } else if (h1Matches.length > 1) {
    warnings.push(`⚠️  ${fileName}: Plusieurs <h1> (${h1Matches.length}), devrait être unique`);
  } else {
    success.push(`✅ ${fileName}: H1 unique`);
  }
  
  // 4. Images sans alt
  const imgMatches = content.match(/<img[^>]*>/gi) || [];
  let imagesWithoutAlt = 0;
  imgMatches.forEach(img => {
    if (!img.includes('alt=')) {
      imagesWithoutAlt++;
    }
  });
  if (imagesWithoutAlt > 0) {
    warnings.push(`⚠️  ${fileName}: ${imagesWithoutAlt} image(s) sans attribut alt`);
  } else if (imgMatches.length > 0) {
    success.push(`✅ ${fileName}: Toutes les images ont un alt`);
  }
  
  // 5. Canonical URL
  const canonicalMatch = content.match(/<link\s+rel="canonical"\s+href="(.*?)"/i);
  if (!canonicalMatch) {
    warnings.push(`⚠️  ${fileName}: Pas de canonical URL`);
  } else {
    success.push(`✅ ${fileName}: Canonical URL présente`);
  }
  
  // 6. OpenGraph
  const ogTitleMatch = content.match(/<meta\s+property="og:title"\s+content="(.*?)"/i);
  const ogDescMatch = content.match(/<meta\s+property="og:description"\s+content="(.*?)"/i);
  const ogImageMatch = content.match(/<meta\s+property="og:image"\s+content="(.*?)"/i);
  
  if (!ogTitleMatch || !ogDescMatch || !ogImageMatch) {
    warnings.push(`⚠️  ${fileName}: OpenGraph incomplet`);
  } else {
    success.push(`✅ ${fileName}: OpenGraph complet`);
  }
  
  // 7. Schema.org JSON-LD
  const schemaMatch = content.match(/<script\s+type="application\/ld\+json">/i);
  if (!schemaMatch) {
    warnings.push(`⚠️  ${fileName}: Pas de Schema.org JSON-LD`);
  } else {
    success.push(`✅ ${fileName}: Schema.org présent`);
  }
}

function scanDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      scanDirectory(filePath);
    } else if (file.endsWith('.html')) {
      const content = fs.readFileSync(filePath, 'utf-8');
      analyzeHTML(filePath, content);
    }
  });
}

// Main
log('\n🔍 SEO AUDIT - PIXEL CLASH\n', 'cyan');

if (!fs.existsSync(distDir)) {
  log('❌ Le dossier dist/ n\'existe pas. Lancez `npm run build` d\'abord.', 'red');
  process.exit(1);
}

scanDirectory(distDir);

// Affichage des résultats
log('\n📊 RÉSULTATS\n', 'blue');

if (issues.length > 0) {
  log('🚨 PROBLÈMES CRITIQUES:', 'red');
  issues.forEach(issue => log(issue, 'red'));
  log('');
}

if (warnings.length > 0) {
  log('⚠️  AVERTISSEMENTS:', 'yellow');
  warnings.forEach(warning => log(warning, 'yellow'));
  log('');
}

if (success.length > 0) {
  log('✅ SUCCÈS:', 'green');
  success.forEach(s => log(s, 'green'));
  log('');
}

// Score
const total = issues.length + warnings.length + success.length;
const score = Math.round((success.length / total) * 100);

log(`\n📈 SCORE SEO: ${score}%`, score >= 80 ? 'green' : score >= 60 ? 'yellow' : 'red');
log(`   ✅ Succès: ${success.length}`, 'green');
log(`   ⚠️  Avertissements: ${warnings.length}`, 'yellow');
log(`   ❌ Problèmes: ${issues.length}`, 'red');

log('\n💡 RECOMMANDATIONS:', 'cyan');
log('1. Optimiser les balises Title avec mots-clés');
log('2. Ajouter Schema.org JSON-LD (Event, Organization)');
log('3. Compléter les attributs alt des images');
log('4. Vérifier longueur meta descriptions (120-160 caractères)');
log('5. Ajouter mots-clés dans H1/H2/H3');

log('\n📚 Documentation: docs/SEO-STRATEGY.md\n');

process.exit(issues.length > 0 ? 1 : 0);

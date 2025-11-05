#!/usr/bin/env node

/**
 * 🎨 Vérificateur de Contraste WCAG 2.1 AA
 * Calcule les ratios de contraste pour toutes les combinaisons couleur/fond
 */

// Fonction pour convertir hex en RGB
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

// Fonction pour calculer la luminance relative
function getLuminance(r, g, b) {
  const [rs, gs, bs] = [r, g, b].map(c => {
    c = c / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

// Fonction pour calculer le ratio de contraste
function getContrastRatio(hex1, hex2) {
  const rgb1 = hexToRgb(hex1);
  const rgb2 = hexToRgb(hex2);
  
  const lum1 = getLuminance(rgb1.r, rgb1.g, rgb1.b);
  const lum2 = getLuminance(rgb2.r, rgb2.g, rgb2.b);
  
  const lighter = Math.max(lum1, lum2);
  const darker = Math.min(lum1, lum2);
  
  return (lighter + 0.05) / (darker + 0.05);
}

// Fonction pour vérifier si le contraste est suffisant
function checkContrast(ratio, level = 'AA') {
  const threshold = level === 'AAA' ? 7 : 4.5;
  return {
    passes: ratio >= threshold,
    ratio: ratio.toFixed(2),
    threshold,
    level
  };
}

// Couleurs du projet
const colors = {
  // Couleurs retro
  'retro-blue': '#00D9FF',
  'retro-blue-dark': '#007399',
  'retro-pink': '#FF006E',
  'retro-pink-dark': '#A3004A',
  'retro-purple': '#7209B7',
  'retro-purple-dark': '#5A0790',
  
  // Couleurs standards
  'amber-500': '#F59E0B',
  'amber-600': '#D97706',
  
  // Fonds
  'white': '#FFFFFF',
  'zinc-50': '#FAFAFA',
  'zinc-100': '#F4F4F5',
  'cyan-100': '#CFFAFE',
  'purple-100': '#F3E8FF',
  'pink-100': '#FCE7F3',
  'amber-100': '#FEF3C7',
};

// Combinaisons à tester (texte sur fond)
const combinations = [
  // Sur fond blanc
  { text: 'retro-blue', bg: 'white', context: 'Texte néon sur fond blanc' },
  { text: 'retro-blue-dark', bg: 'white', context: 'Texte foncé sur fond blanc' },
  { text: 'retro-pink', bg: 'white', context: 'Texte néon sur fond blanc' },
  { text: 'retro-pink-dark', bg: 'white', context: 'Texte foncé sur fond blanc' },
  { text: 'retro-purple', bg: 'white', context: 'Texte néon sur fond blanc' },
  { text: 'retro-purple-dark', bg: 'white', context: 'Texte foncé sur fond blanc' },
  { text: 'amber-500', bg: 'white', context: 'Texte amber sur fond blanc' },
  { text: 'amber-600', bg: 'white', context: 'Texte amber foncé sur fond blanc' },
  
  // Sur fond zinc-50
  { text: 'retro-blue-dark', bg: 'zinc-50', context: 'Texte sur fond gris très clair' },
  { text: 'retro-pink-dark', bg: 'zinc-50', context: 'Texte sur fond gris très clair' },
  
  // Sur fond cyan-100 (tags blog)
  { text: 'retro-blue-dark', bg: 'cyan-100', context: 'Tags blog' },
  
  // Sur fond purple-100
  { text: 'retro-purple', bg: 'purple-100', context: 'Texte sur fond violet clair' },
];

console.log('🎨 VÉRIFICATION DES CONTRASTES WCAG 2.1 AA\n');
console.log('═'.repeat(80));
console.log('\n');

let passCount = 0;
let failCount = 0;
const failures = [];

combinations.forEach(({ text, bg, context }) => {
  const textColor = colors[text];
  const bgColor = colors[bg];
  const ratio = getContrastRatio(textColor, bgColor);
  const result = checkContrast(ratio);
  
  const status = result.passes ? '✅' : '❌';
  const symbol = result.passes ? '✓' : '✗';
  
  console.log(`${status} ${context}`);
  console.log(`   Texte: ${text} (${textColor})`);
  console.log(`   Fond:  ${bg} (${bgColor})`);
  console.log(`   Ratio: ${result.ratio}:1 ${symbol} (seuil: ${result.threshold}:1)`);
  console.log('');
  
  if (result.passes) {
    passCount++;
  } else {
    failCount++;
    failures.push({
      text,
      bg,
      context,
      ratio: result.ratio,
      textColor,
      bgColor
    });
  }
});

console.log('═'.repeat(80));
console.log(`\n📊 RÉSULTATS: ${passCount} ✅ | ${failCount} ❌\n`);

if (failures.length > 0) {
  console.log('⚠️  ÉCHECS À CORRIGER:\n');
  failures.forEach(({ text, bg, context, ratio, textColor, bgColor }) => {
    console.log(`❌ ${context}`);
    console.log(`   ${text} (${textColor}) sur ${bg} (${bgColor})`);
    console.log(`   Ratio actuel: ${ratio}:1 (besoin: ≥4.5:1)`);
    
    // Calculer une couleur plus foncée
    const currentRgb = hexToRgb(textColor);
    const factor = 0.7; // Assombrir de 30%
    const darkerHex = '#' + [currentRgb.r, currentRgb.g, currentRgb.b]
      .map(c => Math.floor(c * factor))
      .map(c => c.toString(16).padStart(2, '0'))
      .join('');
    
    const newRatio = getContrastRatio(darkerHex, bgColor);
    console.log(`   💡 Suggestion: ${darkerHex} (ratio: ${newRatio.toFixed(2)}:1)`);
    console.log('');
  });
}

console.log('═'.repeat(80));
console.log('\n✨ Vérification terminée!\n');

// Exit code basé sur les résultats
process.exit(failures.length > 0 ? 1 : 0);

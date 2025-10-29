---
trigger: always_on
---

# Règles pour Composants Astro

<component_structure>
## Structure standard d'un composant Astro

```astro
---
// 1. Imports (externes → internes → types)
import type { ComponentProps } from './types';

// 2. Props avec types explicites
interface Props {
  title: string;
  description?: string;
}

const { title, description } = Astro.props;

// 3. Logique TypeScript (si nécessaire)
const formattedTitle = title.toUpperCase();
---

<!-- 4. Template HTML -->
<section class="hero">
  <h1>{formattedTitle}</h1>
  {description && <p>{description}</p>}
</section>

<!-- 5. Styles scopés (si nécessaire) -->
<style>
  .hero {
    /* Styles scopés au composant */
  }
</style>

<!-- 6. Scripts (uniquement si absolument nécessaire) -->
<script>
  // JavaScript côté client (à minimiser)
</script>
```
</component_structure>

<best_practices>
## Best practices Astro

### 1. Zero JavaScript par défaut
- Astro génère du HTML statique sans JS
- N'ajouter `<script>` que si interaction client nécessaire
- Préférer les attributs HTML natifs (ex: `required`, `pattern`)

### 2. Props typées
```astro
---
// ✅ BON : Props typées avec interface
interface Props {
  title: string;
  count?: number;
}

const { title, count = 0 } = Astro.props;
---

<!-- ❌ MAUVAIS : Props non typées -->
---
const { title, count } = Astro.props;
---
```

### 3. Composants réutilisables
- Un composant = une responsabilité
- Props claires et documentées
- Valeurs par défaut pour props optionnelles
- Noms descriptifs (PascalCase)

### 4. Accessibilité
```astro
<!-- ✅ BON : Sémantique HTML + ARIA -->
<button 
  type="button"
  aria-label="Fermer le menu"
  class="menu-close"
>
  <span aria-hidden="true">×</span>
</button>

<!-- ❌ MAUVAIS : Div cliquable sans accessibilité -->
<div onclick="closeMenu()">×</div>
```

### 5. Performance
- Utiliser `loading="lazy"` pour images
- Optimiser les images avec `<Image />` d'Astro
- Minimiser les styles inline
- Éviter les re-renders inutiles

### 6. Styles
```astro
<!-- Préférer Tailwind pour la cohérence -->
<div class="flex items-center gap-4 p-6">
  <h2 class="text-2xl font-bold">Titre</h2>
</div>

<!-- Styles scopés uniquement si nécessaire -->
<style>
  /* Styles qui ne peuvent pas être en Tailwind */
  .custom-gradient {
    background: linear-gradient(to right, #667eea 0%, #764ba2 100%);
  }
</style>
```
</best_practices>

<component_patterns>
## Patterns de composants

### Composant de présentation (statique)
```astro
---
interface Props {
  title: string;
  subtitle?: string;
}

const { title, subtitle } = Astro.props;
---

<header class="hero">
  <h1 class="text-4xl font-bold">{title}</h1>
  {subtitle && <p class="text-xl text-gray-600">{subtitle}</p>}
</header>
```

### Composant avec slot
```astro
---
interface Props {
  variant?: 'primary' | 'secondary';
}

const { variant = 'primary' } = Astro.props;
---

<div class={`card card-${variant}`}>
  <slot />
</div>
```

### Composant avec children nommés
```astro
---
// Layout.astro
---

<div class="layout">
  <header>
    <slot name="header" />
  </header>
  
  <main>
    <slot />
  </main>
  
  <footer>
    <slot name="footer" />
  </footer>
</div>

<!-- Utilisation -->
<Layout>
  <div slot="header">Header content</div>
  <div>Main content</div>
  <div slot="footer">Footer content</div>
</Layout>
```

### Composant avec interaction client
```astro
---
interface Props {
  initialCount?: number;
}

const { initialCount = 0 } = Astro.props;
---

<div class="counter">
  <button id="decrement">-</button>
  <span id="count">{initialCount}</span>
  <button id="increment">+</button>
</div>

<script>
  // Script s'exécute côté client
  let count = parseInt(document.getElementById('count')?.textContent || '0');
  
  document.getElementById('increment')?.addEventListener('click', () => {
    count++;
    const countEl = document.getElementById('count');
    if (countEl) countEl.textContent = count.toString();
  });
  
  document.getElementById('decrement')?.addEventListener('click', () => {
    count--;
    const countEl = document.getElementById('count');
    if (countEl) countEl.textContent = count.toString();
  });
</script>
```
</component_patterns>

<common_pitfalls>
## Pièges courants à éviter

### 1. Oublier que le code frontmatter s'exécute au build
```astro
---
// ❌ MAUVAIS : fetch au build (données statiques)
const response = await fetch('https://api.example.com/data');
const data = await response.json();

// ✅ BON : Pour données dynamiques, utiliser un endpoint API
// ou considérer si les données peuvent être statiques
---
```

### 2. Ajouter du JavaScript inutilement
```astro
<!-- ❌ MAUVAIS : JavaScript pour toggle simple -->
<script>
  document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.menu').classList.toggle('open');
  });
</script>

<!-- ✅ BON : Utiliser details/summary natif -->
<details class="menu">
  <summary class="menu-btn">Menu</summary>
  <nav><!-- contenu --></nav>
</details>
```

### 3. Ne pas typer les props
```astro
---
// ❌ MAUVAIS
const { title, items } = Astro.props;

// ✅ BON
interface Props {
  title: string;
  items: Array<{ id: string; name: string }>;
}

const { title, items } = Astro.props;
---
```

### 4. Styles non scopés qui fuient
```astro
<!-- ❌ MAUVAIS : Styles globaux dans composant -->
<style is:global>
  button {
    background: blue;
  }
</style>

<!-- ✅ BON : Styles scopés ou Tailwind -->
<style>
  button {
    background: blue;
  }
</style>
```

### 5. Oublier l'accessibilité
```astro
<!-- ❌ MAUVAIS -->
<div onclick="handleClick()">
  <img src="icon.svg" />
</div>

<!-- ✅ BON -->
<button 
  type="button"
  aria-label="Description de l'action"
  onclick="handleClick()"
>
  <img src="icon.svg" alt="" aria-hidden="true" />
</button>
```
</common_pitfalls>

<testing_components>
## Tester les composants

### Tests accessibilité (Playwright + axe)
```typescript
// tests/components/Button.test.ts
import { test, expect } from '@playwright/test';
import { injectAxe, checkA11y } from 'axe-playwright';

test.describe('Button Component', () => {
  test('should be accessible', async ({ page }) => {
    await page.goto('/test-button');
    await injectAxe(page);
    await checkA11y(page);
  });
  
  test('should have correct ARIA attributes', async ({ page }) => {
    await page.goto('/test-button');
    const button = page.locator('button[aria-label]');
    await expect(button).toBeVisible();
  });
});
```

### Tests visuels
```typescript
test('should match snapshot', async ({ page }) => {
  await page.goto('/component');
  await expect(page).toHaveScreenshot();
});
```
</testing_components>

<documentation_template>
## Template de documentation composant

Ajouter en commentaire en haut de chaque composant complexe :

```astro
---
/**
 * Composant HeroSection
 * 
 * @description Section hero responsive avec titre, sous-titre et CTA
 * 
 * @props
 * - title: string (requis) - Titre principal
 * - subtitle: string (optionnel) - Sous-titre
 * - ctaText: string (optionnel) - Texte du bouton CTA
 * - ctaUrl: string (optionnel) - URL du bouton CTA
 * 
 * @example
 * <HeroSection 
 *   title="Bienvenue"
 *   subtitle="Description"
 *   ctaText="En savoir plus"
 *   ctaUrl="/about"
 * />
 * 
 * @accessibility
 * - Heading hierarchy respectée (h1 pour title)
 * - Contraste WCAG AA validé
 * - Navigation clavier complète
 */

interface Props {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaUrl?: string;
}

const { title, subtitle, ctaText, ctaUrl } = Astro.props;
---
```
</documentation_template>

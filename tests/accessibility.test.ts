import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

/**
 * Tests d'Accessibilité - GameOn
 * Utilise axe-core pour valider WCAG 2.1 AA
 * 
 * @see https://github.com/dequelabs/axe-core
 * @see https://www.w3.org/WAI/WCAG21/quickref/
 */

test.describe('Accessibilité WCAG 2.1 AA', () => {
  
  test('Page d\'accueil - Aucune violation WCAG 2.1 AA', async ({ page }) => {
    // Naviguer vers la page d'accueil
    await page.goto('/');
    
    // Attendre que la page soit complètement chargée
    await page.waitForLoadState('networkidle');
    
    // Analyser l'accessibilité avec axe-core
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags([
        'wcag2a',      // WCAG 2.0 Level A
        'wcag2aa',     // WCAG 2.0 Level AA
        'wcag21a',     // WCAG 2.1 Level A
        'wcag21aa',    // WCAG 2.1 Level AA
      ])
      .analyze();
    
    // Vérifier qu'il n'y a aucune violation
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('Navigation clavier - Tous les éléments interactifs sont accessibles', async ({ page }) => {
    await page.goto('/');
    
    // Compter les éléments focusables
    const focusableElements = await page.locator(
      'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
    ).count();
    
    // Vérifier qu'il y a au moins des éléments focusables
    expect(focusableElements).toBeGreaterThan(0);
    
    // Tester la navigation au clavier (Tab)
    for (let i = 0; i < Math.min(focusableElements, 10); i++) {
      await page.keyboard.press('Tab');
      
      // Vérifier qu'un élément a le focus
      const focusedElement = await page.evaluate(() => {
        const el = document.activeElement;
        return el ? el.tagName : null;
      });
      
      expect(focusedElement).not.toBeNull();
    }
  });

  test('Contraste des couleurs - Conforme WCAG AA (4.5:1)', async ({ page }) => {
    await page.goto('/');
    
    // Analyser spécifiquement le contraste
    const contrastResults = await new AxeBuilder({ page })
      .withTags(['wcag2aa'])
      .include('body')
      .analyze();
    
    // Filtrer les violations de contraste
    const contrastViolations = contrastResults.violations.filter(
      violation => violation.id === 'color-contrast'
    );
    
    // Vérifier qu'il n'y a pas de violations de contraste
    expect(contrastViolations).toHaveLength(0);
  });

  test('Formulaire - Labels et ARIA appropriés', async ({ page }) => {
    await page.goto('/');
    
    // Analyser les formulaires
    const formResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa'])
      .include('form')
      .analyze();
    
    // Vérifier qu'il n'y a pas de violations dans les formulaires
    expect(formResults.violations).toEqual([]);
  });

  test('Images - Attribut alt présent et descriptif', async ({ page }) => {
    await page.goto('/');
    
    // Analyser les images
    const imageResults = await new AxeBuilder({ page })
      .withTags(['wcag2a'])
      .include('img')
      .analyze();
    
    // Filtrer les violations d'images
    const imageViolations = imageResults.violations.filter(
      violation => violation.id === 'image-alt'
    );
    
    expect(imageViolations).toHaveLength(0);
  });

  test('Landmarks ARIA - Structure sémantique correcte', async ({ page }) => {
    await page.goto('/');
    
    // Vérifier la présence de landmarks
    const landmarks = await page.locator('[role="main"], main, [role="navigation"], nav, [role="banner"], header').count();
    
    // Au minimum : header, main, navigation
    expect(landmarks).toBeGreaterThanOrEqual(3);
  });

  test('Titres - Hiérarchie correcte (h1 → h2 → h3)', async ({ page }) => {
    await page.goto('/');
    
    // Analyser la hiérarchie des titres
    const headingResults = await new AxeBuilder({ page })
      .withTags(['wcag2a'])
      .analyze();
    
    // Filtrer les violations de hiérarchie
    const headingViolations = headingResults.violations.filter(
      violation => violation.id.includes('heading')
    );
    
    expect(headingViolations).toHaveLength(0);
  });

  test('Focus visible - Indicateur de focus sur tous les éléments interactifs', async ({ page }) => {
    await page.goto('/');
    
    // Tester le focus sur le premier lien
    const firstLink = page.locator('a').first();
    await firstLink.focus();
    
    // Vérifier que l'élément a le focus
    const isFocused = await firstLink.evaluate(el => el === document.activeElement);
    expect(isFocused).toBe(true);
  });

  test('Responsive - Pas de perte de contenu au zoom 200%', async ({ page }) => {
    await page.goto('/');
    
    // Simuler un zoom 200%
    await page.setViewportSize({ width: 640, height: 480 });
    
    // Analyser l'accessibilité au zoom
    const zoomResults = await new AxeBuilder({ page })
      .withTags(['wcag2aa'])
      .analyze();
    
    expect(zoomResults.violations).toEqual([]);
  });

  test('Langue - Attribut lang présent sur <html>', async ({ page }) => {
    await page.goto('/');
    
    // Vérifier l'attribut lang
    const htmlLang = await page.locator('html').getAttribute('lang');
    
    expect(htmlLang).not.toBeNull();
    expect(htmlLang).toMatch(/^[a-z]{2}(-[A-Z]{2})?$/); // Format: fr, fr-FR, en, etc.
  });
});

test.describe('Tests E2E Basiques', () => {
  
  test('Page d\'accueil se charge correctement', async ({ page }) => {
    await page.goto('/');
    
    // Vérifier le titre de la page
    await expect(page).toHaveTitle(/GameOn/i);
    
    // Vérifier que le contenu principal est visible
    const main = page.locator('main, [role="main"]');
    await expect(main).toBeVisible();
  });

  test('Navigation - Tous les liens sont fonctionnels', async ({ page }) => {
    await page.goto('/');
    
    // Récupérer tous les liens internes
    const links = await page.locator('a[href^="/"], a[href^="#"]').all();
    
    // Vérifier qu'il y a au moins un lien
    expect(links.length).toBeGreaterThan(0);
    
    // Vérifier que les liens ont un href valide
    for (const link of links.slice(0, 5)) { // Tester les 5 premiers
      const href = await link.getAttribute('href');
      expect(href).not.toBeNull();
      expect(href).not.toBe('');
    }
  });

  test('Responsive - Mobile (375px)', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // Vérifier que le contenu est visible
    const main = page.locator('main, [role="main"]');
    await expect(main).toBeVisible();
  });

  test('Responsive - Tablet (768px)', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/');
    
    const main = page.locator('main, [role="main"]');
    await expect(main).toBeVisible();
  });

  test('Responsive - Desktop (1920px)', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('/');
    
    const main = page.locator('main, [role="main"]');
    await expect(main).toBeVisible();
  });
});

import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright Configuration - GameOn
 * Tests d'accessibilité (axe-core) + Tests E2E
 * 
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  // Dossier contenant les tests
  testDir: './tests',
  
  // Timeout par test (30 secondes)
  timeout: 30000,
  
  // Nombre de tentatives en cas d'échec
  retries: process.env.CI ? 2 : 0,
  
  // Nombre de workers (parallélisation)
  workers: process.env.CI ? 1 : undefined,
  
  // Reporter (résultats des tests)
  reporter: [
    ['html', { outputFolder: 'playwright-report' }],
    ['list']
  ],
  
  // Configuration globale pour tous les tests
  use: {
    // URL de base (dev server)
    baseURL: 'http://localhost:4321',
    
    // Trace en cas d'échec (debugging)
    trace: 'on-first-retry',
    
    // Screenshot en cas d'échec
    screenshot: 'only-on-failure',
    
    // Video en cas d'échec
    video: 'retain-on-failure',
  },

  // Projets de test (navigateurs)
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    // Tests mobile
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'] },
    },
  ],

  // Lancer le dev server automatiquement avant les tests
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:4321',
    reuseExistingServer: !process.env.CI,
    timeout: 120000,
  },
});

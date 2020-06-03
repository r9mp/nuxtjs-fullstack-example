/*
 * I18N - Translation module configuration
 * https://nuxt-community.github.io/nuxt-i18n/
 */

export default {
  locales: [
    {
      code: 'en',
      iso: 'en-US',
      file: 'en.js',
    },
    {
      code: 'fr',
      iso: 'fr-FR',
      file: 'fr.js',
    },
  ],
  lazy: true,
  langDir: 'locales/',
  defaultLocale: 'fr',
  seo: false, // SEO is enabled through layouts: layouts/*.vue
  baseUrl: 'https://www-local.stupid-lama.com',
  strategy: 'prefix_except_default',
  parsePages: false,
  pages: {
    'errors/404': {
      en: '/errors/404',
      fr: '/erreurs/404',
    },
  },
}

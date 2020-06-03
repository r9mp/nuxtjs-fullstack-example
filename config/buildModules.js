/*
 * Nuxt.js dev modules
 * https://nuxtjs.org/api/configuration-modules#-code-buildmodules-code-
 */
export default [
  // https://github.com/nuxt-community/eslint-module
  '@nuxtjs/eslint-module',
  // https://github.com/nuxt-community/moment-module
  [
    '@nuxtjs/moment',
    {
      defaultLocale: 'fr',
      locales: ['fr'],
    },
  ],
  // Doc: https://github.com/nuxt-community/dotenv-module
  ['@nuxtjs/dotenv', { filename: '.env' }],
]

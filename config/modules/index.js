import toast from './toast'
// import robots from './robots'

/*
 * Modules configuration
 * https://nuxtjs.org/api/configuration-modules
 */

export default [
  // Doc: https://axios.nuxtjs.org/usage
  '@nuxtjs/axios',
  // https://github.com/nuxt-community/auth-module https://auth.nuxtjs.org/guide/setup.html
  '@nuxtjs/auth',
  // https://github.com/nuxt-community/device-module
  '@nuxtjs/device',
  // https://github.com/nuxt-community/modules/tree/master/packages/component-cache
  '@nuxtjs/component-cache',
  // https://github.com/nuxt-community/modules/tree/master/packages/toast
  ['@nuxtjs/toast', toast],
  // https://github.com/nuxt-community/nuxt-i18n
  'nuxt-i18n',
  // ['@nuxtjs/robots', robots],
  '@nuxtjs/sitemap'
]

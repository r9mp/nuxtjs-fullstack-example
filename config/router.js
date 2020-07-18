/*
 * Router configuration
 * https://nuxtjs.org/api/configuration-router
 */

export default {
  middleware: ['auth'],
  base: '/',
  linkExactActiveClass: 'active',
  trailingSlash: false
}

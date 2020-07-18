/* Nuxt Auth config
 * https://auth.nuxtjs.org/api/options.html#token
 */

require('dotenv').config()

export default {
  strategies: {
    auth0: {
      domain: process.env.AUTH0_DOMAIN,
      client_id: process.env.AUTH0_CLIENT_ID,
      audience: process.env.AUTH0_AUDIENCE
    }
  },
  redirect: {
    login: '/auth/sign-in',
    logout: '/',
    callback: '/',
    home: '/'
  },
  cookie: {
    prefix: 'auth.',
    options: {
      path: '/',
      maxAge: 604800 // 7 days
    }
  },
  resetOnError: true, // User will be automatically logged out if an error happens
  rewriteRedirects: true // User will redirect back to the original guarded route instead of redirect.home
}

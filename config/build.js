/*
 * Build configuration
 * https://nuxtjs.org/api/configuration-build
 */

export default {
  transpile: ['vee-validate/dist/rules'],
  extend(config, ctx) {
    /*
     * Run ESLINT on save
     */
    if (ctx.isDev && ctx.isClient) {
      config.module.rules.push({
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /(node_modules)/
      })
    }
  },
  extractCSS: process.env.NODE_ENV === 'production',
  babel: {
    presets({ envName }) {
      const envTargets = {
        client: { browsers: ['last 2 versions'], ie: 9 },
        server: { node: 12 }
      }
      return [
        [
          '@nuxt/babel-preset-app',
          {
            targets: envTargets[envName]
          }
        ]
      ]
    }
  }
}

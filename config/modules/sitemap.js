/*
 * Sitemap
 * https://github.com/nuxt-community/sitemap-module
 */

export default {
  gzip: true,
  hostname: process.env.BASE_URL,
  trailingSlash: false,
  filter({ routes }) {
    return routes.map((route) => {
      route.url = `${route.url}`
      // console.log(route, route.name)
      if (route.name.startsWith('index')) {
        route.priority = 1
        route.changefreq = 'daily'
        route.lastmod = new Date()
      }
      return route
    })
  },
  i18n: {
    defaultLocale: 'fr',
    routesNameSeparator: '___'
  }
}

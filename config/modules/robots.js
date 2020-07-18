/*
 * Robot.txt
 * https://github.com/nuxt-community/robots-module
 */

require('dotenv').config()

export default [
  {
    UserAgent: 'UbiCrawler',
    Disallow: '/'
  },
  {
    UserAgent: 'DOC',
    Disallow: '/'
  },
  {
    UserAgent: 'Zao',
    Disallow: '/'
  },
  {
    UserAgent: 'sitecheck.internetseer.com',
    Disallow: '/'
  },
  {
    UserAgent: 'Zealbot',
    Disallow: '/'
  },
  {
    UserAgent: 'MSIECrawler',
    Disallow: '/'
  },
  {
    UserAgent: 'SiteSnagger',
    Disallow: '/'
  },
  {
    UserAgent: 'WebStripper',
    Disallow: '/'
  },
  {
    UserAgent: 'WebCopier',
    Disallow: '/'
  },
  {
    UserAgent: 'Fetch',
    Disallow: '/'
  },
  {
    UserAgent: 'Offline Explorer',
    Disallow: '/'
  },
  {
    UserAgent: 'Teleport',
    Disallow: '/'
  },
  {
    UserAgent: 'TeleportPro',
    Disallow: '/'
  },
  {
    UserAgent: 'WebZIP',
    Disallow: '/'
  },
  {
    UserAgent: 'linko',
    Disallow: '/'
  },
  {
    UserAgent: 'HTTrack',
    Disallow: '/'
  },
  {
    UserAgent: 'Microsoft.URL.Control',
    Disallow: '/'
  },
  {
    UserAgent: 'Xenu',
    Disallow: '/'
  },
  {
    UserAgent: 'larbin',
    Disallow: '/'
  },
  {
    UserAgent: 'libwww',
    Disallow: '/'
  },
  {
    UserAgent: 'ZyBORG',
    Disallow: '/'
  },
  {
    UserAgent: 'Download Ninja',
    Disallow: '/'
  },
  {
    UserAgent: 'wget',
    Disallow: '/'
  },
  {
    UserAgent: 'grub-client',
    Disallow: '/'
  },
  {
    UserAgent: 'k2spider',
    Disallow: '/'
  },
  {
    UserAgent: 'NPBot',
    Disallow: '/'
  },
  {
    UserAgent: 'WebReaper',
    Disallow: '/'
  },
  {
    UserAgent: '*',
    Sitemap: process.env.BASE_URL + '/sitemap.xml'
  }
]

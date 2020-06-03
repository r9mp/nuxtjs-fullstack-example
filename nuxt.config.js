/* Nuxt.js configuration
 */

import dotenv from 'dotenv'
import { head } from './config/head'
import loading from './config/loading'
import plugins from './config/plugins'
import css from './config/css'
import modules from './config/modules'
import buildModules from './config/buildModules'
import axios from './config/axios'
import build from './config/build'
import router from './config/router'
import auth from './config/modules/auth'
import i18n from './config/modules/i18n'
import sitemap from './config/modules/sitemap'
import serverMiddleware from './config/serverMiddleware'

const envFound = dotenv.config()
if (envFound.error) {
  // This error should crash whole process
  throw new Error("⚠️  Couldn't find .env file  ⚠️")
}

export default {
  mode: 'universal',
  head,
  loading,
  css,
  plugins,
  buildModules,
  modules,
  axios,
  build,
  router,
  serverMiddleware,
  // global modules configuration
  auth,
  i18n,
  sitemap,
}

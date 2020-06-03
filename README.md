# Nuxt.js example

This repo will help you to start with Nuxt.js.

Core principles:

- Server Side Rendering
- Server middleware with Express.js / Knex.js / Objection.js
- AntDesign (like Bootstrap or Material)
- Auth0
- I18n (translations)
- Errors handling
- Tests (TU & E2E)
- SEO
- Common plugins (lodash, vee-validate, vee-lazyload)

Feel free copy/paste code from this repo. It's MIT licenced.

Don't start your projects from it, prefer [create-nuxt-app](https://nuxtjs.org/guide/installation/), it's a great tool!

## Build Setup

### Auth0

First, create a tenant at [Auth0](https://auth0.com/). Then, create an application (Regular Web Application) and specify AUTH_* environment variables in .env file.

[More info here](https://github.com/nuxt/example-auth0) about the application configuration.


### Database

The backend uses Knex.js.

Create a database named llama with a user named llama (password llama). [Llamas are cool](https://www.google.com/search?q=llamas+are+cool&client=ubuntu&hs=lQZ&channel=fs&sxsrf=ALeKk01zsVfskwVjzpVteAVe606DN-oXHw:1591200887270&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjznZudhebpAhVFxIUKHWNYChEQ_AUoAXoECA4QAw&biw=1853&bih=922).

If you want to change this wonderful name, update DB_* environment variables in .env file ; AND update defaults values in knexfile.js lines 4 to 6 (used for knex migrations):
```javascript
const connection = {
  database: process.env.DB_NAME || '<DEFAULT_VALUE>',
  user: process.env.DB_USER || '<DEFAULT_VALUE>',
  password: process.env.DB_PASSWORD || '<DEFAULT_VALUE>',
}
```

By default, a PostgreSQL database is used. You can easily change it to others. Knex.js allows the followings: sqlite3, mysql, mysql2, oracledb and mssql.

```bash
# Remove pg:
$ npm install pg

# Install the needed database:
$ yarn add sqlite3
$ yarn add mysql
$ yarn add mysql2
$ yarn add oracledb
$ yarn add mssql
```

update DB_CLIENT environment variable in .env file AND update default client in knexfile.js (line 9).
```javascript
const client = process.env.DB_CLIENT || '<DEFAULT_VALUE>'
```

More information at [Knexjs.org](http://knexjs.org/)

```bash
# install knex globaly
$ sudo yarn global add knex --prefix /usr/local

# apply migrations
$ knex migrate:latest
```

## Define local dns

Add the local dns `fullstack-example.nuxtjs.com`.

```bash
$ sudo vi /etc/hosts
```

Example: `127.0.0.1       localhost fullstack-example.nuxtjs.com`

If you want to change the local dns name, don't forget to edit BASE_URL environment variable in .env file.

## Time to launch mate!

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3333
$ yarn dev

# build for production and launch server
$ yarn build && yarn start
```

## Used dependencies

Core:
- [Nuxt.js](https://nuxtjs.org): the intuitive vue framework. In this repo, used with SSR and to connect express as a server middleware.

Front-end:
- [Nuxt i18n](https://github.com/nuxt-community/nuxt-i18n): i18n for your Nuxt project (translations).
- [Nuxt Axios module](https://github.com/nuxt-community/axios-module/): secure and Easy Axios integration with Nuxt.js.
- [Nuxt Auth module (Auth0 config)](https://auth.nuxtjs.org/): Zero-boilerplate authentication support for Nuxt.js.
- [Nuxt Dotenv module](https://github.com/nuxt-community/dotenv-module): loads your .env file into your application context.
- [Nuxt Toast module](https://github.com/nuxt-community/modules/tree/master/packages/toast): responsive Touch Compatible Toast plugin for Nuxt.js using vue-toasted.
- [Nuxt Component Cache module](https://github.com/nuxt-community/modules/tree/master/packages/component-cache): vue-server-renderer has built-in support for component-level caching. This module automatically adds a LRU cache to project.
- [Nuxt Device module](https://github.com/nuxt-community/device-module): injects flags that indicate a device type into the context and the component instance.
- [Nuxt Sitemap module](https://github.com/nuxt-community/sitemap-module): automatically generate or serve dynamic sitemap.xml for Nuxt.js projects.
- [Nuxt Robots.txt module](https://github.com/nuxt-community/robots-module): a Nuxt.js module thats inject a middleware to generate a robots.txt file.
- [Vue Vee Validate module](https://logaretm.github.io/vee-validate/): template based form validation framework for vue.js.
- [Vue Cookie Law module](https://github.com/apertureless/vue-cookie-law): EU Cookie Law Plugin for Vue.js.
- [Vue lazyloading module](https://github.com/hilongjw/vue-lazyload): vue module for lazyloading images in your applications.
- [Vue loadash module](https://github.com/Ewocker/vue-lodash): a small wrapper for integrating lodash to Vuejs.

Back-end:
- [Express.js](https://expressjs.com/)
- [Express CORS middleware](https://expressjs.com/en/resources/middleware/cors.html)
- [Knex.js - Query Builder](http://knexjs.org/)
- [Objection.js - ORM](https://vincit.github.io/objection.js/)

Tests:
- [Cypress - E2E](https://www.cypress.io/)
- [Jest - UT](https://jestjs.io/)

Dev dependencies:

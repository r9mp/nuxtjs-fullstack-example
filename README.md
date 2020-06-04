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

### Add an env file

This repository uses .env files for configuration. Copy paste the following lines in a file named `.env` in the root directory.

```dotenv
BASE_URL=http://fullstack-example.nuxtjs.com:3333

# DB setting
DB_CLIENT=postgresql
DB_NAME=llama
DB_USER=llama
DB_PASSWORD=llama

# Auth0
AUTH0_DOMAIN=# Example: nuxt-js.eu.auth0.com
AUTH0_CLIENT_ID=# Example: gI6lVM0y2HqwgBI5ujO9YmGyt4y3yPhU
AUTH0_AUDIENCE=# Example: https://nuxt-js.eu.auth0.com/api/v2/
```

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
$ yarn

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

## Dependencies configuration

### robots.txt

Two possible configurations are implemented in this repo: with the robots.txt module and with static files.

Static files config: all included files are automatically served by Nuxt and are accessible through your project root URL. (static/robots.txt will be available at localhost:3000/robots.txt).

[Nuxt Robots.txt module](https://github.com/nuxt-community/robots-module): inject a middleware to generate a robots.txt file. The JS translation of static/robots.txt file is available in config/modules/robots.js.

In both cases, if you do not use a sitemap, don't forget to remove it from the robots.txt.

## Deployment

You can find in Nuxt.js FAQ [lot's of deployments methods](https://nuxtjs.org/faq/deployment-aws-s3-cloudfront). Some of them are for generated apps.

### PM2 - Deploy on your server/VM!
PM2 is a production process manager for Node.js applications with a built-in load balancer. It allows you to keep applications alive forever, to reload them without downtime and to facilitate common system admin tasks. [More information!](https://github.com/Unitech/pm2)

```bash
# install pm2 globaly
$ sudo yarn global add pm2 --prefix /usr/local
```

PM2 config file for this project is `ecosystem.config.js`. It is based on [this great tutorial from Xander Luciano](https://medium.com/@vipercodegames/nuxt-deploy-809eda0168fc) made for Nuxt 1.x (just a little difference with Nuxt 2.x). Don't hesitate to have a look and inspire yourself with the deployment strategy!

More information about the ecosystem file [here](https://pm2.keymetrics.io/docs/usage/application-declaration/#ecosystem-file).

### Google Cloud Platform - App Engine

Copy / Paste the `deploy-app-engine.yaml` configuration file in your repository.

Deploy it: `gcloud app deploy deploy-app-engine  --project [project-id]`

[More information (Nuxt)](https://nuxtjs.org/faq/appengine-deployment).

### Google Cloud Platform - Container Engine

TODO: yaml service 

With and without Nginx as reverse proxy -> https://nuxtjs.org/faq/nginx-proxy

## Awesome repositories

To find nice dependencies, don't forget to check these repositories:
- [Awesome Nuxt.js](https://github.com/nuxt-community/awesome-nuxt): a curated list of awesome things related to Nuxt.js.
- [Nuxt Community](https://github.com/nuxt-community/): modules & Projects from Nuxt.js Community.
- [Awesome Vue.js](https://github.com/vuejs/awesome-vue): a curated list of awesome things related to Vue.js.
- [Awesome Express](https://github.com/rajikaimal/awesome-express): a curated list of express.js resources.
- [Awesome Node.js](https://github.com/sindresorhus/awesome-nodejs): delightful Node.js packages and resources.

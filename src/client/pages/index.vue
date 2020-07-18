<template>
  <div class="page-content">
    <logo />
    <h1 class="title">{{ $t('index.title') }}</h1>
    <h2 class="subtitle">{{ $t('index.subtitle') }}</h2>
    <div class="link">
      <a href="https://github.com/r9mp/nuxtjs-fullstack-example/blob/master/README.md" target="_blank">
        <a-button type="primary">{{ $t('index.fullstackExample.documentation') }}</a-button>
      </a>
      <a href="https://github.com/r9mp/nuxtjs-fullstack-example" target="_blank">
        <a-button type="primary">{{ $t('index.fullstackExample.github') }}</a-button>
      </a>
    </div>
    <div class="links">
      <a href="https://nuxtjs.org/" target="_blank">
        <a-button class="button--green">{{ $t('index.nuxtjs.documentation') }}</a-button>
      </a>
      <a href="https://github.com/nuxt/nuxt.js" target="_blank">
        <a-button class="button--grey">{{ $t('index.nuxtjs.github') }}</a-button>
      </a>
    </div>
  </div>
</template>

<script>
import Logo from '../components/layouts/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style lang="scss" scoped>
.page-content {
  margin: 0 auto;
  text-align: center;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

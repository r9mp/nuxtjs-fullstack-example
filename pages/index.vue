<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">{{ $t('index.title') }}</h1>
      <h2 class="subtitle">{{ $t('index.subtitle') }}</h2>
      <div class="link">
        <nuxt-link :to="localePath('dashboard')">
          <Button type="primary">{{ $t('index.goToDashboard') }}</Button>
        </nuxt-link>
      </div>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank">
          <Button class="button--green">{{ $t('index.documentation') }}</Button>
        </a>
        <a href="https://github.com/nuxt/nuxt.js" target="_blank">
          <Button class="button--grey">{{ $t('index.github') }}</Button>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { Button } from 'ant-design-vue'
import Logo from '../components/Logo.vue'

export default {
  components: {
    Logo,
    Button,
  },
}
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
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

<template>
  <a-layout style="height: 100vh;">
    <layout-sider :collapsed="collapsed" />
    <a-layout>
      <layout-header :collapsed="collapsed" @switch-collapsed="switchCollapsed" />
      <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
        <nuxt />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import LayoutSider from '../components/layouts/Sider'
import LayoutHeader from '../components/layouts/Header'

export default {
  components: {
    LayoutSider,
    LayoutHeader
  },
  data() {
    return {
      collapsed: false
    }
  },
  methods: {
    switchCollapsed() {
      this.collapsed = !this.collapsed
    }
  },
  head() {
    const i18nSeo = this.$nuxtI18nSeo()
    return {
      htmlAttrs: {
        myAttribute: 'My Value',
        ...i18nSeo.htmlAttrs
      },
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'My Custom Description'
        },
        ...i18nSeo.meta
      ],
      link: [
        {
          hid: 'apple-touch-icon',
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png'
        },
        ...i18nSeo.link
      ]
    }
  }
}
</script>

<style lang="scss">
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: black;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.logo {
  height: 60px;
}

.header {
  background: $white-color;
  padding: 0;

  .header-content {
    padding: 0 20px 0 20px;

    .header-anticon-menu {
      font-size: 2em;
    }

    .header-search-bar {
      width: 250px;
      min-width: 250px;
      max-width: 250px;
      padding-left: 15px;
    }
  }
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue',
    Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
</style>

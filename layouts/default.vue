<template>
  <a-layout style="height: 100vh;">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <a-row type="flex" justify="space-around" align="middle" class="logo">
        <a-col v-if="!collapsed" :sm="{ span: 16 }">
          <img
            src="https://d33wubrfki0l68.cloudfront.net/2dad35405dbf4dd535c5ebaf3e7274f8ce904b94/bbcc4/logos/built-with-nuxt-white.svg"
            alt="built-with-nuxt-logo"
            data-v-bb4c8bba=""
          />
        </a-col>
        <a-col v-else :xs="{ span: 14 }">
          <img
            src="https://d33wubrfki0l68.cloudfront.net/20979b327688c53075609a26ac66a25e4f59e8bb/96b62/logos/nuxt-emoji-white.png"
            srcset="
              https://d33wubrfki0l68.cloudfront.net/6031164622cfee8032bc1b91f49f18045131f454/1acb1/logos/nuxt-emoji-white@2x.png 2x
            "
            alt="nuxt-logo"
            data-v-bb4c8bba=""
            style="height: 50px;"
          />
        </a-col>
      </a-row>
      <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
        <a-menu-item key="1">
          <a-icon type="user" />
          <span>nav 1</span>
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="video-camera" />
          <span>nav 2</span>
        </a-menu-item>
        <a-menu-item key="3">
          <a-icon type="upload" />
          <span>nav 3</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="header">
        <a-row type="flex" justify="space-around" align="middle" class="header-content">
          <a-col :xs="{ span: 0 }" :sm="{ span: 6 }">
            <a-icon
              class="trigger anticon anticon-menu-fold header-anticon-menu"
              :type="collapsed ? 'menu-unfold' : 'menu-fold'"
              @click="() => (collapsed = !collapsed)"
            />
          </a-col>
          <a-col :xs="{ span: 0 }" :sm="{ span: 12 }">
            <a-input-search placeholder="input search text" style="display: block;" enter-button @search="onSearch" />
          </a-col>
          <a-col :xs="{ span: 0 }" :sm="{ span: 6 }" style="text-align: right;">
            <nuxt-link :to="localePath('dashboard')">
              <a-button type="primary">{{ $t('index.goToDashboard') }}</a-button>
            </nuxt-link>
          </a-col>
        </a-row>
        <div class="header-content"></div>
      </a-layout-header>
      <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
        <nuxt />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      collapsed: false,
    }
  },
  methods: {
    onSearch(value) {
      console.log(value)
    },
  },
  head() {
    const i18nSeo = this.$nuxtI18nSeo()
    return {
      htmlAttrs: {
        myAttribute: 'My Value',
        ...i18nSeo.htmlAttrs,
      },
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'My Custom Description',
        },
        ...i18nSeo.meta,
      ],
      link: [
        {
          hid: 'apple-touch-icon',
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png',
        },
        ...i18nSeo.link,
      ],
    }
  },
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

<template>
  <a-layout-sider v-model="innerCollapsed" :trigger="null" collapsible>
    <a-row type="flex" justify="space-around" align="middle" class="logo">
      <a-col v-if="!innerCollapsed" :sm="{ span: 16 }">
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
</template>

<script>
export default {
  name: 'LayoutSider',
  props: {
    collapsed: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      innerCollapsed: this.collapsed
    }
  },
  watch: {
    collapsed(newCollapsed) {
      this.innerCollapsed = newCollapsed
    }
  },
  methods: {}
}
</script>

<style scoped></style>

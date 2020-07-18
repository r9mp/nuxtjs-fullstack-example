<template>
  <a-layout-header class="header">
    <a-row type="flex" justify="space-around" align="middle" class="header-content">
      <a-col :xs="{ span: 0 }" :sm="{ span: 6 }">
        <a-icon
          class="trigger anticon anticon-menu-fold header-anticon-menu"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="switchCollapsed"
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
</template>

<script>
export default {
  name: 'HeaderSider',
  props: {
    collapsed: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {}
  },
  methods: {
    onSearch(value) {
      // console.log(value)
    },
    switchCollapsed() {
      this.$emit('switch-collapsed')
    }
  }
}
</script>

<style scoped></style>

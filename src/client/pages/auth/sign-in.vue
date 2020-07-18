<template>
  <div></div>
</template>

<script>
export default {
  name: 'AuthLogin',
  layout: 'default',
  mounted() {
    this.$auth.loginWith('auth0')
  }
}
</script>

<style scoped></style>

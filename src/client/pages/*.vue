<template>
  <div></div>
</template>

<script>
export default {
  name: 'Default',
  asyncData({ redirect, app, route }) {
    return redirect(app.localePath('errors-404'))
  }
}
</script>

<style />

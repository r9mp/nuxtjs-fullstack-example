<template>
  <div>
    <div>
      <logo />
      <h1 class="title">{{ $t('dashboard.title') }}</h1>
      <h2 class="subtitle">{{ $t('dashboard.title') }}</h2>
    </div>
  </div>
</template>

<script>
import Logo from '../../components/layouts/Logo.vue'

export default {
  middleware: ['auth'],
  components: {
    Logo
  }
}
</script>

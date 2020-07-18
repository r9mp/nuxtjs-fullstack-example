<template>
  <div>
    <a-result :status="error.statusCode" :title="error.statusCode" :sub-title="error.message">
      <template #extra>
        <a-button type="primary">
          Back Home
        </a-button>
      </template>
    </a-result>
  </div>
</template>

<script>
export default {
  layout: 'default',
  props: {
    error: {
      type: Object,
      default() {
        return { statusCode: 500, message: 'An error occurred...' }
      }
    }
  }
}
</script>

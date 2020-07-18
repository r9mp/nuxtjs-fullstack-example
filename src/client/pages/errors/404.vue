<template>
  <div>
    <a-result status="404" title="Erreur 404" sub-title="Cette page est introuvable ... :-/">
      <template #extra>
        <a-button type="primary">
          Retour à l'accueil
        </a-button>
      </template>
    </a-result>
  </div>
</template>

<script>
export default {
  name: 'Error404',
  layout: 'default'
}
</script>

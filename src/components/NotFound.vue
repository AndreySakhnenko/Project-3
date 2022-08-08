<template>
  <div class="container">
    <div class="error">
      <div class="error_content">
        <router-link :to="{ name: 'main' }">
          <h2 class="error_title">Erro 404</h2>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped></style>

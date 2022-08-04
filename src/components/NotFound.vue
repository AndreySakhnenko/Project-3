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
<style>
.error_content {
  width: 100%;
  height: 100vh;
  background-color: white;
}
.error_title {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: black;
  font-size: 50px;
}
</style>

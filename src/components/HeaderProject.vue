<template>
  <v-app-bar app dark>
    <div class="d-flex align-center"></div>
    <v-icon class="logo_icons" size="40"> mdi-movie-open </v-icon>
    <router-link :to="{ name: 'main' }" class="film_router__link">
      <span class="header_logo__title">Films</span>
    </router-link>
    <v-spacer> </v-spacer>
    <AuthModal />
  </v-app-bar>
</template>
<script>
import AuthModal from "../pages/AuthModal.vue";
export default {
  components: {
    AuthModal,
  },
};
</script>
<style lang="scss" scoped></style>

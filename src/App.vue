<template>
  <v-app>
    <HeaderProject />
    <v-main>
      <router-view></router-view>
    </v-main>
    <FooterProject />
  </v-app>
</template>

<script>
import HeaderProject from "./components/HeaderProject";
import FooterProject from "./components/FooterProject";
export default {
  name: "App",

  components: {
    HeaderProject,
    FooterProject,
  },

  data: () => ({
    //
  }),
};
</script>
<style lang="scss">
body {
  font-family: "Josefin Sans", sans-serif !important;
}
</style>

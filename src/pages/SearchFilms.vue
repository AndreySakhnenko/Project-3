<template>
  <div class="search_films">
    <input
      v-show="isActive"
      id="header_search"
      type="text"
      placeholder="Search..."
      v-model="searchValue"
      @keyup.enter="search"
    />
    <label for="header_search" @click="isActiveSearch">
      <v-icon>mdi-magnify</v-icon>
    </label>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchFilms: [],
      searchValue: "",
      isActive: false,
    };
  },
  methods: {
    isActiveSearch() {
      this.isActive = !this.isActive;
    },
    search() {
      this.$router.push({
        name: "search",
        params: { value: this.searchValue },
      });
      this.$emit("searchCuery", this.searchValue);
      console.log(this.searchValue);
    },
  },
  mounted() {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=696623e29220dc4a7e31633c86f0dd0d&query=${this.searchValue}`
    )
      .then((data) => data.json())
      .then((data) => (this.searchFilms = data.results))
      .catch((e) => console.log(e.message));
  },
};
</script>
<style lang="scss" scoped></style>

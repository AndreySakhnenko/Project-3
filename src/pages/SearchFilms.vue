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
    <v-icon @click="isActiveSearch">mdi-magnify</v-icon>
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
<style scoped>
#header_search {
  display: block;
  border: none;
  border-bottom: 2px solid #ffd700;
  padding: 5px 10px;
  color: #ffd700;
  outline: none;
}
.search_btn {
  padding: 10px;
  border: none;
  color: #ffd700;
  font-size: 20px;
}
.search_films {
  display: flex;
  align-items: center;
  margin-left: auto;
  padding: 0 10px;
  align-content: center;
}
.v-icon {
  color: #ffd700;
}
@media (max-width: 600px) {
  .v-icon {
    display: block;
  }
  /* #header_search {
    display: none;
  } */
}
</style>

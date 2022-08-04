<template>
  <v-container class="container">
    <v-card>
      <v-tabs>
        <v-tab class="name_filter">searched films </v-tab>
        <SearchFilms @searchCuery="searchCuery" />
        <v-tab-item v-for="n in 1" :key="n">
          <v-container class="container" v-if="n == 1">
            <v-row class="rows_container" v-if="searchFilms.length">
              <div
                class="card_container"
                v-for="search in searchFilms"
                :key="search.id"
              >
                <router-link
                  class="film_router__link card"
                  :to="{ name: 'film', params: { id: search.id } }"
                >
                  <div class="card_img">
                    <img
                      v-if="search.poster_path"
                      :src="ima(search.poster_path)"
                    />
                    <img
                      v-else
                      src="../img/default.jpg"
                      alt="default"
                      height="295"
                    />
                  </div>
                  <h3 class="card_title">{{ search.title }}</h3>
                  <span>Рейтинг фільма: {{ search.vote_average || 8 }}</span>
                  <span>{{ search.release_date }}</span>
                </router-link>
              </div>
            </v-row>
          </v-container>
        </v-tab-item>
      </v-tabs>
    </v-card>
  </v-container>
</template>

<script>
import SearchFilms from "../pages/SearchFilms";
export default {
  components: {
    SearchFilms,
  },
  data() {
    return {
      searchFilms: [],
      imagess: "https://image.tmdb.org/t/p/w300",
    };
  },
  methods: {
    ima(id) {
      return this.imagess + id;
    },
    getSearchedFilms(query) {
      fetch(
        `https://api.themoviedb.org/3/search/movie/?api_key=696623e29220dc4a7e31633c86f0dd0d&query=${query}`
      )
        .then((data) => data.json())
        .then((data) => (this.searchFilms = data.results))
        .catch((e) => console.log(e.message));
    },
    searchCuery(value) {
      this.getSearchedFilms(value);
    },
    show() {
      console.log(this.searchFilms);
      console.log(this.$route.params.value);
    },
  },
  mounted() {
    this.getSearchedFilms(this.$route.params.value);
  },
};
</script>

<style scoped></style>

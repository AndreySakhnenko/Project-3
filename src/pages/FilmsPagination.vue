<template>
  <div class="text-center">
    <v-container>
      <v-row justify="center">
        <v-col cols="8">
          <v-container class="max-width">
            <v-pagination
              class="pagination"
              @click="nextPage($event)"
              @change="nextPage($event)"
              v-model="page"
              circle
              :total-visible="7"
              :length="15"
            ></v-pagination>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  props: {
    tabs: {
      type: Array,
    },
    defPage: {
      type: Boolean,
    },
  },
  data() {
    return {
      page: 1,
      pagesFilms: [],
      tabsSettings: [
        {
          name: "New",
          apiUrl:
            "https://api.themoviedb.org/3/movie/upcoming?api_key=696623e29220dc4a7e31633c86f0dd0d&page=",
        },
        {
          name: "Popularity",
          apiUrl:
            "https://api.themoviedb.org/3/movie/popular?api_key=696623e29220dc4a7e31633c86f0dd0d&page=",
        },
        {
          name: "Ruiting",
          apiUrl:
            "https://api.themoviedb.org/3/movie/top_rated?api_key=696623e29220dc4a7e31633c86f0dd0d&language=en&page=",
        },
      ],
    };
  },
  methods: {
    nextPage(event) {
      console.log(this.tabs);
      console.log(event.target);
    },
    getFilm(url, page) {
      fetch(`${url}${page}`)
        .then((data) => data.json())
        .then((data) => this.$emit("pageData", data.results))
        .catch((e) => console.log(e.message));
    },
  },
  watch: {
    defPage: function () {
      this.page = 1;
    },
    page: function (page) {
      this.tabs.forEach((el, index) => {
        if (el.name == "New" && el.isActive) {
          this.getFilm(this.tabsSettings[0].apiUrl, page);
        } else if (el.name == "Popularity" && el.isActive) {
          this.getFilm(this.tabsSettings[1].apiUrl, page);
        } else if (el.name == "Ruiting" && el.isActive) {
          this.getFilm(this.tabsSettings[2].apiUrl, page);
        }
      });
    },
  },
};
</script>

<style>
/* @import "../assets/styles/style-pages/pagination.scss"; */
</style>
